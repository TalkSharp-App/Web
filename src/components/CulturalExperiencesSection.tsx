import React from 'react';

const CulturalExperiencesSection = () => {
  return (
    <section className="w-full px-4 py-0 md:px-8 py-0">
      <div className="max-w-7xl mx-auto">
        <div className="bg-shapp-red rounded-3xl pt-4 md:p-6 relative overflow-hidden">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="px-3 py-2">
                {/* <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg"></h3>
                  <span>⋮</span>
                </div> */}
                <img
                  src="/assets/localphrase.png"
                  alt="Mount Kilimanjaro"
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-gray-600">
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="px-3 py-2">
                {/* <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg"></h3>
                  <span>⋮</span>
                </div> */}
                <img
                  src="/assets/ethnic.png"
                  alt="Jollof Rice"
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-gray-600">
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="px-3 py-2">
                <h3 className="font-bold text-lg"></h3>
                <div className="hidden md:block">
                  <img
                    src="/assets/africanculture.png"
                    alt="African Culture"
                    className="w-full h-41 object-cover rounded-lg mb-2"
                  />
                </div>
                <div className="block md:hidden">
                  <img
                    src="/assets/africanculturemobile.png"
                    alt="African Culture Mobile"
                    className="w-full h-41 object-cover rounded-lg mb-2"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalExperiencesSection;
