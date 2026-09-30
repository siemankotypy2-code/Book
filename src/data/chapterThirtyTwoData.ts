import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 16 (GLOBALNIE ROZDZIAŁ 32 W STRUKTURZE DZIEŁA)
 * TYTUŁ: ODPOWIEDZIALNOŚĆ, ODPORNOŚĆ, ADAPTACJA I PRACA Z NIEPEWNOŚCIĄ
 * PODTYTUŁ: Jak działać, gdy życie nie przebiega zgodnie z planem
 */

export const chapterThirtyTwoExamQuestions: ExamQuestion[] = [
  // POZIOM 1 — WIEDZA DEFINICYJNA (1-10)
  {
    id: 1,
    question: 'Czym w ujęciu współczesnej psychologii naukowej jest odporność psychiczna (resilience)?',
    topic: 'Definicja i Istota Odporności',
    sectionRef: 'Sekcja 32.1',
    options: [
      { label: 'A', text: 'Dynamicznym procesem adaptacji i stopniowego powrotu do optymalnego funkcjonowania pomimo przeciwności losu, zależnym od zasobów, relacji i czasu.', isCorrect: true },
      { label: 'B', text: 'Wrodzoną, niezmienną cechą osobowości chroniącą przed odczuwaniem jakiegokolwiek stresu lub bólu.', isCorrect: false },
      { label: 'C', text: 'Zdolnością do natychmiastowego tłumienia negatywnych emocji i udawania, że nic się nie stało.', isCorrect: false },
      { label: 'D', text: 'Przymusem nieustannej produktywności i brakiem potrzeby odpoczynku po porażce.', isCorrect: false }
    ],
    explanation: 'Odporność psychiczna nie jest stałą cechą „superbohatera”, lecz elastycznym procesem psychobiologicznym, w którym człowiek angażuje zasoby osobiste i środowiskowe do reintegracji po kryzysie.',
    keyTakeaway: 'Odporność to proces adaptacji i powrotu do równowagi, a nie brak cierpienia.'
  },
  {
    id: 2,
    question: 'Jaka jest kluczowa różnica między odpornością psychiczną a tłumieniem emocjonalnym?',
    topic: 'Odporność vs Tłumienie i Niewrażliwość',
    sectionRef: 'Sekcja 32.2',
    options: [
      { label: 'A', text: 'Odporność uwzględnia trudność i emocje, modyfikując zachowanie, podczas gdy tłumienie blokuje ekspresję i ignoruje sygnały ostrzegawcze z ciała.', isCorrect: true },
      { label: 'B', text: 'Tłumienie jest bardziej zaawansowaną formą odporności przeznaczoną dla liderów.', isCorrect: false },
      { label: 'C', text: 'Odporność polega na unikaniu trudnych sytuacji, a tłumienie na konfrontacji.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy funkcjonalnej — oba stany prowadzą do identycznych kosztów somatycznych.', isCorrect: false }
    ],
    explanation: 'Tłumienie generuje przewlekły koszt sercowo-naczyniowy i poznawczy, podczas gdy odporność opiera się na akceptacji stanu emocjonalnego i adekwatnej korekcie strategii działania.',
    keyTakeaway: 'Niewrażliwość to pancerz, który pęka pod obciążeniem; odporność to elastyczność wierzby na wietrze.'
  },
  {
    id: 3,
    question: 'Jak wygląda podstawowy cykl adaptacyjny człowieka w odpowiedzi na zmianę warunków?',
    topic: 'Mechanizm Adaptacji',
    sectionRef: 'Sekcja 32.3',
    options: [
      { label: 'A', text: 'Stary model rzeczywistości → Nowe wydarzenie → Konflikt poznawczy → Aktualizacja modelu → Nowe zorientowane działanie.', isCorrect: true },
      { label: 'B', text: 'Ignorowanie faktów → Presja → Wyparcie → Załamanie → Rezygnacja.', isCorrect: false },
      { label: 'C', text: 'Planowanie → Bezwzględne trzymanie się planu → Sukces za wszelką cenę.', isCorrect: false },
      { label: 'D', text: 'Natychmiastowe porzucenie wartości przy pierwszej przeszkodzie.', isCorrect: false }
    ],
    explanation: 'Adaptacja wymaga aktualizacji wewnętrznych modeli predykcyjnych umysłu pod wpływem błędu predykcji (rozbieżności między oczekiwaniem a faktem).',
    keyTakeaway: 'Adaptacja polega na uaktualnianiu mapy umysłowej, gdy teren okazał się inny niż sądziliśmy.'
  },
  {
    id: 4,
    question: 'Dlaczego niepewność jest ewolucyjnie i neurobiologicznie trudna do zniesienia?',
    topic: 'Neurobiologia Niepewności',
    sectionRef: 'Sekcja 32.4',
    options: [
      { label: 'A', text: 'Ponieważ mózg jest maszyną predykcyjną; brak informacji uniemożliwia optymalną alokację zasobów metabolicznych i aktywuje sieć czujności lękowej.', isCorrect: true },
      { label: 'B', text: 'Ponieważ niepewność zawsze oznacza śmiertelne zagrożenie fizyczne.', isCorrect: false },
      { label: 'C', text: 'Ponieważ ludzki mózg nie potrafi uczyć się na błędach.', isCorrect: false },
      { label: 'D', text: 'Tylko osoby neurotyczne odczuwają niepewność; dla zdrowego mózgu jest ona obojętna.', isCorrect: false }
    ],
    explanation: 'Mózg dąży do minimalizacji wolnej energii (predykcji błędu). Brak danych generuje stan podwyższonej gotowości pnia mózgu i ciała migdałowatego, zużywając glukozę.',
    keyTakeaway: 'Niepewność kosztuje kalorie — stąd automatyczny impuls do wymuszania pozornej pewności.'
  },
  {
    id: 5,
    question: 'Czym charakteryzuje się niska tolerancja niepewności (Intolerance of Uncertainty - IU)?',
    topic: 'Tolerancja Niepewności',
    sectionRef: 'Sekcja 32.5',
    options: [
      { label: 'A', text: 'Tendencją do reagowania lękiem i natrętnymi próbami uzyskania 100% gwarancji poprzez unikanie, nadmierną kontrolę lub natychmiastowe przedwczesne decyzje.', isCorrect: true },
      { label: 'B', text: 'Umiejętnością spokojnego podejmowania ryzyka w warunkach zmienności rynkowej.', isCorrect: false },
      { label: 'C', text: 'Całkowitym brakiem planowania i życiem wyłącznie chwilą.', isCorrect: false },
      { label: 'D', text: 'Zdolnością do precyzyjnego przewidywania przyszłości.', isCorrect: false }
    ],
    explanation: 'Osoby o niskiej tolerancji niepewności traktują samą możliwość wystąpienia negatywnego zdarzenia jako nie do zniesienia, stosując kosztowne strategie kontrolne.',
    keyTakeaway: 'Nietolerancja niepewności to niezdolność do działania z niepełnymi danymi.'
  },
  {
    id: 6,
    question: 'Jak należy zdefiniować porażkę w ujęciu poznawczo-behawioralnym?',
    topic: 'Porażka jako Informacja',
    sectionRef: 'Sekcja 32.6',
    options: [
      { label: 'A', text: 'Jako obiektywną informację zwrotną o rozbieżności między zastosowaną metodą a założonym rezultatem, a nie wyrok na tożsamość człowieka.', isCorrect: true },
      { label: 'B', text: 'Jako dowód na brak talentu i wrodzoną niekompetencję wykonawcy.', isCorrect: false },
      { label: 'C', text: 'Zawsze jako powód do dumy, niezależnie od skali zniszczeń i błędów logicznych.', isCorrect: false },
      { label: 'D', text: 'Jako karę losu za niewłaściwe myśli.', isCorrect: false }
    ],
    explanation: 'Porażka to fakt operacyjny: hipoteza działania X w warunkach Y nie wygenerowała oczekiwanego wyniku Z. Daje to dane do kalibracji parametrów.',
    keyTakeaway: 'Porażka to status eksperymentu, a nie etykieta Twojej tożsamości.'
  },
  {
    id: 7,
    question: 'Na czym polega zjawisko katastrofizacji poznawczej?',
    topic: 'Katastrofizacja i Analiza Ryzyka',
    sectionRef: 'Sekcja 32.7',
    options: [
      { label: 'A', text: 'Na automatycznym przypisywaniu skrajnie negatywnemu scenariuszowi 100% prawdopodobieństwa oraz zakładaniu zerowej zdolności poradzenia sobie z nim.', isCorrect: true },
      { label: 'B', text: 'Na rzetelnym audycie ryzyk biznesowych zgodnym z normą ISO 31000.', isCorrect: false },
      { label: 'C', text: 'Na planowaniu procedur ewakuacji przeciwpożarowej.', isCorrect: false },
      { label: 'D', text: 'Na realistycznej ocenie trudnej sytuacji życiowej.', isCorrect: false }
    ],
    explanation: 'Katastrofizacja łączy wyolbrzymienie wagi problemu z jednoczesnym zaniżeniem własnych zasobów zaradczych (perceived self-efficacy).',
    keyTakeaway: 'Katastrofizacja myli to, co możliwe teoretycznie, z tym, co prawdopodobne statystycznie.'
  },
  {
    id: 8,
    question: 'Jaka jest różnica między cierpieniem pierwotnym (problemem obiektywnym) a cierpieniem wtórnym?',
    topic: 'Cierpienie Pierwotne vs Wtórne',
    sectionRef: 'Sekcja 32.8',
    options: [
      { label: 'A', text: 'Cierpienie pierwotne to bezpośredni fakt życiowy (np. ból, strata, odmowa); cierpienie wtórne to nasza oceniająca, samooskarżająca narracja o tym fakcie.', isCorrect: true },
      { label: 'B', text: 'Cierpienie pierwotne trwa krócej niż 5 minut, a wtórne powyżej roku.', isCorrect: false },
      { label: 'C', text: 'Cierpienie wtórne dotyczy wyłącznie osób bliskich, a pierwotne nas samych.', isCorrect: false },
      { label: 'D', text: 'Nie istnieje rozróżnienie — każde cierpienie jest wyłącznie iluzją umysłu.', isCorrect: false }
    ],
    explanation: 'Pierwotny ból jest nieuniknionym elementem życia w zmiennym świecie. Wtórne cierpienie jest tworzone przez ruminacje: „Dlaczego to znowu ja?”, „Jestem beznadziejny”.',
    keyTakeaway: 'Ból to fakt; drugą strzałę cierpienia wbijamy sobie sami własną interpretacją.'
  },
  {
    id: 9,
    question: 'Czym jest elastyczność psychologiczna (Psychological Flexibility)?',
    topic: 'Elastyczność Psychologiczna',
    sectionRef: 'Sekcja 32.9',
    options: [
      { label: 'A', text: 'Zdolnością do bycia w kontakcie z teraźniejszością oraz zmiany lub kontynuacji zachowania w zależności od kontekstu w służbie obranych wartości.', isCorrect: true },
      { label: 'B', text: 'Brakiem stałych przekonań i uleganiem presji każdej napotkanej osoby.', isCorrect: false },
      { label: 'C', text: 'Niewzruszonym trzymaniem się planu zignorowawszy wszelkie sygnały rynkowe.', isCorrect: false },
      { label: 'D', text: 'Zdolnością do szybkiej zmiany nastroju na zawołanie.', isCorrect: false }
    ],
    explanation: 'Elastyczność psychologiczna (kluczowy rdzeń terapii ACT) pozwala utrzymać kurs wartości pomimo zmiennego wiatru emocji i nieprzewidzianych przeszkód.',
    keyTakeaway: 'Elastyczność to wierność wartościom przy plastyczności taktyk i metod.'
  },
  {
    id: 10,
    question: 'Kiedy uparta wytrwałość przekształca się w szkodliwą sztywność behawioralną?',
    topic: 'Granice Wytrwałości i Pułapka Uparcia',
    sectionRef: 'Sekcja 32.15',
    options: [
      { label: 'A', text: 'Gdy człowiek kontynuuje nieskuteczną metodę pomimo powtarzalnych danych o jej nieskuteczności, ponosząc wyniszczające koszty wbrew własnym nadrzędnym wartościom.', isCorrect: true },
      { label: 'B', text: 'Gdy ktoś decyduje się na przerwę w nauce na czas snu.', isCorrect: false },
      { label: 'C', text: 'Gdy zmieniamy dostawcę internetu po awarii łącza.', isCorrect: false },
      { label: 'D', text: 'Każda forma wytrwałości powyżej 3 dni jest sztywnością.', isCorrect: false }
    ],
    explanation: 'Zdrowa wytrwałość (grit) dotyczy wierności celowi nadrzędnemu przy ciągłej ewaluacji metod. Sztywność fiksacyjna trzyma się konkretnej ślepej uliczki z lęku przed przyznaniem się do błędu.',
    keyTakeaway: 'Bądź twardy w celach i wartościach, ale płynny w strategiach i narzędziach.'
  },

  // POZIOM 2 — ROZPOZNAWANIE MECHANIZMÓW W SYTUACJACH (11-20)
  {
    id: 11,
    question: 'Pracownik po odrzuceniu projektu przez zarząd mówi: „I tak mi nie zależało, to głupia firma, nic mnie to nie obchodzi”. Jaki mechanizm tu zachodzi?',
    topic: 'Rozpoznawanie Reakcji Obronnych',
    sectionRef: 'Sekcja 32.2',
    options: [
      { label: 'A', text: 'Odporność psychiczna — szybkie pogodzenie się z losem.', isCorrect: false },
      { label: 'B', text: 'Tłumienie afektu i dewaluacja obronna w celu ochrony kruchego ego przed wstydem.', isCorrect: true },
      { label: 'C', text: 'Zdrowa elastyczność taktyczna.', isCorrect: false },
      { label: 'D', text: 'Doświadczenie flow i sprawczości wewnętrznej.', isCorrect: false }
    ],
    explanation: 'Dewaluacja celu i chłodne odcięcie („nie zależy mi”) to klasyczny pancerz obronny maskujący poczucie zranienia i brak konstruktywnej analizy błędu.',
    keyTakeaway: 'Ignorowanie emocji nie jest odpornością — jest wyparciem uniemożliwiającym wyciągnięcie wniosków.'
  },
  {
    id: 12,
    question: 'Student przed egzaminem odświeża forum uczelniane co 3 minuty i pyta 10 znajomych „jak myślicie, co będzie?”. Jaką strategię wobec niepewności stosuje?',
    topic: 'Strategie Radzenia sobie z Niepewnością',
    sectionRef: 'Sekcja 32.5',
    options: [
      { label: 'A', text: 'Strategię B: kompulsywne szukanie zewnętrznych zapewnień w celu krótkotrwałego obniżenia lęku (reassurance seeking).', isCorrect: true },
      { label: 'B', text: 'Efektywne wykorzystanie pamięci operacyjnej do powtórki materiału.', isCorrect: false },
      { label: 'C', text: 'Radykalną akceptację niepełnej informacji.', isCorrect: false },
      { label: 'D', text: 'Trening głębokiej uważności sensorycznej.', isCorrect: false }
    ],
    explanation: 'Kompulsywne poszukiwanie zapewnień przynosi ulgę na kilkadziesiąt sekund, po czym lęk przed niepewnością powraca z podwojoną siłą.',
    keyTakeaway: 'Szukanie zapewnień karmi lęk przed niewiedzą zamiast budować tolerancję na brak kontroli.'
  },
  {
    id: 13,
    question: 'Zdanie: „Jeśli spóźnię się na ten pociąg, cały wyjazd będzie zniszczony i stracę zaufanie partnera” reprezentuje:',
    topic: 'Zniekształcenia Poznawcze',
    sectionRef: 'Sekcja 32.7',
    options: [
      { label: 'A', text: 'Katastrofizację i myślenie czarno-białe (polaryzacyjne) łączące drobne opóźnienie z moralną klęską relacji.', isCorrect: true },
      { label: 'B', text: 'Obiektywny opis rzeczywistości fizycznej.', isCorrect: false },
      { label: 'C', text: 'Protokół zarządzania kryzysowego.', isCorrect: false },
      { label: 'D', text: 'Zdrową asertywność komunikacyjną.', isCorrect: false }
    ],
    explanation: 'Zdarzenie (spóźnienie pociągu) zostaje zniekształcone w ciąg katastroficznych hipotez o zniszczeniu całego wyjazdu i utracie więzi.',
    keyTakeaway: 'Oddziel fakt (spóźnienie) od łańcucha lękowych hipotez.'
  },
  {
    id: 14,
    question: 'Przedsiębiorca zauważa spadek sprzedaży o 40% po wejściu nowego konkurenta. Zwiększa budżet na tę samą, nieskuteczną ulotkową kampanię reklamową. Jaki błąd popełnia?',
    topic: 'Kiedy Plan Przestaje Działać',
    sectionRef: 'Sekcja 32.10',
    options: [
      { label: 'A', text: 'Fiksację na metodzie i eskalację zaangażowania (kurczowe trzymanie się planu wbrew faktom rynkowym).', isCorrect: true },
      { label: 'B', text: 'Modelową adaptację zwinną (Agile pivot).', isCorrect: false },
      { label: 'C', text: 'Trening akceptacji stoickiej.', isCorrect: false },
      { label: 'D', text: 'Prawidłowe hamowanie odruchu paniki.', isCorrect: false }
    ],
    explanation: 'Powtarzanie tej samej nieskutecznej czynności przy oczekiwaniu innych rezultatów to eskalacja zaangażowania wywołana niechęcią do przyznania się do konieczności zmiany narzędzia.',
    keyTakeaway: 'Gdy koń padł — zsiądź, zamiast kupować mu droższe siodło.'
  },
  {
    id: 15,
    question: 'Kamil przygotowywał się do maratonu przez 6 miesięcy. Dwa tygodnie przed startem doznaje kontuzji kolana. Płacze, a następnie siada i układa plan rehabilitacji oraz zapisuje się na wolontariat na trasie biegu. Co reprezentuje ta postawa?',
    topic: 'Praktyczna Odporność i Adaptacja',
    sectionRef: 'Sekcja 32.1 & 32.16',
    options: [
      { label: 'A', text: 'Prawdziwą odporność: przeżycie naturalnego smutku, uznanie faktów, zmianę strategii i realizację wartości (sport, wspólnota) w nowej formie.', isCorrect: true },
      { label: 'B', text: 'Tłumienie emocji i rezygnację z marzeń sportowych.', isCorrect: false },
      { label: 'C', text: 'Sztywność i brak szacunku do własnego organizmu.', isCorrect: false },
      { label: 'D', text: 'Pasywną bezradność wyuczoną.', isCorrect: false }
    ],
    explanation: 'Kamil pozwolił sobie na afekt (płacz), nie zakłamywał rzeczywistości medycznej, odkleił cel nadrzędny od sztywnej formy startu i zaadaptował swoje zaangażowanie.',
    keyTakeaway: 'Odporność pozwala płakać po stracie, a potem z czystym wzrokiem szukać nowego ruchu.'
  },
  {
    id: 16,
    question: 'Autorka książki otrzymała odrzucenie manuskryptu od wydawnictwa z uwagą: „Rozdział 4 jest za długi i niejasny”. Autorka myśli: „Jestem beztalenciem, rzucam pisanie”. Co pomieszała autorka?',
    topic: 'Wynik vs Tożsamość vs Informacja',
    sectionRef: 'Sekcja 32.6',
    options: [
      { label: 'A', text: 'Pomieszała informację o strukturze tekstu (fakt roboczy) z globalną oceną własnej wartości jako człowieka (tożsamość).', isCorrect: true },
      { label: 'B', text: 'Prawidłowo zinterpretowała obiektywny wyrok rynku literackiego.', isCorrect: false },
      { label: 'C', text: 'Zastosowała protokół redukcji stresu.', isCorrect: false },
      { label: 'D', text: 'Skorzystała ze wsparcia społecznego recenzenta.', isCorrect: false }
    ],
    explanation: 'Krytyka dotyczyła konkretnego fragmentu tekstu (części roboczej), a została przez schemat wstydowy rozciągnięta na całą tożsamość autorki.',
    keyTakeaway: 'Twój roboczy tekst lub kod to nie Twoja wartość jako istoty ludzkiej.'
  },
  {
    id: 17,
    question: 'Która z poniższych sytuacji ilustruje właściwe użycie Mapy Kontroli (Kontrola / Wpływ / Brak Kontroli)?',
    topic: 'Trzy Strefy Wpływu w Adaptacji',
    sectionRef: 'Sekcja 32.17',
    options: [
      { label: 'A', text: 'Kandydat na rozmowie o pracę skupia się na merytorycznym przygotowaniu i spokoju głosu (kontrola), życzliwym kontakcie z rekruterem (wpływ), a wynik decyzji zarządu traktuje jako strefę braku kontroli.', isCorrect: true },
      { label: 'B', text: 'Kandydat próbuje zahipnotyzować rekrutera, aby zmusić go do podpisania umowy na miejscu.', isCorrect: false },
      { label: 'C', text: 'Kandydat nie przygotowuje się wcale, uznając, że „i tak wszystko zależy od układów”.', isCorrect: false },
      { label: 'D', text: 'Kandydat po rozmowie pisze 20 maili z żądaniem natychmiastowej odpowiedzi w nocy.', isCorrect: false }
    ],
    explanation: 'Maksymalizacja energii na jakość własnego wykonania przy zrzuceniu ciężaru kontrolowania cudzych głów to esencja stoickiej i współczesnej adaptacji decyzyjnej.',
    keyTakeaway: 'Zainwestuj 100% energii w jakość swojego rzutu; toru lotu kości w powietrzu już nie kontrolujesz.'
  },
  {
    id: 18,
    question: 'Co dzieje się, gdy menedżer w obliczu nagłego kryzysu w zespole zamyka się sam w gabinecie na 14 godzin, odmawiając jakiejkolwiek pomocy z zewnątrz?',
    topic: 'Mit Samotnego Bohatera i Odporność Społeczna',
    sectionRef: 'Sekcja 32.14',
    options: [
      { label: 'A', text: 'Ulega destrukcyjnemu mitowi „samowystarczalności”, doprowadzając do przeciążenia własnych funkcji wykonawczych i izolacji zasobów zespołu.', isCorrect: true },
      { label: 'B', text: 'Buduje wzorowy autorytet niezłomnego lidera.', isCorrect: false },
      { label: 'C', text: 'Optymalizuje przepływ informacji w organizacji.', isCorrect: false },
      { label: 'D', text: 'Zwiększa odporność neurobiologiczną swoich podwładnych.', isCorrect: false }
    ],
    explanation: 'Izolacja w kryzysie drastycznie zawęża pole uwagi (tunnel vision) i uniemożliwia podział obciążenia poznawczego, przyspieszając błędy decyzyjne.',
    keyTakeaway: 'Proszenie o dane i pomoc w kryzysie to akt inteligencji operacyjnej, a nie słabość.'
  },
  {
    id: 19,
    question: 'Jaką rolę pełni protokół „Zatrzymaj się i Oddziel Fakty od Interpretacji” bezpośrednio po wystąpieniu błędu?',
    topic: 'Protokół Reagowania na Błąd',
    sectionRef: 'Sekcja 32.12',
    options: [
      { label: 'A', text: 'Hamuje automatyczną pętlę paniki w ciele migdałowatym i przywraca sterowanie grzbietowo-bocznej korze przedczołowej (dlPFC).', isCorrect: true },
      { label: 'B', text: 'Pozwala szybko znaleźć winnego w zespole i uniknąć kary.', isCorrect: false },
      { label: 'C', text: 'Służy do zapomnienia o popełnionym błędzie.', isCorrect: false },
      { label: 'D', text: 'Zastępuje konieczność naprawy szkód.', isCorrect: false }
    ],
    explanation: 'Zatrzymanie fizyczne i językowe nazwanie surowych faktów wygasza falę katecholaminową i zapobiega katastroficznemu zniekształceniu danych.',
    keyTakeaway: 'Najpierw nazwij fakty surowym językiem kamery wideo — interpretację odłóż na później.'
  },
  {
    id: 20,
    question: 'W jaki sposób technika „Trzech Scenariuszy” (Najgorszy, Najbardziej Prawdopodobny, Pozytywny) redukuje lęk antycypacyjny?',
    topic: 'Technika Trzech Scenariuszy',
    sectionRef: 'Sekcja 32.7',
    options: [
      { label: 'A', text: 'Przekształca amorficzny lęk w konkretne warianty operacyjne, demaskując niskie prawdopodobieństwo katastrofy i tworząc plany działania dla każdego wariantu.', isCorrect: true },
      { label: 'B', text: 'Gwarantuje, że wydarzy się wyłącznie scenariusz pozytywny.', isCorrect: false },
      { label: 'C', text: 'Uczy człowieka, jak nie myśleć o przyszłości w ogóle.', isCorrect: false },
      { label: 'D', text: 'Zmusza umysł do bezwzględnego optymizmu.', isCorrect: false }
    ],
    explanation: 'Gdy mózg zobaczy konkretny plan ratunkowy nawet dla najgorszego wariantu, poziom zagrożenia spada z poziomu alarmowego do zadaniowego.',
    keyTakeaway: 'Nazwany najgorszy potwór przestaje paraliżować, gdy masz na niego procedurę w trzech krokach.'
  }
];

