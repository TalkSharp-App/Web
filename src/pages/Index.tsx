import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CulturalExperiencesSection from '@/components/CulturalExperiencesSection';
import MissionSection from '@/components/MissionSection';
// import CompetitionSection from '@/components/CompetitionSection';
// import CultureLessonsSection from '@/components/CultureLessonsSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/WaitlistModal';
import SEO from '@/components/SEO';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenWaitlist={openModal} />
      <SEO
				title="TalkSharp | Learn african languages stay rooted"
				description="Learn African languages fast, vibe with the culture, and speak like a local"
				url={window.location.origin}
				structuredData={{
					"@context": "https://schema.org",
					"@type": "Course",
					name: "TalkSharp",
					description: "Learn African languages fast, vibe with the culture, and speak like a local"
				}}
			/>
      <main>
        <HeroSection onOpenWaitlist={openModal} />
        {/* <FeaturesSection /> */}
        <CulturalExperiencesSection />
        <MissionSection />
        {/* <CompetitionSection /> */}
        {/* <CultureLessonsSection /> */}
        <CallToActionSection onOpenWaitlist={openModal} />
      </main>
      <Footer />
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
