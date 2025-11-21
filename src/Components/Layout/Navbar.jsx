import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

export default function Navbar() {
    const onlinestatus = useOnlineStatus();

    return (
        <>
            <nav className="navbar navbar-expand bg-dark">
                <div className="container-fluid d-flex justify-content-between align-items-center">

                    <Link to="/" className="navbar-brand text-white">
                        MyShopping Site
                    </Link>

                    <ul className="navbar-nav ms-auto mb-2 d-flex flex-column flex-md-row align-items-md-center">

                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-white">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/productsList" className="nav-link text-white">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link text-white">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link text-white">
                                Status: {onlinestatus ? "🟢" : "🔴"}
                            </span>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    );
}
