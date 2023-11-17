import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const [credentials, setcredentials] = useState({
        email:"",
        password:""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method:"POST", 
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email :credentials.email,password: credentials.password})
        })
        const data = await response.json()
        localStorage.setItem("token", data.authToken)
        console.log(localStorage.getItem("token"))
        navigate("/")
    }

    const onchange = (e) => {
        setcredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' onChange={onchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' onChange={onchange} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
