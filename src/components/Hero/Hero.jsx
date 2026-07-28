import React from 'react'
import styles from './Hero.module.css'
import { socialMedia } from '../../data/socialMedia'

import profile from "../../assets/profile.png";
export default function Hero() {
    return (
        <div className={styles.HeroContainer}>
            <div className={styles.Left}>
                <p className={styles.GreenText}>
                    HI, I'M
                </p>
                <h1 className={styles.Name}>Mohit Singh Bhandari</h1>
                <p className={styles.GreenText}>
                    Full Stack Developer
                </p>
                <p>I build scalable and responsive web applications using the MERN stack. Passionate about solving real-world problems with efficient code.</p>
                <div className={styles.LinksContainer}>
                    {
                        socialMedia.map((e) => {
                            return <a key={e.id} className={styles.LinkClass} href={e.url}><e.logo style={{ color: e.color}}   /> {e.title}</a>
                        })
                    }
                </div>
            </div>
            <div className={styles.Right}>
                <img src={profile} alt="404 profile img failed loading" className={styles.ProfileImage} />
            </div>
        </div>
    )
}
