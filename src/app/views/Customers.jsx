import { useEffect, useState } from 'react'
import './Customers.css'
import axios from "axios"
import CustomerRow from '../../components/CustomerRow'
import './Customers.css'

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
        <div className='tableWrapper'>
            <table>
                <caption className='caption'>Customers list</caption>
                <thead>
                    <tr>
                        <th scope='col'><p>Customer</p></th>
                        <th scope='col'><p>Tier</p></th>
                        <th scope='col'><p>Representative</p></th>
                        <th scope='col'><p>Representative's contact</p></th>
                        <th scope='col'><p>Country</p></th>
                        <th scope='col'><p>Zone</p></th>
                        <th scope='col'><p>Action</p></th>
                    </tr>
                </thead>

                <tbody>
                    {listCustomer}
                </tbody>
            </table>
        </div>
    )
}

export default Customers