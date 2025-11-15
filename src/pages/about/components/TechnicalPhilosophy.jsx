import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnicalPhilosophy = () => {
  const philosophyPrinciples = [
    {
      icon: "Zap",
      title: "Simplicity Over Complexity",
      description: "The best solutions are often the simplest ones. I strive to write code that is elegant, readable, and maintainable.",
      example: "Choosing the right abstraction level that solves the problem without over-engineering."
    },
    {
      icon: "Shield",
      title: "Quality First Approach",
      description: "Building robust, tested, and secure software from the ground up. Quality isn't an afterthought—it's built in.",
      example: "Comprehensive testing strategies, code reviews, and security-first development practices."
    },
    {
      icon: "Repeat",
      title: "Continuous Learning",
      description: "Technology evolves rapidly. I believe in staying curious, experimenting with new tools, and sharing knowledge.",
      example: "Regular exploration of emerging frameworks, contributing to open source, and mentoring others."
    },
    {
      icon: "Users",
      title: "User-Centric Development",
      description: "Every line of code should serve a purpose that ultimately benefits the end user. Technical decisions should align with user needs.",
      example: "Performance optimization, accessibility compliance, and intuitive user experience design."
    }
  ];

  const technicalValues = [
    {
      title: "Clean Architecture",
      description: "Building systems that are modular, testable, and easy to understand.",
      icon: "Layers"
    },
    {
      title: "Performance Mindset",
      description: "Optimizing for speed, efficiency, and scalability from day one.",
      icon: "Gauge"
    },
    {
      title: "Security Awareness",
      description: "Implementing security best practices at every level of the application.",
      icon: "Lock"
    },
    {
      title: "Collaborative Spirit",
      description: "Writing code that others can easily understand, modify, and extend.",
      icon: "GitBranch"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Philosophy
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            My approach to software engineering is guided by core principles that prioritize 
            maintainability, user experience, and continuous improvement.
          </p>
        </motion.div>

        {/* Core Principles */}
        <div className="space-y-8 mb-16">
          {philosophyPrinciples?.map((principle, index) => (
            <motion.div
              key={principle?.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={principle?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {principle?.title}
                  </h3>
                </div>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {principle?.description}
                </p>
                <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm text-text-secondary italic">
                    <strong>In Practice:</strong> {principle?.example}
                  </p>
                </div>
              </div>
              
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={principle?.icon} size={40} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Core Technical Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalValues?.map((value, index) => (
              <motion.div
                key={value?.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={value?.icon} size={28} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {value?.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {value?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
            <Icon name="Quote" size={32} className="text-primary/60 mx-auto mb-4" />
            <blockquote className="text-xl font-medium text-foreground mb-4 italic">
              "Great software isn't just about writing code that works—it's about crafting solutions that are maintainable, scalable, and genuinely improve people's lives."
            </blockquote>
            <cite className="text-text-secondary font-medium">— My Engineering Mantra</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalPhilosophy;