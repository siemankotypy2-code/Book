/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { chapterOne } from './data/chapterOneData';
import { ReaderTheme, FontSize, BookSection } from './types/book';
import { BookHeader } from './components/BookHeader';
import { BookTableOfContents } from './components/BookTableOfContents';
import { ReaderView } from './components/ReaderView';
import { BookOpen, Compass, Award, Brain, Sparkles, Feather, Bookmark, CheckCircle, Search, ArrowRight } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ReaderTheme>(() => {
    try {
      const saved = localStorage.getItem('anatomia_umyslu_theme');
      return (saved as ReaderTheme) || 'parchment';
    } catch {
      return 'parchment';
    }
  });

  const [fontSize, setFontSize] = useState<FontSize>(() => {
    try {
      const saved = localStorage.getItem('anatomia_umyslu_fontsize');
      return (saved as FontSize) || 'base';
    } catch {
      return 'base';
    }
  });

  const [activeSectionId, setActiveSectionId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('anatomia_umyslu_active_section');
      return saved || chapterOne.sections[0].id;
    } catch {
      return chapterOne.sections[0].id;
    }
  });

  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('anatomia_umyslu_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [completedSections, setCompletedSections] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('anatomia_umyslu_completed_sections');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showCoverHero, setShowCoverHero] = useState<boolean>(false);

  // Sync settings with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('anatomia_umyslu_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('anatomia_umyslu_fontsize', fontSize);
    } catch (e) {
      console.error(e);
    }
  }, [fontSize]);

  useEffect(() => {
    try {
      localStorage.setItem('anatomia_umyslu_active_section', activeSectionId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      console.error(e);
    }
  }, [activeSectionId]);

  useEffect(() => {
    try {
      localStorage.setItem('anatomia_umyslu_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem('anatomia_umyslu_completed_sections', JSON.stringify(completedSections));
    } catch (e) {
      console.error(e);
    }
  }, [completedSections]);

  const activeIndex = chapterOne.sections.findIndex((s) => s.id === activeSectionId);
  const currentSection: BookSection = chapterOne.sections[activeIndex >= 0 ? activeIndex : 0];

  const handleNavigateSection = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && activeIndex > 0) {
      setActiveSectionId(chapterOne.sections[activeIndex - 1].id);
    } else if (direction === 'next' && activeIndex < chapterOne.sections.length - 1) {
      setActiveSectionId(chapterOne.sections[activeIndex + 1].id);
    }
  };

  const handleToggleBookmark = () => {
    setBookmarks((prev) =>
      prev.includes(activeSectionId)
        ? prev.filter((id) => id !== activeSectionId)
        : [...prev, activeSectionId]
    );
  };

  const handleToggleCompleteSection = (sectionId: string) => {
    setCompletedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Prepare text for speech narration
  const narrationText = `${currentSection.title}. ${currentSection.paragraphs.slice(0, 3).join(' ')}`;

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#18181B] text-[#E4E4E7]' : theme === 'sepia' ? 'bg-[#F4ECD8] text-[#3E2F20]' : 'bg-[#FAF7F2] text-[#23201D]'}`}>
      {/* Sticky Reader Navigation Header */}
      <BookHeader
        theme={theme}
        setTheme={setTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
        onOpenToc={() => setIsTocOpen(true)}
        currentPage={currentSection.pageNumber}
        totalPages={chapterOne.totalEstimatedPages}
        currentSectionTitle={currentSection.title}
        isBookmarked={bookmarks.includes(activeSectionId)}
        onToggleBookmark={handleToggleBookmark}
        textToNarrate={narrationText}
      />

      {/* Book Cover Hero Banner / Toggle */}
      {showCoverHero && (
        <section className="bg-gradient-to-b from-stone-900 via-stone-900 to-amber-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-amber-900/40 font-sans">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Feather className="w-3.5 h-3.5" />
                Dzieło Literacko-Naukowe • Tom I
              </span>
              <button
                onClick={() => setShowCoverHero(false)}
                className="text-xs text-stone-400 hover:text-white font-mono underline underline-offset-4"
              >
                Ukryj okładkę
              </button>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-amber-50 leading-tight">
              Anatomia Umysłu i Sztuka Wpływu
            </h1>
            <p className="font-serif text-lg sm:text-2xl text-amber-200/90 mt-2 italic">
              Praktyczny Przewodnik po Ludzkich Zachowaniach, Neuronauce Decyzji i Ochronie Przed Manipulacją
            </p>

            <p className="text-sm sm:text-base text-stone-300 font-sans mt-4 max-w-2xl leading-relaxed">
              Książka stworzona w bezpośrednim kontakcie z czytelnikiem, z głęboką empatią dla biologicznych ograniczeń mózgu. Zawiera wyczerpujące studia przypadków z życia codziennego, wiwisekcje neurobiologiczne, analizy psychologiczne oraz interaktywny zeszyt ćwiczeń samorozwojowych.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-stone-400 block uppercase">Objętość Tomu I</span>
                <span className="text-lg font-bold text-amber-300 font-mono">~30 stron</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-stone-400 block uppercase">Studia Przypadków</span>
                <span className="text-lg font-bold text-amber-300 font-mono">4 szczegółowe</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-stone-400 block uppercase">Analizy Neuro</span>
                <span className="text-lg font-bold text-amber-300 font-mono">100% zintegrowane</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-stone-400 block uppercase">Ćwiczenia Praktyczne</span>
                <span className="text-lg font-bold text-amber-300 font-mono">4 interaktywne</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Button to show cover if hidden */}
      {!showCoverHero && (
        <div className="max-w-4xl mx-auto px-4 pt-4 flex items-center justify-between text-xs font-mono text-stone-500">
          <button
            onClick={() => setShowCoverHero(true)}
            className="hover:text-amber-800 transition flex items-center space-x-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Pokaż metrykę książki i przedmowę ogólną</span>
          </button>

          <span className="text-[11px] opacity-75">
            Zapisano postęp: {completedSections.length} z {chapterOne.sections.length} sekcji
          </span>
        </div>
      )}

      {/* Table of Contents Drawer */}
      <BookTableOfContents
        chapter={chapterOne}
        activeSectionId={activeSectionId}
        onSelectSection={(id) => setActiveSectionId(id)}
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        completedSections={completedSections}
      />

      {/* Editorial Reader Canvas */}
      <ReaderView
        chapter={chapterOne}
        activeSection={currentSection}
        onNavigateSection={handleNavigateSection}
        hasPrev={activeIndex > 0}
        hasNext={activeIndex < chapterOne.sections.length - 1}
        theme={theme}
        fontSize={fontSize}
        completedSections={completedSections}
        onToggleCompleteSection={handleToggleCompleteSection}
        isBookmarked={bookmarks.includes(activeSectionId)}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Book Footer */}
      <footer className="border-t border-stone-300/60 py-8 px-4 text-center font-sans text-xs text-stone-500">
        <p className="font-serif italic text-sm text-stone-700 mb-1">
          „Anatomia Umysłu: Psychologia, Neuronauka i Wpływ”
        </p>
        <p>
          Wszystkie studia przypadków oparte na badaniach psychologii poznawczej, behawioralnej i neurobiologii afektywnej.
        </p>
      </footer>
    </div>
  );
}
