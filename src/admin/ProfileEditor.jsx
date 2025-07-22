import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

const ProfileEditor = () => {
  const [profileData, setProfileData] = useState({
    name: '[Insert Your Name]',
    tagline: 'Full-stack developer | Open Source Contributor',
    bio: 'Passionate about building innovative solutions that make a difference. I specialize in full-stack development with expertise in React, Node.js, and modern web technologies. Always eager to learn and contribute to meaningful projects that solve real-world problems.',
    github: 'https://github.com/Deuce01',
    linkedin: '#',
    email: 'your.email@example.com',
    profileImage: 'https://via.placeholder.com/200x200?text=Profile',
    skills: [
      'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB',
      'PostgreSQL', 'Firebase', 'Tailwind CSS', 'Express', 'React Native', 'Machine Learning'
    ]
  });

  const [message, setMessage] = useState({ text: '', type: '' });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setProfileData(prev => ({ ...prev, skills }));
  };

  const handleSave = () => {
    localStorage.setItem('profileData', JSON.stringify(profileData));
    setMessage({ text: 'Profile saved successfully!', type: 'success' });
    
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Edit Profile Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tagline
          </label>
          <input
            type="text"
            name="tagline"
            value={profileData.tagline}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Bio
          </label>
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            GitHub URL
          </label>
          <input
            type="url"
            name="github"
            value={profileData.github}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            LinkedIn URL
          </label>
          <input
            type="url"
            name="linkedin"
            value={profileData.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Profile Image URL
          </label>
          <input
            type="url"
            name="profileImage"
            value={profileData.profileImage}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Skills (comma-separated)
          </label>
          <textarea
            name="skills"
            value={profileData.skills.join(', ')}
            onChange={handleSkillChange}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
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
          <span>Save Changes</span>
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Preview</h3>
        <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={profileData.profileImage}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full border-2 border-blue-500"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {profileData.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {profileData.tagline}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {profileData.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileEditor;