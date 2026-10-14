import { useEffect, useState } from "react";
import "./IncidentForm.css";
import axios from "axios";
import { Navigate, NavLink } from "react-router";


const LoginForm2 = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userToken, setUserToken] = useState("")

    const user = {
        email: email,
        password: password
    }

const loginUser = (e) => {
    e.preventDefault()
    axios
    .post("http://localhost:8080/user/login",user)
    .then((res)=>{
        setUserToken(res.data.jwt)
        localStorage.setItem('userToken', res.data.jwt )
    })
    .catch((err)=>{
        console.error(err)
    })
}



    return(
        <div className="">
        <form onSubmit={loginUser}>
             <div className="formWrapper">
            <label htmlFor="userName">User email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

            <button className="btn">Login</button>
            </div>

        </form>
        <p>Don't have an account? </p>  <NavLink to="/signup" className="link">Signup</NavLink>
        </div>
    )
}

export default LoginForm2