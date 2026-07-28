import React from 'react'
import styles from './Experience.module.css'
import { PiBagFill } from "react-icons/pi";
const experiences = [
    {
        role: "Data Analyst",
        company: "Shruti Infotech Pvt Ltd",
        duration: "Dec 2025 - Present",
        description:
            "Automated repetitive business processes using Google Apps Script (JavaScript) and Google Sheets, reducing manual effort and improving workflow efficiency. Worked closely with real-world business requirements, strengthening my problem-solving, analytical thinking, and software development skills while building a strong foundation for Full Stack Development."
    },
 
];
export default function Experience() {

    return (
        <div className={styles.ExperienceContainer} id='Experience'>
            <span style={{ color: '#7CFF00', paddingBottom: "20px" }}>MY EXPERIENCE </span>
            <h5 style={{ fontSize: '29px', color: 'white' }}>Work Experience</h5>
            {
                experiences.map((experience, index) => (
                    <div className={styles.ExperienceBox} key={index}>
                        <div className={styles.LeftBox}>
                            <div className={styles.LeftIcon}>
                                <PiBagFill className={styles.Icon} />
                            </div>

                            <div className={styles.LeftContext}>
                                <h3>{experience.role}</h3>
                                <h4>{experience.company}</h4>
                                <p>{experience.duration}</p>
                            </div>
                        </div>

                        <div className={styles.RightBox}>
                            <p>{experience.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
