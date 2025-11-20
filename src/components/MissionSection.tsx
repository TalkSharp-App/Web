import React from 'react';

const MissionSection = () => {
  return (
    <section className="w-full px-4 md:px-8 py-16 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold mb-4">
          TALK SHARP'S MISSION<br />
          IS SIMPLE
        </h2>
        <p className="text-gray-600 text-md mb-16 max-w-2xl mx-auto text-center">
          We are here to make African language learning engaging, authentic, and culturally connected.
        </p>

        <div className="flex flex-col mb-8 md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 -mb-8 md:mb-0">
            <div className="relative">

              <div className="bg-shapp-yellow rounded-3xl p-6 overflow-hidden relative">
                <img
                  src="/assets/locallangbot.png"
                  alt="App conversation"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-16 h-16 mb-4">
                <img
                  src="/assets/tswavycircle.svg"
                  alt="Wavy circle"
                  className="absolute inset-0 w-full h-full scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <img src="/assets/chaticon.svg" alt="Trophy" className="w-8 h-8" />
                </div>
              </div>

              <h3 className="text-4xl text-center md:text-left font-display font-bold mb-4">
                LOCAL AI LANGUAGE<br />
                CHATBOT
              </h3>

              <p className="text-gray-600 text-center md:text-left px-5 md:px-0">
                Our AI acts like a local guide, helping you learn how to use authentic phrases in everyday conversations. Each conversation brings you closer to fluency and deeper connections. Let your voice shine in every language!
              </p>
            </div>
          </div>



        </div>

        <div className="flex flex-col mb-8 md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1 md:ml-4">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-16 h-16 mb-4">
                <img
                  src="/assets/tswavycirclegreen.svg"
                  alt="Wavy circle"
                  className="absolute inset-0 w-full h-full scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <img src="/assets/trophyicon.svg" alt="Trophy" className="w-8 h-8 filter invert" />
                </div>
              </div>

              <h3 className="text-4xl text-center md:text-left font-display font-bold mb-4">
                LEARNING IS FUN.<br />
                SKILL UP AND COMPETE
              </h3>

              <p className="text-gray-600 text-center md:text-left px-5 md:px-0">
                Compete with other learners and test your fluency in a relaxing, playful, and enjoyable way. Track your rank, celebrate your wins, and stay motivated to push to the next of your language journey.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 -mb-8 md:mb-0">
            <div className="relative">
              <div className="bg-shapp-yellow rounded-3xl p-6 overflow-hidden relative">
                <img
                  src="/assets/learnfun.png"
                  alt="Leaderboard"
                  className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>



        </div>


        <div className="flex flex-col mb-4 md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 -mb-8 md:mb-0">

            <div className="relative">

              <div className="bg-shapp-yellow rounded-3xl p-6 overflow-hidden relative">
                <img
                  src="/assets/culturelesson.png"
                  alt="Culture lessons app screen"
                  className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-16 h-16 mb-4">
                <img
                  src="/assets/tswavycirclered.svg"
                  alt="Wavy circle"
                  className="absolute inset-0 w-full h-full scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <img src="/assets/bookicon.svg" alt="Book" className="w-8 h-8 filter invert" />
                </div>
              </div>

              <h3 className="text-4xl text-center md:text-left font-display font-bold mb-4">
                CULTURE LESSONS
              </h3>

              <p className="text-gray-600 text-center md:text-left px-5 md:px-0">
              Learn more than just words, explore the traditions, proverbs, folklore, and cuisine that define the rich cultural tapestry of your heritage. Understand the language through its stories, customs, and flavors, and connect with the heart of African culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
