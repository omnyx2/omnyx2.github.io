import Link from 'next/link'

const intro = `I first set out to become a senior backend engineer who could ship good services, and along the way I studied a wide range of tools — from commercial software to developer tooling such as Docker and React. Yet the more I learned, the more I felt I was only growing familiar rather than growing deeper. Returning to school and studying mathematics filled that gap: I saw how central mathematical thinking and design are to understanding the world. I now want to build on mathematics, logic, and imagination — connecting abstract reasoning with concrete implementation — to become a researcher and practitioner who understands modern systems end to end.`

const publications = [
  {
    title: 'SHRAG: A Framework for Combining Human-Inspired Search with RAG',
    authors: 'Hyunseok Ryu, Wonjune Shin, Hyun Park',
    venue: 'arXiv preprint (arXiv:2512.00772), 2025',
    note: 'ScienceON Challenge (RDGenAI 2025, KISTI)',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2512.00772' }],
  },
  {
    title: 'Digital Twin Agent Implementation based on CIP Concept',
    authors: 'Hyunseok Ryu, Inyong Song, Jong-Won Kim (류현석, 송인용, 김종원)',
    venue: 'Annual Conference of KIPS 31(2), 463–466, 2024',
    note: 'Korea Information Processing Society (한국정보처리학회)',
    links: [],
  },
]

// Newest first.
const projects = [
  {
    title: 'Automated Market-Trend Analysis',
    period: '2022.06 – 2022.10',
    org: 'GIST AI project',
    role: 'Team Lead',
    summary:
      'A semi-automated market-response system for hyper-personalization: architected the pipeline and combined multiple NLP models to extract trends from online communities.',
    points: [
      'Architected the overall solving system',
      'Combined BERT, Transformer, LSTM and soynlp for the task',
      'Hands-on Korean-text data preprocessing',
    ],
    stack: ['BERT', 'Transformer', 'LSTM', 'soynlp', 'Python'],
  },
  {
    title: 'Restricted-Area Human-Detection CCTV Alert App',
    period: '2020.04 – 2020.06',
    org: 'ROK Army competition support',
    role: 'Dev Lead & Planner',
    summary:
      'On-device object detection on a Raspberry Pi 4 detects intruders in a restricted zone, pushes an alert to a phone, and records / streams to a server in real time.',
    points: [
      'React Native app with push notifications, GPS, and Kakao API',
      'ExpressJS / Node.js RESTful and socket server',
      'TensorFlow object detection running on Raspberry Pi 4',
      'Deeper understanding of JavaScript and of individual ownership within a team',
    ],
    stack: ['JavaScript', 'React Native', 'Node.js/Express', 'TensorFlow', 'Raspberry Pi'],
  },
  {
    title: 'Fatogo — Group Travel Booking Platform',
    period: '2018.04 – 2018.12',
    org: 'Funded by GIST (₩8M)',
    role: 'Dev Lead & Service Planner',
    summary:
      'A tailored accommodation-booking platform for groups of young travelers.',
    points: [
      'Deployed a Django backend on AWS EC2',
      'Designed RESTful APIs and integrated PostgreSQL with Django',
      'Built and led a 4–6 person team',
      'Learned first-hand how much project planning and communication matter',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'AWS EC2', 'HTML/CSS'],
  },
  {
    title: 'Self-Balancing Robot',
    period: '2018.07 – 2018.08',
    org: 'GIST Competition',
    role: 'Individual project',
    summary:
      'Kept a robot upright from MPU 6-axis sensor data. Because gimbal lock does not occur in this setup, a quaternion frame was unnecessary.',
    points: [
      'Complementary filter over the MPU 6-axis sensor for accurate attitude estimation',
      'PID control for balancing; raised the center of mass for stability',
      'Motors were too slow to fully prevent falls — tuning the PID integral (I) gain remained the open challenge',
    ],
    stack: ['mbed STM32F411', 'C', 'PID control'],
  },
  {
    title: 'Vehicle Tracking System',
    period: '2018.07 – 2018.08',
    org: 'GIST Competition',
    role: 'Team Lead / Developer',
    summary:
      'Collected and analyzed gyroscope and accelerometer data from an Android background process to infer which mode of transportation a user was riding, with an analysis pipeline on AWS.',
    points: [
      'Android background data-collection app (Android Studio)',
      'Django REST API and data-collection server (AWS EC2, SQLite)',
      'Real-time analysis with Python multiprocessing',
      'First real experience of team collaboration and project planning',
    ],
    stack: ['Android', 'Django', 'Python', 'AWS EC2', 'Ubuntu'],
  },
]

