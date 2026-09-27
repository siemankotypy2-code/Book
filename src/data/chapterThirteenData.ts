import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterThirteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Jaka jest fundamentalna różnica pomiędzy stresorem a reakcją stresową (Sekcja 13.1)?',
    topic: 'Stresor vs reakcja stresowa',
    sectionRef: 'Sekcja 13.1',
    options: [
      { label: 'A', text: 'Stresor to fizjologiczna odpowiedź organizmu, a reakcja stresowa to wydarzenie zewnętrzne.', isCorrect: false },
      { label: 'B', text: 'Stresor to bodziec lub sytuacja stawiająca wymagania, natomiast reakcja stresowa to odpowiedź organizmu i psychiki na ten bodziec.', isCorrect: true },
      { label: 'C', text: 'Stresor występuje wyłącznie w pracy, a reakcja stresowa wyłącznie w życiu prywatnym.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy – oba pojęcia oznaczają to samo.', isCorrect: false }
    ],
    explanation: 'Egzamin lub wystąpienie publiczne to stresor; przyspieszone tętno, napięcie mięśni i niepokój stanowią element reakcji stresowej.',
    keyTakeaway: 'Różne osoby mogą reagować odmiennie na ten sam stresor w zależności od jego subiektywnej oceny.'
  },
  {
    id: 2,
    question: 'Waki sposób subiektywna ocena sytuacji wpływa na przebieg reakcji stresowej (Sekcja 13.2)?',
    topic: 'Ocena sytuacji: zagrożenie vs wyzwanie',
    sectionRef: 'Sekcja 13.2',
    options: [
      { label: 'A', text: 'Reakcja organizmu zależy wyłącznie od obiektywnych parametrów fizycznych wydarzenia.', isCorrect: false },
      { label: 'B', text: 'Ocena sytuacji decyduje o tym, czy wydarzenie zostanie zinterpretowane jako niekontrolowane zagrożenie, czy jako możliwe do opanowania wyzwanie.', isCorrect: true },
      { label: 'C', text: 'Ocena sytuacji całkowicie eliminuje wydzielanie kortyzolu.', isCorrect: false },
      { label: 'D', text: 'Ocena sytuacji zachodzi wyłącznie na poziomie świadomej kory nowej po upływie kilku godzin.', isCorrect: false }
    ],
    explanation: 'Umysł analizuje wymagania sytuacji w zestawieniu z własnymi zasobami i poczuciem kontroli, co zmienia afektywny charakter pobudzenia.',
    keyTakeaway: 'Stres nie jest cechą samego wydarzenia, lecz relacją między oceną wymagań a oceną własnych możliwości.'
  },
  {
    id: 3,
    question: 'Dlaczego w stanie silnego stresu dochodzi do zawężenia pola uwagi (Sekcja 13.3)?',
    topic: 'Stres a uwaga',
    sectionRef: 'Sekcja 13.3',
    options: [
      { label: 'A', text: 'Ponieważ mózg całkowicie wyłącza zmysły wzroku i słuchu.', isCorrect: false },
      { label: 'B', text: 'Ponieważ ewolucyjny mechanizm przetrwania priorytetyzuje skanowanie sygnałów zagrożenia, co ogranicza zasoby na analizowanie pobocznych, złożonych informacji.', isCorrect: true },
      { label: 'C', text: 'Ponieważ pod wpływem stresu spada ciśnienie krwi w mózgu.', isCorrect: false },
      { label: 'D', text: 'Ponieważ zawężenie uwagi występuje wyłącznie u osób cierpiących na zaburzenia lękowe.', isCorrect: false }
    ],
    explanation: 'Zawężenie uwagi pomaga szybko zareagować na niebezpieczeństwo, ale przy złożonych zadaniach umysłowych utrudnia przypominanie sobie wiedzy i dostrzeganie alternatywnych rozwiązań.',
    keyTakeaway: 'Presja zmienia selekcję informacji, skupiając uwagę na monitorowaniu zagrożenia.'
  },
  {
    id: 4,
    question: 'W jaki sposób silny stres wpływa na proces podejmowania decyzji (Sekcja 13.4)?',
    topic: 'Stres a decyzje',
    sectionRef: 'Sekcja 13.4',
    options: [
      { label: 'A', text: 'Zwiększa zdolność do długofalowej, chłodnej analizy wszystkich wariantów.', isCorrect: false },
      { label: 'B', text: 'Skłania do wyboru rozwiązań przynoszących natychmiastową ulgę, skłania do unikania i do interpretowania niejednoznacznych sygnałów jako negatywnych.', isCorrect: true },
      { label: 'C', text: 'Uniemożliwia podjęcie jakiejkolwiek decyzji przez okres kilku dni.', isCorrect: false },
      { label: 'D', text: 'Sprawia, że wszystkie decyzje stają się obiektywnie trafniejsze.', isCorrect: false }
    ],
    explanation: 'Pod wpływem pobudzenia afektywnego umysł szuka najszybszego sposobu obniżenia napięcia, co może prowadzić do pochopnych reakcji obronnych.',
    keyTakeaway: 'Pod wpływem presji łatwo pomylić dążenie do natychmiastowej ulgi z trafnym rozwiązaniem problemu.'
  },
  {
    id: 5,
    question: 'Czym różni się stres krótkotrwały od długotrwałego obciążenia przewlekłego (Sekcja 13.6)?',
    topic: 'Stres krótkotrwały a przewlekły',
    sectionRef: 'Sekcja 13.6',
    options: [
      { label: 'A', text: 'Stres krótkotrwały mobilizuje organizm do działania, natomiast obciążenie przewlekłe bez regeneracji prowadzi do zmęczenia, spadku koncentracji i problemów ze snem.', isCorrect: true },
      { label: 'B', text: 'Stres krótkotrwały jest zawsze szkodliwy, a przewlekły zawsze obojętny dla zdrowia.', isCorrect: false },
      { label: 'C', text: 'Stres przewlekły występuje wyłącznie u sportowców wyczynowych.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy – oba stany wywołują identyczne skutki po kilku sekundach.', isCorrect: false }
    ],
    explanation: 'Krótkotrwała mobilizacja jest naturalną adaptacją; problemem staje się brak możliwości odbudowy zasobów przy ciągłym utrzymywaniu wymagań.',
    keyTakeaway: 'Nie sama mobilizacja niszczy zasoby, lecz brak czasu i przestrzeni na regenerację.'
  },
  {
    id: 6,
    question: 'Kiedy najbardziej uzasadnione jest zastosowanie strategii radzenia sobie skoncentrowanej na problemie (Sekcja 13.7)?',
    topic: 'Strategie radzenia sobie',
    sectionRef: 'Sekcja 13.7',
    options: [
      { label: 'A', text: 'Gdy sytuacja jest całkowicie niezależna od nas i nic nie można w niej zmienić.', isCorrect: false },
      { label: 'B', text: 'Gdy sytuacja jest podatna na zmianę i powiązana z realnymi przeszkodami, które można usunąć lub zreorganizować.', isCorrect: true },
      { label: 'C', text: 'Wyłącznie w sytuacjach zagrożenia życia.', isCorrect: false },
      { label: 'D', text: 'Gdy chcemy całkowicie zignorować własne emocje.', isCorrect: false }
    ],
    explanation: 'Gdy problem można zmienić, sensowne jest zbieranie informacji, planowanie i działanie. Gdy sytuacji nie da się zmienić natychmiast, kluczowa staje się regulacja emocji.',
    keyTakeaway: 'Skuteczność strategii radzenia sobie zależy od tego, czy problem znajduje się w strefie naszego wpływu.'
  },
  {
    id: 7,
    question: 'W historii Anny (Sekcja 13.8), co sprawiło, że poziom stresu zaczął spadać po rozpoczęciu prezentacji?',
    topic: 'Dynamiczny przebieg stresu',
    sectionRef: 'Sekcja 13.8',
    options: [
      { label: 'A', text: 'Anna zignorowała całą widownię i zamknęła oczy.', isCorrect: false },
      { label: 'B', text: 'Podjęcie konkretnego działania i przypomnienie sobie materiału zmieniło ocenę sytuacji i przywróciło poczucie kontroli.', isCorrect: true },
      { label: 'C', text: 'Nauczyciel przerwał wystąpienie i wystawił ocenę.', isCorrect: false },
      { label: 'D', text: 'Stres zniknął automatycznie po zażyciu leków uspokajających.', isCorrect: false }
    ],
    explanation: 'Przejście od przewidywania zagrożenia do wykonania konkretnej czynności dostarczyło nowej informacji: „sytuacja jest możliwa do opanowania”.',
    keyTakeaway: 'Stres jest procesem dynamicznym — rośnie przy poczuciu braku kontroli, a spada wraz z podjęciem ukierunkowanego działania.'
  }
];

