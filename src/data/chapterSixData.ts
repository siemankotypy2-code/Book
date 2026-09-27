import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterSixExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W klasycznym eksperymencie Solomona Ascha nad konformizmem (Sekcja 6.4), dlaczego aż 75% badanych przynajmniej raz podało ewidentnie błędną długość odcinka?',
    topic: 'Konformizm Informacyjny vs Normatywny',
    sectionRef: 'Sekcja 6.4',
    options: [
      { label: 'A', text: 'Badani mieli fizyczną wadę wzroku i nie dowidzieli planszy testowej w sztucznym oświetleniu.', isCorrect: false },
      { label: 'B', text: 'Z powodu wpływu normatywnego — lęku przed odrzuceniem przez grupę i dyskomfortu wyłamania się ze wspólnego konsensusu, mimo że wewnętrznie widzieli prawdę.', isCorrect: true },
      { label: 'C', text: 'Byli przekupieni przez asystentów badawczych przed wejściem do laboratorium.', isCorrect: false },
      { label: 'D', text: 'Mózg ludzki jest anatomicznie niezdolny do porównywania prostych figur geometrycznych w obecności innych.', isCorrect: false }
    ],
    explanation: 'Eksperyment Ascha dowiódł potęgi konformizmu normatywnego. Gdy uczestnicy mogli zapisać odpowiedź po cichu na kartce (bez wiedzy grupy), wskaźnik błędów spadał niemal do zera, co dowodzi, że widzieli prawdę, lecz bali się społecznego wykluczenia.',
    keyTakeaway: 'Konformizm często nie wynika z braku wzroku, lecz ze strachu przed izolacją.'
  },
  {
    id: 2,
    question: 'W badaniach Stanleya Milgrama nad posłuszeństwem (Sekcja 6.5) kluczowym czynnikiem sprawiającym, że 65% osób doszło do maksymalnego poziomu 450V, było:',
    topic: 'Posłuszeństwo i Stan Agentyczny',
    sectionRef: 'Sekcja 6.5',
    options: [
      { label: 'A', text: 'Wrodzony sadyzm większości populacji ujawniający się w warunkach laboratoryjnych.', isCorrect: false },
      { label: 'B', text: 'Wejście w tzw. stan agentyczny — przeniesienie moralnej odpowiedzialności za własne czyny na postrzegany autorytet (eksperymentatora).', isCorrect: true },
      { label: 'C', text: 'Hipnoza i manipulacja farmakologiczna stosowana przez prowadzącego badanie.', isCorrect: false },
      { label: 'D', text: 'Brak świadomości, że prąd elektryczny może wywołać ból fizyczny.', isCorrect: false }
    ],
    explanation: 'Milgram wykazał, że w hierarchii społecznej człowiek ma tendencję do redefiniowania siebie nie jako autonomicznego sprawcy, lecz jako „agenta wykonującego wolę wyższej instancji”. Odpowiedzialność sumienia zostaje przeniesiona w górę hierarchii.',
    keyTakeaway: 'Autorytet zwalnia jednostkę z myślenia o konsekwencjach, jeśli ta odda mu sprawczość.'
  },
  {
    id: 3,
    question: 'Na czym polega „Efekt Widza” (Bystander Effect) opisany przez Latané i Darleya (Sekcja 6.6 i 6.7)?',
    topic: 'Efekt Widza i Rozproszenie Odpowiedzialności',
    sectionRef: 'Sekcja 6.6',
    options: [
      { label: 'A', text: 'Im więcej świadków nagłego wypadku, tym statystycznie mniejsza szansa, że pojedynczy świadek podejmie natychmiastowe działanie ratunkowe.', isCorrect: true },
      { label: 'B', text: 'Ludzie w tłumie zawsze stają się agresywni i fizycznie atakują ofiarę wypadku.', isCorrect: false },
      { label: 'C', text: 'Wszyscy świadkowie zawsze uciekają z miejsca zdarzenia w ciągu pierwszych 10 sekund.', isCorrect: false },
      { label: 'D', text: 'Obecność innych ludzi natychmiast wyzwala maksymalny odruch altruistyczny u każdego obserwatora.', isCorrect: false }
    ],
    explanation: 'Gdy wokół są inni, zachodzi rozproszenie odpowiedzialności („Ktoś inny na pewno już zadzwonił po pomoc”) oraz zjawisko niewiedzy wielu (patrzymy na spokój innych i wnioskujemy, że sytuacja nie jest groźna).',
    keyTakeaway: 'Gdy wszyscy są odpowiedzialni, nikt nie czuje się odpowiedzialny indywidualnie.'
  },
  {
    id: 4,
    question: 'Podstawowy Błąd Atrybucji (Fundamental Attribution Error) polega na tym, że obserwując błąd lub potknięcie innej osoby:',
    topic: 'Błąd Atrybucji',
    sectionRef: 'Sekcja 6.12',
    options: [
      { label: 'A', text: 'Wyjaśniamy jej zachowanie cechami charakteru (np. „jest leniwy, niekompetentny”), ignorując potężny wpływ okoliczności sytuacyjnych.', isCorrect: true },
      { label: 'B', text: 'Zawsze doszukujemy się winy w warunkach atmosferycznych i pechu losowym.', isCorrect: false },
      { label: 'C', text: 'Uważamy, że sami w identycznych okolicznościach postąpilibyśmy jeszcze gorzej.', isCorrect: false },
      { label: 'D', text: 'Przypisujemy każdemu człowiekowi czyste intencje i doskonałe motywy moralne.', isCorrect: false }
    ],
    explanation: 'Gdy spóźnia się kolega, myślimy: „Jest niesłowny i niezorganizowany” (atrybucja wewnętrzna). Gdy sami się spóźniamy, myślimy: „Korki, awaria metra, wypadek na trasie” (atrybucja zewnętrzna, sytuacyjna).',
    keyTakeaway: 'Innych oceniamy po ich zachowaniu, siebie — po naszych okolicznościach i intencjach.'
  },
  {
    id: 5,
    question: 'W jaki sposób Efekt Halo (efekt aureoli) zniekształca ocenę kompetencji drugiego człowieka (Sekcja 6.10)?',
    topic: 'Efekt Halo',
    sectionRef: 'Sekcja 6.10',
    options: [
      { label: 'A', text: 'Jedna wyrazista, pozytywna cecha (np. atrakcyjność fizyczna, elokwencja) sprawia, że bezkrytycznie przypisujemy osobie inne pozytywne cechy, jak uczciwość czy inteligencja.', isCorrect: true },
      { label: 'B', text: 'Widzimy fizyczną aureolę światła wokół głów ludzi o wysokim statusie materialnym.', isCorrect: false },
      { label: 'C', text: 'Oceniający zawsze nienawidzi osób o wysokich kompetencjach technicznych.', isCorrect: false },
      { label: 'D', text: 'Powoduje całkowitą utratę pamięci krótkotrwałej po spotkaniu z autorytetem.', isCorrect: false }
    ],
    explanation: 'System 1 (zbadany w Tomie I) dąży do spójności poznawczej. Skoro ktoś jest zadbany, uśmiechnięty i pewny siebie, umysł automatycznie nadaje mu etykietę „wiarygodny profesjonalista”, zanim zbada merytoryczne fakty.',
    keyTakeaway: 'Powierzchowny blask przesłania brak merytorycznego fundamentu.'
  },
  {
    id: 6,
    question: 'W jaki sposób zjawisko niewiedzy wielu (pluralistic ignorance) paraliżuje reakcję w sytuacji zagrożenia pożarowego w biurze?',
    topic: 'Niewiedza Wielu',
    sectionRef: 'Sekcja 6.6',
    options: [
      { label: 'A', text: 'Wszyscy natychmiast mdleją z powodu braku tlenu.', isCorrect: false },
      { label: 'B', text: 'Każdy widzi dym, ale widząc pozorny spokój na twarzach kolegów (którzy maskują lęk, by nie siać paniki), dochodzi do wniosku, że to tylko rutynowy test.', isCorrect: true },
      { label: 'C', text: 'Czujniki dymu emitują fale dźwiękowe wyłączające logiczne myślenie.', isCorrect: false },
      { label: 'D', text: 'Pracownicy są przekonani, że gaszenie ognia leży wyłącznie w obowiązkach zarządu spółki.', isCorrect: false }
    ],
    explanation: 'Niewiedza wielu to stan, w którym większość członków grupy po cichu odrzuca daną normę lub obawia się zagrożenia, lecz błędnie zakłada, że inni ją w pełni akceptują. Wzajemne maskowanie zaniepokojenia prowadzi do wspólnego bezruchu.',
    keyTakeaway: 'Pozorny spokój otoczenia nie jest dowodem na bezpieczeństwo sytuacji.'
  },
  {
    id: 7,
    question: 'Jaka interwencja jest najbardziej skuteczna w natychmiastowym przełamaniu efektu widza w zatłoczonym miejscu publicznym?',
    topic: 'Przełamywanie Efektu Widza',
    sectionRef: 'Sekcja 6.7',
    options: [
      { label: 'A', text: 'Krzyczenie ogólnego hasła: „Niech ktoś szybko zadzwoni po karetkę!”.', isCorrect: false },
      { label: 'B', text: 'Wyznaczenie konkretnej osoby palcem i podanie jej precyzyjnego polecenia: „Pan w niebieskiej kurtce — proszę teraz zadzwonić pod 112!”.', isCorrect: true },
      { label: 'C', text: 'Czekanie w milczeniu, aż ktoś z większym doświadczeniem medycznym podejmie inicjatywę.', isCorrect: false },
      { label: 'D', text: 'Ucieczka na bezpieczną odległość i napisanie posta z apelem w mediach społecznościowych.', isCorrect: false }
    ],
    explanation: 'Wskazanie konkretnej jednostki imiennie lub przez wyróżnik („Pani w czerwonym płaszczu”) likwiduje rozproszenie odpowiedzialności. Ciężar decyzyjny spada w 100% na tę jedną osobę, zmuszając jej korę przedczołową do wyjścia ze stanu zablokowania.',
    keyTakeaway: 'Odpowiedzialność osobista rośnie do 100%, gdy usuniesz anonimowość tłumu.'
  }
];

