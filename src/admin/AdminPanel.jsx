import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Download } from 'lucide-react';
import ProfileEditor from './ProfileEditor';
import ProjectsEditor from './ProjectsEditor';
import BlogEditor from './BlogEditor';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();
  
  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    navigate('/');
  };

  const handleExportData = () => {
    // Get data from localStorage
    const profileData = JSON.parse(localStorage.getItem('profileData') || '{}');
    const projectsData = JSON.parse(localStorage.getItem('projectsData') || '[]');
    const blogData = JSON.parse(localStorage.getItem('blogData') || '[]');
    
    // Combine all data
    const exportData = {
      profile: profileData,
      projects: projectsData,
      blog: blogData,
      exportDate: new Date().toISOString()
    };
    
    // Create and download file
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Admin Header */}
          <div className="bg-blue-600 p-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <div className="flex space-x-4">
              <button
                onClick={handleExportData}
                className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Download size={18} />
                <span>Export Data</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex">
              {['profile', 'projects', 'blog'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'profile' && <ProfileEditor />}
            {activeTab === 'projects' && <ProjectsEditor />}
            {activeTab === 'blog' && <BlogEditor />}
          </div>

          {/* Security Notice */}
          <div className="bg-red-50 dark:bg-red-900/20 p-4 border-t border-red-200 dark:border-red-800">
            <p className="text-sm text-red-600 dark:text-red-400 text-center">
              ⚠️ This admin panel is not production-secure. For local or portfolio use only.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;