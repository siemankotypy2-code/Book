import React, { useState } from 'react';
import { MessageSquare, Ear, RefreshCw, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

interface CommunicationSample {
  id: string;
  phrase: string;
  context: string;
  ears: {
    factual: string;
    selfDisclosure: string;
    relational: string;
    appeal: string;
  };
  recommendedActiveListening: {
    paraphrase: string;
    emotionalReflection: string;
    clarifyingQuestion: string;
  };
}

const samples: CommunicationSample[] = [
  {
    id: 'sample-1',
    phrase: '„Znowu siedzisz nad tym projektem do późna w nocy”.',
    context: 'Wypowiedź partnera wchodzącego do domowego gabinetu o 23:30.',
    ears: {
      factual: 'Godzina wskazuje 23:30, a ty pracujesz przy komputerze.',
      selfDisclosure: 'Czuję się samotny, tęsknię za tobą, boję się o twoje zdrowie i wypalenie.',
      relational: '„Dla ciebie praca jest ważniejsza niż nasza relacja i dom”.',
      appeal: '„Zamknij natychmiast laptopa i chodź ze mną spać”.'
    },
    recommendedActiveListening: {
      paraphrase: '„Widzisz, że znowu pracuję po nocach i martwisz się o czas, który spędzamy razem”.',
      emotionalReflection: '„Słyszę, że czujesz się tym sfrustrowana i samotna”.',
      clarifyingQuestion: '„Czy możemy ustalić, że kończę ten moduł do północy, a jutrzejszy wieczór spędzamy wyłącznie we dwoje?”.'
    }
  },
  {
    id: 'sample-2',
    phrase: '„Ten raport jest kompletnie nieczytelny dla zarządu”.',
    context: 'Komentarz dyrektora na temat prezentacji analityka.',
    ears: {
      factual: 'Układ graficzny i stylistyka raportu odbiegają od standardu wymaganego przez zarząd.',
      selfDisclosure: 'Boję się kompromitacji przed prezesem, jestem pod presją czasu.',
      relational: '„Nie nadajesz się na to stanowisko, muszę cię stale pilnować”.',
      appeal: '„Przepisz to od zera tak, by liczby były jasne w 30 sekund”.'
    },
    recommendedActiveListening: {
      paraphrase: '„Zależy panu, aby zarząd mógł w kilka sekund wyciągnąć kluczowe wnioski z danych”.',
      emotionalReflection: '„Widzę, że ta forma budzi w panu obawę przed złą recepcją”.',
      clarifyingQuestion: '„Który konkretnie wykres budzi pana największy niepokój, bym mógł go natychmiast uprościć?”.'
    }
  }
];

export const CommunicationLab: React.FC = () => {
  const [activeSampleIdx, setActiveSampleIdx] = useState(0);
  const [selectedEar, setSelectedEar] = useState<'factual' | 'selfDisclosure' | 'relational' | 'appeal'>('relational');

  const sample = samples[activeSampleIdx];

  const earLabels = {
    factual: { name: 'Ucho Rzeczowe', color: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-950/50 dark:text-blue-200' },
    selfDisclosure: { name: 'Ucho Terapeutyczne (Ujawnienie Siebie)', color: 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200' },
    relational: { name: 'Ucho Relacyjne (Poczucie Ataku)', color: 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/50 dark:text-rose-200' },
    appeal: { name: 'Ucho Apelowe (Rozkaz / Żądanie)', color: 'border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200' }
  };

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold">
          <MessageSquare className="w-4 h-4 text-amber-700" />
          <span>Laboratorium Komunikacji: Kwadrat Schulza von Thuna</span>
        </div>
        <button
          onClick={() => setActiveSampleIdx((prev) => (prev + 1) % samples.length)}
          className="text-xs font-mono text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1"
        >
          <span>Inna wypowiedź</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="p-4 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 mb-6">
        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
          Kontekst: {sample.context}
        </span>
        <h4 className="font-serif italic text-lg sm:text-xl font-bold text-amber-950 dark:text-amber-100">
          {sample.phrase}
        </h4>
      </div>

      {/* Ear Selector */}
      <span className="text-xs font-mono uppercase text-stone-500 font-bold block mb-2">
        Wybierz, którym uchem słucha Twój umysł:
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {(Object.keys(earLabels) as (keyof typeof earLabels)[]).map((earKey) => {
          const isSelected = selectedEar === earKey;
          return (
            <button
              key={earKey}
              onClick={() => setSelectedEar(earKey)}
              className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
                isSelected
                  ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                  : 'bg-white/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 border-stone-200'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Ear className="w-3.5 h-3.5" />
                <span>{earLabels[earKey].name.split('(')[0]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Ear Output */}
      <div className={`p-4 rounded-2xl border-l-4 mb-6 ${earLabels[selectedEar].color}`}>
        <span className="text-xs font-mono uppercase tracking-wider block font-bold mb-1">
          Co słyszy {earLabels[selectedEar].name}:
        </span>
        <p className="text-sm font-serif italic leading-relaxed">
          „{sample.ears[selectedEar]}”
        </p>
      </div>

      {/* Active Listening Master Solution */}
      <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 dark:bg-stone-950 border border-stone-800 space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-amber-400 font-bold">
          <Sparkles className="w-4 h-4" />
          <span>Odpowiedź Mistrza Komunikacji (Aktywne Słuchanie):</span>
        </div>
        <div className="space-y-2 text-xs sm:text-sm">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <strong className="text-amber-300">1. Parafraza: </strong> {sample.recommendedActiveListening.paraphrase}
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <strong className="text-amber-300">2. Odzwierciedlenie afektu: </strong> {sample.recommendedActiveListening.emotionalReflection}
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <strong className="text-amber-300">3. Pytanie ukierunkowujące: </strong> {sample.recommendedActiveListening.clarifyingQuestion}
          </div>
        </div>
      </div>
    </div>
  );
};