export const chapterSixCaseStudySchool: CaseStudy = {
  id: 'cs-ch6-liceum-hejt',
  title: 'Konformizm na Szkolnej Grupie: Zofia i Lincz w Ciszy',
  subtitle: 'Jak 17-letnia uczennica wbrew własnemu sumieniu dołączyła do wykluczenia koleżanki z klasy',
  protagonist: 'Zofia, 17 lat, licealistka o profilu humanistycznym',
  context: 'Grupa klasowa na komunikatorze internetowym przed sprawdzianem z biologii.',
  story: [
    'Zofia uważała się za osobę wrażliwą, czytającą literaturę i sprzeciwiającą się przemocy. W piątek wieczorem na klasowej grupie komunikatora pojawił się zrzut ekranu prywatnej wiadomości Oksany — cichej dziewczyny, która dołączyła do klasy po przeprowadzce z innego miasta.',
    'Liderka klasy, Laura, opatrzyła zrzut złośliwym komentarzem: „Patrzcie, jak ta donosicielka prosi panią o przełożenie sprawdzianu, bo niby nie ma podręcznika. Wstyd, że z nami chodzi”. W ciągu 3 minut pod postem pojawiło się dwadzieścia śmiejących się reakcji i lawina szyderstw.',
    'Zofia poczuła ucisk w klatce piersiowej. Wiedziała, że Oksana opiekuje się młodszą siostrą po pracy rodziców i nie stać jej na drogi repetytorium. Zofia napisała w oknie wiadomości: „Dajcie spokój, to przecież nic złego, każdy może mieć trudniejszy tydzień”. Jednak palec zawisł nad przyciskiem „Wyślij”.',
    'W jej głowie rozbrzmiały natychmiastowe głosy: „Jeśli to wyślę, jutro na korytarzu Laura nie powie mi cześć. Nikt nie usiądzie ze mną na lunchu. Przeniosą ten hejt na mnie”. Zofia skasowała tekst. Zamiast tego... kliknęła ikonę śmiejącej się buźki pod postem Laury.',
    'W poniedziałek Oksana nie przyszła do szkoły. Zofia unikała patrzenia w lustro, czując paraliżujący wstyd i złość na własne tchórzostwo.'
  ],
  decisionTaken: 'Zofia usunęła głos wsparcia dla pokrzywdzonej i dołączyła do pozornego rechotu grupy, ulegając konformizmowi normatywnemu.',
  whatProtagonistSaw: 'Zagrożenie własną pozycją w klasie, ryzyko stania się kolejnym celem nagonki i rzekomą bezwzględną lojalność innych wobec liderki.',
  whatWasMissed: 'Że co najmniej 8 innych osób w klasie czuło dokładnie taki sam niesmak, ale wszyscy milczeli z tego samego strachu (zjawisko niewiedzy wielu).',
  psychologicalAnalysis: {
    coreMechanism: 'Konformizm normatywny wywołany lękiem przed wykluczeniem społecznym (ostracism threat) i rozproszeniem odpowiedzialności w przestrzeni cyfrowej.',
    cognitiveBiases: [
      { name: 'Niewiedza wielu (Pluralistic Ignorance)', description: 'Wszyscy po cichu potępiają hejt, ale nikt nie protestuje, sądząc, że reszta aprobuje zachowanie liderki.', impact: 'Poczucie bezsilności jednostki.' },
      { name: 'Złudzenie odporności moralnej', description: 'Przekonanie Zofii, że „w realnym świecie nigdy by tak nie postąpiła”.', impact: 'Autousprawiedliwienie po fakcie.' }
    ],
    defenseMechanisms: [
      { name: 'Racjonalizacja', explanation: '„To tylko jedna reakcja w sieci, mój sprzeciw i tak by nic nie zmienił, Laura jest zbyt wpływowa”.' }
    ],
    emotionalDynamic: 'Paniczny lęk przed społeczną śmiercią (wykluczeniem ze stada rówieśniczego), który zablokował wyższe wartości empatyczne.'
  },
  decisionProcessAnalysis: {
    trigger: 'Pojawienie się szyderczego posta Laury i 20 reakcji aprobujących.',
    attentionFocus: 'Własny status w klasie i wizja siedzenia w samotności na przerwie.',
    interpretation: '„Sprzeciw równa się natychmiastowy ostracyzm i skierowanie agresji na mnie”.',
    emotion: 'Lęk somatyczny, ucisk w mostku, wstyd antycypacyjny.',
    impulse: 'Zneutralizować zagrożenie poprzez przypodobanie się dominującej grupie.',
    action: 'Skasowanie obrony Oksany i wstawienie emotikonu aprobaty.',
    consequence: 'Dalsza izolacja Oksany, ciężkie poczucie winy Zofii i utrata szacunku do samej siebie.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Przednia kora zakrętu obręczy (dACC)', role: 'Rejestracja zagrożenia bólem wykluczenia', activationState: 'Bardzo wysoka, wywołująca stan paniki' },
      { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Świadoma kontrola wartości moralnych', activationState: 'Zdominowana przez sygnalizację ciała migdałowatego' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol i noradrenalina', roleInScenario: 'Uruchomienie trybu uległości i podporządkowania hierarchii stada' }
    ],
    biologicalTimeline: [
      { timeMs: '0 - 150 ms', process: 'Skan posta i wykrycie nazwiska liderki stada.' },
      { timeMs: '150 - 500 ms', process: 'Błyskawiczna kalkulacja kosztu sprzeciwu: zagrożenie społeczne dominuje nad empatią.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Publiczny lincz jako demonstracja władzy', description: 'Laura wyznacza kozła ofiarnego, by scementować swoją pozycję w grupie.', vulnerabilityExploited: 'Potrzeba akceptacji rówieśniczej' }
    ],
    counterMeasures: [
      { step: 'Prywatny sojusz i bezpośredni kontakt', script: 'Wysłanie prywatnej wiadomości do Oksany: „Widziałam post Laury, to było podłe. Nie jesteś sama, masz we mnie oparcie”. Następnie nawiązanie kontaktu z 2 innymi rozumnymi osobami z klasy.', rationale: 'Rozbija monolit jednomyślności bez wchodzenia w bezpośrednią pyskówkę w tłumie.' }
    ]
  },
  alternativePath: 'Gdyby Zofia wysłała przygotowaną wiadomość: „Dajcie spokój, to przecież nic złego”, co najmniej 3 inne osoby natychmiast polubiłyby jej komentarz, rozbijając dominację Laury i chroniąc Oksanę przed traumą.',
  readerQuestion: 'Kiedy ostatnio zmilczałeś żart lub przytyk raniący kogoś obok, tylko dlatego, że śmiali się wszyscy pozostali?',
  keyTakeaway: 'Brak reakcji na krzywdę w grupie nigdy nie jest neutralny — grupa odczytuje Twoje milczenie jako bezwarunkową zgodę.'
};

