import { Chapter, ExamQuestion } from '../types/book';

export const chapterFourExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Na czym polega fundamentalne zjawisko „Realizmu Naiwnego” (Naive Realism) wg Lee Rossa?',
    topic: 'Realizm Naiwny',
    sectionRef: 'Sekcja 4.1',
    options: [
      { label: 'A', text: 'Na przekonaniu, że wszyscy ludzie na świecie mają ten sam gust artystyczny.', isCorrect: false },
      { label: 'B', text: 'Na głębokim, subiektywnym przekonaniu, że rejestrujemy świat obiektywnie takim, jaki jest, a każdy, kto widzi sytuację inaczej, musi być niedoinformowany, leniwy lub złośliwy.', isCorrect: true },
      { label: 'C', text: 'Na wierze w to, że rzeczywistość jest snem motyla.', isCorrect: false },
      { label: 'D', text: 'Na zdolności do widzenia promieniowania rentgenowskiego gołym okiem.', isCorrect: false }
    ],
    explanation: 'Realizm naiwny to przekonanie, że nasze zmysły są przezroczystym oknem na świat. Gdy ktoś interpretuje te same fakty inaczej (np. w polityce czy sporze małżeńskim), natychmiast przypisujemy mu złą wolę.',
    keyTakeaway: 'Nie widzisz świata jakim jest — widzisz świat przefiltrowany przez konstrukcję twojego umysłu.'
  },
  {
    id: 2,
    question: 'Czym różni się surowy SYGNAŁ SENSORYCZNY (Sensory Input) od DOZNANIA PERCEPCYJNEGO (Perceptual Experience)?',
    topic: 'Sygnał vs Doznanie',
    sectionRef: 'Sekcja 4.2',
    options: [
      { label: 'A', text: 'Sygnał to kod fizyczny (fale świetlne, drgania cząsteczek powietrza), a doznanie to świadoma, odgórnie zinterpretowana przez mózg reprezentacja (np. widok twarzy matki, dźwięk głosu).', isCorrect: true },
      { label: 'B', text: 'Sygnał występuje tylko u zwierząt, a doznanie tylko u ludzi.', isCorrect: false },
      { label: 'C', text: 'Sygnał sensoryczny jest zawsze w kolorze niebieskim.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, to pojęcia tożsame.', isCorrect: false }
    ],
    explanation: 'Oko nie widzi obrazów — rejestruje fotony i zamienia je na impulsy elektryczne. Dopiero kora wzrokowa, czerpiąc z pamięci i schematów, składa z tych impulsów świadome doznanie.',
    keyTakeaway: 'Świat na zewnątrz to zbiór fal i cząsteczek; kolory i dźwięki powstają dopiero w ciemności czaszki.'
  },
  {
    id: 3,
    question: 'W modelu Przetwarzania Predykcyjnego (Predictive Processing — Andy Clark, Karl Friston), czym jest BŁĄD PREDIKCJI (Prediction Error)?',
    topic: 'Przetwarzanie Predykcyjne',
    sectionRef: 'Sekcja 4.3',
    options: [
      { label: 'A', text: 'Pomyłką w prognozie pogody w telewizji.', isCorrect: false },
      { label: 'B', text: 'Różnicą pomiędzy odgórnym oczekiwaniem mózgu (hipotezą) a faktycznym sygnałem sensorycznym napływającym z narządów zmysłów.', isCorrect: true },
      { label: 'C', text: 'Wadą wrodzoną narządu wzroku.', isCorrect: false },
      { label: 'D', text: 'Awarią kory ruchowej wywołującą drżenie rąk.', isCorrect: false }
    ],
    explanation: 'Mózg nie czeka biernie na dane — generuje nieustanne przewidywania. Dopiero gdy rzeczywistość nie pasuje do modelu, powstaje błąd predykcji, który wędruje w górę i zmusza mózg do aktualizacji przekonań.',
    keyTakeaway: 'Uczenie się i percepcja to ciągła minimalizacja błędu predykcji.'
  },
  {
    id: 4,
    question: 'Dlaczego w komunikacji cyfrowej (SMS, Slack, e-mail) tak łatwo dochodzi do błędnej percepcji intencji nadawcy (np. podejrzenia o chłód lub złość)?',
    topic: 'Percepcja w Komunikacji Tekstowej',
    sectionRef: 'Sekcja 4.4 & 4.10',
    options: [
      { label: 'A', text: 'Ponieważ ekrany komputerów generują negatywne jony.', isCorrect: false },
      { label: 'B', text: 'Ponieważ tekst pozbawiony jest kluczowych nośników kontekstu (tonu głosu, mikroekspresji twarzy, mowy ciała), a mózg w warunkach niejednoznaczności odgórnie uzupełnia brakujące dane własnymi lękami i nastawieniem.', isCorrect: true },
      { label: 'C', text: 'Ponieważ programy pocztowe automatycznie usuwają słowa sympatii.', isCorrect: false },
      { label: 'D', text: 'Zjawisko to występuje tylko u nastolatków.', isCorrect: false }
    ],
    explanation: 'Krótka odpowiedź „Ok.” może być neutralnym potwierdzeniem, ale lękowy umysł odczyta ją jako bierną agresję. Brak danych sensorycznych wymusza odgórną projekcję.',
    keyTakeaway: 'W tekście nie słyszysz tonu nadawcy — słyszysz ton własnego stanu emocjonalnego.'
  },
  {
    id: 5,
    question: 'Czym jest słynny EFEKT McGURKA w psychologii percepcji?',
    topic: 'Efekt McGurka i Multisensoryczność',
    sectionRef: 'Sekcja 4.5',
    options: [
      { label: 'A', text: 'Złudzeniem optycznym sprawiającym, że proste linie wydają się krzywe.', isCorrect: false },
      { label: 'B', text: 'Zjawiskiem multisensorycznym, w którym ruch warg mówiącego (obraz „ga-ga”) nałożony na dźwięk („ba-ba”) powoduje, że mózg słyszy zupełnie nową sylabę („da-da”).', isCorrect: true },
      { label: 'C', text: 'Utratą smaku po oparzeniu języka.', isCorrect: false },
      { label: 'D', text: 'Trudnością w zapamiętywaniu imion nowo poznanych osób.', isCorrect: false }
    ],
    explanation: 'Efekt McGurka dowodzi, że to, co słyszymy, zależy od tego, co widzą nasze oczy. Mózg bezwzględnie scala dane z różnych zmysłów w jedną, spójną opowieść.',
    keyTakeaway: 'Zmysły nie działają w odosobnieniu — percepcja jest zawsze kompromisem multisensorycznym.'
  },
  {
    id: 6,
    question: 'W studium przypadku Piotra i negocjacji z niemieckim klientem (Sekcja 4.9), 15-sekundowe milczenie kontrahenta zostało błędnie zinterpretowane jako:',
    topic: 'Studium Przypadku Piotr Negocjacje',
    sectionRef: 'Sekcja 4.9',
    options: [
      { label: 'A', text: 'Atak serca u rozmówcy.', isCorrect: false },
      { label: 'B', text: 'Odrzucenie oferty i oburzenie zbyt wysoką ceną (co skłoniło Piotra do niepotrzebnego oddania 12% marży), podczas gdy kontrahent jedynie przeliczał kurs walutowy.', isCorrect: true },
      { label: 'C', text: 'Chęć natychmiastowego podpisania kontraktu na podwójną stawkę.', isCorrect: false },
      { label: 'D', text: 'Problemy techniczne z mikrofonem.', isCorrect: false }
    ],
    explanation: 'Piotr nałożył na neutralną pauzę filtr własnego lęku przed porażką. Zamiast zapytać o opinię, zaczął negocjować przeciwko samemu sobie.',
    keyTakeaway: 'Nigdy nie interpretuj milczenia jako odmowy — milczenie to po prostu brak danych.'
  },
  {
    id: 7,
    question: 'Na czym polega zasada STAŁOŚCI PERCEPCYJNEJ (Perceptual Constancy)?',
    topic: 'Stałość Percepcyjna',
    sectionRef: 'Sekcja 4.6',
    options: [
      { label: 'A', text: 'Na tym, że człowiek nigdy nie zmienia swoich poglądów politycznych.', isCorrect: false },
      { label: 'B', text: 'Na zdolności mózgu do postrzegania obiektów jako niezmiennych pod względem kształtu, wielkości i barwy, mimo że obraz rzucany na siatkówkę drastycznie zmienia się wraz z kątem i oświetleniem.', isCorrect: true },
      { label: 'C', text: 'Na stałym poziomie ciśnienia w gałce ocznej.', isCorrect: false },
      { label: 'D', text: 'Na zakazie fotografowania w muzeach.', isCorrect: false }
    ],
    explanation: 'Biała kartka papieru w blasku świecy odbija głównie światło żółto-czerwone, a w cieniu niebieskawe. Mimo to widzisz ją jako białą, ponieważ mózg „odejmuje” wpływ źródła światła.',
    keyTakeaway: 'Mózg koryguje dane wejściowe, by zapewnić stabilny obraz otoczenia.'
  },
  {
    id: 8,
    question: 'Dlaczego w eksperymencie z winem (Sekcja 4.8) badani oceniali to samo wino jako znacznie smaczniejsze, gdy podano im etykietę z ceną 400 PLN zamiast 20 PLN?',
    topic: 'Efekt Ramy (Framing)',
    sectionRef: 'Sekcja 4.8',
    options: [
      { label: 'A', text: 'Ponieważ badani chcieli przypodobać się kelnerowi.', isCorrect: false },
      { label: 'B', text: 'Ponieważ odgórne oczekiwanie wysokiej jakości (efekt ramy cenowej) realnie zmieniło aktywność neuronalną w korze oczodołowo-czołowej odpowiedzialnej za doznanie przyjemności smakowej.', isCorrect: true },
      { label: 'C', text: 'Ponieważ droższa butelka zawierała więcej alkoholu.', isCorrect: false },
      { label: 'D', text: 'Badani zmyślali swoje odpowiedzi i skaner fMRI niczego nie wykazał.', isCorrect: false }
    ],
    explanation: 'To nie była tylko uprzejmość werbalna. Skaner mózgu udowodnił, że mózg badanych REALNIE doświadczał wyższej przyjemności smakowej dzięki odgórnemu nastawieniu cenowemu!',
    keyTakeaway: 'Oczekiwanie kształtuje fizjologiczne doznanie przyjemności.'
  },
  {
    id: 9,
    question: 'W studium przypadku radiologa Roberta (Sekcja 4.11), przeoczenie cienia guza na zdjęciu rentgenowskim wynikało z:',
    topic: 'Studium Przypadku Robert Radiolog',
    sectionRef: 'Sekcja 4.11',
    options: [
      { label: 'A', text: 'Błędu nastawienia i zjawiska Satisfaction of Search (zadowolenia z pierwszego znaleziska), gdy po wykryciu złamanego żebra mózg wyłączył dalsze poszukiwania.', isCorrect: true },
      { label: 'B', text: 'Zepsutego monitora w pracowni RTG.', isCorrect: false },
      { label: 'C', text: 'Braków w wykształceniu radiologicznym.', isCorrect: false },
      { label: 'D', text: 'Podmiany zdjęć rentgenowskich przez pielęgniarkę.', isCorrect: false }
    ],
    explanation: 'Satisfaction of Search to klasyczny błąd percepcyjny w medycynie: znalezienie jednej ewidentnej patologii wycisza proces eksploracji wzrokowej, prowadząc do przeoczenia subtelniejszego zagrożenia.',
    keyTakeaway: 'Gdy znajdziesz pierwszą odpowiedź, nie wyłączaj reflektora uwagi.'
  },
  {
    id: 10,
    question: 'Czym jest Zakręt Wrzecionowaty (Fusiform Face Area — FFA) w płacie skroniowym mózgu?',
    topic: 'Rozpoznawanie Twarzy i FFA',
    sectionRef: 'Sekcja 4.7',
    options: [
      { label: 'A', text: 'Ośrodkiem sterującym trawieniem węglowodanów.', isCorrect: false },
      { label: 'B', text: 'Wyspecjalizowanym modułem neuronalnym odpowiedzialnym za holistyczne rozpoznawanie twarzy i odczytywanie mikroekspresji emocjonalnych.', isCorrect: true },
      { label: 'C', text: 'Kością podstawy czaszki.', isCorrect: false },
      { label: 'D', text: 'Złudzeniem optycznym powstającym w ciemnym pokoju.', isCorrect: false }
    ],
    explanation: 'Uszkodzenie FFA prowadzi do prozopagnozji — niezdolności do rozpoznawania twarzy (nawet własnej w lustrze), mimo doskonałego wzroku i zdolności rozpoznawania innych przedmiotów.',
    keyTakeaway: 'Mózg posiada dedykowany ewolucyjnie procesor do czytania ludzkich twarzy.'
  },
  {
    id: 11,
    question: 'Co jest najskuteczniejszym narzędziem poznawczym chroniącym przed błędami percepcji społecznej w codziennym życiu?',
    topic: 'Technika Hipotez Alternatywnych',
    sectionRef: 'Sekcja 4.12',
    options: [
      { label: 'A', text: 'Wiara we własną nieomylną intuicję.', isCorrect: false },
      { label: 'B', text: 'Generowanie co najmniej 3 alternatywnych wyjaśnień zachowania drugiej osoby zanim podejmiemy działanie (np. zamiast „ignoruje mnie” → „może ma trudny dzień”, „może nie widział wiadomości”, „może prowadzi auto”).', isCorrect: true },
      { label: 'C', text: 'Natychmiastowe zerwanie kontaktu z każdym, kto nie odpisuje w 5 minut.', isCorrect: false },
      { label: 'D', text: 'Zgłaszanie każdego nieporozumienia na policję.', isCorrect: false }
    ],
    explanation: 'Wymuszenie wygenerowania trzech hipotez alternatywnych przełamuje automatyzm kory przedczołowej i zapobiega przedwczesnemu domknięciu poznawczemu (Cognitive Closure).',
    keyTakeaway: 'Zawsze zadaj sobie pytanie: „Jakie inne wyjaśnienie tego faktu jest możliwe?”.'
  },
  {
    id: 12,
    question: 'Dlaczego zdanie „Widzę to na własne oczy, więc to musi być prawda” jest naukowo fałszywe?',
    topic: 'Podsumowanie Rozdziału 4',
    sectionRef: 'Sekcja 4.13',
    options: [
      { label: 'A', text: 'Ponieważ zmysł wzroku jest w 100% bezużyteczny.', isCorrect: false },
      { label: 'B', text: 'Ponieważ to, co nazywamy „widzeniem”, jest odgórną rekonstrukcją i hipotezą mózgu opartą na oczekiwaniach, pamięci i kontekście, a nie bezpośrednim odlewem rzeczywistości.', isCorrect: true },
      { label: 'C', text: 'Ponieważ oczy rejestrują wyłącznie dźwięki.', isCorrect: false },
      { label: 'D', text: 'Ponieważ rzeczywistość fizyczna nie istnieje.', isCorrect: false }
    ],
    explanation: 'Od iluzji optycznych po błędy atrybucji w relacjach — neuronauka udowadnia, że doznanie wzrokowe jest produktem zaawansowanej obróbki montażowej naszego mózgu.',
    keyTakeaway: 'Oczy dostarczają surowca, ale to umysł pisze scenariusz filmu.'
  }
];

