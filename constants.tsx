
import { Project, Experience, Certification } from './types';

export const PERSONAL_DETAILS = {
  name: "Yasmine El Krati",
  role: "Student in Artificial Intelligence & Software Engineering",
  linkedIn: "https://www.linkedin.com/in/yasmine-el-krati-7aa216330/",
  email: "yasmineelkrati36@gmail.com",
  summary: "Currently in the third year of the program in Artificial Intelligence and Software Engineering with hands-on experience in Python, C/C++, JavaScript, and web technologies. I have built academic and personal projects ranging from quiz applications to animated web interfaces, focusing on clean logic and user experience. Passionate about problem-solving, learning new technologies, and applying software engineering principles to real-world challenges",
  contactLine: "I'm open to corporate roles. Email me at yasmineelkrati36@gmail.com or use the contact form."
};

export const SKILLS = {
  technical: [
    "Python",
    "C / C++",
    "JavaScript",
    "HTML & CSS",
    "SQL (MySQL)",
    "Data Structures & Algorithms"
  ],
  soft: [
    "Problem Solving",
    "Analytical Thinking",
    "Time Management",
    "SOFT SKILL 4",
    "Self-Learning",
    "Team Collaboration"
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "Informative Website about Karate",
    description: "• Designed and developed an informative website featuring sections on karate history, techniques, and belt ranks.\n• Implemented a responsive and visually appealing layout using advanced CSS and interactive JavaScript features",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Yasmine-El-krati/karate---website"
  },
  {
    title: "Web Scraping & E-Commerce Data Analysis",
    description: "• Built automated web scraping pipelines to collect product data from an online retailer using Python and BeautifulSoup.\n• Applied data cleaning, transformation, and categorization techniques to ensure analysis-ready datasets.\n• Conducted statistical analysis and created interactive visualizations with Plotly, revealing actionable insights on pricing strategies and product availability.",
    tech: ["Python", "BeautifulSoup", "Pandas", "Plotly"],
    link: "https://github.com/Yasmine-El-krati/web_scraping_jumai"
  },
  
 {
    title: "California Housing Data Analysis",
    description: "•Built predictive machine learning models (Linear Regression & Random Forest) to estimate California housing prices with high accuracy.\n• Performed thorough data preprocessing, analysis, and visualization to uncover key factors affecting property values.\n• Developed an interactive Flask web application with an HTML interface, allowing users to input data and receive real-time price predictions.",
    tech: ["Python", "Scikit-learn", "Flask", "Plotly", "HTML"],
    link: "https://github.com/Yasmine-El-krati/California-Housing-Data-Analysis"
},
{
 
    title: "Student Mental Health Form",
    description: "•Created an anonymous online mental health form to understand students’ self-perception and emotional well-being.\n• Collected responses from 718 students, analyzed data using Python and CSV ,\n•and hosted the interactive web application online using HTML, CSS, and JavaScript, providing a safe space for students to reflect honestly.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "CSV"],
    link: "https://github.com/Yasmine-El-krati/mental-health-form"


},
];
 /*
export const EXPERIENCES: Experience[] = [
  {
    title: "[JOB TITLE]",
    company: "[COMPANY NAME]",
    responsibilities: [
      "[RESPONSIBILITY / ACHIEVEMENT 1]",
      "[RESPONSIBILITY / ACHIEVEMENT 2]",
      "[RESPONSIBILITY / ACHIEVEMENT 3]",
      "[RESPONSIBILITY / ACHIEVEMENT 4]"
    ]
  }
];*/

export const EDUCATION = {
  degree: "Bachelor’s Degree in Artificial Intelligence and Software Engineering",
  institution: "Faculty of Multidisciplinary Studies of Ouarzazate",
  duration: "2023 – Present"
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Web Development Essentials",
    link: "https://diploma.gomycode.app/?id=31739635240760377"
  },
  {
    name: "Introduction to Python",
    link: "https://diploma.gomycode.app/?id=31725008417705138"
  },
  {
    name: "Introduction to Artificial Intelligence",
    link: "https://diploma.gomycode.app/?id=31759953671047939"
  }
];
