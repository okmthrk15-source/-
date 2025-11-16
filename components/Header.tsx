
import React from 'react';
import { ZenUniversityLogo } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ZenUniversityLogo className="h-8 w-8 text-white" />
            <span className="ml-3 text-xl font-bold text-white">ZEN UNIVERSITY</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Slack Guide</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
