import BrandKart from '../assets/BrandKart.png'
import Resume from '../assets/Resume.png'
import tiger from '../assets/tiger.png'

export const projects = [
    {
        id: 1,
        title: "BrandKart E-Commerce",
        description: "Full-Stack e-commerce platform with product management, cart, authentication and more",
        image: BrandKart,
        githubLive: "",
        githubRepo: "https://github.com/Mohitcodingz/BrandKartEcommerce",
        technologies: ["MERN Stack", "Redux", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "NTCA.gov.in WebPage",
        description: "A redesigned and responsive version of the NTCA website with an improved modern UI and user experience.",
        image: tiger,
        githubLive: "https://ntca-sample-page.vercel.app/",
        githubRepo: "https://github.com/Mohitcodingz/NTCA-samplePage",
        technologies: ["React", "Vite", "CSS Modules"]
    },
    {
        id: 3,
        title: "Developer Portfolio",
        description:
            "A modern responsive portfolio showcasing my projects, skills and experience.",
        image: Resume,
        githubRepo: "https://github.com/Mohitcodingz/Portfolio",
        githubLive: "https://mohitsinghportfolio-sigma.vercel.app/",
        technologies: ["React", "Vite", "CSS Modules"],
    }
]
