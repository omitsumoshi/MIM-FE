import axios from "axios";
import { useState, useEffect } from "react";
import IncidentForm from "../../components/IncidentForm";
import { useParams } from "react-router";

const EditIncident = () => {

     let { id } = useParams();

    const [incident, setIncident] = useState(null)

     const getIncident = () => {
        axios.get("http://localhost:8080/incident/" + id)
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
            .patch("http://localhost:8080/incident/update", incident)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Request completed");
            });}
  useEffect(() => {
        getIncident()
    }, [])


    return(
        <IncidentForm action={editIncident} incident={incident} actionName="Edit incident"/>
    )
}

export default EditIncident