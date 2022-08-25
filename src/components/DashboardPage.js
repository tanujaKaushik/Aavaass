import React from 'react';
import './Dashboard.css';

export default function DashboardPage(){
    return(
        <>
            <div className="container -mx-4 -my-7">
            <div className="navigation bg-blue-900">
                <ul>
                    <a href=""><li><span className="icon"><img id="logo" src="../Images/white-logo.png"/></span></li></a>
                    <a href=""><li><span className="title">Home</span></li></a>
                    <a href=""><li><span className="title active">Dashboard</span></li></a>
                    <a href=""><li><span className="title">Search</span></li></a>
                    <a href=""><li><span className="title">Friends</span></li></a>
                    <a href=""><li><span className="title">About Us</span></li></a>
                    <a href=""><li><span className="title">Sign Out</span></li></a>
                </ul>
            </div>
            <div className="main">

            <div className="top-content">
                <h5>Helllo!!!!</h5>
                <h1>USER</h1>
                <div className="p_info">
                    <h4>Peronal Information</h4>
                    <ul>
                        <li>Contact : </li>
                        <li>Address : </li>
                        <li>E-mail : </li>
                        <li>Registered as : </li>
                    </ul>
                </div>
            </div>
            
            <div className="card-box">
                <div className="card">
                    <div>
                        <div className="number">2</div>
                        <div className="cardName">Posts</div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="number">23</div>
                        <div className="cardName">Interested In</div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="number">6</div>
                        <div className="cardName">Friends</div>
                    </div>
                </div>
            </div>

            <div className="content">
                <h2>Posts </h2>
                <div className="p_info">
                    <h4></h4>
                    <ul>
                        <li>1 </li>
                        <li>2 </li>
                        <li>3</li>
                        <li>4 </li>
                    </ul>
                </div>
            </div>

            <div className="content">
                <h2>Shown interest</h2>
                <div className="p_info">
                    <h4>Peronal Information</h4>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3 </li>
                        <li>4 </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}