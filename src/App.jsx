import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './components/BlogPost';
import AdminLogin from './admin/AdminLogin';
import AdminPanel from './admin/AdminPanel';
import ProtectedRoute from './admin/ProtectedRoute';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router basename="/portfolio">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } 
            />
            <Route 
              path="projects" 
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              } 
            />
            <Route 
              path="blog" 
              element={
                <PageTransition>
                  <Blog />
                </PageTransition>
              } 
            />
            <Route 
              path="blog/:slug" 
              element={
                <PageTransition>
                  <BlogPost />
                </PageTransition>
              } 
            />
            <Route 
              path="admin-login" 
              element={
                <PageTransition>
                  <AdminLogin />
                </PageTransition>
              } 
            />
            <Route 
              path="admin" 
              element={
                <ProtectedRoute>
                  <PageTransition>
                    <AdminPanel />
                  </PageTransition>
                </ProtectedRoute>
              } 
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;