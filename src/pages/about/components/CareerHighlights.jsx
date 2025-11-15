import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CareerHighlights = () => {
  const achievements = [
    {
      icon: "Trophy",
      title: "Led Digital Transformation",
      company: "TechCorp Solutions",
      description: "Spearheaded the migration of legacy monolith to microservices architecture, reducing deployment time by 75% and improving system reliability to 99.9% uptime.",
      impact: "Enabled team to deploy 10x more frequently with zero-downtime deployments",
      year: "2023"
    },
    {
      icon: "Users",
      title: "Built High-Performance Team",
      company: "StartupXYZ",
      description: "Grew engineering team from 3 to 15 developers while establishing coding standards, mentorship programs, and agile development practices.",
      impact: "Reduced onboarding time by 60% and increased team velocity by 200%",
      year: "2022"
    },
    {
      icon: "Rocket",
      title: "Launched Scalable Platform",
      company: "InnovateTech",
      description: "Architected and developed a real-time analytics platform handling 1M+ events per second using React, Node.js, and Apache Kafka.",
      impact: "Generated $2M+ in additional revenue within first 6 months",
      year: "2021"
    },
    {
      icon: "Award",
      title: "Open Source Recognition",
      company: "Community Contribution",
      description: "Created and maintained popular React component library with 50K+ weekly downloads and contributions to major open-source projects.",
      impact: "Adopted by 500+ companies worldwide, featured in React newsletter",
      year: "2020-Present"
    }
  ];

  const keyMetrics = [
    {
      number: "50+",
      label: "Projects Delivered",
      icon: "CheckCircle"
    },
    {
      number: "15+",
      label: "Team Members Mentored",
      icon: "Users"
    },
    {
      number: "99.9%",
      label: "System Uptime Achieved",
      icon: "Shield"
    },
    {
      number: "$5M+",
      label: "Revenue Impact Generated",
      icon: "TrendingUp"
    }
  ];

  const recognitions = [
    {
      title: "Technical Excellence Award",
      organization: "TechCorp Solutions",
      year: "2023",
      description: "Recognized for outstanding technical leadership and innovation"
    },
    {
      title: "Top Contributor",
      organization: "React Community",
      year: "2022",
      description: "Acknowledged for significant contributions to React ecosystem"
    },
    {
      title: "Mentor of the Year",
      organization: "StartupXYZ",
      year: "2021",
      description: "Honored for exceptional mentorship and team development"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Career Highlights
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Key achievements and milestones that showcase my impact as a technical leader 
            and problem solver in the software engineering field.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {keyMetrics?.map((metric, index) => (
            <motion.div
              key={metric?.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={metric?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {metric?.number}
              </div>
              <div className="text-sm text-text-secondary">
                {metric?.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Major Achievements */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Major Achievements
          </h3>
          {achievements?.map((achievement, index) => (
            <motion.div
              key={achievement?.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <Icon name={achievement?.icon} size={32} className="text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-bold text-foreground">
                      {achievement?.title}
                    </h4>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0 self-start">
                      {achievement?.year}
                    </span>
                  </div>
                  
                  <p className="text-accent font-medium mb-3">
                    {achievement?.company}
                  </p>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {achievement?.description}
                  </p>
                  
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <div className="flex items-start">
                      <Icon name="TrendingUp" size={16} className="text-success mt-1 mr-2 flex-shrink-0" />
                      <p className="text-sm text-success font-medium">
                        <strong>Impact:</strong> {achievement?.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recognitions?.map((recognition, index) => (
              <motion.div
                key={recognition?.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  {recognition?.title}
                </h4>
                <p className="text-primary font-medium mb-1">
                  {recognition?.organization}
                </p>
                <p className="text-sm text-text-secondary mb-3">
                  {recognition?.year}
                </p>
                <p className="text-sm text-text-secondary">
                  {recognition?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerHighlights;