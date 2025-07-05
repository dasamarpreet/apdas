import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, User2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Unlocking the Power of RAG (Retrieval Augmented Generation)',
      excerpt: 'Discover how Retrieval Augmented Generation (RAG) is transforming AI with dynamic knowledge retrieval. Learn how RAG combines large language models with real-time data to deliver accurate, domain-specific solutions.',
      image: '/apdas/blog_images/RAG_thumbnail.webp',
      date: '2025-07-05',
      readTime: '8 min read',
      tags: ['RAG', 'LLM', 'NLP', 'Machine Learning', 'Artificial Intelligence'],
      featured: true,
      author: 'Amar Preet Das',
      url: '/apdas/blog/retrieval-augmented-generation'
    },
    {
      id: 2,
      title: 'Unlocking the Power of RAG (Retrieval Augmented Generation)',
      excerpt: 'Discover how Retrieval Augmented Generation (RAG) is transforming AI with dynamic knowledge retrieval. Learn how RAG combines large language models with real-time data to deliver accurate, domain-specific solutions.',
      image: '/apdas/blog_images/RAG_thumbnail.webp',
      date: '2025-07-05',
      readTime: '8 min read',
      tags: ['RAG', 'LLM', 'NLP', 'Machine Learning', 'Artificial Intelligence'],
      featured: false,
      author: 'Amar Preet Das',
      url: '/apdas/blog/retrieval-augmented-generation'
    },
    // {
    //   id: 3,
    //   title: 'Optimizing Performance in Modern Web Applications',
    //   excerpt: 'A comprehensive guide to web performance optimization, covering everything from code splitting to image optimization and caching strategies.',
    //   image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   date: '2024-01-05',
    //   readTime: '10 min read',
    //   tags: ['Performance', 'Optimization', 'Web Development'],
    //   featured: true
    // },
    // {
    //   id: 4,
    //   title: 'Understanding Microservices Architecture',
    //   excerpt: 'Deep dive into microservices architecture, its benefits, challenges, and best practices for implementation in modern applications.',
    //   image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   date: '2023-12-28',
    //   readTime: '12 min read',
    //   tags: ['Architecture', 'Backend', 'Microservices'],
    //   featured: false
    // },
    // {
    //   id: 5,
    //   title: 'CSS Grid vs Flexbox: When to Use What',
    //   excerpt: 'A practical comparison of CSS Grid and Flexbox, with real-world examples and use cases to help you choose the right layout method.',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   date: '2023-12-20',
    //   readTime: '7 min read',
    //   tags: ['CSS', 'Layout', 'Frontend'],
    //   featured: false
    // },
    // {
    //   id: 6,
    //   title: 'Getting Started with GraphQL and React',
    //   excerpt: 'Learn how to integrate GraphQL with React applications, including setup, queries, mutations, and best practices for data fetching.',
    //   image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   date: '2023-12-15',
    //   readTime: '9 min read',
    //   tags: ['GraphQL', 'React', 'API'],
    //   featured: false
    // }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 py-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology trends, 
            and my journey as a software developer.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            <Link to={featuredPost.url || "#"} className="block" style={{ textDecoration: "none" }}>
            <div className="glass-effect rounded-xl overflow-hidden hover-lift group cursor-pointer">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {formatDate(featuredPost.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User2Icon size={16} />
                      {featuredPost.author}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                    Read More
                    <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </motion.section>
        )}

        {/* Regular Posts Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link to={post.url || "#"} className="block" style={{ textDecoration: "none" }}>
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden hover-lift group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User2Icon size={14} />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                    Read Article
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.article>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        {/* <motion.section 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-effect rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified about new articles, tutorials, and insights 
              about web development and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.section> */}
      </div>
    </motion.div>
  );
};

export default Blog;