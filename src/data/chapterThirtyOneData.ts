import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 15 (GLOBALNIE ROZDZIAŁ 31 W STRUKTURZE DZIEŁA)
 * TYTUŁ: AUTONOMIA I SPRAWCZOŚĆ: JAK STAĆ SIĘ ARCHITEKTEM WŁASNEGO ŻYCIA
 * KULMINACJA I SYNTEZA CAŁEGO TOMU III
 */

export const chapterThirtyOneExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Czym różni się psychologiczna autonomia od samowystarczalności i izolacjonizmu?',
    topic: 'Definicja i Istota Autonomii',
    sectionRef: 'Sekcja 31.1',
    options: [
      { label: 'A', text: 'Autonomia to zdolność do podejmowania decyzji w zgodzie z własnymi wartościami i ponoszenia za nie odpowiedzialności, włączając w to świadome proszenie o pomoc; samowystarczalność to lękowa próba robienia wszystkiego samemu bez polegania na kimkolwiek.', isCorrect: true },
      { label: 'B', text: 'Autonomia polega na całkowitym zerwaniu relacji społecznych i życiu poza społeczeństwem.', isCorrect: false },
      { label: 'C', text: 'Autonomia to stan, w którym człowiek zawsze wie wszystko najlepiej i nigdy nie zmienia zdania.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy — oba pojęcia oznaczają odrzucenie jakiejkolwiek współpracy z ludźmi.', isCorrect: false }
    ],
    explanation: 'Zgodnie z Teorią Autodeterminacji (Deci & Ryan) autonomia nie oznacza odcięcia od innych. Człowiek autonomiczny może poprosić o wsparcie, delegować zadania lub zasięgnąć rady eksperta, o ile robi to z własnej, nieprzymuszonej woli i w zgodzie ze swoim kompasem wartości.',
    keyTakeaway: 'Autonomia to wolność wyboru i spójność wewnętrzna, a nie samotność i odmowa współpracy.'
  },
  {
    id: 2,
    question: 'W jaki sposób model „Trzech Kręgów Wpływu” (Strefa Kontroli, Wpływu i Braku Kontroli) zapobiega wyuczonej bezradności i wypaleniu?',
    topic: 'Locus of Control i Trzy Kręgi Wpływu',
    sectionRef: 'Sekcja 31.3',
    options: [
      { label: 'A', text: 'Pozwala precyzyjnie skierować 100% energii poznawczej i behawioralnej na Strefę Kontroli Bezpośredniej (własne myśli, reakcje, mikrokroki), aktywnie oddziaływać na Strefę Wpływu i radykalnie zaakceptować Strefę Braku Kontroli.', isCorrect: true },
      { label: 'B', text: 'Wmawia człowiekowi, że kontroluje pogodę, nastroje innych ludzi i sytuację makroekonomiczną.', isCorrect: false },
      { label: 'C', text: 'Zachęca do całkowitej bierności i czekania, aż problemy same znikną.', isCorrect: false },
      { label: 'D', text: 'Zmusza do ciągłego obwiniania otoczenia za wszystkie osobiste niepowodzenia.', isCorrect: false }
    ],
    explanation: 'Wypalenie i bezradność rodzą się z próby bezpośredniego kontrolowania Strefy C (cudzych emocji, decyzji czy losowości). Dojrzała sprawczość polega na inwestowaniu zasobów tam, gdzie mamy realne przełożenie na ruch fizyczny.',
    keyTakeaway: 'Zmień to, co możesz kontrolować; wpływaj tam, gdzie możesz; zaakceptuj to, czego zmienić nie możesz — i naucz się ich rozróżniania.'
  },
  {
    id: 3,
    question: 'Jaka jest fundamentalna różnica pomiędzy WARTOŚCIĄ a CELEM w architekturze życia?',
    topic: 'Wartości a Cele',
    sectionRef: 'Sekcja 31.7',
    options: [
      { label: 'A', text: 'Wartość to nadrzędny, niewyczerpywalny kierunek nawigacyjny (jak gwiazda polarna lub kierunek zachodni), a cel to konkretny, mierzalny i osiągalny punkt na mapie (jak dotarcie do konkretnego miasta).', isCorrect: true },
      { label: 'B', text: 'Cele są ważne tylko w biznesie, a wartości tylko w życiu religijnym.', isCorrect: false },
      { label: 'C', text: 'Wartość to to samo co cel, tylko zapisane trudniejszym słownictwem.', isCorrect: false },
      { label: 'D', text: 'Cel można realizować całe życie bez jego osiągania, a wartość przestaje istnieć po osiągnięciu sukcesu.', isCorrect: false }
    ],
    explanation: 'Cele można osiągnąć i „odhaczyć” (np. zdobycie dyplomu, przebiegnięcie maratonu). Wartości (np. ciekawość świata, troska o zdrowie, uczciwość) nigdy się nie kończą — są jakością działania, którą wnosisz w każdą chwilę.',
    keyTakeaway: 'Cele służą Twoim wartościom, a nie na odwrót. Osiągnięcie celu bez oparcia w wartościach prowadzi do pustki sukcesu.'
  },
  {
    id: 4,
    question: 'Na czym polega różnica psychologiczna pomiędzy ODPOWIEDZIALNOŚCIĄ a WINĄ w analizie zdarzeń życiowych?',
    topic: 'Odpowiedzialność bez Samoobwiniania',
    sectionRef: 'Sekcja 31.10',
    options: [
      { label: 'A', text: 'Wina to destrukcyjne, zwrócone w przeszłość samobiczowanie („jestem zły, to moja wina”), które paraliżuje działanie; odpowiedzialność to zwrócona w przyszłość postawa sprawcza („niezależnie od przyczyn, to do mnie należy decyzja, co z tym TERAZ zrobię”).', isCorrect: true },
      { label: 'B', text: 'Odpowiedzialność dotyczy tylko kodeksu karnego, a wina życia prywatnego.', isCorrect: false },
      { label: 'C', text: 'Nie ma różnicy — wzięcie odpowiedzialności zawsze wymaga publicznego samoupokorzenia.', isCorrect: false },
      { label: 'D', text: 'Wina jest konstruktywna, ponieważ wywołuje wstyd niezbędny do jakiejkolwiek zmiany.', isCorrect: false }
    ],
    explanation: 'Możesz nie ponosić winy za sytuację, w której się znalazłeś (np. wypadek, choroba, zdrada partnera), ale zawsze ponosisz pełną odpowiedzialność za swoją reakcję na tę sytuację.',
    keyTakeaway: 'Wina pyta: „Kto zgrzeszył i zasługuje na karę?”. Odpowiedzialność pyta: „Jaki jest mój najlepszy kolejny krok?”.'
  },
  {
    id: 5,
    question: 'W jaki sposób pętla „Architekta Własnego Życia” integruje mechanizmy z całego Tomu III (od Rozdziału 23 do 30)?',
    topic: 'Pętla Architekta Własnego Życia — Wielka Synteza',
    sectionRef: 'Sekcja 31.19',
    options: [
      { label: 'A', text: 'Łączy hamowanie impulsu (23), świadomy wybór (24), wykonanie zachowania (25), inżynierię zmiany (26), automatyzację nawyków (27-28), ochronę przestrzeni granicami (29) i komunikację asertywną (30) w jeden ciągły cykl uczenia się i adaptacji.', isCorrect: true },
      { label: 'B', text: 'Udowadnia, że wcześniejsze rozdziały były niepotrzebne, bo wystarczy sama pozytywna afirmacja.', isCorrect: false },
      { label: 'C', text: 'Sprowadza całe życie człowieka do ścisłego przestrzegania jednego sztywnego harmonogramu bez prawa do odpoczynku.', isCorrect: false },
      { label: 'D', text: 'Zastępuje psychologię naukową ezoterycznymi teoriami prawa przyciągania.', isCorrect: false }
    ],
    explanation: 'Autonomia i sprawczość nie są pojedynczą cechą osobowości, lecz wyuczoną zdolnością całego systemu: od biologii hamowania, przez nawyki i granice, aż po sprzężenie zwrotne i korektę kursu.',
    keyTakeaway: 'Jesteś architektem swojego życia nie dlatego, że kontrolujesz cały świat, lecz dlatego, że świadomie projektujesz własne odpowiedzi na świat.'
  }
];

