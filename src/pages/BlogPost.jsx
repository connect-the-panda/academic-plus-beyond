import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { marked } from 'marked';
import { getBlogPost } from '../utils/blogLoader';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  const htmlContent = useMemo(() => {
    if (!post) return '';
    return marked(post.body);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300 flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

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
            <Link to="/blog" className="text-white hover:text-indigo-200 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Back to Blog Link */}
      <div className="container mx-auto px-6 pt-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      {post.image && (
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="container mx-auto px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-indigo-300 mb-6">
            <span className="px-3 py-1 bg-blue-600/30 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {post.title}
          </h1>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-indigo-100 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-indigo-100 prose-ul:my-6
              prose-li:my-2
              prose-strong:text-white prose-strong:font-semibold
              prose-em:text-indigo-200"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </article>
    </div>
  );
}
