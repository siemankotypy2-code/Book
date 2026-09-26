import React, { useState } from 'react';
import { Database, CheckCircle2, XCircle, AlertTriangle, Sparkles, RefreshCw, Brain, Clock, ShieldAlert } from 'lucide-react';

export const MemoryExperimentWidget: React.FC = () => {
  const [step, setStep] = useState<'study' | 'test' | 'results'>('study');
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [confidenceRatings, setConfidenceRatings] = useState<Record<string, number>>({});

  // DRM Word List (Semantic field around SLEEP / SEN, but the lure word "ŚPIĄCZKA" or "SEN" is absent)
  const studyList = [
    'łóżko', 'poduszka', 'drzemka', 'koc', 'odpoczynek',
    'zmęczenie', 'ziewanie', 'noc', 'materac', 'kołdra', 'lenistwo', 'prześcieradło'
  ];

  const testList = [
    { word: 'łóżko', status: 'present', label: 'Słowo z pierwotnej listy' },
    { word: 'koc', status: 'present', label: 'Słowo z pierwotnej listy' },
    { word: 'SEN', status: 'critical_lure', label: 'Słowo-Przynęta (Absolutny Brak na Liście!)' },
    { word: 'noc', status: 'present', label: 'Słowo z pierwotnej listy' },
    { word: 'samochód', status: 'distractor', label: 'Niezwiązany Dystraktor' },
    { word: 'telefon', status: 'distractor', label: 'Niezwiązany Dystraktor' },
    { word: 'prześcieradło', status: 'present', label: 'Słowo z pierwotnej listy' },
    { word: 'odpoczynek', status: 'present', label: 'Słowo z pierwotnej listy' }
  ];

  const toggleSelectWord = (word: string) => {
    setSelectedWords((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );
  };

  const handleSetConfidence = (word: string, rating: number) => {
    setConfidenceRatings((prev) => ({ ...prev, [word]: rating }));
  };

  const isLureChosen = selectedWords.includes('SEN');

  return (
    <div className="my-8 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-lg overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-teal-950 text-white p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-teal-300 mb-1">
          <Database className="w-4 h-4 text-teal-400" />
          <span>Eksperyment Pamięciowy • Paradygmat DRM (Deese-Roediger-McDermott)</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-teal-50">
          Eksperyment DRM: Konstruktywny Charakter Pamięci i Fałszywe Wspomnienia
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Sprawdź, jak łatwo Twój mózg rekonstruuje nieistniejące szczegóły na podstawie skojarzeń semantycznych. Pamięć nie nagrywa wideo — tworzy opowieść opartą na regułach sensu.
        </p>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* STEP 1: STUDY PHASE */}
        {step === 'study' && (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-600/30 text-xs sm:text-sm text-stone-800 dark:text-stone-200">
              <strong className="font-bold block text-amber-900 dark:text-amber-300 mb-1">
                Faza 1: Zapamiętywanie
              </strong>
              Przeczytaj uważnie poniższe 12 słów. Postaraj się zapamiętać ich jak najwięcej. Nie zapisuj ich na kartce! Gdy będziesz gotowy, przejdź do testu.
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-6 rounded-2xl bg-stone-950 border border-stone-800">
              {studyList.map((w, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-center font-serif text-stone-200 text-base sm:text-lg font-semibold tracking-wide"
                >
                  {w}
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep('test')}
              className="w-full py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition flex items-center justify-center space-x-2 shadow-md"
            >
              <span>Przejdź do Testu Rozpoznawania Słów</span>
            </button>
          </div>
        )}

        {/* STEP 2: TEST PHASE */}
        {step === 'test' && (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-600/30 text-xs sm:text-sm text-stone-800 dark:text-stone-200">
              <strong className="font-bold block text-emerald-900 dark:text-emerald-300 mb-1">
                Faza 2: Test Rozpoznawania
              </strong>
              Zaznacz wyłącznie te słowa, które Twoim zdaniem **znajdowały się na pierwotnej liście**.
            </div>

            <div className="space-y-2.5">
              {testList.map((item) => {
                const isSelected = selectedWords.includes(item.word);
                return (
                  <div
                    key={item.word}
                    onClick={() => toggleSelectWord(item.word)}
                    className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold'
                        : 'bg-white dark:bg-stone-800 hover:bg-stone-50 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-700'
                    }`}
                  >
                    <span className="font-serif text-base">{item.word}</span>
                    <div className="flex items-center space-x-2">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                        isSelected ? 'bg-emerald-600 border-emerald-700 text-white' : 'border-stone-400'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setStep('results')}
              disabled={selectedWords.length === 0}
              className={`w-full py-3.5 rounded-xl text-white font-semibold text-sm transition flex items-center justify-center space-x-2 shadow-md ${
                selectedWords.length > 0 ? 'bg-emerald-800 hover:bg-emerald-900' : 'bg-stone-400 cursor-not-allowed'
              }`}
            >
              <span>Zobacz Wynik i Wyjaśnienie Mechanizmu</span>
            </button>
          </div>
        )}

        {/* STEP 3: RESULTS & ANALYSIS */}
        {step === 'results' && (
          <div className="space-y-5 animate-fadeIn">
            <div className={`p-5 rounded-xl border ${
              isLureChosen
                ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
            }`}>
              <div className="flex items-center space-x-2 mb-2 font-mono uppercase text-xs font-bold">
                {isLureChosen ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Wpadłeś w Pułapkę Krytycznej Przynęty Semantycznej!</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Uniknąłeś Krytycznej Przynęty (Bardzo Wysoka Kontrola Poznawcza)</span>
                  </>
                )}
              </div>

              <p className="font-serif text-sm sm:text-base leading-relaxed">
                {isLureChosen ? (
                  <>
                    Zaznaczyłeś słowo <strong>„SEN”</strong>. Tymczasem na pierwotnej liście 12 słów <strong>nie było słowa „SEN”</strong>! Znajdowały się na niej słowa poboczne (łóżko, poduszka, koc, zmęczenie, ziewanie...). Twój mózg automatycznie aktywował całą sieć semantyczną związaną ze snem i „wstawił” to kluczowe słowo do Twojego wspomnienia!
                  </>
                ) : (
                  <>
                    Nie zaznaczyłeś słowa <strong>„SEN”</strong>, mimo że 85% badanych w eksperymentach Roedigera i McDermotta przysięga, że to słowo znajdowało się na liście! Twój System 2 skutecznie zmonitrował źródło wspomnienia (source monitoring).
                  </>
                )}
              </p>
            </div>

            {/* Scientific Explanation */}
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-2 text-xs sm:text-sm leading-relaxed font-serif text-stone-800 dark:text-stone-200">
              <strong className="font-mono text-teal-900 dark:text-teal-400 uppercase tracking-wider block">
                Dlaczego tak się dzieje? (Teoria Aktywacji i Monitorowania Źródła):
              </strong>
              <p>
                Gdy czytasz serię powiązanych słów, sygnał rozprzestrzenia się po sieciach neuronowych (Spreading Activation Theory). Centralne pojęcie nieobecne na liście staje się tak silnie wzbudzone podprogowo, że w momencie przypominania płat skroniowy i hipokamp generują żywe odczucie: <em>„Przecież dokładnie to czytałem!”</em>.
              </p>
            </div>

            <button
              onClick={() => {
                setStep('study');
                setSelectedWords([]);
              }}
              className="px-4 py-2 rounded-xl bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 text-stone-800 dark:text-stone-200 text-xs font-mono font-bold flex items-center gap-1.5 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Powtórz Eksperyment</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
