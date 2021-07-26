import React from "react";
import "../assets/users.scss";
import "../assets/about.scss";
import { Link } from "react-router-dom";
import Header2 from "./layout/Header";
import Footer from "./layout/Footer";

const About = () => {
    

    return (
        <>
        <Header2 />
        <div className="main-wrapper background-about">

                <div className="right-side">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <h2 className="h4">About our team:</h2>
                    </div>
                    <br />
                    <br />
                    <div className="col-md-12">
                        <h4 className="h4">Jennifer Grillo</h4>
                        <h6 className="h6">Queen of Project Management & Backend Magician</h6>
                        <ul>
                            <li className="li"><Link className="li" to="https://github.com/jgrillo36">Github</Link></li>
                            <li className="li"><Link className="li" to="https://www.linkedin.com/in/jenngrillo/">LinkedIn</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className="col-md-12">
                        <h4 className="h4">Bogdan Blach</h4>
                        <h6 className="h6">Backend Wizard & Database Voodoo</h6>
                        <ul>
                            <li className="li"><Link className="li" to="https://github.com/bblach3">Github</Link></li>
                            <li className="li"><Link className="li" to="http://www.linkedin.com/in/bogdanblach">LinkedIn</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className="col-md-12">
                        <h4 className="h4">Jacob Nordstrom</h4>
                        <h6 className="h6">Store Sorcerer & CSS Mage</h6>
                        <ul>
                            <li className="li"><Link className="li" to="https://github.com/jacobnordstrom9">Github</Link></li>
                            <li className="li"><Link className="li" to="https://www.linkedin.com/in/jacob-nordstrom-a79296100/">LinkedIn</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className="col-md-12">
                        <h4 className="h4">Jim Chamberlin</h4>
                        <h6 className="h6">Front End Serf & Car Dweeb</h6>
                        <ul>
                            <li className="li"><Link className="li" to="https://github.com/jimcha924">Github</Link></li>
                            <li className="li"><Link className="li" to="https://www.linkedin.com/in/james-chamberlin/">LinkedIn</Link></li>
                        </ul>
                    </div>
                    <br />


                </div>


                    
                </div>

        </div>



        <Footer />
        </>
    )
}

export default About;