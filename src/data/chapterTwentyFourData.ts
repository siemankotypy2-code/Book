import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

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
      readingTimeMinutes: 14,
      paragraphs: [
        'Żadna decyzja nie powstaje w próżni. Wstępny filtr decyzyjny jest budowany przez pamięć epizodyczną i uwarunkowania z przeszłości. Jeśli w przeszłości odważna decyzja o odezwaniu się w grupie skończyła się wyśmianiem, dzisiejszy układ limbiczny natychmiast wygeneruje silny sygnał lękowy na myśl o podjęciu ryzyka.'
      ]
    },
    {
      id: 'sec-24-7',
      pageNumber: 544,
      sectionNumber: '24.7',
      title: 'Architektura ramowania (Framing): Rzeczywistość w ramy ujęta',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Daniel Kahneman i Amos Tversky w Teorii Perspektywy udowodnili, że ludzkie decyzje zależą w sposób dramatyczny od tego, czy problem zostanie ujęty w Ramie Zysku, czy w Ramie Straty. Ludzie wykazują silną asymetrię afektywną: ból straty 1000 złotych boli około 2–2.5 razy mocniej niż radość z wygrania tej samej kwoty.',
        'Kiedy sytuacja zostanie wykadrowana jako unikanie straty, jesteśmy skłonni do podejmowania szalonego, nieuzasadnionego ryzyka. Kiedy ta sama sytuacja zostanie ujęta w ramie ochrony zysku, stajemy się skrajnie zachowawczy.'
      ]
    },
    {
      id: 'sec-24-8',
      pageNumber: 548,
      sectionNumber: '24.8',
      title: 'Emocje jako kompas i zakłócenie: Hipoteza Znaczników Somatycznych',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Przez wieki filozofia kartezjańska przeciwstawiała rozum emocjom, twierdząc, że idealna decyzja to decyzja całkowicie pozbawiona uczuć. Antonio Damasio obalił ten mit poprzez badania nad pacjentami z uszkodzeniem kory brzuszno-przyśrodkowej (vmPFC).',
        'Pacjenci ci posiadali nienaruszone IQ i idealną logikę matematyczną, ale z powodu braku sygnałów somatycznych (znaczników afektywnych z ciała) byli całkowicie niezdolni do podjęcia jakiejkolwiek decyzji w życiu realnym. Emocje są niezbędnym nawigatorem, który zawęża pole nieskończonych możliwości do kilku sensownych opcji.'
      ]
    },
    {
      id: 'sec-24-9',
      pageNumber: 552,
      sectionNumber: '24.9',
      title: 'Strach przed konsekwencjami i paraliż analityczny (Analysis Paralysis)',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Gdy stawka decyzji rośnie, w głowie człowieka uruchamia się proces nadmiernego analizowania. Gromadzenie kolejnych danych nie służy już zdobywaniu wiedzy, lecz obniżaniu lęku.',
        'Wpadamy wówczas w pętlę Analysis Paralysis. Poniższe studium przypadku ukazuje dramat dyrektora, który przez 8 miesięcy analizował zmianę pracy, aż szansa została mu odebrana.'
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
      readingTimeMinutes: 15,
      paragraphs: [
        'Kora przedczołowa zużywa ogromne ilości glukozy i tlenu. Po podjęciu kilkudziesięciu trudnych decyzji w ciągu dnia jej zdolności wykonawcze drastycznie spadają. Zjawisko to nazywamy Zmęczeniem Decyzyjnym (Decision Fatigue).',
        'W stanie zmęczenia decyzyjnego umysł przełącza się na dwa proste automatyzmy: ślepą uległość wobec impulsów albo pasywne trwanie przy opcji domyślnej (Status Quo), bez względu na koszty.'
      ]
    },
    {
      id: 'sec-24-12',
      pageNumber: 564,
      sectionNumber: '24.12',
      title: 'Decyzje pod presją otoczenia: Konformizm i wstrząs społeczny',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Jesteśmy istotami głęboko społecznymi. Podczas podejmują decyzji nasz mózg nieustannie kalkuluje ryzyko odrzucenia przez grupę. Często podejmujemy decyzje sprzeczne z własnym sumieniem i logiką, byle tylko uniknąć wykluczenia ze stada.',
        'Poniższe studium przypadku ilustruje, jak mechanizm zakotwiczenia cenowego i presja sprzedawcy doprowadziły do poważnej straty finansowej.'
      ],
      caseStudyRef: caseStudiesChapterTwentyFour[1]
    },
    {
      id: 'sec-24-13',
      pageNumber: 568,
      sectionNumber: '24.13',
      title: 'Impulsywność a Paradoks Wyboru: Od bezmyślności do paraliżu',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Skrajności decyzyjne są równie niebezpieczne. Z jednej strony mamy impulsywność — działanie pod wpływem chwilowego zrywu dopaminowego bez udziału kory przedczołowej. Z drugiej strony — Paradoks Wyboru Schwartza, gdzie zbyt wielka liczba alternatyw odbiera nam zdolność podjęcia jakiejkolwiek decyzji.'
      ]
    },
    {
      id: 'sec-24-14',
      pageNumber: 572,
      sectionNumber: '24.14',
      title: 'Kompas wartości: Decyzje spójne a decyzje w konflikcie moralnym',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Zaufanie do samego siebie i poczucie sprawczości rosną wtedy, gdy podejmujemy decyzje zgodne z naszym nadrzędnym kompasem wartości, nawet jeśli wiąże się to z poniesieniem dotkliwego kosztu krótkoterminowego.',
        'Decyzja podjęta wbrew własnym wartościom generuje bolesny dysonans moralny, który drąży psychikę przez całe lata.'
      ]
    },
    {
      id: 'sec-24-15',
      pageNumber: 576,
      sectionNumber: '24.15',
      title: '„Dobra decyzja” a dobry rezultat: Rozdzielanie myślenia od losowości (Outcome Bias)',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Jednym z największych błędów poznawczych jest Outcome Bias — ocenianie mądrości decyzji wyłącznie po jej rezultacie. Świat jest systemem probabilistycznym pełnym szumu i losowości. Świetna decyzja procesowa może przynieść zły rezultat z powodu unikalnego zbiegu okoliczności, a katastrofalnie głupia decyzja może przynieść zysk dzięki ślepemu szczęściu.',
        'Dojrzały człowiek ocenia siebie za jakość procesu decyzyjnego, a nie za czynniki losowe, na które nie miał wpływu.'
      ]
    },
    {
      id: 'sec-24-16',
      pageNumber: 580,
      sectionNumber: '24.16',
      title: 'Błędy w przewidywaniu przyszłości (Affective Forecasting): Dlaczego nie wiemy, co nas uszczęśliwi',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Podejmując decyzję, tak naprawdę próbujemy kupić sobie określony stan emocjonalny w przyszłości. Problem polega na tym, że ludzki umysł jest fatalny w prognozowaniu afektywnym (Affective Forecasting). Przeceniamy to, jak bardzo ucieszy nas awans, i jak bardzo zniszczy nas porażka (Impact Bias).'
      ]
    },
    {
      id: 'sec-24-17',
      pageNumber: 584,
      sectionNumber: '24.17',
      title: 'Żal po decyzji i zmiana zdania: Dysonans podecyzyjny',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Po dokonaniu wyboru umysł naturalnie wchodzi w stan dysonansu podecyzyjnego („A co, jeśli druga opcja była lepsza?”). Zmiana decyzji jest czasem oznaką mądrości i elastyczności, a czasem objawem chwiejności emocjonalnej.',
        'Poniższy warsztat uczy prowadzenia rzetelnego audytu procesu decyzyjnego na twardych danych.'
      ],
      exerciseRef: selfExercisesChapterTwentyFour[0]
    },
    {
      id: 'sec-24-18',
      pageNumber: 588,
      sectionNumber: '24.18',
      title: 'Brak decyzji jako forma działania: Pasywna akceptacja konsekwencji',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Brak wyboru nie zatrzymuje biegu wydarzeń. Bierność jest w rzeczywistości decyzją o pozwoleniu, aby to inne osoby, przypadek lub upływający czas ukształtowały Twoją przyszłość.',
        'Poniższy warsztat uczy stosowania protokołu Pre-Mortem do zabezpieczania decyzji przed klęską.'
      ],
      exerciseRef: selfExercisesChapterTwentyFour[1]
    },
    {
      id: 'sec-24-19',
      pageNumber: 592,
      sectionNumber: '24.19',
      title: 'Budowanie świadomego procesu decyzyjnego: Od chaosu do protokołu sprawczości',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Świadomy proces decyzyjny opiera się na 5 filarach:',
        '1. Stworzenie pauzy poznawczej (odroczenie reakcji na bodziec).',
        '2. Jawne nazwanie i przetestowanie ramowania (ramy zysku vs straty).',
        '3. Oddzielenie obiektywnych faktów od emocjonalnych wyobrażeń.',
        '4. Zastosowanie protokołu Pre-Mortem i weryfikacji najgorszego scenariusza.',
        '5. Wyznaczenie nieprzekraczalnego terminu decyzji (deadline).'
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
