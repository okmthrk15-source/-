import React, { useState, useMemo } from 'react';
import JapanMap from './JapanMap';
import { JAPAN_PREFECTURES } from '../constants';

interface MapModalProps {
  locationInfo: string;
}

const MapModal: React.FC<MapModalProps> = ({ locationInfo }) => {
  const [username, setUsername] = useState('john_smith');
  const [selectedPrefectureId, setSelectedPrefectureId] = useState<string | null>(null);

  const selectedPrefecture = useMemo(() => {
    return JAPAN_PREFECTURES.find(p => p.id === selectedPrefectureId);
  }, [selectedPrefectureId]);
  
  const handleGoClick = () => {
    if (selectedPrefecture && username) {
        const slackChannel = `#times_${selectedPrefecture.id}`;
        alert(`Welcome, ${username}!\nRedirecting you to the regional Slack channel: ${slackChannel}`);
        // In a real app, you might use: window.location.href = `slack://channel?team=YOUR_TEAM_ID&name=${slackChannel.substring(1)}`;
    } else {
        alert("Please enter your username and select a prefecture.");
    }
  };

  const handlePrefectureClick = (id: string) => {
    console.log(`Prefecture selected: ${id}`);
    setSelectedPrefectureId(id);
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 text-gray-800 max-w-3xl w-full border border-white/20">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">ZEN UNIVERSITY - REAL ACTIVITY BOOST</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">Navigate to your regional #times_channel!</p>
      </div>
      
      <JapanMap 
        selectedPrefectureId={selectedPrefectureId} 
        onPrefectureClick={handlePrefectureClick}
      />

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="john_smith"
          className="w-full sm:w-auto flex-grow px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
        />
        <button
          onClick={handleGoClick}
          disabled={!selectedPrefecture || !username}
          className="w-full sm:w-auto px-6 py-2.5 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:scale-105 enabled:focus:ring-4 enabled:focus:ring-blue-300"
          style={{
            backgroundImage: selectedPrefecture ? 'linear-gradient(to right, #2563eb, #3b82f6)' : 'linear-gradient(to right, #6b7280, #9ca3af)',
          }}
        >
          {selectedPrefecture ? `Go to #times_${selectedPrefecture.id}` : 'Select a Prefecture'}
        </button>
      </div>
       <p className="text-center text-xs text-gray-500 mt-4 h-4">{locationInfo}</p>
    </div>
  );
};

export default MapModal;