import React, { useState } from 'react';
import { HelpCircle, CheckCircle, BarChart3, RotateCcw, Brain, Shield, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  context: string;
  options: {
    text: string;
    pointsAuthority: number; // 0 to 3
    pointsScarcity: number; // 0 to 3
    pointsGaslight: number; // 0 to 3
    pointsEmotionalHijack: number; // 0 to 3
  }[];
}

const diagnosticQuestions: Question[] = [
  {
    id: 1,
    question: 'Wchodzi do Twojego biura osoba wyższa rangą i chłodnym tonem podważa Twój pomysł przed zespołem. Co dzieje się w pierwszej sekundzie?',
    context: 'Reakcja na presję hierarchiczną i statusową',
    options: [
      { text: 'Natychmiast czuję ucisk w gardle i wycofuję się, przepraszając za niedopatrzenie.', pointsAuthority: 3, pointsScarcity: 0, pointsGaslight: 2, pointsEmotionalHijack: 3 },
      { text: 'Zalewa mnie gwałtowna złość, podnoszę głos i wchodzę w ostrą dyskusję.', pointsAuthority: 1, pointsScarcity: 0, pointsGaslight: 1, pointsEmotionalHijack: 3 },
      { text: 'Biorę głęboki oddech, proszę o sprecyzowanie uwag i spokojnie odwołuję się do danych z raportu.', pointsAuthority: 0, pointsScarcity: 0, pointsGaslight: 0, pointsEmotionalHijack: 0 }
    ]
  },
  {
    id: 2,
    question: 'W sklepie internetowym widzisz kurs lub ubranie z pulsującym licznikiem: „Oferta wygasa za 08:34 min! Została 1 sztuka!”. Co robisz?',
    context: 'Reakcja na sztuczny niedobór i dopaminowe FOMO',
    options: [
      { text: 'Czuję przyspieszone bicie serca i szybko wpisuję numer karty, żeby nikt mnie nie ubiegł.', pointsAuthority: 0, pointsScarcity: 3, pointsGaslight: 0, pointsEmotionalHijack: 2 },
      { text: 'Zapisuję link i daję sobie minimum 24-72 godziny na ochłonięcie.', pointsAuthority: 0, pointsScarcity: 0, pointsGaslight: 0, pointsEmotionalHijack: 0 },
      { text: 'Kupuję, ale już po 10 minutach czuję niesmak i wyrzuty sumienia.', pointsAuthority: 0, pointsScarcity: 3, pointsGaslight: 1, pointsEmotionalHijack: 2 }
    ]
  },
  {
    id: 3,
    question: 'Bliska osoba lub wspólnik mówi Ci z troskliwym uśmiechem: „Przecież wcale tak nie mówiłem, coś ci się pomyliło, ostatnio jesteś strasznie przewrażliwiona/y”. Twoja reakcja?',
    context: 'Odporność na subtelny gaslighting',
    options: [
      { text: 'Zaczynam natychmiast wątpić we własną pamięć i analizuję w głowie, czy nie wariuję.', pointsAuthority: 1, pointsScarcity: 0, pointsGaslight: 3, pointsEmotionalHijack: 2 },
      { text: 'Sięgam po notatki/maile lub spokojnie trzymam się swojej wersji bez wdawania się w pyskówki.', pointsAuthority: 0, pointsScarcity: 0, pointsGaslight: 0, pointsEmotionalHijack: 0 },
      { text: 'Płaczę lub zamykam się w sobie na resztę dnia z poczuciem winy.', pointsAuthority: 2, pointsScarcity: 0, pointsGaslight: 3, pointsEmotionalHijack: 3 }
    ]
  },
  {
    id: 4,
    question: 'Musisz zacząć pisać bardzo ważny, skomplikowany dokument lub projekt, od którego zależy Twoja kariera. Jak wygląda Twój poranek?',
    context: 'Strategia radzenia sobie z lękiem przed oceną (prokrastynacja)',
    options: [
      { text: 'Siadam i piszę choćby przez 5 minut roboczy brudnopis, akceptując niedoskonałość.', pointsAuthority: 0, pointsScarcity: 0, pointsGaslight: 0, pointsEmotionalHijack: 0 },
      { text: 'Sprzątam biurko, myję okna, sortuję pocztę i szukam kolejnych artykułów przygotowawczych.', pointsAuthority: 1, pointsScarcity: 1, pointsGaslight: 1, pointsEmotionalHijack: 3 },
      { text: 'Czuję taki paraliż, że odkładam to na ostatnią noc przed terminem, pracując w panice.', pointsAuthority: 2, pointsScarcity: 2, pointsGaslight: 2, pointsEmotionalHijack: 3 }
    ]
  },
  {
    id: 5,
    question: 'Ktoś wyświadcza Ci nieproszoną, drobną przysługę (np. przynosi kawę), a 10 minut później prosi o przysługę wartą wielokrotnie więcej czasu lub pieniędzy.',
    context: 'Podatność na regułę wzajemności Cialdiniego',
    options: [
      { text: 'Zgadzam się bez wahania, bo czuję nieznośny dług wdzięczności i wstyd z odmowy.', pointsAuthority: 2, pointsScarcity: 0, pointsGaslight: 2, pointsEmotionalHijack: 2 },
      { text: 'Dziękuję za kawę, ale bez problemu i bez poczucia winy odmawiam trudnej prośby.', pointsAuthority: 0, pointsScarcity: 0, pointsGaslight: 0, pointsEmotionalHijack: 0 },
      { text: 'Zgadzam się, ale przez cały wieczór jestem wściekły/a na tę osobę i na siebie.', pointsAuthority: 2, pointsScarcity: 0, pointsGaslight: 2, pointsEmotionalHijack: 3 }
    ]
  }
];

