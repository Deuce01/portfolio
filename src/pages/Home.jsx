import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Home = () => {
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
  
  // Load profile data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
  }, []);
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: profileData.github,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: profileData.linkedin,
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: `mailto:${profileData.email}`,
      icon: Mail,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={profileData.profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 dark:border-blue-400"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {profileData.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            {profileData.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {profileData.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <link.icon size={20} className="text-gray-700 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 mx-auto">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {profileData.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;