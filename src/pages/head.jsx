import React from 'react'
import '../styles/head.css';
import { Link, Outlet } from 'react-router-dom';
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";

const Head = () => {
    return (
        <>
            <img id='bac' src="https://images.unsplash.com/photo-1726409849659-1bd8aa7bdfe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D" />
            <div id='main-container'>
                <div id="head">
                    <h1 id='cur'>Amshu Man Maharjan</h1>
                    <h3>-Student-</h3><hr />
                    <div id="link">
                        <p><Link to="/">HOME</Link></p>
                        <p><Link to="resume">RESUME</Link></p>
                        <p><Link to="contact">CONTACT</Link></p>
                    </div>
                    <strong>Resume</strong><br />
                    <strong>___</strong>
                </div>
                <Outlet />
                <div id='copy'>
                    <hr />
                    <div id="link">
                        <a href="https://www.linkedin.com/in/amshu-maharjan-434511324/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={60} color="black" /></a>
                        <a href='https://github.com/amshuman50' target="_blank" rel="noopener noreferrer"><DiGithubBadge size={60} color="black" /></a>
                    </div>
                    {/* <p id="head">February 2025</p> */}
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Head;