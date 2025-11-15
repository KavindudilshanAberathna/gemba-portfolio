import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ExperienceTimeline = () => {
  const [expandedRole, setExpandedRole] = useState(null);

  const experiences = [
  {
    id: 1,
    company: "TechCorp Solutions",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_17889f62d-1763121088404.png",
    companyLogoAlt: "Modern tech company logo with geometric blue and white design",
    position: "Senior Full Stack Engineer",
    duration: "Jan 2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    companyDescription: "Leading enterprise software solutions provider serving Fortune 500 companies",
    achievements: [
    "Led development of microservices architecture serving 2M+ daily users",
    "Reduced application load time by 45% through React optimization techniques",
    "Mentored team of 6 junior developers, improving code quality by 60%",
    "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes"],

    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis"],
    keyProjects: [
    {
      name: "Customer Analytics Dashboard",
      impact: "Increased user engagement by 35%",
      description: "Built real-time analytics platform processing 100K+ events per minute"
    },
    {
      name: "Payment Gateway Integration",
      impact: "$2M+ in processed transactions",
      description: "Developed secure payment system with 99.9% uptime"
    }],

    testimonial: {
      text: "Outstanding technical leadership and problem-solving skills. Consistently delivers high-quality solutions ahead of schedule.",
      author: "Sarah Chen",
      role: "Engineering Manager",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_129b1ff05-1762273604073.png",
      avatarAlt: "Professional headshot of Asian woman with shoulder-length black hair in navy blazer"
    }
  },
  {
    id: 2,
    company: "InnovateLab",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_12ba0f884-1763121090594.png",
    companyLogoAlt: "Creative startup logo with orange and purple gradient design",
    position: "Frontend Developer",
    duration: "Mar 2020 - Dec 2021",
    location: "Austin, TX",
    type: "Full-time",
    companyDescription: "Fast-growing startup specializing in AI-powered marketing automation tools",
    achievements: [
    "Built responsive web applications used by 500K+ monthly active users",
    "Improved mobile performance by 50% through progressive web app implementation",
    "Collaborated with UX team to increase conversion rates by 25%",
    "Established component library reducing development time by 40%"],

    technologies: ["React", "TypeScript", "GraphQL", "Styled Components", "Jest"],
    keyProjects: [
    {
      name: "Marketing Campaign Builder",
      impact: "Used by 10K+ marketers daily",
      description: "Drag-and-drop interface for creating automated marketing workflows"
    }],

    testimonial: {
      text: "Exceptional attention to detail and user experience. Always goes above and beyond to deliver pixel-perfect implementations.",
      author: "Michael Rodriguez",
      role: "Product Manager",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2254285-1762248964146.png",
      avatarAlt: "Professional headshot of Hispanic man with short dark hair in light blue shirt"
    }
  },
  {
    id: 3,
    company: "Digital Dynamics",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_14517bc3f-1763121087798.png",
    companyLogoAlt: "Corporate logo with dark blue background and white geometric patterns",
    position: "Junior Web Developer",
    duration: "Jun 2018 - Feb 2020",
    location: "Denver, CO",
    type: "Full-time",
    companyDescription: "Digital agency creating custom web solutions for small to medium businesses",
    achievements: [
    "Developed 15+ client websites with 100% on-time delivery record",
    "Implemented SEO best practices resulting in 60% average traffic increase",
    "Reduced bug reports by 70% through comprehensive testing protocols",
    "Trained 3 new developers on company coding standards"],

    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress"],
    keyProjects: [
    {
      name: "E-commerce Platform Redesign",
      impact: "40% increase in online sales",
      description: "Complete overhaul of client\'s online store with modern UX/UI"
    }],

    testimonial: {
      text: "Reliable team player with strong technical foundation. Quickly adapted to new technologies and consistently exceeded expectations.",
      author: "Jennifer Park",
      role: "Lead Developer",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_129b1ff05-1762273604073.png",
      avatarAlt: "Professional headshot of Asian woman with long black hair in white blouse"
    }
  }];


  const toggleExpanded = (roleId) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30"></div>
      <div className="space-y-12">
        {experiences?.map((exp, index) =>
        <div key={exp?.id} className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

            {/* Experience Card */}
            <div className="ml-20 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <Image
                      src={exp?.companyLogo}
                      alt={exp?.companyLogoAlt}
                      className="w-full h-full object-cover" />

                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp?.position}
                      </h3>
                      <p className="text-lg font-medium text-primary mb-1">
                        {exp?.company}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-text-secondary">
                        <span className="flex items-center">
                          <Icon name="Calendar" size={14} className="mr-1" />
                          {exp?.duration}
                        </span>
                        <span className="flex items-center">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {exp?.location}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Briefcase" size={14} className="mr-1" />
                          {exp?.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                  onClick={() => toggleExpanded(exp?.id)}
                  className="p-2 text-text-secondary hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200">

                    <Icon
                    name={expandedRole === exp?.id ? "ChevronUp" : "ChevronDown"}
                    size={20} />

                  </button>
                </div>

                <p className="text-sm text-text-secondary mt-3 italic">
                  {exp?.companyDescription}
                </p>
              </div>

              {/* Expanded Content */}
              {expandedRole === exp?.id &&
            <div className="p-6 space-y-6">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="Trophy" size={18} className="mr-2 text-accent" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp?.achievements?.map((achievement, idx) =>
                  <li key={idx} className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                          <span className="text-text-secondary">{achievement}</span>
                        </li>
                  )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="Code" size={18} className="mr-2 text-brand-purple" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp?.technologies?.map((tech, idx) =>
                  <span
                    key={idx}
                    className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full border border-border">

                          {tech}
                        </span>
                  )}
                    </div>
                  </div>

                  {/* Key Projects */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="Rocket" size={18} className="mr-2 text-warning" />
                      Notable Projects
                    </h4>
                    <div className="space-y-3">
                      {exp?.keyProjects?.map((project, idx) =>
                  <div key={idx} className="bg-muted rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-foreground">{project?.name}</h5>
                            <span className="text-sm text-success font-medium">{project?.impact}</span>
                          </div>
                          <p className="text-sm text-text-secondary">{project?.description}</p>
                        </div>
                  )}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border-l-4 border-primary">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                      src={exp?.testimonial?.avatar}
                      alt={exp?.testimonial?.avatarAlt}
                      className="w-full h-full object-cover" />

                      </div>
                      <div className="flex-1">
                        <p className="text-text-secondary italic mb-2">"{exp?.testimonial?.text}"</p>
                        <div className="text-sm">
                          <p className="font-medium text-foreground">{exp?.testimonial?.author}</p>
                          <p className="text-text-secondary">{exp?.testimonial?.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            }
            </div>
          </div>
        )}
      </div>
    </div>);

};

export default ExperienceTimeline;