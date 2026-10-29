import axios from "axios"
import { useState } from 'react'
import NavBar from "./app/NavBar"
import './App.css'
import Incidents from "./app/views/Incidents"
import IncidentsbyStatus from "./components/IncidentsByStatus"

import Router from "./app/Router"
import { NavLink } from "react-router"

function App() {

  const [user, setUser] = useState(localStorage.getItem('userToken') )

  axios.defaults.headers.common['Authorization'] = "Bearer " + (user ? user : "")

  return (
    <>
      <div className="layoutWrapper">
        <NavBar />
        <Router />
      </div>

    </>
  )
}

export default App
