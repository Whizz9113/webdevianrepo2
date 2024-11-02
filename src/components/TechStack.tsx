"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { IconType } from "react-icons";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

interface TechCardProps {
  title: string;
  description: string;
  Icon: IconType;
  delay: number;
}

const TechCard = ({ title, description, Icon, delay }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="p-6 h-full bg-background/10 backdrop-blur-sm border-muted">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="w-8 h-8" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <Badge variant="secondary" className="mt-4">Erfahren Sie mehr</Badge>
      </Card>
    </motion.div>
  );
};

export function TechStack() {
  const techStack = [
    {
      title: "Next.js",
      description: "Das React Framework für produktionsbereite Anwendungen",
      Icon: SiNextdotjs,
    },
    {
      title: "React",
      description: "Moderne UI-Entwicklung mit der beliebtesten JavaScript-Bibliothek",
      Icon: SiReact,
    },
    {
      title: "TypeScript",
      description: "Typsichere Entwicklung für robustere Anwendungen",
      Icon: SiTypescript,
    },
    {
      title: "Tailwind CSS",
      description: "Utility-First CSS Framework für schnelles Styling",
      Icon: SiTailwindcss,
    },
    {
      title: "Framer Motion",
      description: "Leistungsstarke Animations-Bibliothek für React",
      Icon: SiFramer,
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-background to-primary/20 py-24">
      <div className="container">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mit was wir arbeiten
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <TechCard
              key={tech.title}
              title={tech.title}
              description={tech.description}
              Icon={tech.Icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 