//This documents contains the directory of all my projects

import bugImage from '../images/bug.jpg';
import EcoSphere from '../images/Eco-Sphere.png';
import InterviewPrep from '../images/interviewprep.png';

import VizWeather from '../images/winter-weather.png';

export const projects = [
  {
    id: 1,
    name: "EcoSphere",
    description: "A smart platform for climate and land protection powered by AI and live environmental data",
    image: EcoSphere,
    featured: true,
    link: "https://www.eco-sphere.co/",
    technologies: ["React", "TypeScript", "Google-Gemini", "Leaflet.js"],
    type: "team"
  },
  {
    id: 2,
    name: "InterviewPrep",
    description: "Refine your interview skills with AI-generated questions and personalized feedback.",
    image: InterviewPrep,
    featured: true,
    link: "https://interviewprep-ddne.onrender.com/",
    technologies: ["React", "JavaScript", "CSS3"],
    type: "solo"
  },
  {
    id: 3,
    name: "VizWeather",
    description: "Visualize live weather data with Python-generated charts and dynamic, temperature-responsive UI.",
    image: VizWeather,
    featured: true,
    link: "https://vizweather.vercel.app/",
    technologies: ["Python", "React", "JavaScript"],
    type: "solo"
  },
  {
    id: 4,
    name: "BugSmasher",
    description: "Catch bugs, rack up points, and keep up as the speed increases.",
    image: bugImage,
    featured: true,
    link: "http://studentweb.cencol.ca/sgupt172/Assignment-3/assignment3.html",
    technologies: ["HTML5", "JavaScript", 'CSS3'],
    type: "solo"
  },
];
