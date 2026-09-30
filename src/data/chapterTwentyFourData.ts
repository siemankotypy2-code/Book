import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

export const chapterTwentyFourExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Dlaczego współczesna kognitywistyka odrzuca potoczną definicję decyzji jako prostego punktowego momentu wyboru pomiędzy opcją A i B?',
    topic: 'Procesualna Natura Decyzji',
    sectionRef: 'Sekcja 24.1',
    options: [
      { label: 'A', text: 'Ponieważ decyzja jest rozciągniętym w czasie procesem, w którym uczestniczą percepcja, wstępna interpretacja, stan emocjonalny, pamięć doświadczeń i kalkulacja ryzyka.', isCorrect: true },
      { label: 'B', text: 'Ponieważ o decyzjach decyduje wyłącznie uwarunkowanie genetyczne bez udziału świadomości.', isCorrect: false },
      { label: 'C', text: 'Ponieważ ludzie nigdy nie wybierają między dwiema opcjami, lecz zawsze między trzema.', isCorrect: false },
      { label: 'D', text: 'Ponieważ słowo „decyzja” nie występuje w żargonie nauk biologicznych.', isCorrect: false }
    ],
    explanation: 'Wybór w punkcie końcowym jest jedynie widocznym szczytem góry lodowej. Poprzedza go długa kaskada przetwarzania informacji w sieciach neuronowych (mPFC, dlPFC, amygdala, wyspa).',
    keyTakeaway: 'Zrozumienie decyzji wymaga przeanalizowania całego ciągu: od bodźca, przez interpretację i emocję, aż do wyboru.'
  },
  {
    id: 2,
    question: 'W Hipotezie Znaczników Somatycznych (Antonio Damasio) emocje pełnią w procesie decyzyjnym funkcję:',
    topic: 'Hipoteza Znaczników Somatycznych Damasio',
    sectionRef: 'Sekcja 24.8',
    options: [
      { label: 'A', text: 'Szybkiego, ewolucyjnego nawigatora, który za pomocą sygnałów z ciała (zmiana tętna, napięcie trzewi) selekcjonuje i odrzuca niebezpieczne opcje przed włączeniem analitycznego kalkulatora kory przedczołowej.', isCorrect: true },
      { label: 'B', text: 'Czystego zakłócenia, które zawsze i bez wyjątku prowadzi do błędnych wyborów.', isCorrect: false },
      { label: 'C', text: 'Narzędzia służącego wyłącznie do komunikacji z innymi ludźmi po podjęciu wyboru.', isCorrect: false },
      { label: 'D', text: 'Sygnału aktywującego wyłącznie układ trawienny.', isCorrect: false }
    ],
    explanation: 'Pacjenci Damasio z uszkodzeniem kory brzuszno-przyśrodkowej (vmPFC) pozbawieni znaczników somatycznych potrafili godzinami analizować zyski i straty z zakupu długopisu, nie potrafiąc podjąć żadnej decyzji.',
    keyTakeaway: 'Bez emocji i znaczników somatycznych proces decyzyjny wpada w nieskończoną pętlę analityczną.'
  },
  {
    id: 3,
    question: 'Na czym polega błąd poznawczy zwany Outcome Bias (Błąd Oceny po Wyniku)?',
    topic: 'Outcome Bias',
    sectionRef: 'Sekcja 24.15',
    options: [
      { label: 'A', text: 'Ocenianie jakości procesu decyzyjnego wyłącznie przez pryzmat ostatecznego rezultatu, ignorując stan wiedzy i niepewność w momencie podejmowania wyboru.', isCorrect: true },
      { label: 'B', text: 'Ocenianie decyzji innych ludzi jako zawsze lepszych od własnych.', isCorrect: false },
      { label: 'C', text: 'Przekonanie, że każdy rezultat jest z góry zaplanowany przez siły wyższe.', isCorrect: false },
      { label: 'D', text: 'Podejmowanie decyzji wyłącznie na podstawie rzutu monetą.', isCorrect: false }
    ],
    explanation: 'Można podjąć znakomitą pod względem metodologicznym decyzję i przegrać z powodu losowości (np. nagła zmiana pogody), tak jak można podjąć fatalną, pijacką decyzję i wygrać na loterii.',
    keyTakeaway: 'Rozdzielaj jakość swojego procesu myślenia od losowości ostatecznego wyniku.'
  },
  {
    id: 4,
    question: 'W jaki sposób Zmęczenie Decyzyjne (Decision Fatigue) wpływa na stan kory przedczołowej i rodzaj podejmowanych wyborów?',
    topic: 'Zmęczenie Decyzyjne (Decision Fatigue)',
    sectionRef: 'Sekcja 24.11',
    options: [
      { label: 'A', text: 'Po długim ciągu wyborów wyczerpany układ zarządczy wyłącza analityczny System 2, zmuszając umysł do wyboru opcji domyślnej (Status Quo) lub ulegania natychmiastowym impulsom.', isCorrect: true },
      { label: 'B', text: 'Zwiększa elastyczność poznawczą i kreatywność w szukaniu nowych rozwiązań.', isCorrect: false },
      { label: 'C', text: 'Eliminuje wpływ uwarunkowań społecznych na nasze wybory.', isCorrect: false },
      { label: 'D', text: 'Sprawia, że człowiek zaczyna podejmować wyłącznie decyzje idealne matematycznie.', isCorrect: false }
    ],
    explanation: 'Kora przedczołowa zużywa energię metaboliczną. Po setkach mikro-wyborów umysł oszczędza zasoby, wybierając ścieżkę najmniejszego oporu.',
    keyTakeaway: 'Kluczowe decyzje życiowe podejmuj rano, zanim wyczerpiesz swój budżet decyzyjny.'
  },
  {
    id: 5,
    question: 'Czym charakteryzuje się zjawisko Dyskontowania Hiperbolicznego (Hyperbolic Discounting)?',
    topic: 'Dyskontowanie Hiperboliczne',
    sectionRef: 'Sekcja 24.10',
    options: [
      { label: 'A', text: 'Tendencją do drastycznego przeceniania natychmiastowej nagrody (np. ciastko teraz) kosztem znacznie większej, ale odroczonej w czasie korzyści (np. zdrowie za rok).', isCorrect: true },
      { label: 'B', text: 'Przecenianiem kosztów finansowych zakupu sprzętu AGD.', isCorrect: false },
      { label: 'C', text: 'Niewiarygodną zdolnością do oszczędzania pieniędzy w młodości.', isCorrect: false },
      { label: 'D', text: 'Lękiem przed szybką jazdą samochodem.', isCorrect: false }
    ],
    explanation: 'Układ limbiczny i prążkowie żądają dopaminy w tej sekundzie, podczas gdy kora przedczołowa musi walczyć o odroczoną nagrodę długoterminową.',
    keyTakeaway: 'Walka z dyskontowaniem hiperbolicznym wymaga tworzenia barier dla natychmiastowych pokus.'
  },
  {
    id: 6,
    question: 'Na czym polega błąd w przewidywaniu przyszłych stanów emocjonalnych (Affective Forecasting / Impact Bias)?',
    topic: 'Affective Forecasting i Impact Bias',
    sectionRef: 'Sekcja 24.16',
    options: [
      { label: 'A', text: 'Ludzie przeceniają zarówno intensywność, jak i czas trwania swojego cierpienia po porażce oraz szczęścia po sukcesie.', isCorrect: true },
      { label: 'B', text: 'Ludzie potrafią bezbłędnie przewidzieć swoje samopoczucie za 10 lat.', isCorrect: false },
      { label: 'C', text: 'Emocje przyszłe są zawsze dokładnie takie same jak emocje z dzieciństwa.', isCorrect: false },
      { label: 'D', text: 'Prognozowanie afektywne dotyczy wyłącznie przewidywania opadów deszczu.', isCorrect: false }
    ],
    explanation: 'Umysł zapomina o adaptacji hedonistycznej i o działaniu „psychologicznego układu odpornościowego”, który po czasie neutralizuje ból porażki.',
    keyTakeaway: 'Porażka nie zniszczy Cię tak bardzo, jak wydaje się Twojemu lękowi, a sukces nie uczyni Cię wiecznie szczęśliwym.'
  },
  {
    id: 7,
    question: 'Dlaczego brak decyzji (Status Quo Bias / Inaction) jest w rzeczywistości formą podjęcia decyzji?',
    topic: 'Status Quo Bias i Koszt Zaniechania',
    sectionRef: 'Sekcja 24.18',
    options: [
      { label: 'A', text: 'Zaniechanie wyboru jest świadomym lub nieświadomym wyborem pozostawienia sterów okolicznościom zewnętrznym i zgody na ich konsekwencje.', isCorrect: true },
      { label: 'B', text: 'Brak decyzji zamraża czas i sprawia, że konsekwencje nie powstają.', isCorrect: false },
      { label: 'C', text: 'Prawo zabrania niepodejmowania decyzji.', isCorrect: false },
      { label: 'D', text: 'Zaniechanie wyboru zawsze chroni przed jakimkolwiek ryzykiem.', isCorrect: false }
    ],
    explanation: 'Unikanie wyboru jest decyzją o oddaniu kontroli otoczeniu. Świat nie czeka na Twój podpis — brak wyboru również generuje twarde rezultaty.',
    keyTakeaway: 'Kiedy decydujesz, że nie podejmiesz decyzji — właśnie podjąłeś decyzję o bierności.'
  },
  {
    id: 8,
    question: 'Jaką rolę w paraliżu decyzyjnym (Analysis Paralysis) odgrywa nadmiar dostępnych opcji (Paradox of Choice)?',
    topic: 'Paradoks Wyboru Schwartza',
    sectionRef: 'Sekcja 24.13',
    options: [
      { label: 'A', text: 'Wzrost liczby opcji podnosi koszt poznawczy porównań, nasila lęk przed utratą alternatyw (opportunity cost) i potęguje późniejszy żal po wyrazie.', isCorrect: true },
      { label: 'B', text: 'Duża liczba opcji automatycznie gwarantuje pełną satysfakcję z zakupu.', isCorrect: false },
      { label: 'C', text: 'Większy wybór eliminuje lęk przed porażką.', isCorrect: false },
      { label: 'D', text: 'Człowiek potrafi bezstresowo porównać 500 opcji naraz w pamięci roboczej.', isCorrect: false }
    ],
    explanation: 'Barry Schwartz wykazał, że nadmiar alternatyw zamiast dawać wolność, wywołuje paraliż i drastyczny spadek satysfakcji z podjętego wyboru.',
    keyTakeaway: 'Ograniczaj liczbę alternatyw do maksymalnie 3–4 propozycji, by chronić swój spokój.'
  },
  {
    id: 9,
    question: 'Czym różni się decyzja podejmowana na podstawie wartości od decyzji podejmowanej w oparciu o unikanie krótkoterminowego dyskomfortu?',
    topic: 'Decyzje oparte na Wartościach vs Unikaniu',
    sectionRef: 'Sekcja 24.14',
    options: [
      { label: 'A', text: 'Decyzja oparta na wartościach akceptuje chwilowy ból somatyczny w imię długofalowego sensu, podczas gdy decyzja z unikania daje ulgę teraz za cenę późniejszej frustracji.', isCorrect: true },
      { label: 'B', text: 'Decyzja oparta na wartościach nigdy nie wywołuje trudnych emocji.', isCorrect: false },
      { label: 'C', text: 'Decyzje z unikania są zawsze bardziej opłacalne finansowo.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy w bilansie psychologicznym obu typów.', isCorrect: false }
    ],
    explanation: 'Dojrzałość decyzyjna polega na zdolności do zniesienia krótkoterminowego napięcia (np. powiedzenie trudnej prawdy) dla długoterminowej spójności z wartościami.',
    keyTakeaway: 'Wybieraj trudniejszą ścieżkę zgodną z kompasem wartości zamiast łatwej ucieczki w ulgę.'
  },
  {
    id: 10,
    question: 'Na czym polega protokół Pre-Mortem (Gary Klein) w projektowaniu ważnych decyzji?',
    topic: 'Protokół Pre-Mortem Kleina',
    sectionRef: 'Sekcja 24.19',
    options: [
      { label: 'A', text: 'Przed podjęciem decyzji wyobrażamy sobie, że minął rok, nasz plan poniósł sromotną klęskę, a następnie wstecznie analizujemy, jakie przyczyny do tego doprowadziły.', isCorrect: true },
      { label: 'B', text: 'Wykonanie badania medycznego przed podpisaniem umowy.', isCorrect: false },
      { label: 'C', text: 'Napisanie testamentu przed wyjazdem na wakacje.', isCorrect: false },
      { label: 'D', text: 'Ignorowanie wszelkich zagrożeń i zakładanie wyłącznie sukcesu.', isCorrect: false }
    ],
    explanation: 'Pre-Mortem przełamuje grupowy hurraoptymalizm i otwiera korę przedczołową na identyfikację ślepych plam w procesie decyzyjnym.',
    keyTakeaway: 'Zanim wdrożysz plan, wyobraź sobie jego klęskę i zabezpiecz słabe punkty.'
  }
];