export const chapterThirtyOneCaseStudyMichal: CaseStudy = {
  id: 'cs-ch31-michal-scenariusz',
  title: 'Wielkie Studium Przypadku: Życie Według Cudzego Scenariusza — Michał i Odzyskanie Autonomii',
  subtitle: 'Osiem etapów dekonstrukcji zewnętrznych oczekiwań, kryzys tożsamościowy i budowa własnej sprawczości',
  protagonist: 'Michał, 24 lata, prawnik w prestiżowej kancelarii korporacyjnej',
  context: 'Michał od najmłodszych lat był „złotym dzieckiem” w rodzinie lekarzy i prawników. Każdy etap jego edukacji był precyzyjnie zaplanowany przez ambitnych rodziców. Michał nigdy nie sprawiał kłopotów wychowawczych, ukończył studia prawnicze z wyróżnieniem i zdobył pracę w czołowej korporacji. Na zewnątrz uchodził za uosobienie sukcesu. Wewnątrz odczuwał jednak narastającą pustkę, chroniczne zmęczenie, bezsenność i dojmujące poczucie, że jest tylko aktorem odgrywającym cudzą rolę w teatrze pozorów.',
  story: [
    'ETAP I — DZIECIŃSTWO: W domu Michała miłość i uwaga były warunkowane osiągnięciami. Za świadectwo z paskiem otrzymywał pochwały; za ocenę dobrą — chłodne milczenie i rozczarowanie ojca. Nauczył się, że jego własne pragnienia (rysowanie komiksów, majsterkowanie) są bezwartościowe w porównaniu z prestiżem.',
    'ETAP II — SZKOŁA I LICEUM: W klasie o profilu prawniczym Michał był prymusem, ale cierpiał na nawracające bóle brzucha przed każdym sprawdzianem. Wszelkie próby zasygnalizowania zainteresowania wzornictwem przemysłowym były ucinane przez rodziców: „Michałku, sztuką to ty się możesz zająć na emeryturze, teraz trzeba myśleć o poważnym zawodzie”.',
    'ETAP III — STUDIA PRAWNICZE: Wybór prawa był decyzją rodziców, którą Michał zracjonalizował jako własną („Wszyscy mówią, że mam analityczny umysł”). 5 lat spędził na wkuwaniu kodeksów, tłumiąc narastającą awersję za pomocą energetyków i nocnego grania na komputerze.',
    'ETAP IV — PRACA W KANCELARII: Praca po 14 godzin na dobę przy fuzjach spółek przyniosła wysokie zarobki, drogi garnitur i uznanie w oczach ojca. Jednak po 18 miesiącach Michał doznał epizodu ostrego lęku napadowego w toalecie biurowca.',
    'ETAP V — KRYZYS I PYTANIE GRANICZNE: Siedząc na podłodze w łazience z tętnem 140 bpm, Michał zadał sobie pytanie: „Dla kogo ja to robię? Czy ja w ogóle choć raz w życiu wybrałem cokolwiek samemu?”. Zrozumiał, że całe jego dotychczasowe życie było ucieczką przed odrzuceniem rodzicielskim.',
    'ETAP VI — AUDYT WARTOŚCI I GRANIC: Rozpoczął psychoterapię. Wypisał na kartce swoje rzekome cele i poddał je testowi 5 pytań. Okazało się, że 90% jego dążeń wynikało z lęku o status i aprobatę rodziny. Odkrył swoje uśpione wartości: tworzenie rzeczy materialnych, autonomię czasu i spokój psychiczny.',
    'ETAP VII — PRZEBUDOWA KROK PO KROKU: Zamiast rzucać pracę z dnia na dzień w histerycznym geście, Michał zastosował inżynierię mikrokroków. Zredukował nadgodziny (postawił granice szefowi za pomocą komunikatu JA), zapisał się na wieczorowy kurs projektowania UX/UI i zaczął budować finansową poduszkę bezpieczeństwa.',
    'ETAP VIII — KONSEKWENCJE I KOSZT AUTONOMII: Kiedy po 9 miesiącach Michał zakomunikował rodzicom, że odchodzi z korporacji i przechodzi na stanowisko Product Designera w software house, spotkał się z gwałtownym szantażem emocjonalnym ojca („Zrujnowałeś nasze nazwisko!”). Michał wytrzymał to napięcie bez agresji i bez uległości. Po raz pierwszy w życiu poczuł, że oddycha własnymi płucami.'
  ],
  dialogue: [
    { speaker: 'Ojciec (chłodny, autorytarny ton)', text: 'Zostawiasz renomowaną kancelarię, żeby klikać jakieś ikonki w komputerze?! Co ja powiem wujkowi profesorowi?! Myślałem, że jesteś dorosłym mężczyzną!', subtext: 'Szantaż statusem rodzinnym, manipulacja wstydem i próba przywrócenia kontroli nad synem.' },
    { speaker: 'Michał (wersja dawna — uległa)', text: 'Przepraszam tato... masz rację, znowu wymyślam głupoty... zostanę w kancelarii, nie denerwuj się...', subtext: 'Zdrada siebie, kapitulacja przed lękiem przed odrzuceniem i powrót do depresji.' },
    { speaker: 'Michał (wersja agresywna — niedojrzała)', text: 'Nienawidzę was! Zmarnowaliście mi 24 lata życia! Jesteście toksycznymi narcyzami i nigdy więcej was nie zobaczę!', subtext: 'Wybuch afektywny niszczący relację bez zbudowania dojrzałej sprawczości.' },
    { speaker: 'Michał (wersja autonomiczna i asertywna)', text: 'Rozumiem, że ten wybór cię zaskakuje i budzi twój niepokój o mój status. Szanuję twoje zdanie, jednak decyzja o zmianie branży jest przemyślana i ostateczna. Zależy mi na naszej relacji, ale moje życie zawodowe należy do mnie.', subtext: 'Dojrzała separacja tożsamościowa z poszanowaniem więzi i twardą obroną autonomii.' }
  ],
  decisionTaken: 'Przeprowadzenie całościowego audytu celów, odrzucenie roli spełniacza cudzych ambicji, postawienie asertywnych granic rodzinie i zaplanowanie bezpiecznego przebranżowienia.',
  whatProtagonistSaw: 'Perfekcyjną ścieżkę życiową, z której zejście oznaczało w jego mniemaniu całkowitą katastrofę moralną i utratę miłości.',
  whatWasMissed: 'Że miłość warunkowana sukcesem zawodowym jest w rzeczywistości formą kontroli; prawdziwa dorosłość zaczyna się w momencie, gdy jesteś gotów zaryzykować rozczarowanie rodziców w imię wierności samemu sobie.',
  psychologicalAnalysis: {
    coreMechanism: 'Introjekcja cudzych wartości (zinternalizowane oczekiwania otoczenia traktowane jako własne cele) i proces indywiduacji (Carl Jung).',
    cognitiveBiases: [
      { name: 'Pułapka Utopionych Kosztów (Sunk Cost Fallacy)', description: '„Poświęciłem 5 lat na prawo, więc muszę w tym tkwić do śmierci”.', impact: 'Paraliż przed zmianą branży.' },
      { name: 'Warunkowe Poczucie Wartości (Contingent Self-Esteem)', description: 'Uzależnienie szacunku do siebie wyłącznie od zewnętrznych wskaźników prestiżu i ocen innych.', impact: 'Chroniczny lęk przed porażką.' }
    ],
    defenseMechanisms: [
      { name: 'Racjonalizacja i Wyparcie', explanation: 'Wmawianie sobie przez lata, że prawo to jego pasja, aby uniknąć lęku przed odrzuceniem.' }
    ],
    emotionalDynamic: 'Przejście od stłumionego buntu i somatyzacji (lęki napadowe) do ulgi, odwagi i głębokiego poczucia wewnętrznej wolności.'
  },
  decisionProcessAnalysis: {
    trigger: 'Atak paniki w biurowcu kancelarii.',
    attentionFocus: 'Przeniesienie uwagi ze spełniania oczekiwań ojca na własne ciało i stan psychiczny.',
    interpretation: '„Moje ciało krzyczy, że to nie jest moje życie — muszę odzyskać stery”.',
    emotion: 'Początkowe przerażenie zastąpione przez determinację i zdrowy gniew mobilizujący.',
    impulse: 'Zacisnąć zęby, wziąć tabletkę uspokajającą i wrócić do pisania umowy.',
    action: 'Podjęcie terapii, audyt wartości, postawienie granic i zmiana ścieżki zawodowej.',
    consequence: 'Spadek poziomu kortyzolu, powrót zdrowego snu i satysfakcja z autentycznej pracy.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Przednia kora zakrętu obręczy (ACC) i Wyspa', role: 'Sygnalizacja ostrego dysonansu pomiędzy wartościami a działaniem (ból psychiczny i atak paniki)', activationState: 'Wyciszona po ujednoliceniu wartości' },
      { region: 'Grzbietowo-boczna i brzuszno-przyśrodkowa kora przedczołowa (vmPFC / dlPFC)', role: 'Integracja kompasu wartości z długoterminowym planowaniem strategicznym', activationState: 'Wysoka synchronizacja korowa' }
    ],
    neurotransmitters: [
      { name: 'Dopamina i Serotonina', roleInScenario: 'Odzyskanie stabilnego wydzielania dopaminy z autentycznej kreacji zamiast lękowego poszukiwania aprobaty.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Rozmowa z ojcem o zmianie pracy', process: 'Skok tętna -> świadoma pauza oddechowa -> spokojna fonacja bez krzyku.' },
      { timeMs: 'Pierwszy dzień w nowej pracy', process: 'Poczucie sprawczości i brak somatycznych objawów lękowych w przewodzie pokarmowym.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Transgeneracyjny szantaż prestiżem', description: 'Wpajanie dziecku, że jego obowiązkiem jest realizacja niespełnionych ambicji rodu.', vulnerabilityExploited: 'Dziecięca potrzeba bezwarunkowej miłości i akceptacji.' }
    ],
    counterMeasures: [
      { step: 'Protokół Dojrzałej Separacji', script: '„Szanuję twoje poglądy, ale to jest moje życie i moja odpowiedzialność za konsekwencje”.', rationale: 'Ustanawia nienaruszalną granicę tożsamościową Dorosły-Dorosły.' }
    ]
  },
  alternativePath: 'Scenariusz uległy: Michał zostaje partnerem w kancelarii, w wieku 35 lat przechodzi zawał serca lub ciężką depresję lekooporną. Scenariusz agresywny: zerwanie kontaktu z rodziną w nienawiści i poczuciu krzywdy. Scenariusz autonomiczny: spokojna zmiana branży, wzięcie odpowiedzialności za finanse i zbudowanie relacji z rodzicami na nowych, partnerskich zasadach.',
  readerQuestion: 'W jakich obszarach Twojego obecnego życia realizujesz cele, które w rzeczywistości zostały Ci wpojone przez rodziców, szkołę lub modę społeczną? Jak wyglądałby Twój pierwszy krok w stronę autentyczności?',
  keyTakeaway: 'Największą odwagą w życiu nie jest wygrywanie wyścigu szczurów, lecz uświadomienie sobie, że biegniesz w wyścigu, do którego nigdy nie chciałeś się zapisać — i spokojne zejście z toru.'
};

export const chapterThirtyOneCaseStudyNatalia: CaseStudy = {
  id: 'cs-ch31-natalia-wybor',
  title: 'Wielkie Studium Przypadku: Czy Naprawdę Mam Wybór? — Natalia i Sprawczość w Warunkach Ograniczeń',
  subtitle: 'Zastosowanie modelu Trzech Kręgów w sytuacji kryzysu zdrowotnego, opieki nad dzieckiem i ograniczeń finansowych',
  protagonist: 'Natalia, 31 lat, matka samotnie wychowująca 4-letniego syna z zaburzeniami ze spektrum autyzmu',
  context: 'Natalia czuła się całkowicie uwięziona przez los: po odejściu partnera została sama z kredytem hipotecznym, pracą zdalną na pół etatu i koniecznością codziennej, intensywnej terapii syna. Przez 2 lata żyła w poczuciu skrajnego paraliżu i chronicznej bezradności: „Nic ode mnie nie zależy, moje życie się skończyło, jestem ofiarą okoliczności”. Spędzała noce na płaczu i przeglądaniu forów internetowych, co pogłębiało jej depresyjny nastrój.',
  story: [
    'Natalia trafiła na warsztaty radzenia sobie ze stresem, gdzie zapoznała się z modelem Trzech Kręgów Wpływu i stoicką dychotomią kontroli.',
    'Prowadzący poprosił ją o wypisanie na dużej planszy wszystkich problemów, które spędzają jej sen z powiek, a następnie o zaklasyfikowanie ich do trzech stref: Strefa C (Brak kontroli), Strefa B (Wpływ częściowy) oraz Strefa A (Kontrola bezpośrednia).',
    'To ćwiczenie wywołało w Natalii wstrząs poznawczy. Zrozumiała, że 80% swojej energii marnowała na zamartwianie się Strefą C: faktem, że partner odszedł, faktem, że syn ma diagnozę spektrum, oraz stanem polskiej służby zdrowia.',
    'W Strefie A (Kontrola bezpośrednia) Natalia zidentyfikowała rzeczy, które dotąd całkowicie zaniedbywała: to, o której godzinie gasi światło, co je na śniadanie, jak mówi do syna w chwilach jego przebodźcowania, oraz ile minut dziennie poświęca na własny odpoczynek i spacer.',
    'Zamiast próbować „zmienić całe swoje życie”, Natalia stworzyła protokół mikrokroków sprawczości. Wprowadziła sztywną zasadę 15 minut spaceru bez telefonu każdego dnia o 13:00, zoptymalizowała plan zajęć terapeutycznych syna i złożyła wniosek o dofinansowanie z fundacji.',
    'Sytuacja obiektywna Natalii nadal była trudna — syn nie przestał być autystyczny, a kredyt nie zniknął. Jednak subiektywny stan psychiczny Natalii zmienił się diametralnie. Zamiast czuć się bezsilną ofiarą losu, stała się zorganizowanym, spokojnym i silnym kapitanem swojego statku.',
    'Rok później Natalia założyła lokalną grupę wsparcia dla matek dzieci z niepełnosprawnościami, przekształcając własne trudne doświadczenie w źródło siły i solidarności społecznej.'
  ],
  dialogue: [
    { speaker: 'Natalia (dawna narracja bezradności)', text: 'Dlaczego to spotkało właśnie mnie?! Los mnie nienawidzi, nikt mi nie pomaga, moje życie to koszmar i nic nie mogę zrobić...', subtext: 'Wyuczona bezradność, katastrofizowanie i ucieczka od odpowiedzialności w rolę ofiary.' },
    { speaker: 'Psycholog / Mentor', text: 'Natalio, nie masz wpływu na to, że partner odszedł. Ale masz 100% wpływu na to, czy dzisiaj pójdziesz spać o 22:00 i czy zjesz ciepły posiłek. Od czego zaczynamy?', subtext: 'Sprowadzenie uwagi z bezsilnej Strefy C do sprawczej Strefy A.' },
    { speaker: 'Natalia (nowa postawa sprawcza)', text: 'Moja sytuacja jest obiektywnie ciężka, ale nie jestem bezradna. Nie naprawię wszystkiego dzisiaj, ale przygotuję synowi plan dnia i zadbam o swoje 20 minut spokoju.', subtext: 'Dojrzały, realistyczny optymizm oparty na faktach i mikrodziałaniach.' }
  ],
  decisionTaken: 'Przestawienie wektora uwagi z niemożliwych do zmiany okoliczności zewnętrznych (Strefa C) na bezpośrednie codzienne wybory somatyczne i behawioralne (Strefa A).',
  whatProtagonistSaw: 'Sytuację jako absolutny mur bez wyjścia i całkowity brak jakiegokolwiek wyboru.',
  whatWasMissed: 'Że nawet w skrajnie trudnych warunkach zewnętrznych człowiek zachowuje nienaruszalną wolność wyboru własnej postawy psychicznej, rytmu dnia i reakcji na trudności (Wiktor Frankl).',
  psychologicalAnalysis: {
    coreMechanism: 'Przełamanie wyuczonej bezradności (Martin Seligman) poprzez zakotwiczenie uwagi w Strefie Kontroli Bezpośredniej.',
    cognitiveBiases: [
      { name: 'Tunelowe Myślenie Katastroficzne', description: 'Skupianie się wyłącznie na braku zasobów i ignorowanie mikro-obszarów wpływu.', impact: 'Chroniczna rezygnacja i anhedonia.' },
      { name: 'Nadmierna Generalizacja (Overgeneralization)', description: '„Skoro opuścił mnie partner, to znaczy, że całe moje życie jest zniszczone”.', impact: 'Poczucie totalnej klęski.' }
    ],
    defenseMechanisms: [
      { name: 'Bierna rezygnacja', explanation: 'Ochrona przed kolejnym rozczarowaniem poprzez zaniechanie jakichkolwiek prób poprawy losu.' }
    ],
    emotionalDynamic: 'Przejście od rozpaczy i wypalenia do godności, stabilności emocjonalnej i poczucia głębokiego sensu życiowego.'
  },
  decisionProcessAnalysis: {
    trigger: 'Uświadomienie sobie wyczerpania podczas warsztatów.',
    attentionFocus: 'Przepisanie problemów na planszę Trzech Kręgów Wpływu.',
    interpretation: '„Nie kontroluję wszystkiego, ale kontroluję swoje dzisiejsze 30 minut i swoje nawyki”.',
    emotion: 'Uspokojenie rozbieganego układu nerwowego, narodziny cichej nadziei.',
    impulse: 'Uciec w płacz i bezsenne przeglądanie internetu.',
    action: 'Wprowadzenie spaceru, higieny snu, złożenie wniosku o grant i założenie grupy wsparcia.',
    consequence: 'Odzyskanie energii witalnej, poprawa relacji z synem i redukcja objawów depresyjnych.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Oś Podwzgórze-Przysadka-Nadnercza (HPA)', role: 'Wygaszenie chronicznej hiperkortyzolemii dzięki przewidywalnej rutynie dnia', activationState: 'Normalizacja rytmu dobowego' },
      { region: 'Grzbietowo-przyśrodkowa kora przedczołowa (dmPFC)', role: 'Odzyskanie poczucia sprawczości i kontroli poznawczej nad emocjami', activationState: 'Wzrost aktywności regulacyjnej' }
    ],
    neurotransmitters: [
      { name: 'Kwas gamma-aminomasłowy (GABA)', roleInScenario: 'Wzrost poziomu po wdrożeniu spacerów i wyciszenia wieczornego.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Wyrysowanie Trzech Kręgów Wpływu', process: 'Gwałtowny spadek napięcia mięśniowego w obręczy barkowej.' },
      { timeMs: '30 dni regularnych spacerów', process: 'Odbudowa wrażliwości receptorów serotoninowych i głęboki sen NREM.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Kulturowy mit samowystarczalności', description: 'Przekonanie, że proszenie o pomoc z zewnątrz jest dowodem porażki życiowej.', vulnerabilityExploited: 'Duma i wstyd przed oceną sąsiadów.' }
    ],
    counterMeasures: [
      { step: 'Asertywne sięganie po zasoby wspólnotowe', script: '„Jestem samotną matką, mam prawo ubiegać się o dofinansowanie i prosić wolontariuszy o 2 godziny wsparcia w tygodniu”.', rationale: 'Przekształca izolację w sieć wsparcia społecznego.' }
    ]
  },
  keyTakeaway: 'Sprawczość nie zależy od tego, jak korzystne karty rozdał Ci los. Sprawczość polega na tym, z jaką godnością, mądrością i precyzją rozgrywasz karty, które trzymasz w dłoni.'
};