export const chapterThirteenCaseStudyAnna: CaseStudy = {
  id: 'cs-ch13-anna-prezentacja',
  title: 'Dynamiczna Fala Stresu: Anna przed Prezentacją Publiczną',
  subtitle: 'Anatomia oceny sytuacji, zawężenia uwagi i powrotu poczucia kontroli w trakcie działania',
  protagonist: 'Anna, uczennica szkoły średniej',
  context: 'Klasa szkolna, 8:50 rano, 10 minut przed wywołaniem do odpowiedzi.',
  story: [
    'Tydzień przed wyznaczonym terminem wystąpienia Anna czuła względny spokój. Myślała: „Przygotuję slajdy, przeczytam notatki i sobie poradzę”. Stresor był odległy, a ocena sytuacji bezpieczna.',
    'Jednak w dniu prezentacji rano Anna poczuła pierwsze somatyczne oznaki mobilizacji: ścisk w żołądku, szybki oddech i zimne dłonie. Gdy weszła do klasy i zobaczyła kolegów patrzących w jej stronę, jej umysł dokonał błyskawicznej reanalizy: „A co, jeśli zapomnę słów? Wszyscy zauważą mój stres i będą się ze mnie śmiać”.',
    'Ocena wyzwania zmieniła się w ocenę zagrożenia. Uwaga Anny uległa gwałtownemu zawężeniu — zamiast skupić się na merytorycznej treści prezentacji, zaczęła monitorować twarze uczniów i swoje drżące dłonie. Część zasobów poznawczych została zajęta przez wewnętrzny alarm.',
    'Gdy nauczyciel wywołał jej nazwisko, pierwsze zdanie wypowiedziała z trudnością, chwiejnym głosem. Jednak po zrobieniu pierwszego slajdu i wykonaniu zaplanowanego krok po kroku wstępu, jej mózg otrzymał nową informację: „Mówię, pamiętam notatki, nikt się nie śmieje”.',
    'To doświadczenie zmieniło ocenę sytuacji — wzrosło subiektywne poczucie kontroli. Po dwóch minutach tętno zaczęło opadać, uwaga rozszerzyła się na całą salę, a Anna dokończyła prezentację w płynny i swobodny sposób.'
  ],
  decisionTaken: 'Anna nie uciekła z sali ani nie przerwała wystąpienia, lecz mimo lęku podjęła pierwsze zaplanowane działanie, dając swojemu układowi nerwowemu czas na aktualizację oceny sytuacji.',
  whatProtagonistSaw: 'Przed rozpoczęciem Anna widziała sytuację jako katastrofalne zagrożenie dla swojej reputacji.',
  whatWasMissed: 'Że objawy somatyczne (tętno, spocone dłonie) to nie dowód porażki, lecz biologiczne pobudzenie organizmu przygotowujące do wysiłku.',
  psychologicalAnalysis: {
    coreMechanism: 'Dynamiczny proces reakcji stresowej napędzany pętlą oceny poznawczej (ocena pierwotna: zagrożenie vs wyzwanie; ocena wtórna: zasoby i kontrola).',
    cognitiveBiases: [
      { name: 'Katastrofizacja', description: 'Przewidywanie najgorszego możliwego scenariusza (ośmieszenie przed całą klasą).', impact: 'Nasilenie lęku i pobudzenia.' },
      { name: 'Czytanie w myślach', description: 'Założenie, że rówieśnicy surowo oceniają każdy gest.', impact: 'Zawężenie uwagi na własne niedoskonałości.' }
    ],
    defenseMechanisms: [
      { name: 'Unikanie antycypacyjne', explanation: 'Chęć zgłoszenia nieprzygotowania przed wejściem na środek sali.' }
    ],
    emotionalDynamic: 'Niepokój przed zadaniem → hiperaktywacja pod presją społeczną → zawężenie uwagi → pierwsze wykonane działanie → zmiana oceny → powrót do równowagi.'
  },
  decisionProcessAnalysis: {
    trigger: 'Wywołanie nazwiska do odpowiedzi przed klasą.',
    attentionFocus: 'Drżenie rąk i reakcje rówieśników.',
    interpretation: '„Zaraz się pomylę i kompromitacja gotowa”.',
    emotion: 'Silny niepokój, napięcie mięśniowe.',
    impulse: 'Uciec lub powiedzieć, że się źle czuje.',
    action: 'Przejście na środek i przeczytanie pierwszego slajdu z notatek.',
    consequence: 'Wzrost poczucia kontroli, spadek napięcia i udana prezentacja.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Ciało migdałowate', role: 'Detekcja zagrożenia społecznego', activationState: 'Wysokie pobudzenie na początku' },
      { region: 'Kora przedczołowa', role: 'Przypominanie notatek i kierowanie wypowiedzią', activationState: 'Odzyskanie kontroli po 2 minutach działania' }
    ],
    neurotransmitters: [
      { name: 'Adrenalina i kortyzol', roleInScenario: 'Gwałtowny wyrzut w fazie oczekiwania, stabilizacja w trakcie trwania czynności.' }
    ],
    biologicalTimeline: [
      { timeMs: '8:50', process: 'Sygnał zagrożenia wyzwala wyrzut adrenaliny i przyspieszenie tętna.' },
      { timeMs: '8:52', process: 'Pierwsza opanowana fraza wysyła sygnał hamujący do układu limbicznego.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Normalizacja Pobudzenia', script: '„Moje serce bije szybciej, bo ciało daje mi energię do wystąpienia, a nie dlatego, że umieram”.', rationale: 'Przekształca interpretację z zagrożenia na mobilizację.' }
    ]
  },
  alternativePath: 'Gdyby Anna uległa impulsowi ucieczki i zgłosiła nieprzygotowanie, uniknęłaby napięcia na 10 minut, ale utrwaliłaby przekonanie, że wystąpienia są śmiertelnym zagrożeniem.',
  readerQuestion: 'W jakich sytuacjach interpretujesz przyspieszone tętno jako dowód słabości zamiast sygnał mobilizacji organizmu?',
  keyTakeaway: 'Stres nie jest stanem stałym — zmiana punktu ciężkości z myśli o zagrożeniu na konkretne działanie przywraca poczucie kontroli.'
};

