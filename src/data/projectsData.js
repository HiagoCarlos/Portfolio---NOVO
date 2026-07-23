// Importe as imagens dos seus projetos aqui
import portfolioImg from '../assets/projeto1.png'; 
import portfolioImg2 from '../assets/projeto2.png'; 
import portfolioImg3 from '../assets/projeto3.png'; 
import sistemaEscola from '../assets/projeto4.png';
import saas from '../assets/projeto6.png';
import bingo from '../assets/projeto5.png';
export const projectsData = [
  {
    id: 1,
    title: "Página de Login e Registro",
    description: "Este projeto foca exclusivamente em aprimorar as páginas de login e registro por meio de um design atraente usando HTML e CSS. O objetivo é proporcionar uma experiência visualmente agradável para o usuário, mantendo simplicidade e usabilidade.",
    image: portfolioImg,
    tags: ["CSS Modules", "Design Responsivo"],
    liveUrl: "https://hiagocarlos.github.io/Login-Registros/", 
    repoUrl: "https://github.com/HiagoCarlos/Login-Registros",
  },
  {
    id: 2,
    title: "Central de Notificações — Gerador de PM para Usuários do Fórum (Habbo)",
    description: "Sistema em JavaScript para enviar PMs padronizadas no fórum da RCC. Ele roda 100% no front-end, usando a sessão do usuário para formatar e enviar a mensagem ao endpoint nativo do fórum. É rápido, seguro e não exige servidor.",
    image: portfolioImg2,  
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://www.policiarcc.com/h139-tre-cpt-notificacoes-tb-tr#",
    repoUrl: "https://github.com/HiagoCarlos/Projeto-CPT-INS-DIR "},
    {
    id: 3,
    title: "Página de Chat em Java com Sockets e Threads",
    description: "Implementação de um sistema de chat distribuído em Java, focado nos fundamentos de comunicação e concorrência. O servidor utiliza java.net.Socket para conexões de rede e um pool de Threads (ExecutorService) para lidar com múltiplos clientes simultaneamente, coordenando o envio de mensagens entre diferentes salas.",
    image: portfolioImg3, 
    tags: ["Java", "HTML", "CSS"],
    repoUrl: "https://github.com/HiagoCarlos/trabalho_final"
    },
    {
  id: 4,
  title: "Sistema de Gestão Escolar",
  description:
    "Sistema web Full Stack para gerenciamento escolar, com autenticação de usuários, dashboard, gerenciamento de alunos, professores e turmas. Desenvolvido utilizando React, TypeScript e integração com APIs.",
  image: sistemaEscola,
  tags: [
    "React",
    "TypeScript",
    "JavaScript",
    "API REST",
    "CSS"
  ],
  liveUrl: "https://sistema-escola-rouge.vercel.app/dashboard",
  repoUrl: "https://github.com/HiagoCarlos/Sistema_Escola"
},
    {
    id: 5,
    title: "Sistema SaaS para Gestão",
    description:
      "Sistema Full Stack desenvolvido com Java Spring Boot no back-end e React + TypeScript no front-end. Possui autenticação, gerenciamento de usuários, banco de dados SQL e arquitetura em camadas.",
    image: saas,
    tags: ["Java", "Spring Boot", "React", "TypeScript", "SQL"],
    EmDesenvolvimento: "Em desenvolvimento"
  },
    {
    id: 6,
    title: "Bingo Online",
    description:
      "Sistema web para gerenciamento de partidas de bingo online com atualização em tempo real, desenvolvido em Node.js.",
    image: bingo,
    tags: ["Node.js", "JavaScript", "Express"],
    liveUrl: "https://bingo-fest.onrender.com/",
    repoUrl: "https://github.com/HiagoCarlos/bingo-fest"
  },
];