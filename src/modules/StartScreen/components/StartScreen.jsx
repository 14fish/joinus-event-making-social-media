import React from 'react'
import "../style/startScreen.css";
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';


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





export const StartScreen = () => {
    return (
        <div className="startScreenContainer">
            <div className='white-bg'>
                <div className="img-container-start-screen">
                    <img className='friendsImg' src={require('../img/friends.svg')} alt=""/>
                    <div className="tablet-text-start-screen"> <p>An event is a gathering of people who have been invited by a host for the purposes of socializing, conversation as part of a event. <br/> <b>With <Link to="/home">Join.Us</Link> Joining and Socializing is just one click away from you!</b>  </p> </div>
                </div>
            </div>
            <div className='blue-bg'>
                <Particles className='particles--start-screen' params={particlesParams}/>
                <div className="navbar-get-started">
                    <Link to='/login' className='btn-get-start-screen login'>
                        Login
                    </Link>
                    <Link to='/register' className='btn-get-start-screen sign-up'>
                        Sign Up
                    </Link>
                </div>

                <div className='box-title'>
                    <h2>Join Us</h2>
                    <h3>Social Events</h3>
                    <div className="get-started-button"><Link to='/home' className='getStarted'>Get Started</Link></div>
                </div>
            </div>
        </div>
    )
}
