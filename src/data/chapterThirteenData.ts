import { Chapter, ExamQuestion } from '../types/book';

export const chapterThirteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W badaniach MIT opublikowanych w czasopiśmie „Science” (Vosoughi, Roy, Aral, 2018) nad rozprzestrzenianiem się wiadomości na Twitterze/X (Sekcja 13.11), fałszywe informacje rozprzestrzeniały się:',
    topic: 'Dynamika Viralowa Fake Newsów a Emocje',
    sectionRef: 'Sekcja 13.11',
    options: [
      { label: 'A', text: 'Znacznie wolniej niż prawda, ponieważ ludzie weryfikują źródła przed podaniem dalej.', isCorrect: false },
      { label: 'B', text: 'Aż 6 razy szybciej i docierały do znacznie szerszej grupy odbiorców niż prawda, ponieważ wywoływały silniejsze emocje moralnego oburzenia, strachu i nowości.', isCorrect: true },
      { label: 'C', text: 'Z dokładnie taką samą prędkością jak rzetelne depesze prasowe.', isCorrect: false },
      { label: 'D', text: 'Wyłącznie w godzinach nocnych z winy botów.', isCorrect: false }
    ],
    explanation: 'Fake newsy są zoptymalizowane pod kątem uderzania w ciało migdałowate i prążkowie (oburzenie i nowość). Prawda jest często skomplikowana, zniuansowana i nudna; fałsz jest prosty, sensacyjny i emocjonalnie uzależniający.',
    keyTakeaway: 'Prawda zakłada buty, podczas gdy kłamstwo obiegło już pół świata.'
  },
  {
    id: 2,
    question: 'Na czym polega fundamentalna różnica między „Bańką Filtrującą” (Filter Bubble) a „Komorą Echa” (Echo Chamber) (Sekcja 13.5 i 13.6)?',
    topic: 'Bańka Filtrująca a Komora Echa',
    sectionRef: 'Sekcja 13.5',
    options: [
      { label: 'A', text: 'Nie ma żadnej różnicy, to dwa synonimy.', isCorrect: false },
      { label: 'B', text: 'Bańka filtrująca to zjawisko ALGORYTMICZNE (platforma po cichu ukrywa treści sprzeczne z Twoimi preferencjami), podczas gdy komora echa to zjawisko SPOŁECZNO-PSYCHOLOGICZNE (aktywne odrzucanie, wyśmiewanie i uciszanie głosów spoza własnego plemienia politycznego/światopoglądowego).', isCorrect: true },
      { label: 'C', text: 'Bańka dotyczy tylko telewizji, a komora echa tylko radia.', isCorrect: false },
      { label: 'D', text: 'Komora echa występuje wyłącznie w górach.', isCorrect: false }
    ],
    explanation: 'W bańce filtrującej jesteś pasywnym więźniem kodu napisanego przez inżynierów z Doliny Krzemowej. W komorze echa sam stajesz się strażnikiem ideologicznej czystości, atakując każdego, kto myśli inaczej.',
    keyTakeaway: 'Algorytm buduje klatkę bańki; twoje własne ego zamyka w niej drzwi na klucz.'
  },
  {
    id: 3,
    question: 'W ekonomii uwagi Herbert Simon zauważył, że „Bogactwo informacji rodzi ubóstwo czegoś innego”. Czego ubywa w świecie przesytu danych (Sekcja 13.1 i 13.2)?',
    topic: 'Ekonomia Uwagi Herberta Simona',
    sectionRef: 'Sekcja 13.2',
    options: [
      { label: 'A', text: 'Pamięci na dyskach twardych komputerów.', isCorrect: false },
      { label: 'B', text: 'LUDZKIEJ UWAGI — ponieważ uwaga jest zasobem ściśle ograniczonym, nadmiar bodźców prowadzi do płytkiego, pofragmentowanego przetwarzania i paraliżu decyzyjnego.', isCorrect: true },
      { label: 'C', text: 'Papieru w drukarkach biurowych.', isCorrect: false },
      { label: 'D', text: 'Szybkości łączy światłowodowych.', isCorrect: false }
    ],
    explanation: 'Nawiązując do Rozdziału 3 Tomu I (Uwaga): reflektor świadomości nie jest z gumy. Kiedy zalewa cię 10 000 bodźców dziennie, kora przedczołowa przestaje analizować głębokie argumenty i przełącza się na powierzchowne skanowanie nagłówków.',
    keyTakeaway: 'Kiedy informacja staje się darmowa i nieskończona, to twoja uwaga staje się towarem.'
  },
  {
    id: 4,
    question: 'Zjawisko FOMO (Fear of Missing Out - Lęk przed Odpadnięciem / Przeoczeniem) (Sekcja 13.9) jest bezpośrednio zakorzenione w ewolucyjnym mechanizmie:',
    topic: 'Ewolucyjne Źródła FOMO',
    sectionRef: 'Sekcja 13.9',
    options: [
      { label: 'A', text: 'Chęci zostania programistą komputerowym.', isCorrect: false },
      { label: 'B', text: 'Lęku pierwotnego przed wykluczeniem ze stada (Ostracyzmem) — w plemieniu przeoczenie kluczowej informacji o drapieżniku czy zasobach oznaczało śmierć.', isCorrect: true },
      { label: 'C', text: 'Potrzebie ciągłego ładowania baterii w smartfonie.', isCorrect: false },
      { label: 'D', text: 'Wstręcie do czytania tradycyjnych książek.', isCorrect: false }
    ],
    explanation: 'Social media bezwzględnie eksploatują ten prastary obwód przetrwania. Ciągłe odświeżanie relacji na Instagramie to biologiczny odruch sprawdzania: „Czy stado nie bawi się beze mnie? Czy nadal jestem bezpieczny?”.',
    keyTakeaway: 'FOMO to ewolucyjny strach przed śmiercią poza jaskinią, wykorzystywany do sprzedaży reklam.'
  },
  {
    id: 5,
    question: 'W metodzie weryfikacji informacji zwanej „Czytaniem Horyzontalnym” (Lateral Reading) stosowanej przez zawodowych fact-checkerów (Sekcja 13.12), gdy trafiasz na szokujący artykuł na nieznanej stronie, należy:',
    topic: 'Czytanie Horyzontalne vs Wertykalne Fact-Checkingu',
    sectionRef: 'Sekcja 13.12',
    options: [
      { label: 'A', text: 'Wczytywać się głęboko w tekst tej samej strony i analizować jej szatę graficzną (czytanie wertykalne).', isCorrect: false },
      { label: 'B', text: 'Natychmiast otworzyć nowe karty w przeglądarce i sprawdzić, co NIEZALEŻNE, wiarygodne źródła zewnętrzne mówią o autorze, organizacji i opisywanym zjawisku.', isCorrect: true },
      { label: 'C', text: 'Uwierzyć autorowi, jeśli w tekście jest dużo trudnych słów.', isCorrect: false },
      { label: 'D', text: 'Przesłać link do wszystkich znajomych z pytaniem: „Czy to prawda?”.', isCorrect: false }
    ],
    explanation: 'Oszuści potrafią perfekcyjnie podrobić wygląd wiarygodnego portalu medycznego czy naukowego. Czytanie wertykalne (badanie samej strony) wprowadza w błąd. Jedynym ratunkiem jest wyjście poza stronę i sprawdzenie zewnętrznych rejestrów i konsensusu naukowego.',
    keyTakeaway: 'Nie badaj tego, co strona mówi o sobie. Zbadaj to, co świat mówi o tej stronie.'
  }
];

