import axios from 'axios'
import './CreateCustomer.css'
import CustomerForm from '../../components/CustomerForm'


const CreateCustomer = (props) => {

    const saveCustomer = (customer) => {
        axios
            .post("http://localhost:8080/customer/create", customer)
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

    return (

       <CustomerForm action={saveCustomer}/ >
    )
}

export default CreateCustomer