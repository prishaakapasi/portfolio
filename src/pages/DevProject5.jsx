import DevProject from "./DevProject";
import coverImg from "../assets/Frame 8.png";

const PROJECT = {
  title: "Synora",
  subtitle:
    "An adaptive application supporting speech and motor function for individuals living with Parkinson's disease",
  tag: "Development",
  role: "Developer & Designer in Team of 3",
  timeline: "Apr 2026",
  techStack: "React, CSS, Python, JavaScript, Machine Learning, Figma",
  accentColor: "var(--dark-teal)",
  coverImage: coverImg,
  github: "https://github.com/prishaakapasi/hackprinceton",

  overview:
    'Synora was born out of personal experiences with individuals affected by Parkinson\'s disease. Over 10 million people worldwide live with the condition, with nearly 90% experiencing speech impairments and 68% affected by Freezing of Gait: a disabling symptom where individuals suddenly feel as if they are "glued" to the ground. As dopamine production declines, the basal ganglia can no longer regulate movement automatically, leading to disrupted, effortful motion. Synora addresses this by using sound-based motor cues to help re-engage the motor cortex, enabling more controlled and fluid movement, while leveraging machine learning to process and clarify impaired speech into clear, understandable output.',

  techStackDetail:
    "Synora was developed using React for cross-platform deployment. The speech processing pipeline uses machine learning models trained to recognize and interpret Parkinson's-affected speech patterns, addressing a gap left by mainstream voice assistants like Siri that routinely fail users with speech impairments. Audio-based motor cueing was implemented using precisely timed sound sequences grounded in neurological research on rhythmic auditory stimulation. Figma was used for interface design, with a strong focus on accessibility and low-friction interaction for users with reduced motor control.",

  features:
    "Synora is designed to adapt to the user offering neuroscience-backed tools for both movement and communication.",
  featuresList: [
    "Rhythmic sound-based motor cues that re-engage the motor cortex to reduce Freezing of Gait episodes",
    "Machine learning speech processing that recognizes and clarifies Parkinson's-affected speech patterns",
    "Adaptive interface optimized for users with reduced motor control and cognitive load",
    "Accessible alternative to voice technologies that fail to interpret impaired speech",
    "Personalized cueing system that responds to individual user needs over time",
  ],

  challenges:
    "One of the most significant challenges was training a machine learning model sensitive enough to accurately interpret a wide range of speech impairments and accurately measuring walking pace while making this work across different types of platforms.",

  outcome:
    "Synora demonstrates how technology can be designed around the realities of its users rather than expecting users to adapt to the technology. The project deepened our understanding of the intersection between neuroscience, machine learning, and human-centered design, and reinforced the importance of building tools that make a measurable difference in everyday life.",
  outcomes: [
    "Developed an adaptive speech processing pipeline using machine learning for Parkinson's-affected voices",
    "Implemented evidence-based rhythmic auditory stimulation to support motor function during Freezing of Gait",
    "Designed an accessible mobile interface built around Parkinson's patients",
  ],
};

export default function DevProject5() {
  return <DevProject project={PROJECT} />;
}
