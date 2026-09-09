import CustomerForm from "../../components/CustomerForm";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const EditCustomer = (props) => {
    let { id } = useParams();

    const [customer, setCustomer] = useState(null)

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
    const getCustomer = () => {
        axios.get("http://localhost:8080/customer/" + id)
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
        getCustomer()
    }, [])



    return (
        <CustomerForm action={editCustomer} customer={customer} actionName="Update Customer" />
    )

}

export default EditCustomer