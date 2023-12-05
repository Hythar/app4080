// gitprofile.config.js

const config = {
  github: {
    username: 'Hythar', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['App4080-Project', 'curly-palm-tree', 'todolist','my_cv'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'abdirizaq-hathar',
    twitter: 'AbdiBary',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  /*resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  */
  skills: [
    'PHP',
    //'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    //'Docker',
    //'PHPUnit',
    'CSS',
    //'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Hass Petroleum ltd',
      position: 'intern',
      from: 'September 2022',
      to: 'May 2023',
      companyLink: '',
    },
    {
      company: 'MPC',
      position: 'System Manager',
      from: 'July 2121',
      to: 'August 2021',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], 
  education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],*/

  // To hide the `My Projects` section, keep it empty.
  /*
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  */
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
      
    ],

    // Custom theme
    customTheme: {
      primary: '#00FFC6',    // Bright neon green, giving a vibrant, energetic feel
      secondary: '#0A84FF',  // Electric blue, often associated with futuristic themes
      accent: '#FF00FF',     // Neon pink, adding a vivid pop of color
      neutral: '#1C1C1E',    // Dark gray for a sleek, modern background
      'base-100': '#2D2D30', // A slightly lighter shade of dark gray for base elements
      '--rounded-box': '1rem',    // Smoother, less pronounced rounding for boxes
      '--rounded-btn': '1rem',    // Similar rounding for buttons for consistency
    }
    ,
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `App4080 Group Project`,
};

export default config;