export const caseStudiesChapterTwentyFour: CaseStudy[] = [
  {
    id: 'cs-ch24-zmiana-kariery',
    title: 'W Złotej Klatce Niezdecydowania: Tomasz i Paraliż Awansu',
    subtitle: 'Jak lęk przed utratą bezpieczeństwa finansowego trzymał 38-letniego menedżera w pułapce wypalenia',
    protagonist: 'Tomasz, 38 lat, dyrektor finansowy w korporacji',
    context: 'Tomasz zarabiał wysokie pensje, ale od trzech lat budził się z poczuciem pustki i symptomami wypalenia zawodowego. Otrzymał propozycję przejęcia sterów w innowacyjnym startupie z mniejszym wynagrodzeniem podstawowym, ale udziałami w firmie.',
    story: [
      'Tomasz przez osiem miesięcy analizował przejście do nowej firmy. Stworzył arkusz w Excelu z 45 wskaźnikami, przeczytał dziesiątki raportów rynkowych i codziennie rozmawiał z żoną na ten sam temat.',
      'Jego umysł utknął w pętli Analysis Paralysis (Paraliżu Analizy). Im więcej danych zbierał, tym bardziej rósł jego lęk. Płacił cenę tzw. kosztu alternatywnego (Opportunity Cost) — bał się, że jeśli wybierze startup, straci stabilność korporacji, a jeśli zostanie w korporacji, straci szansę na życiowy przełom.',
      'Dominującym mechanizmem była Awersja do Straty (Kahneman & Tversky): ból ewentualnego niepowodzenia w startupie ważył w jego mózgu dwukrotnie mocniej niż wizja rozwoju i satysfakcji.',
      'W końcu, po 240 dniach wahania, inwestorzy startupu zrezygnowali z oczekiwania na jego decyzję i zatrudnili innego kandydata. Tomasz został w korporacji z poczuciem głębokiej porażki i bezsilności.',
      'Jego brak wyboru okazał się najgorszą możliwą decyzją — oddał ster zewnętrznym okolicznościom, pozostając w środowisku, które go niszczyło.'
    ],
    decisionTaken: 'Tomasz odwlekał decyzję tak długo, aż opcja wyboru została mu odebrana przez inwestorów.',
    whatProtagonistSaw: 'Tomasz widział ryzykowną przepaść po stronie startupu i złocistą, bezpieczną klatkę po stronie korporacji.',
    whatWasMissed: 'Przeoczył fakt, że trwanie w wypaleniu jest decyzją o ponoszeniu ogromnych kosztów zdrowotnych i psychicznych każdego dnia.',
    psychologicalAnalysis: {
      coreMechanism: 'Analysis Paralysis połączony z Awersją do Straty (Loss Aversion) i Błędem Status Quo (Status Quo Bias).',
      cognitiveBiases: [
        { name: 'Loss Aversion', description: 'Odczuwanie straty stabilnej pensji 2.5 razy silniej niż potencjalnego zysku z udziałów.', impact: 'Paraliż proaktywnego wyboru.' },
        { name: 'Status Quo Bias', description: 'Irracjonalne preferowanie stanu obecnego tylko dlatego, że jest znany i przewidywalny.', impact: 'Trwanie w środowisku niszczącym zdrowie.' }
      ],
      defenseMechanisms: [
        { name: 'Intelektualizacja', explanation: 'Tworzenie kolejnych skomplikowanych tabel w Excelu jako uspokajająca ucieczka przed podjęciem ryzyka.' }
      ],
      emotionalDynamic: 'Napięcie między dążeniem do samorealizacji a paraliżującym lękiem przed porażką.'
    },
    decisionProcessAnalysis: {
      trigger: 'Propozycja objęcia stanowiska CEO w startupie.',
      attentionFocus: 'Zagrożenia finansowe i wizja utraty statusu.',
      interpretation: '„Jeśli mi nie wyjdzie, zostanę z niczym i wszyscy uświadomią sobie moją naiwność”.',
      emotion: 'Lęk egzystencjalny, ścisk w żołądku, przewlekła niepewność.',
      impulse: 'Zebrać jeszcze więcej danych, odwlec odpowiedź o kolejny tydzień.',
      action: 'Brak decyzji i pasywne przeczekanie.',
      consequence: 'Utrata życiowej szansy, spadek poczucia sprawczości, pogłębienie wypalenia.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora wyspy (Anterior Insula)', role: 'Rejestracja przewidywanego bólu straty finansowej', activationState: 'Hiperaktywna' },
        { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Przeciążenie pamięci roboczej analizą 45 zmiennych', activationState: 'Stan głębokiego wyczerpania' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Chroniczny skok hormonu stresu paraliżujący elastyczność poznawczą' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Myśl o odejściu z korporacji aktywuje lęk w ciele migdałowatym.' },
        { timeMs: '200 ms', process: 'Wyspa wysyła sygnał somatycznego dyskomfortu w trzewiach.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [],
      counterMeasures: [
        { step: 'Zasada 10/10/10 oraz Weryfikacja Najgorszego Scenariusza', script: '„Co najgorszego stanie się, jeśli startup zbankrutuje w 12 miesięcy? Czy znajdę nową pracę na stanowisku dyrektorskim w ciągu 3 miesięcy? Tak. Czy mam oszczędności na ten czas? Tak. Więc ryzyko jest do udźwignięcia”.', rationale: 'Urealnienie lęku sprowadza katastroficzne wyobrażenia do konkretnego planu naprawczego.' }
      ]
    },
    alternativePath: 'Gdyby Tomasz wyznaczył sztywny deadline na decyzję (np. 14 dni) i zastosował protokół Pre-Mortem, podjąłby ryzyko lub świadomie odrzucił ofertę, zachowując poczucie sprawczości.',
    readerQuestion: 'Nad jaką decyzją w swoim życiu zastanawiasz się tak długo, że pozwalasz, by sytuacja sama zdecydowała za Ciebie?',
    keyTakeaway: 'Niepodejmowanie decyzji to również decyzja — tyle że oddana w ręce ślepego losu.'
  },
  {
    id: 'cs-ch24-zakup-mieszkania',
    title: 'Pułapka Zakotwiczenia: Ewa i Oferta Życia',
    subtitle: 'Jak pierwsza podana cena zawyżyła wartość nieruchomości o 150 tysięcy złotych',
    protagonist: 'Ewa, 32 lata, architekta wnętrz',
    context: 'Szukanie pierwszego mieszkania na rynku wtórnym pod presją rosnących stóp procentowych.',
    story: [
      'Ewa obejrzała mieszkanie wystawione przez dewelopera za kwotę 950 000 zł. Cena była drastycznie zawyżona w stosunku do średniej rynkowej (ok. 780 000 zł). Deweloper, widząc jej zachwyt rozkładem pomieszczeń, zastosował technikę zakotwiczenia połączoną z udawanym ustępstwem.',
      'Powiedział: „Pani Ewo, jeśli podejmie pani decyzję do jutra, obniżę cenę dla pani do 870 000 zł i dorzucę komórkę lokatorską gratis”.',
      'Mózg Ewy zakotwiczył się na kwocie 950 000 zł. Rabat w wysokości 80 000 zł wydał jej się gigantyczną okazją finansową. Zamiast porównać cenę za metr z niezależnym operatem szacunkowym, Jej System 1 dokonał fałszywego przeliczenia: „Zyskuję 80 tysięcy i komórkę!”.',
      'Podpisała umowę przedwstępną i wpłaciła 50 000 zł zadatku. Kiedy rzeczoznawca bankowy wycenił nieruchomość na 770 000 zł, bank odmówił udzielenia kredytu na pełną kwotę, a Ewa straciła zadatek.',
      'Jej proces decyzyjny został całkowicie przejęty przez pierwszą rzuconą liczbę i emocjonalny pośpiech.'
    ],
    decisionTaken: 'Ewa podjęła zobowiązanie majątkowe w oparciu o fałszywą kotwicę cenową sprzedającego.',
    whatProtagonistSaw: 'Wielką okazję cenową, rabat 80 000 zł i darmową komórkę lokatorską.',
    whatWasMissed: 'Obiektywną wycenę rynkową i fakt, że kwota wyjściowa była sztucznie napompowana.',
    psychologicalAnalysis: {
      coreMechanism: 'Heurystyka Zakotwiczenia i Dopasowania (Anchoring and Adjustment) sprzężona z Framingo-ramą Zysku.',
      cognitiveBiases: [
        { name: 'Anchoring Bias', description: 'Niewolnicze przywiązanie się do pierwszej usłyszanej liczby (950 tys. zł) jako punktu odniesienia.', impact: 'Całkowita utrata obiektywnej miary wartości.' },
        { name: 'Framing Effect', description: 'Ujęcie transakcji w ramie „oszczędzasz 80 tysięcy” zamiast „przepłacasz 100 tysięcy”.', impact: 'Wyłączenie krytycznej oceny ryzyka.' }
      ],
      defenseMechanisms: [
        { name: 'Dysonans podecyzyjny', explanation: 'Ignorowanie ostrzeżeń znajomych pod hasłem „Oni po prostu nie widzieli tego pięknego widoku z okna”.' }
      ],
      emotionalDynamic: 'Podniecenie rzekomą wygraną zablokowało chłodny analityczny System 2.'
    },
    decisionProcessAnalysis: {
      trigger: 'Usłyszenie kwoty wyjściowej 950 000 zł i propozycji rabatu do 870 000 zł.',
      attentionFocus: 'Wielkość kwoty rabatu (80 000 zł).',
      interpretation: '„Trafił mi się genialny interes, muszę to szybko przypieczętować”.',
      emotion: 'Ekscytacja, pośpiech, lęk przed sprzątnięciem oferty przez kogoś innego.',
      impulse: 'Natychmiastowo podpisać umowę.',
      action: 'Wpłata zadatku bez konsultacji z rzeczoznawcą.',
      consequence: 'Utrata 50 000 zł zadatku i odmowa kredytu z banku.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Prążkowie (Układ Nagrody)', role: 'Wyrzut dopaminy na myśl o „oszczędzeniu 80 000 zł”', activationState: 'Uwarunkowana stymulacja' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Brak chłodnej kalkulacji kosztu metra kwadratowego', activationState: 'Zablokowana przez pośpiech' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Dopaminowy strzał na wizję zysku przesłonił ryzyko kredytowe' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Słowa „rabat 80 tysięcy” aktywują układ nagrody.' },
        { timeMs: '300 ms', process: 'System 1 blokuje szukanie kontr-dowodów rynkowych.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kotwiczenie połączone ze Sztuczną Presją Czasu', description: 'Rzucenie wysokiej kwoty i wyznaczenie 24h na decyzję.', vulnerabilityExploited: 'Lęk przed utratą okazji' }
      ],
      counterMeasures: [
        { step: 'Reset Kotwicy i Zewnętrzny Audyt', script: '„Całkowicie ignoruję cenę wywoławczą. Sprawdzam bazę transakcji cenowych z aktów notarialnych z tej dzielnicy z ostatnich 3 miesięcy”.', rationale: 'Zastępuje fikcyjną liczbę twardą średnią statystyczną.' }
      ]
    },
    alternativePath: 'Gdyby Ewa skonsultowała się z niezależnym doradcą przed wpłatą zadatku, złożyłaby ofertę na 780 000 zł lub odstąpiła od transakcji, oszczędzając pieniądze.',
    readerQuestion: 'W jakich zakupach lub negocjacjach pozwalasz, by pierwsza kwota narzucona przez drugą stronę dyktowała Twoje wyobrażenie o wartości?',
    keyTakeaway: 'Nigdy nie negocjuj wokół kotwicy rzuconej przez sprzedawcę. Zresetuj stół rozmów własnymi, twardymi danymi.'
  }
];

