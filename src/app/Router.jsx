import { Link, BrowserRouter, Routes, Route, NavLink } from "react-router";
import './Router.css'
import App from "../App"
import Incidents from "./views/Incidents";
import CreateIncident from "./views/CreateIncident";
import Customers from "./views/Customers";
import CreateCustomer from "./views/CreateCustomer";
import EditCustomer from "./views/EditCustomer";

const Router = () => {

    return (

        <Routes>
            <Route path="/" element={<></>} />
            <Route path="/incidents" element={<Incidents />} />
            <Route path="/incidents/create" element={<CreateIncident />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/create" element={<CreateCustomer />} />
            <Route path="/customers/edit" element={<EditCustomer />} />
        </Routes>
    )
}

export default Router;