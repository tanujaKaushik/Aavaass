import React from 'react';
import {Link} from 'react-router-dom';
import './css/SignUp.css';

export default function SignUpPage(){
    return(
        <>
        <div className="cont">
        <img className="hello_img" src="Images/signup.png" alt=""/>

        <div className="forms">
        <input type="checkbox" id="chk" aria-hidden="true"/>
            <div className="signup">
                <form action="">
                    <label className="choice" for="chk" aria-hidden="true">Signup</label>
                    <p>Signup to continue and enjoy all features</p>
                    <input type="text" name="" placeholder="Enter your username" required=""/>
                    <input type="email" name="" placeholder="Enter E-mail" required=""/>
                    <input type="password" name="" placeholder="Enter your password" required=""/>
                    
                    <div className="radio-container">
                        <input type="radio" name="reg_as" id="tenant" value="tenant" checked="checked"/>
                        <label className="radio" for="tenant">Tenant</label>    
                        <input type="radio" name="reg_as" id="landlord" value="landlord"/> 
                        <label className="radio" for="landlord">Landlord</label>
                    </div>

                    <Link to="/dashboard"><button className="btn" type="submit">Signup</button></Link>
                </form>
            </div>

            <div className="login">
                <form>
                    <label className="choice" for="chk" aria-hidden="true">Login</label>
                    <p>Login to continue and enjoy all features</p>
                    <input type="email" name="" placeholder="Enter E-mail"  required=""/>
                    <input type="password" name="" placeholder="Enter your password"  required=""/>
                    <input type="password" name="" placeholder="Re-enter your password"  required=""/>
                    <Link to="/dashboard"><button type="submit" className="btn">Login</button></Link>
                    <p><Link to="/">Forgot Password ?</Link></p>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}