// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4', 
  },
  
  base: '/',

  projects: {
    github: {
      display: false,
      header: 'Repositórios em Destaque',
      mode: 'manual', 
      automatic: {
        sortBy: 'stars',
        limit: 4, 
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
          'lucassantoss4/devradar',
          'lucassantoss4/innovation-projects-manager',
          'lucassantoss4/corporate-automation-suite',
          'lucassantoss4/teams-comms-orchestrator',
        ],
      },
    },
    
    external: {
      header: 'Projetos de Engenharia & Inteligência Artificial',
      projects: [
        {
          title: 'Predictive AI Inventory Optimizer',
          description: 'Motor de machine learning construído com Scikit-Learn e Pandas para prever demanda, otimizando estoques e integrando previsões diretamente ao ERP via APIs REST.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/seu-repositorio-aqui', // Lembre-se de colocar o link real aqui
        },
        {
          title: 'DevRadar (Market Intelligence Platform)',
          description: 'Plataforma de monitoramento automatizado de editais e eventos usando OCR (docling) e Web Scraping (crawl4ai). Arquitetura backend baseada em Flask, orquestrada via Kestra e 100% conteinerizada com Docker.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/devradar',
        },
        {
          title: 'Innovation Projects Manager (CRUD)',
          description: 'Sistema de gestão de projetos desenvolvido para substituir planilhas complexas. Centraliza dados em banco SQL, eliminando redundância e permitindo geração de dashboards em tempo real.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/innovation-projects-manager',
        },
        {
          title: 'Corporate Automation Suite (Python)',
          description: 'Conjunto de algoritmos Python para automação de ciclo de vida de usuários (Onboarding/Offboarding) integrados a sistemas corporativos.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4/corporate-automation-suite',
        },
      ],
    },
  },
  
  seo: { 
    title: 'Portfólio de Lucas Teixeira', 
    description: 'Engenheiro de Software em formação com ênfase em Backend, Inteligência Artificial e Sistemas Escaláveis.',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'lucas-t-santos', 
    medium: '', 
    dev: '', 
    email: 'contadulucas@gmail.com', 
  },
  
  resume: {
    fileUrl: '/CV_Lucas_Santos_SWE.pdf', // Sugiro renomear seu arquivo PDF na pasta public para este nome
  },
  
  skills: [
    'Python',
    'Java',
    'Flask / FastAPI',
    'REST APIs',
    'SQL',
    'PostgreSQL',
    'Machine Learning',
    'Scikit-Learn',
    'Pandas',
    'Numpy',
    'Docker',
    'Git / GitHub',
    'AWS Cloud',
    'Linux',
    'Clean Code',
  ],
  
  experiences: [
    {
      company: 'Grupo Elfa',
      position: 'Software Engineering Intern (Innovation & AI)',
      from: 'Julho 2024',
      to: 'Presente',
      companyLink: '',
      description: 'Arquitetura de soluções focadas em escalabilidade. Engenharia de motor de previsão de demanda utilizando Machine Learning, reduzindo rupturas projetadas em 30%. Construção de camadas de integração centralizadas via REST APIs e pipelines de dados automatizados.',
    },
    {
      company: 'Escrevendo na Quebrada',
      position: 'Líder de Automação de Processos',
      from: 'Setembro 2025',
      to: 'Presente',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      description: 'Liderança técnica no desenvolvimento de soluções escaláveis. Criação de Chatbot no WhatsApp com fluxos de conversação inteligentes para escalar o atendimento aos alunos, além do mapeamento e integração de dados de editais públicos.',
    },
    {
      company: 'Educafro',
      position: 'Professor de Programação Voluntário',
      from: 'Abril 2025',
      to: 'Agosto 2025',
      companyLink: '',
      description: 'Ensino de fundamentos de Ciência da Computação e lógica de programação em Python para grupos diversos. Desenvolvimento de sistema interno de correção automatizada, reduzindo o tempo administrativo em 50%.',
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
      name: 'Python for Data Science and Machine Learning',
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
      degree: 'Foco em Engenharia de Software e Cloud',
      from: 'Continua',
      to: 'Presente',
    },
  ],

  publications: [
    {
      title: 'Na minha máquina funciona: Expondo seu Localhost',
      conferenceName: '', 
      journalName: 'Artigo Técnico',
      authors: 'Lucas Teixeira',
      link: 'https://linkedin.com/in/lucas-t-santos', 
      description: 'Guia sobre como conectar seu ambiente local (localhost) com o mundo real usando Túneis, essencial para testar Webhooks e apresentar projetos. Comparativo técnico entre ngrok (debug), Cloudflare Tunnel (domínios fixos e gratuito) e Localtunnel (open source).',
    },
    {
      title: 'Otimização de Processos com Python e Integração de Sistemas',
      conferenceName: '', 
      journalName: 'Estudo de Caso',
      authors: 'Lucas Teixeira',
      link: 'https://linkedin.com/in/lucas-t-santos', 
      description: 'Análise de como a engenharia de scripts reduziu em 40% o tempo operacional de tarefas administrativas. Aborda o uso de bibliotecas como Pandas para manipulação de dados e integrações web em ambientes corporativos.',
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
    defaultTheme: 'dark', 
    disableSwitch: true, 
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'dark',
    ],
  },

  footer: `Lucas Teixeira © 2026`, 

  enablePWA: true,
};

export default config;
