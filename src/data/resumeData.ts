import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export type ContactInfo = {
  icon: typeof Mail | typeof Phone | typeof MapPin | typeof Linkedin | typeof Github;
  text: string;
  link?: string;
  label: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string[];
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  highlights?: string[];
};

export type ResumeData = {
  name: string;
  title: string;
  summary: string;
  contactInfo: ContactInfo[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  certifications?: string[];
  languages?: { language: string; proficiency: string }[];
  projects: ProjectItem[];
};

export const resumeData: ResumeData = {
  name: 'Mackenna Dries',
  title: 'Frontend Engineer – Export Team @ Canva',
  summary: 'Enthusiastic and driven junior software engineer with a strong passion for user interface design, seamless user experiences, and clean, efficient code. Proficient in JavaScript, TypeScript, HTML, and CSS, with hands-on experience using frameworks such as Angular, React, and Flutter. While front-end development is a key strength, I also bring experience across the full stack, including API development and backend work in Java, Python, and C#. This well-rounded skill set has given me a solid understanding of the software development lifecycle and the ability to contribute across multiple areas of a project.',
  contactInfo: [
    {
      icon: Mail,
      text: 'mackenna99@outlook.com',
      link: 'mailto:mackenna99@outlook.com',
      label: 'Email'
    },
    {
      icon: Phone,
      text: '0459487144',
      link: '0459487144',
      label: 'Phone'
    },
    {
      icon: MapPin,
      text: 'Brisbane, QLD',
      label: 'Location'
    },
    {
      icon: Linkedin,
      text: 'linkedin.com/in/mackenna-rose',
      link: 'https://www.linkedin.com/in/mackenna-rose/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      text: 'github.com/MACKENNADRIES',
      link: 'https://github.com/MACKENNADRIES',
      label: 'GitHub'
    }
  ],
  experience: [
    {
      title: 'Technology Academy Trainee',
      company: 'Auto and General.',
      location: 'Toowong, QLD',
      period: 'Oct 2024 - Present',
      description: [
        'As a Tech Academy Trainee at Auto & General, I’m part of a structured graduate program designed to accelerate learning across software development and agile delivery. I work closely with cross-functional teams to build and maintain high-quality digital products, following modern engineering practices. The program exposes me to real-world projects, code reviews, pair programming, and mentoring from experienced developers. This hands-on experience is deepening my technical skills and preparing me for a long-term career in software engineering.',
        'Built an end-to-end web application using Angular and Spring Boot.',
        'Gained hands-on experience with APIs, Java, TypeScript, Angular, Spring Boot, testing, SQL, and Python.'
      ]
    },
  ],
  education: [
    {
      degree: 'She Codes',
      institution: 'She Codes Australia',
      location: 'Brisbane, QLD',
      period: '2024 - 2025',
      description: ['She Codes was a six-month coding bootcamp designed to help women launch careers in technology through intensive, hands-on training. As part of the program, I learned front-end development using HTML, CSS, and JavaScript, and built full-stack applications with Python and Django. I also gained experience in deploying web projects and understanding the full software development lifecycle. The program not only strengthened my technical skills but also connected me with a supportive community of women in tech, reinforcing my passion for software development.']
    },
    {
      degree: 'Graduate Certificate in Information Technology',
      institution: 'Queensland University of Technology',
      location: 'Brisbane, QLD',
      period: '2023 - 2024',
      description: ['I completed a Graduate Certificate in Information Technology at QUT, where I developed foundational and advanced skills across multiple areas of tech. The coursework covered Python programming, web development with HTML and CSS, C#, software architecture, and key cybersecurity principles. Throughout the program, I maintained a GPA above 6.5 and was awarded the Dean’s Award for Academic Excellence in recognition of my academic performance. This qualification has strengthened my technical capabilities and prepared me for further study and a career in the tech industry.', 'GPA: 6.5/7.0']
    }
  ],
  skills: [
    {
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'SQL', 'Java', 'Dart']
    },
    {
      category: 'Frameworks',
      skills: ['React', 'SpringBoot', 'Django', 'Flutter', 'Angular']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD']
    },
    {
      category: 'Soft Skills',
      skills: ['Creativity', 'Communication', 'Teamwork', 'Organisation', 'Problem Solving']
    }
  ],
  languages: [
    { language: 'English', proficiency: 'Native' },
  ],
  projects: [
    {
      name: 'Youra',
      description: 'A full-stack kindness-sharing mobile app where users can post, claim, and fulfill Random Acts of Kindness (RAKs), earning aura points as they contribute to the community. This is an app that I am currently working on. Right now I have deployed to TestFlight to iron out some bugs, fine tune the UI and do some user testung. If you would like to see the app in action, please let me knwo and I would be more than happy to add you to the test suit by email.',
      technologies: ['Flutter', 'Django', 'Django REST Framework', 'PostgreSQL', 'WebSockets', 'Docker'],

      liveDemo: 'https://youra.com.au',
      highlights: [
        'Implemented real-time chat using WebSockets and Django Channels',
        'Completely designed and implemented the software architecture',
        'Designed and built an intuitive Flutter frontend with animated UI elements and gamified feedback',
        'Developed a secure API with Django REST Framework, including RAK claim logic and image uploads',
        'Integrated user profiles, aura point system, and a pay-it-forward mechanic to encourage ongoing engagement'
      ]
    },
    
    {
      name: 'AI-Powered Code Review Tool',
      description: 'Machine learning tool that automates code review process',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'TypeScript'],
      github: 'https://github.com/alexjohnson/ai-code-review',
      highlights: [
        'Reduced code review time by 40% for team of 20 developers',
        'Implemented custom ML models for code quality analysis',
        'Built REST API serving 100K requests per day'
      ]
    },
    {
      name: 'Cloud Cost Optimizer',
      description: 'AWS cost optimization tool with automated resource scheduling',
      technologies: ['AWS Lambda', 'Terraform', 'Node.js', 'React', 'DynamoDB'],
      github: 'https://github.com/alexjohnson/cloud-cost-optimizer',
      liveDemo: 'https://cost-optimizer.example.com',
      highlights: [
        'Reduced cloud infrastructure costs by 35%',
        'Automated resource scheduling for non-production environments',
        'Built dashboard for cost analysis and forecasting'
      ]
    }
  ]
};