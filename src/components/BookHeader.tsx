import React, { useState, useEffect } from 'react';
import { ReaderTheme, FontSize } from '../types/book';
import { ambientSound } from '../utils/audioAmbience';
import { List, Volume2, VolumeX, Moon, Sun, Type, Bookmark, BookmarkCheck, CloudRain, Flame, BookOpen, Music } from 'lucide-react';

interface BookHeaderProps {
  theme: ReaderTheme;
  setTheme: (theme: ReaderTheme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  onOpenToc: () => void;
  currentPage: number;
  totalPages: number;
  currentSectionTitle: string;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  textToNarrate: string;
}

export const BookHeader: React.FC<BookHeaderProps> = ({
  theme,
  setTheme,
  fontSize,
  setFontSize,
  onOpenToc,
  currentPage,
  totalPages,
  currentSectionTitle,
  isBookmarked,
  onToggleBookmark,
  textToNarrate
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechSynthesisSupported, setSpeechSynthesisSupported] = useState(false);
  const [activeAmbience, setActiveAmbience] = useState<'rain' | 'library' | 'campfire' | null>(null);
  const [showAmbienceMenu, setShowAmbienceMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSynthesisSupported(true);
    }
  }, []);

  const handleToggleAudio = () => {
    if (!speechSynthesisSupported) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToNarrate);
      utterance.lang = 'pl-PL';
      utterance.rate = 1.0;

      // Try to find Polish voice
      const voices = window.speechSynthesis.getVoices();
      const polishVoice = voices.find((v) => v.lang.startsWith('pl'));
      if (polishVoice) {
        utterance.voice = polishVoice;
      }

      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleSelectAmbience = (type: 'rain' | 'library' | 'campfire') => {
    if (activeAmbience === type) {
      ambientSound.stop();
      setActiveAmbience(null);
    } else {
      ambientSound.play(type, 0.25);
      setActiveAmbience(type);
    }
    setShowAmbienceMenu(false);
  };

  const handleStopAmbience = () => {
    ambientSound.stop();
    setActiveAmbience(null);
    setShowAmbienceMenu(false);
  };

  // Stop speech if section changes or unmounts
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [textToNarrate]);

  const progressPercent = Math.round((currentPage / totalPages) * 100);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md transition-colors border-b border-stone-200/80 bg-white/90">
      {/* Top progress indicator bar */}
      <div className="w-full h-1 bg-stone-200/50 overflow-hidden">
        <div
          className="h-full bg-amber-700 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 font-sans">
        {/* Left: TOC button and Title */}
        <div className="flex items-center space-x-3 min-w-0">
          <button
            onClick={onOpenToc}
            className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200/80 transition flex items-center space-x-1.5 text-xs font-mono font-medium shrink-0"
            title="Otwórz spis treści"
          >
            <List className="w-4 h-4 text-amber-700" />
            <span className="hidden sm:inline">Spis Treści</span>
          </button>

          <div className="min-w-0">
            <h1 className="font-serif font-bold text-sm sm:text-base text-stone-900 truncate">
              Anatomia Umysłu
            </h1>
            <p className="text-[11px] text-stone-500 font-mono truncate hidden sm:block">
              {currentSectionTitle}
            </p>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
          {/* Ambient Sound Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowAmbienceMenu(!showAmbienceMenu)}
              className={`p-2 rounded-xl border transition flex items-center space-x-1 text-xs font-mono ${
                activeAmbience
                  ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 border-stone-200'
              }`}
              title="Dźwięki tła do skupienia"
            >
              <Music className="w-4 h-4 text-amber-700" />
              <span className="hidden xl:inline">{activeAmbience ? activeAmbience : 'Dźwięki Tła'}</span>
            </button>

            {showAmbienceMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-stone-200 p-2 z-50 text-xs font-sans">
                <div className="text-[10px] font-mono uppercase text-stone-400 px-2 py-1">
                  Syntetyzator Tła
                </div>
                <button
                  onClick={() => handleSelectAmbience('rain')}
                  className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center space-x-2 ${
                    activeAmbience === 'rain' ? 'bg-amber-100 font-bold text-amber-900' : 'hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  <CloudRain className="w-3.5 h-3.5 text-blue-500" />
                  <span>Spokojny Deszcz</span>
                </button>
                <button
                  onClick={() => handleSelectAmbience('library')}
                  className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center space-x-2 ${
                    activeAmbience === 'library' ? 'bg-amber-100 font-bold text-amber-900' : 'hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Cicha Biblioteka</span>
                </button>
                <button
                  onClick={() => handleSelectAmbience('campfire')}
                  className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center space-x-2 ${
                    activeAmbience === 'campfire' ? 'bg-amber-100 font-bold text-amber-900' : 'hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-orange-500" />
                  <span>Kominek</span>
                </button>
                {activeAmbience && (
                  <button
                    onClick={handleStopAmbience}
                    className="w-full text-left px-2.5 py-2 rounded-lg text-rose-600 hover:bg-rose-50 font-medium border-t border-stone-100 mt-1"
                  >
                    Wyłącz dźwięki
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Audiobook TTS */}
          {speechSynthesisSupported && (
            <button
              onClick={handleToggleAudio}
              className={`p-2 rounded-xl border transition flex items-center space-x-1 text-xs font-mono ${
                isPlayingAudio
                  ? 'bg-rose-100 text-rose-800 border-rose-300 animate-pulse'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 border-stone-200'
              }`}
              title={isPlayingAudio ? 'Zatrzymaj czytanie na głos' : 'Czytaj ten rozdział na głos (Audiobook)'}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4 text-rose-700" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden lg:inline">{isPlayingAudio ? 'Zatrzymaj' : 'Lektor'}</span>
            </button>
          )}

          {/* Bookmark Button */}
          <button
            onClick={onToggleBookmark}
            className={`p-2 rounded-xl border transition ${
              isBookmarked
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 border-stone-200'
            }`}
            title={isBookmarked ? 'Usuń zakładkę' : 'Dodaj zakładkę'}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-700" /> : <Bookmark className="w-4 h-4" />}
          </button>

          {/* Font Size Selector */}
          <div className="flex items-center rounded-xl border border-stone-200 bg-stone-50 p-0.5">
            <button
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 text-xs font-mono rounded-lg transition ${
                fontSize === 'sm' ? 'bg-white text-stone-900 font-bold shadow-xs' : 'text-stone-500 hover:text-stone-800'
              }`}
              title="Mniejsza czcionka"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('base')}
              className={`px-2 py-1 text-xs font-mono rounded-lg transition ${
                fontSize === 'base' ? 'bg-white text-stone-900 font-bold shadow-xs' : 'text-stone-500 hover:text-stone-800'
              }`}
              title="Standardowa czcionka"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 text-xs font-mono rounded-lg transition ${
                fontSize === 'lg' ? 'bg-white text-stone-900 font-bold shadow-xs' : 'text-stone-500 hover:text-stone-800'
              }`}
              title="Większa czcionka"
            >
              A+
            </button>
          </div>

          {/* Theme Selector */}
          <div className="flex items-center rounded-xl border border-stone-200 bg-stone-50 p-0.5">
            <button
              onClick={() => setTheme('parchment')}
              className={`px-2 py-1 text-xs font-mono rounded-lg transition ${
                theme === 'parchment' ? 'bg-[#F4EFE6] text-amber-950 font-bold shadow-xs border border-amber-200' : 'text-stone-500 hover:text-stone-800'
              }`}
              title="Tryb Pergamin (Klasyczny książkowy)"
            >
              Krem
            </button>
            <button
              onClick={() => setTheme('sepia')}
              className={`px-2 py-1 text-xs font-mono rounded-lg transition ${
                theme === 'sepia' ? 'bg-[#EAE0D0] text-amber-950 font-bold shadow-xs border border-amber-300' : 'text-stone-500 hover:text-stone-800'
              }`}
              title="Tryb Sepia"
            >
              Sepia
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`px-2 py-1 text-xs font-mono rounded-lg transition ${
                theme === 'dark' ? 'bg-stone-900 text-stone-100 font-bold shadow-xs' : 'text-stone-500 hover:text-stone-800'
              }`}
              title="Tryb Nocny (Ciemny)"
            >
              Noc
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
