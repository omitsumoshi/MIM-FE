import { useEffect, useState } from "react";
import "./IncidentForm.css";
import axios from "axios";

const IncidentForm = (props) => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [services, setServices] = useState('')
  const [teams, setTeams] = useState('')
  const [controller, setController] = useState('')
  const [showStatus, SetShowStatus] = useState(false)
  const [status, setStatus] = useState("open")


  const incident = {
    customer: selectedCustomer?._id,
    customerName: selectedCustomer?.name,
    country: selectedCustomer?.location?.country,
    zone: selectedCustomer?.location?.zone,
    representative: selectedCustomer?.representative?.name,
    phone: selectedCustomer?.representative?.contact,
    services: services,
    teams: teams,
    controller: controller,
    status: status
  }


  const dispatchAction = async (e) => {
    e.preventDefault()
      const success = await props.action(incident);

    if (success) {
        resetForm();
    }
};

  const resetForm = () => {
    setServices("");
    setTeams("");
    setController("");
    setStatus("open");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/customer")
      .then((response) => {
        setCustomers(response.data);
        if (response.data.length > 0) {
          if (props.incident) {
            let foundCustomer = response.data.find((c) => { return c._id === props.incident.customer });
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

    if (props.incident) {
      setServices(props.incident.services)
      setTeams(props.incident.teams)
      setController(props.incident.controller)
      setStatus(props.incident.status || "open");

    }
  }, [props.incident]);

  return (
    <form onSubmit={dispatchAction}>
      <div className="formWrapper">
        <label htmlFor="customer">Customer</label>
        <select
          name="customer"
          id="customer"
          value={selectedCustomer?._id}
          onChange={(e) => {
            const currentSelectedCustomer = customers.find(c => c._id === e.target.value)
            setSelectedCustomer(currentSelectedCustomer)
          }}
        >
          {customers.map((customer) => {
            return (
              <option key={customer._id} value={customer._id}>
                {customer.name}
              </option>
            );
          })}
        </select>

        <label htmlFor="country">Country</label>
        <input type="text" id="country" value={selectedCustomer?.location?.country} disabled />

        <label htmlFor="zone">Zone</label>
        <input type="text" id="zone" value={selectedCustomer?.location?.zone} />

        <label htmlFor="rName">Representative's name</label>
        <input type="text" id="rName" value={selectedCustomer?.representative?.name} />

        <label htmlFor="rPhone">Representatives's phone number</label>
        <input type="text" id="rName" value={selectedCustomer?.representative?.contact} />

        <label htmlFor="services">Services</label>
        <input type="text" id="services" value={services} onChange={(e) => { setServices(e.target.value) }} />

        <label htmlFor="teams">Teams</label>
        <input type="text" id="teams" value={teams} onChange={(e) => { setTeams(e.target.value) }} />

        <label htmlFor="controller">Controller</label>
        <input type="text" id="controller" value={controller} onChange={(e) => { setController(e.target.value) }} />

        <select name="status" id="status" hidden={!props.showStatus} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="open">Open</option>
          <option value="assigned">Assigned</option>
          <option value="pending">Pending</option>
          <option value="closed">Closed</option>
        </select>

        <button>{props.actionName}</button>
      </div>
    </form>
  )

}
export default IncidentForm;