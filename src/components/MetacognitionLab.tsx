import React, { useState } from 'react';
import { Eye, Brain, Activity, CheckCircle2, RotateCcw, AlertCircle, Sparkles, Filter, ShieldCheck } from 'lucide-react';

interface StreamItem {
  id: string;
  statement: string;
  actualLayer: 'fact' | 'interpretation' | 'somatic' | 'metacognitive';
  layerExplanation: string;
}

const STREAM_ITEMS: StreamItem[] = [
  {
    id: 's1',
    statement: '„Wiadomość od klienta ma tylko jedno zdanie i nie zawiera żadnego emotikonu”.',
    actualLayer: 'fact',
    layerExplanation: 'Fakt Zmysłowy: Czysty zapis obiektywnej rzeczywistości możliwy do zweryfikowania przez kamerę lub osobę trzecią.'
  },
  {
    id: 's2',
    statement: '„Klient jest na mnie wściekły i na pewno zerwie umowę po tym kwartale”.',
    actualLayer: 'interpretation',
    layerExplanation: 'Interpretacja (System 1): Opowieść automatycznie wygenerowana przez mózg w celu zapełnienia luki informacyjnej pod wpływem lęku.'
  },
  {
    id: 's3',
    statement: '„Czuję nagły ucisk w dołku podsercowym, a mięśnie moich barków unoszą się ku uszom”.',
    actualLayer: 'somatic',
    layerExplanation: 'Sygnał Somatyczny: Telemetria obwodowego układu nerwowego (wyrzut noradrenaliny, napięcie mięśniowe).'
  },
  {
    id: 's4',
    statement: '„Zauważam, że mój umysł natychmiast wygenerował katastroficzny scenariusz; biorę wydech i nie odpisuję przez 15 minut”.',
    actualLayer: 'metacognitive',
    layerExplanation: 'Wgląd Metapoznawczy: Obserwacja własnego procesu myślowego z pozycji neutralnego świadka i świadomy wybór regulacji.'
  },
  {
    id: 's5',
    statement: '„Kolega w biurze nie odpowiedział na moje «cześć», mijając mnie na korytarzu”.',
    actualLayer: 'fact',
    layerExplanation: 'Fakt Zmysłowy: Ruchy fizyczne i brak fali dźwiękowej o określonej częstotliwości.'
  },
  {
    id: 's6',
    statement: '„On mnie ignoruje, bo zazdrości mi wczorajszej pochwały na zebraniu”.',
    actualLayer: 'interpretation',
    layerExplanation: 'Interpretacja: Przypisanie wrogiej intencji bez żadnego empirycznego dowodu (Błąd atrybucji).'
  }
];

export const MetacognitionLab: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userCategorization, setUserCategorization] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const currentItem = STREAM_ITEMS[currentIdx];
  const selectedCat = userCategorization[currentItem.id];

  const handleSelect = (category: 'fact' | 'interpretation' | 'somatic' | 'metacognitive') => {
    if (showExplanation) return;
    setUserCategorization((prev) => ({ ...prev, [currentItem.id]: category }));
    setShowExplanation(true);
    if (category === currentItem.actualLayer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIdx + 1 < STREAM_ITEMS.length) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setUserCategorization({});
    setShowExplanation(false);
    setScore(0);
  };

  const isCompleted = currentIdx === STREAM_ITEMS.length - 1 && showExplanation;

  const categories = [
    { key: 'fact', label: '1. Czysty Fakt (Zmysłowy)', color: 'blue' },
    { key: 'interpretation', label: '2. Interpretacja / Opowieść (System 1)', color: 'amber' },
    { key: 'somatic', label: '3. Sygnał Cielesny (Somatyka)', color: 'rose' },
    { key: 'metacognitive', label: '4. Regulacja Metapoznawcza (Świadomość)', color: 'emerald' }
  ];

  return (
    <div className="my-10 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-lg overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-teal-950 to-stone-900 text-white p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-teal-300 mb-1">
          <Eye className="w-4 h-4 text-teal-400" />
          <span>Laboratorium Tomu III • Rozdział 5</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-teal-50">
          Laboratorium Metapoznania i Dekompozycji Strumienia Myśli
        </h3>
        <p className="text-sm text-stone-300 mt-1 max-w-2xl">
          Większość ludzi utożsamia swoje myśli z rzeczywistością. Trening metapoznawczy polega na rozszczepieniu strumienia świadomości na 4 elementarne warstwy: fakt, interpretację, ciało i świadomy wybór.
        </p>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-4 pb-2 border-b border-stone-200 dark:border-stone-700">
          <span>Zdanie {currentIdx + 1} z {STREAM_ITEMS.length}</span>
          <span>Poprawne klasyfikacje: <strong className="text-teal-700 dark:text-teal-400">{score} / {STREAM_ITEMS.length}</strong></span>
        </div>

        {/* Prompt Card */}
        <div className="p-5 rounded-xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 mb-6">
          <span className="text-[10px] font-mono uppercase font-bold text-teal-800 dark:text-teal-300 block mb-1">
            Zbadaj zdanie pojawiające się w strumieniu świadomości:
          </span>
          <p className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 italic">
            {currentItem.statement}
          </p>
        </div>

        {/* 4 Layer Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {categories.map((cat) => {
            const isChosen = selectedCat === cat.key;
            const isCorrect = currentItem.actualLayer === cat.key;

            let btnStyle = 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 hover:bg-stone-100 text-stone-800 dark:text-stone-200';
            if (showExplanation) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
              } else if (isChosen && !isCorrect) {
                btnStyle = 'bg-rose-100 dark:bg-rose-950/80 border-rose-500 text-rose-900 dark:text-rose-200 line-through';
              }
            }

            return (
              <button
                key={cat.key}
                disabled={showExplanation}
                onClick={() => handleSelect(cat.key as any)}
                className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-mono transition-all flex items-center justify-between ${btnStyle}`}
              >
                <span>{cat.label}</span>
                {showExplanation && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Explanation & Feedback */}
        {showExplanation && (
          <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-2 mb-6 animate-fadeIn">
            <div className="text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300">
              Uzasadnienie Metapoznawcze:
            </div>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {currentItem.layerExplanation}
            </p>

            <div className="pt-2 flex justify-end">
              {!isCompleted ? (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-mono font-bold transition flex items-center gap-1.5"
                >
                  <span>Następne zdanie</span>
                  <span>→</span>
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-mono font-bold transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Rozpocznij trening od nowa</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Completion Message */}
        {isCompleted && (
          <div className="p-5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-300 dark:border-teal-700 space-y-2 animate-fadeIn">
            <h4 className="font-serif font-bold text-base text-teal-950 dark:text-teal-100">
              Wynik Treningu Metapoznawczego: {score} / {STREAM_ITEMS.length} trafień
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              Gratulacje! Umiejętność natychmiastowego odróżnienia faktu (np. brak emotikonu) od interpretacji (lęk przed zerwaniem umowy) to najważniejszy oręż przeciwko neurobiologicznemu porwaniu emocjonalnemu. Kiedy widzisz, że myśl to tylko wydarzenie w głowie, a nie fakt w świecie fizycznym, odzyskujesz wolność wyboru.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