export const chapterThirteenCaseStudyMarek: CaseStudy = {
  id: 'cs-ch13-marek-presja-zespol',
  title: 'Kaskada Pod Presją: Marek, Audyt i Konflikt w Zespole',
  subtitle: 'Jak przewlekłe obciążenie zmieniło uwagą, interpretację komunikatów i doprowadziło do błędnej decyzji',
  protagonist: 'Marek, kierownik projektu w firmie technologicznej',
  context: 'Biuro firmy, okres trzymiesięcznego napiętego projektu przed audytem jakościowym.',
  story: [
    'Marek od trzech miesięcy pracował po 10–12 godzin dziennie. Wymagania projektu były ogromne, a regeneracja nieistniejąca. Marek znajdował się w stanie przewlekłego obciążenia fizjologicznego.',
    'Pewnego poranka otrzymał zwięzłą wiadomość od przełożonej: „Marek, musimy pilnie przeanalizować raport finansowy projektu. Przyjdź o 14:00”. W spokojnym stanie Marek pomyślałby: „Pewnie trzeba doprecyzować koszty licencji”.',
    'Jednak w stanie wyczerpania i skrajnego pobudzenia jego uwaga była przesterowana na wygrywanie zagrożeń. Zinterpretował wiadomość jednoznacznie: „Szukają powodu, by mnie zwolnić lub obciążyć winą za opóźnienia”. Ta negatywna interpretacja natychmiast wywołała wybuch gniewu i niepokoju.',
    'Zamiast sprawdzić dane, Marek wszedł do pokoju zespołu i w podrażnionym tonie oskarżył współpracowników o niedbalstwo: „Przez wasze błędy zarząd wzywa mnie na dywanik!”. Zaskoczony i urażony zespół odpowiedział defensywnie, co podbiło poczucie izolacji u Marka.',
    'Na spotkaniu o 14:00 przełożona chciała jedynie zaoferować mu dodatkowego analityka do pomocy. Marek, będąc w trybie obronnym, zareagował podejrzliwie i sztywno, co zepsuło atmosferę rozmowy. Ten przykład pokazuje, jak stres zmienia uwagą → interpretację → decyzję → zachowanie → i reakcję otoczenia.'
  ],
  decisionTaken: 'Marek uległ automatycznej, negatywnej interpretacji pod wpływem przewlekłego stresu i zaatakował zespół przed weryfikacją faktów.',
  whatProtagonistSaw: 'Marek widział wokół siebie niekompetentny zespół i zagrażających przełożonych.',
  whatWasMissed: 'Że jego własny zmęczony układ nerwowy zniekształcał neutralne komunikaty i produkował fałszywe poczucie zagrożenia.',
  psychologicalAnalysis: {
    coreMechanism: 'Kaskadowy wpływ przewlekłego stresu na selekcję uwagi, błędy interpretacyjne i podejmowanie decyzji w relacjach.',
    cognitiveBiases: [
      { name: 'Wrogie przypisanie intencji', description: 'Interpretowanie neutralnego zaproszenia jako ataku i zapowiedzi kary.', impact: 'Agresja obronna.' },
      { name: 'Tunnel Vision (Widzenie tunelowe)', description: 'Skupienie na najgorszym scenariuszu bez zauważania alternatywnych wyjaśnień.', impact: 'Sztywność decyzyjna.' }
    ],
    defenseMechanisms: [
      { name: 'Projekcja napięcia', explanation: 'Przeniesienie własnego lęku i zmęczenia na współpracowników w postaci pretensji.' }
    ],
    emotionalDynamic: 'Przewlekłe wyczerpanie → lęk przed porażką → błędna interpretacja wiadomości → złość obronna → konflikt z zespołem → potwierdzenie obaw.'
  },
  decisionProcessAnalysis: {
    trigger: 'Zwięzły e-mail od przełożonej o spotkaniu.',
    attentionFocus: 'Myśl o możliwej utracie stanowiska.',
    interpretation: '„Chcą mnie zniszczyć i zwolnić”.',
    emotion: 'Furia połączona z lękiem.',
    impulse: 'Zaatakować zespół i zademonstrować siłę.',
    action: 'Awantura w pokoju zespołu.',
    consequence: 'Psujące się relacje, brak zaufania i osamotnienie w trudnym projekcie.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Przewlekła hiperaktywacja osi HPA', role: 'Utrzymujący się wysoki poziom kortyzolu', activationState: 'Utrata elastyczności kory przedczołowej' },
      { region: 'Ciało migdałowate', role: 'Nadwrażliwość na bodźce niejednoznaczne', activationState: 'Reagowanie na neutralny e-mail jak na bezpośredni atak' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol i noradrenalina', roleInScenario: 'Chroniczny nadmiar prowadzący do drażliwości i zaburzeń koncentracji.' }
    ],
    biologicalTimeline: [
      { timeMs: '9:05', process: 'Odebranie e-maila wyzwala natychmiastową kaskadę współczulną.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Pauza Interpretacyjna', script: '„Jestem zmęczony, więc moja pierwsza myśl może być przesadzona. Jakie są 3 inne neutralne powody tego wezwania?”.', rationale: 'Wymusza zaangażowanie kory przedczołowej przed podjęciem działania.' }
    ]
  },
  alternativePath: 'Gdyby Marek zatrzymał się na 2 minuty i dopytał przełożoną krótko e-mailowo („Oczywiście, czy chodzi o konkretny punkt kosztorysowy?”), uniknąłby awantury z zespołem.',
  readerQuestion: 'Kiedy ostatnio zinterpretowałeś czyjąś krótką wiadomość jako atak tylko dlatego, że byłeś wyczerpany?',
  keyTakeaway: 'W stanie zmęczenia i stresu Twoje pierwsze interpretacje są rzadko obiektywne — nie podejmuj na ich podstawie decyzji relacyjnych.'
};

