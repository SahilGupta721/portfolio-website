//This documents contains the directory of all my projects

import bugImage from '../images/bug.jpg';
import EcoSphere from '../images/Eco-Sphere.png';
import InterviewPrep from '../images/interviewprep.png';
import VizWeather from '../images/winter-weather.png';
import CreditCardFraudDetector from '../images/fraud.webp';
import ConnectKingstonImage from '../images/connectkingston.png';
import MacAParkImage from '../images/mac-a-park.png';

export const projects = [
  {
    id: 1,
    name: "Credit Card Fraud Detection System",
    description: "An end-to-end AI system that detects fraudulent credit card transactions using machine learning, featuring a FastAPI backend and a React dashboard for real-time insights and KPI visualization.",
    image: CreditCardFraudDetector,
    featured: true,
    category: "AI/ML",
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
    live: "https://credit-card-fraud-detector-five.vercel.app/",
    youtube: "https://youtube.com/watch?v=..." // ← Add this
  },
  {
    id: 2,
    name: "Mac-A-Park: Smart Parking Detection System",
    description: "A real-time smart parking detection system that uses CCTV video feeds and YOLO-based computer vision to detect parking slot occupancy. It provides live availability updates through a dashboard, helping drivers quickly find free spots while reducing congestion, fuel wastage, and emissions.",
    image: MacAParkImage,
    featured: true,
    category: "Computer Vision",
    link: "https://github.com/Yatriba-Rathod/Mac-a-thon-2026",
    technologies: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "FastAPI",
      "Next.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "TypeScript",
      "NumPy",
    ],
    type: "team",
    github: "https://github.com/Yatriba-Rathod/Mac-a-thon-2026",
    live: "https://mac-a-thon-2026-virid.vercel.app/"
  },

  {
    id: 3,
    name: "ConnectKingston",
    description: "ConnectKingston is a civic-tech platform that centralizes volunteer opportunities in Kingston and uses AI recommendations to match residents to roles based on skills, interests, location, and availability.",
    image: ConnectKingstonImage,
    featured: true,
    category: "Civic Tech",
    link: "https://github.com/MichelleKellyy/ConnectKingston",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Firebase",
      "MongoDB",
      "Google Analytics",
      "Cohere LLM",
      //"Web Scraping",
      "Tailwind CSS"
    ],
    type: "team",
    github: "https://github.com/MichelleKellyy/ConnectKingston",
    live: "https://connectkingston.vercel.app/"
  },
  {
    id: 4,
    name: "EcoSphere",
    description: "A team-built environmental SaaS platform using AI and live data to monitor forests, track biodiversity, and deliver climate alerts, empowering communities to protect land and sustainability goals.",
    image: EcoSphere,
    featured: true,
    category: "Environmental",
    link: "https://github.com/sarahhalime/EcoSphere",
    technologies: ["React", "TypeScript", "Google-Gemini", "Leaflet.js"],
    type: "team",
    github: "https://github.com/sarahhalime/EcoSphere",
    live: "https://www.eco-sphere.co/"
  },
  {
    id: 5,
    name: "InterviewPrep",
    description: "A solo-built AI interview practice app that generates role-specific questions from job postings, analyzes video responses, and delivers personalized feedback to improve clarity, confidence, and hiring readiness.",
    image: InterviewPrep,
    featured: true,
    category: "AI Mentor",
    link: "https://github.com/SahilGupta721/InterviewPrep",
    technologies: ["React", "JavaScript", "Google-Gemini", "CSS3"],
    type: "solo",
    github: "https://github.com/SahilGupta721/InterviewPrep",
    live: "https://interview-prep-dusky.vercel.app/"
  },
  {
    id: 6,
    name: "VizWeather",
    description: "Visualize live weather data with Python-generated charts and dynamic, temperature-responsive UI.",
    image: VizWeather,
    featured: true,
    category: "Data Visualization",
    link: "https://github.com/SahilGupta721/VizWeather_frontend",
    technologies: ["Python", "React", "JavaScript"],
    type: "solo",
    github: "https://github.com/SahilGupta721/VizWeather_frontend",
    live: "https://vizweather.vercel.app/"

  },
  {
    id: 7,
    name: "BugSmasher",
    description: "Catch bugs, rack up points, and keep up as the speed increases.",
    image: bugImage,
    featured: true,
    category: "Game Dev",
    link: "http://studentweb.cencol.ca/sgupt172/Assignment-3/assignment3.html",
    technologies: ["HTML5", "JavaScript", 'CSS3'],
    type: "solo",
    live: "http://studentweb.cencol.ca/sgupt172/Assignment-3/assignment3.html"
  },
];
