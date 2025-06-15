import React from 'react';
import '/src/css/pages/vendor-login.css';
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import App from "../App.jsx";
import VendorRegister from "./VendorRegister.jsx";

const Login = () => {
    return (
        <>
            <header className="header">
                <div className="vendor-header">
                    <h1>Vendor Market</h1>
                </div>
                <div className="vendor-nav">
                    <ul>
                        <li><Link to={App}>Home</Link></li>
                        <li><Link to={Login}>Sign In</Link></li>
                        <li><Link to={VendorRegister}>Register</Link></li>
                    </ul>
                </div>
            </header>

            <section className="login-form">
                <h1>Sign In</h1>
                <div className="login-form-content">
                    <form action="/login" method="POST">
                        <div className="form-row">
                            <label htmlFor="username">Email/Username:</label>
                            <input type="text" id="username" placeholder="Email/Username" name="username" required/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="Password" name="password" required/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" id="remember-me" name="remember-me" value="remember-me"/>
                            <label htmlFor="remember-me">Remember Me</label>

                            <p className="forgot-pass"><Link to={""}>Forgot Password</Link></p>
                        </div>
                        <p className="register">Don't have an account? <Link to={VendorRegister}>Register here</Link></p>
                        <div className="log-in">
                            <input type="submit" value="Log In"/>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Login;