import axios from "axios";
import { useState, useEffect } from "react";

const EditIncident = () => {
    const [incident, setIncident] = useState(null)

     const getIncident = () => {
        axios.get("http://localhost:8080/incident/" + id)
            .then((response) => {
                setCustomer(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
            });
    }

    const editIncident = (incident) => {
        axios
            .patch("http://localhost:8080/incident/update", incident)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Request completed");
            });

    return(
        <div></div>
    )
}
}

export default EditIncident