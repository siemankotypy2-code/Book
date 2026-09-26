import { Chapter, ExamQuestion } from '../types/book';

export const chapterNineExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Czym jest zjawisko Gaslightingu (Sekcja 9.5) i dlaczego jest ono uznawane za jedną z najbardziej niszczycielskich form przemocy psychologicznej?',
    topic: 'Gaslighting i Kwestionowanie Zmysłów',
    sectionRef: 'Sekcja 9.5',
    options: [
      { label: 'A', text: 'Używaniem gazu łzawiącego podczas manifestacji ulicznych.', isCorrect: false },
      { label: 'B', text: 'Systematycznym podważaniem zdolności poznawczych ofiary („Wymyślasz to”, „Jesteś przewrażliwiona”, „Nic takiego nie miało miejsca”), prowadzącym do utraty zaufania do własnej pamięci i zmysłów.', isCorrect: true },
      { label: 'C', text: 'Gwałtownym wybuchem gniewu w miejscu publicznym.', isCorrect: false },
      { label: 'D', text: 'Oszustwem finansowym polegającym na fałszowaniu faktur.', isCorrect: false }
    ],
    explanation: 'Gaslighting uderza bezpośrednio w aparat weryfikacji rzeczywistości (Tom I, Rozdział 4: Percepcja i Rozdział 5: Pamięć). Ofiara zaczyna wątpić we własną poczytalność i staje się w 100% zależna od wersji wydarzeń podawanej przez manipulatora.',
    keyTakeaway: 'Kiedy ktoś wmawia ci, że nie widziałeś tego, co widziałeś, stawką jest twoja autonomia psychiczna.'
  },
  {
    id: 2,
    question: 'W jaki sposób manipulatorzy wykorzystują „Sztuczną Presję Czasu” (Artificial Urgency) przeciwko korze przedczołowej ofiary (Sekcja 9.2)?',
    topic: 'Presja Czasu i Ograniczenie Zasobów Poznawczych',
    sectionRef: 'Sekcja 9.2',
    options: [
      { label: 'A', text: 'Zmuszają ofiarę do noszenia dwóch zegarków na ręku.', isCorrect: false },
      { label: 'B', text: 'Wywołują skok kortyzolu i panikę („Musisz podpisać teraz, za 10 minut oferta przepada!”), uniemożliwiając włączenie analitycznego Systemu 2 i konsultację z kimkolwiek z zewnątrz.', isCorrect: true },
      { label: 'C', text: 'Uruchamiają stoper na telefonie bez dźwięku.', isCorrect: false },
      { label: 'D', text: 'Płacą ofierze za każdą sekundę zwłoki.', isCorrect: false }
    ],
    explanation: 'System 2 (Tom I, Rozdział 1) potrzebuje czasu i tlenu metabolicznego. W warunkach sztucznego pośpiechu stery przejmuje zalękniona amygdala, co zmusza do podjęcia bezkrytycznej decyzji uległej.',
    keyTakeaway: 'Jeśli ktoś mówi, że musisz zdecydować natychmiast — jedyną właściwą odpowiedzią jest „NIE”.'
  },
  {
    id: 3,
    question: 'Na czym polega faza „Love Bombingu” (Bombardowania Miłością) w toksycznych relacjach interpersonalnych i sektach (Sekcja 9.10)?',
    topic: 'Love Bombing i Zalew Dopaminowy',
    sectionRef: 'Sekcja 9.10',
    options: [
      { label: 'A', text: 'Na rzucaniu bukietami kwiatów z dużej wysokości.', isCorrect: false },
      { label: 'B', text: 'Na gwałtownym, nienaturalnie intensywnym zalewie zachwytem, uwagą, prezentami i obietnicami w pierwszych dniach znajomości, mającym na celu wywołanie uzależnienia dopaminowo-oksytocynowego i uśpienie czujności.', isCorrect: true },
      { label: 'C', text: 'Na całkowitym milczeniu przez pierwsze trzy miesiące relacji.', isCorrect: false },
      { label: 'D', text: 'Na pisaniu wyłącznie listów tradycyjnych na papierze czerpanym.', isCorrect: false }
    ],
    explanation: 'Love bombing to zalanie układu nagrody. Tworzy iluzję odnalezienia „idealnej bratniej duszy”. Gdy ofiara jest już emocjonalnie uzależniona, manipulator nagle wycofuje aprobatę i zaczyna etap karania oraz kontroli.',
    keyTakeaway: 'Zdrowa relacja rośnie w tempie drzewa; manipulacja wybucha jak fajerwerki.'
  },
  {
    id: 4,
    question: 'W manipulacji „Fałszywy Wybór” (Dylemat Pozorny / Związanie) manipulator konstruuje sytuację tak, że:',
    topic: 'Fałszywy Wybór i Zawężenie Ram',
    sectionRef: 'Sekcja 9.7',
    options: [
      { label: 'A', text: 'Daje ofierze do wyboru 100 równorzędnych opcji w ankiecie.', isCorrect: false },
      { label: 'B', text: 'Przedstawia tylko dwie skrajne, spreparowane opcje (np. „Albo dziś ze mną podpiszesz umowę, albo dowiedziesz, że nie zależy ci na rodzinie”), ukrywając fakt, że istnieją dziesiątki innych rozwiązań.', isCorrect: true },
      { label: 'C', text: 'Pozwala wybrać dowolny kolor długopisu.', isCorrect: false },
      { label: 'D', text: 'Każe losować monetą każdą decyzję życiową.', isCorrect: false }
    ],
    explanation: 'Manipulator zamyka ofiarę w sztucznym korytarzu decyzyjnym (Kahneman: WYSIATI — To, co widzisz, to wszystko, co istnieje). Kluczem do obrony jest wyjście poza narzucony fałszywy dualizm.',
    keyTakeaway: 'Nie wybieraj mniejszego zła z listy przygotowanej przez manipulatora. Zmień samą listę.'
  },
  {
    id: 5,
    question: 'Zgodnie z zasadami asertywności, jaka jest najskuteczniejsza technika rozbrojenia szantażu emocjonalnego opartego na wzbudzaniu poczucia winy („Jak możesz mi to robić po tym wszystkim, co dla ciebie poświęciłem?!”) (Sekcja 9.8 i 9.12)?',
    topic: 'Technika Zdarta Płyta i Oddzielenie Winy od Wyboru',
    sectionRef: 'Sekcja 9.12',
    options: [
      { label: 'A', text: 'Płacz, padnięcie na kolana i przepraszanie za swoje istnienie.', isCorrect: false },
      { label: 'B', text: 'Technika zamglonej tarczy i asertywnego ugruntowania: „Doceniam to, co dla mnie zrobiłeś, i jednocześnie w tej konkretnej sprawie podejmuję decyzję X”.', isCorrect: true },
      { label: 'C', text: 'Fizyczny atak na szantażystę.', isCorrect: false },
      { label: 'D', text: 'Podpisanie zrzeczenia się majątku.', isCorrect: false }
    ],
    explanation: 'Szantażysta liczy na to, że wciągnie cię w kłótnię o przeszłość lub wywoła paraliżujący wstyd. Uznanie faktu z jednoczesnym utrzymaniem granicy rozrywa manipulacyjną pętlę poczucia winy.',
    keyTakeaway: 'Możesz kochać człowieka i jednocześnie stanowczo odmówić spełnienia jego żądania.'
  }
];

