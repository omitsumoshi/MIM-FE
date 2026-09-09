import { useEffect, useState } from 'react'
import './IncidentForm.css'
import axios from 'axios'

const IncidentForm = () => {

    const [customerName, setCustomerName] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState({
        name: '',
        id: ''
    })

    useEffect(() => {
        axios
            .get("http://localhost:8080/customer")
            .then((response) => {
                const listNames = response.data.map((e) => { return {
                    name: e.name,
                    id: e._id
                } })
                setCustomerName(listNames)
                console.log(listNames)
                if (listNames.length > 0) {
                    console.log()
                    setSelectedCustomer(listNames[0])
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Request completed");
            });
    }, [])

    return (
        <form action="">
            <div className="formWrapper">
                <label htmlFor="customer">Customer</label>
                <select name="customer" id="customer"
                    value={selectedCustomer.name}
                    onChange={(e) =>setSelectedCustomer({name: e.target.value, id: e.target.key})}>

                    {customerName.map((name, index) => {
                        return (<option key={name.id} value={name.name}>
                            {name.name}
                        </option>)
                    })}
                </select>

                <label htmlFor="country">Country</label>
                <input type="text" id="country" />

                <label htmlFor="zone">Zone</label>
                <input type="text" id="zone" />

                <label htmlFor="rName">Representative's name</label>
                <input type="text" id="rName" />

                <label htmlFor="rPhone">Representatives's phone number</label>
                <input type="text" id="rName" />

                <label htmlFor="services">Services</label>
                <input type="text" id="services" />

                <label htmlFor="teams">Teams</label>
                <input type="text" id="teams" />

                <label htmlFor="controller">Controller</label>
                <input type="text" id="controller" />
                <button>Create Incident</button>
            </div>
        </form>
    )
}

export default IncidentForm