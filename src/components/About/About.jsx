import React from 'react'
import styles from './About.module.css'
import AboutImage from '../../assets/about.jpg'
import { FaCheck } from 'react-icons/fa'
export default function About() {
    return (
        <div className={styles.AboutContainer} id='About'>
            <div className={styles.Left}>
                <img src={AboutImage} alt="" className={styles.AboutImage} />
            </div>
            <div className={styles.Right}>
                <span style={{ color: "rgb(124, 255, 0)" }}>ABOUT ME</span>
                <span style={{ fontSize: "24px" }}>Get to know me!</span>
                <p>I'm Full Stack Developer specializing in building exceptional digital experiences. I love turning ideas into reality using modern technologies. </p>
                <ul style={{ listStyle: "none" }}>
                    <li><FaCheck style={{ color: "rgb(124, 255, 0)", marginRight: "10px" }} />Full Stack Developer(MERN STACK)</li>
                    <li><FaCheck style={{ color: "rgb(124, 255, 0)", marginRight: "10px" }} />Clean code & Best Practices</li>
                    <li><FaCheck style={{ color: "rgb(124, 255, 0)", marginRight: "10px" }} />Problem Solver</li>
                    <li><FaCheck style={{ color: "rgb(124, 255, 0)", marginRight: "10px" }} />Continious Learner</li>
                </ul>

            </div>
        </div >
    )
}
