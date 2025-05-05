import { swift_summarizer, astra, eventsync, profile } from "../assets";

export const portfolioContent = {
    user: {
        profile_image: profile,
        first_name: "Abhay",
        last_name: "Balakrishnan",
        email: "abhaybalakrishnan977@gmail.com",
        phone: "919778728414", // whatsapp number
    },
    about: {
        heading: "Hi, I'm Abhay.",
        description: `I'm a Frontend Developer and UI/UX Designer in Cochin, India. I create user-friendly websites, focusing on attractive designs and smooth functionality, helping to improve online presence and user experience.`,
        cta: [
            {
                icon: "",
                text: "Let's Connect",
                url: "https://www.linkedin.com/in/abhaybalakrishnan",
            },
            {
                icon: "pi pi-external-link",
                text: "Website",
                url: "https://abhayyy.vercel.app",
            },
        ],
    },
    showcase: [
        {
            title: "Swift Summarizer",
            description: "AI-Powered Article Summarizer",
            image: swift_summarizer,
            image_alt: "swift summarizer",
            url: "https://github.com/ABHAY-100/swift-summarizer",
        },
        {
            title: "EventSync",
            description: "A Powerful Event Management Suite",
            image: eventsync,
            image_alt: "eventsync",
            url: "https://github.com/ABHAY-100/techno-event-management",
        },
        {
            title: "ASTRA",
            description: "Space Club Web Design",
            image: astra,
            image_alt: "astra",
            url: "https://dribbble.com/shots/24522358-Space-Club-Web-Design-ASTRA",
        },
    ],
    services: [
        {
            title: "Frontend Development",
            description: "Buildin' awesome websites that look great and work even better. Let's make your online dreams a reality.",
            highlight: {
                text: "See what I've built lately",
            },
            action: {
                text: "Check it out!",
                url: "https://swift-summarizer.vercel.app",
            }
        },
        {
            title: "UI/UX Design",
            description: "I craft digital experiences that are simple, stylish, and super easy to use. Love clean lines, but I'm always down to experiment with new ideas.",
            highlight: {
                text: "There's a lot to see on my Dribbble",
            },
            action: {
                text: "Check it out!",
                url: "https://dribbble.com/itsabhaybal",
            }
        },
        {
            highlight: {
                text: "Want to see more of my work?",
            },
            action: {
                text: "View LinkedIn",
                url: "https://www.linkedin.com/in/abhaybalakrishnan",
            }
        },
    ],
    socials: {
        x: {
            url: "https://x.com/itsabhaybal",
            icon: "fa-brands fa-x-twitter",
        },
        linkedin: {
            url: "https://www.linkedin.com/in/abhaybalakrishnan",
            icon: "fa-brands fa-linkedin",
        },
        dribbble: {
            url: "https://dribbble.com/itsabhaybal",
            icon: "fa-brands fa-dribbble",
        },
        instagram: {
            url: "https://www.instagram.com/itsabhaybal",
            icon: "fa-brands fa-instagram",
        },
        github: {
            url: "https://github.com/ABHAY-100",
            icon: "fa-brands fa-github",
        },
        codepen: {
            url: "https://codepen.io/itsabhaybal",
            icon: "fa-brands fa-codepen",
        },
    },
}