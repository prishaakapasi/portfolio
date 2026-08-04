import DevProject from './DevProject'
import coverImg from '../assets/uxdesignimages/paintpalz.png'

const PROJECT = {
  title:           'PaintPalz',
  subtitle:        'A therapeutic creative app designed to support pediatric hospital patients through art and connection',
  tag:             'Engineering',
  role:            'Product Designer, UI/UX Designer, Mobile Developer',
  timeline:        'Jun 2024 –  Jun 2025',
  techStack:       'React Native, Expo, JavaScript, Supabase, Figma, Adobe Illustrator',
  accentColor:     'var(--dark-teal)',
  coverImage:      coverImg,
  github:          'https://github.com/prishaakapasi/paintpalzapp',

  overview:
    'PaintPalz is a mobile app designed as a therapeutic outlet for pediatric hospital patients. Inspired by my experiences observing how technology can transform hospital environments, I created PaintPalz to help young patients feel less isolated and more emotionally supported during their stay. The app fosters creativity, self-expression, and connection through interactive art-based experiences and a shared community space.',

  techStackDetail:
    'PaintPalz was developed using React Native and Expo to ensure seamless cross-platform compatibility across iOS and Android devices. Supabase supports data storage and user-generated content, including artwork and profiles. The interface was designed in Figma through iterative wireframing and prototyping, while custom graphics, including over 100 avatars and UI elements, were created in Adobe Illustrator. The system is built with modular, scalable components to support future expansion into real-world hospital settings.',

  features:
    'The app combines guided and open-ended creative tools with social and gamified elements to encourage consistent engagement and emotional expression.',
  featuresList: [
    'Avatar creation system with 100+ inclusive, customizable avatars tied to user identity and experience',
    'Paint-by-numbers feature offering structured, therapeutic creative activities with prompts and color randomization',
    'Free drawing canvas with adjustable brushes, colors, and a 300+ prompt generator to inspire creativity',
    'Personal gallery to save and reflect on artwork, with option to share to a community gallery',
    'Gamified reward system where users earn coins to customize avatars and encourage continued engagement',
  ],

  challenges:
    'One of the main challenges was designing an interface that balanced simplicity with meaningful functionality for a young and potentially stressed user base. Ensuring smooth, responsive drawing interactions across devices, especially iPads, required careful optimization. Additionally, I focused on creating an emotionally thoughtful experience, where every design choice, from palette to navigation, felt calming, intuitive, and inclusive.',

  outcome:
    'PaintPalz evolved into a fully functional application that demonstrates how technology can support emotional well-being through creative expression. The project strengthened my skills in both mobile development and human-centered design, while reinforcing my interest in building tools that make a tangible impact on people’s lives.',
  outcomes: [
    'Designed and developed a cross-platform therapeutic art application',
    'Created 100+ custom-designed avatars and a cohesive visual system',
    'Explored the intersection of technology, creativity, and healthcare through human-centered design',
  ],
}

export default function DevProject1() {
  return <DevProject project={PROJECT} />
}