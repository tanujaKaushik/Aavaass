import React from 'react';
import './HomePage.css';

export default function HomePage(){
    return(
        <>
        <video autoPlay loop className="back-video" muted plays-inline>
            <source src="Images/bg-video.mp4" type="video/mp4"/>
        </video>

        <div className='container'>
            <div className="overlay">
                <h1>Let's Get Started.</h1>
                <h4>with your journey of finding "HOME"</h4>
                <a href="/signUp"><button>Get Started</button></a>
            </div>
        </div>
        

        {/* <div className="features">
            <div className="card">
                <div>
                    <div className="f-logo"><img src="Images/verified_customer.png"/></div>
                    <div className="cardName">Verified customers</div>
                </div>
            </div>
            <div className="card">
                <div>
                    <div className="f-logo"><img src="Images/no_broker.png"/></div>
                    <div className="cardName">No Broker</div>
                </div>
            </div>
            <div className="card">
                <div>
                    <div className="f-logo"><img src="Images/Guaranted_security.png"/></div>
                    <div className="cardName">Guaranted Security</div>
                </div>
            </div>
            <div className="card">
                <div>
                    <div className="f-logo"><img src="Images/user_friendly.png"/></div>
                    <div className="cardName">User-friendly Interface</div>
                </div>
            </div>
        </div> */}
     </>
    )
}