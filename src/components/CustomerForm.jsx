import { useEffect, useState } from 'react';
const CustomerForm = (props) => {

    const [name, setName] = useState('')
    const [tier, setTier] = useState('')
    const [rName, setRName] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [zone, setZone] = useState('')

    const [errors, setErrors] = useState([])

    const customer = {
        name: name,
        tier: tier,
        representative: {
            name: rName,
            contact: phone
        },
        location: {
            country: country,
            zone: zone
        }
    }

    const validateForm = (e) => {
        e.preventDefault();

        let errorsValidate = [];

        if (!name || name.trim() === '') {
            errorsValidate.push("Enter the Customer's name")
        }

        if (!tier || tier.trim() === '') {
            errorsValidate.push("Enter Customer's tier")
        }

        if (!rName || rName.trim() === '') {
            errorsValidate.push("Enter Customer's Representative name")
        }

        if (!phone || phone.trim() === '') {
            errorsValidate.push("Enters Customer's representative number")
        }

        if (!country || country.trim() === '') {
            errorsValidate.push("Enter Customer's country")
        }

        if (!zone || zone.trim() === '') {
            errorsValidate.push("Enter Customer's zone")
        }

        if (errorsValidate.length > 0) {
            setErrors(
                errorsValidate.map((errorTxt, index) => {
                    return
                    <li key={index}>{errorTxt}</li>
                })
            )
            return false
        }
    }

    const resetForm = () => {
        setName('')
        setTier('')
        setRName('')
        setPhone('')
        setCountry('')
        setZone('')
        setErrors([])
    }

    useEffect(() => {
        if (props.customer) {
            setName(props.customer.name)
            setTier(props.customer.tier)
            setRName(props.customer.representative.name)
            setPhone(props.customer.representative.contact)
            setCountry(props.customer.location.country)
            setZone(props.customer.location.zone)
        }
    },[])


    return (

        <form onSubmit={validateForm}>
            <div className="formWrapper">
                <label htmlFor="name">Customer's name</label>
                <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />

                <label htmlFor="tier">Customer's tier</label>
                <input type="number" name="" id="tier" value={tier} onChange={(e) => { setTier(e.target.value) }} />

                <label htmlFor="rName">Representative's name</label>
                <input type="text" id="rName" value={rName} onChange={(e) => { setRName(e.target.value) }} />

                <label htmlFor="phone">Representative's phone number</label>
                <input type="text" id="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />

                <label htmlFor="country">Country</label>
                <input type="text" id="country" value={country} onChange={(e) => { setCountry(e.target.value) }} />

                <label htmlFor="zone">Country's zone</label>
                <input type="text" id="zone" value={zone} onChange={(e) => { setZone(e.target.value) }} />

                <button type='submit' onClick={() => { props.action((customer)) }}>Create Customer</button>
            </div>
        </form>
    )

}

export default CustomerForm