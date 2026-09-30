import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

export const chapterEighteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii poznawczej przekonanie (belief) różni się od obiektywnego faktu tym, że:',
    topic: 'Natura Przekonań',
    sectionRef: 'Sekcja 18.1',
    options: [
      { label: 'A', text: 'Przekonanie jest subiektywną reprezentacją umysłową traktowaną jako prawda, podczas gdy fakt to zweryfikowany empirycznie stan rzeczywistości.', isCorrect: true },
      { label: 'B', text: 'Przekonanie dotyczy tylko pogody, a fakt dotyczy matematyki.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy, każde przekonanie staje się faktem po upływie 24 godzin.', isCorrect: false },
      { label: 'D', text: 'Przekonania są zapisane w genach, a fakty w encyklopedii.', isCorrect: false }
    ],
    explanation: 'Przekonanie to struktura poznawcza, w którą umysł wierzy i według której filtruje bodźce. Fakt istnieje niezależnie od naszych stanów umysłowych.',
    keyTakeaway: 'To, że mocno w coś wierzysz, nie zmienia tego w obiektywny fakt.'
  },
  {
    id: 2,
    question: 'Na czym polega zjawisko Backfire Effect (Efekt Odbicia)?',
    topic: 'Opór Poznawczy',
    sectionRef: 'Sekcja 18.8',
    options: [
      { label: 'A', text: 'Przedstawienie twardych dowodów sprzecznych z głębokim przekonaniem tożsamościowym sprawia, że człowiek zaczyna jeszcze silniej bronić pierwotnego poglądu.', isCorrect: true },
      { label: 'B', text: 'Natychmiastowa zmiana zdania pod wpływem każdego wykresu w gazecie.', isCorrect: false },
      { label: 'C', text: 'Utrata pamięci krótkotrwałej pod wpływem hałasu.', isCorrect: false },
      { label: 'D', text: 'Zdolność do szybkiego zapamiętywania ciągu cyfr.', isCorrect: false }
    ],
    explanation: 'Gdy fakt zagraża wyobrażeniu o sobie lub przynależności grupowej, ciało migdałowate traktuje informację jako atak biologiczny, wyzwalając obronną furię.',
    keyTakeaway: 'Atakowanie czyichś przekonań samymi faktami często potęguje jego opór.'
  },
  {
    id: 3,
    question: 'Jaką rolę w powstawaniu schematów poznawczych odgrywa Błąd Potwierdzenia (Confirmation Bias)?',
    topic: 'Schematy Poznawcze',
    sectionRef: 'Sekcja 18.6',
    options: [
      { label: 'A', text: 'Sprawia, że umysł wybiórczo zauważa i zapamiętuje tylko te dowody, które pasują do istniejącej hipotezy, ignorując dowody sprzeczne.', isCorrect: true },
      { label: 'B', text: 'Zmusza człowieka do kupowania tych samych produktów w sklepie.', isCorrect: false },
      { label: 'C', text: 'Umożliwia bezbłędne przewidywanie wyników na giełdzie.', isCorrect: false },
      { label: 'D', text: 'Automatycznie koryguje wszystkie błędy ortograficzne w tekście.', isCorrect: false }
    ],
    explanation: 'Confirmation Bias działa jak filtr samopotwierdzający: im dłużej w coś wierzysz, tym więcej dowodów dostrzegasz w otoczeniu.',
    keyTakeaway: 'Szukaj dowodów, które mogą obalić Twoją hipotezę, zamiast dowodów, które ją potwierdzają.'
  },
  {
    id: 4,
    question: 'W pętli aktualizacji przekonań (Belief Updating Loop) kluczowym etapem jest:',
    topic: 'Aktualizacja Przekonań',
    sectionRef: 'Sekcja 18.11',
    options: [
      { label: 'A', text: 'Sformułowanie hipotezy roboczej, zebranie nowych danych, ocena wiarygodności źródeł i modyfikacja przekonania w obliczu faktów.', isCorrect: true },
      { label: 'B', text: 'Głośne powtarzanie afirmacji aż rzeczywistość dostosuje się do życzeń.', isCorrect: false },
      { label: 'C', text: 'Ignorowanie wszelkich nowych danych i poleganie na intuicji z dzieciństwa.', isCorrect: false },
      { label: 'D', text: 'Odrzucenie logicznego myślenia na rzecz rzutu monetą.', isCorrect: false }
    ],
    explanation: 'Naukowa postawa wobec własnych przekonań wymaga traktowania ich jako roboczych hipotez, które podlegają stałej korekcie w oparciu o empiryczne dane.',
    keyTakeaway: 'Trzymaj swoje przekonania elastycznie, gotowe do korekty pod wpływem faktów.'
  },
  {
    id: 5,
    question: 'Czym charakteryzuje się pokora epistemiczna (Epistemic Humility)?',
    topic: 'Epistemiczna Pokora',
    sectionRef: 'Sekcja 18.12',
    options: [
      { label: 'A', text: 'Świadomość ograniczeń własnej wiedzy i gotowość do przyznania: „Nie wiem” lub „Mogłem się pomylić”.', isCorrect: true },
      { label: 'B', text: 'Całkowity brak jakichkolwiek poglądów na jakikolwiek temat.', isCorrect: false },
      { label: 'C', text: 'Przekonanie, że nauka nie ma żadnego znaczenia.', isCorrect: false },
      { label: 'D', text: 'Unikanie czytania książek naukowych.', isCorrect: false }
    ],
    explanation: 'Pokora epistemiczna ochrania umysł przed dogmatyzmem i pozwala sprawniej adaptować się do zmieniającego się świata.',
    keyTakeaway: 'Pokora poznawcza to oznaka dojrzałości intelektualnej, a nie słabości.'
  },
  {
    id: 6,
    question: 'Co według teorii Festingera wywołuje dysonans poznawczy (Cognitive Dissonance)?',
    topic: 'Dysonans Poznawczy',
    sectionRef: 'Sekcja 18.7',
    options: [
      { label: 'A', text: 'Jednoczesne posiadanie dwóch sprzecznych przekonań lub rozbieżność między przekonaniem a własnym zachowaniem.', isCorrect: true },
      { label: 'B', text: 'Spożycie zbyt dużej ilości kofeiny przed snem.', isCorrect: false },
      { label: 'C', text: 'Brak dostępu do bezprzewodowego internetu.', isCorrect: false },
      { label: 'D', text: 'Utrata kluczy do mieszkania.', isCorrect: false }
    ],
    explanation: 'Nieprzyjemne napięcie psychiczne (dysonans) zmusza umysł do zmiany zachowania, zmiany przekonania lub racjonalizacji.',
    keyTakeaway: 'Dysonans to sygnał alarmowy umysłu informujący o braku wewnętrznej spójności.'
  },
  {
    id: 7,
    question: 'Jaką funkcję w przetwarzaniu informacji pełnią schematy poznawcze (Cognitive Schemas)?',
    topic: 'Schematy Poznawcze',
    sectionRef: 'Sekcja 18.3',
    options: [
      { label: 'A', text: 'Skracają czas analizy bodźców poprzez organizowanie wiedzy i tworzenie oczekiwań co do przebiegu zdarzeń.', isCorrect: true },
      { label: 'B', text: 'Zwiększają wagę ciała w sytuacjach stresowych.', isCorrect: false },
      { label: 'C', text: 'Blokują możliwość odczuwania emocji.', isCorrect: false },
      { label: 'D', text: 'Odpowiadają za odruchy kolanowe.', isCorrect: false }
    ],
    explanation: 'Schematy pozwalają oszczędzać zasoby poznawcze, lecz w przypadku błędnych założeń prowadzą do utrwalonych zniekształceń.',
    keyTakeaway: 'Schematy ułatwiają nawigację, lecz mogą zamienić się w poznawcze okulary zniekształcające.'
  },
  {
    id: 8,
    question: 'Na czym polega różnica między faktem, opinią a przekonaniem?',
    topic: 'Fakt vs Opinia vs Przekonanie',
    sectionRef: 'Sekcja 18.10',
    options: [
      { label: 'A', text: 'Fakt jest obiektywnie weryfikowalny, opinia to subiektywna ocena estetyczna lub wartościująca, a przekonanie to przyjęta przez umysł struktura prawdy o świecie.', isCorrect: true },
      { label: 'B', text: 'Fakt to to samo co opinia w gazecie.', isCorrect: false },
      { label: 'C', text: 'Przekonanie jest zawsze poparte wzorem chemicznym.', isCorrect: false },
      { label: 'D', text: 'Opinia znika po 5 minutach, a fakt trwa 100 lat.', isCorrect: false }
    ],
    explanation: 'Mieszanie faktów z opiniami jest głównym źródłem błędów w dyskusjach publicznych i decyzjach osobistych.',
    keyTakeaway: 'Oddzielaj obiektywne fakty od subiektywnych interpretacji.'
  },
  {
    id: 9,
    question: 'Jak komory echa (Echo Chambers) w mediach społecznościowych wpływają na przekonania jednostki?',
    topic: 'Komory Echa i Internet',
    sectionRef: 'Sekcja 18.9',
    options: [
      { label: 'A', text: 'Isolują użytkownika od odmiennych perspektyw, wielokrotnie wzmacniając istniejące przekonania i kreując iluzję ich powszechności.', isCorrect: true },
      { label: 'B', text: 'Automatycznie uczą języków obcych.', isCorrect: false },
      { label: 'C', text: 'Korygują wszystkie błędy myślowe użytkownika.', isCorrect: false },
      { label: 'D', text: 'Zmniejszają czas spędzany przed ekranem.', isCorrect: false }
    ],
    explanation: 'Algorytmy rekomendacyjne podsuwają treści zgodne z dotychczasowymi kliknięciami, utrwalając polaryzację i fałszywą pewność.',
    keyTakeaway: 'Twoja bańka informacyjna karmi Twoje confirmation bias.'
  },
  {
    id: 10,
    question: 'Co charakteryzuje trójadę poznawczą Arona Becka w depresji i zaburzeniach nastroju?',
    topic: 'Trójada Poznowcza Becka',
    sectionRef: 'Sekcja 18.5',
    options: [
      { label: 'A', text: 'Negatywne przekonania dotyczące: 1. Samego siebie, 2. Świata/Doświadczeń, 3. Przyszłości.', isCorrect: true },
      { label: 'B', text: 'Przekonania o pogodzie, polityce i sporcie.', isCorrect: false },
      { label: 'C', text: 'Brak jakichkolwiek myśli automatycznych.', isCorrect: false },
      { label: 'D', text: 'Nadmierny optymizm co do giełdy.', isCorrect: false }
    ],
    explanation: 'Trójada Becka tworzy samopotwierdzający się filtr: „Jestem do niczego, świat jest wrogi, a przyszłość nie przyniesie poprawy”.',
    keyTakeaway: 'Zmiana przekonań kluczowych jest fundamentem terapii poznawczej.'
  },
  {
    id: 11,
    question: 'Jak model wnioskowania bayesowskiego tłumaczy proces aktualizacji przekonań?',
    topic: 'Model Bayesowski',
    sectionRef: 'Sekcja 18.11',
    options: [
      { label: 'A', text: 'Umysł aktualizuje prawdopodobieństwo hipotezy (subiektywne przekonanie) w oparciu o wagę i wiarygodność nowych dowodów empirycznych.', isCorrect: true },
      { label: 'B', text: 'Umysł losuje przekonania raz w roku.', isCorrect: false },
      { label: 'C', text: 'Przekonania są całkowicie odporne na jakiekolwiek dane.', isCorrect: false },
      { label: 'D', text: 'Każdy nowy bodziec całkowicie kasuje całą dotychczasową wiedzę.', isCorrect: false }
    ],
    explanation: 'Wnioskowanie bayesowskie łączy wiedzę pierwotną (prior) z nowym dowodem (likelihood), dając zaktualizowane przekonanie (posterior).',
    keyTakeaway: 'Traktuj przekonania jako stopnie prawdopodobieństwa, a nie jako dogmaty.'
  },
  {
    id: 12,
    question: 'W jaki sposób przekonania wpływają na fizjologię i stany emocjonalne człowieka?',
    topic: 'Przekonania a Emocje',
    sectionRef: 'Sekcja 18.13',
    options: [
      { label: 'A', text: 'Interpretacja poznawcza sytuacji aktywuje ciało migdałowate i układ autonomiczny, wywołując konkretną reakcję emocjonalno-somatyczną.', isCorrect: true },
      { label: 'B', text: 'Przekonania nie mają żadnego związku z układem nerwowym.', isCorrect: false },
      { label: 'C', text: 'Emocje wyprzedzają wszelkie procesy poznawcze o 10 minut.', isCorrect: false },
      { label: 'D', text: 'Przekonania wpływają wyłącznie na trawienie.', isCorrect: false }
    ],
    explanation: 'To nie sama sytuacja, lecz jej interpretacja („To zagrożenie!” vs „To szansa!”) decyduje o wydzielaniu kortyzolu lub dopaminy.',
    keyTakeaway: 'Zmień ocenę poznawczą sytuacji, a zmienisz swoją odpowiedź biologiczną.'
  },
  {
    id: 13,
    question: 'Na czym polega zjawisko iluzji głębi wyjaśnienia (Illusion of Explanatory Depth)?',
    topic: 'Iluzja Wyjaśnienia',
    sectionRef: 'Sekcja 18.13',
    options: [
      { label: 'A', text: 'Przekonanie, że rozumiemy jak działa dany złożony system (np. zamek błyskawiczny, polityka), dopóki nie zostaniemy poproszeni o szczegółowe wyjaśnienie mechanizmu krok po kroku.', isCorrect: true },
      { label: 'B', text: 'Zdolność do czytania bez używania okularów.', isCorrect: false },
      { label: 'C', text: 'Umiejętność pisania skomplikowanych algorytmów.', isCorrect: false },
      { label: 'D', text: 'Przekonanie, że inni ludzie czytają w naszych myślach.', isCorrect: false }
    ],
    explanation: 'Poproszenie kogoś o wyjaśnienie mechanizmu (Socratic questioning) obniża ekstremizm poglądów i ujawnia luki w wiedzy.',
    keyTakeaway: 'Zanim uznasz, że coś rozumiessz, spróbuj wyjaśnić ten mechanizm na piśmie.'
  },
  {
    id: 14,
    question: 'Jakie jest główne źródło odporności na informacje sprzeczne w przypadku przekonań tożsamościowych?',
    topic: 'Opór Poznawczy i Ego',
    sectionRef: 'Sekcja 18.12',
    options: [
      { label: 'A', text: 'Uznanie błędu w przekonaniu grozi rozpadem spójności wizerunku siebie lub wykluczeniem z grupy społecznej.', isCorrect: true },
      { label: 'B', text: 'Brak odpowiedniej ilości witamin w diecie.', isCorrect: false },
      { label: 'C', text: 'Uszkodzenie błony bębenkowej.', isCorrect: false },
      { label: 'D', text: 'Zbytnia łatwość zapamiętywania liczb.', isCorrect: false }
    ],
    explanation: 'Mózg przedkłada spójność tożsamościową i przynależność nad obiektywną prawdę logiczną.',
    keyTakeaway: 'Oddziel swoje poglądy od swojego prawa do szacunku i wartości jako człowieka.'
  },
  {
    id: 15,
    question: 'W jaki sposób motywowane rozumowanie (Motivated Reasoning) wpływa na ocenę dowodów naukowych?',
    topic: 'Motywowane Rozumowanie',
    sectionRef: 'Sekcja 18.6',
    options: [
      { label: 'A', text: 'Umysł stosuje surowsze kryteria metodologiczne wobec badań sprzecznych z jego poglądem, a badania zgodne przyjmuje bezkrytycznie.', isCorrect: true },
      { label: 'B', text: 'Sprawia, że człowiek czyta tylko pierwsze strony artykułów.', isCorrect: false },
      { label: 'C', text: 'Gwarantuje idealną obiektywność każdego naukowca.', isCorrect: false },
      { label: 'D', text: 'Wyłącza działanie pamięci roboczej.', isCorrect: false }
    ],
    explanation: 'Pytamy: „Czy muszę w to wierzyć?” przy danych niegodnych, oraz „Czy mogę w to wierzyć?” przy danych pożądanych.',
    keyTakeaway: 'Bądź najbardziej krytyczny wobec dowodów, które potwerdzają Twoje ulubione tezy.'
  },
  {
    id: 16,
    question: 'Na czym polega błąd samopotwierdzającego się proroctwa w relacjach międzyludzkich?',
    topic: 'Samospełniające się Proroctwo',
    sectionRef: 'Sekcja 18.14',
    options: [
      { label: 'A', text: 'Przekonanie o wrogości drugiej osoby sprawia, że traktujemy ją chłodno, co prowokuje ją do chłodu, stanowiąc „dowód” na naszą wstępną tezę.', isCorrect: true },
      { label: 'B', text: 'Przepowiadanie pogody na podstawie obserwacji chmur.', isCorrect: false },
      { label: 'C', text: 'Automatyczne wysyłanie życzeń urodzinowych.', isCorrect: false },
      { label: 'D', text: 'Kupowanie prezentów bez okazji.', isCorrect: false }
    ],
    explanation: 'Tworzymy w świecie dokładnie takie reakcje, jakich spodziewamy się na podstawie naszych wstępnych przekonań.',
    keyTakeaway: 'Twoje oczekiwania wobec innych kształtują ich reakcje wobec Ciebie.'
  },
  {
    id: 17,
    question: 'Jaką rolę w redukcji dogmatyzmu odgrywa protokół testowania hipotez życiowych?',
    topic: 'Praktyka Testowania Hipotez',
    sectionRef: 'Sekcja 18.17',
    options: [
      { label: 'A', text: 'Przekształca sztywne przekonania w sprawdzalne eksperymenty behawioralne z jasno określonymi wskaźnikami prawdy.', isCorrect: true },
      { label: 'B', text: 'Nakazuje wierzyć we wszystko co napisano w internecie.', isCorrect: false },
      { label: 'C', text: 'Zmusza do porzucenia wszelkich celów życiowych.', isCorrect: false },
      { label: 'D', text: 'Wyłącza emocje na 30 dni.', isCorrect: false }
    ],
    explanation: 'Zamiana „Wiem że tak jest” na „Przetestuję tę hipotezę w małej skali” obniża napięcie obronne.',
    keyTakeaway: 'Nie dyskutuj z przekonaniem — zaprojektuj mały eksperyment.'
  },
  {
    id: 18,
    question: 'Czym są przekonania kluczowe (Core Beliefs) w terapii poznawczo-behawioralnej?',
    topic: 'Przekonania Kluczowe',
    sectionRef: 'Sekcja 18.5',
    options: [
      { label: 'A', text: 'Najgłębsze, bezwzględne założenia o sobie, innych i świecie, kształtowane we wczesnym dzieciństwie, stanowiące fundament architektury poznawczej.', isCorrect: true },
      { label: 'B', text: 'Chwilowe myśli o tym, co zjeść na obiad.', isCorrect: false },
      { label: 'C', text: 'Zasady gry w szachy.', isCorrect: false },
      { label: 'D', text: 'Pamięć nazwisk znajomych z pracy.', isCorrect: false }
    ],
    explanation: 'Przekonania kluczowe („Jestem nieadekwatny”, „Ludzie są niebezpieczni”) determinują automatyczne myśli i emocje.',
    keyTakeaway: 'Modyfikacja przekonań kluczowych zmienia całe doświadczenie życiowe.'
  },
  {
    id: 19,
    question: 'Jak zjawisko kotwiczenia (Anchoring) wpływa na wycenę nowych informacji?',
    topic: 'Błąd Kotwiczenia',
    sectionRef: 'Sekcja 18.6',
    options: [
      { label: 'A', text: 'Pierwsza uzyskana informacja staje się punktem odniesienia, do którego umysł niedostatecznie dostosowuje kolejne dane.', isCorrect: true },
      { label: 'B', text: 'Zmusza do kupowania kotwic do łodzi.', isCorrect: false },
      { label: 'C', text: 'Gwarantuje bezbłędną ocenę wartości nieruchomości.', isCorrect: false },
      { label: 'D', text: 'Zwiększa elastyczność myślenia.', isCorrect: false }
    ],
    explanation: 'Pierwsza usłyszana opinia wyznacza ramę, z której umysł niechętnie się przesuwa.',
    keyTakeaway: 'Bądź świadomy pierwszej kotwicy, jaką wbito w Twój umysł.'
  },
  {
    id: 20,
    question: 'Jaka jest rola pytań sokratejskich w zmianie przekonań u siebie i u innych?',
    topic: 'Pytania Sokratejskie',
    sectionRef: 'Sekcja 18.17',
    options: [
      { label: 'A', text: 'Prowadzą do samodzielnego odkrycia luk w logice i dowodach poprzez precyzyjne pytania o źródła, wyjątki i konsekwencje.', isCorrect: true },
      { label: 'B', text: 'Służą do wyśmiewania rozmówcy w dyskusji publicznej.', isCorrect: false },
      { label: 'C', text: 'Zmuszają do nauki greki klasycznej.', isCorrect: false },
      { label: 'D', text: 'Zapobiegają wyciąganiu jakichkolwiek wniosków.', isCorrect: false }
    ],
    explanation: 'Pytania otwarte obniżają opór obronny, pozwalając rozmówcy samodzielnie zauważyć pęknięcia w jego teorii.',
    keyTakeaway: 'Nie narzucaj swojej prawdy — zadawaj pytania, które odsłaniają mechanizm.'
  }
];

