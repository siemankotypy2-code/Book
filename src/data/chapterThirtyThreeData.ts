import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 17 (GLOBALNIE ROZDZIAŁ 33 W STRUKTURZE DZIEŁA)
 * TYTUŁ: WPŁYW SPOŁECZNY — JAK INNI LUDZIE KSZTAŁTUJĄ NASZE DECYZJE I ZACHOWANIA
 * PODTYTUŁ: Mechanizmy konformizmu, perswazji, autorytetu, dynamiki grupowej i obrony własnej autonomii
 */

export const chapterThirtyThreeExamQuestions: ExamQuestion[] = [
  // POZIOM 1 — WIEDZA DEFINICYJNA I TEORETYCZNA (1-10)
  {
    id: 1,
    question: 'Jaka jest kluczowa różnica między informacyjnym a normatywnym wpływem społecznym wg klasycznej typologii Deutscha i Gerarda?',
    topic: 'Podstawowe Rodzaje Wpływu Społecznego',
    sectionRef: 'Sekcja 33.3',
    options: [
      { label: 'A', text: 'Wpływ informacyjny wynika z pragnienia posiadania trafnej wiedzy o świecie w sytuacji niepewności, natomiast wpływ normatywny wynika z pragnienia akceptacji, unikania odrzucenia i dopasowania do norm grupy.', isCorrect: true },
      { label: 'B', text: 'Wpływ informacyjny zawsze wiąże się z przemocą fizyczną, a normatywny z perswazją werbalną.', isCorrect: false },
      { label: 'C', text: 'Wpływ normatywny zachodzi tylko w internecie, a informacyjny w bezpośrednich relacjach.', isCorrect: false },
      { label: 'D', text: 'Wpływ informacyjny dotyczy wyłącznie dzieci, a normatywny osób dorosłych.', isCorrect: false }
    ],
    explanation: 'Informacyjny wpływ społeczny polega na traktowaniu zachowań i opinii innych jako rzetelnego źródła danych o rzeczywistości (prowadzi często do prywatnej akceptacji). Wpływ normatywny motywowany jest lękiem przed ostracyzmem i potrzebą przynależności (prowadzi często do publicznego konformizmu bez wewnętrznej zmiany przekonań).',
    keyTakeaway: 'Informacyjny = „inni wiedzą lepiej”; Normatywny = „chcę być zaakceptowany i bezpieczny w grupie”.'
  },
  {
    id: 2,
    question: 'Co wykazał klasyczny eksperyment Solomona Ascha z oceną długości odcinków?',
    topic: 'Eksperyment Ascha i Konformizm',
    sectionRef: 'Sekcja 33.4',
    options: [
      { label: 'A', text: 'Około 75% badanych przynajmniej raz uległo jednogłośnej, ewidentnie błędnej opinii większości, nawet gdy zadanie było percepcyjnie jednoznaczne.', isCorrect: true },
      { label: 'B', text: 'Wszyscy badani bez wyjątku zawsze kłamali pod wpływem autorytetu eksperymentatora.', isCorrect: false },
      { label: 'C', text: 'Konformizm nie występuje, gdy zadanie dotyczy bodźców wzrokowych.', isCorrect: false },
      { label: 'D', text: 'Badani natychmiast opuszczali laboratorium, protestując przeciwko kłamstwu grupy.', isCorrect: false }
    ],
    explanation: 'Eksperyment Ascha (1951) dobitnie udowodnił, że presja jednomyślnej grupy potrafi skłonić racjonalnego człowieka do podważenia własnego zmysłu wzroku lub publicznego wyparcia się oczywistej prawdy.',
    keyTakeaway: 'Jednomyślna grupa wywiera potężny nacisk normatywny i zniekształca deklaracje jednostki.'
  },
  {
    id: 3,
    question: 'Jaki czynnik w wariancie eksperymentu Ascha drastycznie obniżał poziom konformizmu (z ~37% błędnych odpowiedzi do zaledwie ~5%)?',
    topic: 'Czynniki Przełamujące Konformizm',
    sectionRef: 'Sekcja 33.4',
    options: [
      { label: 'A', text: 'Obecność choćby jednego sojusznika (innej osoby wyłamującej się z jednomyślności grupy i podającej poprawną odpowiedź).', isCorrect: true },
      { label: 'B', text: 'Zwiększenie liczby osób w grupie z 7 do 20.', isCorrect: false },
      { label: 'C', text: 'Podanie badanym kofeiny przed testem.', isCorrect: false },
      { label: 'D', text: 'Zgaszenie światła w laboratorium.', isCorrect: false }
    ],
    explanation: 'Złamanie jednomyślności grupy — nawet przez jedną osobę — drastycznie redukuje lęk przed osamotnieniem i przywraca odwagę do samodzielnego, niezależnego myślenia.',
    keyTakeaway: 'Jeden głos sprzeciwu wystarczy, by rozbić hipnotyczną presję jednomyślnego stada.'
  },
  {
    id: 4,
    question: 'Co według Stanleya Milgrama stanowiło główny psychologiczny mechanizm posłuszeństwa badanych aplikujących niebezpieczne wstrząsy elektryczne?',
    topic: 'Stan Agentalny i Posłuszeństwo Wobec Autorytetu',
    sectionRef: 'Sekcja 33.5',
    options: [
      { label: 'A', text: 'Przejście w tzw. stan agentalny (agentic state), w którym jednostka postrzega siebie jako wykonawcę woli autorytetu, zwalniając się z osobistej odpowiedzialności moralnej za skutki swoich czynów.', isCorrect: true },
      { label: 'B', text: 'Wrodzony sadyzm większości populacji ujawniający się w warunkach laboratoryjnych.', isCorrect: false },
      { label: 'C', text: 'Brak inteligencji logicznej i niezdolność do zrozumienia skali woltów.', isCorrect: false },
      { label: 'D', text: 'Zjawisko hipnozy wywołane białym fartuchem badacza.', isCorrect: false }
    ],
    explanation: 'W stanie agentalnym człowiek rezygnuje z autonomii i wewnętrznego kompasu moralnego na rzecz lojalności wobec hierarchii i instytucji, przypisując pełną odpowiedzialność osobie wydającej polecenia.',
    keyTakeaway: 'Stan agentalny wyłącza sumienie w imię posłuszeństwa procedurze i autorytetowi.'
  },
  {
    id: 5,
    question: 'Na czym polega Reguła Wzajemności opisana przez Roberta Cialdiniego?',
    topic: 'Reguły Wpływu — Wzajemność',
    sectionRef: 'Sekcja 33.6',
    options: [
      { label: 'A', text: 'Głęboko zakorzenionym w kulturze i ewolucji przymusie odwdzięczenia się osobie, która wyświadczyła nam jakąkolwiek przysługę lub dała podarunek, nawet nieproszony.', isCorrect: true },
      { label: 'B', text: 'Zasadzie, że należy zawsze karać ludzi, którzy mają inne poglądy.', isCorrect: false },
      { label: 'C', text: 'Zasadzie finansowej nakazującej płacenie podatków w terminie.', isCorrect: false },
      { label: 'D', text: 'Potrzebie naśladowania osób o wyższym statusie materialnym.', isCorrect: false }
    ],
    explanation: 'Reguła wzajemności tworzy silny dyskomfort psychiczny i poczucie długu, co bywa wykorzystywane w manipulacji (np. darmowa próbka przed złożeniem nieproporcjonalnie dużej prośby).',
    keyTakeaway: 'Nieproszony podarunek potrafi wytworzyć przymus psychologicznego odwdzięczenia się z nawiązką.'
  },
  {
    id: 6,
    question: 'W jakich warunkach zjawisko Społecznego Dowodu Słuszności (Social Proof) wywiera na ludzi najsilniejszy wpływ?',
    topic: 'Społeczny Dowód Słuszności',
    sectionRef: 'Sekcja 33.6',
    options: [
      { label: 'A', text: 'W warunkach wysokiej niepewności i wieloznaczności sytuacji oraz gdy obserwowane osoby są postrzegane jako podobne do nas.', isCorrect: true },
      { label: 'B', text: 'Gdy sytuacja jest w 100% jasna, a reguły matematycznie zdefiniowane.', isCorrect: false },
      { label: 'C', text: 'Gdy jednostka znajduje się w całkowitej izolacji bez dostępu do informacji.', isCorrect: false },
      { label: 'D', text: 'Wyłącznie podczas snu i w stanach zmienionej świadomości.', isCorrect: false }
    ],
    explanation: 'Kiedy nie wiemy, co zrobić (niepewność) lub gdy szukamy punktu odniesienia, zakładamy heurystycznie, że większość ma rację, szczególnie jeśli są to ludzie podobni do nas demograficznie lub społecznie.',
    keyTakeaway: 'Niepewność + podobieństwo = maksymalna podatność na zachowania tłumu.'
  },
  {
    id: 7,
    question: 'Czym charakteryzuje się zjawisko Myślenia Grupowego (Groupthink) zidentyfikowane przez Irvinga Janisa?',
    topic: 'Zjawiska Grupowe — Groupthink',
    sectionRef: 'Sekcja 33.7',
    options: [
      { label: 'A', text: 'Tendencją spójnych zespołów decyzyjnych do priorytetyzowania jednomyślności i pozornej harmonii ponad realistyczną, krytyczną ocenę faktów i alternatywnych rozwiązań.', isCorrect: true },
      { label: 'B', text: 'Wspólnym rozwiązywaniem łamigłówek logicznych przez ekspertów.', isCorrect: false },
      { label: 'C', text: 'Konfliktem uniemożliwiającym podjęcie jakiejkolwiek decyzji.', isCorrect: false },
      { label: 'D', text: 'Całkowitym brakiem lidera w strukturze organizacji.', isCorrect: false }
    ],
    explanation: 'Myślenie grupowe prowadzi do złudzenia nieomylności, cenzurowania wątpliwości przez samych członków grupy, presji na dysydentów i podejmowania katastrofalnych decyzji strategicznych.',
    keyTakeaway: 'Groupthink to iluzja zgodności kosztem realizmu i krytycznego myślenia.'
  },
  {
    id: 8,
    question: 'Dlaczego w zjawisku Efektu Widza (Bystander Effect) obecność wielu świadków wypadku paradoksalnie ZMNIEJSZA szansę na udzielenie pomocy ofierze?',
    topic: 'Efekt Widza i Rozproszenie Odpowiedzialności',
    sectionRef: 'Sekcja 33.8',
    options: [
      { label: 'A', text: 'Następuje rozproszenie odpowiedzialności („ktoś inny zareaguje”) oraz zjawisko niewiedzy wielu / pluralistycznej ignorancji (obserwując spokój innych, wnioskujemy, że sytuacja nie jest groźna).', isCorrect: true },
      { label: 'B', text: 'Ludzie z natury nienawidzą pomagać innym w miejscach publicznych.', isCorrect: false },
      { label: 'C', text: 'Świadkowie zawsze obawiają się kary śmierci za udzielenie pierwszej pomocy.', isCorrect: false },
      { label: 'D', text: 'Obecność tłumu uniemożliwia fizyczny ruch ciała.', isCorrect: false }
    ],
    explanation: 'Rozproszenie odpowiedzialności dzieli ciężar moralny przez liczbę obecnych, a pluralistyczna ignorancja sprawia, że wszyscy wzajemnie utwierdzają się w bierności, widząc brak reakcji sąsiadów.',
    keyTakeaway: 'Gdy wszyscy są odpowiedzialni, nikt nie czuje się odpowiedzialny.'
  },
  {
    id: 9,
    question: 'Na czym polega technika manipulacyjna „Stopa w drzwiach” (Foot-in-the-door)?',
    topic: 'Sekwencyjne Techniki Wpływu',
    sectionRef: 'Sekcja 33.9',
    options: [
      { label: 'A', text: 'Skłonieniu osoby do spełnienia najpierw bardzo małej, bezproblemowej prośby, co uruchamia mechanizm zaangażowania i spójności z własnym wizerunkiem, ułatwiając późniejszą zgodę na znacznie większą prośbę docelową.', isCorrect: true },
      { label: 'B', text: 'Fizycznym zablokowaniu drzwi klienta podczas prezentacji handlowej.', isCorrect: false },
      { label: 'C', text: 'Rozpoczęciu od wygórowanego żądania, a następnie ustąpieniu na rzecz mniejszej kwoty.', isCorrect: false },
      { label: 'D', text: 'Wykonywaniu agresywnych telefonów o 6 rano.', isCorrect: false }
    ],
    explanation: 'Człowiek, który raz zgodził się na małą przysługę, zaczyna postrzegać siebie jako osobę pomocną i kooperatywną, co drastycznie zwiększa prawdopodobieństwo spełnienia większych próśb w imię autokonsekwencji.',
    keyTakeaway: 'Mała zgoda otwiera psychologiczne wrota do wielkich ustępstw.'
  },
  {
    id: 10,
    question: 'Czym jest zjawisko „Efektu Trzeciej Osoby” (Third-Person Effect) w psychologii perswazji i mediów?',
    topic: 'Złudzenie Odporności na Wpływ',
    sectionRef: 'Sekcja 33.11',
    options: [
      { label: 'A', text: 'Powszechnym złudzeniem poznawczym, że reklamy, propaganda i manipulacje wpływają na „innych, naiwnych ludzi”, podczas gdy ja sam jestem na nie w pełni uodporniony i podejmuję suwerenne decyzje.', isCorrect: true },
      { label: 'B', text: 'Mówieniem o sobie wyłącznie w trzeciej osobie liczby pojedynczej.', isCorrect: false },
      { label: 'C', text: 'Obserwowaniem zdarzeń przez kamerę zewnętrzną w grach wideo.', isCorrect: false },
      { label: 'D', text: 'Przekonaniem, że w każdym pokoju znajduje się ukryty szpieg.', isCorrect: false }
    ],
    explanation: 'Złudzenie odporności to największy sojusznik manipulatora: człowiek, który uważa się za całkowicie niewrażliwego na wpływ, nie włącza czujności krytycznej i ulega perswazji najszybciej.',
    keyTakeaway: 'Przekonanie: „mnie nikt nie zmanipuluje” to pierwszy krok do bycia zmanipulowanym.'
  },

  // POZIOM 2 — ANALIZA SYTUACYJNA I PRZYPADKI (11-20)
  {
    id: 11,
    question: 'Podczas zebrania zarządu startupu prezes przedstawia ryzykowny plan przejęcia upadającej spółki. Wszyscy dyrektorzy kiwają głowami, choć prywatnie trzej z nich uważają to za katastrofę. Nikt się nie odzywa, bo „skoro inni milczą, to widocznie wszystko przemyśleli”. Jakie zjawisko tu zaszło?',
    topic: 'Analiza Dynamiki Grupowej',
    sectionRef: 'Sekcja 33.7 & 33.12',
    options: [
      { label: 'A', text: 'Pluralistyczna ignorancja i myślenie grupowe (Groupthink) z iluzją jednomyślności.', isCorrect: true },
      { label: 'B', text: 'Autentyczny konsensus strategiczny oparty na twardych danych.', isCorrect: false },
      { label: 'C', text: 'Zjawisko facylitacji społecznej podnoszące sprawność logiczną.', isCorrect: false },
      { label: 'D', text: 'Efekt Pigmaliona w zarządzaniu zespołem.', isCorrect: false }
    ],
    explanation: 'Milczenie zostało zinterpretowane jako pełna akceptacja, a lęk przed byciem „hamulcowym” zablokował krytyczne głosy doradcze.',
    keyTakeaway: 'W myśleniu grupowym brak sprzeciwu jest błędnie utożsamiany z powszechną zgodą.'
  },
  {
    id: 12,
    question: 'Przechodzień na zatłoczonym peronie widzi leżącego na ławce mężczyznę, który trzyma się za klatkę piersiową. Wokół przechodzą dziesiątki ludzi, którzy nie reagują, lecz patrzą w telefony. Co powinien zrobić świadek, aby skutecznie przełamać efekt widza?',
    topic: 'Przełamywanie Efektu Widza',
    sectionRef: 'Sekcja 33.8',
    options: [
      { label: 'A', text: 'Wskazać palcem konkretną osobę z tłumu, nawiązać kontakt wzrokowy i wydać precyzyjne polecenie: „Pan w niebieskiej kurtce, proszę natychmiast dzwonić pod 112, ten człowiek ma zawał!”.', isCorrect: true },
      { label: 'B', text: 'Krzyczeć ogólnie w przestrzeń: „Niech ktoś coś zrobi!” i czekać na reakcję tłumu.', isCorrect: false },
      { label: 'C', text: 'Uznać, że skoro nikt nie reaguje, to mężczyzna prawdopodobnie tylko odpoczywa.', isCorrect: false },
      { label: 'D', text: 'Nagrać film telefonem i wrzucić do sieci z pytaniem, czy ktoś zna tego człowieka.', isCorrect: false }
    ],
    explanation: 'Indywidualizacja odpowiedzialności i precyzyjne zadanie znoszą rozproszenie odpowiedzialności i jednoznacznie definiują sytuację jako zagrożenie życia.',
    keyTakeaway: 'Aby przełamać efekt widza, zindywidualizuj odpowiedzialność: wskaż konkretną osobę i nadaj jednoznaczne zadanie.'
  },
  {
    id: 13,
    question: 'W sklepie internetowym obok kursu pojawia się licznik: „Tylko 3 miejsca w tej cenie! Zegar odlicza: 04:12 do końca oferty. 47 osób właśnie ogląda ten produkt”. Jakie reguły wpływu zostały tu skumulowane?',
    topic: 'Reguły Wpływu w Praktyce E-commerce',
    sectionRef: 'Sekcja 33.6 & 33.14',
    options: [
      { label: 'A', text: 'Reguła Niedostępności (niedobór czasu i ilości) oraz Społeczny Dowód Słuszności (inni też to oglądają).', isCorrect: true },
      { label: 'B', text: 'Reguła Wzajemności oraz Autorytetu naukowego.', isCorrect: false },
      { label: 'C', text: 'Dychotomia Kontroli i Stan Agentalny.', isCorrect: false },
      { label: 'D', text: 'Deindywiduacja i Efekt Pigmaliona.', isCorrect: false }
    ],
    explanation: 'Połączenie sztucznego niedoboru (niedostępność wywołuje lęk przed stratą) z dowodem społecznym (inni kupują, więc to musi być cenne) tworzy silny impuls zakupowy oparty na heurystyce FOMO.',
    keyTakeaway: 'Sztuczny pośpiech + widok zainteresowanego tłumu to klasyczny duet manipulacji uwagą konsumenta.'
  },
  {
    id: 14,
    question: 'Pracownik banku otrzymuje telefon od osoby przedstawiającej się jako „Główny Audytor Bezpieczeństwa Centrali”. Rozmówca używa technicznego żargonu, mówi stanowczym, nieznoszącym sprzeciwu tonem i żąda pilnego zresetowania haseł dostępowych pod groźbą zwolnienia dyscyplinarnego. Na czym bazuje ten atak socjotechniczny?',
    topic: 'Socjotechnika i Autorytet',
    sectionRef: 'Sekcja 33.5 & 33.10',
    options: [
      { label: 'A', text: 'Na wymuszeniu posłuszeństwa wobec pozorowanego autorytetu, presji czasowej i wywołaniu stanu agentalnego poprzez lęk przed karą instytucjonalną.', isCorrect: true },
      { label: 'B', text: 'Na czystej sympatii interpersonalnej i chęci nawiązania przyjaźni.', isCorrect: false },
      { label: 'C', text: 'Na regule wzajemności i wdzięczności za audyt.', isCorrect: false },
      { label: 'D', text: 'Na głębokiej analizie matematycznej algorytmów kryptograficznych.', isCorrect: false }
    ],
    explanation: 'Symbole autorytetu (tytuł, stanowisko, żargon, groźba sankcji) paraliżują analityczne myślenie i skłaniają do uległości bez uprzedniej weryfikacji tożsamości.',
    keyTakeaway: 'Oszustwa socjotechniczne nie atakują komputerów — atakują ludzką uległość wobec autorytetu.'
  },
  {
    id: 15,
    question: 'Fundacja charytatywna wysyła list z personalizowanymi naklejkami adresowymi i małym kalendarzykiem, a dopiero na końcu prosi o wpłatę darowizny. Jaka technika została zastosowana i dlaczego działa?',
    topic: 'Zastosowanie Reguły Wzajemności',
    sectionRef: 'Sekcja 33.6',
    options: [
      { label: 'A', text: 'Reguła wzajemności — odbiorca otrzymuje darmowy prezent, co wywołuje nieuświadomione poczucie zobowiązania moralnego i zwiększa skłonność do rewanżu w postaci wpłaty.', isCorrect: true },
      { label: 'B', text: 'Technika drzwiami w twarz — proszą o zbyt dużo, by potem zmniejszyć oczekiwania.', isCorrect: false },
      { label: 'C', text: 'Eksperyment Ascha na percepcję rozmiaru kalendarza.', isCorrect: false },
      { label: 'D', text: 'Warunkowanie klasyczne Pawłowa.', isCorrect: false }
    ],
    explanation: 'Nawet bezwartościowy drobiazg aktywuje ewolucyjną normę odwzajemnienia, sprawiając, że wyrzucenie listu bez wpłaty wywołuje dyskomfort psychiczny.',
    keyTakeaway: 'Drobny podarunek z góry dramatycznie zwiększa wskaźnik konwersji próśb o wsparcie.'
  },
  {
    id: 16,
    question: 'Kiedy polityk mówi: „Musimy chronić nasze rodziny przed zalewem przestępczości” zamiast „Wskaźnik kradzieży wzrósł o 0,4%”, stosuje technikę:',
    topic: 'Ramowanie Językowe i Emocjonalne',
    sectionRef: 'Sekcja 33.9',
    options: [
      { label: 'A', text: 'Ramowania emocjonalnego (Framing) z wykorzystaniem metafory zagrożenia egzystencjalnego w celu ominięcia racjonalnej debaty o faktach.', isCorrect: true },
      { label: 'B', text: 'Ścisłej analizy ekonometrycznej opartej na logice arystotelesowskiej.', isCorrect: false },
      { label: 'C', text: 'Neutralnego raportowania statystycznego.', isCorrect: false },
      { label: 'D', text: 'Metody podwójnie ślepej próby.', isCorrect: false }
    ],
    explanation: 'Ramowanie (framing) narzuca odbiorcy filtr poznawczy, w którym zjawisko jest postrzegane nie przez pryzmat liczb, lecz pierwotnego lęku o bezpieczeństwo bliskich.',
    keyTakeaway: 'Sposób ubrania informacji w słowa decyduje o tym, które obwody mózgu zostaną aktywowane — emocjonalne czy analityczne.'
  },
  {
    id: 17,
    question: 'W grupie dyskusyjnej w mediach społecznościowych osoby o umiarkowanie sceptycznych poglądach wobec nowej technologii po 3 tygodniach rozmów wyłącznie we własnym gronie stają się radykalnymi fanatykami głoszącymi spiskowe teorie. Jaki proces psychologii społecznej tu zaszło?',
    topic: 'Polaryzacja Grupowa i Komory Echa',
    sectionRef: 'Sekcja 33.7 & 33.10',
    options: [
      { label: 'A', text: 'Polaryzacja grupowa w komorze echa — wzajemne utwierdzanie się w argumentach jednostronnych i licytacja na radykalizm w celu zdobycia statusu w grupie.', isCorrect: true },
      { label: 'B', text: 'Obiektywne oświecenie naukowe wynikające z wolnej dyskusji.', isCorrect: false },
      { label: 'C', text: 'Naturalne wygaszanie emocji na skutek długotrwałego dialogu.', isCorrect: false },
      { label: 'D', text: 'Zjawisko reaktancji psychicznej wobec lidera grupy.', isCorrect: false }
    ],
    explanation: 'Izolacja informacyjna w połączeniu z chęcią zyskania aprobaty prowadzi do przesunięcia średniej opinii grupy na skrajne pozycje (efekt polaryzacji).',
    keyTakeaway: 'Grupa ludzi o podobnych uprzedzeniach dyskutująca w izolacji nie dochodzi do umiaru, lecz do radykalizmu.'
  },
  {
    id: 18,
    question: 'Sprzedawca samochodów proponuje klientowi niezwykle atrakcyjną cenę 80 000 zł. Klient zgadza się, wypełnia wstępne formularze i mentalnie uważa auto za swoje. Po godzinie sprzedawca wraca „zakłopotany” i mówi, że dyrektor nie wyraził zgody na ten rabat i cena musi wynieść 86 000 zł. Klient mimo to kupuje auto. Jak nazywa się ta technika?',
    topic: 'Technika Niskiej Piłki (Low-ball)',
    sectionRef: 'Sekcja 33.9',
    options: [
      { label: 'A', text: 'Technika „Niskiej Piłki” (Low-ball technique) oparta na pułapce zaangażowania i samousprawiedliwiania decyzji.', isCorrect: true },
      { label: 'B', text: 'Technika „Drzwiami w twarz”.', isCorrect: false },
      { label: 'C', text: 'Zasada sympatii i podobieństwa.', isCorrect: false },
      { label: 'D', text: 'Metoda Sokratejska.', isCorrect: false }
    ],
    explanation: 'Gdy klient podjął już decyzję i wytworzył psychologiczne uzasadnienia zakupu, usunięcie początkowej przynęty cenowej nie unieważnia wygenerowanego zaangażowania.',
    keyTakeaway: 'Niska piłka więzi człowieka w jego własnej potrzebie bycia konsekwentnym.'
  },
  {
    id: 19,
    question: 'W eksperymentach nad posłuszeństwem Milgrama, co powodowało największy spadek gotowości do rażenia prądem (spadek posłuszeństwa do zaledwie kilkunastu procent)?',
    topic: 'Czynniki Redukujące Posłuszeństwo',
    sectionRef: 'Sekcja 33.5',
    options: [
      { label: 'A', text: 'Fizyczna bliskość ofiary (trzymanie jej dłoni na płytce z prądem) oraz sprzeciw innych badanych (tzw. bunt zbuntowanych rówieśników).', isCorrect: true },
      { label: 'B', text: 'Zaoferowanie badanym wyższej zapłaty za przerwanie testu.', isCorrect: false },
      { label: 'C', text: 'Zwiększenie autorytetu instytucji poprzez przeniesienie do droższego budynku.', isCorrect: false },
      { label: 'D', text: 'Przekazanie instrukcji w języku łacińskim.', isCorrect: false }
    ],
    explanation: 'Bezpośredni kontakt z cierpieniem drugiego człowieka przywraca empatię i rozbija dystans emocjonalny, a obecność osób odmawiających posłuszeństwa legalizuje bunt.',
    keyTakeaway: 'Bliskość ofiary i widok innych odmawiających posłuszeństwa przywraca autonomię moralną.'
  },
  {
    id: 20,
    question: 'Jaką rolę w odporności na manipulację i presję grupy pełni tzw. „Protokół Pauzy Poznawczej”?',
    topic: 'Praktyczne Metody Obrony Autonomii',
    sectionRef: 'Sekcja 33.17 & 33.19',
    options: [
      { label: 'A', text: 'Wymusza odroczenie decyzji w czasie (np. zasada 24 godzin lub wyjście z pomieszczenia), co wygasza pobudzenie emocjonalne i umożliwia aktywację kory przedczołowej.', isCorrect: true },
      { label: 'B', text: 'Polega na natychmiastowym krzyku w celu przestraszenia rozmówcy.', isCorrect: false },
      { label: 'C', text: 'Zastępuje myślenie logiczne rzutem monetą.', isCorrect: false },
      { label: 'D', text: 'Służy do udawania utraty przytomności w trudnych sytuacjach.', isCorrect: false }
    ],
    explanation: 'Manipulatorzy zawsze budują sztuczny pośpiech („musisz zdecydować teraz!”). Odroczenie decyzji rozbraja pułapkę presji natychmiastowości i przywraca chłodny osąd.',
    keyTakeaway: 'Czas jest naturalnym antidotum na socjotechnikę i presję emocjonalną.'
  },

  // POZIOM 3 — ZAAWANSOWANA SYNTEZA, ETYKA I WNIOSKI (21-30)
  {
    id: 21,
    question: 'Jaka jest fundamentalna granica etyczna między uczciwą perswazją a manipulacją psychologiczną?',
    topic: 'Etyka Wpływu Społecznego',
    sectionRef: 'Sekcja 33.16',
    options: [
      { label: 'A', text: 'Perswazja jest transparentna, szanuje wolność wyboru odbiorcy i operuje prawdziwymi faktami w jego interesie lub obopólnej korzyści, podczas gdy manipulacja ukrywa intencje, zniekształca dane i realizuje cel nadawcy kosztem nieświadomego odbiorcy.', isCorrect: true },
      { label: 'B', text: 'Perswazja dotyczy tylko polityki, a manipulacja tylko handlu.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy — każda interakcja międzyludzka jest w 100% manipulacją.', isCorrect: false },
      { label: 'D', text: 'Perswazję stosują wyłącznie kobiety, a manipulację wyłącznie mężczyźni.', isCorrect: false }
    ],
    explanation: 'Różnica tkwi w trzech wektorach: przejrzystości intencji, prawdomówności przekazu i poszanowaniu autonomii decyzyjnej odbiorcy.',
    keyTakeaway: 'Uczciwy wpływ daje wolność odmowy; manipulacja odbiera świadomość wyboru.'
  },
  {
    id: 22,
    question: 'Co dzieje się w mózgu człowieka podczas doświadczania ostrego odrzucenia społecznego lub ostracyzmu według badań fMRI (m.in. Naomi Eisenberger)?',
    topic: 'Neurobiologia Odrzucenia Społecznego',
    sectionRef: 'Sekcja 33.2',
    options: [
      { label: 'A', text: 'Aktywuje się grzbietowa część przedniego zakrętu kory obręczy (dACC) i przednia wyspa — te same struktury, które rejestrują ból fizyczny.', isCorrect: true },
      { label: 'B', text: 'Mózg całkowicie wyłącza przetwarzanie bodźców zmysłowych.', isCorrect: false },
      { label: 'C', text: 'Aktywuje się wyłącznie ośrodek głodu i sytości.', isCorrect: false },
      { label: 'D', text: 'Nie zachodzi żadna mierzalna zmiana aktywności neuronalnej.', isCorrect: false }
    ],
    explanation: 'Ewolucyjnie odrzucenie z plemienia oznaczało śmierć głodową lub pożarcie przez drapieżniki, dlatego mózg traktuje ból społeczny równie alarmująco jak złamanie kości czy ranę kłutą.',
    keyTakeaway: 'Ból społeczny to nie metafora — to biologiczny alarm przetrwania w naszych obwodach nerwowych.'
  },
  {
    id: 23,
    question: 'Dlaczego inteligentni i wykształceni eksperci bywają równie podatni na błędy myślenia grupowego jak laicy?',
    topic: 'Groupthink a Poziom Wykształcenia',
    sectionRef: 'Sekcja 33.7',
    options: [
      { label: 'A', text: 'Ponieważ wyższa inteligencja dostarcza jedynie bardziej wyrafinowanych narzędzi do racjonalizacji błędnych założeń grupy, a potrzeba przynależności i lęk przed odrzuceniem w elicie naukowej pozostają biologicznie niezmienne.', isCorrect: true },
      { label: 'B', text: 'Ponieważ wykształcenie całkowicie niszczy płaty czołowe mózgu.', isCorrect: false },
      { label: 'C', text: 'Tylko osoby niewykształcone ulegają presji grupowej.', isCorrect: false },
      { label: 'D', text: 'Eksperci nigdy nie ulegają presji grupy ani autorytetów.', isCorrect: false }
    ],
    explanation: 'Intelekt jest narzędziem racjonalizującym; jeśli motywacja społeczna dąży do konformizmu, inteligencja zostanie zaprzęgnięta do wymyślania genialnych usprawiedliwień dla głupich decyzji.',
    keyTakeaway: 'Wysokie IQ nie chroni przed konformizmem — potrafi jedynie wygenerować mądrzej brzmiące racjonalizacje.'
  },
  {
    id: 24,
    question: 'Na czym polega zjawisko „Reaktancji Psychicznej” (oporu psychologicznego wg Jacka Brehma)?',
    topic: 'Reaktancja Psychiczna',
    sectionRef: 'Sekcja 33.6 & 33.17',
    options: [
      { label: 'A', text: 'Nieprzyjemnym stanie pobudzenia motywacyjnego pojawiającym się, gdy człowiek czuje, że jego swoboda wyboru jest ograniczana, co skłania go do zrobienia dokładnie tego, czego mu zakazano.', isCorrect: true },
      { label: 'B', text: 'Zgadzaniu się na każdą propozycję bez zastanowienia.', isCorrect: false },
      { label: 'C', text: 'Całkowitej apatii i braku reakcji na bodźce zewnętrzne.', isCorrect: false },
      { label: 'D', text: 'Potrzebie nieustannego przepraszania innych ludzi.', isCorrect: false }
    ],
    explanation: 'Gdy ktoś zbyt agresywnie narzuca nam zdanie („musisz to zrobić!”), reagujemy buntem nie ze względu na treść, lecz w obronie zagrożonej wolności osobistej.',
    keyTakeaway: 'Zakazany owoc smakuje najlepiej z powodu buntu przeciwko samemu zakazowi.'
  },
  {
    id: 25,
    question: 'W jaki sposób media społecznościowe wzmacniają konformizm normatywny i informacyjny?',
    topic: 'Wpływ Cyfrowy i Algorytmiczny',
    sectionRef: 'Sekcja 33.10',
    options: [
      { label: 'A', text: 'Udostępniają natychmiastowe, zliczane metryki aprobaty społecznej (lajki, udostępnienia), tworzą złudzenie powszechności niszowych poglądów i karzą algorytmicznym ostracyzmem za niepopularne opinie.', isCorrect: true },
      { label: 'B', text: 'Zmuszają użytkowników do osobistego spotykania się w świecie realnym.', isCorrect: false },
      { label: 'C', text: 'Usuwają wszelkie emocje z dyskursu publicznego.', isCorrect: false },
      { label: 'D', text: 'Podnoszą poziom krytycznego myślenia w całej populacji.', isCorrect: false }
    ],
    explanation: 'Algorytmy maksymalizujące zaangażowanie promują skrajne emocje, tworząc sztuczny dowód społeczny i wywołując nieustanny lęk przed wykluczeniem z cyfrowego plemienia.',
    keyTakeaway: 'Licznik lajków to zautomatyzowana, cyfrowa wersja eksperymentu Ascha działająca 24/7.'
  },
  {
    id: 26,
    question: 'Jaką rolę w zespole projektowym powinien pełnić oficjalnie wyznaczony „Adwokat Diabła” (Devil’s Advocate)?',
    topic: 'Instytucjonalne Zapobieganie Groupthink',
    sectionRef: 'Sekcja 33.7 & 33.17',
    options: [
      { label: 'A', text: 'Ma sformalizowany obowiązek szukania słabych punktów w każdym planie, podważania optymistycznych założeń i prezentowania alternatyw bez ryzyka bycia ukaranym za nielojalność.', isCorrect: true },
      { label: 'B', text: 'Ma za zadanie chwalić prezesa i uciszać krytyków.', isCorrect: false },
      { label: 'C', text: 'Odpowiada za zamawianie pizzy podczas nocnych maratonów pracy.', isCorrect: false },
      { label: 'D', text: 'Pilnuje, aby nikt nie zadawał trudnych pytań.', isCorrect: false }
    ],
    explanation: 'Instytucjonalizacja sceptycyzmu zdejmuje z poszczególnych osób lęk przed wykluczeniem normatywnym — krytyka staje się rolą zawodową, a nie atakiem na grupę.',
    keyTakeaway: 'Oficjalny krytyk w zespole to najlepsza szczepionka przeciwko katastrofalnemu myśleniu grupowemu.'
  },
  {
    id: 27,
    question: 'Dlaczego technika „Drzwiami w twarz” (Door-in-the-face) jest tak skuteczna w negocjacjach?',
    topic: 'Technika Ustępstwa i Wzajemności',
    sectionRef: 'Sekcja 33.9',
    options: [
      { label: 'A', text: 'Rozpoczęcie od skrajnie wygórowanej prośby (która zostaje odrzucona) sprawia, że późniejsze zmniejszenie żądania jest odbierane jako ustępstwo, co uruchamia regułę wzajemności — odbiorca czuje, że teraz on powinien ustąpić.', isCorrect: true },
      { label: 'B', text: 'Ponieważ odbiorca czuje się fizycznie zastraszony agresją negocjatora.', isCorrect: false },
      { label: 'C', text: 'Działa tylko wtedy, gdy negocjacje odbywają się w drzwiach wejściowych.', isCorrect: false },
      { label: 'D', text: 'Polega na całkowitym zignorowaniu propozycji klienta.', isCorrect: false }
    ],
    explanation: 'Zmniejszenie żądania jest interpretowane jako kompromis nadawcy, co wywołuje psychologiczny przymus zrewanżowania się kompromisem ze strony odbiorcy (efekt kontrastu + reguła wzajemności).',
    keyTakeaway: 'Ustąp ze skrajnej pozycji, a druga strona poczuje obowiązek zrobienia kroku w Twoją stronę.'
  },
  {
    id: 28,
    question: 'W jaki sposób pojęcie „Deindywiduacji” (Zimbardo, Le Bon) wyjaśnia agresywne zachowania kibiców na stadionie lub hejterów w internecie?',
    topic: 'Deindywiduacja i Zachowania Tłumu',
    sectionRef: 'Sekcja 33.7',
    options: [
      { label: 'A', text: 'Utrata poczucia indywidualnej tożsamości w tłumie lub pod maską anonimowości obniża samokontrolę, znosi osobistą odpowiedzialność moralną i podporządkowuje jednostkę prymitywnym impulsom grupy.', isCorrect: true },
      { label: 'B', text: 'Tłum zawsze podnosi poziom kultury osobistej i empatii jednostki.', isCorrect: false },
      { label: 'C', text: 'Hejt internetowy wynika wyłącznie z awarii światłowodów.', isCorrect: false },
      { label: 'D', text: 'Deindywiduacja oznacza medytację zen i spokój umysłu.', isCorrect: false }
    ],
    explanation: 'Anonimowość i rozproszenie w masie wyłączają samorefleksję i mechanizmy wstydu, sprawiając, że człowiek robi w grupie rzeczy, których nigdy nie dopuściłby się w pojedynkę.',
    keyTakeaway: 'Tłum i anonimowość zdejmują z człowieka maskę kultury i wyłączają wewnętrznego cenzora.'
  },
  {
    id: 29,
    question: 'Co według psychologii społecznej oznacza „Odporność na Wpływ bez Izolacji”? Jak zachować autonomię bez popadania w skrajny antysocjalny cynizm?',
    topic: 'Dojrzała Autonomia Społeczna',
    sectionRef: 'Sekcja 33.17 & 33.22',
    options: [
      { label: 'A', text: 'Zdolność do uczestniczenia w relacjach i czerpania z wiedzy innych przy jednoczesnym zachowaniu własnego filtru krytycznego, gotowości do bycia w mniejszości i wierności fundamentalnym wartościom.', isCorrect: true },
      { label: 'B', text: 'Zamieszkanie w samotni w lesie i całkowite zerwanie kontaktu z ludzkością.', isCorrect: false },
      { label: 'C', text: 'Zgadzanie się na wszystko, co mówią inni, byle zachować spokój w domu.', isCorrect: false },
      { label: 'D', text: 'Odrzucanie każdego faktu naukowego jako „spisku elit”.', isCorrect: false }
    ],
    explanation: 'Prawdziwa autonomia nie polega na ślepym negowaniu wszystkiego (to też forma zależności zwana kontrkonformizmem), lecz na świadomym, krytycznym wyborze, kiedy współpracować, a kiedy powiedzieć „nie”.',
    keyTakeaway: 'Autonomia to nie ucieczka od ludzi — to wolność myślenia pośród ludzi.'
  },
  {
    id: 30,
    question: 'Jaka jest kluczowa puenta łącząca Tom III i Rozdział 33 w kontekście dojrzałości człowieka?',
    topic: 'Wielka Synteza Rozdziału 33',
    sectionRef: 'Sekcja 33.22',
    options: [
      { label: 'A', text: 'Człowiek dojrzały rozumie, że inni ludzie nieustannie na niego wpływają, nie wypiera tego faktu, lecz buduje świadome granice, chroni swoje wartości i potrafi być odważnym, autonomicznym głosem prawdy w świecie pełnym presji.', isCorrect: true },
      { label: 'B', text: 'Należy manipulować wszystkimi wokół, zanim oni zmanipulują nas.', isCorrect: false },
      { label: 'C', text: 'Wpływ społeczny to mit wymyślony przez autorów podręczników.', isCorrect: false },
      { label: 'D', text: 'Najlepiej zawsze robić to, co robi większość, bo większość nigdy się nie myli.', isCorrect: false }
    ],
    explanation: 'Zwieńczeniem nauki o człowieku jest uświadomienie sobie sił społecznych, które na nas oddziałują, i przejęcie świadomej odpowiedzialności za własne wybory.',
    keyTakeaway: 'Świadomość wpływu to początek prawdziwej wolności decyzyjnej.'
  }
];