export const chapterThirtyTwoCaseStudyKamil: CaseStudy = {
  id: 'cs-ch32-kamil-plan-rozsypany',
  title: 'Studium Przypadku: Plan, który się rozsypał — Kamil i Anatomia Adaptacji',
  subtitle: 'Szesnaście etapów dekonstrukcji iluzji idealnego planu, kryzys załamania i budowa elastyczności operacyjnej',
  protagonist: 'Kamil, 22 lata, student informatyki i młody twórca startupu edukacyjnego',
  context: 'Kamil przez 10 miesięcy budował aplikację do nauki języków obcych. Miał precyzyjnie rozpisany harmonogram: data premiery, kampania marketingowa, pozyskanie 5000 użytkowników w pierwszy miesiąc oraz inwestor gotowy wyłożyć kapitał przy spełnieniu tych wskaźników. Kamil poświęcił na to oszczędności, noce i relacje z bliskimi. W dniu premiery kluczowy serwer odmówił posłuszeństwa, sklep z aplikacjami zablokował aktualizację z powodu zmiany regulaminu, a główny partner marketingowy wycofał się bez ostrzeżenia. Plan Kamila runął w 72 godziny.',
  story: [
    'ETAP I — WIELKI PLAN: Kamil traktował swój harmonogram jak matematyczny pewnik. W jego przekonaniu wystarczyło wykonać kroki 1 do 100, aby sukces nastąpił z konieczności logicznej. Wszelkie uwagi o ryzyku traktował jako brak wiary i czarnowidztwo.',
    'ETAP II — ZASOBY NA KRAWĘDZI: Na 3 tygodnie przed premierą Kamil spał po 4 godziny na dobę, pił 5 kaw dziennie i zrezygnował ze spacerów. Zasoby poznawcze jego kory przedczołowej były dramatycznie wyczerpane.',
    'ETAP III — PIERWSZY WSTRZĄS (Dzień premiery): O godzinie 09:00 rano serwer bazodanowy ulega awarii pod wpływem niespodziewanego błędu synchronizacji. Zamiast 5000 rejestracji pojawia się 200 maili z pretensjami o niedziałający link.',
    'ETAP IV — IGNOROWANIE I WYPARCIE: Kamil przez 12 godzin próbuje na oślep „dopychać kod”, nie informując użytkowników o problemie technicznym. Wmawia sobie: „Za godzinę to naprawię i nikt nie zauważy”.',
    'ETAP V — DRUGI CIOS: Wieczorem przychodzi e-mail od Apple: aktualizacja aplikacji została odrzucona ze względu na naruszenie nowej klauzuli prywatności wprowadzonej 48 godzin wcześniej. Czas oczekiwania na ponowną weryfikację: minimum 7 dni.',
    'ETAP VI — NARASTAJĄCA PANIKA: Tętno 130 bpm, suchość w ustach, drżenie rąk. Kamil nie jest w stanie czytać dokumentacji technicznej — tekst zlewa się w plamy.',
    'ETAP VII — TRZECI CIOS: Partner marketingowy pisze krótko: „Skoro aplikacja nie działa, anulujemy naszą wspólną akcję w social mediach”.',
    'ETAP VIII — ZAŁAMANIE I INTERPRETACJA TOŻSAMOŚCIOWA: Kamil kładzie się na podłodze w pokoju. Myśli: „Jestem skończonym frajerem. Zmarnowałem rok życia, zawiodłem wszystkich, nie nadaję się do niczego. Cały mój wysiłek był bezwartościowy”.',
    'ETAP IX — MOMENT ZATRZYMANIA: Przyjaciel Tomasz przychodzi do mieszkania Kamila, odcina go od komputera, podaje szklankę wody z elektrolitami i zmusza do wyjścia na 40-minutowy spacer w milczeniu.',
    'ETAP X — ODDZIELENIE FAKTÓW OD INTERPRETACJI: Następnego dnia rano Tomasz siada z Kamilem przy tablicy i rozrysowuje dwie kolumny. Kolumna Lewa (Fakty): 1. Kod bazy ma błąd w linii 240. 2. Aplikacja czeka na review 7 dni. 3. Partner anulował kampanię. Kolumna Prawa (Interpretacje): „Jestem zerem”, „Nigdy nic nie osiągnę”. Kamil po raz pierwszy widzi różnicę.',
    'ETAP XI — ROZDZIELENIE CELU I STRATEGII: Cel nadrzędny Kamila brzmiał: „Pomagać ludziom w skutecznej nauce języków i zbudować rentowny produkt”. Pierwotna strategia (wielka premiera z pompą) upadła. Czy cel przestał być ważny? Nie.',
    'ETAP XII — TWORZENIE PLANU B I C: Zamiast czekać biernie na weryfikację sklepu, Kamil uruchamia prostą wersję webową dla 50 pierwszych testerów. Pisze szczery, przezroczysty komunikat do osób, które pobrały aplikację: „Popełniliśmy błąd techniczny, przepraszamy. Oto co robimy, by go naprawić”.',
    'ETAP XIII — INFORMACJA ZWROTNA Z RYNKU: Reakcja użytkowników zaskakuje Kamila. Zamiast hejtu pojawiają się słowa wsparcia: „Fajnie, że piszecie prawdę, czekamy na poprawkę!”. 40 osób testuje wersję webową i zgłasza 12 cennych uwag, których Kamil nie zauważył przez 10 miesięcy.',
    'ETAP XIV — KOLEJNA PRZESZKODA: Po 5 dniach okazuje się, że naprawa bazy wymaga przepisania modułu płatności, co opóźni start o kolejne 2 tygodnie. Kamil odczuwa ukłucie złości, ale nie wpada już w panikę — włącza procedurę korekty.',
    'ETAP XV — KONSEKWENCJE PO 4 MIESIĄCACH: Aplikacja rusza bez fajerwerków, ale ze stabilną architekturą i dopracowanym interfejsem. Kamil pozyskuje pierwszych 1200 płacących użytkowników organicznie. Inwestor wraca do rozmów, doceniając sposób, w jaki zespół poradził sobie z kryzysem.',
    'ETAP XVI — LEKCJA TOŻSAMOŚCIOWA: Kamil mówi: „Dawniej sądziłem, że silny człowiek to ten, którego plan nigdy się nie psuje. Dziś wiem, że dojrzały człowiek to ten, który potrafi spokojnie i mądrze posprzątać po wybuchu pierwszego planu”.'
  ],
  dialogue: [
    { speaker: 'Kamil (faza paniki)', text: 'Wszystko skończone! Rok pracy poszedł do kosza! Znowu udowodniłem, że jestem beznadziejny!', subtext: 'Katastrofizacja, myślenie tunelowe, utożsamienie problemu technicznego z własną wartością.' },
    { speaker: 'Tomasz (przyjaciel)', text: 'Kamil, zwolnij. Kod ma błąd, a Apple dało ci tydzień opóźnienia. To są usterki techniczne, a nie koniec twojego życia. Czy ktoś umarł?', subtext: 'Kotwiczenie w rzeczywistości, przerwanie pętli katastroficznej.' },
    { speaker: 'Kamil (faza oporu)', text: 'Ale inwestor nie da mi kasy! Cały mój harmonogram szlag trafił!', subtext: 'Fiksacja na sztywnym planie i lęk przed utratą twarzy.' },
    { speaker: 'Tomasz', text: 'Harmonogram to tylko hipoteza na papierze. Rzeczywistość dała ci informację zwrotną. Pytanie brzmi: co jest twoim następnym najmniejszym logicznym ruchem?', subtext: 'Przekierowanie uwagi z ruminacji na sprawczość operacyjną.' },
    { speaker: 'Kamil (faza adaptacji)', text: 'Dobra... Najpierw naprawię linię 240 w bazie, wyślę patcha do Apple, a do zapisanych osób wyślę maila z przeprosinami i dostępem do wersji webowej.', subtext: 'Przejście od bezradności do ustrukturyzowanego działania adaptacyjnego.' }
  ],
  decisionTaken: 'Zatrzymanie paniki, oddzielenie faktu awarii od poczucia tożsamości, przezroczysta komunikacja z użytkownikami i przejście z modelu „wielkiej premiery” na model iteracyjnego wdrażania produktu (Plan B).',
  whatProtagonistSaw: 'Świat czarno-biały: albo perfekcyjna premiera i triumf, albo awaria techniczna oznaczająca dożywotnią kompromitację i bezwartościowość.',
  whatWasMissed: 'Że w złożonych systemach zakłócenie jest regułą, a nie wyjątkiem; odporność startupu i człowieka mierzy się szybkością wyciągania wniosków z awarii, a nie brakiem usterek.',
  psychologicalAnalysis: {
    coreMechanism: 'Przejście od sztywności poznawczo-behawioralnej (Cognitive Inflexibility) i perfekcjonizmu lękowego do elastyczności adaptacyjnej opartej na pętli zwrotnej (Feedback Loop Calibration).',
    cognitiveBiases: [
      { name: 'Iluzja Kontroli (Illusion of Control)', description: 'Przekonanie, że szczegółowy harmonogram w Excelu gwarantuje posłuszeństwo serwerów, korporacji i ludzi.', impact: 'Szok i bezradność w momencie pierwszego zakłócenia.' },
      { name: 'Myślenie Wszystko Albo Nic (All-or-Nothing Thinking)', description: 'Uznanie, że tygodniowe opóźnienie oznacza bezwzględną klęskę całego projektu.', impact: 'Paraliż decyzyjny i chęć porzucenia pracy.' }
    ],
    defenseMechanisms: [
      { name: 'Wyparcie i Przemęczenie Manipulacyjne', explanation: 'Próba bezmyślnego klepania kodu przez 20h bez snu w nadziei, że problem sam zniknie bez przyznania się do usterki.' }
    ],
    emotionalDynamic: 'Od euforycznego pobudzenia przez ostry lęk paniczny i bezradność depresyjną, aż po ugruntowany spokój zadaniowy i pokorę wobec zmienności świata.'
  },
  decisionProcessAnalysis: {
    trigger: 'Potrójna awaria w dniu premiery (serwer, blokada Apple, rezygnacja partnera).',
    attentionFocus: 'Przeniesienie uwagi z samobiczowania („jestem zerem”) na surowe fakty w kodzie i relacjach z użytkownikami.',
    interpretation: '„Awaria to błąd systemu, który można zdiagnozować i usunąć, a nie dowód na moją nieprzydatność”.',
    emotion: 'Zredukowanie przerażenia do poziomu konstruktywnego skupienia.',
    impulse: 'Skasować repozytorium, wyłączyć telefon i uciec z miasta.',
    action: 'Audyt błędu, szczery newsletter, uruchomienie wersji webowej i iteracyjna naprawa.',
    consequence: 'Uratowanie zaufania użytkowników, naprawa bazy i zbudowanie trwałego produktu.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Ciało migdałowate i jądro półleżące', role: 'Wyrzut paniki po gwałtownym załamaniu oczekiwanej nagrody dopaminergicznej (ostry ujemny Reward Prediction Error)', activationState: 'Początkowa hiperaktywacja, wygaszona po spacerze i dotlenieniu' },
      { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Przywrócenie kontroli poznawczej, logiczne rozpisanie planu naprawczego i priorytetyzacja zadań', activationState: 'Wysoka aktywność analityczna' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol i Noradrenalina', roleInScenario: 'Skok w fazie kryzysu wywołujący zwężenie pola widzenia; stopniowa normalizacja po odzyskaniu sprawczości mikrokroków.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Dzień 1: Wiadomość o awarii', process: 'Wyrzut katecholamin -> tachykardia -> paraliż wykonawczy.' },
      { timeMs: 'Dzień 2: Spacer i tablica', process: 'Aktywacja układu przywspółczulnego -> powrót elastyczności poznawczej.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Kultura Hustle & Toksycznego Pozytywizmu', description: 'Wmawianie młodym twórcom, że „wystarczy chcieć na 100%”, co czyni każdą losową przeszkodę osobistą winą jednostki.', vulnerabilityExploited: 'Młodzieńczy idealizm i lęk przed przeciętnością.' }
    ],
    counterMeasures: [
      { step: 'Inżynieria Realizmu Operacyjnego', script: '„Każdy złożony system ulega awarii. Sukces polega na posiadaniu procedury redundancji i planu B”.', rationale: 'Chroni przed szokiem poznawczym.' }
    ]
  },
  alternativePath: 'Scenariusz sztywny: Kamil kasuje projekt w poczuciu wstydu, popada w półroczną apatię i rezygnuje z programowania. Scenariusz adaptacyjny: Kamil wykorzystuje błędy jako darmowe testy penetracyjne, udoskonala produkt i staje się dojrzałym liderem technicznym.',
  readerQuestion: 'Przypomnij sobie sytuację, w której Twój idealny plan legł w gruzach. Czy zareagowałeś jak Kamil w Etapie VIII (utożsamienie z porażką), czy udało Ci się przejść do Etapu X (oddzielenie faktów od interpretacji)?',
  keyTakeaway: 'Nie kontrolujesz tego, czy w Twoim projekcie wybuchnie pożar. Kontrolujesz wyłącznie to, czy rzucisz się w płomienie z krzykiem, czy chwycisz za gaśnicę.'
};

