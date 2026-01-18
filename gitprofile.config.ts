// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4', // Seu usuário correto
  },
  
  base: '/', // Configuração para site raiz

  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic', 
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [], 
      },
    },
    external: {
      header: 'Key Projects',
      // Aqui você pode adicionar projetos manuais com descrição detalhada igual a dele
      projects: [
        {
          title: 'Automação de Despesas Pessoais',
          description: 'Sistema desenvolvido em Python para tracking automático de despesas financeiras, integrando planilhas e scripts de análise de dados.',
          imageUrl: '', 
          link: 'https://github.com/lucassantoss4',
        },
        // Você pode adicionar mais projetos manuais aqui se quiser destacar algo específico
      ],
    },
  },
  
  seo: { 
    title: 'Portfolio of Lucas Teixeira', 
    description: 'Software Engineering Student & Automation Specialist',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'lucas-teixeira', // Substitua pelo seu usuário real do LinkedIn (parte final da URL)
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '', 
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'lucas@example.com', // Coloque seu email real se quiser
  },
  
  resume: {
    fileUrl: '/curriculo.pdf', // Lembre de subir o arquivo na pasta 'public'
  },
  
  // AQUI ESTÁ O TRUQUE: Ele lista muitas ferramentas específicas para parecer um expert
  skills: [
    'Python',
    'Automation',
    'Selenium',
    'Pandas',
    'AWS',
    'Cloud Computing',
    'PostgreSQL',
    'Health IT',
    'DevOps',
    'Git',
    'Docker',
    'Linux',
    'Scrum',
    'Innovation',
  ],
  
  // AQUI A MÁGICA DO TEXTO: Fiz uma versão sua baseada na dele
  experiences: [
    {
      company: 'Escrevendo na Quebrada',
      position: 'Innovation Volunteer & Python Developer',
      from: 'November 2025',
      to: 'Present',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      // Descrição rica com bullet points igual a referência
      description: 'Responsável por iniciativas de inovação e desenvolvimento de software dentro da organização.\n' +
                   '• Desenvolvo scripts de automação em Python para otimizar processos internos.\n' +
                   '• Aplico conceitos de Engenharia de Software para criar soluções escaláveis.\n' +
                   '• Colaboro em equipe utilizando metodologias ágeis para entregas contínuas.',
    },
    {
      company: 'Em Busca de Oportunidade',
      position: 'Software Engineering Student',
      from: '2023',
      to: 'Present',
      companyLink: '',
      description: 'Focado em desenvolvimento de automações, estudos aprofundados em AWS Cloud e infraestrutura de TI.\n' +
                   '• Criando projetos práticos de manipulação de dados com Pandas e PostgreSQL.\n' +
                   '• Estudando arquitetura de microsserviços e eficiência em DevOps.',
    },
  ],
  
  certifications: [
    // Se tiver certificações, coloque aqui. O Thales usa isso para encher o perfil.
    /*
    {
      name: 'AWS Cloud Practitioner (Studying)',
      body: 'Amazon Web Services',
      year: '2026 (Planned)',
      link: '',
    },
    */
  ],
  
  education: [
    {
      institution: 'Uniamerica - Descomplica',
      degree: 'Bacharelado em Engenharia de Software',
      from: '2024',
      to: '2028',
    },
  ],
  
  publications: [], 
  
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
    defaultTheme: 'procyon', // O tema escuro elegante
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'procyon',
    ],
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default config;
