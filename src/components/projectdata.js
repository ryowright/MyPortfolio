import GoalsAppPic from './styles/images/GoalSettingApp.jpg';
import CTRPic from './styles/images/compositetimeranges.png';
import trychatsPic from './styles/images/trychats.png';
import portfolioPic from './styles/images/PortfolioWebsite.png';
import vaultPic from './styles/images/HashiCorp Vault.png';
import carpoolSchedulerPic from './styles/images/carpoolscheduler.png';

export const projectdata = [
  {
    title: "trychats",
    description: "A blockchain-based app that allows users to interact with one another and the blockchain. I contributed to this massive project during my internship in summer 2021.",
    demoLink: "https://trychats.com/#/",
    githubRepo: "https://github.com/AdventurePizza/chat",
    tech: ["TypeScript", "Node", "React", "Firebase", "Git"],
    image: trychatsPic,
  },
  {
    title: "HashiCorp Vault",
    description: "A security application used for secure secret management and protection of sensitive data. Key features of this product include dynamic secret generation, secure secret storage, and data encryption.",
    demoLink: "https://www.vaultproject.io/",
    githubRepo: "https://github.com/hashicorp/vault/issues?q=involves%3Aryowright+",
    tech: ["Go"],
    image: vaultPic,
  },
  {
    title: "Composite Time Ranges",
    description: "A web application that facilitates searching from timestamped datasets by enabling users to easily input multiple non-contiguous time range pairs as search parameters.",
    demoLink: "https://www.youtube.com/watch?v=s-0WPzEZwdM",
    githubRepo: "",
    tech: ["React"],
    image: CTRPic,
  },
  {
    title: "Carpool Scheduler",
    description: "Mobile app that matches carpoolers with drivers based on departure times and car space.",
    demoLink: "https://www.youtube.com/watch?v=G_qVW-r5ELg",
    githubRepo: "https://github.com/ryowright/Carpool-Scheduler",
    tech: ["Node", "React Native", "PostgreSQL"],
    image: carpoolSchedulerPic,
  },
  {
    title: "Goal Setting App",
    description: "An app that allows users to set and manage personal goals.",
    demoLink: "https://goal-setting-web-app.herokuapp.com/login",
    githubRepo: "https://github.com/ryowright/Goals-App",
    tech: ["Node", "React", "MongoDB", "Heroku"],
    image: GoalsAppPic,
  },
  {
    title: "Personal Portfolio Website",
    description: "My personal portfolio to showcase my work and express who I am as a person, student, and software engineer.",
    demoLink: "https://ryowright.github.io/MyPortfolio/",
    githubRepo: "https://github.com/ryowright/MyPortfolio/tree/main",
    tech: ["React"],
    image: portfolioPic,
  },
]