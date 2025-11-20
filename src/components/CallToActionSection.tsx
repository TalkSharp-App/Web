import React from 'react';
import AppButton from './AppButton';

interface CallToActionSectionProps {
  onOpenWaitlist: () => void;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="w-full px-4 md:px-8 py-8 mb-0">
      <div className="max-w-7xl mx-auto">
        <div 
          className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          style={{
            backgroundImage: `url('/assets/tsbgfoot.svg')`,
            backgroundRepeat: "space space",
            backgroundSize: "70px 90px",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-90"></div>
          
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-white max-w-xs sm:max-w-none mx-auto">
              ARE YOU READY<br />
              TO TALK SHARP?
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <AppButton 
                variant="primary" 
                className="px-8 py-3 border hover:bg-gray-400 border-gray-600 rounded-2xl w-full sm:w-auto bg-white text-black text-sm font-medium"
                onClick={onOpenWaitlist}
              >
                Join the Waitlist
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
