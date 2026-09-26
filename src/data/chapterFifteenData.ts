import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterFifteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W badaniach nad Samokontrolą i „Luką Wiedza-Działanie” (Knowing-Doing Gap) Jeffreya Pfeffera i Roberta Suttona (Sekcja 15.1), główną przyczyną, dla której ludzie nie wdrażają wiedzy, mimo że ją posiadają, jest:',
    topic: 'Luka Wiedza-Działanie i Iluzja Informacji',
    sectionRef: 'Sekcja 15.1',
    options: [
      { label: 'A', text: 'Zbyt mała liczba przeczytanych książek i poradników.', isCorrect: false },
      { label: 'B', text: 'Mylenie gadania i zdobywania wiedzy z samym działaniem oraz brak mostów behawioralnych radzących sobie z oporem emocjonalnym w chwili wdrożenia.', isCorrect: true },
      { label: 'C', text: 'Wada wrodzona płata skroniowego.', isCorrect: false },
      { label: 'D', text: 'Brak certyfikatu ukończenia szkolenia online.', isCorrect: false }
    ],
    explanation: 'Konsumpcja wiedzy (czytanie o diecie, słuchanie o biznesie) daje fałszywy wyrzut dopaminy — mózg czuje się tak, jakby już wykonał pracę. Prawdziwe wdrożenie wymaga zmierzenia się z niewygodą i ryzykiem porażki.',
    keyTakeaway: 'Wiedza bez wdrożenia to tylko wyrafinowana forma rozrywki intelektualnej.'
  },
  {
    id: 2,
    question: 'Zgodnie z koncepcją Kristin Neff, dlaczego Samowspółczucie (Self-Compassion) jest nieskończenie skuteczniejszym narzędziem budowania odporności psychicznej niż surowa Samokrytyka (Sekcja 15.8 i 15.9)?',
    topic: 'Samowspółczucie vs Samokrytyka wg Kristin Neff',
    sectionRef: 'Sekcja 15.9',
    options: [
      { label: 'A', text: 'Samokrytyka jest zakazana przez prawo medyczne.', isCorrect: false },
      { label: 'B', text: 'Samokrytyka aktywuje obwód zagrożenia i kortyzol, wpychając mózg w lęk i unikanie, podczas gdy samowspółczucie aktywuje układ opiekuńczy i oksytocynę, dając odwagę do szybkiej nauki na błędach i ponownego działania.', isCorrect: true },
      { label: 'C', text: 'Samowspółczucie polega na leżeniu w łóżku i jedzeniu ciastek przez cały rok.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy w biochemice mózgu.', isCorrect: false }
    ],
    explanation: 'Kiedy po porażce biczujesz się słowami („Jestem beznadziejny, znowu zawaliłem”), Twoje ciało migdałowate zamyka się w obronnym paraliżu. Życzliwość wobec samego siebie w kryzysie to biologiczny fundament sprężystości psychicznej (Resilience).',
    keyTakeaway: 'Nie możesz zmotywować się do wielkości, nienawidząc samego siebie za potknięcia.'
  },
  {
    id: 3,
    question: 'Na czym polega paradoks Perfekcjonizmu Adaptacyjnego a Dezadaptacyjnego (Neurotycznego) (Sekcja 15.10)?',
    topic: 'Anatomia Perfekcjonizmu Neurotycznego',
    sectionRef: 'Sekcja 15.10',
    options: [
      { label: 'A', text: 'Perfekcjonista zawsze oddaje projekty 3 dni przed terminem.', isCorrect: false },
      { label: 'B', text: 'Perfekcjonizm dezadaptacyjny nie jest dążeniem do doskonałości — jest panicznym lękiem przed wstydem i odrzuceniem, co prowadzi do chronicznej prokrastynacji, wypalenia i zaniżania realnych wyników.', isCorrect: true },
      { label: 'C', text: 'Perfekcjoniści nigdy nie popełniają błędów ortograficznych.', isCorrect: false },
      { label: 'D', text: 'Dotyczy wyłącznie osób grających na skrzypcach.', isCorrect: false }
    ],
    explanation: 'Zdrowe dążenie do mistrzostwa (Excellence) cieszy się procesem i akceptuje błędy jako informację zwrotną. Perfekcjonizm neurotyczny uzależnia poczucie własnej wartości od nieskazitelnego rezultatu.',
    keyTakeaway: 'Dążenie do doskonałości to miłość do rozwoju; perfekcjonizm to lęk przed oceną.'
  },
  {
    id: 4,
    question: 'W technice „Pauzy Świętej” (The Sacred Pause) Tary Brach i Viktora Frankla (Sekcja 15.4), kluczowa przestrzeń wolności człowieka mieści się:',
    topic: 'Pauza między Bodźcem a Reakcją Frankla',
    sectionRef: 'Sekcja 15.4',
    options: [
      { label: 'A', text: 'W bankowym skarbcu pod ziemią.', isCorrect: false },
      { label: 'B', text: 'W ułamku sekundy pomiędzy bodźcem afektywnym a motoryczną reakcją — w tej szczelinie kora przedczołowa może wybrać świadomą odpowiedź zamiast automatycznego wybuchu.', isCorrect: true },
      { label: 'C', text: 'W trakcie snu paradoksalnego REM.', isCorrect: false },
      { label: 'D', text: 'Wyłącznie po wypiciu ziół uspokajających.', isCorrect: false }
    ],
    explanation: 'Viktor Frankl pisał: „Pomiędzy bodźcem a reakcją istnieje przestrzeń. W tej przestrzeni leży nasza wolność i nasza moc wyboru odpowiedzi. W naszej odpowiedzi leży nasz rozwój i nasze szczęście”.',
    keyTakeaway: 'Kto panuje nad pauzą, ten panuje nad swoim losem.'
  },
  {
    id: 5,
    question: 'Co to jest „Protokół Bounce-Back” (System Powrotu) w budowaniu długofalowej odporności na kryzysy życiowe (Sekcja 15.12)?',
    topic: 'System Powrotu i Elastyczność Psychiczna',
    sectionRef: 'Sekcja 15.12',
    options: [
      { label: 'A', text: 'Plan ucieczki z kraju w razie problemów finansowych.', isCorrect: false },
      { label: 'B', text: 'Z góry przygotowana, przetestowana procedura kroków somatycznych, mentalnych i społecznych, którą uruchamiasz automatycznie po zderzeniu z ciężką porażką, by skrócić czas trwania załamania.', isCorrect: true },
      { label: 'C', text: 'Wyrzucenie wszystkich pamiątek rodzinnych do rzeki.', isCorrect: false },
      { label: 'D', text: 'Zażywanie antybiotyków bez konsultacji z lekarzem.', isCorrect: false }
    ],
    explanation: 'Człowiek odporny psychicznie nie różni się od wrażliwego tym, że nie odczuwa bólu. Różni się tym, że ma gotowy system szybkiego powrotu do równowagi (Bounce-Back), który nie pozwala, by kryzys zamienił się w wielomiesięczną depresję.',
    keyTakeaway: 'Nie planuj życia bez kryzysów — zaprojektuj swój system szybkiego powrotu do pionu.'
  },
  {
    id: 6,
    question: 'Dlaczego koncepcja „Wyczerpania Ego” (Ego Depletion) Roya Baumeistera została zrewidowana przez Carol Dweck i nowsze badania (Sekcja 15.3)?',
    topic: 'Mit Baterii Siły Woli a Przekonania Poznawcze',
    sectionRef: 'Sekcja 15.3',
    options: [
      { label: 'A', text: 'Ponieważ kora mózgowa nie zużywa glukozy.', isCorrect: false },
      { label: 'B', text: 'Badania Dweck wykazały, że wyczerpanie siły woli pojawia się głównie u osób, które WIERZĄ, że siła woli jest wyczerpalną baterią; ci, którzy postrzegają samokontrolę jako samoodnawialne źródło energii, utrzymują wysokie skupienie znacznie dłużej.', isCorrect: true },
      { label: 'C', text: 'Ego w ogóle nie istnieje w psychologii poznawczej.', isCorrect: false },
      { label: 'D', text: 'Wszyscy ludzie mają identyczny zasób siły woli każdego ranka.', isCorrect: false }
    ],
    explanation: 'Choć zmęczenie biologiczne istnieje, psychologiczne przekonania o własnych limitach determinują to, kiedy się poddajemy. Zmiana narracji wewnętrznej odblokowuje rezerwy energii.',
    keyTakeaway: 'Twoje granice wytrzymałości są często granicami Twoich przekonań, a nie Twojej biologii.'
  },
  {
    id: 7,
    question: 'W protokole „Zasady 5 Sekund” Mel Robbins (Sekcja 15.6), odliczanie 5-4-3-2-1 ma na celu:',
    topic: 'Zasada 5 Sekund a Odruch Prefrontalny',
    sectionRef: 'Sekcja 15.6',
    options: [
      { label: 'A', text: 'Wystrzelenie rakiety kosmicznej.', isCorrect: false },
      { label: 'B', text: 'Uruchomienie kory przedczołowej i wykonanie ruchu zanim ciało migdałowate i zwoje podstawy wygenerują racjonalizację i opór przed wysiłkiem.', isCorrect: true },
      { label: 'C', text: 'Sprawdzenie sprawności aparatu mowy.', isCorrect: false },
      { label: 'D', text: 'Uspokojenie rytmu serca przed snem.', isCorrect: false }
    ],
    explanation: 'Pomiędzy impulsem do działania a uruchomieniem sabotażu mija około 5 sekund. Odliczanie wstecz wymaga wysiłku kory przedczołowej i przerywa pętlę automatycznego lęku.',
    keyTakeaway: 'Rusz się w ciągu 5 sekund, zanim Twój mózg przekona Cię, że to zły pomysł.'
  },
  {
    id: 8,
    question: 'W jaki sposób Architektura Wyboru (Choice Architecture) i tarcie behawioralne redukują potrzebę stosowania siły woli (Sekcja 15.5)?',
    topic: 'Tarcie Behawioralne w Samokontroli',
    sectionRef: 'Sekcja 15.5',
    options: [
      { label: 'A', text: 'Wymagają noszenia specjalnych opasek uciskowych na nadgarstkach.', isCorrect: false },
      { label: 'B', text: 'Zwiększają tarcie (liczbę kroków i wysiłek) dla zachowań niepożądanych (np. wyłączony telefon w innym pokoju) i zmniejszają tarcie do zera dla nawyków pożądanych (np. rozłożona mata do ćwiczeń), dzięki czemu kora przedczołowa nie musi toczyć walki z pokusą.', isCorrect: true },
      { label: 'C', text: 'Służą wyłącznie do projektowania sklepów wielkopowierzchniowych.', isCorrect: false },
      { label: 'D', text: 'Są całkowicie nieskuteczne u osób dorosłych.', isCorrect: false }
    ],
    explanation: 'Samokontrola oparta na wiecznym zmaganiu się z pokusą prędzej czy później przegra z wyczerpaniem metabolicznym. Mistrzowie samoregulacji nie mają silniejszej woli — po prostu usuwają pokusy ze swojego pola widzenia.',
    keyTakeaway: 'Nie polegaj na silnej woli w jaskini pokus — zaprojektuj środowisko, w którym pokusa wymaga zbyt dużego wysiłku.'
  },
  {
    id: 9,
    question: 'Jaką rolę odgrywa Panoramiczne Pole Widzenia (Panoramic Vision) w somatycznej regulacji układu nerwowego w stanach ostrego stresu (Sekcja 15.7)?',
    topic: 'Widzenie Panoramiczne a Nerw Błędny',
    sectionRef: 'Sekcja 15.7',
    options: [
      { label: 'A', text: 'Służy wyłącznie pilotom myśliwców wojskowych.', isCorrect: false },
      { label: 'B', text: 'Fizjologicznie przełącza aktywność z gałęzi współczulnej (widzenie tunelowe wywołane noradrenaliną) na gałąź przywspółczulną nerwu błędnego, obniżając tętno i napięcie mięśniowe bez udziału myśli werbalnych.', isCorrect: true },
      { label: 'C', text: 'Poprawia ostrość widzenia po zmroku o 200%.', isCorrect: false },
      { label: 'D', text: 'Wywołuje natychmiastowy sen głęboki.', isCorrect: false }
    ],
    explanation: 'Oczy są dosłownie wypustką mózgu na zewnątrz czaszki. Kiedy patrzysz wąsko (na ekran telefonu), pień mózgu podkręca czujność alarmową. Rozszerzenie pola widzenia na obrzeża wysyła biologiczny komunikat: „brak bezpośredniego zagrożenia życia”.',
    keyTakeaway: 'Kiedy czujesz panikę, nie zmuszaj się do pozytywnego myślenia — unieś wzrok i zobacz horyzont.'
  },
  {
    id: 10,
    question: 'Dlaczego deficyt snu głębokiego (Faza NREM 3/4) dramatycznie zwiększa prawdopodobieństwo załamania samokontroli następnego dnia (Sekcja 15.2)?',
    topic: 'Sen Wolnofalowy a Homeostaza Prefrontalna',
    sectionRef: 'Sekcja 15.2',
    options: [
      { label: 'A', text: 'Powoduje zanik mięśni kończyn dolnych.', isCorrect: false },
      { label: 'B', text: 'W fazie NREM układ glimfatyczny oczyszcza korę mózgową z toksycznych metabolitów (m.in. beta-amyloidu) i odnawia zapasy glikogenu w astrocytach; brak snu upośledza połączenia synaptyczne z ciałem migdałowatym o 60%.', isCorrect: true },
      { label: 'C', text: 'Sprawia, że człowiek zapomina własne nazwisko.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnego wpływu na procesy decyzyjne.', isCorrect: false }
    ],
    explanation: 'Matthew Walker (badacz snu z UC Berkeley) wykazał, że jedna nieprzespana noc cofa zdolność hamowania prefrontalnego do poziomu nietrzeźwego człowieka. Samokontrola bez 7–8 godzin snu to biologiczna fikcja.',
    keyTakeaway: 'Sen to nie luksus ani nagroda — to fundament metaboliczny Twojej woli i etyki.'
  }
];

