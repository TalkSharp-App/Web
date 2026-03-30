import React from 'react';
import { Button } from './ui/button';
import Logo from './Logo';
interface NavbarProps {
  onOpenWaitlist: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  return (
    <nav className="bg-[#1B1B1B]/5 backdrop-blur-sm text-white rounded-2xl mx-auto w-[calc(100%-2rem)] max-w-7xl py-3 px-6 fixed top-3 left-1/2 -translate-x-1/2 z-20">
      <div className="flex justify-between items-center">
        <Logo variant="light" />

      <div className="flex items-center gap-4">

      <Button 
        className="bg-black text-white hover:bg-gray-800 rounded-2xl px-5 py-4 text-base h-auto"
        onClick={onOpenWaitlist}
      >
        Start Learning
      </Button>

      </div>
      </div>
      
    </nav>  );
};

export default Navbar;
