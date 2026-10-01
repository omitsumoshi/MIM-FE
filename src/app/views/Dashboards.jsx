import IncidentsbyStatus from "../../components/IncidentsByStatus"
import IncidentsbyCustomer from "../../components/IncidentsByCustomer"
import './Dashboards.css'

const Dashboards = () => {

    return (
        <div>
        <div className="dataSet">
        <IncidentsbyStatus />
        </div>
        <div className="dataSet">
        <IncidentsbyCustomer />
        </div>
        </div>
    )
}

export default Dashboards