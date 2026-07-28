import React from 'react'
import styles from './Education.module.css'
import { RiGraduationCapFill } from "react-icons/ri"
const educationContext = [
    {
        id: '1',
        title: "Full Stack Development Program",
        SubTitle: "Oxford Software Institute",
        duration: '1 August 2025 - 31 July 2026'
    },
    {
        id: '2',
        title: "Bachelor of Commerce(B.Com)",
        SubTitle: "IGNOU",
        duration: 'Completed in 2024'
    },

]
export default function Education() {
    return (
        <div className={styles.EducationContainer} id='Education'>
            <span style={{ color: '#7CFF00', paddingBottom: "20px" }}>MY EDUCATION </span>
            <h5 style={{ fontSize: '29px', color: 'white' }}>Education</h5>
            <div className={styles.EducationBoxes}>

                {
                    educationContext.map((e) => {
                        return <div key={e.id} className={styles.EducationBox}>
                            <div key={e.id} className={styles.IconBox}>
                                <RiGraduationCapFill className={styles.Icon} />
                            </div>
                            <div key={e.id} className={styles.EducationInfo}>
                                <h3>
                                    {e.title}
                                </h3>
                                <h4>
                                    {e.SubTitle}
                                </h4>
                                <p>
                                    {e.duration}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
