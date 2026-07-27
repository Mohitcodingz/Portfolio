import React from 'react'
import styles from './Projects.module.css'
import { projects } from '../../data/projects'
export default function Projects() {
    return (
        <div className={styles.ProjectsContainer}>
            <span style={{ color: '#7CFF00', paddingBottom: "20px" }}>FEATURED PROJECTS</span>
            <h5 style={{ fontSize: '29px', color: 'white' }}>Some Things I've Built</h5>
            <div className={styles.ProjectBoxes}>
                {
                    projects.map((e) => {
                        return <div className={styles.ProjectBox} key={e.id}>
                            <img src={e.image} alt="" /> {e.title} {e.description}
                            <div className={styles.TechContainer}>
                                {

                                    e.technologies.map((f, index) => (
                                        <span key={index}>{f}</span>
                                    ))
                                }
                            </div>
                            <a href={e.githubRepo}>Live Demo</a>
                            <a href={e.githubLive}> Github</a>

                        </div>
                    })
                }
            </div>
        </div>
    )
}
