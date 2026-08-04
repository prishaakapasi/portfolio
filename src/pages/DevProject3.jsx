import DevProject from './DevProject'
import coverImg from '../assets/Frame 6 (1).png'

const PROJECT = {
  title:           'Community Governance Card Maker',
  subtitle:        'A tool for making decentralized governance systems more transparent, structured, and accessible',
  tag:             'Development',
  role:            'Researcher at Princeton Human Computer Interaction Lab with Team of 3',
  timeline:        'Dec 2025 – Present',
  techStack:       'HTML, CSS, JavaScript, Figma, Supabase',
  accentColor:     'var(--dark-teal)',
  coverImage:      coverImg,

  github:       'https://github.com/prishaakapasi/nutritionlabelproject',
  liveUrl:      'https://crowcards.org',

  overview:
    'The Community Governance Card Maker is a web application designed to simplify and clarify governance structures within decentralized and online communities. Governance in social and decentralized platforms is often complex and opaque, making it difficult for users to understand decision-making processes. This project aims to make governance more transparent by transforming abstract systems into structured, visual “cards” that are easier to interpret and engage with.',

  techStackDetail:
    'The application was designed in Figma through multiple iterations, incorporating feedback from professors and user testing sessions. It was then developed using HTML, CSS, Supabase and JavaScript, focusing on clean structure and usability. The project is being built in phases, with ongoing user interviews informing design improvements. The system is also being developed with future integration in mind, particularly with decentralized platforms such as Bonfire.',

  features:
    'The platform translates complex governance models into interactive, digestible components, helping users better understand and participate in community decision-making.',
  featuresList: [
    'Dynamic governance card system to visually represent rules, roles, and decision processes',
    'User-informed design based on interviews and iterative feedback cycles',
    'Modular structure allowing customization for different communities and platforms',
    'Designed for future integration with decentralized social platforms like Bonfire',
  ],

  challenges:
    'A key challenge was translating abstract and often ambiguous governance systems into clear, structured visual formats. Conducting research into different governance schemas and distilling them into intuitive components required balancing accuracy with usability. Additionally, designing for a space that is still evolving, decentralized social platforms, meant building a flexible system that can adapt over time.',

  outcome:
    'The project is currently in active development, with a fully functional website and ongoing iterations based on user feedback. It has laid the groundwork for a scalable tool that could be integrated into decentralized platforms to improve transparency and user participation in governance.',
  outcomes: [
    'Conducted research on governance models and translated them into usable design systems',
    'Designed and developed a functional web application prototype',
    'Collaborating with Bonfire toward potential real-world integration',
  ],
}

export default function DevProject3() {
  return <DevProject project={PROJECT} />
}