import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLiveDemo = (e) => {
    e?.stopPropagation();
    if (project?.liveUrl) {
      window.open(project?.liveUrl, '_blank');
    }
  };

  const handleViewCode = (e) => {
    e?.stopPropagation();
    if (project?.githubUrl) {
      window.open(project?.githubUrl, '_blank');
    }
  };

  return (
    <div 
      className={`bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 cursor-pointer group ${
        isHovered ? 'shadow-xl transform -translate-y-2' : 'shadow-md hover:shadow-lg'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(project)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project?.liveUrl && (
            <button
              onClick={handleLiveDemo}
              className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-md transition-colors duration-200"
              title="View Live Demo"
            >
              <Icon name="ExternalLink" size={16} color="#2563EB" />
            </button>
          )}
          {project?.githubUrl && (
            <button
              onClick={handleViewCode}
              className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-md transition-colors duration-200"
              title="View Source Code"
            >
              <Icon name="Github" size={16} color="#2563EB" />
            </button>
          )}
        </div>

        {/* Status Badge */}
        {project?.status && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project?.status === 'Live' ?'bg-success text-white' 
                : project?.status === 'In Progress' ?'bg-warning text-white' :'bg-secondary text-white'
            }`}>
              {project?.status}
            </span>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
              {project?.title}
            </h3>
            <p className="text-sm text-text-secondary font-medium">
              {project?.category}
            </p>
          </div>
          <div className="flex items-center space-x-1 ml-4">
            <Icon name="Star" size={16} color="#F59E0B" fill="#F59E0B" />
            <span className="text-sm font-medium text-text-secondary">
              {project?.rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md font-medium">
              +{project?.technologies?.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">
              {project?.metrics?.performance}
            </div>
            <div className="text-xs text-text-secondary">Performance</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">
              {project?.metrics?.impact}
            </div>
            <div className="text-xs text-text-secondary">Impact</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            onClick={(e) => {
              e?.stopPropagation();
              onViewDetails(project);
            }}
            iconName="Eye"
            iconPosition="left"
            iconSize={14}
          >
            View Details
          </Button>
          {project?.liveUrl && (
            <Button
              variant="default"
              size="sm"
              onClick={handleLiveDemo}
              iconName="ExternalLink"
              iconPosition="left"
              iconSize={14}
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;