import { useEffect, useRef, useState } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { NavLink } from "react-router";
import customer1 from '../icons/customer1.svg'
import './IncidentCard.css'

const IncidentCard = ({ incident, customer }) => {

    const ref = useRef(null)
    const [isDragging, setIsDragging] = useState(false)

    useEffect(() => {

        const element = ref.current

        if (!element) {
            return
        }

        return draggable({
            element,

            getInitialData: () => ({
                incidentId: incident._id,
            }),

            onDragStart: () => {
                setIsDragging(true);
            },

            onDrop: () => {
                setIsDragging(false)
            }
        })
    }, [incident._id])

    return (
        <div
            ref={ref}
            className={`incidentBox ${isDragging ? "isDragging" : ""}`}
            key={incident._id}
        >
            <div className="boxInfoSlider">
                <p>{incident.title}</p>
            </div>

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
                <select name="status" id="status" className="statusSelect" value={incident.status} onChange={(e) => editIncident(incident._id, e.target.value)}>
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
        </div>
    )
}

export default IncidentCard