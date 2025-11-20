
import React from 'react';
import Logo from './Logo';
const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-8 py-8 border-t">
      <div className="max-w-7xl mx-auto flex flex-col items-left md:flex-row justify-between md:items-center">
        <div className="mb-8 md:mb-0">
          {/* <img 
            src="/assets/tslogo250.png" 
            alt="Talk Sharp Logo" 
            className="h-13 w-auto"
          /> */}
          <Logo variant="light" />
        </div>
        
        <div className="flex flex-col text-gray-500 text-sm mb-8 md:mb-0">
          <a href="mailto:hello@talksharp.co" className="block md:inline-block mb-2 md:mb-1 md:mr-4">
            hello@talksharp.co
          </a>
          <a href="tel:+44 754 718 6420" className="block md:inline-block">
            +44 754 718 6420
          </a>
        </div>
        
        <div className="flex flex-col text-gray-500 text-sm mb-8 md:mb-0">
          <a href="https://colorful-thread-8c5.notion.site/TalkSharp-Terms-of-Service-1e1ef58daeb3808fb102f1fa2a1fbc06?pvs=4" className="mr-4 mb-2 md:mb-1">Terms of Service</a>
          <a href="https://colorful-thread-8c5.notion.site/Talk-Sharp-Privacy-Policy-1e1ef58daeb380949f7ffc9f14db29c9?pvs=74">Privacy Policy</a>
        </div>
        
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/talksharpafrica/" className="text-gray-500 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://x.com/TalkSharp" className="text-gray-500 hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"/>
          </svg>
          </a>
          <a href="https://www.instagram.com/talk_sharp?igsh=MWRjbXE5dTRkYnllbQ==" className="text-gray-500 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t text-left md:text-center text-gray-500 text-sm">
        © 2025 TalkSharp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
