// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4', 
  },
  
  base: '/',

  projects: {
    github: {
      display: true,
      header: 'Repositórios em Destaque',
      mode: 'automatic', 
      automatic: {
        sortBy: 'stars',
        limit: 4, 
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [], 
      },
    },
    
    // AQUI ESTÃO OS NOVOS PROJETOS ORGANIZADOS
    external: {
      header: 'Projetos de Arquitetura & Automação',
      projects: [
        {
          title: 'Innovation Projects Manager (CRUD)',
          description: 'Sistema de gestão de projetos desenvolvido para substituir planilhas complexas. Centraliza dados em banco SQL, eliminando redundância e permitindo geração de dashboards em tempo real.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/innovation-projects-manager',
        },
        {
          title: 'Corporate Automation Suite (RPA)',
          description: 'Conjunto de algoritmos Python para automação de ciclo de vida de usuários (Onboarding/Offboarding) e Web Scraping para monitoramento de editais de inovação.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/corporate-automation-suite',
        },
        {
          title: 'Teams Comms Orchestrator',
          description: 'Solução Low-code com Power Automate para orquestrar notificações críticas em massa via Microsoft Teams. Aumentou a taxa de leitura e reduziu ruído de e-mails.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/teams-comms-orchestrator',
        },
      ],
    },
  },
  
  seo: { 
    title: 'Portfólio de Lucas Teixeira', 
    description: 'Engenharia de Software, Automação e Cloud Computing.',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'lucas-t-santos', 
    medium: '', 
    dev: '', 
    email: 'contadulucas@gmail.com', 
  },
  
  resume: {
    fileUrl: '/curriculoLucasTeixeira.pdf', 
  },
  
  skills: [
    // Backend & Languages
    'Python',
    'SQL',
    'PostgreSQL',
    'Shell Scripting',
    
    // Automation & Data
    'Selenium',
    'Pandas',
    'Numpy',
    'Data Analysis',
    
    // Cloud & DevOps
    'AWS Lambda',
    'AWS S3',
    'Docker',
    'Git / GitHub',
    'CI/CD Pipelines',
    'Linux Server',
    
    // Methodologies
    'Scrum',
    'Clean Code',
  ],
  
  experiences: [
    {
      company: 'Escrevendo na Quebrada',
      position: 'Voluntário de Inovação & Dev Python',
      from: 'Novembro 2025',
      to: 'Presente',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      description: 
        'Atuo no desenvolvimento de soluções tecnológicas focadas em eficiência operacional e transformação digital para a área de Inovação Corporativa. Minha responsabilidade é substituir processos manuais por sistemas escaláveis, garantindo integridade de dados e agilidade na tomada de decisão.',
    },
    {
      company: 'Grupo Elfa',
      position: 'Engenharia de Software - Inovação & IA',
      from: '2023',
      to: 'Presente',
      companyLink: '',
      description: 
        'Foco intensivo em desenvolvimento Backend, Arquitetura de Microsserviços e Cloud Computing.\n' +
        '• Projetos práticos de manipulação de dados em larga escala usando Pandas e SQL.\n' +
        '• Estudos avançados em infraestrutura como código (IaC) e containerização com Docker.\n' +
        '• Desenvolvimento de APIs RESTful seguindo boas práticas de segurança e escalabilidade.',
    },
  ],
  
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      body: 'Amazon Web Services (Em preparação)',
      year: '2026',
      link: 'https://aws.amazon.com/certification/',
    },
    {
      name: 'Python for Data Science and Automation',
      body: 'Udemy / Coursera',
      year: '2025',
      link: '',
    },
    {
      name: 'Git & GitHub: Do Zero ao Avançado',
      body: 'Curso Técnico',
      year: '2024',
      link: '',
    },
    {
      name: 'SQL Database Masterclass',
      body: 'Formação Técnica',
      year: '2024',
      link: '',
    },
  ],
  
  education: [
    {
      institution: 'Uniamerica - Descomplica',
      degree: 'Bacharelado em Engenharia de Software',
      from: '2024',
      to: '2028',
    },
    {
      institution: 'Ensino Técnico Autodidata',
      degree: 'Foco em Automação e Cloud',
      from: 'Continua',
      to: 'Presente',
    },
  ],

  // AQUI ESTÃO AS PUBLICAÇÕES ATUALIZADAS
  publications: [
    {
      title: 'Na minha máquina funciona: Expondo seu Localhost',
      conferenceName: '', 
      journalName: 'Artigo Técnico',
      authors: 'Lucas Teixeira',
      link: 'https://linkedin.com/in/lucas-t-santos', 
      description:
        'Guia sobre como conectar seu ambiente local (localhost) com o mundo real usando Túneis, essencial para testar Webhooks e apresentar projetos. Comparativo técnico entre ngrok (debug), Cloudflare Tunnel (domínios fixos e gratuito) e Localtunnel (open source).',
    },
    {
      title: 'Otimização de Processos com Python e Selenium',
      conferenceName: '', 
      journalName: 'Estudo de Caso',
      authors: 'Lucas Teixeira',
      link: 'https://linkedin.com/in/lucas-t-santos', 
      description:
        'Análise de como a automação de scripts reduziu em 40% o tempo operacional de tarefas administrativas. Aborda o uso de bibliotecas como Pandas para manipulação de dados e Selenium para interação web em ambientes corporativos.',
    },
  ],
  
  blog: {
    source: 'dev',
    username: '', 
    limit: 2,
  },
  
  googleAnalytics: {
    id: '',
  },
  
  hotjar: { id: '', snippetVersion: 6 },
  
  themeConfig: {
    defaultTheme: 'procyon', 
    disableSwitch: false, 
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'procyon', 
      'dracula', 
      'dark',    
    ],
  },

  footer: `Lucas Teixeira © 2026`, 

  enablePWA: true,
};

export default config;
