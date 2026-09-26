import { Chapter, ExamQuestion } from '../types/book';

export const chapterEightExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W modelu prawdopodobieństwa elaboracji (ELM) Petty’ego i Cacioppo (Sekcja 8.2), trwała zmiana postaw i przekonań zachodzi wtedy, gdy perswazja przebiega:',
    topic: 'Tor Centralny vs Peryferyjny (ELM)',
    sectionRef: 'Sekcja 8.2',
    options: [
      { label: 'A', text: 'Torem peryferyjnym — dzięki obecności celebryty i chwytliwej muzyce w tle.', isCorrect: false },
      { label: 'B', text: 'Torem centralnym — wymaga motywacji i zdolności poznawczej odbiorcy do głębokiego przetworzenia merytorycznych argumentów.', isCorrect: true },
      { label: 'C', text: 'Wyłącznie podczas snu hipnotycznego.', isCorrect: false },
      { label: 'D', text: 'Za pomocą wysyłania powtarzających się powiadomień push.', isCorrect: false }
    ],
    explanation: 'Tor centralny angażuje korę przedczołową i wymaga wysiłku Systemu 2. Zmiana postaw osiągnięta tą drogą jest stabilna w czasie, odporna na kontrargumenty i przekłada się na realne zachowanie.',
    keyTakeaway: 'Emocje i triki dają szybką, ale nietrwałą uległość. Trwałe przekonanie wymaga toru centralnego.'
  },
  {
    id: 2,
    question: 'Na czym polega Reguła Wzajemności Roberta Cialdiniego (Sekcja 8.7) i dlaczego ma ona tak potężny biologiczny charakter?',
    topic: 'Reguła Wzajemności',
    sectionRef: 'Sekcja 8.7',
    options: [
      { label: 'A', text: 'Jest to nakaz prawny zapisany w konstytucji większości państw.', isCorrect: false },
      { label: 'B', text: 'Otrzymanie bezinteresownego daru lub przysługi generuje silne napięcie psychologiczne i dług wdzięczności, który zmusza nas do odwzajemnienia gestu, często z nawiązką.', isCorrect: true },
      { label: 'C', text: 'Działa wyłącznie w transakcjach na rynku nieruchomości.', isCorrect: false },
      { label: 'D', text: 'Zawsze sprawia, że zaczynamy nienawidzić darczyńcę.', isCorrect: false }
    ],
    explanation: 'Wzajemność to fundament ewolucyjnego przetrwania gatunku (altruizm odwzajemniony). Dług wdzięczności jest dla mózgu stanem dyskomfortu afektywnego, którego jednostka pragnie się jak najszybciej pozbyć.',
    keyTakeaway: 'Nawet niechciany prezent tworzy zobowiązanie, które paraliżuje odmowę.'
  },
  {
    id: 3,
    question: 'W eksperymentach Tversky’ego i Kahnemana z „Problemem Choroby Azjatyckiej” (Sekcja 8.10), Framing (Ramowanie) wykazał, że:',
    topic: 'Efekt Ramowania (Framing)',
    sectionRef: 'Sekcja 8.10',
    options: [
      { label: 'A', text: 'Ludzie są odporni na formę prezentacji danych matematycznych.', isCorrect: false },
      { label: 'B', text: 'W ramie zysków („uratujemy 200 osób”) ludzie unikają ryzyka, natomiast w identycznej matematycznie ramie strat („umrze 400 osób”) ludzie stają się skłonni do podejmowania skrajnego ryzyka.', isCorrect: true },
      { label: 'C', text: 'Lekarze zawsze wybierają najtańsze leki.', isCorrect: false },
      { label: 'D', text: 'Wirusy rozprzestrzeniają się szybciej w obecności słów o zabarwieniu negatywnym.', isCorrect: false }
    ],
    explanation: 'Teoria Perspektywy dowodzi, że ból straty boli około 2–2,5 raza mocniej niż radość z analogicznego zysku. Zmiana jednego słowa (zysk vs strata) całkowicie przełącza preferencje decyzyjne mózgu.',
    keyTakeaway: 'To, jak ujmiesz rzeczywistość w ramy, decyduje o wyborze bardziej niż same fakty.'
  },
  {
    id: 4,
    question: 'Technika „Drzwi zatrzaśniętych przed nosem” (Door-in-the-Face) polega na:',
    topic: 'Techniki Wpływu i Kotwiczenie Społeczne',
    sectionRef: 'Sekcja 8.7 i 8.11',
    options: [
      { label: 'A', text: 'Wysunięciu najpierw skrajnie wygórowanej prośby, na którą rozmówca na pewno powie „nie”, a następnie natychmiastowym przedstawieniu mniejszej, właściwej prośby jako „ustępstwa”.', isCorrect: true },
      { label: 'B', text: 'Fizycznym barykadowaniu wejścia do biura.', isCorrect: false },
      { label: 'C', text: 'Zadawaniu pytań tylko przez zamknięte drzwi.', isCorrect: false },
      { label: 'D', text: 'Podpisaniu umowy kredytowej bez czytania załączników.', isCorrect: false }
    ],
    explanation: 'Technika ta opiera się na kontraście percepcyjnym (Tom I, Rozdział 4) oraz regule wzajemności ustępstw: skoro nadawca ustąpił ze swoich pierwotnych żądań, odbiorca czuje presję, by również pójść na kompromis.',
    keyTakeaway: 'Odmowa dużej prośby toruje drogę do zgody na prośbę mniejszą.'
  },
  {
    id: 5,
    question: 'Jaka jest fundamentalna granica etyczna oddzielająca szlachetną perswazję od manipulacji (Sekcja 8.1 i 8.14)?',
    topic: 'Granica Wpływu: Wolność i Prawda',
    sectionRef: 'Sekcja 8.1',
    options: [
      { label: 'A', text: 'Perswazja dotyczy tylko polityki, a manipulacja tylko zakupów.', isCorrect: false },
      { label: 'B', text: 'Perswazja szanuje autonomię odbiorcy, nie zataja kluczowych faktów i służy także jego dobru, podczas gdy manipulacja traktuje człowieka instrumentalnie, ukrywając prawdziwy cel i zniekształcając obraz sytuacji.', isCorrect: true },
      { label: 'C', text: 'Nie ma żadnej różnicy, każde porozumienie z drugim człowiekiem to manipulacja.', isCorrect: false },
      { label: 'D', text: 'Perswazja może być prowadzona wyłącznie szeptem.', isCorrect: false }
    ],
    explanation: 'W perswazji odbiorca zachowuje pełną wolność powiedzenia „nie” bez poczucia winy lub strachu i dysponuje rzetelną wiedzą. W manipulacji jego procesy poznawcze są podstępnie sabotowane dla korzyści manipulatora.',
    keyTakeaway: 'Perswazja daje wybór; manipulacja tworzy iluzję wyboru.'
  }
];

