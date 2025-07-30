
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { ArrowDown, Code, Cloud, Brain } from 'lucide-react';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = [
    { name: 'React', icon: Code },
    { name: 'AWS', icon: Cloud },
    { name: 'AI/ML', icon: Brain },
    { name: 'Next.js', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'Java', icon: Code }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const CurrentIcon = skills[currentSkill].icon;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-electric/10 to-primary/10 dark:from-electric/20 dark:to-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 dark:from-purple-400/20 dark:to-pink-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-bl from-yellow-400/10 to-orange-400/10 dark:from-yellow-400/20 dark:to-orange-400/20 rounded-full blur-xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-electric/10 dark:bg-electric/20 text-electric font-medium text-sm border border-electric/20">
                <span className="w-2 h-2 bg-electric rounded-full mr-2 animate-pulse"></span>
                Available for opportunities
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-poppins mb-6 leading-tight">
              <span className="text-gray-900 dark:text-white">Hello, I'm</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-electric to-purple-600">
                Naveen Kumar
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl font-medium mb-4 text-gray-700 dark:text-gray-300">
              Building Tomorrow's Solutions with Code & Cloud
            </p>
            
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
              Computer Science undergraduate and aspiring Full-Stack Developer & Cloud Solutions Engineer 
              specializing in React, AI/ML, and AWS cloud technologies.
            </p>

            {/* Animated Skills */}
            <div className="mb-10">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Currently mastering:</p>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-xl px-6 py-4 shadow-lg border border-gray-100 dark:border-gray-700">
                  <CurrentIcon className="w-6 h-6 text-electric transition-all duration-500" />
                  <span className="text-xl font-semibold text-gray-900 dark:text-white transition-all duration-500">
                    {skills[currentSkill].name}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-gradient-to-r from-primary to-electric hover:from-primary/90 hover:to-electric/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="relative animate-slide-in-left">
            <div className="relative max-w-md mx-auto">
              {/* Main profile container */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-3xl bg-gradient-to-br from-primary to-electric p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-white dark:from-gray-700 dark:to-gray-800">
                    <img 
                      src="https://i.postimg.cc/nrD9fxqm/1738781602410.jpg" 
                      alt="Naveen Kumar - Full-Stack Developer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                {/* Floating achievement badges */}
                <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-xl border border-gray-100 dark:border-gray-700 animate-float">
                  <div className="flex items-center space-x-2">
                    <Cloud className="w-5 h-5 text-electric" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">AWS Certified</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-xl border border-gray-100 dark:border-gray-700 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">React Expert</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-white" />
                    <span className="text-sm font-bold text-white">AI/ML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="flex flex-col items-center space-y-1 group-hover:animate-bounce">
            <ArrowDown className="w-4 h-4" />
            <ArrowDown className="w-4 h-4 opacity-50" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
