import axios from 'axios'
import './CreateCustomer.css'
import TeamsForm from '../../components/TeamsForm'



const CreateTeams = (props) => {

    const saveTeam = async (team) => {
        axios
            .post("http://localhost:8080/teams/create", team)
            .then((response) => {
                console.log(response.data);
                // navigate("/teams");
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Request completed");
            });
    }

    return (

        <TeamsForm action={saveTeam} actionName="Create Team" />
    )
}

export default CreateTeams