export const selfExercisesChapterTwentyFour: SelfExercise[] = [
  {
    id: 'ex-ch24-decision-audit',
    title: 'Ćwiczenie 8.1: Audyt Procesu Decyzyjnego (Dekompozycja 10 Kroków)',
    subtitle: 'Przeanalizuj swoją kluczową decyzję z ostatnich 6 miesięcy i zlokalizuj ślepe plamy',
    objective: 'Rozdzielenie jakości procesu myślenia od przypadkowości wyniku i zidentyfikowanie wpływających zniekształceń.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Rekonstrukcja procesu decyzyjnego angażuje grzbietowo-boczną korę przedczołową (dlPFC), budując trwałe meta-poznawcze wzorce oceny ryzyka.',
    steps: [
      {
        stepNumber: 1,
        title: 'Nazwij wybraną decyzję',
        instruction: 'Wybierz jedną ważną decyzję osobistą lub zawodową (np. zmiana pracy, zakup, rozstanie, inwestycja).',
        promptText: 'Moja analizowana decyzja to:',
        placeholder: 'Decyzja o zmianie mieszkania na większe w zeszłym roku...'
      },
      {
        stepNumber: 2,
        title: 'Zdefiniuj stan wiedzy w momencie wyboru',
        instruction: 'Co wtedy wiedziałeś na 100%, czego tylko się domyślałeś, a czego całkowicie nie wiedziałeś?',
        promptText: 'Podział na twarde fakty, założenia i niewiadome:',
        placeholder: 'Fakty: Miałem stałą pracę. Założenia: Myślałem, że stopy procentowe nie wzrosną. Niewiadome: Inflacja...'
      },
      {
        stepNumber: 3,
        title: 'Zlokalizuj wpływ emocji i presji czasu',
        instruction: 'Jaka emocja dominowała w Twoim ciele przy podjęciu wyboru (lęk, pośpiech, chciwość, ulga)?',
        promptText: 'Stan afektywny i presja zewnętrzna:',
        placeholder: 'Dominował pośpiech i lęk, że ceny mieszkań wzrosną o kolejne 15%...'
      },
      {
        stepNumber: 4,
        title: 'Oceń jakość procesu niezależnie od wyniku',
        instruction: 'Czy gdybyś cofnął się w czasie z tą samą wiedzą, podjąłbyś ten sam wybór? Co byś zmienił w samym procesie zbierania danych?',
        promptText: 'Wniosek procesowy:',
        placeholder: 'Proces był zbyt emocjonalny. Powinienem był skonsultować się z 2 niezależnymi analitykami...'
      }
    ],
    reflectionQuestions: [
      'Czy mylisz dobrą decyzję z fartem, a złą decyzję z Pechem?',
      'Jakie zabezpieczenie wdrożysz przy kolejnym dużym wyborze finansowym?'
    ]
  },
  {
    id: 'ex-ch24-pre-mortem',
    title: 'Ćwiczenie 8.2: Protokół Pre-Mortem (Sztuka Antycypacji Porażki)',
    subtitle: 'Zabezpiecz swój nadchodzący projekt przed katastrofą, zanim wprowadzisz go w życie',
    objective: 'Przełamanie grupowego hurraoptymizmu i identyfikacja słabych punktów planu.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Stymulacja wyobraźni w ramie porażki aktywuje brzuszną część kory przedczołowej, uniezależniając umysł od iluzji optymistycznej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zdefiniuj swój nadchodzący plan lub projekt',
        instruction: 'Napisz krótko, jaką decyzję lub przedsięwzięcie zamierzasz wdrożyć w najbliższych tygodniach.',
        promptText: 'Mój nadchodzący plan to:',
        placeholder: 'Otwarcie własnego sklepu internetowego z produktami ekologicznymi...'
      },
      {
        stepNumber: 2,
        title: 'Przenieś się w przyszłość o 12 miesięcy (Podróż w czasie)',
        instruction: 'Wyobraź sobie, że minął rok. Twój projekt poniósł całkowitą, sromotną klęskę. Wszystko się zawaliło. Straciłeś czas i pieniądze.',
        promptText: 'Opisz stan katastrofy:',
        placeholder: 'Sklep nie ma klientów, magazyn jest pełny przeterminowanych towarów, jestem w długu 40 000 zł...'
      },
      {
        stepNumber: 3,
        title: 'Wypisz 5 konkretnych przyczyn, które do tego doprowadziły',
        instruction: 'Dlaczego do tego doszło? Co zignorowałeś? Na co zamknąłeś oczy na początku?',
        promptText: '5 głównych przyczyn porażki:',
        placeholder: '1. Za mały budżet na reklamę. 2. Zły dobór dostawcy. 3. Zignorowanie konkurencji. 4. Brak testów rynkowych. 5. Słaby SEO...'
      },
      {
        stepNumber: 4,
        title: 'Stwórz bezwzględny plan zapobiegawczy (Pre-emption Plan)',
        instruction: 'Dla każdej z 5 przyczyn napisz konkretne działanie prewencyjne, które podejmiesz dzisiaj.',
        promptText: 'Moje działania zapobiegawcze:',
        placeholder: 'Przed startem zrobię pre-sales i zbiorę 100 zamówień przedpłaconych...'
      }
    ],
    reflectionQuestions: [
      'Jakie ślepe plany odsłoniło przed Tobą to ćwiczenie?',
      'O ile wzrosły Twoje szanse na realny sukces po wdrożeniu poprawek prewencyjnych?'
    ]
  }
];

