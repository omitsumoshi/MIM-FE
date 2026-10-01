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
            <div className="boxDisplay1">

                <div className="boxInfoCard1">
                    {/* {incident.customer} {incident.customer.representative} */}
                </div>
                <div className="boxInfoCard1">
                    <p>{incident.title}</p>
                </div>
            </div>
            <div className="boxDisplay2">
                <div className="boxInfoCard">
                    {/* <p>Tier {customer.tier}</p> */}
                </div>

                <div className="boxInfoCard">
                    <div className="boxInfoCard">
                        <p>{incident.teams}</p>
                    </div>
                    <div className="boxInfoCard">
                        <NavLink className="btn" to={"/incident/" + incident._id}>View</NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IncidentCard