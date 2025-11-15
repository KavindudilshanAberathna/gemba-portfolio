import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillStats = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Skills',
      value: stats?.totalSkills,
      icon: 'Code2',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Expert Level',
      value: stats?.expertSkills,
      icon: 'Star',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      label: 'Years Experience',
      value: stats?.yearsExperience,
      icon: 'Calendar',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      label: 'Certifications',
      value: stats?.certifications,
      icon: 'Award',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems?.map((item, index) => (
        <div 
          key={item?.label}
          className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group"
        >
          <div className={`w-12 h-12 ${item?.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
            <Icon 
              name={item?.icon} 
              size={24} 
              className={item?.color}
            />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">
            {item?.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {item?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillStats;