import { Chapter, ExamQuestion } from '../types/book';

export const chapterElevenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Zgodnie ze współczesną neuronauką poznawczą (prace Wolframa Schultza i Kenta Berridge’a), jaka jest FAKTYCZNA funkcja dopaminy w układzie nerwowym (Sekcja 11.4)?',
    topic: 'Mit i Prawda o Dopaminie: Wanting vs Liking',
    sectionRef: 'Sekcja 11.4',
    options: [
      { label: 'A', text: 'Dopamina jest „cząsteczką przyjemności i szczęścia”, która uwalnia się wyłącznie wtedy, gdy osiągamy cel i konsumujemy nagrodę.', isCorrect: false },
      { label: 'B', text: 'Dopamina odpowiada za POŻĄDANIE (Wanting) i antycypację nagrody (błąd predykcji nagrody), napędzając nas do wysiłku, podczas gdy za samą przyjemność i sytość (Liking) odpowiadają endogenne opioidy i receptory kannabinoidowe.', isCorrect: true },
      { label: 'C', text: 'Dopamina służy do spowalniania akcji serca podczas medytacji.', isCorrect: false },
      { label: 'D', text: 'Wytwarzana jest wyłącznie w żołądku podczas trawienia węglowodanów.', isCorrect: false }
    ],
    explanation: 'Dopamina to waluta motywacyjna, a nie nagroda sama w sobie. Szczyt dopaminowy pojawia się W TRAKCIE POLOWANIA na cel i w oczekiwaniu na nagrodę. W chwili osiągnięcia celu poziom dopaminy gwałtownie spada.',
    keyTakeaway: 'Dopamina to głód drogi, a nie sytość u celu.'
  },
  {
    id: 2,
    question: 'W Teorii Autodeterminacji Deciego i Ryana (SDT) motywacja wewnętrzna kwitnie tylko wtedy, gdy zaspokojone są trzy fundamentalne potrzeby psychologiczne (Sekcja 11.2):',
    topic: 'Trzy Filary Motywacji Wewnętrznej (SDT)',
    sectionRef: 'Sekcja 11.2',
    options: [
      { label: 'A', text: 'Pieniądze, Władza i Prestiż.', isCorrect: false },
      { label: 'B', text: 'Autonomia (poczucie wyboru), Kompetencja (poczucie rozwoju i mistrzostwa) oraz Relacyjność/Przynależność (poczucie więzi z innymi).', isCorrect: true },
      { label: 'C', text: 'Strach przed karą, Kofeina i Rygorystyczny regulamin.', isCorrect: false },
      { label: 'D', text: 'Izolacja społeczna, Monotonia i Brak informacji zwrotnej.', isCorrect: false }
    ],
    explanation: 'Zewnętrzne marchewki i kije (nagrody finansowe, groźby) mogą wymusić chwilową uległość, ale niszczą motywację wewnętrzną (tzw. efekt podkopania / Overjustification Effect). Trwały napęd wymaga wolności, poczucia sprawczości i sensu.',
    keyTakeaway: 'Ludzie nie potrzebują poganiacza z batem; potrzebują autonomii, poczucia wpływu i sensu.'
  },
  {
    id: 3,
    question: 'Na czym polega zasada „Kosztu Aktywacji” (Activation Energy) w pokonywaniu prokrastynacji (Sekcja 11.8 i 11.9)?',
    topic: 'Energia Aktywacji i Zasada 2 Minut',
    sectionRef: 'Sekcja 11.9',
    options: [
      { label: 'A', text: 'Wypiciu trzech puszek napoju energetycznego przed rozpoczęciem pracy.', isCorrect: false },
      { label: 'B', text: 'Mózg zużywa najwięcej energii metabolicznej na sam moment przejścia ze stanu bezruchu do działania. Zmniejszenie progu wejścia (np. „będę pisał raport tylko przez 2 minuty”) pozwala przełamać opór, po czym zadziała bezwładność poznawcza.', isCorrect: true },
      { label: 'C', text: 'Opłaceniu z góry rocznego abonamentu na siłownię.', isCorrect: false },
      { label: 'D', text: 'Zmuszaniu się do pracy przez 14 godzin bez przerwy.', isCorrect: false }
    ],
    explanation: 'Podobnie jak w chemii, najtrudniejsza jest iskra zapłonowa. Gdy kora przedczołowa widzi przed sobą „napisanie 100 stron książki”, wchodzi w paraliż. Gdy widzi „otwarcie pliku i napisanie jednego zdania”, opór amygdali znika.',
    keyTakeaway: 'Nie musisz mieć ochoty na całe zadanie. Wystarczy, że zrobisz pierwszy mikro-krok.'
  },
  {
    id: 4,
    question: 'Dlaczego prokrastynacja NIE JEST problemem ze złym zarządzaniem czasem, lecz problemem z (Sekcja 11.11):',
    topic: 'Prokrastynacja jako Nieadaptacyjna Regulacja Emocji',
    sectionRef: 'Sekcja 11.11',
    options: [
      { label: 'A', text: 'Brakiem odpowiednio drogiego skórzanego kalendarza.', isCorrect: false },
      { label: 'B', text: 'Regulacją trudnych stanów emocjonalnych (lęk przed oceną, lęk przed porażką, nuda, wstyd) — ucieczka w scrollowanie social mediów przynosi natychmiastową ulgę afektywną kosztem długofalowego celu.', isCorrect: true },
      { label: 'C', text: 'Zbyt szybkim obrotem Ziemi wokół własnej osi.', isCorrect: false },
      { label: 'D', text: 'Niskim ilorazem inteligencji matematycznej.', isCorrect: false }
    ],
    explanation: 'Prokrastynator doskonale wie, jak zaplanować czas w kalendarzu. Odsuwa zadanie, bo samo myślenie o nim wywołuje somatyczny ból i dyskomfort w ciele migdałowatym. Ucieczka w telefon to znieczulenie emocjonalne.',
    keyTakeaway: 'Nie naprawiaj kalendarza — zaopiekuj się lękiem, który paraliżuje twoje działanie.'
  },
  {
    id: 5,
    question: 'W koncepcji Jamesa Cleara i Stephena Guise’a, dlaczego budowanie „Systemu” jest nieskończenie skuteczniejsze niż poleganie na samym „Celu” (Sekcja 11.6)?',
    topic: 'Cele a Systemy Codziennego Działania',
    sectionRef: 'Sekcja 11.6',
    options: [
      { label: 'A', text: 'Ponieważ cele są całkowicie niepotrzebne w życiu.', isCorrect: false },
      { label: 'B', text: 'Zwycięzcy i przegrani mają dokładnie te same cele (np. wygrać złoty medal). O sukcesie decyduje nie marzenie o mecie, lecz jakość codziennego, powtarzalnego procesu (systemu), który wykonujesz niezależnie od nastroju.', isCorrect: true },
      { label: 'C', text: 'Systemy komputerowe potrafią pisać książki bez udziału człowieka.', isCorrect: false },
      { label: 'D', text: 'Cele sprawiają, że człowiek traci wzrok.', isCorrect: false }
    ],
    explanation: 'Cel daje kierunek, ale to system tworzy postęp. Osiągnięcie celu przynosi ulgę na 10 minut, po czym wraca pustka. Zakochiwanie się w codziennym procesie uwalnia od wiecznego czekania na szczęście.',
    keyTakeaway: 'Nie wznosisz się do poziomu swoich celów — spadasz do poziomu swoich systemów.'
  }
];

