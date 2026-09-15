
import { useState, useEffect } from "react"
import axios from 'axios';
import './Incidents.css'
import EditCustomer from "./EditCustomer";
import { NavLink } from "react-router";


const Incidents = () => {
    const [incidents, setIncidents] = useState([])
    const [isDropped, setIsDropped] = useState(false);

    const listIncidents = () => {
        axios
            .get("http://localhost:8080/incident")
            .then((response) => {
                setIncidents(response.data)
                console.log(response)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const incidentBox = incidents.map((e) => {
        return (
            <div className="incidentBox">
                <div className="boxInfo">
                    Customer: {e.customer}
                </div>
                <div className="boxInfo">
                    Country: {e.country}
                </div>
                <div className="boxInfo">
                    Zone: {e.zone}
                </div>
                <div className="boxInfo">
                    Services: {e.services}
                </div>
                <div className="boxInfo">
                    Teams: {e.teams}
                </div>
                <div className="boxInfo">
                    Controller: {e.controller}
                </div>
                <NavLink to={"/incident/edit/"+e._id}>Edit Incident</NavLink>
            </div>
        )
    })


    useEffect(() => {
        listIncidents()
    }, [])


    return (
        <div className="tableWrapper">
            <div className="col">
                <div className="statusBox">New Incidents</div>
                {incidentBox}</div>
            <div className="col">
                <div className="statusBox">Assigned</div>
                {incidentBox}</div>
            <div className="col">
                <div className="statusBox">Pending</div>
                {incidentBox}</div>
            <div className="col">
                <div className="statusBox">Closed</div>
                {incidentBox}</div>
        </div>
    )
}

export default Incidents