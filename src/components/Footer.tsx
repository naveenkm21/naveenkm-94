
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-4">Naveen Kumar</h3>
            <p className="text-purple-200 mb-4">
              Building Tomorrow's Solutions with Code & Cloud
            </p>
            <p className="text-sm text-purple-300">
              Computer Science undergraduate specializing in full-stack development, 
              cloud solutions, and AI/ML technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-purple-200">
              <p>naveenkumarmohanarajan38@gmail.com</p>
              <p>+91 9106663529</p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://github.com/naveenkm21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/naveenkumarmohanarajan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center">
          <p className="text-purple-300">
            © {currentYear} Naveen Kumar Mohanarajan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