export const chapterThirtyThreeCaseStudies: CaseStudy[] = [
  {
    id: 'cs-33-1',
    title: 'Marek i Projekt „Alfa”: Kiedy milczenie zespołu prowadzi do katastrofy (Groupthink w korporacji)',
    subtitle: 'Studium przypadku uległości wobec autorytetu managera, pluralistycznej ignorancji i kosztów braku odwagi cywilnej',
    protagonist: 'Marek, 34 lata, Senior Software Architect w firmie technologicznej',
    context: 'Wdrażanie nowego systemu bankowości elektronicznej dla kluczowego klienta instytucjonalnego o budżecie 12 mln PLN.',
    story: [
      'ETAP I — ODKRYCIE WADY: Marek od trzech miesięcy wiedział, że architektura systemu narzucona przez Dyrektora Krzysztofa posiada krytyczną lukę skalowalności. Przy 10 000 transakcji baza blokowała się całkowicie.',
      'ETAP II — ZEBRANIE STATUSOWE: Krzysztof otwiera spotkanie słowami: „Nasz plan jest bezbłędny, zespół Alfa to elita. Czy ktoś ma jakiekolwiek wątpliwości przed wdrożeniem w piątek?”. Wszyscy milczą.',
      'ETAP III — PLURALISTYCZNA IGNORANCJA: Marek widzi spokój kolegów (Tomasza i Pawła) i dochodzi do fałszywego wniosku: „Skoro oni milczą, to widocznie przesadzam”.',
      'ETAP IV — KARA ZA DYSONANS: Gdy młodszy programista zadał pytanie o testy, Krzysztof uciął: „My tu dowozimy wyniki, a nie szukamy dziury w całym”.',
      'ETAP V — KATASTROFA PRODUKCYJNA: W poniedziałek o 9:15 system bankowy zablokował się na 6 godzin. Straty klienta wyniosły setki tysięcy złotych.',
      'ETAP VI — AUDYT POWDROŻENIOWY: Okazało się, że WSZYSCY czterej architekci wiedzieli o wadzie, lecz żaden nie podniósł ręki z lęku przed wykluczeniem.'
    ],
    dialogue: [
      { speaker: 'Krzysztof (Dyrektor)', text: 'Wszyscy wiemy, że nasz plan jest bezbłędny. Czy ktoś ma jakiekolwiek wątpliwości?', subtext: 'Autorytarne narzucenie iluzji jednomyślności.' },
      { speaker: 'Marek (w myślach)', text: 'Baza wybuchnie przy obciążeniu... Ale Tomasz milczy, więc pewnie nie mam racji.', subtext: 'Pluralistyczna ignorancja i zrzeczenie się osądu.' }
    ],
    decisionTaken: 'Zachowanie milczenia na zebraniu i uległość wobec autorytetu managera.',
    whatProtagonistSaw: 'Pozorny konsensus zespołu i ryzyko bycia uznanym za nielojalnego pesymistę.',
    whatWasMissed: 'Że milczenie innych było maską strachu, a zgłoszenie weta uchroniłoby firmę przed wielomilionową stratą.',
    psychologicalAnalysis: {
      coreMechanism: 'Myślenie grupowe (Groupthink) połączone z pluralistyczną ignorancją i stanem agentalnym.',
      cognitiveBiases: [
        { name: 'Iluzja Jednomyślności', description: 'Brak sprzeciwu uznany za powszechną zgodę.', impact: 'Zablokowanie krytycznego myślenia.' },
        { name: 'Efekt Autorytetu', description: 'Bezrefleksyjne podporządkowanie się dyrektorowi technicznemu.', impact: 'Wyłączenie odpowiedzialności inżynierskiej.' }
      ],
      defenseMechanisms: [
        { name: 'Racjonalizacja bierności', explanation: 'Wmawianie sobie, że inni wiedzą lepiej i że sprawa sama się rozwiąże.' }
      ],
      emotionalDynamic: 'Od lęku przed wykluczeniem przez uległe milczenie aż po wstyd i poczucie winy po katastrofie.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przedni zakręt kory obręczy (dACC)', role: 'Rejestracja konfliktu poznawczego i lęku przed ostracyzmem', activationState: 'Wysoka' },
        { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Hamowanie impulsu zgłoszenia weta pod wpływem normatywnym', activationState: 'Zdominowana przez układ limbiczny' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Wyrzut stresu społecznego paraliżujący asertywność.' }
      ],
      biologicalTimeline: [
        { timeMs: '09:00 Zebranie', process: 'Słowa dyrektora -> skok tętna -> milczenie i paraliż wykonawczy.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Groupthink & Cenzura Ostracyzmem', description: 'Etykietowanie krytyków jako czarnowidzów psujących morale.', vulnerabilityExploited: 'Potrzeba bezpieczeństwa zawodowego.' }
      ],
      counterMeasures: [
        { step: 'Instytucjonalny Adwokat Diabła', script: '„Jako inżynierowie mamy obowiązek przetestować najgorszy scenariusz. Oto dane obciążeniowe”.', rationale: 'Przeniesienie dyskusji z emocji na twarde metryki techniczne.' }
      ]
    },
    keyTakeaway: 'Brak sprzeciwu w zespole rzadko oznacza zgodę — najczęściej oznacza strach. Wystarczy jeden odważny głos, by rozbić iluzję jednomyślności.'
  },
  {
    id: 'cs-33-2',
    title: 'Ewa i Dług Wdzięczności: Manipulacja Regułą Wzajemności w Relacji Osobistej',
    subtitle: 'Studium przypadku toksycznego długu emocjonalnego, nieproszonych przysług i szantażu moralnego',
    protagonist: 'Ewa, 29 lat, graficzka freelancerka, oraz jej matka Helena',
    context: 'Planowanie ślubu, samodzielne mieszkanie i próba wyznaczenia granic życiowych wobec zaborczej matki.',
    story: [
      'ETAP I — NIEPROSZONE PRZYSŁUGI: Helena regularnie sprząta mieszkanie Ewy pod jej nieobecność i kupuje drogie sprzęty, o które Ewa nie prosiła.',
      'ETAP II — WYWOŁANIE POCZUCIA WINY: Przy każdej próbie postawienia granic matka płacze: „Ja sobie od ust odejmuję, a ty jesteś niewdzięczna!”.',
      'ETAP III — ZŁOŻENIE ŻĄDANIA: Podczas planowania ślubu Helena bez pytania wpłaca zaliczkę na orkiestrę i zaprasza 30 swoich znajomych, żądając uległości w imię wcześniejszych „darów”.',
      'ETAP IV — PARALIŻ DECYZYJNY: Ewa czuje ścisk żołądka — zinternalizowana reguła wzajemności paraliżuje jej zdolność do odmowy.',
      'ETAP V — PRZEŁAMANIE SCHEMATU: Ewa uczy się rozróżniać bezinteresowny dar od zmanipulowanego długu, zwraca zaliczkę i stawia stanowczą granicę.'
    ],
    dialogue: [
      { speaker: 'Helena (Matka)', text: 'Skoro kupiłam wam zmywarkę i sprzątam co tydzień, to chyba mam prawo wybrać muzykę na waszym ślubie?!', subtext: 'Wykorzystanie nieproszonego długu do przejęcia kontroli nad życiem córki.' },
      { speaker: 'Ewa', text: 'Mamo, dziękuję za pomoc, ale to jest nasz ślub i decyzje podejmujemy my.', subtext: 'Asertywne oddzielenie wdzięczności od prawa do samostanowienia.' }
    ],
    decisionTaken: 'Odzyskanie autonomii poprzez nazwanie mechanizmu manipulacji i odmowę spłaty nieproszonego długu.',
    whatProtagonistSaw: 'Matczyną troskę połączoną z przymusem bycia posłuszną córką.',
    whatWasMissed: 'Że nieproszona przysługa nie rodzi moralnego obowiązku podporządkowania własnego życia.',
    psychologicalAnalysis: {
      coreMechanism: 'Zwyrodniała reguła wzajemności i szantaż emocjonalny oparty na poczuciu winy.',
      cognitiveBiases: [
        { name: 'Pułapka Zobowiązania', description: 'Uznanie nieproszonego podarunku za wiążący kontrakt.', impact: 'Utrata kontroli nad własnym weselem i relacją.' }
      ],
      defenseMechanisms: [
        { name: 'Introjekcja poczucia winy', explanation: 'Przyjmowanie narracji matki, że dbanie o własne granice jest „niewdzięcznością”.' }
      ],
      emotionalDynamic: 'Od udręki i bezsilności po wyzwolenie i dojrzałą asertywność relacyjną.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Wyspa i ciało migdałowate', role: 'Generowanie somatycznego dyskomfortu poczucia winy', activationState: 'Bardzo wysoka' },
        { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Ocena wartości moralnych i wyznaczanie granic', activationState: 'Aktywowana podczas asertywnej rozmowy' }
      ],
      neurotransmitters: [
        { name: 'Oksytocyna i Dopamina', roleInScenario: 'Zaburzona dynamika przywiązania i ulga po postawieniu granic.' }
      ],
      biologicalTimeline: [
        { timeMs: 'Faza szantażu', process: 'Płacz matki -> aktywacja empatii i lęku -> uległość.' },
        { timeMs: 'Faza terapii i wglądu', process: 'Racjonalizacja granic -> wygaszenie winy -> asertywność.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Wymuszona Wzajemność & Odwracanie Ról', description: 'Narzucanie pomocy, by zyskać prawo do kontrolowania cudzych decyzji.', vulnerabilityExploited: 'Dziecięca lojalność i lęk przed odrzuceniem przez rodzica.' }
      ],
      counterMeasures: [
        { step: 'Komunikat Graniczny', script: '„Doceniam Twoją intencję, ale nie prosiłam o tę pomoc i nie wymienię mojej autonomii na sprzęt AGD”.', rationale: 'Demaskuje manipulacyjny charakter transakcji.' }
      ]
    },
    keyTakeaway: 'Nieproszona przysługa nie tworzy długu moralnego. Prawdziwy dar nie ma ukrytych warunków kontroli.'
  },
  {
    id: 'cs-33-3',
    title: 'Kacper i Pułapka Krypto-Euforii: Społeczny Dowód Słuszności i Sztuczny Niedobór',
    subtitle: 'Studium przypadku manii inwestycyjnej, presji influencerów i mechanizmu FOMO',
    protagonist: 'Kacper, 26 lat, analityk finansowy junior',
    context: 'Internetowa bańka spekulacyjna wokół tokenu krypto „SafeYield” na grupie liczącej 40 000 członków.',
    story: [
      'ETAP I — CYFROWY SOCIAL PROOF: Kacper trafia na grupę na Telegramie, gdzie widzi setki zrzutów zysków i wpisy: „Kto nie kupi, ten przegrał życie!”.',
      'ETAP II — SZTUCZNY NIEDOBÓR: Komunikaty: „Zostało tylko 2% puli, oferta kończy się o północy!” wyłączają analityczne myślenie.',
      'ETAP III — OSTRACYZM ZA SCEPTYCYZM: Gdy Kacper pyta o audyt kodu, grupa atakuje go jako „FUD-ziarza”, a moderator wycisza jego konto na 24h.',
      'ETAP IV — ULEGŁOŚĆ I FOMO: Kacper myśli: „40 000 ludzi nie może się mylić” i inwestuje 65 000 PLN (w tym 20 000 PLN z kredytu).',
      'ETAP V — KRACH: Twórcy usuwają płynność (rug pull), wartość spada do zera, a grupa znika w 10 sekund.'
    ],
    dialogue: [
      { speaker: 'Lider Grupy Telegram', text: 'Zostały ostatnie minuty! Gwiazdy wchodzą w projekt! Kto czeka, ten traci szansę życia!', subtext: 'Połączenie autorytetu, niedostępności i lęku przed wykluczeniem ze stada.' },
      { speaker: 'Kacper (przed zakupem)', text: 'Muszę to kupić teraz, zanim cena wzrośnie dziesięciokrotnie... Wszyscy zarabiają, tylko nie ja.', subtext: 'Paniczny wyrzut FOMO i wyłączenie racjonalnej analizy ryzyka.' }
    ],
    decisionTaken: 'Zainwestowanie wszystkich oszczędności i kredytu pod wpływem pośpiechu i cyfrowego stada.',
    whatProtagonistSaw: 'Grupę tysięcy entuzjastów zyskujących fortunę i niepowtarzalną okazję życiową.',
    whatWasMissed: 'Że konta były botami, brak audytu oznaczał oszustwo, a pośpiech służył zablokowaniu krytycyzmu.',
    psychologicalAnalysis: {
      coreMechanism: 'Społeczny dowód słuszności, zasada niedostępności i paniczny lęk przed stratą szansy (FOMO).',
      cognitiveBiases: [
        { name: 'Heurystyka Dostępności & Social Proof', description: 'Ocena wiarygodności na podstawie liczby entuzjastycznych postów.', impact: 'Zignorowanie braku fundamentalnej wartości.' },
        { name: 'Awersja do Utraty Szansy', description: 'Lęk przed byciem jedynym pominiętym paraliżuje ostrożność.', impact: 'Zaciągnięcie ryzykownego długu.' }
      ],
      defenseMechanisms: [
        { name: 'Konformistyczna racjonalizacja', explanation: 'Tłumaczenie sobie, że „tłum ma lepsze informacje niż pojedynczy analityk”.' }
      ],
      emotionalDynamic: 'Od euforycznej chciwości i lęku przed wykluczeniem do druzgocącego szoku i wstydu po utracie środków.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Prążkowie brzuszne (Układ Nagrody)', role: 'Wyrzut dopaminy na widok potencjalnych zysków innych', activationState: 'Ekstremalna' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Analiza matematyczna i weryfikacja kodu', activationState: 'Zablokowana przez pośpiech' }
      ],
      neurotransmitters: [
        { name: 'Dopamina i Adrenalina', roleInScenario: 'Pobudzenie hazardowe wyłączające chłodną ocenę prawdopodobieństwa.' }
      ],
      biologicalTimeline: [
        { timeMs: 'Godz. 23:30', process: 'Licznik czasu -> wyrzut adrenaliny -> kliknięcie „Kupuję”.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Sztuczny Niedobór & Astroturfing', description: 'Tworzenie fałszywego tłumu i presji czasu w celu wymuszenia nieprzemyślanej wpłaty.', vulnerabilityExploited: 'Chęć szybkiego wzbogacenia i lęk przed statusem przegranego.' }
      ],
      counterMeasures: [
        { step: '24-Godzinna Kwarantanna Decyzyjna', script: '„Nigdy nie inwestuję w projekt, który wymaga decyzji przed północą. Jeśli to okazja, poczeka do jutra”.', rationale: 'Czas bezwzględnie niszczy iluzję sztucznego niedoboru.' }
      ]
    },
    keyTakeaway: 'Liczba ludzi wierzących w bzdurę nie czyni jej prawdą. Gdy oferta wymaga pośpiechu i ucisza krytyków — to nie inwestycja, lecz pułapka.'
  },
  {
    id: 'cs-33-4',
    title: 'Maja i Presja Paczki: Konformizm Normatywny i Odzyskiwanie Własnego Głosu',
    subtitle: 'Studium przypadku lęku przed ostracyzmem rówieśniczym, hejtu grupowego i odwagi do sprzeciwu',
    protagonist: 'Maja, 17 lat, uczennica liceum, oraz liderka grupy Oliwia',
    context: 'Relacje w elitarnej grupie rówieśniczej i próba zorganizowania cyberprzemocy wobec nowej uczennicy Zuzi.',
    story: [
      'ETAP I — POŻĄDANA PRZYNALEŻNOŚĆ: Maja od dwóch lat starała się o akceptację w elitarnej paczce Oliwii, co dawało poczucie bezpieczeństwa i prestiż w szkole.',
      'ETAP II — ROZKAZ LIDERKI: Oliwia wrzuca na grupę zmanipulowane zdjęcie skromnej Zuzi z poleceniem: „Robimy mema i niszczymy ją na TikToku”.',
      'ETAP III — FALSAWOSZCZ I LĘK: Maja czuje ból w klatce, ale widzi, że wszystkie koleżanki wysyłają roześmiane emotikony. Wysyła uśmiech wbrew sumieniu ze strachu przed wykluczeniem.',
      'ETAP IV — MOMENT PRZEŁOMU: Rano Maja widzi Zuzię płaczącą w łazience. Rozumie, że cena za bycie w paczce to utrata własnego człowieczeństwa.',
      'ETAP V — JAWNY SPRZECIW: Maja podchodzi do Oliwii przy całej grupie i mówi: „To było podłe. Nie chcę mieć z tym nic wspólnego”.',
      'ETAP VI — EFEKT ASCHA W PRAKTYCE: Dwie inne dziewczyny podchodzą do Mai na przerwie i mówią po cichu: „Miałaś rację, my też tego nie chciałyśmy, tylko bałyśmy się odezwać”.'
    ],
    dialogue: [
      { speaker: 'Oliwia (Liderka)', text: 'Wszyscy wrzucamy to na TikToka. Kto nie wrzuca, ten jest przeciwko nam.', subtext: 'Szantaż lojalnością i groźba ostracyzmu.' },
      { speaker: 'Maja (przełamanie)', text: 'To jest podłe i niszczy człowieka. Ja w tym nie biorę udziału.', subtext: 'Akt odwagi cywilnej i zerwanie z konformizmem normatywnym.' }
    ],
    decisionTaken: 'Publiczne odrzucenie normy hejtu i opuszczenie toksycznej grupy w imię obrony godności drugiego człowieka.',
    whatProtagonistSaw: 'Początkowo: absolutną władzę liderki i nieuchronną śmierć towarzyską w razie sprzeciwu.',
    whatWasMissed: 'Że większość członków grupy w milczeniu czuła to samo i czekała na pierwszy odważny głos.',
    psychologicalAnalysis: {
      coreMechanism: 'Konformizm normatywny pod wpływem lęku przed wykluczeniem i wyzwalający efekt złamania jednomyślności.',
      cognitiveBiases: [
        { name: 'Przeszacowanie Jednomyślności', description: 'Przekonanie, że wszystkie inne dziewczyny naprawdę popierają hejt.', impact: 'Paraliż sumienia i początkowa uległość.' }
      ],
      defenseMechanisms: [
        { name: 'Konformizm pozorny', explanation: 'Wysłanie emotikony jako tarczy ochronnej przed gniewem liderki.' }
      ],
      emotionalDynamic: 'Od paraliżującego wstydu i lęku przed odrzuceniem do poczucia dumy, wolności i moralnej spójności.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowa kora obręczy (dACC)', role: 'Rejestracja bólu wykluczenia ze stada', activationState: 'Ekstremalna przy próbie buntu' },
        { region: 'Kora przedczołowa', role: 'Odzyskanie kontroli i podjęcie decyzji w oparciu o wartości nadrzędne', activationState: 'Wysoka integracja' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Serotonina', roleInScenario: 'Spadek lęku po odzyskaniu spójności ze swoim wewnętrznym kodeksem etycznym.' }
      ],
      biologicalTimeline: [
        { timeMs: 'Łazienka rano', process: 'Widok cierpienia -> aktywacja empatii -> przezwyciężenie strachu -> sprzeciw.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Presja Plemienna & Kozioł Ofiarny', description: 'Budowanie spójności grupy wokół wspólnego atakowania słabszej jednostki.', vulnerabilityExploited: 'Nastolatkowy lęk przed samotnością.' }
      ],
      counterMeasures: [
        { step: 'Głos Sojusznika Prawdy', script: '„Nie zgadzam się na krzywdzenie innych, niezależnie od tego, co o mnie pomyślicie”.', rationale: 'Rozbija monopol grupy i daje odwagę innym świadkom.' }
      ]
    },
    keyTakeaway: 'Grupa wymagająca zdrady sumienia nie jest wspólnotą — jest pułapką. Jeden głos odwagi potrafi uwolnić całe stado sparaliżowane strachem.'
  }
];

