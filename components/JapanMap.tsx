import React from 'react';
import { JAPAN_PREFECTURES } from '../constants';
import { Prefecture } from '../types';

interface JapanMapProps {
  selectedPrefectureId: string | null;
  onPrefectureClick: (id: string) => void;
}

const JapanMap: React.FC<JapanMapProps> = ({ selectedPrefectureId, onPrefectureClick }) => {
  return (
    <div className="relative my-4 aspect-[4/3] w-full max-w-xl mx-auto">
      <div className="grid grid-cols-16 grid-rows-28 h-full w-full">
        {JAPAN_PREFECTURES.map((prefecture: Prefecture) => {
          const isSelected = prefecture.id === selectedPrefectureId;
          const buttonClasses = `
            flex items-center justify-center text-white text-[10px] sm:text-xs font-bold p-0.5 border transition-all duration-200 ease-in-out transform
            ${isSelected
              ? 'bg-yellow-400 hover:bg-yellow-500 scale-105 z-10 shadow-lg border-gray-800'
              : `${prefecture.color} border-white/50`
            }
          `;

          return (
            <button
              key={prefecture.id}
              onClick={() => onPrefectureClick(prefecture.id)}
              aria-label={prefecture.name}
              style={{
                gridRow: prefecture.gridRow,
                gridColumn: prefecture.gridColumn,
              }}
              className={buttonClasses}
            >
              <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] leading-tight">{prefecture.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default JapanMap;
