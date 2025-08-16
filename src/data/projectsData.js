// Importe as imagens dos seus projetos aqui
import portfolioImg from '../assets/projeto1.png'; // Crie um screenshot do seu portfólio e salve com este nome
import portfolioImg2 from '../assets/projeto2.png'; // Crie um screenshot do seu segundo projeto e salve com este nome
export const projectsData = [
  {
    id: 1,
    title: "Páginas de Login e Registros",
    description: "É um projeto focado exclusivamente em aprimorar as páginas de login e registro por meio de design atraente utilizando HTML e CSS. O objetivo é proporcionar uma experiência visualmente agradável aos usuários, mantendo a simplicidade e a usabilidade.",
    image: portfolioImg,
    tags: ["CSS Modules", "Design Responsivo"],
    liveUrl: "https://hiagocarlos.github.io/Login-Registros/", 
    repoUrl: "https://github.com/HiagoCarlos/Login-Registros",
  },{
    id: 2,
    title: "Central de Notificações — Gerador de MPs para Forumeiros (Habbo)",
    description: "No JavaScript está toda a parte “de back”: o código roda no próprio domínio do fórum (ex.: uma página HTML hospedada no Forumeiros), aproveita a sessão já autenticada do usuário e os tokens nativos do fórum para compor e enviar a MP. O fluxo é simples: o usuário escolhe o tipo de requerimento, preenche os dados (destinatário(s), assunto e conteúdo), o sistema monta o texto em BBCode e dispara um POST para o endpoint de mensagens privadas do Forumeiros usando os dados da sessão atual — sem servidor externo, sem guardar credenciais e respeitando a política de mesma origem. Recursos principais: navegação por perfis (ex.: Inspetores/Diretores), validações, suporte a múltiplos destinatários, pré-visualização/geração do BBCode e envio assíncrono com retorno de status. Requisitos: estar logado no fórum e possuir permissão para enviar MPs. Resultado: notificações rápidas, padronizadas e sem fricção para a comunidade da RCC no Habbo.",
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