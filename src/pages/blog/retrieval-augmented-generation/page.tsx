import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, Facebook, Linkedin, Twitter, Share2, Check } from 'lucide-react';
import { Helmet } from 'react-helmet';

const blog = {
  title: 'Unlocking the Power of Retrieval Augmented Generation (RAG)',
  subtitle: 'The Future of Dynamic AI Knowledge Retrieval',
  image: '/apdas/blog_images/RAG_thumbnail.webp',
  date: '2025-07-05',
  readTime: '8 min read',
  tags: ['RAG', 'NLP', 'LLM', 'Artificial Intelligence', 'Knowledge Retrieval'],
  author: 'Amar Preet Das',
  body: `
    <article>
      <p>
        <strong>Retrieval Augmented Generation (RAG)</strong> is a transformative technology at the intersection of artificial intelligence and knowledge management. As organizations and individuals increasingly rely on AI-powered tools to process vast amounts of information, there is a growing demand for systems that can deliver accurate, up-to-date, and contextually relevant answers. RAG is addressing this demand by blending the strengths of large language models (LLMs) with dynamic knowledge retrieval mechanisms. This blog offers a deep dive into the foundations of RAG, how it works, its benefits, challenges, and how it is shaping the future of AI.
      </p>

      <h2>Understanding the Problem: The Limits of Pre-Trained Language Models</h2>
      <p>
        Large language models, such as GPT-4, are trained on massive datasets containing text from books, websites, research papers, and more. These models learn to generate human-like text by predicting the next word in a sequence, based on the patterns found in their training data. However, despite their remarkable capabilities, these models have significant limitations:
      </p>
      <ul>
        <li><strong>Static knowledge:</strong> Once a model is trained, its knowledge is frozen. It cannot learn or incorporate new information unless retrained or fine-tuned, which is costly and time-consuming.</li>
        <li><strong>Hallucination risk:</strong> LLMs sometimes produce plausible-sounding but factually incorrect information, because they rely purely on statistical patterns rather than external verification.</li>
        <li><strong>Domain mismatch:</strong> A general-purpose LLM might struggle with highly specialized domains (e.g., legal, medical, or technical) unless explicitly fine-tuned on domain-specific data.</li>
      </ul>
      <p>
        These issues highlight the need for a smarter way for AI systems to access and utilize knowledge. That’s where RAG comes into play.
      </p>

      <h2>What Is Retrieval Augmented Generation (RAG)?</h2>
      <p>
        RAG is a hybrid architecture that combines two powerful components:
      </p>
      <ul>
        <li><strong>Retriever:</strong> A search engine-like system that dynamically locates and retrieves relevant documents from a knowledge source, such as a database, file system, or web index.</li>
        <li><strong>Generator:</strong> A language model that uses the retrieved information to generate accurate, coherent, and contextually appropriate responses.</li>
      </ul>
      <p>
        The key idea behind RAG is simple yet profound: instead of asking an LLM to answer questions using only what it “remembers,” we give it access to external, up-to-date knowledge that it can consult in real time. This fusion of retrieval and generation leads to outputs that are better grounded in facts and more aligned with the latest information.
      </p>

      <h2>How Does RAG Work? A Step-by-Step Breakdown</h2>
      <p>
        Let’s break down the inner workings of a typical RAG system:
      </p>
      <ol>
        <li><strong>User query:</strong> The process starts when a user submits a question or request, such as “What are the latest GDPR compliance requirements?”</li>
        <li><strong>Embedding the query:</strong> The system converts the query into a numerical representation (embedding) that captures its semantic meaning.</li>
        <li><strong>Document retrieval:</strong> Using the embedding, the retriever searches a vector database or search index for documents that are semantically similar to the query. This could include articles, reports, internal documents, or web pages.</li>
        <li><strong>Combining results:</strong> The retrieved documents are fed into the language model alongside the original query.</li>
        <li><strong>Generating the response:</strong> The language model generates an answer, using both its learned knowledge and the retrieved documents as context.</li>
      </ol>
      <p>
        The result is a response that is more informed, accurate, and aligned with the latest knowledge available to the system.
      </p>

      <h2>Why Is RAG Important? Key Advantages</h2>
      <p>
        RAG offers several compelling benefits over traditional language models:
      </p>
      <ul>
        <li><strong>Real-time knowledge integration:</strong> RAG enables AI systems to tap into live knowledge bases, ensuring that responses reflect the latest facts and developments.</li>
        <li><strong>Reduced hallucinations:</strong> By anchoring outputs in actual documents, RAG minimizes the risk of the model generating false or misleading information.</li>
        <li><strong>Cost-effective domain adaptation:</strong> Instead of fine-tuning a large model for every new domain, organizations can update or expand their knowledge base, and RAG systems will naturally produce more relevant answers.</li>
        <li><strong>Explainability and transparency:</strong> Since RAG can cite or reference retrieved documents, it becomes easier to verify the source of information, improving trust in AI systems.</li>
      </ul>

      <h2>Key Components in a RAG Architecture</h2>
      <p>
        A typical RAG implementation includes:
      </p>
      <ul>
        <li><strong>Vector store:</strong> A database that indexes documents by their vector embeddings (e.g., Chroma, Pinecone, Weaviate, or Elasticsearch).</li>
        <li><strong>Retriever model:</strong> A model that efficiently searches the vector store for documents relevant to the query.</li>
        <li><strong>Generator model:</strong> A transformer-based LLM (e.g., GPT, BERT variants, LLaMA) that synthesizes the final response.</li>
        <li><strong>Orchestration layer:</strong> The logic that coordinates retrieval, document ranking, and response generation.</li>
      </ul>

      <h2>Applications of RAG Across Industries</h2>
      <p>
        RAG is versatile and applicable to numerous domains:
      </p>
      <ul>
        <li><strong>Enterprise search:</strong> Internal Q&A systems that surface policies, procedures, or technical documentation.</li>
        <li><strong>Legal and compliance:</strong> Tools that retrieve and summarize regulatory texts, case law, or contracts.</li>
        <li><strong>Healthcare:</strong> Systems that assist clinicians by pulling in the latest medical research and treatment guidelines.</li>
        <li><strong>E-commerce:</strong> AI assistants that answer customer queries by referencing product catalogs or help centers.</li>
        <li><strong>Education:</strong> AI tutors that dynamically source educational material to personalize learning experiences.</li>
      </ul>

      <h2>Challenges and Considerations</h2>
      <p>
        While RAG is powerful, it comes with its own set of challenges:
      </p>
      <ul>
        <li><strong>Quality of the knowledge base:</strong> The accuracy and relevance of RAG outputs depend heavily on the quality and currency of the external documents.</li>
        <li><strong>Latency:</strong> Retrieving and processing external documents can introduce delays in response time, especially with large knowledge bases.</li>
        <li><strong>Document ranking:</strong> The system must carefully select the most relevant documents, as irrelevant or noisy data can degrade output quality.</li>
        <li><strong>Security and privacy:</strong> When using external data sources, especially in regulated industries, careful controls must be in place to protect sensitive information.</li>
      </ul>

      <h2>Building a RAG System: Key Steps</h2>
      <p>
        For teams looking to implement RAG, the following steps are typically involved:
      </p>
      <ol>
        <li><strong>Define your knowledge sources:</strong> Identify and curate the documents or data sets that the retriever will access.</li>
        <li><strong>Set up the vector database:</strong> Choose and configure a vector store suitable for your scale and use case.</li>
        <li><strong>Select or train a retriever model:</strong> Use models like dense retrievers (e.g., DPR) or hybrid approaches combining dense and sparse retrieval.</li>
        <li><strong>Integrate with an LLM:</strong> Connect the retriever to a capable generator model for synthesis.</li>
        <li><strong>Test and tune:</strong> Continuously evaluate retrieval quality, generation fluency, and overall system performance.</li>
      </ol>

      <h2>The Future of RAG and Beyond</h2>
      <p>
        RAG is still an emerging technology, and we can expect rapid evolution in the coming years. Future advancements may include:
      </p>
      <ul>
        <li><strong>Multi-modal retrieval:</strong> Extending RAG to incorporate not just text but images, video, and audio into its knowledge retrieval process.</li>
        <li><strong>Deeper reasoning:</strong> Enabling models to reason over retrieved documents, cross-reference evidence, and present multi-faceted answers.</li>
        <li><strong>Personalized retrieval:</strong> Tailoring retrieval based on user preferences, history, or context to deliver more personalized outputs.</li>
        <li><strong>Open-domain and federated RAG:</strong> Integrating multiple knowledge sources in a secure, privacy-preserving way across organizations.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Retrieval Augmented Generation represents a significant step toward AI systems that are not only powerful but also responsible, transparent, and adaptable. By uniting dynamic knowledge retrieval with the generative power of large language models, RAG offers a path to AI that can keep pace with our ever-changing world. For organizations and developers, embracing RAG means unlocking the potential to deliver smarter, more reliable, and context-aware solutions that truly serve their users.
      </p>
      <p>
        As you explore or implement RAG in your AI workflows, keep in mind that its success depends on thoughtful design, rigorous evaluation, and ongoing improvement. The future of AI is not just about what models can generate — it’s about how they connect with knowledge, reason over it, and build trust with their users.
      </p>
    </article>

  `,
};

