import CaseStudy from './CaseStudy'
import coverImg from '../assets/uxdesignimages/Frame 7.png'

import wireframe1 from '../assets/wildscapewireframe.png'
import wireframe2 from '../assets/wilscapewireframe1.png'
import screen1 from '../assets/wildscapescreen1.png'
import screen2 from '../assets/wildscapescreen2.png'

const PROJECT = {
  title:        'Wildscape',
  subtitle:     'Shopping web application for camping gear',
  tag:          'UX/UI Design',
  role:         'UX Designer',
  timeline:     'Jun 2024',
  tools:        'Figma',
  accentColor:  'var(--dark-teal)',
  coverImage:   coverImg,

  overview:
    'Wildscape is a responsive web application designed for a camping gear store. The goal was to create a visually engaging and functional online shopping experience that captures the adventure and freedom of camping while making it easy for users to browse and purchase products.',

  problem:
    'Users often struggle to find outdoor gear online because product catalogs are overwhelming and lack intuitive organization. Many websites fail to provide context or inspiration for camping activities, making it harder for customers to choose the right products. The design challenge was to create a site that balances visual storytelling, usability, and seamless e-commerce functionality.',

  process:
    'I began by conducting competitive analysis of existing outdoor gear websites and identifying usability gaps. Next, I created user personas and mapped customer journeys to highlight key pain points in browsing and purchasing. I developed low-fidelity wireframes to iterate on layout and navigation, followed by mid-fidelity prototypes in Figma to test visual hierarchy and interaction flow. Usability testing with potential users helped refine the product filtering, checkout process, and overall visual design.',

  processImages: [
    { src: wireframe1, caption: 'Low-fidelity wireframe of the homepage layout' },
    { src: wireframe2, caption: 'Wireframe showing product listing and filtering options' },
  ],

  solution:
    "The final design features a clean, responsive layout that emphasizes visual storytelling and product discoverability. Key features include curated product categories, inspirational camping imagery, detailed product pages, and a streamlined checkout process. Navigation and filtering were optimized to help users quickly find what they need, while the design aesthetic evokes the outdoors, reinforcing the brand’s adventurous identity.",

  solutionImages: [
    { src: screen1, caption: 'Homepage highlighting featured camping gear and imagery' },
    { src: screen2, caption: 'Product listing page for easy browsing' },
  ],

  outcome:
    'User testing indicated that customers found Wildscape intuitive and visually appealing. The improved navigation and filtering reduced the time needed to find products, while the visual storytelling increased user engagement. The project reinforced the importance of balancing functionality with an immersive and brand-aligned experience.',

  outcomes: [
    'Enhanced usability for browsing and purchasing camping gear',
    'Positive feedback on visual storytelling and immersive design',
    'Improved product discoverability and overall customer engagement',
  ],
}

export default function CaseStudy7() {
  return <CaseStudy project={PROJECT} />
}