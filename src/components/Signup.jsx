import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate()
    const [credentials, setcredentials] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password })
        })

        if (!response.ok) {
            console.log("error sending request")
        }
        else{
            const data = await response.json()
            localStorage.setItem("token", data.authToken)
            navigate("/")
        }
    }

    const onchange = (e) => {
        setcredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">name</label>
                        <input type="text" name='name' onChange={onchange} className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' onChange={onchange} className="form-control" id="exampleInputEmail1" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' onChange={onchange} minLength={5} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