export const chapterThirtyOneExerciseCzyToMojaDecyzja: SelfExercise = {
  id: 'ex-ch31-czy-to-moja-decyzja',
  title: 'Warsztat Refleksyjny: Czy To Naprawdę Moja Decyzja?',
  subtitle: 'Wielostopniowy audyt źródeł motywacji, introjekcji i autonomii w bieżących wyborach',
  objective: 'Zidentyfikowanie ukrytych nacisków społecznych, oczekiwań rodzicielskich i zinternalizowanych skryptów kulturowych w Twoich kluczowych planach życiowych.',
  durationMinutes: 25,
  neuroScientificFoundation: 'Oddzielenie przetwarzania w korze przedczołowej (autentyczne preferencje) od aktywności ciała migdałowatego napędzanego lękiem przed dezaprobatą grupy (Social Threat Circuit).',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniowanie Decyzji lub Celu',
      instruction: 'Wybierz jedną ważną decyzję, którą aktualnie podejmujesz lub cel, który intensywnie realizujesz (np. zakup mieszkania, zmiana pracy, wejście w związek, odchudzanie, rozpoczęcie studiów).',
      promptText: 'Opisz ten cel/decyzję precyzyjnie w jednym zdaniu:',
      placeholder: 'Np. Chcę kupić mieszkanie na kredyt na nowo wybudowanym osiedlu w ciągu najbliższych 6 miesięcy...'
    },
    {
      stepNumber: 2,
      title: 'Test Pięciu Pytań o Autonomię',
      instruction: 'Odpowiedz szczerze na 5 pytań testowych: 1. Czy chciałbym tego, gdyby nikt na świecie się o tym nie dowiedział? 2. Czy chciałbym tego bez żadnej nagrody statusowej? 3. Z jaką moją nadrzędną wartością to współgra? 4. Jaki jest realny koszt i czy chcę go ponieść? 5. Czyj głos słyszę w głowie, gdy o tym myślę?',
      promptText: 'Wpisz swoje wnioski z odpowiedzi na powyższe 5 pytań:',
      placeholder: 'Np. Odkryłem, że zakup mieszkania to głównie chęć zaimponowania znajomym i uspokojenia teściów. Mnie osobiście bardziej zależy na elastyczności wynajmu...'
    },
    {
      stepNumber: 3,
      title: 'Klasyfikacja Źródła Wyboru',
      instruction: 'Oceń, czy ten wybór jest: (A) W pełni autonomiczny (zgodny z wartościami), (B) Zintrojektowany (robiony z poczucia winy i wstydu), (C) Narzucony zewnętrznie.',
      promptText: 'Wskaż kategorię i opisz, jak zmodyfikujesz ten cel, by stał się Twój:',
      placeholder: 'Wybór był w 70% zintrojektowany. Modyfikuję go w następujący sposób...'
    }
  ],
  reflectionQuestions: [
    'Ile decyzji w ciągu ostatniego roku podjąłeś wyłącznie po to, aby uniknąć czyjegoś rozczarowania?',
    'Co czujesz w ciele (napięcie w klatce piersiowej vs lekkość i spokój), gdy myślisz o realizacji tego celu?'
  ]
};

export const chapterThirtyOneExerciseTrzyKregiWplywu: SelfExercise = {
  id: 'ex-ch31-trzy-kregi-wplywu',
  title: 'Warsztat Praktyczny: Trzy Kręgi Wpływu i Mapa Sprawczości',
  subtitle: 'Kategoryzacja problemów życiowych na strefy kontroli, wpływu i braku kontroli oraz alokacja zasobów',
  objective: 'Zatrzymanie marnowania energii na strefę braku kontroli i natychmiastowe zaprojektowanie mikrodziałań w strefie bezpośredniej sprawczości.',
  durationMinutes: 30,
  neuroScientificFoundation: 'Redukcja pobudzenia osi stresu HPA poprzez wzmocnienie kontroli poznawczej w grzbietowo-bocznej korze przedczołowej (dlPFC).',
  steps: [
    {
      stepNumber: 1,
      title: 'Zrzut Problemów i Stresorów',
      instruction: 'Wypisz 5-8 sytuacji, które aktualnie wywołują w Tobie największe napięcie, frustrację lub poczucie bezsilności.',
      promptText: 'Lista Twoich bieżących stresorów:',
      placeholder: '1. Zachowanie szefa na zebraniach. 2. Moja waga i brak kondycji. 3. Wzrost cen i inflacja. 4. Konflikt z partnerem o podział obowiązków...'
    },
    {
      stepNumber: 2,
      title: 'Kategoryzacja do 3 Kręgów',
      instruction: 'Przyporządkuj każdy stresor do odpowiedniej strefy: STREFA A (Kontroluję w 100% — moje zachowanie, słowa, czas pójścia spać), STREFA B (Mam częściowy wpływ — negocjacje, prośby, jakość przygotowania), STREFA C (Nie kontroluję — pogoda, decyzje innych ludzi, przeszłość).',
      promptText: 'Rozkład problemów w 3 strefach:',
      placeholder: 'Strefa C (brak kontroli): Inflacja, humor szefa. Strefa B (wpływ): Rozmowa z partnerem. Strefa A (pełna kontrola): Moja dieta, mój trening, moje słowa na zebraniu...'
    },
    {
      stepNumber: 3,
      title: 'Projekt Mikrokroku dla Strefy A',
      instruction: 'Wybierz jeden problem ze Strefy C i napisz deklarację radykalnej akceptacji („Uznaję, że nie mam na to wpływu”). Następnie wybierz jeden problem ze Strefy A i zaprojektuj 1 mikrokrok na dzisiaj.',
      promptText: 'Deklaracja akceptacji oraz Twój dzisiejszy mikrokrok:',
      placeholder: 'Akceptuję, że nie zmienię charakteru szefa. Mój mikrokrok na dziś: przygotuję 3 zwięzłe punkty na zebranie i nie dam się wciągnąć w pyskówkę.'
    }
  ],
  reflectionQuestions: [
    'Jaki procent Twojej codziennej uwagi pochłaniają sprawy ze Strefy C?',
    'Jak zmieniłoby się Twoje samopoczucie, gdybyś przez kolejne 7 dni nie poświęcił ani minuty na narzekanie na Strefę C?'
  ]
};

