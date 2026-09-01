import { Link, BrowserRouter, Routes, Route, NavLink } from "react-router";
import './Router.css'
import App from "../App"
import Incidents from "./views/Incidents";
import CreateIncident from "./views/CreateIncident";
import Customers from "./views/Customers";
import CreateCustomer from "./views/CreateCustomer";

const Router = () => {

    return(

    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/incidents" element={<Incidents />} />
       <Route path="/incidents/create" element={<CreateIncident />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/create" element={<CreateCustomer />} />
    </Routes>
    )
}

export default Router;