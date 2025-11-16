
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MapModal from './components/MapModal';

const App: React.FC = () => {
  const [locationInfo, setLocationInfo] = useState<string>('Fetching location data...');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationInfo(`Location access granted. Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`);
        },
        (error) => {
          setLocationInfo(`Location access denied. Please select your region manually.`);
          console.error("Geolocation error:", error);
        },
        { timeout: 10000 }
      );
    } else {
      setLocationInfo("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-800 text-white font-sans antialiased">
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://picsum.photos/seed/zenuniversity/1920/1080" 
          alt="Students studying" 
          className="w-full h-full object-cover blur-md" 
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4">
          <MapModal locationInfo={locationInfo} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
