import React from 'react'
import { Link, useLocation} from 'react-router-dom'

const Navbar = () => {

  let location = useLocation('')
  const token = localStorage.getItem("token")

  const handleLogout = ()=>{
    localStorage.removeItem("token")
    console.log("token removed")
    window.location.reload()
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""} `} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""} `} to="/about">About</Link>
            </li>
          </ul>
          {token?(
            <button className='btn btn-success' onClick={handleLogout}>logout</button>
          ):(
            <div>
            <button className='btn btn-success'><Link style={{color:"white"}} to="/login">login</Link></button>
            <button className='btn btn-success'><Link style={{color:"white"}} to="/signup">signup</Link></button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
