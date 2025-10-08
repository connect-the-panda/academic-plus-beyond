import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { getAllBlogPosts } from '../utils/blogLoader';

export default function Blog() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-light text-sm tracking-widest hover:text-indigo-200 transition-colors">
            Academic + Beyond
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/#services" className="text-white hover:text-indigo-200 transition-colors">
              Services
            </Link>
            <Link to="/#about" className="text-white hover:text-indigo-200 transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-white font-semibold hover:text-indigo-200 transition-colors">
              Blog
            </Link>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0PSO0iD617Y9PVQEH9tAQiqCl795tLSaWIyq7tMNwiWEG4FU4cZ936P5jdAMT52wYPltH1FBkO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Book Free Call
            </a>
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
              key={post.slug}
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
