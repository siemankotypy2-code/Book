import React, { useState, useEffect } from 'react';
import { InteractiveToolConfig } from '../types/book';
import { 
  Flame, 
  RotateCcw, 
  Play, 
  Pause, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ArrowRight,
  Shield, 
  Scale, 
  Eye, 
  MessageSquare,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  config: InteractiveToolConfig;
  chapterTitle: string;
}

export const InteractiveToolRunner: React.FC<Props> = ({ config }) => {
  // Tool 1: Emotional Thermometer state
  const [arousalLevel, setArousalLevel] = useState<number>(45);
  const [timerSeconds, setTimerSeconds] = useState<number>(6);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [breathPhase, setBreathPhase] = useState<'wdech_1' | 'wdech_2' | 'wydech'>('wdech_1');

  // Tool 2: Habit Loop state
  const [habitCue, setHabitCue] = useState<string>('Powiadomienie w telefonie lub chwila nudy');
  const [habitCraving, setHabitCraving] = useState<string>('Ucieczka przed monotonią / szybki strzał dopaminy');
  const [habitResponse, setHabitResponse] = useState<string>('Bezwiedne scrollowanie social media przez 30 minut');
  const [habitReward, setHabitReward] = useState<string>('Chwilowa ulga, po której następuje poczucie winy');
  const [frictionPlan, setFrictionPlan] = useState<string>('Telefon w szufladzie w drugim pokoju na czas pracy głębokiej');

  // Tool 3: Social Pressure Sim
  const [selectedGroupScenario, setSelectedGroupScenario] = useState<number>(0);
  const [dissentStrategy, setDissentStrategy] = useState<string>('');

  // Tool 4: Reciprocity Detector
  const [giftValue, setGiftValue] = useState<number>(30); // 30 zł (np. kawa, prezent)
  const [requestedValue, setRequestedValue] = useState<number>(1500); // 1500 zł (np. zakup, przysługa)
  const [relationshipType, setRelationshipType] = useState<'handlowa' | 'znajomy' | 'bliski'>('handlowa');

  // Tool 5: Gaslighting Reality Anchor
  const [gaslightStatement, setGaslightStatement] = useState<string>('„Przecież nic takiego ci nie obiecywałem, znowu wymyślasz problemy z powietrza”');
  const [objectiveFact, setObjectiveFact] = useState<string>('Wiadomość e-mail z wtorku godz. 14:22 ze słowami: „Wycofujemy się z planu A i wchodzimy w plan B”');

  // Tool 6: Gray Rock Matrix
  const [provocationType, setProvocationType] = useState<string>('karanie_cisza');

  // Tool 7: Sunk Cost Calculator
  const [sunkMoney, setSunkMoney] = useState<number>(5000);
  const [sunkMonths, setSunkMonths] = useState<number>(12);
  const [futureProspect, setFutureProspect] = useState<'zle' | 'niepewne' | 'dobre'>('zle');

  // Tool 8: Devil's Advocate
  const [chosenBelief, setChosenBelief] = useState<string>('Praca zdalna jest zawsze bardziej efektywna niż praca w biurze');
  const [counterArgument, setCounterArgument] = useState<string>('');

  // Tool 9: Body Language Calibrator
  const [selectedCue, setSelectedCue] = useState<string>('skrzyzowane_ramiona');

  // Tool 10: Calibrated Questions Lab
  const [selectedAggression, setSelectedAggression] = useState<string>('ultimatum_termin');

  // Timer effect for 6 seconds
  useEffect(() => {
    let interval: number | undefined;
    if (timerActive && timerSeconds > 0) {
      interval = window.setInterval(() => {
        setTimerSeconds(s => s - 1);
      }, 1000);
    } else if (timerSeconds === 0 && timerActive) {
      setTimerActive(false);
      try {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
      } catch {
        // ignore
      }
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds]);

  // Breathing animation cycles
  useEffect(() => {
    if (!timerActive) return;
    const t = timerSeconds;
    if (t > 4) setBreathPhase('wdech_1');
    else if (t > 3) setBreathPhase('wdech_2');
    else setBreathPhase('wydech');
  }, [timerSeconds, timerActive]);

  const startResetTimer = () => {
    setTimerSeconds(6);
    setTimerActive(true);
  };

  return (
    <div className="bg-stone-50 dark:bg-stone-900/90 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 dark:text-amber-400">
            Interaktywne Laboratorium Behawioralne
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
            {config.title}
          </h3>
        </div>
      </div>
      <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
        {config.description}
      </p>

      {/* RENDER DEDICATED TOOL BY TYPE */}

      {/* 1. EMOTIONAL THERMOMETER */}
      {config.type === 'emotional_thermometer' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-stone-950 p-5 rounded-xl border border-stone-200 dark:border-stone-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                Poziom pobudzenia układu autonomicznego:
              </span>
              <span className={`text-sm font-bold px-2.5 py-1 rounded-full ${
                arousalLevel < 40 
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  : arousalLevel < 70
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
              }`}>
                {arousalLevel}% – {arousalLevel < 40 ? 'Strefa Kory Przedczołowej (Spokój)' : arousalLevel < 70 ? 'Strefa Pobudzenia (Czujność)' : 'Amygdala Hijack (Porwanie Emocjonalne!)'}
              </span>
            </div>

            <input 
              type="range" 
              min="10" 
              max="100" 
              value={arousalLevel} 
              onChange={e => setArousalLevel(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer h-2 bg-stone-200 dark:bg-stone-800 rounded-lg"
            />

            <div className="mt-4 p-4 rounded-xl text-sm leading-relaxed bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800">
              {arousalLevel < 40 && (
                <p className="text-emerald-800 dark:text-emerald-300">
                  <strong>Stan optymalny:</strong> Kora przedczołowa w pełni kontroluje narrację. Tętno poniżej 75 bpm. Jesteś zdolny do głębokiego słuchania, niuansowania i empatii.
                </p>
              )}
              {arousalLevel >= 40 && arousalLevel < 70 && (
                <p className="text-amber-800 dark:text-amber-300">
                  <strong>Strefa ostrzegawcza:</strong> Zwiększa się wyrzut noradrenaliny. Pojawia się pokusa obrony i udowadniania racji. Warto zwolnić tempo mowy i wziąć głębszy oddech.
                </p>
              )}
              {arousalLevel >= 70 && (
                <p className="text-rose-800 dark:text-rose-300">
                  <strong>Alarm czerwony:</strong> Ciało migdałowate odcięło racjonalne myślenie! Tętno powyżej 100 bpm. Krew odpłynęła z kory mózgowej do mięśni. Cokolwiek teraz powiesz, niemal na pewno będzie destrukcyjne. Uruchom natychmiast protokół 6 sekund!
                </p>
              )}
            </div>
          </div>

          {/* 6-Second Breathing & Reset Tool */}
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-700/5 dark:from-amber-950/40 dark:to-stone-950 p-6 rounded-xl border border-amber-200/60 dark:border-amber-900/40 text-center">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
              Biologiczny Protokół 6 Sekund: Fizjologiczne Westchnienie
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400 max-w-md mx-auto mb-5">
              Dwa szybkie wdechy nosem (drugi dopompowujący) + długi, powolny wydech ustami. Nerw błędny natychmiast wyhamowuje akcję serca.
            </p>

            <div className="relative w-36 h-36 mx-auto mb-4 flex flex-col items-center justify-center rounded-full bg-white dark:bg-stone-900 border-4 border-amber-500 shadow-md">
              <span className="text-4xl font-serif font-bold text-amber-700 dark:text-amber-400">
                {timerSeconds}
              </span>
              <span className="text-xs uppercase tracking-wider font-medium text-stone-500 mt-1">
                {timerActive ? (
                  breathPhase === 'wdech_1' ? 'Wdech nosem...' :
                  breathPhase === 'wdech_2' ? 'Do-wdech!' : 'Długi wydech...'
                ) : 'Sekund'}
              </span>
            </div>

            <button
              onClick={startResetTimer}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-medium text-sm transition-colors shadow-sm"
            >
              {timerActive ? <RotateCcw className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {timerActive ? 'Zresetuj stoper' : 'Rozpocznij 6-sekundowy reset'}
            </button>
          </div>
        </div>
      )}

      {/* 2. HABIT LOOP DISSECTOR */}
      {config.type === 'habit_loop_dissector' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
                1. Wskazówka (Wyzwalacz sensoryczny / emocjonalny)
              </label>
              <input 
                type="text" 
                value={habitCue} 
                onChange={e => setHabitCue(e.target.value)}
                className="w-full text-sm p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200"
              />
            </div>

            <div className="bg-white dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
                2. Pragnienie (Ukryta potrzeba dopaminowa)
              </label>
              <input 
                type="text" 
                value={habitCraving} 
                onChange={e => setHabitCraving(e.target.value)}
                className="w-full text-sm p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200"
              />
            </div>

            <div className="bg-white dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-1">
                3. Dotychczasowa Reakcja (Zły nawyk)
              </label>
              <input 
                type="text" 
                value={habitResponse} 
                onChange={e => setHabitResponse(e.target.value)}
                className="w-full text-sm p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200"
              />
            </div>

            <div className="bg-white dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
                4. Nagroda (To, czego mózg tak naprawdę szukał)
              </label>
              <input 
                type="text" 
                value={habitReward} 
                onChange={e => setHabitReward(e.target.value)}
                className="w-full text-sm p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200"
              />
            </div>
          </div>

          <div className="p-5 rounded-xl bg-amber-50 dark:bg-stone-900 border border-amber-200 dark:border-stone-800">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-700" />
              Zaprojektuj 20 Sekund Tarcia (Friction Barrier):
            </h4>
            <input 
              type="text" 
              value={frictionPlan} 
              onChange={e => setFrictionPlan(e.target.value)}
              placeholder="Jak fizycznie utrudnisz wykonanie reakcji o przynajmniej 20 sekund?"
              className="w-full text-sm p-3 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
            />
            <p className="text-xs text-stone-500 mt-2">
              Wskazówka: Zmiana reakcji wymaga zachowania tej samej wskazówki i tej samej nagrody emocjonalnej, ale wprowadzenia zastępczej ścieżki (np. szklanka zimnej wody lub 10 pajacyków zamiast papierosa/Instagrama).
            </p>
          </div>
        </div>
      )}

      {/* 3. SOCIAL PRESSURE SIMULATOR */}
      {config.type === 'social_pressure_sim' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { id: 0, title: 'Zebranie Zarządu', desc: 'Wszyscy milcząco aprobują nierealny budżet' },
              { id: 1, title: 'Kolejka do Restauracji', desc: 'Tłum stoi do modnego lokalu, ignorując alternatywy' },
              { id: 2, title: 'Kupno Samochodu', desc: 'Grupa znajomych namawia na auto ponad stan' }
            ].map(sc => (
              <button
                key={sc.id}
                onClick={() => setSelectedGroupScenario(sc.id)}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  selectedGroupScenario === sc.id
                    ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 font-medium'
                    : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-700 dark:text-stone-300 hover:border-stone-300'
                }`}
              >
                <div className="text-sm font-semibold mb-1">{sc.title}</div>
                <div className="text-xs text-stone-500">{sc.desc}</div>
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
            <h4 className="font-semibold text-sm text-stone-900 dark:text-stone-100 mb-2">
              Kreator Konstruktywnego Dyssensu:
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-stone-50 dark:bg-stone-900 rounded-lg text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                <strong>Zasada psychologiczna:</strong> Jeśli powiesz: „Nie zgadzam się, robicie błąd”, grupa zaatakuje Cię jak intruza. Jeśli powiesz: „Mamy ten sam cel i zależy mi na naszym wspólnym sukcesie, dlatego zbadajmy ryzyko...”, otwierasz ich korę przedczołową.
              </div>
              <textarea
                value={dissentStrategy}
                onChange={e => setDissentStrategy(e.target.value)}
                placeholder="Napisz swoją wersję wypowiedzi przełamującej presję grupy..."
                rows={3}
                className="w-full text-sm p-3 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100"
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. RECIPROCITY DETECTOR */}
      {config.type === 'reciprocity_detector' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-stone-950 p-5 rounded-xl border border-stone-200 dark:border-stone-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 block mb-1">
                  Wartość otrzymanego gestu/daru (zł):
                </label>
                <input 
                  type="number" 
                  value={giftValue} 
                  onChange={e => setGiftValue(Math.max(1, Number(e.target.value)))}
                  className="w-full text-sm p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 block mb-1">
                  Wartość oczekiwanego ustępstwa/zakupu (zł):
                </label>
                <input 
                  type="number" 
                  value={requestedValue} 
                  onChange={e => setRequestedValue(Math.max(1, Number(e.target.value)))}
                  className="w-full text-sm p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase font-bold text-amber-800 dark:text-amber-300">
                  Współczynnik Asymetrii Długu:
                </span>
                <span className="text-lg font-bold font-serif text-amber-900 dark:text-amber-200">
                  {(requestedValue / giftValue).toFixed(1)}x
                </span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                {(requestedValue / giftValue) > 5 ? (
                  <span className="text-rose-700 dark:text-rose-400 font-semibold">
                    Skrajna asymetria manipulacyjna! Drobny, nieproszony podarunek ma wywołać wielokrotnie większy transfer wartości pod płaszczykiem etykiety towarzyskiej.
                  </span>
                ) : (
                  <span>
                    Stosunkowo zrównoważona wymiana, jednak pamiętaj: każda przysługa w relacji komercyjnej jest wkalkulowanym kosztem pozyskania klienta.
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5. GASLIGHTING REALITY ANCHOR */}
      {config.type === 'gaslighting_anchor' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-rose-50/50 dark:bg-rose-950/20 p-4 rounded-xl border border-rose-200 dark:border-rose-900/40">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-400 block mb-2">
                Narracja Manipulatora (Zacieranie Faktów):
              </span>
              <textarea 
                value={gaslightStatement}
                onChange={e => setGaslightStatement(e.target.value)}
                rows={3}
                className="w-full text-xs p-3 rounded-lg border border-rose-200 dark:border-rose-800 bg-white dark:bg-stone-950 text-stone-800 dark:text-stone-200"
              />
            </div>

            <div className="bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/40">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 block mb-2">
                Materialny Ślad Rzeczywistości (Kotwica Prawdy):
              </span>
              <textarea 
                value={objectiveFact}
                onChange={e => setObjectiveFact(e.target.value)}
                rows={3}
                className="w-full text-xs p-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-stone-950 text-stone-800 dark:text-stone-200"
              />
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400">
            <strong>Zasada żelazna:</strong> Nigdy nie kłóć się z gaslighterem o jego interpretację. Twoja odpowiedź brzmi: „Moja notatka i ustalenia są jasne. Nie będę dyskutować o mojej pamięci”.
          </div>
        </div>
      )}

      {/* 6. RED FLAG MATRIX & GRAY ROCK */}
      {config.type === 'red_flag_matrix' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'karanie_cisza', label: 'Karanie ciszą (Silent Treatment)' },
              { id: 'falszywy_komplement', label: 'Złośliwa uwaga w żarcie' },
              { id: 'dramat_oskarzenie', label: 'Dramatyczne oskarżenie („Nigdy mnie nie wspierasz!”)' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setProvocationType(item.id)}
                className={`text-xs px-3.5 py-2 rounded-lg font-medium border transition-colors ${
                  provocationType === item.id 
                    ? 'bg-amber-700 text-white border-amber-700' 
                    : 'bg-white dark:bg-stone-950 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
            <span className="text-xs uppercase font-bold text-amber-700 dark:text-amber-400 block mb-2">
              Zalecana odpowiedź metodą Szarego Kamienia (Gray Rock):
            </span>
            <div className="p-4 rounded-lg bg-stone-100 dark:bg-stone-900 font-mono text-sm text-stone-800 dark:text-stone-200 mb-3">
              {provocationType === 'karanie_cisza' && '„Zauważyłem, że potrzebujesz teraz ciszy. Daj mi znać, gdy będziesz gotowy wrócić do ustaleń”. (Następnie wracasz do swoich spraw bez dopytywania).'}
              {provocationType === 'falszywy_komplement' && '„Aha. Ciekawe spostrzeżenie”. (Neutralne spojrzenie w oczy bez uśmiechu, po czym zmiana tematu lub powrót do pracy).'}
              {provocationType === 'dramat_oskarzenie' && '„Słyszę, że masz takie zdanie. Ja pamiętam to inaczej. Porozmawiajmy, gdy emocje opadną”.'}
            </div>
            <p className="text-xs text-stone-500">
              Szary kamień nie dostarcza dopaminy ani adrenaliny. Manipulator wygasza zachowanie, bo „nie ma w co uderzyć”.
            </p>
          </div>
        </div>
      )}

      {/* 7. SUNK COST CALCULATOR */}
      {config.type === 'sunk_cost_calculator' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
              <label className="text-xs text-stone-500 block mb-1">Utopione pieniądze (zł):</label>
              <input 
                type="number" 
                value={sunkMoney} 
                onChange={e => setSunkMoney(Number(e.target.value))}
                className="w-full text-sm p-2 rounded border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900"
              />
            </div>
            <div className="bg-white dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
              <label className="text-xs text-stone-500 block mb-1">Poświęcone miesiące:</label>
              <input 
                type="number" 
                value={sunkMonths} 
                onChange={e => setSunkMonths(Number(e.target.value))}
                className="w-full text-sm p-2 rounded border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900"
              />
            </div>
            <div className="bg-white dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
              <label className="text-xs text-stone-500 block mb-1">Prognoza na kolejny rok:</label>
              <select 
                value={futureProspect}
                onChange={e => setFutureProspect(e.target.value as 'zle' | 'niepewne' | 'dobre')}
                className="w-full text-sm p-2 rounded border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900"
              >
                <option value="zle">Dalsze straty / toksyczność</option>
                <option value="niepewne">Brak perspektyw poprawy</option>
                <option value="dobre">Realny, policzalny zwrot</option>
              </select>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-amber-50/70 dark:bg-stone-900 border border-amber-200 dark:border-stone-800">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-2">
              Diagnoza Zero-Base Thinking:
            </h4>
            <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
              Zainwestowane <strong>{sunkMoney.toLocaleString('pl-PL')} zł</strong> oraz <strong>{sunkMonths} miesięcy</strong> przepadły na zawsze. Kontynuowanie projektu nie zwróci ani złotówki z przeszłości, a jedynie zwiększy stratę o kolejne 12 miesięcy Twojego bezcennego życia. Jeśli prognoza to „{futureProspect}”, natychmiastowe cięcie strat jest jedynym matemetycznie i psychologicznie racjonalnym wyborem.
            </p>
          </div>
        </div>
      )}

      {/* 8. DEVIL'S ADVOCATE */}
      {config.type === 'devils_advocate_test' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
            <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 block mb-1">
              Przekonanie, które chcesz przetestować:
            </label>
            <input 
              type="text" 
              value={chosenBelief} 
              onChange={e => setChosenBelief(e.target.value)}
              className="w-full text-sm p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900"
            />
          </div>

          <div className="p-4 rounded-xl bg-amber-50 dark:bg-stone-900 border border-amber-200 dark:border-stone-800">
            <span className="text-xs uppercase font-bold text-amber-800 dark:text-amber-300 block mb-1">
              Wyzwanie Adwokata Diabła (Ideological Turing Test):
            </span>
            <p className="text-xs text-stone-600 dark:text-stone-400 mb-3">
              Wciel się w rolę najmądrzejszego i najbardziej kulturalnego przeciwnika tego poglądu. Jakie są 2 najsilniejsze argumenty przeciwko Twojej tezie?
            </p>
            <textarea 
              value={counterArgument}
              onChange={e => setCounterArgument(e.target.value)}
              placeholder="Wpisz najsilniejszy argument przeciwnej strony..."
              rows={3}
              className="w-full text-xs p-3 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100"
            />
          </div>
        </div>
      )}

      {/* 9. BODY LANGUAGE CALIBRATOR */}
      {config.type === 'body_language_calibrator' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'skrzyzowane_ramiona', label: 'Skrzyżowane ramiona i odchylenie' },
              { id: 'dotykanie_szyi', label: 'Dotykanie szyi / poprawianie kołnierzyka' },
              { id: 'brak_kontaktu', label: 'Wzrok błądzący po podłodze' }
            ].map(cue => (
              <button
                key={cue.id}
                onClick={() => setSelectedCue(cue.id)}
                className={`text-xs p-3 rounded-lg border font-medium text-left transition-colors ${
                  selectedCue === cue.id 
                    ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100'
                    : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-700 dark:text-stone-300'
                }`}
              >
                {cue.label}
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs leading-relaxed space-y-2">
            {selectedCue === 'skrzyzowane_ramiona' && (
              <>
                <p><strong>Stan neurobiologiczny:</strong> Bariera somatyczna chroniąca klatkę piersiową i serce. Odruchowy sygnał defensywy lub sceptycyzmu.</p>
                <p><strong>Zalecana reakcja:</strong> Nie atakuj. Podaj rozmówcy fizyczny przedmiot (długopis, filiżankę, próbkę materiału), by musiał naturalnie otworzyć dłonie, i obniż ton głosu.</p>
              </>
            )}
            {selectedCue === 'dotykanie_szyi' && (
              <>
                <p><strong>Stan neurobiologiczny:</strong> Pacynkowanie (tzw. pacifying behavior). Stymulacja tętnic szyjnych w celu obniżenia tętna pod wpływem nagłego lęku lub kłamstwa.</p>
                <p><strong>Zalecana reakcja:</strong> Zauważ ukryty stres: „Czy jest coś w tym punkcie, co budzi pana szczególny niepokój?”.</p>
              </>
            )}
            {selectedCue === 'brak_kontaktu' && (
              <>
                <p><strong>Stan neurobiologiczny:</strong> Przeciążenie poznawcze lub wstyd. Mózg odcina bodźce wzrokowe, by przetworzyć wewnętrzne napięcie.</p>
                <p><strong>Zalecana reakcja:</strong> Daj rozmówcy 5 sekund całkowitej ciszy. Nie pospieszaj.</p>
              </>
            )}
          </div>
        </div>
      )}

      {/* 10. CALIBRATED QUESTIONS LAB */}
      {config.type === 'calibrated_questions_lab' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'ultimatum_termin', label: '„Musisz to zrobić na jutro rano albo koniec!”' },
              { id: 'cenowe_roszczenie', label: '„Jesteście za drodzy, dajcie 30% rabatu!”' },
              { id: 'brak_zaangazowania', label: '„Nigdy nie masz dla mnie czasu!”' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setSelectedAggression(item.id)}
                className={`text-xs px-3.5 py-2 rounded-lg font-medium border transition-colors ${
                  selectedAggression === item.id 
                    ? 'bg-amber-700 text-white border-amber-700' 
                    : 'bg-white dark:bg-stone-950 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-3">
            <span className="text-xs uppercase font-bold text-amber-700 dark:text-amber-400 block">
              Zalecana formuła Empatii Taktycznej i Pytania Kalibrowanego:
            </span>
            <div className="p-4 rounded-lg bg-stone-100 dark:bg-stone-900 font-mono text-xs text-stone-800 dark:text-stone-200 space-y-2">
              {selectedAggression === 'ultimatum_termin' && (
                <>
                  <p><strong>1. Etykieta afektu:</strong> „Wygląda na to, że presja czasu jest ogromna i od tego zależy spokój całego projektu”.</p>
                  <p><strong>2. Pytanie kalibrowane:</strong> „Jak mam zapewnić najwyższą jakość raportu, mając na to zaledwie kilka godzin w nocy?”.</p>
                </>
              )}
              {selectedAggression === 'cenowe_roszczenie' && (
                <>
                  <p><strong>1. Etykieta afektu:</strong> „Rozumiem, że budżet jest napięty i każda złotówka ma kluczowe znaczenie”.</p>
                  <p><strong>2. Pytanie kalibrowane:</strong> „Co możemy odjąć z zakresu prac, aby zmieścić się w tej kwocie bez uszczerbku dla efektu?”.</p>
                </>
              )}
              {selectedAggression === 'brak_zaangazowania' && (
                <>
                  <p><strong>1. Etykieta afektu:</strong> „Słyszę, jak bardzo czujesz się osamotniony i jak bardzo brakuje ci naszej bliskości...”.</p>
                  <p><strong>2. Pytanie kalibrowane:</strong> „Co możemy wspólnie zrobić w ten weekend, byś poczuł, że jesteś dla mnie najważniejszy?”.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
