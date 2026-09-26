/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { allChapters, chapterOne } from './data/chaptersIndex';
import { ReaderTheme, FontSize, BookSection, Chapter } from './types/book';
import { BookHeader } from './components/BookHeader';
import { BookTableOfContents } from './components/BookTableOfContents';
import { ReaderView } from './components/ReaderView';
import { BookOpen, Compass, Award, Brain, Sparkles, Feather, Bookmark, CheckCircle, Search, ArrowRight, Layers } from 'lucide-react';

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

  const [activeChapterNumber, setActiveChapterNumber] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('anatomia_umyslu_active_chapter');
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  });

  const currentChapter: Chapter = allChapters.find((c) => c.number === activeChapterNumber) || allChapters[0];

  const [activeSectionId, setActiveSectionId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('anatomia_umyslu_active_section');
      return saved || currentChapter.sections[0].id;
    } catch {
      return currentChapter.sections[0].id;
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
      localStorage.setItem('anatomia_umyslu_active_chapter', activeChapterNumber.toString());
    } catch (e) {
      console.error(e);
    }
  }, [activeChapterNumber]);

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

  const activeIndex = currentChapter.sections.findIndex((s) => s.id === activeSectionId);
  const currentSection: BookSection = currentChapter.sections[activeIndex >= 0 ? activeIndex : 0];

  const handleNavigateSection = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (activeIndex > 0) {
        setActiveSectionId(currentChapter.sections[activeIndex - 1].id);
      } else if (activeChapterNumber > 1) {
        const prevChapter = allChapters.find((c) => c.number === activeChapterNumber - 1);
        if (prevChapter) {
          setActiveChapterNumber(prevChapter.number);
          setActiveSectionId(prevChapter.sections[prevChapter.sections.length - 1].id);
        }
      }
    } else if (direction === 'next') {
      if (activeIndex < currentChapter.sections.length - 1) {
        setActiveSectionId(currentChapter.sections[activeIndex + 1].id);
      } else if (activeChapterNumber < allChapters.length) {
        const nextChapter = allChapters.find((c) => c.number === activeChapterNumber + 1);
        if (nextChapter) {
          setActiveChapterNumber(nextChapter.number);
          setActiveSectionId(nextChapter.sections[0].id);
        }
      }
    }
  };

  const handleSelectSectionFromToc = (chapterNumber: number, sectionId: string) => {
    setActiveChapterNumber(chapterNumber);
    setActiveSectionId(sectionId);
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

  const hasPrev = activeIndex > 0 || activeChapterNumber > 1;
  const hasNext = activeIndex < currentChapter.sections.length - 1 || activeChapterNumber < allChapters.length;

  // Prepare text for speech narration
  const narrationText = `${currentSection.title}. ${currentSection.paragraphs.slice(0, 3).join(' ')}`;

  const totalSectionsCount = allChapters.reduce((acc, c) => acc + c.sections.length, 0);

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
        totalPages={currentChapter.totalEstimatedPages}
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
                Dzieło Literacko-Naukowe • Tom I: Fundamenty Umysłu
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
              Część I: Architektura Umysłu — Podwójny System, Emocje, Uwaga, Percepcja i Pamięć
            </p>

            <p className="text-sm sm:text-base text-stone-300 font-sans mt-4 max-w-2xl leading-relaxed">
              Książka stworzona w bezpośrednim kontakcie z czytelnikiem, z głęboką empatią dla biologicznych ograniczeń mózgu. Zawiera wyczerpujące studia przypadków z życia codziennego, wiwisekcje neurobiologiczne, analizy psychologiczne oraz interaktywny zestaw eksperymentów i symulatorów.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-stone-400 block uppercase">Zakres Części I</span>
                <span className="text-lg font-bold text-amber-300 font-mono">5 Rozdziałów</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-stone-400 block uppercase">Łączna Objętość</span>
                <span className="text-lg font-bold text-amber-300 font-mono">~200 stron</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-stone-400 block uppercase">Interaktywne Narzędzia</span>
                <span className="text-lg font-bold text-amber-300 font-mono">11 modułów</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-stone-400 block uppercase">Studia Przypadków</span>
                <span className="text-lg font-bold text-amber-300 font-mono">8 analiz A–J</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Button to show cover if hidden + Chapter Navigator Ribbon */}
      <div className="max-w-4xl mx-auto px-4 pt-4 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-stone-500">
          <button
            onClick={() => setShowCoverHero(true)}
            className="hover:text-amber-800 transition flex items-center space-x-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Pokaż metrykę książki i przedmowę ogólną</span>
          </button>

          <span className="text-[11px] opacity-75">
            Zapisano postęp: {completedSections.length} z {totalSectionsCount} sekcji
          </span>
        </div>

        {/* Chapter Quick Switch Bar */}
        <div className="p-2.5 rounded-2xl bg-stone-200/70 dark:bg-stone-800/80 border border-stone-300/80 dark:border-stone-700 flex items-center space-x-2 overflow-x-auto font-sans text-xs">
          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold px-2 shrink-0 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            Część I:
          </span>
          {allChapters.map((ch) => {
            const isCurrent = ch.number === activeChapterNumber;
            return (
              <button
                key={ch.number}
                onClick={() => {
                  setActiveChapterNumber(ch.number);
                  setActiveSectionId(ch.sections[0].id);
                }}
                className={`px-3 py-1.5 rounded-xl transition whitespace-nowrap text-xs font-semibold ${
                  isCurrent
                    ? 'bg-amber-800 text-white shadow-sm font-bold'
                    : 'bg-white/80 dark:bg-stone-700 text-stone-800 dark:text-stone-200 hover:bg-white'
                }`}
              >
                Rozdział {ch.number}: {ch.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Table of Contents Drawer */}
      <BookTableOfContents
        chapters={allChapters}
        activeChapterNumber={activeChapterNumber}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSectionFromToc}
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        completedSections={completedSections}
      />

      {/* Editorial Reader Canvas */}
      <ReaderView
        chapter={currentChapter}
        activeSection={currentSection}
        onNavigateSection={handleNavigateSection}
        hasPrev={hasPrev}
        hasNext={hasNext}
        theme={theme}
        fontSize={fontSize}
        completedSections={completedSections}
        onToggleCompleteSection={handleToggleCompleteSection}
        isBookmarked={bookmarks.includes(activeSectionId)}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Book Footer */}
      <footer className="border-t border-stone-300/60 py-8 px-4 text-center font-sans text-xs text-stone-500">
        <p className="font-serif italic text-sm text-stone-700 dark:text-stone-300 mb-1">
          „Anatomia Umysłu: Psychologia, Neuronauka i Wpływ” • Tom I: Fundamenty Umysłu
        </p>
        <p>
          Wszystkie badania i przykłady ugruntowane w neuronauce poznawczej, afektywnej oraz psychologii ewolucyjnej.
        </p>
      </footer>
    </div>
  );
}
