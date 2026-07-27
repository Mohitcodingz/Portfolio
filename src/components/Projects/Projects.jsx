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
                            <img src={e.image} alt="" /> <h1>{e.title}</h1> <p>{e.description}</p>
                            <div className={styles.TechContainer}>
                                {

                                    e.technologies.map((f, index) => (
                                        <span key={index} className={styles.TechBox}>{f}</span>
                                    ))
                                }
                            </div>
                            <div className={styles.GitLinks}>
                                <div className={styles.LeftGitLinks}>
                                    <a href={e.githubLive}>Live Demo</a>
                                </div>
                                <div className={styles.RightGitLinks}>
                                    <a href={e.githubRepo}> Github</a>
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}