export const chapterSixCaseStudyFamily: CaseStudy = {
  id: 'cs-ch6-rodzina-autorytet',
  title: 'Niedzielny Obiad u Patriarchy: Cena Autonomii',
  subtitle: 'Jak 29-letni Tomasz zrezygnował z marzeń badawczych pod presją rodzinnej hierarchii',
  protagonist: 'Tomasz, 29 lat, doktorant biotechnologii',
  context: 'Uroczysty obiad z okazji 75. urodzin dziadka Mariana, emerytowanego dyrektora fabryki.',
  story: [
    'Tomasz otrzymał prestiżowe, dwuletnie stypendium naukowe w instytucie w Zurychu. Było to ukoronowanie siedmiu lat jego badań nad enzymami. Na niedzielnym obiedzie rodzinnym postanowił podzielić się tą nowiną.',
    'Przy stole siedziało dwanaście osób: rodzice, wujostwo, rodzeństwo i nestor rodu, dziadek Marian. Dziadek od lat zarządzał rodziną jak przedsiębiorstwem państwowym: jego zdanie było ostateczne, a każdy sprzeciw traktowano jako zdradę krwi.',
    'Gdy Tomasz ogłosił wyjazd, przy stole zapadła ciężka cisza. Dziadek odłożył sztućce, spojrzał surowo i powiedział podniesionym tonem: „Do Zurychu? A kto zajmie się firmą transportową wuja Marka, w którą włożyliśmy rodzinne oszczędności? Myśleliśmy, że wychowaliśmy odpowiedzialnego mężczyznę, a ty chcesz uciekać za granicę i bawić się w probówki za grosze”.',
    'Matka Tomasza natychmiast złapała się za serce, szepcząc: „Tomaszku, nie denerwuj dziadka w urodziny”. Ojciec wbił wzrok w talerz. Wuj Marek rzucił: „Egoista”. Nikt z obecnych nie zapytał Tomasza, czego on pragnie, ani nie pogratulował mu sukcesu.',
    'Tomasz poczuł potworny skurcz żołądka. Zamiast dorosłego, 29-letniego naukowca, w ułamku sekundy poczuł się jak zawstydzony 8-letni chłopiec przyłapany na kradzieży jabłek. Zamiast obronić swój dorobek, opuścił głowę i wykrztusił: „...Przemyślę to jeszcze, dziadku”. Trzy tygodnie później odrzucił ofertę z Zurychu.'
  ],
  decisionTaken: 'Tomasz zrezygnował z przełomowego stypendium naukowego, podporządkowując się autorytetowi dziadka i poczuciu winy narzuconemu przez rodzinę.',
  whatProtagonistSaw: 'Gniew patriarchy, cierpienie matki, potępienie krewnych i widmo bycia „czarną owcą” rodziny.',
  whatWasMissed: 'Że jego lęk był echem dziecięcego uwarunkowania; jako niezależny dorosły nie potrzebował już aprobaty nestora do przetrwania biologicznego.',
  psychologicalAnalysis: {
    coreMechanism: 'Posłuszeństwo wobec autorytetu rodzinnego połączone ze stanem agentycznym i lojalnością transgeneracyjną.',
    cognitiveBiases: [
      { name: 'Błąd zakorzenienia w roli dziecka (Regresja)', description: 'W obecności rodziny dorosły człowiek automatycznie przyjmuje dawną, uległą rolę z dzieciństwa.', impact: 'Utrata asertywności dorosłego decydenta.' },
      { name: 'Emocjonalny szantaż i dług wdzięczności', description: 'Przekonanie, że realizacja własnych celów jest krzywdzeniem rodziców.', impact: 'Paraliż decyzyjny.' }
    ],
    defenseMechanisms: [
      { name: 'Introjekcja', explanation: 'Tomasz bezkrytycznie przyjął przekonanie dziadka, że praca naukowa jest „małowartościowa” w porównaniu z handlem.' }
    ],
    emotionalDynamic: 'Głęboki konflikt między potrzebą autonomii a lękiem przed zerwaniem więzi pierwotnej.'
  },
  decisionProcessAnalysis: {
    trigger: 'Atak słowny dziadka Mariana i reakcja somatyczna matki.',
    attentionFocus: 'Emocjonalna reakcja rodziny i groźba odrzucenia.',
    interpretation: '„Jestem złym synem i egoistą, jeśli podążę za marzeniem”.',
    emotion: 'Wstyd, wina, strach przed wykluczeniem z rodu.',
    impulse: 'Natychmiast uspokoić dziadka i matkę za wszelką cenę.',
    action: 'Deklaracja wycofania się i późniejsza odmowa przyjęcia stypendium.',
    consequence: 'Frustracja, wypalenie zawodowe w nielubianej branży i ukryty żal do rodziny przez kolejne dekady.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Układ limbiczny (Ciało migdałowate)', role: 'Wyzwalanie reakcji zamrożenia (freeze) w obliczu gniewu dominującego samca', activationState: 'Hiperaktywacja' },
      { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Integracja emocji z hierarchią społeczną', activationState: 'Zdominowana przez dawne wspomnienia kar z dzieciństwa' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol', roleInScenario: 'Paraliż asertywności, zablokowanie ekspresji własnych potrzeb' }
    ],
    biologicalTimeline: [
      { timeMs: '0 - 300 ms', process: 'Krzyk dziadka: sygnał zagrożenia dominacyjnego w pniu mózgu.' },
      { timeMs: '300 - 1200 ms', process: 'Zalanie organizmu kortyzolem, zaciśnięcie krtani i uległa postawa ciała.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Szantaż emocjonalny FOG (Fear, Obligation, Guilt)', description: 'Użycie zdrowia matki i obowiązku wobec wuja do wymuszenia posłuszeństwa.', vulnerabilityExploited: 'Lojalność synowska i poczucie obowiązku' }
    ],
    counterMeasures: [
      { step: 'Spokojna, dojrzała asertywność z oddzieleniem faktów od emocji', script: '„Dziadku, rozumiem, że zależy ci na firmie wuja. Moja decyzja o wyjeździe do Zurychu jest jednak podjęta i nie podlega negocjacji. To dla mnie ogromna szansa. Będziemy w kontakcie telefonicznym”.', rationale: 'Ustanawia granicę dorosły-dorosły, odmawiając wejścia w rolę skruszonego dziecka.' }
    ]
  },
  alternativePath: 'Gdyby Tomasz wyjechał do Zurychu, po początkowym chłodzie rodzina po roku zaczęłaby się chwalić w towarzystwie jego sukcesami za granicą, a on sam zachowałby szacunek do siebie.',
  readerQuestion: 'Z jakiej życiowej szansy zrezygnowałeś tylko dlatego, że „w Twojej rodzinie tego się nie robi”? ',
  keyTakeaway: 'Dorosłość zaczyna się w momencie, gdy jesteś gotów znieść czyjeś rozczarowanie, aby nie zdradzić samego siebie.'
};

export const chapterSixExerciseRoles: SelfExercise = {
  id: 'ex-ch6-role-audit',
  title: 'Ćwiczenie 6.1: Audyt Masek i Ról Społecznych',
  subtitle: 'Odkryj, ile z Twoich codziennych wyborów wynika z Twojej woli, a ile ze skryptu Twojej roli',
  objective: 'Zidentyfikowanie nieświadomych norm i ograniczeń, jakie narzucają na Ciebie Twoje role w pracy, rodzinie i wśród znajomych.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Świadoma autorefleksja angażuje sieć wzbudzeń domyślnych (DMN) oraz przednią korę zakrętu obręczy, umożliwiając dekontekstualizację — oddzielenie rdzennego „ja” od automatycznych schematów behawioralnych.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zidentyfikuj 3 kluczowe role społeczne',
      instruction: 'Wypisz trzy role, w których spędzasz najwięcej czasu (np. kierownik zespołu, perfekcyjna matka, lojalny syn, wieczny wesołek w paczce przyjaciół).',
      promptText: 'Wpisz swoje 3 role oraz niepisane nakazy, jakie każda z nich Ci narzuca:',
      placeholder: 'Rola 1: W pracy - nie wolno mi okazać niewiedzy ani zawahać się przed klientem...'
    },
    {
      stepNumber: 2,
      title: 'Wykryj cenę emocjonalną roli',
      instruction: 'Zastanów się, jakich emocji i autentycznych zachowań zabrania Ci każda z tych ról. Jakie sygnały somatyczne (napięcie w karku, ścisk w żołądku) temu towarzyszą?',
      promptText: 'Czego nie wolno mi czuć ani mówić, gdy noszę tę maskę?',
      placeholder: 'Gdy jestem w roli szefa, tłumię lęk i bezsilność, co objawia się zgrzytaniem zębami...'
    },
    {
      stepNumber: 3,
      title: 'Eksperyment mikro-autentyczności',
      instruction: 'Wybierz jedną bezpieczną sytuację w tym tygodniu, w której zdejmiesz maskę roli i zareagujesz w 100% z poziomu autentycznego człowieka.',
      promptText: 'Co konkretnie powiesz lub zrobisz w wybranej sytuacji?',
      placeholder: 'Na poniedziałkowym zebraniu powiem otwarcie: „Nie znam jeszcze odpowiedzi na to pytanie, sprawdzę to do środy”...'
    }
  ],
  reflectionQuestions: [
    'Kim jesteś w momentach, gdy nikt na Ciebie nie patrzy i nikt od Ciebie niczego nie oczekuje?',
    'Którą ze swoich ról nosisz z własnego wyboru, a którą odziedziczyłeś bezrefleksyjnie po oczekiwaniach otoczenia?'
  ]
};

export const chapterSixExerciseBystander: SelfExercise = {
  id: 'ex-ch6-bystander-breaker',
  title: 'Ćwiczenie 6.2: Protokół 5 Sekund — Przełamywanie Efektu Widza',
  subtitle: 'Trening aktywnej interwencji w sytuacjach niejednoznacznych społecznie',
  objective: 'Zbudowanie gotowości do natychmiastowego przerwania paraliżu tłumu i wzięcia odpowiedzialności.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Przełamanie paraliżu decyzyjnego w ciągu pierwszych 5 sekund zapobiega przejęciu kontroli przez korę zakrętu obręczy (dACC), która pod wpływem obserwacji biernego tłumu wygasza intencję działania.',
  steps: [
    {
      stepNumber: 1,
      title: 'Analiza sytuacji z przeszłości',
      instruction: 'Przypomnij sobie sytuację z przestrzeni publicznej lub biura, w której widziałeś kogoś w potrzebie lub trudnej sytuacji, ale nie zareagowałeś, bo inni nie reagowali.',
      promptText: 'Co to była za sytuacja i jakie myśli pojawiły się w Twojej głowie w pierwszych sekundach?',
      placeholder: 'Na przystanku ktoś zasłabł, a ja pomyślałem: „Pewnie zaraz ktoś podejdzie, nie będę się wtrącał”...'
    },
    {
      stepNumber: 2,
      title: 'Sformułuj osobisty Protokół Jednoosobowy',
      instruction: 'Napisz dokładną formułę słowną, której użyjesz następnym razem, gdy zobaczysz sytuację kryzysową w obecności biernych świadków.',
      promptText: 'Jakie konkretne słowa wypowiesz do wybranego z tłumu świadka?',
      placeholder: '„Panie w czerwonej kurtce, proszę podejść i pomóc mi podnieść tego pana, a pani w okularach niech dzwoni pod 112!”'
    },
    {
      stepNumber: 3,
      title: 'Pakt z samym sobą: Zasada Pierwszego Kroku',
      instruction: 'Zadeklaruj jedną zasadę moralną, którą będziesz stosować bez względu na to, czy inni ludzie wokół Ciebie stoją w milczeniu.',
      promptText: 'Moja niezmienna zasada odpowiedzialności osobistej to:',
      placeholder: 'Gdy widzę człowieka w opresji, robię pierwszy krok w ciągu 3 sekund, zanim mój mózg zacznie kalkulować, co pomyślą inni.'
    }
  ],
  reflectionQuestions: [
    'Jak zmieniłoby się Twoje poczucie sprawczości, gdybyś zawsze uważał się za pierwszego odpowiedzialnego na miejscu zdarzenia?',
    'Czego tak naprawdę boisz się bardziej: ośmieszenia przed obcymi ludźmi czy świadomości, że nie pomogłeś?'
  ]
};