export const chapterThirtyTwoCaseStudyNatalia: CaseStudy = {
  id: 'cs-ch32-natalia-kontrola-wyniku',
  title: 'Studium Przypadku: Nie mogę kontrolować wyniku — Natalia i Stoicka Sztuka Działania',
  subtitle: 'Konfrontacja z zewnętrzną losowością, praca z niepewnością awansu i wolność od obsesji rezultatu',
  protagonist: 'Natalia, 31 lat, senior project manager w międzynarodowej agencji doradczej',
  context: 'Natalia od 2 lat ubiega się o stanowisko dyrektora operacyjnego. Spełniła wszystkie mierzalne KPI, zrealizowała 4 trudne projekty przed terminem i zyskała uznanie klientów. Decyzja o awansie zależy jednak od 5-osobowego komitetu w centrali w Zurychu, gdzie trwają zakulisowe tarcia polityczne, fuzja z innym holdingiem i nieformalne przepychanki frakcyjne. Natalia popada w obsesję: analizuje każdy gest dyrektorów, nie śpi po nocach, próbuje odgadnąć nastroje decydentów i czuje, że jej poczucie własnej wartości wisi na włosku.',
  story: [
    'ETAP I — PUŁAPKA KONTROLI WYNIKU: Natalia żyła w przekonaniu, że jeśli będzie pracować wystarczająco ciężko i przewidzi każdy możliwy ruch zarządu, „wymusi” na nich decyzję o awansie. Utożsamiła awans z dowodem na to, że jest wartościową kobietą.',
    'ETAP II — OBSESJA ANTYCYPACYJNA: Sprawdzała pocztę o 23:00 i 05:00 rano. Każdy lakoniczny e-mail od członka zarządu interpretowała jako sygnał zbliżającej się katastrofy: „Napisał Pozdrawiam zamiast Pozdrawiam serdecznie — na pewno mnie odrzucą”.',
    'ETAP III — WYCZERPANIE SOMATYCZNE: Bóle migrenowe, rozdrażnienie w relacji z mężem, brak zdolności do cieszenia się wolnym weekendem. Niepewność pożerała całą jej energię życiową.',
    'ETAP IV — INTERWENCJA: Sesja mentoringowa ze starszym partnerem firmy, który zauważył jej wypalenie. Zadaje jej jedno proste pytanie: „Natalio, ile procent tej decyzji zależy bezpośrednio od twoich dzisiejszych kompetencji, a ile od wojny frakcyjnej między Frankiem a Hansem w Zurychu?”.',
    'ETAP V — ROZPISANIE TRZECH KRĘGÓW: Natalia wzięła czystą kartkę i podzieliła sytuację na trzy strefy: 1. STREFA KONTROLI PEŁNEJ: Moje przygotowanie merytoryczne, ton mojej wypowiedzi, rzetelność raportów, mój sen i zdrowie psychiczne. 2. STREFA WPŁYWU: Jasna argumentacja korzyści dla firmy, kulturalna relacja z przełożonym. 3. STREFA BRAKU KONTROLI: Układy w Zurychu, budżet holdingu, sympatie polityczne zarządu, stan globalnej gospodarki.',
    'ETAP VI — ZWROT UWAGI: Natalia podjęła świadomą decyzję o radykalnym wycofaniu energii ze Strefy Braku Kontroli. Zamiast analizować plotki, skupiła się w 100% na doskonałym przygotowaniu prezentacji strategicznej.',
    'ETAP VII — DZIEŃ DECYZJI: Podczas posiedzenia komitetu fuzja holdingu doprowadziła do zamrożenia wszystkich nowych nominacji dyrektorskich w całym regionie CEE. Nikt nie dostał awansu — stanowisko zostało zlikwidowane.',
    'ETAP VIII — REAKCJA ADAPTACYJNA: Dawna Natalia doznałaby załamania nerwowego. Nowa Natalia, dzięki rozdzieleniu kontroli, pomyślała: „Zrobiłam wszystko, co leżało w mojej mocy na najwyższym poziomie. Fakt zamrożenia etatów to element makroekonomiczny poza moim wpływem. Moje kompetencje są nienaruszone”. Po 3 tygodniach, dysponując świetnym portfolio i spokojem, otrzymała ofertę dyrektorską od konkurencyjnej firmy z 40% wyższym wynagrodzeniem.'
  ],
  dialogue: [
    { speaker: 'Natalia (dawna postawa)', text: 'Muszę zrobić coś jeszcze! Może wyślę im dodatkową analizę o północy? Jeśli nie dostanę tego stanowiska, moje całe 5 lat w tej firmie pójdzie na marne!', subtext: 'Lękowa próba kontrolowania strefy zewnętrznej, iluzja sprawczości przez nadmierny wysiłek.' },
    { speaker: 'Mentor', text: 'Natalio, trawa nie rośnie szybciej, gdy się za nią ciągnie. Zrobiłaś znakomitą robotę. Reszta to ruletka korporacyjna. Jeśli wygrasz — świetnie. Jeśli przegrasz z powodu polityki — twoja wartość nie spada ani o grosz.', subtext: 'Dojrzała dekonstrukcja locus of control.' },
    { speaker: 'Natalia (po zmianie perspektywy)', text: 'Mój spokój nie jest na sprzedaż za żaden tytuł na wizytówce. Skupiam się na rzemiośle. Wynik należy do świata.', subtext: 'Odzyskanie suwerenności wewnętrznej i wolności od wyniku.' }
  ],
  decisionTaken: 'Przestanie kontrolowania decyzji zarządu, skupienie się na jakości wykonania własnych zadań, ochrona zdrowia psychicznego i otwarcie na alternatywne ścieżki rynkowe.',
  whatProtagonistSaw: 'Że brak awansu byłby osobistą klęską potwierdzającą jej niewystarczalność.',
  whatWasMissed: 'Że decyzje korporacyjne są w 70% wypadkową czynników losowych i politycznych, a uzależnianie od nich szacunku do samej siebie jest dobrowolnym oddaniem wolności.',
  psychologicalAnalysis: {
    coreMechanism: 'Dychotomia Kontroli (Dichotomy of Control) w ujęciu Epikteta połączona z teorią atrybucji przyczynowej (Weiner) i redukcją ruminacji lękowych.',
    cognitiveBiases: [
      { name: 'Błąd Wyniku (Outcome Bias)', description: 'Ocenianie jakości własnej pracy wyłącznie przez pryzmat tego, czy zarząd przyznał awans, a nie przez realną wartość merytoryczną projektów.', impact: 'Chroniczne poczucie niepewności i lęku.' },
      { name: 'Personalizacja (Personalization)', description: 'Przypisywanie sobie winy za decyzje biznesowe wynikające z globalnej fuzji holdingu.', impact: 'Nieuzasadnione poczucie winy i wstydu.' }
    ],
    defenseMechanisms: [
      { name: 'Kompulsywna Nadkontrola (Over-functioning)', explanation: 'Wysyłanie dziesiątek zbędnych raportów jako magiczny rytuał obniżający lęk przed odmową.' }
    ],
    emotionalDynamic: 'Od wyniszczającej obsesji kontroli i chronicznego stresu do głębokiego spokoju, godności osobistej i odwagi rynkowej.'
  },
  decisionProcessAnalysis: {
    trigger: 'Wielomiesięczne oczekiwanie na decyzję komitetu nominacyjnego.',
    attentionFocus: 'Przekierowanie uwagi z plotek korytarzowych na jakość własnych projektów i higienę snu.',
    interpretation: '„Moje zadanie to dać z siebie maksimum w strefie działania. Wybór zarządu jest poza moją jurysdykcją”.',
    emotion: 'Uspokojenie układu współczulnego, redukcja napięcia w karku i powrót energii.',
    impulse: 'Pisać kolejne maile do członków zarządu w nocy.',
    action: 'Zbudowanie profesjonalnego dossier projektowego i spokojne oczekiwanie z gotowym planem B.',
    consequence: 'Brak załamania po zamrożeniu etatów i błyskawiczne przejście do lepszej firmy.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Przednia kora zakrętu obręczy (ACC) i Wyspa', role: 'Przetwarzanie bólu niepewności i niejednoznaczności społecznej', activationState: 'Uregulowana poprzez racjonalne ramowanie poznawcze' },
      { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Wycena własnej wartości niezależnie od zewnętrznych gratyfikacji korporacyjnych', activationState: 'Wysoka integracja samoświadomości' }
    ],
    neurotransmitters: [
      { name: 'GABA i Serotonina', roleInScenario: 'Wzrost stabilizacji układu hamującego po zaprzestaniu kompulsywnego sprawdzania poczty.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Faza obsesji', process: 'Ciągły mikrowyrzut kortyzolu -> zaburzenia fazy REM -> migreny.' },
      { timeMs: 'Faza dychotomii kontroli', process: 'Normalizacja osi HPA -> głęboki sen regeneracyjny.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Marchewka na kiju i gra niepewnością', description: 'Utrzymywanie kluczowych pracowników w permanentnej niepewności awansu, by wyciskać z nich 150% normy bez dodatkowych kosztów.', vulnerabilityExploited: 'Potrzeba uznania i perfekcjonizm.' }
    ],
    counterMeasures: [
      { step: 'Dekonstrukcja Zależności', script: '„Moja praca ma określoną cenę i jakość. Nie licytuję mojego zdrowia za obietnicę mglistego statusu”.', rationale: 'Przywraca symetrię w relacji pracownik-organizacja.' }
    ]
  },
  alternativePath: 'Scenariusz uwikłany: Natalia czeka kolejne 3 lata na obietnice zarządu, ląduje na zwolnieniu lekarskim z ciężkim wypaleniem i poczuciem zdrady. Scenariusz suwerenny: Natalia stawia na swoje kompetencje, docenia swoją pracę i znajduje pracodawcę, który szanuje jej profesjonalizm.',
  readerQuestion: 'Gdzie w swoim życiu inwestujesz olbrzymie ilości energii w próbę kontrolowania strefy, która w rzeczywistości zależy od decyzji innych ludzi, pogody lub losu? Co by się stało, gdybyś od dziś zajął się wyłącznie jakością własnego działania?',
  keyTakeaway: 'Nie jesteś odpowiedzialny za to, czy świat nagrodzi Twój wysiłek brawami. Jesteś w 100% odpowiedzialny za to, z jaką uczciwością i kunsztem wykonałeś swoją pracę.'
};

export const chapterThirtyTwoCaseStudyKarolina: CaseStudy = {
  id: 'cs-ch32-karolina-upor-sztywnosc',
  title: 'Studium Przypadku: Kiedy wytrwałość staje się sztywnością — Karolina i Pułapka Ślepego Uporu',
  subtitle: 'Siedemnaście miesięcy powtarzania tej samej nieskutecznej strategii, ignorowanie rynku i odkrycie pivotu',
  protagonist: 'Karolina, 25 lat, graficzka i twórczyni kursu ilustracji cyfrowej',
  context: 'Karolina od 17 miesięcy próbowała sprzedać autorski kurs rysunku na iPadzie. Jej jedyną strategią było wrzucanie 3 rolek dziennie na Instagram z tymi samymi hasztagami i wysyłanie zimnych wiadomości na LinkedIn. Mimo że sprzedaż wynosiła 0–1 sztuk miesięcznie, a jej oszczędności topniały, Karolina powtarzała: „Kluczem jest dyscyplina, muszę po prostu cisnąć mocniej”. Była dumna ze swojej pracowitości, nie zauważając, że myli cnotę wytrwałości ze ślepą fiksacją.',
  story: [
    'ETAP I — KULT WYTRWAŁOŚCI: Karolina wyrosła w przekonaniu, że jedyną przyczyną porażki jest zbyt wczesne poddanie się. Traktowała jakąkolwiek zmianę metody jako dowód słabości i tchórzostwa.',
    'ETAP II — BŁĘDNA PĘTLA: Codziennie od 07:00 do 22:00 montowała wideo. Wynik: spadek wyświetleń, brak konwersji, narastające długi i bezsenność. Każda próba zwrócenia uwagi przez znajomych („Może zmień format albo zaoferuj warsztat na żywo?”) spotykała się z agresywnym oporem: „Nie rozumiecie algorytmu, ja wiem co robię!”.',
    'ETAP III — PRZEŁOM I AUDYT DANYCH: Na spotkaniu z mentorką biznesową Karolina została poproszona o zestawienie twardych liczb: 17 miesięcy pracy, 510 rolek, koszt 14 000 zł, przychód 480 zł. Liczby obaliły hipotezę, że metoda działa.',
    'ETAP IV — ROZPOZNANIE WARTOŚCI A STRATEGII: Mentorka zadała jej pytanie: „Co jest twoim celem nadrzędnym?”. Karolina odpowiedziała: „Uczyć ludzi pięknego rysowania i utrzymać się z twórczości”. Mentorka: „Wspaniale. A dlaczego uważasz, że 30-sekundowe rolki na Instagramie to jedyny sposób na realizację tej wartości?”.',
    'ETAP V — PIVOT TAKTYCZNY: Karolina zredukowała czas na social media o 80%. Zamiast tego zorganizowała 2 bezpłatne warsztaty stacjonarne w lokalnej kawiarni artystycznej dla 12 osób. 8 uczestników zapisało się na jej płatny program mentoringowy na żywo.',
    'ETAP VI — KONSEKWENCJE: W 6 tygodni Karolina zarobiła więcej niż przez 17 miesięcy na Instagramie. Zrozumiała, że elastyczność nie jest zdradą marzeń — jest ich ratunkiem.'
  ],
  dialogue: [
    { speaker: 'Karolina (faza sztywności)', text: 'Muszę wrzucić jeszcze 100 rolek! Każdy influencer mówi, że trzeba być konsekwentnym!', subtext: 'Fiksacja poznawcza i lęk przed przyznaniem się do nieskuteczności obranej taktyki.' },
    { speaker: 'Mentorka', text: 'Karolino, konsekwencja w nieskutecznej metodzie to po prostu uparte marnowanie życia. Zmień narzędzie, nie cel.', subtext: 'Precyzyjna dekonstrukcja błędu fiksacji.' },
    { speaker: 'Karolina (po pivocie)', text: 'Myślałam, że zmiana metody oznacza, że przegrałam. Teraz widzę, że to była jedyna droga do wygranej.', subtext: 'Dojrzała integracja elastyczności adaptacyjnej.' }
  ],
  decisionTaken: 'Porzucenie nieskutecznego kanału dystrybucji (social media organiczne), przejście na model warsztatów bezpośrednich (Plan B) i uwolnienie 80% czasu pracy.',
  whatProtagonistSaw: 'Heroiczną walkę o marzenie, w której jedynym kryterium była ilość wylanego potu.',
  whatWasMissed: 'Że rynek wysyłał jasną informację zwrotną od 15 miesięcy, a ignorowanie danych to arogancja poznawcza, a nie cnota.',
  psychologicalAnalysis: {
    coreMechanism: 'Eskalacja zaangażowania (Escalation of Commitment) napędzana pułapką utopionych kosztów (Sunk Cost Fallacy) i sztywnością poznawczą.',
    cognitiveBiases: [
      { name: 'Pułapka Utopionych Kosztów', description: '„Poświęciłam na to konto półtora roku, więc nie mogę teraz przestać”.', impact: 'Paliwo dla chronicznego długu energetycznego.' },
      { name: 'Błąd Potwierdzenia (Confirmation Bias)', description: 'Szukanie w sieci pojedynczych historii osób, które wybiły się po 1000 rolkach, i ignorowanie 99% pozostałych danych.', impact: 'Utrzymywanie nierealistycznych oczekiwań.' }
    ],
    defenseMechanisms: [
      { name: 'Racjonalizacja Moralna', explanation: 'Nazywanie własnego uporu „niezłomnym charakterem”, by uniknąć konfrontacji z koniecznością zmiany kompetencji.' }
    ],
    emotionalDynamic: 'Od desperacji i zaciętości do ulgi, lekkości i odzyskania radosnej pasji tworzenia.'
  },
  decisionProcessAnalysis: {
    trigger: 'Zderzenie z twardym audytem finansowym na sesji mentoringowej.',
    attentionFocus: 'Przeniesienie uwagi z liczby wyświetleń na realne potrzeby i kontakt z żywym człowiekiem.',
    interpretation: '„Moja wartość artystyczna nie zależy od algorytmu Meta; muszę dotrzeć do ludzi inną ścieżką”.',
    emotion: 'Początkowy wstyd zamieniony w entuzjazm po pierwszych udanych warsztatach.',
    impulse: 'Skasować wszystko i pójść do pracy, której nienawidzi.',
    action: 'Organizacja warsztatów stacjonarnych i przebudowa oferty pod feedback na żywo.',
    consequence: 'Stabilne dochody, zadowoleni uczniowie i powrót poczucia sprawczości.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Grzbietowa część przedniej kory zakrętu obręczy (dACC)', role: 'Monitorowanie konfliktu między wysiłkiem a nagrodą', activationState: 'Wyciszona po przejściu na strategię o wysokim wskaźniku zwrotu' },
      { region: 'Boczna kora oczodołowo-czołowa (lOFC)', role: 'Aktualizacja wartości bodźców i elastyczne przełączanie reguł (Rule Switching)', activationState: 'Wysoka plastyczność poznawcza' }
    ],
    neurotransmitters: [
      { name: 'Dopamina i Endorfiny', roleInScenario: 'Przywrócenie zdrowego wyrzutu dopaminy z realnej relacji z uczniami zamiast głodu lajków.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Okres 17 miesięcy fiksacji', process: 'Chroniczne zmęczenie kory przedczołowej -> sztywność prążkowia.' },
      { timeMs: 'Po pivocie warsztatowym', process: 'Spadek poziomu kortyzolu -> powrót kreatywności.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Mit algorytmicznego sukcesu', description: 'Przekonywanie twórców przez platformy, że wystarczy produkować więcej darmowego contentu, by zdobyć bogactwo.', vulnerabilityExploited: 'Pracowitość i naiwność początkujących twórców.' }
    ],
    counterMeasures: [
      { step: 'Audyt Konwersji Rzeczywistej', script: '„Jeśli metoda nie przynosi efektu po 90 dniach twardych testów, hipoteza jest sfalsyfikowana”.', rationale: 'Wymusza wczesną korektę kursu.' }
    ]
  },
  alternativePath: 'Scenariusz sztywny: Karolina publikuje rolki przez kolejne 2 lata, popada w depresję kliniczną i porzuca rysowanie na zawsze. Scenariusz adaptacyjny: Karolina buduje dochodową szkołę rysunku stacjonarno-online i cieszy się szacunkiem lokalnej społeczności.',
  readerQuestion: 'W jakim obszarze swojego życia powtarzasz tę samą nieskuteczną procedurę, łudząc się, że „tym razem zadziała”? Jak wyglądałby Twój 90-stopniowy pivot narzędziowy?',
  keyTakeaway: 'Wytrwałość w nieskutecznej metodzie to nie cnota — to najdroższa forma ucieczki przed koniecznością nauki nowych umiejętności.'
};

