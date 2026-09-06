import CustomerForm from "../../components/CustomerForm";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const EditCustomer = (props) => {
    let { id } = useParams();

    const [customer, setCustomer] = useState([])

    const editCustomer = (customer) => {
        axios
            .patch("http://localhost:8080/customer/update", customer)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Request completed");
            });

    }
    const listCustomer = () => {
        axios.get("http://localhost:8080/customer/getOne?id=" + id)
            .then((response) => {
                setCustomer(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
            });
    }

    useEffect(() => {
        listCustomer()
    }, [])



    return (
        <CustomerForm action={editCustomer} customer={customer} />
    )

}

export default EditCustomer