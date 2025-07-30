import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  logo: string;
  color: string;
  category: string;
}

const InteractiveSkills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const skills: Skill[] = [
    { name: 'JavaScript', logo: '/lovable-uploads/6f2e46b4-5c39-4c40-9cdf-48945f8569f3.png', color: '#F7DF1E', category: 'Frontend' },
    { name: 'React', logo: '/lovable-uploads/e98be2a6-0429-45d7-a4ec-1362a49557e2.png', color: '#61DAFB', category: 'Frontend' },
    { name: 'Python', logo: '/lovable-uploads/50a0fc22-52a2-4172-ad75-47a3dfe6f035.png', color: '#3776AB', category: 'Backend' },
    { name: 'Java', logo: '/lovable-uploads/900cc8b5-8682-421d-ad92-ad7d84e3c8a5.png', color: '#ED8B00', category: 'Backend' },
    { name: 'C++', logo: '/lovable-uploads/d9a7633e-1f8f-4eef-81e8-b3b63435057b.png', color: '#00599C', category: 'Languages' },
    { name: '3D Modeling', logo: '/lovable-uploads/9e828afb-a23d-4f2e-b33b-f1e58fc3603a.png', color: '#4CAF50', category: 'Tools' }
  ];

  // Continuous rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setRotation(prev => prev + 0.5); // Slow continuous rotation
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: (e.clientX - centerX) / rect.width,
          y: (e.clientY - centerY) / rect.height
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getSkillPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const baseRadius = 120;
    const mouseInfluence = isHovered ? 20 : 0;
    
    // Add mouse influence and continuous rotation
    const radius = baseRadius + mouseInfluence * (1 + Math.sin(angle + mousePosition.x * 2));
    const mouseRotation = isHovered ? mousePosition.x * 0.5 : 0;
    const continuousRotation = (rotation * Math.PI) / 180; // Convert to radians
    
    const x = Math.cos(angle + mouseRotation + continuousRotation) * radius;
    const y = Math.sin(angle + mouseRotation + continuousRotation) * radius;
    
    return {
      transform: `translate(${x}px, ${y}px) scale(${isHovered ? 1.1 : 1})`,
      transition: isHovered ? 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.1s ease-out'
    };
  };

  return (
    <div className="text-center py-20">
      <h3 className="text-3xl font-bold font-poppins text-navy dark:text-white mb-12">
        Interactive Tech Stack
      </h3>
      
      <div 
        ref={containerRef}
        className="relative mx-auto w-80 h-80 flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Center Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-electric flex items-center justify-center shadow-lg">
            <span className="text-2xl text-white font-bold">ME</span>
          </div>
        </div>

        {/* Revolving Skills */}
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="absolute w-16 h-16 group cursor-pointer"
            style={getSkillPosition(index, skills.length)}
          >
            <Card className="w-full h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-0 w-full h-full flex items-center justify-center relative overflow-hidden">
                {/* Background glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"
                  style={{ backgroundColor: skill.color }}
                />
                
                {/* Logo */}
                <div className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 relative z-10 flex items-center justify-center">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-navy dark:bg-white text-white dark:text-navy px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {skill.name}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Orbital rings */}
        <div className="absolute inset-0 border border-electric/20 rounded-full pointer-events-none" />
        <div className="absolute inset-4 border border-primary/10 rounded-full pointer-events-none" />
      </div>

      {/* Legend */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {Array.from(new Set(skills.map(s => s.category))).map(category => (
          <div key={category} className="text-center">
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-electric rounded-full mx-auto mb-2" />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSkills;