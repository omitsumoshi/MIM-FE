import { useEffect, useState } from 'react'
import './Customers.css'
import axios from "axios"

const Customers = () => {

    const [customers, setCustomers] = useState([])

    const listCustomers = () => {
        axios
        .get("http://localhost:8080/customer")
        .then((response)=>{
            setCustomers(response.data)
            console.log(response)
        })
        .catch((err)=>{
            console.error(err)
        })
    }

       useEffect(()=>{
        listCustomers()
    },[])

    const listCustomer = customers.map((customer)=>{
        <tr>
                <th scope='row'>{customer.name}</th>
                <th scope='row'>{customer.tier}</th>
                <th scope='row'>{customer.representative.name}</th>
                <th scope='row'>{customer.representative.contact}</th>
                <th scope='row'>{customer.country}</th>
                <th scope='row'>{customer.zone}</th>
                <th scope='row'><button>Delete Customer</button></th>
            </tr>
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