export const caseStudiesChapterEighteen: CaseStudy[] = [
  {
    id: 'studium-18-1-banka-inwestycyjna',
    title: 'W pułapce własnej hipotezy: Jak Błąd Potwierdzenia kosztował inwestora majątek',
    subtitle: 'Confirmation Bias, ignorowanie sygnałów rynkowych i obrona trafności sądu',
    protagonist: 'Grzegorz, 41 lat, inwestor indywidualny i były menedżer',
    context: 'Grzegorz zainwestował 70% swoich oszczędności w spółkę z sektora zielonej energii, przekonany o jej rychłym przełomie technologicznym. Mimo kolejnych złych raportów finansowych, Grzegorz dokupywał akcje, ignorując ostrzeżenia analityków.',
    story: [
      'Grzegorz przeczytał artykuł o nowym patencie spółki X i uznał to za okazję życia. W jego umyśle ukształtowało się głębokie przekonanie: „Ta firma zmieni układ sił na rynku, a ja zostanę milionerem”.',
      'Przez kolejne miesiące Grzegorz spędzał 4 godziny dziennie na forach internetowych i grupach entuzjastów spółki X. Czytał wyłącznie wpisy potwierdzające jego entuzjazm, a wszelkie analizy krytyczne odrzucał jako „spisek krótkiej sprzedaży”.',
      'Gdy spółka opublikowała raport wykazujący ogromne zadłużenie i brak przychodów, kurs spadł o 40%. Zamiast zamknąć pozycję i uratować resztę kapitału, Grzegorz dokupił akcje, twierdząc: „Teraz jest promocyjna cena!”.',
      'Firma ogłosiła upadłość pół roku później. Grzegorz stracił 450 tysięcy złotych. Dopiero wtedy zrozumiał, że nie inwestował w realną firmę, lecz w swoje niezłomne przekonanie.'
    ],
    dialogue: [
      { speaker: 'Analityk', text: 'Grzegorz, ta spółka ma spalone przepływy pieniężne i brak odbiorców. Sprzedawaj.', subtext: 'Twardy sygnał empiryczny z rynku.' },
      { speaker: 'Grzegorz', text: 'Nie rozumiesz ich wizji! Oni budują przyszłość, zaraz podpiszą kontrakt w Azji!', subtext: 'Obrona hipotezy wbrew dowodom.' }
    ],
    decisionTaken: 'Grzegorz dokupywał akcje upadającej spółki na każdym spadku ceny, ignorując sprawozdania finansowe.',
    whatProtagonistSaw: 'Przyszły oszałamiający sukces technologiczny i potwierdzenia od innych entuzjastów.',
    whatWasMissed: 'Twarde dane księgowe, brak przychodów i bankructwo płynnościowe.',
    psychologicalAnalysis: {
      coreMechanism: 'Confirmation Bias w połączeniu z pułapką zatopionych kosztów (Sunk Cost Fallacy).',
      cognitiveBiases: [
        { name: 'Confirmation Bias', description: 'Szukanie informacji potwierdzających trafność wyboru.', impact: 'Ignorowanie raportów sprawozdawczych.' },
        { name: 'Sunk Cost Fallacy', description: 'Inwestowanie kolejnych środków w obronie wcześniej straconych.', impact: 'Doprowadzenie do całkowitego bankructwa.' }
      ],
      defenseMechanisms: [
        { name: 'Racjonalizacja', explanation: 'Tłumaczenie spadków kursu działaniem „manipulatorów rynkowych”.' }
      ],
      emotionalDynamic: 'Lęk przed przyznaniem się do błędu i utratą poczucia nieomylności.'
    },
    decisionProcessAnalysis: {
      trigger: 'Spadek kursu akcji po złym raporcie.',
      attentionFocus: 'Wpisy entuzjastów na forum internetowym.',
      interpretation: '„To okazja, rynek się myli, ja mam rację”.',
      emotion: 'Chciwość, obronna złość, lęk przed stratą.',
      impulse: 'Dokupienie akcji.',
      action: 'Przelew kolejnych oszczędności na konto maklerskie.',
      consequence: 'Całkowita utrata majątku.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące', role: 'Oczekiwanie nagrody finansowej', activationState: 'Hiperaktywacja na początku' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Pętla oczekiwania na przełom technologiczny.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Widok spadku kursu wywołuje ukłucie lęku wyciszane racjonalizacją.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Komora echa (Echo Chamber)', description: 'Grupy na forach utwierdzające uczestników w iluzji sukcesu.', vulnerabilityExploited: 'Potrzebę potwierdzenia mądrości.' }
      ],
      counterMeasures: [
        { step: '1. Czerwony Zespół (Red Teaming)', script: '„Zanim zainwestuję, muszę znaleźć 3 najsilniejsze argumenty ZA UPADKIEM tej firmy”.', rationale: 'Wymusza poszukiwanie disconfirming evidence.' }
      ]
    },
    alternativePath: 'Gdyby Grzegorz ustalił sztywny poziom stop-loss na poziomie 10% straty, zachowałby 90% kapitału.',
    readerQuestion: 'W jakiej dziedzinie życia ignoryjesz ostrzegawcze fakty tylko po to, by bronić swojej wstępnej decyzji?',
    keyTakeaway: 'Nie zakochuj się w swoich hipotezach. Rynek i rzeczywistość nie dbają o Twoje przekonania.'
  },
  {
    id: 'studium-18-2-konflikt-pogladow',
    title: 'Gdy fakty niszczą relację: Jak konflikt światopoglądowy rozbił rodzinę Marka',
    subtitle: 'Backfire Effect, polaryzacja tożsamościowa i utrata więzi',
    protagonist: 'Marek, 38 lat, inżynier oprogramowania',
    context: 'Marek i jego ojciec, Janusz (66 lat), przez lata mieli doskonały kontakt. Podczas pandemii i wyborów ich poglądy polityczno-medyczne rozeszły się drastycznie, doprowadzając do awantur przy każdym spotkaniu.',
    story: [
      'Marek opierał swoje przekonania na artykułach naukowych i statystykach. Ojciec czerpał wiedzę z telewizji i filmów z teoriami spiskowymi na YouTube.',
      'Podczas niedzielnych obiadów Marek przynosił ze sobą wydrukowane wykresy i badania naukowe, próbując „nawrócić” ojca na racjonalne myślenie. Reakcja ojca była odwrotna do zamierzonej: im więcej twardych dowodów przedstawiał Marek, tym głośniej ojciec krzyczał i bronił swoich teorii.',
      'Doszło do aktywacji Backfire Effect: Janusz poczuł, że syn traktuje go jak głupca i atakuje jego godność. Zamiast zmienić zdanie, okopał się na swoich pozycjach.',
      'Spotkania zakończyły się, gdy ojciec wyprosił Marka z domu. Przez dwa lata nie rozmawiali ze sobą. Marek chciał wygrać dyskusję na fakty, a stracił relację z ojcem.'
    ],
    dialogue: [
      { speaker: 'Marek', text: 'Tato, zobacz ten wykres z Nature! Tu są dane z 5 mln pacjentów! Czy ty jesteś ślepy?', subtext: 'Atak faktami połączony z podważeniem inteligencji rozmówcy.' },
      { speaker: 'Janusz (Ojciec)', text: 'Wypchaj się swoimi wykresami! Przekupieni naukowcy! Nie będziesz mi mówił jak mam żyć we własnym domu!', subtext: 'Obrona tożsamościowa i godnościowa.' }
    ],
    decisionTaken: 'Marek wybierał konfrontację na argumenty przy każdej rozmowie, przedkładając rację nad relację.',
    whatProtagonistSaw: 'Czystą ignorancję ojca i brak logiki w jego wywodach.',
    whatWasMissed: 'Fakt, że przekonania ojca były filarem jego poczucia bezpieczeństwa w skomplikowanym świecie.',
    psychologicalAnalysis: {
      coreMechanism: 'Backfire Effect i polaryzacja światopoglądowa.',
      cognitiveBiases: [
        { name: 'Naive Realism', description: 'Przekonanie: „Ja widzę świat obiektywnie, a kto myśli inaczej, jest niedoinformowany lub zły”.', impact: 'Pogoardliwy stosunek do ojca.' }
      ],
      defenseMechanisms: [
        { name: 'Agresja obronna', explanation: 'Krzyk ojca jako reakcja na poczucie zagrożenia statusu.' }
      ],
      emotionalDynamic: 'Głęboki żal, wściekłość i poczucie odrzucenia z obu stron.'
    },
    decisionProcessAnalysis: {
      trigger: 'Komentarz ojca na temat spisku.',
      attentionFocus: 'Błąd w logice wypowiedzi ojca.',
      interpretation: '„Muszę go natychmiast wyprostować faktami”.',
      emotion: 'Wyższość, irytacja, złość.',
      impulse: 'Wyciągnięcie telefonu i pokazywanie badań.',
      action: 'Ostra krytyka poglądów ojca przy rodzinie.',
      consequence: 'Zerwanie relacji rodzinnych.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Reakcja zagrożenia ego na atak faktami', activationState: 'Hiperaktywacja u obu stron' }
      ],
      neurotransmitters: [
        { name: 'Adrenalina', roleInScenario: 'Szybkie pobudzenie walka-lub-ucieczka w dyskusji.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Słowo „przekupieni” wywołuje falę gorąca u Marka.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Polaryzacja medialna', description: 'Media podsycające nienawiść między obozami światopoglądowymi.', vulnerabilityExploited: 'Potrzebę przynależności.' }
      ],
      counterMeasures: [
        { step: '1. Oddzielenie człowieka od poglądu', script: '„Kocham mojego ojca za to, kim dla mnie jest, a nie za jego opinie o polityce. Nakładam moratorium na tematy sporne”.', rationale: 'Chroni więź przed zniszczeniem.' }
      ]
    },
    alternativePath: 'Gdyby Marek zastosował dialog sokratejski i zrezygnował z udowadniania racji za wszelką cenę, zachowałby bliskość z ojcem.',
    readerQuestion: 'Czy wiesz, kiedy odpuścić walkę o rację, by uratować relację z bliskim człowiekiem?',
    keyTakeaway: 'Nikt nigdy nie zmienił głębokiego przekonania dlatego, że został nazwany głupcem i zasypany wykresami.'
  },
  {
    id: 'studium-18-3-lęk-przed-latawiem',
    title: 'Paraliżująca iluzja zagrożenia: Jak przekonanie o niebezpieczeństwie uwięziło Monikę w domu',
    subtitle: 'Katastrofizacja познаwcza, fałszywa ocena prawdopodobieństwa i terapia ekspozycyjna',
    protagonist: 'Monika, 32 lata, graficzka komputerowa',
    context: 'Po epizodzie silnego ataku paniki w metrze Monika wykształciła głębokie przekonanie: „Miejsca publiczne są dla mnie śmiertelnym zagrożeniem, zaraz zemdleję i nikt mi nie pomoże”. Przekonanie to doprowadziło do agorafobii.',
    story: [
      'Po pierwszym ataku paniki mózg Moniki stworzył błyskawiczne połączenie: Metro = Śmierć. Z czasem przekonanie to rozszerzyło się na sklepy, autobusy i wreszcie wyjście z domu.',
      'Każde przyspieszenie tętna Monika interpretowała jako dowód nadchodzącego zawału. Jej umysł produkował automatyczne myśli katastroficzne: „Jeśli wyjdę, stracę kontrolę”.',
      'Monika spędziła 8 miesięcy w mieszkaniu, pracując zdalnie i zamawiając jedzenie z dostawą. Jej świat skurczył się do czterech ścian.',
      'Przełom w terapii CBT nastąpił, gdy terapeutka poprosiła Monikę o potraktowanie myśli „zemdleję” jako hipotezy do zweryfikowania, a nie jako faktu. Monika zaczęła stopniowo wychodzić na 2 minuty przed dom, rejestrując dane.'
    ],
    dialogue: [
      { speaker: 'Monika', text: 'Nie wyjdę do sklepu, na 100% zemdleję i umrę!', subtext: 'Absolutne przekonanie o katastrofie.' },
      { speaker: 'Terapeutka', text: 'Moniko, przetestujmy to. Wyjdźmy na 3 minuty przed klatkę i zobaczmy, czy mdlejesz, czy tętno po prostu rośnie.', subtext: 'Zaproszenie do empirycznego eksperymentu.' }
    ],
    decisionTaken: 'Monika podjęła cykl eksperymentów behawioralnych, wychodząc na coraz dłuższe dystanse z dziennikiem obserwacji.',
    whatProtagonistSaw: 'Pewność nadchodzącej śmierci i własną bezradność.',
    whatWasMissed: 'Fakt, że atak paniki jest bezpieczną, choć nieprzyjemną falą adrenaliny, która mija po kilku minutach.',
    psychologicalAnalysis: {
      coreMechanism: 'Katastrofizacja poznawcza i utrwalenie przekonania lękowego przez unikanie.',
      cognitiveBiases: [
        { name: 'Przecenianie prawdopodobieństwa', description: 'Uznawanie skrajnie rzadkiego zdarzenia za nieuniknione.', impact: 'Paraliż decyzyjny.' }
      ],
      defenseMechanisms: [
        { name: 'Unikanie (Avoidance)', explanation: 'Zostawanie w domu w celu natychmiastowego obniżenia lęku.' }
      ],
      emotionalDynamic: 'Błędne koło lęku: myśl → lęk → objawy z ciała → potwierdzenie myśli.'
    },
    decisionProcessAnalysis: {
      trigger: 'Myśl o wyjściu do sklepu.',
      attentionFocus: 'Uderzenia serca i drżenie rąk.',
      interpretation: '„Zaraz zemdleję, to niebezpieczne”.',
      emotion: 'Gwałtowny lęk, panika.',
      impulse: 'Cofnięcie się do pokoju.',
      action: 'Wyjazd z galerii / powrót do domu.',
      consequence: 'Chwilowa ulga, lecz utrwalenie agorafobii na miesiące.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Fałszywy alarm zagrożenia życia', activationState: 'Hiperaktywacja' },
        { region: 'mPFC', role: 'Niedostateczna kontrola odgórna nad lękiem', activationState: 'Hipoaktywacja' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Gwałtowny wyrzut powodujący kołatanie serca.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 50 ms', process: 'Sygnał myśli „sklep” wyzwala reakcję fizjologiczną.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Pętla unikania', description: 'Unikanie daje natychmiastową ulgę, co mózg odczytuje jako dowód, że unikanie uratowało życie.', vulnerabilityExploited: 'Potrzebę natychmiastowej ulgi.' }
      ],
      counterMeasures: [
        { step: '1. Eksperyment Behawioralny', script: '„Wyjdę i zostanę w lęku przez 10 minut, rejestrując spadek fali bez ucieczki”.', rationale: 'Wygasza reakcję warunkową w ciele migdałowatym.' }
      ]
    },
    alternativePath: 'Gdyby Monika kontynuowała unikanie, jej agorafobia stałaby się trwałym inwalidztwem społecznym.',
    readerQuestion: 'Kiedy Twoje myśli mylą nieprzyjemne emocje z realnym zagrożeniem biologicznym?',
    keyTakeaway: 'Myśl to nie fakt. Lęk to tylko sygnał elektryczny w mózgu, a nie przepowiednia przyszłości.'
  },
  {
    id: 'studium-18-4-impostor-syndrome',
    title: '„Zaraz odkryją, że jestem oszustem”: Przekonanie o własnej nieadekwatności u Wiktora',
    subtitle: 'Impostor Syndrome, wybiórcze przetwarzanie sukcesów i restrukturyzacja poznawcza',
    protagonist: 'Wiktor, 29 lat, starszy architekt oprogramowania w Dolinie Krzemowej',
    context: 'Wiktor awansował na stanowisko Staff Engineera w rekordowym tempie. Mimo świetnych ocen od zarządu żył w ciągłym przerażeniu, że jest to wynik przypadku, a zespół zaraz zdemaskuje jego „brak kompetencji”.',
    story: [
      'Wiktor wychował się w domu, gdzie sukcesy uważano za obowiązek, a błędy surowo karano. Wykształcił przekonanie kluczowe: „Jestem przeciętny i muszę harować 3 razy ciężej niż inni, żeby to ukryć”.',
      'Każdy sukces (pochwała od CTO, nagroda za kod) Wiktor przypisywał czynnikom zewnętrznym: „Miałem szczęście”, „Zadanie było łatwe”, „Inni po prostu nie zauważyli błędów”.',
      'Z kolei każdą drobną pomyłkę w kodzie traktował jako niepodważalny dowód na swoją oszukańczą naturę.',
      'Pracował po 16 godzin dziennie, doprowadzając się do skrajnego wypalenia. Dopiero prowadzenie dziennika faktów i dowodów kompetencji pozwoliło mu zauważyć, jak drastycznie zniekształca rzeczywistość.'
    ],
    dialogue: [
      { speaker: 'CTO', text: 'Wiktor, Twój projekt zaoszczędził firmie milion dolarów. Jesteś genialny.', subtext: 'Twardy dowód kompetencji.' },
      { speaker: 'Wiktor (w myśli)', text: 'Gdyby wiedział, jak długo nad tym siedziałem, uświadomiłby sobie, że jestem wolny i słaby...', subtext: 'Filter zniekształcający pozytywny dowód.' }
    ],
    decisionTaken: 'Wiktor zaczął prowadzić codzienny Rejestr Dowodów Obiektywnych, zapisując twarde metryki swoich sukcesów.',
    whatProtagonistSaw: 'Własny lęk, zmęczenie i wizję zdemaskowania.',
    whatWasMissed: 'Fakt, że jego kod przechodzi najsurowsze testy w firmie, a wyniki są obiektywne.',
    psychologicalAnalysis: {
      coreMechanism: 'Syndrom Oszusta (Impostor Syndrome) oparty na przekonaniu kluczowym o własnej niedostateczności.',
      cognitiveBiases: [
        { name: 'Dyskwalifikowanie pozytywów', description: 'Odrzucanie pochwał jako niezasłużonych lub wynikających ze szczęścia.', impact: 'Uniemożliwienie budowania stabilnej samooceny.' }
      ],
      defenseMechanisms: [
        { name: 'Kompensacja przez nadmierną pracę', explanation: 'Praca do wyczerpania jako sposób na maskowanie rzekomego braku talentu.' }
      ],
      emotionalDynamic: 'Przewlekły lęk przed demaskacją i wyczerpanie psychofizyczne.'
    },
    decisionProcessAnalysis: {
      trigger: 'Otrzymanie pochwały lub nowego trudnego zadania.',
      attentionFocus: 'Własne wątpliwości i brak wiedzy w jakimś detalu.',
      interpretation: '„Nie umiem tego, natychmiast zobaczą, że się nie nadaję”.',
      emotion: 'Lęk, wstyd, panika.',
      impulse: 'Praca w nocy, sprawdzanie kodu 50 razy.',
      action: 'Nadgodziny i rezygnacja ze snu.',
      consequence: 'Wypalenie zawodowe i podtrzymanie lęku.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'dlPFC', role: 'Przejmowanie kontroli nad zniekształceniami poznawczymi w CBT', activationState: 'Uruchomienie refleksji' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Utrzymujący się wysoki poziom hormonu stresu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Pochwała od szefa wywołuje natychmiastowy skok lęku przed oczekiwaniami.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kultura wyczynowości', description: 'Środowisko promujące pracoholizm jako miarę wartości człowieka.', vulnerabilityExploited: 'Przekonanie o nieadekwatności.' }
      ],
      counterMeasures: [
        { step: '1. Tabela Faktów vs Interpretacji', script: '„Fakt: Kod działa i przeszedł audyt. Interpretacja: Miałem szczęście. Przyjmuję fakt, odrzucam zniekształcenie”.', rationale: 'Urealnia obraz kompetencji.' }
      ]
    },
    alternativePath: 'Gdyby Wiktor nie podjął terapii, doprowadziłby do poważnego epizodu depresyjnego i hospitalizacji.',
    readerQuestion: 'Czy potrafisz przyjąć sukces jako wynik swoich kompetencji, czy natychmiast szukasz przypadek?',
    keyTakeaway: 'Twoje poczucie nieadekwatności to nawyk myślowy z przeszłości, a nie miernik Twojej rzeczywistej kompetencji.'
  },
  {
    id: 'studium-18-5-nieufnosc-w-relacji',
    title: '„Mężczyźni zawsze odchodzą”: Przekonanie o zdradzie i zniszczony związek Karoliny',
    subtitle: 'Przekonania kluczowe o relacjach, projekcja i samospełniająca się przepowiednia',
    protagonist: 'Karolina, 30 lat, architektka',
    context: 'Karolina po bolesnym rozstaniu rodziców wykształciła przekonanie: „Każdy mężczyzna w końcu oszuka i odejdzie”. W nowym związku z Pawłem prowadziła ciągłą kontrolę i przesłuchania.',
    story: [
      'Każde spóźnienie Pawła o 10 minut Karolina traktowała jako dowód na ukrywany romans. Przeglądała jego telefon, sprawdzała polubienia w mediach społecznościowych i urządzała awantury.',
      'Paweł przez rok próbował udowadniać swoją lojalność: tłumaczył się z każdej minuty, rezygnował ze spotkań z kolegami i zapewniał o miłości. Karolina uważała jednak, że Paweł po prostu „dobrze się kryje”.',
      'Ciągłe oskarżenia, brak zaufania i paranoiczna kontrola wyczerpały Pawła. Po kolejnej karczemnej awanturze o przypadkowy polubiony post, Paweł spakował walizki i odszedł.',
      'Karolina, zamiast dostrzec wpływ swojej kontroli, powiedziała przyjaćółce z gorzką satysfakcją: „A nie mówiłam? Mężczyźni zawsze odchodzą!”.'
    ],
    dialogue: [
      { speaker: 'Paweł', text: 'Karolina, kocham Cię i nigdzie nie odchodzę, ale nie mogę żyć w więzieniu!', subtext: 'Prośba o zaufanie i granice.' },
      { speaker: 'Karolina', text: 'Wszyscy tak mówicie, a potem robicie swoje! Nie oszukasz mnie!', subtext: 'Projekcja przekonania kluczowego na partnera.' }
    ],
    decisionTaken: 'Karolina stosowała paranoiczny nadzór nad partnerem, co doprowadziło do rozpadu związku.',
    whatProtagonistSaw: 'Podejrzane zachowania partnera i wizję bycia porzuconą.',
    whatWasMissed: 'Fakt, że to jej brak zaufania i osaczanie doprowadziły partnera do decyzji o odejściu.',
    psychologicalAnalysis: {
      coreMechanism: 'Samospełniająca się przepowiednia w oparciu o schemat porzucenia i nieufności.',
      cognitiveBiases: [
        { name: 'Myślenie tunelowe', description: 'Zauważanie wyłącznie sygnałów pasujących do hipotezy o zdradzie.', impact: 'Ignorowanie codziennych dowodów wiernosci.' }
      ],
      defenseMechanisms: [
        { name: 'Projekcja', explanation: 'Rzutowanie własnych lęków z dzieciństwa na obecnego partnera.' }
      ],
      emotionalDynamic: 'Ciągła zazdrość, lęk przed opuszczeniem i obronny atak.'
    },
    decisionProcessAnalysis: {
      trigger: 'Spóźnienie partnera o 15 minut.',
      attentionFocus: 'Telefon partnera, czarne scenariusze.',
      interpretation: '„On mnie oszukuje, ma kogoś innego”.',
      emotion: 'Wściekłość, przerażenie.',
      impulse: 'Przeglądanie wiadomości, awantura.',
      action: 'Oskarżenia i krzyk.',
      consequence: 'Odejście partnera i potwerdzenie schematu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Reakcja na lęk przed porzuceniem wyzwalająca agresję obronną', activationState: 'Hiperaktywacja' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Adrenalina', roleInScenario: 'Wysoki poziom stresu niszczący przywiązanie.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Dźwięk SMS-a w telefonie partnera wywołuje spięcie mięśni.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Samospełniający się skrypt', description: 'Zachowanie wymuszające na drugiej stronie reakcję potwierdzającą pierwotny lęk.', vulnerabilityExploited: 'Lęk przed opuszczeniem.' }
      ],
      counterMeasures: [
        { step: '1. Oddzielenie Przeszłości od Teraźniejszości', script: '„Paweł to nie mój ojciec. Paweł nie dał mi żadnego twardego powodu do braku zaufania. Mój lęk należy do historii z dzieciństwa”.', rationale: 'Przerywa projekcję schematu.' }
      ]
    },
    alternativePath: 'Gdyby Karolina przepracowała traumę rozstania rodziców w terapii, zbudowałaby bezpieczny związek.',
    readerQuestion: 'Jakie stare przekonanie o relacjach testujesz na swoim obecnym partnerze?',
    keyTakeaway: 'Gdy traktujesz partnera jak wroga, w końcu stworzysz w nim wroga, którego tak się obawiałeś.'
  },
  {
    id: 'studium-18-6-przekonanie-o-swiecie',
    title: 'Świat jako dżungla: Jak przekonanie o powszechnej wrogości zamroziło rozwój Sebastiana',
    subtitle: 'Wrogi błąd atrybucji (Hostile Attribution Bias), nieufność i barierka społeczna',
    protagonist: 'Sebastian, 35 lat, kierowca zawodowy',
    context: 'Sebastian dorastał w niebezpiecznej dzielnicy. Wykształcił przekonanie: „Ludzie to drapieżnicy. Jeśli nie zaatakujesz pierwszy, zostaniesz zmiażdżony”. Przenosił ten schemat na każde nowe środowisko.',
    story: [
      'W nowej pracy Sebastian traktował każdą prośbę ze strony współpracowników jako próbie wykorzystania lub podstępu. Na miłe słowa reagował podejrzliwością: „Czego on ode mnie chce?”.',
      'Gdy kolega z zespołu zaoferował mu pomoc w wypełnieniu dokumentów, Sebastian fuknął: „Sam sobie poradzę, nie rob ze mnie nieudacznika!”.',
      'Współpracownicy, zrażeni jego opryskliwością i agresywnym stylem bycia, przestali się do niego odzywać i zapraszać na wspólne przerwy.',
      'Sebastian zinterpretował to izolowanie jako dowód swojej tezy: „Wiedziałem! Ludzie są fałszywi i mają mnie gdzieś”.'
    ],
    dialogue: [
      { speaker: 'Kolega', text: 'Sebastian, idziemy na kawę, dołączysz?', subtext: 'Chęć integracji i sympatii.' },
      { speaker: 'Sebastian', text: 'Nie mam czasu na głupoty, mam pracę.', subtext: 'Obronny atak i nieufność.' }
    ],
    decisionTaken: 'Sebastian odrzucał wszelkie gesty życzliwości, przyjmując postawę agresywno-obronną.',
    whatProtagonistSaw: 'Ukryty podstęp i chęć wykorzystania go przez otoczenie.',
    whatWasMissed: 'Fakt, że ludzie w nowej firmie byli naprawdę nastawieni przyjaźnie i życzliwie.',
    psychologicalAnalysis: {
      coreMechanism: 'Hostile Attribution Bias (Wrogi błąd atrybucji) — przypisywanie wrogich intencji neutralnym zachowaniom.',
      cognitiveBiases: [
        { name: 'Wrogi błąd atrybucji', description: 'Interpretowanie obojętnych lub miłych gestów jako ataku.', impact: 'Niszczenie relacji społecznych.' }
      ],
      defenseMechanisms: [
        { name: 'Reakcja pozorowana / Agresja wyprzedzająca', explanation: 'Atakowanie zanim ktoś zdąży zranić.' }
      ],
      emotionalDynamic: 'Ciągła czujność (hypervigilance), wściekłość i głęboka samotność.'
    },
    decisionProcessAnalysis: {
      trigger: 'Neutralne pytanie ze strony kolegi.',
      attentionFocus: 'Mowa ciała kolegi, szukanie ukrytego motywu.',
      interpretation: '„Kpi ze mnie, chce mnie wykorzystać”.',
      emotion: 'Irytacja, wrogość.',
      impulse: 'Obruszenie się, głośna odmowa.',
      action: 'Opryskliwa odpowiedź.',
      consequence: 'Izolacja społeczna i podtrzymanie schematu dżungli.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Utrzymujący się stan hiper-czujności na zagrożenie społeczne', activationState: 'Ciągła aktywacja' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Przewlekłe obciążenie allostatyczne stresorem.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Uśmiech kolegi odczytany jako uśmieszek pobłażliwości/drwiny.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Schemat dżungli', description: 'Wpajanie od dziecka, że świat jest miejscem walki bez zasad.', vulnerabilityExploited: 'Potrzebę bezpieczeństwa.' }
      ],
      counterMeasures: [
        { step: '1. Testowanie Dobrych Intencji', script: '„Załóżmy na próbę, że ta osoba nie ma złych intencji. Jak inaczej mogę zinterpretować jej gest?”.', rationale: 'Poszerza elastyczność atrybucyjną.' }
      ]
    },
    alternativePath: 'Gdyby Sebastian pozwolił sobie na zaufanie w małym kroku, zyskałby wspierający zespół i przyaciół.',
    readerQuestion: 'Czy zakładasz z góry złą wolę u ludzi, zanim sprawdźisz obiektywne fakty?',
    keyTakeaway: 'Gdy nosisz w głowie pancerz przeciwko światu, świat w końcu zacznie traktować Cię jak czołg.'
  },
  {
    id: 'studium-18-7-przekonanie-o-pieniadzach',
    title: '„Pieniądze brudzą ręce”: Jak podświadome przekonanie blokowało sukces finansowy Tomasza',
    subtitle: 'Przekonania o bogactwie, auto-sabotaż i restrukturyzacja przekonań rodowych',
    protagonist: 'Tomasz, 37 lat, utalentowany rzeźbiarz i meblarz',
    context: 'Tomasz tworzył meble o unikalnej wartości artystycznej. Mimo ogromnego popytu wyceniał swoje prace poniżej kosztów materiału, ciągle żyjąc na skraju ubóstwa.',
    story: [
      'W domu Tomasza głęboko zakorzenione było przekonanie: „Pierwszy milion trzeba ukraść”, „Uczciwy człowiek nigdy się nie dorobi”, „Bogaci to oszuści bez serca”.',
      'Gdy zamożny klient oferował Tomaszowi 20 tysięcy złotych za stół, Tomasz czuł silny dysonans i wstyd. Zniżał cenę do 5 tysięcy, twierdząc, że „to żaden wyczyn”.',
      'Jego umysł bronił spójności tożsamościowej: „Jestem uczciwym, dobrym człowiekiem, więc nie mogę brać dużych pieniędzy, bo stałbym się taki jak ci chciwi bogacze”.',
      'Dopiero gdy jego warsztat omal nie został zlicytowany za długi, Tomasz musiał skonfrontować się z faktem, że jego przekonanie o pieniądzach niszczy jego rodzinę.'
    ],
    dialogue: [
      { speaker: 'Klient', text: 'Panie Tomaszu, ten stół jest wart 25 tysięcy. Zapłacę każdą cenę.', subtext: 'Obiektywna wycena rynkowa dzieła.' },
      { speaker: 'Tomasz', text: 'Ależ nie... proszę dać 6 tysięcy, mi to wystarczy na drewno...', subtext: 'Auto-sabotaż w obronie czystości moralnej.' }
    ],
    decisionTaken: 'Tomasz celowo zniżał ceny swoich prac o 70%, chroniąc się przed poczuciem, że staje się „chciwym bogaczem”.',
    whatProtagonistSaw: 'Chciwość i moralne zepsucie związane z wysokimi zarobkami.',
    whatWasMissed: 'Fakt, że uczciwa zapłata za talent pozwala tworzyć więcej dzieł i pomagać innym.',
    psychologicalAnalysis: {
      coreMechanism: 'Auto-sabotaż finansowy w oparciu o przekonanie kluczowe narzucone w rodzinie.',
      cognitiveBiases: [
        { name: 'Fałszywa alternatywa', description: '„Albo jestem biedny i uczciwy, albo bogaty i zły”.', impact: 'Blokada rozwoju biznesowego.' }
      ],
      defenseMechanisms: [
        { name: 'Moralizacja', explanation: 'Tłumaczenie biedy wyższością moralną i duchową.' }
      ],
      emotionalDynamic: 'Wstyd przed zarabianiem i poczucie winy wobec tradycji rodzinnej.'
    },
    decisionProcessAnalysis: {
      trigger: 'Propozycja wysokiej zapłaty od klienta.',
      attentionFocus: 'Wewnętrzne napięcie, lęk przed byciem „chciwym”.',
      interpretation: '„Jeśli wezmę te pieniądze, stracę swoją czystość moralną”.',
      emotion: 'Dysonans, wstyd, lęk.',
      impulse: 'Radykalne obniżenie ceny.',
      action: 'Podpisanie umowy na głodową stawkę.',
      consequence: 'Długi i brak środków na rozwój warsztatu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'ACC', role: 'Silny dysonans poznawczy przy próbie wzięcia rynkowej stawki', activationState: 'Hiperaktywacja' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Zablokowana motywacja finansowa przez lęk moralny.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Kwota 20 000 zł wywołuje ukłucie wstydu zamiast radości.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Skrypt ubóstwa moralnego', description: 'Przekonanie rodowe łączące biedę z szlachetnością.', vulnerabilityExploited: 'Potrzebę bycia dobrym człowiekiem.' }
      ],
      counterMeasures: [
        { step: '1. Re-framing Pieniędzy', script: '„Pieniądze są neutralną energią i narzędziem. Zarabiając uczciwie, mogę finansować stypendia i tworzyć jeszcze lepsze meble”.', rationale: 'Łączy bogactwo z wartością dobra.' }
      ]
    },
    alternativePath: 'Gdyby Tomasz zaczął wyceniać prace rynkowo, zatrudniłby 3 uczniów i otworzył własną galerię.',
    readerQuestion: 'Jakie przekonanie o pieniądzach powstrzymuje Cię przed sięgnięciem po godne wynagrodzenie?',
    keyTakeaway: 'Uczciwa wycena własnej pracy nie jest chciwością — jest szacunkiem do własnego czasu i talentu.'
  },
  {
    id: 'studium-18-8-efekt-dunninga-krugera',
    title: 'Ślepa pewność debiutanta: Jak Efekt Dunninga-Krugera omal nie zniszczył startupu Kamila',
    subtitle: 'Niedostatek wiedzy, fałszywa pewność i zderzenie z rzeczywistością rynkową',
    protagonist: 'Kamil, 24 lata, świeżo upieczony absolwent marketingu',
    context: 'Kamil po przeczytaniu dwóch książek o branży medycznej uznał, że odkrył lukę na rynku i stworzy aplikację przewyższającą rozwiązania istniejących koncernów.',
    story: [
      'Kamil zlekceważył uwagi doświadczonych lekarzy i programistów, którzy wskazywali na wymogi prawne (RODO, certyfikacja wyrobów medycznych) oraz skomplikowanie algorytmów.',
      'Kamil twierdził z pełną pewnością siebie: „Oni są skostniali i powolni, ja to zrobię w 3 miesiące z dwoma studentami!”. Jego przekonanie o własnej genialności było niezłomne.',
      'Przekonał anioła biznesu do inwestycji 300 tysięcy złotych. Po 6 miesiącach projekt utknął na wymogach prawnych, o których mówili eksperci. Pieniądze się skończyły, a aplikacja nie mogła trafić do sklepów.',
      'Kamil przeszedł przez klasyczną krzywą Dunninga-Krugera: z Szczytu Głupoty (Peak of Mount Stupid) spadł w Dolinę Rozpaczy (Valley of Despair), uzyskując wreszcie realne pojęcie o trudności dziedziny.'
    ],
    dialogue: [
      { speaker: 'Ekspert Medyczny', text: 'Kamil, certyfikacja wyrobu medycznego trwa minimum 18 miesięcy i kosztuje fortunę.', subtext: 'Ostrzeżenie oparte na wiedzy eksperckiej.' },
      { speaker: 'Kamil', text: 'Eee tam! Przesadzacie! Ominiemy to nową strukturą prawną, nie znacie się na nowoczesnym biznesie!', subtext: 'Arogancja wynikająca z braku wiedzy (Efekt Dunninga-Krugera).' }
    ],
    decisionTaken: 'Kamil zignorował procedury prawne i eksperckie rady, przeznaczając cały budżet na marketing niedziałającej aplikacji.',
    whatProtagonistSaw: 'Własny geniusz, bezwładność konkurencji i szybki sukces.',
    whatWasMissed: 'Złożoność prawna i technologiczna branży medycznej.',
    psychologicalAnalysis: {
      coreMechanism: 'Efekt Dunninga-Krugera — osoby o niskich kompetencjach w danej dziedzinie drastycznie przeceniają swoje możliwości.',
      cognitiveBiases: [
        { name: 'Overconfidence Effect', description: 'Nadmierna pewność trafności własnych sądów.', impact: 'Spalenie budżetu bez weryfikacji.' }
      ],
      defenseMechanisms: [
        { name: 'Wyparcie autorytetu', explanation: 'Odrzucanie głosu ekspertów jako „skostniałego myślenia”.' }
      ],
      emotionalDynamic: 'Początkowa euforia i pycha, zakończona drastycznym upadkiem i wstydem.'
    },
    decisionProcessAnalysis: {
      trigger: 'Pomysł na aplikację medyczną.',
      attentionFocus: 'Własne wyobrażenie sukcesu i łatwych zysków.',
      interpretation: '„Nikt na to nie wpadł, jestem genialny”.',
      emotion: 'Euforia, duma.',
      impulse: 'Odrzucenie uwag ekspertów.',
      action: 'Podpisanie umowy inwestycyjnej bez analizy prawnej.',
      consequence: 'Upadek projektu i utrata reputacji.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora obwodu (ACC)', role: 'Zaburzone wykrywanie błędu przez brak wzorców w pamięci', activationState: 'Brak aktywacji ostrzegawczej' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Wysoki poziom dopaminy napędzający nierealistyczne wizje nagrody.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Krytyka ze strony ekspertów wywołuje lekceważący uśmiech.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Iluzja wiedzy', description: 'Przeczytanie nagłówków wywołujące poczucie opanowania całej dziedziny.', vulnerabilityExploited: 'Ego i chęć szybkiego sukcesu.' }
      ],
      counterMeasures: [
        { step: '1. Konsultacja z Ekspertami (Peer Review)', script: '„Zanim wydam złotówkę, zapłacę dwóm niezależnym ekspertom za znalezienie wszystkich luk w moim planie”.', rationale: 'Chroni przed Dunning-Krugerem.' }
      ]
    },
    alternativePath: 'Gdyby Kamil zatrudnił prawnika medycznego na początku, zmieniłby profil aplikacji na fitnessową i osiągnąłby sukces.',
    readerQuestion: 'W jakiej dziedzinie przeceniasz swoje wiedzę tylko dlatego, że przeczytałeś kilka artykułów?',
    keyTakeaway: 'Prawdziwa wiedza zaczyna się od uświadomienia sobie, jak ogromnie wiele jeszcze nie wiemy.'
  }
];

