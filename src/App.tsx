/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { MarqueeSection } from "./components/MarqueeSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function App() {
  useEffect(() => {
    document.title = "Jack -- 3D Creator";
  }, []);

  return (
    <main className="w-full min-h-screen bg-dark overflow-x-clip selection:bg-white selection:text-dark">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Footer / Contact placeholder for bottom of page */}
      <footer className="bg-dark py-20 flex flex-col items-center gap-6">
        <p className="text-white opacity-40 uppercase tracking-widest text-xs">
          © 2026 Jack All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
