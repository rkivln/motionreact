import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { LiveProjectButton } from "./Common";

const projects = [
  {
    id: "01",
    name: "Nextlevel Studio",
    category: "Client",
    images: {
      col1_top: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_bottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
  },
  {
    id: "02",
    name: "Aura Brand Identity",
    category: "Personal",
    images: {
      col1_top: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_bottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
  },
  {
    id: "03",
    name: "Solaris Digital",
    category: "Client",
    images: {
      col1_top: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_bottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
  },
];

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pb-20"
    >
      <div className="pt-20 sm:pt-24 md:pt-32 mb-16 sm:mb-20 md:mb-28">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)]">
          Project
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={i} 
            total={projects.length}
            containerProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  project, 
  index, 
  total,
  containerProgress,
}: { 
  project: any; 
  index: number; 
  total: number;
  containerProgress: any;
  key?: React.Key;
}) => {
  // Each card's scale effect should be active from its position in the list
  // As the container scrolls, we want the cards at the TOP to scale down
  // The scale down should happen as the NEXT card comes into view or as the current card stays at top.
  
  const targetScale = 1 - (total - 1 - index) * 0.05;
  
  // We use the container's overall progress to drive the scale
  // This is a simplified version; for a truer sticky stack, we'd use more complex mapping
  const scale = useTransform(
    containerProgress,
    [index / total, (index + 1) / total],
    [1, targetScale]
  );

  return (
    <div className="h-[85vh] sticky top-24 md:top-32 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="w-full max-w-7xl h-full bg-dark border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-8 grow">
             <span className="text-[#D7E2EA] font-black leading-none text-[clamp(2.5rem,8vw,110px)]">
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-[clamp(0.7rem,1.2vw,1rem)]">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1rem,2vw,1.8rem)]">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom Row - Image Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 sm:gap-6 overflow-hidden">
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-6 overflow-hidden">
            <img 
              src={project.images.col1_top} 
              alt={project.name}
              className="w-full h-[clamp(130px,16vw,230px)] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              referrerPolicy="no-referrer"
            />
            <img 
              src={project.images.col1_bottom} 
              alt={project.name}
              className="w-full flex-1 min-h-[clamp(160px,22vw,340px)] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Right Column */}
          <div className="overflow-hidden">
            <img 
              src={project.images.col2} 
              alt={project.name}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
