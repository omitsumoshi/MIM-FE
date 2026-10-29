import { NavLink } from "react-router"
import './NavBar.css'
import incidentImg from '../icons/incident.gif'
import dashboardImg from '../icons/dashboard.gif'
import customerImg from '../icons/customer.gif'
import addImg from '../icons/add.gif'
import editImg from '../icons/edit.gif'
import trackerImg from '../icons/tracker.gif'
import TeamsImg from '../icons/team.png'
import LoginImg from '../icons/login.png'

const NavBar = () => {

    return (
        <div className="navWrapperOuter">
        <div className="navWrapper">
            <div className="navHeader">
                <img src={trackerImg} alt="" />
                <p>Incident tracker</p>
            </div>
             <div className="linkWrapper">
                <img src={LoginImg} alt="userProfile" />
                <NavLink to="/myprofile/" className="link">My profile</NavLink>
            </div>
            <div className="linkWrapper">
                <img src={dashboardImg} alt="dashboards" />
                <NavLink to="/dashboards" className="link">Dashboards</NavLink>
            </div>
            <div className="linkWrapper">
                <img src={incidentImg} alt="incidents" />
                <NavLink to="/incidents" className="link2">Incidents</NavLink>
            </div>
            <div className="linkWrapper">
                <img src={addImg} alt="incidents" />
                <NavLink to="/incidents/create" className="link">Create an Incident</NavLink>
            </div>
            <div className="linkWrapper">
                <img src={customerImg} alt="incidents" />
                <NavLink to="/customers" className="link2">Customers</NavLink>
            </div>
            <div className="linkWrapper">
                <img src={addImg} alt="incidents" />
                <NavLink to="/customers/create" className="link">Create a Customer</NavLink>
            </div>
            <div className="linkWrapper">
                <img src={TeamsImg} alt="editTeams" />
                <NavLink to="/teams/create" className="link">Create a Team</NavLink>
            </div>
              <div className="linkWrapper">
                <img src={TeamsImg} alt="Teams" />
                <NavLink to="/teams/" className="link">Teams</NavLink>
            </div>
            <div className="linkWrapper">
                <img src={LoginImg} alt="login" />
                <NavLink to="/signup/" className="link">Sign up</NavLink>
            </div>
           
        </div>
        </div>

    )
}

export default NavBar