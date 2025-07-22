import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Try to load from localStorage
        const savedBlogData = localStorage.getItem('blogData');
        
        if (savedBlogData) {
          const posts = JSON.parse(savedBlogData);
          const post = posts.find(p => p.slug === slug);
          
          if (post) {
            setContent(post.content);
            setLoading(false);
            return;
          }
        }
        
        // Fallback to placeholder content
        setContent(`# Blog Post: ${slug}\n\nThis is a placeholder for the blog post content. In a real implementation, you would fetch the markdown content from your blog files.`);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog post');
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>

          <article className="prose-custom">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;