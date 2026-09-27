import { useState, useEffect } from "react";
import axios from "axios";
import "./Incidents.css";
import { NavLink } from "react-router"
import openImg from '../../icons/open.gif'
import assignImg from '../../icons/assigned.gif'
import pendingImg from '../../icons/pending.gif'
import doneImg from '../../icons/done.gif'
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

import IncidentColumn from "../../components/IncidentColumn";

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

    useEffect(() => {
        listIncidents();
        listCustomers();
        return monitorForElements({

            onDrop({ source, location }) {

                const destination =
                    location.current.dropTargets[0];

                if (!destination) {
                    return;
                }

                const incidentId =
                    source.data.incidentId;

                const newStatus =
                    destination.data.status;

                if (
                    typeof incidentId !== "string" ||
                    typeof newStatus !== "string"
                ) {
                    return;
                }

                const incident = incidents.find(
                    (incident) =>
                        incident._id === incidentId
                );

                if (!incident) {
                    return;
                }

                if (incident.status === newStatus) {
                    return;
                }

                editIncident(
                    incidentId,
                    newStatus
                );
            },
        });

    }, [incidents]);

    return (
        <div className="tableWrapper">

            <IncidentColumn
                status="open"
                title="Open"
                icon={openImg}
                incidents={incidents}
                customers={customers}
                editIncident={editIncident} />

            <IncidentColumn
                status="assigned"
                title="Assigned"
                icon={assignImg}
                incidents={incidents}
                customers={customers}
                editIncident={editIncident} />

            <IncidentColumn
                status="pending"
                title="Pending"
                icon={pendingImg}
                incidents={incidents}
                customers={customers}
                editIncident={editIncident} />

            <IncidentColumn
                status="closed"
                title="Closed"
                icon={doneImg}
                incidents={incidents}
                customers={customers}
                editIncident={editIncident} />

        </div>
    );
};

export default Incidents;