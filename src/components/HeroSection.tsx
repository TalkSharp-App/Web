import React from 'react';
import AppButton from './AppButton';
import CustomTwemoji from './CustomTwemoji';

interface HeroSectionProps {
  onOpenWaitlist: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="w-full px-6 md:px-10 pt-36 md:pt-36 pb-24 md:pb-36 relative overflow-hidden bg-[url('/assets/hero-background.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 opacity-50">
        {/* Define a grid with fixed positions */}
        {[
          { row: 1, col: 1, rotate: 0 },     // Top-left

          { row: 1, col: 5, rotate: 180 },   // Top-right

          { row: 2, col: 2, rotate: 315 },   // Upper-middle-left-center

          { row: 2, col: 6, rotate: 135 },   // Upper-middle-far-right
          { row: 3, col: 1, rotate: 180 },   // Middle-left

          { row: 3, col: 5, rotate: 0 },     // Middle-right
          // { row: 3, col: 6, rotate: 45 },    // Middle-far-right
          { row: 4, col: 1, rotate: 90 },    // Lower-middle-left

          { row: 4, col: 6, rotate: 315 },   // Lower-middle-far-right
          { row: 5, col: 1, rotate: 0 },     // Bottom-left

          { row: 5, col: 6, rotate: 225 },   // Bottom-far-right
          // { row: 6, col: 1, rotate: 270 },   // Far-bottom-left
          { row: 6, col: 2, rotate: 315 },   // Far-bottom-left-center

          { row: 6, col: 5, rotate: 90 },    // Far-bottom-right
          // { row: 6, col: 6, rotate: 135 },   // Far-bottom-far-right
        ].map((item, i) => (
          <div 
            key={i} 
            className="absolute"
            style={{
              top: `${(item.row * 16.67) - 8}%`,      // Convert row to percentage position (100/6 = 16.67%)
              left: `${(item.col * 16.67) - 8}%`,   // Convert column to percentage position
              transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`
            }}
          >
            <img 
              src="/assets/tsbghero.svg" 
              alt="" 
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between relative z-10 gap-12">
        {/* Mobile App Image */}
        <div className="w-full lg:w-1/2 mb-20 lg:mb-0 flex justify-center">
          <div className="relative">
            <img
              src="/assets/heroappscreen.png"
              alt="Talk Sharp Mobile App"
              // Reduced width slightly for mobile (w-80) and medium screens up (md:w-[28rem])
              className="w-80 md:w-[28rem] h-auto relative z-10"
            />
            {/* <div className="absolute -right-8 -top-8 w-12 h-12 bg-shapp-blue rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
              $
            </div> */}
          </div>
        </div>
        
        {/* Hero Text */}
        <div className="w-full lg:w-3/4 lg:pl-12 text-center lg:text-left lg:flex lg:flex-col lg:justify-center lg:items-center -mt-16 md:mt-0 lg:mt-0 md:pt-0 lg:pt-20 mx-auto">
          <h1 className="text-5xl md:text-8xl font-extrabold font-display [word-spacing:0.5rem] md:[word-spacing:0.75rem] tracking-loose text-center whitespace-nowrap">
            <span className="block">SPeAK AFRICAn</span>
            <span className="block text-paddyGreen">STAY ROOTeD</span>
          </h1>
          <p className="text-gray-600 mb-6 mt-6 text-md md:text-xl  text-center md:text-center max-w-3xl lg:max-w-3xl mx-auto px-5">
          Own your voice in every conversation. Learn local African languages with ease through authentic phrases and real-life lessons. Stay connected to vibrant cultures, and honour the spirit of Africa one word at a time.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full max-w-xs md:max-w-2xl mx-auto mb-6">
            <div className="flex items-center">
              <CustomTwemoji text="🇳🇬" size={21} />
              <p className="text-xl md:text-2xl px-2">Igbo</p>
            </div>
            
            <div className="flex items-center">
              <CustomTwemoji text="🇳🇬" size={21} />
              <p className="text-xl md:text-2xl px-2">Yoruba</p>
            </div>
            
            <div className="flex items-center">
              <CustomTwemoji text="🇳🇬" size={21} />
              <p className="text-xl md:text-2xl px-2">Pidgin</p>
            </div>
            
            <div className="flex items-center">
              <CustomTwemoji text="🇬🇭" size={21} />
              <p className="text-xl md:text-2xl px-2">Twi</p>
            </div>
            
            <div className="flex items-center">
              <CustomTwemoji text="🇰🇪" size={21} />
              <p className="text-xl md:text-2xl px-2">Swahili</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-xl mx-auto">

            <AppButton 
              variant="primary" 
              className="w-full sm:w-auto sm:mx-auto text-lg rounded-3xl px-10 py-4"
              onClick={onOpenWaitlist}
            >
              Join the Waitlist
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
