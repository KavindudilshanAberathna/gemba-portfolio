import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import SkillCategory from './components/SkillCategory';
import SkillFilter from './components/SkillFilter';
import SkillStats from './components/SkillStats';
import LearningJourney from './components/LearningJourney';
import SkillConstellation from './components/SkillConstellation';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import InteractiveElements from '../hero-section/components/InteractiveElements';

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState([]);

  // Mock Skills Data
  const skillsData = [
    {
      name: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          proficiency: "Expert",
          experience: "5+ years",
          context: "Built 50+ production applications using modern ES6+ features, async/await patterns, and functional programming concepts. Expertise in performance optimization and memory management."
        },
        {
          name: "TypeScript",
          proficiency: "Expert",
          experience: "4+ years", 
          context: "Developed large-scale enterprise applications with strict type safety. Proficient in advanced types, generics, and compiler configuration for optimal developer experience."
        },
        {
          name: "Python",
          proficiency: "Advanced",
          experience: "3+ years",
          context: "Created data processing pipelines, REST APIs with FastAPI/Django, and automation scripts. Strong foundation in OOP principles and design patterns."
        },
        {
          name: "Java",
          proficiency: "Advanced",
          experience: "3+ years",
          context: "Built microservices architecture using Spring Boot, implemented design patterns, and worked with enterprise-level applications handling high traffic loads."
        },
        {
          name: "Go",
          proficiency: "Intermediate",
          experience: "2+ years",
          context: "Developed concurrent systems and CLI tools leveraging Go\'s goroutines and channels. Experience with building efficient backend services and APIs."
        }
      ]
    },
    {
      name: "Frontend Frameworks",
      skills: [
        {
          name: "React",
          proficiency: "Expert",
          experience: "5+ years",
          context: "Architected complex SPAs with hooks, context API, and state management. Built reusable component libraries and implemented advanced patterns like render props and HOCs."
        },
        {
          name: "Next.js",
          proficiency: "Expert",
          experience: "3+ years",
          context: "Developed full-stack applications with SSR/SSG, API routes, and optimized performance. Expertise in App Router, middleware, and deployment strategies."
        },
        {
          name: "Vue.js",
          proficiency: "Advanced",
          experience: "2+ years",
          context: "Built responsive web applications using Vue 3 Composition API, Vuex for state management, and Vue Router for navigation. Strong understanding of reactivity system."
        },
        {
          name: "Angular",
          proficiency: "Intermediate",
          experience: "2+ years",
          context: "Developed enterprise applications using Angular services, dependency injection, and RxJS for reactive programming. Experience with Angular Material and testing."
        },
        {
          name: "Svelte",
          proficiency: "Intermediate",
          experience: "1+ year",
          context: "Explored modern frontend development with Svelte\'s compile-time optimizations. Built lightweight applications with excellent performance characteristics."
        }
      ]
    },
    {
      name: "Backend Technologies",
      skills: [
        {
          name: "Node.js",
          proficiency: "Expert",
          experience: "4+ years",
          context: "Built scalable REST APIs and GraphQL servers. Expertise in Express.js, Fastify, and event-driven architecture. Handled real-time applications with Socket.io."
        },
        {
          name: "Express.js",
          proficiency: "Expert",
          experience: "4+ years",
          context: "Developed robust web servers with middleware architecture, authentication systems, and API rate limiting. Implemented security best practices and error handling."
        },
        {
          name: "GraphQL",
          proficiency: "Advanced",
          experience: "2+ years",
          context: "Designed and implemented GraphQL schemas with Apollo Server. Built efficient resolvers and implemented subscriptions for real-time data synchronization."
        },
        {
          name: "Django",
          proficiency: "Advanced",
          experience: "2+ years",
          context: "Created full-featured web applications with Django ORM, admin interface, and REST framework. Implemented authentication, permissions, and database migrations."
        },
        {
          name: "FastAPI",
          proficiency: "Intermediate",
          experience: "1+ year",
          context: "Built high-performance APIs with automatic documentation generation. Leveraged Python type hints for request/response validation and async capabilities."
        }
      ]
    },
    {
      name: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          proficiency: "Advanced",
          experience: "3+ years",
          context: "Designed complex database schemas with proper indexing strategies. Optimized queries for performance and implemented advanced features like triggers and stored procedures."
        },
        {
          name: "MongoDB",
          proficiency: "Advanced",
          experience: "3+ years",
          context: "Built document-based applications with aggregation pipelines and indexing strategies. Experience with replica sets and sharding for scalability."
        },
        {
          name: "Redis",
          proficiency: "Intermediate",
          experience: "2+ years",
          context: "Implemented caching strategies and session management. Used Redis for pub/sub messaging and as a message broker for background job processing."
        },
        {
          name: "MySQL",
          proficiency: "Intermediate",
          experience: "2+ years",
          context: "Developed relational database applications with proper normalization. Experience with performance tuning, backup strategies, and replication setup."
        }
      ]
    },
    {
      name: "Cloud & DevOps",
      skills: [
        {
          name: "AWS",
          proficiency: "Advanced",
          experience: "3+ years",
          context: "Deployed applications using EC2, S3, Lambda, and RDS. Implemented CI/CD pipelines with CodePipeline and managed infrastructure with CloudFormation."
        },
        {
          name: "Docker",
          proficiency: "Advanced",
          experience: "3+ years",
          context: "Containerized applications for consistent deployment across environments. Created multi-stage builds and optimized image sizes for production workloads."
        },
        {
          name: "Kubernetes",
          proficiency: "Intermediate",
          experience: "2+ years",
          context: "Orchestrated containerized applications with deployments, services, and ingress controllers. Managed scaling and rolling updates in production clusters."
        },
        {
          name: "GitHub Actions",
          proficiency: "Advanced",
          experience: "2+ years",
          context: "Automated testing, building, and deployment workflows. Created reusable actions and implemented security scanning and code quality checks."
        },
        {
          name: "Terraform",
          proficiency: "Intermediate",
          experience: "1+ year",
          context: "Managed infrastructure as code for cloud resources. Implemented modular configurations and state management for team collaboration."
        }
      ]
    },
    {
      name: "Tools & Methodologies",
      skills: [
        {
          name: "Git",
          proficiency: "Expert",
          experience: "5+ years",
          context: "Advanced version control with branching strategies, conflict resolution, and collaborative workflows. Experience with Git hooks and repository management."
        },
        {
          name: "Agile/Scrum",
          proficiency: "Advanced",
          experience: "4+ years",
          context: "Participated in sprint planning, daily standups, and retrospectives. Experience with story estimation, backlog grooming, and cross-functional team collaboration."
        },
        {
          name: "Jest/Testing",
          proficiency: "Advanced",
          experience: "3+ years",
          context: "Implemented comprehensive test suites with unit, integration, and end-to-end testing. Maintained high code coverage and practiced TDD methodologies."
        },
        {
          name: "Webpack",
          proficiency: "Intermediate",
          experience: "2+ years",
          context: "Configured build processes for complex applications. Optimized bundle sizes with code splitting and implemented custom loaders and plugins."
        },
        {
          name: "Figma",
          proficiency: "Intermediate",
          experience: "2+ years",
          context: "Collaborated with design teams to implement pixel-perfect UIs. Created design systems and prototypes for user experience validation."
        }
      ]
    }
  ];

  // Learning Journey Data
  const learningJourneyData = [
    {
      year: "2024",
      title: "AI/ML Integration & Advanced Cloud Architecture",
      description: "Exploring machine learning integration in web applications and advanced cloud-native architectures with microservices.",
      skills: ["TensorFlow.js", "Kubernetes", "Microservices", "AI APIs"],
      icon: "Brain",
      type: "major"
    },
    {
      year: "2023",
      title: "Full-Stack Mastery & Performance Optimization",
      description: "Achieved expertise in modern full-stack development with focus on performance optimization and scalability.",
      skills: ["Next.js 13", "GraphQL", "Redis", "Performance Tuning"],
      icon: "Zap",
      type: "major"
    },
    {
      year: "2022",
      title: "Cloud-Native Development",
      description: "Transitioned to cloud-first development approach with containerization and DevOps practices.",
      skills: ["AWS", "Docker", "CI/CD", "Infrastructure as Code"],
      icon: "Cloud",
      type: "regular"
    },
    {
      year: "2021",
      title: "Modern Frontend Frameworks",
      description: "Mastered React ecosystem and modern JavaScript development patterns.",
      skills: ["React Hooks", "TypeScript", "State Management", "Testing"],
      icon: "Code",
      type: "regular"
    },
    {
      year: "2020",
      title: "Professional Development Journey Begins",
      description: "Started professional software development career with focus on web technologies.",
      skills: ["JavaScript", "HTML/CSS", "Node.js", "Git"],
      icon: "Rocket",
      type: "major"
    }
  ];

  // Stats Data
  const statsData = {
    totalSkills: skillsData?.reduce((acc, category) => acc + category?.skills?.length, 0),
    expertSkills: skillsData?.reduce((acc, category) => 
      acc + category?.skills?.filter(skill => skill?.proficiency === 'Expert')?.length, 0
    ),
    yearsExperience: "5+",
    certifications: 8
  };

  // All skills flattened for constellation and filtering
  const allSkills = skillsData?.flatMap(category => 
    category?.skills?.map(skill => ({ ...skill, category: category?.name }))
  );

  // Filter logic
  useEffect(() => {
    let filtered = allSkills;
    
    switch (activeFilter) {
      case 'expert':
        filtered = allSkills?.filter(skill => skill?.proficiency === 'Expert');
        break;
      case 'advanced':
        filtered = allSkills?.filter(skill => skill?.proficiency === 'Advanced');
        break;
      case 'intermediate':
        filtered = allSkills?.filter(skill => skill?.proficiency === 'Intermediate');
        break;
      case 'frontend':
        filtered = allSkills?.filter(skill => 
          skill?.category === 'Frontend Frameworks' || skill?.name?.includes('React') || 
          skill?.name?.includes('Vue') || 
          skill?.name?.includes('Angular')
        );
        break;
      case 'backend':
        filtered = allSkills?.filter(skill => 
          skill?.category === 'Backend Technologies' || 
          skill?.category === 'Databases'
        );
        break;
      case 'cloud':
        filtered = allSkills?.filter(skill => skill?.category === 'Cloud & DevOps');
        break;
      default:
        filtered = allSkills;
    }
    
    setFilteredSkills(filtered);
  }, [activeFilter]);

  // Skill counts for filter buttons
  const skillCounts = {
    all: allSkills?.length,
    expert: allSkills?.filter(skill => skill?.proficiency === 'Expert')?.length,
    advanced: allSkills?.filter(skill => skill?.proficiency === 'Advanced')?.length,
    intermediate: allSkills?.filter(skill => skill?.proficiency === 'Intermediate')?.length,
    frontend: allSkills?.filter(skill => 
      skill?.category === 'Frontend Frameworks' || skill?.name?.includes('React') || 
      skill?.name?.includes('Vue') || 
      skill?.name?.includes('Angular')
    )?.length,
    backend: allSkills?.filter(skill => 
      skill?.category === 'Backend Technologies' || 
      skill?.category === 'Databases'
    )?.length,
    cloud: allSkills?.filter(skill => skill?.category === 'Cloud & DevOps')?.length
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev?.[categoryName]
    }));
  };

  const expandAll = () => {
    const allExpanded = {};
    skillsData?.forEach(category => {
      allExpanded[category.name] = true;
    });
    setExpandedCategories(allExpanded);
  };

  const collapseAll = () => {
    setExpandedCategories({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}

      {/* Add Interactive Background Elements */}
      <InteractiveElements />
      
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Technical Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-purple">Constellation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my technical competencies through an interactive journey of continuous learning, 
              professional growth, and hands-on experience across the full technology stack.
            </p>
          </div>

          {/* Stats Overview */}
          <SkillStats stats={statsData} />
        </div>
      </section>
      {/* Skills Constellation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SkillConstellation skills={filteredSkills} />
        </div>
      </section>
      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SkillFilter 
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            skillCounts={skillCounts}
          />
        </div>
      </section>
      {/* Skills Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Technical Skills Matrix</h2>
              <p className="text-muted-foreground">Detailed breakdown of competencies and experience</p>
            </div>
            <div className="hidden sm:flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={expandAll}
                iconName="ChevronDown"
                iconPosition="left"
                iconSize={16}
              >
                Expand All
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={collapseAll}
                iconName="ChevronUp"
                iconPosition="left"
                iconSize={16}
              >
                Collapse All
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {skillsData?.map((category) => (
              <SkillCategory
                key={category?.name}
                category={category}
                isExpanded={expandedCategories?.[category?.name]}
                onToggle={() => toggleCategory(category?.name)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Learning Journey */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <LearningJourney journeyData={learningJourneyData} />
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/5 to-brand-purple/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to leverage these skills for your next project? Let's discuss how my technical expertise 
              can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                iconName="Mail"
                iconPosition="left"
                iconSize={20}
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/projects'}
                iconName="FolderOpen"
                iconPosition="left"
                iconSize={20}
              >
                View My Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date()?.getFullYear()} DevPortfolio Pro. Crafted with passion for technology and continuous learning.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Skills;