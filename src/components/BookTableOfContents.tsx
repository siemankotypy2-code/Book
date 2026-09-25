import React from 'react';
import { Chapter, BookSection } from '../types/book';
import { Book, Bookmark, CheckCircle2, ChevronRight, Clock, Sparkles, X, Layers } from 'lucide-react';

interface BookTableOfContentsProps {
  chapter: Chapter;
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
  isOpen: boolean;
  onClose: () => void;
  completedSections: string[];
}

export const BookTableOfContents: React.FC<BookTableOfContentsProps> = ({
  chapter,
  activeSectionId,
  onSelectSection,
  isOpen,
  onClose,
  completedSections
}) => {
  if (!isOpen) return null;

  const categoryLabels: Record<BookSection['category'], { label: string; bg: string; text: string }> = {
    wstep: { label: 'Wprowadzenie', bg: 'bg-amber-100', text: 'text-amber-800' },
    teoria: { label: 'Teoria Psychologiczna', bg: 'bg-blue-100', text: 'text-blue-800' },
    'studium-przypadku': { label: 'Studium Przypadku', bg: 'bg-purple-100', text: 'text-purple-800' },
    neuronauka: { label: 'Neuronauka Decyzji', bg: 'bg-emerald-100', text: 'text-emerald-800' },
    cwiczenia: { label: 'Warsztat Samorozwojowy', bg: 'bg-rose-100', text: 'text-rose-800' },
    podsumowanie: { label: 'Podsumowanie & Most', bg: 'bg-stone-200', text: 'text-stone-800' }
  };

  const totalReadingMinutes = chapter.sections.reduce((acc, s) => acc + s.readingTimeMinutes, 0);

  return (
    <div className="fixed inset-0 z-50 flex font-sans">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-md bg-[#FAF7F2] text-stone-900 h-full shadow-2xl flex flex-col border-l border-amber-900/15 z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-amber-900/10 bg-amber-50/60 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold block">
              Spis Treści i Nawigacja
            </span>
            <h3 className="font-serif text-lg font-bold text-stone-900 mt-0.5">
              Rozdział {chapter.number}: Architektura Umysłu
            </h3>
            <div className="flex items-center space-x-3 text-xs text-stone-500 font-mono mt-1">
              <span>{chapter.sections.length} Modułów</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                ~{totalReadingMinutes} min lektury
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

        {/* Section List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2">
          {chapter.sections.map((section) => {
            const isActive = section.id === activeSectionId;
            const isCompleted = completedSections.includes(section.id);
            const cat = categoryLabels[section.category];

            return (
              <button
                key={section.id}
                onClick={() => {
                  onSelectSection(section.id);
                  onClose();
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start space-x-3 group ${
                  isActive
                    ? 'bg-amber-100/70 border-amber-400/80 shadow-xs'
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
                    Strona {section.pageNumber} z {chapter.totalEstimatedPages}
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-amber-800 group-hover:translate-x-0.5 transition shrink-0 self-center" />
              </button>
            );
          })}

          {/* Roadmap of Future Chapters */}
          <div className="mt-6 pt-5 border-t border-stone-200">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold block mb-3">
              Plan Kolejnych Rozdziałów Książki
            </span>

            <div className="space-y-2 opacity-70">
              <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-xs">
                <span className="font-bold block text-stone-800">Rozdział 2: Anatomia Ciemnej Triady</span>
                <span className="text-stone-600">Narcyzm, Makiawelizm i Psychopatia w życiu codziennym</span>
              </div>
              <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-xs">
                <span className="font-bold block text-stone-800">Rozdział 3: Społeczny Mózg i Konformizm</span>
                <span className="text-stone-600">Eksperymenty Ascha, posłuszeństwo i presja plemienna</span>
              </div>
              <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-xs">
                <span className="font-bold block text-stone-800">Rozdział 4: Perswazja Etyczna & Nudge Theory</span>
                <span className="text-stone-600">Architektura wyboru wg Thaler & Sunstein</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
