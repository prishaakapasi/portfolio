import DevProject from './DevProject'
import coverImg from '../assets/uxdesignimages/gaias.png'

const PROJECT = {
  title:           'Gaias Libertas',
  subtitle:        'A multilingual website designed to amplify a Brazilian nonprofit’s mission through immersive, nature-inspired storytelling',
  tag:             'Development',
  role:            'Web Designer & Developer',
  timeline:        '2025',
  techStack:       'Wix, Figma',
  accentColor:     'var(--dark-teal)',
  coverImage:      coverImg,

  // github:       'https://github.com/yourusername/gaias',
  liveUrl:        'https://www.gaialibertas.org/',

  overview:
    'Gaias Libertas is a website created for a Brazilian nonprofit focused on environmental awareness and conservation. The goal of the project was to design a digital space that reflects the organization’s mission while making information accessible to a global audience. I worked closely with the team through multiple meetings to understand their vision and translated it into an immersive, user-friendly website experience.',

  techStackDetail:
    'The website was built using Wix to allow for efficient development and easy future updates by the nonprofit team. Figma was used to plan layouts and visual hierarchy, while custom styling and interactions were implemented within Wix to enhance the user experience. A key technical focus was implementing multilingual functionality, allowing users to seamlessly switch between languages and broadening accessibility for both local and international audiences.',

  features:
    'The platform combines storytelling, accessibility, and functionality to support the nonprofit’s outreach and engagement goals.',
  featuresList: [
    'Multilingual support enabling users to switch between languages for global accessibility',
    'Immersive rainforest-inspired design using layered greens and natural visuals',
    'Dedicated “Donate Now” page to encourage and streamline contributions',
    'Initiatives page highlighting ongoing projects and impact',
    'Dynamic blog system allowing the organization to publish updates and stories',
  ],

  challenges:
    'One of the main challenges was balancing aesthetic richness with usability. I wanted to capture the depth and vibrancy of the Brazilian rainforest without overwhelming users or distracting from key information. Additionally, implementing clean and intuitive multilingual navigation required careful structuring to ensure a seamless experience across languages.',

  outcome:
    'The final product is a visually engaging and functional website that empowers Gaias Libertas to share their mission, connect with a wider audience, and drive meaningful action. This project strengthened my ability to collaborate with real clients, translate abstract visions into concrete designs, and build for both impact and usability.',
  outcomes: [
    'Designed and launched a live website for an international nonprofit',
    'Implemented multilingual accessibility to expand global reach',
    'Developed a cohesive visual identity inspired by the Brazilian rainforest',
  ],
}

export default function DevProject2() {
  return <DevProject project={PROJECT} />
}