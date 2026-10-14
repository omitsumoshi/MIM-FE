import { NavLink } from "react-router"
import IncidentsbyStatus from "../../components/IncidentsByStatus"
import TeamsImg from '../../icons/team.png'
import TeamsPerformanceImg from '../../icons/teamPerformance.png'
import OverviewImg from '../../icons/overview.png'
import IncidentsbyCustomer from "../../components/IncidentsByCustomer"
import ResponsabilityImg from '../../icons/responsability.png'
import ReliabilityImg from '../../icons/reliability.png'
import './Dashboards.css'
import axios from "axios"
import { useState, useEffect } from "react"
import OpenVsClosed from '../../components/OpenVsClosed';
import { Doughnut } from 'react-chartjs-2';

const Dashboards = (props) => {

    const [count, setCount] = useState("")
    const [openCount, setOpenCount] = useState("")
    const [unresolvedIncidents, setUnresolvedIncidents] = useState("")

const incidentsCount = () => {
    axios
    .get("http://localhost:8080/dashboard/incidents-count")
    .then((response) => {
        setCount(response.data)
        
    })
    .catch((err) =>{
        console.error(err)
    })
}

const openIncidentsCount = () => {
    axios
    .get("http://localhost:8080/dashboard/open-incidents-count")
    .then((response) => {
        setOpenCount(response.data)
        
    })
    .catch((err) =>{
        console.error(err)
    })
}

const currentlyUnresolved = () => {
    axios
    .get("http://localhost:8080/dashboard/currently-unresolved")
    .then((response)=>{
        setUnresolvedIncidents(response.data)
    })
    .catch((err)=>{
        console.error(err)
    })
}

useEffect(()=>{
    incidentsCount()
    openIncidentsCount()
    currentlyUnresolved()
}, [])

    return (
        <div className="dashboardWrapper">
            <div className="navWrapperDashboard">
                <div className="linkWrapperDashboard">
                    <img src={OverviewImg} alt="Overview" /><NavLink to="/dashboards" className="link">Executive overview</NavLink>
                </div>
                <div className="linkWrapperDashboard">
                  
                      <img src={TeamsPerformanceImg} alt="Teams Performance" /><NavLink to="/dashboards" className="link">Team Performance</NavLink>
                </div>
              
                <div className="linkWrapperDashboard">
                    <img src={ResponsabilityImg} alt="Responsibility" /><NavLink to="/dashboards" className="link">Incident Response</NavLink>
                </div>
                <div className="linkWrapperDashboard">
                    <img src={ReliabilityImg} alt="Reliability" /><NavLink to="/dashboards" className="link">Service Reliability</NavLink>
                </div>
            </div>
            <div className="dataSets">
                 <div className="dataSetSummary">
                    <div className="box1">
                    <div className="titleWrapper">
                    <p>Incident overview</p>
                    <p>Analytics dashboard for Incident Management</p>
                    </div>
                    <div className="summaryDataWrapper">
                    <div className="summaryStats"><p>Total incidents: <span>{count.count}</span> </p> </div>
                    <div className="summaryStats"><p>Open incidents: <span>{openCount.count}</span></p></div>
                    <div className="summaryStats"><p>Currently unresolved: <span>{unresolvedIncidents.count}</span></p></div>
                    </div>
                    </div>
                    <div className="box2"> <p>Open vs. Closed Incidents</p>
                    <div className="openVsClosed"><OpenVsClosed /></div></div>

                </div>
                <div className="dataSet">
                    <IncidentsbyStatus />
                </div>
                <div className="dataSet2">
                    <IncidentsbyCustomer />
               </div>
            </div>
        </div>
    )
}

export default Dashboards