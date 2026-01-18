// gitprofile.config.ts

const config = {
  github: {
    username: 'lucassantoss4', 
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 4, // Menos projetos automáticos para dar destaque aos manuais igual ao dele
        exclude: { forks: false, projects: [] },
      },
      manual: {
        // Coloque aqui os nomes REAIS dos seus repositórios para aparecerem primeiro
        projects: ['lucassantoss4/nome-do-seu-projeto-principal'], 
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Automated Expense Tracker',
          description: 'Desenvolvimento de uma ferramenta de automação para coleta e análise de despesas financeiras em Python, com integração de banco de dados PostgreSQL.',
          imageUrl: 'https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg',
          link: 'https://github.com/lucassantoss4',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio | Lucas Teixeira',
    description: 'Software Engineering Student & Automation Developer',
    imageURL: '',
  },
  social: {
    linkedin: 'lucas-teixeira', // AJUSTE: coloque seu id real do linkedin
    x: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    website: '',
    phone: '', // Se quiser igual ao dele: '+55 (11) 9XXXX-XXXX'
    email: 'contadulucas@gmail.com',
  },
  resume: {
    fileUrl: '/CurrículoDadosIA.pdf', // Certifique-se de subir o arquivo na pasta 'public'
  },
  skills: [
    'PYTHON (Pandas, Numpy, Selenium, BeautifulSoup)',
    'SQL (PostgreSQL, MySQL)',
    'CLOUD (AWS S3, Lambda, DynamoDB)',
    'VERSION CONTROL (Git, GitHub)',
    'DOCKER & CONTAINERIZATION',
    'DATA VISUALIZATION (Power BI, Matplotlib)',
    'AUTOMATION & SCRAPING',
    'HEALTH IT CONCEPTS',
    'DEVOPS PIPELINES',
  ],
  experiences: [
    {
      company: 'Escrevendo na Quebrada',
      position: 'Innovation Volunteer & Python Developer',
      from: 'November 2025',
      to: 'Present',
      companyLink: 'https://www.escrevendonaquebrada.org.br/',
      description: 'Liderando iniciativas de inovação tecnológica em ambiente de terceiro setor.\n• Desenvolvimento de scripts de automação para otimização de fluxos de trabalho.\n• Implementação de soluções de software utilizando Python para análise de dados internos.\n• Uso de metodologias ágeis (Scrum) para gestão de voluntariado e tecnologia.',
    },
    {
      company: 'Grupo Elfa',
      position: 'Software Engineering Intern',
      from: '2024',
      to: 'Present',
      companyLink: 'https://grupoelfa.com.br/',
      description: 'Atuação em projetos de Inovação e Inteligência Artificial no setor de saúde (Health IT).\n• Auxílio no desenvolvimento de ferramentas para eficiência operacional.\n• Estudo e aplicação de infraestrutura em nuvem (AWS) e bancos de dados relacionais.',
    },
  ],
  certifications: [
    {
      name: 'AWS Cloud Practitioner',
      body: 'Amazon Web Services',
      year: '2025',
      link: '',
    },
    {
      name: 'Python for Data Science',
      body: 'Alura / Coursera',
      year: '2024',
      link: '',
    },
  ],
  education: [
    {
      institution: 'Uniamerica - Descomplica',
      degree: 'Bachelor in Software Engineering',
      from: '2024',
      to: '2028',
    },
  ],
  // O Thales não tem publicações, mas usa essa área para "Keywords" ou outros detalhes
  publications: [],
  themeConfig: {
    defaultTheme: 'procyon',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: ['light', 'dark', 'procyon'],
  },
  footer: `Made with ❤️ by Lucas Teixeira`,
};

export default config;
