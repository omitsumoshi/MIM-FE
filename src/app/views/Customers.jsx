import { useEffect, useState } from 'react'
import './Customers.css'
import axios from "axios"
import CustomerRow from '../../components/CustomerRow'

const Customers = (props) => {

    const [customers, setCustomers] = useState([])

    const listCustomers = () => {
        axios
            .get("http://localhost:8080/customer")
            .then((response) => {
                setCustomers(response.data)
                console.log(response)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        listCustomers()
    }, [])

    const deleteCustomer = (id, res) => {

        if (window.confirm('Delete the Customer?')) {
            axios
                .delete("http://localhost:8080/customer/delete?id=" + id.target.attributes[0].value)
                .then(() => {
                    listCustomers()
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }

    const listCustomer = customers.map((customer) => {
        return (
            <CustomerRow customer={customer} delete={deleteCustomer} key={customer._id} />
        )
    })

    return (
        <table>
            <caption>Customers list</caption>
            <thead>
                <tr>
                    <th scope='col'>Customer</th>
                    <th scope='col'>Tier</th>
                    <th scope='col'>Representative</th>
                    <th scope='col'>Representative's contact</th>
                    <th scope='col'>Country</th>
                    <th scope='col'>zone</th>
                </tr>
            </thead>

            <tbody>
                {listCustomer}
            </tbody>
        </table>
    )
}

export default Customers