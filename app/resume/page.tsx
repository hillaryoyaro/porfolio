"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Briefcase, Code2, User, Award } from "lucide-react";
import Container from "@/components/Container";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";



const tabMenu = [
  { title: "About me", value: "about", icon: User },
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Certifications", value: "certification", icon: Award },
];

const tabContent = {
   about: {
    title: "About Me",
    image: "/images/hillary.png",
    bio: "I’m an Entrepreneurial Software Engineer with over 4+ years of experience in building modern, scalable, cloud-native applications. My expertise spans DevOps, cloud computing, and full-stack development , delivering solutions that power growth in eCommerce, dropshipping, fintech, blockchain, and AI/ML-driven platforms.Committed to designing and building resilient applications, writing clean and maintainable code, and staying at the forefront of emerging technologies. A Strong advocate for cloud native applications.",

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
      "Health & Fitness",       
    ],
    languages: ["English (Native)", "Kiswahili (Native)", "Arabic (Basic)"],
  },
  experience: {
    title: "Professional Experience",
    items: [
     {
      role: "Co-founder & Software Engineer",
      company: "EmaliExpress",
      logo: "/images/emaliLogo.png",
      period: "December 2024 – Present",
      description:
        "Led the end-to-end development of Emali Express, a full-featured modern eCommerce platform. Architected secure and scalable systems integrating PayPal, M-Pesa, and Stripe for seamless payments. Built robust inventory management, user authentication, and data protection layers to ensure compliance and user trust. Drove DevOps initiatives using Docker,Kubernetes, CI/CD pipelines, and cloud infrastructure for high availability and performance.",
      highlights: [ "React","Next.js","TypeScript", "Stripe", "M-Pesa API","DevOps", "CI/CD","Cloud Deployment"],
      href: "https://emali.vercel.app/",
        },
    
   
      {
        role: "DevOps Engineer",
        company: "Outering",
        logo: "/images/outeringLogo.png",
        period: "September 2023 - December 2024",
        description:
          "Migrated multi-project architecture to AWS with CyberPanel, reducing downtime and boosting performance.Created detailed deployment documentation, streamlining team adoption.Built secure authentication with Next.js and Google Auth APIs on GCP.Enhanced login success rates while minimizing unauthorized access attempts",

        highlights: ["React", "Next.js", "Node.js", "AWS", "Agile Methodologies","GCP", "Docker", "Kubernetes"],
        href: "https://outering.vercel.app/",
      },

      
      {
        role: "Full-stack AI Engineer",
        company: "Elloe AI",
        logo: "/images/elloeLogo.png",
        period: "May 2023 - OCt 2024",
        description:
          "Engineered conversational AI chatbot interfaces using React and TypeScript, enhancing user engagement through responsive and accessible designs. Developed and optimized backend systems with Node.js and MongoDB, reducing API latency and ensuring reliable integration with third-party services via RESTful APIs. Collaborated closely with cross-functional teams to deploy scalable solutions on AWS, contributing to the overall system reliability and performance.",
        highlights: ["Node.js", "React", "MongoDB", "AWS","Generative AI", "RESTful APIs", "TypeScript"],
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
        logo: "/images/alxLogo.png",
        period: "February 2022 - April 2023",
        description:
          "Specialized in Backend Software Engineering and Artificial Intelligence. Focused on building scalable web applications and mastering AI technologies.",
        achievements: ["ALX Backend & AI Certified", "Research Publication", "Backend & AI tech mastery","Open Source Contributor","Community Mentor","Promnt Engineer",],
        href: "https://www.alxafrica.com/",
      },
      {
        degree: "Bachelor of Mathematics and Computer Science",
        institution: "Taita Taveta University",
        logo: "/images/taitaLogo.png",
        period: "2014 -November 2018",
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
  certification: {
    title: "Certifications & Achievements",
    items: [
      {
        certificate: "LFS250: Kubernetes and Cloud Native Essentials",
        institution: "Linux Foundation",
        logo: "/images/linux.png",
        period: "May 2025 - Present",
        description:
          "Introduction to Kubernetes and cloud-native tools, covering architecture, container orchestration, and CNCF projects, with hands-on deployment and scaling experience.",
        skills: ["CI/CD", "Kubernetes", "Docker","Container","GitOps","Monitoring","Logging","Security","Networking","Storage","Orchestration","Automation","Observability","Service Mesh","Serverless","Multi-Cloud"],
        href: "https://www.credly.com/badges/ad605dfd-62d5-43a7-87f0-a0738a199c21",
      },
        {
        certificate: "AWS Certified Cloud Practitioner",
        institution: "AWS",
        logo: "/images/aws.png",
        period: "July 2022 - July 2025",
        description:
          "Validated foundational knowledge of AWS Cloud concepts, core services, security, architecture, pricing, and support. Gained skills in deploying and managing cloud solutions, understanding shared responsibility models, and applying best practices for cost optimization, scalability, and reliability within AWS environments.",
        skills: ["AWS Cloud Concepts", "EC2", "S3","RDS", "Lambda", "VPC",  "CloudFormation", "Team Collaboration","IAM","AWS CLI","Security Best Practices","Cost Optimization","Scalability & Reliability","Networking in AWS","Monitoring & Logging","Serverless Architecture","Recoverbility","Networking","Storage","Observability","Automation","Monitoring & Logging","Shared Responsibility Model"],
        href: "https://www.credly.com/badges/ad63297b-e489-4cd1-b714-5041f1366728/public_url",
      },
      {
        certificate: "Software Engineering",
        institution: "Alx Africa",
        logo: "/images/alx.png",
        period: "Feb 2022 - April 2023",
        description:
          "Completed an intensive, project-based program in software engineering with a strong foundation in computer science principles. Gained proficiency in data structures, algorithms, and full-stack development, while honing problem-solving and collaboration skills through real-world projects.",
        skills: ["Data Structures", "Algorithms", "Full-Stack Development","Object-Oriented Programming", "Database Management",  "API Development", "Team Collaboration","Debugging & Testing","Responsive Web Design","RESTful APIs","System Design","Software Documentation"],
        href: "https://drive.google.com/file/d/1Swk8GChUblBTIEHUaECGK5n8Tx17wtrZ/view",
      },
       {
        certificate: "Mathematics and Computer Science",
        institution: "Taita Taveta University",
        logo: "/images/taita.png",
        period: "Sept 2013 - Nov 2018",
        description:
          "Earned a degree combining advanced mathematics with core computer science concepts. Developed strong analytical and problem-solving skills through coursework in algorithms, data structures, and mathematical modeling. Applied theoretical knowledge to practical projects in programming, database systems, and software engineering.",
        skills: ["Mathematical Modeling","Data Structures", "Algorithms", "Software Engineering","Programming (Java, Python,C, C++)", "Database Management",  "Numerical Analysis", "Statistics","Problem Solving", "Team Collaboration","Discrete Mathematics","System Design","Calculus","Linear Algebra","Software Development Life Cycle (SDLC)","Fluid Mechanics","Computer Networks","Operating Systems", "Computer Architecture","Communication Skills","Research & Analysis"],
        href: "https://drive.google.com/file/d/1ztT94UmTmeK_HASrqDAYOTDFKRnztD8s/view?usp=sharing",
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
                          {/* Logo */}
                          {item.logo && (
                            <img
                              src={item.logo}
                              alt={`${item.company} logo`}
                              className="w-10 h-10 object-contain bg-black"
                              />
                          )}
                          {/* Company Name */}
                          <span>{item.company}</span>
                        {/* External Link */}
                        {item.href && (
                        <Link
                           href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                        <h3 className="text-lg font-semibold">{item.degree}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          {/* Logo */}
                          {item.logo && (
                            <img
                              src={item.logo}
                              alt={`${item.institution} logo`}
                              className="w-10 h-10 object-contain bg-white rounded-full"
                              />
                          )}
                          {/* Institution Name */}
                          <span>{item.institution}</span>
                        {/* External Link */}
                        {item.href && (
                        <Link
                           href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
              <TabsContent value="certification">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.certification.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.certification.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                         <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item.certificate}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          {/* Logo */}
                          {item.logo && (
                            <img
                              src={item.logo}
                              alt={`${item.institution} logo`}
                              className="w-10 h-10 object-contain bg-white "
                              />
                          )}
                          {/* Institution Name */}
                          <span>{item.institution}</span>
                        {/* External Link */}
                        {item.href && (
                        <Link
                           href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                        {item.skills.map((skill, i) => (
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-4 mb-6"
              >
              <Image
                src={tabContent.about.image}
                alt={tabContent.about.title}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold text-lightSky">
                {tabContent.about.title}
              </h2>
            </motion.div>

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
