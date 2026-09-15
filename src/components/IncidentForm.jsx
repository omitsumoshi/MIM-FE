import { useEffect, useState } from "react";
import "./IncidentForm.css";
import axios from "axios";

const IncidentForm = (props) => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [services, setServices] = useState('')
  const [teams, setTeams] = useState('')
  const [controller, setController] = useState('')

 
 const incident = {
    customer: selectedCustomer?._id,
    country: selectedCustomer?.location?.country,
    zone: selectedCustomer?.location?.zone,
    representative: selectedCustomer?.representative?.name,
    phone: selectedCustomer?.representative?.contact,
    services: services,
    teams: teams,
    controller: controller
  }


 const dispatchAction = () => {
        let variable = props.action(incident);
        console.log(variable)
        if (variable) {
            resetForm();
        }
    }

    useEffect(() => {
    axios
      .get("http://localhost:8080/customer")
      .then((response) => {
        console.log(response)
        setCustomers(response.data);
        if (response.data.length > 0) {
            if (props.incident) {
                console.log("asdasd");
              let foundCustomer = response.data.find(c=>c._id === props.incident.customer);
              setSelectedCustomer(foundCustomer);  
            } else {
            setSelectedCustomer(response.data[0]);
            }
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Request completed");
      });

      if(props.incident) {
        setServices(props.incident.services)
        setTeams(props.incident.teams)
        setController(props.incident.controller)

      }
  }, [props.incident]);

  return (
    <form action="">
      <div className="formWrapper">
        <label htmlFor="customer">Customer</label>
        <select
          name="customer"
          id="customer"
          value={selectedCustomer?._id}
          onChange={(e) =>{
            const currentSelectedCustomer = customers.find(c=>c._id === e.target.value)
            setSelectedCustomer(currentSelectedCustomer)
          }}
        >
          {customers.map((name) => {
            return (
              <option key={name._id} value={name._id}>
                {name.name}
              </option>
            );
          })}
        </select>

        <label htmlFor="country">Country</label>
        <input type="text" id="country" value={selectedCustomer?.location?.country} disabled/>

        <label htmlFor="zone">Zone</label>
        <input type="text" id="zone" value={selectedCustomer?.location?.zone}/>

        <label htmlFor="rName">Representative's name</label>
        <input type="text" id="rName" value={selectedCustomer?.representative?.name}/>

        <label htmlFor="rPhone">Representatives's phone number</label>
        <input type="text" id="rName" value={selectedCustomer?.representative?.contact} />

        <label htmlFor="services">Services</label>
        <input type="text" id="services" value={services} onChange={(e)=>{setServices(e.target.value)}}/>

        <label htmlFor="teams">Teams</label>
        <input type="text" id="teams" value={teams} onChange={(e)=>{setTeams(e.target.value)}} />

        <label htmlFor="controller">Controller</label>
        <input type="text" id="controller" value={controller} onChange={(e)=>{setController(e.target.value)}} />
        <button onClick={dispatchAction}>{props.actionName}</button>
      </div>
    </form>
  )

}
export default IncidentForm;