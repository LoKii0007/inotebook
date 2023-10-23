import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    let location = useLocation('')

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/"?"active" :""} `} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about"?"active" :""} `}  to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" to="/">Action</a></li>
            <li><a className="dropdown-item" to="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>
  )
}

export default Navbar
