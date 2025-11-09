import React, { useState } from "react";
import Btn from "./Btn";
import "./Navbar.css";
import sun from "./assets/sun.png";
import moon from "./assets/moon.png";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggletheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className={`navbar ${darkMode ? "dark-theme" : ""}`}>
            <h1>LEARNIFY</h1>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Course</li>
                <li>Syllabus</li>
                <li>Contact Us</li>

                <Btn
                    classname="btn-theme"
                    onClick={toggletheme}
                    icon={darkMode ? sun : moon}
                />
            </ul>
        </nav>
    );
};

export default Navbar;
