import DevProject from './DevProject'
import coverImg from '../assets/uxdesignimages/tsasite.png'

const PROJECT = {
  title:           'TSA Website Redesign & Accessibility Audit',
  subtitle:        'Redesigning and optimizing a high-traffic student platform for usability, engagement, and accessibility',
  tag:             'Development',
  role:            'Web Designer & Developer in Team of 2',
  timeline:        '2024 – 2025',
  techStack:       'Wix',
  accentColor:     'var(--dark-teal)',
  coverImage:      coverImg,
  liveUrl:      'https://www.coloradotsa.org/',

  overview:
    'As part of a two-person team, I led the redesign of the Technology Student Association (TSA) website to better serve a community of over 3,000 students. The goal was to create a more engaging, resource-rich, and user-friendly platform. A year later, I was brought back to conduct a full accessibility audit and implement improvements aligned with web accessibility guidelines, ensuring the platform was inclusive and usable for all students.',

  techStackDetail:
    'The website was built and redesigned using Wix, allowing for efficient development and easy content management. Figma was used to plan layouts and improve visual hierarchy. During the accessibility audit phase, I evaluated the site against established accessibility standards, refining elements such as color contrast, navigation structure, and content clarity to improve usability across diverse users.',

  features:
    'The redesigned platform introduced new features to increase engagement, provide value to students, and support the TSA community.',
  featuresList: [
    'Integrated merchandise platform to support organization initiatives',
    'Interactive feedback forum to gather input directly from students',
    'Centralized resource hub with materials and opportunities for members',
    'Improved navigation and structure for a more intuitive user experience',
    'Accessibility enhancements including improved contrast, readability, and navigation',
  ],

  challenges:
    'One of the main challenges was designing for a large and diverse student and advisor audience with varying needs and levels of engagement. Balancing new feature integration with a clean and intuitive layout required careful prioritization. During the accessibility audit, ensuring compliance while maintaining the visual design pushed me to think critically about inclusive design and usability. I also had to ensure that future state officers could update this website without much difficulty.',

  outcome:
    'The redesigned and optimized website now serves as a central hub for over 3,000 students, improving accessibility, engagement, and overall user experience. This project strengthened my ability to design at scale, collaborate effectively, and apply accessibility principles in real-world contexts.',
  outcomes: [
    'Redesigned a high-impact website used by 3,000+ students',
    'Implemented new features to increase engagement and usability',
    'Conducted and applied a full accessibility audit based on web standards',
  ],
}

export default function DevProject4() {
  return <DevProject project={PROJECT} />
}