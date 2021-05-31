import React from 'react'
import { NavLink } from 'react-router-dom';
import heroImg from '../../images/home.png'

const Hero = () => {
    return (
        <div>
            <section className="heroSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-6 col-12 order-1 d-flex align-items-center">
                            <div className="hero-content-left">
                              <h1>Welcome <span>to Crowdcarnival</span></h1>
                              <p className="lead">At Time4Writing.com, you’ll find plenty of resources to help students learn how to write a paragraph as well as improve their paragraph writing skills, including free writing resources on topic sentences.</p>
                              <NavLink className="primary-button" to="#">See More</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-6 col-12 order-1">
                            <div className="hero-content-right">
                              <img className="img-fluid" src={heroImg} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
