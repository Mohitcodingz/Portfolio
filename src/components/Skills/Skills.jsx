import React from 'react'
import styles from './Skills.module.css'
import { skills } from '../../data/skills'
export default function Skills() {
    return (
        <div className={styles.SkillsContainer}>
            <span style={{color:'#7CFF00', paddingBottom:"20px"}}>MY TECH STACK</span>
            <h5 style={{fontSize:'29px'}}>Technologies I work with</h5>
            <div className={styles.SkillsContext}>

                {
                    skills.map((a) => {
                        return <span key={a.id} className={styles.SkillBox} > <a.logo className={styles.logoStyle} /> {a.title}</span>
                    })
                }
            </div>
        </div>
    )
}
