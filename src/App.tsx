/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CurrentStateSection } from './components/CurrentStateSection';
import { LungsAndWaterSection } from './components/LungsAndWaterSection';
import { BiodiversitySection } from './components/BiodiversitySection';
import { FireCrisisSection } from './components/FireCrisisSection';
import { StopBurningAwarenessSection } from './components/StopBurningAwarenessSection';
import { ActionRecommendationsSection } from './components/ActionRecommendationsSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-[#14281d] flex flex-col antialiased selection:bg-emerald-200 selection:text-emerald-950">
      {/* 3-Zone Top Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Audio Atmosphere & Key KPIs */}
        <HeroSection onExplore={scrollToSection} />

        {/* Keadaan Hutan Kalimantan Saat Ini & Interactive Before/After Split Slider */}
        <CurrentStateSection />

        {/* Mengapa Disebut Paru-Paru Dunia & Krisis Air Bersih */}
        <LungsAndWaterSection />

        {/* Keajaiban Keanekaragaman Hayati, Spesies Endemik, & Resiko Punahnya Orangutan */}
        <BiodiversitySection />

        {/* Kebakaran Terkini (Karhutla) & Titik Api Aktif dengan Animasi Pulse */}
        <FireCrisisSection />

        {/* Seruan Kesadaran Pribumi: Hentikan Membakar Hutan & Papan Ikrar Digital */}
        <StopBurningAwarenessSection />

        {/* Rekomendasi Aksi Nyata, Kalkulator Karbon Gambut, & Lapor Cepat */}
        <ActionRecommendationsSection />
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
