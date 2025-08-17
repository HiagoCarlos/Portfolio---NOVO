// Importe as imagens dos seus projetos aqui
import portfolioImg from '../assets/projeto1.png'; // Crie um screenshot do seu portfólio e salve com este nome
import portfolioImg2 from '../assets/projeto2.png'; // Crie um screenshot do seu segundo projeto e salve com este nome
export const projectsData = [
  {
    id: 1,
    title: "Login and Registration Pages",
    description: "This project focuses exclusively on enhancing login and registration pages through attractive design using HTML and CSS. The goal is to provide a visually pleasing user experience while maintaining simplicity and usability.",
    image: portfolioImg,
    tags: ["CSS Modules", "Design Responsivo"],
    liveUrl: "https://hiagocarlos.github.io/Login-Registros/", 
    repoUrl: "https://github.com/HiagoCarlos/Login-Registros",
  },{
    id: 2,
    title: "Notification Center — PM Generator for Forum Users (Habbo)",
    description: "The entire backend is JavaScript, and the code runs on the forum's own domain (e.g., an HTML page hosted on Forumeiros). It leverages the user's already authenticated session and the forum's native tokens to compose and send the PM. The flow is simple: the user chooses the request type, fills in the details (recipient(s), subject, and content). The system assembles the text in BBCode, and sends a POST to the Forumeiros private message endpoint using the current session data—no external server, no credentials stored, and respecting the same-origin policy. Key features: profile navigation (e.g., Inspectors/Directors), validations, support for multiple recipients, BBCode preview/generation, and asynchronous sending with status feedback. Requirements: being logged in to the forum and having permission to send PMs. The result: fast, standardized, and frictionless notifications for the RCC community on Habbo.",
    image: portfolioImg2,  
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://www.policiarcc.com/h139-tre-cpt-notificacoes-tb-tr#",
    repoUrl: "https://github.com/HiagoCarlos/Projeto-CPT-INS-DIR "}
  // {
  //   id: 2,
  //   title: "Outro Projeto",
  //   description: "Descrição do seu outro projeto.",
  //   image: outraImagem,
  //   tags: ["React", "Node.js", "Express"],
  //   liveUrl: "https://link-da-demo.com",
  //   repoUrl: "https://github.com/seu-usuario/outro-projeto",
  // },
];