export const chapterThirteenExerciseStressorMap: SelfExercise = {
  id: 'ex-ch13-stressor-map',
  title: 'Ćwiczenie 13.1: Mapa Stresora i Reakcji',
  subtitle: 'Rozdziel wydarzenie zewnętrzne od reakcji swojego organizmu',
  objective: 'Zbudowanie precyzyjnego wglądu w wyzwalacze napięcia.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Oddzielenie bodźca od odpowiedzi fizjologicznej aktywuje procesy self-monitoring w kory przedczołowej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Nazwij Stresor',
      instruction: 'Zapisz konkretne wydarzenie lub sytuację, która wywołuje w Tobie napięcie.',
      promptText: 'Co jest stresorem?',
      placeholder: 'Rozmowa z szefem o podwyżce / egzamin / trudna rozmowa w relacji...'
    },
    {
      stepNumber: 2,
      title: 'Wypisz Reakcje Ciała',
      instruction: 'Jakie sygnały somatyczne pojawiają się w Twoim ciele?',
      promptText: 'Reakcja ciała:',
      placeholder: 'Przyspieszone serce, ścisk w żołądku, spocone dłonie, płytki oddech...'
    },
    {
      stepNumber: 3,
      title: 'Wypisz Reakcje Umysłu i Zachowania',
      instruction: 'Jakie myśli i impulsy do działania pojawiają się w tej sytuacji?',
      promptText: 'Reakcja psychiczna:',
      placeholder: 'Myśli: „Nie dam rady”, Impuls: uciec lub przełożyć spotkanie...'
    }
  ],
  reflectionQuestions: [
    'Czy Twój stresor jest zagrożeniem dla życia, czy wymaga po prostu mobilizacji do zadania?',
    'Jak możesz wykorzystać pobudzenie ciała jako paliwo do działania?'
  ]
};

export const chapterThirteenExerciseFactsVsInterpretation: SelfExercise = {
  id: 'ex-ch13-facts-vs-interpretation',
  title: 'Ćwiczenie 13.2: Fakty kontra Interpretacja',
  subtitle: 'Odzyskaj obiektywny obraz sytuacji poprzez rozdzielenie danych od opowieści',
  objective: 'Osłabienie negatywnych automatyzmów myślowych pod wpływem stresu.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Podważenie automatycznych interpretacji redukuje nadmierne wzbudzenie ciała migdałowatego.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zapisz Sytuację',
      instruction: 'Opisz trudne wydarzenie, które wywołało Twój niepokój.',
      promptText: 'Co się wydarzyło?',
      placeholder: 'Współpracownik odwołał spotkanie 10 minut przed czasem...'
    },
    {
      stepNumber: 2,
      title: 'Wyodrębnij Czyste Fakty',
      instruction: 'Napisz tylko to, co mogłaby nagrać kamera wideo — bez ocen i przymiotników.',
      promptText: 'Fakty:',
      placeholder: 'Otrzymałem wiadomość tekstową o treści: „Nie mogę dzisiaj przyjść, przepraszam” o 13:50...'
    },
    {
      stepNumber: 3,
      title: 'Wypisz Swoje Interpretacje i Stwórz Alternatywy',
      instruction: 'Jaką historię dopowiedział Twój umysł i jakie są 2 inne możliwe wyjaśnienia?',
      promptText: 'Moja historia vs Alternatywy:',
      placeholder: 'Moja historia: „On mnie lekceważy”. Alternatywy: 1. Miał nagły wypadek rodzinny. 2. Rozchorowało mu się dziecko...'
    }
  ],
  reflectionQuestions: [
    'O ile procent spadło Twoje napięcie po wypisaniu alternatywnych wyjaśnień?',
    'Dlaczego pod wpływem stresu mózg najchętniej wybiera najgorszą możliwą wersję?'
  ]
};

