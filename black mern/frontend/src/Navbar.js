import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Dashboard</Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarsExample01">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://blackcoffer.com/">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Information</Link>
                            <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                <li><Link className="dropdown-item" to="https://blackcoffer.com/about-us/">About</Link></li>
                                <li><Link className="dropdown-item" to="https://blackcoffer.com/contact-us/">Contact Us</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
