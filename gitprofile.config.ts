// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4', 
  },
  
  base: '/',

  projects: {
    github: {
      display: true,
      header: 'Projetos em Destaque',
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
    external: {
      header: 'Projetos de Arquitetura',
      projects: [],
    },
  },
  
  seo: { 
    title: 'Portfólio de Lucas Teixeira', 
    description: 'Engenharia de Software, Automação e Cloud Computing.',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'https://www.linkedin.com/in/lucas-t-santos/',
    medium: '', 
    dev: '', 
    // Email aparece como ícone no topo ou rodapé
    email: 'contadulucas@gmail.com', 
  },
  
  resume: {
    fileUrl: '/curriculoLucasTeixeira.pdf', 
  },
  
  // SKILLS: Agrupadas para parecer visualmente organizado
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
        'Liderança técnica em projetos de impacto social focados em automação e eficiência.\n' +
        '• Desenvolvimento de bots e scripts em Python para automatizar a coleta de dados, reduzindo o tempo manual em 40%.\n' +
        '• Implementação de pipelines de dados para relatórios administrativos automáticos.\n' +
        '• Mentoria técnica e disseminação de cultura ágil dentro da equipe voluntária.',
    },
    {
      company: 'Em Busca de Oportunidade',
      position: 'Estudante de Engenharia de Software',
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
    defaultTheme: 'black', 
    disableSwitch: true, 
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'black', 
      'dark',
    ],
  },

  footer: `Lucas Teixeira © 2026`, 

  enablePWA: true,
};

export default config;