const meta_description = `Discover how Retrieval Augmented Generation (RAG) is transforming AI with dynamic knowledge retrieval. Learn how RAG combines large language models with real-time data to deliver accurate, domain-specific solutions.`;

const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://dasamarpreet.github.io/blog/retrieval-augmented-generation';

const shareLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`
  },
  {
    name: 'X',
    icon: Twitter,
    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blog.title)}`
  }
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogDetail = () => {
  const [showCopy, setShowCopy] = useState(false);
  const [copied, setCopied] = useState(false);
  // Modal state for image viewer
  const [showImageModal, setShowImageModal] = useState(false);

  // Refs for click outside share popover
  const shareBtnRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleShareClick = () => {
    setShowCopy((v) => !v);
    setCopied(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  // Listen for clicks outside (share popover)
  useEffect(() => {
    if (!showCopy) return;
    function handleClick(e: MouseEvent) {
      if (
        !popoverRef.current?.contains(e.target as Node) &&
        !shareBtnRef.current?.contains(e.target as Node)
      ) {
        setShowCopy(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showCopy]);

  // Modal close on outside click or ESC for image modal
  useEffect(() => {
    if (!showImageModal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowImageModal(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showImageModal]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setShowImageModal(false);
  };

  // Add custom styles for <ul>, <ol>, <li>, and <h2> within the blog body
  const enhancedBlogBody = `
  <style>
    .blog-article-content ul, .blog-article-content ol {
      margin-left: 1.5em;
      padding-left: 0;
      margin-bottom: 1.3em;
    }
    .blog-article-content ul {
      list-style: disc outside;
    }
    .blog-article-content ul > li,
    .blog-article-content ol > li {
      text-align: left !important;
      margin-bottom: 0.6em;
      padding-left: 0.3em;
      font-size: 1rem;
      line-height: 1.7;
      font-weight: 400;
    }
    /* Blue dot bullets for ul */
    .blog-article-content ul > li::marker {
      color: #38bdf8;
      font-size: 1.3em;
      font-weight: bold;
    }
    /* Blue numbers for ol */
    .blog-article-content ol {
      list-style: decimal outside;
    }
    .blog-article-content ol > li::marker {
      color: #60a5fa;
      font-weight: 700;
      font-size: 1.15em;
    }
    /* Strong (bold) text in list items */
    .blog-article-content li > strong {
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.01em;
      margin-right: 0.3em;
      display: inline-block;
    }
    /* Heading styles */
    .blog-article-content h2 {
      color: #60a5fa;
      font-size: 1.35rem;
      margin-top: 2em;
      margin-bottom: 0.75em;
      font-weight: 700;
      border-left: 4px solid #38bdf8;
      padding-left: 0.6em;
      background: linear-gradient(90deg, #17255422 0%, transparent 100%);
    }
    /* Paragraphs justified, but not lists */
    .blog-article-content p {
      margin-bottom: 1.1em;
      text-align: justify;
      font-size: 1rem;
      color: #e0e7ef;
    }
  </style>
  <div class="blog-article-content">${blog.body}</div>
`;



  return (
    <>
      <Helmet>
        <title>{blog.title} | Blog Detail</title>
        <meta name="description" content={meta_description} />
        <meta name="author" content={blog.author} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={meta_description} />
        <meta property="og:image" content={blog.image.startsWith('http') ? blog.image : 'https://dasamarpreet.github.io' + blog.image} />
        <meta property="og:url" content={currentUrl} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={meta_description} />
        <meta name="twitter:image" content={blog.image.startsWith('http') ? blog.image : 'https://dasamarpreet.github.io' + blog.image} />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-20 px-4 py-12"
      >
        <div className="max-w-3xl mx-auto">
          {/* Thumbnail - opens modal on click */}
          <div
            className="mb-8 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => setShowImageModal(true)}
            tabIndex={0}
            role="button"
            aria-label="View image"
            style={{ outline: "none" }}
          >
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Headers */}
          <h1 className="text-4xl font-bold text-white mb-2">{blog.title}</h1>
          <h2 className="text-xl text-blue-200 mb-6">{blog.subtitle}</h2>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 items-center text-gray-400 text-sm mb-2">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              {formatDate(blog.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              {blog.readTime}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {blog.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs flex items-center">
                  <Tag size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Author */}
          <div className="text-sm text-gray-300 mb-8 pl-1">
            By <span className="font-semibold text-blue-300">{blog.author}</span>
          </div>

          {/* Body (HTML content) */}
          <div 
            className="prose prose-invert text-gray-200 max-w-none"
            dangerouslySetInnerHTML={{ __html: enhancedBlogBody }}
          />

          {/* Social Share */}
          <div className="mt-10 border-t border-white/10 pt-6 flex items-center gap-6 relative">
            <span className="text-gray-400 text-sm">Share this article:</span>
            {shareLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
                title={`Share on ${link.name}`}
              >
                <link.icon size={22} />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
            {/* Share/Copy button */}
            <button
              ref={shareBtnRef}
              onClick={handleShareClick}
              className="text-blue-300 hover:text-white transition-colors duration-200 flex items-center gap-1 focus:outline-none"
              title="Share or copy link"
              type="button"
            >
              <Share2 size={22} />
              <span className="sr-only">Share/Copy</span>
            </button>
            {showCopy && (
              <div
                ref={popoverRef}
                className="absolute left-48 md:left-60 top-0 bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg z-10"
              >
                <button
                  className="text-blue-300 hover:text-white text-sm font-medium flex items-center gap-1"
                  onClick={handleCopyLink}
                  type="button"
                >
                  {copied ? <Check size={18} className="text-green-400" /> : null}
                  {copied ? 'Link copied!' : 'Copy Link'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal for Enlarged Image */}
        {showImageModal && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={handleBackdropClick}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute top-0 right-0 p-4 text-white text-2xl"
                aria-label="Close"
              >
                ×
              </button>
              <img 
                src={blog.image}
                alt="Blog Thumbnail"
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default BlogDetail;
