
import React from 'react';
import { TwitterIcon, InstagramIcon, MenuIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800/80 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between text-gray-400">
        <div>
          <p className="text-sm">&copy; 2024 University.ity</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-white transition-colors"><TwitterIcon className="h-5 w-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><InstagramIcon className="h-5 w-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><MenuIcon className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
