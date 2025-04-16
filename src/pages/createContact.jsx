import { useState } from "react"
import { useNavigate } from "react-router-dom";
import contactServices from "../services/contactServices";


export const CreateContact = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        email: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }


    const handleCancel = () => {
        navigate('/')
    }

    const handleReset = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            phone: '',
            address: '',
            email: ''
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        contactServices.createContact('pepe', formData)
        navigate('/')
    }

    return (
        <div className="container">
            <h2>NEW contact</h2>
            <form onSubmit={handleSubmit} className="form-control">
                <input className="form-control" onChange={handleChange} value={formData.name} placeholder="name" name="name" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.phone} placeholder="phone" name="phone" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.email} placeholder="email" name="email" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.address} placeholder="address" name="address" type="text" />
                <input className="btn btn-primary" type="submit" />
                <input className="btn btn-warning" type="reset" onClick={handleReset} />
                <button className="btn btn-danger" onClick={handleCancel}>cancel</button>
            </form>

        </div>
    )
}