export const chapterThirtyTwoCaseStudyTomasz: CaseStudy = {
  id: 'cs-ch32-tomasz-odpornosc-spoleczna',
  title: 'Studium Przypadku: Silny człowiek, który nie chciał prosić o pomoc — Tomasz i Odporność Społeczna',
  subtitle: 'Kryzys samotnego menedżera, dekonstrukcja pancerza samowystarczalności i potęga koregulacji',
  protagonist: 'Tomasz, 42 lata, dyrektor fabryki produkcyjnej, ojciec dwójki dzieci',
  context: 'Tomasz całe życie opierał swoją tożsamość na byciu „opoką dla wszystkich”. Nigdy nie narzekał, nie prosił o wsparcie i brał na siebie każdy problem firmy i rodziny. Kiedy w fabryce doszło do pożaru magazynu, a równocześnie jego żona zachorowała na zapalenie płuc, Tomasz postanowił rozwiązać wszystko sam. Spał po 2 godziny, nadzorował remont z telefonu, gotował obiady i odmawiał jakiejkolwiek pomocy od brata czy zastępcy. Po 10 dniach zasłabł za kierownicą na parkingu fabryki.',
  story: [
    'ETAP I — SKRYPT „BĄDŹ TWARDY”: Tomasz wyniósł z domu rodzinnego przekonanie, że mężczyzna proszący o pomoc jest ciężarem i okazuje słabość. Nauczył się zaciskać zęby i uśmiechać przez łzy.',
    'ETAP II — PODWÓJNE UDERZENIE: Pożar i choroba żony wygenerowały obciążenie przekraczające możliwości biologiczne jednego człowieka. Zastępca dyrektora oferował przejęcie kontaktów z ubezpieczycielem, a brat żony chciał zająć się dziećmi. Tomasz wszystkim odmówił: „Dzięki, ogarnę to sam, nie chcę wam robić kłopotu”.',
    'ETAP III — ZAWĘŻENIE POLA UWAGI (Tunnel Vision): Pod wpływem skrajnego deficytu snu Tomasz popełnił kardynalny błąd w dokumentacji powypadkowej, narażając zakład na 200 000 zł straty.',
    'ETAP IV — SOMATYCZNY STOP: Zasłabnięcie na parkingu, wezwanie karetki i diagnoza: skrajne wyczerpanie organizmu, arytmia wysiłkowa i odwodnienie.',
    'ETAP V — ROZMOWA GRANICZNA: Żona w szpitalu powiedziała mu: „Tomasz, my nie potrzebujemy w domu niezniszczalnego pomnika. My potrzebujemy żywego męża i ojca. Twoja odmowa przyjęcia pomocy nie jest siłą — jest odbieraniem nam prawa do troski o ciebie”.',
    'ETAP VI — ODPUSZCZENIE I DELEGOWANIE: Tomasz po raz pierwszy w życiu poprosił brata o opiekę nad dziećmi, a zastępcy przekazał pełne pełnomocnictwa w sprawach fabryki. Zobaczył, że świat się nie zawalił — wręcz przeciwnie: zespół poczuł się doceniony i zmobilizowany.',
    'ETAP VII — NOWY MODEL ODPORNOŚCI: Tomasz wrócił do pracy po 2 tygodniach odpoczynku. Wdrożył kulturę transparentnego dzielenia się problemami w zarządzie: „Odporność to nie moja samotna tarcza. Odporność to siła naszej sieci powiązań”.'
  ],
  dialogue: [
    { speaker: 'Zastępca dyrektora', text: 'Tomasz, wyglądasz jak cień. Daj mi te papiery z ubezpieczenia, ja to załatwię z rzeczoznawcą.', subtext: 'Życzliwa oferta wsparcia operacyjnego.' },
    { speaker: 'Tomasz (pancerz obronny)', text: 'Nie ma mowy, muszę mieć nad wszystkim osobisty nadzór. Drobiazgi, poradzę sobie sam.', subtext: 'Lęk przed utratą kontroli i wstyd przed okazaniem zmęczenia.' },
    { speaker: 'Żona (w szpitalu)', text: 'Kochanie, pozwól innym być dla ciebie wsparciem. Samotny dąb łamie się jako pierwszy.', subtext: 'Głęboka walidacja relacyjna i zaproszenie do wrażliwości.' },
    { speaker: 'Tomasz (po przełomie)', text: 'Michał, potrzebuję twojej pomocy przy audycie. Sam tego nie udźwignę w tym tygodniu.', subtext: 'Dojrzała, odważna i asertywna prośba o wsparcie.' }
  ],
  decisionTaken: 'Odrzucenie mitu samowystarczalności, pełne delegowanie odpowiedzialności operacyjnej i przyjęcie pomocy rodziny i zespołu.',
  whatProtagonistSaw: 'Że proszenie o pomoc to kapitulacja i kompromitacja w oczach bliskich.',
  whatWasMissed: 'Że izolowanie się w kryzysie prowadzi do katastrofalnych błędów poznawczych, a ludzie wokół pragną pomóc i czują się odrzuceni naszą odmową.',
  psychologicalAnalysis: {
    coreMechanism: 'Rozbrojenie schematu samopoświęcenia i samowystarczalności lękowej (Early Maladaptive Schemas wg Jeffreya Younga) oraz aktywacja Teorii Bazy Społecznej (Social Baseline Theory).',
    cognitiveBiases: [
      { name: 'Iluzja Przejrzystości i Ciężaru', description: 'Przekonanie, że każda prośba o pomoc jest dla innych nieznośnym ciężarem.', impact: 'Samotna izolacja w obliczu kataklizmu.' },
      { name: 'Personalizacja Odpowiedzialności', description: 'Uznanie, że pożar wywołany zwarciem instalacji był jego osobistą porażką moralną.', impact: 'Niszczące poczucie winy.' }
    ],
    defenseMechanisms: [
      { name: 'Omnipotencja Obronna', explanation: 'Wmawianie sobie nieograniczonej wytrzymałości fizycznej i psychicznej w celu ucieczki przed lękiem przed bezradnością.' }
    ],
    emotionalDynamic: 'Od śmiertelnego napięcia i samotności do ciepła, ulgi i głębokiego zaufania do ludzi.'
  },
  decisionProcessAnalysis: {
    trigger: 'Zasłabnięcie i pobyt w szpitalu po 10 dniach skrajnego przeciążenia.',
    attentionFocus: 'Przekierowanie uwagi z własnego ego („muszę być twardy”) na zdrowie i współpracę.',
    interpretation: '„Proszenie o wsparcie to mądre zarządzanie zasobami całego systemu, a nie dowód mojej ułomności”.',
    emotion: 'Początkowy lęk przed oceną zastąpiony głębokim spokojem i wdzięcznością.',
    impulse: 'Wypisać się ze szpitala na własne żądanie i wrócić do fabryki.',
    action: 'Delegowanie zadań, sen, przyjęcie posiłków od rodziny i odpoczynek.',
    consequence: 'Uratowanie zdrowia, wzmocnienie więzi w rodzinie i podniesienie dojrzałości zespołu w fabryce.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Układ nerwowy błędny brzuszny (Ventral Vagal Complex wg Porgesa)', role: 'Aktywacja stanu bezpieczeństwa i zaangażowania społecznego (Social Engagement System)', activationState: 'Uruchomiony po przełamaniu izolacji' },
      { region: 'Oś podwzgórze-przysadka-nadnercza (HPA)', role: 'Wygaszenie niszczącego wyrzutu kortyzolu po redukcji obciążenia', activationState: 'Powrót do homeostazy' }
    ],
    neurotransmitters: [
      { name: 'Oksytocyna i GABA', roleInScenario: 'Wzrost oksytocyny z bliskiego kontaktu z rodziną działający jak naturalny anksjolityk i kardioprotektor.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Dni 1–10: Izolacja', process: 'Ciągły skurcz naczyń krwionośnych -> tachykardia -> ostra niewydolność.' },
      { timeMs: 'Po przyjęciu pomocy', process: 'Rozszerzenie naczyń -> spadek ciśnienia -> regeneracja mięśnia sercowego.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Toksyczny wzorzec kulturowy „samotnego bohatera”', description: 'Społeczna presja na mężczyzn, by nie okazywali zmęczenia ani słabości pod groźbą utraty szacunku.', vulnerabilityExploited: 'Męska duma i lęk przed wykluczeniem.' }
    ],
    counterMeasures: [
      { step: 'Kultura Współdzielonej Odpowiedzialności', script: '„Człowiek mądry buduje mosty wsparcia, zanim uderzy powódź”.', rationale: 'Ustanawia współzależność jako najwyższą formę siły.' }
    ]
  },
  alternativePath: 'Scenariusz sztywny: Tomasz doznaje zawału serca, fabryka upada z powodu braku przywództwa, a rodzina zostaje z traumą. Scenariusz adaptacyjny: Tomasz staje się mądrym liderem, który potrafi zarówno przewodzić, jak i prosić o pomoc, a fabryka osiąga najlepsze wyniki w historii.',
  readerQuestion: 'Kiedy ostatnio odmówiłeś przyjęcia pomocy tylko po to, by „nie wyjść na słabego” lub „nie robić kłopotu”? Kogo mógłbyś poprosić o małe wsparcie już dzisiaj?',
  keyTakeaway: 'Prawdziwa siła człowieka nie polega na dźwiganiu całego świata na własnych barkach, lecz na umiejętności budowania zespołu, z którym każdy ciężar staje się lekki.'
};

export const chapterThirtyTwoExerciseFactVsPred: SelfExercise = {
  id: 'ex-ch32-fact-vs-prediction',
  title: 'Ćwiczenie Diagnostyczno-Treningowe: Fakt, Interpretacja, Przewidywanie czy Hipoteza?',
  subtitle: 'Trening laboratoryjny oczyszczania percepcji z zanieczyszczeń afektywnych i katastrofizacji',
  objective: 'Wykształcenie natychmiastowego odruchu rozróżniania obiektywnego faktu zmysłowego od narracji umysłu, katastroficznych projekcji i hipotez roboczych.',
  durationMinutes: 25,
  neuroScientificFoundation: 'Aktywacja lewopółkulowej kory przedczołowej i wygaszanie reaktywności ciała migdałowatego poprzez precyzyjne etykietowanie werbalne (Affect Labeling wg Matthew Liebermana).',
  steps: [
    {
      stepNumber: 1,
      title: 'Audyt 15 zdań testowych',
      instruction: 'Przeczytaj każde z poniższych 15 zdań. Zaklasyfikuj je do jednej z 4 kategorii: [F] FAKT (obiektywny zapis wideo/audio), [I] INTERPRETACJA (ocena subiektywna), [P] PRZEWIDYWANIE (projekcja w przyszłość), [H] HIPOTEZA ROBOCZA (testowalne przypuszczenie).',
      promptText: '1. „Szef nie odpowiedział na mojego maila przez 6 godzin”.\n2. „Szef mnie lekceważy i uważa mój projekt za bezwartościowy”.\n3. „Na pewno zwolnią mnie przy najbliższej redukcji etatów”.\n4. „Możliwe, że szef ma dziś napięty grafik spotkań zarządu”.\n5. „Konto bankowe wykazuje stan 450 zł”.\n6. „Jestem finansowym nieudacznikiem”.\n7. „Zbankrutuję i wyląduję na ulicy”.\n8. „Mój obecny miesięczny bilans jest ujemny o 800 zł”.\n9. „Partner powiedział: Nie mam dziś siły rozmawiać”.\n10. „Partner mnie już nie kocha i planuje odejście”.\n11. „Waga łazienkowa wskazuje 84.5 kg”.\n12. „Moja waga wzrosła o 2 kg w stosunku do zeszłego miesiąca, co może wynikać ze zmniejszonej aktywności fizycznej”.\n13. „Nigdy nie schudnę, mam zniszczony metabolizm”.\n14. „Klient zrezygnował z podpisania umowy po 2 tygodniach negocjacji”.\n15. „Wszyscy klienci w tej branży są nielojalni”.',
      placeholder: 'Wpisz swoje klasyfikacje (np. 1-F, 2-I, 3-P, 4-H...)'
    },
    {
      stepNumber: 2,
      title: 'Dekonstrukcja i przepisanie na język faktów',
      instruction: 'Wybierz 3 zdania z grupy INTERPRETACJI lub PRZEWIDYWAŃ i przepisz je tak, aby zawierały wyłącznie surowy fakt oraz testowalną hipotezę działania.',
      promptText: 'Wzór: Zamiast „Zbankrutuję i jestem zerem” -> Fakt: „Stan konta wynosi 450 zł”. Hipoteza: „Jeśli w ciągu 48h wystawię 2 przedmioty na sprzedaż i zredukuję abonamenty, zbilansuję budżet o 350 zł”.',
      placeholder: 'Wpisz swoje 3 przeformułowane zdania...'
    }
  ],
  reflectionQuestions: [
    'O ile procent spada Twoje napięcie somatyczne w ciele, gdy zamieniasz katastroficzne przewidywanie na surowy fakt i małą hipotezę?',
    'Który rodzaj zniekształcenia (samooskarżenie czy przewidywanie czarnej przyszłości) pojawia się u Ciebie najszybciej pod wpływem zmęczenia?'
  ]
};

