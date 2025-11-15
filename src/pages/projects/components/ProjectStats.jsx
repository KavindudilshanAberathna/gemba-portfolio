import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'Code2',
      label: 'Projects Completed',
      value: stats?.completed,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Users',
      label: 'Clients Served',
      value: stats?.clients,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'Award',
      label: 'Awards Won',
      value: stats?.awards,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: 'Star',
      label: 'Average Rating',
      value: `${stats?.rating}/5`,
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems?.map((item, index) => (
        <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
          <div className={`w-12 h-12 ${item?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
            <Icon name={item?.icon} size={24} className={item?.color} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">
            {item?.value}
          </div>
          <div className="text-sm text-text-secondary">
            {item?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;