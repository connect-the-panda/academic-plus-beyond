import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Make Buffer available globally for gray-matter
window.Buffer = Buffer;

// Import all markdown files from the blog directory
const blogFiles = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' });

export function getAllBlogPosts() {
  try {
    const posts = Object.entries(blogFiles).map(([filepath, content]) => {
      const { data, content: body } = matter(content);
      const slug = filepath.split('/').pop().replace('.md', '');

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readTime: data.readTime,
        category: data.category,
        image: data.image,
        body
      };
    });

    // Sort by date, newest first
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export function getBlogPost(slug) {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug);
}
