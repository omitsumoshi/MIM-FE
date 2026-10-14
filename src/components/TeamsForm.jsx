import { useEffect, useState } from 'react';

const teamsForm = (props) => {

    const [name, setName] = useState('')
    const [services, setServices] = useState('')
    const [teamLead, setTeamLead] = useState('')
    const [members, setMembers] = useState([])
    const [errors, setErrors] = useState([])

     const team = {
        name: name,
        services: services,
        teamLead: teamLead,
        members: members
    }

    const validateForm = (e) => {
        e.preventDefault();

        let errorsValidate = [];

        if (!name || name.trim() === '') {
            errorsValidate.push("Enter the Team's name")
        }

        if (!services || services.trim() === '') {
            errorsValidate.push("Enter the Team's services")
        }

        if (!members || members.trim() === '') {
            errorsValidate.push("Enter Team's members")
        }

        if (errorsValidate.length > 0) {
            setErrors(
                errorsValidate.map((errorTxt, index) => {
                    return
                    <li key={index}>{errorTxt}</li>
                })
            )
            return false
        }
    }
    const dispatchAction = () => {
        let variable = props.action(team);
        console.log(variable)
        if (variable) {
            resetForm();
        }
    }
     const resetForm = () => {
        setName('')
        setServices('')
        setTeamLead('')
        setMembers([])
        setErrors([])
    }
    return (
     <form onSubmit={validateForm}>
            <div className="formWrapper">
                <label htmlFor="name">Team's name</label>
                <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />

                <label htmlFor="services">Team's services</label>
                <input type="text" id="services" value={services} onChange={(e) => { setServices(e.target.value) }} />

                <label htmlFor="teamLead">Team Lead</label>
                <input type="text" id="teamLead" value={teamLead} onChange={(e) => { setTeamLead(e.target.value) }} />

                <label htmlFor="members">Members</label>
                <input type="text" id="members" value={members} onChange={(e) => { setMembers(e.target.value) }} />

                <button type='submit' onClick={dispatchAction}>{props.actionName}</button>
            </div>
        </form>

    )
}

export default teamsForm