export const chapterEight: Chapter = {
  number: 8,
  title: 'Wpływ i Perswazja: Dlaczego Ludzie Zmieniają Zdanie',
  subtitle: 'Architektura przekonywania, psychologia decyzji, heurystyki Cialdiniego i etyka wpływu',
  leadParagraph: 'Codziennie jesteś obiektem setek prób perswazji — od billboardów i algorytmów rekomendacji, przez maile handlowe, po prośby partnera i negocjacje z szefem. Jednocześnie sam nieustannie próbujesz wpływać na innych: zachęcasz dziecko do nauki, klienta do zakupu, a zespół do zmiany strategii. Wpływ to nie magia ani ciemna sztuka — to precyzyjna kognitywistyka oparta na znajomości biologicznych skrótów decyzyjnych.',
  totalEstimatedPages: 50,
  sections: [
    {
      id: 'sec-8-1',
      pageNumber: 334,
      sectionNumber: '8.1',
      title: 'Wpływ nie oznacza manipulacji: Etyczna oś relacji',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Perswazja to zaproszenie drugiej osoby do wspólnej wędrówki; manipulacja to potajemne zawiązanie jej oczu i pchnięcie w przepaść.',
        author: 'Robert Cialdini'
      },
      paragraphs: [
        'Wielu ludzi czuje wstręt na samo słowo „wpływ” czy „sprzedaż”. Kojarzy im się to z natrętnym domokrążcą wciskającym wadliwe garnki lub politykiem składającym obietnice bez pokrycia. Przyjmują postawę: „Prawda obroni się sama. Jeśli mój pomysł jest dobry, ludzie sami to zrozumieją”.',
        'To naiwny idealizm poznawczy. W świecie zalanym szumem informacyjnym (Tom I, Rozdział 3: Uwaga) prawda nie obroni się sama, jeśli nikt jej nie usłyszy i nie zrozumie. Lekarz przekonujący pacjenta do rzucenia palenia, nauczyciel rozbudzający pasję w uczniu czy inżynier walczący o wdrożenie procedury bezpieczeństwa — wszyscy oni uprawiają perswazję.',
        'Wpływ jest naturalnym spoiwem tkanki społecznej. Różnica między nim a manipulacją leży w trzech kryteriach: Czystość intencji (czy zależy mi także na dobru odbiorcy?), Przejrzystość danych (czy nie ukrywam wad i ryzyk?) oraz Autonomia wyboru (czy druga strona może bezpiecznie powiedzieć „nie” bez bycia ukaraną emocjonalnie?).'
      ]
    },
    {
      id: 'sec-8-2',
      pageNumber: 338,
      sectionNumber: '8.2',
      title: 'Dwie ścieżki perswazji: Model prawdopodobieństwa elaboracji (ELM)',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Richard Petty i John Cacioppo stworzyli jeden z najważniejszych modeli psychologii wpływu: Elaboration Likelihood Model (ELM). Dowodzi on, że perswazja może dotrzeć do umysłu odbiorcy dwiema zupełnie odmiennymi autostradami.',
        '1. Tor Centralny (Central Route): Wymaga wysokiej elaboracji — świadomego wysiłku analitycznego, weryfikacji logiki dowodów, porównywania liczb i szukania luk w argumentacji. Uruchamia się tylko wtedy, gdy odbiorca ma ZDOLNOŚĆ (jest wypoczęty, zna dziedzinę) oraz MOTYWACJĘ (temat bezpośrednio go dotyczy). Zmiana postawy osiągnięta tą drogą jest trwała i stabilna.',
        '2. Tor Peryferyjny (Peripheral Route): Działa w warunkach niskiej elaboracji — gdy odbiorca jest zmęczony, przebodźcowany, temat go nudzi lub nie rozumie żargonu. Wówczas umysł nie analizuje argumentów. Podejmuje decyzję w oparciu o powierzchowne sygnały (Peripheral Cues): atrakcyjność nadawcy, jego garnitur, uśmiech, skomplikowane wykresy, które „wyglądają mądrze”, czy muzykę w tle. Zmiana ta jest jednak powierzchowna i nietrwała.'
      ]
    },
    {
      id: 'sec-8-3',
      pageNumber: 342,
      sectionNumber: '8.3',
      title: 'Wiarygodność źródła: Trójkąt etosu wg Arystotelesa i Hovlanda',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Już Arystoteles w „Retoryce” zauważył, że najwspanialszy logos (logika) jest bezsilny bez etosu (wiarygodności mówcy). Carl Hovland z Uniwersytetu Yale zbadał to zjawisko empirycznie.',
        'Wiarygodność w oczach ludzkiego mózgu nie jest jedną cechą; składa się z dwóch niezależnych wektorów:',
        'Wektor 1: Kompetencja (Expertise): Czy ta osoba ma wiedzę, doświadczenie i kwalifikacje, by wypowiadać się na ten temat? (Mózg szuka dyplomów, tytułów, liczb, bezbłędnej terminologii).',
        'Wektor 2: Intencjonalna Uczciwość (Trustworthiness): Czy ta osoba mówi to dla mojego dobra, czy ma w tym ukryty interes finansowy lub polityczny?',
        'Co ciekawe, badania Hovlanda wykazały zjawisko zwane „Efektem Uśpienia” (Sleeper Effect). Komunikat pochodzący z niewiarygodnego źródła (np. bulwarówki) jest początkowo odrzucany. Jednak po 6 tygodniach pamięć źródła zaciera się szybciej niż sama treść wiadomości! Ludzie zaczynają pamiętać plotkę jako fakt, zapominając, że przeczytali ją w niesprawdzonym źródle (Most do Tomu I, Rozdział 5: Pamięć).'
      ]
    },
    {
      id: 'sec-8-4',
      pageNumber: 346,
      sectionNumber: '8.4',
      title: 'Architektura argumentu: Od tezy do twardego dowodu',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Wielu ludzi myli argument z opinią. Zdanie: „Nasz produkt jest najlepszy na rynku, bo jest innowacyjny” nie jest argumentem — to tautologiczna opinia bez pokrycia.',
        'Model Stephena Toulmina uczy profesjonalnej konstrukcji perswazyjnej. Prawdziwy argument składa się z czterech elementów:',
        '1. Teza (Claim): Co dokładnie proponuję? („Powinniśmy przejść na 4-dniowy tydzień pracy”).',
        '2. Dane / Fakty (Data): Na jakich twardych przesłankach to opieram? („Pilotaż w 61 firmach w Wielkiej Brytanii wykazał spadek wypalenia o 71% przy wzroście przychodów o 1,4%”).',
        '3. Gwarant (Warrant): Jaka zasada łączy dane z tezą? („Pracownik wypoczęty popełnia mniej kosztownych błędów poznawczych”).',
        '4. Zastrzeżenie (Rebuttal): Kiedy ta zasada może nie zadziałać? Świadome podanie kontrprzykładu drastycznie ZWIĘKSZA wiarygodność nadawcy, gdyż pokazuje brak fanatyzmu.'
      ]
    },
    {
      id: 'sec-8-5',
      pageNumber: 350,
      sectionNumber: '8.5',
      title: 'Emocje w perswazji: Dlaczego logika otwiera drzwi, ale emocje przez nie przechodzą',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Nawiązując do Rozdziału 2 Tomu I (Emocje i Markery Somatyczne Damasio): człowiek pozbawiony dostępu do emocji nie staje się czystym analitykiem — staje się decyzyjnym kaleką. Każda decyzja o zmianie zdania wymaga impulsu afektywnego.',
        'W perswazji kluczowa jest zasada domknięcia emocjonalnego. Jeśli w prezentacji operujesz wyłącznie strachem i zagrożeniem („Jeśli nie zmienimy oprogramowania, nasza firma zbankrutuje w pół roku”), mózg słuchacza może wejść w stan wyparcia i zaprzeczenia (obronne odcięcie dlPFC).',
        'Skuteczna perswazja emocjonalna wymaga struktury dwufazowej: Wzbudzenie napięcia problemem (pokazanie realnego bólu i kosztu zaniechania) oraz natychmiastowe dostarczenie jasnej, konkretnej i osiągalnej ścieżki ulgi („Oto precyzyjny 3-etapowy plan wdrożenia, który neutralizuje to ryzyko”). Emocja bez planu rodzi panikę; emocja z planem rodzi działanie.'
      ]
    },
    {
      id: 'sec-8-6',
      pageNumber: 354,
      sectionNumber: '8.6',
      title: 'Społeczny dowód słuszności: Gdy inni już wybrali',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Kiedy nie wiesz, jak się zachować, patrzysz na innych. To najbardziej pierwotna zasada oszczędności poznawczej. Jeśli stoisz w obcym mieście i widzisz dwie restauracje — w jednej wszystkie stoliki są puste, a przed drugą stoi kolejka 20 osób — do której wejdziesz? Wybór kolejki jest niemal automatyczny.',
        'Zasada Społecznego Dowodu Słuszności (Social Proof) Roberta Cialdiniego działa najsilniej w dwóch warunkach:',
        'Warunek 1: Niepewność (gdy sytuacja jest nowa lub dwuznaczna).',
        'Warunek 2: Podobieństwo (kiedy ludzie, którzy dokonali wyboru, są postrzegani jako „tacy jak ja”). Komunikat: „90% dyrektorów finansowych w branży automotive używa naszego audytu” przekona CFO bez porównania silniej niż ogólne hasło: „Mamy 10 000 zadowolonych klientów”.'
      ]
    },
    {
      id: 'sec-8-7',
      pageNumber: 358,
      sectionNumber: '8.7',
      title: 'Magia wzajemności: Psychologiczny ciężar nieodwzajemnionego daru',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Reguła wzajemności jest tak głęboko wpisana w ludzką biologię, że archeolodzy i antropolodzy (np. Richard Leakey) uznają ją za kluczowy mechanizm, który umożliwił powstanie handlu, podziału pracy i cywilizacji.',
        'Gdy kelner przynosi rachunek i kładzie obok jedną małą miętówkę, jego napiwek rośnie o 3%. Kiedy kładzie dwie miętówki, napiwek rośnie o 14%. Ale kiedy odchodzi, zatrzymuje się, wraca i mówi: „Dla państwa, jako wyjątkowo miłych gości, dorzucę jeszcze po jednej miętówce” — napiwek skacze o 23%! Dlaczego? Ponieważ dar został spersonalizowany i odebrany jako niespodziewana przysługa.',
        'W negocjacjach reguła ta manifestuje się jako wzajemność ustępstw. Kiedy jedna strona mówi: „Dobrze, w kwestii terminu płatności pójdę wam na rękę”, w mózgu drugiej strony natychmiast odpala się dyskomfort: „Teraz ja muszę ustąpić w jakiejś innej kwestii”.'
      ]
    },
    {
      id: 'sec-8-8',
      pageNumber: 362,
      sectionNumber: '8.8',
      title: 'Zasada niedostępności: Romeo, Julia i lęk przed stratą',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Rzeczy nabierają wartości w naszych oczach wprost proporcjonalnie do ich ograniczonej dostępności. Dlaczego diamenty są drogie, choć woda jest nieskończenie bardziej potrzebna do życia? To paradoks wartości Adama Smitha napędzany rzadkością.',
        'Gdy wolność wyboru zostaje ograniczona (np. „zostały tylko 2 ostatnie miejsca na warsztat”, „oferta ważna tylko do północy”), w mózgu odpala się psychologiczna reaktancja (J. Brehm). Nie chcemy stracić opcji. Zgodnie z Teorią Perspektywy Kahnemana (Tom I), widmo utraty szansy boli dwa razy mocniej niż radość z jej zyskania.',
        'Co ciekawe, informacja staje się bardziej perswazyjna nie tylko wtedy, gdy sam produkt jest niedostępny, ale gdy SAMA INFORMACJA O PRODUKCIE jest reglamentowana („Właśnie dostałem poufną wiadomość od dostawcy, której nie ma jeszcze w mediach”). Ekskluzywność wiedzy podbija jej postrzeganą wagę.'
      ]
    },
    {
      id: 'sec-8-9',
      pageNumber: 366,
      sectionNumber: '8.9',
      title: 'Zaangażowanie i konsekwencja: Pułapka własnego podpisu',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Ludzki umysł odczuwa paniczny lęk przed byciem postrzeganym jako hipokryta lub osoba chwiejna. Dążenie do spójności między słowami a czynami to potężny motor zachowań (Teoria Dysonansu Poznawczego Leona Festingera).',
        'Technika „Stopy w drzwiach” (Foot-in-the-Door, Freedman i Fraser): Poproś mieszkańców przedmieść o powieszenie na płocie małej, niewinnej naklejki o treści: „Bądź bezpiecznym kierowcą”. Niemal wszyscy się zgadzają. Dwa tygodnie później poproś tych samych ludzi o postawienie na ich zadbanym trawniku wielkiego, brzydkiego billboardu z tym samym hasłem. Wskaźnik zgód wyniósł aż 76% (w grupie kontrolnej, bez uprzedniej naklejki — zaledwie 17%)!',
        'Dlaczego? Ponieważ powieszenie naklejki zmieniło samokoncept człowieka: „Jestem obywatelem, który troszczy się o bezpieczeństwo na drodze”. Odmowa postawienia billboardu kłóciłaby się z nowo przyjętą tożsamością.'
      ]
    },
    {
      id: 'sec-8-10',
      pageNumber: 370,
      sectionNumber: '8.10',
      title: 'Framing: Jak rama językowa przekształca percepcję faktów',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Fakty nie istnieją w próżni; zawsze przychodzą opakowane w ramę interpretacyjną (Frame). Wystarczy zmienić jedno słowo, by ta sama obiektywna rzeczywistość wywołała skrajnie odmienne reakcje somatyczne.',
        'Wyobraź sobie jogurt, na którym wielkimi literami napisano: „ZAWIERA 20% TŁUSZCZU”. Konsument myśli: „Tłusty, niezdrowy, przytyję”. A teraz ten sam jogurt z napisem: „W 80% BEZTŁUSZCZOWY”. Sprzedaż rośnie trzykrotnie. Skład chemiczny nie zmienił się o mikrogram; zmieniła się rama afektywna.',
        'W medycynie: Jeśli chirurg mówi pacjentowi przed operacją: „Śmiertelność przy tym zabiegu wynosi 10%”, poziom kortyzolu u pacjenta szybuje w kosmos, a wielu ucieka z sali. Jeśli ten sam chirurg powie: „Przeżywalność tego zabiegu wynosi aż 90%”, pacjent czuje spokój i podpisuje zgodę. Treść matematyczna jest tożsama; kora przedczołowa została skierowana na zysk zamiast na stratę.'
      ]
    },
    {
      id: 'sec-8-11',
      pageNumber: 374,
      sectionNumber: '8.11',
      title: 'Kotwiczenie w perswazji: Liczba, która ustawia horyzont myśli',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Wracamy do jednego z najbardziej spektakularnych błędów Systemu 1 opisanego w Tomie I: heurystyki zakotwiczenia i dopasowania (Kahneman & Tversky).',
        'Kiedy w menu ekskluzywnej restauracji na samej górze widnieje stek z japońskiej wołowiny Wagyu za 680 zł, większość gości go nie zamówi. Ale obecność tej ceny sprawia, że znajdujący się tuż poniżej stek z polędwicy za 180 zł wydaje się „rozsądny i wręcz okazyjny”. Gdyby najwyższą pozycją w menu był kurczak za 45 zł, ten sam stek za 180 zł wydałby się absurdalnie drogi.',
        'W perswazji pierwsza rzucona liczba staje się grawitacyjnym centrum całej dalszej debaty. Niezależnie od tego, czy negocjujesz pensję, budżet marketingowy czy cenę auta, strona, która jako pierwsza rzuca przemyślaną kotwicę, kontroluje 70% pola negocjacyjnego.'
      ]
    },
    {
      id: 'sec-8-12',
      pageNumber: 378,
      sectionNumber: '8.12',
      title: 'Perswazja odporna na manipulację: Budowanie tarczy poznawczej',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'William McGuire w latach 60. sformułował Teorię Inokulacji (Szczepienia Poznawczego). Podobnie jak szczepionka medyczna wprowadza do organizmu osłabionego wirusa, by układ odpornościowy wytworzył przeciwciała, tak samo umysł można zaszczepić przeciwko manipulacji.',
        'Jak działa szczepionka poznawcza? Przedstawiasz odbiorcy z góry słaby argument oponenta lub manipulacyjną sztuczkę, na którą zostanie wystawiony, i wspólnie z nim analizujesz jej mechanizm. Kiedy tydzień później nieuczciwy akwizytor użyje wobec niego tej samej techniki (np. fałszywego komplementu i presji czasu), w mózgu odbiorcy nie odpali się uległość, lecz dzwonek alarmowy: „Oho, to dokładnie ta sztuczka, o której rozmawialiśmy!”.',
        'Najlepszą obroną przed manipulacją nie jest agresja ani podejrzliwość wobec każdego człowieka, lecz krystaliczna świadomość mechanizmów i własnych czułych punktów biologicznych.'
      ]
    },
    {
      id: 'sec-8-13',
      pageNumber: 382,
      sectionNumber: '8.13',
      title: 'Wielkie Studium Przypadku: Kampania ratowania szpitala powiatowego',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Mistrzowskie studium przypadku pokazujące, jak etyczna perswazja, zmiana ramowania (framing) i zaangażowanie społeczności odwróciły losy likwidowanego oddziału pediatrii.'
      ],
      caseStudyRef: {
        id: 'cs-ch8-szpital',
        title: 'Oddział Dziecięcy: Jak Perswazja Oparta na Faktach Pokonała Cynizm',
        subtitle: 'Zderzenie tabelki budżetowej z wartościami społecznymi w samorządzie',
        protagonist: 'Dr Joanna, Ordynator Pediatrii (42 lata) i Starosta Powiatu (58 lat)',
        context: 'Nadzwyczajna sesja rady powiatu decydująca o likwidacji nierentownego oddziału pediatrycznego.',
        story: [
          'Oddział pediatrii generował rocznie 1,2 miliona złotych straty. Na biurku starosty leżał bezlitosny raport audytorów: zamknąć oddział, a małych pacjentów wozić do szpitala wojewódzkiego oddalonego o 45 kilometrów. Mieszkańcy zbierali podpisy pod petycją, ale urzędnicy byli nieugięci: „Matematyka jest nieubłagana. Nie mamy z czego dokładać”.',
          'Dr Joanna wiedziała, że tradycyjny krzyk i oskarżanie radnych o brak serca wywoła jedynie opór i okopanie się na pozycjach (reaktancja). Postanowiła zastosować zintegrowany protokół perswazyjny.',
          'Po pierwsze: Framing zysku i straty. Zamiast mówić o „dopłacaniu do straty pediatrii”, Joanna przedstawiła radnym analizę kosztów transportu karetek, powikłań sepsy przy 50-minutowym dojeździe i pozwów odszkodowawczych. Pokazała, że likwidacja oddziału wygeneruje w perspektywie 3 lat koszty zewnętrzne przewyższające obecny deficyt o 400 tysięcy złotych!',
          'Po drugie: Kotwiczenie i Zaangażowanie (Stopa w drzwiach). Joanna nie poprosiła o natychmiastowe wyrzucenie audytu do kosza. Poprosiła radę o powołanie 6-miesięcznego programu pilotażowego z twardymi wskaźnikami optymalizacji, do którego sama zadeklarowała bezpłatne pozyskanie nowoczesnego sprzętu od fundacji charytatywnych.',
          'Głosowanie zakończyło się jednomyślnym przyjęciem planu Joanny. Oddział przetrwał, a po dwóch latach zbilansował się dzięki nowej poradni przyszpitalnej.'
        ],
        decisionTaken: 'Joanna zamieniła argumentację emocjonalno-roszczeniową na merytoryczne przekadrowanie finansowe połączone z małym krokiem (program pilotażowy).',
        whatProtagonistSaw: 'Że radni nie są z natury źli — są przerażeni deficytem budżetowym powiatu i potrzebują ramy, która pozwoli im ocalić szpital bez poczucia niegospodarności.',
        whatWasMissed: 'Poprzednie delegacje rodziców krzyczały na sesjach, co tylko wzmacniało postawę obronną urzędników (błąd atrybucji po obu stronach).',
        psychologicalAnalysis: {
          coreMechanism: 'Zastosowanie toru centralnego (twarde dane o ukrytych kosztach) wspartego regułą zaangażowania i ramowaniem unikania strat.',
          cognitiveBiases: [
            { name: 'Księgowanie umysłowe (Mental Accounting)', description: 'Radni widzieli tylko rubrykę „koszt pediatrii”, ignorując koszty w innych rubrykach budżetu.', impact: 'Fałszywe poczucie oszczędności.' },
            { name: 'Dysonans poznawczy', description: 'Głosowanie za zamknięciem oddziału kłóciło się z wizerunkiem radnych jako opiekunów społeczności lokalnej.', impact: 'Szukali moralnego wyjścia z impasu.' }
          ],
          defenseMechanisms: [],
          emotionalDynamic: 'Zamiana bezsilnej wściekłości na konstruktywny etos ekspercki.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Kalkulacja wieloletniego bilansu kosztów', activationState: 'Uruchomiona u radnych dzięki liczbom Joanny' },
            { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Integracja zysków moralnych i finansowych', activationState: 'Wysoka' }
          ],
          neurotransmitters: [
            { name: 'Dopamina', roleInScenario: 'Perspektywa sukcesu pilotażu dała radnym nadzieję na sukces polityczny' }
          ],
          biologicalTimeline: [
            { timeMs: 'Pierwsze 5 minut', process: 'Rozbrojenie obrony radnych brakiem agresji.' },
            { timeMs: '20 minuta', process: 'Pokazanie wykresu kosztów zewnętrznych przełącza salę na tor centralny.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'Reframing strategiczny i Stopa w drzwiach', description: 'Zamiana zamknięcia na 6-miesięczny program testowy z udziałem fundacji.', vulnerabilityExploited: 'Potrzeba radnych uniknięcia skandalu społecznego' }
          ],
          counterMeasures: []
        },
        alternativePath: 'Gdyby Joanna przyszła z transparentem i oskarżyła starostę o „morderstwo dzieci”, sesja zostałaby przerwana, ochrona wyprowadziłaby lekarzy, a oddział zostałby zlikwidowany w ciszy gabinetów.',
        readerQuestion: 'Kiedy próbujesz przekonać kogoś do zmiany, czy mówisz w języku SWOICH potrzeb, czy w języku JEGO zysków i strat?',
        keyTakeaway: 'Najwyższa forma perswazji polega na pokazaniu drugiej osobie, że to, co proponujesz, jest najwspanialszym zrealizowaniem jej własnych najgłębszych wartości.'
      }
    },
    {
      id: 'sec-8-14',
      pageNumber: 386,
      sectionNumber: '8.14',
      title: 'Granica wpływu, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Poznaliśmy potężne prawa wpływu: od modeli centralnych i peryferyjnych, przez wzajemność, niedostępność i autorytet, po magię ramowania i kotwiczenia. Te narzędzia są neutralne aksjologicznie — jak skalpel chirurgiczny, którym można uratować życie lub zadać śmiertelną ranę.',
        'Jednak na krawędzi perswazji czai się jej mroczny bliźniak: MANIPULACJA. Co dzieje się, gdy ktoś celowo odcina Ci dostęp do prawdy, gra na Twoim poczuciu winy, wywołuje sztuczny strach i kwestionuje Twoje zmysły?',
        'W Rozdziale 9 wejdziemy do psychologicznego gabinetu cieni: zbadamy anatomię gazowania (gaslighting), szantażu emocjonalnego, fałszywych wyborów i drapieżnych technik wywierania presji oraz nauczymy się budować nieprzenikniony pancerz asertywności.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 8.'
      ]
    }
  ]
};
