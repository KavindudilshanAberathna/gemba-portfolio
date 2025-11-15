import React, { useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e?.target === e?.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-background rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-purple rounded-lg flex items-center justify-center">
              <Icon name="Code2" size={24} color="white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
              <p className="text-text-secondary">{project?.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          >
            <Icon name="X" size={24} color="currentColor" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={project?.image}
                alt={project?.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {project?.additionalImages && project?.additionalImages?.map((img, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={img?.url}
                  alt={img?.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                {project?.fullDescription}
              </p>

              <h4 className="text-md font-semibold text-foreground mb-2">Key Features</h4>
              <ul className="space-y-2 mb-4">
                {project?.keyFeatures?.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} color="#10B981" className="mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-md font-semibold text-foreground mb-2">Challenges & Solutions</h4>
              <div className="space-y-3">
                {project?.challenges?.map((challenge, index) => (
                  <div key={index} className="bg-muted rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-1">{challenge?.title}</h5>
                    <p className="text-text-secondary text-sm">{challenge?.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Project Stats */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="text-md font-semibold text-foreground mb-3">Project Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary text-sm">Duration</span>
                    <span className="text-foreground font-medium text-sm">{project?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary text-sm">Team Size</span>
                    <span className="text-foreground font-medium text-sm">{project?.teamSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary text-sm">My Role</span>
                    <span className="text-foreground font-medium text-sm">{project?.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary text-sm">Status</span>
                    <span className={`font-medium text-sm ${
                      project?.status === 'Live' ? 'text-success' : 
                      project?.status === 'In Progress' ? 'text-warning' : 'text-secondary'
                    }`}>
                      {project?.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="text-md font-semibold text-foreground mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="text-md font-semibold text-foreground mb-3">Impact Metrics</h4>
                <div className="space-y-3">
                  {project?.impactMetrics?.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{metric?.value}</div>
                      <div className="text-xs text-text-secondary">{metric?.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
            {project?.liveUrl && (
              <Button
                variant="default"
                onClick={() => window.open(project?.liveUrl, '_blank')}
                iconName="ExternalLink"
                iconPosition="left"
                iconSize={16}
              >
                View Live Demo
              </Button>
            )}
            {project?.githubUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project?.githubUrl, '_blank')}
                iconName="Github"
                iconPosition="left"
                iconSize={16}
              >
                View Source Code
              </Button>
            )}
            {project?.caseStudyUrl && (
              <Button
                variant="secondary"
                onClick={() => window.open(project?.caseStudyUrl, '_blank')}
                iconName="FileText"
                iconPosition="left"
                iconSize={16}
              >
                Read Case Study
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;