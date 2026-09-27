import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

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
      { label: 'A', text: 'Wszelkiej komunikacji biznesowej, merytorycznej i przekazu wiedzy akademickiej.', isCorrect: true },
      { label: 'B', text: 'Szybkości pisania na klawiaturze w biurze.', isCorrect: false },
      { label: 'C', text: 'Rozpoznawania fałszywych banknotów w banku centralnym.', isCorrect: false },
      { label: 'D', text: 'Badania fal mózgowych podczas snu głębokiego NREM.', isCorrect: false }
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
      { label: 'C', text: 'Wiadomości e-mail docierają ze zbyt dużym opóźnieniem do serwerów pocztowych.', isCorrect: false },
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
      { label: 'B', text: 'Model FUKO (Fakty, Uczucia/Konsekwencje, Konkret, Oczekiwanie na przyszłość) z uprzednim zapytaniem o gotowość na rozmowę.', isCorrect: true },
      { label: 'C', text: 'Ostra publiczna reprymenda na forum zespołu, by zmotywować pozostałych.', isCorrect: false },
      { label: 'D', text: 'Wysyłanie anonimowych notatek z listą wad charakteru pracownika.', isCorrect: false }
    ],
    explanation: 'Model FUKO bazuje na obiektywnych faktach bez oceny osoby („Raport wpłynął 2 godziny po terminie”, a nie: „Jesteś nieodpowiedzialny”). Zmniejsza to zagrożenie statusowe w mózgu i chroni przed porwaniem emocjonalnym.',
    keyTakeaway: 'Opisuj zachowanie, nie tożsamość człowieka.'
  },
  {
    id: 6,
    question: 'Czym różni się parafraza od papugowania (prostego powtarzania słów) w aktywnym słuchaniu (Sekcja 7.4)?',
    topic: 'Architektura Parafrazy',
    sectionRef: 'Sekcja 7.4',
    options: [
      { label: 'A', text: 'Parafraza polega na przełożeniu sensu i emocji rozmówcy na WŁASNE słowa, co dowodzi zrozumienia, podczas gdy papugowanie to bezmyślne echo.', isCorrect: true },
      { label: 'B', text: 'Papugowanie jest techniką stosowaną wyłącznie przez licencjonowanych psychoterapeutów.', isCorrect: false },
      { label: 'C', text: 'Parafraza wymaga mówienia wyłącznie szeptem.', isCorrect: false },
      { label: 'D', text: 'Parafraza zawsze oznacza bezwzględną zgodę z opinią rozmówcy.', isCorrect: false }
    ],
    explanation: 'Parafraza („Jeśli dobrze cię rozumiem, czujesz frustrację, ponieważ termin projektu nałożył się z audytem?”) zmusza do głębokiego przetworzenia sensu w pamięci roboczej i daje rozmówcy poczucie bycia autentycznie wysłuchanym.',
    keyTakeaway: 'Zrozumieć kogoś nie oznacza zgodzić się z nim — oznacza uznać jego perspektywę.'
  },
  {
    id: 7,
    question: 'Jaka jest główna przyczyna zjawiska określanego jako „odruch naprawiania” (Righting Reflex) podczas trudnej rozmowy?',
    topic: 'Odruch Naprawiania a Empatia',
    sectionRef: 'Sekcja 7.6',
    options: [
      { label: 'A', text: 'Wrodzona skłonność człowieka do bycia złośliwym.', isCorrect: false },
      { label: 'B', text: 'Niecierpliwość poznawcza Systemu 1, który nie potrafi znieść dyskomfortu cudzych trudnych emocji i natychmiast oferuje płytkie rady („Zrób tak i tak”), zamiast wysłuchać.', isCorrect: true },
      { label: 'C', text: 'Specjalistyczne wykształcenie techniczne każdego rozmówcy.', isCorrect: false },
      { label: 'D', text: 'Wymóg prawny zawarty w kodeksie cywilnym.', isCorrect: false }
    ],
    explanation: 'Kiedy ktoś dzieli się cierpieniem, nasz mózg doświadcza napięcia. Aby uśmierzyć WŁASNY dyskomfort, spieszymy z „dobrymi radami”. Druga strona czuje się wtedy zbyta i nieważna.',
    keyTakeaway: 'Ludzie w kryzysie najczęściej nie szukają naprawiacza — szukają bezpiecznego świadka swoich emocji.'
  }
];