export const selfExercisesChapterEighteen: SelfExercise[] = [
  {
    id: 'ex-18-1',
    title: 'Sokratejski Test Przekonań',
    subtitle: 'Weryfikacja wiarygodności własnych hipotez życiowych',
    objective: 'Przetestowanie wybranego sztywnego przekonania za pomocą pytań podważających i poszukiwania dowodów przeciwstawnych.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Zadawanie pytań obiektywizujących aktywuje grzbietowo-boczną korę przedczołową (dlPFC), wyciszając lękową reakcję ciała migdałowatego.',
    steps: [
      {
        stepNumber: 1,
        title: 'Sformułowanie przekonania',
        instruction: 'Zapisz jedno silne przekonanie na swój temat lub na temat świata, które wywołuje w Tobie stres (np. Nigdy nie awansuję, Ludzie myślą tylko o sobie).',
        promptText: 'Moje przekonanie testowe:',
        placeholder: 'Przekonanie: Nigdy nie poradzę sobie z publicznymi wystąpieniami...'
      },
      {
        stepNumber: 2,
        title: 'Poszukiwanie dowodów przeciwstawnych (Disconfirming Evidence)',
        instruction: 'Wypisz co najmniej 3 fakty z Twojego życia, które stoją w sprzeczności z tym przekonaniem lub pokazują od tego wyjątek.',
        promptText: 'Fakty sprzeczne z przekonaniem:',
        placeholder: '1. W zeszłym roku przeprowadziłem udaną prezentację dla 5 osób w zespole...\n2. Na ślubie brata wygłosiłem krótkie i ciepłe przemówienie...\n3. Kiedy mówię o mojej pasji, ludzie słuchają z zaciekawieniem...'
      },
      {
        stepNumber: 3,
        title: 'Formułowanie hipotezy zaktualizowanej',
        instruction: 'Przepisuj przekonanie na elastyczną hipotezę opartą na faktach.',
        promptText: 'Moja nowa hipoteza zaktualizowana:',
        placeholder: 'Odczuwam lęk przed dużym audytorium, ale w małych grupach potrafię sprawnie przekazywać myśli...'
      }
    ],
    reflectionQuestions: [
      'Dlaczego Twój umysł chętniej pamiętał o porażkach niż o wyjątkach od reguły?',
      'Jak zmiana tego przekonania wpływa na Twoje decyzje na najbliższy miesiąc?'
    ]
  },
  {
    id: 'ex-18-2',
    title: 'Detoks od Komór Echa',
    subtitle: 'Dywersyfikacja źródeł informacji i łamanie Confirmation Bias',
    objective: 'Świadome wystawienie umysłu na wartościowe argumenty drugiej strony sporu światopoglądowego.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Analiza argumentów przeciwnej strony stymuluje elastyczność poznawczą i zmniejsza polaryzację w strukturach kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór tematu spornego',
        instruction: 'Wybierz temat, w którym masz zdecydowane poglądy (np. polityka, gospodarka, styl życia).',
        promptText: 'Mój mocny pogląd:',
        placeholder: 'Pogląd: Prywatyzacja służby zdrowia jest jedynym skutecznym rozwiązaniem...'
      },
      {
        stepNumber: 2,
        title: 'Wyszukanie najsilniejszych argumentów drugiej strony',
        instruction: 'Znajdź i przeczytaj artykuł napisany przez szanowanego eksperta z przeciwnego obozu. Wypisz 2 najsilniejsze, logiczne argumenty drugiej strony.',
        promptText: 'Najsilniejsze argumenty przeciwnej strony:',
        placeholder: '1. Ryzyko wykluczenia najuboższych pacjentów z procedur wysokokosztowych...\n2. Przykłady rynków, gdzie prywatny system doprowadził do drastycznego wzrostu cen leków...'
      },
      {
        stepNumber: 3,
        title: 'Syntetyczna ocena rozkładu prawdopodobieństwa',
        instruction: 'Zapisz, co w stanowisku drugiej strony jest merytorycznie uzasadnione.',
        promptText: 'Co przyjmuję jako wartościowy punkt:',
        placeholder: 'Zgadzam się, że państwo musi gwarantować koszyk świadczeń ratujących życie dla najuboższych...'
      }
    ],
    reflectionQuestions: [
      'Jakie emocje pojawiały się w ciele podczas czytania tekstu z drugiej strony?',
      'O ile procent spadła Twoja zaciekłość po poznaniu rzetelnych argumentów drugiej strony?'
    ]
  },
  {
    id: 'ex-18-3',
    title: 'Eksperyment Behawioralny na Lęk',
    subtitle: 'Weryfikacja myśli katastroficznych w bezpiecznej skali',
    objective: 'Sprawdzenie w praktyce, czy lękowe przepowiednie umysłu sprawdzają się w rzeczywistości.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Brak wystąpienia spodziewanej katastrofy wygasza reakcję warunkową w ciele migdałowatym poprzez mechanizm wygaszania (extinction learning).',
    steps: [
      {
        stepNumber: 1,
        title: 'Zapisanie przepowiedni lękowej',
        instruction: 'Zapisz, co według Twojej myśli stanie się w konkretnej sytuacji (np. Jeśli poproszę o wyjaśnienie, wszyscy uznają mnie za głupca).',
        promptText: 'Moja przepowiednia lękowa:',
        placeholder: 'Jeśli zadam pytanie na zebraniu, zapadnie niezręczna cisza i szef mnie skrytykuje...'
      },
      {
        stepNumber: 2,
        title: 'Zaplanowanie mikro-eksperymentu',
        instruction: 'Określ dokładny czas i miejsce, w którym celowo zrobisz to, czego dotyczy myśl.',
        promptText: 'Plan eksperymentu:',
        placeholder: 'Na wtorkowym zebraniu o 10:00 zadam jedno pytanie doprecyzowujące do slajdu nr 4...'
      },
      {
        stepNumber: 3,
        title: 'Rejestracja wyników i wnioski',
        instruction: 'Po wykonaniu zadania zapisz obiektywne fakty.',
        promptText: 'Rzeczywisty wynik eksperymentu:',
        placeholder: 'Zadałem pytanie. Szef odpowiedział merytorycznie, dwie osoby zanotowały odpowiedź. Nikt nie wyśmiał.'
      }
    ],
    reflectionQuestions: [
      'Co ten eksperyment mówi Ci o wiarygodności Twojego wewnętrznego sygnału alarmowego?',
      'Jaki kolejny mały eksperyment chcesz przeprowadzić w tym tygodniu?'
    ]
  },
  {
    id: 'ex-18-4',
    title: 'Dekonstrukcja Iluzji Wyjaśnienia',
    subtitle: 'Testowanie rzeczywistej głębi własnej wiedzy',
    objective: 'Urealnienie oceny własnej wiedzy w skomplikowanym temacie i redukcja pychy poznawczej.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Konfrontacja z brakiem wiedzy w trakcie próby wyjaśnienia mechanizmu obniża aktywację w obszarach związanych z nadmierną pewnością siebie.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór zagadnienia',
        instruction: 'Wybierz temat, w którym uważasz, że masz dużą wiedzę (np. Jak działa system emerytalny, Jak działa silnik elektryczny).',
        promptText: 'Temat testowy:',
        placeholder: 'Jak działa technologia sztucznej inteligencji (LLM)...'
      },
      {
        stepNumber: 2,
        title: 'Pisemne wyjaśnienie krok po kroku',
        instruction: 'Napisz na kartce szczegółowy opis mechanizmu, tak jakbyś tłumaczył to 10-letniemu dziecku. Używaj konkretów, bez ogólników.',
        promptText: 'Moje wyjaśnienie mechanizmu:',
        placeholder: 'Umysł zaczyna pisać... i utyka przy pytaniu: Jak dokładnie tokeny przekształcane są na wagi w sieci neuronowej...'
      },
      {
        stepNumber: 3,
        title: 'Identiikacja luk w wiedzy',
        instruction: 'Zapisz, w którym momencie Twoje wyjaśnienie przestało być konkretne i pojawiły się słowa: „po prostu tak to działa”.',
        promptText: 'Moje luki w wiedzy:',
        placeholder: 'Nie rozumiem dokładnie matematycznego mechanizmu uwagi (Attention Mechanism)...'
      }
    ],
    reflectionQuestions: [
      'Jak zmieniła się Twoja subiektywna pewność siebie (w skali 1-10) po wykonaniu tego ćwiczenia?',
      'Jakie to uczucie przyznać przed samym sobą: „W tym punkcie nie mam pojęcia, jak to działa”?'
    ]
  },
  {
    id: 'ex-18-5',
    title: 'Restrukturyzacja Przekonań Kluczowych',
    subtitle: 'Zamiana schematów z dzieciństwa na dorosłe zasoby',
    objective: 'Zidentyfikowanie głębokiego założenia na swój temat i stworzenie wspierającego przekonania alternatywnego.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Tworzenie i powtarzanie nowej ścieżki interpretacji w kory przedczołowej stopniowo osłabia stary nawyk neuronalny w układzie limbicznym.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wykrycie przekonania kluczowego',
        instruction: 'Zapisz przekonanie, które leży u podstaw Twojego najczęstszego wstydu lub lęku (np. Jestem sam, Jestem niewystarczająco dobry, Muszę zasłużyć na miłość).',
        promptText: 'Moje stary przekonanie kluczowe:',
        placeholder: 'Jestem niewystarczająco dobry, dopóki nie odniosę oszałamiającego sukcesu...'
      },
      {
        stepNumber: 2,
        title: 'Identyfikacja korzeni',
        instruction: 'Zapisz, skąd to przekonanie do Ciebie przyszło (kto Ci to mówił lub pokazywał w dzieciństwie).',
        promptText: 'Źródło przekonania:',
        placeholder: 'Ojciec, który chwalił mnie tylko wtedy, gdy przynosiłem świadectwo z wyróżnieniem...'
      },
      {
        stepNumber: 3,
        title: 'Nowe przekonanie dorosłe',
        instruction: 'Sformułuj nowe, zrównoważone przekonanie, które jest prawdziwe w Twoim dorosłym życiu.',
        promptText: 'Moje nowe przekonanie wspierające:',
        placeholder: 'Moja wartość jako człowieka jest stała. Sukcesy są owocem moich działań, a nie warunkiem prawa do istnienia.'
      }
    ],
    reflectionQuestions: [
      'O ile lżejsze staje się Twoje ciało, gdy odrzucasz stary nakaz rodzicielski?',
      'Jaki dowód w tym tygodniu dostarczysz swojemu umysłowi na potwierdzenie nowego przekonania?'
    ]
  },
  {
    id: 'ex-18-6',
    title: 'Audyt Wyzwalaczy Dysonansu',
    subtitle: 'Świadome zarządzanie napięciem poznawczym',
    objective: 'Zauważenie momentów, w których uruchamiasz racjonalizację i wyparcie w odpowiedzi na niewygodne fakty.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Samoobserwacja dysonansu aktywuje przednią korę obwodu (ACC), umożliwiając swiadomy wybór korekty zachowania zamiast automatycznej racjonalizacji.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zauważenie sprzeczności',
        instruction: 'Wypisz sytuację z ostatniego tygodnia, w której zrobiłeś coś sprzecznego ze swoimi wartościami (np. Zjadłem słodycze będąc na diecie, Nakrzyczałem na dziecko mimo obietnicy spokoju).',
        promptText: 'Sprzeczność zachowania z wartością:',
        placeholder: 'Obiecałem sobie nie przeglądać telefonu przy kolacji z partnerem, a spędziłem tak 40 minut...'
      },
      {
        stepNumber: 2,
        title: 'Zapisanie automatycznej racjonalizacji',
        instruction: 'Zapisz, jak Twój umysł próbował usprawiedliwić ten błąd.',
        promptText: 'Moja automatyczna racjonalizacja:',
        placeholder: 'Tłumaczyłem sobie: „Miałem ciężki dzień w pracy, należy mi się chwila relaksu”...'
      },
      {
        stepNumber: 3,
        title: 'Uczciwa akceptacja i korekta',
        instruction: 'Odrzuć racjonalizację i powiedz szczerze: „Złamałem swoją zasadę z powodu zmęczenia. Co zrobię jutro, by to naprawić?”.',
        promptText: 'Uczciwe podsumowanie:',
        placeholder: 'Naruszyłem moją zasadę. Zamiast się tłumaczyć, odłożę telefon do drugiego pokoju o 18:00.'
      }
    ],
    reflectionQuestions: [
      'Jakie najczęstsze wymówki wymyśla Twój umysł, by bronić Twoich małych grzechów?',
      'O ile łatwiej poprawić zachowanie, gdy przestajesz się oszukiwać?'
    ]
  },
  {
    id: 'ex-18-7',
    title: 'Pętla Bayesowska w Praktyce',
    subtitle: 'Aktualizacja prawdopodobieństwa poglądów krok po kroku',
    objective: 'Nauka ilościowego szacowania prawdopodobieństwa własnych hipotez życiowych pod wpływem nowych danych.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Formalne szacowanie prawdopodobieństwa angażuje kwadrant obliczeniowy koryprzedczołowej, zmniejszając emocjonalną zaciekłość.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór hipotezy i ocena wstępna (Prior)',
        instruction: 'Zapisz hipotezę i oceń jej prawdopodobieństwo w skali 0-100% (np. Zmiana branży w moim wieku powiąże się z zejściem z pensji o połowę - 80%).',
        promptText: 'Hipoteza i ocena wstępna:',
        placeholder: 'Hipoteza: Zmiana pracy sprowadzi na mnie spadek dochodów (Prawdopodobieństwo: 80%)...'
      },
      {
        stepNumber: 2,
        title: 'Zebranie obiektywnych danych (Likelihood)',
        instruction: 'Przejrzyj 5 realnych ofert pracy w nowej branży i porozmawiaj z dwoma osobami, które dokonały tej zmiany. Zapisz twarde fakty.',
        promptText: 'Obiektywne dane empiryczne:',
        placeholder: 'Oferty pokazują, że spadek wynosi średnio 15%, a po roku dochody wracają do normy...'
      },
      {
        stepNumber: 3,
        title: 'Zaktualizowane prawdopodobieństwo (Posterior)',
        instruction: 'Uwzględniając nowe dane, podaj zaktualizowany poziom prawdopodobieństwa Twojej pierwotnej obawy.',
        promptText: 'Zaktualizowane prawdopodobieństwo:',
        placeholder: 'Zaktualizowane prawdopodobieństwo drastycznego spadku dochodów: 25%.'
      }
    ],
    reflectionQuestions: [
      'Jak zmiana liczby procentowej wpływa na Twój poziom lęku przed działaniem?',
      'Jakie inne przekonanie w Twoim życiu wymaga zaktualizowania pętlicą bayesowską?'
    ]
  },
  {
    id: 'ex-18-8',
    title: 'Manifest Epistemicznej Pokory',
    subtitle: 'Budowanie otwartej i naukowej postawy wobec rzeczywistości',
    objective: 'Stworzenie osobistej deklaracji elastyczności poznawczej i gotowości do nauki.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Deklaracja otwartości poznawczej buduje schemat wyższego rzędu, który ułatwia przyjmowanie krytyki w przyszłości.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zasada Moich Poglądów',
        instruction: 'Napisz, jak traktujesz swoje obecne przekonania (np. Moje poglądy to najlepsze dzisiejsze hipotezy, gotowe do korekty pod wpływem nowych faktów).',
        promptText: 'Moje podejście do wiedzy:',
        placeholder: 'Moje poglądy nie są moją tożsamością. Są tylko roboczymi modelami świata...'
      },
      {
        stepNumber: 2,
        title: 'Gotowość do słów „Nie wiem”',
        instruction: 'Napisz zdanie, które wypowiesz w dyskusji, gdy zabraknie Ci twardych dowodów.',
        promptText: 'Moja wypowiedź pokory:',
        placeholder: 'Nie mam wystarczających danych w tym temacie, sprawdzę to i wrócimy do rozmowy...'
      },
      {
        stepNumber: 3,
        title: 'Zasada szacunku do odmienności',
        instruction: 'Napisz, jak będziesz reagować na osoby o skrajnie odmiennych poglądach.',
        promptText: 'Zasada relacyjna:',
        placeholder: 'Mój rozmówca może mieć dostęp do faktów, których ja nie dostrzegam. Najpierw wysłucham jego mechanizmu, zanim zacznę oceniać.'
      }
    ],
    reflectionQuestions: [
      'O ile spokojniejsze stanie się Twoje życie, gdy przestaniesz musieć mieć rację we wszystkich dyskusjach?',
      'Jak ta postawa wpłynie na jakość Twoich relacji z bliskimi?'
    ]
  }
];