export const chapterFifteen: Chapter = {
  number: 15,
  title: 'Samokontrola i Działanie: Ostatnia Twierdza Woli',
  subtitle: 'Co zrobić, kiedy wiesz, co powinieneś zrobić, ale nadal tego nie robisz — odporność, antyperfekcjonizm i system powrotu',
  leadParagraph: 'Dotarliśmy do punktu krytycznego całej podróży. Znasz już architekturę swojego umysłu z Tomu I: wiesz, jak System 1 walczy z Systemem 2, jak amygdala wzbudza afekt, jak uwaga selekcjonuje świat, jak percepcja tworzy iluzje i jak pamięć rekonstruuje przeszłość. Znasz mechanizmy grupy, komunikacji, wpływu, manipulacji, relacji, motywacji, nawyków i informacji z Tomu II. Masz całą wiedzę świata. I oto stajesz przed lustrem o 6:00 rano. Wszystko sprowadza się do tego jednego pytania: CO TERAZ ZROBISZ?',
  totalEstimatedPages: 64,
  sections: [
    {
      id: 'sec-15-1',
      pageNumber: 712,
      sectionNumber: '15.1',
      title: 'Wiedza nie gwarantuje działania: Przepaść kognitywno-behawioralna',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Wiedzieć i nie działać, to tak naprawdę jeszcze nie wiedzieć.',
        author: 'Wang Yangming'
      },
      paragraphs: [
        'Gdyby informacja była wszystkim, czego potrzebujemy, każdy człowiek z dostępem do internetu byłby milionerem z sześciopakiem na brzuchu, doskonałym małżeństwem i niezmąconym spokojem buddyjskiego mnicha. Przecież wszystkie te instrukcje są darmowe i dostępne w Google w 0,3 sekundy.',
        'Istnieje dramatyczna przepaść między wiedzą deklaratywną (co wiem) a wiedzą proceduralno-somatyczną (co moje ciało jest w stanie wykonać w warunkach stresu). Możesz przeczytać 50 książek o pływaniu, ale gdy wrzucą Cię na głęboką wodę oceanu podczas sztormu, Twoje teoretyczne dyplomy utoną razem z Tobą.',
        'W tym rozdziale przestajemy rozmawiać o teorii. Zajmiemy się inżynierią mostu, który łączy myśl z mięśniem: jak sprawić, by wola przekształciła się w twardy, fizyczny fakt w świecie rzeczywistym.'
      ]
    },
    {
      id: 'sec-15-2',
      pageNumber: 716,
      sectionNumber: '15.2',
      title: 'Biologia samokontroli: Kora przedczołowa w stanie deficytu metabolicznego',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Samokontrola nie jest mistyczną cechą charakteru ani darem niebios. Jest fizjologicznym procesem zachodzącym w brzuszno-przyśrodkowej i grzbietowo-bocznej korze przedczołowej.',
        'Kiedy jesteś niewyspany (mniej niż 7 godzin snu), poziom glukozy we krwi gwałtownie spada, a kora przedczołowa traci zdolność hamowania impulsów z ciała migdałowatego o ponad 40%. W tym stanie człowiek biologicznie cofa się w rozwoju do poziomu impulsywnego trzylatka.',
        'PRZYKŁAD 1: Prawnik Michał po 14-godzinnym dniu pracy w kancelarii wraca do domu i zjada całe opakowanie lodów czekoladowych oraz paczkę chipsów, oglądając bezmyślnie telewizję do 2 w nocy, mimo że rano obiecywał sobie zdrową dietę. Nie była to „słabość charakteru” — jego mózg zużył całą dostępną glukozę na hamowanie emocji podczas trudnych procesów sądowych. Kora przedczołowa po prostu wyłączyła zasilanie.'
      ]
    },
    {
      id: 'sec-15-3',
      pageNumber: 720,
      sectionNumber: '15.3',
      title: 'Mit nieskończonej woli: Od Baumeistera do Dweck',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Roy Baumeister ukuł słynną teorię „Wyczerpania Ego” (Ego Depletion) — twierdząc, że siła woli to mięsień, który męczy się przy każdym wysiłku.',
        'Jednak rewolucyjne badania Carol Dweck z Stanford University rzuciły nowe światło na ten mechanizm. Okazało się, że wyczerpanie siły woli dotyczy głównie tych ludzi, którzy WIERZĄ, że wola jest ograniczona! Uczestnicy, którzy traktowali wysiłek umysłowy jako proces rozgrzewający i dający nową energię, osiągali znakomite wyniki nawet po długotrwałym teście.',
        'Wniosek: Zarządzanie energią to nie tylko kalorie, to przede wszystkim Twoja wewnętrzna narracja o tym, czym jest zmęczenie.'
      ],
      caseStudyRef: {
        id: 'cs-ch15-sport-kontuzja',
        title: 'Ból Zerwanego Ścięgna: Jak Triatlonistka Przekształciła Mit Wyczerpania w Odporność',
        subtitle: 'Od rozpaczy po zerwaniu Achillesa do zdobycia medalu dzięki przebudowie narracji woli',
        protagonist: 'Klaudia (zawodniczka amatorskich mistrzostw Ironman, 34 lata) i jej fizjoterapeuta sportowy',
        context: 'Trzy miesiące przed najważniejszym startem życia na Hawajach. Podczas treningu pęka ścięgno Achillesa.',
        story: [
          'Klaudia zdefiniowała całe swoje życie przez pryzmat żelaznej dyscypliny sportowej. Kiedy lekarz założył gips i zapowiedział 9 miesięcy bez biegania, Klaudia wpadła w głęboką depresję reaktywną.',
          'Jej wewnętrzny monolog brzmiał: „Moja wola była wszystkim, co miałam. Bez sportu jestem nikim, całe moje poświęcenie poszło na marne”. Czuła chroniczne wyczerpanie, leżała w łóżku i unikała kontaktu z przyjaciółmi.',
          'Punkt zwrotny: Fizjoterapeuta zadał jej pytanie: „Klaudio, a co jeśli Twoja wola nie zużywa się, lecz właśnie teraz przechodzi najtrudniejszy trening mentalny w Twoim życiu?”.',
          'Zastosowanie koncepcji Carol Dweck: Klaudia przestała traktować rekonwalescencję jako przerwę w działaniu, a zaczęła jako aktywny trening adaptacyjny. Rozpisała harmonogram mikro-rehabilitacji, treningu siłowego górnych partii ciała na wózku i medytacji uważności.',
          'Kiedy po 8 miesiącach wróciła na trasę, nie tylko odzyskała dawną formę, ale ukończyła zawody z rekordem życiowym. Powtarzała: „Ból fizyczny to informacja, ale to twoja interpretacja decyduje, czy zrobisz z niego grób, czy trampolinę”.'
        ],
        decisionTaken: 'Klaudia odrzuciła narrację o wyczerpaniu i zniszczeniu na rzecz aktywnego wykorzystania kryzysu jako treningu odporności kognitywnej.',
        whatProtagonistSaw: 'Początkowo widziała w kontuzji koniec swojej tożsamości i dowód na kruchość planów.',
        whatWasMissed: 'Że jej odporność psychiczna była niezależna od sprawności jednej nogi — tkwiła w sposobie reagowania na przeciwności.',
        psychologicalAnalysis: {
          coreMechanism: 'Zmiana nastawienia (Mindset Shift wg Carol Dweck) z nastawienia na trwałość (Fixed Mindset) na nastawienie na rozwój (Growth Mindset).',
          cognitiveBiases: [
            { name: 'Katastrofizacja sportowa', description: 'Przekonanie, że jedna kontuzja przekreśla 10 lat wysiłku treningowego.', impact: 'Początkowy paraliż depresyjny.' }
          ],
          defenseMechanisms: [
            { name: 'Sublimacja energii afektywnej', explanation: 'Przekierowanie złości na systematyczną rehabilitację i pracę nad skupieniem.' }
          ],
          emotionalDynamic: 'Przejście od żałoby i wściekłości do niezniszczalnego spokoju wojownika.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Długofalowe planowanie i reewaluacja celów życiowych', activationState: 'Uruchomiona podczas tworzenia planu rehabilitacji' },
            { region: 'Przednia kora zakrętu obręczy', role: 'Modulacja percepcji bólu fizycznego i psychicznego', activationState: 'Wyciszona przez techniki mindfulness' }
          ],
          neurotransmitters: [
            { name: 'Endorfiny i serotonina', roleInScenario: 'Przywrócone przez sukcesywny progres w drobnych ćwiczeniach' }
          ],
          biologicalTimeline: [
            { timeMs: 'Trzeci miesiąc rehabilitacji', process: 'Mózg tworzy nowe mapy czuciowo-ruchowe, eliminując lęk przed obciążeniem nogi.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Przebudowa Dialogu Wewnętrznego', script: '„Moje ciało się leczy. Każdy dzień odpoczynku i ćwiczeń to cegiełka mojego powrotu do mistrzostwa”.', rationale: 'Chroni przed spiralą rozpaczy.' }
          ]
        },
        alternativePath: 'Gdyby Klaudia uległa myśleniu o wyczerpaniu, zrezygnowałaby ze sportu, przybrała na wadze i pogrążyła się w chronicznym poczuciu żalu.',
        readerQuestion: 'Jaki niespodziewany cios losu traktujesz jako wyrok, zamiast zobaczyć w nim najtrudniejszy trening Twojej woli?',
        keyTakeaway: 'Prawdziwa siła nie polega na tym, że nigdy nie upadasz. Polega na tym, że każdą przeszkodę potrafisz zamienić w paliwo do wzrostu.'
      }
    },
    {
      id: 'sec-15-4',
      pageNumber: 724,
      sectionNumber: '15.4',
      title: 'Pauza Święta: Jak odzyskać władzę nad pierwszą reakcją',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Pomiędzy bodźcem (chęć sięgnięcia po papierosa, impuls do krzyku, chęć sprawdzenia telefonu) a reakcją motoryczną istnieje okno neurochemiczne trwające od 1 do 3 sekund.',
        'Większość ludzi działa w trybie odruchowym: Bodziec → Reakcja. Człowiek dojrzały wprowadza w to miejsce „Pauzę Świętą” (Viktor Frankl, Tara Brach): Bodziec → PAUZA (1 głęboki wydech) → Świadomy Wybór.',
        'PRZYKŁAD 2: Matka 4-letniego Tomka, Karolina, po raz trzeci prosi syna o założenie butów. Chłopiec rozrzuca klocki i krzyczy: „Nie!”. Karolina czuje falę gorąca zalewającą szyję (wzbudzenie ciała migdałowatego). Dawniej wrzasnęłaby na dziecko. Teraz stosuje Pauzę Świętą: opiera dłonie na kolanach, bierze głęboki wydech przez nos z przedłużonym wydechem przez usta (fizjologiczne westchnienie), czeka 4 sekundy. Tętno opada. Zamiast krzyku mówi spokojnym, cichym tonem: „Widzę, że świetnie się bawisz klockami, ale za 5 minut zamykają przedszkole. Pomożesz mi wybrać, którego klocka zabierzesz do kieszeni?”. Bunt dziecka natychmiast wygasa.'
      ],
      exerciseRef: {
        id: 'ex-15-pauza-frankla',
        title: 'Trening Pauzy Fizjologicznej: Od Odruchu do Wyboru',
        subtitle: 'Wytrenuj 3-sekundowy bufor somatyczny hamujący automatyzmy układu limbicznego',
        objective: 'Zainstalowanie odruchu pauzy fizjologicznej w momentach skrajnego pobudzenia emocjonalnego.',
        durationMinutes: 15,
        neuroScientificFoundation: 'Podwójny wdech z przedłużonym wydechem (Physiological Sigh) aktywuje węzeł zatokowo-przedsionkowy przez nerw błędny, gwałtownie obniżając częstotliwość akcji serca.',
        steps: [
          {
            stepNumber: 1,
            title: 'Zidentyfikuj swój zapalnik',
            instruction: 'Określ bodziec, który najczęściej wywołuje u Ciebie automatyczną utratę panowania (np. marudzenie dziecka, powiadomienie ze Slacka, korek).',
            promptText: 'Mój główny zapalnik emocjonalny:',
            placeholder: 'Dźwięk powiadomienia od szefa po 17:00 wywołujący lęk i złość...'
          },
          {
            stepNumber: 2,
            title: 'Kotwica fizjologiczna',
            instruction: 'Połącz ten bodziec z natychmiastowym zatrzymaniem ciała i dwoma głębokimi wdechami przez nos.',
            promptText: 'Mój gest kotwiczący:',
            placeholder: 'Zaciśnięcie kciuka w dłoni i podwójny wdech z długim wydechem...'
          },
          {
            stepNumber: 3,
            title: 'Sformułuj świadomy wybór',
            instruction: 'Podczas wydechu zadaj sobie pytanie: „Kim chcę być w tej następnej minucie?”.',
            promptText: 'Moje pytanie odblokowujące:',
            placeholder: 'Wybieram spokój profesjonalisty zamiast paniki ofiary...'
          }
        ],
        reflectionQuestions: [
          'Jak zmieniło się Twoje poczucie sprawczości, gdy po raz pierwszy wytrzymałeś 5 sekund fali pragnienia bez ulegania?',
          'O ile mniej energii kosztuje 5-sekundowa pauza niż późniejsze naprawianie skutków wybuchu złości?'
        ]
      }
    },
    {
      id: 'sec-15-5',
      pageNumber: 728,
      sectionNumber: '15.5',
      title: 'Tarcie decyzyjne i architektura wyboru w praktyce',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Najlepszym sposobem na zachowanie siły woli jest... niestosowanie jej wcale. Każdy krok wymagający samokontroli to walka kory przedczołowej z miliardami lat ewolucyjnego lenistwa mózgu.',
        'Profesjonaliści projektują środowisko tak, by złe nawyki miały MAKSYMALNE TARCIE (np. telefon zamknięty w sejfie z timerem w innym pokoju), a dobre nawyki miały ZEROWE TARCIE (np. mata do jogi rozłożona na podłodze, książka leżąca na poduszce zamiast pilota).',
        'PRZYKŁAD 3: Student informatyki Bartek nie potrafił uczyć się do egzaminów, bo co 10 minut włączał gry wideo na komputerze. Zamiast walczyć ze sobą, wprowadził tarcie skrajne: odinstalował grę z dysku SSD, zaniósł kartę graficzną do pokoju współlokatora i poprosił go o schowanie jej do szafy na klucz do piątku. Ponowne uruchomienie gry wymagałoby 3 godzin pobierania i proszenia kolegi o klucz. W ten sposób Bartek zdał egzamin na ocenę bardzo dobrą bez zużywania ani grama siły woli.'
      ],
      caseStudyRef: {
        id: 'cs-ch15-doktorat',
        title: 'Paraliż Pracy Doktorskiej: Jak Aneta Pokonała Lukę Wiedza-Działanie i Ukończyła Rozprawę',
        subtitle: 'Od 3 lat prokrastynacji i paraliżu perfekcjonizmu do obrony doktoratu z wyróżnieniem',
        protagonist: 'Aneta (doktorantka biologii molekularnej, 29 lat) i jej promotor naukowy',
        context: 'Ostatni rok przewodu doktorskiego. Aneta zebrała znakomite wyniki badań w laboratorium, ale od 2 lat nie była w stanie napisać pierwszego rozdziału pracy.',
        story: [
          'Aneta była wybitną badaczką. Jej badania nad ekspresją genów mogły przynieść przełom w terapii nowotworowej. Posiadała setki stron notatek i analiz statystycznych.',
          'Jednak za każdym razem, gdy siadała do pustego dokumentu w edytorze Word, dopadał ją paniczny paraliż. Otwierała kolejną publikację naukową, tłumacząc sobie: „Muszę doczytać jeszcze ten jeden artykuł, zanim zacznę pisać”.',
          'W rzeczywistości działała klasyczna Luka Wiedza-Działanie: czytanie artykułów dawało jej bezpieczne poczucie „pracy naukowej”, eliminując lęk przed wystawieniem własnego tekstu na krytykę promotora i recenzentów.',
          'Gdy promotor zagroził zamknięciem przewodu doktorskiego, Aneta zgłosiła się do psychologa poznawczo-behawioralnego. Diagnoza: skrajny perfekcjonizm dezadaptacyjny i brak twardego tarcia behawioralnego.',
          'Interwencja krok po kroku: 1. Redukcja celu do mikrokroku („Napisz 200 słów dziennie o najgorszej możliwej jakości — masz prawo napisać absolutny chłam, byle tekst znalazł się na ekranie”).',
          '2. Wprowadzenie Twardego Tarcia: Praca bez internetu w bibliotece uniwersyteckiej od 8:00 do 11:00 rano z wyłączonym telefonem w depozycie.',
          '3. Zastąpienie samobiczowania Samowspółczuciem: Kiedy Aneta czuła lęk, kładła dłoń na klatce piersiowej i mówiła: „To normalne, że się boisz. Każdy naukowiec odczuwa ten lęk. Oddychaj i napisz jeden akapit”.',
          'W ciągu 5 miesięcy Aneta napisała 180 stron maszynopisu. Obroniła doktorat z wyróżnieniem, a dwa rozdziały zostały opublikowane w prestiżowym czasopiśmie „Nature Cell Biology”.'
        ],
        decisionTaken: 'Aneta zrezygnowała z iluzji napisania idealnego dzieła za pierwszym razem na rzecz codziennej dyscypliny „brudnopisu o niskiej stawce”.',
        whatProtagonistSaw: 'Aneta widziała w sobie leniwą, niezdolną do pisania oszustkę, która nie zasługuje na tytuł doktora.',
        whatWasMissed: 'Że paraliż nie wynikał z braku talentu, ale z wygórowanych standardów wewnętrznego krytyka, który żądał tekstu na poziomie Nagrody Nobla w pierwszym szkicu.',
        psychologicalAnalysis: {
          coreMechanism: 'Perfekcjonizm lękowy maskowany jako poszukiwanie dodatkowych danych (prokrastynacja produktywna).',
          cognitiveBiases: [
            { name: 'Myślenie czarno-białe (Wszystko albo nic)', description: '„Jeśli ten akapit nie jest genialny, to jestem beznadziejną badaczką”.', impact: 'Kasowanie każdego napisanego zdania po 2 minutach.' },
            { name: 'Efekt oszusta (Impostor Syndrome)', description: 'Głębokie przekonanie, że jej sukcesy były dziełem przypadku.', impact: 'Paraliżujący lęk przed weryfikacją tekstu.' }
          ],
          defenseMechanisms: [
            { name: 'Intelektualizacja', explanation: 'Ucieczka od lęku przed pisaniem w nieskończone studiowanie literatury obcej.' }
          ],
          emotionalDynamic: 'Przejście od rozpaczy i wstydu do wyzwalającej zgody na niedoskonałość pierwszego szkicu.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Grzbietowa część przedniej kory zakrętu obręczy (dACC)', role: 'Wykrywanie błędów i wzbudzanie alarmu wstydu', activationState: 'Nadaktywna przy każdej próbie pisania' },
            { region: 'Lewa grzbietowo-boczna kora przedczołowa', role: 'Inicjacja sekwencji motorycznych pisania', activationState: 'Odblokowana po obniżeniu poprzeczki do 200 słów' }
          ],
          neurotransmitters: [
            { name: 'Dopamina', roleInScenario: 'Przywrócenie regularnych wyrzutów dopaminy po odhaczeniu 200 słów każdego ranka' }
          ],
          biologicalTimeline: [
            { timeMs: 'Dzień 14 wdrożenia', process: 'Mózg przestaje kojarzyć otwieranie laptopa z paniką — pojawia się stan flow.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Księga Brudnopisów', script: '„Ten dokument ma tytuł: BRUDNOPIS PEŁEN BŁĘDÓW. Wolno mi tu napisać cokolwiek”.', rationale: 'Usuwa presję perfekcji z kory przedczołowej.' }
          ]
        },
        alternativePath: 'Gdyby Aneta nie przełamała paraliżu, rada wydziału skreśliłaby ją z listy doktorantów, a 5 lat jej ciężkiej pracy laboratoryjnej poszłoby na marne.',
        readerQuestion: 'Jaki wielki projekt w Twoim życiu czeka na realizację, sparaliżowany Twoim żądaniem, by od razu był arcydziełem?',
        keyTakeaway: 'Lepszy skończony i niedoskonały projekt w świecie rzeczywistym niż idealne arcydzieło gnijące w cmentarzu Twojej wyobraźni.'
      },
      exerciseRef: {
        id: 'ex-15-tarcie-behawioralne',
        title: 'Architektura Tarcia: Projektowanie Środowiska Bezsilnej Woli',
        subtitle: 'Zbuduj bariery dla złych nawyków i usuń przeszkody dla dobrych wyborów',
        objective: 'Praktyczne przekonfigurowanie przestrzeni fizycznej i cyfrowej w celu wyeliminowania tarcia decyzyjnego.',
        durationMinutes: 20,
        neuroScientificFoundation: 'Zmniejszenie liczby decyzji w ciągu dnia (Decision Fatigue) chroni pulę glukozy i neuroprzekaźników w grzbietowo-bocznej korze przedczołowej.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybierz destrukcyjny automatyzm',
            instruction: 'Określ nawyk, któremu ulegasz z powodu zbyt łatwego dostępu (np. social media, słodycze, seriale).',
            promptText: 'Mój automatyczny pożeracz energii:',
            placeholder: 'Przeglądanie Instagrama przed snem i podjadanie czekolady w trakcie pracy...'
          },
          {
            stepNumber: 2,
            title: 'Zainstaluj 3 stopnie tarcia',
            instruction: 'Dodaj co najmniej 3 fizyczne przeszkody dzielące Cię od tego zachowania.',
            promptText: 'Moje 3 bariery tarcia:',
            placeholder: '1. Aplikacja wylogowana i ukryta w folderze; 2. Telefon ładowany w korytarzu; 3. Brak słodyczy w domu...'
          },
          {
            stepNumber: 3,
            title: 'Uprość nawyk pożądany do 0 sekund',
            instruction: 'Przygotuj środowisko dla nawyku pożądanego tak, by wymagał zerowego wysiłku przygotowawczego.',
            promptText: 'Moja autostrada bez tarcia:',
            placeholder: 'Książka leży otwarta na poduszce, butelka z wodą stoi przy biurku...'
          }
        ],
        reflectionQuestions: [
          'Dlaczego poleganie na samej silnej woli w pokoju pełnym pokus jest z góry skazane na porażkę?',
          'O ile łatwiej jest podjąć dobrą decyzję, gdy zła wymaga ubrania się i wyjścia z domu?'
        ]
      }
    },
    {
      id: 'sec-15-6',
      pageNumber: 732,
      sectionNumber: '15.6',
      title: 'Zasada 5 Sekund i techniki odpalania zapłonu kory mózgowej',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Mel Robbins odkryła fenomen psychologiczny zwany Zasadą 5 Sekund. Kiedy w Twojej głowie pojawia się instynkt do działania ukierunkowanego na cel (wstać z łóżka, odezwać się na zebraniu, pójść pobiegać), masz dokładnie 5 sekund na wykonanie fizycznego ruchu.',
        'Jeśli nie ruszysz się w ciągu 5 sekund, Twoje zwoje podstawy mózgu uruchomią automatyczny program ochronny: pojawią się wymówki, racjonalizacje, zmęczenie i lęk.',
        'Odliczanie wstecz: 5 - 4 - 3 - 2 - 1 zmusza korę przedczołową do skupienia uwagi i przerywa pętlę wahania. Na słowo „1” wykonujesz ruch somatyczny.',
        'PRZYKŁAD 6: Poranny trening pływacki Jacka o 6:00 rano. Kiedy dzwoni budzik, a za oknem jest ciemno i leje deszcz, w jego głowie natychmiast odpala się negocjator: „Jestem zmęczony, pójdę popływać jutro, sen jest ważniejszy”. Jacek wie, że każda sekunda leżenia w pościeli zwiększa opór. Przerywa monolog odliczaniem na głos: 5 - 4 - 3 - 2 - 1 — na „1” odrzuca kołdrę i stawia stopy na zimnej podłodze. Gdy tylko ciało jest w pionie, negocjator traci siłę głosu.'
      ]
    },
    {
      id: 'sec-15-7',
      pageNumber: 736,
      sectionNumber: '15.7',
      title: 'Radzenie sobie ze stresem: Biologiczne regulatory układu nerwowego',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Kiedy poziom stresu przekracza próg tolerancji okna pobudzenia (Window of Tolerance), myślenie logiczne przestaje działać. Mózg znajduje się w stanie walki/ucieczki (sympatykomimetycznym) lub zamrożenia (grzbietowo-błędnym).',
        'Zamiast próbować przekonać siebie myślami, użyj wejść somatycznych od dołu do góry (Bottom-Up Regulation):',
        '1. Westchnienie Fizjologiczne (Physiological Sigh): Dwa szybkie wdechy przez nos (drugi dopompowuje pęcherzyki płucne) i długi, powolny wydech ustami. Dwa takie powtórzenia natychmiast wyrzucają nadmiar CO2 i stymulują nerw błędny.',
        '2. Panoramiczne Pole Widzenia: Przełączenie wzroku z widzenia tunelowego (fokus na smartfonie lub problemie) na widzenie peryferyjne (rejestrowanie ścian pokoju, sufitu i horyzontu bez ruszania gałkami ocznymi). Fizjologicznie wyłącza to układ współczulny.',
        'PRZYKŁAD 4: Doświadczony pilot linii lotniczych kapitan Tomasz podczas lądowania we mgle przy silnym wietrze bocznym słyszy alarm ostrzegający o uskoku wiatru (Windshear). Jego puls skacze do 140 uderzeń. Zamiast ulec panice, wykonuje jedno głębokie westchnienie fizjologiczne, rozszerza pole widzenia na wszystkie przyrządy pokładowe i ze stuprocentowym opanowaniem wykonuje procedurę Go-Around (odejście na drugi krąg), ratując 180 pasażerów.'
      ],
      caseStudyRef: {
        id: 'cs-ch15-finanse-impuls',
        title: 'Gorączka Zakupów: Jak Natalia Rozbroiła Pętlę Impulsywnego Wydawania pod Wpływem Stresu',
        subtitle: 'Od 40 000 zł długu na kartach kredytowych do somatycznego panowania nad zachciankami',
        protagonist: 'Natalia (Key Account Manager w korporacji mediowej, 30 lat) i certyfikowany psychodietetyk/doradca finansowy',
        context: 'Permanentny stres sprzedażowy, praca pod presją kwartalnych targetów i chroniczna bezsenność.',
        story: [
          'Natalia po każdym ciężkim zebraniu z dyrektorem czuła potworny ucisk w klatce piersiowej i poczucie pustki. Aby stłumić ten ból, wchodziła na aplikacje e-commerce (Zalando, luksusowe kosmetyki, biżuteria).',
          'W ułamku sekundy kupowała ubrania za 2000–3000 zł. Przez 15 minut czuła euforię (wyrzut dopaminy), po czym pojawiało się obezwładniające poczucie winy, wstyd i lęk.',
          'W ciągu 2 lat zgromadziła 40 000 zł zadłużenia na kartach kredytowych. Szafy pękały w szwach od nierozpakowanych paczek z metkami.',
          'Próby „wzięcia się w garść” i przysięgi o oszczędzaniu kończyły się fiaskiem przy pierwszym większym kryzysie w pracy.',
          'Punkt zwrotny: Zamiast obwiniać swój „słaby charakter”, Natalia rozpoczęła trening regulacji somatycznej. Zrozumiała, że zakupy były dla jej układu nerwowego jedynym znanym sposobem na wyciszenie pożaru w ciele migdałowatym.',
          'Protokół interwencji: 1. Usunięcie zapisanych kart z telefonu i zainstalowanie blokady zakupów na 48 godzin (Twarde tarcie).',
          '2. W chwili impulsu: 3 westchnienia fizjologiczne Hubermana, 10 minut spaceru na świeżym powietrzu i panoramiczne pole widzenia.',
          '3. Tłumaczenie potrzeby: „Czego moje ciało naprawdę teraz potrzebuje? Nie potrzebuję kolejnej sukienki — potrzebuję bezpieczeństwa, odpoczynku i przytulenia”.',
          'W ciągu 18 miesięcy Natalia spłaciła cały dług, zamknęła karty kredytowe i nauczyła się regulować napięcie przez jogę i saunę.'
        ],
        decisionTaken: 'Natalia zrozumiała biologiczne podłoże swoich impulsów i zastąpiła destrukcyjny nawyk somatyczną samoregulacją.',
        whatProtagonistSaw: 'Widziała w sobie zakupoholiczkę pozbawioną zasad moralnych i woli walki.',
        whatWasMissed: 'Że zakupy były desperacką próbą samoleczenia przewlekłego stanu wyczerpania i lęku przed odrzuceniem w korporacji.',
        psychologicalAnalysis: {
          coreMechanism: 'Regulacja afektu przez zachowania kompulsywne (Dopaminergic Coping) w stanie przeciążenia układu współczulnego.',
          cognitiveBiases: [
            { name: 'Dyskontowanie odroczone', description: 'Przecenianie natychmiastowej ulgi z zakupu ponad długofalowe bezpieczeństwo finansowe.', impact: 'Pętla zadłużenia.' }
          ],
          defenseMechanisms: [
            { name: 'Kompulsywne rozładowanie napięcia', explanation: 'Użycie rytuału kliknięcia „Kup teraz” jako chemicznego znieczulenia emocji.' }
          ],
          emotionalDynamic: 'Przejście od paniki i wstydu do ugruntowanego poczucia bezpieczeństwa somatycznego.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Jądro półleżące (Nucleus Accumbens)', role: 'Wzbudzenie pożądania i oczekiwania nagrody', activationState: 'Nadaktywne pod wpływem reklam push' },
            { region: 'Przednia wyspa', role: 'Sygnalizacja somatycznego cierpienia i pustki', activationState: 'Ukojona po ćwiczeniach oddechowych' }
          ],
          neurotransmitters: [
            { name: 'Dopamina i endorfiny', roleInScenario: 'Chwilowy pik dopaminowy po transakcji zastąpiony zjazdem serotoniny' }
          ],
          biologicalTimeline: [
            { timeMs: 'Fala pragnienia', process: 'Trwa maksymalnie 90 sekund, jeśli nie zostanie podsycana klikaniem w telefon.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'One-Click Buy i Powiadomienia Push', description: 'Maksymalne obniżenie tarcia przez platformy e-commerce w celu wykorzystania impulsywności.', vulnerabilityExploited: 'Zmęczenie wieczorne i samotność' }
          ],
          counterMeasures: [
            { step: 'Kwarantanna 48 godzin', script: '„Dodaję do koszyka, ale kupię dopiero pojutrze, jeśli nadal będę tego potrzebować”.', rationale: 'Pozwala opaść fali dopaminowej.' }
          ]
        },
        alternativePath: 'Gdyby Natalia nie wdrożyła regulacji somatycznej, wpadłaby w pętlę chwilówek, windykację komorniczą i załamanie nerwowe.',
        readerQuestion: 'Jakie zachowania kompulsywne (jedzenie, zakupy, gry, scrollowanie) stosujesz, gdy Twoje ciało krzyczy o odpoczynek?',
        keyTakeaway: 'Nie walcz z zachcianką siłą woli. Zapytaj swoje ciało, jaki prawdziwy ból próbuje w ten sposób znieczulić.'
      },
      exerciseRef: {
        id: 'ex-15-regulacja-nerwu-blednego',
        title: 'Somatyczny Reset Układu Nerwowego: Protokół Hubermana',
        subtitle: 'Błyskawiczne obniżenie tętna i tonusu współczulnego w warunkach ostrego pobudzenia',
        objective: 'Nauczenie się somatycznej deaktywacji reakcji walki/ucieczki w mniej niż 60 sekund.',
        durationMinutes: 10,
        neuroScientificFoundation: 'Fizjologiczne westchnienie mechanicznie rozszerza pęcherzyki płucne i stymuluje receptory rozciągania w sercu, wyzwalając acetylocholinę z nerwu błędnego.',
        steps: [
          {
            stepNumber: 1,
            title: 'Fizjologiczne Westchnienie (Physiological Sigh)',
            instruction: 'Wykonaj głęboki wdech przez nos, na samym końcu dobierz jeszcze odrobinę powietrza krótkim dopompowaniem, po czym wypuść powietrze powoli przez usta.',
            promptText: 'Wykonaj 3 cykle oddechowe i zaobserwuj tętno:',
            placeholder: 'Czuję, jak ramiona opadają, a puls w skroniach zaczyna zwalniać...'
          },
          {
            stepNumber: 2,
            title: 'Włączenie widzenia panoramicznego',
            instruction: 'Nie ruszając głową ani oczami, rozszerz pole uwagi tak, by jednocześnie widzieć lewą i prawą ścianę pomieszczenia oraz podłogę i sufit.',
            promptText: 'Co rejestrujesz na obrzeżach pola widzenia?',
            placeholder: 'Rejestruję kontury mebli, światło z okna, przestrzeń pokoju...'
          },
          {
            stepNumber: 3,
            title: 'Rozluźnienie żwaczy i języka',
            instruction: 'Opuść dolną szczękę, pozwól językowi spocząć miękko na dnie jamy ustnej.',
            promptText: 'Jaki stan pojawia się w ciele?',
            placeholder: 'Napięcie w karku ustępuje, wraca poczucie uziemienia i spokoju...'
          }
        ],
        reflectionQuestions: [
          'Dlaczego żadne logiczne argumenty nie działają, dopóki Twoje ciało znajduje się w stanie alarmu pnia mózgu?',
          'O ile łatwiej jest podjąć mądrą decyzję z poziomu zrelaksowanego ciała?'
        ]
      }
    },
    {
      id: 'sec-15-8',
      pageNumber: 740,
      sectionNumber: '15.8',
      title: 'Krytyk Wewnętrzny kontra Obserwator Współczujący',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Większość ludzi wierzy w archaiczny mit pedagogiczny: „Jeśli nie będę dla siebie bezwzględny, jeśli nie będę krzyczał na siebie w głowie, to rozleniwię się i niczego w życiu nie osiągnę”.',
        'Neuronauka i badania Kristin Neff udowadniają coś dokładnie przeciwnego: Krytyk Wewnętrzny aktywuje ciało migdałowate i oś stresu HPA. Będąc swoim własnym katem, żyjesz w permanentnym stanie zagrożenia wewnętrznego. Rezultat? Chroniczne zmęczenie, depresja i unikanie trudnych wyzwań.'
      ],
      exerciseRef: {
        id: 'ex-15-dialog-ze-sojusznikiem',
        title: 'Przekształcenie Wewnętrznego Kata w Mądrego Sojusznika',
        subtitle: 'Zdemontuj toksyczny monolog wewnętrzny i zastąp go życzliwym przywództwem',
        objective: 'Nauczenie się rozpoznawania głosu samokrytyki i przeformułowywania go na język wsparcia.',
        durationMinutes: 15,
        neuroScientificFoundation: 'Aktywacja systemu kojenia (Soothing System Paula Gilberta) poprzez życzliwy ton głosu stymuluje wydzielanie oksytocyny i opiatów endogennych.',
        steps: [
          {
            stepNumber: 1,
            title: 'Złap głos kata na gorącym uczynku',
            instruction: 'Zapisz dosłownie słowa, którymi biczujesz się po potknięciu.',
            promptText: 'Co mówi mój wewnętrzny krytyk?',
            placeholder: '„Znowu to zepsułeś, nigdy niczego nie osiągniesz, jesteś leniwy i beznadziejny”...'
          },
          {
            stepNumber: 2,
            title: 'Odkryj lęk stojący za krytykiem',
            instruction: 'Zadaj swojemu krytykowi pytanie: „Czego tak naprawdę się boisz, że tak na mnie krzyczysz?”.',
            promptText: 'Jaki lęk maskuje ta agresja?',
            placeholder: 'Boi się, że zostanę odrzucony, wyśmiany i zostanę sam bez środków do życia...'
          },
          {
            stepNumber: 3,
            title: 'Odpowiedź Mądrego Sojusznika',
            instruction: 'Przeformułuj ten komunikat tak, jak powiedziałbyś to swojemu dziecku lub najlepszemu przyjacielowi.',
            promptText: 'Głos Sojusznika:',
            placeholder: '„Widzę, jak bardzo ci zależy. To potknięcie boli, ale jesteśmy w tym razem. Odpocznijmy chwilę i spróbujmy inaczej”...'
          }
        ],
        reflectionQuestions: [
          'Czy pozwoliłbyś komukolwiek odzywać się do Ciebie takimi słowami, jakimi biczujesz się sam?',
          'O ile większą odwagę do podejmowania ryzyka zyskujesz, wiedząc, że po błędzie nie spotka Cię wewnętrzna egzekucja?'
        ]
      }
    },
    {
      id: 'sec-15-9',
      pageNumber: 744,
      sectionNumber: '15.9',
      title: 'Samowspółczucie (Self-Compassion): Prawdziwe paliwo odporności',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Samowspółczucie (Self-Compassion) wg prof. Kristin Neff składa się z 3 nierozłącznych elementów:',
        '1. Uważność (Mindfulness): Zauważenie własnego bólu bez wyolbrzymiania ani wypierania („To jest chwila cierpienia”).',
        '2. Wspólne Człowieczeństwo (Common Humanity): Uświadomienie sobie, że cierpienie i błędy są nieodłączną częścią ludzkiego losu — nie jesteś jedynym, który nawalił („Wszyscy ludzie czasami zawodzą, to nie czyni mnie potworem”).',
        '3. Życzliwość dla Samego Siebie (Self-Kindness): Potraktowanie siebie z takim同 cieplem i wsparciem, z jakim potraktowałbyś płaczącego najlepszego przyjaciela.',
        'PRZYKŁAD 5: Młody programista Marek po raz pierwszy wypuszcza kod na produkcję w dużej firmie fintechowej. W kodzie był krytyczny błąd, który na 20 minut zablokował transakcje kartowe klientów. Marek siedzi w toalecie, trzęsąc się z przerażenia, a w jego głowie rozbrzmiewa głos ojca: „Jesteś zerem, znowu wszystko zepsułeś, wyrzucą cię z wilczym biletem!”. Zamiast utonąć w ataku paniki, Marek stosuje procedurę samowspółczucia: kładzie dłoń na sercu, bierze głęboki oddech i mówi sobie: „Popełniłem poważny błąd. Czuję ogromny wstyd. Ale ten błąd nie definiuje mojej wartości jako człowieka. Każdy senior w tej firmie kiedyś położył serwer. Idę do zespołu, przyznam się do błędu i naprawimy to razem”. Zespół przyjął jego zgłoszenie z szacunkiem, błąd naprawiono w 15 minut, a Marek zyskał reputację dojrzałego, odpowiedzialnego inżyniera.'
      ],
      caseStudyRef: {
        id: 'cs-ch15-samokrytyka-marek',
        title: 'Cena Wewnętrznego Kata: Jak Marek Zastąpił Samobiczowanie Odpornością Psychiczną',
        subtitle: 'Od ataków paniki przed prezentacjami do spokoju i pewności lidera zespołu technologicznego',
        protagonist: 'Marek (Lead Software Engineer, 32 lata) i jego dyrektor techniczny (CTO)',
        context: 'Przygotowanie do wdrożenia architektury chmurowej wartej 5 milionów dolarów dla globalnego klienta.',
        story: [
          'Marek od dziecka słyszał od ambitnego ojca: „Czwórka z plusem? A dlaczego nie piątka? Jeśli nie jesteś najlepszy, jesteś nikim”. Marek zinternalizował ten głos, tworząc w głowie potwornego Krytyka Wewnętrznego.',
          'Przez lata ta surowość zdawała się działać: Marek skończył studia z wyróżnieniem i został najmłodszym liderem technicznym w firmie. Jednak cena była druzgocąca.',
          'Przed każdym ważnym wystąpieniem przed zarządem Marek nie spał przez 3 noce. Zaczęły się ataki paniki, duszności, refluks żołądkowy i natrętne myśli o nagłej śmierci.',
          'Wewnętrzny monolog Marka brzmiał jak wyrok sądu: „Odkryją, że jesteś oszustem. Wszyscy zobaczą, jak trzęsą ci się ręce. Zostaniesz wyśmiany”. Wreszcie podczas ważnego demo Marek zaniemówił i musiał wybiec z sali.',
          'Trafił na psychoterapię opartą na Self-Compassion i Mindful Self-Compassion (MSC). Terapeuta zadał mu jedno pytanie: „Marku, czy odezwałbyś się do swojego młodszego brata lub przyjaciela tymi słowami, którymi biczujesz siebie w głowie?”. Marek zamarł. Odpowiedział: „Nigdy w życiu. Zabiłbym kogoś, kto tak do niego mówi”.',
          'Nauka protokołu samowspółczucia: Marek nauczył się rozpoznawać głos Wewnętrznego Kata. Zaczął stosować dotyk kojący (dłoń na klatce piersiowej, wyzwalający oksytocynę) i frazy Neff.',
          'Po 3 miesiącach Marek poprowadził kluczowe demo dla zarządu. Kiedy rzutnik odmówił posłuszeństwa, zamiast ataku paniki Marek uśmiechnął się, wziął oddech i powiedział: „Technologia testuje naszą cierpliwość, dajmy jej 2 minuty”. Zarząd nagrodził go brawami za opanowanie.'
        ],
        decisionTaken: 'Marek zdemontował iluzję, że surowość wobec siebie jest warunkiem sukcesu, i zastąpił ją dojrzałym wsparciem wewnętrznym.',
        whatProtagonistSaw: 'Marek wierzył, że jego samokrytyka jest jedyną rzeczą, która chroni go przed staniem się leniwym nieudacznikiem.',
        whatWasMissed: 'Że to właśnie samokrytyka wywoływała ataki paniki i paraliż, które niemal zniszczyły jego karierę zawodową.',
        psychologicalAnalysis: {
          coreMechanism: 'Traumatyczna internalizacja warunkowej miłości rodzicielskiej i próba zarządzania lękiem przez autoagresję.',
          cognitiveBiases: [
            { name: 'Personalizacja', description: 'Uznawanie każdej awarii technicznej za dowód własnej wady moralnej.', impact: 'Permanentne poczucie winy.' },
            { name: 'Czytanie w myślach', description: 'Pewność, że wszyscy członkowie zarządu patrzą na niego z pogardą.', impact: 'Lęk społeczny.' }
          ],
          defenseMechanisms: [
            { name: 'Identyfikacja z agresorem', explanation: 'Przyjęcie surowego głosu ojca jako własnego głosu tożsamościowego.' }
          ],
          emotionalDynamic: 'Przejście od terroru wewnętrznego do głębokiego poczucia wewnętrznego sojusznika.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Układ nagrody i przywiązania (Oksytocyna/Opiaty endogenne)', role: 'Kojenie układu nerwowego przez ciepły dotyk somatyczny', activationState: 'Aktywowany po wdrożeniu ćwiczeń Neff' },
            { region: 'Pień mózgu', role: 'Regulacja reakcji wegetatywnych (tętno, potliwość)', activationState: 'Ustabilizowany po opanowaniu oddechu' }
          ],
          neurotransmitters: [
            { name: 'Oksytocyna', roleInScenario: 'Zmniejszenie lęku i wywołanie poczucia bezpieczeństwa socjalnego' }
          ],
          biologicalTimeline: [
            { timeMs: 'Przed wejściem na salę', process: 'Położenie dłoni na sercu i 3 spokojne oddechy obniżają poziom adrenaliny o połowę.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Zwrot Sojusznika Wewnętrznego', script: '„Widzę twój lęk, Marku. Jestem z tobą. Niezależnie od wyniku tej prezentacji, jesteś wartościowym człowiekiem”.', rationale: 'Błyskawiczne ugaszenie pożaru w ciele migdałowatym.' }
          ]
        },
        alternativePath: 'Gdyby Marek kontynuował spiralę samobiczowania, nabawiłby się przewlekłej depresji, uzależnienia od leków uspokajających lub doznał załamania nerwowego.',
        readerQuestion: 'Jakim tonem głosu odzywasz się do siebie w myślach, kiedy popełnisz głupi błąd?',
        keyTakeaway: 'Bądź dla siebie takim rodzicem, trenera i przyjacielem, jakiego zawsze potrzebowałeś w najtrudniejszych chwilach.'
      }
    },
    {
      id: 'sec-15-10',
      pageNumber: 748,
      sectionNumber: '15.10',
      title: 'Anatomia Perfekcjonizmu: Dlaczego dążenie do doskonałości niszczy wyniki',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Brené Brown, wybitna badaczka wstydu i odporności psychicznej z University of Houston, postawiła bezlitosną diagnozę:',
        '„Perfekcjonizm nie jest dążeniem do bycia najlepszym. Nie jest pracowitością ani samodoskonaleniem. Perfekcjonizm to ważąca 20 ton tarcza ochronna, którą nosimy ze sobą, wierząc, że uchroni nas przed zranieniem, krytyką, oceną i wstydem”.',
        'Perfekcjonista mówi: „Jeśli będę idealnie wyglądać, idealnie pracować i idealnie żyć, nikt mnie nigdy nie skrzywdzi”. To tragiczna iluzja. Perfekcjonizm prowadzi do paraliżu decyzyjnego, paniki przed rozpoczęciem dzieła i chronicznego niezadowolenia.',
        'Antidotum na perfekcjonizm jest Antyperfekcjonizm Pragmatyczny: skupienie się na procesie, miłość do powtarzalnych prób i duma z gotowości do popełniania błędów w służbie nauki.',
        'PRZYKŁAD 7: Wdrożenie aplikacji mobilnej przez startup Joanny. Zamiast szlifować każdy piksel przez 18 miesięcy w obawie przed krytyką użytkowników, Joanna przyjęła regułę MVP (Minimum Viable Product): „Wypuszczamy wersję spełniającą 80% naszych założeń po 4 miesiącach. Wolimy usłyszeć bolesny feedback od 100 pierwszych użytkowników niż spędzić rok na dopieszczaniu funkcji, których nikt nie potrzebuje”. Aplikacja zadebiutowała z drobnymi błędami, ale szybkie aktualizacje na bazie uwag klientów przyniosły firmie 50 000 subskrybentów w pierwszym kwartale.'
      ]
    },
    {
      id: 'sec-15-11',
      pageNumber: 752,
      sectionNumber: '15.11',
      title: 'Studium przypadku: Od zawału serca do odporności psychicznej',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Wielu uważa, że człowiek sukcesu to tytan, który śpi po 4 godziny na dobę, pije 8 kaw i nigdy nie okazuje słabości.',
        'Poniższe studium przypadku Piotra — prezesa zarządu holdingu logistycznego — pokazuje, jak ten toksyczny etos doprowadził do biologicznego załamania w wieku 44 lat i jak zmiana paradygmatu uratowała mu życie.'
      ],
      caseStudyRef: {
        id: 'cs-ch15-zawodowiec',
        title: 'Załamanie Tytana: Jak Zawał Serca w Sali Zarządu Zmusił Piotra do Przedefiniowania Sukcesu',
        subtitle: 'Od toksycznej mitologii wiecznego wysiłku do mądrej regeneracji i samowspółczucia',
        protagonist: 'Piotr (Prezes Holdingu Logistycznego, 44 lata) i dr Janina (kardiolog kliniczny)',
        context: 'Wieloletnia praca na najwyższych obrotach w branży transportowej zmagającej się z kryzysami paliwowymi i geopolitycznymi.',
        story: [
          'Piotr zbudował firmę od 3 ciężarówek do floty liczącej 600 zestawów drogowych. Szczycił się tym, że od 12 lat nie był na urlopie dłuższym niż 3 dni. Jego dewizą było: „Śpij szybciej, ból to tylko informacja o słabości”.',
          'Ignorował powtarzające się sygnały ostrzegawcze: skoki ciśnienia do 170/110, bezsenność, kołatania serca i drżenie rąk. Na ból w klatce piersiowej brał podwójną dawkę tabletek przeciwbólowych i popijał espresso.',
          'Pewnego popołudnia, w trakcie finalizacji przejęcia konkurenta za 80 milionów złotych, w sali zarządu Piotr poczuł, jakby ktoś położył mu na klatce piersiowej rozgrzane kowadło. Zimny pot zalał mu czoło, lewa ręka zdrętwiała. Ostatnią myślą Piotra przed utratą przytomności nie była myśl o żonie ani o dzieciach; była to myśl: „Nie mogę teraz zemdleć, zepsuję prezentację dla banku!”.',
          'Ostry zawał ściany przedniej serca. Trzy stenty, 14 dni na OIOM-ie. Kardiolog powiedział wprost: „Panie Piotrze, pana serce było zalane kortyzolem przez 15 lat bez przerwy. Następnego zawału pan nie przeżyje. Albo pan zmieni system operacyjny w głowie, albo wybierze pan sobie kwaterę na cmentarzu”.',
          'W sanatorium kardiologicznym Piotr po raz pierwszy od 30 lat usiadł na ławce w parku bez telefonu i bez komputera. Rozpłakał się. Przeszedł intensywną psychoterapię ACT (Acceptance and Commitment Therapy). Zrozumiał, że jego heroiczna „silna wola” była jedynie desperacką ucieczką przed poczuciem bycia niewystarczającym.',
          'Wrócił do pracy po 6 miesiącach na pół etatu jako doradca zarządu. Nauczył się delegować, wprowadził zakaz pisania maili po 18:00 i zaczął medytować. Z dumą powtarzał swojemu zespołowi: „Nie płacę wam za bycie męczennikami. Płacę wam za wypoczęte mózgi, które podejmują mądre decyzje”.'
        ],
        decisionTaken: 'Piotr zrezygnował z roli wszechmogącego Cyborga, uznał swoje biologiczne ograniczenia i zintegrował samowspółczucie z pracą zawodową.',
        whatProtagonistSaw: 'Przez 20 lat widział w sobie niezłomnego lidera, który trzyma firmę na swoich barkach.',
        whatWasMissed: 'Że jego styl zarządzania niszczył zdrowie jego podwładnych, oddalał go od dorastających dzieci i prowadził jego własne naczynia wieńcowe do zawału.',
        psychologicalAnalysis: {
          coreMechanism: 'Perfekcjonizm neurotyczny jako mechanizm obronny przed wstydem z dzieciństwa.',
          cognitiveBiases: [
            { name: 'Iluzja niezniszczalności', description: 'Bezkrytyczna wiara, że biologia ciała nie podlega prawom wyczerpania.', impact: 'Zignorowanie objawów dławicy piersiowej.' }
          ],
          defenseMechanisms: [
            { name: 'Rozszczepienie i stłumienie', explanation: 'Całkowite odcięcie sygnałów bólowych z ciała na rzecz realizacji celów korporacyjnych.' }
          ],
          emotionalDynamic: 'Głęboki lęk przed utratą miłości ojca zamaskowany pod maską tytana pracy.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Oś podwzgórze-przysadka-nadnercza (HPA)', role: 'Wyrzut hormonów stresu', activationState: 'Chroniczna, 15-letnia hiperaktywacja niszcząca śródbłonek naczyń' },
            { region: 'Przednia wyspa (Anterior Insula)', role: 'Interocepcja — czucie sygnałów z narządów wewnętrznych', activationState: 'Całkowicie zablokowana przez korę nową' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol i adrenalina', roleInScenario: 'Permanentne skurcze naczyń krwionośnych doprowadziły do pęknięcia blaszki miażdżycowej' }
          ],
          biologicalTimeline: [
            { timeMs: 'Chwila zawału', process: 'Nagłe zamknięcie gałęzi międzykomorowej przedniej lewej tętnicy wieńcowej.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Kardio-Granice Pracy', script: '„O 17:00 zamykam laptopa i nie odbieram telefonów służbowych. Moje serce jest ważniejsze niż jakakolwiek transakcja”.', rationale: 'Utrzymanie homeostazy biologicznej.' }
          ]
        },
        alternativePath: 'Gdyby Piotr zlekceważył ból w klatce i nie zemdlał na oczach kolegów, zmarłby w gabinecie tego samego wieczoru, zostawiając osierocone dzieci.',
        readerQuestion: 'Jaką cenę zdrowotną i relacyjną płacisz dzisiaj za wiarę w to, że musisz być we wszystkim idealny?',
        keyTakeaway: 'Nawet najsilniejszy silnik zaciera się bez oleju. Regeneracja to nie nagroda za pracę — regeneracja to jej niezbędna część.'
      }
    },
    {
      id: 'sec-15-12',
      pageNumber: 756,
      sectionNumber: '15.12',
      title: 'System Powrotu (Bounce-Back): Protokół 24 godzin po upadku',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Kiedy dopadnie Cię wielka porażka — utrata pracy, rozpad relacji, publiczna kompromitacja — Twój mózg wejdzie w stan żałoby i paniki. Nie próbuj wtedy „myśleć pozytywnie”.',
        'Zastosuj precyzyjny Protokół 24 Godzin:',
        'Godziny 0–4: Pierwsza pomoc somatyczna. Gorący prysznic, ciepły posiłek, sen lub leżenie pod ciężką kołdrą. Zakaz podejmowania jakichkolwiek decyzji życiowych. Zakaz wchodzenia do mediów społecznościowych.',
        'Godziny 4–12: Drenaż emocjonalny. Rozmowa z JEDNĄ zaufaną osobą (Rozdział 10), która potrafi wysłuchać bez dawania rad.',
        'Godziny 12–24: Zamiana traumy w lekcję. Weź kartkę i napisz: 1. Co było pod moją kontrolą? 2. Co było poza moją kontrolą? 3. Jaką jedną procedurę zmienię jutro rano?',
        'W ten sposób skracasz czas paraliżu z 6 miesięcy do jednej doby.'
      ],
      caseStudyRef: {
        id: 'cs-ch15-restart-biznes',
        title: 'Gorycz Bankructwa: Jak Szef Kuchni Odbudował Się po Utracie Dorobku 20 Lat',
        subtitle: 'Zastosowanie protokołu 24 godzin po licytacji komorniczej restauracji',
        protagonist: 'Wojciech (szef kuchni i restaurator, 51 lat) i jego dorosła córka Agata',
        context: 'Bankructwo renomowanej restauracji w centrum Krakowa po pandemii i drastycznych podwyżkach cen gazu.',
        story: [
          'Wojciech włożył w lokal całe swoje oszczędności życia. Kiedy komornik okleił taśmą piec konwekcyjny i zamknął lokal, Wojciech wrócił do pustego mieszkania i przez 48 godzin leżał bez ruchu twarzą do ściany.',
          'Pojawiły się myśli rezygnacyjne: „Mój czas minął, jestem nikim, zawiodłem moich pracowników”. Jego ciało było w stanie grzbietowo-błędnego zamrożenia (Dorsal Vagal Shutdown).',
          'Córka Agata nie pocieszała go na siłę frazesami typu „będzie dobrze”. Przyniosła gorący rosół, zaparzyła herbatę i wdrożyła Protokół 24 Godzin:',
          'Godziny 0–8: Pełny odpoczynek somatyczny, gorąca kąpiel, wyłączony telefon, sen.',
          'Godziny 8–16: Drenaż emocjonalny — Wojciech wypłakał cały ból i wstyd przed córką, która trzymała go za rękę bez oceniania.',
          'Godziny 16–24: Twarda analiza faktów: 1. Co było poza kontrolą? (Pandemia, wzrost cen gazu o 600%, inflacja). 2. Co było pod kontrolą? (Zbyt wysoki czynsz, brak poduszki finansowej). 3. Co dalej? (Kunszt kulinarny Wojciecha nie zbankrutował — zbankrutowała jedynie spółka z o.o.).',
          'Wojciech odzyskał godność. Zamiast otwierać kolejny zadłużony lokal, przyjął ofertę objęcia roli szefa kuchni w butikowym hotelu na Mazurach. Po roku jego autorskie menu zdobyło prestiżową rekomendację przewodnika kulinarnego.'
        ],
        decisionTaken: 'Wojciech oddzielił bankructwo biznesowe od bankructwa swojej wartości osobistej dzięki rygorystycznemu przejściu przez fazy protokołu Bounce-Back.',
        whatProtagonistSaw: 'Początkowo widział w komorniku koniec swojego życia i nieodwracalną hańbę.',
        whatWasMissed: 'Że jego talent, pasja i relacja z córką pozostały nienaruszone, a rynek natychmiast docenił jego kompetencje, gdy przestał tonąć we wstydzie.',
        psychologicalAnalysis: {
          coreMechanism: 'Przełamanie paraliżu zamrożenia pourazowego (Trauma Freeze) przez sekwencyjną pomoc somatyczną i społeczną.',
          cognitiveBiases: [
            { name: 'Nadmierne uogólnienie', description: '„Upadła restauracja, więc upadło całe moje życie”.', impact: 'Głęboka prostracja psychiczna.' }
          ],
          defenseMechanisms: [
            { name: 'Regresja i odcięcie somatyczne', explanation: 'Leżenie bez ruchu jako biologiczna reakcja na bezradność.' }
          ],
          emotionalDynamic: 'Przejście od bezdennej rozpaczy przez bezpieczną żałobę do powrotu do pasji twórczej.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Grzbietowy kompleks nerwu błędnego', role: 'Wzbudzenie stanu zamrożenia i hipometabolizmu', activationState: 'Odblokowany przez ciepły posiłek i dotyk córki' },
            { region: 'Hipokamp', role: 'Oddzielenie przeszłego bankructwa od teraźniejszych możliwości zawodowych', activationState: 'Uruchomiony w fazie racjonalnej analizy' }
          ],
          neurotransmitters: [
            { name: 'Oksytocyna i serotonina', roleInScenario: 'Przywrócenie poczucia więzi i bezpieczeństwa' }
          ],
          biologicalTimeline: [
            { timeMs: 'Druga doba po interwencji', process: 'Powrót apetytu i energii witalnej do działania.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Rozdzielenie Tożsamości od Podmiotu Prawnego', script: '„Firma z o.o. to tylko instrument prawny. Moje dłonie, moje smaki i moje doświadczenie są ze mną”.', rationale: 'Chroni jądro tożsamości przed anihilacją.' }
          ]
        },
        alternativePath: 'Gdyby Wojciech pozostał sam w pustym mieszkaniu, mógłby ulec nałogowi alkoholowemu lub popaść w chroniczną depresję kliniczną.',
        readerQuestion: 'Jaką porażkę w swoim życiu utożsamiasz z własną wartością jako człowieka, zamiast potraktować ją jako nieudany eksperyment rynkowy?',
        keyTakeaway: 'Nie jesteś swoją firmą, swoim stanowiskiem ani swoim projektem. Porażka to wydarzenie w czasie, a nie Twoja tożsamość.'
      }
    },
    {
      id: 'sec-15-13',
      pageNumber: 760,
      sectionNumber: '15.13',
      title: 'Projekt Osobisty: Twój manifest sprawczości',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Czas na sformułowanie Twojego Osobistego Kodeksu Odporności:',
        '1. Moja nieprzekraczalna granica regeneracji (Godzina kładzenia się do łóżka, dni wolne).',
        '2. Moje bezpieczne środowisko (Zasady dotyczące smartfona i pracy głębokiej).',
        '3. Moje zdanie odblokowujące w chwili lęku („Zrobione na 50% jest lepsze niż doskonałe w marzeniach”).',
        '4. Moja rada od najlepszego przyjaciela (Co powiedziałbyś ukochanej osobie, gdyby była w Twojej sytuacji?).'
      ],
      exerciseRef: {
        id: 'ex-15-manifest-odpornosci',
        title: 'Konstruktor Osobistego Manifestu Odporności',
        subtitle: 'Sformułuj swój nienaruszalny kodeks regeneracji i granic psychofizycznych',
        objective: 'Zbudowanie twardej procedury ochronnej zapobiegającej załamaniu kardiologicznemu i wypaleniu.',
        durationMinutes: 20,
        neuroScientificFoundation: 'Wcześniejsze zdefiniowanie procedur awaryjnych (Implementation Intentions wg Gollwitzera) automatyzuje zachowania ochronne w stanach deficytu prefrontalnego.',
        steps: [
          {
            stepNumber: 1,
            title: 'Sygnały somatyczne wyczerpania',
            instruction: 'Wypisz 3 wczesne objawy somatyczne, po których poznajesz zbliżanie się do granicy przeciążenia.',
            promptText: 'Moje somatyczne sygnały ostrzegawcze:',
            placeholder: 'Zaciskanie zębów, płytki oddech przez usta, nagła ochota na cukier i kofeinę...'
          },
          {
            stepNumber: 2,
            title: 'Procedura hamowania awaryjnego',
            instruction: 'Zdefiniuj jedną regułę Emergency Stop, którą uruchamiasz po zauważeniu tych sygnałów.',
            promptText: 'Mój protokół awaryjny:',
            placeholder: 'Zamykam laptopa na 45 minut, kładę się na podłodze z nogami na krześle, zero ekranów...'
          },
          {
            stepNumber: 3,
            title: 'Mantra Samowspółczucia',
            instruction: 'Zapisz zdanie, które powiesz swojemu wewnętrznemu krytykowi w chwili błędu.',
            promptText: 'Moje zdanie kojące:',
            placeholder: 'Jestem człowiekiem, a nie maszyną. Uczę się i mam prawo do potknięć...'
          }
        ],
        reflectionQuestions: [
          'Jak zmienia się Twoja odwaga życiowa, gdy wiesz, że po upadku masz gotowy system powrotu do pionu?',
          'Czym różni się zdrowa dyscyplina od autodestrukcyjnego sadyzmu wewnętrznego?'
        ]
      }
    },
    {
      id: 'sec-15-14',
      pageNumber: 764,
      sectionNumber: '15.14',
      title: 'Wielka Integracja Tomu II, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Przeszliśmy przez dziesięć wielkich obszarów ludzkiego funkcjonowania w świecie: grupę, komunikację, perswazję, manipulację, relacje, motywację, nawyki, środowisko informacyjne, konflikty oraz samokontrolę.',
        'Każdy z tych elementów był badany pod mikroskopem. Ale w rzeczywistym życiu te zjawiska nigdy nie występują w izolacji! Twój konflikt z szefem to jednocześnie problem z uwagą (Tom I), lękiem przed utratą statusu (Rozdział 6), błędem atrybucji (Rozdział 7), złą BATNA (Rozdział 14) i perfekcjonizmem (Rozdział 15).',
        'W ostatnim, uroczystym Rozdziale 16 połączymy wszystkie puzzle w jeden wielki, zintegrowany mechanizm: CZŁOWIEK JAKO SYSTEM SPOŁECZNY — zbudujesz mapę własnych mechanizmów i otrzymasz ostateczny kompas na całe życie.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 15.'
      ]
    }
  ]
};
