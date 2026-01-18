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
        limit: 4, // AJUSTADO: Mostra apenas os 4 principais
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
      header: 'Projetos de Arquitetura & Automação',
      projects: [],
    },
  },
  
  seo: { 
    title: 'Portfólio de Lucas Teixeira', 
    description: 'Engenharia de Software, Automação e Cloud Computing.',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'lucas-teixeira',
    medium: '', 
    dev: '', 
    email: 'lucas.teixeira@example.com',
  },
  
  resume: {
    fileUrl: '/curriculo.pdf', 
  },
  
  // AJUSTADO: Ícones visuais (Emojis) para cada tecnologia
  skills: [
    '🐍 Python',
    '🤖 Automation',
    '☁️ AWS',
    '🐘 PostgreSQL',
    '🗄️ SQL',
    '🐳 Docker',
    '🐧 Linux',
    '🐙 Git / GitHub',
    '🚀 CI/CD',
    '🐼 Pandas',
    '🕸️ Selenium',
    '📊 Data Analysis',
    '🔄 Scrum',
  ],
  
  experiences: [
    {
      company: 'Escrevendo na Quebrada',
      position: 'Voluntário de Inovação & Dev Python',
      from: 'Nov 2025',
      to: 'Presente',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      description: 
        'Desenvolvimento de automações para otimização de processos internos.\n' +
        '• Criação de scripts Python para análise de dados e relatórios.\n' +
        '• Implementação de soluções de IA para suporte administrativo.',
    },
    {
      company: 'Em Busca de Oportunidade',
      position: 'Estudante de Engenharia de Software',
      from: '2023',
      to: 'Presente',
      companyLink: '',
      description: 
        'Foco acadêmico em arquitetura de software, infraestrutura em nuvem (AWS) e bancos de dados relacionais.',
    },
  ],
  
  certifications: [
    // Espaço reservado para futuras certificações AWS
  ],
  
  education: [
    {
      institution: 'Uniamerica - Descomplica',
      degree: 'Bacharelado em Engenharia de Software',
      from: '2024',
      to: '2028',
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
    defaultTheme: 'dracula', 
    disableSwitch: true, 
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'dracula',
      'procyon',
      'dark',
    ],
  },

  footer: `Desenvolvido por Lucas Teixeira`, 

  enablePWA: true,
};

export default config;