export const chapterSevenCaseStudyCouple: CaseStudy = {
  id: 'cs-ch7-zwiazek-rady',
  title: 'Kiedy Dobre Rady Niszczą Bliskość: Karolina i Bartek',
  subtitle: 'Jak nawykowe oferowanie rozwiązań doprowadziło do emocjonalnego muru w młodym małżeństwie',
  protagonist: 'Karolina (33 lata, architekt) i Bartek (35 lat, inżynier oprogramowania)',
  context: 'Wieczorna rozmowa w salonie po powrocie Karoliny z trudnej narady na budowie.',
  story: [
    'Karolina weszła do domu wyczerpana, rzuciła torebkę na fotel i usiadła na kanapie z twarzą ukrytą w dłoniach. „Mam dość. Inwestor zmienił dziś po raz trzeci koncepcję elewacji, a podwykonawca nakrzyczał na mnie przy całym zespole. Czuję się bezsilna i wykończona”.',
    'Bartek, widząc cierpienie żony, poczuł natychmiastowy impuls do działania. Odłożył laptopa i tonem eksperta zaczął: „Kochanie, po pierwsze musisz wysłać inwestorowi oficjalny aneks z wyceną każdej zmiany. Po drugie, na tego podwykonawcę napisz skargę do generalnego wykonawcy. Jutro rano usiądziemy i napiszę ci wzór takiego maila”.',
    'Karolina podniosła wzrok, a w jej oczach zamiast wdzięczności pojawiły się łzy wściekłości. „Czy ty w ogóle mnie słuchasz?! Ja nie proszę cię o plan naprawczy budowy! Chciałam po prostu, żebyś mnie przytulił i powiedział, że to był koszmarny dzień!”. Wstała i trzasnęła drzwiami sypialni.',
    'Bartek został sam w salonie, oszołomiony i urażony: „Przecież chciałem jej tylko pomóc. Znalazłem logiczne rozwiązania jej problemów w 30 sekund. Dlaczego ona zawsze robi ze mnie potwora?”.'
  ],
  decisionTaken: 'Bartek natychmiast uruchomił analityczny System 2 i podał procedury techniczne, ignorując emocjonalną prośbę o obecność i empatię.',
  whatProtagonistSaw: 'Logiczny problem do optymalizacji, zagubioną żonę wymagającą męskiego wsparcia merytorycznego i własne dobre intencje.',
  whatWasMissed: 'Że Karolina doskonale znała procedury budowlane, ale potrzebowała regulacji układu nerwowego i potwierdzenia, że jej emocje są ważne.',
  psychologicalAnalysis: {
    coreMechanism: 'Odruch naprawiania (Righting Reflex) zderzony z nieumiejętnością dekodowania płaszczyzny relacyjnej komunikatu.',
    cognitiveBiases: [
      { name: 'Iluzja racjonalności', description: 'Przekonanie Bartka, że każdą sytuację emocjonalną należy natychmiast rozwiązać algorytmem technicznym.', impact: 'Unieważnienie emocjonalne partnerki (invalidacja).' },
      { name: 'Niezrozumienie intencji a efektu', description: 'Intencją była miłość i troska; efektem było poczucie protekcjonalnego traktowania.', impact: 'Poczucie osamotnienia u obojga partnerów.' }
    ],
    defenseMechanisms: [
      { name: 'Intelektualizacja', explanation: 'Ucieczka w chłodną logikę proceduralną, aby nie czuć dyskomfortu bezradności wobec łez partnerki.' }
    ],
    emotionalDynamic: 'Karolina czuła się niewidzialna i traktowana jak nieporadne dziecko; Bartek czuł się odrzucony i niesprawiedliwie oskarżony mimo dobrych chęci.'
  },
  decisionProcessAnalysis: {
    trigger: 'Komunikat Karoliny o bezsilności i płacz.',
    attentionFocus: 'Słowa dotyczące problemów technicznych z inwestorem.',
    interpretation: '„Karolina ma problem zadaniowy, który muszę szybko naprawić, by w domu zapanował spokój”.',
    emotion: 'Wewnętrzny niepokój, lęk przed bezradnością.',
    impulse: 'Wygenerować instrukcję krok po kroku.',
    action: 'Podanie listy 3 zaleceń i deklaracja napisania maila za żonę.',
    consequence: 'Eskalacja złości, poczucie odrzucenia i zerwanie kontaktu na cały wieczór.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Analityczne generowanie rozwiązań u Bartka', activationState: 'Nadmierna dominacja bez kontaktu z układem limbicznym' },
      { region: 'Kora wyspy i neurony lustrzane', role: 'Współodczuwanie bólu i rezonans afektywny', activationState: 'Zablokowane przez odruch racjonalizacji' }
    ],
    neurotransmitters: [
      { name: 'Oksytocyna', roleInScenario: 'Drastyczny deficyt — brak fizycznego ukojenia i bliskości, wzrost poziomu kortyzolu u obojga' }
    ],
    biologicalTimeline: [
      { timeMs: '0 - 200 ms', process: 'Karolina płacze: układ nerwowy Bartka rejestruje sygnał zagrożenia.' },
      { timeMs: '200 - 600 ms', process: 'Błyskawiczne ucieknięcie w analizę lewopółkulową w celu stłumienia somatycznego dyskomfortu.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Zasada 3 Pytań Empatycznych', script: '„Kochanie, widzę jak bardzo jesteś tym wykończona. Czy w tej chwili potrzebujesz, żebym cię po prostu przytulił i wysłuchał, czy chcesz, żebyśmy wspólnie pomyśleli nad rozwiązaniem?”.', rationale: 'Daje drugiej osobie pełną autonomię wyboru formy wsparcia i eliminuje zgadywanie.' }
    ]
  },
  alternativePath: 'Gdyby Bartek podszedł, objął Karolinę i powiedział: „To brzmi potwornie, miałaś dziś straszny dzień. Jestem przy tobie”, poziom kortyzolu u Karoliny spadłby w ciągu 10 minut, a po kolacji sama zapytałaby go o radę techniczną.',
  readerQuestion: 'Czy w rozmowach z bliskimi częściej zakładasz kask inżyniera naprawiającego usterki, czy potrafisz po prostu usiąść obok w ich smutku?',
  keyTakeaway: 'Zanim podasz komuś receptę, upewnij się, że nie potrzebuje on po prostu Twojej obecności.'
};

