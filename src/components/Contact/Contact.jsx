import React from 'react'
import styles from './Contact.module.css'
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const context = [
    {
        id: 1,
        icon: MdEmail,
        title: "Email",
        value: "mohitsingh2003uk@gmail.com",
        href: "mailto:mohitsingh2003uk@gmail.com"
    },
    {
        id: 2,
        icon: FaPhoneAlt,
        title: "Phone",
        value: "+91 8383984698",
        href: "tel:+91 8383984698",
    },
    {
        id: 3,
        icon: FaLocationDot,
        title: "Location",
        value: "Delhi, India",
        href: null,
    },
    {
        id: 4,
        icon: FaLinkedin,
        title: "LinkedIn",
        value: "linkedin.com/in/mohitsinghbhandari",
        href: "https://linkedin.com/in/mohitsinghbhandari",
    },
    {
        id: 5,
        icon: FaGithub,
        title: "GitHub",
        value: "github.com/Mohitcodingz",
        href: "https://github.com/Mohitcodingz",
    },
]
export default function Contact() {
    return (
        <div className={styles.ContactContainer} id='Contact'>
            <span style={{ color: '#7CFF00', paddingBottom: "20px" }}>LET'S CONNECT </span>
            <h5 style={{ fontSize: '29px', color: 'white' }}>Get In Touch</h5>
            <div className={styles.ContactBoxes}>
                {
                    context.map((e) => {
                        return <div key={e.id} className={styles.ContactBox}>
                            <div className={styles.Left} key={e.id}>
                                <h2>
                                    <e.icon />
                                </h2>
                            </div>
                            <div key={e.id} className={styles.Right}>
                                <h3>{e.title}</h3>
                                <a href={e.href}>{e.value}</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
