import { Link, BrowserRouter, Routes, Route, NavLink } from "react-router";
import './Router.css'
import App from "../App"
import Incidents from "./views/Incidents";
import CreateIncident from "./views/CreateIncident";
import Customers from "./views/Customers";
import CreateCustomer from "./views/CreateCustomer";
import EditCustomer from "./views/EditCustomer";
import EditIncident from "./views/EditIncident";
import Incident from "./views/Incident";
import Dashboards from "./views/Dashboards";
import Teams from "./views/Teams";
import CreateTeams from "./views/CreateTeams";
import EditTeams from "./views/EditTeams";
import LoginForm from "../components/LoginForm";
import LoginForm2 from "../components/LoginForm2";

const Router = () => {

    return (

        <Routes>
            <Route path="/" element={<></>} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/incidents" element={<Incidents />} />
            <Route path="/incidents/create" element={<CreateIncident />} />
            <Route path="/incident/edit/:id" element={<EditIncident />} />
            <Route path="/incident/:id" element={<Incident />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/create" element={<CreateCustomer />} />
            <Route path="/customers/edit/:id" element={<EditCustomer />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/create" element={<CreateTeams />} />
            <Route path="/teams/edit/:id" element={<EditTeams />} />
             <Route path="/signup" element={<LoginForm />} />
              <Route path="/login" element={<LoginForm2 />} />
        </Routes>
    )
}

export default Router;