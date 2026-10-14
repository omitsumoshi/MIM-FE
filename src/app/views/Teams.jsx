import { useEffect, useState } from 'react'
import './Customers.css'
import axios from "axios"
import TeamsRow from '../../components/TeamsRow'
import './Customers.css'

const Teams = (props) => {

    const [teams, setTeams] = useState([])

    const listTeams = () => {
        axios
            .get("http://localhost:8080/teams")
            .then((response) => {
                setTeams(response.data)
                console.log(response)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        listTeams()
    }, [])

    const deleteTeam = (id, res) => {

        if (window.confirm('Delete the Team?')) {
            axios
                .delete("http://localhost:8080/teams/delete?id=" + id.target.attributes[0].value)
                .then(() => {
                    listTeams()
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }

    const listTeam = teams.map((team) => {
        return (
            <TeamsRow team={team} delete={deleteTeam} key={team._id} />
        )
    })

    return (
        <div className='tableWrapper'>
            <table>
                <caption className='caption'>Teams list</caption>
                <thead>
                    <tr>
                        <th scope='col'><p>Team</p></th>
                        <th scope='col'><p>Services</p></th>
                        <th scope='col'><p>Team Lead</p></th>
                        <th scope='col'><p>Members</p></th>
                    </tr>
                </thead>

                <tbody>
                    {listTeam}
                </tbody>
            </table>
        </div>
    )
}

export default Teams