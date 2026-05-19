import { motion, useScroll, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

/**
 * FadeIn component for entrance animations.
 */
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: string;
  className?: string;
  key?: React.Key;
}) => {
  const Component = motion.create(as as any);
  
  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  );
};

/**
 * Magnet component for mouse-following magnetic effect.
 */
export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Check if mouse is within padding range
    const distanceX = Math.abs(e.clientX - centerX);
    const distanceY = Math.abs(e.clientY - centerY);

    if (distanceX < width / 2 + padding && distanceY < height / 2 + padding) {
      const offsetX = (e.clientX - centerX) / strength;
      const offsetY = (e.clientY - centerY) / strength;
      setPosition({ x: offsetX, y: offsetY });
      setIsActive(true);
    } else {
      setPosition({ x: 0, y: 0 });
      setIsActive(false);
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsActive(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

/**
 * AnimatedText component for scroll-driven character opacity reveal.
 */
export const AnimatedText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = (i + 1) / characters.length;
        return (
          <span key={i} className="relative inline-block">
            <span className="opacity-20">{char === " " ? "\u00A0" : char}</span>
            <Character opacity={scrollYProgress} range={[start, end]}>
              {char === " " ? "\u00A0" : char}
            </Character>
          </span>
        );
      })}
    </p>
  );
};

const Character = ({
  children,
  opacity,
  range,
}: {
  children: React.ReactNode;
  opacity: any;
  range: [number, number];
}) => {
  const charOpacity = useTransform(opacity, range, [0, 1]);
  return (
    <motion.span style={{ opacity: charOpacity }} className="absolute left-0 top-0">
      {children}
    </motion.span>
  );
};

/**
 * ContactButton component.
 */
export const ContactButton = () => {
  return (
    <button
      id="contact-button"
      className="relative px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base cursor-pointer group transition-all duration-300 active:scale-95"
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      Contact Me
    </button>
  );
};

/**
 * LiveProjectButton component.
 */
export const LiveProjectButton = () => {
  return (
    <button
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-2 sm:py-3 sm:px-10 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors"
    >
      Live Project
    </button>
  );
};
