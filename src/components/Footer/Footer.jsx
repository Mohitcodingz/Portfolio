import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaArrowUp, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
    return (
        <>
            <hr style={{ border: "1px solid #222" }} />

            <div
                style={{
                    width: "100%",
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "30px 80px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "20px",
                }}
            >
                <div>
                    <h3 style={{ margin: 0 }}>Mohit Singh</h3>
                </div>

                <div>
                    <p
                        style={{
                            margin: 0,
                            color: "#bdbdbd",
                            fontSize: "15px",
                        }}
                    >
                        © 2026 Mohit Singh Bhandari. All rights reserved.
                    </p>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        fontSize: "24px",
                        alignItems: "center",
                    }}
                >
                    <a
                        href="https://github.com/Mohitcodingz"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white" }}
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/mohitsinghbhandari"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#0A66C2" }}
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="#home"
                        style={{ color: "#7CFF00" }}
                    >
                        <a href="#Hero"><FaArrowUp /></a>

                    </a>
                </div>
            </div>
        </>
    )
}