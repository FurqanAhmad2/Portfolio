/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Furqan Ahmad",
  title: "Hi all, I'm Furqan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1P9XYVOn8MAP5vqUFNJsegyZLGmJQYseZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/FurqanAhmad2",
  linkedin: "https://www.linkedin.com/in/furqan-ahmad-862937212/",
  gmail: "furqana405@gmail.com",
  facebook: "https://www.facebook.com/MrVENOMOUS20",
  medium: "https://medium.com/@furqana405",
  stackoverflow: "https://stackoverflow.com/users/20940305/furqan-ahmad",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",


  skills: [
    emoji("⚡ Data Science: Analysis & Insights"),
    emoji("⚡ MERN Stack Development"),
    emoji("⚡ Problem Solving in Python"),
    emoji("⚡ Generative AI (Fine Tuning Large LLM's)"),
    emoji("⚡ Third-Party Service Integration (Firebase, Digital Ocean)"),
    emoji("⚡ SQL Databases & ORM (MySQL, PostgreSQL, Sequelize)"),
    emoji("⚡ TypeScript & Redux"),
    emoji("⚡ MVC Architecture & Server-side Templating"),
    emoji("⚡ AJAX & RESTful APIs"),
    emoji("⚡ Git Version Control"),
    
    emoji("⚡ Mobile Development (Flutter)")
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React.js",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "SQL Database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Data Science",
    fontAwesomeClassname: "fas fa-flask"
  },
  {
    skillName: "Large Language Models (LLMs)",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "Git Version Control",
    fontAwesomeClassname: "fab fa-git"
  }
]
,
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FAST National University of Computer and Emerging Sciences",
      logo: require("./assets/images/fastwhite.png"),
      subHeader: "Bachelor in Computer Science",
      duration: "September 2020 - June 2024",
      
    },
    {
      schoolName: "Punjab College",
      logo: require("./assets/images/pgc.png"),
      subHeader: "Intermediate of Computer Sciences",
      duration: "September 2018 - April 2020",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "some statment here",
  projects: [
    {
      image: require("./assets/images/reviewlogo.png"),
      projectName: "Review HUB",
      projectDesc: "Sentiment Analysis tool for Youtube Video Comments and Amazon Product Reviews",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/FurqanAhmad2/ReviewHUB_Front-End"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/analysis.png"),
      projectName: "ECG Data Analysis",
      projectDesc: "Analyzing ECG Data for Arrhythmia Detection",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/FurqanAhmad2/ECG-Data-Analysis"
        }
      ]
    },
    {
      image: require("./assets/images/compl.png"),
      projectName: "Complain Management System",
      projectDesc: "CMS Coded in FLutter with Integration of MY-SQL database",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/FurqanAhmad2/Complain_System-Flutters-"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "DEAN's List 2020",
      subtitle:
        "",
      image: require("./assets/images/deans.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.nu.edu.pk/Campus/Chiniot-Faisalabad/DeanLists"
        },
        
      ]
    },
    {
      title: "DEAN's List FALL 2021",
      subtitle:
        "",
      image: require("./assets/images/2021.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.nu.edu.pk/Campus/Chiniot-Faisalabad/DeanLists"
        },
        
      ]
    },

    {
      title: "DEAN's List SPRING 2021",
      subtitle: "",
      image: require("./assets/images/s2021.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.nu.edu.pk/Campus/Chiniot-Faisalabad/DeanLists"
        },
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Decoding Cardiac Rhythms: A Journey through ECG Data Analysis",
      description:
        "Unveiling Insights in Cardiac Health"
    },
    {
      url: "https://medium.com/@furqana405/leveraging-language-models-for-efficient-data-annotation-with-prodigy-and-bulk-a5a2cd39e033",
      title: "Leveraging Language Models for Efficient Data Annotation with Prodigy and BULK",
      description:
        "Leveraging Language Models for Efficient Data Annotation with Prodigy and BULK"
    },
    {
      url: "https://medium.com/@furqana405/building-a-web-scraper-with-puppeteer-and-cheerio-a-step-by-step-guide-e895c2ab7f52",
      title: "Building a Web Scraper with Puppeteer and Cheerio: A Step-by-Step Guide",
      description:
        "Process of web scraping using Puppeteer and Cheerio to extract content from websites efficiently."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3009652778",
  email_address: "furqana405@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
