import CaseStudy from './CaseStudy'
import coverImg from '../assets/uxdesignimages/Frame 6.png'

import Screen1 from '../assets/Screen 1.png'
import Screen2 from '../assets/Screen 3.png'
import Screen3 from '../assets/iPhone 16 - 3.png'
import Screen4 from '../assets/iPhone 16 - 6.png'

const PROJECT = {
  title:        'Tiger Swipe',
  subtitle:     'An application where students are recommended clubs.',
  tag:          'UX/UI Design',
  role:         'UX Designer',
  timeline:     'Jun 2024',
  tools:        'Figma',
  accentColor:  'var(--dark-teal)',
  coverImage:   coverImg,

  overview:
    'Tiger Swipe is a campus club discovery app designed for students looking to engage in extracurricular activities. By providing personalized club recommendations and a simple swipe-based interface, it helps students find organizations that match their interests, making campus life more engaging and social.',

  problem:
    'Many students struggle to discover campus organizations that align with their interests due to the fragmented nature of club information. Traditional methods like bulletin boards and social media posts are often overwhelming or incomplete. This creates a gap where students miss opportunities to engage with communities that could enhance their campus experience.',

  process:
    'I started with user research to find an application that would help improve the campus environment and solve a painpoint of current students',

 

  solution:
    'The final design is a swipe-based mobile application that recommends clubs based on student interests and past interactions. Users can swipe right to express interest in a club or left to skip. Detailed club profiles include meeting times, events, and member reviews. A recommendation algorithm personalizes suggestions, and users can track clubs they want to join, creating a seamless and engaging discovery experience.',

  
  solutionImages: [
    { src: Screen4, caption: 'Onboarding experience to have students select interests' },
    { src: Screen1, caption: 'Club card to swipe right or left to' },
    { src: Screen2, caption: 'Club card to swipe right or left to' },
    { src: Screen3, caption: 'Matches output from algorithm after swipes' },
  ],

  outcome:
    'User testing showed that students found Tiger Swipe intuitive and enjoyable, with increased interest in joining clubs compared to traditional discovery methods. The swipe interaction and personalized recommendations made finding clubs faster and more engaging. This project highlighted the importance of combining personalization with familiar, gamified interactions to improve student engagement.',

  outcomes: [
    'Improved ease of discovering campus organizations for students',
    'Positive feedback on the swipe-based interaction and recommendation algorithm',
    'Demonstrated the value of gamification in enhancing user engagement',
    'Won first at pitch competition!'
  ],
}

export default function CaseStudy6() {
  return <CaseStudy project={PROJECT} />
}