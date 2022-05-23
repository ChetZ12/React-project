import React from 'react'
import Validation from "./Validation"
import './styles/SignUpComponent.scss'
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="signup-container">
            <div className="titletext">
                <h1>Create an account</h1>
            </div>
            <div className="input-box">
                <label htmlFor="email">Your email address</label>
                <Validation type="email" name="email" id="email"/>


                <label htmlFor="password">Your password</label>
                <Validation type="password" name="password" id="password"/>


                <label htmlFor="fullname">Your full name</label>
                <Validation type="text" name="Name" id="name"/>


                <label htmlFor="mobile">Your phone number</label>
                <input type="text" name="mob" className= "mob"/>


                <input type="checkbox" name="agree" id="agree" defaultChecked />
                <label htmlFor="agree">I read and agree Terms and Conditions</label>

                <Link to="/randombarchart" className="page-button">
                    <button className="create-button">
                        Create Account
                    </button>
                </Link>

            </div>
        </div >
    )
}
export default Signup;