export const chapterSixExerciseAttribution: SelfExercise = {
  id: 'ex-ch6-attribution-reframing',
  title: 'Ćwiczenie 6.3: Rozbrajanie Podstawowego Błędu Atrybucji',
  subtitle: 'Przebuduj automatyczny osąd drugiego człowieka z atrybucji cech na atrybucję sytuacji',
  objective: 'Zastąpienie odruchowej wrogości i etykietowania (System 1) chłodną, empatyczną analizą kontekstu sytuacyjnego (System 2).',
  durationMinutes: 15,
  neuroScientificFoundation: 'Przejście od automatycznej oceny w ciele migdałowatym do analizy sytuacji w brzuszno-bocznej korze przedczołowej redukuje poziom katecholamin i obniża tętno spoczynkowe.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz osobę, która Cię ostatnio zirytowała',
      instruction: 'Opisz zachowanie kogoś ze swojego otoczenia (współpracownik, partner, kierowca na drodze), które wzbudziło w Tobie złość.',
      promptText: 'Co ta osoba zrobiła i jaka była Twoja pierwsza, automatyczna etykieta na jej temat?',
      placeholder: 'Kolega nie przesłał raportu na czas. Moja myśl: „To leń i ignorant, który ma gdzieś moją pracę”...'
    },
    {
      stepNumber: 2,
      title: 'Wygeneruj 3 hipotezy sytuacyjne (Zewnętrzne)',
      instruction: 'Wymyśl trzy całkowicie wiarygodne okoliczności zewnętrzne, które mogły zmusić tę osobę do takiego zachowania bez jej złej woli.',
      promptText: 'Jakie 3 niewidoczne dla Ciebie czynniki mogły wpłynąć na jej zachowanie?',
      placeholder: '1. Miał w nocy awarię w domu. 2. Jego dziecko zachorowało. 3. Otrzymał sprzeczne polecenia z zarządu...'
    },
    {
      stepNumber: 3,
      title: 'Sformułuj komunikat ciekawości zamiast ataku',
      instruction: 'Ułóż zdanie, którym rozpoczniesz rozmowę z tą osobą, pytając o fakty i okoliczności, zamiast oskarżać jej charakter.',
      promptText: 'Jak zapytasz o powody w sposób konstruktywny?',
      placeholder: '„Zauważyłem, że raport nie dotarł do 15:00. Czy coś niespodziewanego stanęło na przeszkodzie? Jak mogę pomóc zamknąć ten temat?”'
    }
  ],
  reflectionQuestions: [
    'O ile lżejsze staje się Twoje codzienne życie, gdy przestajesz przypisywać ludziom złą wolę tam, gdzie wystarczy zwykły zbieg okoliczności?',
    'Jak chciałbyś, aby inni interpretowali Twoje własne potknięcia i gorsze dni?'
  ]
};

