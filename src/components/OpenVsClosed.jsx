import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios'

ChartJS.register(ArcElement, Tooltip, Legend);

const OpenVsClosed = (props) => {

    const [data, setData] = useState({
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [],
            borderColor: [
            ],
            borderWidth: 1,
        }],

    })

    const openVsClosed = () => {
        axios
            .get("http://localhost:8080/dashboard/incidents-by-status")
            .then((response) => {
                const isOpenOrClosed = (l) => {
                    if (l._id === 'open') {
                        return true
                    }
                    if (l._id === 'closed') {
                        return true
                    }
                    else {
                        return false
                    }
                }
                let filteredArray = response.data.filter(isOpenOrClosed)
                let labels = filteredArray.map(id => { return id._id })
                let dataArray = filteredArray.map(data => { return data.incidentCount })


                const data = {
                    labels,
                    datasets: [{
                        data: dataArray,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    }
                    ],
                };

                setData(data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        openVsClosed()
    }, [])

    return (
        <Doughnut data={data} />)
}

export default OpenVsClosed