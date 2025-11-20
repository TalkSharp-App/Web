
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Yellow Feature */}
        <div className="bg-shapp-yellow rounded-3xl p-8 relative overflow-hidden">
          <h2 className="text-3xl font-extrabold mb-6 text-black">
            LEARN LOCAL AFRICAN PHRASES QUICKLY
          </h2>
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="bg-white rounded-xl py-2 px-4 shadow-md inline-block">
              <span className="font-medium">Ki lon so?</span>
            </div>
            <div className="bg-white rounded-xl py-2 px-4 shadow-md inline-block text-right transform translate-y-2">
              <span className="font-medium">Kedu!</span>
            </div>
            <div className="bg-white rounded-xl py-2 px-4 shadow-md inline-block transform translate-y-4">
              <span className="font-medium">How you dey?</span>
            </div>
            <div className="bg-white rounded-xl py-2 px-4 shadow-md inline-block transform translate-y-2">
              <span className="font-medium">Ẹ kàá bo?</span>
            </div>
          </div>
        </div>

        {/* Green Feature */}
        <div className="bg-shapp-green rounded-3xl p-8 relative overflow-hidden">
          <h2 className="text-3xl font-extrabold mb-6 text-white">
            STAY CONNECTED TO YOUR ETHNIC ROOTS
          </h2>
          <div className="flex justify-center mt-4">
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <img src="/placeholder.svg" alt="Africa map" className="w-20 h-20" />
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-shapp-blue font-bold">
                $
              </div>
              <div className="absolute rounded-full w-16 h-16 bg-amber-700 -left-6 bottom-6 border-4 border-white overflow-hidden">
                <img src="/placeholder.svg" alt="Cultural icon" className="w-full h-full object-cover" />
              </div>
              <div className="absolute rounded-full w-16 h-16 bg-amber-700 left-6 -bottom-6 border-4 border-white overflow-hidden">
                <img src="/placeholder.svg" alt="Cultural icon" className="w-full h-full object-cover" />
              </div>
              <div className="absolute rounded-full w-16 h-16 bg-amber-700 right-0 bottom-2 border-4 border-white overflow-hidden">
                <img src="/placeholder.svg" alt="Cultural icon" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