export const chapterSevenCaseStudyDigital: CaseStudy = {
  id: 'cs-ch7-slack-eskalacja',
  title: 'Pożar na Slacku: Anatomia Wojny Cyfrowej',
  subtitle: 'Jak 7 słów w komunikatorze firmowym sparaliżowało pracę 15-osobowego działu IT',
  protagonist: 'Jakub (24 lata, Junior Frontend Developer) i Joanna (42 lata, Lead Architect)',
  context: 'Kanał publiczny projektu w komunikatorze Slack w środę o godzinie 16:45.',
  story: [
    'Jakub przez trzy dni pracował nad nowym komponentem nawigacyjnym aplikacji mobilnej. Włożył w to ogromny wysiłek, testując responsywność na różnych urządzeniach. O 16:40 opublikował link do kodu z dopiskiem: „Gotowe, proszę o code review”.',
    'Joanna, która w tym samym czasie prowadziła równolegle trzy wideokonferencje i walczyła z awarią bazy produkcyjnej, rzuciła okiem na kod. Zauważyła błąd w typowaniu TypeScript. W pośpiechu wpisała na publicznym kanale: „Zrób to jeszcze raz. To nie działa”. Bez kropki, bez emotikonu, bez powitania.',
    'Gdy Jakub przeczytał te słowa na ekranie, poczuł jak fala gorąca zalewa mu twarz. Jego System 1 natychmiast zinterpretował lakoniczny tekst jako publiczne upokorzenie i podważenie jego kompetencji przy całym zespole: „Ona mną gardzi. Uważa, że jestem idiotą”.',
    'Zamiast zadzwonić do Joanny lub zapytać o konkretny błąd, Jakub odpisał na kanale z jadowitym sarkazmem: „Gdyby dokumentacja architektoniczna nie była pisana na kolanie w zeszłym roku, może działałoby od razu. Pozdrawiam”.',
    'W ciągu 20 minut kanał publiczny zapłonął. Inni programiści zaczęli stawać po stronach, rzucać złośliwymi memami i wyciągać dawne urazy projektowe. Do godziny 18:00 nikt już nie pracował nad aplikacją. Joanna zablokowała uprawnienia Jakuba, a HR musiał zwołać nadzwyczajne spotkanie kryzysowe.'
  ],
  decisionTaken: 'Jakub zinterpretował pośpiech Joanny jako złośliwy atak i odpowiedział publiczną agresją bierną, a Joanna zignorowała wpływ skrótowości tekstu.',
  whatProtagonistSaw: 'Jakub widział bezwzględną, arogancką liderkę; Joanna widziała roszczeniowego, przewrażliwionego juniora.',
  whatWasMissed: 'Brak tonu głosu i mimiki w komunikacji cyfrowej wywołał skrzywienie negatywne u obu stron — neutralny brak czasu Joanny został zdekodowany jako wrogość.',
  psychologicalAnalysis: {
    coreMechanism: 'Negatywne skrzywienie asynchronicznej komunikacji tekstowej połączone z zagrożeniem statusowym (SCARF model Davida Rocka).',
    cognitiveBiases: [
      { name: 'Bias wrogości w tekście (Textual Hostility Bias)', description: 'Mózg ludzki ma ewolucyjną tendencję do interpretowania niejednoznacznych komunikatów tekstowych jako wrogich.', impact: 'Eskalacja napięcia od zera do wojny.' },
      { name: 'Błąd publicznego audytorium', description: 'Obecność świadków na kanale Slack spotęgowała lęk o reputację i wymusiła walkę o dominację.', impact: 'Zablokowanie możliwości pokojowego wycofania się.' }
    ],
    defenseMechanisms: [
      { name: 'Projekcja agresji', explanation: 'Jakub przeniósł własne kompleksy dotyczące braku doświadczenia na intencje starszej koleżanki.' }
    ],
    emotionalDynamic: 'Lęk przed ośmieszeniem wywołał natychmiastowy kontratak o charakterze obronnym.'
  },
  decisionProcessAnalysis: {
    trigger: 'Wiadomość Joanny: „Zrób to jeszcze raz. To nie działa”.',
    attentionFocus: 'Fakt, że komunikat padł na kanale ogólnym i brak jakichkolwiek słów uznania.',
    interpretation: '„Ona chce mnie zniszczyć przed zespołem i doprowadzić do mojego zwolnienia”.',
    emotion: 'Wstyd, oburzenie, złość somatyczna.',
    impulse: 'Uderzyć w jej autorytet architektoniczny tak mocno, jak to możliwe.',
    action: 'Wysłanie publicznego złośliwego komentarza o kiepskiej dokumentacji.',
    consequence: 'Eskalacja konfliktu na cały dział, interwencja HR i utrata zaufania w zespole.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Ciało migdałowate', role: 'Detekcja publicznego zagrożenia statusowego', activationState: 'Maksymalny wyrzut alarmowy' },
      { region: 'Kora zakrętu obręczy', role: 'Poczucie niesprawiedliwości społecznej', activationState: 'Hiperaktywacja' }
    ],
    neurotransmitters: [
      { name: 'Adrenalina', roleInScenario: 'Szybkie bicie serca, płytki oddech, tunelowe widzenie ekranu' }
    ],
    biologicalTimeline: [
      { timeMs: '0 - 100 ms', process: 'Wzrok Jakuba rejestruje czerwone powiadomienie na Slacku.' },
      { timeMs: '100 - 400 ms', process: 'Interpretacja lakonicznego tekstu jako ataku, skurcz mięśni karku.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Złota Zasada Jednego Przejścia (The One-Touch Rule)', script: '„Widzę ten komentarz na Slacku. Zanim cokolwiek odpiszę, zamykam laptopa na 3 minuty. Następnie piszę prywatną wiadomość: Cześć Joanno, czy możesz wskazać mi na huddle, w której linijce wywala błąd? Chętnie to poprawię”.', rationale: 'Przeniesienie rozmowy z widoku publicznego do kanału 1-na-1 i zmiana medium na głosowe gasi 95% pożarów.' }
    ]
  },
  alternativePath: 'Gdyby Joanna napisała: „Jakubie, świetna robota z layoutem! Zauważyłam jednak błąd w typach na linii 42, przez co build leży. Popraw to proszę w wolnej chwili”, Jakub odpisałby z uśmiechem w 5 minut, a projekt poszedłby do przodu.',
  readerQuestion: 'Ile razy w życiu wysłałeś maila lub wiadomość w złości, żałując tego już w ułamku sekundy po kliknięciu „Wyślij”?',
  keyTakeaway: 'Nigdy nie rozwiązuj konfliktu emocjonalnego za pomocą liter na ekranie. Kiedy rosną emocje, podnieś słuchawkę lub spotkaj się na żywo.'
};

export const chapterSevenExerciseListening: SelfExercise = {
  id: 'ex-ch7-listening-audit',
  title: 'Ćwiczenie 7.1: Warsztat Czystej Parafrazy — Stop Odruchowi Naprawiania',
  subtitle: 'Wytrenuj nawyk słuchania drugiego człowieka bez dawania rad i bez przerywania',
  objective: 'Zahamowanie automatycznego odruchu naprawiania i nauczenie się stosowania parafrazy odzwierciedlającej emocje i sens rozmówcy.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Wstrzymanie chęci natychmiastowej odpowiedzi trenuje hamowanie behawioralne w brzuszno-bocznej korze przedczołowej (vlPFC) i zwiększa aktywność neuronów lustrzanych odpowiedzialnych za rezonans empatyczny.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zadeklaruj 24-godzinny post od dobrych rad',
      instruction: 'Przez najbliższą dobę podejmij zobowiązanie: w żadnej rozmowie prywatnej ani zawodowej nie udzielisz ani jednej rady, dopóki rozmówca wprost nie powie: „Proszę, powiedz mi, co mam zrobić”.',
      promptText: 'Komu z Twojego otoczenia najczęściej dajesz nieproszone rady i dlaczego to robisz?',
      placeholder: 'Często radzę partnerowi/dziecku/koledze, bo ich bezradność wywołuje we mnie lęk i chcę szybko zamknąć temat...'
    },
    {
      stepNumber: 2,
      title: 'Skonstruuj 3 wzorce parafrazy empatycznej',
      instruction: 'Zamiast mówić: „Powinieneś zrobić tak...”, przygotuj zdania otwierające, które oddają perspektywę rozmówcy.',
      promptText: 'Wpisz swoje 3 formuły parafrazujące:',
      placeholder: 'Wzór 1: „Słyszę, że ta sytuacja kosztuje cię mnóstwo energii... Czy dobrze rozumiem, że najbardziej martwi cię...?”'
    },
    {
      stepNumber: 3,
      title: 'Eksperyment z ciszą (3 sekundy pauzy)',
      instruction: 'Kiedy rozmówca skończy mówić, nie odzywaj się przez pełne 3 sekundy. Utrzymuj łagodny kontakt wzrokowy i kiwnij głową. Zobacz, co się wydarzy — w 70% przypadków rozmówca sam dopowie najgłębszą, prawdziwą przyczynę problemu.',
      promptText: 'Co zaobserwowałeś po zastosowaniu 3-sekundowej pauzy?',
      placeholder: 'Gdy zamilkłem na 3 sekundy, rozmówca westchnął i dodał: „Tak naprawdę to boję się, że nie poradzę sobie z presją...”'
    }
  ],
  reflectionQuestions: [
    'Dlaczego cisza w rozmowie bywa tak trudna do zniesienia dla Twojego umysłu?',
    'Jak czujesz się w obecności osoby, która po prostu pozwala Ci dokończyć myśl, nie wchodząc Ci w słowo?'
  ]
};