export const chapterTwentyFour: Chapter = {
  number: 24,
  volume: 3,
  volumeChapterNumber: 8,
  title: 'Rozdział 8: Decyzje i Proces Wybierania',
  subtitle: 'Jak człowiek podejmuje decyzje? Architektura wyboru, emocje, ryzyko i mapa sprawczości',
  leadParagraph: 'Każdego dnia Twój umysł podejmuje od 20 000 do 35 000 decyzji — od micro-wyborów dotyczących tego, czy podnieść wzrok na powiadomienie w telefonie, po monumentalne zwroty życiowe dotyczące kariery, małżeństwa czy finansów. Decyzja nie jest jednak prostym, odizolowanym kliknięciem w mózgu pomiędzy opcją A i B. Jest to skomplikowany, dynamiczny proces, w którym zderzają się wstępne interpretacje bodźców, biologiczne znaczniki somatyczne, wartości, presja społeczna, lęk przed stratą i ograniczenia metaboliczne kory przedczołowej. Zrozumienie, JAK podejmujesz decyzje, to pierwszy, niezbędny krok do odzyskania realnej kontroli nad własnym życiem.',
  totalEstimatedPages: 54,
  sections: [
    {
      id: 'sec-24-1',
      pageNumber: 520,
      sectionNumber: '24.1',
      title: 'Czym jest decyzja? Od zniekształconego mitu do procesualnej rzeczywistości',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Decyzja nie jest wydarzeniem chwilowym; jest procesem biologicznym, w którym cała Twoja przeszłość negocjuje z Twoją przyszłością o kształt bieżącej sekundy.',
        author: 'Antonio Damasio'
      },
      paragraphs: [
        'W potocznym przekonaniu decyzja kojarzy się z jednym, wyrazistym momentem: wypowiedzeniem słowa „tak”, podpisaniem umowy czy naciśnięciem przycisku „Kup teraz”. Wyobrażamy sobie człowieka jako chłodnego analityka, który kładzie na szalach wagi zyski oraz straty, dokonuje chłodnego przeliczenia i wybiera opcję o wyższej wartości oczekiwanej.',
        'Ta wizja jest jednak fundamentalną iluzją poznawczą. Współczesna neuronauka afektywna i psychologia decyzyjna dowodzą, że to, co nazywamy „momentem decyzji”, jest jedynie końcowym akordem długiej kaskady procesów zachodzących w sieciach neuronowych. Zanim świadomy System 2 (kora przedczołowa) sformułuje uzasadnienie wyboru, ciche układy podkorowe — ciało migdałowate, wyspa, prążkowie i brzuszno-przyśrodkowa kora przedczołowa — zdążyły już dokonać wstępnej selekcji bodźców i nadać im somatyczną walencję afektywną.',
        'Podejmowanie decyzji jest w rzeczywistości nieustanną grą pomiędzy zbieraniem dostępnych informacji, subiektywną interpretacją sytuacji, stanem fizjologicznym organizmu, presją otoczenia a prognozą przyszłych emocji. Jeśli chcesz podejmować lepsze decyzje, nie możesz skupiać się wyłącznie na samym momencie wyboru — musisz nauczyć się zarządzać całym procesem decyzyjnym od pierwszego błysku uwagi.'
      ]
    },
    {
      id: 'sec-24-2',
      pageNumber: 524,
      sectionNumber: '24.2',
      title: 'Decyzja a automatyczna reakcja: Kiedy kierujesz, a kiedy jesteś kierowany',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Fundamentalne rozróżnienie w analizie ludzkiego działania przebiega między automatyczną reakcją odruchową a autonomiczną decyzją. Kiedy omijasz przeszkodę na drodze, odruchowo cofasz rękę od gorącego palnika czy sięgasz po telefon na dźwięk powiadomienia, nie podejmujesz decyzji w ścisłym tego słowa znaczeniu. Twój mózg realizuje zautomatyzowany skrypt behawioralny zapisany w jądrach podstawy.',
        'Prawdziwa decyzja zaczyna się w miejscu, w którym pojawia się PRZERWA (pauza poznawcza) pomiędzy bodźcem a reakcją. W tej szczelinie czasowej kora przedczołowa otrzymuje przestrzeń na zatrzymanie automatyzmu, przeanalizowanie alternatywnych ścieżek i wybór opcji, która nie jest bezpośrednią odpowiedzią na najsilniejszy bodziec dopaminowy.',
        'Większość ludzi przeżywa życie w przekonaniu, że nieustannie podejmują decyzje, podczas gdy w 80% przypadków realizują jedynie odruchowe nawyki i wyuczone reakcje na bodźce środowiskowe. Budowanie sprawczości polega na poszerzaniu tej przestrzeni pomiędzy bodźcem a działaniem.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 1: Wybuch w trakcie zebrania biurowego',
          paragraphs: [
            'Sytuacja i bohater: Projektant Michał (34 lata) otrzymuje uszczypliwą uwagę od kolegi podczas prezentacji. Zamiast automatycznie odkrzyknąć (odruch obronny), Michał bierze głęboki wdech, zatrzymuje wzrok na wykresie przez 3 sekundy i spokojnie odpowiada na merytoryczną część zarzutu.',
            'Dlaczego ten przykład jest ważny? Pokazuje on precyzyjną granicę pomiędzy reakcją nawykową a decyzją. 3-sekundowa pauza umożliwiła aktywację kory grzbietowo-bocznej przedczołowej (dlPFC) i zahamowanie impulsu z ciała migdałowatego.',
            'Co dokładnie pokazuje? Że dojrzała decyzja wymaga opanowania technologii somatycznego zatrzymania impulsu w ciele.'
          ]
        }
      ]
    },
    {
      id: 'sec-24-3',
      pageNumber: 528,
      sectionNumber: '24.3',
      title: 'Rozpoznanie sytuacji decyzyjnej: Jak umysł dostrzega potrzebę wyboru',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Aby proces decyzyjny w ogóle wystartował, umysł musi najpierw zarejestrować rozbieżność pomiędzy stanem obecnym a stanem pożądanym. To zjawisko nazywamy rozpoznaniem problemu lub uświadomieniem sobie pola wyboru.',
        'Często jednak ludzie żyją w stanie poznawczej ślepoty na decyzje (Choice Blindness). Przyjmują trudne warunki pracy, toksyczne relacje czy autodestrukcyjne nawyki jako niezmienne prawa natury, nie uświadamiając sobie, że każdego dnia podejmują bierną decyzję o ich tolerowaniu. Rozpoznanie, że „znajduję się w punkcie wyboru”, jest pierwszym aktem wolności.'
      ]
    },
    {
      id: 'sec-24-4',
      pageNumber: 532,
      sectionNumber: '24.4',
      title: 'Informacyjny plac budowy: Dostępność, filtracja i szum informacyjny',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Gdy sytuacja zostanie zidentyfikowana jako decyzyjna, umysł rozpoczyna zbieranie danych. W świecie cyfrowym dobiega jednak do zjawiska przeciążenia informacyjnego (Information Overload). Nasz System 1 stosuje wówczas skróty myślowe, z których najgroźniejsza jest Heurystyka Dostępności (Availability Heuristic).',
        'Podejmujemy decyzje w oparciu nie o fakty o największej wadze merytorycznej, lecz o dane, które są najbardziej wyraziste emocjonalnie i najłatwiej dostępne w pamięci roboczej (np. ostatni nagłówek z wiadomości, drastyczna historia znajomego).'
      ]
    },
    {
      id: 'sec-24-5',
      pageNumber: 536,
      sectionNumber: '24.5',
      title: 'Brak informacji, ryzyko i niepewność: Jak navigować we mgle',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Istnieje fundamentalna różnica pomiędzy RYZYKIEM (gdzie znamy możliwe scenariusze i ich prawdopodobieństwa statystyczne) a NIEPEWNOŚCIĄ (gdzie nie znamy ani scenariuszy, ani prawdopodobieństw). Współczesny świat w 90% stawia nas w obliczu czystej niepewności.',
        'Ludzki mózg nienawidzi niepewności — traktuje ją jako biologiczne zagrożenie. Dlatego w warunkach braku danych mamy tendencję do tworzenia iluzorycznych spójnych opowieści (WYSIATI — What You See Is All There Is) i podejmowania decyzji opartych na życzeniowym myśleniu.'
      ]
    },
    {
      id: 'sec-24-6',
      pageNumber: 540,
      sectionNumber: '24.6',
      title: 'Cień przeszłości: Jak dawne doświadczenia i pamięć programują dzisiejszy wybór',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Żadna decyzja nie powstaje w poznawczej próżni. Kiedy stajesz przed koniecznością wyboru, Twój mózg nie analizuje sytuacji od zera jak czysty algorytm komputerowy. W ułamku sekundy układ pamięci epizodycznej (hipokamp) oraz struktury emocjonalne (ciało migdałowate i kora wyspowa) dokonują automatycznego skanowania przeszłych doświadczeń w poszukiwaniu analogii i skojarzeń.',
        'Zjawisko to opiera się na kodowaniu afektywnym dawnych konsekwencji. Jeśli we wczesnej dorosłości odważna decyzja zawodowa lub wyrażenie własnego zdania w grupie skończyły się dotkliwą karą społeczną, wyśmianiem lub odrzuceniem, mózg zakodował to wydarzenie jako zagrażające przetrwaniu. Dzisiaj, gdy pojawia się z pozoru podobna szansa (np. wystąpienie na konferencji lub negocjacja podwyżki), układ nerwowy odruchowo generuje somatyczny sygnał awersyjny, zanim kora przedczołowa zdąży przeliczyć obiektywne szanse sukcesu.',
        'W ten sposób dawne traumy, błędy wychowawcze, ale także nieświadomie przyswojone skrypty rodzinne stają się „niewidzialnymi recenzentami” naszych bieżących wyborów. Dojrzałość decyzyjna wymaga odróżnienia realnego ryzyka tu i teraz od echa dawnego zranienia, które próbuje nas nadmiernie chronić kosztem życiowego rozwoju.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD: Blokada inwestycyjna po błędzie sprzed lat',
          paragraphs: [
            'Sytuacja i bohater: Grzegorz (41 lat), doświadczony inżynier, od 6 lat trzyma wszystkie oszczędności na nieoprocentowanym rachunku bieżącym, tracąc realną wartość kapitału na skutek inflacji. Kiedy doradca finansowy proponuje mu zdywersyfikowany, bezpieczny portfel obligacji skarbowych, Grzegorz odczuwa paraliżujący ścisk w żołądku i odrzuca propozycję.',
            'Mechanizm psychologiczny: 10 lat wcześniej Grzegorz stracił sporą kwotę na spekulacyjnych akcjach pojedynczej spółki technologicznej. Jego układ limbiczny zgeneralizował to bolesne doświadczenie: każde słowo związane z „inwestycją” odpala ten sam alarm lękowy, uniemożliwiając logiczne odróżnienie ryzykownej spekulacji od bezpiecznego oszczędzania.',
            'Wniosek i interwencja: Uświadomienie sobie, że dzisiejsza awersja nie wynika z parametrów obligacji, lecz ze starego, nieprzepracowanego wstydu po błędzie giełdowym, pozwoliło Grzegorzowi oddzielić przeszłość od teraźniejszości i podjąć racjonalną decyzję kapitałową.'
          ]
        }
      ]
    },
    {
      id: 'sec-24-7',
      pageNumber: 544,
      sectionNumber: '24.7',
      title: 'Architektura ramowania (Framing): Rzeczywistość w ramy ujęta',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Reakcja na straty jest w ludzkim umyśle nieporównywalnie silniejsza niż reakcja na odpowiadające im zyski. Ta asymetria — awersja do straty — jest wbudowaną cechą naszej architektury poznawczej. Sprawia ona, że ludzie gotowi są podjąć katastrofalne, desperackie ryzyko wyłącznie po to, by uniknąć pewnej, gwarantowanej straty.',
        author: 'Prof. Daniel Kahneman & Amos Tversky',
        source: 'Princeton University / Stanford University, „Prospect Theory: An Analysis of Decision under Risk”, Econometrica, 1979'
      },
      paragraphs: [
        'Daniel Kahneman i Amos Tversky w rewolucyjnej Teorii Perspektywy (nagrodzonej Nagrodą Nobla) obalili klasyczną teorię oczekiwanej użyteczności, udowadniając, że ludzkie decyzje zależą w sposób dramatyczny nie od obiektywnego stanu posiadania, lecz od tego, czy problem decyzyjny zostanie ujęty w Ramie Zysku (Gain Frame), czy w Ramie Straty (Loss Frame).',
        'Ludzki mózg wykazuje silną nieliniowość afektywną: ból psychologiczny wywołany stratą 1000 złotych jest subiektywnie odczuwany jako ponad 2 do 2.5 razy intensywniejszy niż przyjemność ze zdobycia dokładnie tej samej kwoty. Krzywa funkcji wartości jest wklęsła dla zysków (co rodzi awersję do ryzyka) i stroma oraz wypukła dla strat (co rodzi skłonność do podejmowania skrajnego ryzyka).',
        'Kiedy decydent widzi sytuację w ramie ochrony tego, co już posiada (zysku), woli bezpieczny wróbel w garści niż gołębia na dachu. Kiedy jednak ta sama obiektywnie sytuacja zostanie zdefiniowana jako konieczność zaakceptowania straty, decydent wchodzi w tryb „wszystko albo nic” — staje się hazardzistą gotowym postawić na szali cały swój majątek, reputację czy zdrowie, byle tylko mieć cień szansy na uniknięcie bólu utraty.'
      ],
      subsections: [
        {
          id: 'sub-24-7-1',
          title: 'Analiza słów Kahnemana i Tversky’ego: Asymetria Neuroafektywna i Architektura Wyboru',
          content: [
            'Wypowiedź twórców Teorii Perspektywy obnaża ewolucyjne korzenie naszej psychiki. Dla organizmu żyjącego na granicy przetrwania strata 50% zasobów żywności oznaczała śmierć głodową, podczas gdy zdobycie 50% więcej pożywienia dawało jedynie przejściowy komfort. Nasz układ nerwowy jest potomkiem tych, którzy panicznie bali się strat.',
            'Współcześnie ta pierwotna adaptacja staje się źródłem potężnych pułapek. Wystarczy zamienić słowo „przeżywalność” na „śmiertelność” w diagnozie lekarskiej, albo „zniżka za gotówkę” na „dopłata za kartę”, by całkowicie odwrócić odsetek ludzi akceptujących daną propozycję. Ramowanie nie zmienia faktów matematycznych — zmienia stan pobudzenia ciała migdałowatego i wyspy.'
          ]
        },
        {
          id: 'sub-24-7-2',
          title: 'Słynny Dylemat Azjatyckiej Choroby (Asian Disease Problem)',
          content: [
            'W klasycznym eksperymencie Tversky i Kahneman przedstawili badanym sytuację epidemii grożącej śmiercią 600 osób. W grupie I (rama zysku: ilu ludzi ocaleje) zaoferowano program A (200 osób ocaleje na pewno) oraz program B (1/3 szansy, że 600 ocali się, 2/3 szansy, że nikt nie ocaleje). Aż 72% wybrało opcję A — unikając ryzyka.',
            'W grupie II (rama straty: ilu ludzi umrze) przedstawiono ten sam dylemat: program C (400 osób umrze na pewno) i program D (1/3 szansy, że nikt nie umrze, 2/3 szansy, że umrze 600 osób). W tej grupie aż 78% wybrało opcję D (ryzykowną!). Matematycznie programy A i C oraz B i D są identyczne. Zmiana jednego słowa („ocaleje” na „umrze”) sprawiła, że większość ludzi z ostrożnych asekurantów przedzierzgnęła się w ryzykantów.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-24-7-1',
          type: 'badanie',
          title: 'Neuroobrazowanie Efektu Ramowania (De Martino et al., Science, 2006)',
          content: 'Badania fMRI wykazały, że uleganie efektowi ramowania wiąże się z gwałtownym skokiem aktywności ciała migdałowatego (emocjonalna reakcja na słowa-klucze). Natomiast osoby, które potrafiły oprzeć się ramowaniu i podjąć racjonalną, spójną matematycznie decyzję, wykazywały wysoką aktywność w korze oczodołowo-czołowej (OFC) oraz brzuszno-przyśrodkowej korze przedczołowej (vmPFC), która neutralizowała emocjonalny alarm migdała.'
        }
      ],
      interactiveWindow: {
        id: 'win-24-7',
        title: 'Laboratorium Ramowania Decyzji: Zysk czy Strata?',
        type: 'trzy_interpretacje',
        context: 'Lekarz przedstawia Rafałowi (45 lat) dwie metody leczenia przewlekłego schorzenia kręgosłupa: operację chirurgiczną oraz długą rehabilitację.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wariant I: Przedstawienie operacji w Ramie Sukcesu',
            description: 'Lekarz mówi: „90% pacjentów po tej operacji odzyskuje pełną sprawność i wraca do normalnego życia”. Jak zareaguje układ decyzyjny Rafała?',
            options: [
              {
                text: 'Kora przedczołowa interpretuje to jako wysokie bezpieczeństwo i Rafał z dużą ulgą zgadza się na zabieg',
                feedback: 'Prawda. Rama 90% sukcesu aktywuje pozytywne markery afektywne i obniża poczucie zagrożenia.',
                isOptimal: true
              },
              {
                text: 'Rafał skupia się na 10% niepowodzeń i ucieka z gabinetu',
                feedback: 'Mało prawdopodobne przy takim sformułowaniu — uwaga kory wzrokowej i pamięci roboczej jest zakotwiczona w słowie „sukces”.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Wariant II: Przedstawienie tej samej operacji w Ramie Porażki',
            description: 'Inny lekarz mówi: „U 10 na 100 pacjentów operacja ta kończy się powikłaniami lub brakiem poprawy”. Co dzieje się w mózgu pacjenta?',
            options: [
              {
                text: 'Ciało migdałowate podnosi alarm awersyjny przed stratą zdrowia — Rafał gwałtownie odrzuca opcję operacji',
                feedback: 'Dokładnie tak działa asymetria Kahnemana: informacja o 10% powikłań wywołuje wielokrotnie silniejszy lęk niż radość z 90% sukcesu.',
                isOptimal: true
              },
              {
                text: 'Rafał wylicza w pamięci, że 10% powikłań to to samo co 90% sukcesu, i podejmuje taką samą decyzję',
                feedback: 'Tylko nieliczne osoby o wybitnym treningu statystycznym i wysokiej samoregulacji potrafią zignorować ramę słowną.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'W jakich ważnych decyzjach Twojego życia przedstawienie problemu jako „straty czegoś” skłoniło Cię do podjęcia niebezpiecznego, chaotycznego ryzyka?'
      }
    },
    {
      id: 'sec-24-8',
      pageNumber: 548,
      sectionNumber: '24.8',
      title: 'Emocje jako kompas i zakłócenie: Hipoteza Znaczników Somatycznych',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Kiedy emocje zostają całkowicie odcięte od procesu rozumowania — jak dzieje się to przy uszkodzeniach kory brzuszno-przyśrodkowej — rozum wcale nie staje się czysty i nieskazitelny. Wręcz przeciwnie: człowiek gubi się w nieskończonym regresie trywialnych obliczeń, tracąc zdolność do podjęcia najprostszej życiowej decyzji.',
        author: 'Prof. Antonio Damasio',
        source: 'University of Southern California / Salk Institute, „Błąd Kartezjusza: Emocje, rozum i ludzki mózg”, 1994'
      },
      paragraphs: [
        'Przez ponad trzysta lat zachodnia myśl filozoficzna i naukowa tkwiła w uścisku kartezjańskiego dualizmu: uważano, że rozum i emocje to dwie wrogie siły, a optymalna decyzja to taka, z której z chirurgiczną precyzją usunięto wszelki ślad uczuć. Antonio Damasio, jeden z najwybitniejszych neurobiologów naszych czasów, definitywnie obalił ten mit w swojej przełomowej Hipotezie Znaczników Somatycznych (Somatic Marker Hypothesis).',
        'Punktem wyjścia dla Damasio były badania nad pacjentami z uszkodzeniem brzuszno-przyśrodkowej kory przedczołowej (vmPFC), z których najbardziej znanym stał się pacjent Elliot. Przed operacją usunięcia guza mózgu Elliot był błyskotliwym prawnikiem, kochającym mężem i cenionym obywatelem. Po uszkodzeniu vmPFC jego iloraz inteligencji (IQ), pamięć robocza, zdolności językowe i logiczne pozostały nienaruszone — potrafił z łatwością rozwiązywać abstrakcyjne testy logiczne.',
        'W życiu realnym Elliot stał się jednak całkowicie sparaliżowany decyzyjnie. Potrafił spędzić całe popołudnie na debatowaniu nad tym, czy zapisać notatkę niebieskim czy czarnym długopisem, rozważając setki nieistotnych argumentów. Podpisywał skrajnie naiwne umowy z oszustami, doprowadzając się do bankructwa. Ponieważ jego mózg nie generował emocjonalnych „znaczników somatycznych” (szybkich sygnałów z ciała: przyspieszonego tętna, napięcia mięśni, ucisku w żołądku), każda opcja wydawała mu się równie dobra i równie obojętna.'
      ],
      subsections: [
        {
          id: 'sub-24-8-1',
          title: 'Analiza słów prof. Antonio Damasio: Znaczniki Somatyczne Jako Nawigator',
          content: [
            'Wypowiedź Damasio uderza w sedno problemu złożoności decyzyjnej. Gdy stajesz przed wyborem życiowym, liczba możliwych scenariuszy, zmiennych i konsekwencji dąży do nieskończoności. Czysty kalkulator logiczny (grzbietowo-boczna kora przedczołowa) nie jest w stanie w ułamku sekundy przeliczyć drzewa prawdopodobieństw — doszłoby do natychmiastowego przegrzania pamięci operacyjnej.',
            'W tym momencie do gry wkraczają znaczniki somatyczne generowane przez układ vmPFC-wyspa-ciało migdałowate. W oparciu o pamięć dawnych doświadczeń ciało wysyła błyskawiczny mikrosygnał afektywny: „ta opcja grozi niebezpieczeństwem” (ścisk w brzuchu) lub „ta opcja rokuje nadzieję” (rozluźnienie). Znaczniki te nie podejmują decyzji za nas — one BŁYSKAWICZNIE ODRZUCAJĄ 90% niebezpiecznych lub bezsensownych wariantów, pozwalając chłodnej logice skupić się na dwóch lub trzech najlepszych alternatywach.'
          ]
        },
        {
          id: 'sub-24-8-2',
          title: 'Eksperyment Iowa Gambling Task (IGT): Mądrość Ciała Przed Świadomością Umysłu',
          content: [
            'W słynnym teście IGT uczestnicy ciągnęli karty z czterech talii. Dwie talie (A i B) były „złe” (oferowały wysokie natychmiastowe wygrane, ale potężne, katastrofalne kary okresowe, przynosząc stratę). Dwie talie (C i D) były „dobre” (małe wygrane, ale minimalne kary, przynosząc długoterminowy zysk).',
            'Wyniki badań neurobiologicznych zaszokowały świat: u osób zdrowych już po około 10 kartach skóra na dłoniach zaczynała wykazywać mikroskopijną reakcję galwaniczną (GSR — sygnał stresu autonomicznego) ZA KAŻDYM RAZEM, gdy ich dłoń zbliżała się do talii ryzykownych. Ciało „wiedziało”, że talie są niebezpieczne, na długo przed tym, jak uczestnicy potrafili to świadomie wyjaśnić (świadoma wiedza pojawiła się dopiero około 50-80 karty!). Pacjenci z uszkodzeniem vmPFC nigdy nie wytworzyli reakcji skórnej i konsekwentnie bankrutowali, wybierając talie A i B.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-24-8-1',
          type: 'wniosek',
          title: 'Podwójna Natura Emocji w Decyzjach: Kompas i Zakłócenie',
          content: 'Emocje są niezbędne jako automatyczny filtr selekcyjny, ale stają się destrukcyjne, gdy osiągają skrajną intensywność (afekt paniki, furia, skrajna euforia) lub gdy wynikają z niepowiązanych bodźców zewnętrznych (tzw. Incidental Emotion — np. podjęcie ryzykownej decyzji finansowej tylko dlatego, że przed chwilą obejrzałeś przerażający film w telewizji). Dojrzałość polega na słuchaniu sygnałów z ciała, ale weryfikowaniu ich przez korę przedczołową.'
        }
      ],
      interactiveWindow: {
        id: 'win-24-8',
        title: 'Iowa Gambling Task w Praktyce: Odczytywanie Znaczników Somatycznych',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Marek (38 lat) otrzymuje propozycję dołączenia do nowo powstającego startupu. Oferta brzmi fantastycznie na papierze (wysokie zarobki, prestiżowe stanowisko), ale podczas rozmowy z prezesem Marek czuje subtelny skurcz w dołku podsercowym i suchość w ustach.',
        steps: [
          {
            stepNumber: 1,
            title: 'Sygnał z wyspy i ciała migdałowatego (Znacznik Somatyczny)',
            description: 'Układ nerwowy Marka zarejestrował mikromimikę prezesa, niespójność w tonie głosu oraz dawne wspomnienia manipulacji. Co powinien zrobić Marek z tym sygnałem ciała?',
            options: [
              {
                text: 'Całkowicie go zignorować jako „irracjonalny stres” i podpisać umowę, bo cyfry w Excelu się zgadzają',
                feedback: 'Błąd w stylu pacjenta Elliota. Odcięcie sygnałów somatycznych prowadzi do ignorowania ukrytych zagrożeń relacyjnych.',
                isOptimal: false
              },
              {
                text: 'Uznać sygnał somatyczny za alarm wczesnego ostrzegania i zarządzić pogłębiony audyt prawno-finansowy spółki',
                feedback: 'Wzorcowe zachowanie. Znacznik somatyczny nie mówi „uciekaj bez powodu”, lecz alarmuje: „zbadaj to uważniej, zanim podejmiesz ryzyko”.',
                isOptimal: true
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Weryfikacja intuicji przez analityczną korę przedczołową (dlPFC)',
            description: 'Marek prosi o wgląd w księgi rachunkowe i odkrywa, że spółka ma zatajone 2 miliony złotych długu. Co to oznacza w kontekście teorii Damasio?',
            options: [
              {
                text: 'Znacznik somatyczny uratował go przed katastrofą — ciało podkorowo wyczuło fałsz szybciej niż świadomość logiczna',
                feedback: 'Precyzyjna konkluzja z Iowa Gambling Task. Emocje somatyczne i logika korowa muszą działać w nierozerwalnym tandemie.',
                isOptimal: true
              },
              {
                text: 'To był czysty przypadek, nie mający związku z fizjologią ciała',
                feedback: 'Badania neurobiologiczne wykluczają przypadek: ciało rejestruje subtelne wskaźniki kłamstwa i niebezpieczeństwa poza polem jawnej uwagi.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'W jakiej sytuacji życiowej Twoje ciało wysyłało wyraźny sygnał ostrzegawczy („coś tu jest nie tak”), który zignorowałeś na rzecz pozornej logiki — i jak się to skończyło?'
      }
    },
    {
      id: 'sec-24-9',
      pageNumber: 552,
      sectionNumber: '24.9',
      title: 'Strach przed konsekwencjami i paraliż analityczny (Analysis Paralysis)',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Gdy waga decyzji rośnie, a stawka osobista lub finansowa staje się wysoka, w umyśle uruchamia się mechanizm obronny w postaci nadmiernej, obsesyjnej analizy danych. Zjawisko to w psychologii poznawczej i teorii decyzji nosi nazwę Paraliżu Analitycznego (Analysis Paralysis).',
        'W paraliżu analitycznym człowiek wchodzi w iluzję, że jeśli zbierze jeszcze jeden raport, przeczyta kolejne 20 opinii w internecie lub stworzy jeszcze bardziej szczegółowy arkusz kalkulacyjny, całkowicie wyeliminuje niepewność i ryzyko błędu. W rzeczywistości gromadzenie kolejnych gigabajtów danych nie służy już poszerzaniu wiedzy merytorycznej — staje się wyrafinowaną formą regulacji emocjonalnej służącą odraczaniu momentu konfrontacji z odpowiedzialnością.',
        'Nadmierna analiza obciąża pamięć roboczą i prowadzi do wyczerpania zasobów poznawczych. Im dłużej analizujemy, tym większy chaos odczuwamy, aż wreszcie szansa zostaje bezpowrotnie utracona lub decyzja zostaje podjęta za nas przez bieg wydarzeń zewnętrznych.',
        'Poniższe studium przypadku ukazuje mechanizm lęku przed wyborem u menedżera, który przez 8 miesięcy nie potrafił podjąć decyzji o awansie, aż oferta została wycofana.'
      ],
      caseStudyRef: caseStudiesChapterTwentyFour[0]
    },
    {
      id: 'sec-24-10',
      pageNumber: 556,
      sectionNumber: '24.10',
      title: 'Dopaminowe przyciąganie: Natychmiastowa nagroda a dyskontowanie hiperboliczne',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Dlaczego tak często podejmujemy decyzje, które w długim horyzoncie czasowym są dla nas ewidentnie szkodliwe (np. sięgnięcie po papierosa, zjedzenie fast-foodu, zarwanie nocy)? Odpowiada za to neurologiczny mechanizm Dyskontowania Hiperbolicznego.',
        'Mózg wyceniasz wartość nagrody w funkcji czasu. Nagroda dostępna za 5 sekund (dopamina z cukru) ma dla układu nagrody nieproporcjonalnie wyższą wartość niż wielokrotnie większa nagroda odroczona w czasie o 10 lat (zdrowe serce i smukła sylwetka).'
      ]
    },
    {
      id: 'sec-24-11',
      pageNumber: 560,
      sectionNumber: '24.11',
      title: 'Zmęczenie decyzyjne (Decision Fatigue) i pośpiech: Kiedy kora przedczołowa gasi światło',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Grzbietowo-boczna kora przedczołowa (dlPFC) oraz przednia kora zakrętu obręczy (ACC) stanowią centrum zarządzania funkcjami wykonawczymi. Odpowiadają za hamowanie impulsów, porównywanie abstrakcyjnych kryteriów i utrzymywanie koncentracji. Są to jednak struktury o skrajnie wysokim zapotrzebowaniu metabolicznym na tlen i glukozę.',
        'Każdy wybór dokonywany w ciągu dnia — od decyzji, w co się ubrać i na którego maila odpisać, po negocjacje z klientem — zużywa tę samą pulę zasobów samoregulacji. Zjawisko to, zbadane m.in. przez Roya Baumeistera i Johna Tierneya, nosi nazwę Zmęczenia Decyzyjnego (Decision Fatigue).',
        'W stanie wyczerpania decyzyjnego układ nerwowy odcina energochłonny System 2 i przełącza się na dwie proste strategie awaryjne: albo ulega natychmiastowym impulsom dopaminowym (kupowanie niepotrzebnych rzeczy przy kasie, objadanie się wieczorem, wybuchy złości), albo bezrefleksyjnie wybiera opcję domyślną (Status Quo), odmawiając jakichkolwiek zmian.',
        'Zrozumienie biologii zmęczenia decyzyjnego nakazuje strategiczne zarządzanie kalendarzem: kluczowe decyzje życiowe i strategiczne należy podejmować w pierwszej połowie dnia, chroniąc poranne zasoby przed zalewem trywialnych mikro-wyborów.'
      ]
    },
    {
      id: 'sec-24-12',
      pageNumber: 564,
      sectionNumber: '24.12',
      title: 'Decyzje pod presją otoczenia: Konformizm i wstrząs społeczny',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Ewolucyjnie mózg człowieka jest zaprogramowany do traktowania wykluczenia z plemienia jako śmiertelnego zagrożenia. Z tego powodu kora zakrętu obręczy i wyspa reagują na brak aprobaty społecznej w niemal identyczny sposób jak na fizyczny ból somatyczny.',
        'W warunkach presji grupy, autorytetu czy pośpiechu narzuconego przez drugą stronę, nasz indywidualny proces decyzyjny ulega silnemu zniekształceniu. Uruchamia się zjawisko społecznego dowodu słuszności (Social Proof) oraz uległość wobec autorytetu, które potrafią całkowicie wyłączyć logiczne myślenie i skłonić człowieka do decyzji sprzecznych z jego interesem i wartościami.',
        'Sprytni negocjatorzy i sprzedawcy celowo łączą presję społeczną ze sztucznym deficytem czasu („Ta oferta jest ważna tylko przez godzinę, inni klienci już stoją w kolejce”), zmuszając klienta do panicznego skrótu poznawczego.',
        'Poniższe studium przypadku ukazuje dramatyczny błąd decyzyjny popełniony pod wpływem techniki zakotwiczenia cenowego i pośpiechu narzuconego przez dewelopera.'
      ],
      caseStudyRef: caseStudiesChapterTwentyFour[1]
    },
    {
      id: 'sec-24-13',
      pageNumber: 568,
      sectionNumber: '24.13',
      title: 'Impulsywność a Paradoks Wyboru: Od bezmyślności do paraliżu',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Maksymalizatorzy dążą do podjęcia wyłącznie absolutnie optymalnego wyboru. Jednak w świecie obfitości alternatyw poszukiwanie ideału staje się niezawodną receptą na decyzyjny paraliż, chroniczną niepewność i bolesny żal podecyzyjny. Prawdziwie mądry decydent to satysfakcjoner — ktoś, kto potrafi zdefiniować próg „wystarczająco dobrego” i zamknąć deliberację.',
        author: 'Prof. Barry Schwartz & Herbert Simon',
        source: 'Swarthmore College / Carnegie Mellon University, „The Paradox of Choice: Why More Is Less”, Harper Perennial, 2004'
      },
      paragraphs: [
        'W psychologii decyzji obserwujemy dwa skrajne bieguny dysfunkcji wyboru: z jednej strony impulsywność (podjęcie działania bez udziału kory przedczołowej pod wpływem nagłego afektu), z drugiej strony — paraliż wywołany nadmiarem alternatyw.',
        'Koncepcja Paradoksu Wyboru (Paradox of Choice) sformułowana przez Barry’ego Schwartza oraz teoria Ograniczonej Racjonalności Herberta Simona rzucają wyzwanie dogmatowi współczesnej kultury wolnorynkowej, która głosi, że maksymalizacja liczby opcji jest tożsama z maksymalizacją wolności i dobrostanu.',
        'W rzeczywistości ludzki aparat poznawczy posiada ścisłe ograniczenia przepustowości pamięci operacyjnej (ok. 4±1 jednostki informacji w ujęciu Nelsona Cowana). Kiedy stajemy przed wyborem spośród 30 modeli laptopów, 50 planów taryfowych czy setek profili na portalu randkowym, każda kolejna alternatywa drastycznie podnosi koszt porównań, obciąża korę przedczołową i generuje lęk przed utratą korzyści płynących z odrzuconych opcji (Opportunity Cost).'
      ],
      subsections: [
        {
          id: 'sub-24-13-1',
          title: 'Analiza słów Schwartza i Simona: Maksymalizator vs Satysfakcjoner',
          content: [
            'Herbert Simon, laureat Nagrody Nobla, jako pierwszy wprowadził pojęcie „satysfakcjonowania” (satisficing — neologizm z połączenia satisfy i suffice):',
            '1. MAKSYMALIZATOR (Maximizer): Dąży do wyboru opcji absolutnie najlepszej ze wszystkich możliwych. Przed podjęciem decyzji musi sprawdzić każdy sklep, przeczytać każdą recenzję i porównać każdy parametr. W efekcie spędza tygodnie na poszukiwaniach, a po zakupie nie czuje radości, lecz żal i podejrzenie, że gdzieś istniała jeszcze lepsza oferta.',
            '2. SATYSFAKCJONER (Satisficer): Określa z góry sztywne, obiektywne kryteria minimalne („Szukam hotelu z czystą łazienką, do 300 zł za dobę, w odległości 1 km od centrum”). Przegląda oferty i wybiera PIERWSZĄ, która spełnia te kryteria, natychmiast kończąc proces poszukiwań. Psychologicznie satysfakcjonerzy są znacznie szczęśliwsi, wolni od lęku i rzadziej doświadczają depresji decyzyjnej.'
          ]
        },
        {
          id: 'sub-24-13-2',
          title: 'Słynny Eksperyment z Dżemem (Iyengar & Lepper, 2000)',
          content: [
            'W luksusowym supermarkecie badacze wystawili stoisko degustacyjne z dżemami. W pierwszym wariancie wystawiono 24 rodzaje dżemu — stoisko przyciągnęło 60% przechodniów (duża ciekawość), ale tylko 3% z nich zdecydowało się na zakup słoika.',
            'W drugim wariancie wystawiono jedynie 6 rodzajów dżemu — stoisko przyciągnęło mniej osób (40%), ale aż 30% z nich dokonało zakupu! Ograniczenie liczby opcji aż dziesięciokrotnie zwiększyło realną konwersję zakupową, eliminując paraliż decyzyjny i lęk przed złym wyborem.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-24-13-1',
          type: 'praktyka',
          title: 'Strategia Ograniczania Opcji: Heurystyka Trzech Wariantów',
          content: 'Zastosuj regułę satysfakcjonera w codziennym życiu: przy każdym zakupie lub wyborze ścieżki działania zredukuj pole poszukiwań do MAKSYMALNIE TRZECH alternatyw spełniających Twoje kryteria progowe. Gdy wybierzesz jedną z nich, bezwzględnie przestań przeglądać pozostałe oferty, blokując odruch „a może było coś lepszego”.'
        }
      ],
      interactiveWindow: {
        id: 'win-24-13',
        title: 'Diagnoza Stylu Decyzyjnego: Maksymalizator czy Satysfakcjoner?',
        type: 'co_zrobilbys',
        context: 'Łukasz (29 lat) planuje weekendowy wyjazd i od trzech tygodni codziennie po 2 godziny przegląda portale rezerwacyjne, mając otwartych 48 kart w przeglądarce. Czuje ogromne zmęczenie i irytację.',
        steps: [
          {
            stepNumber: 1,
            title: 'Diagnoza pułapki decyzyjnej Łukasza',
            description: 'Jaki mechanizm psychologiczny zablokował zdolność Łukasza do rezerwacji noclegu?',
            options: [
              {
                text: 'Typowy syndrom maksymalizatora napędzany paraliżem wyboru i lękiem przed kosztem alternatywnym',
                feedback: 'Dokładnie tak. Łukasz boi się, że wybierając hotel X, bezpowrotnie straci hipotetyczne korzyści z hotelu Y.',
                isOptimal: true
              },
              {
                text: 'Brak wystarczającej liczby filtrów sortujących w wyszukiwarkach internetowych',
                feedback: 'Wręcz przeciwnie — im więcej filtrów, tym głębsza obsesja optymalizacji każdego mikroskopijnego parametru.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Wdrożenie protokołu satysfakcjonera',
            description: 'Jaką instrukcję powinien wdrożyć Łukasz, aby zamknąć proces w 10 minut?',
            options: [
              {
                text: 'Spisać 3 twarde kryteria (cena, lokalizacja, ocena > 8.0) i zarezerwować pierwszy napotkany obiekt spełniający warunki',
                feedback: 'Znakomita interwencja Simona i Schwartza. Odcina pętlę deliberacji i przywraca spokój psychiczny.',
                isOptimal: true
              },
              {
                text: 'Przejrzeć jeszcze 20 kolejnych ofert, aby upewnić się, że nie przegapił promocji życia',
                feedback: 'To tylko pogłębi paraliż analityczny i wyczerpie resztki zasobów wykonawczych kory przedczołowej.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'W jakich obszarach Twojego życia (zakupy, relacje, praca) zachowujesz się jak nieszczęśliwy maksymalizator zamiast spokojnego satysfakcjonera?'
      }
    },
    {
      id: 'sec-24-14',
      pageNumber: 572,
      sectionNumber: '24.14',
      title: 'Kompas wartości: Decyzje spójne a decyzje w konflikcie moralnym',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Większość codziennych trudności decyzyjnych nie wynika z braku kalkulatora w głowie, lecz z głębokiego konfliktu pomiędzy natychmiastową ulgą somatyczną a nadrzędnymi wartościami osobistymi.',
        'Wartości to nie abstrakcyjne hasła na ścianie — to fundamentalne priorytety, które określają, jakim człowiekiem chcesz być i jaką cenę jesteś gotów za to zapłacić. Kiedy stajesz przed wyborem (np. powiedzenie niewygodnej prawdy w pracy vs uległe milczenie), Twój układ nerwowy odczuwa natychmiastowy lęk przed konfliktem. Jeśli podejmiesz decyzję z poziomu unikania lęku, zyskujesz chwilową ulgę w ciele, lecz płacisz za to wysoką cenę w postaci wewnętrznego rozpadu, wstydu i utraty szacunku do samego siebie.',
        'Decyzja oparta na wartościach wymaga zgody na krótkoterminowy dyskomfort somatyczny (drżenie rąk, przyspieszone bicie serca, niepewność) w imię długoterminowej integralności tożsamościowej. To właśnie zdolność do udźwignięcia chwilowego napięcia w imię wyższego sensu stanowi fundament dojrzałej sprawczości i odporności psychicznej.'
      ]
    },
    {
      id: 'sec-24-15',
      pageNumber: 576,
      sectionNumber: '24.15',
      title: '„Dobra decyzja” a dobry rezultat: Rozdzielanie myślenia od losowości (Outcome Bias)',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Wynikizm (resulting) to nasz wrodzony, toksyczny odruch utożsamiania jakości decyzji z jakością jej ostatecznego rezultatu. Życie nie jest jednak szachami, lecz pokerem — grą w warunkach niepełnej informacji i losowości. Możesz rozegrać rozdanie po mistrzowsku i przegrać przez pecha, tak jak możesz zagrać bezmyślnie i wygrać przez czysty fuks. Aby doskonalić swoje wybory, musisz bezwzględnie rozwieść jakość procesu z kaprysami losu.',
        author: 'Annie Duke',
        source: 'Mistrzyni World Series of Poker, kognitywistka, „Thinking in Bets: Making Smarter Decisions When You Don\'t Have All the Facts”, Portfolio / Penguin, 2018'
      },
      paragraphs: [
        'Jednym z najbardziej destrukcyjnych zniekształceń w ocenie ludzkich wyborów jest Błąd Oceny po Wyniku (Outcome Bias), w psychologii decyzji nazywany przez Annie Duke „wynikizmem” (resulting). Polega on na retrospektywnym ocenianiu mądrości, kompetencji i rzetelności decydenta wyłącznie przez pryzmat tego, co ostatecznie się wydarzyło, z całkowitym zignorowaniem stanu wiedzy, bilansu prawdopodobieństw i niepewności istniejącej w punkcie wyboru.',
        'Nasz świat nie jest układem deterministycznym, w którym określone działanie ze 100% pewnością przynosi identyczny skutek. Jest środowiskiem wysoce probabilistycznym, w którym pomiędzy naszą decyzją a ostatecznym wynikiem zawsze pośredniczy czynnik losowości (szumu środowiskowego, nieprzewidywalnych zdarzeń, zachowań innych ludzi).',
        'Z tego wynika fundamentalny paradoks: można podjąć wybitną pod każdym względem decyzję (zgodną z twardymi danymi, dywersyfikacją i chłodną kalkulacją ryzyka) i ponieść bolesną porażkę na skutek zbiegu nieszczęśliwych okoliczności. Jednocześnie można podjąć skrajnie idiotyczną, lekkomyślną decyzję (np. zainwestowanie oszczędności życia w podejrzaną piramidę finansową) i przypadkowo osiągnąć zysk, ponieważ bańka spekulacyjna pękła tydzień po wycofaniu środków.'
      ],
      subsections: [
        {
          id: 'sub-24-15-1',
          title: 'Analiza słów Annie Duke: Pułapka Uczenia Się na Złych Informacjach Zwrotnych',
          content: [
            'Wypowiedź Annie Duke dotyka największego niebezpieczeństwa wynikizmu: rozregulowania mechanizmu adaptacyjnego uczenia się. Kiedy oceniasz decyzję po wyniku:',
            '1. NAGRADZASZ GŁUPIE RYZYKO: Jeśli pijany kierowca przejedzie skrzyżowanie na czerwonym świetle i nikogo nie potrąci, a w domu powie sobie: „Widzisz, świetnie prowadzę po alkoholu, nic się nie stało”, wzmacnia katastrofalny nawyk, który prędzej czy później doprowadzi do tragedii.',
            '2. KARZESZ ROZSĄDNE WYBORY: Jeśli menedżer podejmie decyzję o projekcie z 80% szansą na sukces i 20% szansą na porażkę (matematycznie doskonała relacja), a zrealizuje się scenariusz 20% pecha, i zostanie za to zwolniony lub skrytykowany — w przyszłości nikt w organizacji nie podejmie żadnego innowacyjnego ryzyka.'
          ]
        },
        {
          id: 'sub-24-15-2',
          title: 'Pokerowa Metafora Życia: Myślenie Zakładami (Thinking in Bets)',
          content: [
            'W szachach nie ma ukrytych informacji ani losowości rzutu kostką — jeśli przegrasz, popełniłeś błąd. Jednak w prawdziwym życiu niemal każda decyzja (wybór partnera, zmiana pracy, zakup mieszkania) przypomina partię pokera: podejmujesz decyzję przy niepełnych danych, a o wyniku decyduje splot Twoich umiejętności i rozdania kart przez los.',
            'Dojrzałość decyzyjna polega na zadaniu pytania: „Czy biorąc pod uwagę to, co wiedziałem w tamtej minucie, podjąłem najlepszy możliwy zakład probabilistyczny?”. Jeśli odpowiedź brzmi „tak”, to nawet w przypadku przegranej decydent odczuwa spokój sumienia i nie wpada w autodestrukcyjne poczucie winy.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-24-15-1',
          type: 'wniosek',
          title: 'Zasada Annie Duke: Rozliczaj Proces, a Nie Rezultat',
          content: 'Nigdy nie pytaj po fakcie wyłącznie: „Czy to się udało?”. Zadaj trzy pytania procesowe: 1) Czy uwzględniłem kluczowe fakty dostępne przed decyzją? 2) Czy zdefiniowałem możliwe ryzyka i scenariusze awaryjne? 3) Czy moja kalkulacja szans była racjonalna? Jeśli tak — proces był poprawny, a niepomyślny wynik jest kosztem wariancji probabilistycznej świata.'
        }
      ],
      interactiveWindow: {
        id: 'win-24-15',
        title: 'Rozprawa z Wynikizmem: Analiza Sukcesu Fuksowego i Porażki Szlachetnej',
        type: 'fakt_czy_interpretacja',
        context: 'Konrad (33 lata) podjął rzetelnie skalkulowaną decyzję o otwarciu kawiarni w nowo powstającym centrum biznesowym. Dwa miesiące po otwarciu wybuchła globalna pandemia i ogłoszono lockdown. Konrad zbankrutował i uważa się za „totalnego życiowego nieudacznika”.',
        steps: [
          {
            stepNumber: 1,
            title: 'Oddzielenie faktów decyzyjnych od losowości',
            description: 'Czy Konrad popełnił błąd merytoryczny w procesie podejmowania decyzji?',
            options: [
              {
                text: 'Fakt procesowy: Biznesplan był rzetelny, a lockdown był zdarzeniem typu „Czarny Łabędź” (skrajna losowość nieprzewidywalna)',
                feedback: 'Dokładnie tak. Jakość procesu decyzyjnego Konrada była wysoka — bankructwo było skutkiem losowego szoku makroekonomicznego.',
                isOptimal: true
              },
              {
                text: 'Interpretacja wynikistyczna: Skoro zbankrutował, to znaczy, że jego decyzja była bezmyślna i głupia',
                feedback: 'Klasyczna pułapka Outcome Bias. Ocenianie decyzji z perspektywy wiedzy po fakcie (hindsight bias) jest błędem logicznym.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Aktualizacja przekonań na przyszłość',
            description: 'Jaki wniosek powinien wyciągnąć Konrad dla swojego poczucia wartości i przyszłych decyzji?',
            options: [
              {
                text: 'Mój proces myślenia był zdrowy — przegrałem zakład z losem, ale zachowuję kompetencje i wiarę w swoje zdolności analityczne',
                feedback: 'Zdrowa, odporna psychicznie postawa oparta na myśleniu probabilistycznym Annie Duke.',
                isOptimal: true
              },
              {
                text: 'Nigdy więcej nie podejmę żadnego ryzyka, bo świat zawsze obróci się przeciwko mnie',
                feedback: 'Katastrofizacja i nadmierna generalizacja prowadząca do paraliżu wyuczonej bezradności.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Przypomnij sobie sytuację, w której podjąłeś znakomitą, przemyślaną decyzję, ale los przyniósł porażkę — czy potrafisz dziś przestać się za nią biczować?'
      }
    },
    {
      id: 'sec-24-16',
      pageNumber: 580,
      sectionNumber: '24.16',
      title: 'Błędy w przewidywaniu przyszłości (Affective Forecasting): Dlaczego nie wiemy, co nas uszczęśliwi',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Każda decyzja jest w gruncie rzeczy próbą zakupu określonego stanu emocjonalnego w przyszłości. Wybieramy kierunek studiów, zmieniamy partnera, kupujemy dom lub auto, ponieważ nasz umysł projektuje: „Gdy to osiągnę, będę nareszcie szczęśliwy i wolny od lęku”.',
        'Problem polega na tym, że badania Daniela Gilberta i Timothy’ego Wilsona nad Prognozowaniem Afektywnym (Affective Forecasting) dowodzą, iż ludzie są systematycznie i dramatycznie omylni w przewidywaniu swoich przyszłych stanów emocjonalnych. Wpadamy w błąd zwany Impact Bias — przeceniamy zarówno intensywność, jak i czas trwania przyszłego szczęścia po sukcesie oraz cierpienia po ewentualnej porażce.',
        'Nasz umysł w trakcie prognozowania ignoruje zjawisko Adaptacji Hedonistycznej (szybki powrót do bazowego poziomu nastroju po zakupie nowego auta czy awansie) oraz nie docenia działania wrodzonego „psychologicznego układu odpornościowego”, który po porażce uruchamia racjonalizację i pozwala odzyskać równowagę znacznie szybciej, niż podpowiadał to paniczny lęk przed decyzją.'
      ]
    },
    {
      id: 'sec-24-17',
      pageNumber: 584,
      sectionNumber: '24.17',
      title: 'Żal po decyzji i zmiana zdania: Dysonans podecyzyjny',
      category: 'cwiczenia',
      readingTimeMinutes: 17,
      paragraphs: [
        'W momencie, w którym klamka zapada i dokonujesz nieodwracalnego wyboru, w psychice natychmiast pojawia się zjawisko Dysonansu Podecyzyjnego (Leon Festinger). Mózg zaczyna wyolbrzymiać wady wybranej opcji oraz idealizować odrzucone alternatywy, wywołując bolesne poczucie żalu (Buyer’s Remorse).',
        'Zdolność do zarządzania żalem podecyzyjnym wymaga zrozumienia, że żal jest naturalnym kosztem wolności wyboru. Zmiana zdania w obliczu nowych, twardych faktów jest wyrazem dojrzałej elastyczności poznawczej (aktualizacja bayesowska), podczas gdy nerwowe skakanie między opcjami pod wpływem chwilowego dyskomfortu jest objawem niedojrzałości emocjonalnej.',
        'Poniższy warsztat uczy, jak przeprowadzić 10-krokowy audyt procesu decyzyjnego, aby rozdzielić jakość myślenia od przypadkowości wyniku i wyciągnąć konstruktywne wnioski na przyszłość.'
      ],
      exerciseRef: selfExercisesChapterTwentyFour[0]
    },
    {
      id: 'sec-24-18',
      pageNumber: 588,
      sectionNumber: '24.18',
      title: 'Brak decyzji jako forma działania: Pasywna akceptacja konsekwencji',
      category: 'cwiczenia',
      readingTimeMinutes: 16,
      paragraphs: [
        'Wielu ludzi ucieka przed odpowiedzialnością za wybór w stan pasywnego zawieszenia. Mówią sobie: „Jeszcze się nie zdecydowałem”, „Poczekam, aż sytuacja sama się wyklaruje”. Jest to jedna z najgroźniejszych iluzji poznawczych zwana Błędem Zaniechania (Omission Bias) oraz Błędem Status Quo.',
        'Czas i otoczenie nie zatrzymują się w miejscu, gdy Ty unikasz wyboru. Odwlekanie decyzji o zmianie pracy, podjęciu leczenia czy zakończeniu toksycznej relacji jest w 100% równoznaczne z podjęciem aktywnej decyzji o pozostaniu w dotychczasowych warunkach i zapłaceniu pełnego kosztu zdrowotnego, emocjonalnego i finansowego tego trwania.',
        'Brak decyzji to decyzja o oddaniu sterów swojego życia w ręce przypadku, innych ludzi lub upływającego czasu. Poniższy warsztat uczy protokołu Pre-Mortem (antycypacji katastrofy), który pozwala przełamać paraliż i zabezpieczyć swoje plany przed zaniechaniem.'
      ],
      exerciseRef: selfExercisesChapterTwentyFour[1]
    },
    {
      id: 'sec-24-19',
      pageNumber: 592,
      sectionNumber: '24.19',
      title: 'Budowanie świadomego procesu decyzyjnego: Od chaosu do protokołu sprawczości',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Świadomy proces decyzyjny nie polega na eliminacji emocji, lecz na stworzeniu powtarzalnego, bezpiecznego protokołu myślowego, który chroni korę przedczołową przed pułapkami pośpiechu, zmęczenia i zniekształceń poznawczych.',
        'Kompletny protokół dojrzałego decydenta opiera się na 6 zintegrowanych filarach:',
        '1. PAUZA POZNAWCZA (Stop-Reflect): Odroczenie reakcji na bodziec o minimum 24 godziny przy kluczowych decyzjach, aby wygasić afektywne porwanie ciała migdałowatego.',
        '2. DEKONSTRUKCJA RAMOWANIA: Świadome przepisanie problemu w dwóch przeciwstawnych ramach — jako ochrona zysku oraz jako zarządzanie stratą — w celu neutralizacji asymetrii awersji do straty.',
        '3. TRÓJKĄT INFORMACYJNY: Jasne rozdzielenie twardych faktów (dane obiektywne), założeń (nasze domysły) oraz niewiadomych (obszary czystej niepewności).',
        '4. ZASADA TRZECH ALTERNATYW: Ograniczenie pola wyboru do maksymalnie 3 zdefiniowanych opcji, by uniknąć paraliżu wielości w myśl Paradoksu Wyboru.',
        '5. TEST KOMPASU WARTOŚCI: Zadanie sobie pytania: „Czy ta decyzja służy mojemu długoterminowemu wzrostowi i integralności, czy jest jedynie ucieczką przed chwilowym lękiem?”.',
        '6. PROTOKÓŁ PRE-MORTEM I SZTYWNY DEADLINE: Wyobrażenie sobie porażki planu, zabezpieczenie słabych punktów i wyznaczenie nieprzekraczalnej daty podjęcia ostatecznego kroku.'
      ]
    },
    {
      id: 'sec-24-20',
      pageNumber: 596,
      sectionNumber: '24.20',
      title: 'Błędne intuicje na temat podejmowania decyzji',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Przeanalizujmy 5 najczęstszych błędnych przekonań na temat decyzji:',
        'BŁĘDNE PRZEKONANIE 1: „Idealna decyzja wymaga całkowitego wyłączenia emocji i bycia zimnym jak robót.” -> Prawda: Bez znaczników somatycznych wpadamy w paraliż analityczny. Emocje są koniecznym kompasem weryfikacji wartości.',
        'BŁĘDNE PRZEKONANIE 2: „Im więcej informacji zbiorę, tym lepszą decyzję podejmę.” -> Prawda: Nadmiar danych prowadzi do przeciążenia poznawczego, szumu i iluzji kontroli.',
        'BŁĘDNE PRZEKONANIE 3: „Jeśli decyzja przyniosła zły rezultat, oznacza to, że była złą decyzją.” -> Prawda: W systemach probabilistycznych wynik zależy także od losowości (Outcome Bias).',
        'BŁĘDNE PRZEKONANIE 4: „Odwlekanie decyzji daje mi czas na podjęcie lepszego wyboru.” -> Prawda: Odwlekanie najczęściej służy obniżaniu lęku, a nie zbieraniu wiedzy, i prowadzi do utraty opcji.',
        'BŁĘDNE PRZEKONANIE 5: „Dobry decydent nigdy nie zmienia raz podjętego wyboru.” -> Prawda: Mądrość wymaga elastycznej aktualizacji hipotez w obliczu nowych, twardych faktów.'
      ]
    },
    {
      id: 'sec-24-21',
      pageNumber: 600,
      sectionNumber: '24.21',
      title: 'Co nadal nie jest jasne? Ograniczenia nauki o decyzjach',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Mimo ogromnego postępu kognitywistyki, nauka nadal szuka odpowiedzi na fundamentalne pytania:',
        '1. W jakim dokładnie ułamku sekundy świadome intencje kory przedczołowej mogą zawetować podkorowy impuls dopaminowy (zjawisko Free Won’t Benjamina Libeta)?',
        '2. Dlaczego jednostkowa tolerancja na niepewność i ryzyko różni się drastycznie między ludźmi o tym samym poziomie inteligencji?',
        '3. Jak dokładnie mikroflora jelitowa i układ odpornościowy modulują somatyczne przczucia decyzyjne poprzez oś jelitowo-mózgową?'
      ]
    },
    {
      id: 'sec-24-22',
      pageNumber: 604,
      sectionNumber: '24.22',
      title: 'Jak zastosować to jutro? Praktyczny protokół decyzyjny',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Oto 5 kroków, które możesz wdrożyć do swojego życia już jutro:',
        '1. Zastosuj Zasadę 24 Godzin przy każdej decyzji finansowej powyżej 500 zł — odczekanie doby neutralizuje dopaminowy pośpiech.',
        '2. Gdy czujesz paraliż wyboru, zmniejsz liczbę analizowanych opcji do maksymalnie TRZECH.',
        '3. Przed podjęciem ważnej decyzji zadaj sobie pytanie: „Czy podejmuję ten wybór z lęku przed stratą, czy z chęci realizacji wartości?”.',
        '4. Zawsze pytaj: „Jaki jest realny koszt braku decyzji i pozostania w tym miejscu przez kolejne 12 miesięcy?”.',
        '5. Prowadź krótki dziennik decyzyjny — zapisuj przesłanki wyboru PRZED poznaniem wyniku.'
      ]
    },
    {
      id: 'sec-24-23',
      pageNumber: 608,
      sectionNumber: '24.23',
      title: 'Egzamin z Rozdziału 8: Sprawdź swoją wiedzę decyzyjną',
      category: 'podsumowanie',
      readingTimeMinutes: 20,
      paragraphs: [
        'Oto kompleksowy test sprawdzający opanowanie materiału dotyczącego mechanizmów podejmowania decyzji, heurystyk poznawczych, znaczników somatycznych i protokołów sprawczości.'
      ]
    },
    {
      id: 'sec-24-24',
      pageNumber: 612,
      sectionNumber: '24.24',
      title: 'Most do Rozdziału 9: Od podjętej decyzji do uzewnętrznionego zachowania',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'W tym rozdziale zobaczyliśmy, że decyzja jest skomplikowanym wewnętrznym procesem, w którym myśl, interpretacja i emocja wyznaczają kierunek wyboru.',
        'Jednak sama wewnętrzna decyzja czy intencja to za mało — nie zmienia ona jeszcze fizycznej rzeczywistości. W kolejnym, Rozdziale 9, przejdziemy do kluczowego etapu: zobaczyliśmy JAK decyzje, interpretacje i emocje przekładają się na realne, uzewnętrznione ZACHOWANIE człowieka i jakie rodzą konsekwencje.'
      ]
    }
  ]
};
