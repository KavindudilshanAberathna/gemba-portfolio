import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techStack = [
    { name: "React", icon: "Atom", color: "text-blue-500", position: { top: '20%', left: '10%' } },
    { name: "Node.js", icon: "Server", color: "text-green-500", position: { top: '30%', right: '15%' } },
    { name: "AWS", icon: "Cloud", color: "text-orange-500", position: { bottom: '25%', left: '8%' } },
    { name: "Docker", icon: "Package", color: "text-blue-400", position: { top: '60%', right: '20%' } },
    { name: "MongoDB", icon: "Database", color: "text-green-600", position: { bottom: '40%', right: '10%' } },
    { name: "GraphQL", icon: "Zap", color: "text-pink-500", position: { top: '45%', left: '5%' } },
    { name: "TypeScript", icon: "FileCode", color: "text-blue-600", position: { top: '15%', right: '25%' } },
    { name: "Next.js", icon: "Code", color: "text-gray-800", position: { bottom: '15%', left: '25%' } },
    { name: "Tailwind CSS", icon: "Droplet", color: "text-cyan-400", position: { top: '50%', left: '30%' } },
    { name: "React", icon: "Atom", color: "text-blue-500", position: { bottom: '10%', right: '20%' } }
  ];

  return (
    <>
      {/* Floating Tech Icons */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className="absolute animate-float opacity-70 hover:opacity-100 transition-opacity duration-300"
            style={{
              ...tech.position,
              animationDelay: `${index * 0.5}s`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          >
            <div className="group cursor-pointer pointer-events-auto">
              <div className={`relative`}>
                <div className={`w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center shadow-xl group-hover:scale-125 transition-transform duration-300 ${tech.color}`}>
                  <Icon name={tech.icon} size={22} />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-150 ${isHovering ? 'scale-150' : 'scale-100'}`} />
      </div>

      

      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/40 via-accent/40 to-brand-purple/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/40 via-red-400/40 to-orange-400/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hover Area */}
      <div
        className="fixed inset-0 pointer-events-auto z-0"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
    </>
  );
};

export default InteractiveElements;