export const chapterSix: Chapter = {
  number: 6,
  title: 'Człowiek Wśród Ludzi',
  subtitle: 'Jak obecność, presja i normy grupy bezwiednie przekształcają nasze decyzje, oceny i tożsamość',
  leadParagraph: 'W Tomie I zbadaliśmy architekturę samotnego umysłu — podwójny system, afektywne pożary ciała migdałowatego, wąskie gardło uwagi i omylną rekonstrukcję wspomnień. Jednak żaden ludzki mózg nie ewoluował w izolatorium. Nasz aparat poznawczy to w 90% procesor społeczny, nieustannie skanujący stado w poszukiwaniu akceptacji, statusu i sygnałów zagrożenia. W tym rozdziale badamy niewidzialne pole grawitacyjne grupy: od konformizmu i uległości, przez efekt widza, aż po błędy atrybucji.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-6-1',
      pageNumber: 226,
      sectionNumber: '6.1',
      title: 'Człowiek nie jest samotnym systemem: Neurobiologia stada',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Jesteśmy nie tyle myślącymi maszynami, które czują, ile społecznymi organizmami, których myślenie jest funkcją relacji ze stadem.',
        author: 'John Cacioppo'
      },
      paragraphs: [
        'Wyobraź sobie, że siedzisz w pustym pokoju i rozwiązujesz zadanie logiczne. Twoja grzbietowo-boczna kora przedczołowa (dlPFC) pracuje stabilnie, pamięć robocza żongluje przesłankami, a tętno wynosi spokojne 68 uderzeń na minutę. Teraz wyobraź sobie, że do pokoju wchodzi pięć obcych osób, staje wokół Twojego biurka i w milczeniu obserwuje każdy ruch Twojego długopisu. Co dzieje się z Twoim ciałem?',
        'W ułamku sekundy, bez Twojej świadomej zgody, kora przedczołowa traci monopol na zasoby metaboliczne. Wzgórze i ciało migdałowate uruchamiają stan czujności społecznej (Social Vigilance). Kora zakrętu obręczy (ACC) zaczyna monitorować potencjalny błąd, a układ współczulny wyrzuca noradrenalinę. Dlaczego? Ponieważ z punktu widzenia ewolucyjnego, spojrzenie stada to sprawa życia i śmierci. Samotny hominid na sawannie był martwym hominidem.',
        'Wielkim błędem potocznej psychologii jest traktowanie człowieka jako niezależnego, racjonalnego decydenta, który jedynie „od czasu do czasu kontaktuje się z innymi”. Prawda neurobiologiczna jest dokładnie odwrotna: nasz mózg to w pierwszej kolejności maszyna do koordynacji plemiennej. Sieć DMN (Default Mode Network), która włącza się, gdy tylko przestajesz liczyć równania, nie odpoczywa — ona natychmiast zaczyna symulować relacje: „Co on o mnie myśli?”, „Czy nie popełniłem gafy?”, „Kto ma dziś przewagę w zespole?”.'
      ],
      subsections: [
        {
          title: 'INTUICJA, KTÓRA MOŻE WPROWADZAĆ W BŁĄD: „Ja myślę całkowicie niezależnie”',
          paragraphs: [
            'Większość wykształconych ludzi cierpi na złudzenie introspektywnej odporności: wierzymy, że o ile inni ulegają modom, presji rówieśniczej i autorytetom, my sami podejmujemy decyzje wyłącznie w oparciu o czystą logikę i własne wartości.',
            'Badania neuroobrazowe fMRI bezlitośnie obalają ten mit. Kiedy grupa wyraża opinię sprzeczną z Twoją, obszary mózgu odpowiedzialne za błąd predykcji i ból somatyczny (przednia wyspa i grzbietowa część przedniego zakrętu obręczy - dACC) świecą się tak samo, jak przy oparzeniu palca wrzątkiem. Niezależność myślenia boli fizycznie.'
          ],
          highlightBox: {
            title: 'Wgląd Neuronaukowy',
            content: 'Odrzucenie społeczne i niezgoda z grupą aktywują te same szlaki neuronalne, co fizyczny ból nocyceptywny. Dlatego dostosowanie się do grupy jest biologiczną reakcją uśmierzającą ból.',
            type: 'neuro'
          }
        }
      ]
    },
    {
      id: 'sec-6-2',
      pageNumber: 230,
      sectionNumber: '6.2',
      title: 'Niewidzialne linie sił: Normy społeczne opisowe i nakazowe',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Wchodzisz do windy. Trzy osoby w środku stoją tyłem do drzwi, wpatrując się w tylną ścianę. Co robisz? Ponad 80% ludzi w klasycznych eksperymentach socjologicznych po kilku nerwowych sekundach obraca się o 180 stopni i również wpatruje się w ścianę. Nikt nie wydał polecenia. Nie ma żadnego prawa zabraniającego patrzenia na drzwi. Zadziałała norma społeczna — najpotężniejszy, bezszelestny regulator ludzkiego zachowania.',
        'Psycholog Robert Cialdini wprowadził fundamentalne rozróżnienie, które powinien znać każdy analityk ludzkich zachowań: normy opisowe (descriptive) oraz normy nakazowe (injunctive). Norma nakazowa mówi o tym, co ludzie POWINNI robić (wartości moralne, przepisy, deklaracje: „Nie należy śmiecić w lesie”). Norma opisowa informuje o tym, co ludzie FAKTYCZNIE ROBIĄ („Wszyscy wokół rzucają puszki pod to drzewo”).',
        'Gdy norma nakazowa zderza się z normą opisową, norma opisowa niemal zawsze wygrywa. Jeśli w firmie wisi plakat: „Zgłaszaj błędy otwarcie”, ale pracownik widzi, że koledzy tuszują pomyłki, by uniknąć reprymendy szefa, żaden plakat nie przekona go do prawdomówności. Mózg uczy się z obserwacji stada, nie z manifestów.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 1: Szpitalny oddział ratunkowy — Niepisana norma milczenia',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Młody lekarz rezydent, dr Paweł (28 lat), dyżuruje na oddziale intensywnej terapii kardiologicznej. Starszy ordynator, dyżurujący 26. godzinę z rzędu z powodu braków kadrowych, wpisuje do zlecenia dawkę leku przeciwkrzepliwego dwukrotnie wyższą od rekomendowanej dla pacjenta z ostrą niewydolnością nerek.',
            '2. Co bohater zauważył: Wzrok Pawła zatrzymuje się na rubryce z dawką miligramową. Zauważa rozszerzone źrenice i spowolnione ruchy ordynatora, a także obecność dwóch pielęgniarek, które bez słowa przygotowują strzykawki.',
            '3. Interpretacja i automatyczne założenia: W umyśle Pawła błyskawicznie rodzi się konflikt interpretacyjny. Z jednej strony: „Ta dawka wywoła krwotok wewnętrzny”. Z drugiej strony natychmiast odpala się wyuczone założenie społeczne: „Ordynator ma 30 lat doświadczenia. Jeśli zwrócę mu uwagę przy personelu, uzna to za publiczne podważenie autorytetu, a moja opinia specjalizacyjna legnie w gruzach”.',
            '4. Emocje i stan somatyczny: Suchość w gardle, nagły ucisk w klatce piersiowej, przyspieszone tętno i impuls do zamrożenia (freeze response) — chęć odwrócenia wzroku i udawania, że nie widziało się zlecenia.',
            '5. Mechanizm psychologiczny: Kolizja formalnej normy nakazowej (kodeks etyki lekarskiej: nadrzędne dobro pacjenta) z potężną, niepisaną normą opisową oddziału („Młodsi nie korygują ordynatora na forum, hierarchia chroni przed chaosem”). Dodatkowo działa efekt rozproszenia odpowiedzialności na obecne pielęgniarki.',
            '6. Alternatywne wyjaśnienia: Paweł może zakładać, że ordynator jest złośliwy lub arogancki. Bardziej precyzyjne wyjaśnienie naukowe wskazuje jednak na skrajne zmęczenie poznawcze przełożonego (wyczerpanie zasobów glukozy w korze przedczołowej po 26 godzinach czuwania) — ordynator nie działał ze złej woli, lecz popełnił błąd uwagi.',
            '7. Konsekwencje: Bierność oznaczałaby bezpośrednie zagrożenie życia pacjenta oraz wielomiesięczny, niszczący wyrzut sumienia u Pawła. Z kolei agresywny atak wywołałby obronne wyparcie ordynatora.',
            '8. Konstruktywna reakcja alternatywna: Zastosowanie techniki stopniowanej asertywności (Graded Assertiveness / protokół CUS): Paweł podchodzi bliżej i mówi cichym, spokojnym głosem bez świadków: „Panie ordynatorze, chcę się upewnić przy zleceniu dla pana Nowaka — przy jego klirensie kreatyniny norma z tego roku wskazuje 2500 jednostek. Czy modyfikujemy dawkę pod ten profil?”. Ordynator z ulgą orientuje się w pomyłce i poprawia wpis bez utraty twarzy.',
            '9. Wniosek edukacyjny dla czytelnika: Kultura milczenia w grupie opiera się na normach opisowych i strachu przed odrzuceniem. Bezpieczeństwo psychologiczne w zespole nie polega na braku hierarchii, lecz na procedurach umożliwiających bezkarne zadawanie pytań o fakty.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-3',
      pageNumber: 234,
      sectionNumber: '6.3',
      title: 'Maska staje się twarzą: Role społeczne i deindywiduacja',
      category: 'cwiczenia',
      readingTimeMinutes: 13,
      paragraphs: [
        'Kiedy wkładasz garnitur adwokata, lekarski fartuch, policyjny mundur lub identyfikator audytora korporacyjnego, nie tylko zmieniasz odzież wierzchnią. Zmieniasz matrycę decyzyjną. Zjawisko to, badane m.in. przez Ervinga Goffmana i Philipa Zimbardo, pokazuje, że rola społeczna działa jak gotowy skrypt poznawczy.',
        'W chwili wejścia w rolę, kora przedczołowa pobiera z pamięci semantycznej zestaw oczekiwań: „Jak zachowuje się twardy menedżer?”, „Co wypada lekarzowi?”, „Jak reaguje urażony ojciec?”. Jednostka zaczyna działać nie ze swojego rdzennego „ja”, lecz z persony narzuconej przez kontekst.',
        'Niebezpieczeństwo pojawia się w momencie deindywiduacji — gdy tożsamość jednostkowa zostaje całkowicie rozpuszczona w anonimowości grupy lub symbolu roli. Człowiek ukryty za ciemnymi okularami, uniformem czy anonimowym nickiem w internecie doświadcza drastycznego obniżenia samokontroli i zahamowań moralnych, ponieważ odpowiedzialność przestaje być imienna.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 2: Kamila i nowa rola kierownicza — Wchłonięcie przez skrypt persony',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Kamila (32 lata), dotychczas specjalistka w zespole marketingu i bliska koleżanka pozostałych czterech osób, awansuje na stanowisko dyrektorki działu. Od pierwszego poniedziałku przestaje jadać z nimi obiady w kuchni i wprowadza bezwzględny wymóg raportowania mailowego każdego wyjścia z biura dłuższego niż 10 minut.',
            '2. Co zauważają obie strony: Zespół widzi usztywnioną postawę ciała Kamili, formalny ton głosu i unikanie żartów. Kamila z kolei rejestruje ciche szepty kolegów w aneksie kuchennym i unikanie jej wzroku na korytarzu.',
            '3. Interpretacja i założenia: Koledzy interpretują zmianę jako zdradę i pychę: „Dostała stołek i natychmiast uderzyła jej woda sodowa do głowy”. Kamila z kolei tworzy własne założenie obronne: „Jeśli okażę jakąkolwiek słabość lub poufałość, natychmiast wejdą mi na głowę, a zarząd uzna, że nie mam cech przywódczych”.',
            '4. Emocje i stan afektywny: W zespole dominuje rozczarowanie i wrogość. U Kamili — podszyty samotnością lęk przed utratą kontroli i poczucie presji ze strony zarządu.',
            '5. Mechanizm psychologiczny: Zjawisko wchłonięcia przez rolę społeczną (Role Internalization). Kamila nie wymyśliła tego zachowania na poczekaniu — pobrała z kultury korporacyjnej gotowy, archaiczny skrypt „autorytarnego szefa”, myląc profesjonalizm z emocjonalnym chłodem.',
            '6. Alternatywne wyjaśnienia: Zamiast zakładać, że Kamila zmieniła swój charakter, bardziej rzetelna analiza wskazuje na brak przygotowania menedżerskiego i deficyt narzędzi asertywności — jej chłód nie był wyrazem arogancji, lecz zbroją chroniącą przed własną niepewnością.',
            '7. Konsekwencje: Spadek zaangażowania zespołu o 30%, odejście najlepszej copywriterki i wypalenie emocjonalne samej Kamili, która po 6 miesiącach czuła się w biurze jak w twierdzy.',
            '8. Konstruktywna reakcja alternatywna: Jawne nazwanie nowej dynamiki w rozmowie z zespołem: „Moja rola formalna się zmieniła i odpowiadam za budżet przed zarządem. Nadal jednak szanuję nasze relacje i chcę wspólnie wypracować zasady współpracy, w których jest miejsce na wzajemny szacunek i wysokie standardy”.',
            '9. Wniosek edukacyjny dla czytelnika: Jeśli nie zdefiniujesz swojej nowej roli świadomie w oparciu o własne wartości, rola zdefiniuje Ciebie według najbardziej prymitywnych stereotypów kulturowych.'
          ]
        }
      ],
      exerciseRef: chapterSixExerciseRoles
    },
    {
      id: 'sec-6-4',
      pageNumber: 238,
      sectionNumber: '6.4',
      title: 'Siła jednomyślności: Eksperymenty Ascha i anatomia konformizmu',
      category: 'studium-przypadku',
      readingTimeMinutes: 15,
      paragraphs: [
        'Wyobraź sobie klasyczne badanie Solomona Ascha: siedzisz przy stole z siedmioma innymi studentami. Badacz pokazuje dwie plansze. Na jednej jest odcinek wzorcowy X, na drugiej trzy odcinki: A, B i C. Zadanie jest banalne — wskazać, który odcinek ma tę samą długość co X. Różnica wynosi kilka centymetrów, pięcioletnie dziecko odpowiedziałoby bezbłędnie.',
        'Odpowiedzi udzielane są po kolei na głos. Jesteś przedostatni. Pierwszy uczestnik pewnym głosem mówi: „Odcinek B” (choć ewidentnie poprawny jest C!). Drugi bez wahania potwierdza: „Odcinek B”. Trzeci, czwarty, piąty, szósty — wszyscy mówią „B”. Nadchodzi Twoja kolej. Zegarek tyka. Siedem par oczu patrzy na Ciebie. Co robisz?',
        'W eksperymentach Ascha aż 75% badanych przynajmniej raz uległo jednomyślnej grupie i wskazało ewidentną bzdurę. Średnio co trzecia odpowiedź była konformistyczna. Poniższe studium przypadku ukazuje, jak ten sam mechanizm niszczy relacje młodych ludzi w dobie cyfrowej.'
      ],
      caseStudyRef: chapterSixCaseStudySchool
    },
    {
      id: 'sec-6-5',
      pageNumber: 242,
      sectionNumber: '6.5',
      title: 'Cień białego fartucha: Posłuszeństwo, autorytet i stan agentyczny',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Uniwersytet Yale, lipiec 1961 roku. Zaledwie trzy miesiące po rozpoczęciu procesu Adolfa Eichmanna w Jerozolimie, 27-letni psycholog Stanley Milgram zadaje fundamentalne pytanie: „Czy to możliwe, że Eichmann i miliony jego współpracowników w Zagładzie po prostu wykonywali rozkazy? Czy zwykły, ułożony obywatel może posunąć się do zadania drugiemu człowiekowi skrajnego cierpienia pod wpływem autorytetu?”.',
        'Rekrutowani z ogłoszenia w gazecie dorośli mężczyźni — nauczyciele, urzędnicy, inżynierowie, robotnicy — wcielają się w rolę „Nauczyciela”. Ich zadaniem jest karanie „Ucznia” (w rzeczywistości 47-letniego księgowego, aktora ukrytego za ścianą) wstrząsami elektrycznymi za każdy błąd w zadaniu skojarzeń słownych. Generator ma 30 przełączników: od 15V, przez 150V, aż po 450V oznaczone groźnym symbolem „XXX”.',
        'Wynik wywołał szok w świecie naukowym: 65% uczestników doszło do maksymalnego napięcia 450V. Jednak współczesna rewizja badań Milgrama (m.in. Gina Perry, Jerry Burger) nakazuje unikać uproszczenia, że ludzie są bezdusznymi robotami. Uczestnicy NIE byli obojętni — pocili się, drżeli, obgryzali paznokcie, błagali eksperymentatora o przerwanie próby. Co ciekawe, gdy badacz stosował czwarte, najbardziej bezpośrednie polecenie w stylu rozkazu wojskowego: „Nie masz innego wyboru, musisz kontynuować”, badani niemal zawsze odmawiali! Posłuszeństwo utrzymywało się dopóki perswazja odwoływała się do dobra nauki („Eksperyment wymaga kontynuacji”).',
        'Milgram sformułował pojęcie Stanu Agentycznego (Agentic State): w hierarchii człowiek ma tendencję do redefiniowania siebie nie jako autonomicznego sprawcy z pełną odpowiedzialnością moralną, lecz jako „narzędzia” realizującego wolę wyższej instancji.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 3: Główna księgowa Teresa i kreatywna faktura — Stan agentyczny w biurze',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Teresa (54 lata), skrupulatna główna księgowa z 25-letnim stażem, otrzymuje od prezesa spółki polecenie zaksięgowania fikcyjnej faktury za „usługi doradcze” na kwotę 120 000 zł, wystawionej przez powiązaną spółkę cypryjską tuż przed zamknięciem roku obrotowego.',
            '2. Co Teresa zauważa: Zauważa brak jakiejkolwiek dokumentacji wykonawczej (brak raportów, analiz czy korespondencji) oraz formalny podpis prezesa i jego pewny, nieznoszący sprzeciwu ton głosu: „Pani Tereso, proszę to puścić w dzisiejszej sesji, to uzgodnione z właścicielem”.',
            '3. Interpretacja i automatyczne myśli: W umyśle Teresy pojawia się racjonalizacja obronna: „Prezes jest doktorem prawa, ma radców prawnych i to on ponosi odpowiedzialność strategiczną. Ja jestem tylko pracownikiem wykonawczym wprowadzającym cyfry do programu księgowego”.',
            '4. Emocje i reakcja fizjologiczna: Ścisk w żołądku, mdłości przy uruchamianiu programu ERP, bezsenność i lęk przed kontrolą skarbową, tłumiony poczuciem lojalności wobec firmy.',
            '5. Mechanizm psychologiczny: Klasyczny stan agentyczny Milgrama połączony z rozmyciem odpowiedzialności i lękiem przed utratą statusu zawodowego tuż przed wiekiem emerytalnym.',
            '6. Alternatywne wyjaśnienia: Teresa mogłaby uważać prezesa za cynicznego przestępcę. W rzeczywistości prezes mógł sam działać w stanie paniki pod presją banku żądającego spełnienia kowenantów kredytowych — co nie zmienia faktu, że żądanie było bezprawne.',
            '7. Konsekwencje: Zaksięgowanie faktury naraziło Teresę na osobistą odpowiedzialność karną skarbową (art. 271 KK), a w razie kontroli prezes z łatwością mógłby zeznać: „Ja podpisałem setki pism, to księgowa odpowiada za rzetelność ksiąg”.',
            '8. Konstruktywna reakcja alternatywna: Spokojne przejście do stanu autonomicznego: „Panie prezesie, ta faktura nie posiada protokołu odbioru usług. Obowiązujące przepisy uniemożliwiają mi jej zaksięgowanie bez weryfikacji przez biegłego rewidenta. Prześlę panu formalne zapytanie na piśmie”. W 80% przypadków prezes wycofuje się z próby wciągnięcia pracownika w przestępstwo, gdy ten wymaga śladu procesowego.',
            '9. Wniosek edukacyjny dla czytelnika: Przekonanie „ja tylko wykonywałem polecenia przełożonego” nie stanowi tarczy ochronnej ani przed prawem, ani przed utratą poczucia własnej godności.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-6',
      pageNumber: 246,
      sectionNumber: '6.6',
      title: 'Gdy krzyczy ulica: Efekt widza i zjawisko niewiedzy wielu',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Nowy Jork, Queens, 1964 rok. Tragedia Kitty Genovese zapoczątkowała przełomowe badania Bibba Latané i Johna Darleya nad „efektem widza”. Warto w tym miejscu wprowadzić kluczowe sprostowanie metodologiczne: jak wykazały późniejsze analizy archiwalne (m.in. Manning, Levine i Collins, 2007), pierwotny artykuł w „The New York Times” o „38 świadkach, którzy z zimną krwią patrzyli na morderstwo i nikt nie zadzwonił” był publicystyczną przesadą. Wielu sąsiadów słyszało jedynie urywki krzyków, nie widząc zdarzenia z okien, dwie osoby wezwały pomoc, a jedna z sąsiadek zbiegła na dół i trzymała umierającą Kitty w ramionach.',
        'Jednak laboratoryjne eksperymenty Latané i Darleya dowiodły czegoś znacznie głębszego: obecność biernych świadków realnie paraliżuje gotowość do pomocy. W klasycznym badaniu z dymem w pokoju, student piszący ankietę w samotności reagował w 75% przypadków w ciągu 2 minut. Gdy w pokoju siedziało dwóch innych podstawionych pomocników eksperymentatora ignorujących dym, wskaźnik reakcji spadał dramatycznie do 10%!',
        'Dlaczego tak się dzieje? Odpowiada za to zjawisko niewiedzy wielu (Pluralistic Ignorance). Sytuacje kryzysowe są zazwyczaj niejednoznaczne. Co robi ludzki umysł w warunkach niepewności? Skanuje twarze innych świadków. Ponieważ każdy stara się zachować kamienną twarz, by nie wyjść na histeryka, wszyscy widzą wokół pozorny spokój i wyciągają błędny wniosek: „Skoro nikt nie reaguje, widocznie nic złego się nie dzieje”.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 4: Upadek emeryta na dworcu w Katowicach — Niewiedza wielu w tłumie',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Na peronie 3 dworca kolejowego w Katowicach 72-letni pan Stanisław potyka się na schodach i upada, uderzając głową o posadzkę. Z czoła sączy się krew, mężczyzna leży nieruchomo. Obok przechodzi w obu kierunkach kilkudziesięciu podróżnych z walizkami spieszących się na pociągi.',
            '2. Co widzi bohater (subiektywne postrzeżenie podróżnego): 31-letni Tomasz idzie z kawą w ręku. Kątem oka rejestruje leżącego, widzi obojętne twarze innych pasażerów i myśli: „Pewnie bezdomny pod wpływem alkoholu, albo ktoś już wezwał ochronę dworca. Nikt się nie zatrzymuje, więc sytuacja nie wymaga mojej interwencji”.',
            '3. Czego bohater nie widzi (martwe pole): Tomasz nie wie, że starszy pan doznał udaru mózgu i każda minuta decyduje o jego przeżyciu. Nie dostrzega także, że każdy z mijających pasażerów czuje wewnętrzny dyskomfort, ale patrzy na innych i paraliżuje się ich bezczynnością.',
            '4. Działający mechanizm psychologiczny: Efekt widza (Bystander Effect) napędzany zjawiskiem niewiedzy wielu (Pluralistic Ignorance) oraz stereotypową kategoryzacją obronną („to pewnie margines społeczny”), służącą redukcji dysonansu poznawczego.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W toku ewolucji publiczne wywołanie fałszywego alarmu w grupie wiązało się z ryzykiem kompromitacji, wyśmiania i utraty statusu. Czekanie na reakcję dominujących członków stada było bezpieczniejszą strategią biologiczną.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się odruchu zwolnienia kroku z jednoczesnym rozglądaniem się na boki w poszukiwaniu reakcji innych. Jeśli zauważysz u siebie myśl: „Ktoś inny na pewno zareaguje”, to niezawodny sygnał działania rozproszenia odpowiedzialności.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Natychmiastowe zatrzymanie się, podejście do poszkodowanego, uklęknięcie i głośne przełamanie anonimowości tłumu poprzez wskazanie konkretnej osoby palcem: „Pan w granatowej kurtce! Proszę natychmiast zadzwonić pod 112 i wezwać pogotowie!”.',
            '8. Konsekwencje alternatywnego wyboru: Wskazanie konkretnej jednostki palcem redukuje rozproszenie odpowiedzialności ze 100% rozproszonych na 100% zogniskowanych. Człowiek w granatowej kurtce nie ma drogi ucieczki — wyciąga telefon, a widok jednej aktywnej osoby natychmiast uwalnia pomocowość u kolejnych 3-4 świadków.',
            '9. Wniosek dydaktyczny dla czytelnika: Tłum potrzebuje jednego katalizatora, by przełamać paraliż. Jeśli jesteś świadkiem wypadku w miejscu publicznym, nigdy nie krzycz: „Niech ktoś pomoże!”, lecz wydawaj zindywidualizowane polecenia.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-7',
      pageNumber: 250,
      sectionNumber: '6.7',
      title: 'Rozproszenie odpowiedzialności: Dlaczego tłum paraliżuje pomoc',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Rozproszenie odpowiedzialności (Diffusion of Responsibility) to matematyczna pułapka psychiki. Jeśli jesteś jedynym świadkiem wypadku drogowego na pustej leśnej drodze, 100% odpowiedzialności za przeżycie rannego spoczywa na Twoich barkach. Twoja kora przedczołowa nie ma żadnej drogi ucieczki — musisz działać.',
        'Jeśli jednak na poboczu stoi 20 samochodów, Twoja subiektywna odpowiedzialność zostaje podzielona przez dwadzieścia: wynosi zaledwie 5%. Każdy myśli: „Ktoś inny już na pewno zadzwonił pod numer alarmowy”, „Tamten kierowca wygląda na kogoś, kto lepiej zna się na pierwszej pomocy”. W rezultacie nikt nie wykonuje telefonu.',
        'Poniższy warsztat pozwala wytrenować nawyk natychmiastowego przełamywania tego paraliżu w przestrzeni publicznej.'
      ],
      exerciseRef: chapterSixExerciseBystander
    },
    {
      id: 'sec-6-8',
      pageNumber: 254,
      sectionNumber: '6.8',
      title: 'Status i hierarchia: Niewidzialna drabina dziobania',
      category: 'studium-przypadku',
      readingTimeMinutes: 15,
      paragraphs: [
        'Z punktu widzenia neuroendokrynologii, status społeczny to nie abstrakcyjne pojęcie socjologiczne — to fizjologiczny przełącznik w Twoim pniu mózgu. U ssaków naczelnych pozycja w hierarchii reguluje poziom serotoniny i dopaminy oraz wrażliwość receptorów glikokortykoidowych.',
        'Kiedy wchodzisz do pomieszczenia, w którym przebywa osoba o znacznie wyższym statusie (wielki autorytet naukowy, prezes korporacji, nestor zamożnego rodu), Twoje ciało w ciągu kilkunastu milisekund przyjmuje mikropostawę uległą: opuszczenie ramion, unikanie bezpośredniego kontaktu wzrokowego, ściszenie głosu.',
        'W rodzinach wielopokoleniowych hierarchia potrafi zablokować rozwój dorosłych jednostek na całe dekady. Studium przypadku poniżej przedstawia dramatyczny mechanizm uległości wobec rodzinnego patriarchy.'
      ],
      caseStudyRef: chapterSixCaseStudyFamily
    },
    {
      id: 'sec-6-9',
      pageNumber: 258,
      sectionNumber: '6.9',
      title: 'Pierwsze wrażenie: Wyrok mózgu w 100 milisekund',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Według badań prof. Janine Willis i Alexandra Todorova z Uniwersytetu Princeton, ludzki mózg potrzebuje zaledwie 100 milisekund (jednej dziesiątej sekundy!), aby na podstawie samego widoku twarzy nieznajomego wygenerować wiążące oceny dotyczące jego wiarygodności, kompetencji, agresywności i statusu.',
        'Wydłużenie czasu ekspresji twarzy do 500 czy 1000 milisekund nie zmieniało już pierwotnego osądu — zwiększało jedynie subiektywną pewność badanego, że ma rację! To podręcznikowy przykład działania Systemu 1 z Tomu I. Zanim informacja dotrze do kory wzrokowej V1 i zostanie poddana świadomej obróbce semantycznej, ciało migdałowate podjęło już decyzję afektywną: „Bezpieczny czy Zagrożenie?”.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 5: Spotkanie rekrutacyjne i wyrok w korytarzu — Heurystyka pierwszego wrażenia',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Anna (26 lat), utalentowana analityczka danych i programistka z dorobkiem w algorytmach optymalizacyjnych, przychodzi na rozmowę rekrutacyjną do warszawskiego fintechu. Z powodu ulewy jej koszula jest lekko pognieciona, a z powodu introwertycznego temperamentu wita się cicho i unika przedłużonego kontaktu wzrokowego.',
            '2. Co widzi bohater (rekruter Krzysztof, 38 lat): Krzysztof widzi młodą kobietę z opuszczonymi ramionami, która nie uścisnęła dłoni z siłą i mówi niepewnym tonem. W głowie rekrutera natychmiast formuje się sąd: „Osoba wycofana, prawdopodobnie o niskich kompetencjach społecznych, nie poradzi sobie w dynamicznym zespole korporacyjnym”.',
            '3. Czego bohater nie widzi (martwe pole): Krzysztof nie widzi, że kod Anny na repozytorium GitHub bije na głowę wszystkich dotychczasowych kandydatów, a jej introwertyzm wiąże się z rzadką zdolnością wielogodzinnego, głębokiego skupienia (Deep Work) bez rozpraszania się.',
            '4. Działający mechanizm psychologiczny: Błyskawiczna heurystyka pierwszego wrażenia (Todorov) sprzężona z błędem konfirmacji. W ciągu pierwszych 100 milisekund układ afektywny podjął arbitralną decyzję, a przez kolejne 45 minut rozmowy Krzysztof zadaje wyłącznie podchwytliwe pytania, by udowodnić swoją pierwotną tezę.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W warunkach plemiennych szybka kategoryzacja obcego na podstawie mimiki i postawy decydowała o przeżyciu przed ewentualną napaścią.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się natychmiastowej sympatii lub niechęci do nowo poznanej osoby w pierwszych sekundach, zanim padnie choć jedno merytoryczne zdanie.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Wdrożenie ustrukturyzowanego wywiadu opartego na kompetencjach (Structured Behavioral Interview) z przygotowanym wcześniej arkuszem oceniania i zanonimizowaną próbką zadania technicznego.',
            '8. Konsekwencje alternatywnego wyboru: Firma zatrudnia wybitną specjalistkę, zamiast powierzchownie elokwentnego kandydata, który świetnie się prezentuje, ale ma braki warsztatowe.',
            '9. Wniosek dydaktyczny dla czytelnika: Twoje pierwsze wrażenie to automatyczna reakcja ewolucyjna, a nie nieomylna intuicja. Zawsze oddzielaj powierzchowność od rzeczywistych kompetencji.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-10',
      pageNumber: 262,
      sectionNumber: '6.10',
      title: 'Efekt halo: Blask jednej cechy przesłaniający resztę człowieka',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Edward Thorndike w 1920 roku zauważył, że jeśli żołnierz był wysoki, wysportowany i miał nienaganną postawę na zbiórce, oficerowie automatycznie oceniali go jako odważniejszego, bardziej inteligentnego, lojalnego i lepiej strzelającego. Zjawisko to nazwano Efektem Halo (aureoli).',
        'Mechanizm polega na tym, że jedna wyrazista cecha — uroda, wzrost, elokwencja, ukończenie prestiżowej uczelni, markowy garnitur — staje się filtrem percepcyjnym, przez który interpretowane są wszystkie pozostałe zachowania jednostki. Odwrotnością jest Efekt Rogów (Horns Effect), gdzie jedna drażniąca cecha z góry zatruwa ocenę całego człowieka.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 6: Szarmancki konsultant biznesowy — Urok formy nad treścią',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Zarząd spółki produkcyjnej zatrudnia zewnętrznego doradcę strategicznego Artura za 80 000 zł miesięcznie. Artur ma nienaganny uśmiech, nosi szyty na miarę garnitur, posługuje się modnym żargonem z Doliny Krzemowej i prezentuje slajdy z animacjami 3D.',
            '2. Co widzi bohater (prezes zarządu Janusz): Widzi w Arturze zbawcę firmy, człowieka sukcesu światowego formatu, którego sama obecność podnosi prestiż organizacji.',
            '3. Czego bohater nie widzi (martwe pole): Janusz nie zauważa, że w 60-slajdowej prezentacji Artura nie ma ani jednego realistycznego wskaźnika ROI, modelu przepływów pieniężnych ani analizy wąskich gardeł w fabryce.',
            '4. Działający mechanizm psychologiczny: Pozytywny Efekt Halo. Atrakcyjność fizyczna, wysoki status materialny i charyzma retoryczna Artura przeniosły się na bezkrytyczną ocenę merytorycznej wartości jego strategii.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Mózg dąży do spójności poznawczej (Cognitive Consistency) — z perspektywy energetycznej łatwiej założyć, że atrakcyjny i pewny siebie osobnik jest także mądry i kompetentny.',
            '6. Jak rozpoznać w czasie rzeczywistym: Poczucie zachwytu formą i charyzmą rozmówcy połączone z brakiem weryfikacji twardych danych liczbowych.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Wdrożenie procedury „ślepej ewaluacji dokumentów” — oddzielenie oceny samej noty strategicznej (w formie czystego tekstu bez nazwiska autora) od wystąpienia ustnego.',
            '8. Konsekwencje alternatywnego wyboru: Audyt merytoryczny natychmiast obnaża luki logiczne, a zarząd oszczędza setki tysięcy złotych, unikając chybionych inwestycji.',
            '9. Wniosek dydaktyczny dla czytelnika: Błyszczące opakowanie nie mówi nic o zawartości przesyłki. W biznesie i życiu prywatnym mierz ludzi ich owocami, a nie ich autoprezentacją.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-11',
      pageNumber: 266,
      sectionNumber: '6.11',
      title: 'Od schematu do samospełniającego się proroctwa: Stereotypy w działaniu',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Z punktu widzenia oszczędności poznawczej (Tom I, Rozdział 1), stereotyp to heurystyka kategoryzacyjna. Gdyby mózg musiał badać każdego napotkanego człowieka od zera, zbankrutowałby energetycznie. Dlatego wrzuca ludzi do szufladek: „Niemiec”, „Informatyk”, „Nastolatek”, „Urzędnik”.',
        'Problem pojawia się wtedy, gdy stereotyp przekształca się w samospełniające się proroctwo (Snyder, Tanke, Berscheid). Jeśli nauczyciel zakłada, że uczeń ze środowiska ubogiego jest mniej zdolny, poświęca mu mniej uwagi i traktuje go z dystansem. Uczeń traci motywację i osiąga słabe wyniki, potwierdzając pierwotne uprzedzenie pedagoga.',
        'Poniższe ćwiczenie pozwala namierzyć własne ukryte stereotypy i zneutralizować ich destrukcyjny wpływ.'
      ],
      exerciseRef: chapterSixExerciseAttribution
    },
    {
      id: 'sec-6-12',
      pageNumber: 270,
      sectionNumber: '6.12',
      title: 'Błąd atrybucji: Dlaczego ja mam powody, a ty masz wady',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Jedziesz samochodem lewym pasem. Nagle z prawej strony wcina się przed Ciebie czarny sedan bez kierunkowskazu, zmuszając Cię do ostrego hamowania. Jaka jest Twoja pierwsza myśl? „Co za bezczelny cham, idiota, psychopata za kółkiem!”. Przypisujesz jego zachowanie jego trwałym cechom charakteru (atrybucja wewnętrzna / dyspozycyjna).',
        'Dwa tygodnie później to Ty spieszysz się z chorym dzieckiem do lekarza. Zmieniasz pas dynamicznie bez kierunkowskazu. Co myślisz o sobie? „Przepraszam, mam wyjątkową sytuację kryzysową!” (atrybucja zewnętrzna / sytuacyjna). Ani przez ułamek sekundy nie pomyślisz: „Zrobiłem tak, bo jestem złym człowiekiem”.',
        'To jest Podstawowy Błąd Atrybucji (Lee Ross). Mamy asymetrię poznawczą: cudze potknięcia tłumaczymy charakterem, własne — okolicznościami.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 7: Kłótnia o niepozmywane naczynia — Asymetria atrybucyjna w parze',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Monika (35 lat) wraca po 9 godzinach pracy i widzi w zlewie brudne naczynia pozostawione przez męża Michała (36 lat). Michał siedzi w fotelu przed otwartym laptopem.',
            '2. Co widzi bohater (Monika): Widzi brak szacunku, lekceważenie jej wysiłku i lenistwo partnera. Natychmiast krzyczy: „Znowu nic nie zrobiłeś! Jesteś skrajnym egoistą i masz gdzieś ten dom!”.',
            '3. Czego bohater nie widzi (martwe pole): Monika nie wie, że Michałowi 20 minut wcześniej zawiesił się serwer klienta zagranicznego, a on w stresie walczy z awarią techniczną grożącą zerwaniem kontraktu.',
            '4. Działający mechanizm psychologiczny: Podstawowy Błąd Atrybucji połączony z egotyzmem atrybucyjnym. Monika tłumaczy zachowanie męża wadą jego charakteru („egoista”), ignorując czynniki sytuacyjne.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Obserwacja drugiego człowieka koncentruje wzrok na jego sylwetce, a nie na niewidzialnym kontekście zewnętrznym. Przypisanie cechy stałej jest szybsze niż żmudne dochodzenie przyczyn.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się w kłótni słów absolutnych: „Ty zawsze...”, „Ty nigdy...”, „Jesteś po prostu...”. To dowód, że osąd przeszedł z poziomu faktów na poziom ataku na tożsamość.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Komunikat NVC oddzielający obserwację od interpretacji: „Michał, widzę naczynia w zlewie. Jestem bardzo zmęczona po pracy. Co sprawiło, że nie zdążyłeś ich sprzątnąć?”.',
            '8. Konsekwencje alternatywnego wyboru: Michał podnosi wzrok bez poczucia bycia atakowanym, wyjaśnia awarię serwera i prosi o 15 minut na dokończenie zgłoszenia, po czym zmywa naczynia bez eskalacji konfliktu.',
            '9. Wniosek dydaktyczny dla czytelnika: Zanim nazwiesz kogoś złym człowiekiem, zapytaj o sytuację, w jakiej się znalazł. Przypisywanie złych intencji to najkrótsza droga do zniszczenia relacji.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-13',
      pageNumber: 274,
      sectionNumber: '6.13',
      title: 'Wielkie Studium Przypadku: Cichy sabotaż w zespole projektowym',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Poniższe studium przypadku stanowi całościową wiwisekcję dynamiki grupowej w środowisku korporacyjnym. Ilustruje, jak zderzenie norm grupowych, efektu widza, statusu i błędu atrybucji doprowadziło do katastrofy wartego 10 milionów złotych wdrożenia systemu IT w bankowości.'
      ],
      caseStudyRef: {
        id: 'cs-ch6-wdrozenie',
        title: 'Milczenie w Sali Konferencyjnej Alfa: Anatomia Zaniechania',
        subtitle: 'Jak 12 wybitnych inżynierów i menedżerów pozwoliło na wypuszczenie wadliwego systemu',
        protagonist: 'Michał, Główny Architekt Danych, 34 lata',
        context: 'Ostatnie spotkanie komitetu sterującego przed premierą nowego systemu transakcyjnego banku.',
        story: [
          'Michał siedział przy dębowym stole w sali konferencyjnej na 24. piętrze. Na ekranie świecił się slajd podsumowujący: „Wszystkie wskaźniki gotowości: ZIELONE. Premiera w najbliższy piątek o 22:00”. Przy stole siedziało dwanaście osób: dyrektorzy departamentów, kierownik wdrożenia, audytor zewnętrzny i zespół architektów.',
          'Michał wiedział coś, czego nie było na slajdach. Dwa dni wcześniej podczas nocnych testów obciążeniowych odkrył anomalię w module rozliczeń walutowych: przy wolumenie powyżej 50 tysięcy zapytań na sekundę baza danych gubiła około 0,3% transakcji. Zgłosił to swojemu bezpośredniemu przełożonemu, Piotrowi. Piotr spojrzał na zegarek i powiedział: „Michał, zarząd podpisał premiery z partnerami medialnymi. Jeśli to zatrzymamy, polecą głowy. Pewnie to tylko kwestia buforowania w środowisku testowym. Nie panikujmy przed zebraniem”.',
          'Na spotkaniu prowadząca, wiceprezes Barbara, zapytała: „Czy ktoś z państwa widzi jakiekolwiek ryzyko krytyczne, które uniemożliwia start w piątek?”. Zapadła cisza. Michał poczuł suchość w ustach i pot na karku. Spojrzał na Piotra — ten wpatrywał się w blat stołu. Spojrzał na audytora — ten przeglądał telefon. Michał pomyślał: „Skoro nikt nic nie mówi, może Piotr ma rację? Może ja przesadzam? Jeśli się odezwę, wyjdę na histeryka, który blokuje sukces firmy”. Michał zmilczał.',
          'W piątek o 23:30 system ruszył. W poniedziałek o 9:15 pod naporem klientów baza danych utraciła spójność w 12 000 kont walutowych. Bank musiał wstrzymać operacje na 36 godzin, kurs akcji spadł o 8%, a straty wizerunkowe szacowano w dziesiątkach milionów.'
        ],
        decisionTaken: 'Michał zdecydował się zachować milczenie podczas decydującego pytania wiceprezes, podporządkowując się pozornej jednomyślności grupy.',
        whatProtagonistSaw: 'Pewność siebie zarządu, milczenie kolegów, presję czasu i ryzyko osobistego ostracyzmu w razie wywołania fałszywego alarmu.',
        whatWasMissed: 'Że audytor i trzej inni inżynierowie również mieli wątpliwości, ale każdy z nich milczał dokładnie z tego samego powodu — ulegając zjawisku niewiedzy wielu!',
        psychologicalAnalysis: {
          coreMechanism: 'Syndrom Myślenia Grupowego (Groupthink) sprzężony z konformizmem normatywnym i efektem widza.',
          cognitiveBiases: [
            { name: 'Niewiedza wielu (Pluralistic Ignorance)', description: 'Wszyscy milczą, więc każdy wnioskuje, że inni są pewni sukcesu.', impact: 'Zablokowanie krytycznego zgłoszenia błędu.' },
            { name: 'Iluzja jednomyślności', description: 'Brak sprzeciwu został zinterpretowany przez wiceprezes jako pełna jednomyślność ekspertów.', impact: 'Pewność zarządu oparta na iluzji.' }
          ],
          defenseMechanisms: [
            { name: 'Racjonalizacja', explanation: 'Michał wmówił sobie, że przełożony Piotr ma większe doświadczenie biznesowe i wie lepiej.' }
          ],
          emotionalDynamic: 'Paniczny lęk przed wykluczeniem ze stada (Social Exclusion Pain) przeważył nad racjonalną oceną ryzyka technicznego.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Grzbietowa przednia kora zakrętu obręczy (dACC) i przednia wyspa', role: 'Detekcja konfliktu poznawczego i bolesnego zagrożenia wykluczeniem społecznym', activationState: 'Wysoka aktywacja sieci istotności (Salience Network) sygnalizująca ryzyko kary grupowej' },
            { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Analityczna ocena ryzyka technicznego i kontrola hamowania', activationState: 'Zasoby przekierowane na tłumienie impulsu wypowiedzi pod wpływem stresu ostrego' }
          ],
          neurotransmitters: [
            { name: 'Noradrenalina i hormon stresu (kortyzol)', roleInScenario: 'Aktywacja współczulnego układu nerwowego i osi HPA wywołująca suchość w ustach, tachykardię i zawężenie uwagi do natychmiastowego unikania zagrożenia' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 200 ms', process: 'Pytanie wiceprezes: wzrokowy skan mikroekspresji twarzy uczestników i rejestracja powszechnego bezruchu.' },
            { timeMs: '200 - 800 ms', process: 'Brak reakcji otoczenia wywołuje niewiedzę wielu i somatyczny sygnał zahamowania behawioralnego.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'Presja hierarchiczna i uciszanie wątpliwości', description: 'Komunikat Piotra: „Nie panikujmy, polecą głowy”.', vulnerabilityExploited: 'Strach o bezpieczeństwo zatrudnienia' }
          ],
          counterMeasures: [
            { step: 'Instytucjonalny Adwokat Diabła', script: 'Procedura wymuszająca, aby na każdym komitecie jedna wyznaczona osoba miała obowiązek przedstawić scenariusz katastrofy.', rationale: 'Zdejmuje z jednostki odium „czarowidza” i konformizm.' }
          ]
        },
        alternativePath: 'Gdyby Michał wstał i powiedział: „Pani wiceprezes, system przechodzi 99% testów, ale mam twarde logi z testu obciążeniowego pokazujące błąd w 0,3% transakcji walutowych. Musimy przesunąć start o 7 dni na poprawkę”, wiceprezes wstrzymałaby wdrożenie, a bank uniknąłby katastrofy.',
        readerQuestion: 'W ilu sytuacjach w Twojej firmie lub rodzinie milczałeś tylko dlatego, że nikt inny nie podnosił ręki?',
        keyTakeaway: 'Milczenie grupy rzadko oznacza zgodę. Najczęściej oznacza, że wszyscy boją się tak samo jak Ty.'
      }
    },
    {
      id: 'sec-6-14',
      pageNumber: 278,
      sectionNumber: '6.14',
      title: 'Podsumowanie, Most do Rozdziału 7 i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'W tym rozdziale zobaczyliśmy, że człowiek nigdy nie podejmuje decyzji w próżni społecznej. Normy grupy, konformizm, uległość wobec autorytetu, efekt widza oraz błędy atrybucji działają jak potężne, podświadome siły grawitacyjne wykrzywiające trajektorię naszego myślenia.',
        'Wszystkie te mechanizmy mają wspólny nośnik: KOMUNIKACJĘ. To poprzez słowa, milczenie, ton głosu i mowę ciała ludzie przekazują sobie normy, narzucają role i egzekwują posłuszeństwo.',
        'W Rozdziale 7 przejdziemy do serca relacji międzyludzkich: zbadamy, dlaczego tak rzadko słyszymy to, co druga osoba naprawdę mówi, czym różni się intencja od efektu wypowiedzi i jak prowadzić rozmowy, które zamiast murów budują porozumienie.',
        'Zanim przejdziesz dalej, sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 6.'
      ]
    }
  ]
};
