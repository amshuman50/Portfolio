import profile from "../Assets/profile.png"
import matui from "../Assets/materialui.png"
import { Link } from 'react-router-dom'
import '../styles/home.css'
import React, { useState } from "react";
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';

import logo from '../logo.svg';

export default function Home() {
    document.title = "Home - Amshu"
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 145) : text}
                <span
                    onClick={toggleReadMore}
                    className="read-or-hide"
                    style={{ color: "green" }}
                >
                    {isReadMore ? "...read more" : " show less"}
                </span>
            </p>
        );
    };
    return (
        <>

            <div>
                <div id='body'>
                    <img id="imghome" src={profile} alt="PROFILE PIC" /><br />
                    <strong style={{ margin: "20px" }}>Web Developer</strong>
                    <p style={{ margin: "20px" }}>React is a widely used library for web development.</p>
                    <Link to="contact"><Button variant="contained" endIcon={<CallIcon />} style={{ margin: "10px" }}>Contact</Button></Link>
                </div>
                <div style={{ display: "flex", marginTop: "10px" }}>
                    <div id='left'>
                        <div style={{ width: "90%", margin: "auto" }}>
                            <hr />
                            <p style={{textAlign:"justify"}}><ReadMore>"I am a React developer passionate about building dynamic and interactive web applications. My portfolio showcases my skills, projects, and experience in front-end development using React.js and modern web technologies. I specialize in creating responsive, high-performance, and visually appealing applications, utilizing tools like Redux, TypeScript, and Next.js. This portfolio is a reflection of my expertise and dedication to crafting seamless user experiences. Feel free to explore my work and reach out for collaboration!"</ReadMore></p>
                            <hr />
                        </div>
                    </div>
                    <div id='right'>
                        {/* <img src={logo} id="App-logo" alt="logo" /> */}
                        <img src={logo} id="rotate" alt="logo" />
                        <img id='imghome2' src={matui} alt='Image2' />
                    </div>
                </div>
            </div>
        </>
    )
}