import React from 'react';
import '/src/vendor-login.css';

const Login = () => {
    return (
        <>
            <header className="header">
                <div className="vendor-header">
                    <h1>Vendor Market</h1>
                </div>
                <div className="vendor-nav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="/vendors/login">Sign In</a></li>
                        <li><a href="VendorRegister.jsx">Register</a></li>
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

                            <p className="forgot-pass"><a href="">Forgot Password</a></p>
                        </div>
                        <p className="register">Don't have an account? <a href="/VendorRegister.jsx">Register
                            here</a></p>
                        <div className="log-in">
                            <input type="submit" value="Log In"/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;