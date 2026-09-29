import React, { useState } from 'react';
import {
  Users,
  Eye,
  ShieldCheck,
  Award,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  CheckCircle2,
  RefreshCw,
  Scale,
  Brain,
  MessageSquare
} from 'lucide-react';

interface AschParticipant {
  id: number;
  name: string;
  avatar: string;
  answer: 'A' | 'B' | 'C' | null;
  isAlly?: boolean;
}

export const SocialInfluenceLabWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'asch' | 'cialdini' | 'bystander' | 'framing' | 'audit'>('asch');

  // 1. ASCH EXPERIMENT SIMULATOR STATE
  const [hasAlly, setHasAlly] = useState<boolean>(false);
  const [aschStep, setAschStep] = useState<'intro' | 'answering' | 'userChoice' | 'result'>('intro');
  const [simAnswers, setSimAnswers] = useState<AschParticipant[]>([
    { id: 1, name: 'Michał (Uczestnik 1)', avatar: '👨‍💼', answer: null },
    { id: 2, name: 'Katarzyna (Uczestnik 2)', avatar: '👩‍🔬', answer: null },
    { id: 3, name: 'Piotr (Uczestnik 3)', avatar: '👨‍💻', answer: null },
    { id: 4, name: 'Anna (Uczestnik 4)', avatar: '👩‍🎨', answer: null },
    { id: 5, name: 'Krzysztof (Uczestnik 5)', avatar: '👨‍🏫', answer: null },
    { id: 6, name: 'Zofia (Uczestnik 6)', avatar: '👩‍⚕️', answer: null }
  ]);
  const [userAschChoice, setUserAschChoice] = useState<'A' | 'B' | 'C' | null>(null);

  const startAschSim = () => {
    setAschStep('answering');
    setUserAschChoice(null);
    const answers: AschParticipant[] = [
      { id: 1, name: 'Michał (Uczestnik 1)', avatar: '👨‍💼', answer: 'A' },
      { id: 2, name: 'Katarzyna (Uczestnik 2)', avatar: '👩‍🔬', answer: 'A' },
      { id: 3, name: 'Piotr (Uczestnik 3)', avatar: '👨‍💻', answer: 'A' },
      { id: 4, name: hasAlly ? 'Anna (Twój Cichy Sojusznik)' : 'Anna (Uczestnik 4)', avatar: '👩‍🎨', answer: hasAlly ? 'C' : 'A', isAlly: hasAlly },
      { id: 5, name: 'Krzysztof (Uczestnik 5)', avatar: '👨‍🏫', answer: 'A' },
      { id: 6, name: 'Zofia (Uczestnik 6)', avatar: '👩‍⚕️', answer: 'A' }
    ];
    setSimAnswers(answers);
    setTimeout(() => {
      setAschStep('userChoice');
    }, 1500);
  };

  const handleUserAschSelect = (choice: 'A' | 'B' | 'C') => {
    setUserAschChoice(choice);
    setAschStep('result');
  };

  // 2. CIALDINI PRINCIPLES DECODER
  const [selectedCialdini, setSelectedCialdini] = useState<number>(0);
  const cialdiniPrinciples = [
    {
      name: 'Reguła Wzajemności (Reciprocity)',
      tag: 'Ewolucyjny przymus rewanżu',
      scenario: 'Konsultant oferuje darmowy, obszerny 30-stronicowy audyt Twojej firmy z pyszną kawą, a na końcu prosi o podpisanie rocznego kontraktu doradczego.',
      mechanism: 'Darmowy dar wytwarza dyskomfort psychiczny („on tak się dla mnie napracował”), co drastycznie obniża asertywność przy wycenie usługi.',
      countermeasure: 'Przeformułuj intencję: «To darmowa próbka marketingowa, a nie bezinteresowny dar». Podziękuj za materiał i oceń ofertę wyłącznie przez pryzmat liczb i potrzeb.'
    },
    {
      name: 'Zaangażowanie i Konsekwencja (Consistency)',
      tag: 'Pułapka własnego wizerunku',
      scenario: 'Przedstawiciel prosi Cię na ulicy o podpisanie petycji o czyste powietrze (mały krok), a po tygodniu dzwoni z prośbą o comiesięczną wpłatę 100 zł na fundację.',
      mechanism: 'Gdy raz zadeklarowałeś się jako „osoba dbająca o środowisko”, odmowa wpłaty wywołuje dysonans poznawczy z Twoim nowym autowizerunkiem (technika „Stopy w drzwiach”).',
      countermeasure: 'Zasada niezależności: «Podpisanie petycji było wyrazem poparcia idei, ale nie zobowiązuje mnie do ponoszenia nieplanowanych kosztów finansowych».'
    },
    {
      name: 'Społeczny Dowód Słuszności (Social Proof)',
      tag: '„Skoro inni tak robią, to prawda”',
      scenario: 'Sklep wyświetla baner: „Ponad 15 400 zadowolonych klientów kupiło ten ekspres w tym miesiącu. 98% użytkowników poleca go znajomym!”.',
      mechanism: 'W warunkach niepewności technicznej delegujemy ocenę na stado, zakładając fałszywie, że tłum dokonał rzetelnej analizy.',
      countermeasure: 'Zadaj pytanie: «Ilu z tych klientów to prawdziwi eksperci, a ilu uległo temu samemu banerowi co ja?». Poszukaj niezależnych testów laboratoryjnych.'
    },
    {
      name: 'Sympatia i Podobieństwo (Liking)',
      tag: 'Efekt aureoli i komplementy',
      scenario: 'Sprzedawca aut zauważa naklejkę Twojego ulubionego klubu, uśmiecha się szeroko i mówi: „Też kocham ten klub! Od razu widać, że zna się Pan na rzeczy! Przygotuję dla Pana specjalną ofertę jak dla brata”.',
      mechanism: 'Poczucie podobieństwa i pochlebstwo aktywują układ nagrody, wyłączając naturalną czujność handlową.',
      countermeasure: 'Oddziel człowieka od transakcji: «To bardzo sympatyczny człowiek, ale kupuję samochód od firmy, a nie sympatię od kolegi». Oceń umowę tak, jakby przedstawił ją wróg.'
    },
    {
      name: 'Autorytet (Authority)',
      tag: 'Mundury, tytuły i atrybuty władzy',
      scenario: 'Reklama suplementu przedstawia aktora w białym fartuchu lekarskim ze stetoskopem na tle biblioteki medycznej, który z powagą zaleca preparat.',
      mechanism: 'Mózg automatycznie ulega symbolom autorytetu, oszczędzając energię na sprawdzanie certyfikatów i badań klinicznych.',
      countermeasure: 'Zadaj 2 pytania: 1) Czy ten człowiek jest autentycznym ekspertem w TEJ dziedzinie? 2) Czy ma interes finansowy w tym, bym mu uwierzył?'
    },
    {
      name: 'Niedostępność (Scarcity)',
      tag: 'Lęk przed utratą szansy (FOMO)',
      scenario: '„Tylko do północy rabat 50%! Zostały ostatnie 2 sztuki w magazynie! Zegar odlicza: 02:45...”.',
      mechanism: 'Zagrożenie utraty swobody wyboru wywołuje reaktancję psychiczną i wyrzut adrenaliny, uniemożliwiając chłodną kalkulację.',
      countermeasure: 'Zastosuj 24-godzinną kwarantannę. Jeśli produkt jest naprawdę wartościowy, będzie dostępny również jutro. Pośpiech to sygnatura manipulacji.'
    },
    {
      name: 'Jedność (Unity)',
      tag: '„My kontra reszta świata”',
      scenario: 'Lider grupy powtarza: „My, prawdziwi pasjonaci / pracownicy naszej wspaniałej rodziny firmowej, musimy trzymać się razem i poświęcić weekend na bezpłatne nadgodziny”.',
      mechanism: 'Odwołanie do wspólnoty plemiennej sprawia, że odmowa jest traktowana jak zdrada rodziny.',
      countermeasure: 'Pamiętaj: Praca to kontrakt gospodarczy, a nie rodzina. Wierność wartościom nie oznacza zgody na bezpłatny wyzysk pod hasłem jedności.'
    }
  ];

  // 3. BYSTANDER EFFECT SIMULATOR
  const [bystanderStage, setBystanderStage] = useState<number>(0);
  const bystanderSteps = [
    {
      title: 'Krok 1: Zauważenie Zdarzenia',
      desc: 'Idziesz zatłoczonym korytarzem biurowca i kątem oka widzisz pracownika siedzącego na schodach z głową w dłoniach.',
      obstacle: 'Przeszkoda: Pośpiech, rozproszenie w telefonie, tunel uwagowy.',
      solution: 'Świadome podniesienie wzroku i rejestracja nietypowego bodźca w otoczeniu.'
    },
    {
      title: 'Krok 2: Interpretacja jako Sytuacja Awaryjna',
      desc: 'Wokół przechodzą dziesiątki ludzi, nikt się nie zatrzymuje. Pytasz w myślach: „Czy on płacze, ma zawał, czy tylko sprawdza telefon?”.',
      obstacle: 'Przeszkoda: Pluralistyczna ignorancja (spokój innych tłumi Twój niepokój).',
      solution: 'Zasada ostrożności: Lepiej zapytać raz za dużo niż zignorować czyjś stan przedzawałowy.'
    },
    {
      title: 'Krok 3: Przyjęcie Osobistej Odpowiedzialności',
      desc: 'Myślisz: „Tu jest 100 osób z działu HR i medycznego, dlaczego akurat ja mam podchodzić?”.',
      obstacle: 'Przeszkoda: Rozproszenie odpowiedzialności (ciężar dzieli się na 100 osób).',
      solution: 'Wewnętrzny imperatyw: «Jeśli nikt nie podchodzi, to znaczy, że odpowiedzialność spoczywa na mnie w 100%».'
    },
    {
      title: 'Krok 4: Wybór Formy Pomocy',
      desc: 'Decydujesz, jak zareagować: czy podejść samemu, czy wezwać ochronę i ratowników.',
      obstacle: 'Przeszkoda: Poczucie braku kompetencji medycznych lub lęk przed wyjściem na natręta.',
      solution: 'Proste podejście: «Dzień dobry, czy wszystko w porządku? Czy potrzebuje Pan pomocy medycznej?».'
    },
    {
      title: 'Krok 5: Wdrożenie Działania i Mobilizacja Tłumu',
      desc: 'Mężczyzna mówi, że drętwieje mu lewa ręka. Wokół natychmiast zbiera się gapiący się tłum.',
      obstacle: 'Przeszkoda: Paraliż decyzyjny pod spojrzeniami innych.',
      solution: 'Indywidualizacja: Wskaż konkretnego świadka: «Panie w szarej marynarce, proszę dzwonić pod 112, a Pani w okularach niech przyniesie apteczkę z recepcji!». Tłum natychmiast zaczyna działać.'
    }
  ];

  // 4. FRAMING & PERSUASION LAB
  const [selectedFraming, setSelectedFraming] = useState<'gain' | 'loss'>('gain');

  // 5. AUTONOMY AUDIT
  const [auditScores, setAuditScores] = useState<number[]>([3, 3, 3, 3, 3]);
  const auditQuestions = [
    'Potrafię powiedzieć „nie” prośbie znajomego bez wymyślania kłamliwych usprawiedliwień.',
    'Gdy cała grupa w pracy zachwyca się pomysłem, który uważam za wadliwy, głośno zgłaszam swoje wątpliwości.',
    'Nigdy nie kupuję produktów pod wpływem licznika czasu („oferta wygasa za 5 minut”) bez 24h namysłu.',
    'Nie czuję przymusu rewanżu, gdy ktoś obdarowuje mnie nieproszonym, natrętnym prezentem.',
    'Weryfikuję fakty i źródła, nawet gdy informację przekazuje osoba z prestiżowym tytułem lub stanowiskiem.'
  ];

  const calculateTotalAudit = () => {
    return auditScores.reduce((a, b) => a + b, 0);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 my-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Laboratorium Rozdziału 33
              </span>
              <span className="text-xs text-slate-400">Interaktywny Symulator</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
              Laboratorium Wpływu Społecznego i Autonomii
            </h3>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('asch')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'asch'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            1. Eksperyment Ascha
          </button>
          <button
            onClick={() => setActiveTab('cialdini')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'cialdini'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            2. Dekoder Cialdiniego
          </button>
          <button
            onClick={() => setActiveTab('bystander')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'bystander'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            3. Efekt Widza (5 Kroków)
          </button>
          <button
            onClick={() => setActiveTab('framing')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'framing'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            4. Ramowanie (Framing)
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'audit'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            5. Test Autonomii
          </button>
        </div>
      </div>

      {/* TAB 1: ASCH EXPERIMENT SIMULATOR */}
      {activeTab === 'asch' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-indigo-400" />
                  Symulator Eksperymentu Solomona Ascha (1951)
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Sprawdź, jak reaguje ludzki umysł, gdy cała grupa z kamienną twarzą wskazuje fałszywą odpowiedź.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-slate-200">
                  <input
                    type="checkbox"
                    checked={hasAlly}
                    onChange={(e) => setHasAlly(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  Dodaj „Sojusznika Prawdy” (rozbija jednomyślność)
                </label>
                <button
                  onClick={startAschSim}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-indigo-600/30"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Rozpocznij Próbę Krytyczną
                </button>
              </div>
            </div>

            {/* VISUAL LINES DISPLAY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 my-4">
              {/* REFERENCE LINE */}
              <div className="flex flex-col items-center justify-center p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-4">Linia Wzorcowa (X)</span>
                <div className="h-44 flex items-end justify-center w-full">
                  <div className="w-5 bg-indigo-500 rounded-t-md shadow-lg shadow-indigo-500/30" style={{ height: '140px' }} />
                </div>
                <span className="text-xs text-slate-400 mt-3 font-mono">Długość: 140 mm</span>
              </div>

              {/* COMPARISON LINES */}
              <div className="flex flex-col items-center justify-center p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">Linie Porównawcze (A, B, C)</span>
                <div className="h-44 flex items-end justify-around w-full px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-5 bg-rose-500 rounded-t-md shadow-md shadow-rose-500/20" style={{ height: '90px' }} />
                    <span className="text-xs font-bold text-slate-200">A (90 mm)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-5 bg-amber-500 rounded-t-md shadow-md shadow-amber-500/20" style={{ height: '190px' }} />
                    <span className="text-xs font-bold text-slate-200">B (190 mm)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-5 bg-emerald-500 rounded-t-md shadow-md shadow-emerald-500/20" style={{ height: '140px' }} />
                    <span className="text-xs font-bold text-emerald-400">C (140 mm)</span>
                  </div>
                </div>
                <span className="text-xs text-slate-400 mt-3 font-mono">Która linia jest identyczna z X?</span>
              </div>
            </div>

            {/* PARTICIPANTS SIMULATION */}
            {aschStep !== 'intro' && (
              <div className="space-y-4 my-6">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-400" />
                  Głosy pozostałych uczestników w sali (odpowiadają przed Tobą):
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {simAnswers.map((p) => (
                    <div
                      key={p.id}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        p.isAlly
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                          : 'bg-slate-900 border-slate-700/80 text-slate-200'
                      }`}
                    >
                      <div className="text-2xl mb-1">{p.avatar}</div>
                      <div className="text-[11px] font-medium text-slate-300 truncate">{p.name}</div>
                      <div className="mt-2 text-sm font-bold">
                        {p.answer ? (
                          <span
                            className={`px-2 py-0.5 rounded text-xs ${
                              p.answer === 'C' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                            }`}
                          >
                            Wybrał: {p.answer}
                          </span>
                        ) : (
                          <span className="text-slate-500 text-xs">Czeka...</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* USER DECISION BLOCK */}
            {aschStep === 'userChoice' && (
              <div className="p-6 bg-indigo-950/40 border border-indigo-500/40 rounded-2xl text-center space-y-4 animate-fadeIn">
                <h5 className="text-base font-bold text-white">
                  Teraz Twoja kolej! Cała sala patrzy na Ciebie. Jaka jest Twoja odpowiedź?
                </h5>
                <p className="text-xs text-indigo-200">
                  {hasAlly
                    ? 'Widzisz, że większość wskazała A, ale Anna jako jedyna wskazała C.'
                    : 'Wszyscy poprzednicy bez wahania wskazali ewidentnie za krótką linię A.'}
                </p>
                <div className="flex justify-center gap-4 pt-2">
                  <button
                    onClick={() => handleUserAschSelect('A')}
                    className="px-6 py-3 bg-rose-600/80 hover:bg-rose-600 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-rose-600/20"
                  >
                    Linia A (Wybór Grupy)
                  </button>
                  <button
                    onClick={() => handleUserAschSelect('B')}
                    className="px-6 py-3 bg-amber-600/80 hover:bg-amber-600 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-amber-600/20"
                  >
                    Linia B
                  </button>
                  <button
                    onClick={() => handleUserAschSelect('C')}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-600/20"
                  >
                    Linia C (Obiektywna Prawda)
                  </button>
                </div>
              </div>
            )}

            {/* RESULT & PSYCHOLOGICAL ANALYSIS */}
            {aschStep === 'result' && (
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700 space-y-4">
                <div className="flex items-center gap-3">
                  {userAschChoice === 'C' ? (
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <h5 className="text-base font-bold text-white">
                      {userAschChoice === 'C'
                        ? 'Wykazałeś Odporność na Konformizm Percepcyjny!'
                        : 'Uległeś Konformizmowi Normatywnemu (Wybór Grupy)!'}
                    </h5>
                    <p className="text-xs text-slate-300">
                      Twój wybór: <span className="font-bold text-indigo-300">Linia {userAschChoice}</span> | Obiektywna prawda: <span className="font-bold text-emerald-300">Linia C</span>
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <p>
                    <strong className="text-white">Co mówi nauka?</strong> W badaniach Ascha 75% ludzi przynajmniej raz uległo fałszywej opinii większości. Czuli silne pobudzenie układu współczulnego (potliwość, przyspieszony puls), wywołane pierwotnym lękiem przed byciem jedynym odmieńcem w stadzie.
                  </p>
                  <p>
                    <strong className="text-white">Rola Sojusznika:</strong> {hasAlly ? 'Obecność choćby jednej osoby (Anny), która wyłamała się z jednomyślności, obniżyła prawdopodobieństwo Twojego błędu o ponad 80%! To dowodzi, jak potężną siłę wyzwalającą ma pojedynczy głos sprzeciwu w zespole.' : 'Brak jakiegokolwiek sojusznika sprawił, że presja normatywna była maksymalna (100% jednomyślności stada).'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: CIALDINI PRINCIPLES DECODER */}
      {activeTab === 'cialdini' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* PRINCIPLES LIST */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                7 Zasad Wpływu Społecznego
              </span>
              {cialdiniPrinciples.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCialdini(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all border ${
                    selectedCialdini === idx
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                      : 'bg-slate-800/50 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-xs font-bold text-white">{item.name}</div>
                  <div className="text-[11px] text-indigo-300/80 mt-0.5">{item.tag}</div>
                </button>
              ))}
            </div>

            {/* DETAILS PANEL */}
            <div className="lg:col-span-2 bg-slate-800/60 p-6 rounded-2xl border border-slate-700 space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{cialdiniPrinciples[selectedCialdini].name}</h4>
                  <span className="text-xs text-indigo-300">{cialdiniPrinciples[selectedCialdini].tag}</span>
                </div>
              </div>

              {/* SCENARIO */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Realistyczny Scenariusz / Pułapka:
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-200 leading-relaxed">
                  {cialdiniPrinciples[selectedCialdini].scenario}
                </div>
              </div>

              {/* MECHANISM */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Brain className="w-4 h-4" />
                  Mechanizm Psychologiczny w Mózgu:
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  {cialdiniPrinciples[selectedCialdini].mechanism}
                </div>
              </div>

              {/* COUNTERMEASURE */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Protokół Asertywnej Obrony Autonomii:
                </div>
                <div className="p-4 bg-emerald-950/30 rounded-xl border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed">
                  {cialdiniPrinciples[selectedCialdini].countermeasure}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: BYSTANDER EFFECT (5 STEPS) */}
      {activeTab === 'bystander' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Model 5 Kroków Interwencji Świadka (Darley & Latané)
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Dlaczego obecność tłumu paraliżuje pomoc i jak świadomie pokonać każdy z 5 progów decyzyjnych.
              </p>
            </div>

            {/* PROGRESS STEPPER */}
            <div className="grid grid-cols-5 gap-2">
              {bystanderSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setBystanderStage(idx)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    bystanderStage === idx
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg'
                      : bystanderStage > idx
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase">Krok {idx + 1}</div>
                  <div className="text-xs font-semibold truncate hidden sm:block mt-1">
                    {step.title.split(':')[1] || step.title}
                  </div>
                </button>
              ))}
            </div>

            {/* STAGE DETAILS CARD */}
            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h5 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">
                    {bystanderStage + 1}
                  </span>
                  {bystanderSteps[bystanderStage].title}
                </h5>
                <div className="text-xs text-slate-400">Etap {bystanderStage + 1} z 5</div>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                {bystanderSteps[bystanderStage].desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-rose-950/30 rounded-xl border border-rose-500/30 text-xs text-rose-200">
                  <div className="font-bold flex items-center gap-1.5 mb-1 text-rose-300">
                    <AlertTriangle className="w-4 h-4" /> Pułapka Psychologiczna:
                  </div>
                  {bystanderSteps[bystanderStage].obstacle}
                </div>
                <div className="p-4 bg-emerald-950/30 rounded-xl border border-emerald-500/30 text-xs text-emerald-200">
                  <div className="font-bold flex items-center gap-1.5 mb-1 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4" /> Antidotum Behawioralne:
                  </div>
                  {bystanderSteps[bystanderStage].solution}
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  disabled={bystanderStage === 0}
                  onClick={() => setBystanderStage((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs rounded-xl text-slate-300"
                >
                  Poprzedni Krok
                </button>
                <button
                  disabled={bystanderStage === bystanderSteps.length - 1}
                  onClick={() => setBystanderStage((prev) => Math.min(bystanderSteps.length - 1, prev + 1))}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-xs font-semibold rounded-xl text-white flex items-center gap-1"
                >
                  Następny Krok <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: FRAMING & PERSUASION */}
      {activeTab === 'framing' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-indigo-400" />
                Laboratorium Ramowania Językowego (Framing Effect)
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Zobacz, jak zamiana pojedynczych słów narzuca ramę zysku lub straty, radykalnie wpływając na podejmowane decyzje.
              </p>
            </div>

            {/* TOGGLE RAMA */}
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setSelectedFraming('gain')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedFraming === 'gain'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                }`}
              >
                Rama Zysku (Gain Frame)
              </button>
              <button
                onClick={() => setSelectedFraming('loss')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedFraming === 'loss'
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                }`}
              >
                Rama Straty (Loss Frame)
              </button>
            </div>

            {/* COMPARISON EXAMPLES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* MEDICAL DECISION */}
              <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Przykład Medyczny (Kahneman & Tversky)
                </div>
                <div className="p-4 bg-slate-900 rounded-xl text-xs text-slate-200 leading-relaxed">
                  {selectedFraming === 'gain' ? (
                    <span className="text-emerald-300 font-semibold">
                      „Zastosowanie tej terapii gwarantuje ocalenie życia 400 osób z 600 chorych pacjentów”.
                    </span>
                  ) : (
                    <span className="text-rose-300 font-semibold">
                      „Brak wdrożenia tej terapii oznacza nieuchronną śmierć 200 osób z 600 chorych pacjentów”.
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400">
                  <strong className="text-slate-200">Reakcja badanych:</strong> {selectedFraming === 'gain' ? '72% wybiera tę opcję (awersja do ryzyka przy zyskach).' : 'Jedynie 22% akceptuje tę opcję (poszukiwanie ryzyka przy unikaniu strat), mimo że treść matematyczna jest identyczna!'}
                </div>
              </div>

              {/* COMMERCIAL / FINANCIAL DECISION */}
              <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Przykład Finansowo-Biznesowy
                </div>
                <div className="p-4 bg-slate-900 rounded-xl text-xs text-slate-200 leading-relaxed">
                  {selectedFraming === 'gain' ? (
                    <span className="text-emerald-300 font-semibold">
                      „Inwestując w tę technologię zyskasz 2 500 zł miesięcznie w optymalizacji procesów”.
                    </span>
                  ) : (
                    <span className="text-rose-300 font-semibold">
                      „Każdego miesiąca bez tej technologii tracisz bezpowrotnie 2 500 zł ze swojego zysku”.
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400">
                  <strong className="text-slate-200">Wpływ na klienta:</strong> {selectedFraming === 'loss' ? 'Rama straty motywuje 2x silniej z powodu ewolucyjnej asymetrii (Loss Aversion).' : 'Rama zysku buduje pozytywny wizerunek, lecz wywołuje mniejszy pośpiech.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: AUTONOMY AUDIT */}
      {activeTab === 'audit' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  Szybki Test Suwerenności i Odporności Społecznej
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Oceń w skali od 1 (zupełnie się nie zgadzam) do 5 (w pełni się zgadzam) każde z poniższych twierdzeń.
                </p>
              </div>
              <div className="px-4 py-2 bg-indigo-950/80 rounded-xl border border-indigo-500/40 text-center">
                <span className="text-[10px] text-indigo-300 uppercase block font-semibold">Wynik Suwerenności</span>
                <span className="text-xl font-extrabold text-white">{calculateTotalAudit()} / 25</span>
              </div>
            </div>

            {/* QUESTIONS LIST */}
            <div className="space-y-4">
              {auditQuestions.map((q, idx) => (
                <div key={idx} className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-200">
                    <span className="font-semibold">{idx + 1}. {q}</span>
                    <span className="font-bold text-indigo-400 ml-2">{auditScores[idx]}/5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={auditScores[idx]}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setAuditScores((prev) => {
                        const copy = [...prev];
                        copy[idx] = val;
                        return copy;
                      });
                    }}
                    className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>1 (Niska odporność)</span>
                    <span>3 (Średnia)</span>
                    <span>5 (Wysoka suwerenność)</span>
                  </div>
                </div>
              ))}
            </div>

            {/* AUDIT SUMMARY */}
            <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2">
              <strong className="text-white block text-sm">Diagnoza i Rekomendacja:</strong>
              {calculateTotalAudit() >= 21 ? (
                <p className="text-emerald-300">
                  <strong>Doskonały poziom autonomii (21–25 pkt):</strong> Posiadasz wykształcone filtry krytyczne, potrafisz odmawiać i nie ulegasz automatycznie presji stada. Pamiętaj jednak o pokorze poznawczej — nikt nie jest w 100% niewrażliwy na wpływ.
                </p>
              ) : calculateTotalAudit() >= 14 ? (
                <p className="text-amber-300">
                  <strong>Umiarkowana podatność (14–20 pkt):</strong> W błahe dni radzisz sobie dobrze, ale w warunkach silnej presji autorytetu, pośpiechu lub lęku przed odrzuceniem masz tendencję do ustępowania wbrew sobie. Wdróż Protokół 24-Godzinnej Kwarantanny Decyzyjnej.
                </p>
              ) : (
                <p className="text-rose-300">
                  <strong>Wysoka podatność na wpływ normatywny (5–13 pkt):</strong> Twój lęk przed dyskomfortem społecznym i odrzuceniem często decyduje za Ciebie. Przećwicz ćwiczenia mikro-nonkonformizmu i zbadaj toksyczne długi wdzięczności w sekcji ćwiczeniowej rozdziału.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