export const chapterThirteenExerciseControlZone: SelfExercise = {
  id: 'ex-ch13-control-zone',
  title: 'Ćwiczenie 13.3: Co Jest Pod Moją Kontrolą?',
  subtitle: 'Uporządkuj zasoby i przestań tracić energię na rzeczy niezależne od Ciebie',
  objective: 'Przekierowanie uwagi ze strefy obaw na strefę wpływu.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Koncentracja na obszarach kontroli wzmacnia poczucie sprawczości i obniża bezradność.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wypisz Elementy Niezależne Od Ciebie',
      instruction: 'Co w tej trudnej sytuacji znajduje się poza Twoim bezpośrednim wpływem?',
      promptText: 'Brak mojej kontroli:',
      placeholder: 'Pogoda, decyzja szefa, zachowanie innych ludzi, ceny na rynku...'
    },
    {
      stepNumber: 2,
      title: 'Wypisz Elementy Pod Twoją Kontrolą',
      instruction: 'Na co dokładnie masz realny wpływ w tym momencie?',
      promptText: 'Moja strefa wpływu:',
      placeholder: 'Moje przygotowanie, moja reakcja, my słowa, mój oddech, mój czas snu...'
    },
    {
      stepNumber: 3,
      title: 'Zdefiniuj Jedno Działanie w Strefie Wpływu',
      instruction: 'Jaki jeden krok zrealizujesz jeszcze dzisiaj w obszarze, na który masz wpływ?',
      promptText: 'Mój krok:',
      placeholder: 'Przeanalizuję moje własne notatki i przygotuję 3 pytania na spotkanie...'
    }
  ],
  reflectionQuestions: [
    'Ile procent energii marnujesz codziennie na martwienie się rzeczami z punktu 1?',
    'Jak możesz świadomie odpuszczać rzeczy, których nie możesz zmienić?'
  ]
};

export const chapterThirteenExercisePressureReaction: SelfExercise = {
  id: 'ex-ch13-pressure-reaction',
  title: 'Ćwiczenie 13.4: Analiza Reakcji Pod Presją',
  subtitle: 'Przeanalizuj swój typowy schemat działania w warunkach pilności i wysokiej stawki',
  objective: 'Zwiększenie samoświadomości własnych wzorców pod presją.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Samoobserwacja zachowania w kryzysie rozwija funkcje metapoznawcze.',
  steps: [
    {
      stepNumber: 1,
      title: 'Przypomnij Sobie Sytuację Presji',
      instruction: 'Wybierz niedawne wydarzenie, gdzie działałeś pod dużą presją czasu lub oczekiwań.',
      promptText: 'Sytuacja presji:',
      placeholder: 'Pilny termin w pracy / awaria w domu / kłótnia z partnerem...'
    },
    {
      stepNumber: 2,
      title: 'Oceń Swoje Zachowanie',
      instruction: 'Czy wszedłeś w tryb walki (agresja), ucieczki (unikanie), czy zamrożenia (paraliż)?',
      promptText: 'Twój wzorzec dominujący:',
      placeholder: 'Walka — zacząłem mówić podniesionym głosem i narzucać swoje zdanie...'
    },
    {
      stepNumber: 3,
      title: 'Zaprojektuj Buchtę Bezpieczeństwa',
      instruction: 'Co możesz zrobić następnym razem w pierwszych 10 sekundach presji (np. pauza oddechowa)?',
      promptText: 'Moja procedura 10 sekund:',
      placeholder: 'Zanim odpowiem, wezmę jeden głęboki wydech i policzę w myślach do trzech...'
    }
  ],
  reflectionQuestions: [
    'Jak Twoje zachowanie pod presją wpływa na ludzi w Twoim otoczeniu?',
    'Co pomaga Ci najszybciej wrócić do równowagi po wybuchu?'
  ]
};

export const chapterThirteenExerciseAlternativeInterpretations: SelfExercise = {
  id: 'ex-ch13-alternative-interpretations',
  title: 'Ćwiczenie 13.5: Analiza Alternatywnych Interpretacji',
  subtitle: 'Przełam automatyczną katastrofizację i poszerz pole widzenia',
  objective: 'Rozbudowa elastyczności poznawczej w trudnych sytuacjach.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Tworzenie wielu hipotez roboczych aktywuje grzbietowo-boczną korę przedczołową.',
  steps: [
    {
      stepNumber: 1,
      title: 'Pierwsza Myśl Katastroficzna',
      instruction: 'Zapisz najgorszą myśl, jaka automatycznie przychodzi Ci do głowy w danej sytuacji.',
      promptText: 'Myśl katastroficzna:',
      placeholder: '„Oni na pewno uważają mnie za niekompetentnego”...'
    },
    {
      stepNumber: 2,
      title: 'Sprawdź Dowody Za i Przeciw',
      instruction: 'Jakie są twarde, obiektywne fakty potwierdzające tę myśl, a jakie jej przeczą?',
      promptText: 'Dowody za vs Dowody przeciw:',
      placeholder: 'Za: szef nie uśmiechnął się. Przeciw: w zeszłym tygodniu pochwalił mój raport i powierzył mi ważny projekt...'
    },
    {
      stepNumber: 3,
      title: 'Sformułuj Interpretację Realistyczną',
      instruction: 'Zbuduj zdanie najbardziej zgodne z pełnym obrazem faktów.',
      promptText: 'Interpretacja zrównoważona:',
      placeholder: 'Szef był po prostu zasępiony swoimi sprawami, a moje wykonanie zadania było na dobrym poziomie...'
    }
  ],
  reflectionQuestions: [
    'Dlaczego pesymistyczny automat wydaje się na początku najbardziej wiarygodny?',
    'Jak możesz ćwiczyć nawyk wątpienia w swoje pierwsze negatywne myśli?'
  ]
};

