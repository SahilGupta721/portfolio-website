//This documents contains the directory of all my projects

import bugImage from '../images/bug.jpg';
import EcoSphere from '../images/Eco-Sphere.png';
import InterviewPrep from '../images/interviewprep.png';
import VizWeather from '../images/winter-weather.png';
import CreditCardFraudDetector from '../images/fraud.webp';
import ConnectKingstonImage from '../images/connectkingston.png';

export const projects = [
  {
    id: 1,
    name: "Credit Card Fraud Detection System",
    description: "An end-to-end AI system that detects fraudulent credit card transactions using machine learning, featuring a FastAPI backend and a React dashboard for real-time insights and KPI visualization.",
    image: CreditCardFraudDetector,
    featured: true,
    link: "https://github.com/SahilGupta721/CreditCardFraudDetector",
    technologies: [
      "Python",
      "Scikit-learn",
      "React",
      "Random Forest Classifier",
      "Pandas",
      "Numpy",
      "FastAPI",
      "MongoDB",
      "Tailwind CSS"
    ],
    type: "solo",
    github: "https://github.com/SahilGupta721/CreditCardFraudDetector",
    live: "https://credit-card-fraud-detector-five.vercel.app/"
  },
  {
    id: 2,
    name: "ConnectKingston",
    description: "ConnectKingston is a civic-tech platform that centralizes volunteer opportunities in Kingston and uses AI recommendations to match residents to roles based on skills, interests, location, and availability.",
    image: ConnectKingstonImage,
    featured: true,
    link: "https://connectkingston.vercel.app/",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Firebase",
      "MongoDB",
      "Google Analytics",
      "Cohere LLM",
      "Web Scraping",
      "Tailwind CSS"
    ],
    type: "team",
    github: "https://github.com/MichelleKellyy/ConnectKingston",
    live: "https://connectkingston.vercel.app/"
  },
  {
    id: 3,
    name: "EcoSphere",
    description: "A team-built environmental SaaS platform using AI and live data to monitor forests, track biodiversity, and deliver climate alerts, empowering communities to protect land and sustainability goals.",
    image: EcoSphere,
    featured: true,
    link: "https://www.eco-sphere.co/",
    technologies: ["React", "TypeScript", "Google-Gemini", "Leaflet.js"],
    type: "team",
    github: "https://github.com/sarahhalime/EcoSphere",
    live: "https://www.eco-sphere.co/"
  },
  {
    id: 4,
    name: "InterviewPrep",
    description: "A solo-built AI interview practice app that generates role-specific questions from job postings, analyzes video responses, and delivers personalized feedback to improve clarity, confidence, and hiring readiness.",
    image: InterviewPrep,
    featured: true,
    link: "https://interview-prep-dusky.vercel.app/",
    technologies: ["React", "JavaScript", "Google-Gemini", "CSS3"],
    type: "solo",
    github: "https://github.com/SahilGupta721/InterviewPrep",
    live: "https://interview-prep-dusky.vercel.app/"
  },
  {
    id: 5,
    name: "VizWeather",
    description: "Visualize live weather data with Python-generated charts and dynamic, temperature-responsive UI.",
    image: VizWeather,
    featured: true,
    link: "https://vizweather.vercel.app/",
    technologies: ["Python", "React", "JavaScript"],
    type: "solo",
    github: "https://github.com/SahilGupta721/VizWeather_frontend",
    live: "https://vizweather.vercel.app/"

  },
  {
    id: 6,
    name: "BugSmasher",
    description: "Catch bugs, rack up points, and keep up as the speed increases.",
    image: bugImage,
    featured: true,
    link: "http://studentweb.cencol.ca/sgupt172/Assignment-3/assignment3.html",
    technologies: ["HTML5", "JavaScript", 'CSS3'],
    type: "solo",
    live: "http://studentweb.cencol.ca/sgupt172/Assignment-3/assignment3.html"
  },
];