export const chapterSevenExerciseSchulz: SelfExercise = {
  id: 'ex-ch7-schulz-ears',
  title: 'Ćwiczenie 7.2: Odczaruj Komunikat — Trening 4 Uszu Schulza von Thuna',
  subtitle: 'Rozłóż trudne, drażniące zdanie na 4 poziomy i wybierz dojrzałą odpowiedź',
  objective: 'Wyzwolenie się z niewolniczego nawyku słuchania wyłącznie „uchem relacji” (odbierania wszystkiego jako ataku) na rzecz ucha faktów i samoujawnienia.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Świadomy rozbiór semantyczny wypowiedzi angażuje zakręt kątowy i lewą korę skroniową, odciągając ładunek energetyczny z obronnych obwodów ciała migdałowatego.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz zdanie, które Cię ostatnio uraziło',
      instruction: 'Przypomnij sobie krótką wypowiedź partnera, szefa, rodzica lub klienta, która wywołała w Tobie złość lub chęć obrony.',
      promptText: 'Jak brzmiało to zdanie dosłownie?',
      placeholder: 'Szef powiedział: „Widzę, że ten raport zajął panu więcej czasu niż zwykle”...'
    },
    {
      stepNumber: 2,
      title: 'Dekodowanie 4 płaszczyzn',
      instruction: 'Wypisz, co to zdanie oznacza na każdym z 4 poziomów:',
      promptText: 'Rozpisz: 1. Fakt, 2. Ujawnienie siebie nadawcy, 3. Relacja, 4. Apel:',
      placeholder: '1. Fakt: raport powstawał 4 dni zamiast 3. 2. Ujawnienie: szef czuje presję terminów. 3. Relacja: obawia się o wynik. 4. Apel: przyspiesz kolejne etapy.'
    },
    {
      stepNumber: 3,
      title: 'Wybierz ucho reakcji dorosłego',
      instruction: 'Zamiast odpowiadać obronnym uchem relacji („Uważa pan, że jestem powolny?!”), ułóż odpowiedź z poziomu faktów i apelu.',
      promptText: 'Twoja dojrzała, spokojna odpowiedź:',
      placeholder: '„Tak, spędziłem nad nim więcej czasu ze względu na weryfikację bazy danych. Czy zależy panu, aby kolejne zestawienia były bardziej skrótowe?”'
    }
  ],
  reflectionQuestions: [
    'Które z Twoich „uszu” jest zazwyczaj najbardziej przewrażliwione na krytykę?',
    'Jak zmieniłyby się Twoje relacje, gdybyś za każdym razem słyszał w cudzym ataku lęk lub bezradność nadawcy?'
  ]
};

export const chapterSevenExerciseFuko: SelfExercise = {
  id: 'ex-ch7-fuko-feedback',
  title: 'Ćwiczenie 7.3: Konstruktor Informacji Zwrotnej FUKO',
  subtitle: 'Przygotuj trudną informację zwrotną bez ranienia godności drugiego człowieka',
  objective: 'Zastąpienie ogólnikowej krytyki („jesteś niesłowny”) precyzyjnym modelem FUKO chroniącym przed porwaniem emocjonalnym.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Koncentracja na obiektywnych faktach behawioralnych nie aktywuje systemu wykrywania zagrożenia statusowego w mózgu rozmówcy, umożliwiając zachowanie neuroplastyczności i uczenia się.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniuj czysty fakt (F)',
      instruction: 'Opisz konkretne zachowanie tak, jak zarejestrowałaby je obiektywna kamera wideo. Zero interpretacji i zero przymiotników oceniających.',
      promptText: 'Co dokładnie się wydarzyło (czas, miejsce, działanie)?',
      placeholder: '„Wczoraj podczas spotkania projektowego wyszedłeś 15 minut przed końcem bez uprzedzenia...”'
    },
    {
      stepNumber: 2,
      title: 'Nazwij swoje emocje i konsekwencje (U / K)',
      instruction: 'Powiedz w pierwszej osobie („Ja czuję...”), jakie konsekwencje to zachowanie wywołało dla procesu lub Twojego stanu.',
      promptText: 'Moje uczucia i skutki biznesowe/relacyjne to:',
      placeholder: '„Poczułem dezorientację i musieliśmy przełożyć głosowanie nad budżetem na kolejny dzień...”'
    },
    {
      stepNumber: 3,
      title: 'Sformułuj jasne oczekiwanie na przyszłość (O)',
      instruction: 'Zaproponuj jedno konkretne, wykonalne zachowanie, którego oczekujesz od rozmówcy w podobnych sytuacjach.',
      promptText: 'Moje konkretne oczekiwanie i prośba o potwierdzenie:',
      placeholder: '„Zależy mi, abyś następnym razem uprzedził mnie rano, jeśli musisz wyjść wcześniej. Czy możemy się tak umówić?”'
    }
  ],
  reflectionQuestions: [
    'Dlaczego formułowanie czystych faktów bywa o wiele trudniejsze niż rzucenie szybkiej oceny?',
    'W jaki sposób jasne wyrażenie oczekiwań zdejmuje z rozmówcy konieczność domyślania się Twoich intencji?'
  ]
};