export const chapterNine: Chapter = {
  number: 9,
  title: 'Manipulacja: Anatomia Psychologicznego Sabotażu',
  subtitle: 'Jak rozpoznawać ukryte techniki wpływu, neutralizować szantaż emocjonalny i budować nienaruszalne granice',
  leadParagraph: 'Nie każde nieprzyjemne zachowanie jest manipulacją. Czasem to po prostu ludzki błąd, zły dzień, różnica temperamentów czy brak kompetencji komunikacyjnych. Prawdziwa manipulacja zaczyna się tam, gdzie pojawia się ukryta agenda, asymetria informacji i celowe sabotowanie zdolności poznawczych drugiego człowieka. W tym rozdziale zapalimy światło w najciemniejszych zakamarkach psychologicznych gier.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-9-1',
      pageNumber: 388,
      sectionNumber: '9.1',
      title: 'Czym jest manipulacja? Anatomia zniekształconej gry',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Manipulator nie przekonuje cię do swoich racji. Sprawia, że sam przekonujesz siebie do realizacji jego planu, wierząc, że to twój własny pomysł.',
        author: 'Harriet Braiker'
      },
      paragraphs: [
        'Wyobraź sobie grę w szachy, w której przeciwnik nie tylko wykonuje ruchy figurami na planszy, ale gdy odwracasz wzrok, przesuwa Twojego piona, a gdy pytasz o to z zaskoczeniem, patrzy Ci w oczy z zatroskaną miną i pyta: „Czy ty na pewno dobrze się czujesz? Przecież sam go tam postawiłeś dziesięć sekund temu”.',
        'To jest istota manipulacji: instrumentalne potraktowanie drugiego człowieka jako pionka w cudzej partii, przy jednoczesnym zatarciu śladów samej ingerencji. Słowo „manipulacja” pochodzi od łacińskiego manus (ręka) i manipulare (kierować, sterować). Manipulator trzyma rękę na Twoich sznurkach emocjonalnych.',
        'Wielkim błędem jest jednak polowanie na czarownice i etykietowanie każdego szefa, partnera czy sprzedawcy jako „narcyza i socjopaty”. Większość manipulacji w życiu codziennym to zachowania nieświadome — wyuczone w dzieciństwie schematy bezradności („Jeśli będę płakać i dąsać się, mama wreszcie kupi mi zabawkę”). Niezależnie jednak od tego, czy manipulacja jest wyrachowaną strategią, czy nieświadomym odruchem, jej niszczycielski wpływ na Twoje neurony jest dokładnie taki sam.'
      ]
    },
    {
      id: 'sec-9-2',
      pageNumber: 392,
      sectionNumber: '9.2',
      title: 'Zegar tyka: Sztuczna presja czasu jako wyłącznik kory nowej',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        '„Tylko dziś do godziny 18:00!”, „Mam drugiego klienta, który czeka z gotówką w ręku — decyduje pan teraz, albo oferta przepada bezpowrotnie!”, „Podpisz to oświadczenie natychmiast, bo inaczej nie mamy o czym rozmawiać!”.',
        'Dlaczego manipulatorzy tak desperacko uwielbiają zegary? Ponieważ doskonale wiedzą, jak działa neurobiologia mózgu (Tom I, Rozdział 1 i 2). Aby kora przedczołowa mogła zweryfikować prawdziwość faktów, przeliczyć koszty alternatywne i skonsultować się z doradcą, potrzebuje tlenu i CZASU.',
        'Gdy wstrzykniesz do sytuacji sztuczny pośpiech, poziom kortyzolu i adrenaliny gwałtownie rośnie. Mózg przełącza się z myślenia strategicznego (System 2) na przetrwaniowe (System 1). W panice przed utratą szansy (FOMO) podpisujemy umowy, których nigdy nie przeczytaliśmy, i oddajemy oszczędności życia oszustom „na wnuczka” czy „na policjanta”.'
      ],
      subsections: [
        {
          title: 'JAK ZASTOSOWAĆ TO JUTRO? Żelazna Reguła Spowolnienia',
          paragraphs: [
            'Wprowadź do swojego życia żelazną zasadę: Nigdy nie podejmuj decyzji finansowej, zawodowej ani relacyjnej w obecności osoby, która wywiera na Ciebie presję czasu.',
            'Użyj prostego skryptu lingwistycznego: „Jeśli muszę zdecydować natychmiast, moja odpowiedź brzmi: NIE. Jeśli zależy panu na mojej rzetelnej analizie, potrzebuję 24 godzin na zapoznanie się z dokumentem”. Zobaczysz, jak w ułamku sekundy „nieprzekraczalny termin” natychmiast staje się elastyczny.'
          ]
        }
      ]
    },
    {
      id: 'sec-9-3',
      pageNumber: 396,
      sectionNumber: '9.3',
      title: 'Poczucie winy: Dług, którego nigdy nie zaciągnąłeś',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Poczucie winy to jeden z najbardziej wyrafinowanych i energochłonnych stanów afektywnych. Ewolucyjnie służyło naprawie więzi w stadzie — gdy zraniłeś współplemieńca, wyrzut sumienia zmuszał Cię do zadośćuczynienia.',
        'Manipulator przekształca ten mechanizm w niewyczerpane źródło szantażu. Wystarczy, że zaszczepi w Tobie przekonanie, że jesteś przyczyną jego cierpienia, porażki życiowej lub złego nastroju: „Przez ciebie rozbolała mnie głowa”, „Gdybyś naprawdę mnie kochała, nie wychodziłabyś dziś z koleżankami”, „Po tym wszystkim, co dla ciebie poświęciłem, ty masz czelność prosić o podwyżkę?”.',
        'Zauważ mechanizm: manipulator nie mówi o swoich potrzebach wprost. Zamiast tego stawia się w roli Męczennika lub Ofiary, automatycznie obsadzając Ciebie w roli Oprawcy. Aby uciec przed piętnem „złego człowieka”, ulegasz żądaniu, oddając swoją wolność za chwilową ulgę sumienia.'
      ]
    },
    {
      id: 'sec-9-4',
      pageNumber: 400,
      sectionNumber: '9.4',
      title: 'Waluta strachu: Zarządzanie lękiem przed porzuceniem i kompromitacją',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Strach to najstarszy system operacyjny ssaczego mózgu. Manipulator wie, jakie są Twoje pierwotne lęki: lęk przed samotnością, lęk przed zwolnieniem z pracy, lęk przed publicznym upokorzeniem czy utratą statusu.',
        'W korporacji manipulacja strachem rzadko przybiera formę otwartej groźby (to byłoby zbyt łatwe do zaskarżenia do sądu pracy). Przybiera formę zawoalowanych, trujących aluzji:',
        '„Tomaszu, na rynku jest teraz bardzo ciężko dla specjalistów w Twoim wieku... Warto dbać o to, co się ma, prawda?”.',
        '„Nie chciałbyś chyba, żeby zarząd dowiedział się o tamtym drobnym błędzie w zeszłomiesięcznym raporcie?”.',
        'Te zdania są jak mikroskopijne nakłucia igłą z kurarą. Mózg zalewa się przewlekłym lękiem, który paraliżuje wszelką asertywność.'
      ]
    },
    {
      id: 'sec-9-5',
      pageNumber: 404,
      sectionNumber: '9.5',
      title: 'Gaslighting: Gdy zaczynasz wątpić we własne zmysły i pamięć',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Termin pochodzi z klasycznej sztuki teatralnej Patricka Hamiltona z 1938 roku „Gas Light” (oraz słynnego filmu z Ingrid Bergman). Mąż manipuluje lampami gazowymi w domu, sprawiając, że światło przygasa. Kiedy żona zwraca na to uwagę, on ze spokojem i troską w głosie wmawia jej, że nic takiego się nie dzieje, a ona traci zmysły.',
        'Współczesny gaslighting to metodyczna operacja na Twoim układzie poznawczym. Manipulator używa standardowego arsenału fraz:',
        '„Nigdy czegoś takiego nie powiedziałem, znowu przekręcasz fakty”.',
        '„Jesteś chora z zazdrości, wymyślasz niestworzone historie”.',
        '„Wszyscy w biurze widzą, że ostatnio sobie nie radzisz z pamięcią”.',
        'Nawiązując bezpośrednio do Rozdziału 5 Tomu I (Pamięć jako Rekonstrukcja): ludzka pamięć jest plastyczna i podatna na sugestię. Jeśli osoba, której ufasz, z kamienną twarzą powtarza przez pół roku, że to Ty masz problemy z percepcją, w Twoim mózgu rodzi się głęboka erozja zaufania do własnych oczu i uszu. Zaczynasz notować rozmowy na kartkach, boisz się odezwać, a wreszcie całkowicie oddajesz sterowanie swoim życiem w ręce oprawcy.'
      ]
    },
    {
      id: 'sec-9-6',
      pageNumber: 408,
      sectionNumber: '9.6',
      title: 'Przerzucanie odpowiedzialności: Odwrócenie ról kata i ofiary (DARVO)',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Profesor psychologii Jennifer Freyd opisała akronim DARVO, który z fotograficzną precyzją dokumentuje schemat zachowania manipulatora przyłapanego na gorącym uczynku:',
        'D (Deny): Zaprzeczenie („Nic takiego nie zrobiłem!”).',
        'A (Attack): Atak („Jak śmiesz mnie oskarżać? Jesteś podłą, niewdzięczną osobą!”).',
        'RVO (Reverse Victim and Offender): Odwrócenie ról ofiary i sprawcy („To ja jestem tutaj prawdziwą ofiarą twojej obsesji i agresji! Zobacz, do jakiego stanu mnie doprowadziłeś!”).',
        'Zauważ potęgę tej figury: wchodzisz do pokoju z uzasadnioną pretensją o to, że partner zdradził Twoje zaufanie, a po 20 minutach rozmowy to Ty siedzisz na podłodze, płaczesz i przepraszasz go za to, że zadałeś pytanie zbyt ostrym tonem! Sprawca stał się męczennikiem.'
      ]
    },
    {
      id: 'sec-9-7',
      pageNumber: 412,
      sectionNumber: '9.7',
      title: 'Fałszywy wybór: Iluzja wolności w klatce pozorów',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Kiedy polityk mówi: „Albo poprzecie tę ustawę podatkową, albo chcecie, żeby nasze dzieci głodowały w szkołach”, uprawia klasyczną manipulację fałszywego wyboru (Fałszywa Dychotomia).',
        'W relacjach codziennych technika ta polega na narzuceniu ram (Framing, Rozdział 8), które całkowicie wykluczają opcje racjonalne:',
        '„Albo pojedziesz ze mną do moich rodziców, albo udowodnisz, że ten związek nic dla ciebie nie znaczy”.',
        '„Czy woli pan zapłacić gotówką dzisiaj, czy przelewem w dwóch ratach do jutra?” (Ukryte założenie: to, że w ogóle kupujesz ten produkt, zostało już bezprawnie przesądzone).',
        'Umysł, skonfrontowany z dwoma złymi opcjami, często odruchowo wybiera „mniej bolesną”, nie zauważając, że prawdziwa wolność leży poza narzuconym korytarzem wyboru: „Nie wybieram ani A, ani B. Proponuję zupełnie inne rozwiązanie C”.'
      ]
    },
    {
      id: 'sec-9-8',
      pageNumber: 416,
      sectionNumber: '9.8',
      title: 'Szantaż emocjonalny: Piekielny trójkąt FOG (Strach, Obowiązek, Wina)',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Susan Forward wprowadziła genialny akronim FOG (Mgła): Fear (Strach), Obligation (Obowiązek) i Guilt (Wina). Te trzy emocje tworzą gęstą mgłę poznawczą, w której człowiek traci orientację w terenie.',
        'Szantaż emocjonalny to kontrakt mafijny w białych rękawiczkach. Szantażysta mówi Ci podprogowo: „Jeśli nie zrobisz tego, czego chcę, sprawię, że będziesz cierpieć”.',
        'Istnieją cztery typy szantażystów wg Forward:',
        '1. Prokurator: Grozi bezpośrednią karą („Jeśli mnie zostawisz, zniszczę ci karierę i odbiorę dzieci”).',
        '2. Biczownik: Grozi samookaleczeniem lub krzywdą dla siebie („Jeśli odmówisz, chyba ze sobą skończę, a moja krew spadnie na twoje ręce”).',
        '3. Męczennik: W milczeniu demonstruje swoje cierpienie i chorobę, wpędzając w poczucie winy („Idź, baw się dobrze, ja tu poleżę w ciemności z moim chorym sercem”).',
        '4. Kusiciel: Obiecuje złote góry, ale pod warunkiem bezwzględnego posłuszeństwa („Dostaniesz ten awans, musisz tylko udowodnić swoją pełną lojalność wobec mnie”).'
      ]
    },
    {
      id: 'sec-9-9',
      pageNumber: 420,
      sectionNumber: '9.9',
      title: 'Izolowanie od innych: Odcinanie linii ratunkowych',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Nawiązując bezpośrednio do Rozdziału 6 (Asch i sojusznicy): pamiętasz, że obecność choćby jednego niezależnego świadka obniża uległość o 80%? Manipulator doskonale o tym wie, choćby nigdy nie czytał podręcznika psychologii.',
        'Dlatego pierwszą rzeczą, jaką robi sekta, toksyczny partner czy narcystyczny lider zespołu, jest powolne, chirurgiczne odcinanie ofiary od jej naturalnej sieci wsparcia.',
        'Zaczyna się od niewinnych uwag: „Twoja przyjaciółka Kasia jest taka toksyczna, zazdrości ci sukcesu, po co się z nią spotykasz?”, „Twoja rodzina cię nie rozumie, tylko ja naprawdę wiem, kim jesteś”. Krok po kroku ofiara ogranicza kontakty z bliskimi. W chwili, gdy zostaje sama w pokoju z manipulatorem, nie ma już nikogo, kto mógłby spojrzeć z boku i powiedzieć: „Hej, to co on ci robi, nie jest normalne! Obudź się!”.'
      ]
    },
    {
      id: 'sec-9-10',
      pageNumber: 424,
      sectionNumber: '9.10',
      title: 'Love bombing: Gdy intensywność podszywa się pod bliskość',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Nic nie otwiera drzwi do psychiki tak skutecznie, jak poczucie bycia bezgranicznie kochanym i podziwianym. Love bombing (bombardowanie miłością) to broń o zasięgu międzykontynentalnym.',
        'W pierwszych tygodniach relacji manipulator zalewa Cię lawiną komplementów: „Jesteś kobietą/mężczyzną mojego życia”, „Nigdy w życiu z nikim tak nie rozmawiałem”, „Jesteśmy dwiema połówkami tej samej duszy”. Zasypuje Cię wiadomościami co 10 minut, planuje wspólne życie na 20 lat w przód, obsypuje prezentami.',
        'W Twoim mózgu eksploduje koktajl dopaminy, oksytocyny i endorfin (Tom I, Rozdział 2). Czujesz euforię. I właśnie wtedy, gdy jesteś całkowicie odurzony tym stanem, następuje nagły zwrot akcji: Deewaluacja. Manipulator nagle staje się chłodny, znika na dwa dni, rzuca krytyczną uwagę o Twoim wyglądzie. Dlaczego? Ponieważ Twój mózg, będący na głodzie dopaminowym, zrobi teraz absolutnie wszystko, poniży się i odda każdą granicę, byle tylko odzyskać tę dawną, cudowną dawkę miłości z fazy pierwszej.'
      ]
    },
    {
      id: 'sec-9-11',
      pageNumber: 428,
      sectionNumber: '9.11',
      title: 'Ciemna strona internetu: Dark patterns i algorytmiczna manipulacja',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Manipulacja nie jest domeną wyłącznie relacji twarzą w twarz. W świecie cyfrowym armie inżynierów behawioralnych i kognitywistów projektują interfejsy zwane Dark Patterns (Zwodniczymi Wzorcami).',
        'Roach Motel (Pułapka na karaluchy): Sytuacja, w której założenie subskrypcji wymaga jednego kliknięcia, ale jej anulowanie wymaga przejścia przez 6 podstron, wykonania telefonu do call center w innym kraju w godzinach 10–12 i wysłania listu poleconego.',
        'Confirmshaming (Zawstydzanie przy rezygnacji): Przycisk akceptacji newslettera głosi: „Tak, chcę być mądry i oszczędzać pieniądze!”, podczas gdy przycisk odrzucenia brzmi: „Nie, dziękuję, wolę przepłacać i być ignorantem”. To manipulacja bazująca na pierwotnym wstydzie.',
        'Sneak into Basket: Automatyczne dorzucanie do koszyka ubezpieczenia lub dodatkowej opłaty w nadziei, że zmęczona uwaga użytkownika (Tom I, Rozdział 3) przeoczy ten fakt przed kliknięciem „Kupuję i płacę”.'
      ]
    },
    {
      id: 'sec-9-12',
      pageNumber: 432,
      sectionNumber: '9.12',
      title: 'Jak reagować? Tarcza asertywności i protokoły obronne',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Oto cztery bezbłędne, sprawdzone klinicznie narzędzia asertywnej samoobrony poznawczej:',
        '1. Technika Zdartej Płyty (Broken Record): Wybierz jedno proste, pozbawione agresji zdanie i powtarzaj je ze stałym, spokojnym tonem głosu, niezależnie od tego, jakie manipulacje i oskarżenia rzuca oponent:',
        '„Rozumiem twoje stanowisko, i jednocześnie moja decyzja w tej sprawie jest negatywna”. Manipulator liczy na to, że wciągnie cię w dyskusję; gdy odbija się od ściany stałego komunikatu, jego skrypt ulega wyczerpaniu.',
        '2. Stawianie Granicy z Konsekwencją: „Jeśli będziesz podnosił na mnie głos, w tym momencie kończę rozmowę i wychodzę z pokoju”. A potem bezwzględnie zrób to, co zapowiedziałeś! Granica bez konsekwencji to tylko pusta prośba.',
        '3. Demaskowanie Gry: Nazwij mechanizm wprost, bez wrogości: „Zauważam, że za każdym razem, gdy proszę cię o rozliczenie faktury, zaczynasz opowiadać o swoich problemach ze zdrowiem. Porozmawiajmy najpierw o fakturze, a potem chętnie zapytam o twoje samopoczucie”.'
      ]
    },
    {
      id: 'sec-9-13',
      pageNumber: 436,
      sectionNumber: '9.13',
      title: 'Wielkie Studium Przypadku: Mistrzowski Gaslighting w Start-upie',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Wstrząsające, wielopoziomowe studium przypadku pokazujące, jak charyzmatyczny założyciel spółki technologicznej doprowadził współzałożycielkę na skraj załamania nerwowego za pomocą subtelnych technik manipulacji.'
      ],
      caseStudyRef: {
        id: 'cs-ch9-gaslight',
        title: 'Cień Mentora: Anatomia Przejęcia Spółki przez Zwątpienie',
        subtitle: 'Jak subtelne podważanie pamięci i love bombing zastąpiły uczciwą umowę wspólników',
        protagonist: 'Ewa, Dyrektor Techniczna / CTO (29 lat) i Wiktor, Prezes / CEO (41 lat)',
        context: 'Dynamicznie rosnący start-up z branży MedTech u progu wejścia funduszu Venture Capital.',
        story: [
          'Ewa była wybitną programistką i architektem algorytmu analizującego zdjęcia rentgenowskie. Wiktor był seryjnym przedsiębiorcą z kontaktami w funduszach inwestycyjnych. Na początku znajomości Wiktor zalał Ewę komplementami (love bombing): „Ewa, jesteś geniuszem, bez ciebie ta firma nie istnieje, jesteś dla mnie jak młodsza siostra, zmienimy razem świat medycyny!”. Ewa poczuła, że spotkała wymarzonego mentora.',
          'Umowa ustna zakładała podział udziałów 50/50. Jednak gdy zbliżał się termin podpisania umowy z funduszem na 5 milionów złotych, w zachowaniu Wiktora pojawiły się dziwne rysy. Wersje robocze dokumentów od prawnika zawierały zapis: Wiktor 75%, Ewa 25%.',
          'Gdy Ewa zapytała o to na spotkaniu, Wiktor spojrzał na nią z głębokim, zmartwionym wzrokiem, położył dłoń na jej ramieniu i powiedział: „Ewcia, przecież rozmawialiśmy o tym w zeszłym miesiącu w kawiarni przy rondzie. Sama mówiłaś, że nie chcesz brać na siebie odpowiedzialności prawnej i wolisz mniejszy pakiet, byle skupić się na kodzie. Naprawdę tego nie pamiętasz? Ostatnio jesteś strasznie przemęczona, martwię się o twoją koncentrację”.',
          'Ewa zaniemówiła. Nie pamiętała żadnej takiej rozmowy. Ale Wiktor mówił z tak niezachwianą pewnością siebie i troską, że w jej głowie pojawiło się zwątpienie: „A może faktycznie coś takiego powiedziałam w żartach? Może przez te nocne wdrożenia tracę pamięć?”.',
          'Przez kolejne trzy miesiące Wiktor systematycznie izolował Ewę od inwestorów („Oni mają twardy styl, to by cię tylko zestresowało”) i powtarzał współpracownikom: „Ewa to złote dziecko, ale psychicznie nie wytrzymuje presji biznesowej”. Ewa zaczęła brać leki uspokajające, czując, że bez Wiktora sobie nie poradzi.',
          'Przełom nastąpił przypadkiem: sprzątając szufladę, Ewa znalazła swój prywatny notes z tamtego spotkania w kawiarni, gdzie czarno na białym zapisała: „Wiktor potwierdza 50/50 przed wejściem VC”. W tym ułamku sekundy zasłona dymna opadła. Zrozumiała, że nie jest chora psychicznie — była ofiarą cynicznego, metodycznego gaslightingu.'
        ],
        decisionTaken: 'Ewa zamiast skonfrontować się z Wiktorem sam na sam, wzięła niezależnego adwokata i zażądała oficjalnego audytu prawnego spółki przed wejściem funduszu.',
        whatProtagonistSaw: 'Początkowo widziała mentora, który troszczy się o jej zdrowie i chroni ją przed brutalnym światem biznesu.',
        whatWasMissed: 'Że Wiktor stosował podręcznikową sekwencję: Love Bombing → Izolacja od inwestorów → Podważanie pamięci → Przejęcie kontroli finansowej.',
        psychologicalAnalysis: {
          coreMechanism: 'Gaslighting połączony z manipulacją poczuciem długu wdzięczności i autorytetem mentora.',
          cognitiveBiases: [
            { name: 'Podatność pamięci na sugestię (Loftus Effect)', description: 'Ewa zaczęła kwestionować własne wspomnienia pod wpływem narracji autorytetu.', impact: 'Paraliż decyzyjny i utrata sprawczości.' }
          ],
          defenseMechanisms: [
            { name: 'Wyparcie', explanation: 'Ewa długo nie dopuszczała myśli, że podziwiany mentor mógłby z premedytacją ją oszukiwać.' }
          ],
          emotionalDynamic: 'Głęboki dysonans poznawczy między wdzięcznością a wewnętrznym poczuciem krzywdy.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Hipokamp', role: 'Rekonstrukcja wspomnień z kawiarni', activationState: 'Zdestabilizowana przez powtarzający się fałszywy przekaz Wiktora' },
            { region: 'Przednia kora zakrętu obręczy (ACC)', role: 'Rejestracja stałego konfliktu poznawczego', activationState: 'Chroniczny stan alarmowy' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol', roleInScenario: 'Chroniczny stres doprowadził do bezsenności i mgły mózgowej' }
          ],
          biologicalTimeline: [
            { timeMs: 'Rozmowa z Wiktorem', process: 'Ciepły ton głosu wyłącza obronę amygdali, pozwalając na wstrzyknięcie fałszywej sugestii.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'Gaslighting i Fałszywa Troska', description: '„Martwię się o ciebie, zapominasz o rzeczach”.', vulnerabilityExploited: 'Zmęczenie pracą i syndrom oszusta' }
          ],
          counterMeasures: [
            { step: 'Twardy Ślad Dokumentacyjny', script: 'Wszystkie ustalenia biznesowe i obietnice spisywane na piśmie pod rygorem nieważności.', rationale: 'Eliminuje możliwość podważania faktów.' }
          ]
        },
        alternativePath: 'Gdyby Ewa podpisała umowę 75/25, po wejściu funduszu Wiktor przegłosowałby jej odwołanie z zarządu, a ona straciłaby prawa do własnego wynalazku.',
        readerQuestion: 'Czy w Twoim otoczeniu jest ktoś, przy kim regularnie zaczynasz czuć, że „chyba wariujesz” lub „wszystko przekręcasz”?',
        keyTakeaway: 'Zaufanie w biznesie i relacjach opiera się na przejrzystości, nie na konieczności pamiętania słów rzuconych przy kawie. Zapisuj fakty.'
      }
    },
    {
      id: 'sec-9-14',
      pageNumber: 440,
      sectionNumber: '9.14',
      title: 'Odporność Psychologiczna, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Przeszliśmy przez labirynt manipulacji — od presji czasu i poczucia winy, przez gaslighting i DARVO, po cyfrowe sidła algorytmów. Najważniejszą tarczą ochronną nie jest agresja, lecz głębokie ugruntowanie we własnym ciele, asertywne protokoły lingwistyczne i odwaga do mówienia stanowczego „NIE”.',
        'Gdy potrafisz już odróżnić czystą perswazję od toksycznej manipulacji, czas przyjść do fundamentu ludzkiego szczęścia i dobrostanu: do RELACJI.',
        'W Rozdziale 10 zbadamy, dlaczego jedni ludzie budują z nami bezpieczną przystań, a inni permanentne pole minowe. Poznamy neurobiologię zaufania, sztukę deeskalacji konfliktów i psychologię autentycznego przebaczenia.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 9.'
      ]
    }
  ]
};
