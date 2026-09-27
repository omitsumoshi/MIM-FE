import { useEffect, useRef, useState } from "react";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

import IncidentCard from "./IncidentCard";

const IncidentColumn = ({
    status,
    title,
    icon,
    incidents,
    customers,
    editIncident
}) => {

    const ref = useRef(null)

    const [isDraggedOver, setIsDraggedOver] = useState(false)

    useEffect(() => {

        const element = ref.current

        if (!element) {
            return
        }

        return dropTargetForElements({
            element,

            getData: () => ({
                status: status
            }),
            onDragEnter: () => {
                setIsDraggedOver(true)
            },

            onDragLeave: () => {
                setIsDraggedOver(false)
            },

            onDrop: () => {
                setIsDraggedOver(false)
            }
        })
    }, [status])

    return (
        <div
            ref={ref}
            className={`col ${status} ${isDraggedOver ? "draggedOver" : ""
                }`}
        >

            <div className={`statusBox status${title}`}>
                <img src={icon} alt={title} />
                <p>{title}</p>
            </div>

            {incidents
                .filter(
                    (incident) =>
                        incident.status === status
                )
                .map((incident) => {

                    const customer = customers.find(
                        (customer) =>
                            customer._id === incident.customer
                    );

                    return (
                        <IncidentCard
                            key={incident._id}
                            incident={incident}
                            customer={customer}
                            editIncident={editIncident}
                        />
                    );
                })}

        </div>
    )
}

export default IncidentColumn