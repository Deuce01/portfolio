import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, ChevronDown, ChevronUp, FileText } from 'lucide-react';

const BlogEditor = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(true);

  // Load blog posts on mount
  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        // Try to load from localStorage first
        const savedPosts = localStorage.getItem('blogData');
        if (savedPosts) {
          setBlogPosts(JSON.parse(savedPosts));
          setIsLoading(false);
          return;
        }

        // Default posts if nothing in localStorage
        const defaultPosts = [
          {
            id: 1,
            title: 'Building Scalable React Applications',
            slug: 'building-scalable-react-applications',
            date: '2024-01-15',
            excerpt: 'Learn the best practices for building large-scale React applications that are maintainable and performant.',
            content: `# Building Scalable React Applications

*Published on January 15, 2024*

Building scalable React applications requires careful planning and adherence to best practices. In this post, I'll share some key strategies that have helped me build maintainable and performant React applications.

## Component Architecture

One of the most important aspects of building scalable React applications is having a well-thought-out component architecture. Here are some principles I follow:

### 1. Single Responsibility Principle

Each component should have a single, well-defined responsibility. This makes components easier to test, debug, and reuse.

\`\`\`jsx
// Good: Single responsibility
const UserProfile = ({ user }) => (
  <div className="user-profile">
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);

// Better: Separate concerns
const UserName = ({ name }) => <h2>{name}</h2>;
const UserEmail = ({ email }) => <p>{email}</p>;
\`\`\`

### 2. Composition over Inheritance

React favors composition over inheritance, and for good reason. Composition makes your components more flexible and reusable.

## State Management

For larger applications, consider using state management libraries like Redux Toolkit or Zustand. However, don't reach for them too early - React's built-in state management is often sufficient.

## Performance Optimization

- Use React.memo for expensive components
- Implement proper key props for lists
- Lazy load components with React.Suspense
- Use useMemo and useCallback judiciously

## Conclusion

Building scalable React applications is an ongoing process. Start with good fundamentals and iterate as your application grows.`
          },
          {
            id: 2,
            title: 'Getting Started with Machine Learning',
            slug: 'getting-started-with-machine-learning',
            date: '2024-01-10',
            excerpt: 'A beginner\'s guide to machine learning concepts and how to implement your first ML model.',
            content: `# Getting Started with Machine Learning

*Published on January 10, 2024*

Machine Learning might seem intimidating at first, but with the right approach, anyone can start building ML models. This guide will walk you through the fundamentals.

## What is Machine Learning?

Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every scenario.

## Types of Machine Learning

### 1. Supervised Learning
- Uses labeled data to train models
- Examples: Classification, Regression
- Common algorithms: Linear Regression, Decision Trees, Random Forest

### 2. Unsupervised Learning
- Finds patterns in unlabeled data
- Examples: Clustering, Dimensionality Reduction
- Common algorithms: K-Means, PCA

### 3. Reinforcement Learning
- Learns through interaction with environment
- Examples: Game playing, Robotics

## Getting Started with Python

Python is the most popular language for ML. Here's a simple example:

\`\`\`python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Load data
data = pd.read_csv('data.csv')

# Prepare features and target
X = data[['feature1', 'feature2']]
y = data['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
\`\`\`

## Essential Libraries

- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **Scikit-learn**: Machine learning algorithms
- **Matplotlib/Seaborn**: Data visualization
- **TensorFlow/PyTorch**: Deep learning

## Next Steps

1. Practice with real datasets from Kaggle
2. Take online courses (Coursera, edX)
3. Build projects and share them on GitHub
4. Join ML communities and forums

Machine Learning is a journey, not a destination. Start small, be consistent, and keep learning!`
          },
          {
            id: 3,
            title: 'Modern Web Development Workflow',
            slug: 'modern-web-development-workflow',
            date: '2024-01-05',
            excerpt: 'Explore the tools and techniques that make modern web development efficient and enjoyable.',
            content: `# Modern Web Development Workflow

*Published on January 5, 2024*

The web development landscape has evolved dramatically over the past few years. Modern tools and workflows have made development more efficient, collaborative, and enjoyable.

## Development Environment Setup

A good development environment is the foundation of productive coding. Here's my recommended setup:

### Code Editor
- **VS Code** with essential extensions:
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint
  - Auto Rename Tag
  - GitLens

### Terminal
- Use a modern terminal like Windows Terminal or iTerm2
- Install Oh My Zsh for better shell experience
- Use Git aliases for common commands

## Version Control with Git

Git is essential for any development project. Here are some best practices:

\`\`\`bash
# Use conventional commits
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login validation bug"
git commit -m "docs: update README with setup instructions"

# Use feature branches
git checkout -b feature/user-profile
git checkout -b fix/login-bug
\`\`\`

## Build Tools and Bundlers

Modern JavaScript applications require build tools:

- **Vite**: Fast build tool for modern web projects
- **Webpack**: Powerful bundler with extensive plugin ecosystem
- **Parcel**: Zero-configuration build tool

## Package Management

- **npm**: Default Node.js package manager
- **Yarn**: Fast, reliable, and secure dependency management
- **pnpm**: Efficient package manager that saves disk space

## Testing Strategy

A good testing strategy includes:

### Unit Tests
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('renders user name', () => {
  render(<UserProfile user={{ name: 'John Doe' }} />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});
\`\`\`

### Integration Tests
Test how different parts of your application work together.

### End-to-End Tests
Use tools like Cypress or Playwright to test complete user workflows.

## Deployment and CI/CD

Automate your deployment process:

- **GitHub Actions**: Free CI/CD for GitHub repositories
- **Vercel**: Excellent for frontend deployments
- **Netlify**: Great for static sites and JAMstack apps

## Code Quality Tools

Maintain code quality with:

- **ESLint**: Identify and fix JavaScript issues
- **Prettier**: Consistent code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files

## Conclusion

A well-configured development workflow saves time and reduces errors. Invest time in setting up your tools properly - your future self will thank you!`
          }
        ];

        setBlogPosts(defaultPosts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setMessage({ text: 'Error loading blog posts', type: 'error' });
        setIsLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const handleChange = (id, field, value) => {
    setBlogPosts(prev => 
      prev.map(post => 
        post.id === id ? { ...post, [field]: value } : post
      )
    );
  };

  const handleSave = () => {
    localStorage.setItem('blogData', JSON.stringify(blogPosts));
    setMessage({ text: 'Blog posts saved successfully!', type: 'success' });
    
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  const addNewPost = () => {
    const newId = Math.max(...blogPosts.map(p => p.id), 0) + 1;
    const today = new Date().toISOString().split('T')[0];
    const newPost = {
      id: newId,
      title: 'New Blog Post',
      slug: 'new-blog-post',
      date: today,
      excerpt: 'Write a brief excerpt for your new blog post here.',
      content: `# New Blog Post\n\n*Published on ${today}*\n\nWrite your blog post content here using Markdown formatting.\n\n## Section Title\n\nYour content goes here...\n\n- Bullet point 1\n- Bullet point 2\n- Bullet point 3\n\n## Another Section\n\nMore content here...`
    };
    
    setBlogPosts([...blogPosts, newPost]);
    setExpandedPost(newId);
  };

  const removePost = (id) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
    if (expandedPost === id) {
      setExpandedPost(null);
    }
  };

  const toggleExpand = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleTitleChange = (id, title) => {
    const slug = generateSlug(title);
    setBlogPosts(prev => 
      prev.map(post => 
        post.id === id ? { ...post, title, slug } : post
      )
    );
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading blog posts...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Edit Blog Posts
        </h2>
        <button
          onClick={addNewPost}
          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <Plus size={18} />
          <span>Add Post</span>
        </button>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div 
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div 
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50"
              onClick={() => toggleExpand(post.id)}
            >
              <div className="flex items-center space-x-3">
                {expandedPost === post.id ? (
                  <ChevronUp size={18} className="text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown size={18} className="text-gray-500 dark:text-gray-400" />
                )}
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date} • {post.slug}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removePost(post.id);
                }}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {expandedPost === post.id && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={post.title}
                      onChange={(e) => handleTitleChange(post.id, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Date (YYYY-MM-DD)
                    </label>
                    <input
                      type="date"
                      value={post.date}
                      onChange={(e) => handleChange(post.id, 'date', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Slug
                    </label>
                    <input
                      type="text"
                      value={post.slug}
                      onChange={(e) => handleChange(post.id, 'slug', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Excerpt
                    </label>
                    <textarea
                      value={post.excerpt}
                      onChange={(e) => handleChange(post.id, 'excerpt', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Content (Markdown)
                    </label>
                    <textarea
                      value={post.content}
                      onChange={(e) => handleChange(post.id, 'content', e.target.value)}
                      rows={15}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono text-sm"
                    />
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                    <FileText size={16} />
                    <span>{post.content.length} characters</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div>
          {message.text && (
            <p className={`text-sm ${message.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {message.text}
            </p>
          )}
        </div>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
        >
          <Save size={18} />
          <span>Save All Posts</span>
        </button>
      </div>
    </motion.div>
  );
};

export default BlogEditor;