export const chapterThirtyThreeSelfExercises: SelfExercise[] = [
  {
    id: 'ex-33-1',
    title: 'Audyt Osobistych Wektorów Wpływu i Podatności Społecznej',
    subtitle: 'Identyfikacja sytuacji, w których najczęściej rezygnujesz ze swojego zdania',
    objective: 'Zidentyfikowanie sytuacji, w których jednostka rezygnuje ze swojej autonomii na rzecz presji otoczenia.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Świadoma analiza sytuacji uległości aktywuje obwody kory przedczołowej, osłabiając automatyczne reakcje lękowe ciała migdałowatego przy przyszłych naciskach grupy.',
    steps: [
      {
        stepNumber: 1,
        title: 'Analiza ostatnich 6 miesięcy',
        instruction: 'Wybierz 3 sytuacje, w których uległeś presji innych w pracy, w relacji lub przy zakupach.',
        promptText: 'Opisz krótko te 3 sytuacje:',
        placeholder: '1. Zgodziłem się na darmowe nadgodziny w piątek...\n2. Kupiłem kurs pod wpływem licznika czasu...\n3. Milczałem na zebraniu rodziców...'
      },
      {
        stepNumber: 2,
        title: 'Klasyfikacja rodzaju wpływu',
        instruction: 'Określ, czy uległość wynikała z wpływu informacyjnego (brak pewności) czy normatywnego (lęk przed oceną).',
        promptText: 'Przyporządkuj rodzaj wpływu do każdej z sytuacji:',
        placeholder: 'Sytuacja 1: Wpływ normatywny (lęk przed szefem)...\nSytuacja 2: Wpływ informacyjny + niedostępność...'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie reakcji asertywnej',
        instruction: 'Zapisz, jak postąpiłbyś dzisiaj, wykorzystując Protokół Pauzy Poznawczej.',
        promptText: 'Twoja alternatywna odpowiedź:',
        placeholder: '„Doceniam propozycję, ale potrzebuję 24 godzin na analizę mojego grafiku...”.'
      }
    ],
    reflectionQuestions: [
      'W jakich relacjach najtrudniej jest Ci odmówić i dlaczego?',
      'Jaki jest główny koszt emocjonalny Twojego konformizmu w tych sytuacjach?'
    ]
  },
  {
    id: 'ex-33-2',
    title: 'Eksperyment Mikro-Nonkonformizmu: Trening Odporności na Ocenę Społeczną',
    subtitle: 'Behawioralne oswajanie dyskomfortu wyłamania się z niepisanych norm',
    objective: 'Zbudowanie tolerancji na dyskomfort bycia zauważonym i ocenionym przez innych bez utraty poczucia własnej wartości.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Planowa ekspozycja na nieszkodliwe bodźce wywołujące lęk społeczny prowadzi do habituacji i wygaszania nadreaktywności ciała migdałowatego (desensybilizacja).',
    steps: [
      {
        stepNumber: 1,
        title: 'Zadanie Dnia 1: Niewinne odstępstwo w przestrzeni publicznej',
        instruction: 'Wykonaj nieszkodliwe, nietypowe zachowanie (np. stań w windzie tyłem do drzwi lub zapytaj w kawiarni o godzinę na Marsie z życzliwym uśmiechem).',
        promptText: 'Co zaobserwowałeś w swoich reakcjach somatycznych?',
        placeholder: 'Początkowo przyspieszone tętno, po 15 sekundach spokój i zrozumienie, że nic złego się nie stało...'
      },
      {
        stepNumber: 2,
        title: 'Zadanie Dnia 2: Łagodne weto towarzyskie',
        instruction: 'W błahej rozmowie wyraź odmienne zdanie, gdy wszyscy zachwycają się czymś przeciętnym: „Ciekawe, ja mam zupełnie inne wrażenie”.',
        promptText: 'Jak zareagowało otoczenie i jak się poczułeś?',
        placeholder: 'Rozmówcy byli zaciekawieni moim zdaniem, a dyskusja stała się znacznie ciekawsza...'
      },
      {
        stepNumber: 3,
        title: 'Zadanie Dnia 3: Odmowa bez tłumaczenia się',
        instruction: 'Na drobną prośbę odpowiedz krótko: „Dziękuję, ale tym razem odmówię” i zamilknij.',
        promptText: 'Jakie było Twoje doświadczenie milczenia po odmowie?',
        placeholder: 'Poczułem pokusę wymyślania kłamstw, ale utrzymałem milczenie — poczułem siłę i spokój...'
      }
    ],
    reflectionQuestions: [
      'Czy obawy przed odrzuceniem społecznym okazały się zgodne z rzeczywistą reakcją ludzi?',
      'Co zmienia się w Twoim poczuciu siły, gdy nie tłumaczysz się ze swoich granic?'
    ]
  },
  {
    id: 'ex-33-3',
    title: 'Wdrożenie Protokołu 24-Godzinnej Kwarantanny Decyzyjnej',
    subtitle: 'Narzędzie unieszkodliwiania sztucznego pośpiechu i technik sprzedażowych',
    objective: 'Zablokowanie impulsywnych decyzji podejmowanych pod wpływem manipulacji pośpiechem.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Odroczenie w czasie pozwala opadnąć fali noradrenaliny i dopaminy, przywracając sterowanie analityczne w korze przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Ustalenie progu finansowego i czasowego',
        instruction: 'Określ kwotę wydatku lub wielkość przysługi, od której automatycznie uruchamiasz kwarantannę.',
        promptText: 'Twój próg kwarantanny:',
        placeholder: 'Każdy wydatek powyżej 200 zł i każda przysługa wymagająca więcej niż 2 godzin pracy...'
      },
      {
        stepNumber: 2,
        title: 'Przygotowanie żelaznej formuły słownej',
        instruction: 'Naucz się na pamięć standardowego komunikatu odroczenia.',
        promptText: 'Twoja formuła:',
        placeholder: '„Twoja oferta jest interesująca. Moja żelazna reguła to 24h namysłu. Odezwę się jutro o 15:00”.'
      }
    ],
    reflectionQuestions: [
      'Ile pieniędzy i energii zaoszczędziłbyś w ubiegłym roku, stosując tę zasadę bezwzględnie?',
      'Jak reaguje rozmówca, gdy odbierasz mu kontrolę nad tempem rozmowy?'
    ]
  },
  {
    id: 'ex-33-4',
    title: 'Rola „Adwokata Diabła” w Twoim Najbliższym Projekcie',
    subtitle: 'Instytucjonalne zabezpieczenie przed myśleniem grupowym i ślepotą decyzyjną',
    objective: 'Zastosowanie krytycznego myślenia do własnych lub zespołowych planów w bezpieczny sposób.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Świadome poszukiwanie błędów rozbija błąd konfirmacji i chroni przed kosztownymi porażkami predykcyjnymi mózgu.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wyznaczenie projektu do audytu',
        instruction: 'Wybierz kluczowy projekt lub decyzję biznesową/osobistą.',
        promptText: 'Projekt do analizy:',
        placeholder: 'Wdrożenie nowego cennika usług w mojej firmie...'
      },
      {
        stepNumber: 2,
        title: 'Test Premortem (Analiza przedśmiertna)',
        instruction: 'Wyobraź sobie, że minął rok i projekt poniósł całkowitą klęskę. Co było jej główną przyczyną?',
        promptText: 'Trzy najważniejsze ukryte ryzyka:',
        placeholder: '1. Klienci nie zrozumieli wartości nowej oferty...\n2. System fakturowania nie wytrzymał obciążenia...\n3. Konkurencja obniżyła ceny o 20%...'
      },
      {
        stepNumber: 3,
        title: 'Wdrożenie zabezpieczeń',
        instruction: 'Dopisz konkretne działania korygujące do każdego zidentyfikowanego ryzyka.',
        promptText: 'Działania prewencyjne:',
        placeholder: 'Przeprowadzenie wywiadów z 10 kluczowymi klientami przed publikacją cennika...'
      }
    ],
    reflectionQuestions: [
      'Dlaczego zespoły tak bardzo boją się zadawać trudne pytania na etapie entuzjazmu?',
      'Jak lider może zalegalizować konstruktywną krytykę w zespole?'
    ]
  },
  {
    id: 'ex-33-5',
    title: 'Mapa Toksycznych Długów Wdzięczności: Rozbrajanie Niewidzialnych Weksli',
    subtitle: 'Uwalnianie się z uwikłań relacyjnych opartych na nieproszonych przysługach',
    objective: 'Odzyskanie suwerenności w relacjach, w których pomoc jest używana jako narzędzie szantażu emocjonalnego.',
    durationMinutes: 40,
    neuroScientificFoundation: 'Rozdzielenie racjonalnej wdzięczności od neurobiologicznego przymusu uległości przywraca integrację układu wartości.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identyfikacja uwikłań relacyjnych',
        instruction: 'Wypisz osoby, wobec których odczuwasz chroniczne poczucie winy lub przymus uległości.',
        promptText: 'Lista osób i ich „roszczeń”:',
        placeholder: 'Znajomy z dawnej pracy, który załatwił mi zniżkę 3 lata temu i teraz żąda darmowych konsultacji...'
      },
      {
        stepNumber: 2,
        title: 'Bilans moralny i prawny',
        instruction: 'Czy prosiłeś o tę pomoc? Czy była to bezinteresowna przysługa, czy niepisana transakcja wiązana?',
        promptText: 'Ocena obiektywna długu:',
        placeholder: 'Pomoc była nieproszona i nie uzgadnialiśmy żadnych warunków wymiany...'
      },
      {
        stepNumber: 3,
        title: 'Oświadczenie graniczne',
        instruction: 'Sformułuj spokojny, stanowczy komunikat zamykający roszczenia.',
        promptText: 'Formuła graniczna:',
        placeholder: '„Doceniam Twoją dawną pomoc, ale nie wykonuję usług doradczych poza godzinami pracy. Moja stawka to...”.'
      }
    ],
    reflectionQuestions: [
      'Jaka jest różnica między wdzięcznością a emocjonalnym ubezwłasnowolnieniem?',
      'Dlaczego prawdziwy przyjaciel nigdy nie używa dawnej pomocy jako karty przetargowej?'
    ]
  }
];

