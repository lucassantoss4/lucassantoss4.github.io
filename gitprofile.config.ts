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
        limit: 4, // Mostra os 4 melhores. Mais que isso polui.
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
      // Use esta seção APENAS se tiver um projeto complexo que não está no GitHub
      // ou se quiser linkar para um artigo técnico/diagrama.
      projects: [],
    },
  },
  
  seo: { 
    title: 'Portfólio de Lucas Teixeira', 
    description: 'Engenharia de Software, Automação e Cloud Computing.',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'lucas-teixeira', // Ajuste para seu link real
    medium: '', 
    dev: '', 
    email: 'contadulucas@gmail.com',
    // Mantenha apenas o necessário. Backend dev não precisa de Instagram aqui.
  },
  
  resume: {
    fileUrl: '/curriculo.pdf', 
  },
  
  // LISTA TÉCNICA DIRETA: O que o recrutador busca (Keywords)
  skills: [
    'Python',
    'Automation',
    'AWS Lambda',
    'AWS S3',
    'PostgreSQL',
    'SQL',
    'Docker',
    'Git Flow',
    'CI/CD',
    'Linux',
    'Scrum',
    'Pandas',
    'Selenium',
    'Data Analysis',
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
    // Se tiver certificações AWS, coloque aqui. Isso vale ouro para Backend.
    {
      name: 'AWS Cloud Practitioner',
      body: 'Amazon Web Services',
      year: 'Em andamento',
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
  ],
  
  // Blog é opcional, se você não escreve artigos, melhor deixar oculto.
  blog: {
    source: 'dev',
    username: '', 
    limit: 2,
  },
  
  googleAnalytics: {
    id: '',
  },
  
  hotjar: { id: '', snippetVersion: 4 },
  
  themeConfig: {
    defaultTheme: 'dracula', // TEMA "DEV RAIZ": Fundo escuro, cores de sintaxe.
    disableSwitch: true, // Trava no escuro. Backend dev não usa tema claro.
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'dracula',
      'procyon',
      'dark',
    ],
  },

  footer: `Desenvolvido por Lucas Teixeira`, // Simples e direto.

  enablePWA: true,
};

export default config;