export const chapterEleven: Chapter = {
  number: 11,
  title: 'Motywacja: Dlaczego Chcemy, ale Nie Robimy',
  subtitle: 'Biochemia napędu, neurobiologia dopaminy, rozbijanie paraliżu i inżynieria systemów działania',
  leadParagraph: 'Znasz to uczucie: w niedzielę wieczorem siedzisz na kanapie, pełen wzniosłych idei i postanowień. Od jutra zdrowa dieta, regularne bieganie, praca nad książką i zero scrollowania telefonu. W poniedziałek o 16:30 cała ta wspaniała motywacja wyparowuje jak kamfora, a Ty lądujesz z paczką chipsów przed serialem. Dlaczego człowiek jest jedyną istotą na Ziemi, która potrafi zaplanować swój sukces, a potem metodycznie go sabotować? Pora zajrzeć pod maskę układu napędowego.',
  totalEstimatedPages: 50,
  sections: [
    {
      id: 'sec-11-1',
      pageNumber: 496,
      sectionNumber: '11.1',
      title: 'Czym jest motywacja? Od biologicznego popędu do woli sensu',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Motywacja to to, co pozwala ci zacząć. Nawyk to to, co pozwala ci wytrwać.',
        author: 'Jim Ryun'
      },
      paragraphs: [
        'Wyobraź sobie lwa na sawannie. Kiedy jest syty, śpi 18 godzin na dobę pod drzewem akacji. Żaden lew nie ma wyrzutów sumienia z powodu braku samorozwoju, żaden nie wstaje o 5:00 rano, by „zoptymalizować swoje polowanie”. Zwierzę działa wyłącznie pod wpływem bezpośrednich sygnałów homeostatycznych: głód, pragnienie, zagrożenie drapieżnikiem, popęd rozrodczy.',
        'Człowiek to jedyny organizm, który potrafi cierpieć z powodu braku motywacji do zadań, których skutki pojawią się za 10 lat (emerytura, doktorat, profilaktyka kardiologiczna). Nasz mózg został ukształtowany w środowisku natychmiastowego powrotu (Immediate Return Environment), podczas gdy żyjemy w społeczeństwie opóźnionego powrotu (Delayed Return Environment).',
        'Kiedy siadasz do pisania pracy dyplomowej, Twoja kora przedczołowa wie, że to ważne. Ale Twoje prążkowie i układ limbiczny pytają: „Gdzie jest natychmiastowa glukoza? Gdzie jest lajk? Gdzie jest nagroda?”. Ponieważ nagroda jest odsunięta o rok, układ nerwowy odcina zasilanie energetyczne. Motywacja to nie mistyczna siła woli — to bilans chemiczny w obwodzie nagrody.'
      ]
    },
    {
      id: 'sec-11-2',
      pageNumber: 500,
      sectionNumber: '11.2',
      title: 'Motywacja wewnętrzna a zewnętrzna: Pułapka marchewki i kija',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Przez dziesięciolecia przemysł i edukacja opierały się na prostym behawioryzmie B.F. Skinnera: daj człowiekowi premię finansową (marchewka) lub postrasz zwolnieniem (kij), a będzie pracował efektywnie. Edward Deci i Richard Ryan z Uniwersytetu w Rochester obalili ten dogmat w serii genialnych eksperymentów.',
        'W słynnym badaniu studenci układali wciągające łamigłówki przestrzenne SOMA. Jednej grupie płacono dolara za każdą ułożoną figurę, drugiej nie płacono nic. W przerwie badacz wychodził na 8 minut, zostawiając badanych samych w pokoju. Co zrobili studenci, którym płacono? Natychmiast odkładali klocki i sięgali po gazety! Grupa, która nie dostawała pieniędzy, w czasie wolnym z fascynacją nadal układała klocki.',
        'Zjawisko to nazwano Efektem Podkopania (Overjustification Effect). Gdy za czynność, która daje wewnętrzną radość, wprowadzisz zewnętrzną nagrodę pieniężną, mózg redefiniuje swoje działanie: „Nie robię tego dlatego, że to lubię. Robię to dla pieniędzy”. Gdy nagroda znika, znika cała motywacja.'
      ]
    },
    {
      id: 'sec-11-3',
      pageNumber: 504,
      sectionNumber: '11.3',
      title: 'Anatomia nagrody: Jak mózg wycenia wartość wysiłku',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Zanim Twój palec kliknie „Rozpocznij kurs” lub Twoje nogi wstaną z fotela, w jądrze półleżącym (Nucleus Accumbens) i korze oczodołowo-czołowej (OFC) zachodzi błyskawiczna kalkulacja ekonometryczna.',
        'Wzór na subiektywną wartość zadania można uprościć do równania: Wartość = (Wielkość Nagrody × Prawdopodobieństwo Sukcesu) / (Opóźnienie w Czasie × Koszt Energetyczny).',
        'Zauważ mianownik tego ułamka: im dalej w czasie znajduje się nagroda i im większego wysiłku fizjologicznego wymaga działanie, tym bliższa zeru staje się motywacja w chwili obecnej. Z kolei smartfon w Twojej kieszeni ma mianownik równy zero: koszt to jedno przesunięcie kciuka (mikrodżul energii), a opóźnienie wynosi 0,001 sekundy. W pojedynku z książką smartfon wygrywa chemicznie w przedbiegach.'
      ]
    },
    {
      id: 'sec-11-4',
      pageNumber: 508,
      sectionNumber: '11.4',
      title: 'Dopamina bez mitu: Cząsteczka poszukiwania, nie spełnienia',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Internet zalała fala pseudonaukowych poradników o „detoksie dopaminowym” przedstawiających ten neuroprzekaźnik jako toksycznego wroga, którego należy „wyzerować”. To kompletne nieporozumienie biologiczne. Bez dopaminy leżałbyś na podłodze, niezdolny do sięgnięcia po szklankę wody, umierając z pragnienia obok kranu.',
        'Przełomowe badania Kenta Berridge’a z Uniwersytetu Michigan ujawniły fundamentalny podział w układzie nagrody:',
        '1. Pożądanie (Wanting) — sterowane przez szlak mezolimbiczny dopaminy. To głód, ciekawość, niepokój poszukiwania, napęd do działania.',
        '2. Lubienie (Liking) — sterowane przez tzw. „wysepki hedonistyczne” (Hedonic Hotspots) wykorzystujące endogenne opioidy i kannabinoidy. To czysta zmysłowa rozkosz smaku czekolady na języku czy ciepła kąpieli.',
        'Dopamina uwalnia się na długo przed nagrodą — uwalnia się na widok WSKAZÓWKI (Cue). Kiedy widzisz powiadomienie na ekranie, Twój mózg nie wie jeszcze, co tam jest, ale dopamina już wystrzeliła. To obietnica nagrody, a nie sama nagroda, trzyma Cię w szachu.'
      ]
    },
    {
      id: 'sec-11-5',
      pageNumber: 512,
      sectionNumber: '11.5',
      title: 'Dlaczego motywacja spada? Wypłukanie afektu i błąd predykcji',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Kiedy rozpoczynasz nowy projekt — kupujesz karnet na siłownię, zapisujesz się na kurs hiszpańskiego — Twój mózg doświadcza tzw. Dodatniego Błędu Predykcji Nagrody (Positive Reward Prediction Error). Fantazjujesz o nowym, wysportowanym ciele, a kora wzrokowa maluje zachwycające obrazy. Dopamina szybuje.',
        'Jednak po trzech tygodniach hiszpański okazuje się nudnym wkuwaniem nieregularnych czasowników, a siłownia to zakwasy i bolesne wstawanie o 6:00 rano. Rzeczywistość okazuje się gorsza od dopaminowej iluzji. Następuje Ujemny Błąd Predykcji: poziom dopaminy spada poniżej linii bazowej.',
        'W tym momencie 90% ludzi rzuca ręcznik, mówiąc: „Wypaliłem się, to chyba nie moja pasja”. Prawda jest prosta: wyczerpał się darmowy kredyt dopaminowy nowości. Prawdziwe budowanie umiejętności zaczyna się dopiero wtedy, gdy gaśnie ekscytacja początkiem.'
      ]
    },
    {
      id: 'sec-11-6',
      pageNumber: 516,
      sectionNumber: '11.6',
      title: 'Cel a system: Dlaczego marzenia przegrywają z rutyną',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Społeczeństwo ma obsesję na punkcie celów. Mówi się nam: „Mierz w gwiazdy”, „Wizualizuj sukces”, „Napisz swój cel na tablicy marzeń”.',
        'Zastanów się jednak: każdy sportowiec jadący na igrzyska olimpijskie ma dokładnie ten sam cel — zdobyć złoty medal. Każdy student ma ten sam cel — zdać egzamin. Skoro cel jest identyczny u zwycięzców i przegranych, to nie cel decyduje o wyniku!',
        'Różnicę stanowi SYSTEM. Cel to pożądany punkt w przyszłości; system to to, co robisz o 7:15 rano we wtorek, kiedy pada deszcz i nikomu nie chce się wychodzić z łóżka. Człowiek zorientowany wyłącznie na cel żyje w stanie ciągłej porażki („Jeszcze nie osiągnąłem celu, więc jestem niepełny”), a po jego osiągnięciu doświadcza pustki post-sukcesowej. Człowiek zorientowany na system kocha sam proces biegania czy pisania kodu.'
      ]
    },
    {
      id: 'sec-11-7',
      pageNumber: 520,
      sectionNumber: '11.7',
      title: 'Rozbijanie zadania: Architektura mikro-kroków poznawczych',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Kiedy Twoja kora przedczołowa widzi na liście to-do pozycję: „Napisać biznesplan nowej firmy”, Twoje ciało migdałowate reaguje tak, jakby zobaczyło mamuta. Zadanie jest zbyt wielkie, zbyt wieloznaczne i niesie ryzyko porażki. Układ nerwowy wywołuje paraliż obronny.',
        'Mistrzostwo motywacyjne polega na redukcji skali zadania do momentu, w którym amygdala przestaje widzieć w nim jakiekolwiek zagrożenie:',
        'Krok 1 (Zbyt wielki): „Napiszę dziś rozdział książki”.',
        'Krok 2 (Nadal trudny): „Napiszę 500 słów”.',
        'Krok 3 (Mikro-krok neutralny): „Otworzę laptopa, uruchomię edytor tekstu i napiszę jedno zdanie podsumowujące dzisiejszy obiad”.',
        'Zauważ: napisanie jednego zdania nie kosztuje żadnego wysiłku woli. Ale gdy usiądziesz przed otwartym plikiem i napiszesz pierwsze słowa, następuje zjawisko bezwładności poznawczej (Efekt Zeigarnik). Mózg nie lubi niedokończonych pętli i sam z siebie chce pisać dalej.'
      ]
    },
    {
      id: 'sec-11-8',
      pageNumber: 524,
      sectionNumber: '11.8',
      title: 'Początek działania: Dlaczego motywacja przychodzi PO starcie',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Największym kłamstwem kultury motywacyjnej jest sekwencja: Poczekaj na motywację → Zacznij działać → Osiągnij rezultat.',
        'W rzeczywistości biologicznej ta pętla biegnie dokładnie w odwrotnym kierunku: Zacznij działać (bez motywacji) → Zauważ mikroskopijny postęp → Otrzymaj wyrzut dopaminy → Poczuj motywację do kontynuacji!',
        'Działanie jest przyczyną motywacji, a nie jej skutkiem. Czekanie, aż „poczujesz ochotę” na posprzątanie garażu czy naukę statystyki, to czekanie na śnieg w lipcu. Prawdziwi profesjonaliści nie czekają na wenę; oni siadają do biurka, a wena dołącza do nich około piętnastej minuty pracy.'
      ]
    },
    {
      id: 'sec-11-9',
      pageNumber: 528,
      sectionNumber: '11.9',
      title: 'Koszt aktywacji: Zasada tarcia i 20 sekund',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Shawn Achor z Harvardu opisał w książce „Przewaga szczęścia” Zasadę 20 Sekund. Zauważył, że jeśli chciał zacząć regularnie ćwiczyć grę na gitarze, ale instrument stał schowany w futerale w szafie na piętrze, przejście przez pokój, wyjęcie futerału i otwarcie zamków zajmowało około 20 sekund. To wystarczyło, by zmęczony mózg zrezygnował i włączył telewizor.',
        'Co zrobił Achor? Wyjął gitarę z futerału i postawił ją na stojaku na samym środku salonu. Koszt aktywacji spadł z 20 sekund do 1 sekundy. Wystarczyło wyciągnąć rękę. W ciągu kolejnych trzech tygodni ćwiczył codziennie.',
        'Jednocześnie, by przestać oglądać telewizję, wyjął baterie z pilota i schował je w szufladzie w kuchni. Aby włączyć telewizor, musiał wstać, pójść do kuchni, włożyć baterie. Te 20 sekund tarcia uratowało mu setki godzin życia. Kontroluj tarcie środowiskowe, a przejmiesz kontrolę nad nawykami.'
      ]
    },
    {
      id: 'sec-11-10',
      pageNumber: 532,
      sectionNumber: '11.10',
      title: 'Natychmiastowa nagroda: Parowanie pokus i mosty dopaminowe',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Katy Milkman z Wharton School of Business badała technikę zwaną Parowaniem Pokus (Temptation Bundling).',
        'Zasada jest genialnie prosta: Wolno ci połączyć natychmiastowe źródło przyjemności dopaminowej z czynnością, która wymaga wysiłku i samodyscypliny.',
        'Przykłady z życia: Wolno ci słuchać Twojego ulubionego, wciągającego podcastu kryminalnego TYLKO I WYŁĄCZNIE wtedy, gdy Twoje nogi biegną na bieżni. Wolno ci pić pyszną, drogą kawę karmelową TYLKO I WYŁĄCZNIE wtedy, gdy sprawdzasz trudne maile od księgowej.',
        'W ten sposób mózg tworzy warunkowanie klasyczne: niechciane zadanie przestaje być karą, ponieważ staje się jedyną bramą prowadzącą do pożądanej nagrody.'
      ]
    },
    {
      id: 'sec-11-11',
      pageNumber: 536,
      sectionNumber: '11.11',
      title: 'Prokrastynacja: Anatomia znieczulenia lęku',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Dr Tim Pychyl, czołowy światowy badacz prokrastynacji, powtarza: Prokrastynacja nie jest lenistwem. Prokrastynacja to desperacka, nieadaptacyjna próba poradzenia sobie ze stresem emocjonalnym.',
        'Gdy odkładasz napisanie trudnego maila do klienta, to nie dlatego, że nie masz siły uderzać w klawiaturę. Odkładasz to, ponieważ ten mail budzi w Tobie lęk przed odrzuceniem, poczucie winy z powodu opóźnienia lub wstyd przed własną niedoskonałością.',
        'Kiedy zamykasz okno programu pocztowego i otwierasz TikToka lub zaczynasz nerwowo ścierać kurze z półek, Twój poziom kortyzolu natychmiast spada o 30%. Twój mózg uczy się błyskawicznego powiązania: „Ucieczka od zadania = natychmiastowa ulga i bezpieczeństwo”. Niestety, ta ulga jest pożyczką na lichwiarski procent. Za dwie godziny lęk wraca ze zdwojoną siłą, wzbogacony o potworne poczucie winy z powodu zmarnowanego czasu.'
      ]
    },
    {
      id: 'sec-11-12',
      pageNumber: 540,
      sectionNumber: '11.12',
      title: 'Wielkie Studium Przypadku: Pętla „Od Jutra Zaczynam” Karola',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Głęboka analiza psychologiczna człowieka uwięzionego w permanentnej prokrastynacji i perfekcjonizmie. Zobaczmy, jak Karol przeszedł od paraliżu do ukończenia kluczowego projektu życiowego.'
      ],
      caseStudyRef: {
        id: 'cs-ch11-prokrastynacja',
        title: 'Brakujący Pierwszy Krok: Jak Karol Pokonał 3 Lata Zwlekania',
        subtitle: 'Wiwisekcja ucieczki w seriale, lęku przed oceną i narodzin dyscypliny opartej na mikro-krokach',
        protagonist: 'Karol, Senior UX Designer (35 lat)',
        context: 'Mieszkanie Karola, niedziela wieczorem przed ostatecznym deadlinem na oddanie portfolio na stanowisko marzeń.',
        story: [
          'Karol od trzech lat marzył o awansie do międzynarodowego studia projektowego. Miał wybitny zmysł estetyczny i wielki talent. Wszystko rozbijało się o jeden warunek: musiał przygotować nowe, przekrojowe portfolio w serwisie Behance.',
          'Każdy weekend wyglądał identycznie: w piątek Karol z dumą kupował zdrową żywność, sprzątał biurko i zapowiadał narzeczonej: „W tę sobotę zamknę sprawę portfolio”. W sobotę rano siadał przed monitorem. Otwierał plik Figmy. I wtedy pojawiało się to uczucie — zimny ucisk w klatce piersiowej.',
          'W jego głowie odpalał się głos Wewnętrznego Krytyka: „To musi być genialne. Jeśli to portfolio nie zachwyci dyrektora kreatywnego, wszyscy przekonają się, że jesteś przeciętny”. Perfekcjonizm paraliżował każdy ruch. Aby uśmierzyć ten lęk, Karol myślał: „Zanim zacznę, muszę jeszcze przejrzeć trendy na Dribbble”.',
          'Z Dribbble przechodził na YouTube, stamtąd na Reddit, a o 18:00 czuł się tak zmęczony i zrezygnowany, że zamawiał pizzę i włączał Netflixa, obiecując sobie solennie: „Zacznę jutro z samego rana”. W niedzielę wieczorem tonął w potwornym poczuciu wstydu.',
          'Przełom nastąpił podczas sesji z psychologiem poznawczo-behawioralnym. Terapeuta zapytał: „Karol, a gdybyś miał napisać najbrzydszy, najbardziej żałosny opis jednego projektu, jaki potrafisz stworzyć w 5 minut, bez prawa do poprawiania?”. Karol zaśmiał się przez łzy. Zgodził się.',
          'Nastawił stoper na 5 minut. Napisał trzy koślawe akapity. Nagle poczuł, jak napięcie zeszło z jego karku. Stoper zadzwonił, ale Karol nie odszedł od biurka. Poprawił dwa zdania. Dodał jedno zdjęcie. Po dwóch godzinach pierwszy projekt był gotowy. Zrozumiał, że jego problemem nie był brak talentu, lecz nierealistyczny terror perfekcjonizmu.'
        ],
        decisionTaken: 'Karol dał sobie prawo do „beznadziejnej pierwszej wersji roboczej” (Crappy First Draft) i zredukował czas pierwszej sesji do 5 minut.',
        whatProtagonistSaw: 'Karol widział siebie jako lenia bez silnej woli, który marnuje swoje życie.',
        whatWasMissed: 'Że jego prokrastynacja była tarczą obronną przed śmiertelnym lękiem przed porażką i zdemaskowaniem (Syndrom Oszusta).',
        psychologicalAnalysis: {
          coreMechanism: 'Ucieczka w prokrastynację jako obronne unikanie somatycznego bólu lęku przed porażką.',
          cognitiveBiases: [
            { name: 'Myślenie czarno-białe (Dychotomiczne)', description: '„Albo moje portfolio będzie arcydziełem, albo nie ma sensu w ogóle go pokazywać”.', impact: 'Całkowity paraliż twórczy.' },
            { name: 'Dyskonto hiperboliczne', description: 'Natychmiastowa ulga z oglądania serialu miała dla mózgu większą wartość niż sukces za 3 miesiące.', impact: 'Chroniczne odsuwanie startu.' }
          ],
          defenseMechanisms: [
            { name: 'Racjonalizacja', explanation: '„Muszę najpierw zrobić research trendów, to przecież też praca”.' }
          ],
          emotionalDynamic: 'Głęboki wstyd i lęk przed oceną zamaskowane pod maską prokrastynacji.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Planowanie długofalowe', activationState: 'Wyłączona pod naporem lęku' },
            { region: 'Prążkowie brzuszne (Ventral Striatum)', role: 'Poszukiwanie natychmiastowej ulgi', activationState: 'Zasysane przez smartfon i seriale' }
          ],
          neurotransmitters: [
            { name: 'Dopamina', roleInScenario: 'Spalała się na poszukiwaniu nowych bodźców w internecie zamiast na tworzeniu portfolio' }
          ],
          biologicalTimeline: [
            { timeMs: 'Otwarcie pliku portfolio', process: 'Błyskawiczny skok kortyzolu i chęć ucieczki w YouTube.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Zezwolenie na Brzydotę (Shitty First Draft)', script: '„Robię to teraz na 30% możliwości, byle tylko ruszyć z miejsca”.', rationale: 'Usuwa perfekcjonistyczny paraliż kory przedczołowej.' }
          ]
        },
        alternativePath: 'Gdyby Karol nie zmienił paradygmatu, za kolejne 3 lata nadal siedziałby w tym samym dziale, zgorzkniały, zazdroszcząc sukcesu młodszym kolegom.',
        readerQuestion: 'Jaki projekt życiowy odkładasz od miesięcy tylko dlatego, że boisz się, że pierwsza próba nie będzie doskonała?',
        keyTakeaway: 'Zrobione jest nieskończenie lepsze od doskonałego. Pierwsza wersja czegokolwiek ma prawo być fatalna — jej jedynym zadaniem jest po prostu ISTNIEĆ.'
      }
    },
    {
      id: 'sec-11-13',
      pageNumber: 544,
      sectionNumber: '11.13',
      title: 'Projekt 7 Dni: Praktyczny reset motywacyjny',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Zintegrujmy teorię tego rozdziału w konkretnym, 7-dniowym protokole przełamywania bezwładności:',
        'Dzień 1: Wybierz JEDNO zadanie, które odkładasz najdłużej. Zdefiniuj dla niego mikro-krok trwający dokładnie 2 minuty.',
        'Dzień 2: Usuń tarcie środowiskowe (przygotuj biurko, wyciągnij dokumenty wieczorem, połóż ubrania do biegania przy łóżku).',
        'Dzień 3: Zastosuj Parowanie Pokus (połącz trudne zadanie z ulubionym podcastem lub napojem).',
        'Dzień 4: Wykonaj zadanie z nastawieniem na „30% jakości” — zakaz poprawiania czegokolwiek w pierwszej fazie.',
        'Dzień 5: Wprowadź zasadę „Nigdy nie opuszczaj dwóch dni z rzędu”. Jeśli wypadniesz z rytmu w czwartek, w piątek zrób choćby 60 sekund.',
        'Dzień 6: Zmierz postęp — zapisz w zeszycie liczbę wykonanych mikro-kroków, dając sobie dopaminowy zastrzyk dumy.',
        'Dzień 7: Świętowanie procesu — nagródź się nie za wynik, lecz za wierność systemowi.'
      ]
    },
    {
      id: 'sec-11-14',
      pageNumber: 548,
      sectionNumber: '11.14',
      title: 'Motywacja po Tomie I, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'W tym rozdziale odczarowaliśmy iluzję motywacji jako kapryśnego natchnienia. Zrozumieliśmy, że dopamina to neuroprzekaźnik poszukiwania, a nie spełnienia, że systemy wygrywają z celami, a prokrastynacja jest ucieczką przed trudną emocją.',
        'Jednak sama motywacja — nawet najlepiej zaprojektowana — wciąż wymaga od czasu do czasu świadomej energii metabolicznej kory przedczołowej. Co zrobić, aby pożądane zachowanie stało się całkowicie bezwysiłkowe? Aby mózg wykonywał je na automatycznym pilocie, tak jak mycie zębów czy wiązanie butów?',
        'W Rozdziale 12 wejdziemy w świat NAWYKÓW — zbadamy pętlę wskazówka-rutyna-nagroda, nauczymy się hakować niechciane automatyzmy i poznamy potęgę tożsamości behawioralnej.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 11.'
      ]
    }
  ]
};