export const chapterThirteenExerciseStrategyChoice: SelfExercise = {
  id: 'ex-ch13-strategy-choice',
  title: 'Ćwiczenie 13.6: Wybór Strategii Radzenia Sobie',
  subtitle: 'Dopasuj odpowiednie narzędzie (działanie vs regulacja) do natury problemu',
  objective: 'Zwiększenie trafności w doborze metod radzenia sobie ze stresem.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Dopasowanie strategii do poziomu kontroli zapobiega zjawisku wyuczonej bezradności.',
  steps: [
    {
      stepNumber: 1,
      title: 'Oceń Zmienialność Problemu',
      instruction: 'Czy problem da się rozwiązać działaniem (zmienny), czy trzeba zaakceptować sytuację i zregulować emocje (niezmienny)?',
      promptText: 'Natura problemu:',
      placeholder: 'Zmienny — opóźnienie w projekcie / Niezmienny — decyzja urzędowa...'
    },
    {
      stepNumber: 2,
      title: 'Dobierz Strategię Działania Problemowego',
      instruction: 'Jeśli problem jest zmienny: jakie 2 kroki planistyczne wykonasz?',
      promptText: 'Działanie problemowe:',
      placeholder: 'Napiszę plan naprawczy i umówię się na spotkanie w celu renegocjacji terminu...'
    },
    {
      stepNumber: 3,
      title: 'Dobierz Strategię Regulacji Emocji',
      instruction: 'Jeśli problem jest niezmienny: jak zadbasz o swój układ nerwowy?',
      promptText: 'Regulacja emocjonalna:',
      placeholder: 'Pójdę na długi spacer, wykonam ćwiczenia oddechowe i porozmawiam z przyjacielem...'
    }
  ],
  reflectionQuestions: [
    'Czy nie próbujesz zmieniać działaniem rzeczy, które wymagają akceptacji?',
    'Czy nie uciekasz w regulację emocji przed problemami, które wymagają twardego działania?'
  ]
};

export const chapterThirteenExerciseSocialPressureMap: SelfExercise = {
  id: 'ex-ch13-social-pressure-map',
  title: 'Ćwiczenie 13.7: Analiza Sytuacji Społecznej Pod Presją',
  subtitle: 'Zbadaj wpływ lęku przed oceną grupy na swoje decyzje',
  objective: 'Odzyskanie autonomii w sytuacjach podlegających obserwacji innych.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Uświadomienie sobie lęku przed odrzuceniem społecznym obniża reaktywność ukrytych obwodów limbicznym.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zidentyfikuj Kontekst Społeczny',
      instruction: 'Opisz sytuację, w której czujesz silną presję opinii innych ludzi.',
      promptText: 'Sytuacja społeczna:',
      placeholder: 'Wypowiedź na zebraniu firmowym / spotkanie rodzinne / impreza branżowa...'
    },
    {
      stepNumber: 2,
      title: 'Nazwij Lęk Przeoczenia/Oceny',
      instruction: 'Czego konkretnie obawiasz się ze strony obserwatorów?',
      promptText: 'Główna obawa obyczajowa:',
      placeholder: 'Obawiam się, że uzna mnie za osobę niedoświadczoną lub palnę głupstwo...'
    },
    {
      stepNumber: 3,
      title: 'Zbuduj Anchor Autonomii',
      instruction: 'Sformułuj przekonanie wspierające, które przypomnisz sobie przed wejściem w tę sytuację.',
      promptText: 'Moja deklaracja autonomii:',
      placeholder: '„Mam prawo do własnego zdania i popełniania błędów — opinia innych nie definiuje mojej wartości”...'
    }
  ],
  reflectionQuestions: [
    'Ile decyzji w tym miesiącu podjąłeś tylko po to, by przypodobać się grupie?',
    'Jakie byłoby Twoje zachowanie, gdybyś wiedział, że nikt Cię nie ocenia?'
  ]
};