export const chapterThirtyOne: Chapter = {
  number: 31,
  volume: 3,
  volumeChapterNumber: 15,
  title: 'Autonomia i Sprawczość: Jak Stać się Architektem Własnego Życia',
  subtitle: 'Wielka synteza Tomu III — integracja samoregulacji, decyzji, zachowań, nawyków, granic i asertywności w dojrzały model kierowania własnym losem',
  leadParagraph: 'Dotarłeś do zwieńczenia całej podróży przez architekturę ludzkiego umysłu i zachowania. Skoro wiesz już, jak rodzą się impulsy (Rozdział 23), jak podejmować decyzje w warunkach niepewności (Rozdział 24 i 28), jak przekraczać lukę intencja-działanie (Rozdział 25), jak projektować trwałą zmianę i nawyki (Rozdziały 26–27), jak chronić swoją przestrzeń granicami (Rozdział 29) oraz jak asertywnie komunikować swoje stanowisko (Rozdział 30) — nadszedł czas, by złożyć te klocki w jeden, zintegrowany system. Niniejszy rozdział nie oferuje magicznych obietnic wszechmocy. Pokazuje natomiast dojrzałą, realistyczną i wolną od złudzeń sztukę bycia autentycznym Architektem Własnego Życia.',
  totalEstimatedPages: 110,
  sections: [
    // CZĘŚĆ I — CZYM JEST AUTONOMIA? (31.1 - 31.3)
    {
      id: 'sec-31-1',
      pageNumber: 1285,
      sectionNumber: '31.1',
      title: 'Autonomia nie oznacza robienia wszystkiego samemu: Wolność wyboru a mit samowystarczalności',
      category: 'teoria',
      readingTimeMinutes: 22,
      quote: {
        text: 'Autonomia nie jest synonimem niezależności czy samowystarczalności. Być autonomicznym to działać w sposób w pełni dobrowolny, z poczuciem autentycznej aprobaty dla własnych działań. Człowiek może być całkowicie autonomiczny, prosząc o pomoc, polegając na innych, a nawet stosując się do nakazów — o ile sam szczerze uznaje ich wartość i sens.',
        author: 'Prof. Edward L. Deci & Prof. Richard M. Ryan',
        source: 'University of Rochester / Australian Catholic University, „Self-Determination Theory: Basic Psychological Needs in Motivation, Development, and Wellness”, Guilford Press, 2017'
      },
      paragraphs: [
        'W potocznym rozumieniu pojęcie autonomii bywa często mylone z absolutną samowystarczalnością, samotnictwem lub buntowniczym odrzuceniem jakichkolwiek zasad społecznych. Człowiek deklarujący: „Jestem w 100% autonomiczny, nie potrzebuję nikogo i nikt nie będzie mi mówił, co mam robić”, rzadko bywa rzeczywiście wolny. Najczęściej jest to jednostka uwięziona w reaktywnym buncie, kierowana lękiem przed bliskością i zależnością.',
        'W psychologii naukowej — a w szczególności w Teorii Autodeterminacji (Self-Determination Theory, Edward Deci i Richard Ryan) — autonomia (z greckiego: autos — sam, nomos — prawo) oznacza zdolność do stanowienia o sobie i podejmowania działań z poczuciem pełnej wewnętrznej zgody, spójności i autorstwa. Człowiek autonomiczny nie musi robić wszystkiego samemu. Może poprosić o pomoc, może współpracować w zespole, może zasięgnąć porady mentora, a nawet podporządkować się regułom organizacji — pod warunkiem, że robi to na mocy własnego, świadomego wyboru opartego na uznaniu sensu tych reguł.',
        'Kluczowe rozróżnienie przebiega pomiędzy wyborem a ślepym impulsem: uleganie impulsom biologicznym lub presji otoczenia jest stanem heteronomii (bycia sterowanym z zewnątrz), podczas gdy umiejętność zatrzymania impulsu, zważenia wartości i podjęcia świadomego kroku jest istotą dojrzałej autonomii.'
      ],
      subsections: [
        {
          id: 'sub-31-1-1',
          title: 'Analiza słów prof. Edwarda Deci i prof. Richarda Ryana: Trzy Fundamentalne Potrzeby SDT',
          content: [
            'Wnikliwa analiza Teorii Autodeterminacji dowodzi, że człowiek rozkwita tylko wtedy, gdy zaspokojone są trzy wrodzone potrzeby psychologiczne: Autonomii (poczucia autorstwa), Kompetencji (poczucia skuteczności) oraz Relacyjności (poczucia przynależności i więzi).',
            'Deci i Ryan zwracają uwagę na tragiczny błąd zachodniej kultury indywidualizmu, która przeciwstawia autonomię relacyjności. Prawdziwa autonomia nie niszczy więzi społecznych — ona je uszlachetnia. Kiedy pomagasz bliskiemu z przymusu lub lęku przed odrzuceniem, twoje działanie jest heteronomiczne i rodzi ukrytą urazę. Kiedy pomagasz z autonomicznego wyboru i miłości, budujesz najtrwalszą tkankę bliskości.'
          ]
        },
        {
          id: 'sub-31-1-2',
          title: 'Dwa oblicza proszenia o pomoc: Zależność lękowa vs Sprawcza współpraca',
          content: [
            'Osoba A (Brak autonomii — zależność lękowa): Kamil staje przed trudnym wyborem zawodowym. Dzwoni po kolei do matki, przyjaciela i szefa, pytając każdego: „Powiedz mi, co mam zrobić?”. Nie szuka informacji, lecz chce zrzucić odpowiedzialność za wybór na innych. Jeśli decyzja okaże się błędna, oskarży doradców o złą radę.',
            'Osoba B (Wysoka autonomia — sprawcza współpraca): Marek staje przed tym samym wyborem. Umawia się na rozmowę z doświadczonym doradcą kariery i mówi: „Przeanalizowałem rynek i mam dwie opcje zgodne z moimi wartościami. Chcę poznać Twoją opinię o ryzykach prawnych wariantu B, aby podjąć najlepszą decyzję”. Marek zbiera fakty, ale ostateczną decyzję podejmuje sam i bierze za nią 100% odpowiedzialności.',
            'Wniosek psychologiczny: Proszenie o pomoc nie umniejsza Twojej autonomii — to cel i intencja, z jaką sięgasz po wsparcie, decydują o tym, czy jesteś kapitanem, czy pasażerem swojego życia.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-31-1-1',
          type: 'insight',
          title: 'Kontinuum Motywacji: Od Amotywacji do Integracji',
          content: 'Model SDT opisuje kontinuum internalizacji: 1. Regulacja Zewnętrzna (kije i marchewki), 2. Introjekcja (poczucie winy i wstyd), 3. Identyfikacja (uznanie ważności celu), 4. Integracja (pełna zgodność z tożsamością). Prawdziwa autonomia zaczyna się od poziomu identyfikacji, gdzie robisz trudne rzeczy, bo wiesz, kim jesteś.'
        }
      ],
      interactiveWindow: {
        id: 'win-31-1',
        title: 'Audyt Motywacji: Autonomia czy Introjekcja w Twoich Wyborach?',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Łukasz (32 lata) przygotowuje się do triathlonu IronMan. Trenuje po 18 godzin w tygodniu, odczuwając chroniczne zmęczenie i bóle stawów. Na pytanie żony, dlaczego to robi, odpowiada: „Bo jak nie zrobię IronMana, to będę czuł się jak kompletne zero”.',
        steps: [
          {
            stepNumber: 1,
            title: 'Analiza źródła napędu Łukasza wg Teorii SDT',
            description: 'Jaki rodzaj motywacji napędza morderczy reżim Łukasza?',
            options: [
              {
                text: 'Klasyczna motywacja introjektowana (Introjected Regulation): Łukasz nie trenuje z autonomicznej radości ruchu, lecz ucieka przed wstydem i nienawiścią do samego siebie',
                feedback: 'Precyzyjna diagnoza psychologiczna: brak autonomii. Łukasz jest niewolnikiem surowego wewnętrznego krytyka.',
                isOptimal: true
              },
              {
                text: 'Najwyższy poziom autonomii i dojrzałej samodyscypliny sportowej',
                feedback: 'Błąd poznawczy: motywacja oparta na unikaniu poczucia bycia „zerem” nie jest autonomią, lecz psychologicznym batem.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Które z Twoich obecnych ambitnych celów są podyktowane introjekcją („muszę, bo inaczej będę nikim”), a które autentyczną autonomią?'
      },
      exerciseRef: chapterThirtyOneExerciseCzyToMojaDecyzja
    },
    {
      id: 'sec-31-2',
      pageNumber: 1292,
      sectionNumber: '31.2',
      title: 'Sprawczość (Agency) — poczucie wpływu na własne życie i relacja działanie-feedback',
      category: 'teoria',
      readingTimeMinutes: 22,
      quote: {
        text: 'Poczucie własnej skuteczności (self-efficacy) to nie pusta wiara we własne siły ani deklaratywny optymizm. To przekonanie wyrasta z twardych doświadczeń mistrzostwa (mastery experiences): mózg musi zarejestrować realny ciąg przyczynowo-skutkowy między włożonym wysiłkiem a pokonaniem konkretnej, mierzalnej przeszkody.',
        author: 'Prof. Albert Bandura',
        source: 'Stanford University, „Self-Efficacy: The Exercise of Control”, W.H. Freeman, 1997'
      },
      paragraphs: [
        'Poczucie sprawczości (Sense of Agency) to fundamentalne doświadczenie psychiczne polegające na przeświadczeniu: „To ja jestem autorem tego ruchu, to moje działanie wywołało tę zmianę w świecie fizycznym lub społecznym”. Bez poczucia sprawczości ludzki umysł osuwa się w stan apatii, anhedonii i depresyjnej bierności.',
        'Sprawczość nie jest wrodzonym darem ani niezmienną cechą charakteru — jest dynamicznym stanem neurobiologicznym, który buduje się na styku DZIAŁANIA i INFORMACJI ZWROTNEJ (Feedback Loop). Albert Bandura w swojej teorii Społeczno-Poznawczej wykazał, że poczucie własnej skuteczności (Self-Efficacy) rozwija się przede wszystkim poprzez Doświadczenia Mistrzostwa (Mastery Experiences) — czyli małe, policzalne dowody na to, że podjęty wysiłek przyniósł przewidywalny rezultat.',
        'Sekret budowania trwałej sprawczości łączy się bezpośrednio z wiedzą z Rozdziału 23 (samoregulacja), 25 (wykonanie zachowania) i 26 (mikrokroki). Nie budujesz sprawczości przez powtarzanie przed lustrem: „Jestem zwycięzcą”. Budujesz ją wtedy, gdy w stanie zmęczenia odkładasz telefon na 45 minut, siadasz do biurka i zapisujesz 2 strony tekstu. Twój mózg rejestruje fakt: „Powiedziałem, że to zrobię, i zrobiłem to”. Każdy taki mikrodowód wzmacnia obwody sprawcze w korze przedczołowej.'
      ],
      subsections: [
        {
          id: 'sub-31-2-1',
          title: 'Analiza słów prof. Alberta Bandury: Cztery Źródła Poczucia Skuteczności',
          content: [
            'Prof. Bandura zdefiniował cztery kanały, którymi mózg aktualizuje poczucie sprawczości: 1. Doświadczenia mistrzostwa (najpotężniejsze — osobiste sukcesy po wysiłku), 2. Doświadczenia zastępcze (obserwacja ludzi podobnych do nas pokonujących trudności), 3. Perswazja społeczna (wiarygodny feedback od mentora), 4. Pobudzenie somatyczne (interpretacja przyspieszonego pulsu jako mobilizacji, a nie paniki).',
            'Bandura dowodzi, że najtrwalszą odporność psychiczną (resilience) buduje nie seria łatwych zwycięstw, lecz pokonywanie trudności wymagające podtrzymania wysiłku mimo początkowych porażek. W ten sposób jednostka uczy się, że błąd nie jest dowodem braku kompetencji, lecz naturalnym elementem pętli zwrotnej.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-31-2-1',
          type: 'badanie',
          title: 'Neurobiologia Sprawczości: Sygnał Błędu Predykcji Motorycznej',
          content: 'Kiedy wykonujesz zamierzony ruch fizyczny, kora motoryczna wysyła tzw. kopię eferentną (efference copy) do móżdżku i kory ciemieniowej, która wygasza odczucie bodźca (dlatego nie potrafisz sam siebie połaskotać!). Poczucie autorstwa czynu jest biologicznym zjawiskiem komparatora neuronalnego: mózg wie, że to Ty zmieniłeś świat.'
        }
      ],
      interactiveWindow: {
        id: 'win-31-2',
        title: 'Odbudowa Poczucia Skuteczności po Porażce: Protokół Bandury',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Beata (36 lat) po nieudanym projekcie biznesowym straciła wiarę w swoje kompetencje. Od pół roku nie podejmuje żadnych działań, czując paraliżujący lęk przed kolejną porażką.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór pierwszego kroku odbudowy sprawczości wg Bandury',
            description: 'Jak Beata powinna zacząć odbudowywać poczucie własnej skuteczności?',
            options: [
              {
                text: 'Zaprojektować mikrozadanie o 95% prawdopodobieństwie sukcesu (np. napisanie jednej oferty doradczej w 60 minut) w celu wygenerowania natychmiastowego doświadczenia mistrzostwa',
                feedback: 'Doskonałe zastosowanie teorii Bandury: mózg Beaty potrzebuje twardego faktu dopięcia zadania, aby przerwać pętlę wyuczonej bezradności.',
                isOptimal: true
              },
              {
                text: 'Czekać, aż wróci jej motywacja i pewność siebie, czytając biografie miliarderów',
                feedback: 'Bierność pogłębiająca poczucie obcości i beznadziei — motywacja podąża za działaniem, nigdy przed nim.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Jaki mały, mierzalny mikrosukces możesz odnieść dzisiaj, aby dostarczyć swojemu mózgowi dowodu na własną sprawczość?'
      }
    },
    {
      id: 'sec-31-3',
      pageNumber: 1298,
      sectionNumber: '31.3',
      title: 'Locus of Control — co naprawdę kontroluję? Model Trzech Kręgów Wpływu',
      category: 'cwiczenia',
      readingTimeMinutes: 22,
      quote: {
        text: 'Główna różnica między ludźmi tkwi w ich poczuciu umiejscowienia kontroli (locus of control). Jednostki z wewnętrznym poczuciem kontroli wierzą, że ich własne zachowania determinują nagrody i kary, jakie otrzymują od życia. Jednostki z zewnętrznym umiejscowieniem kontroli postrzegają swój los jako wypadkową przypadku, szczęścia, przeznaczenia lub decyzji potężnych sił zewnętrznych.',
        author: 'Prof. Julian B. Rotter',
        source: 'University of Connecticut, „Generalized Expectancies for Internal Versus External Control of Reinforcement”, Psychological Monographs, 1966'
      },
      paragraphs: [
        'W 1954 roku Julian Rotter wprowadził pojęcie Poczucia Umiejscowienia Kontroli (Locus of Control). Przez dekady w literaturze popularnonaukowej panowało uproszczone przekonanie, że Wewnętrzne Poczucie Kontroli jest zawsze dobre, a Zewnętrzne — zawsze złe. Współczesna psychologia poznawcza rewiduje ten dogmat: skrajnie wewnętrzne poczucie kontroli prowadzi do toksycznego poczucia omnipotencji i obwiniania siebie za kataklizmy, choroby i decyzje innych ludzi.',
        'Dojrzała architektura życia wymaga wprowadzenia zrównoważonego modelu TRZECH KRĘGÓW WPŁYWU (inspirowanego stoicyzmem Epikteta i Marka Aureliusza oraz pracami Stephena Coveya):',
        '1. STREFA A — KONTROLA BEZPOŚREDNIA (100% kontroli): Obejmuje wyłącznie Twoje własne zachowania motoryczne, Twoje słowa, Twoją uwagę, Twoje decyzje o pójściu spać, Twoje nawyki i Twoją interpretację faktów. Tu inwestujesz lwią część energii.',
        '2. STREFA B — WPŁYW CZĘŚCIOWY (0–99% wpływu): Obejmuje wyniki negocjacji, relacje z bliskimi, oceny w szkole, postępy zespołu w pracy. Masz na to wpływ poprzez jakość swoich komunikatów (Rozdział 30) i granic (Rozdział 29), ale nie kontrolujesz ostatecznego rezultatu.',
        '3. STREFA C — BRAK KONTROLI (0% kontroli): Obejmuje pogodę, inflację, genetykę, przeszłość, zdarzenia losowe oraz to, co myślą i czują inni ludzie. Jedyną dojrzałą reakcją na tę strefę jest RADYKALNA AKCEPTACJA i natychmiastowe przekierowanie uwagi z powrotem do Strefy A.'
      ],
      subsections: [
        {
          id: 'sub-31-3-1',
          title: 'Analiza słów prof. Juliana Rottera: Pułapki Skrajnego Umiejscowienia Kontroli',
          content: [
            'Wnikliwa dekonstrukcja badań Rottera pokazuje, że optymalny psychologicznie profil to zniuansowany realizm: wewnętrzne umiejscowienie kontroli nad własnym wysiłkiem i postawą, połączone z pokornym uznaniem obiektywnych barier środowiskowych.',
            'Osoba ze skrajnym zewnętrznym Locus of Control cierpi na wyuczoną bezradność (Seligman) — nie podejmuje prób, bo „i tak układ rządzi”. Z kolei osoba ze skrajnym wewnętrznym Locus of Control wpada w nerwicę natręctw i depresję wyczerpania, usiłując kontrolować cudze humory, sytuację makroekonomiczną i przypadkowe zrządzenia losu.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-31-3-1',
          type: 'insight',
          title: 'Dychotomia Kontroli Epikteta: Starożytny Korzeń Współczesnej Terapii',
          content: 'Epiktet z Hierapolis pisał w Enchiridionie: „Jedne rzeczy są od nas zależne, inne zaś niezależne. Od nas zależą: sądzenie, popęd, pragnienie, wstręt — jednym słowem wszystkie nasze czyny. Nie zależą od nas: ciało, mienie, opinie innych, stanowiska — jednym słowem to, co nie jest naszym czynem”. Kto myli te dwie sfery, skazuje się na wieczną udrękę.'
        }
      ],
      interactiveWindow: {
        id: 'win-31-3',
        title: 'Sortowanie Dylematów: Do Którego Kręgu Wpływu Należy Twój Stres?',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Marek (41 lat) nie śpi po nocach, zamartwiając się potencjalną recesją w branży IT, możliwością zwolnień grupowych oraz tym, czy jego prezes dobrze oceni projekt jego działu.',
        steps: [
          {
            stepNumber: 1,
            title: 'Kategoryzacja źródeł lęku Marka',
            description: 'Gdzie leży globalna recesja i decyzje prezesa w modelu Trzech Kręgów?',
            options: [
              {
                text: 'Recesja leży w Strefie C (brak kontroli), a ocena prezesa w Strefie B (wpływ częściowy). Marek marnuje 90% energii na Strefę C zamiast skupić się na Strefie A',
                feedback: 'Podręcznikowa dekompozycja poznawcza: Marek musi przekierować energię do Strefy A (aktualizacja portfolio, budowanie poduszki finansowej na 12 miesięcy, wysoka jakość kodu dzisiaj).',
                isOptimal: true
              },
              {
                text: 'Wszystkie te czynniki leżą w Strefie A, bo Marek jest menedżerem i musi kontrolować rynek',
                feedback: 'Iluzja omnipotencji prowadząca prosto do zawału serca i wypalenia.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Jaki problem spędza Ci sen z powiek i do którego z trzech kręgów (A, B czy C) obiektywnie należy?'
      },
      exerciseRef: chapterThirtyOneExerciseTrzyKregiWplywu
    },
    // CZĘŚĆ II — AUTONOMIA A WPŁYW INNYCH LUDZI (31.4 - 31.6)
    {
      id: 'sec-31-4',
      pageNumber: 1306,
      sectionNumber: '31.4',
      title: 'Jak inni ludzie wpływają na nasze decyzje? Konformizm, autorytet i różnica między wpływem a manipulacją',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Człowiek jest istotą ultraspołeczną. Przez setki tysięcy lat ewolucji przetrwanie osobnika zależało od akceptacji grupy łowiecko-zbierackiej. W Tomie II zbadaliśmy potężne mechanizmy socjopsychologiczne: konformizm normatywny i informacyjny (Asch), uległość wobec autorytetu (Milgram), reguły wywierania wpływu (Cialdini) oraz techniki perswazyjne (Rozdziały 15–18).',
        'W kontekście autonomii kluczowe jest uświadomienie sobie, że WPŁYW SPOŁECZNY jest zjawiskiem neutralnym i nieuniknionym. Wpływają na nas książki, które czytamy, przyjaciele, z którymi rozmawiamy, i kultura, w której żyjemy. Wpływ staje się MANIPULACJĄ lub TOKSYCZNYM NACISKIEM dopiero wtedy, gdy druga strona celowo zniekształca fakty, stosuje szantaż emocjonalny (FOG: Fear, Obligation, Guilt) lub odbiera nam prawo do odmowy i weryfikacji danych.',
        'Człowiek autonomiczny nie ucieka w pustelnię — potrafi natomiast włączyć krytyczną pauzę poznawczą i zadać sobie pytanie: „Czy to przekonanie, które właśnie usłyszałem, służy mojemu wzrostowi i jest oparte na prawdzie, czy jest próbą sformatowania mnie pod cudze interesy?”.'
      ]
    },
    {
      id: 'sec-31-5',
      pageNumber: 1312,
      sectionNumber: '31.5',
      title: 'Kiedy cudze oczekiwania stają się naszymi celami? Introjekcja i pułapka statusu',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Jednym z najbardziej podstępnych zjawisk w rozwoju człowieka jest INTROJEKCJA — proces bezrefleksyjnego wchłaniania cudzych wartości, oczekiwań rodzicielskich i norm społecznych, a następnie traktowania ich jako własnych, autentycznych pragnień.',
        'Dziecko uczy się, co musi robić, aby zasłużyć na miłość i aprobatę: „Bądź grzeczny”, „Przynoś same szóstki”, „Wybierz stabilny zawód”, „Nie wyróżniaj się”. Jeśli te nakazy nie zostaną poddane krytycznemu audytowi w okresie wczesnej dorosłości, człowiek może spędzić 20 lat na budowaniu kariery, domu i wizerunku, tylko po to, by w wieku 40 lat obudzić się z poczuciem całkowitej obcości we własnym życiu.',
        'Poniższe studium przypadku ukazuje pełną anatomię życia według cudzego scenariusza oraz wieloetapowy proces odzyskiwania autorstwa nad własnym losem.'
      ],
      caseStudyRef: chapterThirtyOneCaseStudyMichal
    },
    {
      id: 'sec-31-6',
      pageNumber: 1320,
      sectionNumber: '31.6',
      title: 'Autonomia a potrzeba akceptacji: Zdrowy kompromis vs destrukcyjna rezygnacja z siebie',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Jednym z najczęstszych dylematów człowieka budującego sprawczość jest lęk: „Jeśli zacznę stawiać granice i żyć w zgodzie ze sobą, zostanę zupełnie sam”. Zjawisko People Pleasingu (Rozdział 29 i 30) wyrasta z przekonania, że jedynym sposobem na zachowanie więzi jest całkowita kapitulacja z własnych potrzeb.',
        'Musimy precyzyjnie rozróżnić dwa fundamentalne mechanizmy relacyjne:',
        '1. ZDROWY KOMPROMIS: Obie strony mają jasno określone granice i potrzeby. Z miłości, życzliwości lub pragmatyzmu jedna ze stron świadomie decyduje się ustąpić w określonej kwestii (np. „Wiem, że zależy ci na tym filmie, chętnie pójdę z tobą do kina, choć wolałem teatr”). Jest to akt hojności podjęty z pozycji siły i wyboru.',
        '2. DESTRUKCYJNA REZYGNACJA Z SIEBIE: Ustępujesz ze strachu przed awanturą, karzącym milczeniem lub odrzuceniem. Wewnątrz czujesz złość, upokorzenie i bezsilność, a na zewnątrz potakujesz z uśmiechem. To prosta droga do utraty tożsamości i wybuchu biernej agresji.',
        'Autonomia w relacjach nie niszczy miłości — wręcz przeciwnie: tylko dwoje autonomicznych ludzi może stworzyć autentyczną, dojrzałą i wolną od manipulacji bliskość.'
      ]
    },

    // CZĘŚĆ III — WARTOŚCI, CELE I KIERUNEK (31.7 - 31.9)
    {
      id: 'sec-31-7',
      pageNumber: 1326,
      sectionNumber: '31.7',
      title: 'Wartości a cele — dwie różne rzeczy: Dlaczego potrzebujesz kompasu, a nie tylko punktów na mapie',
      category: 'teoria',
      readingTimeMinutes: 22,
      quote: {
        text: 'Wartości nie są celami, które można osiągnąć i odhaczyć. Wartości to wybrane jakości bycia i działania w świecie — jak kierunek na kompasie. Nigdy nie „osiągniesz” kierunku zachodniego; możesz jedynie podróżować na zachód. Cele to konkretne przystanki po drodze, które wybierasz dlatego, że leżą na kursie wyznaczonym przez Twoje wartości.',
        author: 'Prof. Steven C. Hayes',
        source: 'University of Nevada, Reno, „Get Out of Your Mind and Into Your Life: The New Acceptance and Commitment Therapy”, New Harbinger, 2005'
      },
      paragraphs: [
        'Wielu ludzi osiąga swoje wielkie cele życiowe (kupno mieszkania, awans na dyrektora, utrata 15 kg), po czym zamiast oczekiwanego szczęścia doświadcza tzw. Pustki Sukcesu i natychmiastowego powrotu do anhedonii (Adaptacja Hedonistyczna, Rozdział 24). Wynika to z fundamentalnego błędu w nawigacji życiowej: mylenia CELÓW z WARTOŚCIAMI.',
        'W psychologii akceptacji i zaangażowania (ACT, Steven Hayes) stosuje się klasyczną metaforę żeglarską: WARTOŚĆ to kierunek zachodni. Nie możesz „dotrzeć na zachód” i powiedzieć: „Zrobiłem to, koniec”. Zachód jest jakością Twojej podróży w każdej sekundzie. CEL to konkretna wyspa lub port leżący na zachodzie. Port możesz osiągnąć, zweryfikować i popłynąć dalej.',
        'Wartości to nadrzędne zasady określające, JAKIM człowiekiem chcesz być w relacjach, w pracy i wobec samego siebie (np. ciekawość, odwaga, uczciwość, troska, rozwój). Cele są jedynie narzędziami służącymi do wyrażania tych wartości w świecie materialnym. Jeśli Twój cel nie jest zakotwiczony w wartości, jego osiągnięcie przyniesie tylko chwilowy wyrzut dopaminy i długoterminową pustkę.'
      ],
      subsections: [
        {
          id: 'sub-31-7-1',
          title: 'Analiza słów prof. Stevena Hayesa: Dlaczego Życie Nastawione Wyłącznie na Cele Prowadzi do Wypalenia',
          content: [
            'Wnikliwa dekonstrukcja modelu ACT autorstwa prof. Hayesa obnaża pułapkę „hedonistycznego kołowrotka”: człowiek skupiony wyłącznie na celach żyje w permanentnym stanie niedostatku („będę szczęśliwy dopiero, kiedy osiągnę X”), po czym po osiągnięciu X cieszy się przez 48 godzin i natychmiast wyznacza cel Y.',
            'Hayes dowodzi, że zakotwiczenie w wartościach pozwala odnaleźć satysfakcję w samym procesie (in the journey itself). Nawet jeśli cel nie zostanie osiągnięty z powodu sztormu czy wypadku losowego (Strefa C), człowiek żyjący według wartości zachowuje godność i poczucie sensu, bo w obliczu katastrofy nadal działał w zgodzie ze swoją odwagą i prawością.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-31-7-1',
          type: 'insight',
          title: 'Test Pogrzebu (The Funeral Exercise w ACT)',
          content: 'Wyobraź sobie swoje 90. urodziny lub ceremonię pogrzebową. O czym chciałbyś, aby mówili Twoi najbliżsi przyjaciele i dzieci? Nikt nie powie: „Wspaniale zarządzał arkuszem Excel i miał 200 tysięcy followersów”. Ludzie będą mówić o Twoich wartościach: czy byłeś obecny, czy można było na Tobie polegać, jak traktowałeś słabszych. To jest Twój prawdziwy kompas.'
        }
      ],
      interactiveWindow: {
        id: 'win-31-7',
        title: 'Kompas Wartości ACT: Odróżnienie Celu od Wartości Kierunkowej',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Klaudia (28 lat) ma cel: „Zarabiać 25 000 zł miesięcznie przed 30. rokiem życia”. Pracuje po 70 godzin w tygodniu w agencji reklamowej, oszukując klientów w raportach i biorąc leki nasenne.',
        steps: [
          {
            stepNumber: 1,
            title: 'Analiza spójności celu Klaudii z wartościami',
            description: 'Co ujawnia audyt w modelu prof. Stevena Hayesa?',
            options: [
              {
                text: 'Klaudia pomyliła cel finansowy z wartością — poświęca zdrowie i uczciwość dla cyfry na koncie, co nieuchronnie doprowadzi ją do załamania psychicznego',
                feedback: 'Trafna ocena ACT: pieniądze są środkiem, nie wartością. Pogoń za celem oderwanym od integralności niszczy dobrostan Klaudii.',
                isOptimal: true
              },
              {
                text: 'Klaudia realizuje doskonałą strategię życiową, bo cel uświęca środki',
                feedback: 'Skrajny błąd poznawczy prowadzący do ciężkiego wypalenia i zniszczenia relacji.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Jaki jest Twój najważniejszy cel życiowy i jakiej fundamentalnej wartości ma w rzeczywistości służyć?'
      }
    },
    {
      id: 'sec-31-8',
      pageNumber: 1332,
      sectionNumber: '31.8',
      title: 'Czy naprawdę wiem, czego chcę? Test Pięciu Pytań o autentyczność pragnień',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Żyjemy w kulturze wszechobecnego szumu informacyjnego, algorytmów rekomendacyjnych i nieustannego porównywania statusu w mediach społecznościowych. W takim środowisku niezwykle łatwo pomylić autentyczne pragnienie z wygenerowanym przez algorytm przymusem konsumpcyjnym lub lękiem przed pominięciem (FOMO).',
        'Aby zweryfikować, czy Twój cel jest Twój, zastosuj TEST PIĘCIU PYTAŃ REFLEKSYJNYCH:',
        '1. CZY WYBRAŁBYM TO, GDYBY NIKT NA ŚWIECIE SIĘ O TYM NIE DOWIEDZIAŁ? (Eliminuje motywację czysto autoprezentacyjną i lans).',
        '2. CZY NADAL BYM TEGO PRAGNĄŁ BEZ ŻADNEJ NAGRODY SPOŁECZNEJ I POKLASKU? (Sprawdza motywację wewnętrzną Deci-Ryana).',
        '3. Z JAKĄ MOJĄ FUNDAMENTALNĄ WARTOŚCIĄ TO WSPÓŁGRA? (Weryfikuje spójność tożsamościową).',
        '4. CZY JESTEM GOTÓW PONIEŚĆ REALNY, DŁUGOTERMINOWY KOSZT TEGO WYBORU? (Każdy cel ma cenę w postaci potu, czasu i wyrzeczeń — czy chcesz kupić cały pakiet, czy tylko ładny obrazek?).',
        '5. CZY TO NAPRAWDĘ MÓJ GŁOS, CZY ECHO OCZEKIWAŃ MOICH RODZICÓW LUB ZNAJOMYCH? (Demaskuje introjekcje).',
        'Jeśli cel przejdzie pomyślnie ten filtr, zyskuje potężną, odporną na kryzysy siłę napędową.'
      ]
    },
    {
      id: 'sec-31-9',
      pageNumber: 1338,
      sectionNumber: '31.9',
      title: 'Wartości → Decyzje → Zachowanie: Przekładanie abstrakcji na fizyczny ruch',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Największym grzechem poradników motywacyjnych jest pozostawianie wartości na poziomie pięknych, wzniosłych haseł („Moją wartością jest miłość i zdrowie”), które nie mają żadnego przełożenia na codzienne wybory. Wartość, która nie generuje konkretnego zachowania motorycznego, jest jedynie sentymentalną iluzją.',
        'W architekturze sprawczości budujemy nieprzerwany łańcuch integracji: WARTOŚĆ (np. szacunek do własnego ciała) $\rightarrow$ CEL (np. redukcja poziomu trójglicerydów i poprawa kondycji) $\rightarrow$ DECYZJA (np. przygotowywanie posiłków w domu) $\rightarrow$ ZACHOWANIE / ALGORYTM JEŚLI-TO (np. „Jeśli jest godzina 20:00, to pakuję lunchbox do pracy na jutro”) $\rightarrow$ KONSEKWENCJA (stabilna energia i duma).',
        'Pokażmy to na przykładzie: Jeśli Twoją wartością jest „Uczciwość i odwaga w relacjach”, to przekłada się ona na konkretną decyzję: nieobgadywanie kolegi za plecami w kuchni biurowej. Kiedy inni zaczynają plotkować, Twoje zachowanie to spokojne powiedzenie: „Wolę porozmawiać o tym bezpośrednio z nim”. W ten sposób abstrakcyjna filozofia staje się namacalnym faktem w czasoprzestrzeni.'
      ]
    },

    // CZĘŚĆ IV — ODPOWIEDZIALNOŚĆ BEZ SAMOOBWINIANIA (31.10 - 31.12)
    {
      id: 'sec-31-10',
      pageNumber: 1346,
      sectionNumber: '31.10',
      title: 'Odpowiedzialność ≠ Wina: Wyzwolenie z paraliżującego wstydu',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Wielu ludzi panicznie boi się słowa „odpowiedzialność”, ponieważ w dzieciństwie i szkole zostało ono sklejone z pojęciem WINY, KARY i WSTYDU. Kiedy rodzic lub nauczyciel krzyczał: „Kto za to odpowiada?!”, w rzeczywistości pytał: „Kto zawinił i kogo mam ukarać?”.',
        'Rozdzielenie tych dwóch pojęć jest jednym z najważniejszych kroków w stronę dojrzałości psychicznej:',
        '• WINA (Guilt/Shame): Jest zwrócona w przeszłość. Skupia się na błędzie, osądzie moralnym i karze („Zepsułem, jestem do niczego, wszystko moja wina”). Wina paraliżuje korę przedczołową, aktywuje układ stresu i prowadzi do wyparcia lub samobiczowania.',
        '• ODPOWIEDZIALNOŚĆ (Response-Ability — Zdolność do Odpowiedzi): Jest w 100% zwrócona w PRZYSZŁOŚĆ. Nie pyta, kto zgrzeszył. Pyta: „Mamy taki stan faktyczny — co TERAZ z tym zrobię?”.',
        'Możesz nie ponosić żadnej winy za to, że zostałeś oszukany przez kontrahenta, że zachorowałeś lub że wychowałeś się w dysfunkcyjnej rodzinie. Ale to Ty ponosisz 100% odpowiedzialności za to, jak dzisiaj zareagujesz na te fakty: czy ugrzęźniesz w roli bezradnej ofiary, czy podejmiesz leczenie, terapię i zbudujesz bezpieczną przyszłość.'
      ]
    },
    {
      id: 'sec-31-11',
      pageNumber: 1354,
      sectionNumber: '31.11',
      title: 'Co zrobić, gdy sytuacja nie zależy ode mnie? Protokół F-O-W-D-A',
      category: 'cwiczenia',
      readingTimeMinutes: 22,
      paragraphs: [
        'W życiu każdego człowieka pojawiają się momenty graniczne: śmierć bliskiej osoby, nagła utrata pracy w wyniku kryzysu, diagnoza medyczna czy odrzucenie przez partnera. W takich chwilach próba „pozytywnego myślenia” jest toksyczną bzdurą.',
        'W warunkach twardych ograniczeń zewnętrznych stosujemy PROTOKÓŁ F-O-W-D-A:',
        '1. FAKT (Obiektywny opis rzeczywistości bez ocen): „Projekt został skasowany przez centralę firmy”.',
        '2. OGRANICZENIE (Uznanie Strefy C): „Nie cofnę tej decyzji, nie mam wpływu na zarząd w Nowym Jorku”.',
        '3. MOŻLIWY WPŁYW (Zidentyfikowanie Strefy A i B): „Mogę poprosić o referencje, mogę zaktualizować portfolio, mogę zadzwonić do 3 znajomych z branży”.',
        '4. DZIAŁANIE (Wykonanie mikrokroku w ciągu 24h): „Wysyłam CV na dwa wybrane stanowiska”.',
        '5. AKCEPTACJA WYNIKU: „Uznaję, że odpowiedź rynku może zająć miesiąc — w tym czasie dbam o sen i spacery”.'
      ],
      caseStudyRef: chapterThirtyOneCaseStudyNatalia
    },
    {
      id: 'sec-31-12',
      pageNumber: 1362,
      sectionNumber: '31.12',
      title: 'Wyuczona bezradność i odzyskiwanie wpływu: Aktualizowanie przekonań przez mikrodziałanie',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'W klasycznych badaniach Martina Seligmana nad wyuczoną bezradnością (Learned Helplessness) wykazano, że organizm poddawany powtarzalnym, niemożliwym do uniknięcia przykrym bodźcom uczy się, że jego zachowanie nie ma żadnego znaczenia. W rezultacie, gdy klatka zostaje otwarta, zwierzę (i człowiek) nie podejmuje nawet próby ucieczki — kładzie się i biernie cierpi.',
        'Wyuczona bezradność jest stanem poznawczym: mózg wytworzył sztywne przekonanie: „Cokolwiek zrobię, i tak nic to nie zmieni”.',
        'Z tego stanu nie da się wyjść samą dyskusją filozoficzną. Potrzebny jest przełom behawioralny: MAŁE DZIAŁANIE $\rightarrow$ INFORMACJA ZWROTNA Z OTOCZENIA $\rightarrow$ AKTUALIZACJA BAYESOWSKA W MÓZGU („O, jednak przesunąłem tę szklankę, jednak wstałem o 7:00”) $\rightarrow$ WZROST DOPAMINY $\rightarrow$ KOLEJNE DZIAŁANIE. W ten sposób, mikrokrok po mikrokroku, sieć neuronowa odzyskuje wiarę we własną sprawczość.'
      ]
    },

    // CZĘŚĆ V — ŚRODOWISKO A AUTONOMIA (31.13 - 31.14)
    {
      id: 'sec-31-13',
      pageNumber: 1370,
      sectionNumber: '31.13',
      title: 'Nie wszystko rozgrywa się w głowie: Środowisko jako zewnętrzny układ nerwowy',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Wielkim błędem naiwnego woluntaryzmu jest przekonanie, że silna wola to mięsień, który powinien wygrać z każdą pokusą w dowolnym otoczeniu. Człowiek trzymający otwartą paczkę chipsów i telefon z włączonymi powiadomieniami tuż obok klawiatury, który próbuje pisać doktorat siłą samej „motywacji”, przegra z biologią w 99 na 100 przypadków.',
        'W Tomie III (Rozdziały 26–28) udowodniliśmy, że Twoje środowisko fizyczne i cyfrowe jest Twoim ZEWNĘTRZNYM UKŁADEM NERWOWYM. Przestrzeń wokół Ciebie bezustannie wysyła bodźce wyzwalające (Cues), które omijają korę przedczołową i bezpośrednio aktywują automatyzmy w prążkowiu.',
        'Autonomia nie polega na toczeniu heroicznej, wycieńczającej walki z własnym biurkiem czy lodówką. Autonomia polega na byciu ARCHITEKTEM OTOCZENIA: zaprojektowaniu przestrzeni tak, aby pożądane wybory były naturalne i bezwysiłkowe, a autodestrukcyjne — maksymalnie utrudnione.'
      ]
    },
    {
      id: 'sec-31-14',
      pageNumber: 1376,
      sectionNumber: '31.14',
      title: 'Projektowanie własnego środowiska: Model 6-krokowej inżynierii przestrzeni',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Aby przekształcić swoje otoczenie w sojusznika autonomii, zastosuj MODEL SZEŚCIU DŹWIGNI:',
        '1. USUŃ: Wyeliminuj całkowicie ze swojego bezpośredniego pola widzenia wyzwalacze zachowań szkodliwych (np. brak alkoholu i słodyczy w domu).',
        '2. UTRUDNIJ (Inżynieria Tarcia): Wprowadź 20-sekundową barierę fizyczną dla nawyków rozpraszających (telefon w innym pokoju, wylogowanie z portali społecznościowych, skomplikowane hasło).',
        '3. ZAMIEŃ: Podmień szkodliwy wyzwalacz na konstruktywny (zamiast aplikacji informacyjnej — czytnik e-booków na ekranie głównym).',
        '4. UŁATW: Zredukuj tarcie dla zachowań pożądanych do zera (strój sportowy przygotowany wieczorem, bidon z wodą na biurku).',
        '5. PRZYPOMNIJ: Umieść wizualną kotwicę intencji w miejscu wykonania (karteczka na monitorze z 3 priorytetami dnia).',
        '6. WZMOCNIJ: Połącz zdrowe zachowanie z natychmiastową mikro-nagrodą (np. pyszna herbata pita wyłącznie podczas czytania książki).'
      ]
    },

    // CZĘŚĆ VI — AUTONOMIA W RELACJACH (31.15 - 31.16)
    {
      id: 'sec-31-15',
      pageNumber: 1382,
      sectionNumber: '31.15',
      title: 'Granice jako infrastruktura autonomii: Dlaczego bez granic nie ma wolności',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'W Rozdziale 29 szczegółowo zbadaliśmy anatomię granic osobistych i relacyjnych. W tym miejscu dokonujemy syntezy: GRANICE SĄ INFRASTRUKTURĄ TWOJEJ AUTONOMII.',
        'Zależność jest prosta i bezwzględna: Granica $\rightarrow$ Przestrzeń $\rightarrow$ Możliwość Wyboru $\rightarrow$ Autonomia. Jeśli nie potrafisz postawić granicy czasowej swojemu pracodawcy, granicy emocjonalnej toksycznemu rodzicowi lub granicy prywatności wścibskiemu znajomemu — Twoja doba i Twoje zasoby poznawcze zostaną w 100% skolonizowane przez potrzeby innych ludzi.',
        'Człowiek bez granic nie ma przestrzeni na autonomię, ponieważ cały swój czas spędza na gaszeniu cudzych pożarów i spełnianiu cudzych zachcianek. Stawianie granic nie jest egoizmem — jest zabezpieczeniem terenu niezbędnego do tego, byś w ogóle mógł być sobą.'
      ]
    },
    {
      id: 'sec-31-16',
      pageNumber: 1388,
      sectionNumber: '31.16',
      title: 'Asertywność jako narzędzie ochrony decyzji: Pięć scenariuszy nacisku i porównanie stylów',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W Rozdziale 30 opanowaliśmy sztukę komunikacji asertywnej. Zobaczmy teraz, jak asertywność działa jako tarcza ochronna dla Twoich autonomicznych wyborów w 5 typowych sytuacjach nacisku:',
        '1. PRESJA ZNAJOMYCH NA ALKOHOL / IMPREZĘ: Reakcja uległa („No dobra, napiję się dla towarzystwa”); Reakcja agresywna („Odpierdolcie się, jesteście alkoholikami!”); Reakcja asertywna: „Dziękuję, dziś piję wodę niegazowaną. Cieszę się, że mogę z wami spędzić czas”.',
        '2. NACISK RODZINY NA ŚWIĘTA: Reakcja uległa (przyjazd mimo wycieńczenia); Reakcja agresywna (awantura telefoniczna); Reakcja asertywna: „W tym roku spędzamy święta we dwoje w górach, by odpocząć. Odwiedzimy was w drugi weekend stycznia”.',
        '3. PRESJA SZEFA NA NADGODZINY W PIĄTEK O 16:30: Reakcja uległa (cichy płacz i praca do 22:00); Reakcja agresywna (rzucenie papierami); Reakcja asertywna: „O 17:00 mam nienegocjowalne zobowiązanie prywatne. Raport zrealizuję w poniedziałek od 8:00”.',
        '4. SZANTAŻ EMOCJONALNY PARTNERA („Gdybyś mnie kochał, to byś...”): Reakcja uległa (przepraszanie za niewinność); Reakcja asertywna: „Bardzo cię kocham, ale nie zrezygnuję ze swoich pasji. Porozmawiajmy o tym, jak możemy pogodzić nasze plany”.',
        '5. HEJT I PRESJA W INTERNECIE: Reakcja uległa (usuwanie konta w rozpaczy); Reakcja asertywna (zablokowanie trolla bez słowa komentarza).'
      ]
    },

    // CZĘŚĆ VII & VIII & IX — STUDIA PRZYPADKU & SYSTEM (31.17 - 31.19)
    {
      id: 'sec-31-17',
      pageNumber: 1396,
      sectionNumber: '31.17',
      title: 'Wielkie Studium Przypadku I: Dekonstrukcja Introjekcji — Michał (24 lata)',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'W tej sekcji zapoznaj się ze szczegółową analizą przypadku Michała powyżej: zobacz, jak 8-etapowa dekonstrukcja oczekiwań rodzinnych doprowadziła go do przełamania lęku przed rozczarowaniem ojca i zbudowania autentycznej ścieżki zawodowej.',
        'Zwróć szczególną uwagę na analizę neurobiologiczną: wyciszenie przedniej kory zakrętu obręczy (ACC) po ujednoliceniu deklarowanych wartości z codziennymi działaniami.'
      ],
      caseStudyRef: chapterThirtyOneCaseStudyMichal
    },
    {
      id: 'sec-31-18',
      pageNumber: 1404,
      sectionNumber: '31.18',
      title: 'Wielkie Studium Przypadku II: Sprawczość w Granicach Możliwości — Natalia (31 lat)',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'W drugim studium przypadku przeanalizuj sytuację Natalii: samotnej matki dziecka ze spektrum autyzmu, która odzyskała sprawczość poprzez precyzyjne odróżnienie Strefy C (brak kontroli nad odejściem partnera i diagnozą) od Strefy A (kontrola nad własnym snem, odżywianiem i mikrodziałaniami).',
        'Przeanalizuj, jak przesunięcie wektora uwagi z bezsilnego narzekania na małe fakty zregenerowało jej układ nerwowy i uchroniło przed depresją kliniczną.'
      ],
      caseStudyRef: chapterThirtyOneCaseStudyNatalia
    },
    {
      id: 'sec-31-19',
      pageNumber: 1412,
      sectionNumber: '31.19',
      title: 'Pętla „Architekta Własnego Życia”: Osiem zintegrowanych elementów systemu',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Oto wielki model syntetyczny, integrujący wiedzę z całej trylogii. Pętla Architekta opiera się na 8 współpracujących ze sobą modułach poznawczo-behawioralnych:',
        '1. ŚWIADOMOŚĆ (Co się we mnie dzieje? — Odczytanie pobudzenia somatycznego i emocji).',
        '2. PERCEPCJA (Jak interpretuję sytuację? — Złapanie zniekształceń poznawczych i narracji ego).',
        '3. WARTOŚCI (Co jest dla mnie nadrzędne? — Sprawdzenie kompasu wewnętrznego).',
        '4. DECYZJA (Co wybieram? — Zastosowanie pauzy decyzyjnej i protokołu Pre-Mortem).',
        '5. DZIAŁANIE (Co robię fizycznie? — Wykonanie mikrokroku w świecie materialnym).',
        '6. ŚRODOWISKO (Co ułatwia mój ruch? — Inżynieria tarcia i architektura otoczenia).',
        '7. INFORMACJA ZWROTNA (Jaki jest obiektywny fakt po działaniu? — Zmierzenie wyniku bez iluzji).',
        '8. KOREKTA (Co modyfikuję? — Aktualizacja bayesowska i kolejny świadomy wybór).',
        'Pętla ta nie ma końca — jest dynamicznym tańcem świadomego człowieka z nieprzewidywalnym światem.'
      ]
    },

    // CZĘŚĆ X — WIELKI WARSZTAT I FORMULARZE (31.20 - 31.23)
    {
      id: 'sec-31-20',
      pageNumber: 1420,
      sectionNumber: '31.20',
      title: 'Wielki Audyt Własnej Autonomii: Dziesięć kluczowych obszarów życia',
      category: 'cwiczenia',
      readingTimeMinutes: 25,
      paragraphs: [
        'Przeprowadź kompletny audyt swojej autonomii w 10 sferach egzystencji, odpowiadając na pytania: (1) W jakiej mierze ten obszar wynika z moich wartości, a w jakiej z cudzych oczekiwań? (2) Kto ma tu decydujący głos? (3) Gdzie oddaję kontrolę walkowerem?',
        'Obszary audytu: 1. Praca zawodowa i kariera. 2. Finanse i wydatki. 3. Relacje romantyczne i intymność. 4. Rodzina pochodzenia. 5. Przyjaźnie i życie towarzyskie. 6. Ciało, sen i zdrowie. 7. Czas wolny i odpoczynek. 8. Korzystanie z technologii i social mediów. 9. Rozwój osobisty i intelektualny. 10. Duchowość, wartości i sens życia.'
      ]
    },
    {
      id: 'sec-31-21',
      pageNumber: 1428,
      sectionNumber: '31.21',
      title: 'Mapa Kontroli: Tabela alokacji energii w 10 codziennych sytuacjach',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Stwórz własną Mapę Kontroli. Wypełnij tabelę z 10 konkretnymi sytuacjami ze swojego życia według kolumn:',
        '| Sytuacja / Problem | Co kontroluję w 100% (Strefa A) | Na co mam wpływ (Strefa B) | Czego nie kontroluję (Strefa C) | Mój konkretny następny krok |',
        'Przykładowy wiersz: Sytuacja: Awantura z partnerem o bałagan. Strefa A: Mój ton głosu, posprzątanie moich rzeczy, niewypowiadanie słów oskarżycielskich. Strefa B: Zaproponowanie rozmowy przy herbacie o 19:00. Strefa C: To, czy partner od razu przeprosi, czy będzie krzyczał. Następny krok: Głęboki wydech i użycie komunikatu JA.'
      ]
    },
    {
      id: 'sec-31-22',
      pageNumber: 1434,
      sectionNumber: '31.22',
      title: 'Mój Osobisty System Decyzji: 7-krokowy protokół bezpiecznego wyboru',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Zapisz i wydrukuj swój osobisty protokół decyzyjny na trudne momenty:',
        '1. ZATRZYMAJ SIĘ (Minimum 10 powolnych wydechów; zakaz podejmowania decyzji w stanie HALT — Hungry, Angry, Lonely, Tired).',
        '2. ROZPOZNAJ (Nazwij emocję: lęk, duma, wstyd, pożądanie).',
        '3. SPRAWDŹ WARTOŚCI (Jak ta decyzja ma się do mojego długoterminowego kompasu?).',
        '4. OGRANICZ DO 3 OPCJI (Wybierz wariant A, B lub C, odrzucając paraliż wielości).',
        '5. ZRÓB PRE-MORTEM (Wyobraź sobie, że opcja A poniosła klęskę — dlaczego? co zabezpieczysz?).',
        '6. PODEJMIJ DECYZJĘ I WYZNACZ DEADLINE (Decyduj i zamknij proces deliberacji).',
        '7. OCEŃ PROCES, A NIE WYNIK (Bądź dumny z rzetelności myślenia niezależnie od losowości).'
      ]
    },
    {
      id: 'sec-31-23',
      pageNumber: 1440,
      sectionNumber: '31.23',
      title: 'Projektowanie Jednego Obszaru Życia: 12-krokowa procedura transformacji',
      category: 'cwiczenia',
      readingTimeMinutes: 22,
      paragraphs: [
        'Wybierz jeden obszar, w którym czujesz największy chaos lub brak sprawczości, i przejdź przez pełną 12-krokową ścieżkę inżynierii:',
        '1. Stan obecny (Fakty) $\rightarrow$ 2. Zdefiniowanie problemu $\rightarrow$ 3. Nadrzędna wartość $\rightarrow$ 4. Mierzalny cel $\rightarrow$ 5. Kluczowe mikrozachowanie (2 minuty) $\rightarrow$ 6. Audyt środowiska (co usunąć, co ułatwić) $\rightarrow$ 7. Identyfikacja przeszkód wewnętrznych $\rightarrow$ 8. Algorytm Jeśli-To $\rightarrow$ 9. Metoda pomiaru (Habit Tracker) $\rightarrow$ 10. Przegląd po 7 dniach $\rightarrow$ 11. Korekta po 14 dniach $\rightarrow$ 12. Utrwalenie w tożsamości.'
      ]
    },

    // CZĘŚĆ XI — EKSPERYMENT AUTONOMII (31.24)
    {
      id: 'sec-31-24',
      pageNumber: 1448,
      sectionNumber: '31.24',
      title: 'Eksperyment 14 Dni: Dziennik Świadomego Architekta',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Zaprojektuj swój 14-dniowy eksperyment behawioralny. Przez dwa tygodnie każdego wieczoru poświęć 5 minut na uzupełnienie 6 pól:',
        '1. Jaka była dziś najtrudniejsza sytuacja decyzyjna? 2. Jaki automatyczny impuls się pojawił? 3. Jaką świadomą decyzję podjąłem? 4. Jakie konkretne działanie wykonałem? 5. Co było ode mnie w 100% zależne, a co było poza moją kontrolą? 6. Czego nowego dowiedziałem się o sobie jako decydencie?',
        'Po 14 dniach podsumuj dane: zobaczysz, jak diametralnie wzrosła Twoja odporność na manipulacje i spokój wewnętrzny.'
      ]
    },

    // CZĘŚĆ XII — SYNTEZA TOMU III (31.25)
    {
      id: 'sec-31-25',
      pageNumber: 1456,
      sectionNumber: '31.25',
      title: 'Od Impulsu do Autonomii: Wielka Synteza Dziewięciu Stopni Samokształtowania',
      category: 'podsumowanie',
      readingTimeMinutes: 25,
      paragraphs: [
        'Spójrz wstecz na całą drogę, którą przeszliśmy w Tomie III:',
        '• ROZDZIAŁ 23: Nauczyłeś się tworzyć pauzę poznawczą i hamować destrukcyjny impuls limbiczny w korze przedczołowej.',
        '• ROZDZIAŁ 24: Zrozumiałeś anatomię wyboru, dekonstruując pułapki heurystyk, zmęczenia decyzyjnego i błędu wyniku.',
        '• ROZDZIAŁ 25: Przekroczyłeś lukę intencja-działanie, rozbrajając unikanie i prokrastynację jako zaburzenia naprawy nastroju.',
        '• ROZDZIAŁ 26: Opanowałeś inżynierię tarcia środowiskowego i siłę mikrokroków tożsamościowych.',
        '• ROZDZIAŁY 27–28: Zautomatyzowałeś pożądane zachowania w pętle nawykowe i zbudowałeś odporność na potknięcia.',
        '• ROZDZIAŁ 29: Zabezpieczyłeś swoją przestrzeń życiową nienaruszalnymi granicami fizycznymi, czasowymi i emocjonalnymi.',
        '• ROZDZIAŁ 30: Nauczyłeś się asertywnie i spokojnie komunikować swoje stanowisko bez agresji i bez uległości.',
        '• ROZDZIAŁ 31: Zintegrowałeś wszystkie te narzędzia w stan dojrzałej AUTONOMII I SPRAWCZOŚCI — stałeś się świadomym twórcą swojego losu.'
      ]
    },

    // CZĘŚĆ XIII & XIV & XV — EGZAMIN, SŁOWNIK & MOST (31.26 - 31.28)
    {
      id: 'sec-31-26',
      pageNumber: 1464,
      sectionNumber: '31.26',
      title: 'Wielki Egzamin Końcowy Tomu III: Pięć Poziomów Mistrzostwa',
      category: 'cwiczenia',
      readingTimeMinutes: 30,
      paragraphs: [
        'Przystąp do wielkiego egzaminu podsumowującego Tom III. Egzamin składa się z 5 poziomów weryfikacji kompetencji:',
        'POZIOM 1 (Wiedza definicyjna) $\rightarrow$ POZIOM 2 (Rozpoznawanie mechanizmów w sytuacjach) $\rightarrow$ POZIOM 3 (Analiza psychologiczna) $\rightarrow$ POZIOM 4 (Zastosowanie i projektowanie interwencji) $\rightarrow$ POZIOM 5 (Wielka integracja systemowa).',
        'Rozwiąż interaktywny quiz egzaminacyjny poniżej i sprawdź swój poziom mistrzostwa decyzyjno-behawioralnego.'
      ]
    },
    {
      id: 'sec-31-27',
      pageNumber: 1474,
      sectionNumber: '31.27',
      title: 'Słownik Kluczowych Pojęć Tomu III: Encyklopedia Samokształtowania',
      category: 'podsumowanie',
      readingTimeMinutes: 20,
      paragraphs: [
        'Oto kanon 15 kluczowych pojęć Tomu III:',
        '• AUTONOMIA — zdolność do stanowienia o sobie i działania w zgodzie z własnymi wartościami (Rozdział 31).',
        '• SPRAWCZOŚĆ (Agency) — poczucie bycia autorem swoich działań i wywoływania realnych zmian w świecie (Rozdział 31).',
        '• LOCUS OF CONTROL — poczucie umiejscowienia kontroli: wewnętrzne vs zewnętrzne (Rozdział 31).',
        '• SAMOREGULACJA — zdolność do monitorowania i modyfikowania własnych stanów afektywnych i behawioralnych (Rozdział 23).',
        '• PREKOMITMENT — strategiczne ograniczenie przyszłych opcji w celu ochrony przed pokusą (Rozdział 23).',
        '• INTENCJA IMPLEMENTACYJNA — algorytm warunkowy „Jeśli X, to wykonam Y” (Rozdział 26).',
        '• INŻYNIERIA TARCIA — celowe modyfikowanie oporu środowiskowego dla zachowań pożądanych i szkodliwych (Rozdział 26).',
        '• PĘTLA NAWYKU — sekwencja: Wskazówka $\rightarrow$ Zwyczaj $\rightarrow$ Nagroda w prążkowiu (Rozdział 27).',
        '• GRANICA OSOBISTA — niewidzialna linia określająca, co jest moją odpowiedzialnością i moją przestrzenią, a co cudzą (Rozdział 29).',
        '• ASERTYWNOŚĆ — bezpośrednia, uczciwa ekspresja siebie z poszanowaniem godności drugiego człowieka (Rozdział 30).',
        '• WYUCZONA BEZRADNOŚĆ — stan rezygnacji wywołany przekonaniem o braku wpływu (Rozdział 31).',
        '• WARTOŚĆ — nadrzędny, niewyczerpywalny kierunek nawigacyjny życia (Rozdział 31).',
        '• POCZUCIE WŁASNEJ SKUTECZNOŚCI (Bandura) — wiara w zdolność zorganizowania i wykonania działań niezbędnych do osiągnięcia celu (Rozdział 31).',
        '• INTROJEKCJA — bezrefleksyjne przyjęcie cudzych norm jako własnych (Rozdział 31).',
        '• OUTCOME BIAS — błąd oceniania jakości decyzji wyłącznie po jej losowym rezultacie (Rozdział 24).'
      ]
    },
    {
      id: 'sec-31-28',
      pageNumber: 1482,
      sectionNumber: '31.28',
      title: 'Od Kształtowania Siebie do Rozumienia Świata: Most do Kolejnego Tomu',
      category: 'podsumowanie',
      readingTimeMinutes: 22,
      quote: {
        text: 'Kto poznał siebie, ten zdobył spokój. Kto ukształtował siebie, ten zdobył wolność. Teraz czas zrozumieć świat, w którym ta wolność musi działać.',
        author: 'Most Epistemologiczny Trylogii'
      },
      paragraphs: [
        'ZAKOŃCZENIE TOMU III I CAŁEJ TRYLOGII SAMOKSZTAŁTOWANIA:',
        'Przebyłeś monumentalną drogę od poziomu pojedynczego neuronu i impulsu limbicznego w Tomie I, przez dynamikę relacji i wpływu w Tomie II, aż po mistrzostwo samoregulacji, granic i autonomii w Tomie III.',
        'Wiesz już, kim jesteś, jak funkcjonujesz pod presją i jak budować swoje codzienne wybory na twardym gruncie faktów i wartości.',
        'Lecz człowiek autonomiczny nie żyje w próżni. W kolejnym tomie postawimy jeszcze większe pytania: Co dzieje się, gdy autonomiczny umysł wkracza w złożone systemy polityczne, zglobalizowaną kulturę, algorytmy sztucznej inteligencji, wojny informacyjne i wielkie przemiany cywilizacyjne XXI wieku? Jak zachować podmiotowość, krytyczne myślenie i człowieczeństwo w świecie rosnącej złożoności?',
        'Dziękujemy za wspólną podróż przez meandry ludzkiej psychiki. Bądź mądrym, odważnym i życzliwym Architektem Swojego Życia.'
      ]
    }
  ]
};
