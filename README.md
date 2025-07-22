# Developer Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🏠 **Home Page**: Personal introduction with social links and skills showcase
- 📁 **Projects Page**: Interactive project cards with filtering by tech stack
- 📝 **Blog Section**: Markdown-powered blog posts
- 🌙 **Dark/Light Mode**: Toggle between themes with persistent preference
- 📱 **Responsive Design**: Optimized for all device sizes
- ✨ **Smooth Animations**: Page transitions and hover effects with Framer Motion
- 🚀 **Fast Performance**: Built with Vite for optimal loading speeds
- 🔒 **Admin Panel**: Secure admin interface for content management

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Markdown**: React Markdown with remark-gfm
- **Admin Panel**: Session-based authentication with secure password storage

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

### Personal Information

You can update your portfolio in two ways:

#### Option 1: Using the Admin Panel

1. Navigate to `/admin-login` in your browser (with the base URL prefix, e.g., `http://localhost:5173/portfolio/admin-login`)
2. Enter the password (default is set in `.env` file as `VITE_ADMIN_PASSWORD=Portfolio@Admin2024`)
3. Use the admin interface to update your profile, projects, and blog posts
4. Changes are saved to localStorage and can be exported as JSON

#### Option 2: Editing Files Directly

1. **src/pages/Home.jsx**: Update name, bio, social links, and profile image
2. **src/data/projects.js**: Add your GitHub repositories and project details
3. **src/blog/**: Add your blog posts as Markdown files

### Branding

- Replace placeholder images with your actual photos
- Update social media links
- Customize colors in `tailwind.config.js`

## Deployment

### GitHub Pages

1. Update the `base` path in `vite.config.js` to match your repository name
2. Run the deployment command:
```bash
npm run deploy
```

### Vercel

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with dark mode toggle
│   ├── ProjectCard.jsx # Individual project display
│   └── BlogPost.jsx    # Blog post display component
├── pages/              # Main page components
│   ├── Home.jsx        # Landing page
│   ├── Projects.jsx    # Projects showcase
│   └── Blog.jsx        # Blog listing
├── admin/              # Admin panel components
│   ├── AdminLogin.jsx  # Admin login page
│   ├── AdminPanel.jsx  # Main admin dashboard
│   ├── ProfileEditor.jsx # Profile editing component
│   ├── ProjectsEditor.jsx # Projects editing component
│   ├── BlogEditor.jsx # Blog posts editing component
│   └── ProtectedRoute.jsx # Auth protection component
├── blog/               # Markdown blog posts
├── data/               # Static data files
│   └── projects.js     # Project metadata
├── assets/             # Images and static files
├── App.jsx             # Main app component
└── main.jsx           # App entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [@Deuce01](https://github.com/Deuce01)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]

---

Built with ❤️ using React and modern web technologies.