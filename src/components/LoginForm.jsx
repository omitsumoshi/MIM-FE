import { useEffect, useState } from "react";
import "./IncidentForm.css";
import axios from "axios";
import { Navigate, NavLink } from "react-router";


const LoginForm = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const user = {
        username: userName,
        password: password,
        email: email
    }

    const createUser = () => {
        axios
        .post("http://localhost:8080/user/create",user)
        .then((response)=>{
            console.log(response.data)
            Navigate('/incidents')
        })
        .catch((err)=>{
            console.error(err)
        })
    }



    return(
        <div className="">
        <form onSubmit={createUser}>
             <div className="formWrapper">
            <label htmlFor="userName">Username</label>
            <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>

            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

            <label htmlFor="email">Email address</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

            <button className="btn">Create an account</button>
            </div>

        </form>
        <p>Already have an account? </p>  <NavLink to="/login" className="link">Login</NavLink>
        </div>
    )
}

export default LoginForm