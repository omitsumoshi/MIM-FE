import { useState, useEffect } from "react";
import axios from "axios";
import "./Incidents.css";
import { NavLink } from "react-router"
import openImg from '../../icons/open.gif'
import assignImg from '../../icons/assigned.gif'
import pendingImg from '../../icons/pending.gif'
import doneImg from '../../icons/done.gif'
import customer1 from '../../icons/customer1.svg'

const Incidents = () => {
    const [incidents, setIncidents] = useState([]);
    const [customers, setCustomers] = useState([]);

    const listIncidents = () => {
        axios
            .get("http://localhost:8080/incident")
            .then((response) => {
                setIncidents(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };


    const listCustomers = () => {
        axios
            .get("http://localhost:8080/customer")
            .then((response) => {
                setCustomers(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const editIncident = (id, status) => {
        const statusPayload = { "status": status };
        axios
            .patch("http://localhost:8080/incident/update/" + id, statusPayload)
            .then((response) => {
                console.log("Updated incident", response.data);
            })
            .catch((error) => {
                console.error("Update failed", error);
                return false
            })
            .finally(() => {
                listIncidents();
            });
    }

    const renderIncidents = (status) => {
        return incidents
            .filter((incident) => incident.status === status)
            .map((incident) => {

                const customer = customers.find(
                    (customer) => customer._id === incident.customer
                );

                return (
                    <div
                        className="incidentBox"
                        key={incident._id}
                    >
                        <div className="boxInfoCustomer">
                            <div className="boxInfoName">
                                <img src={customer1} alt="customer" />{customer?.name}
                            </div>

                        </div>

                        <div className="boxInfo">
                            Country: {incident.country}, {incident.zone}
                        </div>

                        <div className="boxInfo">
                            Services: {incident.services}
                        </div>

                        <div className="boxInfo">
                            Teams: {incident.teams}
                        </div>

                        <div className="boxInfo">
                            Controller: {incident.controller}
                        </div>

                        <div className="boxInfo">
                            <select name="status" id="status" value={incident.status} onChange={(e) => editIncident(incident._id, e.target.value)}>
                                <option value="open">Open</option>
                                <option value="assigned">Assigned</option>
                                <option value="pending">Pending</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>
                        <div className="boxIncidentNav">
                            <NavLink className="btn" to={"/incident/" + incident._id}>View</NavLink>
                            <div className="boxInfoTier">
                                T {customer?.tier}
                            </div>
                        </div>



                        {/* <div className="buttonWrapper">
                            <NavLink
                                to={"/incident/edit/" + incident._id}
                            >
                                Edit
                            </NavLink>

                            <button
                                className="btn"
                                onClick={() =>
                                    deleteIncident(incident._id)
                                }
                            >
                                Delete
                            </button>
                              <div className="boxInfoTier">
                                T {customer?.tier}
                            </div>

                        </div> */}
                    </div>
                );
            });
    };

    useEffect(() => {
        listIncidents();
        listCustomers();
    }, []);

    return (
        <div className="tableWrapper">

            <div className="col open">
                <div className="statusBox statusOpen"><img src={openImg} alt="open" /><p>Open</p></div>
                {renderIncidents("open")}
            </div>

            <div className="col assigned">
                <div className="statusBox statusAssigned"><img src={assignImg} alt="assign" /><p>Assigned</p></div>
                {renderIncidents("assigned")}
            </div>

            <div className="col pending">
                <div className="statusBox statusPending"><img src={pendingImg} alt="pending" /><p>Pending</p></div>
                {renderIncidents("pending")}
            </div>

            <div className="col closed">
                <div className="statusBox statusClosed"><img src={doneImg} alt="done" /><p>Closed</p></div>
                {renderIncidents("closed")}
            </div>

        </div>
    );
};

export default Incidents;