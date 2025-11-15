import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalInterests = () => {
  const interests = [
  {
    icon: "Camera",
    title: "Photography",
    description: "Capturing moments and exploring composition through landscape and street photography. I find that the patience and attention to detail required in photography translates well to debugging complex code.",
    image: "https://images.unsplash.com/photo-1616510843237-9c196fc3ecb7",
    imageAlt: "Professional camera with telephoto lens on wooden table with mountain landscape in background"
  },
  {
    icon: "Mountain",
    title: "Hiking & Nature",
    description: "Weekend adventures in the great outdoors help me disconnect from screens and gain fresh perspective. Some of my best architectural decisions have come during mountain hikes.",
    image: "https://images.unsplash.com/photo-1586022045269-28fe5c497b46",
    imageAlt: "Hiker with backpack standing on mountain peak overlooking valley with morning mist and pine trees"
  },
  {
    icon: "Coffee",
    title: "Coffee Brewing",
    description: "The precision and experimentation involved in perfecting coffee brewing methods mirrors the iterative process of software development. Plus, great coffee fuels great code.",
    image: "https://images.unsplash.com/photo-1630439922869-50635c8b2335",
    imageAlt: "Barista pouring steamed milk into espresso creating latte art in white ceramic cup on wooden counter"
  },
  {
    icon: "BookOpen",
    title: "Reading & Learning",
    description: "Constantly exploring topics from system design to behavioral psychology. I believe diverse knowledge sources lead to more creative problem-solving approaches.",
    image: "https://images.unsplash.com/photo-1713281318582-53ec4ccb8aea",
    imageAlt: "Stack of technical books and notebooks on wooden desk with reading glasses and warm lamp lighting"
  }];


  const communityInvolvement = [
  {
    icon: "Users",
    title: "Tech Meetups",
    description: "Regular speaker at local JavaScript and React meetups, sharing knowledge about performance optimization and modern development practices."
  },
  {
    icon: "GraduationCap",
    title: "Mentorship",
    description: "Mentor junior developers through coding bootcamps and online platforms, helping them navigate their first steps in software engineering."
  },
  {
    icon: "Heart",
    title: "Open Source",
    description: "Active contributor to open-source projects, maintaining libraries that help developers build better applications more efficiently."
  },
  {
    icon: "Mic",
    title: "Tech Talks",
    description: "Conference speaker sharing insights on React architecture, team leadership, and building scalable web applications."
  }];


  const funFacts = [
  "I\'ve visited 12 countries and coded from cafes in each one",
  "My first program was a text-based adventure game in BASIC",
  "I can solve a Rubik\'s cube in under 2 minutes",
  "I\'ve hiked over 500 miles in the past year",
  "My coffee setup includes 4 different brewing methods"];


  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Beyond the Code
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            The experiences and interests that shape my perspective as a developer 
            and contribute to my creative problem-solving approach.
          </p>
        </motion.div>

        {/* Personal Interests */}
        <div className="space-y-12 mb-16">
          {interests?.map((interest, index) =>
          <motion.div
            key={interest?.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
            }>

              <div className="flex-1 bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={interest?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {interest?.title}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {interest?.description}
                </p>
              </div>
              
              <div className="w-full lg:w-80 h-64 overflow-hidden rounded-xl shadow-lg flex-shrink-0">
                <Image
                src={interest?.image}
                alt={interest?.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

              </div>
            </motion.div>
          )}
        </div>

        {/* Community Involvement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16">

          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Community Involvement
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityInvolvement?.map((activity, index) =>
            <motion.div
              key={activity?.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">

                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={activity?.icon} size={28} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-3">
                  {activity?.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {activity?.description}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center">

          <h3 className="text-2xl font-bold text-foreground mb-8">
            Fun Facts About Me
          </h3>
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {funFacts?.map((fact, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-center p-4 bg-card/50 rounded-lg border border-border/50">

                  <Icon name="Sparkles" size={16} className="text-primary mr-3 flex-shrink-0" />
                  <p className="text-sm text-text-secondary">
                    {fact}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default PersonalInterests;