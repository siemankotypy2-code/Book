import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Sparkles, 
  BookMarked, 
  BookOpen, 
  Sliders, 
  Volume2, 
  VolumeX,
  BookmarkCheck,
  Award
} from 'lucide-react';
import { Chapter } from '../types/book';

interface Props {
  activeChapter: Chapter;
  currentChapterIndex: number;
  totalChapters: number;
  readingProgress: number; // 0 to 100 scroll percentage of active chapter
  onOpenToc: () => void;
  onOpenSettings: () => void;
  onOpenGlossary: () => void;
  onOpenQuiz: () => void;
  onOpenJournal: () => void;
  onOpenSearch: () => void;
  activeSound: string | null;
  onToggleSoundQuick: () => void;
  completedExercisesCount: number;
}

export const Navbar: React.FC<Props> = ({
  activeChapter,
  currentChapterIndex,
  totalChapters,
  readingProgress,
  onOpenToc,
  onOpenSettings,
  onOpenGlossary,
  onOpenQuiz,
  onOpenJournal,
  onOpenSearch,
  activeSound,
  onToggleSoundQuick,
  completedExercisesCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 transition-colors">
      
      {/* Top thin reading scroll bar */}
      <div className="w-full bg-stone-200/50 dark:bg-stone-800/50 h-[3px]">
        <div 
          className="bg-amber-600 h-full transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Menu trigger & Book Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenToc}
            className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-all font-medium text-xs shadow-xs"
            aria-label="Otwórz spis treści"
          >
            <Menu className="w-4 h-4 text-amber-700" />
            <span className="hidden sm:inline">Spis Treści</span>
          </button>

          <div className="hidden md:block">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
              Rozdział {activeChapter.chapterNumber} z {totalChapters}
            </span>
            <div className="font-serif text-xs font-bold text-stone-900 dark:text-stone-100 max-w-[240px] truncate">
              {activeChapter.title}
            </div>
          </div>
        </div>

        {/* Center: Search input quick button */}
        <button
          onClick={onOpenSearch}
          className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 bg-white/60 dark:bg-stone-900 text-stone-400 hover:text-stone-600 text-xs w-64 transition-all"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Szukaj w rozdziałach i studiach...</span>
          <kbd className="ml-auto text-[10px] font-mono bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-stone-500">
            Ctrl+K
          </kbd>
        </button>

        {/* Right: Tools & Modals buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Quick Sound button */}
          <button
            onClick={onToggleSoundQuick}
            className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
              activeSound 
                ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border-amber-300' 
                : 'border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:bg-stone-100'
            }`}
            title={activeSound ? 'Wyłącz tło dźwiękowe' : 'Włącz relaksujące tło skupienia (deszcz)'}
            aria-label="Dźwięk tła"
          >
            {activeSound ? <Volume2 className="w-4 h-4 text-amber-700 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden xl:inline">{activeSound ? 'Tło aktywne' : 'Dźwięk'}</span>
          </button>

          {/* Test psychologiczny */}
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900 hover:bg-amber-50 dark:hover:bg-amber-950/40 text-stone-700 dark:text-stone-300 transition-all font-medium text-xs"
            title="Autodiagnoza psychologiczna"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="hidden sm:inline">Test Profilu</span>
          </button>

          {/* Leksykon */}
          <button
            onClick={onOpenGlossary}
            className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900 hover:bg-stone-100 text-stone-700 dark:text-stone-300 transition-all font-medium text-xs"
            title="Leksykon pojęć i neuronauki"
          >
            <BookMarked className="w-4 h-4 text-amber-700" />
            <span className="hidden md:inline">Leksykon</span>
          </button>

          {/* Dziennik */}
          <button
            onClick={onOpenJournal}
            className="relative flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900 hover:bg-stone-100 text-stone-700 dark:text-stone-300 transition-all font-medium text-xs"
            title="Twój osobisty dziennik ćwiczeń"
          >
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span className="hidden sm:inline">Dziennik</span>
            {completedExercisesCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-amber-700 text-white font-bold text-[10px] flex items-center justify-center">
                {completedExercisesCount}
              </span>
            )}
          </button>

          {/* Personalizacja / Settings */}
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900 hover:bg-stone-100 text-stone-700 dark:text-stone-300 transition-all"
            title="Personalizacja czytnika (czcionka, motyw, dźwięk)"
            aria-label="Ustawienia czytnika"
          >
            <Sliders className="w-4 h-4 text-stone-600 dark:text-stone-400" />
          </button>

        </div>

      </div>
    </header>
  );
};
