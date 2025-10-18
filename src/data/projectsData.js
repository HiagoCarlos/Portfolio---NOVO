// Importe as imagens dos seus projetos aqui
import portfolioImg from '../assets/projeto1.png'; 
import portfolioImg2 from '../assets/projeto2.png'; 
import portfolioImg3 from '../assets/projeto3.png'; 
export const projectsData = [
  {
    id: 1,
    title: "Página de Login e Registro",
    description: "Este projeto foca exclusivamente em aprimorar as páginas de login e registro por meio de um design atraente usando HTML e CSS. O objetivo é proporcionar uma experiência visualmente agradável para o usuário, mantendo simplicidade e usabilidade.",
    image: portfolioImg,
    tags: ["CSS Modules", "Design Responsivo"],
    liveUrl: "https://hiagocarlos.github.io/Login-Registros/", 
    repoUrl: "https://github.com/HiagoCarlos/Login-Registros",
  },{
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
    }
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