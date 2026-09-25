import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { GlossaryTerm } from '../types/book';
import { X, Search, BookMarked, Filter } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');

  if (!isOpen) return null;

  const categories = ['Wszystkie', 'Neuronauka', 'Psychologia Poznawcza', 'Psychologia Społeczna', 'Manipulacja i Wpływ'];

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shortDef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.detailedExplanation.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCat = selectedCategory === 'Wszystkie' || item.category === selectedCategory;

    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] dark:bg-stone-900 w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl border border-stone-300 dark:border-stone-800 shadow-2xl flex flex-col relative">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Leksykon Neuronauki i Psychologii
              </h2>
              <p className="text-xs text-stone-500">
                Słownik pojęć, struktur anatomicznych mózgu i mechanizmów behawioralnych
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 transition-colors"
            aria-label="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Categories bar */}
        <div className="p-6 pb-4 border-b border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-950/50 space-y-3 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Szukaj pojęcia (np. amygdala, dopamina, gaslighting)..."
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-600/30"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 items-center">
            <Filter className="w-3.5 h-3.5 text-stone-400 mr-1" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] px-3 py-1 rounded-full font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-800 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List of Terms */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-stone-950 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-2 shadow-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                    {item.term}
                  </h3>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 shrink-0">
                    {item.category}
                  </span>
                </div>

                <p className="text-xs font-medium text-amber-800 dark:text-amber-400">
                  {item.shortDef}
                </p>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {item.detailedExplanation}
                </p>

                <div className="pt-2 border-t border-stone-100 dark:border-stone-900 text-xs">
                  <span className="font-semibold text-stone-700 dark:text-stone-300">Przykład z życia codziennego: </span>
                  <span className="text-stone-600 dark:text-stone-400 italic">„{item.everydayExample}”</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-stone-500 text-sm">
              Nie znaleziono pojęć pasujących do „{searchTerm}”.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
