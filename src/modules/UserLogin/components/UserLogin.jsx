import React, { Component, useState } from 'react'
import '../style/userLogin.css'
import Particles from 'react-particles-js';
import {Avatar, Badge} from 'antd';
import {connect} from "react-redux";
import {userLoginFetch} from "../../../store/auth";
import {useHistory, Link} from "react-router-dom";


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

const mapStateToProps = (store)=>{
    return {
        auth:store.auth
    }
}





export const  UserLogin = connect(mapStateToProps,{userLoginFetch}) ((props)=> {
    
        const [state,setState] = useState({});
        const {userLoginFetch} = props;
        const history = useHistory();
        const handleInputChange=(e)=>{
           
            const {name,value}=e.target;
            
            setState({
                ...state,
               [name]:value
            })
            console.log(state);
        }
        const handleSubmit = (e)=>{
            e.preventDefault();
            userLoginFetch(state,history);
            
        }

        return (
            <div className='login-container'>
                <div className="login-wrapper">
                        <div className="column is-6 hero-banner text-join">
                            <div className="hero is-fullheight is-login ">
                                <div className="hero-body">
                                    <Particles params={particlesParams} className='particles'/>
                                    <div className="container">
                                        <div className="left-caption">
                                            <h2>Join an Exciting Social Experience.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6 is-login ">
                            <div className="hero form-hero is-fullheight bg-white">
                                <div className="logo-wrap">
                                    <div className="wrap-inner">
                                        <h1>[][][][][]</h1>
                                    </div>
                                </div>
                                <div className="hero-body">
                                    <div className="form-wrapper">
                                            <h1 className='login-text'>Login from here!</h1>
                                        <form onSubmit={handleSubmit} className="login-form">
                                            <div className="field">
                                                <div className="control">
                                                    <i class="far fa-user user-login-icon"></i>
                                                    <input type="email" value={state.email} onChange={handleInputChange} name="email" className='input' placeholder='Email'/>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <div className="control">
                                                    <i class="fas fa-lock user-login-icon"></i>
                                                    <input type="password"  value = {state.pass} onChange={handleInputChange} name="password" className='input' placeholder='●●●●●●●' />
                                                </div>
                                            </div>
                                            
                                            <div className="field-submit-login">
                                                <div className="control-login">
                                                    <button type='submit' className="button btn-login">Login</button>
                                                    <div className="additional-links">
                                                        <Link className='register-link-additional' to="/register">Not registered? Click here</Link> <br/>
                                                        <Link className='home-link-additional' to="/home">Go to homepage</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    
})

