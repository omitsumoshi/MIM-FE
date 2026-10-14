import axios from "axios";
import { NavLink } from 'react-router'

const TeamsRow = (props) => {
    const team = props.team;

    return (<tr key={team._id}>
        <th scope='row'>{team.name}</th>
        <th scope='row'>{team.services}</th>
        <th scope='row'>{team.teamLead}</th>
        <th scope='row'>{team.members.length}</th>
        <th scope='row'><NavLink className="btn" to={"/teams/edit/" + team._id}>Edit Team</NavLink><button team_id={team._id} onClick={props.delete}>Delete Team</button></th>
    </tr>)

}


export default TeamsRow