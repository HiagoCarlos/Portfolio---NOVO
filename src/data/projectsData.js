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
    description: "odo o backend é em JavaScript, e o código roda no próprio domínio do fórum (por exemplo, uma página HTML hospedada no Forumeiros). Ele utiliza a sessão já autenticada do usuário e os tokens nativos do fórum para compor e enviar a mensagem privada (PM). O fluxo é simples: o usuário escolhe o tipo de solicitação, preenche os detalhes (destinatário(s), assunto e conteúdo). O sistema monta o texto em BBCode e envia um POST para o endpoint de mensagens privadas do Forumeiros usando os dados da sessão atual — sem servidor externo, sem armazenamento de credenciais e respeitando a política de mesma origem. Principais recursos: navegação pelo perfil (ex.: Inspetores/Diretores), validações de dados, suporte para múltiplos destinatários, pré-visualização e geração de BBCode, envio assíncrono com feedback de status. Requisitos: estar logado no fórum e ter permissão para enviar PMs. Resultado: notificações rápidas, padronizadas e sem atrito para a comunidade RCC no Habbo.",
    image: portfolioImg2,  
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://www.policiarcc.com/h139-tre-cpt-notificacoes-tb-tr#",
    repoUrl: "https://github.com/HiagoCarlos/Projeto-CPT-INS-DIR "},
    {
    id: 3,
    title: "Seu Projeto Aqui",
    description: "Descrição do seu projeto.",
    image: portfolioImg3, 
    tags: ["Tag1", "Tag2", "Tag3"],
    liveUrl: "https://link-da-demo.com",
    repoUrl: " "
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