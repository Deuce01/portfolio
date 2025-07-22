export const projects = [
  {
    id: 1,
    title: "Kenya Vote Verify",
    description: "A comprehensive election verification system for Kenya, enabling transparent and secure vote counting and verification processes.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Deuce01/kenya-vote-verify",
    demoUrl: null,
    image: "https://via.placeholder.com/400x250?text=Kenya+Vote+Verify",
    tags: ["React", "Node.js", "MongoDB", "Express", "Election", "Verification"]
  },
  {
    id: 2,
    title: "Kenyan School Compass",
    description: "An educational platform helping students and parents navigate the Kenyan education system with school information and guidance.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/Deuce01/kenyan-school-compass",
    demoUrl: null,
    image: "https://via.placeholder.com/400x250?text=School+Compass",
    tags: ["React", "Firebase", "Tailwind CSS", "Education", "Platform"]
  },
  {
    id: 3,
    title: "AgroMarket",
    description: "A digital marketplace connecting farmers directly with consumers, eliminating middlemen and ensuring fair prices for agricultural products.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/Deuce01/agromarket",
    demoUrl: null,
    image: "https://via.placeholder.com/400x250?text=AgroMarket",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "E-commerce", "Agriculture"]
  },
  {
    id: 4,
    title: "Mkononi",
    description: "A mobile-first financial services platform providing microfinance and digital banking solutions for underserved communities.",
    techStack: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/Deuce01/mkononi",
    demoUrl: null,
    image: "https://via.placeholder.com/400x250?text=Mkononi",
    tags: ["React Native", "Node.js", "MongoDB", "Socket.io", "Fintech", "Mobile"]
  },
  {
    id: 5,
    title: "Churn Prediction",
    description: "Machine learning model for predicting customer churn using advanced analytics and data science techniques to help businesses retain customers.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Flask"],
    githubUrl: "https://github.com/Deuce01/churn-prediction",
    demoUrl: null,
    image: "https://via.placeholder.com/400x250?text=Churn+Prediction",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "Flask", "Data Science"]
  }
];

export const getAllTags = () => {
  const tags = new Set();
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};