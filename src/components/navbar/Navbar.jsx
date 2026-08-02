// import React from 'react'
// import styles from './Navbar.module.css'
// import Resume from '../../assets/MohitFullStackDev.pdf'
// // ../ takes one folder back
// export default function Navbar() {
//     return (
//         <div className={styles.NavbarContainer}>
//             <h1><span style={{ color: "#7CFF00", fontWeight: "bold" }}>&lt;/&gt;</span>&nbsp;Mohit Singh</h1>
//             <div className={styles.NavLinks}>
//                 <a href="#Home">Home</a>
//                 <a href="#About">About</a>
//                 <a href="#Skills">Skils</a>
//                 <a href="#Projects">Projects</a>
//                 <a href="#Experience">Experience</a>
//                 <a href="#Education">Education</a>
//                 <a href="#Contact">Contact</a>
//             </div>
//             <div className={styles.DownloadResume}>
//                 <a href={Resume} >Download CV</a>
//             </div>
//         </div>
//     )
// }


import React from 'react'
import styles from './Navbar.module.css'
import Resume from '../../assets/MohitFullStackDev.pdf'

export default function Navbar() {
    return (
        <div className={styles.NavbarContainer}>
            <h1><span style={{ color: "#7CFF00", fontWeight: "bold" }}>&lt;/&gt;</span>&nbsp;Mohit Singh</h1>
            <div className={styles.NavLinks}>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Skills">Skills</a>
                <a href="#Projects">Projects</a>
                <a href="#Experience">Experience</a>
                <a href="#Education">Education</a>
                <a href="#Contact">Contact</a>
            </div>
            <div className={styles.DownloadResume}>
                <a href={Resume}>Download CV</a>
            </div>
        </div>
    )
}