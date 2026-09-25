import React from 'react';
import { BOOK_MODULES, BOOK_METADATA } from '../data/bookContent';
import { Chapter } from '../types/book';
import { 
  X, 
  Brain, 
  Users, 
  ShieldAlert, 
  Scale, 
  HeartHandshake, 
  CheckCircle2, 
  Clock, 
  Bookmark, 
  BookOpen
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  activeChapterId: string;
  onSelectChapter: (id: string) => void;
  completedChapterIds: string[];
}

export const TableOfContents: React.FC<Props> = ({
  isOpen,
  onClose,
  activeChapterId,
  onSelectChapter,
  completedChapterIds
}) => {
  if (!isOpen) return null;

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4" />;
      case 'Scale': return <Scale className="w-4 h-4" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FAF7F2] dark:bg-stone-900 h-full shadow-2xl flex flex-col z-10 border-r border-stone-300 dark:border-stone-800">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Spis Treści & Moduły
            </span>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Anatomia Umysłu
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 transition-colors"
            aria-label="Zamknij spis treści"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Book progress bar */}
        <div className="px-6 py-3 bg-white/50 dark:bg-stone-950/50 border-b border-stone-200 dark:border-stone-800 shrink-0">
          <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
            <span className="text-stone-600 dark:text-stone-400">Postęp wdrożenia ćwiczeń:</span>
            <span className="text-amber-800 dark:text-amber-300 font-bold">
              {completedChapterIds.length} / {BOOK_METADATA.totalChapters} ({Math.round((completedChapterIds.length / BOOK_METADATA.totalChapters) * 100)}%)
            </span>
          </div>
          <div className="w-full bg-stone-200 dark:bg-stone-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-amber-700 h-full rounded-full transition-all duration-300"
              style={{ width: `${(completedChapterIds.length / BOOK_METADATA.totalChapters) * 100}%` }}
            />
          </div>
        </div>

        {/* Modules & Chapters List */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {BOOK_MODULES.map(module => (
            <div key={module.id} className="space-y-2.5">
              {/* Module header */}
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-xs uppercase tracking-wider pb-1 border-b border-amber-200/50 dark:border-stone-800">
                <span className="p-1 rounded-md bg-amber-100 dark:bg-amber-950">
                  {getModuleIcon(module.iconName)}
                </span>
                <span>Moduł {module.romanNumeral}: {module.title}</span>
              </div>

              {/* Chapters */}
              <div className="space-y-1.5 pl-2">
                {module.chapters.map(ch => {
                  const isActive = ch.id === activeChapterId;
                  const isCompleted = completedChapterIds.includes(ch.id);

                  return (
                    <button
                      key={ch.id}
                      onClick={() => {
                        onSelectChapter(ch.id);
                        onClose();
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 group ${
                        isActive
                          ? 'bg-amber-700 text-white font-medium shadow-sm'
                          : 'hover:bg-stone-200/60 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200'
                      }`}
                    >
                      <span className={`text-xs font-serif font-bold mt-0.5 shrink-0 ${
                        isActive ? 'text-amber-100' : 'text-stone-400 group-hover:text-amber-700'
                      }`}>
                        {ch.chapterNumber}.
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-semibold truncate leading-tight">
                          {ch.title}
                        </div>
                        <div className={`text-[11px] truncate mt-0.5 flex items-center gap-2 ${
                          isActive ? 'text-amber-200' : 'text-stone-500'
                        }`}>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {ch.readingTimeMinutes} min
                          </span>
                          <span>•</span>
                          <span className="truncate">{ch.caseStudy.title}</span>
                        </div>
                      </div>

                      {isCompleted && (
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isActive ? 'text-amber-200' : 'text-emerald-600 dark:text-emerald-400'
                        }`} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