export const chapterThirtyThree: Chapter = {
  number: 33,
  volume: 3,
  volumeChapterNumber: 17,
  title: 'Wpływ Społeczny: Jak Inni Ludzie Kształtują Nasze Decyzje i Zachowania',
  subtitle: 'Mechanizmy konformizmu, perswazji, autorytetu, dynamiki grupowej i obrony własnej autonomii',
  leadParagraph: 'Człowiek nigdy nie podejmuje decyzji w próżni. W każdym naszym wyborze pobrzmiewają głosy tych, których podziwiamy, tych, których się boimy, i tych, w których oczach pragniemy zyskać znaczenie. Ten rozdział bada mechanizmy wpływu informacyjnego i normatywnego, eksperymenty Ascha i Milgrama, 7 reguł Cialdiniego oraz architekturę zachowania niezłomnej autonomii myślenia pośród presji społecznej.',
  totalEstimatedPages: 56,
  sections: [
    // CZĘŚĆ I — WPROWADZENIE I FILOZOFIA ROZDZIAŁU (33.1)
    {
      id: 'sec-33-1',
      pageNumber: 1770,
      sectionNumber: '33.1',
      title: 'Wprowadzenie: Od Adaptacji Indywidualnej do Architektury Wpływu Społecznego',
      category: 'wstep',
      readingTimeMinutes: 18,
      quote: {
        text: 'Człowiek rzadko podejmuje decyzje w próżni. W każdym naszym wyborze pobrzmiewają głosy tych, których podziwiamy, tych, których się boimy, i tych, w których oczach pragniemy zyskać znaczenie.',
        author: 'Kanon Samokształtowania'
      },
      paragraphs: [
        'W poprzednim rozdziale analizowaliśmy człowieka w obliczu niepewności, kryzysu i konieczności adaptacji do zmieniającego się świata fizycznego i zadaniowego. Odkryliśmy zasady dychotomii kontroli, elastyczności poznawczej i zarządzania zasobami psychicznymi w warunkach zakłóceń.',
        'Jednak człowiek nie jest samotną wyspą zawieszoną w pustce geometrycznej. Nasze środowisko naturalne to przede wszystkim INNI LUDZIE. Każdego dnia, od momentu przebudzenia i spojrzenia na powiadomienia w telefonie, aż po wieczorne rozmowy przy stole, jesteśmy zanurzeni w niewidzialnym, gęstym polu sił społecznych.',
        'Wpływ społeczny nie jest aberracją ani patologią — jest podstawowym klejem ewolucyjnym, który umożliwił naszemu gatunkowi budowanie języka, kultury, nauki, miast i cywilizacji. Uczymy się przez naśladowanie, synchronizujemy emocje dzięki neuronom lustrzanym i czerpiemy poczucie bezpieczeństwa z przynależności do wspólnoty.',
        'Jednak ta sama biologiczna wrażliwość na grupę, która uratowała nas przed wyginięciem na sawannie, w nowoczesnym świecie staje się potężnym wektorem podatności. Potrafi sprawić, że wykształceni inżynierowie milczą wobec ewidentnych katastrof technologicznych, uczciwi obywatele aplikują śmiertelne wstrząsy elektryczne pod okiem autorytetu, a rozsądni konsumenci oddają oszczędności życia w pogoni za fałszywym dowodem słuszności.',
        'Główne pytanie tego rozdziału brzmi: «Dlaczego zmieniamy swoje myślenie, decyzje i zachowania pod wpływem innych ludzi — i w jaki sposób odróżnić zdrową współpracę od destrukcyjnego konformizmu i manipulacji, zachowując niezłomną autonomię własnego umysłu?»'
      ]
    },

    // CZĘŚĆ II — EWOLUCYJNE I BIOLOGICZNE KORZENIE (33.2)
    {
      id: 'sec-33-2',
      pageNumber: 1780,
      sectionNumber: '33.2',
      title: 'Ewolucyjne i Neurobiologiczne Podłoże Wrażliwości Społecznej: Dlaczego Odrzucenie Boli Jak Ogień',
      category: 'neuronauka',
      readingTimeMinutes: 22,
      paragraphs: [
        'Przez ponad 99% historii ewolucyjnej rodzaju Homo, samotność oznaczała natychmiastowy wyrok śmierci. Człowiek wyrzucony poza krąg plemienia nie był w stanie samodzielnie upolować dużej zwierzyny, obronić się przed drapieżnikami ani przetrwać zimy. Wykluczenie ze wspólnoty było równoznaczne z biologiczną anihilacją.',
        'Z tego powodu ewolucja wyposażyła ludzki mózg w niezwykle czuły, bezwzględny system wczesnego ostrzegania przed ostracyzmem. Badania neuroobrazowe fMRI prowadzone przez Naomi Eisenberger i Matthew Liebermana wykazały, że doświadczenie odrzucenia społecznego (np. w eksperymencie Cyberball) aktywuje dokładnie te same struktury mózgowe, co ból fizyczny: grzbietową część przedniego zakrętu kory obręczy (dACC) oraz przednią wyspę.',
        'Kiedy grupa daje nam do zrozumienia, że nasze zachowanie lub opinia odbiegają od normy, nasz mózg nie interpretuje tego jako abstrakcyjnej różnicy zdań. Rejestruje to jako alarm egzystencjalny: «Uwaga! Zbliżasz się do krawędzi stada! Grozi ci wygnanie! Natychmiast dopasuj swoje zachowanie!».',
        'Ta neurobiologiczna architektura wyjaśnia, dlaczego tak trudno jest podnieść rękę i zgłosić weto na zebraniu w pracy lub przeciwstawić się złośliwym żartom znajomych. Lęk przed wyłamaniem się nie jest objawem „słabego charakteru” — jest potężnym głosem milionów lat ewolucji, który domaga się zachowania bezpieczeństwa za wszelką cenę.',
        'Dojrzałość psychiczna i sprawczość nie polegają na wyłączeniu tego systemu (jest to biologicznie niemożliwe), lecz na świadomym rozpoznaniu sygnału lękowego i podjęciu racjonalnej decyzji pomimo odczuwanego dyskomfortu w klatce piersiowej.'
      ]
    },

    // CZĘŚĆ III — DWA FILARY WPŁYWU (33.3)
    {
      id: 'sec-33-3',
      pageNumber: 1792,
      sectionNumber: '33.3',
      title: 'Dwa Filary Wpływu Społecznego: Wpływ Informacyjny a Wpływ Normatywny (Deutsch & Gerard)',
      category: 'teoria',
      readingTimeMinutes: 22,
      quote: {
        text: 'Wpływ informacyjny opiera się na akceptacji informacji od innych jako dowodu na temat rzeczywistości. Z kolei wpływ normatywny opiera się na dostosowaniu się do pozytywnych oczekiwań innych osób w celu zyskania aprobaty lub uniknięcia kary. Choć oba mechanizmy często współwystępują, ich konsekwencje psychologiczne są diametralnie różne: pierwszy przekształca prywatne przekonania, drugi jedynie publiczną maskę.',
        author: 'Prof. Morton Deutsch & Prof. Harold B. Gerard',
        source: 'New York University, „A Study of Normative and Informational Social Influences Upon Individual Judgment”, Journal of Abnormal and Social Psychology, 1955'
      },
      paragraphs: [
        'W 1955 roku Morton Deutsch i Harold Gerard uporządkowali teorię wpływu społecznego, wprowadzając fundamentalny podział na dwa odrębne mechanizmy motywacyjne, które kierują naszymi wyborami:',
        '1. INFORMACYJNY WPŁYW SPOŁECZNY (Informational Social Influence):\n- Źródło motywacji: Pragnienie posiadania racji, trafnego zrozumienia sytuacji i podjęcia optymalnej decyzji.\n- Warunki występowania: Sytuacje nowe, niejasne, wieloznaczne, kryzysowe, w których jednostka nie dysponuje pełnymi danymi lub uważa, że inni posiadają większą wiedzę ekspercką.\n- Rezultat psychologiczny: Prowadzi do autentycznej, głębokiej i trwałej PRYWATNEJ AKCEPTACJI (Private Acceptance). Człowiek naprawdę zmienia swoje przekonania, wierząc, że grupa ma rację (np. turysta w nieznanym mieście wchodzący do restauracji pełnej miejscowych).',
        '2. NORMATYWNY WPŁYW SPOŁECZNY (Normative Social Influence):\n- Źródło motywacji: Pragnienie bycia lubianym, akceptowanym, unikania wstydu, kary, kpin i wykluczenia ze strony grupy.\n- Warunki występowania: Nawet w sytuacjach całkowicie jasnych i jednoznacznych, w których jednostka doskonale wie, jaka jest prawda, lecz odczuwa presję normy społecznej.\n- Rezultat psychologiczny: Prowadzi do PUBLICZNEGO ULEGANIA (Public Compliance) bez wewnętrznej zgody. Człowiek deklaruje to, czego żąda otoczenie, zachowując prywatny sceptycyzm lub tłumiąc go w poczuciu bezradności.',
        'Rozróżnienie to jest fundamentem diagnostyki osobistej: Kiedy zmieniasz zdanie, zadaj sobie pytanie: «Czy robię to dlatego, że poznałem nowe, rzetelne fakty (wpływ informacyjny), czy dlatego, że panicznie boję się tego, co pomyślą o mnie inni (wpływ normatywny)?».'
      ],
      subsections: [
        {
          id: 'sub-33-3-1',
          title: 'Analiza słów prof. Mortona Deutscha i prof. Harolda Gerarda: Prywatna Akceptacja vs Publiczna Maska',
          content: [
            'Wnikliwa dekonstrukcja modelu Deutscha i Gerarda ujawnia podwójną naturę ludzkiego konformizmu. W przypadku wpływu informacyjnego jednostka używa zachowania innych jako taniego, zastępczego sensora rzeczywistości: skoro tłum ucieka w lewo, uciekam w lewo, bo prawdopodobnie tam nie ma pożaru.',
            'Z kolei wpływ normatywny odsłania potęgę społecznego przymusu: człowiek wie, że król jest nagi, ale boi się, że jeśli to powie na głos, strażnicy wyrzucą go za mury pałacu. Ta schizofrenia między prywatną wiedzą a publiczną deklaracją rodzi dotkliwy dysonans poznawczy (Festinger), który z czasem jednostka często redukuje poprzez... faktyczną zmianę przekonań, byle tylko nie czuć się tchórzem.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-33-3-1',
          type: 'insight',
          title: 'Test Spójności Wewnętrznej: Czy Mówiłbyś To Samo na Bezludnej Wyspie?',
          content: 'Aby sprawdzić, czy Twoje poglądy wynikają z wpływu informacyjnego czy normatywnego, zadaj sobie pytanie: „Gdyby nikt z moich znajomych, szefów ani rodziny nigdy nie dowiedział się o mojej opinii, czy nadal broniłbym tego stanowiska?”. Jeśli tak — to zinternalizowana prawda. Jeśli nie — to konformistyczny kamuflaż normatywny.'
        }
      ],
      interactiveWindow: {
        id: 'win-33-3',
        title: 'Rozpoznawanie Źródła Wpływu: Informacyjny czy Normatywny?',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Konrad (34 lata) na zebraniu zarządu milczy i podnosi rękę za wdrożeniem ryzykownej kampanii marketingowej, mimo że jego własne obliczenia wskazują na 70% ryzyko straty 2 milionów złotych.',
        steps: [
          {
            stepNumber: 1,
            title: 'Analiza motywacji Konrada',
            description: 'Dlaczego Konrad zagłosował za szkodliwym projektem?',
            options: [
              {
                text: 'Poddał się wpływowi normatywnemu: panicznie bał się, że prezes uzna go za „człowieka hamującego innowacje” i pozbawi premii rocznej',
                feedback: 'Precyzyjna diagnoza: podręcznikowy wpływ normatywny. Konrad wiedział, jaka jest prawda matematyczna, ale wybrał publiczną uległość dla ochrony statusu.',
                isOptimal: true
              },
              {
                text: 'Uległ wpływowi informacyjnemu, bo uznał, że prezes ma doktorat z ekonomii i wie lepiej',
                feedback: 'Błąd: Konrad sam sporządził raport i wiedział o błędach prezesa — uległ lękowi przed odrzuceniem.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'W jakich sprawach w Twoim życiu zawodowym lub prywatnym ulegasz wpływowi normatywnemu, głosując przeciwko własnemu sumieniu?'
      }
    },

    // CZĘŚĆ IV — EKSPERYMENT ASCHA (33.4)
    {
      id: 'sec-33-4',
      pageNumber: 1805,
      sectionNumber: '33.4',
      title: 'Eksperyment Solomona Ascha: Anatomia Konformizmu Percepcyjnego i Potęga Pojedynczego Sprzeciwu',
      category: 'teoria',
      readingTimeMinutes: 24,
      quote: {
        text: 'To, że inteligentni, dobrze wykształceni młodzi ludzie są gotowi nazwać biel czernią tylko dlatego, że grupa jednogłośnie podtrzymuje to kłamstwo, jest zjawiskiem budzącym głęboki niepokój. Zadaje to fundamentalne pytania o nasz system edukacji i wartości, które kierują naszym społeczeństwem.',
        author: 'Prof. Solomon E. Asch',
        source: 'Swarthmore College, „Opinions and Social Pressure”, Scientific American, 1955'
      },
      paragraphs: [
        'W 1951 roku Solomon Asch przeprowadził jedno z najbardziej eleganckich i wstrząsających badań w historii psychologii. Badany student wchodził do sali z siedmioma innymi osobami (w rzeczywistości pomocnikami eksperymentatora). Zadanie wydawało się dziecinnie proste: porównać długość linii wzorcowej z trzema liniami testowymi (A, B, C), z których tylko jedna była identyczna z wzorcem.',
        'W pierwszych próbach wszyscy odpowiadali poprawnie. Jednak w próbach krytycznych pomocnicy eksperymentatora jeden po drugim, z kamienną twarzą, podawali ewidentnie błędną odpowiedź (np. wskazywali linię o połowę krótszą). Badany odpowiadał jako przedostatni.',
        'Wyniki przeszły do kanonu nauki: Aż 75% badanych uległo błędnej opinii grupy przynajmniej raz! W sumie około 37% wszystkich odpowiedzi w próbach krytycznych było konformistycznymi błędami, mimo że w warunkach indywidualnych bez obecności grupy badani popełniali mniej niż 1% pomyłek.',
        'Podczas wywiadów poeksperymentalnych Asch odkrył trzy różne poziomy uległości:\n1. Zniekształcenie percepcji (bardzo rzadkie): Nieliczni badani naprawdę zaczęli widzieć linie inaczej.\n2. Zniekształcenie osądu (częste): Badani uznali, że skoro 7 inteligentnych ludzi widzi co innego, to ich własne oczy muszą ich mylić („widocznie jest tu jakiś optyczny haczyk, którego nie rozumiem”).\n3. Zniekształcenie działania (najczęstsze): Badani doskonale wiedzieli, która linia jest poprawna, ale nie byli w stanie znieść dyskomfortu bycia jedynym odmieńcem na sali.',
        'Jednak najważniejszy wniosek z eksperymentu Ascha dotyczy przełamywania konformizmu: Gdy Asch wprowadził do grupy tylko JEDNEGO pomocnika, który odpowiadał poprawnie (tzw. sojusznik prawdy), poziom błędów konformistycznych spadł natychmiast z 37% do zaledwie 5%! Nawet gdy sojusznik podawał inną błędną odpowiedź, samo rozbicie jednomyślności wystarczało, by przywrócić badanemu odwagę do samodzielnego myślenia.',
        'LEKCJA NA DZIŚ: Jeśli widzisz błąd, fałsz lub zło w swojej organizacji, nie musisz przekonywać od razu wszystkich. Wystarczy, że jako pierwszy podniesiesz rękę i powiesz prawdę — Twój pojedynczy głos da tlen i odwagę tym, którzy w milczeniu czekają na impuls.'
      ],
      subsections: [
        {
          id: 'sub-33-4-1',
          title: 'Analiza słów prof. Solomona Ascha: Zniekształcenie Działania a Moralne Tchórzostwo',
          content: [
            'Wypowiedź prof. Ascha dotyka sedna problemu obywatelskiego: większość badanych, którzy ulegli grupie, wcale nie straciła wzroku ani rozumu. Przeżywali oni ostry konflikt emocjonalny: pocili się, wiercili na krześle, nerwowo chrząkali.',
            'Asch podkreślał, że uległość w tym badaniu nie była błędem logicznym, lecz kapitulacją woli. Gdy człowiek zostaje sam przeciwko zjednoczonej grupie, dACC odpala sygnał zagrożenia fizycznego. Dlatego odwaga nie jest brakiem strachu przed grupą — jest zdolnością powiedzenia: „Linia B jest równa linii wzorcowej”, nawet gdy głos w gardle drży ze strachu.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-33-4-1',
          type: 'badanie',
          title: 'Magia Pojedynczego Sprzeciwu: Od 37% do 5%',
          content: 'Obecność zaledwie JEDNEGO dysydenta w grupie obniża poziom konformizmu siedmiokrotnie! Twój pojedynczy sprzeciw na zebraniu nie służy tylko Tobie — jest sygnałem ratunkowym dla wszystkich innych uczestników, którzy boją się odezwać jako pierwsi.'
        }
      ],
      interactiveWindow: {
        id: 'win-33-4',
        title: 'Przełamywanie Jednomyślności Stada: Rola Sojusznika Ascha',
        type: 'czlowiek_pod_mikroskopem',
        context: 'W trakcie narady projektowej 6 inżynierów zgadza się na przyspieszenie premiery oprogramowania medycznego o miesiąc, pomijając testy bezpieczeństwa. Anna wie, że błąd w kodzie może zabić pacjenta, ale boi się wyjść na histeryczkę.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór działania Anny w paradygmacie Solomona Ascha',
            description: 'Jak Anna powinna przełamać hipnotyczną jednomyślność grupy?',
            options: [
              {
                text: 'Podnieść rękę i spokojnie przedstawić twarde logi testowe: „Nie wyrażam zgody na podpisanie protokołu. Mamy 3 krytyczne błędy w module dawkowania. Złamanie procedury bezpieczeństwa to ryzyko utraty życia pacjenta”.',
                feedback: 'Doskonałe przełamanie konformizmu: rola pierwszego sprawiedliwego natychmiast uwalnia dwóch innych inżynierów z paraliżu milczenia.',
                isOptimal: true
              },
              {
                text: 'Podpisać protokół i liczyć na to, że błąd nie ujawni się podczas operacji',
                feedback: 'Tragiczny konformizm w stylu katastrofy promu Challenger — kapitulacja etyczna z lęku przed konfliktem.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Kiedy ostatnio milczałeś na spotkaniu, widząc ewidentny błąd, tylko dlatego, że wszyscy inni kiwali z uśmiechem głowami?'
      }
    },

    // CZĘŚĆ V — EKSPERYMENT MILGRAMA I AUTORYTET (33.5)
    {
      id: 'sec-33-5',
      pageNumber: 1820,
      sectionNumber: '33.5',
      title: 'Wpływ Autorytetu i Stan Agentalny: Eksperyment Stanleya Milgrama i Granice Posłuszeństwa',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Zwykli ludzie, po prostu wykonujący swoją pracę i nie żywiący żadnej szczególnej wrogości, mogą stać się wykonawcami straszliwego niszczycielskiego procesu. Co więcej, nawet wtedy, gdy destrukcyjne skutki ich pracy stają się całkowicie oczywiste i są proszeni o podjęcie działań niezgodnych z fundamentalnymi standardami moralności, stosunkowo niewiele osób ma wystarczającą siłę, by przeciwstawić się autorytetowi.',
        author: 'Prof. Stanley Milgram',
        source: 'Yale University, „Obedience to Authority: An Experimental View”, Harper & Row, 1974'
      },
      paragraphs: [
        'W cieniu procesu Adolfa Eichmanna w Jerozolimie, Stanley Milgram na Uniwersytecie Yale (1961–1963) postanowił sprawdzić, jak daleko posunie się zwykły, przyzwoity obywatel, gdy autorytet w białym fartuchu wyda mu polecenie krzywdzenia drugiego człowieka.',
        'Uczestnicy sądzili, że biorą udział w badaniu nad wpływem kar na pamięć. W roli „Nauczyciela” mieli aplikować „Uczniowi” (aktorowi) wstrząsy elektryczne o rosnącym napięciu (od 15 V do śmiertelnych 450 V z oznaczeniem „XXX”) za każdą błędną odpowiedź. Przy wyższych napięciach aktor krzyczał z bólu, błagał o przerwanie, skarżył się na chore serce, a powyżej 330 V milkł całkowicie.',
        'Gdy badani wahali się, eksperymentator używał czterech standardowych ponagleń: 1) „Proszę kontynuować”, 2) „Eksperyment wymaga, aby pan kontynuował”, 3) „To bezwzględnie konieczne, aby pan kontynuował”, 4) „Nie ma pan innego wyboru, musi pan kontynuować”.',
        'Przed badaniem Milgram zapytał 40 psychiatrów o prognozy. Eksperci oszacowali, że do maksymalnego poziomu 450 V dojdzie mniej niż 1% skrajnych sadystów. W rzeczywistości aż 65% uczestników doszło do samego końca skali (450 V), choć wielu pociło się, drżało, jąkało i wbijało paznokcie w dłonie ze stresu!',
        'Milgram sformułował pojęcie STANU AGENTALNEGO (Agentic State): Człowiek przestaje postrzegać siebie jako moralnie odpowiedzialnego sprawcę swoich czynów, a zaczyna widzieć siebie jedynie jako instrument («agenta») realizującego wolę wyższej instancji. Odpowiedzialność zostaje scedowana na autorytet: «Ja tylko wykonywałem polecenia».',
        'CZYNNIKI MODYFIKUJĄCE POSŁUSZEŃSTWO:\n- Dystans fizyczny od ofiary: Gdy Nauczyciel musiał osobiście przyciskać dłoń Ucznia do płytki z prądem, posłuszeństwo spadło do 30%.\n- Bliskość autorytetu: Gdy eksperymentator wydawał polecenia przez telefon, posłuszeństwo spadło do 21%.\n- Sprzeciw rówieśników: Gdy w sali obecni byli dwaj inni badani (aktorzy), którzy odmówili dalszego rażenia prądem, posłuszeństwo runęło do zaledwie 10%!',
        'ANATOMIA WSPÓŁCZESNEGO POSŁUSZEŃSTWA: Dzisiejsze zbrodnie korporacyjne, oszustwa finansowe i systemowa bezduszność rzadko odbywają się w mundurach. Odbywają się w garniturach, za pośrednictwem arkuszy Excela, procedur i regulaminów, w których każdy pracownik mówi sobie: «To nie moja wina, taka jest polityka firmy».'
      ],
      subsections: [
        {
          id: 'sub-33-5-1',
          title: 'Analiza słów prof. Stanleya Milgrama: Przejście w Stan Agentalny i Utrata Sprawczości',
          content: [
            'Wnikliwa analiza koncepcji Milgrama obnaża najbardziej niebezpieczną metamorfozę ludzkiego umysłu: przejście ze Stanu Autonomicznego (gdzie czujemy się moralnie odpowiedzialni za każdy skutek naszych działań) w Stan Agentalny (gdzie stajemy się biernym narzędziem w rękach struktury hierarchicznej).',
            'Milgram udowodnił, że nie potrzeba sadyzmu, by czynić zło — wystarczy formalny autorytet, który zdejmie z jednostki ciężar odpowiedzialności („Ja biorę za to pełną odpowiedzialność, panie Kowalski, proszę nacisnąć przycisk”). Zdolność do zachowania stanu autonomicznego w obliczu rozkazu jest ostatecznym testem dojrzałości człowieka.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-33-5-1',
          type: 'badanie',
          title: 'Złamanie Posłuszeństwa przez Rówieśników: Spadek do 10%',
          content: 'Najbardziej budujący wariant Milgrama to obecność dwóch zbuntowanych współpracowników. Gdy obaj powiedzieli eksperymentatorowi: „Nie będziemy dalej razić prądem”, 90% badanych natychmiast poszło w ich ślady i odmówiło posłuszeństwa. Społeczny dowód odwagi jest silniejszy niż presja autorytetu.'
        }
      ],
      interactiveWindow: {
        id: 'win-33-5',
        title: 'Przełamanie Stanu Agentalnego: Asertywny Bunt przeciw Autorytetowi',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Paweł (29 lat), audytor finansowy, otrzymuje od partnera zarządzającego polecenie ukrycia 3 milionów złotych nielegalnych wypłat zarządu w sprawozdaniu rocznym pod groźbą natychmiastowego zwolnienia z pracy.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wybór postawy Pawła wobec rozkazu autorytetu',
            description: 'Która postawa pozwala Pawłowi pozostać w Stanie Autonomicznym?',
            options: [
              {
                text: 'Kategoryczna odmowa na piśmie: „Nie podpiszę sfałszowanego bilansu. Jest to przestępstwo gospodarcze, za które ponoszę osobistą odpowiedzialność karną”. Równoległe zabezpieczenie dowodów i kontakt z radcą prawnym',
                feedback: 'Bohaterstwo autonomiczne wg Milgrama: odmowa przejścia w stan agentalny, obrona integralności osobistej pomimo groźby utraty posady.',
                isOptimal: true
              },
              {
                text: 'Podpisanie raportu z myślą: „To partner ponosi odpowiedzialność, ja tylko wykonuję polecenia przełożonego”',
                feedback: 'Podręcznikowy stan agentalny — współudział w przestępstwie i moralna katastrofa.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'W jakich sytuacjach w pracy lub w instytucjach usprawiedliwiasz swoje nieetyczne lub bierne zachowanie słowami: „ja tylko wykonuję procedury”?'
      }
    },

    // CZĘŚĆ VI — REGUŁY CIALDINIEGO (33.6)
    {
      id: 'sec-33-6',
      pageNumber: 1838,
      sectionNumber: '33.6',
      title: 'Siedem Uniwersalnych Zasad Wpływu Społecznego według Roberta Cialdiniego',
      category: 'teoria',
      readingTimeMinutes: 28,
      quote: {
        text: 'Automatyczne reguły wpływu społecznego działają jak mentalne skróty (heurystyki) — pozwalają nam podejmować błyskawiczne decyzje w świecie zalanym informacjami. Jednak profesjonaliści perswazji potrafią uruchomić te odruchy jak naciśnięcie guzika w magnetofonie (click-whirr), sprawiając, że zgadzamy się na rzeczy, których wcale nie chcemy.',
        author: 'Prof. Robert B. Cialdini',
        source: 'Arizona State University, „Influence: Science and Practice”, HarperCollins, 1984 / 2021'
      },
      paragraphs: [
        'Profesor Robert Cialdini spędził dekady badając praktyków perswazji — sprzedawców, negocjatorów, lobbystów, rekruterów i fundraiserów. Wyodrębnił fundamentalne heurystyki decyzyjne, które nasz mózg stosuje w trybie automatycznym:',
        '1. REGUŁA WZAJEMNOŚCI (Reciprocity):\nEwolucyjny imperatyw odwzajemnienia przysługi, daru lub ustępstwa. Kiedy ktoś daje nam cokolwiek bez zapowiedzi (darmowa kawa, raport, drobiazg), w naszym mózgu powstaje silne napięcie motywacyjne do zlikwidowania długu wdzięczności. Wersja zaawansowana: technika „Drzwiami w twarz” (Door-in-the-face) — wygórowane żądanie, a po jego odrzuceniu wycofanie się do właściwej prośby, co odbiorca interpretuje jako ustępstwo i czuje obowiązek rewanżu.',
        '2. ZAANGAŻOWANIE I KONSEKWENCJA (Commitment & Consistency):\nPragnienie zachowania spójności z własnymi wcześniejszymi deklaracjami, tożsamością i podjętymi decyzjami. Gdy publicznie wyrazimy poparcie dla małej sprawy (podpisanie petycji), stajemy się wielokrotnie bardziej podatni na spełnienie dużej prośby (technika „Stopy w drzwiach” / Foot-in-the-door) lub akceptację gorszych warunków (technika „Niskiej piłki” / Low-ball).',
        '3. SPOŁECZNY DOWÓD SŁUSZNOŚCI (Social Proof):\nZasada: „Skoro wielu ludzi tak robi, to musi to być właściwe”. Maksymalizuje swoją siłę w warunkach niepewności oraz przy wysokim podobieństwie obserwowanej grupy do nas samych. Wykorzystywana w postaci list bestsellerów, opinii w internecie („4 800 osób oceniło na 5 gwiazdek”) czy sztucznego śmiechu z puszki w serialach.',
        '4. SYMPATIA I PODOBIEŃSTWO (Liking):\nChętniej ulegamy osobom, które lubimy, które są do nas podobne (ubiór, styl mówienia, wspólne zainteresowania), które prawią nam komplementy i które są atrakcyjne fizycznie (efekt aureoli / halo effect).',
        '5. AUTORYTET (Authority):\nAutomatyczne posłuszeństwo wobec symboli wiedzy, władzy i statusu: tytułów naukowych, mundurów, drogich garniturów, pieczątek i specjalistycznego żargonu.',
        '6. NIEDOSTĘPNOŚĆ (Scarcity):\nPrzekonanie, że to, co rzadkie, trudnodostępne lub ograniczone w czasie, ma wyższą wartość. Uruchamia lęk przed stratą (Loss Aversion) i reaktancję psychiczną („muszę to kupić, zanim inni mi to sprzątną sprzed nosa”).',
        '7. JEDNOŚĆ (Unity — dodana w nowszych pracach):\nWpływ oparty na wspólnej tożsamości plemiennej („jesteśmy jednymi z nas” — rodzina, nacja, fani tej samej drużyny, członkowie tego samego ruchu). Tworzy bezwarunkowe zaufanie i zawieszenie krytycyzmu wobec członków własnej grupy.'
      ],
      subsections: [
        {
          id: 'sub-33-6-1',
          title: 'Analiza słów prof. Roberta Cialdiniego: Zjawisko „Click-Whirr” i Tarcza Obronna',
          content: [
            'Cialdini w genialny sposób opisuje etologię ludzkiego zachowania: podobnie jak indyczka zaczyna opiekować się każdym obiektem wydającym dźwięk „czip-czip” (nawet wypchanym tchórzem!), tak ludzki mózg na widok darmowego prezentu natychmiast odpala sekwencję wzajemności (whirr).',
            'Obrona przed manipulacją nie polega na stawaniu się cynicznym odludkiem odrzucającym wszelkie prezenty i życzliwość. Polega na tzw. Przeklasyfikowaniu Intencji: jeśli odkrywasz, że przysługa nie była darem z serca, lecz starannie skalkulowaną przynętą marketingową, Twój dług wdzięczności natychmiast wygasa. Nie jesteś winien lojalności sztuczce handlowej.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-33-6-1',
          type: 'insight',
          title: 'Reguła Pauzy Poznawczej przed Zakupem',
          content: 'Kiedy sprzedawca mówi: „Ta oferta jest ważna tylko przez najbliższe 15 minut!”, wiedz, że celowo próbuje wyłączyć Twoją korę przedczołową za pomocą reguły niedostępności. Zastosuj żelazną zasadę: „Jeśli nie mogę podjąć tej decyzji jutro rano po przespanej nocy, moja odpowiedź brzmi: NIE”.'
        }
      ],
      interactiveWindow: {
        id: 'win-33-6',
        title: 'Rozbrajanie Manipulacji: Siedem Zasad Cialdiniego w Praktyce',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Handlowiec w salonie samochodowym częstuje Marka ekskluzywną kawą z logo marki (Wzajemność), chwali jego gust modowy (Sympatia), a następnie mówi: „Ten model w tej cenie ma jeszcze tylko dwóch chętnych, którzy jadą z gotówką, musimy podpisać rezerwację w 10 minut” (Niedostępność).',
        steps: [
          {
            stepNumber: 1,
            title: 'Identyfikacja potrójnego ataku perswazyjnego',
            description: 'Jak Marek powinien zareagować, by zachować suwerenność decyzji?',
            options: [
              {
                text: 'Podziękować za kawę, zignorować sztuczny pośpiech i powiedzieć z uśmiechem: „Dziękuję za kawę i rozmowę. Zgodnie z moją zasadą, decyzję o zakupie samochodu podejmuję po 24 godzinach od jazdy próbnej. Zadzwonię jutro o 11:00”.',
                feedback: 'Doskonałe rozbrojenie triangulacji Cialdiniego: oddzielenie uprzejmości od decyzji finansowej i zneutralizowanie sztucznego niedoboru.',
                isOptimal: true
              },
              {
                text: 'Natychmiast wpłacić zaliczkę 5000 zł, bojąc się, że wymarzony samochód zniknie',
                feedback: 'Uległość wobec heurystyki niedostępności — klasyczny błąd konsumencki.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Która z 7 reguł Cialdiniego najczęściej skłania Cię do impulsywnych wydatków lub niechcianych zobowiązań?'
      }
    },

    // CZĘŚĆ VII — DYNAMIKA GRUPOWA (33.7)
    {
      id: 'sec-33-7',
      pageNumber: 1855,
      sectionNumber: '33.7',
      title: 'Dynamika Grupowa: Myślenie Grupowe (Groupthink), Polaryzacja i Deindywiduacja',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Kiedy jednostki łączą się w grupy, powstają zjawiska emergentne, których nie sposób wytłumaczyć sumą cech pojedynczych osób:',
        '1. MYŚLENIE GRUPOWE (Groupthink wg Irvinga Janisa):\nPatologia procesów decyzyjnych w silnie spójnych zespołach, gdzie chęć utrzymania pozornej zgody i lojalności tłumi racjonalną ocenę faktów. Objawy:\n- Iluzja niezwyciężoności i nadmierny optymizm,\n- Zbiorowa racjonalizacja i ignorowanie sygnałów ostrzegawczych,\n- Niezachwiana wiara w wyższą moralność własnej grupy,\n- Stereotypowe postrzeganie oponentów jako słabych lub głupich,\n- Autocenzura członków zespołu (lęk przed byciem „marudą”),\n- Złudzenie jednomyślności („skoro nikt nie protestuje, wszyscy się zgadzają”),\n- Pojawienie się tzw. „strażników jednomyślności” (Mindguards) — osób aktywnie uciszających krytyków.',
        '2. POLARYZACJA GRUPOWA (Group Polarization):\nTendencja grup do podejmowania decyzji bardziej skrajnych (ryzykownych lub ostrożnych) niż średnia opinii poszczególnych członków przed dyskusją. W toku rozmowy ludzie wymieniają się jednostronnymi argumentami, a chęć zdobycia pozycji lidera skłania do licytacji na bezkompromisowość.',
        '3. DEINDYWIDUACJA (Deindividuation):\nUtrata poczucia indywidualnej tożsamości i odpowiedzialności moralnej w masie, tłumie lub pod osłoną anonimowości internetowej. Człowiek przestaje działać w oparciu o własne standardy etyczne, stając się nośnikiem prymitywnych afektów stada (agresja stadionowa, hejt w mediach społecznościowych, lincz).'
      ]
    },

    // CZĘŚĆ VIII — EFEKT WIDZA (33.8)
    {
      id: 'sec-33-8',
      pageNumber: 1870,
      sectionNumber: '33.8',
      title: 'Efekt Widza (Bystander Effect) i 5 Kroków Interwencji Świadka (Darley & Latané)',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Po głośnym morderstwie Kitty Genovese w Nowym Jorku (1964), John Darley i Bibb Latané rozpoczęli systematyczne badania nad psychologią bierności świadków przestępstw i wypadków.',
        'Odkryli paradoks: Im więcej świadków obserwuje wypadek lub zagrożenie, tym MNIEJSZE jest prawdopodobieństwo, że którykolwiek z nich udzieli pomocy, a czas reakcji dramatycznie się wydłuża!',
        'Dwa filary efektu widza:\n1. Rozproszenie odpowiedzialności (Diffusion of Responsibility): Ciężar moralny dzieli się przez liczbę obecnych. Gdy jesteś sam, odpowiedzialność wynosi 100%. Gdy wokół stoi 50 osób, każdy czuje zaledwie 2% odpowiedzialności („dlaczego akurat ja mam się wtrącać, niech ktoś inny to zrobi”).\n2. Pluralistyczna ignorancja (Pluralistic Ignorance): Gdy sytuacja jest niejednoznaczna, ludzie patrzą na innych, by ocenić stopień zagrożenia. Ponieważ każdy stara się zachować spokój i ukryć panikę, wszyscy widzą wokół siebie zrelaksowane twarze i dochodzą do fałszywego wniosku: «Skoro nikt nie reaguje, to widocznie nic złego się nie dzieje».',
        'MODEL 5 KROKÓW INTERWENCJI ŚWIADKA:\nAby pomoc doszła do skutku, świadek musi pokonać 5 kolejnych barier psychologicznych:\n1. Zauważyć zdarzenie (Przeszkoda: pośpiech, rozproszenie uwagowe, wpatrywanie się w ekran),\n2. Zinterpretować je jako sytuację awaryjną (Przeszkoda: pluralistyczna ignorancja),\n3. Przyjąć osobistą odpowiedzialność (Przeszkoda: rozproszenie odpowiedzialności),\n4. Zdecydować o sposobie pomocy (Przeszkoda: brak kompetencji, poczucie bezradności),\n5. Wdrożyć działanie (Przeszkoda: lęk przed kompromitacją, oceną lub niebezpieczeństwem).',
        'ZASADA RATUNKOWA: Jeśli to Ty potrzebujesz pomocy w tłumie, nie krzycz ogólnie „Pomocy!”. Wybierz jedną osobę z tłumu, spójrz jej prosto w oczy, wskaż palcem i powiedz: «Pan w czerwonej kurtce! Potrzebuję pomocy, proszę podejść i zadzwonić na 112!». W ten sposób likwidujesz rozproszenie odpowiedzialności i jednoznacznie definiujesz sytuację.'
      ]
    },

    // CZĘŚĆ IX — PERSWAZJA JĘZYKOWA I FRAMING (33.9)
    {
      id: 'sec-33-9',
      pageNumber: 1885,
      sectionNumber: '33.9',
      title: 'Architektura Perswazji Językowej: Ramowanie (Framing), Presupozycje i Pułapki Semantyczne',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Język nie jest jedynie neutralnym narzędziem opisu rzeczywistości — jest aktywnym narzędziem jej konstruowania. Sposób sformułowania komunikatu determinuje to, które obwody neuronalne zostaną aktywowane u odbiorcy:',
        '1. RAMOWANIE (Framing wg Kahnemana i Tversky’ego):\nTa sama informacja matematyczna wywołuje skrajnie różne decyzje w zależności od tego, czy zostanie ubrana w ramę zysku czy ramę straty:\n- „Lek ma 90% skuteczności przeżycia” $\\rightarrow$ Pacjenci chętnie wyrażają zgodę na operację (orientacja na bezpieczeństwo).\n- „Lek wiąże się z 10% ryzykiem zgonu” $\\rightarrow$ Pacjenci masowo odrzucają leczenie (aktywacja lęku przed śmiercią).\nW marketingu i polityce ramowanie służy do narzucenia odbiorcy punktu odniesienia bez zmieniania faktów.',
        '2. PRESUPOZYCJE I PYTANIA SUGERUJĄCE:\nUkryte założenia wplecione w strukturę zdania, które odbiorca musi bezwiednie zaakceptować, by w ogóle zrozumieć pytanie:\n- Zamiast: „Czy zamierzasz kupić ten pakiet?” $\\rightarrow$ „Kiedy wolisz rozpocząć wdrożenie: w poniedziałek czy w środę?” (presupozycja: decyzja o zakupie już zapadła).\n- Słynne badania Elizabeth Loftus: Pytanie świadków wypadku „Z jaką prędkością jechały auta, gdy SIĘ ZDERZYŁY?” generowało znacznie niższe szacunki prędkości niż pytanie „Z jaką prędkością jechały, gdy SIĘ ROZTRZASKAŁY?”, a ponadto grupa druga po tygodniu fałszywie „pamiętała” potłuczone szkło, którego nie było na nagraniu.',
        '3. META BORY I EUFEMIZMY:\nZastępowanie słów o ładunku negatywnym terminami sterylnymi lub technicznymi (np. „optymalizacja zatrudnienia” zamiast „masowe zwolnienia”, „straty uboczne” zamiast „zabici cywile”). Służy do znieczulenia moralnego i ułatwienia akceptacji nieetycznych posunięć.'
      ]
    },

    // CZĘŚĆ X — WPŁYW W ERZE CYFROWEJ (33.10)
    {
      id: 'sec-33-10',
      pageNumber: 1902,
      sectionNumber: '33.10',
      title: 'Wpływ Społeczny w Erze Cyfrowej: Bańki Informacyjne, Algorytmiczny Social Proof i Przemysł Uwagi',
      category: 'teoria',
      readingTimeMinutes: 26,
      paragraphs: [
        'Współczesna technologia nie zmieniła biologii ludzkiego mózgu, ale zmultiplikowała siłę klasycznych wektorów wpływu do skali przemysłowej:',
        '1. KOMORY ECHA I BAŃKI FILTRUJĄCE (Filter Bubbles):\nAlgorytmy mediów społecznościowych są zoptymalizowane pod kątem utrzymania uwagi i czasu spędzonego na platformie (Engagement Time). Ponieważ najsilniejszym lepiszczem uwagi jest oburzenie moralne i lęk, algorytm serwuje użytkownikowi wyłącznie treści potwierdzające jego uprzedzenia. Prowadzi to do głębokiej polaryzacji i złudzenia, że „cały świat myśli tak jak my, a przeciwnicy to szaleńcy lub zdrajcy”.',
        '2. AUTOMATYCZNY SOCIAL PROOF I METRYKI STATUSU:\nLiczba lajków, udostępnień, wyświetleń i komentarzy to zmaterializowany, mierzalny w ułamkach sekund dowód społeczny. Młodzi ludzie wchodzą w stan ciągłego monitorowania swojej wartości poprzez pryzmat cyfrowego stada, co generuje epidemie lęku i depresji przy spadku zasięgów.',
        '3. CYFROWY STAN AGENTALNY:\nPrzekazywanie decyzji algorytmom scoringowym, systemom rekrutacyjnym AI czy nawigacjom GPS. Kiedy system odrzuca wniosek kredytowy lub CV, nikt w firmie nie czuje się odpowiedzialny: «To algorytm zdecydował».'
      ]
    },

    // CZĘŚĆ XI — ZŁUDZENIE ODPORNOŚCI (33.11)
    {
      id: 'sec-33-11',
      pageNumber: 1920,
      sectionNumber: '33.11',
      title: 'Błędna Intuicja: „Mnie To Nie Dotyczy” — Złudzenie Odporności i Efekt Trzeciej Osoby',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Największym i najbardziej niebezpiecznym błędem poznawczym w obszarze wpływu społecznego jest przekonanie o własnej absolutnej odporności na manipulację.',
        'W psychologii zjawisko to nosi nazwę EFEKTU TRZECIEJ OSOBY (Third-Person Effect wg W. Phillipsa Davisona): Badani zapytani o wpływ reklam, propagandy politycznej czy presji grupy deklarują, że wywierają one potężny wpływ na „innych ludzi” (przeciętnych, niewykształconych, naiwnych), podczas gdy oni sami uważają się za w 100% racjonalnych, krytycznych i suwerennych.',
        'DLACZEGO TO ZŁUDZENIE JEST ZABÓJCZE?\nCzłowiek, który wierzy, że jest odporny na perswazję:\n- Wyłącza czujność poznawczą,\n- Nie stosuje protokołów weryfikacji faktów,\n- Nie analizuje swoich emocji pojawiających się podczas zakupów lub rozmów,\n- Przypisuje zmanipulowane wybory własnej „niezależnej woli” (racjonalizacja post factum).',
        'Manipulatorzy uwielbiają ludzi pewnych swojej nieomylności — to oni są najłatwiejszym celem, ponieważ po podjęciu decyzji będą z pasją bronić swojego wyboru, wierząc, że był w pełni suwerenny.',
        'ZASADA POKORY POZNAWCZEJ: Pierwszym warunkiem rzeczywistej autonomii jest uznanie: «Jestem ssakiem społecznym. Mój mózg jest biologicznie podatny na regułę wzajemności, dowód słuszności i presję autorytetu. Dlatego muszę mieć systemowe zabezpieczenia, a nie tylko dobrą opinię o sobie».'
      ]
    },

    // CZĘŚĆ XII — GRANICE MIĘDZY PERSWAZJĄ A MANIPULACJĄ (33.16)
    {
      id: 'sec-33-16',
      pageNumber: 1940,
      sectionNumber: '33.16',
      title: 'Granice Etyczne: Różnica Między Wpływem, Perswazją, Edukacją a Manipulacją',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Częstym błędem jest wrzucanie wszystkich form oddziaływania społecznego do jednego worka z napisem „manipulacja”. W rzeczywistości wpływ społeczny tworzy szerokie spektrum etyczne:',
        '1. EDUKACJA I INSPIRACJA:\n- Cel: Rozwój i dobro odbiorcy.\n- Metoda: Dostarczenie wiedzy, narzędzi i perspektyw, umożliwiających mu podejmowanie własnych, lepszych wyborów.\n- Wolność: Całkowita wolność przyjęcia lub odrzucenia treści.',
        '2. UCZCIWA PERSWAZJA (Etos, Pathos, Logos):\n- Cel: Przekonanie odbiorcy do określonego stanowiska lub zakupu w warunkach obopólnej korzyści (Win-Win).\n- Metoda: Transparentne argumenty, prawdziwe dane, otwarte komunikowanie własnych intencji.\n- Wolność: Odbiorca ma pełne prawo powiedzieć „nie” bez obawy o karę czy szantaż emocjonalny.',
        '3. MANIPULACJA PSYCHOLOGICZNA:\n- Cel: Realizacja jednostronnego interesu nadawcy kosztem nieświadomego odbiorcy (Win-Lose).\n- Metoda: Ukrywanie prawdziwych intencji, zniekształcanie faktów, sztuczne wywoływanie lęku, poczucia winy, wstydu lub fałszywego pośpiechu.\n- Wolność: Złudzenie wyboru przy jednoczesnym zablokowaniu dostępu do kluczowych informacji lub emocjonalnym sparaliżowaniu krytycyzmu.',
        'TRZY TESTY ETYCZNE: Zanim podejmiesz próbę wpłynięcia na kogoś, zadaj sobie trzy pytania: 1) Czy ujawniłem wszystkie istotne fakty? 2) Czy druga strona może swobodnie odmówić bez konsekwencji relacyjnych? 3) Czy gdyby znała wszystkie moje intencje, podjęłaby tę samą decyzję?'
      ]
    },

    // CZĘŚĆ XIII — AUTONOMIA I OBRONA PRZED PRESJĄ (33.17)
    {
      id: 'sec-33-17',
      pageNumber: 1960,
      sectionNumber: '33.17',
      title: 'Autonomia Psychiczna: Jak Myśleć Niezależnie w Grupie i Chronić Swój Umysł',
      category: 'cwiczenia',
      readingTimeMinutes: 25,
      paragraphs: [
        'Odzyskanie suwerenności myślenia pośród presji społecznej wymaga wdrożenia świadomych nawyków poznawczych i behawioralnych:',
        '1. PROTOKÓŁ PAUZY EMOCJONALNEJ (Zasada 24 Godzin):\nGdy czujesz gwałtowny impuls zakupu, zgody na prośbę lub podpisania umowy pod wpływem czyjejś prezentacji — natychmiast zrób krok w tył. Powiedz: «Muszę to przemyśleć na spokojnie w domu». Prawdziwa okazja przetrwa 24 godziny; manipulacja rozpadnie się, gdy opadną emocje.',
        '2. METODA ROZBROJENIA REGUŁY WZAJEMNOŚCI:\nZdefiniuj dar na nowo: Jeśli ktoś daje Ci nieproszony prezent z wyraźną intencją wymuszenia zakupu lub przysługi, przestań postrzegać to jako „dar”, a zacznij postrzegać jako „manewr marketingowy”. Wobec manewru nie masz żadnego długu moralnego.',
        '3. INSTYTUCJONALNY SCEPTYCYZM (Rola Adwokata Diabła):\nW zespole lub we własnym planowaniu zawsze wyznacz czas na bezlitosną krytykę założeń. Zadaj pytanie: «Gdybyśmy za rok ponieśli totalną klęskę, co było jej główną przyczyną, o której dzisiaj boimy się głośno powiedzieć?» (technika Premortem Gary’ego Kleina).',
        '4. ZGODA NA KOSZT SPOŁECZNY:\nAutonomia ma swoją cenę. Nie można być w 100% wiernym prawdzie i w 100% lubianym przez wszystkich w każdej sekundzie. Dojrzałość polega na zaakceptowaniu chwilowego chłodu czy niezadowolenia innych w imię wierności własnym fundamentalnym wartościom.'
      ]
    },

    // CZĘŚĆ XIV — CO NADAL NIE JEST JASNE (33.18)
    {
      id: 'sec-33-18',
      pageNumber: 1978,
      sectionNumber: '33.18',
      title: 'Co Nadal Nie Jest Jasne w Badaniach Nad Wpływem Społecznym?',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Współczesna psychologia społeczna mierzy się z istotnymi wyzwaniami metodologicznymi i teoretycznymi:',
        '1. KRYZYS REPLIKACYJNY I WYZWANIA ETYCZNE:\nKlasyczne eksperymenty (Milgram, Zimbardo, Asch) ze względów etycznych nie mogą być dziś powtórzone w pierwotnej, drastycznej formie. Nowoczesne replikacje cząstkowe (np. badania Jerry’ego Burgera z 2009 r., gdzie wstrząsy ograniczono do 150 V) potwierdzają ogólny mechanizm uległości, ale wykazują większe zróżnicowanie indywidualne niż sądzono.',
        '2. RÓŻNICE KULTUROWE (WEIRD vs Kultury Kolektywistyczne):\nWiększość teorii powstała w społeczeństwach zachodnich, wykształconych, zindustralizowanych, bogatych i demokratycznych (WEIRD). W kulturach kolektywistycznych (np. Azja Wschodnia) konformizm nie jest postrzegany negatywnie jako „brak charakteru”, lecz jako cnota harmonii, szacunku dla wspólnoty i dojrzałości społecznej.',
        '3. WPŁYW GENERATYWNEJ SZTUCZNEJ INTELIGENCJI:\nJak zmieni się podatność na wpływ, gdy interakcje z agentami AI (botami symulującymi empatię, głębokie zrozumienie i autorytet) staną się codziennością? Pierwsze badania wskazują, że personalizowane awatary AI potrafią wpływać na poglądy i decyzje ludzi skuteczniej niż ludzcy politycy czy terapeuci.'
      ]
    },

    // CZĘŚĆ XV — JAK ZASTOSOWAĆ TO JUTRO (33.19)
    {
      id: 'sec-33-19',
      pageNumber: 1990,
      sectionNumber: '33.19',
      title: 'Jak Zastosować To Jutro? Cztery Pytania Autonomii i Codzienny Algorytm Weryfikacji Wpływu',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Zamiast skomplikowanych teorii, wdróż do codziennego życia prosty algorytm decyzyjny składający się z CZTERECH PYTAŃ AUTONOMII:',
        'Pytanie 1: «CZY PODEJMUJĘ TĘ DECYZJĘ W SPOKOJU, CZY W POŚPIECHU / EMOCJONALNYM WZMOŻENIU?»\nJeśli czujesz pośpiech, ekscytację lub lęk — zatrzymaj się. Pośpiech to podpis manipulatora.',
        'Pytanie 2: «CZY ZGODZIŁBYM SIĘ NA TO, GDYBYM BYŁ SAM W PUSTYM POKOJU I NIKT O TYM NIE WIEDZIAŁ?»\nTo pytanie natychmiast odcina normatywny wpływ społeczny i lęk przed oceną.',
        'Pytanie 3: «CZY MOJA ZGODA WYNIKA Z PRAWDZIWEJ CHĘCI, CZY Z CHĘCI UCIECZKI PRZED POCZUCIEM WINY / DŁUGU?»\nJeśli motywacją jest ucieczka przed poczuciem winy — jesteś pod wpływem zmanipulowanej reguły wzajemności.',
        'Pytanie 4: «JAKIE DOWODY PRZEMAWIAJĄ ZA TĄ DECYZJĄ POZA TYM, ŻE „INNI TEŻ TAK ROBIĄ”?»\nJeśli jedynym argumentem jest popularność — stoisz w kolejce eksperymentu Ascha.',
        'ZASTOSOWANIE W ROZMOWIE:\nGdy ktoś wywiera na Ciebie presję, użyj techniki „Komunikatu Przejrzystości”: «Widzę, że bardzo zależy Ci na szybkiej decyzji i doceniam Twój entuzjazm, ale ja potrzebuję czasu na chłodną analizę. Jeśli musisz mieć odpowiedź teraz, moja odpowiedź brzmi: nie». Ta formuła odbiera manipulatorowi kontrolę nad tempem interakcji.'
      ]
    },

    // CZĘŚĆ XVI — SŁOWNIK POJĘĆ (33.21)
    {
      id: 'sec-33-21',
      pageNumber: 2010,
      sectionNumber: '33.21',
      title: 'Słownik Pojęć Kluczowych Wpływu Społecznego',
      category: 'podsumowanie',
      readingTimeMinutes: 18,
      paragraphs: [
        '• Wpływ Informacyjny — Zmiana opinii lub zachowania wynikająca z traktowania innych jako wiarygodnego źródła wiedzy w warunkach niepewności.',
        '• Wpływ Normatywny — Uleganie presji grupy w celu uzyskania akceptacji, aprobaty lub uniknięcia kary i odrzucenia.',
        '• Konformizm — Zmiana zachowania lub przekonań pod wpływem rzeczywistego lub wyobrażonego nacisku ze strony grupy.',
        '• Stan Agentalny — Przekonanie jednostki, że wykonując polecenia autorytetu nie ponosi osobistej odpowiedzialności moralnej za swoje czyny.',
        '• Groupthink (Myślenie Grupowe) — Tendencja spójnych grup decyzyjnych do unikania krytyki i poszukiwania pozornej jednomyślności kosztem racjonalności.',
        '• Pluralistyczna Ignorancja — Stan, w którym członkowie grupy w milczeniu odrzucają normę, ale błędnie zakładają, że wszyscy inni ją akceptują.',
        '• Efekt Widza (Bystander Effect) — Spadek prawdopodobieństwa udzielenia pomocy ofierze w miarę wzrostu liczby biernych świadków zdarzenia.',
        '• Reaktancja Psychiczna — Opór i bunt motywacyjny wywołany poczuciem, że ktoś bezprawnie ogranicza naszą swobodę wyboru.',
        '• Stopa w Drzwiach (Foot-in-the-door) — Sekwencja perswazyjna: uzyskanie zgody na małą prośbę w celu zwiększenia szansy na spełnienie dużej prośby.',
        '• Drzwiami w Twarz (Door-in-the-face) — Sekwencja: przedstawienie skrajnego żądania, a po jego odrzuceniu wycofanie się do mniejszej prośby właściwej.',
        '• Efekt Trzeciej Osoby — Złudzenie poznawcze, że inni ludzie są podatni na propagandę i manipulację, podczas gdy my sami jesteśmy od nich wolni.'
      ]
    },

    // CZĘŚĆ XVII — WIELKA SYNTEZA I MOST (33.22)
    {
      id: 'sec-33-22',
      pageNumber: 2025,
      sectionNumber: '33.22',
      title: 'Wielka Synteza Rozdziału 33: Most Między Autonomią Jednostki a Życiem Społecznym',
      category: 'podsumowanie',
      readingTimeMinutes: 20,
      quote: {
        text: 'Najwyższą formą odwagi nie jest walka z wrogiem w blasku fleszy, lecz zachowanie własnego sumienia, gdy całe twoje stado z uśmiechem idzie w przepaść.',
        author: 'Kanon Samokształtowania'
      },
      paragraphs: [
        'Przeszliśmy przez pełną architekturę wpływu społecznego: od ewolucyjnych korzeni przynależności i bólu odrzucenia, przez eksperymenty Ascha, Milgrama i Darleya, zasady Cialdiniego, aż po cyfrowe komory echa i protokoły obrony suwerenności myślenia.',
        'Najważniejszy wniosek z tego rozdziału nie brzmi: «Odizoluj się od ludzi i nikomu nie ufaj». Taka postawa to paranoja i ucieczka od życia. Człowiek potrzebuje innych ludzi do miłości, przyjaźni, nauki, pracy i poczucia sensu.',
        'Prawdziwy cel brzmi: STAŃ SIĘ CZŁOWIEKIEM ŚWIADOMYM. Rozumiej siły, które na Ciebie oddziałują. Kiedy czujesz ciepło grupy — ciesz się nim, ale trzymaj dłoń na kompasie własnych wartości. Kiedy widzisz manipulację — nazwij ją spokojnie po imieniu i nie bój się odmówić.',
        'MOST DO DALSZEGO ROZWOJU:\nW kolejnych etapach naszej podróży intelektualnej przyjrzymy się temu, jak człowiek autonomiczny, wyposażony w samoregulację, odporność i odporność na manipulację, może budować głębokie, zdrowe, partnerskie relacje i twórczo przekształcać swoje otoczenie zawodowe i społeczne.'
      ]
    }
  ]
};