export const chapterThirteen: Chapter = {
  number: 13,
  title: 'Stres, Presja i Funkcjonowanie Umysłu',
  subtitle: 'Psychologia reakcji stresowej, ocena zagrożenia vs wyzwania, wpływ presji na uwagę i decyzje oraz strategie radzenia sobie',
  leadParagraph: 'Stres jest jednym z najbardziej powszechnych doświadczeń człowieka. Może pojawić się przed egzaminem, rozmową kwalifikacyjną, wystąpieniem publicznym, konfliktem czy ważną decyzją życiową. Jednocześnie stres nie zawsze jest zjawiskiem negatywnym — pewien poziom pobudzenia mobilizuje organizm do działania. Problem pojawia się wtedy, gdy wymagania sytuacji są postrzegane jako zbyt duże, zbyt nieprzewidywalne lub trudne do kontrolowania. W tym rozdziale przeanalizujemy, jak stres zmienia naszą uwagą, interpretacje i decyzje oraz jak mądrze nim zarządzać.',
  totalEstimatedPages: 56,
  sections: [
    {
      id: 'sec-13-1',
      pageNumber: 604,
      sectionNumber: '13.1',
      title: 'Czym jest stres? Stresor kontra reakcja stresowa',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'To nie stres nas niszczy, lecz nasza reakcja na niego.',
        author: 'Hans Selye'
      },
      paragraphs: [
        'Stres jest jednym z najbardziej powszechnych doświadczeń człowieka. Może pojawić się przed egzaminem, rozmową kwalifikacyjną, wystąpieniem publicznym, konfliktem, problemem finansowym czy ważną decyzją.',
        'Jednocześnie stres nie zawsze jest czymś negatywnym. Pewien poziom pobudzenia może zwiększać gotowość do działania i poprawiać efektywność. Problem pojawia się wtedy, gdy wymagania sytuacji są postrzegane jako zbyt duże, zbyt nieprzewidywalne lub zbyt trudne do kontrolowania.',
        'Stres nie jest więc wyłącznie cechą wydarzenia. Jest również związany z tym, jak człowiek ocenia wydarzenie oraz własne możliwości poradzenia sobie z nim.',
        'W praktyce kluczowe jest rozróżnienie dwóch pojęć:',
        '1. Stresor — wydarzenie lub warunek zewnętrzny/wewnętrzny, który stawia przed organizmem wymagania mobilizacyjne (np. trudny egzamin, hałas, napięty termin, chłodny e-mail od szefa).',
        '2. Reakcja stresowa — odpowiedź organizmu i psychiki na stresor (przyspieszone tętno, spadek temperatury dłoni, podwyższone napięcie mięśniowe, wyczulenie uwagi, niepokój).',
        'To rozróżnienie jest fundamentalne, ponieważ ten sam stresor może wywołać całkowicie odmienne reakcje u różnych ludzi. Dla jednej osoby wystąpienie publiczne będzie ekscytującym wyzwaniem, dla drugiej źródłem paraliżującego napięcia.'
      ]
    },
    {
      id: 'sec-13-2',
      pageNumber: 609,
      sectionNumber: '13.2',
      title: 'Ocena sytuacji: Zagrożenie kontra wyzwanie i znaczenie kontroli',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Człowiek nie reaguje wyłącznie na to, co rzeczywiście się wydarzyło w świecie fizycznym. Reaguje również na przewidywanie tego, co może się wydarzyć. Jeżeli uczeń myśli: „Jeżeli pomylę się podczas odpowiedzi, wszyscy będą się ze mnie śmiać”, jego organizm uruchamia reakcję stresową jeszcze przed otwarciem ust.',
        'Ważna staje się więc ocena sytuacji. Można ją przedstawić uproszczonym modelem przetwórczym:',
        'Co się dzieje? → Co to dla mnie oznacza? → Czy mam nad tym kontrolę? → Czy mam zasoby, żeby sobie poradzić?',
        'Ta sama sytuacja może zostać oceniona jako:',
        '• Zagrożenie — gdy wymagania przewyższają dostrzegane zasoby, a konsekwencje błędu wydają się niebezpieczne dla reputacji lub poczucia bezpieczeństwa.',
        '• Wyzwanie — gdy sytuacja stawia wysokie wymagania, ale człowiek uważa, że posiada zasoby lub możliwości nauki, by stawić im czoła.',
        'To nie oznacza, że człowiek może dowolnie, na zawołanie zmienić swoją reakcję. Ocena zależy od wcześniejszych doświadczeń, osobowości, aktualnego poziomu zmęczenia, posiadanej wiedzy, wsparcia społecznego oraz realnych warunków otoczenia.'
      ],
      exerciseRef: chapterThirteenExerciseFactsVsInterpretation
    },
    {
      id: 'sec-13-3',
      pageNumber: 614,
      sectionNumber: '13.3',
      title: 'Stres a uwaga i procesy poznawcze',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'W sytuacji niebezpieczeństwa lub silnego niepokoju uwaga ulega ewolucyjnemu zawężeniu. Ma to głęboki sens z punktu widzenia przetrwania na sawannie — człowiek nie potrzebował analizować wszystkich możliwych informacji, lecz musiał natychmiast dostrzec źródło zagrożenia.',
        'Problem pojawia się wtedy, gdy zawężenie uwagi utrudnia rozwiązanie złożonego problemu umysłowego. Uczeń podczas egzaminu może znać materiał, ale w stanie silnego stresu skupia uwagę niemal wyłącznie na myśli: „Nie mogę popełnić błędu, czas ucieka”. Wtedy znaczna część zasobów pamięci roboczej zostaje zajęta monitorowaniem samego zagrożenia.',
        'Presja zmienia nie tylko to, co człowiek czuje, ale również to, na czym koncentruje uwagę:',
        '• Przed meczem zawodnik analizuje każdy drobny gest rywala.',
        '• Przed rozmową kwalifikacyjną kandydat skupia się na własnym wyglądzie lub drżeniu głosu.',
        '• Podczas konfliktu człowiek zwraca uwagę głównie na sygnały potwierdzające brak szacunku ze strony rozmówcy.',
        'W każdym przypadku dochodzi do specyficznej selekcji informacji, co utrudnia obiektywny ogląd całości.'
      ]
    },
    {
      id: 'sec-13-4',
      pageNumber: 619,
      sectionNumber: '13.4',
      title: 'Stres a proces podejmowania decyzji',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Pod wpływem presji i wzbudzenia emocjonalnego człowiek podejmuje decyzje inaczej niż w warunkach spokoju. Czasami presja pomaga podjąć szybki krok, ale gdy sytuacja wymaga spokojnej, wielowątkowej analizy, silny stres staje się przeszkodą.',
        'Szczególnie pod wpływem stresu człowiek wykazuje skłonność do:',
        '1. Wybierania rozwiązań dających natychmiastową ulgę emocjonalną (np. ucieczka, zerwanie rozmowy, odłożenie decyzji).',
        '2. Unikania trudnych, ale koniecznych wyborów.',
        '3. Przeceniania skrajnych, negatywnych scenariuszy.',
        '4. Niezauważania alternatywnych opcji działania.',
        '5. Interpretowania niejednoznacznych lub neutralnych komunikatów jako wrogich i zagrażających.',
        'Przykładowo: pracownik otrzymuje zwięzły e-mail od przełożonego ze słowami: „Musimy omówić Twój projekt”. W spokojnym stanie pomyślałby: „Chce ustalić szczegóły”. Pod wpływem przewlekłego stresu myśli: „Na pewno chce mnie zwolnić” i reaguje agresywnie lub wycofaniem, co wywołuje realne napięcie w relacji.'
      ],
      exerciseRef: chapterThirteenExerciseControlZone
    },
    {
      id: 'sec-13-5',
      pageNumber: 624,
      sectionNumber: '13.5',
      title: 'Presja społeczna i lęk przed oceną grupy',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Stres może wynikać nie tylko z samej trudności zadania, lecz także z obecności i obserwowalności ze strony innych ludzi. Człowiek jest istotą społeczną. Przez większość historii naszego gatunku przynależność do grupy decydowała o bezpieczeństwie i przetrwaniu, dlatego ocena ze strony stada ma ogromną wagę biochemiczną.',
        'Z tego powodu sytuacja „wszyscy na mnie patrzą” jest psychologicznie całkowicie odmienna od „robię to sam w zamkniętym pokoju”. Presja społeczna nasila:',
        '• Lęk przed oceną i ośmieszeniem,',
        '• Potrzebę dopasowania i konformizmu,',
        '• Wzmożone kontrolowanie własnego zachowania,',
        '• Skupienie uwagi na opinii obserwatorów.',
        'Jednocześnie obecność i wsparcie innych ludzi może działać jako potężny bufor buforujący stres. Poczucie wsparcia społecznego obniża poczucie osamotnienia i dostarcza zasobów emocjonalnych i praktycznych do poradzenia sobie z trudnościami.'
      ],
      exerciseRef: chapterThirteenExerciseSocialPressureMap
    },
    {
      id: 'sec-13-6',
      pageNumber: 629,
      sectionNumber: '13.6',
      title: 'Stres krótkotrwały a przewlekłe obciążenie fizjologiczne',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Krótkotrwała reakcja stresowa jest pożyteczną adaptacją — przygotowuje organizm do szybkiego wysiłku i mobilizacji. Jeżeli jednak wymagania i napięcie utrzymują się przez długi czas bez wystarczającej przestrzeni na regenerację i sen, stan ten przekształca się w przewlekłe obciążenie.',
        'Przewlekłe obciążenie wiąże się z:',
        '• Trudnościami w utrzymaniu koncentracji uwagi,',
        '• Zaburzeniami architektury snu i regeneracji,',
        '• Podwyższoną drażliwością i chwiejnością emocjonalną,',
        '• Poczuciem stałego zmęczenia i brakiem energii,',
        '• Trudnościami w podejmowaniu złożonych decyzji.',
        'Warto jednak pamiętać o zasadzie złożoności: psychologia i fizjologia nie działają wedle uproszczonego schematu „jeden objaw = jedna przyczyna”. Podobne objawy mogą wynikać z niedoborów żywieniowych, braku ruchu, infekcji czy innych czynników.'
      ]
    },
    {
      id: 'sec-13-7',
      pageNumber: 634,
      sectionNumber: '13.7',
      title: 'Strategie radzenia sobie ze stresem: Problem, emocje i wsparcie',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Nie istnieje jedna uniwersalna, idealna metoda radzenia sobie ze stresem. Skuteczność strategii zależy od natury sytuacji i poziomu naszej kontroli:',
        '1. Działanie problemowe (skoncentrowane na problemie) — stosowane, gdy sytuację da się zmienić. Obejmuje zbieranie informacji, tworzenie planu, rozbicie zadania na części, usunięcie przeszkody czy negocjacje.',
        '2. Regulacja emocji (skoncentrowana na emocjach) — stosowana, gdy sytuacji nie da się zmienić natychmiast. Obejmuje ćwiczenia oddechowe, aktywność fizyczną, odpoczynek, techniki relaksacyjne czy zmianę interpretacji.',
        '3. Poszukiwanie wsparcia społecznego — rozmowa z kimś zaufanym dostarcza nowej perspektywy, informacji, otuchy i praktycznej pomocy.',
        'Dojrzałość w zarządzaniu stresem polega na trafnym rozróżnianiu sytuacji, w których trzeba podjąć twarde działanie, od tych, w których kluczowa jest opieka nad własnym stanem emocjonalnym.'
      ],
      exerciseRef: chapterThirteenExerciseStrategyChoice
    },
    {
      id: 'sec-13-8',
      pageNumber: 639,
      sectionNumber: '13.8',
      title: 'Studium przypadku A: Anna i dynamika stresu przed prezentacją',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Przeanalizujmy historię Anny, wygłaszającej prezentację przed klasą, pokazującą dynamiczny przebieg stresu od zagrożenia do poczucia kontroli.'
      ],
      caseStudyRef: chapterThirteenCaseStudyAnna
    },
    {
      id: 'sec-13-9',
      pageNumber: 644,
      sectionNumber: '13.9',
      title: 'Studium przypadku B: Marek i kaskada błędów pod presją w zespole',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Przeanalizujmy wyczerpujący przypadek Marka, u którego przewlekły stres doprowadził do błędnej interpretacji e-maila i konfliktu z zespołem.'
      ],
      caseStudyRef: chapterThirteenCaseStudyMarek
    },
    {
      id: 'sec-13-10',
      pageNumber: 649,
      sectionNumber: '13.10',
      title: 'Zbiór Warsztatów i Ćwiczeń Rozwojowych z Rozdziału 13',
      category: 'cwiczenia',
      readingTimeMinutes: 18,
      paragraphs: [
        'Kompletny zestaw ćwiczeń do pracy nad mapowaniem stresorów, odróżnianiem faktów od interpretacji, pracą ze strefą wpływu oraz wyborem strategii radzenia sobie.'
      ],
      exerciseRef: chapterThirteenExerciseAlternativeInterpretations
    },
    {
      id: 'sec-13-11',
      pageNumber: 653,
      sectionNumber: '13.11',
      title: 'Połączenia z innymi rozdziałami: Stres, Motywacja, Tożsamość i Decyzje',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Stres jest ciasno powiązany z pozostałymi filarami funkcjonowania psychicznego:',
        '1. Stres ↔ Motywacja: Wysoki stres nasila chęć ucieczki od zadania i skłania do natychmiastowej ulgi (prokrastynacja). Uporządkowanie poziomu pobudzenia przywraca gotowość do pracy.',
        '2. Stres ↔ Tożsamość: Przekonania o sobie („jestem odporny” vs „nie radzę sobie pod presją”) bezpośrednio wpływają na wstępną ocenę sytuacji jako zagrożenia lub wyzwania.',
        '3. Stres ↔ Decyzje: Pobudzenie afektywne ogranicza dostrzeganie alternatyw i popycha w stronę wyborów dających natychmiastowe obniżenie napięcia.'
      ]
    },
    {
      id: 'sec-13-12',
      pageNumber: 657,
      sectionNumber: '13.12',
      title: 'Podsumowanie, Słownik Pojęć i Egzamin Końcowy z Rozdziału 13',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Najważniejsze idee do zapamiętania z Rozdziału 13:',
        '• Stresor to bodziec wymagający mobilizacji, a reakcja stresowa to odpowiedź fizjologiczno-psychiczna.',
        '• Ocena sytuacji (zagrożenie vs wyzwanie) oraz dostrzegane poczucie kontroli modyfikują nasilenie stresu.',
        '• Pod wpływem presji uwaga ulega zawężeniu, co ułatwia skupienie na zagrożeniu, ale utrudnia złożone myślenie.',
        '• Stres skłania do wyboru opcji dających natychmiastową ulgę emocjonalną.',
        '• Strategie radzenia sobie należy dobierać do zmienności problemu: działanie problemowe przy strefie wpływu, regulacja emocji przy braku kontroli.',
        'Słownik terminów Rozdziału 13:',
        '• Stresor — wydarzenie, sytuacja lub stan stawiający organizmowi wymagania adaptacyjne.',
        '• Ocena poznawcza — proces subiektywnej interpretacji sytuacji jako zagrożenia lub wyzwania.',
        '• Zawężenie uwagi (Tunnel Vision) — skurczenie pola uwagi i koncentracja na bodźcach związanych z zagrożeniem.',
        '• Działanie problemowe — strategia radzenia sobie ukierunkowana na zmianę obiektywnej sytuacji.',
        '• Regulacja emocji — strategia ukierunkowana na zmianę własnego stanu afektywnego i napięcia somatycznego.'
      ]
    }
  ]
};
