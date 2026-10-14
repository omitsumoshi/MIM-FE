import TeamsForm from "../../components/TeamsForm";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const EditTeams = (props) => {
    let { id } = useParams();

    const [team, setTeam] = useState(null)

    const editTeam = (team) => {
        axios
            .patch("http://localhost:8080/teams/update/" + id, team)
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
    const getTeam = () => {
        axios.get("http://localhost:8080/teams/" + id)
            .then((response) => {
                setTeam(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
            });
    }

    useEffect(() => {
        getTeam()
    }, [])



    return (
        <TeamsForm action={editTeam} team={team} actionName="Update Team" />
    )

}

export default EditTeams