import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillCategory = ({ category, isExpanded, onToggle }) => {
  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Programming Languages': 'Code2',
      'Frontend Frameworks': 'Layout',
      'Backend Technologies': 'Server',
      'Databases': 'Database',
      'Cloud & DevOps': 'Cloud',
      'Tools & Methodologies': 'Settings'
    };
    return iconMap?.[categoryName] || 'Code';
  };

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-emerald-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-amber-500';
      case 'Beginner': return 'bg-slate-400';
      default: return 'bg-slate-300';
    }
  };

  const getProficiencyWidth = (level) => {
    switch (level) {
      case 'Expert': return 'w-full';
      case 'Advanced': return 'w-4/5';
      case 'Intermediate': return 'w-3/5';
      case 'Beginner': return 'w-2/5';
      default: return 'w-1/5';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Category Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-muted/50 hover:bg-muted transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon 
              name={getCategoryIcon(category?.name)} 
              size={20} 
              className="text-primary"
            />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-foreground">{category?.name}</h3>
            <p className="text-sm text-muted-foreground">{category?.skills?.length} skills</p>
          </div>
        </div>
        <Icon 
          name={isExpanded ? "ChevronUp" : "ChevronDown"} 
          size={20} 
          className="text-muted-foreground transition-transform duration-200"
        />
      </button>
      {/* Skills List */}
      {isExpanded && (
        <div className="p-6 space-y-4">
          {category?.skills?.map((skill, index) => (
            <div key={skill?.name} className="group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    {skill?.name}
                  </h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    skill?.proficiency === 'Expert' ? 'bg-emerald-100 text-emerald-700' :
                    skill?.proficiency === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                    skill?.proficiency === 'Intermediate'? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {skill?.proficiency}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {skill?.experience}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProficiencyColor(skill?.proficiency)} ${getProficiencyWidth(skill?.proficiency)}`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: isExpanded ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                />
              </div>
              
              {/* Context */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill?.context}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCategory;