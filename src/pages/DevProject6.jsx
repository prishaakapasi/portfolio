import DevProject from './DevProject'
import coverImg from '../assets/roboticsimages/so101arm.png'

const PROJECT = {
  title:           'Autonomous Robot Arm',
  subtitle:        'Teaching a robotic arm to pick and place through imitation learning, from a kit of raw parts to a working autonomous policy',
  tag:             'Engineering',
  role:            'Solo Project: Hardware Assembly, Data Collection, Model Training & Deployment',
  // timeline:     'TODO: add dates',
  techStackLabel:  'Built With',
  techStack:       'Feetech STS3215 servos, 3D-printed parts, USB camera, Python, LeRobot, SmolVLA, PyTorch, Hugging Face Hub, Google Colab',
  accentColor:     'var(--dark-teal)',
  coverImage:      coverImg,
  // github:       'https://github.com/prishaakapasi/...',

  links: [
    { label: 'Dataset', url: 'https://huggingface.co/datasets/prishaakapasi/pick_place_v1' },
    { label: 'Model',   url: 'https://huggingface.co/prishaakapasi/pick_place_smolvla_policy' },
  ],

  overview:
    'I built a low-cost, open-source SO-ARM101 robotic arm system from a kit of raw parts and trained it to autonomously pick up a block and place it in a container, using nothing but a wrist-mounted camera and a fine-tuned vision-language-action (VLA) model. The project covers the complete imitation learning pipeline: hardware assembly, motor configuration, teleoperated data collection, model fine-tuning on cloud GPU infrastructure, and real-world deployment, with real debugging at nearly every stage.',

  video:           '/robotarm.mp4',
  videoText: [
    'The clip here is the fine-tuned policy running on the follower arm with no human in the loop. No leader arm, no manual control. It reaches toward the block, grasps it, and places it in the container using only live wrist-camera input and the actions predicted by the model.',
    'Getting here took one more debugging pass. The camera device index had silently shifted between the recording and inference sessions, so the policy was being fed the MacBook\'s built-in webcam instead of the wrist camera. It produced near-zero motion and failed grasps until a systematic per-index capture test isolated the problem.',
  ],

  techStackTitle:  'System Architecture',
  techStackDetail:
    'The SO-ARM101 is built as two identical 6-degree-of-freedom arms. The leader arm is a passive input device moved by hand, using lower-torque servos with mixed 1:191/1:345/1:147 gear ratios so it moves freely while its position sensors report joint angles in real time. The follower arm is the active one, using uniform higher-torque 12V servos at a 1:345 ratio to mirror the leader and do the physical manipulation. Each arm runs 6× Feetech STS3215 serial bus servos daisy-chained on a shared UART bus, individually addressed by motor IDs assigned before final assembly, and a wrist-mounted USB camera (1280×720, 30fps) supplies the visual input for both data collection and policy inference. On the software side, the LeRobot stack handles motor setup, calibration, and recording, while training runs on a free-tier Google Colab GPU.',

  features:
    'The system spans the full imitation learning pipeline, from raw hardware through to a policy running on the arm.',
  featuresList: [
    'Assembled both arms from a raw parts kit, including 3D-printed brackets, servo horn mounting, and per-motor ID configuration across a shared serial bus',
    'Calibrated each arm\'s full joint range of motion to map leader positions onto follower movement, then verified end-to-end teleoperation with a synchronized camera feed',
    'Recorded a 31-episode teleoperated demonstration dataset of the task "pick up the block and place it in the bin", totaling 36,498 frames at 30fps of synchronized wrist-camera video, joint positions, and executed actions',
    'Version-controlled the dataset on Hugging Face Hub in LeRobotDataset v3.0 format (parquet + AV1-encoded video)',
    'Fine-tuned SmolVLA (~450M parameters, a SmolVLM2-500M vision-language backbone with a flow-matching action expert) for 8,000 steps, training ~100M parameters while keeping the vision encoder frozen',
    'Trained on a free-tier Google Colab GPU in roughly 2.5 hours, then pushed the final policy to Hugging Face Hub',
    'The policy predicts chunks of 50 future actions at once via flow matching, iteratively denoising from noise into a target action trajectory, executed open-loop before re-observing',
    'Deployed the trained policy directly onto the physical follower arm, with no leader arm or manual control involved',
  ],

  challenges:
    'Nearly every stage came with something to debug. A failed power supply connector, a damaged DC barrel jack, had to be diagnosed and repaired with a sourced replacement pigtail. Intermittent USB and camera dropouts turned out to be a bandwidth and power bottleneck in a low-quality USB hub, fixed by reconfiguring how devices were connected. Recurring camera timeout errors mid-recording were worked around with a resume-based recording workflow that preserved already-captured episodes rather than starting the dataset over. And when the Colab runtime disconnected mid-training, the run was resumed from a saved checkpoint at step 2000 instead of restarting from scratch, keeping all prior progress.',

  outcome:
    'After fixing the camera index bug, the policy successfully performed the full pick-and-place task autonomously, reaching toward the block, grasping it, and placing it in the container from live camera input alone. Training was stable throughout: loss decreased steadily from 0.056 to 0.016 with gradient norm smoothly declining from ~1.2 to ~0.3, showing convergence without divergence or instability. The limits are worth naming. 31 episodes is enough for a proof-of-concept on a single task, but generalization to varied block positions, lighting, or backgrounds is untested; because resets between episodes were done by hand, the policy never learned to return to a neutral pose; and camera device indices are not guaranteed stable across sessions, a practical integration issue distinct from the model itself.',
  outcomes: [
    'Trained a policy that autonomously reaches, grasps, and places a block using only live wrist-camera input',
    'Built and debugged the full stack end to end, across power electronics, serial bus servo control, dataset engineering, and cloud GPU fine-tuning',
    'Worked hands-on with vision-language-action models and flow-matching policies on real hardware, not in simulation',
  ],

  nextSteps: [
    'Expand the dataset to 50 to 100+ episodes with varied block positions, to improve grasp reliability and generalization',
    'Add "return to home" demonstrations so the policy learns a complete task loop rather than relying on manual resets',
    'Extend toward multi-task, language-conditioned control, leveraging SmolVLA\'s instruction-following capability',
    'Longer term, replace the leader arm\'s teleoperation signal with a neural decoder trained on motor cortex data (for example the MC_Maze and MC_RTT benchmarks), using this arm as the actuation target for a BCI-driven control pipeline',
  ],
}

export default function DevProject6() {
  return <DevProject project={PROJECT} />
}