export const chapterEighteen: Chapter = {
  number: 18,
  volume: 3,
  volumeChapterNumber: 2,
  title: 'Przekonania i sposób patrzenia na świat',
  subtitle: 'Architektura mentalnych modeli, schematy poznawcze, Błąd Potwierdzenia i fizjologia aktualizacji wiedzy',
  leadParagraph: 'Dlaczego dwie osoby stojące w tym samym miejscu, patrzące na tę samą sytuację i słuchające tych samych słów wyciągają z niej diametralnie różne wnioski? Odpowiedź tkwi w architekturze przekonań — niewidzialnych soczewek poznawczych, przez które umysł filtruje surowy strumień bodźców z otoczenia. Przekonania nie są biernym zapisem rzeczywistości, lecz aktywnymi konstrukcjami, które decydują o tym, co zauważamy, jak czujemy i jakie decyzje podejmujemy. W tym rozdziale przeanalizujemy, jak powstają, utrwalają się i zmieniają nasze mentalne modele świata.',
  totalEstimatedPages: 60,
  sections: [
    {
      id: 'sec-18-1',
      pageNumber: 1,
      sectionNumber: '18.1',
      title: 'Czym Jest Przekonanie? Architektura Poznawcza Mentalnego Modelu Świata',
      category: 'teoria',
      readingTimeMinutes: 14,
      quote: {
        text: 'Nie widzimy świata takim, jaki jest. Widzimy świat takim, jakimi my jesteśmy.',
        author: 'Anaïs Nin'
      },
      paragraphs: [
        'Przekonanie (belief) w psychologii poznawczej definiowane jest jako subiektywna reprezentacja umysłowa, którą jednostka traktuje jako prawdziwy opis rzeczywistości. Przekonania tworzą tkankę naszego mentalnego modelu świata, pozwalając nawigować w skomplikowanym środowisku bez konieczności ponownego analizowania każdego bodźca od zera.',
        'Kluczowe jest zrozumienie, że przekonanie nie jest obiektywnym faktem. Fakt to zweryfikowany empirycznie stan rzeczywistości (np. „Temperatura wody wynosi 20 stopni Celsjusza”), podczas gdy przekonanie jest interpretacją nadaną temu faktowi przez umysł („Woda jest za zimna do pływania”).',
        'Struktura przekonań przypomina sieć: na samym dole znajdują się pojedyncze obserwacje, wyżej przekonania pośrednie (zasady i założenia), a na samym szczycie przekonania kluczowe (core beliefs) na temat siebie, ludzi i świata. Naruszenie przekonania kluczowego wywołuje wstrząs w całej architekturze psychicznej.'
      ]
    },
    {
      id: 'sec-18-2',
      pageNumber: 4,
      sectionNumber: '18.2',
      title: 'Skąd Biorą Się Przekonania? Doświadczenie, Warunkowanie i Transmisja Kulturowa',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Przekonania powstają w wyniku trzech głównych procesów: 1. Bezpośrednich doświadczeń życiowych (zwłaszcza tych o wysokim ładunku emocjonalnym); 2. Warunkowania i wzmocnień wczesnodziecięcych; 3. Transmisji kulturowej i autorytetowej.',
        'Mózg dziecka jest chłonną gąbką, która bezrefleksyjnie absorbuje przekonania rodowe („Pieniądze są źródłem zła”, „Ludziom nie można ufać”). Te wczesne implanty po latach stają się niepodważalnymi pewnikami, rzutując na decyzje finansowe i relacyjne dorosłego człowieka.',
        'Co więcej, im wyższy poziom emocji towarzyszył powstawaniu danego przekonania (np. trauma rozstania, gwałtowna porażka w szkole), tym silniejsze jest jego zakotwiczenie w układzie limbicznym i tym większy opór stawia ono przy próbie modyfikacji.'
      ]
    },
    {
      id: 'sec-18-3',
      pageNumber: 7,
      sectionNumber: '18.3',
      title: 'Schematy Poznawcze Jako Soczewki Percepcji — Aron Beck i Terapia CBT',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Jeśli nasze myślenie jest proste i jasne, jesteśmy lepiej przygotowani do osiągania naszych celów. Jeśli jest zniekształcone przez schematy, cierpimy z powodu problemów, które sami sobie stwarzamy.',
        author: 'Aaron T. Beck (Cognitive Therapy of Depression, 1979)'
      },
      paragraphs: [
        'Aaron T. Beck, twórca terapii poznawczo-behawioralnej (CBT), zrewolucjonizował rozumienie ludzkiego cierpienia, dowodząc, że zaburzenia nastroju i dysfunkcyjne zachowania nie wynikają bezpośrednio z traumatycznych zdarzeń, lecz z nieuświadomionych, sztywnych matryc pojęciowych zwanych schematami poznawczymi (Cognitive Schemas).',
        'Schemat poznawczy to utrwalona sieć neuronalna kodująca uogólnioną wiedzę o sobie, innych i świecie. Działa jak automatyczny algorytm kompresji danych: selekcjonuje docierające bodźce, uzupełnia brakujące informacje domysłami i narzuca gotową interpretację, zanim kora nowa zdoła przeprowadzić świadomą refleksję.',
        'W ujęciu Becka schematy poznawcze dzielą się na trzy hierarchiczne poziomy:',
        '1. PRZEKONANIA RDZENNE (Core Beliefs): Najgłębszy, bezwzględny fundament tożsamości, uformowany we wczesnym dzieciństwie pod wpływem relacji z opiekunami i doświadczeń rówieśniczych (np. „Jestem bezradny”, „Jestem nie do pokochania”, „Świat jest wrogi”).\n2. PRZEKONANIA POŚREDNIE (Intermediate Beliefs): Zasady, normy i założenia kompensacyjne, które chronią przed konfrontacją z bolesnym przekonaniem rdzennym (np. „Jeśli nigdy nie popełnię błędu, nikt nie odkryje, że jestem niekompetentny”).\n3. AUTOMATYCZNE MYŚLI (Automatic Thoughts): Błyskawiczne, telegraficzne zdania i obrazy pojawiające się w ułamku sekundy w odpowiedzi na konkretne zdarzenie zewnętrzne (np. „Szef krzywo na mnie spojrzał — zaraz mnie zwolni”).'
      ],
      subsections: [
        {
          title: 'Szczegółowa analiza słów Aarona Becka: Jak schemat przejmuje kontrolę nad uwagą?',
          paragraphs: [
            'Beck w swoich pracach klinicznych podkreślał zjawisko „poznawczej ślepoty na dowody sprzeczne” (Cognitive Exclusion). Kiedy schemat zostaje wzbudzony przez bodziec spustowy, układ nerwowy przechodzi w tryb asymilacji: każde zjawisko jest naginane tak, by pasowało do matrycy.',
            'Jeśli student z aktywnym schematem nieadekwatności otrzyma 99 punktów na 100 z trudnego egzaminu, jego umysł nie zarejestruje 99 sukcesów. Skupi się na jedynym utraconym punkcie, uznając go za „ostateczny dowód własnej głupoty”. To nie jest błąd logiczny, który da się naprawić prostym pouczeniem — to strukturalne zaburzenie filtra percepcyjnego.'
          ],
          highlightBox: {
            title: 'Wgląd Psychologiczny Becka: Myśl to hipoteza, nie wyrok',
            content: '„Największym błędem człowieka jest traktowanie własnych myśli automatycznych jako obiektywnych faktów biologicznych. Myśl to zaledwie hipoteza robocza układu nerwowego, która może być całkowicie fałszywa”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-18-3-mikroskop-becka',
        type: 'microscope',
        title: 'Człowiek pod mikroskopem: Michał i aktywacja schematu niekompetencji',
        subtitle: 'Wiwisekcja 19 etapów przetwarzania poznawczego podczas zebrania zarządu',
        context: 'Michał (34 lata, główny analityk finansowy) prezentuje kwartalny raport przed zarządem spółki.',
        microscopeSteps: [
          { stepNumber: 1, label: 'SYTUACJA', question: 'Co dokładnie się wydarzyło w świecie fizycznym?', content: 'Wiceprezes spółki przerwał prezentację Michała na slajdzie 8 i zapytał: „Czy marża EBITDA na rynku niemieckim uwzględnia wahania kursu euro z ostatniego wtorku?”.', subtext: 'Czysty fakt audialny i wizualny, neutralne zapytanie merytoryczne.' },
          { stepNumber: 2, label: 'INFORMACJE ZNANE', question: 'Co Michał rzeczywiście wie w tej sekundzie?', content: 'Wie, że model kalkulacyjny opierał się na uśrednionym kursie miesięcznym, co jest standardem sprawozdawczym w firmie.', subtext: 'Obiektywna wiedza matematyczna i proceduralna.' },
          { stepNumber: 3, label: 'BRAK INFORMACJI', question: 'Czego Michał NIE wie o motywach wiceprezesa?', content: 'Nie wie, czy wiceprezes zadaje pytanie z czystej ciekawości, czy sam jest zestresowany audytem, czy próbuje go sprawdzić.', subtext: 'Luka informacyjna, którą umysł natychmiast zapełni domysłem.' },
          { stepNumber: 4, label: 'UWAGA', question: 'Gdzie kieruje się reflektor uwagi Michała?', content: 'Błyskawicznie odrywa się od liczb na ekranie i zogniskowuje na zmarszczonych brwiach wiceprezesa i własnym ściśniętym gardle.', subtext: 'Zawężenie pola percepcyjnego — tunel poznawczy.' },
          { stepNumber: 5, label: 'PERCEPCJA', question: 'Co faktycznie rejestrują jego zmysły?', content: 'Rejestruje ciszę na sali trwającą 3 sekundy, szelest papierów dyrektora generalnego i własne przyspieszone tętno.', subtext: 'Bodźce neutralne interpretowane jako sygnały wrogości.' },
          { stepNumber: 6, label: 'INTERPRETACJA', question: 'Jakie znaczenie nadaje sytuacji aparat poznawczy?', content: '„On wie, że jestem oszustem. Znalazł błąd w moim modelu. Zostanę publicznie zmiażdżony i zwolniony”.', subtext: 'Błyskawiczna katastrofizacja i myślenie czarno-białe wg Becka.' },
          { stepNumber: 7, label: 'EMOCJE', question: 'Co odczuwa w ciele w ułamku sekundy?', content: 'Gwałtowny wyrzut wstydu, paraliżujący lęk przed zdemaskowaniem i upokorzeniem.', subtext: 'Aktywacja ciała migdałowatego i osi stresu HPA.' },
          { stepNumber: 8, label: 'POBUDZENIE', question: 'Jak zmienia się stan somatyczny organizmu?', content: 'Tętno skacze do 135 bpm, odpływ krwi z kory przedczołowej do mięśni szkieletowych, suchość w ustach, drżenie dłoni.', subtext: 'Fizjologiczny stan „walcz lub uciekaj” w klimatyzowanej sali konferencyjnej.' },
          { stepNumber: 9, label: 'POTRZEBA', question: 'Czego w tej chwili fundamentalnie potrzebuje Michał?', content: 'Natychmiastowego bezpieczeństwa, zachowania twarzy i ucieczki przed publiczną kompromitacją.', subtext: 'Biologiczna potrzeba ochrony integralności społecznej.' },
          { stepNumber: 10, label: 'MOTYWACJA', question: 'Do czego dąży jego układ motywacyjny?', content: 'Nie do precyzyjnego wyjaśnienia metodologii, lecz do defensywnego zneutralizowania ataku.', subtext: 'Motywacja ucieczkowo-obronna zamiast zadaniowej.' },
          { stepNumber: 11, label: 'OBAWY', question: 'Jaki jest jego najczarniejszy scenariusz mentalny?', content: 'Utrata pracy, zrujnowanie reputacji na rynku, powrót do domu i konieczność przyznania się żonie do porażki.', subtext: 'Eskalacja katastroficzna w odcięciu od realiów.' },
          { stepNumber: 12, label: 'CEL', question: 'Jaki krótkoterminowy cel wybiera kora przedczołowa?', content: 'Szybko zakończyć ten wątek, nie wchodząc w dyskusję merytoryczną.', subtext: 'Redukcja napięcia kosztem jakości merytorycznej.' },
          { stepNumber: 13, label: 'ALTERNATYWY', question: 'Jakie inne drogi reakcji miał do dyspozycji?', content: 'Mógł spokojnie powiedzieć: „Model bazuje na średniej miesięcznej. Sprawdźmy wpływ wtorkowego kursu — możemy przeliczyć to w 2 minuty po spotkaniu”.', subtext: 'Ścieżka dojrzałego partnerstwa merytorycznego.' },
          { stepNumber: 14, label: 'DECYZJA', question: 'Dlaczego wybiera opcję defensywną?', content: 'Ponieważ schemat „Jestem niekompetentny” podpowiedział, że każda próba obrony zostanie uznana za bezczelność.', subtext: 'Paraliż decyzyjny narzucony przez schemat dziecięcy.' },
          { stepNumber: 15, label: 'ZACHOWANIE', question: 'Co Michał fizycznie robi i mówi?', content: 'Spuszcza wzrok, czerwieni się, mówi cichym, przepraszającym głosem: „Aha... no tak, przepraszam, mogłem to przeoczyć... poprawię to”.', subtext: 'Zachowanie uległo-defensywne, sygnalizujące winę, której nie ma.' },
          { stepNumber: 16, label: 'REAKCJA INNYCH', question: 'Jak reaguje zarząd na takie zachowanie?', content: 'Wiceprezes jest zaskoczony przeprosinami i zaczyna myśleć: „Skoro tak panikuje, to chyba cały raport jest nierzetelny”. Zaczyna drążyć kolejne slajdy.', subtext: 'Samospełniająca się przepowiednia: defensywa wywołała podejrzenia.' },
          { stepNumber: 17, label: 'KONSEKWENCJE', question: 'Jaki jest obiektywny bilans spotkania?', content: 'Zarząd traci zaufanie do obliczeń Michała, zleca zewnętrzny audyt, a Michał wraca do biurka wyczerpany i roztrzęsiony.', subtext: 'Realne straty wizerunkowe spowodowane nie błędem w danych, lecz błędem schematu.' },
          { stepNumber: 18, label: 'AKTUALIZACJA PRZEKONAŃ', question: 'Czego umysł Michała „uczy się” z tego wydarzenia?', content: 'Zamiast dostrzec błąd we własnej reakcji, Michał mówi sobie: „Wiedziałem! Znowu udowodniłem, że się do tego nie nadaję. Następnym razem muszę jeszcze bardziej unikać wystąpień”.', subtext: 'Wzmocnienie i zabetonowanie pierwotnego schematu rdzennego.' },
          { stepNumber: 19, label: 'KOLEJNA RUNDA', question: 'Jak wpłynie to na jego zachowanie za miesiąc?', content: 'Przed kolejnym zebraniem weźmie zwolnienie lekarskie, pogłębiając ucieczkę behawioralną i niszcząc swoją karierę.', subtext: 'Błędne koło unikania utrwalające nerwicowy schemat.' }
        ],
        takeaway: 'To nie pytanie wiceprezesa zniszczyło prezentację Michała — zrobił to jego własny, nieuświadomiony schemat poznawczy, który zamienił merytoryczną uwagę w egzystencjalny wyrok.'
      },
      caseStudyRef: caseStudiesChapterEighteen[3]
    },
    {
      id: 'sec-18-4',
      pageNumber: 10,
      sectionNumber: '18.4',
      title: 'Interpretacja Rzeczywistości: Surowy Bodziec vs Znaczenie Nadane Przez Umysł',
      category: 'teoria',
      readingTimeMinutes: 18,
      quote: {
        text: 'Ludzi nie niepokoją same rzeczy, lecz przekonania, jakie o nich mają.',
        author: 'Epiktet / Albert Ellis (Reason and Emotion in Psychotherapy, 1962)'
      },
      paragraphs: [
        'Pomiędzy surowym bodźcem ze świata fizycznego a naszą reakcją emocjonalną, somatyczną i behawioralną istnieje przestrzeń interpretacji poznawczej, którą Albert Ellis, twórca Racjonalno-Emotywnej Terapii Zachowania (REBT), ujął w klasyczny Model ABC.',
        'Model ABC Ellisa rozbija ludzkie doświadczenie na trzy precyzyjne komponenty:',
        'A (Activating Event) — Zdarzenie aktywujące: obiektywny, możliwy do zarejestrowania kamerą fakt (np. partner spóźnia się 30 minut na kolację; klient odrzuca ofertę handlową).\nB (Beliefs) — Przekonania i interpretacje: wewnętrzny filtr znaczeń, myśli i założeń, przez które umysł przepuszcza zdarzenie A (np. „On robi to celowo, żeby mnie upokorzyć”; „Muszę zadowolić każdego, inaczej jestem nikim”).\nC (Consequences) — Konsekwencje: reakcja emocjonalna (wściekłość, rozpacz), fizjologiczna (podwyższone ciśnienie) i behawioralna (awantura, trzaskanie drzwiami).',
        'Najważniejszy wgląd Ellisa brzmi: PUNKTY A NIGDY NIE POWODUJĄ PUNKTÓW C. Pomiędzy A i C zawsze stoi B. To nie spóźnienie partnera (A) wywołuje szał (C), lecz przekonanie B: „On MA OBOWIĄZEK zawsze być na czas, a skoro się spóźnił, to znaczy, że ma mnie za nic!”. Zmiana przekonania B natychmiast modyfikuje odpowiedź biologiczną C.'
      ],
      subsections: [
        {
          title: 'Analiza słów Alberta Ellisa: Tyrania powinności („Musturbation”)',
          paragraphs: [
            'Ellis stworzył ironiczny termin „musturbation” (tyrania powinności), aby opisać neurotyczny nawyk przekształcania ludzkich pragnień w sztywne, bezwzględne żądania pod adresem wszechświata. Ludzie wpadają w rozpacz nie dlatego, że coś poszło nie po ich myśli, lecz dlatego, że wierzą, iż świat MUSI być sprawiedliwy, inni ludzie MUSZĄ ich lubić, a sukces MUSI przychodzić bez trudu.',
            'Dojrzałość poznawcza według Ellisa polega na zamianie sztywnego żądania („Świat MUSI taki być”) w racjonalną preferencję („Bardzo chciałbym, aby tak było, ale jeśli tak nie jest, potrafię z tym żyć i konstruktywnie działać”).'
          ],
          highlightBox: {
            title: 'Wgląd Ellisa: Trzy neurotyczne aksjomaty paraliżu',
            content: '1. „Muszę odnosić sukcesy we wszystkim, co robię, inaczej jestem bezwartościowy”. 2. „Inni ludzie muszą traktować mnie sprawiedliwie i z szacunkiem, a jeśli tego nie robią, są potworami”. 3. „Warunki mojego życia muszą być łatwe i bezstresowe, inaczej nie da się wytrzymać”. Zdemaskuj te trzy zdania w swoim umyśle, a odzyskasz wolność.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-18-5',
      pageNumber: 13,
      sectionNumber: '18.5',
      title: 'Przekonania o Sobie, Innych i Świecie — Trójada Poznawcza',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Każdy człowiek posiada rozbudowaną trójadę przekonań kluczowych: 1. Przekonania o sobie („Jestem wartościowy / nieadekwatny / silny”); 2. Przekonania o innych ludziach („Ludzie są życzliwi / wrodzy / interesowni”); 3. Przekonania o świecie („Świat jest bezpieczny / dżunglą / pełen możliwości”).',
        'Trójada ta tworzy fundament pod całe funkcjonowanie psychiczne. Jeśli ktoś posiada przekonanie, że „Świat to dżungla, a ludzie są wrodzy”, jego ciało migdałowate pozostaje w stanie ciągłej hiper-czujności (hypervigilance).',
        'Taki człowiek w każdym neutralnym geście współpracownika dostrzega podstęp, reagując agresją wyprzedzającą i niszcząc swoje relacje społeczne.'
      ],
      caseStudyRef: caseStudiesChapterEighteen[5]
    },
    {
      id: 'sec-18-6',
      pageNumber: 16,
      sectionNumber: '18.6',
      title: 'Błąd Potwierdzenia (Confirmation Bias) i Filtrowanie Dowodów',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Umysł ludzki w obliczu nowej hipotezy nie szuka faktów, które mogłyby ją obalić, lecz niestrudzenie poluje na okruchy, które mogą ją poprzeć, ślepy na ocean dowodów przeciwnych.',
        author: 'Peter C. Wason (On the failure to eliminate hypotheses in a conceptual task, 1960)'
      },
      paragraphs: [
        'Błąd Potwierdzenia (Confirmation Bias), opisany po raz pierwszy eksperymentalnie przez Petera Wasona w 1960 roku, jest najbardziej uniwersalnym i podstępnym mechanizmem poznawczym ludzkiego mózgu.',
        'W słynnym zadaniu 2-4-6 Wason podawał badanym ciąg liczb i prosił o odgadnięcie ukrytej reguły poprzez generowanie własnych trójek liczb, na które badacz odpowiadał: „zgodna z regułą” lub „niezgodna”. Badani błyskawicznie formułowali skomplikowaną hipotezę („liczby rosnące o 2”) i testowali wyłącznie trójki potwierdzające ich domysł (np. 6-8-10, 20-22-24). Otrzymując potwierdzenie, nabierali 100% pewności, że odkryli prawdę.',
        'Gdy Wason informował ich, że rzeczywista reguła brzmiała po prostu: «dowolne trzy liczby w porządku rosnącym», badani byli w szoku. Ani razu nie spróbowali podać ciągu, który mógłby obalić ich hipotezę (np. 2-3-4 lub 1-5-100).',
        'Confirmation Bias działa na trzech poziomach przetwarzania informacji:',
        '1. SELEKTYWNA UWAGA: Zauważasz wyłącznie artykuły, wypowiedzi i sytuacje, które potwierdzają Twoje poglądy polityczne lub medyczne.\n2. SELEKTYWNA INTERPRETACJA: Niejednoznaczne dane tłumaczysz tak, by pasowały do Twojego schematu (np. spadek giełdy interpretujesz jako dowód na krach, a wzrost jako manipulację banków centralnych).\n3. SELEKTYWNA PAMIĘĆ: Bez trudu przypominasz sobie sytuacje, gdy „miałeś rację”, całkowicie wypierając ze wspomnień setki pomyłek.'
      ],
      subsections: [
        {
          title: 'Analiza słów Petera Wasona: Dlaczego mózg nienawidzi falsyfikacji?',
          paragraphs: [
            'Wason zauważył, że falsyfikacja własnych przekonań wymaga od kory przedczołowej ogromnego wydatku metabolicznego i zdolności do tolerowania niepewności poznawczej. Potwierdzenie hipotezy aktywuje układ nagrody (strzał dopaminy: „miałem rację!”).',
            'Obalenie hipotezy aktywuje natomiast przednią korę obręczy (ACC) i wyspę — te same obszary, które odpowiadają za ból somatyczny. Mózg woli żyć w błędnej, ale spójnej iluzji, niż znosić bolesny chaos rewizji poglądów.'
          ],
          highlightBox: {
            title: 'Wgląd Wasona: Złota zasada Karola Darwina',
            content: 'Karol Darwin pisał w swojej autobiografii: „Zawsze nosiłem przy sobie notes i natychmiast zapisywałem każdy fakt lub obserwację, która przeczyła mojej teorii ewolucji. Wiedziałem z doświadczenia, że sprzeczne dowody ulatują z pamięci o wiele szybciej niż te, które nam schlebiają”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-18-6-wason-startup',
        type: 'counter_case',
        title: 'Kontrprzypadek: Ślepota falsyfikacyjna w zarządzie startupu MedTech',
        subtitle: 'Jak 5 milionów złotych stopniało w pogoni za samopotwierdzeniem',
        context: 'Projekt inteligentnej opaski diagnostycznej VitalBand monitorującej poziom stresu pracowników.',
        counterCase: {
          standardTheory: 'Założyciele wierzyli w aksjomat: „Każda korporacja natychmiast kupi naszą opaskę, ponieważ stres obniża produktywność, a menedżerowie pragną dbać o dobrostan podwładnych”.',
          counterExample: 'Podczas testów pilotażowych w 3 bankach aż 82% pracowników odmówiło noszenia opasek ze strachu przed inwigilacją i mobbingiem przez HR. Zamiast uznać ten fakt za fundamentalne obalenie założeń biznesowych, prezes startupu stwierdził: „Banki są zbyt konserwatywne, a pracownicy niedoedukowani. Musimy po prostu zrobić lepszą kampanię PR i zainwestować kolejne miliony w marketing!”. Zamiast zmienić model na anonimowy audyt, przepalili budżet i zbankrutowali.',
          whyItDefiesRule: 'Założyciele potraktowali dane rynkowe nie jako sygnał do korekty, lecz jako opór głupiego świata, który trzeba przełamać siłą.',
          deeperLesson: 'Prawdziwy przedsiębiorca i naukowiec zakochuje się w problemie klienta, a nie we własnym rozwiązaniu. Szukaj dowodów na to, dlaczego Twój pomysł może upaść, zanim rynek zweryfikuje go brutalną stratą kapitału.'
        },
        takeaway: 'Najcenniejszą informacją na świecie nie jest ta, która potwierdza Twój geniusz, lecz ta, która bezlitośnie obnaża Twoją ślepą plamę.'
      },
      caseStudyRef: caseStudiesChapterEighteen[0]
    },
    {
      id: 'sec-18-7',
      pageNumber: 19,
      sectionNumber: '18.7',
      title: 'Dysonans Poznawczy Leona Festingera i Strategie Jego Redukcji',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Dysonans poznawczy może być postrzegany jako stan motywacyjny, który popycha człowieka do redukcji napięcia z taką samą siłą, z jaką głód popycha go do poszukiwania pożywienia.',
        author: 'Leon Festinger (A Theory of Cognitive Dissonance, 1957)'
      },
      paragraphs: [
        'Leon Festinger w 1957 roku opublikował teorię, która na zawsze zmieniła psychologię społeczną: Teorię Dysonansu Poznawczego (Cognitive Dissonance).',
        'Dysonans to stan dotkliwego dyskomfortu psychicznego i fizjologicznego, który pojawia się, gdy jednostka jednocześnie utrzymuje dwa sprzeczne elementy poznawcze (przekonania, opinie, wiedzę) lub gdy jej realne zachowanie stoi w rażącej sprzeczności z wyznawanym systemem wartości.',
        'W klasycznym eksperymencie Festingera i Carla Carlsmitha (1959) badani wykonywali przez godzinę skrajnie nudne czynności: przekręcali drewniane kołki o ćwierć obrotu. Następnie eksperymentator prosił ich, by skłamali kolejnemu uczestnikowi, mówiąc, że zadanie było fascynujące.',
        'Części badanych zapłacono za to kłamstwo 20 dolarów (duża kwota w 1959 r.), a części zaledwie 1 dolara. Gdy później badano ich prywatne, autentyczne opinie o zadaniu, stała się rzecz paradoksalna: osoby, które dostały 20 dolarów, szczerze przyznały, że zadanie było koszmarnie nudne (miały jasne zewnętrzne usprawiedliwienie: „skłamałem dla 20 dolców”). Natomiast osoby, które dostały 1 dolara, zaczęły szczerze twierdzić, że zadanie było całkiem ciekawe i pouczające!',
        'Dlaczego? Ponieważ 1 dolar był zbyt małą nagrodą, by usprawiedliwić kłamstwo. Ich umysł stanął w obliczu dysonansu: «Jestem uczciwym człowiekiem, a skłamałem za marnego dolara». Aby usunąć ten potworny dysonans, mózg nieświadomie zrekonstruował przekonanie: «Właściwie to wcale nie skłamałem, to zadanie naprawdę miało walory naukowe!».'
      ],
      subsections: [
        {
          title: 'Głęboka analiza słów Festingera: Anatomia samousprawiedliwienia',
          paragraphs: [
            'Festinger wykazał, że istnieją trzy drogi radzenia sobie z dysonansem:',
            'DROGA 1: Zmiana zachowania (np. rzucenie palenia, zwrot ukradzionych pieniędzy) — droga najuczciwsza, ale wymagająca potężnego wysiłku i samokontroli.\nDROGA 2: Zmiana pierwotnego przekonania pod wpływem nowych faktów — droga racjonalna, wymagająca pokory epistemicznej.\nDROGA 3: Dodanie nowych przekonań konsonantycznych (racjonalizacji) — droga najłatwiejsza, którą kora nowa wybiera w 90% przypadków.',
            'Kiedy zachowanie jest nieodwracalne (np. zdrada małżeńska, zakup niepotrzebnego drogiego auta, głosowanie na polityka, który okazał się oszustem), człowiek nie może cofnąć czasu. Wtedy machina racjonalizacji rusza pełną parą: «Ona sama mnie do tego zmusiła», «To auto to inwestycja w prestiż», «Inni politycy byliby jeszcze gorsi».'
          ],
          highlightBox: {
            title: 'Ostrzeżenie Festingera: Dlaczego inteligentni ludzie wierzą w bzdury',
            content: '„Im wyższy iloraz inteligencji i elokwencja człowieka, tym sprawniej potrafi on wygenerować wyrafinowane racjonalizacje redukujące dysonans. Inteligencja bez pokory staje się adwokatem diabła chroniącym własne błędy”.',
            type: 'warning'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-18-7-dysonans-lekarza',
        type: 'dual_perspectives',
        title: 'Dwie Perspektywy: Dr Tomasz — Kardiolog i Skryty Palacz',
        subtitle: 'Konfrontacja wiedzy naukowej z mechanizmami redukcji dysonansu',
        context: 'Ordynator oddziału kardiologii, palący paczkę papierosów dziennie w ukryciu na tarasie szpitala.',
        dualPerspective: {
          situation: 'Dr Tomasz właśnie przeprowadził udaną reanimację 48-letniego pacjenta z zawałem serca spowodowanym nikotynizmem. Pół godziny później wychodzi na papierosa.',
          personA: {
            name: 'Dr Tomasz (Głos Naukowca / Kardiologa)',
            quote: '„Każdy wdech dymu uszkadza śródbłonek naczyniowy, podnosi ciśnienie i przyspiesza agregację płytek krwi. Sam widzę te zwapniałe tętnice na stole operacyjnym”.',
            whatTheyKnow: 'Zna na pamięć setki badań o śmiertelności z powodu chorób układu krążenia.',
            whatTheyMiss: 'Ignoruje fakt, że jego własne naczynia wieńcowe podlegają dokładnie tym samym prawom fizjologii.',
            interpretation: '„Jestem hipokrytą, który oszukuje swoich pacjentów i niszczy własne serce”.',
            coreNeed: 'Spójność etyczna i poczucie autentyczności w roli lekarza.',
            fear: 'Wczesna śmierć, kompromitacja w środowisku medycznym i osierocenie dzieci.',
            action: 'Wyrzucenie napoczętej paczki do kosza z obietnicą: «od jutra rzucam».'
          },
          personB: {
            name: 'Dr Tomasz (Głos Układu Limbicznego i Racjonalizacji)',
            quote: '„Gdybym teraz nie zapalił po tej 6-godzinnej operacji, dostałbym zawału ze stresu. Papieros utrzymuje mnie w pionie”.',
            whatTheyKnow: 'Czuje natychmiastową ulgę i spadek napięcia mięśniowego po zaciągnięciu się nikotyną.',
            whatTheyMiss: 'Nie zauważa, że to sam głód nikotynowy wygenerował większość tego napięcia.',
            interpretation: '„Moja praca jest zbyt obciążająca, bym mógł żyć jak mnich. Należy mi się mała ulga”.',
            coreNeed: 'Błyskawiczne obniżenie poziomu kortyzolu i ucieczka przed psychicznym wyczerpaniem.',
            fear: 'Że bez nikotyny nie poradzi sobie z presją sali operacyjnej.',
            action: 'Wyciągnięcie papierosa, zapalenie i usprawiedliwienie: «Moje geny są silne, dziadek dożył setki».'
          },
          synthesis: 'Tomasz nie pali dlatego, że brakuje mu wiedzy medycznej. Pali, ponieważ jego kora przedczołowa mistrzowsko redukuje dysonans za pomocą fałszywego bilansu: «lepiej palić niż zwariować ze stresu». Dopóki nie znajdzie innych narzędzi regulacji układu nerwowego, dysonans będzie niszczył jego serce pod osłoną racjonalizacji.'
        },
        takeaway: 'Wiedza nie chroni przed autodestrukcją. Chroni przed nią dopiero gotowość do zmierzenia się z bólem dysonansu bez ucieczki w wymówki.'
      }
    },
    {
      id: 'sec-18-8',
      pageNumber: 22,
      sectionNumber: '18.8',
      title: 'Efekt Backfire (Efekt Odbicia) — Dlaczego Fakty Zagrażają Przekonaniom?',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Kiedy korygujemy fałszywe informacje, które są głęboko splecione z tożsamością człowieka, próba naprostowania błędu może nie tylko zawieść, lecz wręcz zabetonować pierwotne złudzenie.',
        author: 'Brendan Nyhan & Jason Reifler (When Corrections Fail: The Persistence of Political Misperceptions, 2010)'
      },
      paragraphs: [
        'W 2010 roku politolodzy Brendan Nyhan z Dartmouth College i Jason Reifler z University of Exeter opisali zjawisko, które wywołało konsternację wśród edukatorów i dziennikarzy: Efekt Odbicia (Backfire Effect).',
        'W serii rygorystycznych eksperymentów badacze podsuwali osobom o określonych sympatiach politycznych artykuły prasowe zawierające popularne mity (np. o obecności broni masowego rażenia w Iraku przed inwazją w 2003 r.). Następnie grupie eksperymentalnej przedstawiono jednoznaczną, autorytatywną korektę opartą na raporcie komisji rządu USA (raport Duelfera), który stwierdził brak broni masowego rażenia.',
        'Rezultat był szokujący: u osób silnie konserwatywnych zapoznanie się z oficjalnym raportem rządowym doprowadziło do WZROSTU przekonania, że Irak taką broń posiadał! Zamiast zweryfikować pogląd, badani zaczęli interpretować sam raport jako dowód na „spisek liberałów”, „ukrywanie faktów przez CIA” i jeszcze żarliwiej bronili swojej wersji.',
        'Neuroobrazowanie funkcjonalne (fMRI) przeprowadzone przez Jonasa Kaplana i Sama Harrisa wyjaśniło neurobiologiczne podłoże Backfire Effect: gdy kwestionowane są przekonania tożsamościowe, mózg wykazuje wzmożoną aktywację w ciele migdałowatym i grzbietowo-przyśrodkowej korze przedczołowej — tych samych obszarach, które reagują na widok szarżującego drapieżnika. Mózg traktuje podważenie poglądu politycznego lub religijnego jako próbę biologicznego zniszczenia organizmu.'
      ],
      subsections: [
        {
          title: 'Analiza słów Nyhana i Reiflera: Kiedy fakt staje się atakiem na przynależność plemienną',
          paragraphs: [
            'Nyhan i Reifler wykazali, że przekonania tożsamościowe nie pełnią funkcji deskryptywnej (nie służą do precyzyjnego opisu praw fizyki). Pełnią funkcję SPOIWEM PLEMIENNEGO (Tribal Epistemology). Wyznawanie określonego poglądu jest biletem wstępu do grupy rówieśniczej, partii lub rodziny.',
            'Jeśli przyjęcie faktu naukowego wiąże się z ryzykiem ostracyzmu i wykluczenia ze stada, układ limbiczny wybiera lojalność wobec grupy kosztem prawdy obiektywnej. Dla naszych przodków na sawannie wykluczenie ze stada oznaczało natychmiastową śmierć biologiczną. Dlatego ewolucja wyposażyła nas w mechanizm obrony przekonań za wszelką cenę.'
          ],
          highlightBox: {
            title: 'Wgląd Psychologiczny: Jak rozmawiać bez wywoływania Backfire Effect?',
            content: 'Nigdy nie zaczynaj od: „Mylisz się, oto dowody”. Najpierw zbuduj bezpieczeństwo tożsamościowe: potwierdź wartość rozmówcy, doceń jego intencje i zadawaj pytania sokratejskie: „Jakie warunki musiałyby zajść, abyś dopuścił możliwość alternatywnego wyjaśnienia?”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-18-8-petla-backfire',
        type: 'loop',
        title: 'Gdzie zaczęła się pętla? — Anatomia zerwania relacji podczas wigilijnej kłótni',
        subtitle: 'Jak zasypywanie faktami uruchomiło eskalację wrogości między ojcem a synem',
        context: 'Dyskusja przy rodzinnym stole o transformacji energetycznej i zmianach klimatycznych.',
        loopStages: [
          { stageNumber: 1, label: 'BODZIEC WYJŚCIOWY', description: 'Ojciec (62 lata, inżynier górnictwa) rzuca przy zupie uwagę: „Całe to ocieplenie klimatu to wymysł brukselskich urzędników, żeby zarobić na wiatrakach”.' },
          { stageNumber: 2, label: 'ATAK FAKTAMI', description: 'Syn (28 lat, programista) wyciąga smartfon i w agresywnym tonie mówi: „Tato, jak możesz być taki ciemny? 99,9% recenzowanych prac naukowych NASA i IPCC potwierdza antropogeniczne ocieplenie. Przeczytaj sobie ten raport!”.' },
          { stageNumber: 3, label: 'ALARM BIOLOGICZNY W EGO OJCA', description: 'Dla ojca raport NASA nie jest dokumentem naukowym — jest symbolem arogancji młodego pokolenia, które unieważnia 40 lat jego ciężkiej pracy w przemyśle i traktuje go jak ignoranta.' },
          { stageNumber: 4, label: 'REAKCJA ODBICIA (BACKFIRE)', description: 'Ojciec podnosi głos: „Ci twoi naukowcy biorą miliony z grantów, żeby pisać to, co każe im Bruksela! Prawdziwi inżynierowie wiedzą, jak wygląda rzeczywistość!”. Jego przekonanie o spisku ulega zabetonowaniu.' },
          { stageNumber: 5, label: 'ESKALACJA PERSONALNA', description: 'Syn krzyczy: „Z tobą się nie da rozmawiać, żyjesz w średniowieczu!”. Wstaje od stołu i trzaska drzwiami. Wigilia zrujnowana.' },
          { stageNumber: 6, label: 'PUNKT PRZEŁAMANIA PĘTLI', description: 'Syn mógł powiedzieć: „Tato, wiem, jak ogromną wiedzę masz o energetyce i ile dekad przepracowałeś w przemyśle. Ciekawi mnie, jak z perspektywy inżyniera widzisz dane o emisjach CO2 z ostatnich 50 lat?”. Szacunek dla tożsamości zdejmuje blokadę limbiczną.' }
        ],
        takeaway: 'Jeśli zaatakujesz czyjąś tożsamość za pomocą faktów, rozmówca odrzuci fakty, by ocalić tożsamość. Najpierw zbuduj most szacunku, a dopiero potem kładź na nim twarde dane.'
      },
      caseStudyRef: caseStudiesChapterEighteen[1]
    },
    {
      id: 'sec-18-9',
      pageNumber: 25,
      sectionNumber: '18.9',
      title: 'Selekcja Informacji i Komory Echa w Erze Cyfrowej',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'W dobie internetu mechanizmy Confirmation Bias zostały zwielokrotnione przez algorytmy mediów społecznościowych.',
        'Algorytmy rekomendacyjne podsuwają użytkownikowi treści zgodne z jego dotychczasowymi kliknięciami, tworząc tzw. komory echa (Echo Chambers) oraz bańki informacyjne (Filter Bubbles).',
        'W komorze echa człowiek słyszy wyłącznie powtórzenie własnych poglądów, co wywołuje fałszywą pewność, że całe społeczeństwo myśli dokładnie tak samo jak on.'
      ]
    },
    {
      id: 'sec-18-10',
      pageNumber: 28,
      sectionNumber: '18.10',
      title: 'Fakt vs Opinia vs Przekonanie vs Hipoteza Robocza',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Precyzja poznawcza wymaga wyraźnego rozgraniczenia kategorii informacji w umyśle.',
        'Fakt — zdarzenie obiektywne, empirycznie weryfikowalne („Zapis kardiograficzny wskazuje 80 uderzeń na minutę”); Opinia — subiektywna ocena estetyczna lub wartościująca („Ten obraz jest piękny”); Przekonanie — przyjęta struktura prawdy („Jestem przekonany, że to rozwiązanie jest najlepsze”); Hipoteza robocza — otwarte założenie testowe („Zakładam, że metoda X zadziała, ale zbieram dane”).',
        'Przekształcenie własnych przekonań w hipotezy robocze usuwa lęk przed pomyłką i otwiera przestrzeń do nauki.'
      ]
    },
    {
      id: 'sec-18-11',
      pageNumber: 31,
      sectionNumber: '18.11',
      title: 'Pętla Aktualizacji Przekonań (Belief Updating) i Wnioskowanie Bayesowskie',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Mózg jest maszyną wnioskowania bayesowskiego, która nieustannie minimalizuje błąd przewidywania. Kiedy stajemy się dogmatyczni, to nie rzeczywistość się myli — to my sztucznie wyciszamy sygnały zmysłowe, by chronić nasz wyjściowy model świata.',
        author: 'Karl Friston (The Free-Energy Principle: A Unified Brain Theory?, 2010)'
      },
      paragraphs: [
        'Wnioskowanie bayesowskie, wywodzące się z XVIII-wiecznego twierdzenia matematycznego wielebnego Thomasa Bayesa, stało się w ostatnich dekadach wiodącym paradygmatem w neuronauce kognitywnej (Model Przetwarzania Predykcyjnego — Predictive Processing, Andy Clark, Karl Friston).',
        'Zgodnie z tym modelem mózg nie jest biernym odbiornikiem bodźców ze świata. Jest potężnym generatorem hipotez, który nieustannie rzutuje na rzeczywistość swoje przewidywania (Priors — prawdopodobieństwo pierwotne). Dopływające bodźce zmysłowe są porównywane z tymi przewidywaniami, generując tzw. błąd przewidywania (Prediction Error).',
        'Wzór Bayesa opisuje, jak racjonalny umysł powinien aktualizować swoje przekonania: P(H|E) = [P(E|H) * P(H)] / P(E).',
        'W ujęciu psychologicznym oznacza to:',
        '1. PRAWDOPODOBIEŃSTWO PIERWOTNE (Prior): Z jaką siłą wierzyłem w dane twierdzenie ZANIM zobaczyłem nowe dowody?\n2. WIARYGODNOŚĆ DOWODU (Likelihood): Jak prawdopodobne jest zaobserwowanie takiego dowodu, jeśli moja hipoteza jest prawdziwa vs jeśli jest fałszywa?\n3. PRAWDOPODOBIEŃSTWO ZAKTUALIZOWANE (Posterior): Z jaką siłą powinienem wierzyć w twierdzenie PO zintegrowaniu nowego dowodu?',
        'Człowiek dojrzały poznawczo nigdy nie mówi: „To na 100% prawda” ani „To na 100% fałsz”. Posługuje się kategoriami prawdopodobieństwa: „Na podstawie obecnych danych oceniam prawdopodobieństwo tej hipotezy na 80%. Jeśli pojawią się rzetelne dowody przeciwne, bez wahania obniżę ten wskaźnik do 30%”.'
      ],
      subsections: [
        {
          title: 'Szczegółowa analiza słów Karla Fristona: Dogmatyzm jako patologia predykcji',
          paragraphs: [
            'Karl Friston z University College London wykazał, że w zdrowym mózgu waga przypisywana błędowi przewidywania (Precision Weighting) jest dynamicznie regulowana przez dopaminę i acetylocholinę. Gdy pojawia się nowy, twardy dowód, kora nowa aktualizuje model wyjściowy.',
            'W stanach dogmatyzmu ideologicznego lub paranoi układ nerwowy sztucznie zawyża precyzję pierwotnego przekonania do nieskończoności, redukując wagę błędu przewidywania do zera. Wtedy żadne fakty, wykresy ani zdjęcia nie są w stanie zmienić przekonania — umysł odrzuca sygnał zmysłowy jako „szum”.'
          ],
          highlightBox: {
            title: 'Zasada Johna Maynarda Keynesa: Elastyczność mistrza',
            content: 'Gdy krytyk zarzucił słynnemu ekonomiście zmianę stanowiska w kluczowej kwestii walutowej, Keynes odpowiedział: „Kiedy zmieniają się fakty, zmieniam zdanie. A pan co robi, panie kolego?”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-18-11-bayes-inwestor',
        type: 'what_if',
        title: 'Zmień jeden parametr: Od dogmatyka do badacza bayesowskiego',
        subtitle: 'Symulacja decyzji inwestycyjnej dyrektora finansowego wobec spadków spółki',
        context: 'Marek (dyrektor inwestycyjny) ulokował 2 miliony złotych w akcjach spółki technologicznej BioGreen.',
        whatIfOptions: {
          defaultScenario: 'Marek traktuje swój wybór jako sprawę honoru. Mimo kolejnych 4 fatalnych raportów kwartalnych dokupuje akcji, twierdząc, że rynek jest w błędzie i manipulowany.',
          options: [
            {
              id: 'c18-opt-b1',
              changeLabel: 'Zastosowanie reguły Bayesa: redukcja wagi hipotezy o 20% po każdym negatywnym raporcie audytorskim',
              resultingInterpretation: 'Marek uznaje, że prawdopodobieństwo sukcesu spółki spadło z 80% do 25%, co zdejmuje presję obrony własnego ego.',
              resultingBehavior: 'Zamyka pozycję ze stratą 15%, ratując 1,7 miliona złotych kapitału i inwestuje w zdywersyfikowany fundusz obligacji.',
              psychologicalImpact: 'Poczucie profesjonalizmu i ulgi: strata finansowa potraktowana jako koszt rynkowy, a nie zniszczenie tożsamości.'
            },
            {
              id: 'c18-opt-b2',
              changeLabel: 'Utrzymanie dogmatu tożsamościowego („Nigdy się nie mylę, jestem wybitnym inwestorem”) do samego końca',
              resultingInterpretation: 'Marek traktuje bankructwo spółki jako spisek konkurencji, wpadając w głęboki kryzys tożsamościowy i depresję.',
              resultingBehavior: 'Utrata całego kapitału, zwolnienie dyscyplinarne z funduszu i chroniczny lęk przed podejmowaniem jakichkolwiek decyzji.',
              psychologicalImpact: 'Całkowita katastrofa tożsamościowa spowodowana brakiem epistemicznej pokory.'
            }
          ]
        },
        takeaway: 'Prawdziwa siła umysłu nie polega na twardym trzymaniu się raz obranej opinii, lecz na płynnej kalibracji swoich przekonań proporcjonalnie do wagi nowych dowodów.'
      }
    },
    {
      id: 'sec-18-12',
      pageNumber: 34,
      sectionNumber: '18.12',
      title: 'Epistemiczna Pokora i Elastyczność Poznawcza',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Epistemiczna pokora (Epistemic Humility) to postawa uznająca ograniczenia własnego aparatu poznawczego i powszechność błędów myślowych.',
        'To zdolność do szczerze wypowiedzianych słów: „Nie wiem” oraz „Mogłem się pomylić”. Pokora epistemiczna nie oznacza braku przekonań, lecz brak dogmatyzmu.',
        'Człowiek o wysokiej elastyczności poznawczej potrafi trzymać silne opinie, lecz trzymać je słabo (strong opinions, weakly held), gotowy do ich korekty w każdej chwili pod wpływem rzetelnych faktów.'
      ]
    },
    {
      id: 'sec-18-13',
      pageNumber: 37,
      sectionNumber: '18.13',
      title: 'Przekonania a Emocje — Jak Myśli Generują Stany Fizjologiczne',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Myśli i przekonania mają bezpośrednie przełożenie na chemię mózgu i stan układu autonomicznego.',
        'Przekonanie o zagrożeniu („Ta sytuacja mnie zniszczy”) natychmiast aktywuje oś HPA (podwzgórze-przysadka-nadnercza), wyzwalając wyrzut kortyzolu i noradrenaliny.',
        'Z kolei zmiana przekonania na sprawcze („To trudne wyzwanie, ale mam narzędzia, by spróbować”) zmienia odpowiedź biologiczną: obniża poziom stresu i aktywuje dopaminową ścieżkę poszukiwawczą.'
      ]
    },
    {
      id: 'sec-18-14',
      pageNumber: 40,
      sectionNumber: '18.14',
      title: 'Przekonania a Zachowanie i Relacje Międzyludzkie',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Nasze przekonania o ludziach działają jak samospełniające się proroctwa w interakcjach społecznych.',
        'Jeśli wchodzisz do nowego zespołu z przekonaniem, że „Ludzie są zazdrośni i wrodzy”, Twoja mowa ciała staje się usztywniona, a wypowiedzi chłodne. Zespół reaguje na Twój chłód dystansem, co Twój umysł rejestruje jako „dowód” na pierwotną tezę.',
        'Świadoma zmiana przekonań wstępnych otwiera przestrzeń do budowania autentycznego zaufania.'
      ],
      caseStudyRef: caseStudiesChapterEighteen[4]
    },
    {
      id: 'sec-18-15',
      pageNumber: 43,
      sectionNumber: '18.15',
      title: '💡 BŁĘDNA INTUICJA: Pokazanie faktów zmieni zdanie rozmówcy',
      category: 'teoria',
      readingTimeMinutes: 12,
      paragraphs: [
        'Powszechna intuicja podpowiada nam, że jeśli ktoś myli się w jakiejś kwestii, wystarczy przedstawić mu wykresy, statystyki i twarde dane, by natychmiast przyznał się do błędu.',
        'Jak wykazaliśmy w sekcji poświęconej Backfire Effect, w przypadku przekonań powiązanych z tożsamością i ego, bezpośredni atak faktami wywołuje opór obronny.',
        'Skuteczna zmiana przekonań wymaga najpierw stworzenia poczucia bezpieczeństwa relacyjnego i zastosowania pytań sokratejskich.'
      ]
    },
    {
      id: 'sec-18-16',
      pageNumber: 46,
      sectionNumber: '18.16',
      title: '🔬 CO NADAL NIE JEST JASNE? Ograniczenia i Pytania Otwarte',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'W jakim stopniu głębokie przekonania kluczowe zapisane w strukturach podkorowych są podatne na modyfikację samą terapią poznawczą, a w jakim wymagają głębokich doświadczeń korektywnych w ciele?',
        'Trwają badania nad rola neuroplastyczności i wglądów doznaniowych w szybkiej restrukturyzacji schematów poznawczych.'
      ]
    },
    {
      id: 'sec-18-17',
      pageNumber: 48,
      sectionNumber: '18.17',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokoły Testowania Hipotez',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        '1. Zapisz swoje stresujące przekonanie jako hipotezę roboczą.',
        '2. Wypisz 3 dowody przeciwstawne z przeszłości.',
        '3. Zaprojektuj mały eksperyment behawioralny.',
        '4. Zaktualizuj subiektywne prawdopodobieństwo po zebraniu danych.'
      ],
      exerciseRef: selfExercisesChapterEighteen[0]
    },
    {
      id: 'sec-18-18',
      pageNumber: 50,
      sectionNumber: '18.18',
      title: 'Warsztat Samorozwojowy: Laboratorium Aktualizacji Przekonań',
      category: 'cwiczenia',
      readingTimeMinutes: 12,
      paragraphs: [
        'Poniżej znajduje się zestaw ćwiczeń dedykowanych dekonstrukcji Błędu Potwierdzenia, detoksowi od komór echa i restrukturyzacji schematów kluczowych.'
      ],
      exerciseRef: selfExercisesChapterEighteen[1]
    },
    {
      id: 'sec-18-19',
      pageNumber: 53,
      sectionNumber: '18.19',
      title: 'Most do Rozdziału 19 oraz Powiązania z Tomem I i II',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'Przekonania o świecie i o sobie tworzą bezpośredni fundament pod naszą samoocenę i poczucie skuteczności.',
        'W następnym rozdziale przejdziemy do szczegółowej analizy tego, jak umysł ocenia własną wartość, jak budować stabilne poczucie skuteczności (Self-Efficacy) oraz jak uwolnić się od pułapki nierealistycznych porównań społecznych.'
      ]
    },
    {
      id: 'sec-18-20',
      pageNumber: 55,
      sectionNumber: '18.20',
      title: 'Podsumowanie Rozdziału 2: Kluczowe Wglądy',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        '1. Przekonania to subiektywne interpretacje, a nie obiektywne fakty.',
        '2. Confirmation Bias każe nam zauważać tylko dane samopotwierdzające.',
        '3. Backfire Effect sprawia, że atak faktami wywołuje opór obronny.',
        '4. Dojrzałość poznawcza wymaga aktualizacji bayesowskiej i pokory epistemicznej.'
      ]
    },
    {
      id: 'sec-18-21',
      pageNumber: 58,
      sectionNumber: '18.21',
      title: 'Egzamin Końcowy Rozdziału 2: Przekonania i Sposób Patrzenia na Świat',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu architektury przekonań, zniekształceń poznawczych i aktualizacji bayesowskiej. Poniższy test zawiera pytania analityczne wymagające głębokiego zrozumienia opisywanych procesów.'
      ]
    }
  ]
};
