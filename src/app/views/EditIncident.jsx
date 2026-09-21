import axios from "axios";
import { useState, useEffect } from "react";
import IncidentForm from "../../components/IncidentForm";
import { useParams, useNavigate } from "react-router";

const EditIncident = () => {

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

    const editIncident = (incident) => {
        axios
            .patch("http://localhost:8080/incident/update/" + id, incident)
            .then((response) => {
                console.log("Updated incident", response.data);
                navigate("/incidents");
                return true
            })
            .catch((error) => {
                console.error("Update failed", error);
                return false
            })
            .finally(() => {
                console.log("Request completed");
            });
    }
    useEffect(() => {
        getIncident()
    }, [])


    return (
        <IncidentForm
            action={editIncident}
            incident={incident}
            actionName="Edit incident"
            showStatus={true} />
    )
}

export default EditIncident