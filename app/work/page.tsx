"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { hover, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/Container";
import projectOne from "@/images/projectOne.png";
import projectThree from "@/images/projectThree.png";
import mpesacheckout from "@/images/mpesacheckout.png"; // Import the hover image
import outering from "@/images/outering.png"; // Import the hover image 
import outering1 from "@/images/outering1.png";

// Dummy data for projects
const projects = [
  {
    id: "01",
    title: "Emali Express",
    category: "Full Stack",
    description:
      "A modern e-commerce platform built with Next.js, featuring a responsive design, user authentication, and integration with a headless CMS for seamless content management. The platform supports trusted payment gateways including M-Pesa, Stripe, and PayPal, enabling secure and convenient transactions for both local and global customers.",
    stack: ["Next.js", "MongodB", "Shadcn","Mpesa API",  "PayPal",, "Aws",],
    image: projectOne,
    hoverImage: mpesacheckout,    // image shown on hover
    liveUrl: "https://emali.vercel.app/",
    githubUrl: "https://github.com/Outering-Inc/emaliexpress",
  },
  {
    id: "02",
    title: "Outering",
    category: "Frontend",
    description:
      "Outering is a multi-cloud platform providing tailored solutions on AWS, GCP, and Azure.We specialize in cloud-native architecture, DevOps, and infrastructure automation.Our services include cloud migration, CI/CD setup, and Kubernetes orchestration.We help clients build secure, scalable, and resilient applications.Enables faster deployment and smarter operations across environments.",
      
    stack: ["AWS", "GCP", "GitOps", "Kubernetes", "Terraform", "ArgoCD", "DevOps"],
    image: outering1,
    hoverImage: outering, // image shown on hover
    liveUrl: "https://outering.vercel.app/",
    githubUrl: "https://github.com/Outering-Inc/Outering",
  },
  {
    id: "03",
    title: "Weather Forecast Dashboard",
    category: "Frontend",
    description:
      "An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.",
    stack: ["Vue.js", "Vuex", "Chart.js", "OpenWeatherMap API"],
    image: projectThree,
    liveUrl: "https://example-weatherapp.com",
    githubUrl: "https://github.com/example/weatherapp",
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 md:py-12"
    >
      <Container>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onSelect={() => {
            const index = 0;
            if (typeof index === "number") {
              handleSlideChange(index);
            }
          }}
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightSky/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <h2 className="text-2xl md:text-4xl leading-none font-extrabold text-transparent text-outline">
                            {project?.id}
                          </h2>
                            {/* Project Title */}
                          <h3 className="text-2xl md:text-4xl font-bold text-white">
                              {project?.title}
                          </h3>
                           {/* Project Category */}
                          <p className="text-lightSky text-sm md:text-base font-medium uppercase tracking-wide">
                               {project?.category} Project
                          </p>
                           {/* Project Description */}
                          <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal">
                            {project?.description}
                          </p>
                          <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                            {project?.stack?.map((item, index) => (
                              <li
                                key={index}
                                className="text-xs md:text-base text-lightSky"
                              >
                                {item}
                                {index !== project?.stack?.length - 1 && ","}
                              </li>
                            ))}
                          </ul>
                          <Separator className="bg-gray-700" />
                          <div className="flex items-center space-x-4">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={project.liveUrl}>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <ArrowUpRight className="h-4 w-4" />
                                      <span className="sr-only">
                                        View Live Project
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={project.githubUrl}>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <Github className="h-4 w-4" />
                                      <span className="sr-only">
                                        View GitHub Repository
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View GitHub Repository</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                      <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden group">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                        />
                        {project.hoverImage && (
                        <Image
                          src={project.hoverImage}
                          alt={`${project.title} - hover`}
                          fill
                          className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                          />
                        )}
                      </div>

                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8 bg-red-600">
            <CarouselPrevious className="hidden md:flex rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
            <CarouselNext className="hidden md:flex rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          </div>
        </Carousel>
        <div className="flex justify-center mt-4 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="mr-2 rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect"
            onClick={() => handleSlideChange(currentIndex - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="mr-2 rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect"
            onClick={() => handleSlideChange(currentIndex + 1)}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </Container>
    </motion.section>
  );
}
