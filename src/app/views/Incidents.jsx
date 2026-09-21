import { useState, useEffect } from "react";
import axios from "axios";
import "./Incidents.css";
import { NavLink } from "react-router";

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

    const deleteIncident = (id) => {
        if (window.confirm("Delete the Incident?")) {
            axios
                .delete(
                    "http://localhost:8080/incident/delete?id=" + id
                )
                .then(() => {
                    listIncidents();
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

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
                        <div className="boxInfo">
                            Customer: {customer?.name}
                        </div>

                        <div className="boxInfo">
                            Country: {incident.country}
                        </div>

                        <div className="boxInfo">
                            Zone: {incident.zone}
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
                            Status: {incident.status}
                        </div>

                        <NavLink
                            to={"/incident/edit/" + incident._id}
                        >
                            Edit Incident
                        </NavLink>

                        <button
                            className="btn"
                            onClick={() =>
                                deleteIncident(incident._id)
                            }
                        >
                            Delete incident
                        </button>
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

            <div className="col">
                <div className="statusBox">Open</div>
                {renderIncidents("open")}
            </div>

            <div className="col">
                <div className="statusBox">Assigned</div>
                {renderIncidents("assigned")}
            </div>

            <div className="col">
                <div className="statusBox">Pending</div>
                {renderIncidents("pending")}
            </div>

            <div className="col">
                <div className="statusBox">Closed</div>
                {renderIncidents("closed")}
            </div>

        </div>
    );
};

export default Incidents;