import React, { useState, useEffect, useRef } from 'react';
import { searchBook } from '../data/bookContent';
import { Chapter } from '../types/book';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (chapterId: string) => void;
}

export const SearchModal: React.FC<Props> = ({ isOpen, onClose, onSelectChapter }) => {
  const [query, setQuery] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = searchBook(query);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] dark:bg-stone-900 w-full max-w-2xl rounded-3xl border border-stone-300 dark:border-stone-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center gap-3 shrink-0 bg-white dark:bg-stone-950">
          <Search className="w-5 h-5 text-amber-700 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Wyszukaj pojęcie, nazwisko, studium przypadku (np. dopamina, Marta, Asch, gaslighting)..."
            className="w-full text-sm sm:text-base bg-transparent text-stone-900 dark:text-stone-100 focus:outline-none placeholder:text-stone-400"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-full hover:bg-stone-100 text-stone-400"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2.5 py-1 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-500 hover:bg-stone-100"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="overflow-y-auto p-4 space-y-2 flex-1">
          {query.trim().length >= 2 ? (
            results.length > 0 ? (
              results.map((res, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onSelectChapter(res.chapter.id);
                    onClose();
                  }}
                  className="w-full text-left p-4 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-amber-600 bg-white dark:bg-stone-950 hover:bg-amber-50/40 dark:hover:bg-amber-950/20 transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                        {res.matchedField}
                      </span>
                      <span className="text-xs font-serif font-bold text-stone-900 dark:text-stone-100">
                        Rozdział {res.chapter.chapterNumber}: {res.chapter.title}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                      {res.snippet}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-700 shrink-0 mt-1 transition-colors" />
                </button>
              ))
            ) : (
              <div className="text-center py-12 text-stone-500 text-sm">
                Brak wyników dla zapytania „{query}”.
              </div>
            )
          ) : (
            <div className="text-center py-10 text-stone-400 text-xs">
              Wpisz przynajmniej 2 litery, aby przeszukać całą treść książki.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-stone-100 dark:bg-stone-950/80 border-t border-stone-200 dark:border-stone-800 text-[11px] text-stone-500 text-center shrink-0">
          Wyszukiwanie obejmuje teorie, scenariusze, analizy psychologiczne, mechanizmy neuronaukowe i ćwiczenia.
        </div>

      </div>
    </div>
  );
};
