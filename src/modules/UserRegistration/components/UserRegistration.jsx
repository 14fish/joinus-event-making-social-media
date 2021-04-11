import React from 'react'
import { Link } from 'react-router-dom';
import {
    DatePicker,
    Select,
    message,
} from 'antd';
import Particles from 'react-particles-js';
import '../style/userRegistration.css';
import { userRegisterFetch } from "../../../store/auth";
import { connect } from "react-redux";




const mapStateToProps = (store) => {
    return {
        auth: store.authReducer
    }
}


const particlesParams = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5050544906446545,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: true,
                speed: 117.48251748251748,
                size_min: 5.594405594405594,
                sync: true
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};

class RegistrationForm extends React.Component {

    state = {
        name: "",
        email: "",
        password: "",
        surname: "",
        city:"",
        errors: {}
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;

        if (!this.state.name) {
            formIsValid = false;
            errors['name'] = "Cannot Be Empty";
        }



        if (!this.state.surname) {
            formIsValid = false;
            errors['surname'] = "Cannot Be Empty";
        }



        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }



        if (!this.state.password) {
            formIsValid = false;
            errors['password'] = "Password cannot be empty";

        }

        if (typeof this.state.password !== "undefined") {
            if (this.state.password.length < 8) {
                formIsValid = false;
                errors['password'] = "Password length must be at least 8";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }



    handleFormChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })


    }
    handleSubmit = (e) => {

        e.preventDefault();
        if (this.handleValidation()) {

            this.props.userRegisterFetch(this.state, this.props.history);
            ;
        }
        else {
            return;
        }
    };








    render() {
        return (
            <div>


                <div className='NewNavbar NewNavbar-Fixed NewNavbar-empty'>
                    <Link to="/" >[Join.US]</Link>
                </div>
                <div className="container-login-particles">
                    <Particles className='particles particles-register' params={particlesParams} />
                    <div className="container">

                        <div className="form outer-panel">
                            <div className="form-title">
                                <h2>Tell us more about you.</h2>
                            </div>
                            <form onSubmit={this.handleSubmit}   >
                                <div className="sign-up-panel">
                                    <div className="form-panel">
                                        <div className="field">
                                            <label style={{ color: "red", display: 'block' }}>{this.state.errors["name"]}</label>
                                            <label className='label' htmlFor="">Name</label>
                                            <div className="control">
                                                <input type="text" className="input" name="name" onChange={this.handleFormChange} placeholder='Enter Your Name' />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label style={{ color: "red", display: 'block' }}>{this.state.errors["surname"]}</label>
                                            <label className='label' htmlFor="">Surname</label>
                                            <div className="control">
                                                <input type="text" className="input" name="surname" onChange={this.handleFormChange} placeholder='Enter Your Surname' />

                                            </div>
                                        </div>
                                        <div className="field">
                                            <label style={{ color: "red", display: 'block' }}>{this.state.errors["email"]}</label>
                                            <label className='label' htmlFor="">Email</label>
                                            <div className="control">
                                                <input type="email" className="input" name="email" onChange={this.handleFormChange} placeholder='Enter Your Email' />

                                            </div>
                                        </div>

                                        <div className="field">
                                            <label style={{ color: "red", display: 'block' }}>{this.state.errors["password"]}</label>
                                            <label className='label' htmlFor="">Password</label>
                                            <div className="control">
                                                <input name="password" type="password" className="input" onChange={this.handleFormChange} placeholder='Enter Your Password' />

                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className='label' htmlFor="">City</label>
                                            <div className="control">
                                                <input name="city" type="text" className="input" onChange={this.handleFormChange} placeholder='Where do you live? (city, country)' />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="submit-container">
                                        <button type='submit' className="submit-form">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const UserRegistration = connect(mapStateToProps, { userRegisterFetch })(RegistrationForm)

