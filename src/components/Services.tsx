import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: "🎨",
      title: "Front-End Development",
      description: "Custom React/Next.js interfaces with modern design principles, responsive layouts, and optimized performance.",
      features: ["React & Next.js", "Responsive Design", "Modern UI/UX", "Performance Optimization"],
      gradient: "from-purple-600 to-purple-800",
      delay: "0s"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "AWS infrastructure design and optimization for scalable, high-availability applications with cost-effective solutions.",
      features: ["AWS Architecture", "Infrastructure Design", "Cost Optimization", "Scalability Planning"],
      gradient: "from-electric to-blue-600",
      delay: "0.1s"
    },
    {
      icon: "🤖",
      title: "AI/ML Integration",
      description: "Predictive analytics and intelligent tool development using machine learning algorithms and data science techniques.",
      features: ["Machine Learning", "Predictive Analytics", "Data Visualization", "AI Tool Development"],
      gradient: "from-yellow-500 to-orange-600",
      delay: "0.2s"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Android applications with Jetpack Compose, focusing on modern development practices and user experience.",
      features: ["Jetpack Compose", "Android Development", "Material Design", "App Optimization"],
      gradient: "from-green-500 to-teal-600",
      delay: "0.3s"
    }
  ];

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1S26gZ5F61xM6o4QdOHXYt6kDCfvQqovl/view?usp=sharing', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-electric/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-bl from-yellow-400/5 to-orange-400/5 rounded-full blur-2xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600/10 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 font-medium text-sm border border-purple-600/20 mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Services
          </span>
          <h2 className="text-5xl font-bold font-poppins text-navy dark:text-white mb-6">
            What I
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-electric"> Offer</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-electric mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Comprehensive development services combining cutting-edge technologies 
            with practical solutions for your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 border-0 dark:border dark:border-gray-700 overflow-hidden animate-fade-in bg-white dark:bg-gray-800"
              style={{ animationDelay: service.delay }}
            >
              <CardContent className="p-0">
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute -top-6 -right-6 text-8xl opacity-10">
                    {service.icon}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-poppins mb-4">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-8 bg-white dark:bg-gray-800">
                  <h4 className="font-bold text-navy dark:text-white mb-6 text-lg">Key Features:</h4>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                        <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-4 group-hover:scale-110 transition-transform`}></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-electric transition-all duration-300 group/button"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resume Download Section */}
        <div className="bg-gradient-to-r from-navy via-purple-800 to-navy dark:from-gray-800 dark:via-purple-900 dark:to-gray-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-6xl mb-6">📄</div>
            <h3 className="text-4xl font-bold font-poppins mb-6">Ready to Work Together?</h3>
            <p className="text-purple-200 dark:text-purple-300 text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
              Download my comprehensive resume to learn more about my experience, skills, and achievements. 
              Let's discuss how I can contribute to your next project and bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={downloadResume}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-navy hover:from-yellow-500 hover:to-orange-600 font-bold transition-all duration-300 transform hover:scale-105 shadow-xl px-8 py-4 text-lg"
              >
                <Download className="w-5 h-5 mr-3" />
                Download Resume
              </Button>
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-navy transition-all duration-300 font-semibold px-8 py-4 text-lg"
              >
                Contact Me
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
