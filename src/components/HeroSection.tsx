import React from "react";
import { FadeIn, Magnet, ContactButton } from "./Common";

export const HeroSection = () => {
  const navLinks = ["About", "Price", "Projects", "Contact"];

  return (
    <section className="relative h-screen w-full flex flex-col overflow-x-clip bg-dark">
      {/* Navbar */}
      <nav className="w-full px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center z-50">
        <FadeIn y={-20} delay={0} as="div" className="w-full flex justify-between items-center">
          <div className="flex gap-4 md:gap-8 lg:gap-12 w-full justify-between">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </FadeIn>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative px-6 md:px-10">
        {/* Animated Portrait */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
          <FadeIn y={30} delay={0.6}>
            <Magnet padding={150} strength={3}>
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Jack portrait"
                className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-contain pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </Magnet>
          </FadeIn>
        </div>

        {/* Hero Heading */}
        <div className="w-full overflow-hidden mt-6 sm:mt-4 md:-mt-5 relative z-0">
          <FadeIn y={40} delay={0.15}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        <FadeIn y={20} delay={0.35} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        
        <FadeIn y={20} delay={0.5}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
