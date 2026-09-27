import React, { useState } from 'react';
import { Chapter, BookSection } from '../types/book';
import { Book, Bookmark, CheckCircle2, ChevronRight, Clock, Sparkles, X, Layers, BookOpen } from 'lucide-react';

interface BookTableOfContentsProps {
  chapters: Chapter[];
  activeChapterNumber: number;
  activeSectionId: string;
  onSelectSection: (chapterNumber: number, sectionId: string) => void;
  isOpen: boolean;
  onClose: () => void;
  completedSections: string[];
}

export const BookTableOfContents: React.FC<BookTableOfContentsProps> = ({
  chapters,
  activeChapterNumber,
  activeSectionId,
  onSelectSection,
  isOpen,
  onClose,
  completedSections
}) => {
  const [selectedChapterTab, setSelectedChapterTab] = useState<number>(activeChapterNumber);
  const [volumeFilter, setVolumeFilter] = useState<'all' | 'tom1' | 'tom2' | 'tom3'>('all');

  if (!isOpen) return null;

  const currentTabChapter = chapters.find((c) => c.number === selectedChapterTab) || chapters[0];

  const filteredChapters = chapters.filter((c) => {
    if (volumeFilter === 'tom1') return c.number <= 5;
    if (volumeFilter === 'tom2') return c.number >= 6 && c.number <= 16;
    if (volumeFilter === 'tom3') return c.number >= 17;
    return true;
  });

  const categoryLabels: Record<BookSection['category'], { label: string; bg: string; text: string }> = {
    wstep: { label: 'Wprowadzenie', bg: 'bg-amber-100', text: 'text-amber-800' },
    teoria: { label: 'Teoria Psychologiczna', bg: 'bg-blue-100', text: 'text-blue-800' },
    'studium-przypadku': { label: 'Studium Przypadku', bg: 'bg-purple-100', text: 'text-purple-800' },
    neuronauka: { label: 'Neuronauka Decyzji', bg: 'bg-emerald-100', text: 'text-emerald-800' },
    cwiczenia: { label: 'Warsztat Samorozwojowy', bg: 'bg-rose-100', text: 'text-rose-800' },
    podsumowanie: { label: 'Podsumowanie & Most', bg: 'bg-stone-200', text: 'text-stone-800' }
  };

  const totalReadingMinutes = currentTabChapter.sections.reduce((acc, s) => acc + s.readingTimeMinutes, 0);

  return (
    <div className="fixed inset-0 z-50 flex font-sans">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-lg bg-[#FAF7F2] text-stone-900 h-full shadow-2xl flex flex-col border-l border-amber-900/15 z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-amber-900/10 bg-amber-50/60 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold block">
              {currentTabChapter.number <= 5
                ? 'Tom I • Architektura Umysłu'
                : currentTabChapter.number <= 16
                ? 'Tom II • Człowiek Wśród Ludzi'
                : 'Tom III • Autonomia & Samokształtowanie'}
            </span>
            <h3 className="font-serif text-lg font-bold text-stone-900 mt-0.5">
              Spis Treści i Nawigacja Książki
            </h3>
            <div className="flex items-center space-x-3 text-xs text-stone-500 font-mono mt-1">
              <span>{chapters.length} Rozdziałów (Tom I, II & III)</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                ~{chapters.reduce((acc, c) => acc + c.sections.reduce((sAcc, s) => sAcc + s.readingTimeMinutes, 0), 0)} min całości
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Volume Switcher Filter */}
        <div className="px-4 py-2 bg-stone-200/70 border-b border-stone-300 flex items-center space-x-2 text-[11px] font-mono overflow-x-auto">
          <span className="text-stone-500 font-bold uppercase tracking-wider shrink-0">Tom:</span>
          <button
            onClick={() => setVolumeFilter('all')}
            className={`px-2.5 py-1 rounded-md transition whitespace-nowrap ${volumeFilter === 'all' ? 'bg-amber-800 text-white font-bold' : 'bg-white/80 text-stone-700 hover:bg-white'}`}
          >
            Wszystkie ({chapters.length})
          </button>
          <button
            onClick={() => setVolumeFilter('tom1')}
            className={`px-2.5 py-1 rounded-md transition whitespace-nowrap ${volumeFilter === 'tom1' ? 'bg-amber-800 text-white font-bold' : 'bg-white/80 text-stone-700 hover:bg-white'}`}
          >
            Tom I (1-5)
          </button>
          <button
            onClick={() => setVolumeFilter('tom2')}
            className={`px-2.5 py-1 rounded-md transition whitespace-nowrap ${volumeFilter === 'tom2' ? 'bg-amber-800 text-white font-bold' : 'bg-white/80 text-stone-700 hover:bg-white'}`}
          >
            Tom II (6-16)
          </button>
          <button
            onClick={() => setVolumeFilter('tom3')}
            className={`px-2.5 py-1 rounded-md transition whitespace-nowrap ${volumeFilter === 'tom3' ? 'bg-amber-800 text-white font-bold' : 'bg-white/80 text-stone-700 hover:bg-white'}`}
          >
            Tom III (17-23)
          </button>
        </div>

        {/* Chapter Tabs Bar */}
        <div className="px-4 py-3 bg-stone-100 border-b border-stone-200 flex space-x-1.5 overflow-x-auto text-xs font-mono">
          {filteredChapters.map((ch) => {
            const isTabActive = ch.number === selectedChapterTab;
            return (
              <button
                key={ch.number}
                onClick={() => setSelectedChapterTab(ch.number)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition flex items-center gap-1.5 ${
                  isTabActive
                    ? 'bg-amber-800 text-white font-bold shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Rozdz. {ch.number}</span>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Title & Subtitle */}
        <div className="p-4 bg-amber-50/40 border-b border-amber-900/10">
          <span className="text-[10px] font-mono uppercase text-amber-800 font-bold block">
            Wybrany Rozdział {currentTabChapter.number}
          </span>
          <h4 className="font-serif font-bold text-base text-stone-900">
            {currentTabChapter.title}
          </h4>
          <p className="text-xs text-stone-600 font-serif italic mt-0.5">
            „{currentTabChapter.subtitle}”
          </p>
        </div>

        {/* Section List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2">
          {currentTabChapter.sections.map((section) => {
            const isActive = section.id === activeSectionId;
            const isCompleted = completedSections.includes(section.id);
            const cat = categoryLabels[section.category];

            return (
              <button
                key={section.id}
                onClick={() => {
                  onSelectSection(currentTabChapter.number, section.id);
                  onClose();
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start space-x-3 group ${
                  isActive
                    ? 'bg-amber-100/70 border-amber-400/80 shadow-xs ring-1 ring-amber-400'
                    : 'bg-white/80 hover:bg-stone-100/80 border-stone-200/80'
                }`}
              >
                <div className="pt-0.5 shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-stone-300 group-hover:border-amber-600 flex items-center justify-center font-mono text-[9px] font-bold text-stone-500">
                      {section.sectionNumber}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${cat.bg} ${cat.text} font-medium`}>
                      {cat.label}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400 flex items-center gap-0.5">
                      <Clock className="w-2.5 h-2.5" />
                      {section.readingTimeMinutes}m
                    </span>
                  </div>

                  <h4 className="font-serif font-semibold text-xs sm:text-sm text-stone-900 leading-snug group-hover:text-amber-900 transition">
                    {section.title}
                  </h4>
                  <div className="text-[11px] font-mono text-stone-400 mt-1">
                    Strona {section.pageNumber} z {currentTabChapter.totalEstimatedPages}
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-amber-800 group-hover:translate-x-0.5 transition shrink-0 self-center" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
