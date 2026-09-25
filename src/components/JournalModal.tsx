import React, { useState, useEffect } from 'react';
import { UserExerciseResponse } from '../types/book';
import { getAllChapters } from '../data/bookContent';
import { X, BookOpen, Download, Trash2, CheckCircle2, Calendar } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToChapter: (chapterId: string) => void;
}

export const JournalModal: React.FC<Props> = ({ isOpen, onClose, onNavigateToChapter }) => {
  const [completedEntries, setCompletedEntries] = useState<{
    chapterTitle: string;
    chapterId: string;
    exerciseTitle: string;
    data: UserExerciseResponse;
  }[]>([]);

  useEffect(() => {
    if (!isOpen) return;
    const chapters = getAllChapters();
    const entries: {
      chapterTitle: string;
      chapterId: string;
      exerciseTitle: string;
      data: UserExerciseResponse;
    }[] = [];

    chapters.forEach(ch => {
      const key = `exercise_${ch.id}_${ch.exercise.id}`;
      try {
        const item = localStorage.getItem(key);
        if (item) {
          const parsed: UserExerciseResponse = JSON.parse(item);
          entries.push({
            chapterTitle: ch.title,
            chapterId: ch.id,
            exerciseTitle: ch.exercise.title,
            data: parsed
          });
        }
      } catch {
        // ignore
      }
    });

    setCompletedEntries(entries);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExportText = () => {
    let content = `DZIENNIK ROZWOJU OSOBISTEGO - ANATOMIA UMYSŁU\n`;
    content += `Data wygenerowania: ${new Date().toLocaleDateString('pl-PL')}\n`;
    content += `========================================================\n\n`;

    completedEntries.forEach((entry, i) => {
      content += `[${i + 1}] ROZDZIAŁ: ${entry.chapterTitle}\n`;
      content += `Ćwiczenie: ${entry.exerciseTitle}\n`;
      content += `Data ukończenia: ${new Date(entry.data.completedAt).toLocaleString('pl-PL')}\n\n`;
      
      content += `Odpowiedzi na kroki:\n`;
      Object.entries(entry.data.answers).forEach(([key, val]) => {
        content += `- ${key}: ${Array.isArray(val) ? val.join(', ') : val}\n`;
      });

      if (entry.data.reflection) {
        content += `\nGłęboka Refleksja:\n${entry.data.reflection}\n`;
      }
      content += `\n--------------------------------------------------------\n\n`;
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `moj-dziennik-anatomia-umyslu-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] dark:bg-stone-900 w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl border border-stone-300 dark:border-stone-800 shadow-2xl flex flex-col relative">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Mój Osobisty Dziennik Refleksji
              </h2>
              <p className="text-xs text-stone-500">
                Zapisane ćwiczenia, wglądy i plany działań ({completedEntries.length} z 10 rozdziałów)
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

        {/* Action toolbar */}
        {completedEntries.length > 0 && (
          <div className="px-6 py-3 bg-white/60 dark:bg-stone-950/60 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between shrink-0">
            <span className="text-xs text-stone-600 dark:text-stone-400 font-medium">
              Wszystkie wpisy są bezpiecznie zapisane w pamięci Twojej przeglądarki.
            </span>
            <button
              onClick={handleExportText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-800 hover:bg-amber-900 text-white text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Eksportuj notatnik (.txt)
            </button>
          </div>
        )}

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {completedEntries.length > 0 ? (
            completedEntries.map((entry, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-stone-950 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-4 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-100 dark:border-stone-900">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
                      {entry.chapterTitle}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                      {entry.exerciseTitle}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px] text-stone-400">
                      <Calendar className="w-3 h-3" />
                      {new Date(entry.data.completedAt).toLocaleDateString('pl-PL')}
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateToChapter(entry.chapterId);
                      }}
                      className="text-xs text-amber-700 hover:text-amber-800 font-semibold underline"
                    >
                      Przejdź do rozdziału
                    </button>
                  </div>
                </div>

                {/* Answers summary */}
                <div className="space-y-2 text-xs">
                  {Object.entries(entry.data.answers).map(([key, val], aIdx) => (
                    <div key={aIdx} className="bg-stone-50 dark:bg-stone-900/60 p-3 rounded-lg">
                      <span className="font-semibold text-stone-700 dark:text-stone-300 block mb-0.5">
                        Krok {key.replace('step_', '')}:
                      </span>
                      <span className="text-stone-600 dark:text-stone-400">
                        {Array.isArray(val) ? val.join(', ') : String(val)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Reflection */}
                {entry.data.reflection && (
                  <div className="p-3.5 bg-amber-50/50 dark:bg-amber-950/20 border-l-2 border-amber-700 rounded-r-lg text-xs">
                    <span className="font-semibold text-amber-900 dark:text-amber-300 block mb-1">
                      Twoja osobista refleksja:
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 italic whitespace-pre-wrap leading-relaxed">
                      „{entry.data.reflection}”
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-stone-500">
              <CheckCircle2 className="w-12 h-12 text-stone-300 dark:text-stone-700 mx-auto mb-3" />
              <p className="font-medium text-stone-700 dark:text-stone-300 mb-1">
                Twój dziennik jest jeszcze pusty
              </p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Przejdź na koniec dowolnego rozdziału i wypełnij praktyczne ćwiczenie samorozwojowe. Wszystkie Twoje odpowiedzi zapiszą się w tym miejscu.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
