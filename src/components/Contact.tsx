import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Phone, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully! 🚀",
      description: "Thank you for your message. I'll get back to you within 24 hours!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "naveenkumarmohanarajan38@gmail.com",
      link: "mailto:naveenkumarmohanarajan38@gmail.com",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9106663529",
      link: "tel:+919106663529",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      value: "linkedin.com/in/naveenkumarmohanarajan",
      link: "https://linkedin.com/in/naveenkumarmohanarajan",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: ExternalLink,
      label: "GitHub",
      value: "github.com/naveenkm21",
      link: "https://github.com/naveenkm21",
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      value: "leetcode.com/u/naveenkmoh",
      link: "https://leetcode.com/u/naveenkmoh/",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/naveenkm21",
      color: "hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200 hover:scale-110"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/naveenkumarmohanarajan",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110"
    },
    {
      name: "LeetCode",
      icon: "🧠",
      url: "https://leetcode.com/u/naveenkmoh/",
      color: "hover:bg-yellow-50 dark:hover:bg-yellow-900/30 hover:text-yellow-600 dark:hover:text-yellow-400 hover:scale-110"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-electric/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-bl from-purple-400/5 to-pink-400/5 rounded-full blur-2xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-electric/10 dark:bg-electric/20 text-electric font-medium text-sm border border-electric/20 mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's Connect
          </span>
          <h2 className="text-5xl font-bold font-poppins text-navy dark:text-white mb-6">
            Get In
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-electric"> Touch</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-electric mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-2xl border-0 dark:border dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary to-electric p-8 text-white">
                  <h3 className="text-3xl font-bold font-poppins mb-4">Send Me a Message</h3>
                  <p className="text-white/90">Let's discuss your project and how I can help you achieve your goals.</p>
                </div>
                
                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary resize-none rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-electric text-white hover:from-primary/90 hover:to-electric/90 transition-all duration-300 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Details */}
            <Card className="shadow-2xl border-0 dark:border dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-poppins text-navy dark:text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-white dark:hover:bg-gray-600 hover:shadow-md transition-all duration-300 group border border-gray-100 dark:border-gray-600"
                      >
                        <div className={`p-3 bg-gradient-to-r ${item.color} rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-navy dark:text-white group-hover:text-primary transition-colors">
                            {item.label}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{item.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links & CTA */}
            <Card className="shadow-2xl border-0 dark:border dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-poppins text-navy dark:text-white mb-6">Follow Me</h3>
                
                <div className="flex space-x-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-xl text-2xl transition-all duration-300 ${social.color} shadow-md hover:shadow-lg`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-600 to-electric rounded-2xl text-white text-center">
                  <h4 className="font-bold text-xl mb-3">Let's Build Something Amazing!</h4>
                  <p className="text-sm text-purple-100 mb-4">
                    I'm always excited to work on innovative projects and collaborate with talented teams.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-yellow-300">
                    <span>⚡</span>
                    <span className="text-sm font-medium">Fast Response</span>
                    <span>•</span>
                    <span className="text-sm font-medium">Quality Work</span>
                    <span>•</span>
                    <span className="text-sm font-medium">On-time Delivery</span>
                    <span>⚡</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
