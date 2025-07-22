import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { projects as initialProjects } from '../data/projects';

const ProjectsEditor = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [expandedProject, setExpandedProject] = useState(null);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('projectsData');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const handleChange = (id, field, value) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const handleTechStackChange = (id, value) => {
    const techStack = value.split(',').map(tech => tech.trim());
    handleChange(id, 'techStack', techStack);
  };

  const handleTagsChange = (id, value) => {
    const tags = value.split(',').map(tag => tag.trim());
    handleChange(id, 'tags', tags);
  };

  const handleSave = () => {
    localStorage.setItem('projectsData', JSON.stringify(projects));
    setMessage({ text: 'Projects saved successfully!', type: 'success' });
    
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  const addNewProject = () => {
    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    const newProject = {
      id: newId,
      title: 'New Project',
      description: 'Project description goes here',
      techStack: ['React'],
      githubUrl: '',
      demoUrl: null,
      image: 'https://via.placeholder.com/400x250?text=New+Project',
      tags: ['React']
    };
    
    setProjects([...projects, newProject]);
    setExpandedProject(newId);
  };

  const removeProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
    if (expandedProject === id) {
      setExpandedProject(null);
    }
  };

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Edit Projects
        </h2>
        <button
          onClick={addNewProject}
          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <Plus size={18} />
          <span>Add Project</span>
        </button>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div 
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50"
              onClick={() => toggleExpand(project.id)}
            >
              <div className="flex items-center space-x-3">
                {expandedProject === project.id ? (
                  <ChevronUp size={18} className="text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown size={18} className="text-gray-500 dark:text-gray-400" />
                )}
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeProject(project.id);
                }}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {expandedProject === project.id && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => handleChange(project.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Image URL
                    </label>
                    <input
                      type="text"
                      value={project.image}
                      onChange={(e) => handleChange(project.id, 'image', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Description
                    </label>
                    <textarea
                      value={project.description}
                      onChange={(e) => handleChange(project.id, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      GitHub URL
                    </label>
                    <input
                      type="text"
                      value={project.githubUrl}
                      onChange={(e) => handleChange(project.id, 'githubUrl', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Demo URL (optional)
                    </label>
                    <input
                      type="text"
                      value={project.demoUrl || ''}
                      onChange={(e) => handleChange(project.id, 'demoUrl', e.target.value || null)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Tech Stack (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={project.techStack.join(', ')}
                      onChange={(e) => handleTechStackChange(project.id, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Tags (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={project.tags.join(', ')}
                      onChange={(e) => handleTagsChange(project.id, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
          <span>Save All Projects</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectsEditor;