import { useNavigate } from 'react-router';
import IncidentForm from '../../components/IncidentForm'
import axios from 'axios';

const CreateIncident = () => {
    const navigate = useNavigate();

    const createIncident = (incident) => {

        axios
            .post("http://localhost:8080/incident/create", incident)
            .then((response) => {
                console.log(response.data);
                navigate("/incidents");
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