const clientWork = [
  'Dental Assistant App (frontend) — rendered panorama-analysis results as charts with a real-time 1:1 messaging service.',
  'Wisdom-tooth Extraction Webview (fullstack) — patient-management app for doctors at Yonsei University Hospital.',
  'XFashion Virtual Try-on AI website (closefits.com/coordi) — AI try-on prototype.',
  'K-Digital Training educator — networking, cloud, and AI infrastructure.',
]

function SectionTitle({ children }) {
  return (
    <h2 className="font-main text-fancyBlue text-2xl font-bold tracking-wide mt-12 mb-5 pb-1 border-b border-notebookLine">
      {children}
    </h2>
  )
}

function Chip({ children }) {
  return (
    <span className="inline-block font-notoserif text-[0.7rem] px-2 py-[2px] mr-2 mb-2 rounded-sm border border-dark/25 text-dark/80 bg-white/50">
      {children}
    </span>
  )
}

export default function Portfolio() {
  return (
    // fixed-height screen — the window itself never scrolls, only the paper does
    <div className="relative h-screen w-full overflow-hidden font-main text-dark">
      {/* fixed wooden desk patch sitting over the homepage background */}
      <div className="wood-desk fixed top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] z-0" aria-hidden="true">
        <div className="desk-slot-top absolute top-0 left-0 w-full h-16" />
        <div className="desk-slot-bottom absolute bottom-0 left-0 w-full h-16" />
      </div>

      {/* the desk stays put; only this sheet (the résumé) scrolls */}
      <div className="relative z-10 h-full flex justify-center py-6 sm:py-12">
        <div className="relative w-full max-w-2xl mx-4 sm:mx-auto bg-notebookPage shadow-custom rounded-[2px] overflow-hidden">
          {/* notebook margin line */}
          <div className="absolute top-0 left-4 sm:left-10 h-full w-[1px] bg-orange/30 z-10" />
          <div className="h-full overflow-y-auto px-6 sm:px-14 py-10 sm:py-12">

        <header>
          <Link href="/" className="font-notoserif text-sm text-dark/60 hover:text-dark">← Home</Link>
          <h1 className="font-main text-4xl sm:text-5xl font-bold mt-4">Hyunseok Ryu</h1>
          <p className="font-notoserif text-sm text-dark/70 mt-1">AI / NLP Researcher · GIST</p>
          <p className="font-article text-[0.95rem] leading-relaxed text-justify mt-5">
            {intro}
          </p>
        </header>

        <SectionTitle>Publications</SectionTitle>
        <ul className="space-y-5">
          {publications.map((p, i) => (
            <li key={i} className="border-l-2 border-fancyBlue/40 pl-4">
              <div className="font-notoserif font-semibold leading-snug">{p.title}</div>
              <div className="font-article text-sm mt-1">{p.authors}</div>
              <div className="font-article text-sm italic text-dark/70">{p.venue}</div>
              {p.note ? <div className="font-article text-sm text-dark/55">{p.note}</div> : null}
              {p.links.map((l, j) => (
                <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" className="text-sm text-fancyBlue underline mr-3">[{l.label}]</a>
              ))}
            </li>
          ))}
        </ul>

        <SectionTitle>Projects</SectionTitle>
        <div className="divide-y divide-notebookLine">
          {projects.map((pr, i) => (
            <article key={i} className="py-6 first:pt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-main text-xl font-bold">{pr.title}</h3>
                <span className="font-notoserif text-sm text-dark/55">{pr.period}</span>
              </div>
              <div className="font-notoserif text-sm text-dark/65">{pr.org} · {pr.role}</div>
              <p className="font-article text-[0.95rem] mt-2 text-justify">{pr.summary}</p>
              <ul className="font-article text-[0.9rem] mt-2 space-y-1 list-disc list-inside marker:text-orange/60">
                {pr.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
              <div className="mt-3">
                {pr.stack.map((s, j) => <Chip key={j}>{s}</Chip>)}
              </div>
            </article>
          ))}
        </div>

        <SectionTitle>Client / Freelance Work</SectionTitle>
        <ul className="font-article text-[0.92rem] space-y-2 list-disc list-inside marker:text-orange/60">
          {clientWork.map((c, i) => <li key={i}>{c}</li>)}
        </ul>

        <footer className="font-notoserif text-sm text-dark/60 mt-12 pt-5 border-t border-notebookLine">
          <Link href="/ai" className="underline mr-4 hover:text-dark">AI / NLP</Link>
          <Link href="/cv" className="underline mr-4 hover:text-dark">CV</Link>
          <a href="https://www.linkedin.com/in/hyunseok-ryu-376534170/" target="_blank" rel="noopener noreferrer" className="underline mr-4 hover:text-dark">LinkedIn</a>
          <a href="https://github.com/omnyx2" target="_blank" rel="noopener noreferrer" className="underline hover:text-dark">GitHub</a>
        </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
