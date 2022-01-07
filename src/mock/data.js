import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rodney Breslin', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rodney Breslin',
  subtitle: 'Welcome to my website',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a senior at Wayne State University.',
  paragraphTwo: 'Majoring in Computer Technology',
  paragraphThree: 'Hardworking and passionate for software devlopment and have created multiple projects to display my coding ability.',
  resume: 'https://drive.google.com/file/d/1bo56hudh64_hyHHqSJqainW2NT8lOHNH/preview', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'astar.jpg',
    title: 'A* Search Algorithm',
    info: ' Collaborated with a team',
    info2: 'Implemented the A* Search Algorithm for a final project.',
    url: '',
    repo: 'https://github.com/richardbreslin/AStar-search-demo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'feed.JPG',
    title: 'Feed the Hungry Application',
    info: 'Developed as a 3 person group project using Kivy, KivyMD, Python, and SQLite3',
    info2: 'Application can store login data and can display data in a table.',
    url: '',
      repo: 'https://github.com/rbreslin18/FeedTheHungry', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bad.JPG',
    title: 'Live Chat Application',
    info: 'A chat application using Node.js and Socket.io as well as Express.',
    info2: 'Allows users to input username and join, then type messages to others and also see others messages in real time.',
    url: 'https://bad-chat.herokuapp.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rodneybreslin@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/rodneybreslin?lang=en',
    },
 
    {
      id: nanoid(),
      name: 'linkedin',
        url: 'https://www.linkedin.com/in/rodney-breslin/',
    },
    {
      id: nanoid(),
      name: 'github',
        url: 'https://github.com/rbreslin18/badsquad-live-chat',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
