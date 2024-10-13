import type {IProject} from "../components/models/project.d.ts";

const projectsData: IProject[] = [
    {
        title: "ElderEase",
        year: "2024",
        techs: ["ReactNative", "Tesseract OCR", "Flask","Firebase", "Tailwind CSS"],
        category: "Mobile Development",
        imgUrls: ["/src/assets/projects/elderease/cover_elderease.png", "/src/assets/projects/elderease/elderease_1.png", "/src/assets/projects/elderease/elderease_2.png", "/src/assets/projects/elderease/elderease_3.png"],
        linkGithub: "https://github.com/carissaf/ElderEase",
        linkPPT: "https://www.canva.com/design/DAGH5FvEvrA/ZHbYtpNOCtM6EirKd77wtw/view?utm_content=DAGH5FvEvrA&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        summary: "ElderEase is a mobile-based application aiming to provide ease of communication with elders and assist elders with their daily life. ElderEase is made using ReactNative, Firebase, Tailwind CSS, and integrated with Tesseract OCR using Flask.",
        description: {
            problem: "Communication challenges between elderly individuals and their caregivers often arise due to age-related issues, such as impaired vision or unclear speech. Many elderly people struggle to express their needs, which can lead to confusion, misunderstandings, and frustration for both them and their caregivers. This situation makes it difficult for caregivers to provide the necessary support, as they may not fully understand the needs of the elderly, impacting the overall quality of care. Improving the way these two groups communicate is crucial to ensuring better care and a more harmonious relationship.",
            solution: "The solution we came up to these communication challenges is to develop an application called ElderEase, which helps elderly individuals and their caregivers communicate more effectively. ElderEase is designed to bridge the communication gap by providing tools that simplify and enhance interactions, ensuring that the elderly can express their needs clearly and caregivers can understand them better.",
            features: ["Reading Text (OCR & Text-To-Speech)", "Daily Word Activities (Speech-To-Text)", "Emergency Call"]
        }
    },
    {
        title: "Wayste",
        year: "2024",
        techs: ["Figma", "UI/UX Design"],
        category: "UI/UX",
        imgUrls: ["/src/assets/projects/wayste/cover_wayste.png"],
        linkFigma: "https://www.figma.com/design/96R30a5c4OryNEmuxrZY3G/TechFest---Tim-Chipichapa-(Wayste)?node-id=1-2&t=DRzAlKT0bss0bs7g-1",
        linkPPT: "https://www.youtube.com/watch?v=8oR6Wk271Ww",
        summary: "Wayste is a mobile-based application that addresses environmental issues. Aligned with the 11th Sustainable Development Goal (SDG), Sustainable Cities and Communities, Wayste offers a solution to the challenges of inadequate waste management in our surroundings.",
        description: {
            problem: "Indonesia is facing serious challenges with its growing waste problem, producing 35.83 million tons of waste in 2022, a 21.7% rise from the previous year. Despite efforts, only 60-70% of the waste is managed, and many households find it difficult to sort their waste because they are unsure how to do it correctly. This lack of understanding leads to waste being mixed, making management less effective. On top of that, 72% of people are not concerned about waste issues, leading to poor disposal practices like burning or dumping. These actions harm the environment and public health, and contribute to pollution and flooding.",
            solution: "To address Indonesia's waste management issues, we came up with the design for a mobile app called Wayste to raise awareness and encourage public participation. The app provides articles on waste-related topics, uses AI to help users classify waste, and allows them to report litter in exchange for rewards. By fostering collaboration between the public, government, and companies, Wayste aims to create a cleaner, waste-free Indonesia.",
            features: ["Report Waste", "Waste Detection (Object Detection)", "View City's Statistics", "Points Collection from Missions", "Exchange Points with Vouchers", "Read Articles"]
        }
    },
    {
        title: "News Category Classification",
        year: "2024",
        techs: ["NLP", "Python", "Machine Learning", "Naive Bayes", "Neural Network", "BERT"],
        category: "NLP",
        imgUrls: ["/src/assets/projects/newscategory/cover_newscategory.png"],
        linkColab: "https://colab.research.google.com/drive/190yFNj0F8q_16hPatDk6rczj8Q0RVPXP",
        linkPPT: "https://www.canva.com/design/DAGA38gZGUI/IbUwjhLNYHBT4Mxcj7uZjw/view?utm_content=DAGA38gZGUI&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        summary: "The News Category Classification project leverages Natural Language Processing techniques to enhance the efficiency of organizing news content by categories. Using Naive Bayes, Neural Networks, and fine-tuning BERT models, this project aims to streamline and accelerate the process of sorting news articles based on their respective categories in the digital era.",
        description: {
            problem: "In this digital era, accessing information has become easier through technology. However, the vast number of news articles being published makes it challenging to efficiently organize and sort this content based on its categories. This overload of information often leads to difficulties in finding relevant or specific topics, causing inefficiencies in managing and navigating through news content.",
            solution: "We implemented a News Category Classification system to improve efficiency and streamline the process of organizing news content by its respective categories. This solution uses three methods: Multinomial Naive Bayes, Neural Networks, and BERT (Bidirectional Encoder Representations from Transformers). Each approach enhances the accuracy and speed of classifying news articles, ensuring that content is better organized and easier to navigate, allowing for a more efficient information retrieval process."
        }
    },
    {
        title: "OptiScan",
        year: "2023",
        techs: ["React", "SCSS", "Flask"],
        category: "Website Development",
        imgUrls: ["/src/assets/projects/optiscan/cover_optiscan.png"],
        linkGithub: "https://github.com/TheoJustin/React_AiCataract",
        linkPPT: "https://www.canva.com/design/DAF2AYTaJZw/ymZJ8eUqNnUqRdHSTGZMGg/view?utm_content=DAF2AYTaJZw&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        summary: "OptiScan is a web-based platform designed to detect cataracts, aimed at raising awareness and providing accessible healthcare solutions. By leveraging AI integration through Flask and a React-based interface, OptiScan ensures a cost-effective approach to cataract detection and awareness for all.",
        description: {
            problem: "Many people are unaware that they suffer from cataracts, a condition that affects not only the elderly but also younger individuals. According to the WHO, 94 million people worldwide are affected by cataracts, and the National Institute of Health reports that 50% of blindness cases are caused by cataracts. However, there are significant challenges in detecting cataracts early, including limited access to screening and high costs, which can range from Rp200,000 to Rp600,000. These barriers contribute to delayed diagnosis and treatment, worsening the impact of the disease.",
            solution: "We developed an artificial intelligence model using the MNIST dataset and a neural network to detect early signs of cataracts and assess cataract risk. This AI is integrated into a web application that provides free, accessible cataract screening, available anytime and anywhere. The app also offers detailed information about cataract symptoms, severity levels, and treatment options. In addition, it helps users find relevant hospitals, doctors, and cost estimates for cataract treatment. The web app is built using React for the frontend and Flask to connect the AI model with the application, ensuring a seamless user experience.",
            features: ["Cataract Detection (Image Binary Classification)"]
        }
    },
    {
        title: "YourAnimeList",
        year: "2023",
        techs: ["Laravel", "MySQL", "Bootstrap"],
        category: "Website Development",
        imgUrls: ["/src/assets/projects/youranimelist/cover_youranimelist.png"],
        linkGithub: "https://github.com/carissaf/YourAnimeList",
        summary: "YourAnimeList is a Laravel-based website inspired by MyAnimeList, designed to display anime along with their ratings. The project utilizes a MySQL database for data management and Bootstrap for the user interface, offering users an accessible way to browse and rate anime.",
        description: {
            problem: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            solution: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            features: ["View Animes", "Rating Animes", "Review Animes"]
        }
    }
]

export default projectsData