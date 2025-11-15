import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';


const PersonalStory = () => {
  const personalInfo = {
    name: "Prabath Nugekotuwa",
    title: "Senior Full-Stack Engineer & Technical Architect",
    location: "Rathnapura , Sri lanka",
    yearsExperience: 8,
    image: "src/assets/img/aboutsection.png",
    imageAlt: "Professional headshot of Asian man with short black hair wearing navy blazer and white shirt, smiling confidently at camera"
  };

  const personalHighlights = [
  {
    icon: "Code2",
    title: "Problem Solver",
    description: "I believe every complex challenge has an elegant solution waiting to be discovered."
  },
  {
    icon: "Users",
    title: "Team Builder",
    description: "Great software is built by great teams. I focus on empowering others to do their best work."
  },
  {
    icon: "Lightbulb",
    title: "Innovation Driver",
    description: "I\'m passionate about exploring emerging technologies and applying them to real-world problems."
  },
  {
    icon: "Target",
    title: "Impact Focused",
    description: "Code is just the means. Creating meaningful impact for users and businesses is the goal."
  }];


  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Story
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From curious computer science student to seasoned technical leader, 
            here's the journey that shaped my approach to building software.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={personalInfo?.image}
                alt={personalInfo?.imageAlt}
                className="w-full h-96 object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-lg">

              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {personalInfo?.yearsExperience}+
                </div>
                <div className="text-sm text-text-secondary">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Personal Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6">

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {personalInfo?.name}
              </h3>
              <p className="text-lg text-primary font-medium mb-1">
                {personalInfo?.title}
              </p>
              <div className="flex items-center text-text-secondary">
                <Icon name="MapPin" size={16} className="mr-2" />
                {personalInfo?.location}
              </div>
            </div>

            <div className="prose prose-lg text-text-secondary">
              <p>
                My journey into software engineering began with a simple question: 
                "How can technology make people's lives better?" This curiosity led me from writing my first"Hello World" program to architecting systems 
                that serve millions of users.
              </p>
              <p>
                Over the past {personalInfo?.yearsExperience} years, I've had the privilege 
                of working with incredible teams at both startups and Fortune 500 companies. 
                Each experience taught me that the best solutions come from understanding 
                not just the technical requirements, but the human needs behind them.
              </p>
              <p>
                Today, I'm passionate about building scalable, maintainable systems while 
                mentoring the next generation of engineers. I believe that great software 
                is built by great teams, and I'm committed to fostering environments where 
                everyone can do their best work.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Personal Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16">

          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            What Drives Me
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalHighlights?.map((highlight, index) =>
            <motion.div
              key={highlight?.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300">

                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={highlight?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {highlight?.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {highlight?.description}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default PersonalStory;