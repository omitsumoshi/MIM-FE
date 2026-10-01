import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from "axios";
import { useEffect, useState } from "react";

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Number of incidents per Customer',
        },
    },
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const IncidentsbyCustomer = () => {


    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Incidents',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    })


    const getIncidentsByCustomer = () => {
        axios
            .get("http://localhost:8080/dashboard/incidents-by-customer")
            .then((response) => {
                let labels = response.data.map(id => { return id._id })
                let dataArray = response.data.map(data => { return data.incidentCount })
                const data = {
                    labels,
                    datasets: [
                        {
                            label: 'Incidents',
                            data: dataArray,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                    ],
                };

                setData(data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        getIncidentsByCustomer()
    }, [])

    return (
        <Bar options={options} data={data} />
    )
}

export default IncidentsbyCustomer