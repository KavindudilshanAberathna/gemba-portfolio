import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningJourney = ({ journeyData }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-purple rounded-lg flex items-center justify-center">
          <Icon name="TrendingUp" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">Learning Journey</h3>
          <p className="text-sm text-muted-foreground">Continuous growth and skill development</p>
        </div>
      </div>
      <div className="space-y-6">
        {journeyData?.map((milestone, index) => (
          <div key={milestone?.year} className="relative">
            {/* Timeline Line */}
            {index < journeyData?.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-border" />
            )}
            
            <div className="flex items-start space-x-4">
              {/* Timeline Dot */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                milestone?.type === 'major' ?'bg-gradient-to-br from-primary to-brand-purple' :'bg-muted border-2 border-border'
              }`}>
                <Icon 
                  name={milestone?.icon} 
                  size={16} 
                  className={milestone?.type === 'major' ? 'text-white' : 'text-muted-foreground'}
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-primary">{milestone?.year}</span>
                  {milestone?.type === 'major' && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Major Milestone
                    </span>
                  )}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{milestone?.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{milestone?.description}</p>
                
                {/* Skills Gained */}
                {milestone?.skills && (
                  <div className="flex flex-wrap gap-1">
                    {milestone?.skills?.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningJourney;