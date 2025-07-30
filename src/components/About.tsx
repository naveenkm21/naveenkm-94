
import { Card, CardContent } from '@/components/ui/card';
import Timeline from './Timeline';

const About = () => {
  const education = [
    {
      period: "2023 - 2027",
      title: "B.Tech in Computer Science",
      institution: "SRM Institute of Science & Technology",
      description: "Pursuing comprehensive computer science education with focus on software development and emerging technologies.",
      status: "current" as const,
      type: "education" as const
    },
    {
      period: "2023",
      title: "10th & 12th Grade",
      institution: "K.D. Ambani Reliance Foundation School",
      description: "Strong academic foundation with excellence in mathematics and science subjects.",
      status: "completed" as const,
      type: "education" as const
    }
  ];

  const experience = [
    {
      period: "Jan - Mar 2025",
      title: "AWS Academy Graduate Intern",
      company: "AWS Academy",
      description: "Focus on AWS tools and cloud infrastructure, gaining hands-on experience with cloud solutions.",
      status: "current" as const,
      type: "experience" as const
    },
    {
      period: "Dec 2024 - Jan 2025",
      title: "ML Intern",
      company: "Reliance Industries",
      description: "Gasifier refractory lifespan prediction using Power BI dashboards and machine learning algorithms.",
      status: "completed" as const,
      type: "experience" as const
    },
    {
      period: "Oct - Dec 2024",
      title: "Android Dev Intern",
      company: "AICTE-EDUSKILLS",
      description: "Jetpack Compose app development with focus on modern Android development practices.",
      status: "completed" as const,
      type: "experience" as const
    },
    {
      period: "May - Jun 2024",
      title: "AI Intern",
      company: "PERSONIFWY",
      description: "Hands-on AI project contributions and machine learning model development.",
      status: "completed" as const,
      type: "experience" as const
    }
  ];

  const skills = [
    { 
      category: "Languages", 
      items: ["C/C++", "Java", "Python", "JavaScript"],
      icon: "💻",
      color: "from-blue-500 to-purple-600"
    },
    { 
      category: "Web Technologies", 
      items: ["HTML", "CSS", "React", "Next.js"],
      icon: "🌐",
      color: "from-green-500 to-teal-600"
    },
    { 
      category: "Cloud & Tools", 
      items: ["AWS", "Power BI", "Jetpack Compose"],
      icon: "☁️",
      color: "from-orange-500 to-red-600"
    },
    { 
      category: "AI/ML", 
      items: ["Machine Learning", "Predictive Analytics"],
      icon: "🤖",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const certifications = [
    { name: "AWS Cloud Foundations", status: "certified" },
    { name: "AWS Cloud Architecting", status: "certified" },
    { name: "Oracle Java Certification", status: "certified" },
    { name: "Oracle Cloud Infrastructure", status: "certified" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-electric/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-bl from-purple-400/5 to-pink-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-electric/10 dark:bg-electric/20 text-electric dark:text-electric font-medium text-sm border border-electric/20 mb-6">
            <span className="w-2 h-2 bg-electric rounded-full mr-2 animate-pulse"></span>
            About Me
          </span>
          <h2 className="text-5xl font-bold font-poppins text-navy dark:text-white mb-6">
            Passionate Developer &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-electric"> Cloud Enthusiast</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-electric mx-auto mb-8"></div>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="prose prose-lg prose-gray dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a motivated Computer Science undergraduate with a passion for merging front-end development 
                with cutting-edge cloud technologies and artificial intelligence. My journey spans from creating 
                intuitive user interfaces with React and Next.js to building scalable cloud solutions on AWS.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Dedicated to continuous learning and proactive problem-solving, I thrive on transforming complex 
                challenges into elegant, efficient solutions. My experience across multiple internships has shaped 
                my understanding of both technical excellence and real-world application development.
              </p>
            </div>
            
            {/* Latest Learning Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-electric text-white rounded-xl text-sm font-medium shadow-lg">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
              Currently Exploring: DevOps Tools
            </div>
          </div>
          
          {/* Certifications Card */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-navy to-purple-800 dark:from-gray-800 dark:to-purple-900 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 text-white relative">
                <div className="absolute -top-4 -right-4 text-6xl opacity-20">🏆</div>
                <h4 className="text-2xl font-bold font-poppins mb-6 relative z-10">Certifications</h4>
                <div className="space-y-4 relative z-10">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 group-hover:scale-110 transition-transform"></div>
                      <span className="text-lg font-medium group-hover:text-yellow-200 transition-colors">
                        {cert.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education & Experience Timelines */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Education Timeline */}
          <div>
            <h3 className="text-3xl font-bold font-poppins text-navy dark:text-white mb-12 text-center lg:text-left">
              Education Journey
            </h3>
            <Timeline items={education} type="education" />
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-3xl font-bold font-poppins text-navy dark:text-white mb-12 text-center lg:text-left">
              Work Experience
            </h3>
            <Timeline items={experience} type="experience" />
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold font-poppins text-navy dark:text-white mb-12">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 border-0 dark:border dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
                <CardContent className="p-8 text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skillGroup.icon}
                  </div>
                  <h4 className="font-bold text-lg text-navy dark:text-white mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors relative z-10">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-3 relative z-10">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className={`inline-block bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent font-medium px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 group-hover:border-purple-300 dark:group-hover:border-purple-600 transition-all duration-300 mx-1 mb-2 group-hover:shadow-md`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