export const chapterThirtyTwo: Chapter = {
  number: 32,
  volume: 3,
  volumeChapterNumber: 16,
  title: 'Odpowiedzialność, Odporność, Adaptacja i Praca z Niepewnością',
  subtitle: 'Jak działać, gdy życie nie przebiega zgodnie z planem',
  leadParagraph: 'Sprawczość pyta: „Co mogę zrobić?”. Adaptacja pyta: „Co zrobię, kiedy rzeczywistość zmieni warunki gry?”. Dojrzałość psychologiczna człowieka nie wyraża się w tworzeniu perfekcyjnych, niewzruszonych planów, lecz w zdolności do zachowania spokoju, wierności wartościom i precyzji działania w momencie, gdy każdy pierwotny plan legnie w gruzach. Ten rozdział to kompletny system inżynierii odporności, nawigacji po niepewności i powrotu do sprawczości po każdym życiowym zakłóceniu.',
  totalEstimatedPages: 58,
  sections: [
    // CZĘŚĆ I — ODPORNOŚĆ (32.1 - 32.2)
    {
      id: 'sec-32-1',
      pageNumber: 1490,
      sectionNumber: '32.1',
      title: 'Czym jest odporność psychiczna? Proces, zasoby i powrót do równowagi',
      category: 'teoria',
      readingTimeMinutes: 22,
      quote: {
        text: 'Odporność psychiczna (resilience) nie jest rzadką, heroiczną cechą nielicznych wybrańców. To powszechna, głęboko zakorzeniona w ludzkiej biologii siła adaptacyjna, którą nazywam „zwyczajną magią” (ordinary magic). Wyłania się ona z normalnego działania podstawowych systemów ochronnych człowieka: zdrowego mózgu, wspierających relacji i zdolności do elastycznego rozwiązywania problemów.',
        author: 'Prof. Ann S. Masten',
        source: 'University of Minnesota, „Ordinary Magic: Resilience in Development”, American Psychologist, 2001'
      },
      paragraphs: [
        'W potocznym dyskursie odporność psychiczna (resilience) bywa błędnie utożsamiana z granitowym pancerzem — niewzruszonością, brakiem emocji, twardością czy bezwzględnym parciem naprzód pomimo bólu. To szkodliwy mit, który w praktyce prowadzi do wypalenia, somatyzacji i nagłych załamań nerwowych.',
        'W ujęciu współczesnej neuronauki i psychologii klinicznej odporność nie jest statyczną „cechą charakteru”, którą człowiek albo posiada w genach, albo nie. Odporność jest DYNAMICZNYM PROCESEM psychobiologicznym. Oznacza zdolność systemu ludzkiego do absorbowania wstrząsu, doświadczenia naturalnego cierpienia, a następnie stopniowej mobilizacji zasobów poznawczych, behawioralnych i relacyjnych w celu powrotu do optymalnego funkcjonowania.',
        'Odporność nie oznacza braku stresu. Wręcz przeciwnie: osoba wysoce odporna odczuwa lęk, smutek i złość dokładnie tak samo jak każdy inny człowiek. Różnica polega na tym, że nie grzęźnie w tych stanach w nieskończoność i nie pozwala, by afekt przejął całkowitą kontrolę nad sterem decyzji.',
        'Kluczowymi filarami procesu odporności są: 1. Dostępność zasobów biologicznych (sen, odżywienie, układ nerwowy); 2. Elastyczność poznawcza (zdolność do zmiany interpretacji zdarzenia); 3. Bufor relacyjny (posiadanie choć jednej bezpiecznej więzi); 4. Czas — reintegracja po wstrząsie wymaga fizjologicznego czasu na wygaszenie osi HPA.'
      ],
      subsections: [
        {
          id: 'sub-32-1-1',
          title: 'Analiza słów prof. Ann Masten: Demistyfikacja Heroizmu na Rzecz Biologicznej Adaptacji',
          content: [
            'Koncepcja „zwyczajnej magii” prof. Masten to kopernikański przewrót w badaniach nad traumą i stresem. Zamiast szukać nadprzyrodzonej siły woli, Masten skierowała uwagę nauki na podstawowe regulatory homeostazy. Gdy mózg ma zapewnione poczucie bezpieczeństwa fizycznego i choć jedną stabilną więź społeczną, naturalne mechanizmy neuroplastyczności same dążą do samonaprawy.',
            'Zrozumienie tej zasady uwalnia człowieka z toksycznego przymusu bycia „niezniszczalnym”. Po doznaniu kryzysu nie musisz natychmiast triumfować — Twoim pierwszym zadaniem jest zabezpieczenie biologii: sen, nawodnienie, ograniczenie bodźców i pozwolenie układowi przywspółczulnemu na wygaszenie kaskady kortyzolowej.'
          ]
        },
        {
          id: 'sub-32-1-2',
          title: 'Czym odporność NIE JEST:',
          content: [
            '• NIE JEST brakiem emocji ani chłodem emocjonalnym.',
            '• NIE JEST nakazem natychmiastowej produktywności po stracie.',
            '• NIE JEST ignorowaniem realnych problemów pod maską toksycznego optymizmu.',
            '• NIE JEST samotną walką bez proszenia o wsparcie.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-32-1-1',
          type: 'insight',
          title: 'Wierzba i Dąb: Paradoks Giętkości',
          content: 'Dąb opiera się wichurze całą swoją sztywną masą — i przy potężnym huraganie zostaje wyrwany z korzeniami. Wierzba ugina się niemal do samej ziemi pod podmuchem wiatru, pozwalając energii żywiołu przepłynąć przez swoje gałęzie, by po przejściu burzy powrócić do pionu. Odporność to elastyczność wierzby, a nie sztywność dębu.'
        }
      ],
      interactiveWindow: {
        id: 'win-32-1',
        title: 'Diagnoza Reakcji Kryzysowej: Sztywny Dąb czy Elastyczna Wierzba?',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Jakub (38 lat) po nagłej likwidacji jego działu w korporacji zaciska zęby, mówi żonie: „Nic się nie stało, jestem twardy”, śpi po 3 godziny w nocy i rozsyła po 50 CV dziennie, ignorując narastający ból w klatce piersiowej.',
        steps: [
          {
            stepNumber: 1,
            title: 'Ocena postawy Jakuba w świetle badań prof. Ann Masten',
            description: 'Czy zachowanie Jakuba jest przejawem odporności psychicznej?',
            options: [
              {
                text: 'Nie, to sztywność adaptacyjna i tłumienie afektu (postawa dębu), która grozi załamaniem kardiologicznym i wypaleniem zasobów poznawczych',
                feedback: 'Precyzyjna ocena: Jakub myli odporność z negacją bólu. Brak snu i brak autentycznego kontaktu z emocjami uniemożliwia rzetelną aktualizację strategii.',
                isOptimal: true
              },
              {
                text: 'Tak, to wzorowa postawa męskiego lidera nieokazującego słabości',
                feedback: 'Szkodliwy mit kulturowy prowadzący prosto na oddział kardiologii.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'W jakich trudnych sytuacjach udajesz „niewzruszony dąb”, zamiast pozwolić sobie na elastyczność i regenerację wierzby?'
      }
    },
    {
      id: 'sec-32-2',
      pageNumber: 1498,
      sectionNumber: '32.2',
      title: 'Odporność ≠ Niewrażliwość: Pułapki tłumienia, unikania i sztywności',
      category: 'teoria',
      readingTimeMinutes: 22,
      quote: {
        text: 'Tłumienie ekspresji emocjonalnej (suppression) jest strategią o ogromnym koszcie fizjologicznym. Kiedy zmuszasz się do kamiennej twarzy w obliczu cierpienia lub zagrożenia, twoje ciało migdałowate nadal wyładowuje się z pełną mocą, ciśnienie krwi gwałtownie rośnie, a zasoby kory przedczołowej ulegają wyczerpaniu. Prawdziwa adaptacja wymaga przewartościowania poznawczego (reappraisal), a nie maskowania prawdy.',
        author: 'Prof. James J. Gross',
        source: 'Stanford University, „Emotion Regulation: Affective, Cognitive, and Social Consequences”, Psychophysiology, 2002'
      },
      paragraphs: [
        'Konieczne jest precyzyjne odróżnienie autentycznej odporności od mechanizmów obronnych, które na zewnątrz mogą ją powierzchownie przypominać, lecz w rzeczywistości niszczą organizm od środka.',
        'Tłumienie afektu (emotional suppression) to aktywny wysiłek kory przedczołowej mający na celu ukrycie ekspresji emocjonalnej. Badania Jamesa Grossa dowodzą, że tłumienie nie obniża pobudzenia ciała migdałowatego, a wręcz zwiększa ciśnienie tętnicze i wyrzut kortyzolu, pogarszając jednocześnie pamięć roboczą.',
        'Poniższa tabela dekonstruuje cztery postawy, które bywają mylone z siłą psychiczną:'
      ],
      subsections: [
        {
          id: 'sub-32-2-1',
          title: 'Analiza słów prof. Jamesa Grossa: Neurobiologiczna Cena Tłumienia',
          content: [
            'Prof. Gross w setkach eksperymentów laboratoryjnych wykazał, że tłumienie emocji to najgorsza możliwa strategia regulacji afektu. Osoby tłumiące nie tylko cierpią na tachykardię i skurcz naczyń krwionośnych, lecz także dramatycznie gorzej zapamiętują treść rozmów i są odbierane przez rozmówców jako nieszczere i zagrażające.',
            'Alternatywą Grossa jest Przewartościowanie Poznawcze (Cognitive Reappraisal) — zmiana znaczenia sytuacji ZANIM afekt całkowicie zaleje korę mózgową. Zamiast mówić sobie: „Nie wolno mi się bać”, człowiek mówi: „To naturalne, że czuję lęk przed tą operacją, ale ten lęk oznacza, że zależy mi na życiu. Skupię się na instrukcjach lekarza”.'
          ]
        },
        {
          id: 'sub-32-2-2',
          title: 'Tabela: Pozorna Siła vs Rzeczywisty Stan Psychobiologiczny',
          content: [
            '1. ODPORNOŚĆ (Resilience):\n• Pozorny wygląd: „Idę dalej, choć jest trudno”.\n• Co faktycznie się dzieje: Człowiek uznaje ból, nie wypiera faktów, reguluje układ nerwowy i dostosowuje działanie do nowych warunków.\n• Koszt długoterminowy: Niski — buduje mądrość i poczucie sprawczości.',
            '2. TŁUMIENIE (Suppression):\n• Pozorny wygląd: „Nic mnie to nie obchodzi, nie mam czasu na mazgajenie się”.\n• Co faktycznie się dzieje: Emocja zostaje uwięziona w ciele; rośnie napięcie mięśniowe, bezsenność i ryzyko chorób psychosomatycznych.\n• Koszt długoterminowy: Bardzo wysoki — ryzyko nagłego wybuchu lub depresji.',
            '3. UNIKANIE (Avoidance):\n• Pozorny wygląd: „Nie będę o tym myśleć, skupię się na serialach/pracy/grach”.\n• Co faktycznie się dzieje: Problem narasta w tle, a lęk przed konfrontacją rośnie z każdym dniem.\n• Koszt długoterminowy: Erozja zaufania do własnej sprawczości.',
            '4. SZTYWNOŚĆ (Rigidity):\n• Pozorny wygląd: „Muszę zrealizować pierwotny plan co do milimetra bez względu na wszystko”.\n• Co faktycznie się dzieje: Ignorowanie nowych danych rynkowych i biologicznych z lęku przed przyznaniem się do błędu.\n• Koszt długoterminowy: Katastrofalne zderzenie z rzeczywistością.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-32-2-1',
          type: 'badanie',
          title: 'Eksperyment Grossa: Koszt Społeczny Tłumienia',
          content: 'Gdy badani mieli za zadanie tłumić emocje podczas rozmowy na trudne tematy, u ich Bogu ducha winnych partnerów rozmowy odnotowano... gwałtowny wzrost ciśnienia tętniczego! Układ nerwowy drugiego człowieka podświadomie wyczuwa brak spójności między napiętym ciałem a kamienną twarzą, interpretując to jako sygnał podstępu i zagrożenia.'
        }
      ],
      interactiveWindow: {
        id: 'win-32-2',
        title: 'Przełączenie Strategii: Od Tłumienia (Gross) do Sprawczego Reappraisal',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Sylwia (31 lat) prezentuje strategię przed zarządem. Odczuwa silne drżenie rąk i suchość w ustach. Powtarza w kółko: „Przestań się bać, idioto, opanuj się!”, co wywołuje u niej atak hiperwentylacji.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór techniki regulacji emocji wg Jamesa Grossa',
            description: 'Jak Sylwia powinna przeformułować swój stan fizjologiczny?',
            options: [
              {
                text: 'Zastosować Cognitive Reappraisal: „Moje serce bije szybko, bo kora nadnerczy pompuje tlen do mózgu, bym mogła precyzyjnie odpowiadać na trudne pytania. To mobilizacja do walki, a nie zawał”.',
                feedback: 'Doskonałe przewartościowanie poznawcze: zamiana interpretacji „zagrożenie” na „wyzwanie” gasi spiralę paniki.',
                isOptimal: true
              },
              {
                text: 'Próbować jeszcze mocniej stłumić drżenie rąk, zaciskając pięści do białości',
                feedback: 'Błąd: jeszcze większy skurcz naczyń krwionośnych i gwarantowany paraliż mowy.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'W jakiej sytuacji zawodowej lub osobistej tłumisz emocje, fundując swojemu sercu niepotrzebny koszt nadciśnieniowy?'
      }
    },

    // CZĘŚĆ II — ADAPTACJA (32.3 - 32.5)
    {
      id: 'sec-32-3',
      pageNumber: 1506,
      sectionNumber: '32.3',
      title: 'Adaptacja: Jak człowiek aktualizuje model rzeczywistości',
      category: 'teoria',
      readingTimeMinutes: 22,
      quote: {
        text: 'Mózg jest maszyną minimalizującą wolną energię (Free Energy Principle) — nieustannie generuje odgórne hipotezy i przewidywania dotyczące świata. Kiedy rzeczywistość przeczy oczekiwaniom, powstaje sygnał błędu predykcji (prediction error). Adaptacja to nic innego jak gotowość układu nerwowego do skorygowania wewnętrznej mapy zamiast zmuszania świata, by dopasował się do naszych urojeń.',
        author: 'Prof. Karl J. Friston',
        source: 'University College London (UCL), „The Free-Energy Principle: A Unified Brain Theory?”, Nature Reviews Neuroscience, 2010'
      },
      paragraphs: [
        'Mózg człowieka jest organem predykcyjnym (Predictive Processing Model wg Karla Fristona). Nie rejestrujemy świata biernie — nieustannie generujemy przewidywania dotyczące tego, co powinno się wydarzyć, i porównujemy je z napływającymi danymi sensorycznymi.',
        'Gdy rzeczywistość burzy nasz plan, powstaje gwałtowny błąd predykcji (Prediction Error). Człowiek staje przed wyborem: albo zignorować dane i upierać się przy starym modelu, albo przejść przez bolesny proces aktualizacji mapy umysłu.',
        'Uniwersalny cykl adaptacji przebiega według schematu:\nSTARY MODEL RZECZYWISTOŚCI $\\rightarrow$ NOWE ZDARZENIE $\\rightarrow$ KONFLIKT POZNAWCZY $\\rightarrow$ AKTUALIZACJA MODELU $\\rightarrow$ NOWE SKALIBROWANE DZIAŁANIE.',
        'Przykłady adaptacji w różnych sferach życia:\n• Egzamin: Otrzymanie oceny niedostatecznej $\\rightarrow$ aktualizacja wiedzy o wymogach profesora $\\rightarrow$ zmiana techniki notowania.\n• Utrata pracy: Zwolnienie grupowe $\\rightarrow$ porzucenie złudzenia stałości korporacji $\\rightarrow$ audyt kompetencji i nowe portfolio.\n• Zmiana relacji: Odrzucenie propozycji wspólnego wyjazdu $\\rightarrow$ akceptacja granic drugiej strony $\\rightarrow$ przeorganizowanie własnego czasu.'
      ],
      subsections: [
        {
          id: 'sub-32-3-1',
          title: 'Analiza słów prof. Karla Fristona: Zasada Wolnej Energii a Opór przed Zmianą',
          content: [
            'Model Fristona rewolucjonizuje rozumienie uporu poznawczego. Kiedy nasze plany biorą w łeb, błąd predykcji wywołuje gwałtowny wzrost tzw. wolnej energii wariacyjnej — co subiektywnie odczuwamy jako ostry ból poznawczy, lęk i frustrację.',
            'Umysł sztywny próbuje zminimalizować ten błąd poprzez wyparcie faktów lub wściekłość („to niemożliwe, oni się pomylili, ja miałem rację!”). Umysł adaptacyjny bierze głęboki oddech i aktualizuje wagi synaptyczne (Bayesian belief updating): „Mój model rynku był błędny. Prawda jest inna. Przepisuję założenia”.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-32-3-1',
          type: 'insight',
          title: 'Aktualizacja Bayesowska w Życiu Codziennym',
          content: 'Thomas Bayes sformułował twierdzenie probabilistyczne, które jest dziś fundamentem sztucznej inteligencji: Twoje obecne przekonanie (a priori) powinno ulec modyfikacji pod wpływem nowych dowodów empirycznych. Jeśli dowody zaprzeczają Twojej teorii, trzymanie się starej opinii nie jest „lojalnością”, lecz dogmatyczną głupotą.'
        }
      ],
      interactiveWindow: {
        id: 'win-32-3',
        title: 'Aktualizacja Modelu Rzeczywistości: Reakcja na Błąd Predykcji Fristona',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Damian (27 lat) założył platformę e-commerce, inwestując 40 000 zł. Przez 3 miesiące nie dokonał ani jednej sprzedaży, a budżet na reklamy się wyczerpał.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór ścieżki adaptacji poznawczej Damiana',
            description: 'Jak Damian powinien zareagować na potężny błąd predykcji rynkowej?',
            options: [
              {
                text: 'Zaakceptować sygnał błędu Fristona: przeprowadzić wywiady z 20 potencjalnymi klientami, dowiedzieć się, dlaczego nie kupują, i zaktualizować model oferty przed wydaniem kolejnej złotówki',
                feedback: 'Doskonała bayesowska aktualizacja modelu: Damian traktuje brak sprzedaży jako cenną informację rynkową, a nie wyrok na swoją wartość.',
                isOptimal: true
              },
              {
                text: 'Wziąć 50 000 zł pożyczki i przepompować ją w te same reklamy, twierdząc, że klienci są zbyt głupi, by zrozumieć jego produkt',
                feedback: 'Sztywność poznawcza i próba wymuszenia na rzeczywistości dopasowania się do błędnego modelu.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Który z Twoich planów zderzył się w ostatnim roku z błędem predykcji i czy zaktualizowałeś swój model świata?'
      }
    },
    {
      id: 'sec-32-4',
      pageNumber: 1516,
      sectionNumber: '32.4',
      title: 'Niepewność i potrzeba przewidywalności: Dlaczego mózg pragnie gwarancji',
      category: 'neuronauka',
      readingTimeMinutes: 20,
      quote: {
        text: 'Nasz mózg woli niemal każdą pewną złą wiadomość od przedłużającej się niepewności. W badaniach laboratoryjnych ludzie wykazują wyższe pobudzenie układu współczulnego i wyższy poziom kortyzolu, gdy istnieje 50% szans na bolesny szok elektryczny, niż wtedy, gdy mają 100% pewności, że szok nastąpi. Niepewność zamienia mózg w generator paranoi.',
        author: 'Prof. Jack B. Nitschke',
        source: 'University of Wisconsin-Madison, „Anticipating Hurt: Functional Neuroimaging of Pain Anticipation and Uncertainty”, PNAS, 2006'
      },
      paragraphs: [
        'Z punktu widzenia biologii ewolucyjnej niepewność oznaczała potencjalną śmierć w paszczy drapieżnika. Dlatego brak informacji jest rejestrowany przez pień mózgu i ciało migdałowate jako sygnał alarmowy, zużywający znaczne zasoby metaboliczne glukozy.',
        'Warto zauważyć kluczową różnicę: PRZEWIDYWANIE to nasza wewnętrzna hipoteza statystyczna, podczas gdy WIEDZA dotyczy faktów już zaistniałych. Mózg w warunkach braku danych ma tendencję do tworzenia skrajnie czarnych scenariuszy. Dlaczego? Ponieważ z ewolucyjnego punktu widzenia bezpieczniej było pomylić szum wiatru z tygrysem szablastozębnym (fałszywy alarm), niż pomylić tygrysa z wiatrem (błąd śmiertelny).',
        'Przewidywanie najgorszego (choć bolesne) daje umysłowi paradoksalne, chwilowe poczucie kontroli: „Skoro wiem, że będzie katastrofa, to przynajmniej nic mnie nie zaskoczy”. Jest to jednak iluzja, która paraliżuje działanie.'
      ],
      subsections: [
        {
          id: 'sub-32-4-1',
          title: 'Analiza słów prof. Jacka Nitschke: Koszt Neurobiologiczny Zawieszenia',
          content: [
            'Wypowiedź prof. Nitschke rzuca światło na powszechne zjawisko: dlaczego pacjenci czekający na diagnozę onkologiczną często mówią, że najgorszy był okres oczekiwania na wyniki, a po otrzymaniu nawet złej diagnozy poczuli paradoksalną ulgę. Kiedy pojawia się fakt (choćby bolesny), mózg może natychmiast uruchomić procedurę adaptacyjną.',
            'W stanie niepewności kora przedczołowa nie może zamknąć żadnej pętli decyzyjnej. Dlatego kluczem do nawigacji po niepewności jest tzw. Odroczenie Wyroku i budowanie procedur contingencyjnych („Jeśli wariant A, robię X; jeśli wariant B, robię Y”), co natychmiast zdejmuje ładunek lękowy z ciała migdałowatego.'
          ]
        },
        {
          id: 'sub-32-4-2',
          title: 'ANALIZA CZŁOWIEKA: Julia (17 lat) — Presja szkolna i lęk przed nieznanym',
          content: [
            '• Sytuacja: Julia czeka na wyniki egzaminów próbnych do liceum dwujęzycznego. Przez 5 dni nie może spać, odświeża stronę szkoły co 15 minut.',
            '• Obawa i założenie: „Jeśli nie zdam na 90%, moja przyszłość legnie w gruzach i zawiodę rodziców”.',
            '• Reakcja somatyczna: Ścisk w żołądku, ból głowy, wycofanie z kontaktu z rówieśnikami.',
            '• Błąd poznawczy: Uznanie czarnego scenariusza za 100% fakt, zanim pojawiły się jakiekolwiek liczby.',
            '• Interwencja adaptacyjna: Zatrzymanie pętli odświeżania strony, spisanie planu na wypadek niższego wyniku (rekrutacja uzupełniająca) i spacer regeneracyjny.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-32-4-1',
          type: 'insight',
          title: 'Lekcja:',
          content: 'Napięcie niepewności obniża się nie przez ciągłe sprawdzanie, lecz przez przygotowanie procedury na każdy możliwy wariant.'
        }
      ],
      interactiveWindow: {
        id: 'win-32-4',
        title: 'Opanowanie Paraliżu Niepewności: Protokół 50% Nitschke',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Kamil (33 lata) złożył ofertę na zakup wymarzonego mieszkania. Właściciel poinformował, że podejmie decyzję w piątek. Kamil od wtorku nie może pracować, wydzwania do pośrednika i ma mdłości z nerwów.',
        steps: [
          {
            stepNumber: 1,
            title: 'Interwencja poznawcza zdejmująca alarm z ciała migdałowatego',
            description: 'Co Kamil powinien zrobić, by odzyskać spokój przed piątkiem?',
            options: [
              {
                text: 'Zamknąć laptopa, zaakceptować, że sprawa leży w Strefie C do piątku do 15:00, i znaleźć 3 alternatywne ogłoszenia mieszkań spełniające 85% wymagań',
                feedback: 'Doskonałe przygotowanie procedury awaryjnej: stworzenie planu B natychmiast wygasza panikę Nitschke i przywraca poczucie kontroli.',
                isOptimal: true
              },
              {
                text: 'Dzwonić do właściciela co 2 godziny, podnosząc ofertę o kolejne kwoty ze stresu',
                feedback: 'Reaktywna panika obniżająca pozycję negocjacyjną i zwiększająca chaos emocjonalny.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Przed jaką niewiadomą stoisz obecnie i jak plan awaryjny może obniżyć Twoje napięcie fizjologiczne?'
      }
    },
    {
      id: 'sec-32-5',
      pageNumber: 1524,
      sectionNumber: '32.5',
      title: 'Tolerancja niepewności: Model reakcji i strategie kompensacyjne',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Tolerancja niepewności (Tolerance of Uncertainty) to zdolność do efektywnego funkcjonowania i podejmowania decyzji pomimo braku pełnych informacji i gwarancji rezultatu.',
        'Oto uniwersalny mechanizm napięcia niepewności:\nNIEPEWNOŚĆ $\\rightarrow$ DYSKOMFORT SOMATYCZNY $\\rightarrow$ IMPULS DO WYMUSZENIA PEWNOŚCI $\\rightarrow$ WYBÓR STRATEGII $\\rightarrow$ KONSEKWENCJA BEHAWIORALNA.',
        'Wyróżniamy 5 głównych strategii radzenia sobie z niepewnością:\n• STRATEGIA A (Kompulsywne sprawdzanie): Ciągłe odświeżanie maili, wiadomości, kursów walut — daje 2 minuty ulgi, po czym lęk powraca.\n• STRATEGIA B (Szukanie zapewnień): Pytanie 10 osób: „Myślisz, że będzie dobrze?” — przenosi odpowiedzialność na zewnątrz.\n• STRATEGIA C (Unikanie i odkładanie): „Zajmę się tym, jak sytuacja będzie w 100% jasna” — prowadzi do prokrastynacji i utraty szans.\n• STRATEGIA D (Przedwczesne decyzje): Podejmowanie pochopnych, niekorzystnych wyborów tylko po to, by przerwać nieznośne napięcie oczekiwania.\n• STRATEGIA E (Adaptacyjna akceptacja niepełnych danych): Nazwanie niewiedzy, zabezpieczenie ryzyka bazowego i działanie iteracyjne pomimo braku gwarancji.'
      ],
      subsections: [
        {
          title: 'ANALIZA CZŁOWIEKA: Bartek (20 lat) — Pułapka niekończącego się researchu',
          paragraphs: [
            '• Sytuacja: Bartek chce kupić swój pierwszy laptop do nauki programowania. Przez 4 miesiące czyta fora, obejrzał 80 recenzji na YouTube i nadal nie złożył zamówienia.',
            '• Mechanizm: Lęk przed podjęciem „nieidealnej” decyzji paraliżuje działanie; Bartek myli gromadzenie opinii z nauką kodowania.',
            '• Koszt: 4 miesiące straconego czasu, w którym mógł napisać kilkadziesiąt programów na jakimkolwiek sprzęcie.',
            '• Korekta: Zasada „Wystarczająco Dobrej Decyzji” (Satisficing wg Herberta Simona) — określenie 3 sztywnych kryteriów i zakup pierwszego spełniającego je modelu w 24 godziny.'
          ]
        }
      ]
    },

    // CZĘŚĆ III — PORAŻKA I BŁĄD (32.6 - 32.8)
    {
      id: 'sec-32-6',
      pageNumber: 1532,
      sectionNumber: '32.6',
      title: 'Porażka jako informacja, a nie wyrok: Rozdzielenie wyniku od tożsamości',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Jednym z najbardziej destrukcyjnych błędów poznawczych jest automatyczne utożsamianie niezadowalającego wyniku operacyjnego z własną tożsamością i wartością moralną.',
        'Porównajmy dwa zdania:\nZdanie A: „Moja metoda nauki do tego egzaminu okazała się nieskuteczna i uzyskałem ocenę niedostateczną”. (Opis faktu operacyjnego i metody).\nZdanie B: „Nie zdałem, bo jestem głupi, leniwy i do niczego się nie nadaję”. (Ocena tożsamościowa i moralna).',
        'Zdanie A otwiera przestrzeń do korekty parametrów: zmianę podręcznika, rozłożenie materiału w czasie, zrobienie fiszek. Zdanie B wywołuje paraliżujący wstyd, wycofanie i wyuczoną bezradność.',
        'Model traktowania błędu jako informacji:\nWYNIK $\\rightarrow$ ANALIZA ZMIENNYCH $\\rightarrow$ WYODRĘBNIENIE INFORMACJI $\\rightarrow$ KOREKTA METODY $\\rightarrow$ KOLEJNA PRÓBA.'
      ],
      subsections: [
        {
          title: 'ANALIZA CZŁOWIEKA: Michał (28 lat) — Krytyka kodu a wstyd tożsamościowy',
          paragraphs: [
            '• Sytuacja: Senior developer odrzucił pull request Michała z 15 uwagami technicznymi dotyczącymi optymalizacji pamięci.',
            '• Pierwsza myśl Michała: „Jestem beztalenciem, zaraz mnie wyrzucą, nie nadaję się na programistę”.',
            '• Reakcja obronna: Chęć skasowania brancha i ucieczki na zwolnienie lekarskie.',
            '• Analiza dojrzała: Rozmowa z mentorem — uwagi dotyczyły architektury funkcji, a nie intelektu Michała. Przepisanie kodu według wskazówek zajęło 45 minut i stało się największym skokiem jakościowym w jego karierze.'
          ]
        }
      ]
    },
    {
      id: 'sec-32-7',
      pageNumber: 1540,
      sectionNumber: '32.7',
      title: 'Katastrofizacja i przewidywanie najgorszego: Ćwiczenie „Trzy Scenariusze”',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Katastrofizacja polega na traktowaniu mało prawdopodobnego, skrajnie negatywnego scenariusza jako nieuchronnej pewności, przy jednoczesnym założeniu, że nie będziemy w stanie go przetrwać.',
        'Aby rozbroić ten mechanizm, stosujemy sprawdzoną procedurę poznawczą „TRZY SCENARIUSZE”. Gdy odczuwasz paraliżujący lęk przed przyszłością, weź kartkę i odpowiedz na pytania:',
        '1. SCENARIUSZ NAJGORSZY (Co jest najbardziej czarnym, możliwym wariantem?): Zapisz go bez cenzury. Następnie odpowiedz: „Co konkretnie zrobię, jeśli to się wydarzy? Jakie 3 kroki naprawcze wykonam?”.\n2. SCENARIUSZ NAJBARDZIEJ PRAWDOPODOBNY (Co podpowiadają chłodne statystyki i fakty?): Jak realnie potoczy się ta sytuacja w 80% przypadków?\n3. SCENARIUSZ POZYTYWNY (Jaki jest jeden z możliwych korzystnych obrotów spraw?): Co dobrego może z tego wyniknąć?',
        'Dzięki temu ćwiczeniu umysł przestaje krążyć wokół amorficznego potwora lękowego, a zyskuje konkretne ramy operacyjne.'
      ]
    },
    {
      id: 'sec-32-8',
      pageNumber: 1548,
      sectionNumber: '32.8',
      title: 'Problem pierwotny a cierpienie wtórne: Łańcuch reakcji umysłu',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'W tradycji psychoterapii poznawczo-behawioralnej (CBT) oraz psychologii stoickiej kluczowe jest rozróżnienie pomiędzy bólem pierwotnym (faktami losowymi) a cierpieniem wtórnym (naszą narracją o faktach).',
        'ŁAŃCUCH POWSTAWANIA CIERPIENIA WTÓRNEGO:\n1. WYDARZENIE (Fakt obiektywny): Samochód złapał gumę w drodze na spotkanie.\n2. INTERPRETACJA AUTOMATYCZNA: „Zawsze mam pecha! To niesprawiedliwe! Mój dzień jest zrujnowany!”.\n3. EMOCJA WTÓRNA: Wściekłość, bezsilność, skok ciśnienia tętniczego.\n4. ZACHOWANIE: Kopanie w oponę, krzyk na pasażera, brak wezwania pomocy drogowej.\n5. KONSEKWENCJA: Spóźnienie o 2 godziny zamiast o 20 minut, zniszczona felga i zepsuta relacja.',
        'Gdy nauczysz się zatrzymywać na etapie 1 (Fakt: pęknięta opona), etap 2 zamieniasz na pytanie sprawcze: „Gdzie jest koło zapasowe i lewarek lub numer do assistance?”.'
      ],
      subsections: [
        {
          title: 'ANALIZA CZŁOWIEKA: Adam (34 lata) — Wypowiedzenie najmu lokalu',
          paragraphs: [
            '• Problem pierwotny: Właściciel wypowiedział Adamowi umowę najmu lokalu pod gabinet fizjoterapii z 3-miesięcznym okresem wypowiedzenia.',
            '• Cierpienie wtórne: Adam przez 3 tygodnie leży na kanapie, powtarzając: „Wszyscy mnie oszukują, nie warto było zaczynać, to koniec mojego biznesu”.',
            '• Analiza kosztu: Zamiast szukać nowego lokalu w 3-miesięcznym oknie, Adam traci 21 dni na ruminacje, zwiększając ryzyko przestoju.',
            '• Przełom: Spisanie surowych faktów i znalezienie nowego lokalu 200 metrów dalej w lepszej cenie i z windą.'
          ]
        }
      ]
    },

    // CZĘŚĆ IV — ELASTYCZNOŚĆ (32.9 - 32.12)
    {
      id: 'sec-32-9',
      pageNumber: 1556,
      sectionNumber: '32.9',
      title: 'Elastyczność psychologiczna: Wierność wartościom przy plastyczności strategii',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Elastyczność psychologiczna (Psychological Flexibility) to fundament odporności człowieka w XXI wieku. Oznacza ona zdolność do pełnego kontaktu z chwilą obecną taką, jaka jest (wraz z niewygodnymi emocjami), oraz zmiany lub utrzymania zachowania w służbie wybranym wartościom.',
        'Złota zasada adaptacji brzmi:\n«NIE ZAWSZE TRZEBA ZMIENIAĆ CEL. BARDZO CZĘSTO WYSTARCZY ZMIENIĆ SPOSÓB JEGO REALIZACJI».',
        'Jeżeli Twoją wartością jest „dbanie o zdrowie i sprawność”, a kontuzja uniemożliwia bieganie (strategia pierwotna), człowiek sztywny porzuca sport i siada na kanapie z poczuciem klęski. Człowiek elastyczny zmienia strategię: idzie na basen, wykonuje ćwiczenia rehabilitacyjne góry ciała lub skupia się na diecie. Wartość pozostaje nienaruszona, zmieniło się jedynie narzędzie.'
      ],
      subsections: [
        {
          title: 'ANALIZA CZŁOWIEKA: Lena (29 lat) — Zmiana formy bez zdrady wartości',
          paragraphs: [
            '• Wartość nadrzędna Leny: Edukacja dzieci i wspieranie rozwoju młodych talentów.',
            '• Pierwotna strategia: Otwarcie prywatnej szkoły językowej (wymóg: 120 000 zł wkładu własnego).',
            '• Zakłócenie: Bank odmówił kredytu inwestycyjnego ze względu na brak historii gospodarczej.',
            '• Reakcja sztywna (hipotetyczna): Poczucie, że „marzenie umarło”, rezygnacja i praca w przypadkowej korporacji.',
            '• Reakcja elastyczna Leny: Uruchomienie weekendowych warsztatów konwersacyjnych w domu kultury i kanału edukacyjnego online. Wartość jest realizowana od pierwszego dnia przy zerowym ryzyku długu.'
          ]
        }
      ]
    },
    {
      id: 'sec-32-10',
      pageNumber: 1564,
      sectionNumber: '32.10',
      title: 'Kiedy plan przestaje działać? Pętla korekty operacyjnej',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Gdy napływające dane wskazują na rozbieżność z założeniami, ludzie wpadają zazwyczaj w jedną z trzech skrajnych pułapek:\n1. IGNOROWANIE DANYCH: Udawanie, że problem nie istnieje (wyparcie).\n2. KURCZOWE TRZYMANIE SIĘ PLANU: Zwiększanie wysiłku na nieskuteczną metodę (eskalacja zaangażowania).\n3. CAŁKOWITE PORZUCENIE DZIAŁANIA: Histeryczna rezygnacja z projektu przy pierwszej przeszkodzie.',
        'Zdrowa alternatywa to model PĘTLI KOREKTY OPERACYJNEJ:\nPLAN $\\rightarrow$ ZBIÓR DANYCH $\\rightarrow$ PORÓWNANIE Z MODELEM $\\rightarrow$ IDENTYFIKACJA ODCHYLENIA $\\rightarrow$ ANALIZA PRZYCZYN $\\rightarrow$ MIKROKOREKTA $\\rightarrow$ KONTYNUACJA DZIAŁANIA.'
      ]
    },
    {
      id: 'sec-32-11',
      pageNumber: 1572,
      sectionNumber: '32.11',
      title: 'Rezygnacja z celu czy zmiana strategii? Tabela pytań weryfikacyjnych',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Wielu ludzi tkwi latami w destrukcyjnych projektach lub toksycznych relacjach, myląc upór z honorem. Z kolei inni porzucają cenne cele przy pierwszym dyskomforcie. Jak rozpoznać, czy nadszedł czas na zmianę metody, czy na mądrą rezygnację z samego celu?',
        'Oto Tabela Weryfikacji Decyzyjnej:'
      ],
      subsections: [
        {
          title: 'Tabela: 5 Pytań Nawigacyjnych',
          paragraphs: [
            '1. Czy ten cel nadal jest spójny z moimi głębokimi wartościami? $\\rightarrow$ Sprawdzasz: Kompas tożsamościowy. Jeśli cel stracił sens (robiłeś to tylko dla aprobaty innych), zmień cel.',
            '2. Czy dotychczasowa metoda przynosi jakiekolwiek mierzalne postępy? $\\rightarrow$ Sprawdzasz: Twarde dane operacyjne. Jeśli metoda nie działa od 6 miesięcy, zmień metodę, a nie cel.',
            '3. Czy dysponuję zasobami na kontynuację (zdrowie, finanse, czas)? $\\rightarrow$ Sprawdzasz: Realistyczne możliwości organizmu. Jeśli kontynuacja grozi ruiną, zawieś lub przeskaluj projekt.',
            '4. Czy warunki zewnętrzne uległy fundamentalnej zmianie? $\\rightarrow$ Sprawdzasz: Rzeczywistość rynkową i prawną. Jeśli prawo lub technologia unieważniły branżę, zrób pivot.',
            '5. Czy istnieje inna, mniej kosztowna droga do tego samego rezultatu? $\\rightarrow$ Sprawdzasz: Alternatywy i innowacje strategiczne.'
          ]
        }
      ]
    },
    {
      id: 'sec-32-12',
      pageNumber: 1580,
      sectionNumber: '32.12',
      title: 'Odporność po błędzie: 10-krokowy protokół powrotu do działania',
      category: 'cwiczenia',
      readingTimeMinutes: 22,
      paragraphs: [
        'Oto ustrukturyzowany protokół algorytmiczny, który należy uruchomić w ciągu 24 godzin po popełnieniu błędu lub doznaniu porażki:',
        'KROK 1: ZATRZYMAJ SIĘ — Nie podejmuj żadnych nerwowych decyzji w stanie pobudzenia afektywnego. Weź 5 głębokich oddechów z wydłużonym wydechem.',
        'KROK 2: NAZWIJ FAKT — Zapisz jednym zdaniem, co dokładnie zaszło, używając wyłącznie terminów mierzalnych fizycznie (bez słów: „zawsze”, „nigdy”, „idiota”).',
        'KROK 3: ODDZIEL FAKT OD INTERPRETACJI — Przekreśl na kartce wszystkie dopisane przez umysł oceny własnej wartości.',
        'KROK 4: OCEŃ RZECZYWISTE KONSEKWENCJE — Co jest realną stratą (w złotówkach, godzinach, punktach)? Co jest tylko lękiem?',
        'KROK 5: ZIDENTYFIKUJ WŁASNY BŁĄD — Gdzie dokładnie popełniłeś błąd logiczny, wykonawczy lub komunikacyjny?',
        'KROK 6: ZIDENTYFIKUJ CZYNNIKI NIEZALEŻNE — Co w tej sytuacji było czystym przypadkiem lub decyzją osób trzecich?',
        'KROK 7: WYCIĄGNIJ JEDNĄ INFORMACJĘ ZWROTNĄ — Czego ta sytuacja uczy Cię o parametrach rzeczywistości?',
        'KROK 8: SKORYGUJ STRATEGIĘ — Jaki jeden element procedury zmienisz przy kolejnej próbie?',
        'KROK 9: WYKONAJ JEDEN MIKRORUCH (2 MINUTY) — Zrób natychmiast małą czynność naprawczą, by przywrócić w mózgu poczucie sprawczości.',
        'KROK 10: DOKONAJ PRZEGLĄDU PO 7 DNIACH — Sprawdź, jak zmodyfikowana metoda działa w praktyce.'
      ]
    },

    // CZĘŚĆ V — OGRANICZONE ZASOBY & WSPARCIE (32.13 - 32.14)
    {
      id: 'sec-32-13',
      pageNumber: 1590,
      sectionNumber: '32.13',
      title: 'Presja, przeciążenie i ograniczone zasoby: Biologia adaptacji pod obciążeniem',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'Jak wykazaliśmy szczegółowo w Rozdziale 13 (Biologia Stresu), zdolność do elastycznego myślenia zależy ściśle od stanu energetycznego kory przedczołowej. W warunkach chronicznego niewyspania, głodu informacyjnego lub długotrwałego przeciążenia, mózg automatycznie przełącza się na archaiczne, sztywne nawyki prążkowia i pnia mózgu.',
        'Nie można wymagać od siebie mistrzowskiej adaptacji, gdy bateria biologiczna wskazuje 3%. W stanie kryzysu priorytetem zero jest zabezpieczenie zasobów bazowych: 1. Sen regeneracyjny; 2. Ograniczenie dopływu bodźców cyfrowych (drastyczny detoks informacyjny); 3. Uproszczenie listy zadań do absolutnego minimum.',
        'Pamiętaj: zmniejszenie tempa marszu w gęstej mgle nie jest porażką — jest elementarną mądrością nawigacyjną.'
      ],
      subsections: [
        {
          title: 'ANALIZA CZŁOWIEKA: Anna (36 lat) — Równowaga zasobów matki i menedżerki',
          paragraphs: [
            '• Sytuacja: Anna łączy pracę na stanowisku kierowniczym z opieką nad 4-letnim synem z nawracającymi infekcjami. Śpi średnio po 5 godzin od 8 miesięcy.',
            '• Problem: Próba utrzymania 100% perfekcjonizmu w obu rolach prowadzi do chronicznego zapalenia zatok i wybuchów złości na partnera.',
            '• Rozpoznanie ograniczeń: Kora przedczołowa Anny doświadcza ostrego drenażu glukozy; żadne techniki motywacyjne nie zastąpią snu.',
            '• Adaptacja operacyjna: Zgoda na obniżenie standardów porządku w domu do 70%, zamówienie cateringu 3 dni w tygodniu i poproszenie babci o stały dyżur w czwartki.'
          ]
        }
      ]
    },
    {
      id: 'sec-32-14',
      pageNumber: 1598,
      sectionNumber: '32.14',
      title: 'Odporność społeczna: Korzystanie ze wsparcia bez utraty podmiotowości',
      category: 'teoria',
      readingTimeMinutes: 18,
      caseStudyRef: chapterThirtyTwoCaseStudyTomasz,
      paragraphs: [
        'Kult „samotnego wojownika” to jedna z najgroźniejszych iluzji współczesności. Człowiek jest ssakiem społecznym, którego układ nerwowy reguluje się poprzez koregulację z innymi bezpiecznymi układami nerwowymi (Social Baseline Theory Jamesa Coana).',
        'Proszenie o pomoc, radę lub obecność w kryzysie nie jest dowodem słabości, lecz dojrzałą optymalizacją zasobów poznawczych. Rozróżniamy cztery rodzaje wsparcia adaptacyjnego:\n1. Wsparcie emocjonalne (przestrzeń do wysłuchania bez dawania nieproszonych rad);\n2. Wsparcie informacyjne (konsultacja z ekspertem, który przeszedł podobną ścieżkę);\n3. Wsparcie instrumentalne/praktyczne (pomoc w opiece nad dzieckiem, pożyczenie narzędzi);\n4. Wsparcie walidacyjne (przypomnienie o naszych mocnych stronach, gdy sami o nich zapominamy).'
      ]
    },

    // CZĘŚĆ VI — GRANICE ODPORNOŚCI (32.15)
    {
      id: 'sec-32-15',
      pageNumber: 1606,
      sectionNumber: '32.15',
      title: 'Kiedy wytrwałość staje się sztywnością? Pułapka upartego powtarzania błędu',
      category: 'teoria',
      readingTimeMinutes: 16,
      caseStudyRef: chapterThirtyTwoCaseStudyKarolina,
      paragraphs: [
        'Wytrwałość (Grit) jest cnotą tylko wtedy, gdy służy mądremu celowi i uwzględnia informacje zwrotne. Gdy przeradza się w ślepy upór, staje się fiksacją poznawczą.',
        'Pytania kontrolne sprawdzające, czy nie wpadłeś w pułapkę sztywności:\n• Czy powtarzam tę samą czynność po raz czwarty, oczekując innego rezultatu?\n• Czy ignoruję jednoznaczne dane finansowe/zdrowotne tylko dlatego, że wstydzę się zmienić zdanie?\n• Czy koszty emocjonalne i relacyjne przewyższają już wielokrotnie wartość samego celu?\n• Czy próbuję na siłę kontrolować coś, co leży w strefie wolnej woli drugiego człowieka?',
        'Jeśli odpowiedź brzmi TAK — zatrzymaj się. Odwaga porzucenia ślepej uliczki jest wyższym poziomem sprawczości niż uparte uderzanie głową w mur.'
      ]
    },

    // CZĘŚĆ VII — STUDIA PRZYPADKU (32.16 - 32.17)
    {
      id: 'sec-32-16',
      pageNumber: 1614,
      sectionNumber: '32.16',
      title: 'Wielkie Studium Przypadku I: „Plan, który się rozsypał” — Kamil i Odbudowa Sprawczości',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      caseStudyRef: chapterThirtyTwoCaseStudyKamil,
      paragraphs: [
        'Poniższe studium przypadku analizuje krok po kroku załamanie harmonogramu młodego twórcy startupu, anatomię szoku poznawczego oraz 16 etapów wychodzenia z kryzysu poprzez rozdzielenie faktów od tożsamości.',
        'Przeczytaj pełną historię Kamila, zapis dialogów oraz analizę neuronaukową w dedykowanej karcie przypadku.'
      ]
    },
    {
      id: 'sec-32-17',
      pageNumber: 1624,
      sectionNumber: '32.17',
      title: 'Wielkie Studium Przypadku II: „Nie mogę kontrolować wyniku” — Natalia i Trzy Strefy Wpływu',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      caseStudyRef: chapterThirtyTwoCaseStudyNatalia,
      paragraphs: [
        'Drugie studium przypadku przedstawia zmagania Natalii z korporacyjną niepewnością awansu, dekonstrukcję obsesji kontrolowania cudzych głów oraz praktyczne zastosowanie stoickiej dychotomii kontroli w realiach biznesowych.',
        'Poznaj analizę wpływu, tabelę decyzyjną oraz alternatywną ścieżkę kariery Natalii w karcie przypadku poniżej.'
      ]
    },

    // CZĘŚĆ VIII — MODEL ADAPTACYJNEGO DZIAŁANIA (32.18 - 32.20)
    {
      id: 'sec-32-18',
      pageNumber: 1634,
      sectionNumber: '32.18',
      title: 'Model Adaptacyjnego Działania: Architektura 11-stopniowej pętli nawigacyjnej',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Adaptacja człowieka do zmiennego otoczenia nie jest pojedynczym aktem woli, lecz cykliczną pętlą przetwarzania informacji, emocji i zachowań. W tradycji psychologii poznawczej oraz teorii systemów adaptacyjnych (Adaptive Control of Thought) proces ten można ująć w precyzyjny model 11-stopniowy.',
        '1. RZECZYWISTOŚĆ: Obiektywny stan świata, w którym podejmujemy działanie — ze wszystkimi jego prawami fizyki, ograniczeniami rynkowymi i losowością.',
        '2. ZAKŁÓCENIE PLANU: Wystąpienie zdarzenia rozbieżnego z pierwotnym modelem predykcyjnym (Prediction Error).',
        '3. SPONTANICZNA REAKCJA AFEKTYWNA: Biologiczny impuls pnia mózgu i ciała migdałowatego (lęk, złość, szok, chęć ucieczki).',
        '4. ŚWIADOMA INTERPRETACJA: Praca kory przedczołowej — oddzielenie surowych faktów od automatycznych narracji katastroficznych.',
        '5. AUDYT ZASOBÓW: Realistyczna ocena stanu baterii biologicznej (sen, poziom glukozy), finansów, czasu i relacji.',
        '6. OCENA DYCHOTOMII KONTROLI: Ścisłe wydzielenie tego, co w 100% zależy od nas (Strefa A), na co mamy częściowy wpływ (Strefa B) i co musimy bezwarunkowo zaakceptować (Strefa C).',
        '7. WYBÓR ZAKTUALIZOWANEJ STRATEGII: Decyzja o uruchomieniu Planu B, modyfikacji narzędzi lub przeskalowaniu celu.',
        '8. WYKONANIE MIKROKROKU: Natychmiastowe podjęcie fizycznego działania o niskim progu oporu w celu przywrócenia sprawczości dopaminergicznej.',
        '9. ZBIÓR INFORMACJI ZWROTNEJ: Obserwacja realnych skutków nowego ruchu bez popadania w myślenie życzeniowe.',
        '10. REKALIBRACJA PARAMETRÓW: Wprowadzenie poprawek do nowej metody w oparciu o twarde dane.',
        '11. ADAPTACJA I INTEGRACJA: Trwałe zaktualizowanie modelu poznawczego i wzmocnienie odporności tożsamościowej.'
      ]
    },
    {
      id: 'sec-32-19',
      pageNumber: 1642,
      sectionNumber: '32.19',
      title: 'Model adaptacyjny w praktyce: Studium procesu decyzyjnego krok po kroku',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Aby zrozumieć, jak model adaptacyjny chroni przed katastrofą poznawczą, przeanalizujmy proces decyzyjny Kamila (22 lata) w momencie zderzenia z potrójną awarią startupu.',
        'Gdy serwer bazy danych odmówił posłuszeństwa (Krok 2: Zakłócenie), Kamil doświadczył wyrzutu tachykardii i suchości w ustach (Krok 3: Reakcja afektywna). W tym momencie popełnił pierwszy błąd: pozwolił, by afekt podyktował interpretację tożsamościową („Jestem skończonym frajerem”, Krok 4). W efekcie podjął sztywną próbę klepania kodu przez 14 godzin bez snu, co doprowadziło do załamania.',
        'Przełom nastąpił dopiero wtedy, gdy dzięki interwencji z zewnątrz Kamil przeszedł świadomie przez kolejne stopnie pętli: nazwał surowe fakty na tablicy (Krok 4), przespał 8 godzin i zjadł posiłek (Krok 5: Audyt zasobów), oddzielił błąd w linii 240 od niezależnej decyzji Apple (Krok 6: Dychotomia kontroli), zaprojektował wersję webową (Krok 7: Plan B), wysłał e-mail do 50 testerów (Krok 8: Mikrokrok) i zebrał bezcenne uwagi o interfejsie (Krok 9: Informacja zwrotna).',
        'Co działo się w jego układzie nerwowym? Przejście od paniki limbicznej do ustrukturyzowanej pętli kory przedczołowej przywróciło poziom neuroprzekaźników do stanu gotowości zadaniowej, eliminując paraliż decyzyjny.'
      ],
      subsections: [
        {
          title: 'ANALIZA PROCESU: Błędy na poszczególnych etapach pętli',
          paragraphs: [
            '• Błąd na etapie 4 (Interpretacja): Utożsamienie usterki technicznej z własną wartością moralną.',
            '• Błąd na etapie 5 (Zasoby): Działanie przy skrajnym deficycie snu (bateria 5%), co uniemożliwia logiczne myślenie.',
            '• Błąd na etapie 6 (Kontrola): Próba kontrolowania czasu weryfikacji aplikacji w korporacji w Cupertino.',
            '• Korekta adaptacyjna: Skierowanie 100% energii w jakość wersji webowej i kontakt z pierwszymi użytkownikami.'
          ]
        }
      ]
    },
    {
      id: 'sec-32-20',
      pageNumber: 1650,
      sectionNumber: '32.20',
      title: 'Jak człowiek reaguje na zakłócenie planu? Anatomia zderzenia założeń z rzeczywistością',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Zderzenie idealnego planu z rzeczywistością jest jednym z najbardziej powszechnych doświadczeń ludzkich. Reakcje na to zderzenie determinują, czy kryzys stanie się źródłem trwałego urazu i wyuczonej bezradności, czy katalizatorem dojrzałości operacyjnej.',
        'Przyjrzyjmy się historii Joanny (27 lat, architekta), która przez 6 miesięcy przygotowywała projekt rewitalizacji placu miejskiego w prestiżowym konkursie międzynarodowym. Trzy dni przed terminem składania prac organizator opublikował aneks unieważniający kategorię projektów z podziemnymi parkingami ze względu na odkrycie zabytkowych fundamentów.'
      ],
      subsections: [
        {
          title: 'DEKONSTRUKCJA PRZYPADKU JOANNY:',
          paragraphs: [
            '1. PLAN PIERWOTNY: Oparcie całej koncepcji architektonicznej na dwupoziomowym parkingu podziemnym jako głównym atucie komunikacyjnym.',
            '2. RZECZYWISTOŚĆ: Aneks konserwatorski wykluczający jakąkolwiek ingerencję głębszą niż 1 metr.',
            '3. PIERWSZA REAKCJA: Wściekłość, oskarżanie urzędników o niekompetencję i chęć podarcia plansz.',
            '4. BŁĘDNA INTERPRETACJA: „Moja praca z 6 miesięcy poszła do kosza, sędziowie są przeciwko mnie”.',
            '5. ALTERNATYWA ADAPTACYJNA: Joanna zatrzymała spiralę złości po 2 godzinach. Zadała sobie pytanie: „Skoro nikt nie może budować w głąb, co jest nową wartością terenu?”. Przeprojektowała parking na naziemny hub mikromobilności obsadzony zielenią wertykalną.',
            '6. KONSEKWENCJA: Jej projekt zdobył wyróżnienie honorowe za najbardziej innowacyjne wkomponowanie zieleni w strefę chronioną konserwatorsko.'
          ]
        },
        {
          title: 'PERSPEKTYWA EKSPERTA: Błąd Predykcji a Teoria Alostazy',
          paragraphs: [
            'W ujęciu Petera Sterlinga i Josepha Eyera (twórców koncepcji alostazy), odporność organizmu polega na „utrzymywaniu stabilności poprzez zmianę”. Gdy warunki zewnętrzne ulegają przekształceniu, trzymanie się starej równowagi prowadzi do przeciążenia alostatycznego (Allostatic Load). Joanna przetrwała kryzys nie dlatego, że obroniła parking, lecz dlatego, że natychmiast zredefiniowała cel projektu pod nowe parametry gruntu.'
          ]
        }
      ]
    },

    // CZĘŚĆ IX — PSYCHOLOGIA NIEPEWNOŚCI & DYCHOTOMIA KONTROLI (32.21 - 32.23)
    {
      id: 'sec-32-21',
      pageNumber: 1658,
      sectionNumber: '32.21',
      title: 'Człowiek wobec niepewności: Potrzeba przewidywalności a tolerancja niewiedzy',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Niepewność jest obiektywnym stanem braku pełnych informacji o przyszłości. Jednak to nie sama niepewność niszczy zdrowie psychiczne człowieka, lecz NIETOLERANCJA NIEPEWNOŚCI (Intolerance of Uncertainty - IU) — skłonność poznawcza do traktowania możliwości wystąpienia negatywnego zdarzenia jako niedopuszczalnej katastrofy.',
        'Człowiek o niskiej tolerancji niepewności wpada w pułapkę kompulsywnej pętli kontroli:\nNIEPEWNOŚĆ $\\rightarrow$ DYSKOMFORT SOMATYCZNY (napięcie w ciele) $\\rightarrow$ IMPULS SPRAWDZANIA / SZUKANIA ZAPEWNIEŃ $\\rightarrow$ CHWILOWA ULGA (trwająca 2–5 minut) $\\rightarrow$ POWRÓT LĘKU ZE ZWIĘKSZONĄ SIŁĄ.',
        'Sprawdzanie wiadomości 40 razy dziennie, dzwonienie do partnera z pytaniem „czy wszystko w porządku?” czy czytanie forów medycznych nie eliminuje niepewności świata — uczy jedynie mózg, że dyskomfort niewiedzy jest śmiertelnie niebezpieczny i wymaga natychmiastowego rytuału.'
      ],
      subsections: [
        {
          title: 'PRZYPADEK Z BADAŃ: Eksperymenty Michela Dugasa nad Nietolerancją Niepewności',
          paragraphs: [
            '• Pytanie badawcze: Dlaczego niektóre osoby zamartwiają się godzinami nad sprawami o niskim prawdopodobieństwie wystąpienia?',
            '• Metoda i wynik: Wieloletnie badania zespołu prof. Michela Dugasa na Uniwersytecie Concordia wykazały, że osoby z wysokim wskaźnikiem IU interpretują niepewność jako dowód na to, że zbliża się nieszczęście, i wykazują paraliż decyzyjny nawet w prostych zadaniach logicznych.',
            '• Wniosek kliniczny: Skuteczna terapia i adaptacja nie polegają na dawaniu pacjentowi gwarancji („wszystko będzie dobrze”), lecz na systematycznym treningu wytrzymywania napięcia niewiedzy bez wykonywania czynności kontrolujących.'
          ]
        }
      ]
    },
    {
      id: 'sec-32-22',
      pageNumber: 1666,
      sectionNumber: '32.22',
      title: 'Kiedy człowiek próbuje kontrolować niekontrolowalne: Granice wpływu i iluzja omnipotencji',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Podział rzeczywistości na Strefę Kontroli Pełnej (A), Strefę Wpływu (B) oraz Strefę Braku Kontroli (C) wydaje się intuicyjny, dopóki nie znajdziemy się w sytuacji granicznej o wysokiej stawce emocjonalnej.',
        'Rozważmy klasyczny przypadek graniczny: WYNIK EGZAMINU LEKARSKIEGO LUB PAŃSTWOWEGO.\n• Co w 100% kontroluje kandydat? Liczbę powtórzonych zagadnień, jakość notatek, higienę snu przed egzaminem, tempo oddychania na sali oraz uczciwość własnych odpowiedzi.\n• Na co kandydat ma częściowy wpływ? Na jasność sformułowań w eseju, czytelność pisma i kulturę kontaktu z komisją.\n• Czego kandydat NIE KONTROLUJE w żadnym stopniu? Zestawu wylosowanych pytań, nastroju egzaminatora po kłótni z dzieckiem, poziomu trudności pytań w danym roczniku czy progów punktowych konkurencji.',
        'Człowiek neurotyczny inwestuje 80% energii w Strefę C: próbuje odgadnąć „haki” w pytaniach, analizuje statystyki zdawalności z 10 lat, modli się o konkretne pytania i nie śpi z lęku przed humorami profesora. Człowiek dojrzały inwestuje 100% energii w Strefę A — doskonali rzemiosło, a wynik oddaje losowości świata.'
      ],
      subsections: [
        {
          title: 'KONTRPRZYPADEK PORÓWNAWCZY: Trzy Reakcje na Tę Samą Odmowę Kredytu',
          paragraphs: [
            '• Osoba A (Nadkontrola): Pisze 10 skarg do prezesa banku, nie śpi po nocach, oskarża kasjera o spisek i żąda ponownego przeliczenia algorytmu. Koszt: nerwica i utrata czasu.',
            '• Osoba B (Bierność i wyparta bezradność): Kładzie się do łóżka, mówi: „W tym kraju nic się nie da zrobić”, rezygnuje z zakupu mieszkania na 10 lat. Koszt: utrata marzeń.',
            '• Osoba C (Adaptacja dychotomiczna): Przyjmuje odmowę jako fakt formalny, żąda pisemnego uzasadnienia punktacji BIK, spłaca jedną zaległą kartę w 14 dni i składa wniosek w dwóch innych bankach oferujących bardziej elastyczne kryteria. Koszt: minimalny; rezultat: uzyskanie finansowania.'
          ]
        }
      ]
    },
    {
      id: 'sec-32-23',
      pageNumber: 1674,
      sectionNumber: '32.23',
      title: 'Człowiek, który nie potrafił odpuścić kontroli: Bartek i psychologia mikrozarządzania',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Bartek (20 lat, student budownictwa) stanął na czele 5-osobowego zespołu projektowego mającego stworzyć model mostu kratownicowego. Wychowany przez surowego, kontrolującego ojca, Bartek żył w przekonaniu, że jedynym sposobem na uniknięcie kompromitacji jest osobiste dopilnowanie każdego milimetra pracy.',
        'Zamiast podzielić zadania, Bartek kazał kolegom przesyłać każdy szkic do akceptacji o 22:00, poprawiał ich obliczenia w nocy bez ich wiedzy i dzwonił w niedzielę rano z pretensjami o formatowanie tabeli. Po 4 tygodniach 3 członków zespołu złożyło rezygnację, a Bartek został sam z 80% niedokończonego projektu na 5 dni przed terminem.'
      ],
      subsections: [
        {
          title: 'ANALIZA PSYCHOLOGICZNA PRZYPADKU BARTKA:',
          paragraphs: [
            '• Co chciał osiągnąć? Bezpieczeństwo i najwyższą ocenę (cel adaptacyjny).',
            '• Czego się bał? Odrzucenia i bycia ocenionym jako niekompetentny lider (lęk bazowy).',
            '• Co kontrolował w rzeczywistości? Wyłącznie własne obliczenia.',
            '• Czego nie kontrolował? Myśli, stylu pracy i tempa innych dorosłych ludzi.',
            '• Jaki był realny koszt? Rozpad zespołu, skrajne zmęczenie i zagrożenie niezaliczeniem semestru.',
            '• Przełom i korekta: Bartek przeprosił kolegów na wspólnym spotkaniu, przyznał się do lęku przed porażką, oddał im odpowiedzialność za poszczególne moduły obliczeniowe i skupił się wyłącznie na części wytrzymałościowej. Projekt został oddany na czas z oceną bardzo dobrą.'
          ]
        }
      ]
    },

    // CZĘŚĆ X — PORAŻKA, INFORMACJA & WYTRWAŁOŚĆ (32.24 - 32.26)
    {
      id: 'sec-32-24',
      pageNumber: 1682,
      sectionNumber: '32.24',
      title: 'Porażka, błąd i informacja zwrotna: Michał i dekonstrukcja wstydu zawodowego',
      category: 'teoria',
      readingTimeMinutes: 26,
      paragraphs: [
        'Gdy w złożonym projekcie dochodzi do błędu, ludzki mózg staje przed rozdrożem atrybucyjnym (Attribution Theory wg Bernarda Weinera). Możemy przypisać błąd czynnikom niestabilnym i kontrolowalnym (np. „zastosowałem niespójne nazewnictwo zmiennych”) albo czynnikom stałym i tożsamościowym („jestem gorszy od innych i nie nadaję się na to stanowisko”).',
        'Michał (28 lat, programista w fintechu) doprowadził do 40-minutowej przerwy w działaniu modułu płatności, co kosztowało firmę 18 000 zł prowizji transakcyjnych. Podczas retrospektywy technicznej szef zespołu powiedział: „Michale, kod nie przeszedł testów obciążeniowych, ponieważ funkcja autoryzacji blokowała wątek główny”.'
      ],
      subsections: [
        {
          title: 'ANALIZA EKSPERCKA PRZYPADKU MICHAŁA (A–I):',
          paragraphs: [
            'A. CO BYŁO FAKTEM? Błąd w kodzie blokujący wątek główny i 40 minut przestoju.',
            'B. CO BYŁO INTERPRETACJĄ MICHAŁA? „Szef mną gardzi, wszyscy wiedzą, że jestem oszustem, zostanę dyscyplinarnie zwolniony”.',
            'C. JAKIE INFORMACJE ZOSTAŁY POCZĄTKOWO ODRZUCONE? Szczegółowe logi z serwera pokazujące dokładną linię usterki.',
            'D. JAKIE INFORMACJE BYŁY WARTOŚCIOWE? Wskazówka szefa, jak przepisać funkcję asynchronicznie.',
            'E. CO BYŁO POD KONTROLĄ? Napisanie testu jednostkowego zapobiegającego powtórzeniu usterki.',
            'F. CO NIE BYŁO POD KONTROLĄ? Chwilowe emocje zarządu i utracona prowizja z przeszłości.',
            'G. GDZIE POJAWIŁA SIĘ SZTYWNOŚĆ? W próbie tłumaczenia się i szukania winnych w zespole infrastruktury.',
            'H. GDZIE MOŻLIWA BYŁA ADAPTACJA? W natychmiastowym przyjęciu odpowiedzialności, napisaniu poprawki i dodaniu procedury do dokumentacji firmowej.',
            'I. ALTERNATYWY: 1. Ucieczka na zwolnienie lekarskie (unikanie); 2. Agresywna kłótnia z szefem (agresja obronna); 3. Spokojna naprawa kodu i wdrożenie procedury (dojrzała adaptacja).'
          ]
        }
      ]
    },
    {
      id: 'sec-32-25',
      pageNumber: 1692,
      sectionNumber: '32.25',
      title: 'Wytrwałość czy sztywność? Trzy przypadki graniczne i granice grit',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Pojęcie „wytrwałości” (Grit), spopularyzowane przez Angelę Duckworth, bywa w kulturze korporacyjnej i samorozwojowej bezkrytycznie fetyszyzowane. Wytrwałość staje się destrukcyjna, gdy przeradza się w eskalację zaangażowania (Barry Staw) — uporczywe pompowanie energii w bankrutujący schemat.',
        'Porównajmy trzy postawy ludzi wobec oporu rzeczywistości:'
      ],
      subsections: [
        {
          title: 'STUDIUM PORÓWNAWCZE TRZECH PRZYPADKÓW:',
          paragraphs: [
            '1. PRZYPADEK 1 — KAROLINA (Ślepy Upór): Przez 17 miesięcy publikuje te same rolki na Instagramie, mając 0 sprzedaży. Uważa, że każda zmiana formatu to „brak charakteru”. Rezultat: długi i wypalenie.',
            '2. PRZYPADEK 2 — ADAM (Wyuczona Bezradność): Chciał otworzyć kawiarnię. Przy pierwszej odmowie sanepidu dotyczącej wysokości sufitu sprzedaje lokal i wraca na nielubiany etat, mówiąc: „W tym kraju przedsiębiorca nie ma szans”. Rezultat: chroniczne poczucie żalu.',
            '3. PRZYPADEK 3 — LENA (Elastyczność Adaptacyjna): Chciała otworzyć szkołę językową. Gdy bank odmówił kredytu, zorganizowała warsztaty stacjonarne w domu kultury i kursy online, realizując swoją misję bez długu. Rezultat: sukces operacyjny i wolność finansowa.'
          ]
        },
        {
          title: 'WNIOSKI NAUKOWE: Kiedy należy trwać, a kiedy zmienić kurs?',
          paragraphs: [
            '• Wytrwaj, gdy: Wyniki są powolne, ale twarde wskaźniki rosną, a metoda jest zgodna z zasadami sztuki.',
            '• Zmień strategię (Pivot), gdy: Metoda po 90 dniach rzetelnych testów nie wykazuje żadnej korelacji z celem, a koszty biologiczne przewyższają zyski.',
            '• Zmień cel, gdy: W toku działania odkryłeś, że cel był jedynie cudzym oczekiwaniem (introjekcją) i niszczy Twoje nadrzędne wartości.'
          ]
        }
      ]
    },
    {
      id: 'sec-32-26',
      pageNumber: 1700,
      sectionNumber: '32.26',
      title: 'Czy zmienić cel, czy tylko strategię? Cztery dylematy decyzyjne w sytuacjach granicznych',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Wielu ludzi cierpi z powodu fałszywego dylematu: „Albo zrealizuję ten plan dokładnie tak, jak wymyśliłem w wieku 20 lat, albo jestem przegranym człowiekiem”. Prawdziwa mądrość polega na rozróżnieniu pomiędzy TOŻSAMOŚCIĄ, WARTOŚCIĄ, CELEM a STRATEGIĄ.',
        'Przeanalizujmy cztery typowe sytuacje decyzyjne:'
      ],
      subsections: [
        {
          title: 'CZTERY PRZYPADKI DECYZYJNE:',
          paragraphs: [
            '• DYLEMAT A (Cel ważny, metoda zdezaktualizowana): Chcesz być pisarzem. Wydawnictwa odrzucają papierowe książki. Decyzja adaptacyjna: Uruchomienie płatnego newslettera na Substacku. Wartość i cel zachowane, narzędzie zaktualizowane.',
            '• DYLEMAT B (Cel stracił spójność z wartościami): Chciałeś zostać partnerem w kancelarii (Rozdział 31, Michał). Po 4 latach widzisz, że niszczy to Twoje zdrowie i relacje. Decyzja adaptacyjna: Mądre zamknięcie projektu i przebranżowienie na Product Design.',
            '• DYLEMAT C (Radykalna zmiana warunków zewnętrznych): Prowadziłeś biuro podróży do kraju objętego nagłym embargiem lub konfliktem. Decyzja adaptacyjna: Błyskawiczne przekierowanie oferty na bezpieczne kierunki krajowe.',
            '• DYLEMAT D (Chwilowe zmęczenie mylone z bezsensem): Po 3 nieprzespanych nocach student chce rzucić medycynę na 4. roku. Decyzja adaptacyjna: Zakaz podejmowania decyzji; 48 godzin snu, posiłek i rozmowa z mentorem przed jakimkolwiek krokiem.'
          ]
        }
      ]
    },

    // CZĘŚĆ XI — OGRANICZONE ZASOBY & WIELKIE STUDIUM PRZYPADKU (32.27 - 32.28)
    {
      id: 'sec-32-27',
      pageNumber: 1710,
      sectionNumber: '32.27',
      title: 'Odporność w świecie ograniczonych zasobów: Psychologia kompromisu i zarządzanie deficytem',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Odporność psychiczna bywa fałszywie przedstawiana jako zdolność do robienia wszystkiego naraz bez zmęczenia. To niebezpieczna iluzja. W realnym życiu każdy człowiek dysponuje ściśle ograniczonym budżetem metabolicznym, czasowym i finansowym.',
        'Przyjrzyjmy się sytuacji Anny (36 lat) i Piotra (39 lat). Oboje pracują na pełen etat, wychowują dwójkę dzieci w wieku szkolnym, a dodatkowo ojciec Piotra przeszedł udar mózgu i wymaga codziennej rehabilitacji. Piotr próbował pracować po nocach, by utrzymać tempo w korporacji, gotować domowe obiady i osobiście wozić ojca na zabiegi. Po 6 tygodniach doznał ostrego ataku rwy kulszowej i stanów lękowych.'
      ],
      subsections: [
        {
          title: 'ANALIZA ZARZĄDZANIA DEFICYTEM ZASOBÓW:',
          paragraphs: [
            '1. Uznanie praw biologii: Żaden człowiek nie jest w stanie funkcjonować na 120% normy przez 2 miesiące bez ciężkich strat somatycznych.',
            '2. Cięcie standardów do poziomu „Wystarczająco Dobrego” (Good Enough): Zgoda na mrożone warzywa, rezygnacja z idealnego porządku w mieszkaniu i zawieszenie ambicji awansu o 12 miesięcy.',
            '3. Mobilizacja sieci wsparcia: Wynajęcie opiekunki medycznej na 3 godziny dziennie ze składek rodzeństwa Piotra.',
            '4. Ocalenie zasobów bazowych: Ochrona 7 godzin snu jako fundamentu odporności całego domu.'
          ]
        }
      ]
    },
    {
      id: 'sec-32-28',
      pageNumber: 1720,
      sectionNumber: '32.28',
      title: 'Wielkie Studium Przypadku: Człowiek w warunkach niepewności — 12 etapów adaptacji kryzysowej',
      category: 'studium-przypadku',
      readingTimeMinutes: 30,
      paragraphs: [
        'Sekcja ta stanowi kulminację analityczną całego rozdziału. Śledzimy w niej wielomiesięczną historię Grzegorza (45 lat), właściciela średniej firmy transportowo-logistycznej zatrudniającej 18 kierowców.',
        'W ciągu 3 miesięcy Grzegorz stanął w obliczu kryzysu wielosystemowego: zerwanie głównego kontraktu z niemieckim kontrahentem, gwałtowny wzrost cen paliwa o 35%, awaria 4 ciągników siodłowych oraz odejście kluczowego dyspozytora.'
      ],
      subsections: [
        {
          title: 'DWANAŚCIE ETAPÓW TRANSFORMACJI KRYZYSOWEJ GRZEGORZA:',
          paragraphs: [
            'ETAP 1 (PLAN): Stabilny budżet oparty w 70% na jednym niemieckim kliencie i kredytach leasingowych.',
            'ETAP 2 (PIERWSZE ZAKŁÓCENIE): Nagłe pismo z Niemiec o jednostronnym rozwiązaniu umowy z 30-dniowym okresem.',
            'ETAP 3 (REAKCJA AFEKTYWNA): Szok, bezsenność, krzyk na mechaników i wypalanie 2 paczek papierosów dziennie.',
            'ETAP 4 (BŁĘDNA INTERPRETACJA): „Niemcy mnie zniszczyli, całe 15 lat mojej pracy poszło na marne, muszę ogłosić upadłość”.',
            'ETAP 5 (KONSEKWENCJE): Spadek morale kierowców, 2 kolejnych składa wypowiedzenia z lęku przed brakiem pensji.',
            'ETAP 6 (NOWE INFORMACJE / INTERWENCJA): Doradca finansowy zmusza Grzegorza do rozpisania twardego cashflow. Okazuje się, że firma ma poduszkę finansową na 4 miesiące przetrwania.',
            'ETAP 7 (ZMIANA STRATEGII): Zamiast szukać jednego giganta, Grzegorz decyduje się na dywersyfikację: 10 mniejszych klientów na rynku lokalnym i transport chłodniczy.',
            'ETAP 8 (KOLEJNE ZAKŁÓCENIE): Awaria chłodni w pierwszym nowym zleceniu i utrata towaru o wartości 40 000 zł.',
            'ETAP 9 (DYLEMAT): Czy poddać się i zamknąć chłodnie, czy uruchomić ubezpieczenie i poprawić procedury przeglądów?',
            'ETAP 10 (DECYZJA): Wypłata z ubezpieczenia, wdrożenie telematyki IoT monitorującej temperaturę w czasie rzeczywistym i premie jakościowe dla kierowców.',
            'ETAP 11 (REZULTAT): Po 9 miesiącach firma osiąga wyższą rentowność niż przed kryzysem, mając 14 niezależnych klientów i nowoczesną flotę.',
            'ETAP 12 (ANALIZA CAŁEGO PROCESU): Grzegorz mówi: „Kiedyś myślałem, że bezpieczeństwo to duży kontrakt. Dziś wiem, że bezpieczeństwo to zdolność do szybkiego przestawienia żagli, gdy wieje z innej strony”.'
          ]
        },
        {
          title: 'ANALIZA EKSPERCKA: 10 Wymiarów Psychologicznych Przypadku Grzegorza',
          paragraphs: [
            '1. PRZEWIDYWANIE: Grzegorz uległ błędowi ekstrapolacji — założył, że skoro klient płacił przez 8 lat, będzie płacił zawsze.',
            '2. INTERPRETACJA: Przejście od katastrofizacji tożsamościowej („jestem bankrutem”) do analizy arkusza kalkulacyjnego.',
            '3. EMOCJE: Zredukowanie paniki poprzez odzyskanie twardych danych o 4-miesięcznej poduszce finansowej.',
            '4. KONTROLA: Odrzucenie prób błagania niemieckiego klienta (Strefa C) i skupienie się na lokalnych ofertach (Strefa A).',
            '5. ZASOBY: Mądre wykorzystanie poduszki finansowej na modernizację telematyki zamiast na bierne przejadanie.',
            '6. STRATEGIA: Przejście z monokultury biznesowej na model zwinny i rozproszony.',
            '7. INFORMACJA ZWROTNA: Awaria chłodni potraktowana jako bezcenny test procedur przed wejściem na dużą skalę.',
            '8. ADAPTACJA: Wprowadzenie czujników IoT i ubezpieczeń prewencyjnych.',
            '9. KOSZT: 9 miesięcy ciężkiej pracy, rzucenie palenia i reorganizacja bazy transportowej.',
            '10. WNIOSEK OGÓLNY: Adaptacja to nie brak błędów — to szybkość wyciągania wniosków z awarii.'
          ]
        }
      ]
    },

    // CZĘŚĆ XVI — SŁOWNIK POJĘĆ (32.29)
    {
      id: 'sec-32-29',
      pageNumber: 1730,
      sectionNumber: '32.29',
      title: 'Słownik Kluczowych Pojęć Odporności i Adaptacji (25 Kanonicznych Terminów)',
      category: 'podsumowanie',
      readingTimeMinutes: 20,
      paragraphs: [
        '1. ODPORNOŚĆ PSYCHICZNA (Resilience) — dynamiczny proces powrotu do równowagi i adaptacji pomimo wstrząsów.',
        '2. ADAPTACJA — uaktualnienie wewnętrznego modelu świata i zachowania w odpowiedzi na nowe fakty.',
        '3. ELASTYCZNOŚĆ PSYCHOLOGICZNA — wierność wartościom przy plastyczności metod i otwartości na trudne emocje.',
        '4. NIEPEWNOŚĆ — obiektywny stan braku pełnej informacji o przyszłym stanie układu.',
        '5. TOLERANCJA NIEPEWNOŚCI — zdolność do efektywnego działania bez przymusu uzyskiwania 100% gwarancji.',
        '6. KATASTROFIZACJA — zniekształcenie poznawcze wyolbrzymiające prawdopodobieństwo i skutki najgorszego wariantu.',
        '7. CIERPIENIE PIERWOTNE — obiektywny ból wynikający z faktów życiowych i ograniczeń biologicznych.',
        '8. CIERPIENIE WTÓRNE — dodatkowy ból tworzony przez osądzającą, katastroficzną narrację umysłu.',
        '9. DYCHOTOMIA KONTROLI — stoicki i poznawczy podział rzeczywistości na to, co zależy od nas, i to, co niezależne.',
        '10. STREFA WPŁYWU — obszar, na który możemy oddziaływać pośrednio poprzez perswazję, jakość i postawę.',
        '11. BŁĄD PREDYKCJI (Prediction Error) — rozbieżność między oczekiwaniem mózgu a sygnałem zmysłowym.',
        '12. SZTYWNOŚĆ POZNAWCZA — uporczywe trzymanie się nieskutecznej reguły pomimo negatywnej informacji zwrotnej.',
        '13. WYTRWAŁOŚĆ (Grit) — długoterminowa pasja i dyscyplina w dążeniu do celu nadrzędnego przy elastyczności taktyk.',
        '14. PIVOT STRATEGICZNY — zmiana metody realizacji celu bez porzucania nadrzędnej wizji i wartości.',
        '15. PLAN REDUNDANTNY (Plan B/C) — zaplanowane alternatywne ścieżki działania na wypadek awarii ścieżki głównej.',
        '16. ODPORNOŚĆ SPOŁECZNA — zdolność do mobilizowania i przyjmowania wsparcia relacyjnego w kryzysie.',
        '17. KOREGULACJA — fizjologiczne uspokojenie układu nerwowego w kontakcie z bezpieczną drugą osobą.',
        '18. ESKALACJA ZAANGAŻOWANIA — inwestowanie kolejnych zasobów w przegrany projekt z lęku przed przyznaniem się do straty.',
        '19. ETYKIETOWANIE AFEKTU (Affect Labeling) — nazywanie emocji słowami w celu wyciszenia ciała migdałowatego.',
        '20. PROWIZORYCZNE DOMKNIĘCIE POZNAWCZE — pośpieszne podejmowanie złej decyzji byle tylko przerwać napięcie niewiedzy.',
        '21. SPRAWCZOŚĆ OPERACYJNA — skupienie 100% uwagi na najmniejszym kolejnym fizycznym kroku.',
        '22. PĘTLA KOREKTY — cykliczne porównywanie wyników cząstkowych z założeniami i wprowadzanie poprawek.',
        '23. ZASOBY BAZOWE — sen, kalorie, regeneracja i uwaga niezbędne do prawidłowej pracy kory przedczołowej.',
        '24. BŁĄD WYNIKU (Outcome Bias) — nielogiczne ocenianie jakości decyzji wyłącznie po jej losowym rezultacie.',
        '25. WIELKA MAPA ADAPTACJI — 11-stopniowy algorytm postępowania po każdym nieprzewidzianym zakłóceniu.'
      ]
    },

    // CZĘŚĆ XVII — NARZĘDZIOWNIK (32.30)
    {
      id: 'sec-32-30',
      pageNumber: 1740,
      sectionNumber: '32.30',
      title: 'Narzędziownik Odporności i Adaptacji: 10 Gotowych Formularzy Operacyjnych',
      category: 'cwiczenia',
      readingTimeMinutes: 22,
      paragraphs: [
        'Oto zestaw 10 formularzy roboczych do skopiowania do osobistego dziennika operacyjnego:\n• FORMULARZ 1: Trzy Kręgi Kontroli (Co kontroluję / Na co wpływam / Czego nie kontroluję);\n• FORMULARZ 2: Karta Analizy Zakłócenia (Fakt vs Interpretacja);\n• FORMULARZ 3: Matryca Planu A / B / C;\n• FORMULARZ 4: Protokół Analizy Błędu bez Samoosądu (10 kroków);\n• FORMULARZ 5: Algorytm Pivotu Taktycznego (Czy cel ważny? Czy metoda działa?);\n• FORMULARZ 6: Tygodniowy Dziennik Tolerowania Niepewności;\n• FORMULARZ 7: Bilans Zasobów Psychobiologicznych (Bateria 0-100%);\n• FORMULARZ 8: Mapa Sieci Wsparcia Społecznego (Do kogo dzwonię w jakiej sprawie);\n• FORMULARZ 9: Audyt Kosztów Długoterminowych Strategii Radzenia Sobie;\n• FORMULARZ 10: 24-godzinny Plan Powrotu do Działania (Bounce-Back Plan).'
      ]
    },

    // CZĘŚĆ XVIII — PROGRAM 14 DNI (32.31)
    {
      id: 'sec-32-31',
      pageNumber: 1750,
      sectionNumber: '32.31',
      title: 'Program Treningowy: „14 Dni Praktycznej Adaptacji” — Krok po Kroku',
      category: 'cwiczenia',
      readingTimeMinutes: 24,
      paragraphs: [
        'Dzień 1: Audyt własnych automatycznych reakcji na stres i zakłócenia.',
        'Dzień 2: Oczyszczanie języka — ćwiczenie Fakt vs Interpretacja w 5 sytuacjach dnia.',
        'Dzień 3: Praktyka Dychotomii Kontroli — rozrysowanie trzech kręgów dla bieżących spraw.',
        'Dzień 4: Audyt strategii radzenia sobie — identyfikacja ucieczek i tłumienia.',
        'Dzień 5: Analiza jednego niedawnego błędu z użyciem protokołu 10 kroków.',
        'Dzień 6: Opracowanie Planu B i C dla najważniejszego projektu tego miesiąca.',
        'Dzień 7: Eksperyment tolerancji niepewności w mikroskali (spacer bez planu / decyzja z 60% danych).',
        'Dzień 8: Odporność relacyjna — wykonanie telefonu i poproszenie o konkretną radę lub wsparcie.',
        'Dzień 9: Pivot narzędziowy — zmiana jednej nieskutecznej metody codziennej.',
        'Dzień 10: Mały eksperyment behawioralny poza strefą rutyny.',
        'Dzień 11: Audyt i regeneracja zasobów bazowych (sen, dieta, redukcja ekranów).',
        'Dzień 12: Praca z nieprzewidywalnością — technika „Trzech Scenariuszy” dla trudnej rozmowy.',
        'Dzień 13: Stworzenie spersonalizowanego Protokołu Kryzysowego A–J.',
        'Dzień 14: Podsumowanie postępów, wnioski z dziennika i wdrożenie nawyku elastyczności.'
      ]
    },

    // CZĘŚĆ XIX — MOST DO NASTĘPNEGO ROZDZIAŁU (32.32)
    {
      id: 'sec-32-32',
      pageNumber: 1760,
      sectionNumber: '32.32',
      title: 'Odporność nie kończy się na przetrwaniu: Wielka Mapa Adaptacji i Most do Przyszłości',
      category: 'podsumowanie',
      readingTimeMinutes: 20,
      quote: {
        text: 'Nie bój się, że świat zmieni reguły gry. Bój się jedynie tego, że zapomnisz, kim jesteś i w co wierzysz, gdy wiatr zmieni kierunek.',
        author: 'Kanon Samokształtowania'
      },
      paragraphs: [
        'WIELKA MAPA ADAPTACJI — 11 KROKÓW NAWIGACYJNYCH:\n1. ZAUWAŻ (Zarejestruj zakłócenie bez paniki) $\\rightarrow$\n2. ZATRZYMAJ AUTOMATYCZNĄ REAKCJĘ (Weź oddech, nie pisz pod wpływem afektu) $\\rightarrow$\n3. ODDZIEL FAKTY OD INTERPRETACJI (Opisz sytuację jak kamera wideo) $\\rightarrow$\n4. OKREŚL KONTROLĘ I WPŁYW (Wydziel strefę A, B i C) $\\rightarrow$\n5. OCEŃ STAN ZASOBÓW BAZOWYCH (Sen, regeneracja, obciążenie) $\\rightarrow$\n6. WYBIERZ STRATEGIĘ (Plan A/B/C lub pivot taktyczny) $\\rightarrow$\n7. WYKONAJ NAJMNIEJSZY MIKRORUCH (2 minuty sprawczości) $\\rightarrow$\n8. OBSERWUJ WYNIK I ZBIERZ DANE $\\rightarrow$\n9. UCZ SIĘ NA BŁĘDACH BEZ SAMOOSĄDU $\\rightarrow$\n10. KORYGUJ PARAMETRY METODY $\\rightarrow$\n11. ADAPTUJ SIĘ I IDŹ DALEJ Z PODNIESIONĄ GŁOWĄ.',
        'MOST DO KOLEJNYCH HORYZONTÓW:\nPrzeszedłeś przez fundamenty biologii umysłu, labirynt relacji społecznych oraz pełną inżynierię samokształtowania i adaptacji. Poznałeś swoje mechanizmy obronne, granice, nawyki i narzędzia pracy z niepewnością.',
        'Co dzieje się z człowiekiem, kiedy przestaje jedynie reagować na rzeczywistość, a zaczyna świadomie projektować sposób, w jaki będzie się do niej odnosił w wielkich systemach społecznych, technologicznych i cywilizacyjnych przyszłości? Na to pytanie odpowiemy w kolejnych etapach naszej wspólnej intelektualnej podróży.',
        'Zachowaj spokój, szanuj fakty, chroń swoje wartości i bądź elastycznym twórcą swojego życia.'
      ]
    }
  ]
};
