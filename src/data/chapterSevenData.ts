import { Chapter, ExamQuestion } from '../types/book';

export const chapterSevenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W modelu 4 Płaszczyzn Komunikacji Schulza von Thuna (Kwadrat Komunikacyjny), dlaczego zdanie „Zupa jest słona” może wywołać wybuch kłótni w relacji partnerskiej?',
    topic: 'Kwadrat Komunikacyjny Schulza von Thuna',
    sectionRef: 'Sekcja 7.1 i 7.2',
    options: [
      { label: 'A', text: 'Z powodu zbyt wysokiej zawartości chlorku sodu w naczyniu.', isCorrect: false },
      { label: 'B', text: 'Odbiorca usłyszał komunikat „Uchem Relacji” („Krytykujesz mnie, nie doceniasz mojego wysiłku”) lub „Uchem Apelu” („Ugotuj coś innego”), ignorując czysty fakt rzeczowy.', isCorrect: true },
      { label: 'C', text: 'Słowo „zupa” jest w języku polskim powszechnie uznawane za obelżywe.', isCorrect: false },
      { label: 'D', text: 'Ponieważ w komunikacji liczy się wyłącznie poziom rzeczowy wypowiedzi.', isCorrect: false }
    ],
    explanation: 'Każdy komunikat zawiera cztery wymiary: rzeczowy (fakt), ujawnienie siebie (stan nadawcy), relacyjny (co myślę o tobie) i apel (czego od ciebie żądam). Konflikty wybuchają, gdy nadawca nadaje na poziomie faktu, a odbiorca odbiera uchem relacji.',
    keyTakeaway: 'Nie kłócimy się o fakty, lecz o to, co fakty mówią o naszej relacji.'
  },
  {
    id: 2,
    question: 'Na czym polega fundamentalny błąd w komunikacji określany jako „Słuchanie z zamiarem odpowiedzi” (Listening to Reply)?',
    topic: 'Słuchanie a przygotowywanie riposty',
    sectionRef: 'Sekcja 7.6',
    options: [
      { label: 'A', text: 'Słuchający całkowicie zasypia w trakcie rozmowy.', isCorrect: false },
      { label: 'B', text: 'Zamiast dekodować perspektywę rozmówcy, zasoby pamięci roboczej są zużywane na konstruowanie własnej obrony, kontrargumentu lub riposty w głowie.', isCorrect: true },
      { label: 'C', text: 'Używanie dyktafonu do nagrywania wypowiedzi.', isCorrect: false },
      { label: 'D', text: 'Zadawanie zbyt wielu pytań uściślających.', isCorrect: false }
    ],
    explanation: 'Pamięć robocza (Tom I, Rozdział 3) ma wąskie gardło. Jeśli podczas mowy drugiej osoby układasz w głowie ripostę, fizycznie tracisz zdolność rejestrowania niuansów emocjonalnych i podtekstów jej wypowiedzi.',
    keyTakeaway: 'Kiedy ładujesz działo odpowiedzi, przestajesz słyszeć rozmówcę.'
  },
  {
    id: 3,
    question: 'W psychologii komunikacji „Zasada Alberta Mehrabiana” (7% słowa, 38% ton głosu, 55% mowa ciała) jest często błędnie interpretowana jako reguła dotycząca:',
    topic: 'Mit i Prawda o Komunikacji Niewerbalnej Mehrabiana',
    sectionRef: 'Sekcja 7.7 i 7.8',
    options: [
      { label: 'A', text: 'Wszelkiej komunikacji biznesowej i prezentacji merytorycznych.', isCorrect: true },
      { label: 'B', text: 'Szybkości pisania na klawiaturze.', isCorrect: false },
      { label: 'C', text: 'Rozpoznawania fałszywych banknotów.', isCorrect: false },
      { label: 'D', text: 'Badania fal mózgowych podczas snu głębokiego.', isCorrect: false }
    ],
    explanation: 'Mehrabian badał wyłącznie sytuacje SPÓJNOŚCI PRZEKAZU EMOCJONALNEGO (np. gdy ktoś mówi ze złością „Cieszę się”). Przypisywanie tej reguły do wykładów naukowych czy kontraktów (że słowa to tylko 7%) jest groźnym mitem.',
    keyTakeaway: 'Słowa niosą treść merytoryczną; mowa ciała i ton niosą informację o autentyczności emocji.'
  },
  {
    id: 4,
    question: 'Dlaczego komunikacja cyfrowa (Slack, e-mail, komunikatory) ma naturalną tendencję do generowania nieporozumień i eskalacji wrogości (Sekcja 7.10)?',
    topic: 'Negatywne Skrzywienie Komunikacji Cyfrowej',
    sectionRef: 'Sekcja 7.10',
    options: [
      { label: 'A', text: 'Komputery celowo zmieniają litery w wysyłanych wiadomościach.', isCorrect: false },
      { label: 'B', text: 'Brak tonu głosu, mikroekspresji i natychmiastowej pętli biofeedbacku sprawia, że mózg odbiorcy wypełnia luki domyślnym skrzywieniem negatywnym (Bias ku Zagrożeniu).', isCorrect: true },
      { label: 'C', text: 'Wiadomości e-mail docierają ze zbyt dużym opóźnieniem.', isCorrect: false },
      { label: 'D', text: 'W internecie ludzie tracą zdolność posługiwania się językiem ojczystym.', isCorrect: false }
    ],
    explanation: 'Zgodnie z ewolucyjnym skrzywieniem ku negatywności (Tom I, Rozdział 2), neutralny tekst w mailu („Zróbmy to inaczej”) zostaje zinterpretowany przez odbiorcę jako zniecierpliwiony, agresywny lub lekceważący.',
    keyTakeaway: 'W tekście neutralność brzmi chłodno, a chłód jest odczytywany jako wrogość.'
  },
  {
    id: 5,
    question: 'Który z poniższych modeli udzielania konstruktywnego feedbacku jest najbardziej zgodny z neuronauką, minimalizując obronny wyrzut kortyzolu u rozmówcy (Sekcja 7.11)?',
    topic: 'Konstruktywny Feedback bez Amygdala Hijack',
    sectionRef: 'Sekcja 7.11',
    options: [
      { label: 'A', text: 'Tradycyjna „kanapka feedbackowa” (pochwała - cios - pochwała), bo pozwala sprytnie ukryć krytykę.', isCorrect: false },
      { label: 'B', text: 'Model FUKO (Fakty, Uczucia/Konsekwencje, Konkretne Oczekiwanie na przyszłość) z uprzednim zapytaniem o zgodę na rozmowę.', isCorrect: true },
      { label: 'C', text: 'Ostra publiczna reprymenda na forum zespołu, by zmotywować pozostałych.', isCorrect: false },
      { label: 'D', text: 'Wysyłanie anonimowych notatek z listą wad charakteru pracownika.', isCorrect: false }
    ],
    explanation: 'Model FUKO bazuje na obiektywnych faktach bez oceny osoby („Raport wpłynął 2 godziny po terminie”, a nie: „Jesteś nieodpowiedzialny”). Zmniejsza to zagrożenie statusowe w mózgu i chroni przed porwaniem emocjonalnym.',
    keyTakeaway: 'Opisuj zachowanie, nie tożsamość człowieka.'
  }
];

