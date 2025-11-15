import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SkillFilter = ({ activeFilter, onFilterChange, skillCounts }) => {
  const filters = [
    { id: 'all', label: 'All Skills', icon: 'Grid3X3' },
    { id: 'expert', label: 'Expert', icon: 'Star' },
    { id: 'advanced', label: 'Advanced', icon: 'TrendingUp' },
    { id: 'intermediate', label: 'Intermediate', icon: 'BarChart3' },
    { id: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { id: 'backend', label: 'Backend', icon: 'Server' },
    { id: 'cloud', label: 'Cloud', icon: 'Cloud' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Filter" size={16} className="text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Filter Skills</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2">
        {filters?.map((filter) => (
          <Button
            key={filter?.id}
            variant={activeFilter === filter?.id ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(filter?.id)}
            iconName={filter?.icon}
            iconPosition="left"
            iconSize={14}
            className="justify-start text-xs"
          >
            <span className="truncate">{filter?.label}</span>
            {skillCounts?.[filter?.id] && (
              <span className={`ml-1 px-1.5 py-0.5 text-xs rounded-full ${
                activeFilter === filter?.id 
                  ? 'bg-white/20 text-white' :'bg-muted text-muted-foreground'
              }`}>
                {skillCounts?.[filter?.id]}
              </span>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SkillFilter;