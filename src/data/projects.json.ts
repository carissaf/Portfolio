import type {IProject} from "../components/models/project.d.ts";

const projectsData: IProject[] = [
    {
        title: "ElderEase",
        year: "2024",
        techs: ["ReactNative", "Tesseract OCR", "Flask","Firebase", "Tailwind CSS"],
        category: "Mobile Development",
        imgUrls: ["/src/assets/projects/elderease/cover_elderease.png"],
        linkGithub: "https://github.com/carissaf/ElderEase",
        linkPPT: "https://www.canva.com/design/DAGH5FvEvrA/ZHbYtpNOCtM6EirKd77wtw/view?utm_content=DAGH5FvEvrA&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        summary: "ElderEase is a mobile-based application aiming to provide ease of communication with elders and assist elders with their daily life. ElderEase is made using ReactNative, Firebase, and Tailwind CSS.",
        description: {
            challenge: "",
            goal: "",
            result: ""
        }
    },
    {
        title: "Wayste",
        year: "2024",
        techs: ["Figma", "UI/UX Design"],
        category: "UI/UX",
        imgUrls: ["/src/assets/projects/wayste/cover_wayste.png"],
        summary: "Wayste is a mobile-based application that addresses environmental issues. Aligned with the 11th Sustainable Development Goal (SDG), Sustainable Cities and Communities, Wayste offers a solution to the challenges of inadequate waste management in our surroundings.",
        description: {
            challenge: "",
            goal: "",
            result: ""
        }
    },
    {
        title: "News Category Classification",
        year: "2024",
        techs: ["NLP", "Python", "Machine Learning", "Naive Bayes", "Neural Network", "BERT"],
        category: "NLP",
        imgUrls: ["/src/assets/projects/newscategory/cover_newscategory.png"],
        summary: "The News Category Classification project leverages Natural Language Processing techniques to enhance the efficiency of organizing news content by categories. Using Naive Bayes, Neural Networks, and fine-tuning BERT models, this project aims to streamline and accelerate the process of sorting news articles based on their respective categories in the digital era.",
        description: {
            challenge: "",
            goal: "",
            result: ""
        }
    },
    {
        title: "OptiScan",
        year: "2023",
        techs: ["React", "SCSS", "Flask"],
        category: "Website Development",
        imgUrls: ["/src/assets/projects/optiscan/cover_optiscan.png"],
        summary: "OptiScan is a web-based platform designed to detect cataracts, aimed at raising awareness and providing accessible healthcare solutions. By leveraging AI integration through Flask and a React-based interface, OptiScan ensures a cost-effective approach to cataract detection and awareness for all.",
        description: {
            challenge: "",
            goal: "",
            result: ""
        }
    },
    {
        title: "YourAnimeList",
        year: "2023",
        techs: ["Laravel", "MySQL", "Bootstrap"],
        category: "Website Development",
        imgUrls: ["/src/assets/projects/youranimelist/cover_youranimelist.png"],
        summary: "YourAnimeList is a Laravel-based website inspired by MyAnimeList, designed to display anime along with their ratings. The project utilizes a MySQL database for data management and Bootstrap for the user interface, offering users an accessible way to browse and rate anime.",
        description: {
            challenge: "",
            goal: "",
            result: ""
        }
    }
]

export default projectsData