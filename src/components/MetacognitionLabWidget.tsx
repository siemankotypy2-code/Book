import React, { useState } from 'react';
import { Eye, ShieldAlert, Sparkles, Activity, CheckCircle, RefreshCcw } from 'lucide-react';

interface AutomaticThought {
  id: string;
  trigger: string;
  automaticThought: string;
  cognitiveDistortion: string;
  decenteredStatement: string;
  actionableStep: string;
}

const sampleThoughts: AutomaticThought[] = [
  {
    id: 't1',
    trigger: 'Brak odpowiedzi na ważny e-mail od klienta przez 4 godziny',
    automaticThought: '„Na pewno uznali propozycję za absurdalną i zerwą współpracę”.',
    cognitiveDistortion: 'Katastrofizacja & Czytanie w myślach',
    decenteredStatement: '„Zauważam myśl, że pojawił się niepokój o brak odpowiedzi. To tylko hipoteza umysłu”.',
    actionableStep: 'Zajmij się innymi zadaniami i wyślij uprzejme przypomnienie jutro o 10:00.'
  },
  {
    id: 't2',
    trigger: 'Potknięcie językowe podczas zadawania pytania na zebraniu',
    automaticThought: '„Znowu się skompromitowałem przed całym zarządem”.',
    cognitiveDistortion: 'Uogólnianie (Overgeneralization) & Etykietowanie',
    decenteredStatement: '„Zauważam myśl, że przejęzyczenie czyni ze mnie osobę niekompetentną. To tylko reakcja stresowa”.',
    actionableStep: 'Wykonaj spokoju podwójny wdech nosem i kontynuuj wypowiedź bez przepraszania.'
  }
];

export const MetacognitionLabWidget: React.FC = () => {
  const [selectedThoughtId, setSelectedThoughtId] = useState<string>('t1');
  const [isDecentered, setIsDecentered] = useState<boolean>(false);

  const currentThought = sampleThoughts.find((t) => t.id === selectedThoughtId) || sampleThoughts[0];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 border border-amber-900/40 shadow-xl font-sans my-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1.5 w-fit mb-2">
            <Eye className="w-3.5 h-3.5" />
            Tom III • Rozdział 21 • Audyt Metapoznawczy
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100">
            Wykrywacz Fuzji Poznawczej i De-Centracja Myśli
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            Przełącz się ze stanu automatycznej fuzji z myślą do stanu czujnego obserwatora własnych procesów psychicznych.
          </p>
        </div>

        {/* Thought Selector */}
        <div className="flex space-x-2 font-mono text-xs">
          {sampleThoughts.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedThoughtId(t.id);
                setIsDecentered(false);
              }}
              className={`px-3 py-1.5 rounded-xl border transition ${
                t.id === selectedThoughtId
                  ? 'bg-amber-800 text-white border-amber-600 font-bold'
                  : 'bg-stone-800 text-stone-400 border-stone-700 hover:text-white'
              }`}
            >
              Scenariusz #{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Trigger Context */}
      <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700 mb-6 font-mono text-xs text-stone-300">
        <span className="text-amber-400 font-bold uppercase block mb-1">Zewnętrzny Bodziec Wyzwalający:</span>
        {currentThought.trigger}
      </div>

      {/* Thought Arena: Fusion vs Decentered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Automatic Thought (Fusion) */}
        <div className="p-5 rounded-2xl bg-rose-950/40 border border-rose-800/60 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-rose-300 font-bold uppercase">
            <span>1. Automatyczna Fuzja (System 1)</span>
            <span className="bg-rose-900/60 px-2 py-0.5 rounded-full text-[10px]">Traktowane jako PRAWDA</span>
          </div>
          <p className="font-serif italic text-base sm:text-lg text-rose-100">{currentThought.automaticThought}</p>
          <div className="text-[11px] font-mono text-rose-300">
            Rozpoznany Błąd Poznawczy: <strong>{currentThought.cognitiveDistortion}</strong>
          </div>
        </div>

        {/* Decentered Statement (Metacognition) */}
        <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-emerald-300 font-bold uppercase">
            <span>2. Metapoznawcza De-Centracja</span>
            <span className="bg-emerald-900/60 px-2 py-0.5 rounded-full text-[10px]">Obserwacja Obiektu</span>
          </div>
          <p className="font-serif italic text-base sm:text-lg text-emerald-100">
            {isDecentered ? currentThought.decenteredStatement : 'Kliknij poniżej, by zastosować de-centrację...'}
          </p>
          {!isDecentered ? (
            <button
              onClick={() => setIsDecentered(true)}
              className="w-full py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs font-bold transition"
            >
              Wykonaj Przełączenie Metapoznawcze
            </button>
          ) : (
            <div className="flex items-center space-x-1.5 text-xs font-mono text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Kora przedczołowa odzyskała dystans do myśli.</span>
            </div>
          )}
        </div>
      </div>

      {/* Actionable Step */}
      {isDecentered && (
        <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-900/60 space-y-2 animate-fadeIn">
          <span className="text-xs font-mono uppercase text-amber-400 font-bold block">
            Świadomy Krok Wykonawczy (System 2):
          </span>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
            {currentThought.actionableStep}
          </p>
        </div>
      )}
    </div>
  );
};
