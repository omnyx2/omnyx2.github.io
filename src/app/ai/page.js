import Link from 'next/link'

const intro = `Notes from studying AI / NLP — how I read and reproduce papers, the core topics I have worked through, and the techniques I have used in my own research.`

const approach = [
  'Start from the exact data the paper uses; if no official code exists, borrow the data-loading and crawling scheme from other reimplementations (the most time-consuming, error-prone part).',
  'Reimplement the model end to end, focusing on the logic rather than copying.',
  'While (and after) implementing, reason about what the model means — both mathematically and intuitively.',
  'Vary the data by dimension to understand how preprocessing interprets dimensionality.',
  'Distill the core so it can be re-applied to problems elsewhere.',
]

const topics = [
  'NLP data preprocessing: per-language corpus separation, tokenization strategy, vocabulary construction and augmentation',
  'Tokenizers and how vocabularies are built from raw corpora by frequency',
  'Hugging Face Transformers for loading SOTA models across text, vision, audio, and multimodal tasks',
  'Attention for multimodal fusion — mitigating negative information transfer between noisy modalities',
  'NLP evaluation metrics and reproducible training setups',
]

const aiSkillset = [
  { group: 'Deep-learning frameworks', items: ['PyTorch', 'Hugging Face Transformers'] },
  { group: 'Model families', items: ['LLM', 'VLM (vision-language)', 'DDPM / diffusion'] },
  {
    group: 'Retrieval & RAG — from SHRAG',
    items: [
      'Retrieval-Augmented Generation (RAG)',
      'LLM-as-Query-Strategist',
      'Boolean / logical retrieval',
      'Multilingual query expansion',
      'Multilingual embeddings & cross-lingual QA',
    ],
  },
  {
    group: 'Digital twin — from CIP paper',
    items: ['Digital-twin agents', 'CIP-concept modeling'],
  },
  { group: 'Classical NLP', items: ['BERT', 'Transformer', 'LSTM', 'soynlp'] },
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

export default function AI() {
  return (
    // transparent root — the homepage animated background shows through at the sides
    <div className="relative min-h-screen w-full font-main text-dark">
      {/* fixed wooden desk patch sitting over the homepage background */}
      <div className="wood-desk fixed top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] z-0" aria-hidden="true">
        <div className="desk-slot-top absolute top-0 left-0 w-full h-16" />
        <div className="desk-slot-bottom absolute bottom-0 left-0 w-full h-16" />
      </div>

      {/* the long paper is pulled across the desk as you scroll */}
      <div className="relative z-10 py-8 sm:py-20">
        <div className="relative max-w-2xl mx-4 sm:mx-auto bg-notebookPage shadow-custom rounded-[2px] px-6 sm:px-14 py-10 sm:py-12">
          {/* notebook margin line */}
          <div className="absolute top-0 left-4 sm:left-10 h-full w-[1px] bg-orange/30" />

        <header>
          <Link href="/" className="font-notoserif text-sm text-dark/60 hover:text-dark">← Home</Link>
          <h1 className="font-main text-4xl sm:text-5xl font-bold mt-4">AI / NLP</h1>
          <p className="font-notoserif text-sm text-dark/70 mt-1">What I have been learning &amp; working on</p>
          <p className="font-article text-[0.95rem] leading-relaxed text-justify mt-5">
            {intro}
          </p>
        </header>

        <SectionTitle>How I approach a paper</SectionTitle>
        <ol className="font-article text-[0.92rem] space-y-1 list-decimal list-inside marker:text-fancyBlue">
          {approach.map((a, i) => <li key={i}>{a}</li>)}
        </ol>

        <SectionTitle>Topics studied</SectionTitle>
        <ul className="font-article text-[0.92rem] space-y-1 list-disc list-inside marker:text-orange/60">
          {topics.map((t, i) => <li key={i}>{t}</li>)}
        </ul>

        <SectionTitle>AI Skillset</SectionTitle>
        {aiSkillset.map((s, i) => (
          <div key={i} className="mb-4">
            <div className="font-notoserif text-sm font-semibold text-dark/75 mb-1">{s.group}</div>
            <div>{s.items.map((it, j) => <Chip key={j}>{it}</Chip>)}</div>
          </div>
        ))}

        <footer className="font-notoserif text-sm text-dark/60 mt-12 pt-5 border-t border-notebookLine">
          <Link href="/projects" className="underline mr-4 hover:text-dark">Projects</Link>
          <Link href="/cv" className="underline mr-4 hover:text-dark">CV</Link>
          <a href="https://www.linkedin.com/in/hyunseok-ryu-376534170/" target="_blank" rel="noopener noreferrer" className="underline mr-4 hover:text-dark">LinkedIn</a>
          <a href="https://github.com/omnyx2" target="_blank" rel="noopener noreferrer" className="underline hover:text-dark">GitHub</a>
        </footer>
        </div>
      </div>
    </div>
  )
}
