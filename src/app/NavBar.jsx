import { NavLink } from "react-router"
import './NavBar.css'

const NavBar = () => {

    return(
        <div className="navWrapper">
        <NavLink to="/" className="link">Main Page</NavLink>
         <NavLink to="/incidents" className="link2">Incidents</NavLink>
         <NavLink to="/incidents/create" className="link">Create an Incident</NavLink>
         <NavLink to="/customers" className="link2">Customers</NavLink>
         <NavLink to="/customers/create" className="link">Create a Customer</NavLink>
         <NavLink to="/customers/edit" className="link">Edit a Customer</NavLink>
        </div>

         
    )
}

export default NavBar