import IncidentForm from '../../components/IncidentForm'
import axios from 'axios';

const CreateIncident = () => {


    const createIncident = (incident) => {
    axios
    .post("http://localhost:8080/incident/create", incident)
     .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Request completed");
            });
    }
 


    return (
        <IncidentForm action={createIncident} actionName="Create incident" />
    )
}

export default CreateIncident