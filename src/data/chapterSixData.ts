import { Chapter, ExamQuestion } from '../types/book';

export const chapterSixExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W klasycznym eksperymencie Solomona Ascha nad konformizmem (Sekcja 6.4), dlaczego aż 75% badanych przynajmniej raz podało ewidentnie błędną długość odcinka?',
    topic: 'Konformizm Informacyjny vs Normatywny',
    sectionRef: 'Sekcja 6.4',
    options: [
      { label: 'A', text: 'Badani mieli wadę wzroku i nie dowidzieli planszy testowej.', isCorrect: false },
      { label: 'B', text: 'Z powodu wpływu normatywnego — lęku przed odrzuceniem przez grupę i dyskomfortu wyłamania się ze wspólnego konsensusu, mimo że wewnętrznie widzieli prawdę.', isCorrect: true },
      { label: 'C', text: 'Byli przekupieni przez asystentów badawczych przed wejściem do laboratorium.', isCorrect: false },
      { label: 'D', text: 'Mózg ludzki jest niezdolny do porównywania prostych figur geometrycznych.', isCorrect: false }
    ],
    explanation: 'Eksperyment Ascha dowiódł potęgi konformizmu normatywnego. Gdy uczestnicy mogli zapisać odpowiedź po cichu na kartce (bez wiedzy grupy), wskaźnik błędów spadał niemal do zera, co dowodzi, że widzieli prawdę, lecz bali się społecznego wykluczenia.',
    keyTakeaway: 'Konformizm często nie wynika z braku wzroku, lecz ze strachu przed izolacją.'
  },
  {
    id: 2,
    question: 'W badaniach Stanleya Milgrama nad posłuszeństwem (Sekcja 6.5) kluczowym czynnikiem sprawiającym, że 65% osób doszło do maksymalnego poziomu 450V, było:',
    topic: 'Posłuszeństwo i Stan Agentyczny',
    sectionRef: 'Sekcja 6.5',
    options: [
      { label: 'A', text: 'Wrodzony sadyzm większości populacji.', isCorrect: false },
      { label: 'B', text: 'Wejście w tzw. stan agentyczny — przeniesienie moralnej odpowiedzialności za własne czyny na postrzegany autorytet (eksperymentatora).', isCorrect: true },
      { label: 'C', text: 'Hipnoza stosowana przez prowadzącego badanie.', isCorrect: false },
      { label: 'D', text: 'Podanie badanym środków farmakologicznych otępiających wolę.', isCorrect: false }
    ],
    explanation: 'Milgram wykazał, że w hierarchii społecznej człowiek ma tendencję do redefiniowania siebie nie jako autonomicznego sprawcy, lecz jako „agenta wykonującego wolę wyższej instancji”. Odpowiedzialność sumienia zostaje przeniesiona w górę hierarchii.',
    keyTakeaway: 'Autorytet zwalnia jednostkę z myślenia o konsekwencjach, jeśli ta odda mu sprawczość.'
  },
  {
    id: 3,
    question: 'Na czym polega „Efekt Widza” (Bystander Effect) opisany przez Latané i Darleya po zabójstwie Kitty Genovese (Sekcja 6.6 i 6.7)?',
    topic: 'Efekt Widza i Rozproszenie Odpowiedzialności',
    sectionRef: 'Sekcja 6.6',
    options: [
      { label: 'A', text: 'Im więcej świadków wypadku, tym statystycznie mniejsza szansa, że pojedynczy świadek podejmie natychmiastowe działanie ratunkowe.', isCorrect: true },
      { label: 'B', text: 'Ludzie w tłumie zawsze stają się agresywni i atakują ofiarę.', isCorrect: false },
      { label: 'C', text: 'Wszyscy świadkowie zawsze uciekają z miejsca zdarzenia w ciągu 10 sekund.', isCorrect: false },
      { label: 'D', text: 'Obecność innych ludzi natychmiast wyzwala maksymalny altruizm.', isCorrect: false }
    ],
    explanation: 'Gdy wokół są inni, zachodzi rozproszenie odpowiedzialności („Ktoś inny na pewno już zadzwonił po pomoc”) oraz zjawisko niewiedzy wielu (patrzymy na spokój innych i wnioskujemy, że sytuacja nie jest groźna).',
    keyTakeaway: 'Gdy wszyscy są odpowiedzialni, nikt nie czuje się odpowiedzialny indywidualnie.'
  },
  {
    id: 4,
    question: 'Podstawowy Błąd Atrybucji (Fundamental Attribution Error) polega na tym, że obserwując błąd lub potknięcie innej osoby:',
    topic: 'Błąd Atrybucji',
    sectionRef: 'Sekcja 6.12',
    options: [
      { label: 'A', text: 'Wyjaśniamy jej zachowanie cechami charakteru (np. „jest leniwy, niekompetentny”), ignorując potężny wpływ okoliczności sytuacyjnych.', isCorrect: true },
      { label: 'B', text: 'Zawsze doszukujemy się winy w warunkach atmosferycznych.', isCorrect: false },
      { label: 'C', text: 'Uważamy, że sami postąpilibyśmy jeszcze gorzej.', isCorrect: false },
      { label: 'D', text: 'Przypisujemy każdemu człowiekowi czyste intencje i świętość.', isCorrect: false }
    ],
    explanation: 'Gdy spóźnia się kolega, myślimy: „Jest niesłowny i niezorganizowany” (atrybucja wewnętrzna). Gdy sami się spóźniamy, myślimy: „Korki, awaria metra, wypadek na trasie” (atrybucja zewnętrzna, sytuacyjna).',
    keyTakeaway: 'Innych oceniamy po ich zachowaniu, siebie — po naszych okolicznościach i intencjach.'
  },
  {
    id: 5,
    question: 'W jaki sposób Efekt Halo (efekt aureoli) zniekształca ocenę kompetencji drugiego człowieka (Sekcja 6.10)?',
    topic: 'Efekt Halo',
    sectionRef: 'Sekcja 6.10',
    options: [
      { label: 'A', text: 'Jedna wyrazista, pozytywna cecha (np. atrakcyjność fizyczna, elokwencja) sprawia, że bezkrytycznie przypisujemy osobie inne pozytywne cechy, jak uczciwość czy inteligencja.', isCorrect: true },
      { label: 'B', text: 'Widzimy świetlistą aureolę wokół głów ludzi o wysokim statusie materialnym.', isCorrect: false },
      { label: 'C', text: 'Oceniający zawsze nienawidzi osób o wysokich kompetencjach technicznych.', isCorrect: false },
      { label: 'D', text: 'Powoduje całkowitą utratę pamięci krótkotrwałej po spotkaniu.', isCorrect: false }
    ],
    explanation: 'System 1 (zbadany w Tomie I) dąży do spójności poznawczej. Skoro ktoś jest zadbany, uśmiechnięty i pewny siebie, umysł automatycznie nadaje mu etykietę „wiarygodny profesjonalista”, zanim zbada merytoryczne fakty.',
    keyTakeaway: 'Powierzchowny blask przesłania brak merytorycznego fundamentu.'
  }
];

