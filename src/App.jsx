import axios from "axios"
import { useState } from 'react'
import NavBar from "./app/NavBar"
import './App.css'

import Router from "./app/Router"
import { NavLink } from "react-router"

function App() {


  return (
    <>
    <NavBar />
     <Router />
    </>
  )
}

export default App
