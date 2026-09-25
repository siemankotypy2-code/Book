import React from 'react';
import { ReaderTheme, FontSize } from '../types/book';
import { X, Sliders, Volume2, Sun, Moon, Type, VolumeX } from 'lucide-react';
import { ambientSound } from '../utils/audioAmbience';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  theme: ReaderTheme;
  setTheme: (theme: ReaderTheme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  activeSound: string | null;
  setActiveSound: (sound: 'rain' | 'library' | 'campfire' | null) => void;
  soundVolume: number;
  setSoundVolume: (vol: number) => void;
}

export const ReaderSettingsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  theme,
  setTheme,
  fontSize,
  setFontSize,
  activeSound,
  setActiveSound,
  soundVolume,
  setSoundVolume
}) => {
  if (!isOpen) return null;

  const handleSoundChange = (sound: 'rain' | 'library' | 'campfire' | null) => {
    setActiveSound(sound);
    if (!sound) {
      ambientSound.stop();
    } else {
      ambientSound.play(sound, soundVolume);
    }
  };

  const handleVolumeChange = (vol: number) => {
    setSoundVolume(vol);
    ambientSound.setVolume(vol);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] dark:bg-stone-900 w-full max-w-md rounded-3xl border border-stone-300 dark:border-stone-800 shadow-2xl p-6 sm:p-7 relative space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-amber-700" />
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Personalizacja Czytnika
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500"
            aria-label="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Color Palette / Theme */}
        <div className="space-y-2.5">
          <label className="text-xs uppercase font-bold tracking-wider text-stone-500 block">
            Motyw Papieru i Kolorystyka
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { id: 'parchment', name: 'Ciepły Pergamin', bg: 'bg-[#FAF7F2] text-stone-900 border-amber-300' },
              { id: 'pure_white', name: 'Czysta Biel', bg: 'bg-white text-stone-900 border-stone-200' },
              { id: 'sepia', name: 'Klasyczna Sepia', bg: 'bg-[#F4ECD8] text-[#5C4033] border-[#D4C3A3]' },
              { id: 'dusk_night', name: 'Nocny Zmierzch', bg: 'bg-stone-950 text-stone-100 border-stone-800' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setTheme(item.id as ReaderTheme)}
                className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${item.bg} ${
                  theme === item.id ? 'ring-2 ring-amber-600 shadow-sm' : 'opacity-85 hover:opacity-100'
                }`}
              >
                <span>{item.name}</span>
                {theme === item.id && <span className="w-2 h-2 rounded-full bg-amber-600" />}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Font Size */}
        <div className="space-y-2.5">
          <label className="text-xs uppercase font-bold tracking-wider text-stone-500 block">
            Rozmiar Typografii
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'normal', label: 'Średni (16px)', iconSize: 'text-sm' },
              { id: 'large', label: 'Duży (18px)', iconSize: 'text-base font-semibold' },
              { id: 'huge', label: 'Bardzo duży (21px)', iconSize: 'text-lg font-bold' }
            ].map(size => (
              <button
                key={size.id}
                onClick={() => setFontSize(size.id as FontSize)}
                className={`py-3 px-2 rounded-xl border text-xs font-medium text-center transition-all ${
                  fontSize === size.id
                    ? 'border-amber-700 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 shadow-xs'
                    : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-700 dark:text-stone-300'
                }`}
              >
                <div className={`mb-1 font-serif ${size.iconSize}`}>Aa</div>
                <div className="text-[11px] truncate">{size.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Ambient Background Sound */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center justify-between">
            <label className="text-xs uppercase font-bold tracking-wider text-stone-500 block">
              Dźwięk Tła dla Skupienia
            </label>
            {activeSound && (
              <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                Aktywny
              </span>
            )}
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              { id: null, label: 'Cisza', icon: <VolumeX className="w-4 h-4 mx-auto mb-1" /> },
              { id: 'rain', label: 'Deszcz', icon: <span className="block text-base mb-0.5">🌧️</span> },
              { id: 'library', label: 'Czytelnia', icon: <span className="block text-base mb-0.5">📚</span> },
              { id: 'campfire', label: 'Kominek', icon: <span className="block text-base mb-0.5">🪵</span> }
            ].map(s => (
              <button
                key={String(s.id)}
                onClick={() => handleSoundChange(s.id as 'rain' | 'library' | 'campfire' | null)}
                className={`p-2.5 rounded-xl border text-[11px] text-center font-medium transition-all ${
                  activeSound === s.id
                    ? 'border-amber-700 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200'
                    : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-700 dark:text-stone-300'
                }`}
              >
                {s.icon}
                <span>{s.label}</span>
              </button>
            ))}
          </div>

          {activeSound && (
            <div className="pt-2 flex items-center gap-3">
              <Volume2 className="w-4 h-4 text-stone-400 shrink-0" />
              <input
                type="range"
                min="0.05"
                max="0.8"
                step="0.05"
                value={soundVolume}
                onChange={e => handleVolumeChange(Number(e.target.value))}
                className="w-full accent-amber-600 h-1.5 bg-stone-200 dark:bg-stone-800 rounded-lg cursor-pointer"
              />
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
