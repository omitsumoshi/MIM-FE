import axios from "axios";

const CustomerRow = (props) => {
      const customer = props.customer;

      return ( <tr key={customer._id}>
                <th scope='row'>{customer.name}</th>
                <th scope='row'>{customer.tier}</th>
                <th scope='row'>{customer.representative.name}</th>
                <th scope='row'>{customer.representative.contact}</th>
                <th scope='row'>{customer.country}</th>
                <th scope='row'>{customer.zone}</th>
                <th scope='row'><a href={"/customers/edit/"+customer._id}><button>Edit Customer</button></a><button user_id={customer._id} onClick={props.delete}>Delete Customer</button></th>
            </tr>)
         
}


export default CustomerRow