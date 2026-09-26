import { Module, Chapter } from '../types/book';
import { MODULE_1 } from './modules/module1';
import { MODULE_2 } from './modules/module2';
import { MODULE_3 } from './modules/module3';
import { MODULE_4 } from './modules/module4';
import { MODULE_5 } from './modules/module5';

export const BOOK_MODULES: Module[] = [
  MODULE_1,
  MODULE_2,
  MODULE_3,
  MODULE_4,
  MODULE_5
];

import { ModuleChapter } from '../types/book';

export const BOOK_METADATA = {
  title: 'Anatomia Umysłu: Psychologia, Neuronauka i Wpływ',
  subtitle: 'Praktyczny przewodnik po ludzkich zachowaniach, mechanizmach decyzji i sztuce porozumienia',
  author: 'Kolektyw Naukowo-Psychologiczny',
  edition: 'Wydanie Kompletne Interaktywne (Tom I & Tom II, 2026)',
  totalModules: 5,
  totalChapters: 16,
  estimatedTotalMinutes: 450,
  description: 'Głęboka, oparta na dowodach naukowych podróż przez labirynt ludzkiej psychiki i relacji społecznych. Szesnaście monumentalnych rozdziałów, 228 sekcji, wyczerpujące studia przypadków z życia codziennego, precyzyjne analizy psychologiczne, wglądy neuronaukowe, interaktywne laboratoria decyzyjne oraz egzaminy końcowe.'
};

export function getAllChapters(): ModuleChapter[] {
  return BOOK_MODULES.flatMap(m => m.chapters);
}

export function getChapterById(id: string): ModuleChapter | undefined {
  return getAllChapters().find(c => c.id === id);
}

export function getAdjacentChapters(currentId: string): { prev?: ModuleChapter; next?: ModuleChapter } {
  const all = getAllChapters();
  const index = all.findIndex(c => c.id === currentId);
  if (index === -1) return {};
  return {
    prev: index > 0 ? all[index - 1] : undefined,
    next: index < all.length - 1 ? all[index + 1] : undefined
  };
}

export function searchBook(query: string): {
  chapter: ModuleChapter;
  matchedField: string;
  snippet: string;
}[] {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const results: { chapter: ModuleChapter; matchedField: string; snippet: string }[] = [];

  for (const chapter of getAllChapters()) {
    if (chapter.title.toLowerCase().includes(q)) {
      results.push({ chapter, matchedField: 'Tytuł rozdziału', snippet: chapter.title });
      continue;
    }
    if (chapter.subtitle.toLowerCase().includes(q)) {
      results.push({ chapter, matchedField: 'Podtytuł', snippet: chapter.subtitle });
      continue;
    }
    if (chapter.caseStudy.title.toLowerCase().includes(q) || chapter.caseStudy.scenario.toLowerCase().includes(q)) {
      results.push({ chapter, matchedField: 'Studium przypadku', snippet: chapter.caseStudy.title + ' – ' + chapter.caseStudy.scenario.slice(0, 120) + '...' });
      continue;
    }
    const mechMatch = chapter.psychologicalAnalysis.coreMechanisms.find(m => m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q));
    if (mechMatch) {
      results.push({ chapter, matchedField: 'Mechanizm psychologiczny', snippet: mechMatch.name + ': ' + mechMatch.description });
      continue;
    }
    const neuroMatch = chapter.neuroscienceInsight.brainStructures.find(b => b.name.toLowerCase().includes(q) || b.functionInScenario.toLowerCase().includes(q));
    if (neuroMatch) {
      results.push({ chapter, matchedField: 'Neuronauka', snippet: neuroMatch.name + ': ' + neuroMatch.role });
      continue;
    }
    if (chapter.exercise.title.toLowerCase().includes(q) || chapter.exercise.goal.toLowerCase().includes(q)) {
      results.push({ chapter, matchedField: 'Ćwiczenie samorozwojowe', snippet: chapter.exercise.title + ' – ' + chapter.exercise.goal });
    }
  }

  return results;
}
