import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'metacognition-academic-success',
    title: 'The Power of Metacognition: Thinking About How You Think',
    excerpt: 'Discover how metacognitive strategies can transform your learning process and unlock your academic potential.',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Learning Strategies',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80'
  },
  {
    id: 2,
    slug: 'flow-state-productivity',
    title: 'Achieving Flow State: The Science of Peak Performance',
    excerpt: 'Learn how to enter and maintain flow states for enhanced productivity and deeper engagement with your work.',
    date: '2024-03-08',
    readTime: '7 min read',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'
  },
  {
    id: 3,
    slug: 'academic-writing-clarity',
    title: 'Writing with Clarity: Principles for Academic Excellence',
    excerpt: 'Master the fundamental principles that separate good academic writing from great academic writing.',
    date: '2024-03-01',
    readTime: '6 min read',
    category: 'Writing Skills',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80'
  },
  {
    id: 4,
    slug: 'transferable-skills-beyond-classroom',
    title: 'Beyond the Classroom: Building Transferable Skills for Life',
    excerpt: 'Explore how the skills you develop academically translate into real-world success across all domains.',
    date: '2024-02-22',
    readTime: '5 min read',
    category: 'Personal Development',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-light text-sm tracking-widest hover:text-indigo-200 transition-colors">
            Academic + Beyond
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-white hover:text-indigo-200 transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-white font-semibold hover:text-indigo-200 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Insights & Strategies
          </h1>
          <p className="text-xl text-indigo-200">
            Explore evidence-based approaches to learning, writing, and personal development
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-indigo-300 mb-3">
                  <span className="px-3 py-1 bg-blue-600/30 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>

                <p className="text-indigo-200 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-blue-400 font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
