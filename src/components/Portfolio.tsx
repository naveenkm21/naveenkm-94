
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ExternalLink, Star, Code, Smartphone, Cloud, Brain, Github, Gamepad2 } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  // Your actual pinned GitHub repositories
  const projects = [
    {
      id: 1,
      title: "Unscramble App",
      category: "mobile",
      description: "An interactive Android word unscrambling game built with Jetpack Compose, featuring engaging UI and challenging gameplay mechanics.",
      technologies: ["Kotlin", "Jetpack Compose", "Android", "Material Design"],
      image: "🔤",
      link: "https://github.com/naveenkm21/UnscrambleApp",
      githubRepo: "naveenkm21/UnscrambleApp",
      featured: true,
      status: "Featured Project"
    },
    {
      id: 2,
      title: "QuizMaster App",
      category: "mobile",
      description: "GDG community quiz application with interactive questions, real-time scoring, and modern Android development practices.",
      technologies: ["Android", "Kotlin", "Firebase", "Material Design"],
      image: "🧠",
      link: "https://github.com/naveenkm21/QuizMaster-GDG",
      githubRepo: "naveenkm21/QuizMaster-GDG",
      status: "Community Project"
    },
    {
      id: 3,
      title: "SpaceShip Shooter",
      category: "game",
      description: "Action-packed space shooter game with engaging graphics, smooth controls, and challenging gameplay mechanics.",
      technologies: ["Game Development", "Graphics", "Animation", "Physics"],
      image: "🚀",
      link: "https://github.com/naveenkm21/SpaceShipShooter",
      githubRepo: "naveenkm21/SpaceShipShooter",
      status: "Game Project"
    },
    {
      id: 4,
      title: "FitTrackAI",
      category: "ai-ml",
      description: "AI-powered fitness tracking application that provides personalized workout recommendations and progress analytics.",
      technologies: ["AI/ML", "Python", "TensorFlow", "Health Analytics"],
      image: "💪",
      link: "https://github.com/naveenkm21/fitness-ai-app",
      githubRepo: "naveenkm21/fitness-ai-app",
      featured: true,
      status: "AI Project"
    },
    {
      id: 5,
      title: "Color Palette Generator",
      category: "web",
      description: "GDG project for generating beautiful color palettes with accessibility features and export options for designers.",
      technologies: ["Web Development", "Color Theory", "Design Tools", "Accessibility"],
      image: "🎨",
      link: "https://github.com/naveenkm21/Color-Palette-Generator-GDG",
      githubRepo: "naveenkm21/Color-Palette-Generator-GDG",
      status: "Design Tool"
    },
    {
      id: 6,
      title: "Stock Price Predictor",
      category: "ai-ml",
      description: "Machine learning model for predicting stock prices using historical data analysis and advanced algorithms.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Financial Modeling"],
      image: "📈",
      link: "https://github.com/naveenkm21/StockPricePredictor",
      githubRepo: "naveenkm21/StockPricePredictor",
      status: "ML Project"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code, count: projects.length },
    { id: 'web', name: 'Web Dev', icon: Code, count: projects.filter(p => p.category === 'web').length },
    { id: 'ai-ml', name: 'AI/ML', icon: Brain, count: projects.filter(p => p.category === 'ai-ml').length },
    { id: 'mobile', name: 'Mobile', icon: Smartphone, count: projects.filter(p => p.category === 'mobile').length },
    { id: 'game', name: 'Games', icon: Gamepad2, count: projects.filter(p => p.category === 'game').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-electric/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/5 to-pink-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary font-medium text-sm border border-primary/20 mb-6">
            <Star className="w-4 h-4 mr-2" />
            My Work
          </span>
          <h2 className="text-5xl font-bold font-poppins text-navy dark:text-white mb-6">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-electric"> Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-electric mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Explore my latest projects from GitHub showcasing expertise in mobile development, 
            AI/ML applications, and interactive game development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? "default" : "outline"}
                className={`group relative ${
                  filter === category.id 
                    ? 'bg-gradient-to-r from-primary to-electric text-white shadow-lg' 
                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:text-primary bg-white dark:bg-gray-800'
                } transition-all duration-300 px-6 py-3 rounded-xl font-medium`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.name}
                <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                  filter === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'
                }`}>
                  {category.count}
                </span>
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-3 border-0 dark:border dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 ${
                project.featured ? 'ring-2 ring-primary/20 shadow-lg' : ''
              }`}
            >
              <CardContent className="p-0">
                {/* Project Image/Icon */}
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-7xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.featured 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-navy' 
                      : 'bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
                  }`}>
                    {project.status}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 dark:group-hover:bg-gray-900/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button 
                      size="sm"
                      className="bg-white text-navy hover:bg-gray-100 shadow-lg transition-all duration-200"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins text-navy dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium hover:from-primary/10 hover:to-electric/10 hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white dark:border-primary/30 dark:text-primary transition-all duration-300 group-hover:border-primary"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-navy to-purple-800 dark:from-gray-800 dark:to-purple-900 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold font-poppins mb-4">Ready to Start Your Project?</h3>
            <p className="text-purple-200 dark:text-purple-300 text-lg mb-8 leading-relaxed">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-navy hover:from-yellow-500 hover:to-orange-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Project
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
