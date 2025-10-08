import matter from 'gray-matter';

// Import all markdown files from the blog directory
const blogFiles = import.meta.glob('../content/blog/*.md', { eager: true, as: 'raw' });

export function getAllBlogPosts() {
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
}

export function getBlogPost(slug) {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug);
}