export const DiagnosticTest: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleSelectOption = (optionIndex: number) => {
    const nextAnswers = [...answers, optionIndex];
    setAnswers(nextAnswers);

    if (currentIdx + 1 < diagnosticQuestions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentIdx(0);
    setIsFinished(false);
  };

  // Calculate scores
  let totalAuthority = 0;
  let totalScarcity = 0;
  let totalGaslight = 0;
  let totalEmotionalHijack = 0;

  answers.forEach((optIdx, qIdx) => {
    const q = diagnosticQuestions[qIdx];
    if (q && q.options[optIdx]) {
      totalAuthority += q.options[optIdx].pointsAuthority;
      totalScarcity += q.options[optIdx].pointsScarcity;
      totalGaslight += q.options[optIdx].pointsGaslight;
      totalEmotionalHijack += q.options[optIdx].pointsEmotionalHijack;
    }
  });

  const maxPossible = 15;
  const overallVulnerability = Math.round(((totalAuthority + totalScarcity + totalGaslight + totalEmotionalHijack) / (maxPossible * 2.5)) * 100);

  return (
    <div className="my-10 rounded-2xl border border-stone-300 bg-white shadow-xl overflow-hidden font-sans">
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-6 sm:p-8">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Autodiagnoza Psychologiczna</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-amber-50">
          Twój Indeks Podatności na Wpływ i Stres Decyzyjny
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Krótki, 5-pytaniowy test sprawdzający, w których obszarach codziennego życia Twój mózg najszybciej ulega manipulacji i paraliżowi.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {!isFinished ? (
          <div>
            {/* Progress Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-2">
              <span>Pytanie {currentIdx + 1} z {diagnosticQuestions.length}</span>
              <span>{Math.round(((currentIdx) / diagnosticQuestions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mb-6">
              <div
                className="bg-amber-700 h-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / diagnosticQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                {diagnosticQuestions[currentIdx].context}
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                {diagnosticQuestions[currentIdx].question}
              </h4>

              <div className="space-y-3 pt-3">
                {diagnosticQuestions[currentIdx].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 rounded-xl border border-stone-200 hover:border-amber-600 hover:bg-amber-50/40 text-stone-800 text-xs sm:text-sm font-sans transition-all flex items-start space-x-3 group"
                  >
                    <span className="w-6 h-6 rounded-full border border-stone-300 group-hover:border-amber-600 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center shrink-0 font-mono text-xs font-bold text-stone-500">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{option.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Finished State & Report */
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-900 block mb-1">
                Ogólny Poziom Podatności na Wpływ
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-amber-950 my-2">
                {overallVulnerability}%
              </div>
              <p className="text-xs sm:text-sm text-stone-700 max-w-lg mx-auto font-sans">
                {overallVulnerability > 55
                  ? 'Twój układ nerwowy często reaguje automatyczną uległością lub lękiem przed konfliktem. Ta książka wyposaży Cię w twarde tarcze kory przedczołowej.'
                  : 'Posiadasz dobrą naturalną barierę obronną, lecz w konkretnych obszarach stresu (np. autorytet lub presja czasu) możesz wciąż doświadczać wyczerpania decyzyjnego.'}
              </p>
            </div>

            {/* Sub-scores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between text-xs font-bold font-mono text-stone-800 mb-1">
                  <span>Presja Autorytetu i Statusu</span>
                  <span className="text-amber-800">{totalAuthority} / 9 pkt</span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full" style={{ width: `${(totalAuthority / 9) * 100}%` }} />
                </div>
                <p className="text-[11px] text-stone-600 mt-2 font-sans">
                  {totalAuthority > 4 ? 'Wysoka skłonność do ulegania dominacji. Zwróć szczególną uwagę na Studium Tomasza w Rozdziale 1.3.' : 'Stabilna postawa wobec hierarchii społecznej.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between text-xs font-bold font-mono text-stone-800 mb-1">
                  <span>Podatność na Manipulację Czasem i FOMO</span>
                  <span className="text-amber-800">{totalScarcity} / 6 pkt</span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-600 h-full" style={{ width: `${(totalScarcity / 6) * 100}%` }} />
                </div>
                <p className="text-[11px] text-stone-600 mt-2 font-sans">
                  {totalScarcity > 3 ? 'Twój układ nagrody gwałtownie reaguje na sztuczny pośpiech. Wprowadź zasadę 72 godzin ze Studium Marty.' : 'Wysoka odporność na impulsywne zakupy.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between text-xs font-bold font-mono text-stone-800 mb-1">
                  <span>Wrażliwość na Poczucie Winy i Gaslighting</span>
                  <span className="text-amber-800">{totalGaslight} / 9 pkt</span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-rose-600 h-full" style={{ width: `${(totalGaslight / 9) * 100}%` }} />
                </div>
                <p className="text-[11px] text-stone-600 mt-2 font-sans">
                  {totalGaslight > 4 ? 'Skłonność do brania winy na siebie. Zastosuj protokół NVC i obiektywne zapisywanie ustaleń (Studium Karoliny).' : 'Zdrowa granica psychologiczna w relacjach.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between text-xs font-bold font-mono text-stone-800 mb-1">
                  <span>Porwanie Migdałowate (Amygdala Hijack)</span>
                  <span className="text-amber-800">{totalEmotionalHijack} / 12 pkt</span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full" style={{ width: `${(totalEmotionalHijack / 12) * 100}%` }} />
                </div>
                <p className="text-[11px] text-stone-600 mt-2 font-sans">
                  {totalEmotionalHijack > 6 ? 'Mózg szybko odcina korę przedczołową pod wpływem stresu. Bezwzględnie wdróż Ćwiczenie 1 (Protokół HALT).' : 'Wysoka samoregulacja somatyczna w trudnych chwilach.'}
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs font-semibold transition flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Rozwiąż test ponownie</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