export const chapterFour: Chapter = {
  number: 4,
  title: 'Percepcja',
  subtitle: 'Dlaczego nie odbieramy rzeczywistości dokładnie takiej, jaka jest?',
  leadParagraph:
    'Gdy otwierasz oczy, masz przemożne wrażenie, że po prostu patrzysz na świat przez przezroczystą szybę i rejestrujesz fakty takimi, jakimi są. To fundamentalne złudzenie zwane realizmem naiwnym. W rzeczywistości Twoje doznanie percepcyjne nie jest odbiciem świata w lustrze, lecz dynamiczną, aktywną konstrukcją stworzoną przez Twój mózg. W tym rozdziale zbadamy, jak doświadczenia, kontekst i odgórne oczekiwania kształtują to, co uważasz za obiektywną prawdę.',
  totalEstimatedPages: 42,
  sections: [
    {
      id: 'sec-4-1',
      pageNumber: 221,
      sectionNumber: '4.1',
      title: 'Złudzenie Realizmu Naiwnego: Dlaczego Dwie Osoby Widzą Różne Rzeczy',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Mózg jest maszyną predykcyjną. Nie czeka biernie na sygnały ze świata – nieustannie zgaduje, co znajduje się na zewnątrz, i koryguje swoje hipotezy tylko wtedy, gdy popełni błąd.',
        author: 'Andy Clark, "Surfing Uncertainty"'
      },
      paragraphs: [
        'Wyobraź sobie salę konferencyjną, w której dwaj dyrektorzy – Piotr i Andrzej – słuchają tej samej prezentacji handlowej nowego dostawcy oprogramowania. Prelegent przedstawia slajd z wykresem awaryjności systemu wynoszącym 0.05% w skali roku.',
        'Piotr, który w poprzedniej firmie doświadczył katastrofalnego wycieku danych z powodu niedopracowanego kodu, patrzy na ten sam wykres i widzi śmiertelne zagrożenie. W jego głowie zapala się czerwona lampka: „Ukrywają prawdziwe ryzyko! Próbują nas uśpić ładnym slajdem”.',
        'Andrzej, z natury optymista stawiający na szybkie skalowanie biznesu, patrzy na ten sam slajd i uśmiecha się szeroko: „Genialna stabilność! Dokładnie tego potrzebujemy, by ruszyć z kopyta”.',
        'Gdy po spotkaniu obaj panowie wychodzą na korytarz, wywiązuje się między nimi ostra sprzeczka. Każdy z nich zarzuca drugiemu ślepotę, brak profesjonalizmu lub złą wolę. Żaden z nich nie zdaje sobie sprawy, że padł ofiarą REALIZMU NAIWNEGO (Naive Realism) – przekonania, że nasze narządy zmysłów dostarczają nam bezpośredniego, nieprzetworzonego obrazu rzeczywistości, a każdy, kto widzi rzeczy inaczej, musi być w błędzie lub manipulować.'
      ],
      subsections: [
        {
          title: '3 Aksjomaty Realizmu Naiwnego wg Lee Rossa',
          paragraphs: [
            'Profesor Lee Ross ze Stanford University zidentyfikował trzy ciche założenia, które każdy z nas podświadomie przyjmuje:',
            '1. „Ja widzę rzeczy takimi, jakimi są w rzeczywistości (obiektywnie i bezstronnie)”.',
            '2. „Inni racjonalni ludzie, mający dostęp do tych samych informacji, powinni dojść do dokładnie takich samych wniosków jak ja”.',
            '3. „Jeśli ktoś nie zgadza się ze mną, to albo jest niedoinformowany, albo zbyt leniwy by pomyśleć, albo kieruje się ukrytym, niecnym interesem”.',
            'To właśnie realizm naiwny jest praprzyczyną większości wojen ideologicznych, konfliktów małżeńskich i sporów biznesowych.'
          ]
        }
      ]
    },
    {
      id: 'sec-4-2',
      pageNumber: 227,
      sectionNumber: '4.2',
      title: 'Od Sygnału Sensorycznego do Doznania: Odgórne (Top-Down) vs Oddolne (Bottom-Up)',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Aby zrozumieć, jak powstaje wrażenie zmysłowe, musimy rozróżnić dwa pojęcia:',
        '1. BODZIEC FIZYCZNY / SYGNAŁ (Sensory Input): Fale elektromagnetyczne wpadające do siatkówki oka, fale akustyczne uderzające w błonę bębenkową czy cząsteczki chemiczne wiążące się z nabłonkiem węchowym. To surowy, pozbawiony znaczenia kod fizyczny.',
        '2. DOZNANIE PERCEPCYJNE (Perceptual Experience): Świadomy, zinterpretowany obraz w umyśle – widok czerwonego jabłka, dźwięk głosu przyjaciela, zapach świeżej kawy.',
        'Proces syntezy zachodzi przy udziale dwóch przeciwstawnych kierunków przepływu informacji:',
        '• Przetwarzanie Oddolne (Bottom-Up Processing): Analiza wstępująca od surowych cech bodźca (krawędzie, jasność, częstotliwość) w górę do struktur wyższych. To rejestracja danych ze środowiska.',
        '• Przetwarzanie Odgórne (Top-Down Processing): Analiza zstępująca. Wyższe ośrodki kory mózgowej (pamięć, oczekiwania, schematy pojęciowe, język, stan emocjonalny) „spływają” w dół, narzucając surowym danym konkretną interpretację.',
        'Twój świadomy obraz świata w 80% składa się z przetwarzania odgórnego, a tylko w 20% z surowego sygnału sensorycznego!'
      ],
      subsections: [
        {
          title: 'Wgląd Neuroanatomiczny',
          paragraphs: [
            'W ciele kolankowatym bocznym (LGN) – stacji przekaźnikowej wzroku we wzgórzu – liczba połączeń zstępujących z kory mózgowej do wzgórza jest niemal DZIESIĘCIOKROTNIE WIĘKSZA niż liczba połączeń wstępujących z siatkówki oka do kory!',
            'To dowód anatomiczny: mózg wysyła do swoich „czujników” dziesięć razy więcej rozkazów o tym, czego ma się spodziewać, niż przyjmuje surowych danych ze świata.'
          ]
        }
      ]
    },
    {
      id: 'sec-4-3',
      pageNumber: 233,
      sectionNumber: '4.3',
      title: 'Mózg jako Maszyna Predykcyjna (Predictive Processing i Mózg Bayesowski)',
      category: 'neuronauka',
      readingTimeMinutes: 16,
      paragraphs: [
        'Przez dekady w psychologii dominował tzw. model biernego odbiornika: oko rejestruje fotony jak soczewka aparatu fotograficznego, przesyła sygnał po nerwie wzrokowym, a kora składa z tego wierny obraz świata. Współczesna neuronauka poznawcza całkowicie odrzuciła ten naiwny pogląd na rzecz koncepcji PRZETWARZANIA PREDYKCYJNEGO (Predictive Processing) oraz hipotezy MÓZGU BAYESOWSKIEGO (Bayesian Brain), wywodzącej się z idei „nieświadomego wnioskowania” Hermanna von Helmholtza i rozwiniętej przez Karla Fristona i Andy\'ego Clarka.',
        'Zgodnie z tą przełomową teorią, Twój mózg usadzony w absolutnej ciemności kościstej puszki czaszki NIE CZEKA na bodźce ze świata zewnętrznego. Zamiast tego bezustannie generuje ODGÓRNE HIPOTEZY i PRZEWIDYWANIA (tzw. Priors — przekonania pierwotne oparte na wcześniejszym doświadczeniu, ewolucji i pamięci).',
        'Kora mózgowa przesyła te predykcje w dół hierarchii sensorycznej. Sygnały wpadające przez siatkówkę oka czy błonę bębenkową nie służą do „tworzenia obrazu”, lecz wyłącznie do konfrontacji z modelem: jeśli sygnał zmysłowy różni się od oczekiwania, powstaje tzw. BŁĄD PREDIKCJI (Prediction Error).',
        'Świadome spostrzeżenie (tzw. Posterior) to w ujęciu statystyki bayesowskiej optymalny kompromis pomiędzy tym, czego mózg się spodziewał (Prior), a tym, co zasygnalizowały narządy zmysłów (Likelihood). Co fascynujące, uwaga pełni w tym procesie rolę tzw. ważenia precyzji (Precision Weighting): skierowanie uwagi na dany obiekt zwiększa zaufanie do błędu predykcji, zmuszając mózg do skorygowania wcześniejszych założeń.'
      ],
      subsections: [
        {
          title: 'Wgląd Naukowy w Przetwarzanie Predykcyjne',
          paragraphs: [
            'Współczesny neurobiolog prof. Anil Seth z University of Sussex określa ten mechanizm mianem „kontrolowanej halucynacji” (Controlled Hallucination).',
            'Gdy Twoje odgórne przewidywania zgadzają się z sygnałem sensorycznym ze środowiska, nazywasz to obiektywną rzeczywistością. Gdy przewidywania rozminą się z sygnałem, a mózg odmówi ich korekty — powstaje iluzja, urojenie lub halucynacja.'
          ],
          highlightBox: {
            title: 'Wgląd Naukowy',
            content: 'Percepcja to kontrolowana halucynacja. Gdy Twoje przewidywania zgadzają się z sygnałem sensorycznym, nazywasz to rzeczywistością. Gdy przewidywania rozminą się z sygnałem i nie ulegną korekcie – powstaje iluzja lub halucynacja.',
            type: 'neuro'
          }
        }
      ]
    },
    {
      id: 'sec-4-4',
      pageNumber: 239,
      sectionNumber: '4.4',
      title: '„Percepcja ≠ Interpretacja”: Anatomia Przypisywania Znaczenia Neutralnym Faktom',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Jednym z najważniejszych rozróżnień psychologii poznawczej jest granica między czystym spostrzeżeniem a jego interpretacją.',
        'Spójrz na poniższe pary:',
        '• FAKT PERCEPCYJNY: Współpracownik przeszedł korytarzem, patrząc w ekran telefonu i nie powiedział „Dzień dobry”.',
        '• INTERPRETACJA: „On mnie lekceważy, ma do mnie pretensje o wczorajsze zebranie”.',
        '• FAKT PERCEPCYJNY: Partner odpisał na długą wiadomość jednym słowem: „Ok”.',
        '• INTERPRETACJA: „Jest wściekły, nie zależy mu na mnie, dystansuje się”.',
        'Większość ludzi przeżywa cierpienie nie z powodu faktów percepcyjnych, lecz z powodu fabuły, którą ich umysł natychmiast dokleja do neutralnego zjawiska.'
      ]
    },
    {
      id: 'sec-4-5',
      pageNumber: 245,
      sectionNumber: '4.5',
      title: 'Percepcja Zmysłowa i Integracja Multisensoryczna: Efekt McGurka',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Zmysły nie pracują w hermetycznych silosach. W 1976 roku Harry McGurk i John MacDonald opisali zjawisko, które do dziś fascynuje studentów neuronauki.',
        'Uczestnikom puszczono nagranie wideo, na którym kobieta wypowiadała sylabę „ga-ga”. Ścieżka dźwiękowa została jednak podmieniona na wyraźne audio: „ba-ba”.',
        'Gdy badani zamykali oczy, słyszeli czyste „ba-ba”. Lecz gdy tylko otwierali oczy i patrzyli na ruch warg lektorki, ich mózg scalał wzrok i słuch, w efekcie czego słyszeli sylabę... „DA-DA”!',
        'Efekt McGurka zachodzi automatycznie, nawet gdy wiesz, na czym polega trik. Pokazuje on, jak kora mózgowa rekonfiguruje surowy sygnał akustyczny, byle tylko zachować spójność z obrazem wzrokowym.'
      ]
    },
    {
      id: 'sec-4-6',
      pageNumber: 251,
      sectionNumber: '4.6',
      title: 'Stałość Percepcyjna (Perceptual Constancy) i Złudzenia Optyczne jako Triumf Wnioskowania',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Gdy znajomy oddala się od Ciebie ulicą na odległość 50 metrów, obraz jego sylwetki rzutowany na Twoją siatkówkę zmniejsza się ponad dziesięciokrotnie. Dlaczego nie krzyczysz w panice: „Mój znajomy skurczył się do rozmiarów krasnala!”?',
        'Dzięki mechanizmowi STAŁOŚCI WIELKOŚCI (Size Constancy) mózg automatycznie przelicza odległość i utrzymuje stałe poczucie rozmiaru obiektu. Wynika to z faktu, że widzenie rozwiązuje tzw. PROBLEM ODWROTNY W OPTYCE (Inverse Optics Problem): nieskończenie wiele różnych trójwymiarowych obiektów może dać dokładnie taki sam dwuwymiarowy rzut na siatkówce. Mózg musi zatem zgadywać najbardziej prawdopodobną przyczynę fizyczną.',
        'Ten sam mechanizm odpowiada za Stałość Jasności i Koloru. Gdy w 2015 roku internet oszalał na punkcie słynnego zdjęcia „Sukienki” (The Dress – czy jest biało-złota, czy niebiesko-czarna?), spór wynikał właśnie z tego, jak mózg każdego obserwatora automatycznie „odejmował” domniemane oświetlenie sceny (światło dzienne chłodne vs sztuczne światło ciepłe).'
      ],
      subsections: [
        {
          title: 'Szachownica Adelsona: Dlaczego Złudzenia NIE SĄ Wadą Mózgu?',
          paragraphs: [
            'W słynnym złudzeniu szachownicy Edwarda Adelsona z MIT dwa pola oznaczona literami A i B wydają się diametralnie różne — pole A wygląda na ciemnoszary kwadrat, a pole B na jasny kwadrat w cieniu cylindra. Jednak pomiar fotometryczny w programie graficznym ujawnia szokujący fakt: oba pola odbijają DOKŁADNIE IDENTYCZNĄ liczbę fotonów i mają tę samą wartość RGB (120, 120, 120)!',
            'Wielu uważa to za dowód na „ułomność ludzkich zmysłów”. W rzeczywistości jest dokładnie na odwrót: to dowód na absolutny geniusz wnioskowania statystycznego! W realnym świecie obiekt leżący w cieniu odbija mniej światła. Gdyby mózg widział tylko surowe fotony (jak światłomierz), uznałby białą koszulę w cieniu za czarną. Aby odtworzyć obiektywną prawdę o materii, mózg MUSI uwzględnić cień i sztucznie rozjaśnić pole B. To, co nazywamy złudzeniem optycznym, jest po prostu ujawnieniem genialnych, optymalnych reguł bayesowskich, bez których bylibyśmy w świecie zupełnie ślepi.'
          ],
          highlightBox: {
            title: 'Wgląd w Architekturę Percepcji',
            content: 'Złudzenia zmysłowe nie dowodzą, że Twój mózg jest zepsuty. Dowodzą, że Twój mózg jest wybitnym matematykiem probabilistycznym, który rozwiązuje niejednoznaczne równania fizyki w ułamku sekundy.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-4-7',
      pageNumber: 257,
      sectionNumber: '4.7',
      title: 'Percepcja Społeczna: Teoria Umysłu (ToM), Czytanie z Twarzy i Zakręt Wrzecionowaty',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Człowiek jest zaprogramowany do widzenia twarzy nawet tam, gdzie ich nie ma (zjawisko pareidolii – twarze w chmurach, na przypieczonym toście czy w reflektorach samochodów). Odpowiada za to Zakręt Wrzecionowaty (Fusiform Face Area — FFA).',
        'Równolegle rozwijamy Teorię Umysłu (Theory of Mind — ToM) – umiejętność modelowania stanów psychicznych, motywów i wiedzy innych ludzi w oparciu o ich mikroekspresje i zachowania.',
        'Niebezpieczeństwo polega na tym, że mechanizm ten często ulega nadinterpretacji: przypisujemy innym skomplikowane, wrogie intencje w sytuacjach, które wynikały ze zwykłego przypadku lub zmęczenia (Podstawowy Błąd Atrybucji).'
      ]
    },
    {
      id: 'sec-4-8',
      pageNumber: 263,
      sectionNumber: '4.8',
      title: 'Moc Kontekstu i Ramy Interpretacyjne (Framing Effects): Wino, Ceny i Etykiety',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'To samo słowo, ten sam gest czy ten sam obiekt fizyczny nabiera zupełnie innego znaczenia w zależności od ramy kontekstowej, w której występuje.',
        '• Kontekst Społeczny: Zmarszczenie brwi przez przełożonego podczas prezentacji może być zinterpretowane jako wściekłość (gdy boimy się o posadę) albo jako głębokie skupienie merytoryczne (gdy czujemy się pewnie).',
        '• Kontekst Cenowy: Dwa identyczne wina podane w blind-teście smakują badanym zupełnie inaczej, gdy poinformuje się ich, że jedno kosztuje 20 PLN, a drugie 400 PLN. Skaner fMRI pokazuje realnie wyższą aktywację ośrodka przyjemności (orbitofrontal cortex) przy droższej etykiecie!',
        'Mózg nie ocenia rzeczy w próżni – zawsze tworzy względny kontrast.'
      ]
    },
    {
      id: 'sec-4-9',
      pageNumber: 269,
      sectionNumber: '4.9',
      title: 'Studium Przypadku: Piotr i Kontrakt Negocjacyjny z Niemieckim Klientem',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Piotr (44 lata, dyrektor sprzedaży) prowadził kluczowe negocjacje handlowe z nowym partnerem zagranicznym.'
      ],
      caseStudyRef: {
        id: 'cs-piotr-perception',
        title: 'Filtr Podejrzliwości: Jak Nastawienie Odkształca Przebieg Negocjacji',
        subtitle: 'Gdy milczenie kontrahenta zostaje zinterpretowane jako próba szantażu',
        protagonist: 'Piotr, Dyrektor Handlowy (44 lata)',
        context: 'Negocjacje umowy dostawy podzespołów przemysłowych z kontrahentem z Niemiec.',
        story: [
          'Podczas kluczowego spotkania online niemiecki partner po usłyszeniu propozycji cenowej Piotra zamilkł na 15 sekund, spuścił wzrok i zaczął robić notatki w skórzanym zeszycie.',
          'Piotr, wychowany w kulturze natychmiastowych ripost i mający za sobą trudny rok w firmie, zinterpretował to milczenie odgórnie jako: „Oni uważają moją cenę za absurdalną, zaraz zerwą rozmowy i zostanę z niczym”.',
          'Pod wpływem tego wygenerowanego w własnej głowie lęku, zanim Niemiec zdążył odezwać się choćby słowem, Piotr pękł i powiedział gwałtownie: „Dobrze, jeśli ta kwota jest dla was nie do przyjęcia, możemy zejść o 12% z marży!”',
          'Dopiero po podpisaniu umowy okazało się, że niemiecki partner milczał wyłącznie dlatego, że powoli przeliczał w pamięci kurs euro na marki i uważał pierwotną ofertę Piotra za bardzo atrakcyjną! Przez własny filtr percepcyjny Piotr oddał 12% zysku bez absolutnie żadnego powodu.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Projekcja percepcyjna niepewności i odgórne nadanie negatywnego znaczenia neutralnemu bodźcowi (milczenie).',
          cognitiveBiases: [
            {
              name: 'Czytanie w Myślach (Mind Reading)',
              description: 'Przekonanie Piotra, że wie dokładnie, co oznacza pauza w wypowiedzi kontrahenta.',
              impact: 'Spowodowało niepotrzebną uległość cenową.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Racjonalizacja Prewencyjna',
              explanation: '„Lepszy gorszy kontrakt niż żaden” (usprawiedliwienie oddania marży przed weryfikacją faktów).'
            }
          ],
          emotionalDynamic: 'Niewyrażona niepewność zamieniona w nagłą panikę uległościową.'
        },
        decisionProcessAnalysis: {
          trigger: '15-sekundowe milczenie partnera negocjacyjnego.',
          attentionFocus: 'Spuszczony wzrok kontrahenta.',
          interpretation: '„Oni odrzucą ofertę, zaraz pożegnam się z prowizją”.',
          emotion: 'Nagle wzbudzony lęk przed porażką.',
          impulse: 'Zredukować napięcie poprzez ustępstwo.',
          action: 'Samowolne obniżenie ceny o 12%.',
          consequence: 'Utrata kilkudziesięciu tysięcy złotych zysku dla firmy.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Kora Skroniowo-Ciemieniowa (TPJ / ToM)', role: 'Modelowanie intencji innych osób', activationState: 'Zniekształcenie przez lęk' }
          ],
          neurotransmitters: [
            { name: 'Adrenalina', roleInScenario: 'Przyspieszyła decyzję bez zaczekania na sygnał ze strony kontrahenta.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 5000 ms', process: 'Milczenie kontrahenta aktywuje hipotetyczny model porażki w umyśle Piotra.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Wytrzymanie Pauzy', script: 'Spokojny oddech i zadanie pytania otwartego: „Jak oceniają Państwo tę propozycję?”.', rationale: 'Pozwala poznać faktyczne stanowisko drugiej strony bez zgadywania.' }
          ]
        },
        keyTakeaway: 'Nigdy nie licytuj przeciwko samemu sobie na podstawie niepotwierdzonych domysłów percepcyjnych.'
      }
    },
    {
      id: 'sec-4-10',
      pageNumber: 275,
      sectionNumber: '4.10',
      title: 'Studium Przypadku: Anna i Kryzys w Związku Wywołany Neutralnym SMS-em',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Drugie studium przypadku bada zjawisko naddawania wrogiej intencji w relacji intymnej przez pryzmat komunikacji cyfrowej.'
      ],
      caseStudyRef: {
        id: 'cs-anna-text',
        title: 'Kropka Nienawiści: Gdy Brak Emotikonu Wywołuje Wojnę Domową',
        subtitle: 'Jak jedno słowo „Ok.” uruchomiło lawinę lęku przed odrzuceniem',
        protagonist: 'Anna, Projektantka Wnętrz (29 lat)',
        context: 'Wymiana wiadomości z partnerem w trakcie pracowitego popołudnia.',
        story: [
          'Anna napisała do swojego partnera Tomasza czułą, długą wiadomość z pytaniem o plany na weekend: „Kochanie, pomyślałam, że moglibyśmy wyskoczyć w sobotę do Kazimierza, zarezerwowałam wstępnie uroczy pensjonat, co myślisz? Bardzo za tobą tęsknię!”.',
          'Tomasz, który w tym momencie stał w zatłoczonym tramwaju z ciężką torbą i odpisywał jedną ręką, odpisał zwięźle: „Ok.” (ze zwykłą kropką na końcu).',
          'W głowie Anny doszło do percepcyjnego trzęsienia ziemi: „Ok z kropką?! Bez buziaka? Bez wykrzyknika? On ma mnie gdzieś! Gdyby mu zależało, odpisałby normalnie. Na pewno kogoś ma albo ma mnie dość”.',
          'Zamiast zadzwonić i zapytać, Anna przez 4 godziny analizowała każde słowo, budując w sobie spiralę żalu. Gdy Tomasz wrócił do domu, przywitał go chłód i lawina oskarżeń: „Jeśli nie chcesz ze mną być, po prostu mi to powiedz, a nie piszesz protekcjonalne Ok!”. Tomasz nie miał pojęcia, o co chodzi.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Błąd atrybucji wrogich intencji (Hostile Attribution Bias) napędzany lękiem przywiązaniowym (Anxious Attachment).',
          cognitiveBiases: [
            {
              name: 'Wybiórcza Koncentracja na Formie',
              description: 'Przypisanie obecności kropki głębokiego znaczenia emocjonalnego bez uwzględnienia fizycznego kontekstu nadawcy.',
              impact: 'Zniszczenie wieczoru i eskalacja niepotrzebnego konfliktu.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Atak Wyprzedzający',
              explanation: 'Uderzenie w partnera, by zabezpieczyć się przed wyobrażonym odrzuceniem.'
            }
          ],
          emotionalDynamic: 'Głęboki lęk przed utratą miłości zamieniony w zgorzkniałą pretensję.'
        },
        decisionProcessAnalysis: {
          trigger: 'Wiadomość „Ok.” bez emotikonu.',
          attentionFocus: 'Kropka i brak czułych słów.',
          interpretation: '„On mnie odrzuca i lekceważy”.',
          emotion: 'Poczucie zranienia, panika relacyjna.',
          impulse: 'Zażądanie konfrontacji.',
          action: 'Chłodne przyjęcie partnera i awantura.',
          consequence: 'Wzajemne poczucie niezrozumienia i oddalenie emocjonalne.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'dACC', role: 'Ból odrzucenia społecznego', activationState: 'Fałszywy alarm odrzucenia' },
            { region: 'mPFC', role: 'Teoria umysłu', activationState: 'Zniekształcona projekcja lęku' }
          ],
          neurotransmitters: [
            { name: 'Spadek serotoniny', roleInScenario: 'Ułatwił obsesyjne ruminacje na temat pojedynczego słowa.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 100 ms', process: 'Brak emotikonu rejestrowany jako sygnał chłodu w ciele migdałowatym.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Zasada Brzytwy Hanlona', script: '„Nigdy nie przypisuj złośliwości temu, co można łatwo wyjaśnić pośpiechem, brakiem czasu lub niewygodną klawiaturą”.', rationale: 'Chroni przed nadinterpretacją wiadomości cyfrowych.' }
          ]
        },
        keyTakeaway: 'Tekst cyfrowy to najgorszy przekaźnik uczuć. Nigdy nie interpretuj stanu emocjonalnego człowieka na podstawie liczby znaków w SMS-ie.'
      }
    },
    {
      id: 'sec-4-11',
      pageNumber: 281,
      sectionNumber: '4.11',
      title: 'Studium Przypadku: Robert i Przeoczenie Zmiany na Zdjęciu Rentgenowskim',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Trzecie studium bada profesjonalną percepcję medyczną i zjawisko Satisfaction of Search.'
      ],
      caseStudyRef: {
        id: 'cs-robert-radiology',
        title: 'Satisfaction of Search: Pułapka Pierwszego Sukcesu Diagnostycznego',
        subtitle: 'Gdy znalezienie złamanego żebra uśpiło czujność na cień nowotworowy',
        protagonist: 'Dr Robert, Specjalista Radiologii (48 lat)',
        context: 'Opisywanie zdjęć RTG klatki piersiowej pacjenta po wypadku komunikacyjnym pod koniec dyżuru.',
        story: [
          'Doktor Robert analizował zdjęcie rentgenowskie klatki piersiowej 55-letniego mężczyzny skierowanego z izby przyjęć po upadku ze schodów. W skierowaniu widniało: „Podejrzenie złamania żeber po stronie prawej”.',
          'Po 10 sekundach Robert zauważył wyraźne, bezdyskusyjne pęknięcie V i VI żebra. Jego mózg poczuł ulgę: zagadka rozwiązana, hipoteza ze skierowania potwierdzona.',
          'Wpisał do systemu opis złamania i zamknął plik, przechodząc do kolejnego pacjenta. Robert nie zauważył, że na szczycie lewego płuca – całkowicie po przeciwnej stronie klatki – znajdował się subtelny, 8-milimetrowy cień okrągły, będący wczesnym stadium raka płuca.',
          'Pacjent wrócił po roku z zaawansowanym stadium nowotworu. Dochodzenie wykazało, że Robert padł ofiarą klasycznego błędu percepcyjnego znanego w medycynie jako SATISFACTION OF SEARCH (Zadowolenie z Poszukiwania).'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Przedwczesne domknięcie poznawcze (Cognitive Closure) wywołane odnalezieniem pierwszej ewidentnej nieprawidłowości pasującej do pierwotnego założenia.',
          cognitiveBiases: [
            {
              name: 'Efekt Potwierdzenia (Confirmation Bias)',
              description: 'Szukanie wyłącznie potwierdzenia hipotezy postawionej przez lekarza z izby przyjęć.',
              impact: 'Przeoczenie patologii niezwiązanej z urazem.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Ekonomia Poznawcza pod Wpływem Zmęczenia',
              explanation: 'Umysł zamyka proces eksploracyjny, by zaoszczędzić wyczerpane zasoby analityczne.'
            }
          ],
          emotionalDynamic: 'Uczucie zadowolenia ze sprawnej diagnozy maskujące brak rzetelnej weryfikacji.'
        },
        decisionProcessAnalysis: {
          trigger: 'Zauważenie złamania żebra.',
          attentionFocus: 'Prawa strona klatki piersiowej.',
          interpretation: '„Mam to, sprawa jasna”.',
          emotion: 'Ukojenie poznawcze.',
          impulse: 'Zamknięcie opisu.',
          action: 'Podpisanie raportu bez skanowania lewego szczytu płuca.',
          consequence: 'Opóźnienie diagnozy onkologicznej o 12 miesięcy.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Dorsal Attentional Network', role: 'Wolicjonalne przeszukiwanie przestrzeni', activationState: 'Przedwczesne wygaszenie' }
          ],
          neurotransmitters: [
            { name: 'Spadek acetylocholiny', roleInScenario: 'Zmęczenie pod koniec 10-godzinnego dyżuru drastycznie obniżyło czujność wzrokową.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 10 s', process: 'Szybka detekcja złamania wygasza motywację do dalszej eksploracji.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Procedura Zorganizowanego Przeglądu (Systematic Review Protocol)', script: 'Bezwzględny nakaz obejrzenia wszystkich narządów w stałej kolejności (kości → miąższ płuc → sylwetka serca → przepona) bez względu na to, co znaleziono wcześniej.', rationale: 'Chroni przed przedwczesnym domknięciem poszukiwań.' }
          ]
        },
        keyTakeaway: 'Znalezienie jednego błędu nie oznacza, że nie ma kolejnego. Prawdziwa weryfikacja kończy się dopiero po sprawdzeniu całości.'
      }
    },
    {
      id: 'sec-4-12',
      pageNumber: 287,
      sectionNumber: '4.12',
      title: 'Ćwiczenia Percepcyjne: Rozdzielanie Bodźca od Oceny i Test Hipotez Alternatywnych',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Wyćwiczenie odporności na błędy percepcyjne wymaga wprowadzenia stałego nawyku poznawczego: techniki Hipotez Alternatywnych.'
      ],
      subsections: [
        {
          title: 'Algorytm „Trzech Wyjaśnień” w Sytuacjach Niepewności',
          paragraphs: [
            'Za każdym razem, gdy zachowanie kogoś wywoła w Tobie nagły odruch oceny (np. złość, lęk, podejrzenie), wykonaj 3 kroki:',
            'Krok 1: Zapisz czysty FAKT (to, co widzi kamera).',
            'Krok 2: Zapisz swoją PIERWSZĄ hipotezę automatyczną (np. „Robi to na złość”).',
            'Krok 3: Wymyśl i zapisz DWIE ZUPEŁNIE INNE hipotezy wyjaśniające ten sam fakt:',
            '• Hipoteza biologiczna (np. jest skrajnie zmęczony, chory, boli go ząb).',
            '• Hipoteza okolicznościowa (np. dostał nagłą wiadomość rodzinną, zacięła mu się aplikacja).',
            'Samo zobaczenie trzech równorzędnych opcji na kartce natychmiast wycisza pobudzenie w ciele migdałowatym!'
          ]
        }
      ]
    },
    {
      id: 'sec-4-13',
      pageNumber: 293,
      sectionNumber: '4.13',
      title: 'Podsumowanie Rozdziału 4, Egzamin Końcowy i Most do Rozdziału 5 (Pamięć)',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Percepcja jest wysoce zindywidualizowaną syntezą surowego sygnału sensorycznego i odgórnych hipotez naszego mózgu. Nie widzimy świata dokładnie takim, jaki jest, lecz takim, jakim nasz mózg przewiduje go na podstawie dotychczasowych wzorców.',
        'Sprawdź swoje opanowanie tych idei w poniższym Egzaminie Końcowym z Rozdziału 4.',
        'A skąd mózg czerpie te odgórne wzorce, schematy i oczekiwania, którymi nakłada ramy na bieżącą rzeczywistość? Źródłem tych wzorców jest nasz magazyn doświadczeń. W kolejnym rozdziale zbadamy strukturę, w której zapisane są nasze przeżycia – i odkryjemy, dlaczego przypominanie sobie zdarzeń nie przypomina odtwarzania nagrania z kamery. Zapraszamy do Rozdziału 5: PAMIĘĆ.'
      ]
    }
  ]
};
