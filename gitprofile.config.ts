// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4', 
  },
  
  base: '/',

  projects: {
    github: {
      display: true,
      header: 'My GitHub Projects', // Seus projetos reais ficam aqui
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
    
    // --- O TRUQUE COMEÇA AQUI ---
    // Vamos usar esta seção para imitar a área de "Skills" detalhada dele
    external: {
      header: 'Skills & Technologies', // Renomeamos o título para parecer Skills
      projects: [
        {
          title: 'Python Ecosystem',
          description: 'Pandas, Numpy, Scikit-learn, PyCaret, Matplotlib, Seaborn, Plotly, Folium, BeautifulSoup, Selenium for automation and data analysis.',
          imageUrl: '', 
          link: '', // Deixe vazio para não parecer um link clicável
        },
        {
          title: 'SQL & Databases',
          description: 'Create, modify and retrieve data from relational database management systems (e.g. MySQL, PostgreSQL). Experience with complex queries.',
          imageUrl: '', 
          link: '',
        },
        {
          title: 'Cloud Platforms (AWS)',
          description: 'Worked with AWS services including S3, DynamoDB, Rekognition, API Gateway, Lambda, BigQuery and IAM permissions.',
          imageUrl: '', 
          link: '',
        },
        {
          title: 'DevOps & Tools',
          description: 'Familiarity with Git/GitHub for version control. Docker for containerization and creating images for models and applications.',
          imageUrl: '', 
          link: '',
        },
      ],
    },
  },
  
  seo: { 
    title: 'Portfolio of Lucas Teixeira', 
    description: 'Software Engineering Student',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'lucas-teixeira',
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
    medium: 'lucasteixeira',
    dev: '', 
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'lucas@example.com',
  },
  
  resume: {
    fileUrl: '/curriculo.pdf', 
  },
  
  // Deixamos vazio para não duplicar informação
  skills: [],
  
  experiences: [
    {
      company: 'Escrevendo na Quebrada',
      position: 'Innovation Volunteer',
      from: 'November 2025',
      to: 'Present',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      description: 'Managing and developing POCs for innovative projects using Automation and AI tools.\n' +
                   '• Managing the development of internal tools utilizing Python scripts.\n' +
                   '• Developed an automation solution for data entry using Selenium and Pandas.',
    },
    {
      company: 'Em Busca de Oportunidade',
      position: 'Software Engineering Student',
      from: '2023',
      to: 'Present',
      companyLink: '',
      description: 'Focusing on Cloud Computing (AWS), DevOps practices, and Python automation projects.',
    },
  ],
  
  certifications: [],
  
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
    defaultTheme: 'procyon', 
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