export const chapterThirteen: Chapter = {
  number: 13,
  title: 'Decyzje w Świecie Informacji: Media, Algorytmy i Iluzja Wyboru',
  subtitle: 'Jak ekonomia uwagi, clickbaity, bańki filtrujące i dezinformacja kształtują Twoje poglądy i zakupy',
  leadParagraph: 'Dawniej największym wyzwaniem człowieka był brak dostępu do wiedzy — książki były przepisywane ręcznie, a wieści z sąsiedniego miasta szły tygodniami. Dziś stoimy przed wyzwaniem o 180 stopni przeciwnym: żyjemy w epoce cyfrowego potopu. W każdej minucie na YouTube trafia 500 godzin wideo, a algorytmy korporacji technologicznych walczą na śmierć i życie o każdy ułamek sekundy Twojej uwagi. Jeśli nie nauczysz się higieny informacyjnej, staniesz się biernym marionetkowym odbiorcą cudzych narracji.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-13-1',
      pageNumber: 604,
      sectionNumber: '13.1',
      title: 'Informacja nie jest neutralnym doświadczeniem: Fizjologia bodźca cyfrowego',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Jeśli nie płacisz za produkt, to znaczy, że sam jesteś produktem sprzedawanym reklamodawcom.',
        author: 'Tristan Harris'
      },
      paragraphs: [
        'Wyobraź sobie, że co 15 minut ktoś podchodzi do Ciebie na ulicy, klepie Cię w ramię i krzyczy do ucha: „Wojna!”, „Skandal u celebrytów!”, „Ten produkt zniszczy Twoje zdrowie!”, „Zobacz, co sąsiad napisał o Twojej dzielnicy!”. Po dwóch godzinach Twój układ nerwowy byłby w stanie głębokiego wycieńczenia.',
        'Dokładnie to dzieje się w Twoim smartfonie, tylko w wersji bezszelestnej. Informacja to nie jest niewinny pakiet zer i jedynek. Każdy nagłówek, każde czerwone kółko powiadomienia, każdy filmik na TikToku to impuls biochemiczny wpuszczany bezpośrednio do Twojego krwioobiegu.',
        'Z punktu widzenia fizjologii, informacja jest pokarmem dla mózgu. Podobnie jak jedzenie przetworzonej żywności pełnej cukru i tłuszczu trans niszczy wątrobę i naczynia krwionośne, tak samo konsumpcja cyfrowego śmiecia informacyjnego wywołuje stany zapalne w układzie nerwowym: mgłę mózgową, chroniczny lęk, spadek zdolności głębokiego skupienia i cynizm relacyjny.'
      ]
    },
    {
      id: 'sec-13-2',
      pageNumber: 608,
      sectionNumber: '13.2',
      title: 'Nadmiar informacji: Syndrom zmęczenia informacyjnego (IFS)',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'David Lewis w latach 90. opisał zjawisko Information Fatigue Syndrome (IFS). Kiedy wolumen danych przekracza fizjologiczną przepustowość pamięci roboczej (Tom I, Rozdział 3), mózg wchodzi w stan paraliżu analitycznego.',
        'Objawy przeciążenia informacyjnego są identyczne z objawami chronicznego stresu pourazowego: drażliwość, trudności z podjęciem najprostszej decyzji (np. co zjeść na obiad), obniżenie empatii oraz kompulsywna potrzeba sprawdzania kolejnych wiadomości (tzw. Pętla Szukania Pewności).',
        'Im więcej sprzecznych artykułów czytasz na dany temat, tym mniej wiesz, co robić. Paradoksalnie, dostęp do nieskończonej liczby opinii wcale nie czyni nas mądrzejszymi — czyni nas bardziej zalęknionymi i podatnymi na radykalne, uproszczone hasła populistów.'
      ]
    },
    {
      id: 'sec-13-3',
      pageNumber: 612,
      sectionNumber: '13.3',
      title: 'Clickbait i luka informacyjna: Jak nagłówki porywają prążkowie',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        '„Zrobił jedną rzecz przed snem. Gdy lekarze to zobaczyli, zaniemówili!”. Dlaczego tak trudno nie kliknąć w tak absurdalny nagłówek?',
        'George Loewenstein z Carnegie Mellon University sformułował Teorię Luki Informacyjnej (Information Gap Theory). Ciekawość nie rodzi się z całkowitej niewiedzy ani z pełnej wiedzy — rodzi się wtedy, gdy mózg uświadamia sobie, że ISTNIEJE WĄSKA PRZEPAŚĆ między tym, co wie, a tym, czego nie wie.',
        'Luka informacyjna jest dla kory nowej jak swędzące ukąszenie komara. Mózg odczuwa fizyczny dyskomfort deprywacyjny, którego może pozbyć się tylko w jeden sposób: klikając w link. Twórcy clickbaitów to profesjonalni inżynierowie wywoływania sztucznego swędzenia poznawczego.'
      ]
    },
    {
      id: 'sec-13-4',
      pageNumber: 616,
      sectionNumber: '13.4',
      title: 'Algorytmiczna selekcja: Karmienie bestii zaangażowania',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Algorytmy rekomendacji na YouTube, Facebooku, Instagramie czy TikToku nie mają żadnego kręgosłupa moralnego. Nie dbają o to, czy informacja jest prawdziwa, budująca, naukowa czy szlachetna. Mają jedną jedyną funkcję celu zapisaną w kodzie optymalizacyjnym:',
        'MAXIMIZE TIME ON PLATFORM (Maksymalizuj czas spędzony na platformie).',
        'A co najsilniej przykuwa ludzką uwagę i zmusza do pisania komentarzy? Badania neuroafektywne nie pozostawiają złudzeń: OBRURZENIE MORALNE (Moral Outrage). Wiadomość, która wzbudza wściekłość na przeciwną frakcję polityczną, generuje średnio 4-krotnie więcej udostępnień niż wyważona analiza ekspercka. Algorytm promuje ekstremizm nie dlatego, że jest zły — promuje go, bo to się po prostu klika.'
      ]
    },
    {
      id: 'sec-13-5',
      pageNumber: 620,
      sectionNumber: '13.5',
      title: 'Bańki filtrujące: Zamknięci w lustrzanym labiryncie Eli Parisera',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Eli Pariser w przełomowej książce „The Filter Bubble” (2011) ujawnił przerażającą prawdę: dwóch ludzi siedzących obok siebie w kawiarni, wpisujących w wyszukiwarkę Google dokładnie to samo hasło (np. „zmiany klimatyczne” lub „szczepienia”), otrzymuje drastycznie różne wyniki!',
        'Wyszukiwarka zna Twoją historię kliknięć, Twój model telefonu, Twoje poglądy i lokalizację. Nie pokazuje Ci „obiektywnego internetu”. Pokazuje Ci internet spersonalizowany — taki, w który najchętniej klikniesz.',
        'W ten sposób powstaje bańka filtrująca: niewidzialna ściana poznawcza, która odcina Cię od informacji sprzecznych z Twoimi obecnymi przekonaniami. Zaczynasz żyć w ułudzie, że „przecież wszyscy mądrzy ludzie myślą tak jak ja”, bo na Twojej tablicy nie pojawia się nikt inny.'
      ]
    },
    {
      id: 'sec-13-6',
      pageNumber: 624,
      sectionNumber: '13.6',
      title: 'Echo chamber: Psychologia plemiennej polaryzacji',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Gdy bańka filtrująca algorytmu połączy się z ludzką potrzebą przynależności do stada (Rozdział 6), powstaje Komora Echa (Echo Chamber).',
        'W komorze echa poglądy grupy odbijają się od ścian i wracają ze zdwojoną siłą, stając się z każdym powtórzeniem coraz bardziej skrajne. Każdy, kto wnosi wątpliwość lub próbuje niuansować temat, zostaje natychmiast uznany za zdrajcę, symetrystę lub wroga.',
        'W komorze echa nie chodzi o poszukiwanie prawdy. Chodzi o rytuał wspólnego linczowania oponentów, który dostarcza członkom stada silnych wyrzutów oksytocyny wewnątrzgrupowej i poczucia moralnej wyższości nad „tamtymi barbarzyńcami”.'
      ]
    },
    {
      id: 'sec-13-7',
      pageNumber: 628,
      sectionNumber: '13.7',
      title: 'Reklama podprogowa i jawna: Sprzedawanie tożsamości zamiast produktu',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Nikt nie kupuje drogiego zegarka szwajcarskiego za 40 000 zł, by sprawdzać godzinę. Do sprawdzania godziny zegarek w smartfonie za 500 zł jest 100 razy dokładniejszy.',
        'Współczesna reklama dawno przestała sprzedawać cechy użytkowe produktów. Reklama sprzedaje Tożsamość i Przynależność Społeczną (Rozdział 6 i 12). Reklama mówi Ci podświadomie:',
        '„Kiedy kupisz ten samochód z napędem 4x4, staniesz się nieustraszonym poszukiwaczem przygód, który nie boi się niczego (nawet jeśli stoisz w korku w drodze do korporacji)”.',
        '„Kiedy kupisz te buty, staniesz się artystą, który myśli inaczej”.',
        'Nawiązując do Tomu I (Emocje i Heurystyki): reklama paruje produkt z potężnym archetypem kulturowym, omijając analityczny System 2 i celując prosto w głód statusu i akceptacji.'
      ]
    },
    {
      id: 'sec-13-8',
      pageNumber: 632,
      sectionNumber: '13.8',
      title: 'Cena i kotwica: Jak promocje wyłączają zdrowy rozsądek',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Czarny Piątek (Black Friday) to coroczne święto załamania kory przedczołowej. Wchodzisz do sklepu i widzisz wielką czerwoną tabliczkę: „STARA CENA: 999 ZŁ — TERAZ TYLKO 399 ZŁ!”.',
        'Z punktu widzenia czystej logiki powinieneś zadać sobie pytanie: „Czy ten przedmiot jest dla mnie warty 399 zł i czy naprawdę go potrzebuję?”. Ale Twój System 1 nie zadaje tego pytania. Twój System 1 patrzy na przekreśloną liczbę 999 zł (Kotwica, Rozdział 8) i liczy: „Właśnie ZAROBIŁEM 600 zł! Gdybym tego nie kupił, straciłbym taką okazję!”.',
        'Badania behawioralne pokazują, że ponad 70% produktów na wyprzedażach ma sztucznie zawyżane ceny wyjściowe na 30 dni przed promocją. Płacisz dokładnie tyle, ile rzecz była warta od początku, ale Twój mózg jest odurzony iluzją wygranego polowania.'
      ]
    },
    {
      id: 'sec-13-9',
      pageNumber: 636,
      sectionNumber: '13.9',
      title: 'FOMO: Przemysłowy lęk przed przegapionym życiem',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Fear of Missing Out (FOMO) to plaga XXI wieku. Siedzisz w piątek wieczorem w domu z książką i herbatą. Jest miło i spokojnie. Wyciągasz telefon i otwierasz Instagram Stories.',
        'Widzisz: znajomi na imprezie na dachu wieżowca, koleżanka z pracy na plaży na Bali, były kolega ze studiów odbierający nagrodę biznesową. W ułamku sekundy Twój spokój zamienia się w popiół.',
        'W Twoim ciele odpala się ból wykluczenia (Rozdział 6). Porównujesz swoje niefiltrowane, zwykłe życie od środka z wyreżyserowanym, najlepszym zwiastunem filmowym z życia innych ludzi (Highlight Reel). Zapominasz, że nikt nie wrzuca na Instagram zdjęć, gdy kłóci się z partnerem, płacze ze zmęczenia czy zmaga się ze zgagą na sedesie. FOMO to porównywanie własnych kulis z cudzą sceną główną.'
      ]
    },
    {
      id: 'sec-13-10',
      pageNumber: 640,
      sectionNumber: '13.10',
      title: 'Wiadomości i emocje: Skrzywienie ku negatywności w mediach masowych',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'W redakcjach informacyjnych od stu lat obowiązuje cyniczne powiedzenie: „If it bleeds, it leads” (Jeśli leje się krew, ląduje na pierwszej stronie).',
        'Dlaczego serwisy informacyjne nie zaczynają się od wiadomości: „Dzisiaj w Polsce 38 milionów ludzi bezpiecznie dojechało do pracy, a 150 tysięcy lekarzy z sukcesem pomogło pacjentom”? Ponieważ taka wiadomość nie wzbudza strachu, więc nikt by jej nie obejrzał.',
        'Nawiązując bezpośrednio do Rozdziału 2 Tomu I: ludzki mózg ma ewolucyjne Skrzywienie ku Negatywności (Negativity Bias). Informacja o drapieżniku czy katastrofie miała znaczenie krytyczne dla przetrwania. Kiedy codziennie oglądasz wiadomości, Twój mózg dochodzi do fałszywego wniosku, że świat stoi na krawędzi zagłady (Syndrom Wrogiego Świata - Mean World Syndrome George’a Gerbnera), co rodzi chroniczny lęk i apatię.'
      ]
    },
    {
      id: 'sec-13-11',
      pageNumber: 644,
      sectionNumber: '13.11',
      title: 'Dezinformacja i fake news: Jak wirus kłamstwa infekuje umysł',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Współczesna dezinformacja nie polega na prymitywnym kłamstwie, które łatwo obalić. To zaawansowana wojna kognitywna. Eksperci rozróżniają trzy poziomy zatrucia informacyjnego:',
        '1. Misinformation: Fałszywa informacja powielana w dobrej wierze przez nieświadomych użytkowników.',
        '2. Disinformation: Celowo sfabrykowane kłamstwo tworzone przez farmy trolli czy służby specjalne w celu wywołania chaosu i podziału społecznego.',
        '3. Malinformation: Prawdziwa informacja wyrwana z kontekstu lub opublikowana z naruszeniem prawa, by zniszczyć reputację oponenta.',
        'Najgroźniejszym zjawiskiem jest Efekt Prawdziwości Iluzorycznej (Illusory Truth Effect, Hasher, Goldstein, Toppino, 1977). Jeśli usłyszysz dowolną, nawet najbardziej absurdalną bzdurę 15 razy z różnych źródeł, Twój mózg zaczyna traktować ją jako znajomą. A to, co znajome (Płynność Poznawcza, Tom I), System 1 automatycznie klasyfikuje jako PRAWDĘ.'
      ]
    },
    {
      id: 'sec-13-12',
      pageNumber: 648,
      sectionNumber: '13.12',
      title: 'Sprawdzanie informacji: Warsztat myślenia krytycznego i Lateral Reading',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Jak nie dać zrobić sobie wody z mózgu? Stanford History Education Group pod kierownictwem prof. Sama Wineburga zbadała, jak z informacjami w sieci radzą sobie trzy grupy: wybitni profesorowie akademiccy, studenci oraz zawodowi weryfikatorzy faktów (Fact-checkerzy). Wynik był szokujący: profesorowie i studenci dali się oszukać w ponad 60% przypadków!',
        'Dlaczego? Ponieważ stosowali Czytanie Wertykalne — wczytywali się w tekst fałszywej strony, analizowali przypisy, szatę graficzną i tytuły naukowe autorów (które były zmyślone).',
        'Z kolei fact-checkerzy stosowali Czytanie Horyzontalne (Lateral Reading). Po wejściu na nieznaną stronę, spędzali na niej 3 sekundy, po czym natychmiast otwierali 5 NOWYCH KART w przeglądarce i sprawdzali: „Kto finansuje tę organizację?”, „Co o tym badaniu piszą recenzowane czasopisma medyczne?”, „Czy autor w ogóle istnieje w bazach naukowych?”. Zanim przeczytasz artykuł, dowiedz się, kim jest ten, kto go napisał.'
      ]
    },
    {
      id: 'sec-13-13',
      pageNumber: 652,
      sectionNumber: '13.13',
      title: 'Wielkie Studium Przypadku: Anatomia Viralowej Paniki Lekowej',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Wstrząsające studium przypadku analizujące, jak jeden wyrwany z kontekstu post na Twitterze doprowadził do wykupienia zapasów kluczowego leku w aptekach w całym kraju, zagrażając życiu tysięcy chorych.'
      ],
      caseStudyRef: {
        id: 'cs-ch13-viral',
        title: 'Brakujący Składnik: Jak Fałszywy Post Wywołał Kryzys Zdrowotny',
        subtitle: 'Od anonimowego tweeta do paniki w aptekach — wiwisekcja kaskady dostępności',
        protagonist: 'Piotr, Redaktor Portalu Informacyjnego (31 lat) i Krystyna, Pacjentka z Cukrzycą (64 lata)',
        context: 'Redakcja portalu internetowego w Warszawie, piątek 14:30.',
        story: [
          'W piątek po południu anonimowe konto na Twitterze opublikowało zrzut ekranu z rzekomego „tajnego pisma Ministerstwa Zdrowia”: „Od poniedziałku całkowity zakaz sprzedaży leku X z powodu wykrycia zanieczyszczeń rakotwórczych. Podajcie dalej, zanim usuną!”.',
          'Piotr, dyżurny redaktor poczytnego serwisu, zobaczył, że tweet ma już 2000 retweetów. Jego szef krzyknął przez open space: „Piotrek, konkurencja już o tym pisze! Daj tekst z nagłówkiem: PILNE: Czy popularny lek zostanie wycofany?! Dajesz na jedynkę, mamy 3 minuty!”.',
          'Piotr nie zadzwonił do Głównego Inspektoratu Farmaceutycznego. Nie zastosował czytania horyzontalnego. Opublikował tekst z wielkim czerwonym paskiem. W ciągu 45 minut artykuł przeczytało pół miliona ludzi.',
          'W tym samym czasie 64-letnia Krystyna, chorująca na cukrzycę, zobaczyła artykuł udostępniony na Facebooku przez swoją siostrę. W jej ciele wybuchła panika (FOMO + Strach przed śmiercią). Ubrała się w pośpiechu i pobiegła do osiedlowej apteki.',
          'Przed apteką stała już kolejka 40 osób. Każdy chciał kupić po 10 opakowań leku na zapas. Do godziny 19:00 zapasy hurtowni w całym województwie zostały wyczyszczone. Ludzie, którzy naprawdę potrzebowali leku na dany dzień, odeszli z kwitkiem.',
          'W sobotę rano Ministerstwo Zdrowia wydało oficjalne dementi: pismo było prymitywnym fotomontażem stworzonym przez zagraniczną farmę trolli testującą podatność polskiego społeczeństwa na panikę. Ale było już za późno. Z powodu histerii i braku leku trzy osoby trafiły na oddziały intensywnej terapii.'
        ],
        decisionTaken: 'Piotr wybrał klikalność i szybkość zamiast weryfikacji źródła; Krystyna uległa panice społecznego dowodu słuszności.',
        whatProtagonistSaw: 'Piotr widział słupki ruchu i pochwałę szefa; Krystyna widziała śmiertelne zagrożenie dla swojego zdrowia.',
        whatWasMissed: 'Że anonimowy profil miał zaledwie 3 dni, a oficjalne rejestry GIF nie zawierały żadnego ostrzeżenia.',
        psychologicalAnalysis: {
          coreMechanism: 'Kaskada Dostępności (Availability Cascade) Kuran i Sunsteina — samospełniający się łańcuch reakcji wywołany przez plotkę medialną.',
          cognitiveBiases: [
            { name: 'Heurystyka dostępności', description: 'Czerwony pasek i tłum w aptece sprawiły, że zagrożenie wydało się natychmiastowe i realne.', impact: 'Paniczny wykup zapasów.' },
            { name: 'Społeczny dowód słuszności', description: 'Widok kolejki przed apteką utwierdził ludzi w przekonaniu, że katastrofa jest faktem.', impact: 'Paraliż krytycznego myślenia.' }
          ],
          defenseMechanisms: [],
          emotionalDynamic: 'Pierwotny lęk o przetrwanie podsycany przez technologię cyfrową.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Ciało migdałowate', role: 'Reakcja na nagłówek „PILNE / ZAGROŻENIE”', activationState: 'Ekstremalna' },
            { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Logiczna weryfikacja pieczątek na dokumencie', activationState: 'Stłumiona pośpiechem' }
          ],
          neurotransmitters: [
            { name: 'Adrenalina', roleInScenario: 'Zmusiła tysiące starszych ludzi do natychmiastowego wybiegnięcia do aptek' }
          ],
          biologicalTimeline: [
            { timeMs: '14:30', process: 'Publikacja tweeta.' },
            { timeMs: '15:15', process: 'Tekst na portalu odpala panikę w skali kraju.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'Wojna Informacyjna i Fabrykowanie Paniki', description: 'Uderzenie w newralgiczny punkt: bezpieczeństwo lekowe obywateli.', vulnerabilityExploited: 'Lęk chorych i pośpiech dziennikarzy' }
          ],
          counterMeasures: [
            { step: 'Zasada 15 Minut Ciszy Redakcyjnej', script: 'Żadna wiadomość o zagrożeniu zdrowotnym nie wychodzi na czołówkę bez potwierdzenia w dwóch oficjalnych źródłach państwowych.', rationale: 'Chroni przed byciem pożytecznym idiotą dezinformacji.' }
          ]
        },
        alternativePath: 'Gdyby Piotr poświęcił 5 minut na sprawdzenie strony GIF, zobaczyłby brak komunikatu, napisał artykuł ostrzegający przed fake newsem, a panika zostałaby zduszona w zarodku.',
        readerQuestion: 'Ile razy w tym tygodniu podałeś dalej informację, której sam nie zweryfikowałeś poza nagłówkiem?',
        keyTakeaway: 'W epoce wojny informacyjnej udostępnienie niesprawdzonej wiadomości jest jak rzucenie granatu w tłum. Bądź filtrem, nie przekaźnikiem.'
      }
    },
    {
      id: 'sec-13-14',
      pageNumber: 656,
      sectionNumber: '13.14',
      title: 'Higiena Informacyjna, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Zbadaliśmy pole bitwy, na którym codziennie toczy się walka o Twoją duszę poznawczą: algorytmy zaangażowania, bańki filtrujące, clickbaity, FOMO i wirusy dezinformacji.',
        'Oto Twój osobisty Dekalog Higieny Informacyjnej:',
        '1. Wyłącz wszystkie powiadomienia push oprócz bezpośrednich wiadomości od żywych ludzi.',
        '2. Nigdy nie czytaj wiadomości w pierwszych 60 minutach po przebudzeniu ani na 60 minut przed snem.',
        '3. Płać za rzetelne dziennikarstwo — darmowe media żyją ze sprzedaży Twojego oburzenia.',
        '4. Zastosuj Czytanie Horyzontalne przed każdym udostępnieniem sensacji.',
        'Jednak nawet najbardziej świadomy i poinformowany człowiek nie uniknie w życiu sytuacji kryzysowych, w których JEGO INTERES zderzy się z INTERESEM INNEGO CZŁOWIEKA. Co zrobić, gdy kompromis wydaje się niemożliwy?',
        'W Rozdziale 14 wejdziemy w fascynujący świat KONFLIKTÓW, NEGOCJACJI I ROZWIĄZYWANIA PROBLEMÓW — poznamy metodę harwardzką, koncepcję BATNA i sztukę wygrywania bez pokonywania oponenta.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 13.'
      ]
    }
  ]
};
