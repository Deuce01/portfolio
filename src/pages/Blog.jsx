import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  // Load blog posts from localStorage or use defaults
  useEffect(() => {
    const savedBlogData = localStorage.getItem('blogData');
    
    if (savedBlogData) {
      // Use blog data from localStorage
      setPosts(JSON.parse(savedBlogData));
    } else {
      // Use default blog posts
      const defaultPosts = [
        {
          id: 1,
          title: "Building Scalable React Applications",
          excerpt: "Learn the best practices for building large-scale React applications that are maintainable and performant.",
          date: "2024-01-15",
          readTime: "5 min read",
          slug: "building-scalable-react-applications"
        },
        {
          id: 2,
          title: "Getting Started with Machine Learning",
          excerpt: "A beginner's guide to machine learning concepts and how to implement your first ML model.",
          date: "2024-01-10",
          readTime: "8 min read",
          slug: "getting-started-with-machine-learning"
        },
        {
          id: 3,
          title: "Modern Web Development Workflow",
          excerpt: "Explore the tools and techniques that make modern web development efficient and enjoyable.",
          date: "2024-01-05",
          readTime: "6 min read",
          slug: "modern-web-development-workflow"
        }
      ];
      setPosts(defaultPosts);
    }
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thoughts on development, technology, and everything in between.
          </p>
        </motion.div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                {post.title}
              </h2>
              
              <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link 
                to={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Read more →
              </Link>
            </motion.article>
          ))}
        </div>

        {posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No blog posts available yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;