export const chapterSeven: Chapter = {
  number: 7,
  title: 'Komunikacja: Co Naprawdę Dzieje Się Podczas Rozmowy',
  subtitle: 'Architektura dialogu, pułapki interpretacji, anatomia niewerbalna i sztuka porozumienia bez przemocy',
  leadParagraph: 'Większość ludzi zakłada, że rozmowa to prosty transfer danych — nadawca pakuje myśl w słowa, przesyła ją przez powietrze, a odbiorca bezbłędnie ją rozpakowuje. To złudzenie telepatyczne. W rzeczywistości każde wypowiedziane słowo przechodzi przez gęsty las filtrów percepcyjnych, ran z przeszłości, napięć statusowych i biologicznych skrzywień uwagi. W tym rozdziale rozkładamy rozmowę na elementarne procesy neurokognitywne i uczymy się budować mosty zamiast murów.',
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
      title: 'Kwadrat komunikacyjny Schulza von Thuna: 4 gęby i 4 uszy',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Niemiecki psycholog Friedemann Schulz von Thun stworzył jeden z najbardziej eleganckich i praktycznych modeli w historii nauk o komunikacji. Każdy komunikat wysyłany przez człowieka ma cztery równoległe płaszczyzny:',
        '1. Płaszczyzna Rzeczowa (Fakt): Jakie obiektywne dane przekazuję?',
        '2. Płaszczyzna Ujawniania Siebie (Stan nadawcy): Co ta wypowiedź mówi o moim samopoczuciu, wartościach lub potrzebach?',
        '3. Płaszczyzna Relacyjna (Stosunek do odbiorcy): Za kogo cię uważam i jak cię traktuję?',
        '4. Płaszczyzna Apelu (Wpływ): Co odbiorca ma zrobić, pomyśleć lub poczuć pod wpływem moich słów?'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 1: Poranna kawa w kuchni — Cztery poziomy komunikatu „Nie ma już mleka”',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Tomasz (40 lat) otwiera lodówkę rano przed wyjściem do pracy, wyjmuje pusty karton po mleku i wypowiada neutralnym tonem w stronę żony Agaty (39 lat): „Nie ma już mleka”. Agata przygotowuje śniadanie dla dzieci.',
            '2. Co widzi bohater (subiektywne postrzeżenie Agaty): Agata słyszy oskarżenie o zaniedbanie domowe. Odbiera komunikat jako zarzut: „Jesteś złą gospodynią, znowu nie dopilnowałaś zakupów”. Trzaska drzwiczkami szafki i odpowiada z furią: „A czy ja jestem twoją służącą, żeby o wszystkim pamiętać?!”.',
            '3. Czego bohater nie widzi (martwe pole): Agata nie widzi, że Tomasz nie miał w głowie żadnego ukrytego roszczenia ani pretensji — jego myśl robocza dotyczyła jedynie faktu, że napije się czarnej kawy lub skoczy do sklepu. Tomasz z kolei nie dostrzega, że Agata od tygodnia dźwiga 90% niewidzialnej pracy planistycznej (Mental Load) i żyje na skraju wyczerpania.',
            '4. Działający mechanizm psychologiczny: Kwadrat Komunikacyjny Schulza von Thuna. Rozdźwięk między Płaszczyzną Rzeczową nadawcy a Uchem Relacyjnym i Apelowym odbiorcy. W warunkach chronicznego przeciążenia uwaga odbiorcy automatycznie skanuje komunikaty pod kątem zagrożenia relacyjnego.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W ewolucji wykrycie ukrytej nagany lub wykluczenia ze strony partnera miało wyższy priorytet przetrwania niż neutralna informacja o zasobach pożywienia.',
            '6. Jak rozpoznać w czasie rzeczywistym: Poczucie natychmiastowego ukłucia w żołądku i impuls do agresywnej obrony przy z pozoru niewinnym zdaniu informacyjnym.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Klaryfikacja płaszczyzny: Tomasz natychmiast precyzuje: „Agato, nadaję wyłącznie na poziomie faktu — zauważyłem pusty karton. Sam chętnie zejdę do sklepu, chciałem tylko zapytać, czy potrzebujesz czegoś jeszcze”. Agata: „Przepraszam, jestem po prostu wykończona tą listą spraw”.',
            '8. Konsekwencje alternatywnego wyboru: Zamiast 3-godzinnej awantury i cichych dni, para wymienia uścisk, a Tomasz przejmuje część obowiązków porannych.',
            '9. Wniosek dydaktyczny dla czytelnika: Jeśli nie zdefiniujesz płaszczyzny swojego komunikatu, zmęczony odbiorca niemal zawsze zinterpretuje go jako atak na swoją wartość.'
          ]
        }
      ]
    },
    {
      id: 'sec-7-3',
      pageNumber: 288,
      sectionNumber: '7.3',
      title: 'Intencja a efekt: Otchłań między tym, co chciałeś powiedzieć, a tym, co dotarło',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Wielka tragedia międzyludzka polega na tym, że siebie oceniamy po intencjach („Przecież chciałem dobrze, zależy mi na tobie”), podczas gdy innych oceniamy bezwzględnie po EFEKCIE ich słów na nasz układ nerwowy.',
        'Mózg ludzki nie ma bezpośredniego łącza do cudzych motywacji. Kiedy słyszysz słowa, które budzą w Tobie lęk lub poczucie winy, Twoje ciało migdałowate reaguje na efekt fizjologiczny. Zrozumienie, że druga strona może mieć czystą intencję przy katastrofalnym doborze słów, jest fundamentem dojrzałości emocjonalnej.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 2: Rozmowa matki z córką o sukni ślubnej — Intencja troski kontra efekt odrzucenia',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Matka Helena (58 lat) przychodzi z 26-letnią córką Magdą do salonu sukien ślubnych. Magda wybiera minimalistyczną, prostą kreację bez welonu. Helena marszczy czoło i pyta: „Czy jesteś pewna, że to odpowiednie na ślub kościelny? Co powie rodzina Piotra?”.',
            '2. Co widzi bohater (Magda): Magda widzi brak akceptacji, wstyd ze strony matki i próbę podporządkowania jej najważniejszego dnia w życiu cudzym opiniom. Magda wybucha płaczem i zamyka się w przymierzalni.',
            '3. Czego bohater nie widzi (martwe pole): Magda nie widzi, że Helena nosi w sobie traumę z własnej młodości, kiedy została publicznie skrytykowana przez teściową na wiejskim weselu. Intencją matki jest paniczna chęć uchronienia córki przed obmową rodzinną.',
            '4. Działający mechanizm psychologiczny: Asymetria intencji i efektu. Czysta intencja protekcyjna nadawcy wywołała toksyczny efekt unieważnienia autonomii u odbiorcy.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Starsze pokolenie operuje skryptami konformizmu społecznego (ochrona przed ostracyzmem wspólnoty), podczas gdy młodsze poszukuje ekspresji tożsamościowej.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się u nadawcy świętego oburzenia: „Przecież ja chcę dla ciebie jak najlepiej, a ty znowu robisz ze mnie potwora!”.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Rozdzielenie intencji od efektu przez Magdę: „Mamo, wiem, że bardzo zależy ci, żebym była szczęśliwa i bezpieczna przed komentarzami rodziny. Jednak gdy tak mówisz, czuję, że wstydzisz się mojego wyboru. W tej sukni czuję się w 100% sobą i potrzebuję wiedzieć, że cieszysz się razem ze mną”.',
            '8. Konsekwencje alternatywnego wyboru: Helena uświadamia sobie swój lęk, bierze córkę za rękę i przeprasza za niefortunne sformułowanie.',
            '9. Wniosek dydaktyczny dla czytelnika: Dobre intencje nigdy nie unieważniają bólu wywołanego słowem. Dojrzałość wymaga uznania efektu emocjonalnego, zanim zacznie się tłumaczyć własne motywy.'
          ]
        }
      ]
    },
    {
      id: 'sec-7-4',
      pageNumber: 292,
      sectionNumber: '7.4',
      title: 'Aktywne słuchanie: Sztuka wyciszania własnego wewnętrznego adwokata',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Większość ludzi nie słucha drugiego człowieka po to, by go zrozumieć. Słuchają po to, by odpowiedzieć, doradzić, skorygować błąd lub obronić własne ego. Podczas gdy druga osoba mówi, nasza pamięć robocza ładuje już działo argumentacyjne.',
        'Aktywne słuchanie to proces biologiczny polegający na świadomym zablokowaniu odruchu naprawiania. Poniższe studium przypadku ukazuje, jak dobre chęci inżynierskiego rozwiązywania problemów potrafią zniszczyć intymność w relacji.'
      ],
      caseStudyRef: chapterSevenCaseStudyCouple
    },
    {
      id: 'sec-7-5',
      pageNumber: 296,
      sectionNumber: '7.5',
      title: 'Pytania, które otwierają umysł: Od przesłuchania do ciekawości',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Jakość Twojego dialogu zależy od architektury pytań, jakie zadajesz. Pytania zamknięte („Czy to zrobiłeś?”, „Zgadzasz się ze mną?”) zmuszają mózg do zero-jedynkowej obrony. Z kolei pytania zaczynające się od „Dlaczego...?” („Dlaczego znowu się spóźniłeś?”) natychmiast uruchamiają defensywne racjonalizacje.',
        'Najpotężniejszymi narzędziami budowania porozumienia są pytania otwarte zaczynające się od „Co...” oraz „Jak...”. Zmuszają one korę przedczołową rozmówcy do refleksji bez wywoływania poczucia bycia przesłuchiwanym.',
        'Poniższy warsztat pozwala przetrenować sztukę aktywnego słuchania i wstrzymania odruchu naprawiania.'
      ],
      exerciseRef: chapterSevenExerciseListening
    },
    {
      id: 'sec-7-6',
      pageNumber: 300,
      sectionNumber: '7.6',
      title: 'Słuchanie a przygotowywanie odpowiedzi: Wąskie gardło pamięci roboczej',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Z punktu widzenia kognitywistyki (Tom I, Rozdział 3), człowiek potrafi utrzymać w pamięci roboczej zaledwie 4 jednostki informacji jednocześnie. Kiedy rozmówca dzieli się swoją historią, przetwarzanie jego słów, mikroekspresji i tonu głosu pochłania 100% Twojej przepustowości.',
        'W chwili, gdy zaczynasz układać w głowie własną ripostę, odcinasz zasilanie od układu słuchowego. Widzisz poruszające się usta rozmówcy, ale semantyka przestaje być rejestrowana. Wyłapujesz jedynie pojedyncze słowa-klucze, do których możesz przypiąć swój gotowy kontrargument.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 3: Wizyta u mechanika samochodowego — Odruch obronny kontra pytanie eksploracyjne',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Klient Wojciech (48 lat) odbiera samochód po kompleksowej wymianie układu hamulcowego, wraca do warsztatu po 10 minutach i mówi podniesionym tonem do właściciela serwisu: „Czy wy w ogóle potraficie cokolwiek zrobić porządnie?! Pedał hamulca bierze za nisko, mało nie wjechałem w barierki!”.',
            '2. Co widzi bohater (właściciel serwisu Adam, 45 lat): Adam widzi niesprawiedliwy, agresywny atak na renomę swojego warsztatu i swoich mechaników. W jego głowie natychmiast formuje się kontratak: „Kolejny pieniacz, który nie ma pojęcia o hydraulice w nowoczesnych autach”.',
            '3. Czego bohater nie widzi (martwe pole): Adam nie dostrzega, że Wojciech przed chwilą przeżył realny strach na skrzyżowaniu z powodu innej charakterystyki pracy nowego wspomagania hamulców, do której nie przywykł. Agresja klienta jest wtórną osłoną pierwotnego lęku.',
            '4. Działający mechanizm psychologiczny: Wąskie gardło pamięci roboczej i odruch obrony statusowej. Przełączenie się na generowanie riposty odcina słuchanie merytoryczne.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W sytuacji ataku werbalnego układ współczulny mobilizuje zasoby do natychmiastowej walki o dominację, blokując ugodowość.',
            '6. Jak rozpoznać w czasie rzeczywistym: Zaciśnięcie pięści, wstrzymanie oddechu i układanie w myślach zdania: „Zaraz mu pokażę, kto tu jest ekspertem”.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Wzięcie oddechu i zadanie pytania kalibrującego: „Panie Wojciechu, bezpieczeństwo pana i pańskiej rodziny to dla nas absolutny priorytet. Wsiądźmy razem do auta, niech pan poprowadzi, a ja dokładnie zaobserwuję skok pedału i ciśnienie w układzie. Sprawdzimy to od ręki”.',
            '8. Konsekwencje alternatywnego wyboru: Napięcie u klienta opada w 30 sekund; podczas jazdy próbnej okazuje się, że układ działa poprawnie, ale mechanik bezpłatnie koryguje luz pedału według życzenia klienta, zyskując lojalnego ambasadora serwisu.',
            '9. Wniosek dydaktyczny dla czytelnika: Kiedy rozmówca krzyczy ze strachu, logiczny kontratak dolewa oliwy do ognia. Zaproszenie do wspólnej obserwacji problemu gasi agresję.'
          ]
        }
      ]
    },
    {
      id: 'sec-7-7',
      pageNumber: 304,
      sectionNumber: '7.7',
      title: 'Komunikacja niewerbalna: Prawda o mikroekspresjach, mit Mehrabiana i kontekst',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'BŁĘDNA INTUICJA: Mit o „niewerbalnej prawdzie” i rzekomej regule 7-38-55 Alberta Mehrabiana. W pop-psychologii nagminnie powtarza się twierdzenie, jakoby „słowa stanowiły zaledwie 7% komunikatu, a reszta to ton głosu (38%) i mowa ciała (55%)”. Sam prof. Mehrabian wielokrotnie protestował przeciwko takiemu uogólnianiu swoich badań z 1967 roku! Jego formuła dotyczyła WYŁĄCZNIE sytuacji, w których komunikat emocjonalny i mimika były sztucznie skonfliktowane w laboratoryjnych testach z pojedynczymi słowami nagranymi na taśmę. Gdyby słowa stanowiły 7%, nikt nie byłby w stanie przeczytać umowy kredytowej ani zrozumieć podręcznika anatomii.',
        'W rzeczywistości słowa niosą treść semantyczną, a sygnały niewerbalne pełnią funkcję modulacyjną i relacyjną. Co więcej, badania kryminalistyczne i kognitywne (m.in. Hartwig & Bond, 2011; Vrij, 2019) jednoznacznie obaliły mit mikroekspresji jako „magicznego wykrywacza kłamstw”. Ciało ludzkie nie ma dedykowanego przełącznika nieszczerości. Drżenie rąk, pocenie się czy unikanie kontaktu wzrokowego są sygnałami ogólnego pobudzenia układu autonomicznego lub lęku społecznego — a nie niezawodnym dowodem fałszu.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 4: Nauczyciel matematyki i uczeń przy tablicy — Odczytywanie inkongruencji w kontekście',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Nauczyciel matematyki pan Robert (50 lat) pyta 16-letniego Kamila stojącego przy tablicy: „Kamilu, czy ten dowód geometryczny jest dla ciebie w pełni jasny?”. Kamil patrzy w posadzkę, nerwowo skubie mankiet bluzy i odpowiada cicho: „Tak, panie profesorze, rozumiem”.',
            '2. Co widzi bohater (pan Robert): Nauczyciel widzi sprzeczność między deklaracją werbalną a postawą somatyczną ucznia. Zamiast jednak wyciągać wniosek: „Kamil ze mnie drwi i kłamie”, odczytuje kontekst sytuacyjny.',
            '3. Czego bohater nie widzi (martwe pole): Robert nie wie, że poprzedniego dnia Kamil został wyśmiany przez rówieśników na czacie klasowym po pomyłce na lekcji fizyki, co wywołało u nastolatka ostry lęk przed jakąkolwiek publiczną ekspozycją niewiedzy.',
            '4. Działający mechanizm psychologiczny: Inkongruencja kanałów werbalnych i niewerbalnych na tle lęku przed kompromitacją w grupie odniesienia.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): U ludzi młodych lęk przed utratą statusu w stadzie rówieśniczym aktywuje silniejsze hamowanie wypowiedzi niż chęć uzyskania pomocy dydaktycznej.',
            '6. Jak rozpoznać w czasie rzeczywistym: Niespójność między twierdzącą odpowiedzią a unikaniem wzroku, spłyconym oddechem i postawą wycofania.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Ochrona statusu ucznia przed klasą: „Ten dowód bywa zdradliwy nawet na studiach politechnicznych. Zrobimy teraz 5 minut pracy w parach przy ławkach, a ja podejdę do ciebie i wspólnie rozpiszemy ten kąt”.',
            '8. Konsekwencje alternatywnego wyboru: Kamil nie zostaje publicznie obnażony, na osobności przyznaje się do braku zrozumienia kroku trzeciego i po 3 minutach opanowuje materiał.',
            '9. Wniosek dydaktyczny dla czytelnika: Mowa ciała nie służy do oskarżania ludzi o kłamstwo, lecz do odczytywania ich poziomu napięcia i potrzebowania wsparcia.'
          ]
        }
      ]
    },
    {
      id: 'sec-7-8',
      pageNumber: 308,
      sectionNumber: '7.8',
      title: 'Ton głosu i prozodia: Muzyka, która unieważnia tekst',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Możesz wypowiedzieć zdanie: „Bardzo dziękuję za twoją pomoc” na dziesięć różnych sposobów. Wypowiedziane ciepłym, niskim tonem z opadającą intencją buduje głęboką wdzięczność. Wypowiedziane z wysokim, podniesionym akcentem na słowie „twoją” i wydłużeniem samogłoski staje się jadowitą ironią.',
        'Układ słuchowy człowieka kieruje prozodię (melodię mowy) bezpośrednio do prawopółkulowych ośrodków przetwarzania emocji, omijając lewopółkulowe ośrodki gramatyczne Wernickego i Broki. Mózg słyszy ton zanim zrozumie znaczenie słów.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 5: Jedno westchnienie na infolinii bankowej — Destrukcyjna siła prozodii',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Klientka Grażyna (62 lata) dzwoni na infolinię bankową po raz trzeci, gubiąc się w procedurze uwierzytelnienia dwuetapowego aplikacji mobilnej. Konsultant Maciej (24 lata) przed odpowiedzią głośno, ciężko wzdycha do mikrofonu, po czym podaje merytorycznie bezbłędną instrukcję.',
            '2. Co widzi bohater (pani Grażyna): Grażyna nie rejestruje merytorycznych słów. Jej układ nerwowy odczytuje westchnienie jako komunikat: „Uważam cię za osobę niepełnosprawną intelektualnie, jesteś dla mnie ciężarem i marnujesz mój czas”. Wybucha złością: „Niech pan na mnie nie wzdycha, żądam natychmiast rozmowy z kierownikiem!”.',
            '3. Czego bohater nie widzi (martwe pole): Grażyna nie wie, że Maciej pracuje 11. godzinę na słuchawkach pod presją rygorystycznego wskaźnika AHT (średni czas rozmowy), a jego westchnienie było fizjologicznym odruchem niedotlenienia, a nie osobistą pogardą.',
            '4. Działający mechanizm psychologiczny: Dominacja prozodii i sygnałów parawerbalnych nad treścią semantyczną wypowiedzi w warunkach stresu technologicznego.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Sygnały dźwiękowe o charakterze westchnienia lub warknięcia były ewolucyjnie pierwotniejsze niż język artykułowany i natychmiast informowały o odrzuceniu lub frustracji osobnika.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się u rozmówcy nagłej agresji w odpowiedzi na merytorycznie poprawne zdanie.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Świadoma higiena oddechowa konsultanta (mikropauza z wyciszonym mikrofonem) oraz natychmiastowa naprawa relacji: „Pani Grażyno, przepraszam za to westchnienie, to zmęczenie po całym dniu, a nie zniecierpliwienie panią. Jestem tu po to, by spokojnie przejść z panią przez każdy krok logowania”.',
            '8. Konsekwencje alternatywnego wyboru: Klientka uspokaja się, napięcie znika, a logowanie zostaje ukończone w 2 minuty bez eskalacji skargi do centrali.',
            '9. Wniosek dydaktyczny dla czytelnika: Ton głosu, tempo i oddechy to podkład muzyczny Twoich słów. Jeśli muzyka jest agresywna, nikt nie doceni tekstu piosenki.'
          ]
        }
      ]
    },
    {
      id: 'sec-7-9',
      pageNumber: 312,
      sectionNumber: '7.9',
      title: 'Anatomia nieporozumienia: Dlaczego kłócimy się o to, czego nikt nie powiedział',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Większość awantur domowych i wojen gabinetowych nie toczy się o faktyczne słowa, które padły, lecz o halucynacje interpretacyjne. Nasz System 1 nienawidzi próżni semantycznej. Kiedy komunikat jest niejednoznaczny, mózg automatycznie wypełnia brakujące luki najczarniejszym możliwym scenariuszem.',
        'Poniższy warsztat pozwala rozmontować drażniące komunikaty na 4 uszy i wybrać świadomą, dojrzałą reakcję.'
      ],
      exerciseRef: chapterSevenExerciseSchulz
    },
    {
      id: 'sec-7-10',
      pageNumber: 316,
      sectionNumber: '7.10',
      title: 'Komunikacja cyfrowa: Dlaczego Slack i maile brzmią jak agresja',
      category: 'studium-przypadku',
      readingTimeMinutes: 15,
      paragraphs: [
        'E-mail i komunikatory internetowe to technologiczne cuda logistyki i jednocześnie psychologiczne miny przeciwpiechotne. W komunikacji tekstowej zostajemy pozbawieni 90% kontekstu: tonu głosu, uśmiechu, pauzy, spojrzenia.',
        'W warunkach deficytu sygnałów niewerbalnych, mózg odbiorcy uruchamia ewolucyjne skrzywienie ku negatywności. Zwykłe kropki na końcu zdania („Ok.”) są odbierane przez młodsze pokolenie jako sygnał wściekłości. Studium przypadku poniżej przedstawia eskalację wojny cyfrowej w zespole inżynierów.'
      ],
      caseStudyRef: chapterSevenCaseStudyDigital
    },
    {
      id: 'sec-7-11',
      pageNumber: 320,
      sectionNumber: '7.11',
      title: 'Informacja zwrotna, która buduje: Model FUKO i NVC',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Tradycyjna metoda „kanapki feedbackowej” (pochwała - cios - pochwała) została bezlitośnie skompromitowana przez neuronaukę. Ludzki mózg błyskawicznie uczy się tego schematu: gdy słyszy sztuczną pochwałę, nie cieszy się z niej, lecz w napięciu czeka na nadchodzące uderzenie („Ale...”).',
        'Skuteczny feedback wymaga oddzielenia faktów od ocen. Model FUKO (Fakty, Uczucia/Konsekwencje, Konkret, Oczekiwanie) pozwala przekazać najtrudniejszą prawdę bez wywoływania porwania ciała migdałowatego u rozmówcy.',
        'Poniższe ćwiczenie krok po kroku uczy konstrukcji precyzyjnego feedbacku.'
      ],
      exerciseRef: chapterSevenExerciseFuko
    },
    {
      id: 'sec-7-12',
      pageNumber: 324,
      sectionNumber: '7.12',
      title: 'Sztuka przyjmowania krytyki: Jak nie dać się zranić, nie tracąc lekcji',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Kiedy słyszysz krytykę, Twoja amygdala reaguje tak, jakby zbliżał się drapieżnik. Pojawia się impuls do kontrataku („A ty sam jesteś idealny?!”) lub zapadnięcia się w sobie (wstyd i poczucie bezradności).',
        'Protokół mistrzowskiego przyjmowania krytyki składa się z trzech kroków: Pauza somatyczna (4 sekundy bez odpowiedzi), Oddzielenie formy od treści (wyciągnięcie ziarna prawdy nawet z chamskiej uwagi) oraz Pytanie sondujące zmuszające krytyka do przejścia od emocji do faktów.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 7: Architekt wnętrz Ewa przyjmująca ostrą krytykę — Protokół deeskalacji zarzutu',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Architekt wnętrz Ewa (29 lat) prezentuje w biurze projekt salonu dla zamożnego klienta Janusza. Janusz ogląda wizualizacje, rzuca teczkę na stół i mówi opryskliwie: „To wygląda jak tania poczekalnia u dentysty, kompletnie pani nie ma smaku ani pojęcia o estetyce!”.',
            '2. Co widzi bohater (Ewa): Ewa czuje bolesne upokorzenie i atak na swoją tożsamość zawodową. W żołądku pojawia się ostry skurcz, a w myślach chęć wybiegnięcia z płaczem lub odcięcia się: „Skoro pan się nie zna na nowoczesnym minimalizmie, to proszę sobie zatrudnić dekoratora z jarmarku!”.',
            '3. Czego bohater nie widzi (martwe pole): Ewa w pierwszej chwili nie dostrzega, że Janusz używa agresji tożsamościowej, ponieważ brakuje mu słownictwa technicznego do opisania tego, co budzi jego dyskomfort. Dla laika chłodna szarość betonu architektonicznego kojarzy się z chłodem szpitalnym, którego szczerze nie znosi.',
            '4. Działający mechanizm psychologiczny: Krytyka tożsamościowa vs merytoryczna oraz protokół klaryfikacji faktów. Agresja werbalna uruchamia natychmiastową defensywność, chyba że zostanie przefiltrowana przez racjonalną dekonstrukcję.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Podważenie pozycji i kompetencji w grupie społecznej wywołuje pierwotną reakcję walki lub ucieczki.',
            '6. Jak rozpoznać w czasie rzeczywistym: Ścisk w gardle, fala gorąca na twarzy i ochota na natychmiastowy odwet słowny.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Zastosowanie 4-sekundowej pauzy somatycznej, głęboki wydech i przejście na konkret: „Panie Januszu, słyszę, że ten projekt wywołuje w panu poczucie chłodu i jest daleki od pana oczekiwań. Zależy mi na tym, by czuł się pan w tym domu doskonale. Proszę wskazać: które konkretnie elementy — barwa ścian, oświetlenie czy materiał posadzki — sprawiają wrażenie szpitalnej poczekalni?”.',
            '8. Konsekwencje alternatywnego wyboru: Janusz zbity z pantałyku brakiem oporu obniża ton głosu: „Te szare wielkie kafle na podłodze. Chciałem ciepłe, naturalne drewno dębowe i miękki dywan”. Ewa: „Rozumiem. Podmienimy podłogę na olejowany dąb i dodamy ciepłe oświetlenie 2700K”. Klient wychodzi uspokojony.',
            '9. Wniosek dydaktyczny dla czytelnika: Przekształcenie emocjonalnego ataku tożsamościowego w serię pytań o parametry techniczne odbiera agresorowi wiatr z żagli i przywraca współpracę.'
          ]
        }
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
            { region: 'Przednia kora wyspy i grzbietowa ACC', role: 'Rejestracja społecznego bólu niesprawiedliwości i zdrady', activationState: 'Nagła kaskada pobudzenia sieci istotności (Salience Network)' },
            { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Długofalowa ewaluacja kariery i hamowanie agresji', activationState: 'Zasoby wyczerpane przez poczucie zranienia emocjonalnego' }
          ],
          neurotransmitters: [
            { name: 'Noradrenalina i pobudzenie adrenergiczne', roleInScenario: 'Mobilizacja współczulna: wzrost ciśnienia krwi, zwężenie źrenic i nastawienie na obronę terytorium psychicznego' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 150 ms', process: 'Słowo „zastraszanie” trafia do ciała migdałowatego Marka.' },
            { timeMs: '500 ms', process: 'Wzrost tętna, spięcie karku, zamknięcie pola widzenia i przygotowanie agresywnej riposty.' }
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
