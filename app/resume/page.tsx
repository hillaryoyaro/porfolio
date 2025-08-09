"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Briefcase, Code2, User } from "lucide-react";
import Container from "@/components/Container";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { matchesGlob } from "path/posix";

const tabMenu = [
  { title: "About me", value: "about", icon: User },
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  
];

const tabContent = {
   about: {
    title: "About Me",
    bio: "Passionate software engineer with over 5 years of experience in building modern web applications. Committed to writing clean, maintainable code and staying current with emerging technologies. Strong advocate for user-centric design and accessibility.",
    interests: [
      "Cloud Computing",
      "Ecommerce ",
      "AI & Machine Learning",
      "Open Source Contributing",
      "Blockchain & Web3",
       "Cybersecurity",
      "Fintech",
      "Traveling",
      "Photography",
      "Reading Tech Blogs",
      "Gaming",
      
      "Music Production",       
    ],
    languages: ["English (Native)", "Kiswahili (Native)", "Arabic (Basic)"],
  },
  experience: {
    title: "Professional Experience",
    items: [
     {
      role: "Co-founder & Software Engineer",
      company: "EmaliExpress",
      period: "December 2024 – Present",
      description:
        "Led the end-to-end development of Emali Express, a full-featured modern eCommerce platform. Architected secure and scalable systems integrating PayPal, M-Pesa, and Stripe for seamless payments. Built robust inventory management, user authentication, and data protection layers to ensure compliance and user trust. Drove DevOps initiatives using Docker,Kubernetes, CI/CD pipelines, and cloud infrastructure for high availability and performance.",
      highlights: [ "React","Next.js","TypeScript", "Stripe", "M-Pesa API","DevOps", "CI/CD","Cloud Deployment"],
      href: "https://emali.vercel.app/",
        },
    
   
      {
        role: "DevOps Engineer",
        company: "Outering",
        period: "2021 - 2024",
        description:
          "Developed and maintained web applications using React, Next.js, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented best practices in code quality and performance optimization.",
        highlights: ["React", "Next.js", "Node.js", "AWS", "Agile Methodologies","GCP", "Docker", "Kubernetes"],
        href: "https://outering.vercel.app/",
      },

      
      {
        role: "Full Stack Engineer",
        company: "Elloe AI",
        period: "2018 - 2021",
        description:
          "Engineered conversational AI chatbot interfaces using React and TypeScript, enhancing user engagement through responsive and accessible designs. Developed and optimized backend systems with Node.js and MongoDB, reducing API latency and ensuring reliable integration with third-party services via RESTful APIs. Collaborated closely with cross-functional teams to deploy scalable solutions on AWS, contributing to the overall system reliability and performance.",
        highlights: ["Node.js", "React", "MongoDB", "AWS","Vertica AI", "RESTful APIs", "TypeScript"],
        href: "https://www.elloe.ai/",
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Software Engineering(Bootcamp)",
        institution: "Alx Africa",
        period: "February 2022 - April 2023",
        description:
          "Specialized in Backend Software Engineering and Artificial Intelligence. Focused on building scalable web applications and mastering AI technologies.",
        achievements: ["ALX Backend & AI Certified", "Research Publication", "Backend & AI tech mastery","Open Source Contributor","Community Mentor","Promnt Engineer",],
        href: "https://www.alxafrica.com/",
      },
      {
        degree: "Bachelor of Mathematics and Computer Science",
        institution: "Taita Taveta University",
        period: "2014 - 2019",
        description:
          "Developed a strong foundation in computer science principles, with proficiency in data structures, algorithms, and problem-solving methodologies essential for efficient software development.",
        achievements: ["Second Class Honours","Specialization in Applied Mathematics and Computer Science", "Programming Club Member",  "Research Project on Mathematical Algorithms", "Community Service"],
        href: "https://www.ttu.ac.ke/",
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          " Experienced in crafting responsive, accessible, and high-performance user interfaces using modern JavaScript frameworks. Skilled at translating UI/UX designs into interactive, pixel-perfect web applications with seamless user experiences.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Shadcn UI",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        name: "Backend Development",
        description:
          "Proficient in building robust, scalable, and secure backend systems. Expertise in designing RESTful APIs, implementing authentication, optimizing database queries, and ensuring smooth integration between server and client applications.",
        skills: ["Node.js", "Express", "Python","FastAPI", "PostgreSQL", "MongoDB"],
      },
      {
        name: "Cloud & DevOps",
        description:
          "Hands-on experience deploying and managing applications in cloud environments. Skilled in containerization, CI/CD pipelines, and infrastructure automation to ensure scalability, reliability, and rapid delivery of software.  ",
        skills: ["AWS","GCP","Git","GitOps","GitActions", "Docker","Kubernetes", "Terraform","Jenkins", "Jenkins Pipeline", "Ansible", "ArgoCD", "CI/CD", "Agile Methodologies"],
      },
    ],
  },
 
};

export default function ResumePage() {
  return (
    <section className="flex flex-col justify-center text-white py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <Tabs
            defaultValue="experience"
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                    <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                    {item.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-h-[400px]">
              <TabsContent value="experience">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.experience.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{item.role}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span>{item.company}</span>
                            {item.href && (
                              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                                <ArrowUp className="rotate-45 h-4 w-4 hover:text-lightSky transition-colors" />
                              </Link>
                            )}
                        </div>

                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.education.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.degree}
                          </h3>
                         <div className="flex items-center gap-2 text-muted-foreground">
                          <span>{item.institution}</span>
                            {item.href && (
                              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                                <ArrowUp className="rotate-45 h-4 w-4 hover:text-lightSky transition-colors" />
                              </Link>
                            )}
                        </div>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.skills.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.skills.categories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/60 mb-4 font-normal leading-7">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="mb-6 text-lg">{tabContent.about.bio}</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}
