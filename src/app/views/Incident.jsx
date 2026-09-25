import { NavLink } from "react-router"
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import './Incident.css'

const Incident = () => {

    let { id } = useParams();

    const [incident, setIncident] = useState(null)

    const navigate = useNavigate();

    const getIncident = () => {
        return axios
            .get("http://localhost:8080/incident/" + id)
            .then((response) => {
                setIncident(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
            });
    }

      const deleteIncident = (id) => {
        if (window.confirm("Delete the Incident?")) {
            axios
                .delete(
                    "http://localhost:8080/incident/delete?id=" + id
                )
                .then(() => {
                    navigate('/incidents')
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }).format(new Date(date));
    };

    useEffect(() => {
        getIncident()
    }, [])

    if (!incident) {
        return <p>Loading incident...</p>;
    }
    console.log(incident)

    return (
        <div className="displayWrapper">
            <div className="displayIncident">
                <div className="displayIncidentId">
                    <p>Incident number {incident._id}
                    </p>
                </div>
                <div className="displayIncidentCustomer">
                    <p>
                        Customer: { }
                        Tier: { }
                    </p>
                </div>
                <div className="displayIncidentCountry">
                    <p>
                        Country: {incident.country}, {incident.zone}
                    </p>
                </div>
                <div className="displayIncidentServices">
                    <p>
                        Services: {incident.services}
                    </p>
                </div>
                <div className="displayIncidentTeams">
                    <p>
                        Team: {incident.teams}
                    </p>
                </div>
                <div className="displayIncidentCreated">
                    <p>
                        Created at: {formatDate(incident.createdAt)}
                    </p>
                </div>
                <div className="displayIncidentUpdate">
                    <p>
                        Last update: {formatDate(incident.updatedAt)}
                    </p>
                </div>
            </div>
            <div className="buttonWrapper">
                <NavLink
                    className="btn"
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
            </div>
        </div>
    )

}

export default Incident 