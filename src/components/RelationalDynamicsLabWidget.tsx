import React, { useState } from 'react';
import {
  Heart,
  Flame,
  ShieldCheck,
  Users,
  Crown,
  Sparkles,
  ArrowRight,
  Activity,
  AlertTriangle,
  Scale,
  RefreshCw,
  Eye,
  Sliders,
  CheckCircle2,
  HelpCircle,
  Brain
} from 'lucide-react';

export const RelationalDynamicsLabWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'attachment' | 'conflict' | 'trust' | 'conformity' | 'status'>('attachment');

  // --- TAB 1: ATTACHMENT LOOP SIMULATOR ---
  const [partnerAAnxiety, setPartnerAAnxiety] = useState<number>(70); // Anna
  const [partnerBAvoidance, setPartnerBAvoidance] = useState<number>(65); // Marek
  const [isBrokenLoop, setIsBrokenLoop] = useState<boolean>(false);

  // --- TAB 2: CONFLICT FLOODING SIMULATOR ---
  const [heartRate, setHeartRate] = useState<number>(75);
  const [horseman, setHorseman] = useState<'criticism' | 'contempt' | 'defensiveness' | 'stonewalling'>('criticism');
  const [isCoolingDown, setIsCoolingDown] = useState<boolean>(false);

  const triggerArgument = () => {
    setHeartRate(122);
    setIsCoolingDown(false);
  };

  const applyRepairAttempt = () => {
    setIsCoolingDown(true);
    setTimeout(() => {
      setHeartRate(72);
      setIsCoolingDown(false);
    }, 1500);
  };

  // --- TAB 3: TRUST ABI MODEL ---
  const [abilityScore, setAbilityScore] = useState<number>(8);
  const [benevolenceScore, setBenevolenceScore] = useState<number>(4);
  const [integrityScore, setIntegrityScore] = useState<number>(5);

  const calculateTrustIndex = () => {
    return Math.round(((abilityScore + benevolenceScore * 1.5 + integrityScore * 2) / 45) * 100);
  };

  // --- TAB 4: CONFORMITY BREAKTHROUGH SIMULATOR ---
  const [groupSize, setGroupSize] = useState<number>(10);
  const [hasDissenter, setHasDissenter] = useState<boolean>(false);

  // --- TAB 5: STATUS VS POWER VS PRESTIGE MATRIX ---
  const [selectedConcept, setSelectedConcept] = useState<'power' | 'status' | 'authority' | 'prestige'>('prestige');

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 my-10 font-sans">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 via-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-rose-500/20 text-white">
            <Heart className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Laboratorium Rozdziałów 34–38
              </span>
              <span className="text-xs text-slate-400">Blok Relacji i Grupy</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
              Symulator Dynamiki Relacji, Konfliktu i Statusu
            </h3>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('attachment')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'attachment'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Heart className="w-3.5 h-3.5" /> 34. Więź
          </button>
          <button
            onClick={() => setActiveTab('conflict')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'conflict'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5" /> 35. Konflikt
          </button>
          <button
            onClick={() => setActiveTab('trust')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'trust'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" /> 36. Zaufanie
          </button>
          <button
            onClick={() => setActiveTab('conformity')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'conformity'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Users className="w-3.5 h-3.5" /> 37. Grupa
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'status'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Crown className="w-3.5 h-3.5" /> 38. Status
          </button>
        </div>
      </div>

      {/* TAB 1: ATTACHMENT */}
      {activeTab === 'attachment' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-400" />
                  Symulator Tańca Bliskości i Dystansu (Lęk vs Unikanie)
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Zobacz, jak wzajemne pobudzenie lękowe partnerów napędza spiralę pogoni i ucieczki.
                </p>
              </div>
              <button
                onClick={() => setIsBrokenLoop(!isBrokenLoop)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  isBrokenLoop
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                {isBrokenLoop ? 'Pętla Przerwana (Bezpieczna Przystań)' : 'Zastosuj Protokół Przełamania Pętli'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800">
              {/* Partner A */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-rose-400 uppercase font-mono">Partner A (Lęk przed odrzuceniem)</span>
                  <span className="text-xs font-bold text-rose-300">{isBrokenLoop ? '25%' : `${partnerAAnxiety}%`}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  disabled={isBrokenLoop}
                  value={isBrokenLoop ? 25 : partnerAAnxiety}
                  onChange={(e) => setPartnerAAnxiety(Number(e.target.value))}
                  className="w-full accent-rose-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="p-3 rounded-lg bg-slate-950 text-xs text-slate-300 leading-relaxed">
                  <strong>Reakcja: </strong>
                  {isBrokenLoop
                    ? '„Marek potrzebuje ciszy. Wiem, że wróci do mnie o 18:30. Mogę zająć się swoją książką”.'
                    : partnerAAnxiety > 50
                    ? '„On się oddala! Muszę natychmiast sprawdzić, co się dzieje, zadzwonić i zażądać wyjaśnień!”.'
                    : 'Spokojne oczekiwanie na kontakt.'}
                </div>
              </div>

              {/* Partner B */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-indigo-400 uppercase font-mono">Partner B (Lęk przed osaczeniem)</span>
                  <span className="text-xs font-bold text-indigo-300">{isBrokenLoop ? '20%' : `${partnerBAvoidance}%`}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  disabled={isBrokenLoop}
                  value={isBrokenLoop ? 20 : partnerBAvoidance}
                  onChange={(e) => setPartnerBAvoidance(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="p-3 rounded-lg bg-slate-950 text-xs text-slate-300 leading-relaxed">
                  <strong>Reakcja: </strong>
                  {isBrokenLoop
                    ? '„Anna daje mi przestrzeń bez pretensji. Sam mam ochotę wyjść z pokoju i ją przytulić”.'
                    : partnerBAvoidance > 50
                    ? '„Znowu przesłuchanie! Duszę się w tym domu, muszę wyjść i zamknąć drzwi!”.'
                    : 'Otwartość na rozmowę.'}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 text-xs text-slate-300 border border-slate-800 leading-relaxed">
              <strong className="text-white block mb-1">Diagnoza Systemowa:</strong>
              {isBrokenLoop ? (
                <span className="text-emerald-400">
                  Wprowadzono Protokół Bezpiecznego Oddechu. Jasna deklaracja ram czasowych uciszyła alarm u osoby lękowej, a brak nacisku zdjął potrzebę ucieczki u osoby unikającej. Relacja odzyskała puls.
                </span>
              ) : (
                <span className="text-rose-400">
                  Układ znajduje się w klasycznej pętli eskalacyjnej Demand-Withdraw: im mocniej Partner A dopytuje z napięciem, tym głębiej Partner B ucieka w chłód, co potwierdza katastrofę w umyśle Partnera A.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CONFLICT */}
      {activeTab === 'conflict' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-400" />
                  Monitor Zalania Emocjonalnego (Gottman Flooding Lab)
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Zobacz, jak tętno powyżej 100 bpm wyłącza korę przedczołową i jak działa próba naprawcza.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={triggerArgument}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition shadow-md"
                >
                  Odpal Zarzut („Ty Zawsze!”)
                </button>
                <button
                  onClick={applyRepairAttempt}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md"
                >
                  Próba Naprawcza („Zróbmy 20 min pauzy”)
                </button>
              </div>
            </div>

            {/* Heart Rate Display */}
            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center justify-center space-y-3">
              <div className="flex items-center gap-3">
                <Activity className={`w-8 h-8 ${heartRate > 100 ? 'text-rose-500 animate-pulse' : 'text-emerald-400'}`} />
                <span className="text-4xl font-extrabold font-mono text-white tracking-tight">{heartRate} BPM</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase font-mono ${
                heartRate > 100 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              }`}>
                {heartRate > 100 ? 'STAN ZALANIA FIZJOLOGICZNEGO (DPA)' : 'STAN REGULACJI POZNAWCZEJ'}
              </span>
              <p className="text-xs text-slate-400 text-center max-w-md">
                {heartRate > 100
                  ? 'Kora przedczołowa odcięta przez katecholaminy. Układ limbiczny interpretuje partnera jako drapieżnika. Dalsza dyskusja gwarantuje pogardę i rany.'
                  : 'Tętno w normie. Dostępne myślenie perspektywiczne, empatia i zdolność do słuchania faktów.'}
              </p>
            </div>

            {/* Gottman 4 Horsemen */}
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3 font-mono">
                Czterej Jeźdźcy Apokalipsy Johna Gottmana:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'criticism', name: '1. Krytyka', desc: 'Atak na tożsamość zamiast skargi na fakt' },
                  { id: 'contempt', name: '2. Pogarda', desc: 'Sarkazm i wyższość (najgroźniejszy)' },
                  { id: 'defensiveness', name: '3. Obrona', desc: 'Kontratak i udawanie ofiary' },
                  { id: 'stonewalling', name: '4. Mur milczenia', desc: 'Zamrożenie i odcięcie kontaktu' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setHorseman(item.id as any)}
                    className={`p-3 rounded-xl border text-left transition ${
                      horseman === item.id
                        ? 'bg-amber-600/30 border-amber-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    <div className="font-bold text-xs text-white">{item.name}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TRUST */}
      {activeTab === 'trust' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  Kalkulator Wiarygodności ABI (Ability, Benevolence, Integrity)
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Model Mayera, Davisa i Schoormana: jak trzy filary składają się na zaufanie.
                </p>
              </div>
              <div className="px-4 py-2 bg-emerald-950/80 rounded-xl border border-emerald-500/40 text-center">
                <span className="text-[10px] text-emerald-300 uppercase block font-semibold">Wskaźnik Zaufania</span>
                <span className="text-2xl font-extrabold text-white">{calculateTrustIndex()}%</span>
              </div>
            </div>

            <div className="space-y-4 bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-200">1. Zdolność / Kompetencja (Ability): Czy ten człowiek potrafi dowieźć obietnice?</span>
                  <span className="font-mono text-emerald-400 font-bold">{abilityScore}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={abilityScore}
                  onChange={(e) => setAbilityScore(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-200">2. Życzliwość (Benevolence): Czy gra do mojej bramki, czy dba tylko o swój interes?</span>
                  <span className="font-mono text-emerald-400 font-bold">{benevolenceScore}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={benevolenceScore}
                  onChange={(e) => setBenevolenceScore(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-200">3. Prawość i Spójność Zasad (Integrity): Czy mówi prawdę, nawet gdy jest to trudne?</span>
                  <span className="font-mono text-emerald-400 font-bold">{integrityScore}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={integrityScore}
                  onChange={(e) => setIntegrityScore(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 text-xs text-slate-300 border border-slate-800 leading-relaxed">
              <strong className="text-white block mb-1">Wniosek Analityczny:</strong>
              {calculateTrustIndex() > 75 ? (
                <span className="text-emerald-300">
                  Wysoki poziom bezpieczeństwa relacyjnego. Partner posiada zintegrowaną prawość i życzliwość, co pozwala na pełną podatność na zranienie bez lęku.
                </span>
              ) : calculateTrustIndex() > 45 ? (
                <span className="text-amber-300">
                  Stan kruchej wiarygodności. Partner może być kompetentny, ale deficyt prawości (kłamstwa ochronne) zmusza drugą stronę do nieustannej czujności śledczej.
                </span>
              ) : (
                <span className="text-rose-300">
                  Głęboki kryzys zaufania. Dalsze trwanie w relacji bez radykalnej, transparentnej zmiany strukturalnej prowadzi do przewlekłej traumy zdrady.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CONFORMITY */}
      {activeTab === 'conformity' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-400" />
                  Symulator Przełamywania Konformizmu (Efekt Pojedynczego Weta)
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Zobacz, jak obecność jednego sojusznika prawdy rozbija hipnozę jednomyślnego stada.
                </p>
              </div>
              <button
                onClick={() => setHasDissenter(!hasDissenter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  hasDissenter ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300'
                }`}
              >
                {hasDissenter ? 'Sojusznik Prawdy: AKTYWNY' : 'Dodaj Sojusznika Prawdy'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-300 uppercase font-mono block">
                  Szacowane Prawdopodobieństwo Uległości Badanej Osoby:
                </span>
                <div className="text-4xl font-extrabold font-mono text-white">
                  {hasDissenter ? '5.5%' : '37.0%'}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {hasDissenter
                    ? 'Wystarczy, że JEDNA osoba w sali zagłosuje inaczej, by zdjąć z reszty paraliżujący lęk przed wykluczeniem. Monolit pęka.'
                    : 'Jednomyślna grupa wywiera maksymalny nacisk normatywny. Aż 75% ludzi ulega fałszowi przynajmniej raz.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs text-slate-300">
                <strong className="text-white block font-mono uppercase text-[11px]">Zjawisko Pluralistycznej Ignorancji:</strong>
                <p>
                  Gdy wszyscy milczą, każdy dochodzi do fałszywego wniosku: «Skoro nikt nie protestuje, widocznie tylko ja mam wątpliwości». W ten sposób grupa podejmuje decyzje, których prywatnie nikt nie popierał.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: STATUS */}
      {activeTab === 'status' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Crown className="w-5 h-5 text-purple-400" />
                Matryca Rozróżnienia: Status ≠ Władza ≠ Autorytet ≠ Prestiż
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Kluczowa mapa pojęciowa Rozdziału 38 chroniąca przed myleniem stanowiska z szacunkiem.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'power', label: 'Władza (Power)', icon: Activity },
                { id: 'status', label: 'Status (Status)', icon: Crown },
                { id: 'authority', label: 'Autorytet (Authority)', icon: ShieldCheck },
                { id: 'prestige', label: 'Prestiż (Prestige)', icon: Sparkles }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedConcept(item.id as any)}
                  className={`p-3.5 rounded-xl border text-left transition ${
                    selectedConcept === item.id
                      ? 'bg-purple-600/30 border-purple-500 text-white font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-xs">{item.label}</div>
                </button>
              ))}
            </div>

            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-3 text-xs sm:text-sm">
              {selectedConcept === 'power' && (
                <>
                  <h5 className="font-bold text-purple-400 text-base">Władza (Asymetryczna Kontrola nad Zasobami)</h5>
                  <p className="text-slate-300">
                    Możliwość wymuszenia określonego zachowania poprzez dysponowanie nagrodami i karami (pieniądze, zwolnienie, sankcje prawne). Władzę można nadać pieczątką w 5 sekund. Nie wymaga szacunku ani sympatii podwładnych.
                  </p>
                  <div className="p-3 bg-slate-900 rounded-lg text-slate-400 font-mono text-xs">
                    Przykład: Strażnik więzienny ma 100% władzy, ale 0% prestiżu.
                  </div>
                </>
              )}
              {selectedConcept === 'status' && (
                <>
                  <h5 className="font-bold text-purple-400 text-base">Status (Pozycja w Hierarchii Uwagi i Szacunku)</h5>
                  <p className="text-slate-300">
                    Względna ranga w oczach grupy. Zależy od tego, jak bardzo inni liczą się z Twoim zdaniem i jak wiele uwagi Ci poświęcają. Statusu nie da się kupić ani nakazać — musi zostać przyznany przez stado.
                  </p>
                  <div className="p-3 bg-slate-900 rounded-lg text-slate-400 font-mono text-xs">
                    Przykład: Senior developer, z którym prezes konsultuje każdą decyzję architektoniczną.
                  </div>
                </>
              )}
              {selectedConcept === 'authority' && (
                <>
                  <h5 className="font-bold text-purple-400 text-base">Autorytet (Prawomocne Prawo do Przewodzenia)</h5>
                  <p className="text-slate-300">
                    Połączenie wysokiego prestiżu merytorycznego z nienaganną prawością etyczną. Ludzie idą za autorytetem dobrowolnie, ponieważ ufają jego mądrości w kryzysie.
                  </p>
                  <div className="p-3 bg-slate-900 rounded-lg text-slate-400 font-mono text-xs">
                    Przykład: Nelson Mandela na Robben Island — więzień bez władzy, który stał się autorytetem dla strażników.
                  </div>
                </>
              )}
              {selectedConcept === 'prestige' && (
                <>
                  <h5 className="font-bold text-purple-400 text-base">Prestiż (Ścieżka Kompetencji i Dzielenia się Wiedzą)</h5>
                  <p className="text-slate-300">
                    Ewolucyjna alternatywa dla zwierzęcej dominacji (Henrich & Gil-White). Prestiż zdobywa się poprzez unikalne umiejętności połączone z hojnością. Wokół człowieka prestiżu inni gromadzą się dobrowolnie, by uczyć się i czerpać z jego doświadczenia.
                  </p>
                  <div className="p-3 bg-slate-900 rounded-lg text-slate-400 font-mono text-xs">
                    Przykład: Wybitny chirurg dzielący się wiedzą z młodymi rezydentami bez wywyższania się.
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