export const chapterSix: Chapter = {
  number: 6,
  title: 'Człowiek Wśród Ludzi',
  subtitle: 'Jak obecność, presja i normy grupy bezwiednie przekształcają nasze decyzje, oceny i tożsamość',
  leadParagraph: 'W Tomie I zbadaliśmy architekturę samotnego umysłu — podwójny system, afektywne pożary amygdali, wąskie gardło uwagi i omylną rekonstrukcję wspomnień. Jednak żaden ludzki mózg nie ewoluował w izolatorium. Nasz aparat poznawczy to w 90% procesor społeczny, nieustannie skanujący stado w poszukiwaniu akceptacji, statusu i sygnałów zagrożenia. W tym rozdziale przekraczamy próg indywidualnej czaszki i badamy niewidzialne pole grawitacyjne grupy.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-6-1',
      pageNumber: 226,
      sectionNumber: '6.1',
      title: 'Człowiek nie jest samotnym systemem: Neurobiologia stada',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Jesteśmy nie tyle myślącymi maszynami, które czują, ile społecznymi organizmami, których myślenie jest funkcją relacji ze stadem.',
        author: 'John Cacioppo'
      },
      paragraphs: [
        'Wyobraź sobie, że siedzisz w pustym pokoju i rozwiązujesz zadanie logiczne. Twoja grzbietowo-boczna kora przedczołowa (dlPFC) pracuje stabilnie, pamięć robocza żongluje przesłankami, a tętno wynosi spokojne 68 uderzeń na minutę. Teraz wyobraź sobie, że do pokoju wchodzi pięć obcych osób, staje wokół Twojego biurka i w milczeniu obserwuje każdy ruch Twojego długopisu. Co dzieje się z Twoim ciałem?',
        'W ułamku sekundy, bez Twojej świadomej zgody, kora przedczołowa traci monopol na zasoby metaboliczne. Wzgórze i ciało migdałowate uruchamiają stan czujności społecznej (Social Vigilance). Kora zakrętu obręczy (ACC) zaczyna monitorować potencjalny błąd, a układ współczulny wyrzuca noradrenalinę. Dlaczego? Ponieważ z punktu widzenia ewolucyjnego, spojrzenie stada to sprawa życia i śmierci. Samotny hominid na sawannie był martwym hominidem.',
        'Wielkim błędem potocznej psychologii jest traktowanie człowieka jako niezależnego, racjonalnego decydenta, który jedynie „od czasu do czasu kontaktuje się z innymi”. Prawda neurobiologiczna jest dokładnie odwrotna: nasz mózg to w pierwszej kolejności maszyna do koordynacji plemiennej. Sieć DMN (Default Mode Network), która włącza się, gdy tylko przestajesz liczyć równania, nie odpoczywa — ona natychmiast zaczyna symulować relacje: „Co on o mnie myśli?”, „Czy nie popełniłem gafy?”, „Kto ma dziś przewagę w zespole?”.'
      ],
      subsections: [
        {
          title: 'INTUICJA, KTÓRA MOŻE WPROWADZAĆ W BŁĄD: „Ja myślę całkowicie niezależnie”',
          paragraphs: [
            'Większość wykształconych ludzi cierpi na złudzenie introspektywnej odporności: wierzymy, że o ile inni ulegają modom, presji rówieśniczej i autorytetom, my sami podejmujemy decyzje wyłącznie w oparciu o czystą logikę i własne wartości.',
            'Badania neuroobrazowe fMRI bezlitośnie obalają ten mit. Kiedy grupa wyraża opinię sprzeczną z Twoją, obszary mózgu odpowiedzialne za błąd predykcji i ból somatyczny (przednia wyspa i grzbietowa część przedniego zakrętu obręczy - dACC) świecą się tak samo, jak przy oparzeniu palca wrzątkiem. Niezależność myślenia boli fizycznie.'
          ],
          highlightBox: {
            title: 'Wgląd Neuronaukowy',
            content: 'Odrzucenie społeczne i niezgoda z grupą aktywują te same szlaki neuronalne, co fizyczny ból nocyceptywny. Dlatego dostosowanie się do grupy jest biologiczną reakcją uśmierzającą ból.',
            type: 'neuro'
          }
        }
      ]
    },
    {
      id: 'sec-6-2',
      pageNumber: 230,
      sectionNumber: '6.2',
      title: 'Niewidzialne linie sił: Normy społeczne opisowe i nakazowe',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Wchodzisz do windy. Trzy osoby w środku stoją tyłem do drzwi, wpatrując się w tylną ścianę. Co robisz? Ponad 80% ludzi w klasycznych eksperymentach socjologicznych po kilku nerwowych sekundach obraca się o 180 stopni i również wpatruje się w ścianę. Nikt nie wydał polecenia. Nie ma żadnego prawa zabraniającego patrzenia na drzwi. Zadziałała norma społeczna — najpotężniejszy, bezszelestny regulator ludzkiego zachowania.',
        'Psycholog Robert Cialdini wprowadził fundamentalne rozróżnienie, które powinien znać każdy analityk ludzkich zachowań: normy opisowe (descriptive) oraz normy nakazowe (injunctive). Norma nakazowa mówi o tym, co ludzie POWINNI robić (wartości moralne, przepisy, deklaracje: „Nie należy śmiecić w lesie”). Norma opisowa informuje o tym, co ludzie FAKTYCZNIE ROBIĄ („Wszyscy wokół rzucają puszki pod to drzewo”).',
        'Gdy norma nakazowa zderza się z normą opisową, norma opisowa niemal zawsze wygrywa. Jeśli w firmie wisi plakat: „Zgłaszaj błędy otwarcie”, ale pracownik widzi, że koledzy tuszują pomyłki, by uniknąć reprymendy szefa, żaden plakat nie przekona go do prawdomówności. Mózg uczy się z obserwacji stada, nie z manifestów.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD Z ŻYCIA: Oszczędzanie energii w hotelu',
          paragraphs: [
            'W słynnym badaniu Cialdiniego w pokojach hotelowych testowano różne komunikaty zachęcające do ponownego używania ręczników.',
            'Komunikat A (norma nakazowa i apel ekologiczny): „Chroń środowisko! Użyj ręcznika ponownie, aby oszczędzać wodę dla przyszłych pokoleń”. Skuteczność: 35%.',
            'Komunikat B (norma opisowa ogólna): „Dołącz do naszych gości! 75% osób mieszkających w naszym hotelu używa ręczników wielokrotnie”. Skuteczność wzrosła do 44%.',
            'Komunikat C (norma opisowa lokalna): „75% gości, którzy mieszkali DOKŁADNIE W TYM POKOJU, ponownie użyło ręczników”. Skuteczność skoczyła do blisko 50%!',
            'Dlaczego? Mózg nie chce być abstrakcyjnie dobry; mózg panicznie pragnie robić to, co robili inni członkowie jego bezpośredniego otoczenia.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-3',
      pageNumber: 234,
      sectionNumber: '6.3',
      title: 'Maska staje się twarzą: Role społeczne i deindywiduacja',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Kiedy wkładasz garnitur adwokata, lekarski fartuch, policyjny mundur lub identyfikator audytora korporacyjnego, nie tylko zmieniasz odzież wierzchnią. Zmieniasz matrycę decyzyjną. Zjawisko to, badane m.in. przez Ervinga Goffmana i Philipa Zimbardo, pokazuje, że rola społeczna działa jak gotowy skrypt poznawczy.',
        'W chwili wejścia w rolę, kora przedczołowa pobiera z pamięci semantycznej zestaw oczekiwań: „Jak zachowuje się twardy menedżer?”, „Co wypada lekarzowi?”, „Jak reaguje urażony ojciec?”. Jednostka zaczyna działać nie ze swojego rdzennego „ja”, lecz z persony narzuconej przez kontekst.',
        'Niebezpieczeństwo pojawia się w momencie deindywiduacji — gdy tożsamość jednostkowa zostaje całkowicie rozpuszczona w anonimowości grupy lub symbolu roli. Człowiek ukryty za ciemnymi okularami, uniformem czy anonimowym nickiem w internecie doświadcza drastycznego obniżenia samokontroli i zahamowań moralnych, ponieważ odpowiedzialność przestaje być imienna.'
      ],
      subsections: [
        {
          title: 'UWAŻAJ NA UPROSZCZENIE: Eksperyment Więzienny Zimbardo',
          paragraphs: [
            'Przez dekady Stanfordzki Eksperyment Więzienny (1971) przedstawiano jako dowód na to, że „zwykli ludzie automatycznie stają się potworami w złym otoczeniu”. Współczesna rewizja naukowa (m.in. prace Thibault Le Texiera) nakazuje jednak ogromną ostrożność.',
            'Strażnicy nie stali się sadystami sami z siebie — byli aktywnie instruowani i zachęcani przez Zimbardo do stosowania presji psychologicznej. Oznacza to coś jeszcze bardziej niepokojącego: ludzie stają się okrutni nie w próżni, lecz wtedy, gdy autorytet legitymizuje ich przemoc jako „służbę wyższemu celowi naukowemu lub społecznemu”.'
          ],
          highlightBox: {
            title: 'Korekta Naukowa (Status F/B)',
            content: 'Deindywiduacja nie odbiera wolnej woli mechanicznie; obniża próg oporu wobec destrukcyjnych zachowań, jeśli są one aprobowane przez przewodnika stada.',
            type: 'warning'
          }
        }
      ]
    },
    {
      id: 'sec-6-4',
      pageNumber: 238,
      sectionNumber: '6.4',
      title: 'Siła jednomyślności: Eksperymenty Ascha i anatomia konformizmu',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Wyobraź sobie klasyczne badanie Solomona Ascha: siedzisz przy stole z siedmioma innymi studentami. Badacz pokazuje dwie plansze. Na jednej jest odcinek wzorcowy X, na drugiej trzy odcinki: A, B i C. Zadanie jest banalne — wskazać, który odcinek ma tę samą długość co X. Różnica wynosi kilka centymetrów, pięcioletnie dziecko odpowiedziałoby bezbłędnie.',
        'Odpowiedzi udzielane są po kolei na głos. Jesteś przedostatni. Pierwszy uczestnik pewnym głosem mówi: „Odcinek B” (choć ewidentnie poprawny jest C!). Drugi bez wahania potwierdza: „Odcinek B”. Trzeci, czwarty, piąty, szósty — wszyscy mówią „B”. Nadchodzi Twoja kolej. Zegarek tyka. Siedem par oczu patrzy na Ciebie. Co robisz?',
        'W eksperymentach Ascha aż 75% badanych przynajmniej raz uległo jednomyślnej grupie i wskazało ewidentną bzdurę. Średnio co trzecia odpowiedź była konformistyczna. Dlaczego dorośli, wykształceni ludzie zaprzeczali własnym oczom?'
      ],
      subsections: [
        {
          title: 'Trzy poziomy uległości wg Herberta Kelmana',
          paragraphs: [
            '1. Uleganie (Compliance): Wiesz, że grupa się myli, ale mówisz to co oni, aby uniknąć kłótni, wyśmiania lub wykluczenia (motywacja zewnętrzna).',
            '2. Identyfikacja (Identification): Przyjmujesz zdanie grupy, ponieważ chcesz być postrzegany jako lojalny członek tej wspólnoty („Nasi eksperci wiedzą lepiej”).',
            '3. Internalizacja (Internalization): Najgłębszy poziom — pod wpływem pewności siebie grupy Twoja percepcja naprawdę ulega przebudowie. Zaczynasz szczerze wierzyć, że odcinek B jest równy X („Może mam wadę wzroku?”, „Oni patrzą pod lepszym kątem”).'
          ]
        },
        {
          title: 'Magiczna moc jednego sojusznika',
          paragraphs: [
            'Najważniejszy wniosek z badań Ascha często umyka w podręcznikach: gdy badacz wprowadził do pokoju choćby jednego podstawionego uczestnika, który wyłamał się z fałszu i podał poprawną odpowiedź C (lub jakąkolwiek inną niż reszta!), konformizm spadał o ponad 80%!',
            'Nie potrzebujesz większości, by obronić prawdę. Wystarczy jeden głos rozbijający monolit pozornej jednomyślności stada, by dać korze przedczołowej pozostałych odwagę do samodzielnego myślenia.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-5',
      pageNumber: 242,
      sectionNumber: '6.5',
      title: 'Cień białego fartucha: Posłuszeństwo, autorytet i stan agentyczny',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Uniwersytet Yale, lipiec 1961 roku. Zaledwie trzy miesiące po rozpoczęciu procesu Adolfa Eichmanna w Jerozolimie, 27-letni psycholog Stanley Milgram zadaje fundamentalne pytanie: „Czy to możliwe, że Eichmann i miliony jego wspólników w Zagładzie po prostu wykonywali rozkazy? Czy zwykły, przyzwoity człowiek może stać się katem pod wpływem autorytetu?”.',
        'Rekrutowani z ogłoszenia w gazecie zwykli obywatele — nauczyciele, urzędnicy, robotnicy — wcielają się w rolę „Nauczyciela”. Ich zadaniem jest karanie „Ucznia” (aktora ukrytego za ścianą) wstrząsami elektrycznymi za każdy błąd w teście pamięciowym. Generator ma 30 przełączników: od 15V („Lekki wstrząs”), przez 150V („Uczeń krzyczy z bólu i błaga o wypuszczenie”), 330V („Śmiertelne niebezpieczeństwo / brak reakcji”), aż po 450V oznaczone złowrogim symbolem „XXX”.',
        'Przed eksperymentem Milgram poprosił 40 wybitnych psychiatrów o prognozę. Eksperci orzekli: „Nie więcej niż 1–2% skrajnych sadystów dojdzie do końca skali”. Wynik rzeczywisty wstrząsnął światem: 65% uczestników doszło do maksymalnego napięcia 450V, wciskając przełącznik na spokojne polecenie badacza w szarym fartuchu („Eksperyment wymaga, abyś kontynuował”).'
      ],
      subsections: [
        {
          title: 'Stan autonomiczny a stan agentyczny',
          paragraphs: [
            'Milgram sformułował teorię dwóch stanów funkcjonowania psychiki ludzkiej:',
            'W stanie autonomicznym człowiek czuje się w pełni moralnie i przyczynowo odpowiedzialny za skutki swoich działań. Jego sumienie i kora przedczołowa sprawują nadzór nad zachowaniem.',
            'W stanie agentycznym jednostka postrzega siebie wyłącznie jako mechaniczne narzędzie wykonujące wolę prawomocnego autorytetu. Odpowiedzialność zostaje wytransferowana w górę. Osoba może płakać, pocić się, gryźć wargi z nerwów (co działo się u Milgrama), ale nadal naciska guzik, mówiąc sobie: „To nie ja to robię, to on mi kazał”.'
          ],
          highlightBox: {
            title: 'Most do Tomu I (Emocje i Rozdźwięk Poznawczy)',
            content: 'Uczestnicy Milgrama doświadczali skrajnego porwania emocjonalnego (Tom I, Rozdział 2): drżeli, przeklinali, błagali badacza o przerwanie. Jednak autorytet unieważniał ich sygnały somatyczne za pomocą chłodnego komunikatu poznawczego.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-6-6',
      pageNumber: 246,
      sectionNumber: '6.6',
      title: 'Gdy krzyczy ulica: Efekt widza i zjawisko niewiedzy wielu',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Nowy Jork, Queens, 1964 rok. 28-letnia Kitty Genovese wraca w nocy z pracy. Zostaje zaatakowana i śmiertelnie ugodzona nożem w pobliżu swojego bloku. Artykuł na pierwszej stronie The New York Times donosi, że „38 szanowanych obywateli patrzyło przez okna na morderstwo przez ponad pół godziny i żaden nie zadzwonił na policję”. Choć późniejsze śledztwa wykazały, że liczba 38 była prasową hiperbolą, tragedia ta zapoczątkowała przełomowe badania Bibba Latané i Johna Darleya nad „efektem widza”.',
        'Eksperyment z dymem w pokoju: Student wypełnia kwestionariusz. Nagle przez kratkę wentylacyjną do pokoju zaczyna wsączać się gęsty, gryzący dym. Gdy student jest sam, w 75% przypadków w ciągu 2 minut wstaje, wychodzi i alarmuje obsługę.',
        'Gdy w pokoju siedzi trzech studentów (w tym dwóch podstawionych pomocników badacza, którzy na widok dymu tylko wzruszają ramionami i dalej piszą), zaledwie 10% badanych reaguje w ciągu 6 minut! Pozostali siedzą w kłębach dymu, kaszląc i przecierając oczy, paraliżowani przez dwa mechanizmy.'
      ],
      subsections: [
        {
          title: 'Mechanizm 1: Zjawisko niewiedzy wielu (Pluralistic Ignorance)',
          paragraphs: [
            'Sytuacje kryzysowe są zazwyczaj niejednoznaczne. Czy ten leżący na chodniku mężczyzna ma zawał, czy po prostu zasnął pijany? Czy ten krzyk w mieszkaniu obok to przemoc domowa, czy głośny film akcji?',
            'Co robi ludzki umysł w warunkach niepewności? Skanuje twarze innych świadków (Bottom-up attention, Tom I). Jednak każdy świadek stara się zachować pokerową twarz, by nie wyjść na panikarza. W rezultacie wszyscy widzą wokół siebie spokój, więc każdy dochodzi do fałszywego wniosku: „Skoro nikt nie panikuje, to widocznie nic się nie dzieje”. Wszyscy tkwią w bezruchu, oszukując się nawzajem.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-7',
      pageNumber: 250,
      sectionNumber: '6.7',
      title: 'Rozproszenie odpowiedzialności: Dlaczego tłum paraliżuje pomoc',
      category: 'teoria',
      readingTimeMinutes: 12,
      paragraphs: [
        'Drugim filarem efektu widza jest czysta arytmetyka psychologiczna znana jako rozproszenie odpowiedzialności (Diffusion of Responsibility).',
        'Kiedy jesteś jedynym świadkiem wypadku drogowego na pustej leśnej drodze, 100% ciężaru moralnego spoczywa na Twoich barkach. Jeśli miniesz ofiarę i odjedziesz, poczucie winy i potępienie społeczne obciążą wyłącznie Ciebie. Koszt zaniechania jest gigantyczny.',
        'Gdy wokół stoi 50 osób na ruchliwym peronie metra, 100% odpowiedzialności zostaje podzielone przez 50. Każdy otrzymuje mikroskopijne 2% poczucia winy. Umysł podsuwa natychmiastowe racjonalizacje Systemu 1: „Na pewno ktoś już wezwał pogotowie”, „Przecież tamci dwaj stoją bliżej”, „Ten pan w garniturze wygląda na lekarza, niech on podejdzie”.',
        'W efekcie człowiek umiera na oczach setki ludzi nie dlatego, że są oni pozbawionymi serca potworami, lecz dlatego, że każdy z nich czekał na ruch sąsiada.'
      ],
      subsections: [
        {
          title: 'JAK ZASTOSOWAĆ TO JUTRO? Protokół przełamywania efektu widza',
          paragraphs: [
            'Jeśli zasłabniesz w miejscu publicznym lub jesteś świadkiem wypadku, NIGDY nie krzycz ogólnie: „Niech ktoś wezwie pomoc!”. Słowo „ktoś” to psychologiczna próżnia, w której odpowiedzialność natychmiast ulega rozproszeniu.',
            'Zamiast tego wskaż palcem konkretną osobę, nawiąż kontakt wzrokowy i wydaj precyzyjną dyrektywę:',
            '„Panie w czerwonej kurtce! Tak, pan! Niech pan teraz wyjmie telefon i zadzwoni pod 112. Proszę mi powiedzieć, kiedy dyspozytor odbierze”.',
            'W tym momencie rozbijasz anonimowość tłumu, nakładasz na jednostkę 100% odpowiedzialności i przywracasz jej stan autonomiczny.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-8',
      pageNumber: 254,
      sectionNumber: '6.8',
      title: 'Status, hierarchia i chemia dominacji: Kto mówi, kto milczy',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Zanim homo sapiens wypowiedział pierwsze słowo w języku symbolicznym, przez setki tysięcy lat porozumiewał się językiem hierarchii naczelnych. Wystarczy wejść na dowolne spotkanie biznesowe, do pokoju nauczycielskiego czy na rodzinną kolację wigilijną, by bez znajomości języka po 30 sekundach wskazać, kto ma najwyższy status w stadzie.',
        'Hierarchia nie jest konstruktem kulturowym — to biologiczny kompas oszczędzający energię grupy. Walka o każdy kęs jedzenia czy każde terytorium doprowadziłaby stado do samounicestwienia. Dlatego mózg wykształcił błyskawiczne detektory statusu: ton głosu o obniżonej częstotliwości, zajmowanie przestrzeni fizycznej, tempo mowy, a przede wszystkim: kto czeka na czyją aprobatę.',
        'Osoby o wysokim postrzeganym statusie uwalniają w otoczeniu neurobiologiczną uległość. Kiedy szef zarządu rzuca słaby żart, wszyscy wybuchają śmiechem. Kiedy stażysta proponuje genialne rozwiązanie, sala często milczy lub przechodzi nad tym do porządku dziennego. Nasza uwaga (Tom I, Rozdział 3) jest automatycznie zasysana przez jednostki dominujące.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD Z ŻYCIA: Katastrofy lotnicze i indeks dystansu władzy',
          paragraphs: [
            'Malcolm Gladwell w książce „Poza schematem” opisał tragiczną serię katastrof linii Korean Air w latach 90. Śledztwa czarnych skrzynek wykazały zdumiewający mechanizm: w kokpicie piloci nie rozbijali się z powodu awarii silników, lecz z powodu skrajnej uległości drugiego pilota wobec kapitana.',
            'W kulturze o wysokim dystansie władzy młodszy oficer widział błąd kapitana na wskaźnikach, ale używał zawoalowanych, grzecznościowych aluzji („Kapitanie, w tych rejonach radary bywają kapryśne”), zamiast krzyknąć: „Ściągaj wolant, zaraz uderzymy w zbocze!”. Strach przed naruszeniem hierarchii okazał się silniejszy niż instynkt samozachowawczy.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-9',
      pageNumber: 258,
      sectionNumber: '6.9',
      title: 'Pierwsze 100 milisekund: Jak mózg tworzy pierwsze wrażenie',
      category: 'teoria',
      readingTimeMinutes: 12,
      paragraphs: [
        'Według badań prof. Janine Willis i Alexandra Todorova z Uniwersytetu Princeton, ludzki mózg potrzebuje zaledwie 100 milisekund (jednej dziesiątej sekundy!), aby na podstawie samego widoku twarzy nieznajomego wygenerować wiążące oceny dotyczące jego wiarygodności, kompetencji, agresywności i statusu.',
        'Wydłużenie czasu ekspresji twarzy do 500 czy 1000 milisekund nie zmieniało już pierwotnego osądu — zwiększało jedynie subiektywną pewność badanego, że ma rację! To podręcznikowy przykład działania Systemu 1 z Tomu I. Zanim informacja dotrze do kory wzrokowej V1 i zostanie poddana świadomej obróbce semantycznej, ciało migdałowate podjęło już decyzję afektywną: „Bezpieczny czy Zagrożenie?”.',
        'Co najbardziej uderzające, badania Todorova dowiodły, że na podstawie samych 1-sekundowych niemych migawek twarzy kandydatów do Kongresu USA, badani potrafili z dokładnością niemal 70% przewidzieć wyniki rzeczywistych wyborów. Wyborcy wierzyli, że głosują na program gospodarczy; ich System 1 głosował na zarys szczęki i wyraz oczu sugerujący „kompetencję dominującą”.'
      ]
    },
    {
      id: 'sec-6-10',
      pageNumber: 262,
      sectionNumber: '6.10',
      title: 'Efekt halo: Blask jednej cechy przesłaniający resztę człowieka',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Edward Thorndike w 1920 roku badał oceny wystawiane żołnierzom przez oficerów dowodzących. Zauważył zaskakującą korelację: jeśli żołnierz był wysoki, wysportowany i miał nienaganną postawę na zbiórce, oficerowie automatycznie oceniali go jako odważniejszego, bardziej inteligentnego, lojalnego i lepiej strzelającego. Zjawisko to nazwano Efektem Halo (aureoli).',
        'Mechanizm polega na tym, że jedna wyrazista cecha — uroda, wzrost, elokwencja, ukończenie prestiżowej uczelni, luksusowy zegarek — staje się filtrem percepcyjnym (Tom I, Rozdział 4), przez który interpretowane są wszystkie pozostałe zachowania jednostki.',
        'Jeśli atrakcyjny, charyzmatyczny kandydat spóźni się na rozmowę kwalifikacyjną, rekruter myśli: „Jest tak rozchwytywany, widocznie zamykał ważny projekt”. Jeśli to samo spóźnienie zaliczy kandydat nieatrakcyjny i introwertyczny, rekruter pomyśli: „Niezorganizowany, lekceważy naszą firmę”. Istnieje również mroczne odbicie tego zjawiska: Efekt Rogów (Horn Effect), gdzie jedna negatywna cecha z góry zatruwa ocenę całego człowieka.'
      ],
      subsections: [
        {
          title: 'SPRAWDŹ SIĘ: Czy ulegasz efektowi aureoli w pracy?',
          paragraphs: [
            'Przypomnij sobie osobę w swoim zespole, która mówi najpłynniej, używa modnych anglicyzmów i prezentuje slajdy z niezachwianą pewnością siebie. Zadaj sobie bezwzględne pytanie:',
            'Jakie są TWARDE, MIERZALNE DOWODY jakości jej pracy, gdy odejmiemy jej charyzmę i styl bycia? Bardzo często okazuje się, że za spektakularną formą kryje się przeciętna treść, podczas gdy cisi wykonawcy na zapleczu generują 80% realnej wartości firmy.'
          ]
        }
      ]
    },
    {
      id: 'sec-6-11',
      pageNumber: 266,
      sectionNumber: '6.11',
      title: 'Od schematu do samospełniającego się proroctwa: Stereotypy w działaniu',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Z punktu widzenia oszczędności poznawczej (Tom I, Rozdział 1), stereotyp to nic innego jak heurystyka kategoryzacyjna. Mózg spotyka dziennie setki nowych obiektów i ludzi; gdyby musiał analizować każdą jednostkę od zera, zbankrutowałby energetycznie. Dlatego wrzuca ludzi do szufladek: „Niemiec”, „Informatyk”, „Nastolatek”, „Urzędnik”.',
        'Problem pojawia się wtedy, gdy sztywny stereotyp przekształca się w uprzedzenie (komponent emocjonalny: niechęć lub faworyzacja), a następnie w dyskryminację (komponent behawioralny: nierówne traktowanie). Najbardziej fascynującym zjawiskiem socjopsychologicznym jest tu jednak samospełniające się proroctwo (Snyder, Tanke, Berscheid, 1977).',
        'W eksperymencie mężczyźni rozmawiali przez telefon z kobietami, którym wcześniej przypisano fałszywe zdjęcia (jednym atrakcyjne, drugim nieatrakcyjne). Mężczyźni przekonani, że rozmawiają z pięknością, byli ciepli, dowcipni i zaangażowani. W odpowiedzi kobieta po drugiej stronie słuchawki stawała się otwarta, radosna i elokwentna! Ich pierwotne, fałszywe oczekiwanie wykreowało rzeczywistość.'
      ]
    },
    {
      id: 'sec-6-12',
      pageNumber: 270,
      sectionNumber: '6.12',
      title: 'Błąd atrybucji: Dlaczego ja mam powody, a ty masz wady',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Jedziesz samochodem lewym pasem. Nagle z prawej strony wcina się przed Ciebie czarny sedan bez kierunkowskazu, zmuszając Cię do ostrego hamowania. Jaka jest Twoja pierwsza, automatyczna myśl? „Co za bezczelny cham, idiota, psychopata za kółkiem!”. Przypisujesz jego zachowanie jego trwałym cechom charakteru (atrybucja wewnętrzna / dyspozycyjna).',
        'Dwa tygodnie później to Ty spieszysz się z chorym dzieckiem do szpitala albo wioząc ważny dokument na lotnisko. Zmieniasz pas dynamicznie, zapominając o kierunkowskazie. Co myślisz o sobie? „Przepraszam, nie chciałem, ale mam krytyczną sytuację, to wyjątkowe okoliczności!” (atrybucja zewnętrzna / sytuacyjna). Ani przez ułamek sekundy nie pomyślisz: „Zrobiłem tak, bo jestem złym człowiekiem”.',
        'To jest Podstawowy Błąd Atrybucji (Lee Ross). Mamy asymetrię poznawczą: cudze błędy tłumaczymy charakterem, własne — okolicznościami. Z kolei cudze sukcesy tłumaczymy szczęściem lub koneksjami („Miał farta”), a własne sukcesy — twardą pracą i talentem.'
      ]
    },
    {
      id: 'sec-6-13',
      pageNumber: 274,
      sectionNumber: '6.13',
      title: 'Wielkie Studium Przypadku: Cichy sabotaż w zespole projektowym',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Poniższe studium przypadku stanowi całościową wiwisekcję dynamiki grupowej w środowisku korporacyjnym. Ilustruje, jak zderzenie norm grupowych, efektu widza, statusu i błędu atrybucji doprowadziło do katastrofy wartego 10 milionów złotych wdrożenia systemu IT w bankowości.'
      ],
      caseStudyRef: {
        id: 'cs-ch6-wdrozenie',
        title: 'Milczenie w Sali Konferencyjnej Alfa: Anatomia Zaniechania',
        subtitle: 'Jak 12 wybitnych inżynierów i menedżerów pozwoliło na wypuszczenie wadliwego systemu',
        protagonist: 'Michał, Główny Architekt Danych, 34 lata',
        context: 'Ostatnie spotkanie komitetu sterującego przed premierą nowego systemu transakcyjnego banku.',
        story: [
          'Michał siedział przy dębowym stole w sali konferencyjnej na 24. piętrze. Na ekranie świecił się slajd podsumowujący: „Wszystkie wskaźniki gotowości: ZIELONE. Premiera w najbliższy piątek o 22:00”. Przy stole siedziało dwanaście osób: dyrektorzy departamentów, kierownik wdrożenia, audytor zewnętrzny i zespół architektów.',
          'Michał wiedział coś, czego nie było na slajdach. Dwa dni wcześniej podczas nocnych testów obciążeniowych odkrył anomalię w module rozliczeń walutowych: przy wolumenie powyżej 50 tysięcy zapytań na sekundę baza danych gubiła około 0,3% transakcji. Zgłosił to swojemu bezpośredniemu przełożonemu, Piotrowi. Piotr spojrzał na zegarek i powiedział: „Michał, zarząd podpisał premiery z partnerami medialnymi. Jeśli to zatrzymamy, polecą głowy. Pewnie to tylko kwestia buforowania w środowisku testowym. Nie panikujmy przed zebraniem”.',
          'Na spotkaniu prowadząca, wiceprezes Barbara, zapytała: „Czy ktoś z państwa widzi jakiekolwiek ryzyko krytyczne, które uniemożliwia start w piątek?”. Zapadła cisza. Michał poczuł suchość w ustach i pot na karku. Spojrzał na Piotra — ten wpatrywał się w blat stołu. Spojrzał na audytora — ten przeglądał telefon. Michał pomyślał: „Skoro nikt nic nie mówi, może Piotr ma rację? Może ja przesadzam? Jeśli się odezwę, wyjdę na histeryka, który blokuje sukces firmy”. Michał zmilczał.',
          'W piątek o 23:30 system ruszył. W poniedziałek o 9:15 pod naporem klientów baza danych utraciła spójność w 12 000 kont walutowych. Bank musiał wstrzymać operacje na 36 godzin, kurs akcji spadł o 8%, a straty wizerunkowe szacowano w dziesiątkach milionów.'
        ],
        decisionTaken: 'Michał zdecydował się zachować milczenie podczas decydującego pytania wiceprezes, podporządkowując się pozornej jednomyślności grupy.',
        whatProtagonistSaw: 'Pewność siebie zarządu, milczenie kolegów, presję czasu i ryzyko osobistego ostracyzmu w razie wywołania fałszywego alarmu.',
        whatWasMissed: 'Że audytor i trzej inni inżynierowie również mieli wątpliwości, ale każdy z nich milczał dokładnie z tego samego powodu — ulegając zjawisku niewiedzy wielu!',
        psychologicalAnalysis: {
          coreMechanism: 'Syndrom Myślenia Grupowego (Groupthink) sprzężony z konformizmem normatywnym i efektem widza.',
          cognitiveBiases: [
            { name: 'Niewiedza wielu (Pluralistic Ignorance)', description: 'Wszyscy milczą, więc każdy wnioskuje, że inni są pewni sukcesu.', impact: 'Zablokowanie krytycznego zgłoszenia błędu.' },
            { name: 'Iluzja jednomyślności', description: 'Brak sprzeciwu został zinterpretowany przez wiceprezes jako pełna jednomyślność ekspertów.', impact: 'Pewność zarządu oparta na iluzji.' }
          ],
          defenseMechanisms: [
            { name: 'Racjonalizacja', explanation: 'Michał wmówił sobie, że przełożony Piotr ma większe doświadczenie biznesowe i wie lepiej.' }
          ],
          emotionalDynamic: 'Paniczny lęk przed wykluczeniem ze stada (Social Exclusion Pain) przeważył nad racjonalną oceną ryzyka technicznego.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Przednia kora zakrętu obręczy (dACC)', role: 'Sygnalizacja błędu i lęku przed wyłamaniem się', activationState: 'Ekstremalna aktywacja hamująca mowę' },
            { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Logiczna ocena błędu w kodzie', activationState: 'Stłumiona przez wyrzut kortyzolu' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol', roleInScenario: 'Paraliż decyzyjny i uległość wobec autorytetu zarządu' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 200 ms', process: 'Pytanie wiceprezes: skan wzrokowy twarzy uczestników.' },
            { timeMs: '200 - 800 ms', process: 'Brak reakcji innych wywołuje niewiedzę wielu i paraliż somatyczny.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'Presja hierarchiczna i uciszanie wątpliwości', description: 'Komunikat Piotra: „Nie panikujmy, polecą głowy”.', vulnerabilityExploited: 'Strach o bezpieczeństwo zatrudnienia' }
          ],
          counterMeasures: [
            { step: 'Instytucjonalny Adwokat Diabła', script: 'Procedura wymuszająca, aby na każdym komitecie jedna wyznaczona osoba miała obowiązek przedstawić scenariusz katastrofy.', rationale: 'Zdejmuje z jednostki odium „czarowidza” i konformizm.' }
          ]
        },
        alternativePath: 'Gdyby Michał wstał i powiedział: „Pani wiceprezes, system przechodzi 99% testów, ale mam twarde logi z testu obciążeniowego pokazujące błąd w 0,3% transakcji walutowych. Musimy przesunąć start o 7 dni na poprawkę”, wiceprezes wstrzymałaby wdrożenie, a bank uniknąłby katastrofy.',
        readerQuestion: 'W ilu sytuacjach w Twojej firmie lub rodzinie milczałeś tylko dlatego, że nikt inny nie podnosił ręki?',
        keyTakeaway: 'Milczenie grupy rzadko oznacza zgodę. Najczęściej oznacza, że wszyscy boją się tak samo jak Ty.'
      }
    },
    {
      id: 'sec-6-14',
      pageNumber: 278,
      sectionNumber: '6.14',
      title: 'Podsumowanie, Most do Rozdziału 7 i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'W tym rozdziale zobaczyliśmy, że człowiek nigdy nie podejmuje decyzji w próżni społecznej. Normy grupy, konformizm, uległość wobec autorytetu, efekt widza oraz błędy atrybucji działają jak potężne, podświadome siły grawitacyjne wykrzywiające trajektorię naszego myślenia.',
        'Wszystkie te mechanizmy mają wspólny nośnik: KOMUNIKACJĘ. To poprzez słowa, milczenie, ton głosu i mowę ciała ludzie przekazują sobie normy, narzucają role i egzekwują posłuszeństwo.',
        'W Rozdziale 7 przejdziemy do serca relacji międzyludzkich: zbadamy, dlaczego tak rzadko słyszymy to, co druga osoba naprawdę mówi, czym różni się intencja od efektu wypowiedzi i jak prowadzić rozmowy, które zamiast murów budują porozumienie.',
        'Zanim przejdziesz dalej, sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 6.'
      ]
    }
  ]
};
