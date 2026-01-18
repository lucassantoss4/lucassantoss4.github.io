// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lucassantoss4', // Seu usuário
  },
  
  /**
   * IMPORTANTE: Como seu repo é Lucas-Teixeira.github.io, 
   * a base deve ser apenas '/'
   */
  base: '/',

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
        // Limpei os projetos do criador original
        projects: [], 
      },
    },
    external: {
      header: 'My Projects',
      // Se não tiver projetos externos agora, deixe a lista vazia para ocultar a seção
      projects: [],
    },
  },
  seo: { 
    title: 'Portfolio of Lucas Teixeira', 
    description: 'Software Engineering Student & Innovation Enthusiast',
    imageURL: '' 
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/lucas-t-santos/', // Preencha aqui seu linkedin, ex: 'lucas-teixeira'
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
    email: '', // Coloque seu email se quiser
  },
  resume: {
    // Quando tiver seu PDF, coloque na pasta 'public' e mude aqui para '/seu-curriculo.pdf'
    fileUrl: '', 
  },
  skills: [
    'Python',
    'AWS',
    'PostgreSQL',
    'DevOps',
    'Git',
    'Docker',
    'Linux',
  ],
  experiences: [
    {
      company: 'Escrevendo na Quebrada',
      position: 'Voluntário de Inovação - Desenvolvedor Python | IA',
      from: 'November 2025',
      to: 'Present',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
    },
    {
      company: 'Grupo Elfa',
      position: 'Engenharia de Software - Inovação & IA',
      from: '2024',
      to: 'Present',
      companyLink: 'https://grupoelfa.com.br/',
    },
  ],
  // Limpei as seções abaixo para não aparecer "Lorem Ipsum" no seu site
  certifications: [],
  education: [
    {
      institution: 'Uniamerica - Descomplica',
      degree: 'Bacharel - Engenharia de Software',
      from: '2024',
      to: '2028',
    },
  ],
  publications: [], 
  blog: {
    source: 'dev',
    username: '', // Deixei vazio para não puxar posts de outra pessoa
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  
  themeConfig: {
    // Mudei para o tema escuro que você queria
    defaultTheme: 'procyon',

    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'procyon', // Este é o tema da foto
    ],
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