export const chapterSeven: Chapter = {
  number: 7,
  title: 'Komunikacja: Co Naprawdę Dzieje Się Podczas Rozmowy',
  subtitle: 'Architektura dialogu, pułapki interpretacji, anatomia niewerbalna i sztuka porozumienia bez przemocy',
  leadParagraph: 'Większość ludzi zakłada, że rozmowa to prosty transfer danych — nadawca pakuje myśl w słowa, przesyła ją przez powietrze, a odbiorca bezbłędnie ją rozpakowuje. To złudzenie telepatyczne. W rzeczywistości każde wypowiedziane słowo przechodzi przez gęsty las filtrów percepcyjnych, ran z przeszłości, napięć statusowych i biologicznych skrzywień uwagi. W tym rozdziale rozłożymy rozmowę na elementarne procesy neurokognitywne.',
  totalEstimatedPages: 50,
  sections: [
    {
      id: 'sec-7-1',
      pageNumber: 280,
      sectionNumber: '7.1',
      title: 'Komunikacja to więcej niż słowa: Iluzja transferu myśli',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Największym problemem w komunikacji jest iluzja, że do niej w ogóle doszło.',
        author: 'George Bernard Shaw'
      },
      paragraphs: [
        'Wyobraź sobie prosty eksperyment: stukasz palcem w stół rytm znanej piosenki (np. „Sto lat” lub „Wśród nocnej ciszy”). W Twojej głowie orkiestra gra w pełnym brzmieniu — słyszysz melodię, wokal, instrumenty dęte i perkusję. Pytasz siedzącego naprzeciwko przyjaciela: „Jaka to piosenka?”.',
        'W badaniach Elizabeth Newton na Uniwersytecie Stanforda stukający szacowali, że słuchacze odgadną utwór w 50% przypadków. Rzeczywisty wynik? Zaledwie 2,5%! Jeden na czterdzieści utworów został rozpoznany. Dlaczego nastąpił tak dramatyczny rozdźwięk? Ponieważ stukający słyszy w swojej głowie pełne bogactwo intencji i melodii, podczas gdy odbiorca słyszy jedynie chaotyczne, głuche pukanie w blat.',
        'To jest Klątwa Wiedzy w komunikacji. Kiedy mówisz do partnera, dziecka czy klienta, Twoje słowa są nasycone całym Twoim wewnętrznym kontekstem, emocją i historią. Odbiorca dostaje jedynie surowy dźwięk, który musi samodzielnie zrekonstruować w oparciu o WŁASNĄ bazę doświadczeń. Komunikacja nie jest transmisją — jest ryzykowną próbą obustronnej rekonstrukcji sensu.'
      ]
    },
    {
      id: 'sec-7-2',
      pageNumber: 284,
      sectionNumber: '7.2',
      title: 'Nadawca i odbiorca: Kwadrat komunikacyjny Schulza von Thuna',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Niemiecki psycholog Friedemann Schulz von Thun stworzył jeden z najbardziej eleganckich i użytecznych modeli komunikacji na świecie: Model Czterech Płaszczyzn (Kwadrat Komunikacyjny). Zakłada on, że każde, nawet najkrótsze zdanie, nadawane jest czterema ustami i odbierane czterema uszami.',
        'Rozważmy klasyczny przykład: Mężczyzna siedzi na fotelu pasażera. Kobieta prowadzi auto. Zbliżają się do skrzyżowania. Mężczyzna mówi: „Kochanie, tam jest zielone!”. Co właściwie zostało powiedziane?',
        '1. Poziom Rzeczowy (Treść): Światło sygnalizatora ma barwę zieloną (fakt obiektywny).',
        '2. Poziom Ujawnienia Siebie (Stan nadawcy): Śpieszę się, zauważyłem zmianę świateł, jestem czujny.',
        '3. Poziom Relacji (Co myślę o tobie i kim jesteśmy): Uważam, że potrzebujesz mojej pomocy za kółkiem / nie patrzysz uważnie.',
        '4. Poziom Apelu (Czego od ciebie żądam): Dodaj gazu i jedź!',
        'A teraz najważniejsze: Jakim uchem usłyszy to kierowca? Jeśli kobieta ma wrażliwe „Ucho Relacji”, nie usłyszy ani faktu, ani pośpiechu. Usłyszy atak: „Uważasz, że jestem złą kucharką/kiepskim kierowcą? Myślisz, że jestem ślepa?!”. I odpowie wściekłym tonem: „Wiem jak się prowadzi, sam sobie prowadź!”. Mężczyzna jest w szoku: „Przecież powiedziałem tylko, że jest zielone!”.'
      ],
      subsections: [
        {
          title: 'Cztery Uszy Odbiorcy: Gdzie leży Twoja domyślna podatność?',
          paragraphs: [
            'Ucho Rzeczowe: Skupione na danych, faktach, logice (częste u inżynierów i analityków; może ranić chłodem w kryzysie emocjonalnym).',
            'Ucho Terapeutyczne (Ujawnienia Siebie): Zadaje pytanie: „Co dzieje się z człowiekiem, który to mówi? Z czym on się zmaga?”. Daje ogromną empatię i odporność na zaczepki.',
            'Ucho Relacyjne: Przesadnie wyczulone na krytykę, odrzucenie i hierarchię („On mną gardzi”, „Ona mnie nie szanuje”). Główny generator kłótni domowych.',
            'Ucho Apelowe: Natychmiast szuka zadania do wykonania („Co mam teraz naprawić?”; blokuje proste wysłuchanie drugiego człowieka).'
          ]
        }
      ]
    },
    {
      id: 'sec-7-3',
      pageNumber: 288,
      sectionNumber: '7.3',
      title: 'Intencja a efekt: Przepaść między tym, co chciałeś, a tym, co wywołałeś',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Złota zasada pragmatyki językowej brzmi: Znaczeniem Twojego komunikatu jest reakcja, jaką wywołał, a nie intencja, z jaką go wysyłałeś.',
        'Większość ludzi w konfliktach kurczowo broni swojej intencji: „Ale ja przecież nie miałem nic złego na myśli!”, „Chciałem ci tylko doradzić!”, „To był tylko niewinny żart!”. W ten sposób unieważniają somatyczne i afektywne doświadczenie odbiorcy.',
        'Jeśli niechcący nadepniesz komuś na stopę w zatłoczonym autobusie, nie mówisz: „Niech pan nie krzyczy, przecież moją intencją nie było połamanie panu palców!”. Mówisz: „Przepraszam, czy nic się panu nie stało?” i natychmiast zdejmujesz but. W komunikacji werbalnej ludzie notorycznie stoją na cudzych stopach, krzycząc, że ich intencje były krystalicznie czyste.'
      ]
    },
    {
      id: 'sec-7-4',
      pageNumber: 292,
      sectionNumber: '7.4',
      title: 'Aktywne słuchanie: Parafraza, klaryfikacja i odzwierciedlanie afektu',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Większość ludzi nie słucha. Większość ludzi czeka na swoją kolej, by mówić. Carl Rogers, twórca psychoterapii humanistycznej, udowodnił, że najrzadszym i najbardziej uzdrawiającym darem, jaki człowiek może dać drugiemu człowiekowi, jest niedyskutująca, aktywna obecność poznawcza.',
        'Aktywne słuchanie nie polega na potakiwaniu głową i powtarzaniu „mhm”. Składa się z trzech precyzyjnych narzędzi lingwistycznych:',
        '1. Parafraza: Ujęcie sensu słów rozmówcy własnymi słowami („Jeśli dobrze cię rozumiem, kluczowym problemem w tym projekcie jest brak jasnego podziału odpowiedzialności, a nie sam termin oddania?”). Parafraza pozwala nadawcy zweryfikować, czy został zrozumiany, i zmusza odbiorcę do skupienia uwagi.',
        '2. Klaryfikacja: Porządkowanie mglistych wypowiedzi poprzez pytania doprecyzowujące („Kiedy mówisz, że zespół jest zdemotywowany, o których konkretnie zachowaniach myślisz?”).',
        '3. Odzwierciedlanie Emocji: Nazwanie stanu afektywnego rozmówcy („Widzę, że ta rozmowa kosztowała cię mnóstwo nerwów i czujesz ogromną bezsilność”). Jak dowiódł Lieberman (Tom I, Rozdział 2), trafne nazwanie afektu wygasza aktywność ciała migdałowatego u rozmówcy.'
      ]
    },
    {
      id: 'sec-7-5',
      pageNumber: 296,
      sectionNumber: '7.5',
      title: 'Pytania, które zmieniają rozmowę: Od oskarżeń do dociekań',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Jakość Twoich relacji zależy od gramatyki pytań, jakie zadajesz. Istnieje kategoria pytań toksycznych, które udają ciekawość, a w rzeczywistości są zawoalowanymi oskarżeniami:',
        '„Dlaczego znowu to zrobiłeś?” (Pytanie z „dlaczego” natychmiast wrzuca mózg w mechanizmy obronne, racjonalizację i porwanie limbiczne).',
        '„Czy naprawdę uważasz, że to ma jakikolwiek sens?” (Pytanie z tezą podważające inteligencję rozmówcy).',
        'Zamiast tego mistrzowie komunikacji stosują pytania otwarte, zorientowane na proces i przyszłość:',
        '„Co sprawiło, że podjąłeś taką decyzję w tamtej chwili?” (Ciekawość zamiast sądu).',
        '„Czego potrzebujesz ode mnie, abyśmy mogli zamknąć ten temat?” (Przeniesienie punktu ciężkości na sprawczość).',
        '„Jak z Twojej perspektywy wygląda idealne rozwiązanie tej sytuacji?” (Pobudzenie kory przedczołowej rozmówcy do kreacji, a nie walki).'
      ]
    },
    {
      id: 'sec-7-6',
      pageNumber: 300,
      sectionNumber: '7.6',
      title: 'Słuchanie a przygotowywanie odpowiedzi: Wąskie gardło uwagi',
      category: 'teoria',
      readingTimeMinutes: 12,
      paragraphs: [
        'Odwołajmy się bezpośrednio do Rozdziału 3 Tomu I (Uwaga). Nasza pamięć robocza może utrzymać jednocześnie około 4 jednostek informacji. Kiedy druga osoba mówi, jej głos, treść słów i mowa ciała zużywają blisko 80% Twoich wolnych zasobów kory przedczołowej.',
        'W ułamku sekundy, gdy w Twojej głowie pojawia się myśl: „Oho, muszę mu teraz przypomnieć sytuację z zeszłego wtorku!”, cała pamięć robocza zostaje przekierowana na redagowanie riposty. Twój wzrok nadal patrzy na rozmówcę, ale w tym momencie doświadczasz Ślepoty Nieuwagi (Inattentional Deafness).',
        'Nie rejestrujesz drżenia w jego głosie, nie słyszysz kluczowego słowa „obawiam się”, nie widzisz opuszczonych ramion. Słyszysz tylko swój własny monolog wewnętrzny. Kiedy on kończy mówić, Ty nie odpowiadasz na jego słowa — Ty wystrzeliwujesz pocisk, który ładowałeś przez ostatnie dwie minuty.'
      ]
    },
    {
      id: 'sec-7-7',
      pageNumber: 304,
      sectionNumber: '7.7',
      title: 'Komunikacja niewerbalna: Ciało mówi, zanim otworzysz usta',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Ewolucja wyposażyła nas w neurony lustrzane i prastare obwody mimiczne na długo przed wynalezieniem gramatyki. Kiedy wchodzisz do pokoju, Twoja postawa, stopień rozluźnienia mięśni czworobocznych karku, mikrozmiany w napięciu powiek i kąt nachylenia tułowia wysyłają do otoczenia strumień danych telemetrycznych.',
        'Najważniejszą zasadą wiarygodności jest kongruencja (spójność). Kiedy komunikat werbalny („Bardzo chętnie ci pomogę”) kłóci się z komunikatem somatycznym (zaciśnięte szczęki, odchylenie ciała w stronę drzwi wyjściowych, brak kontaktu wzrokowego), mózg odbiorcy bez wahania uwierzy ciału. Ewolucyjnie słowa to nowość; ciało to prawda przetrwania.',
        'Należy jednak pamiętać o fundamentalnym ostrzeżeniu metodologicznym: nie ma jednego „słownika gestów”. Założenie, że skrzyżowane ramiona zawsze oznaczają zamknięcie lub opór, to błąd poznawczy. Ktoś może krzyżować ramiona, bo w pokoju jest 18 stopni i po prostu marznie. Odczytujemy zawsze KLASTERY (zespoły gestów) w relacji do BAZOWEGO ZACHOWANIA danej osoby.'
      ]
    },
    {
      id: 'sec-7-8',
      pageNumber: 308,
      sectionNumber: '7.8',
      title: 'Ton głosu: Prozodia, tempo i biologiczny rezonans',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Prozodia mowy — intonacja, akcent, pauzy, głośność i barwa — to najszybszy przewodnik afektu. Te same cztery słowa: „Świetnie ci to wyszło” mogą być szczerym zachwytem, jadowitym sarkazmem, formalnym zbyciem lub bezradną rozpaczą, zależnie od tego, jak modulujesz falę akustyczną.',
        'Badania nad układem nerwowym (m.in. Teoria Poliwagalna Stephena Porgesa) pokazują, że uspokajający, melodyjny ton głosu o obniżonej częstotliwości bezpośrednio aktywuje brzuszny nerw błędny (Ventral Vagal Complex), obniżając tętno i wyłączając reakcję walki/ucieczki u słuchacza.',
        'Z kolei przyspieszony, piskliwy, zaciśnięty w krtani ton głosu jest podświadomie dekodowany przez ciało migdałowate rozmówcy jako alarm drapieżnika. Jeśli chcesz kogoś uspokoić, najgorsze co możesz zrobić, to krzyknąć piskliwym głosem: „Uspokój się!”. Twój ton krzyczy o panice, więc mózg partnera przygotowuje się do obrony.'
      ]
    },
    {
      id: 'sec-7-9',
      pageNumber: 312,
      sectionNumber: '7.9',
      title: 'Anatomia nieporozumień: Dlaczego logiczni ludzie kłócą się o nic',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Przeanalizujmy mechanizm typowego sporu domowego lub biurowego. Zaczyna się od mikroskopijnego wyzwalacza: nieumytego kubka w zlewie, spóźnienia o 7 minut, pominięcia kogoś w mailowym DW.',
        'Faza 1: Bodziec neutralny zostaje zinterpretowany przez pryzmat ukrytej hipotezy relacyjnej („On mnie nie szanuje”, „Dla nich moja praca nic nie znaczy”).',
        'Faza 2: Błąd Atrybucji (Rozdział 6). Zamiast pomyśleć: „Widocznie spieszył się na pociąg”, pojawia się etykieta: „Jest aroganckim leniem”.',
        'Faza 3: Uogólnienie kwantyfikatorami wielkimi: „Zawsze tak robisz!”, „Nigdy mnie nie słuchasz!”. Słowa „zawsze” i „nigdy” są semantycznymi bombami zapalającymi. Wyłączają korę przedczołową odbiorcy, ponieważ zmuszają go do obrony przed fałszywym oskarżeniem.',
        'Faza 4: Eskalacja boczna. W odpowiedzi na uwagę o kubku, druga strona wyciąga zdarzenie sprzed trzech miesięcy: „A ty w zeszłym miesiącu nie zapłaciłeś rachunku za gaz!”. W tym momencie rozmowa przestaje dotyczyć problemu; staje się walką o dominację i ocalenie ego.'
      ]
    },
    {
      id: 'sec-7-10',
      pageNumber: 316,
      sectionNumber: '7.10',
      title: 'Komunikacja cyfrowa: Dlaczego Slack i maile brzmią jak atak',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Tekst na ekranie smartfona jest emocjonalnie ślepy. Pozbawiony prozodii, spojrzenia w oczy i uśmiechu staje się idealnym ekranem projekcyjnym dla naszych własnych lęków.',
        'W badaniach nad komunikacją asynchroniczną zidentyfikowano zjawisko znane jako Skrzywienie ku Negatywności Tekstu (Email Negativity Bias). Komunikat, który nadawca pisał jako neutralny („Proszę poprawić punkty 2 i 4”), odbiorca odczytuje jako chłodny, zniecierpliwiony i karcący. Komunikat, który autor pisał jako lekko pozytywny, odbiorca odczytuje zaledwie jako neutralny.',
        'Co więcej, asynchroniczność niszczy naturalną pętlę korekty. W rozmowie na żywo widzisz natychmiast, gdy Twoje słowo zasmuciło partnera, i możesz w ułamku sekundy złagodzić przekaz („Hej, nie martw się, to drobiazg”). W mailu lub na komunikatorze wysyłasz surowy tekst, który przez kolejne cztery godziny fermentuje w głowie odbiorcy, uruchamiając lawinę katastroficznych interpretacji.'
      ]
    },
    {
      id: 'sec-7-11',
      pageNumber: 320,
      sectionNumber: '7.11',
      title: 'Informacja zwrotna bez destrukcji: Anatomia modelu FUKO',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Wielu menedżerów i rodziców wierzy w tzw. „kanapkę feedbackową” — najpierw mówią coś miłego, w środku wbijają sztylet krytyki, a na koniec dorzucają kolejną pochwałę. Badania psychologii biznesu dawno obaliły tę metodę. Odbiorca szybko uczy się, że pierwsza pochwała to tylko fałszywe znieczulenie, spina się w oczekiwaniu na cios, a na drugą pochwałę reaguje cynizmem.',
        'Prawdziwy, budujący feedback musi opierać się na modelu FUKO, zaprojektowanym tak, by chronić układ dopaminowy i przedczołowy przed porwaniem lękowym:',
        'F (Fakty): Czysty opis behawioralny bez oceniania człowieka („Wczoraj na spotkaniu o 10:00 przerwałeś moją wypowiedź w połowie zdania”). Zero słów: „jesteś niegrzeczny”, „zawsze mi wchodzisz w słowo”.',
        'U (Uczucia / Konsekwencje): Co to fizycznie i emocjonalnie wywołało („Poczułem się wytrącony z równowagi i nie mogłem dokończyć prezentacji wyników kwartału”).',
        'K (Konkret): Wskazanie sedna problemu merytorycznego.',
        'O (Oczekiwanie): Jasna, wykonalna prośba na przyszłość („Zależy mi, abyś na kolejnym spotkaniu pozwolił mi skończyć slajd, a pytania zadał w dedykowanej sesji na koniec. Czy możemy się tak umówić?”).'
      ]
    },
    {
      id: 'sec-7-12',
      pageNumber: 324,
      sectionNumber: '7.12',
      title: 'Sztuka przyjmowania krytyki: Jak nie dać się zranić, nie tracąc lekcji',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Kiedy słyszysz krytykę, Twoja amygdala reaguje tak, jakby zbliżał się wilk. Pojawia się impuls do kontrataku („A ty sam jesteś idealny?!”) lub zapadnięcia się w sobie (wstyd i poczucie beznadziei).',
        'Protokół mistrzowskiego przyjmowania krytyki składa się z trzech kroków:',
        'Krok 1: Pauza somatyczna (Wdech przez nos, długi wydech ustami). Nie odpowiadaj przez 4 sekundy. Pozwól kortyzolowi opaść.',
        'Krok 2: Oddzielenie trenera od przeciwnika. Nawet jeśli krytyka została podana w sposób chamski i nieprofesjonalny, zapytaj siebie: „Czy w tym błocie jest choć jedno ziarno złota, które pomoże mi być lepszym specjalistą/partnerem?”.',
        'Krok 3: Pytanie sondujące zamiast tarczy: „Powiedziałeś, że moja prezentacja była chaotyczna. Mógłbyś podać jeden konkretny moment, w którym straciłeś wątek?”. To pytanie zmusza krytyka do przejścia z ogólnych emocji do konkretnych faktów.'
      ]
    },
    {
      id: 'sec-7-13',
      pageNumber: 328,
      sectionNumber: '7.13',
      title: 'Wielkie Studium Przypadku: Trudna rozmowa roczna Anny i Marka',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Wnikliwa wiwisekcja corocznej oceny pracowniczej w firmie doradczej. Zobaczmy, jak kumulacja nieporozumień mailowych, ucha relacji i braku parafraz doprowadziła do rezygnacji kluczowego talentu.'
      ],
      caseStudyRef: {
        id: 'cs-ch7-feedback',
        title: 'Brakujące Słowo: Dlaczego Oceny Roczne Niszczą Motywację',
        subtitle: 'Jak niewłaściwie zadane pytanie i ton głosu doprowadziły do odejścia najlepszego managera',
        protagonist: 'Marek, Senior Project Lead (38 lat) i Anna, Partner Zarządzający (46 lat)',
        context: 'Coroczne spotkanie ewaluacyjne w gabinecie partnerskim po rekordowym kwartale firmy.',
        story: [
          'Marek wchodził do gabinetu Anny z poczuciem dumy. W ciągu ostatnich 12 miesięcy zamknął trzy wielomilionowe projekty, a wskaźnik satysfakcji jego klientów wyniósł 94%. Przepracował setki nadgodzin, kosztem zdrowia i relacji rodzinnych.',
          'Anna zaczęła spotkanie od przeglądania arkusza Excel: „Marek, wyniki finansowe są zgodne z budżetem. Cieszę się. Przejdźmy jednak do tego, co wymaga poprawy. Twoja komunikacja mailowa z młodszymi analitykami bywa zbyt szorstka. Jeden z nich zgłosił HR, że czuje się zastraszany przez Twoje tempo pracy”.',
          'W głowie Marka eksplodował granat. Z całego roku tytanicznego wysiłku Anna poświęciła 10 sekund na wyniki, po czym natychmiast przeszła do oskarżenia. Marek usłyszał to wyłącznie „Uchem Relacji”: „Dla tej firmy jestem tylko wyrobnikiem. Moje poświęcenie nic nie znaczy. Partnerzy stają po stronie leniwego stażysty”.',
          'Zamiast sparafrazować uwagę Anny i zapytać o konkretną sytuację, Marek przyjął pozycję agresywno-obronną: „Jeśli standardy jakości i wymaganie dotrzymywania terminów nazywamy teraz zastraszaniem, to gratuluję polityki firmy. Może powinienem przeprosić, że projekty zostały w ogóle dowiezione?”.',
          'Anna zinterpretowała ton Marka jako arogancję i brak dojrzałości menedżerskiej. Rozmowa przerodziła się w lodowatą wymianę uszczypliwości. Trzy tygodnie później Marek złożył wypowiedzenie i przeszedł do bezpośredniej konkurencji.'
        ],
        decisionTaken: 'Marek zareagował sarkazmem i kontratakiem na uwagę Anny, zamiast użyć techniki klaryfikacji i nazwania swoich emocji.',
        whatProtagonistSaw: 'Niewdzięczność firmy, podważenie jego autorytetu, stronniczość partnerów i atak na jego dobre imię.',
        whatWasMissed: 'Anna chciała uchronić Marka przed wypaleniem i awansować go na dyrektora, ale jej własne braki w komunikacji sprawiły, że nie potrafiła wyrazić uznania przed zgłoszeniem wyzwania rozwojowego.',
        psychologicalAnalysis: {
          coreMechanism: 'Brak zaspokojenia potrzeby uznania wywołał amygdala hijack i zablokował racjonalną ocenę informacji zwrotnej.',
          cognitiveBiases: [
            { name: 'Filtr negatywny', description: 'Marek zignorował słowa „cieszę się z wyników”, skupiając całą uwagę na krytyce.', impact: 'Poczucie całkowitej dewaluacji rocznego wysiłku.' },
            { name: 'Czytanie w myślach', description: 'Anna uznała, że Marek wie, jak bardzo jest ceniony, więc nie musi tego mówić głośno.', impact: 'Deficyt psychologicznego bezpieczeństwa.' }
          ],
          defenseMechanisms: [
            { name: 'Dewaluacja źródła', explanation: 'Marek nazwał stażystę „leniwym”, a zarząd „politycznym”, by obronić własne poczucie nieomylności.' }
          ],
          emotionalDynamic: 'Głęboki ból braku bycia zobaczonym (Unseen Pain) zamaskowany pod maską gniewu i dumy.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Przednia wyspa (Anterior Insula)', role: 'Rejestracja bólu niesprawiedliwości i zdrady', activationState: 'Bardzo wysoka' },
            { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Ewaluacja długofalowej kariery', activationState: 'Zablokowana przez oburzenie afektywne' }
          ],
          neurotransmitters: [
            { name: 'Noradrenalina', roleInScenario: 'Spowodowała natychmiastowe przyjęcie postawy bojowej' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 150 ms', process: 'Słowo „zastraszanie” trafia do ciała migdałowatego Marka.' },
            { timeMs: '500 ms', process: 'Wzrost tętna, spięcie karku, zamknięcie pola widzenia.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Protokół Pauzy Emocjonalnej', script: '„Anno, to co mówisz o analityku, jest dla mnie zaskoczeniem. Zależy mi na zespole. Daj mi chwilę, bo włożyłem w ten rok całe serce i czuję teraz silne emocje. Opowiedz mi o tej sytuacji ze stażystą”.', rationale: 'Ujawnienie stanu bez ataku rozbraja napięcie w gabinecie.' }
          ]
        },
        alternativePath: 'Gdyby Anna zaczęła od 10-minutowego rzetelnego podsumowania sukcesów Marka i zapytała: „Marek, dowożenie takich wyników to ogromny koszt. Jak ty się z tym czujesz i jak możemy pomóc twoim ludziom nadążyć za tobą?”, Marek poczułby się bezpiecznie i z radością przyjąłby coaching menedżerski.',
        readerQuestion: 'Kiedy ostatnio usłyszałeś w czyjejś uwadze atak, choć druga strona próbowała jedynie zwrócić Twoją uwagę na proces?',
        keyTakeaway: 'Ludzie nie pamiętają tego, co logicznie im wytłumaczyłeś. Pamiętają to, jak poczuli się w Twojej obecności.'
      }
    },
    {
      id: 'sec-7-14',
      pageNumber: 332,
      sectionNumber: '7.14',
      title: 'Laboratorium Komunikacji, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Komunikacja to najbardziej skomplikowany taniec, do jakiego zdolny jest ludzki mózg. Wymaga nieustannego kalibrowania czterech poziomów wypowiedzi, panowania nad tonem głosu, rozbijania iluzji telepatycznych i aktywnego słuchania w warunkach deficytu uwagi.',
        'Kiedy opanujesz architekturę dialogu, stajesz przed kolejnym fundamentalnym pytaniem natury społecznej: DLACZEGO LUDZIE ZMIENIAJĄ ZDANIE? Jak słowa stają się siłą napędową ludzkich wyborów?',
        'W Rozdziale 8 przejdziemy do sztuki i nauki WPŁYWU ORAZ PERSWAZJI — zbadamy twarde reguły Cialdiniego, magię ramowania i etyczne granice zmieniania cudzych decyzji.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 7.'
      ]
    }
  ]
};
