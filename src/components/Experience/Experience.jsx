import React from 'react'
import styles from './Experience.module.css'
import { PiBagFill } from "react-icons/pi";
export default function Experience() {
    return (
        <div className={styles.ExperienceContainer}>
            <span style={{ color: '#7CFF00', paddingBottom: "20px" }}>MY EXPERIENCE </span>
            <h5 style={{ fontSize: '29px', color: 'white' }}>Work Experience</h5>
            <div className={styles.ExperienceBox}>
                <div className={styles.LeftBox}>
                    <div className={styles.LeftIcon}>
                        <PiBagFill  className={styles.Icon} />
                    </div>
                    <div className={styles.LeftContext}>
                        <h3>Data Analyst</h3>
                        <h4>Shruti Infotech Pvt Ltd</h4>
                        <p>Dec 2025 - Present</p>
                    </div>
                </div>
                <div className={styles.RightBox}>
                    <p>Automated repetitive business processes using Google Apps Script (JavaScript) and Google Sheets, reducing manual effort and improving workflow efficiency. Worked closely with real-world business requirements, strengthening my problem-solving, analytical thinking, and software development skills while building a strong foundation for Full Stack Development</p>
                </div>
            </div>
        </div>
    )
}
