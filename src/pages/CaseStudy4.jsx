import CaseStudy from './CaseStudy'
import coverImg from '../assets/uxdesignimages/Frame 4.png'

// 👉 ADD YOUR EXPORTED FIGMA SCREENS HERE
// import onboardingImg from '../assets/uxdesignimages/onboarding.png'   // add file to assets first
// import lessonImg from '../assets/uxdesignimages/lesson.png'           // add file to assets first
// import quizImg from '../assets/uxdesignimages/quiz.png'               // add file to assets first
// import dashboardImg from '../assets/uxdesignimages/dashboard.png'     // add file to assets first
import doctorDashboardImg from '../assets/uxdesignimages/Doctor Dashboard.png'
import chatScreenwithAIImg from '../assets/uxdesignimages/Chat Screen with AI.png'
import JournalingImg from '../assets/uxdesignimages/Journaling.png'
import ParentDashboardImg from '../assets/uxdesignimages/Parent Dashboard.png'


// (Optional) process images like wireframes / flows
// import wireframeImg from '../assets/uxdesignimages/wireframe.png'
// import flowImg from '../assets/uxdesignimages/userflow.png'

const PROJECT = {
  title:        'AI Learning Assistant for Pediatric Patients',
  subtitle:     'NSF AI Institute of Student-AI Teaming',
  tag:          'UX/UI Design',
  role:         'UX Designer',
  timeline:     'Feb – Jun 2025',
  tools:        'Figma',
  accentColor:  'var(--dark-teal)',
  coverImage:   coverImg,

  // overviewImage: onboardingImg,  // uncomment once you add onboarding.png to assets

  overview:
    'This project explores how AI can support pediatric patients in understanding their medical conditions through engaging, age-appropriate learning experiences. The application combines interactive lessons, conversational AI, and visual storytelling to make complex health information more accessible. In parallel, it provides healthcare professionals with a dashboard to monitor patient comprehension and progress.',

  problem:
    'Pediatric patients often struggle to understand their diagnoses due to complex medical language, limited attention spans, and anxiety around healthcare environments. Existing educational materials are typically designed for adults or lack interactivity, making them ineffective for younger audiences. Additionally, doctors have limited visibility into how well patients understand their conditions outside of appointments. This creates a gap in both patient education and ongoing care.',

  process:
    'I began by conducting research on pediatric behaviors and reviewing literature on human-AI teaming in education. Based on these insights, I explored early concepts through wireframes and user flows, focusing on simplifying complex medical information and creating engaging interactions tailored for younger users.',



  solution:
    'The final design is an AI-powered learning assistant tailored for pediatric users. It features interactive modules that break down medical concepts into simple, digestible pieces using visuals, quizzes, and conversational guidance. A friendly AI character guides users through content, adapting explanations based on their responses. On the provider side, a dashboard presents patient progress, quiz results, and engagement metrics.',

  solutionImages: [
    // { src: onboardingImg, caption: 'Onboarding experience introducing the AI assistant' },       // add onboarding.png
    // { src: lessonImg, caption: 'Interactive lesson simplifying medical concepts with visuals' },  // add lesson.png
    // { src: quizImg, caption: 'Quiz module reinforcing learning through feedback' },               // add quiz.png
    { src: chatScreenwithAIImg, caption: 'Conversational AI interface providing personalized guidance' },
    { src: JournalingImg, caption: 'Journaling feature encouraging reflection and emotional expression' },
    // { src: dashboardImg, caption: 'Patient dashboard tracking learning progress and activity' }, // add dashboard.png
    { src: doctorDashboardImg, caption: 'Doctor dashboard monitoring patient comprehension and engagement' },
    { src: ParentDashboardImg, caption: 'Parent dashboard offering insights into child progress and support' },
  ],

  outcome:
    'This project demonstrated the potential of AI-driven interfaces in improving patient education and engagement. Usability testing showed that users found the interface approachable and easier to understand compared to traditional materials. The project highlighted the importance of designing for emotional context, especially for pediatric users.',

  outcomes: [
    'Improved clarity and accessibility of medical information for pediatric users',
    'Positive feedback on engagement and ease of use during testing',
    'Established a scalable framework for AI-assisted patient education tools',
  ],
}

export default function CaseStudy4() {
  return <CaseStudy project={PROJECT} />
}