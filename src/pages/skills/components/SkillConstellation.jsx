import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillConstellation = ({ skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getSkillSize = (proficiency) => {
    switch (proficiency) {
      case 'Expert': return 'w-16 h-16 text-lg';
      case 'Advanced': return 'w-14 h-14 text-base';
      case 'Intermediate': return 'w-12 h-12 text-sm';
      default: return 'w-10 h-10 text-xs';
    }
  };

  const getSkillColor = (proficiency) => {
    switch (proficiency) {
      case 'Expert': return 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white';
      case 'Advanced': return 'bg-gradient-to-br from-blue-500 to-blue-600 text-white';
      case 'Intermediate': return 'bg-gradient-to-br from-amber-500 to-amber-600 text-white';
      default: return 'bg-gradient-to-br from-slate-400 to-slate-500 text-white';
    }
  };

  const getRandomPosition = (index) => {
    const positions = [
      { top: '10%', left: '15%' },
      { top: '20%', left: '70%' },
      { top: '35%', left: '25%' },
      { top: '15%', left: '45%' },
      { top: '45%', left: '80%' },
      { top: '60%', left: '20%' },
      { top: '50%', left: '55%' },
      { top: '75%', left: '35%' },
      { top: '70%', left: '75%' },
      { top: '85%', left: '50%' },
      { top: '25%', left: '85%' },
      { top: '40%', left: '10%' }
    ];
    return positions?.[index % positions?.length];
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-purple rounded-lg flex items-center justify-center">
            <Icon name="Sparkles" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Skills Constellation</h3>
            <p className="text-sm text-muted-foreground">Interactive technology map</p>
          </div>
        </div>
        
        {/* Legend */}
        <div className="hidden lg:flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-emerald-500 rounded-full" />
            <span className="text-muted-foreground">Expert</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-muted-foreground">Advanced</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-amber-500 rounded-full" />
            <span className="text-muted-foreground">Intermediate</span>
          </div>
        </div>
      </div>
      {/* Constellation Container */}
      <div className="relative h-96 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-slate-300 rounded-full" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-slate-300 rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-slate-300 rounded-full" />
        </div>

        {/* Skills */}
        {skills?.slice(0, 12)?.map((skill, index) => {
          const position = getRandomPosition(index);
          return (
            <div
              key={skill?.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                top: position?.top,
                left: position?.left,
                animationDelay: `${index * 150}ms`,
                opacity: animationComplete ? 1 : 0,
                transform: animationComplete 
                  ? 'translate(-50%, -50%) scale(1)' 
                  : 'translate(-50%, -50%) scale(0)'
              }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`
                ${getSkillSize(skill?.proficiency)} 
                ${getSkillColor(skill?.proficiency)}
                rounded-full flex items-center justify-center font-medium
                shadow-lg hover:shadow-xl transform hover:scale-110 
                transition-all duration-300 animate-float
                ${hoveredSkill?.name === skill?.name ? 'ring-4 ring-primary/30' : ''}
              `}>
                {skill?.name?.substring(0, 2)?.toUpperCase()}
              </div>
              {/* Tooltip */}
              {hoveredSkill?.name === skill?.name && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                  <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
                    <div className="font-medium">{skill?.name}</div>
                    <div className="text-xs opacity-75">{skill?.proficiency} • {skill?.experience}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
                  </div>
                </div>
              )}
              {/* Connection Lines */}
              {hoveredSkill?.name === skill?.name && (
                <svg className="absolute inset-0 pointer-events-none" style={{ width: '400px', height: '400px', top: '-200px', left: '-200px' }}>
                  {skills?.slice(0, 12)?.map((otherSkill, otherIndex) => {
                    if (otherIndex === index) return null;
                    const otherPosition = getRandomPosition(otherIndex);
                    return (
                      <line
                        key={otherIndex}
                        x1="200"
                        y1="200"
                        x2={`${200 + (parseFloat(otherPosition?.left) - parseFloat(position?.left)) * 4}`}
                        y2={`${200 + (parseFloat(otherPosition?.top) - parseFloat(position?.top)) * 4}`}
                        stroke="rgba(37, 99, 235, 0.2)"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    );
                  })}
                </svg>
              )}
            </div>
          );
        })}
      </div>
      {/* Mobile Legend */}
      <div className="lg:hidden flex justify-center space-x-6 mt-4 text-xs">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-emerald-500 rounded-full" />
          <span className="text-muted-foreground">Expert</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full" />
          <span className="text-muted-foreground">Advanced</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-amber-500 rounded-full" />
          <span className="text-muted-foreground">Intermediate</span>
        </div>
      </div>
    </div>
  );
};

export default SkillConstellation;