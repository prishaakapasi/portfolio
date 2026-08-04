import CaseStudy from './CaseStudy'
import coverImg from '../assets/uxdesignimages/Frame 5.png'
import LandingPage from '../assets/uxdesignimages/Landing Page.png'
import mapView from '../assets/uxdesignimages/Map View.png'
import ExplorePage from '../assets/uxdesignimages/Explore Page.png'
const PROJECT = {
  title:        'The Forum',
  subtitle:     'A centralized dashboard for campus events',
  tag:          'UX/UI Design',
  role:         'UX Designer in Team of 3',
  timeline:     'Jan – Current',
  tools:        'Figma',
  accentColor:  'var(--dark-teal)',
  coverImage:   coverImg,

  overview:
    'This platform is created for Princeton students to have access to events and important information in a centralized place.',
  // overviewImage: null,
  // overviewImages: [],

  problem:
    "Students struggle to discover relevant campus events because information is scattered across listservs, group chats, and social media. They hear about things too late, miss events they'd actually care about, and have no way to know if their friends are going. As a result, students miss experiences that would have mattered to them, and organizations pour effort into events that never reach the right people.",
  // problemImage: null,
  // problemImages: [],

  process:
    'After recieving the Product Requirements Document from the Product Management Team, our design team began by brainstorming different colors and layouts that would appeal to Princeton students. We wanted to create something fun and vibrant that made students excited to use the application.',
  processImages: [
    // { src: myImg, caption: 'User research affinity map' },
  ],

  solution:
    "Build a centralized campus event discovery platform that enables student organization leaders to easily create and promote events. The platform personalizes event discovery through algorithmic recommendations tailored to each student’s interests. It also allows students to save and track events they plan to attend, while providing visibility into which events their friends are going to, fostering a more social and engaging campus experience.",
  solutionImages: [
      { src: LandingPage, caption: 'Landing Page where users can login and get a brief overview of the Forum' },
      { src: mapView, caption: 'Map view where users can see events with adjustable timeline and find friends option' },
      { src: ExplorePage, caption: 'Explore page where users can access different elements of platform' },
    ],

  outcome:
    'Our development team is now currently developing this design and turning it into an applicaiton. We hope to have it deployed by the end of the year.',
  outcomes: [
    // '40% improvement in task completion rate',
  ],
  // outcomeImage: null,
  // outcomeImages: [],
}
// ─────────────────────────────────────────────────────────────────────────────

export default function CaseStudy5() {
  return <CaseStudy project={PROJECT} />
}
