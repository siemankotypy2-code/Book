import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 11 (GLOBALNIE ROZDZIAŁ 27 W STRUKTURZE DZIEŁA)
 * TYTUŁ: INTEGRACJA WIEDZY — OD POJEDYNCZYCH ROZDZIAŁÓW DO JEDNEGO SYSTEMU
 * ETAP 1: Architektura procesów decyzyjnych, pętle sprzężeń zwrotnych i fundament sprawczości.
 *
 * Miejsce w strukturze:
 * - Następuje po Rozdziale 10 Tomu III (Rozdział 26: „Zmiana: Od Zrozumienia do Działania”).
 * - Stanowi wielką integrację i syntezę Rozdziałów 1–10.
 *
 * Źródło wiedzy bazowej na Etapie 1:
 * - Rozdział 1: Decyzje, działanie umysłu i sprawczość (modele wyboru, procesy automatyczne vs kontrolowane,
 *   heurystyki, zniekształcenia poznawcze, ryzyko i niepewność, konflikt celów, teoria perspektywy,
 *   samoskuteczność, myślenie kontrfaktyczne, rozróżnienie jakości procesu od wyniku).
 */

export const chapterTwentySevenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Wyobraź sobie menedżera, który zainwestował 100 000 zł w oprogramowanie, które po 6 miesiącach okazuje się technologicznie przestarzałe. Mimo twardych danych rynkowych decyduje się dopłacić kolejne 40 000 zł, argumentując: „Nie możemy pozwolić, by te pół roku i 100 tysięcy poszło na marne”. Jaki splot mechanizmów poznawczych wyjaśnia to zachowanie w ujęciu systemowym (Sekcja 27.4)?',
    topic: 'Koszty Utopione i Pułapka Status Quo',
    sectionRef: 'Sekcja 27.4',
    options: [
      { label: 'A', text: 'Wyłącznie brak elementarnej wiedzy matematycznej i nieznajomość arkusza kalkulacyjnego.', isCorrect: false },
      { label: 'B', text: 'Interakcja błędu kosztów utopionych (sunk cost fallacy), awersji do strat (loss aversion — ból zaksięgowania straty 100k) oraz confirmation bias (wyszukiwanie wyłącznie optymistycznych prognoz, by ochronić tożsamość kompetentnego lidera).', isCorrect: true },
      { label: 'C', text: 'Zjawisko facylitacji społecznej wywołane obecnością podwładnych w pokoju.', isCorrect: false },
      { label: 'D', text: 'Działanie czystego Systemu 2 oparte na bezbłędnej kalkulacji wartości oczekiwanej.', isCorrect: false }
    ],
    explanation: 'W rzeczywistych decyzjach błędy poznawcze rzadko występują w izolacji. Nieodwracalny koszt przeszły (sunk cost) łączy się z awersją do strat opisaną w teorii perspektywy: menedżer woli zaryzykować dalszą stratę, niż zaakceptować pewną stratę tu i teraz. Dodatkowo confirmation bias filtruje napływające informacje, by podtrzymać pozytywny obraz samego siebie.',
    keyTakeaway: 'Koszty utopione w połączeniu z awersją do strat zamieniają błąd decyzyjny w eskalację zaangażowania.'
  },
  {
    id: 2,
    question: 'Inwestor podjął skrajnie lekkomyślną decyzję: postawił całe oszczędności życia na jedną spekulacyjną kryptowalutę bez żadnej analizy fundamentalnej. Przypadkowy tweet celebryty wywołał nagłą pompę cenową i inwestor podwoił kapitał w 48 godzin. Zgodnie z fundamentalną zasadą oceny decyzji (Sekcja 27.5):',
    topic: 'Jakość Procesu vs Jakość Wyniku',
    sectionRef: 'Sekcja 27.5',
    options: [
      { label: 'A', text: 'Decyzja była wybitna i dowodzi geniuszu inwestora, ponieważ ostateczny zysk jest jedyną obiektywną miarą racjonalności.', isCorrect: false },
      { label: 'B', text: 'Proces decyzyjny był fatalny (brak dywersyfikacji, brak analizy ryzyka, uleganie impulsowi), a korzystny rezultat był wyłącznie skutkiem losowości (kwadrant: Zły Proces + Dobry Wynik). Powtórzenie tego procesu w przyszłości niemal na pewno doprowadzi do ruiny.', isCorrect: true },
      { label: 'C', text: 'Inwestor wykazał się wyższą samoskutecznością (self-efficacy), co automatycznie uodporniło go na błędy poznawcze.', isCorrect: false },
      { label: 'D', text: 'Wystąpił efekt ramy (framing effect), który zmienił matematyczne prawdopodobieństwo bankructwa.', isCorrect: false }
    ],
    explanation: 'Zasadniczą lekcją integracji jest oddzielenie jakości procesu od losowości wyniku. Ocena decyzji wyłącznie przez pryzmat rezultatu (outcome bias) tworzy niebezpieczną iluzję kompetencji. Sukces wynikający ze złego procesu jest groźniejszy niż porażka wynikająca z dobrego procesu, bo utrwala szkodliwe nawyki poznawcze.',
    keyTakeaway: 'Nie myl szczęścia w kasynie z mądrością strategiczną. Jakość decyzji mierzy się stanem informacji w chwili wyboru, a nie losem rzutu kostką.'
  },
  {
    id: 3,
    question: 'W jaki sposób zjawisko myślenia kontrfaktycznego („co by było, gdybym...”) może stać się narzędziem funkcjonalnego uczenia się zamiast destrukcyjną pętlą żalu (Sekcja 27.5 i 27.10)?',
    topic: 'Funkcjonalna Kontrfaktyczność a Żal',
    sectionRef: 'Sekcja 27.10',
    options: [
      { label: 'A', text: 'Gdy całkowicie zaprzeczymy przeszłości i wmówimy sobie, że wynik w ogóle nas nie obchodzi.', isCorrect: false },
      { label: 'B', text: 'Gdy przekształcimy pytanie z tożsamościowego („Dlaczego jestem taki głupi?”) na procesowo-środowiskowe: „W którym konkretnym punkcie pętli (uwaga, interpretacja, tarcie) mogłem wprowadzić inną regułę działania i jak zastosuję to jutro?”.', isCorrect: true },
      { label: 'C', text: 'Gdy będziemy bez końca odtwarzać moment porażki przed snem, by ukarać swój układ limbiczny.', isCorrect: false },
      { label: 'D', text: 'Myślenie kontrfaktyczne nigdy nie ma żadnej wartości adaptacyjnej w psychologii.', isCorrect: false }
    ],
    explanation: 'Funkcjonalne myślenie kontrfaktyczne rekonstruuje łańcuch przyczynowo-skutkowy: identyfikuje punkty interwencji (np. zmiana tarcia w otoczeniu, nałożenie pauzy poznawczej), dzięki czemu przeszły błąd staje się cennym algorytmem dla przyszłych decyzji, chroniąc poczucie sprawczości.',
    keyTakeaway: 'Nie pytaj przeszłości: „Dlaczego to zrobiłem?”, lecz zapytaj: „Jaki parametr środowiska zmienię następnym razem?”.'
  },
  {
    id: 4,
    question: 'Dlaczego uczeń, który wie, że jutro ma decydujący sprawdzian, a mimo to wybiera 3-godzinną grę online, NIE JEST po prostu „leniwy”, lecz pada ofiarą systemowego konfliktu wartości i czasu (Sekcja 27.3)?',
    topic: 'Konflikt Celów i Present Bias',
    sectionRef: 'Sekcja 27.3',
    options: [
      { label: 'A', text: 'Ponieważ jego mózg jest uszkodzony i niezdolny do przetwarzania informacji o przyszłości.', isCorrect: false },
      { label: 'B', text: 'Działa tu asymetria czasowa (present bias): nagroda z gry jest bezpośrednia, zmysłowa i bezwysiłkowa TU I TERAZ, podczas gdy nagroda z dobrej oceny jest abstrakcyjna i odroczona w czasie. Dodatkowo gra służy jako znieczulenie przed somatycznym lękiem i niepewnością sprawdzianu.', isCorrect: true },
      { label: 'C', text: 'Uczeń ma w 100% wewnętrzne umiejscowienie kontroli (internal locus of control), więc celowo chce oblać egzamin.', isCorrect: false },
      { label: 'D', text: 'Gra online emituje fale radiowe, które blokują działanie neuronów lustrzanych.', isCorrect: false }
    ],
    explanation: 'Konflikt nie toczy się między „dobrem a złem”, lecz między dwoma autentycznymi stanami: natychmiastową redukcją napięcia (zmysłowa nagroda teraz) a odroczoną inwestycją w przyszłość. Człowiek jako system biologiczny naturalnie faworyzuje bliskie horyzonty czasowe, jeśli środowisko nie stawia barier tarcia.',
    keyTakeaway: 'Prokrastynacja i ucieczka w natychmiastową gratyfikację to konflikt przetwarzania czasu i regulacji dyskomfortu, a nie wada charakteru.'
  },
  {
    id: 5,
    question: 'Na czym polega dojrzała koncepcja sprawczości (Agency) w ujęciu Juliana Rottera i Alberta Bandury (Sekcja 27.6)?',
    topic: 'Sprawczość, Samoskuteczność i Granice Wpływu',
    sectionRef: 'Sekcja 27.6',
    options: [
      { label: 'A', text: 'Na magicznym przekonaniu, że siłą woli i pozytywnym myśleniem możemy kontrolować każdy wynik zewnętrzny i każde zachowanie innych ludzi.', isCorrect: false },
      { label: 'B', text: 'Na precyzyjnym rozróżnieniu obszaru, na który mamy realny wpływ (własne przygotowanie, reakcja, nawyki, ramy poznawcze), od obszaru niepewności i losowości, połączonym z wiarą we własną zdolność do wykonania działania (self-efficacy).', isCorrect: true },
      { label: 'C', text: 'Na całkowitym poddaniu się losowi (fatalizm) i uznaniu, że decyzje jednostki nie mają żadnego znaczenia w społeczeństwie.', isCorrect: false },
      { label: 'D', text: 'Na wyborze wyłącznie opcji domyślnych (default heuristic) we wszystkich sferach życia.', isCorrect: false }
    ],
    explanation: 'Skrajne umiejscowienie kontroli (zarówno naiwna omnipotencja: „mogę wszystko”, jak i wyuczona bezradność: „nic ode mnie nie zależy”) jest dysfunkcyjne. Prawdziwa sprawczość to zdolność do trzeźwego audytu: rozpoznanie twardych ograniczeń środowiska i maksymalizacja jakości własnego procesu decyzyjnego w granicach tego wpływu.',
    keyTakeaway: 'Sprawczość to nie iluzja wszechmocy. To mistrzostwo w zarządzaniu tym, co rzeczywiście leży po Twojej stronie stołu.'
  },
  {
    id: 6,
    question: 'W eksperymencie Tversky’ego i Kahnemana uczestnicy szacowali odsetek państw afrykańskich w ONZ po wcześniejszym zakręceniu kołem fortuny (z numerami 10 lub 65). Dlaczego nawet całkowicie losowa liczba wpłynęła na ich szacunki (Sekcja 27.4)?',
    topic: 'Heurystyka Zakotwiczenia (Anchoring)',
    sectionRef: 'Sekcja 27.4',
    options: [
      { label: 'A', text: 'Uczestnicy sądzili, że koło fortuny zostało zaprogramowane przez ekspertów ONZ.', isCorrect: false },
      { label: 'B', text: 'Zakotwiczenie sprawia, że początkowa liczba — nawet jawnie losowa — staje się mimowolnym punktem wyjścia. Umysł testuje hipotezę o jej prawdziwości i dokonuje niewystarczającego dostosowania w warunkach niepewności.', isCorrect: true },
      { label: 'C', text: 'Zadziałał wyłącznie efekt czystej ekspozycji (mere exposure effect).', isCorrect: false },
      { label: 'D', text: 'Badani celowo podawali błędne odpowiedzi, by zadowolić eksperymentatorów.', isCorrect: false }
    ],
    explanation: 'Zakotwiczenie to fundamentalna właściwość poznawcza: pierwsza dostępna informacja numeryczna lub pojęciowa tworzy grawitację poznawczą. W codziennym życiu anchorami są pierwsze ceny na półce, pierwsze oferty w negocjacjach płacowych czy wstępne opinie o nowo poznanej osobie.',
    keyTakeaway: 'Kto stawia pierwszy punkt odniesienia, ten niepostrzeżenie mebluje przestrzeń myślową drugiej strony.'
  },
  {
    id: 7,
    question: 'Jak nowoczesna neuronauka i psychologia poznawcza traktują obecnie metaforę Systemu 1 i Systemu 2 (Sekcja 27.11)?',
    topic: 'Krytyczne Spojrzenie na Modele Dual-Process',
    sectionRef: 'Sekcja 27.11',
    options: [
      { label: 'A', text: 'Jako dwa autonomiczne, fizyczne organy w mózgu (np. pień mózgu to System 1, a kora to System 2).', isCorrect: false },
      { label: 'B', text: 'Jako użyteczną, dydaktyczną metaforę opisującą właściwości przetwarzania (szybkie/automatyczne vs wolniejsze/wymagające zasobów), a nie sztywne, odrębne moduły biologiczne. Badania pokazują płynne współdziałanie i procesy intuicyjne angażowane w zadania analityczne.', isCorrect: true },
      { label: 'C', text: 'Model został całkowicie obalony i dowiedziono, że mózg myśli wyłącznie wolno i analitycznie.', isCorrect: false },
      { label: 'D', text: 'System 1 to procesy lewej półkuli, a System 2 to prawa półkula.', isCorrect: false }
    ],
    explanation: 'Zgodnie z zasadą odpowiedzialności merytorycznej nie traktujemy Systemu 1 i 2 jako „dwóch ludzików w głowie”. To kontinuum trybów przetwarzania. Złożone decyzje to nieustanny dialog między szybkimi skojarzeniami a refleksyjnym monitorowaniem.',
    keyTakeaway: 'System 1 i 2 to cechy procesu, a nie adresy anatomiczne w tkance mózgowej.'
  },
  {
    id: 8,
    question: 'Na czym polega fundamentalna różnica decyzyjna między RYZYKIEM a NIEPEWNOŚCIĄ (Sekcja 27.5)?',
    topic: 'Ryzyko a Głęboka Niepewność (Knightian Uncertainty)',
    sectionRef: 'Sekcja 27.5',
    options: [
      { label: 'A', text: 'Ryzyko dotyczy spraw finansowych, a niepewność dotyczy wyłącznie relacji miłosnych.', isCorrect: false },
      { label: 'B', text: 'W warunkach ryzyka znany jest zbiór możliwych wyników i można oszacować ich prawdopodobieństwa (jak w rzucie monetą). W warunkach głębokiej niepewności brakuje wiarygodnych danych, by określić rozkład prawdopodobieństw ani nawet pełną listę możliwych zdarzeń.', isCorrect: true },
      { label: 'C', text: 'Ryzyko zawsze prowadzi do strat, a niepewność zawsze przynosi zysk.', isCorrect: false },
      { label: 'D', text: 'To synonimy oznaczające dokładnie to samo zjawisko.', isCorrect: false }
    ],
    explanation: 'Frank Knight i współczesna teoria decyzji rozróżniają te dwa stany. Przenoszenie modeli optymalizacji czysto matematycznej (opartych na ryzyku) do sytuacji głębokiej niepewności życiowej (wybór partnera, rewolucja technologiczna) tworzy złudne poczucie kontroli i nadmierną pewność siebie (overconfidence).',
    keyTakeaway: 'Gdy nie znasz reguł gry ani prawdopodobieństw, matematyczna kalkulacja musi ustąpić miejsca elastyczności i odporności na błędy.'
  },
  {
    id: 9,
    question: 'W sytuacji kryzysowej w relacji (np. brak odpowiedzi na wiadomość przez pół dnia) osoba natychmiast wysyła oskarżycielskiego SMS-a: „Widzę, że mnie ignorujesz!”. Wskaż, w którym miejscu pętli decyzyjnej nastąpił błąd poznawczy (Sekcja 27.2 i 27.7):',
    topic: 'Pętla Relacyjna: Fakt vs Interpretacja',
    sectionRef: 'Sekcja 27.2',
    options: [
      { label: 'A', text: 'Na etapie bodźca — telefon nie powinien odebrać sygnału sieci.', isCorrect: false },
      { label: 'B', text: 'W przejściu między KROKIEM 1 (obiektywny fakt: brak SMS przez 6h) a KROKIEM 3 (interpretacja: „ignoruje mnie”), gdzie domysł został bezrefleksyjnie uznany za twardy fakt, wywołując afekt i agresywne działanie.', isCorrect: true },
      { label: 'C', text: 'W zbyt wolnym pisaniu na klawiaturze telefonu.', isCorrect: false },
      { label: 'D', text: 'Na etapie retrospekcji, ponieważ oskarżenie było w 100% uzasadnione.', isCorrect: false }
    ],
    explanation: 'Najczęstszym błędem relacyjnym jest utożsamienie subiektywnej interpretacji z obiektywną rzeczywistością. Zatrzymanie się w KROKU 1 i postawienie 3 alternatywnych hipotez (np. rozładowana bateria, wypadek, pilne zebranie) zapobiega eskalacji konfliktu.',
    keyTakeaway: 'Fakt to to, co zarejestrowałaby kamera wideo. Cała reszta to hipoteza Twojego umysłu.'
  },
  {
    id: 10,
    question: 'Dlaczego architektura środowiska (Environmental Design) ma w praktyce większe znaczenie dla realizacji celów niż abstrakcyjna „siła woli” (Sekcja 27.6)?',
    topic: 'Architektura Środowiska i Tarcie Poznawcze',
    sectionRef: 'Sekcja 27.6',
    options: [
      { label: 'A', text: 'Ponieważ meble w pokoju mają właściwości hipnotyczne.', isCorrect: false },
      { label: 'B', text: 'Świadoma samokontrola (kontrola wykonawcza dlPFC) zużywa ograniczone zasoby metaboliczne i ulega wyczerpaniu pod wpływem stresu. Modyfikacja tarcia (np. usunięcie telefonu z zasięgu wzroku) sprawia, że dobre zachowanie wymaga mniej energii niż uleganie pokusie.', isCorrect: true },
      { label: 'C', text: 'Środowisko fizyczne nie ma żadnego wpływu na ludzkie decyzje.', isCorrect: false },
      { label: 'D', text: 'Siła woli jest jedynym czynnikiem determinującym sukces według wszystkich badań.', isCorrect: false }
    ],
    explanation: 'Człowiek to system zoptymalizowany pod kątem oszczędzania energii. Jeśli sięgnięcie po rozpraszacz wymaga 0 sekund, a skupienie na nauce wymaga ciągłego hamowania impulsu, układ nerwowy w końcu wybierze ścieżkę najmniejszego oporu. Zmiana geometrii otoczenia chroni zasoby kory przedczołowej.',
    keyTakeaway: 'Nie tocz codziennych heroicznych bitew z pokusami. Zaprojektuj przestrzeń tak, by nie wymagała bohaterstwa.'
  },
  {
    id: 11,
    question: 'Dlaczego to samo zdarzenie fizjologiczne (np. przyspieszony rytm serca, ściśnięty żołądek) może zostać przeżyte jako paniczny lęk, ekscytacja lub gniew (Sekcja 27.4)?',
    topic: 'Teorie Emocji: Ciało, Pobudzenie i Znaczenie Poznawcze',
    sectionRef: 'Sekcja 27.4',
    options: [
      { label: 'A', text: 'Ponieważ każda emocja ma uniwersalny, niezmienny biologiczny „odcisk palca”, który zawsze da się bezbłędnie zmierzyć aparaturą medyczną.', isCorrect: false },
      { label: 'B', text: 'Zgodnie z teoriami oceny poznawczej (appraisal) oraz podejściem Schachtera i Singera, samo pobudzenie autonomiczne nie wyznacza jeszcze jakości emocji — to interpretacja kontekstu, relacja do celów i nadane znaczenie decydują o subiektywnym doświadczeniu.', isCorrect: true },
      { label: 'C', text: 'Emocje nie mają żadnego związku z ciałem i są wyłącznie abstrakcyjnymi ideami filozoficznymi.', isCorrect: false },
      { label: 'D', text: 'Ludzie nigdy nie odczuwają przyspieszonego bicia serca przy pozytywnych emocjach.', isCorrect: false }
    ],
    explanation: 'Pojedynczy komponent fizjologiczny nie wystarcza do opisu procesu emocjonalnego. Tętno rośnie przy bieganiu, kofeinie, radości i panice. Dopiero ocena poznawcza („Czy to zagrożenie dla moich celów? Czy mam nad tym kontrolę?”) nadaje pobudzeniu określony wektor psychologiczny.',
    keyTakeaway: 'Stan ciała dostarcza energii i sygnału pobudzenia, ale to poznawcza ocena znaczenia konstruuje treść emocji.'
  },
  {
    id: 12,
    question: 'W modelu procesowym Jamesa Grossa wyróżnia się pięć etapów regulacji emocji. Dlaczego poznawcza reinterpretacja (Cognitive Reappraisal) jest zazwyczaj bardziej adaptacyjna niż chroniczne tłumienie ekspresji (Expressive Suppression) (Sekcja 27.9)?',
    topic: 'Model Regulacji Emocji Jamesa Grossa',
    sectionRef: 'Sekcja 27.9',
    options: [
      { label: 'A', text: 'Ponieważ tłumienie emocji zawsze natychmiast powoduje zawał serca u każdego człowieka.', isCorrect: false },
      { label: 'B', text: 'Reinterpretacja zachodzi na wczesnym etapie procesu (zmienia znaczenie sytuacji, zanim afekt zdominuje ciało), podczas gdy tłumienie blokuje jedynie zewnętrzną ekspresję przy utrzymującym się wysokim pobudzeniu somatycznym i kosztach poznawczych.', isCorrect: true },
      { label: 'C', text: 'Reinterpretacja polega na bezkrytycznym, naiwnym myśleniu pozytywnym za wszelką cenę.', isCorrect: false },
      { label: 'D', text: 'Tłumienie jest jedyną zalecaną techniką w psychologii klinicznej.', isCorrect: false }
    ],
    explanation: 'Tłumienie to próba powstrzymania rzeki tamą u samego ujścia — wymaga ciągłego wysiłku kory przedczołowej i obciąża układ krążenia. Reinterpretacja reguluje emocję u źródła, zmieniając interpretację poznawczą („On nie odpisuje nie dlatego, że mnie nienawidzi, lecz dlatego, że prowadzi auto”).',
    keyTakeaway: 'Regulacja emocji nie polega na zaciskaniu zębów. Polega na elastycznym doborze strategii — od modyfikacji środowiska po zmianę interpretacji.'
  },
  {
    id: 13,
    question: 'W eksperymentach nad ślepotą nieuwagi (Inattentional Blindness) uczestnicy liczący podania piłki nie zauważają osoby przechodzącej przez środek kadru w stroju goryla. Jakie fundamentalne prawo uwagi wyjaśnia to zjawisko w podejmowaniu decyzji (Sekcja 27.3)?',
    topic: 'Ślepota Nieuwagi i Iluzja Kamery',
    sectionRef: 'Sekcja 27.3',
    options: [
      { label: 'A', text: 'Ludzki umysł działa jak kamera wideo i zawsze rejestruje wszystkie obiekty w polu widzenia.', isCorrect: false },
      { label: 'B', text: 'Fizyczny dostęp sensoryczny do bodźca nie gwarantuje jego świadomego zauważenia i przetworzenia — uwaga sterowana odgórnie (top-down) silnie filtruje bodźce, sprawiając, że nawet wyraźne fakty mogą pozostać poza świadomością.', isCorrect: true },
      { label: 'C', text: 'Ślepota nieuwagi występuje wyłącznie u osób z uszkodzeniami płata potylicznego.', isCorrect: false },
      { label: 'D', text: 'Wszyscy uczestnicy eksperymentu celowo kłamali badaczom.', isCorrect: false }
    ],
    explanation: 'Uwaga to ograniczony zasób selekcyjny. Gdy kora przedczołowa koncentruje się na konkretnym celu (np. liczeniu podań lub szukaniu błędu w arkuszu), bodźce niezwiązane z tym celem są aktywnie wygaszane. Dlatego partner lub współpracownik może autentycznie nie zauważyć gestu, choć patrzył w naszą stronę.',
    keyTakeaway: 'Widzieć to nie to samo co zauważyć. Dostęp sensoryczny nie jest tożsamy ze świadomym przetworzeniem.'
  },
  {
    id: 14,
    question: 'Dlaczego tzw. multitasking przy złożonych zadaniach umysłowych jest biologiczną iluzją, niszczącą jakość decyzji (Sekcja 27.3)?',
    topic: 'Koszt Przełączania Uwagi (Attentional Switching Cost)',
    sectionRef: 'Sekcja 27.3',
    options: [
      { label: 'A', text: 'Mózg nie wykonuje dwóch wymagających poznawczo operacji równolegle, lecz gwałtownie przełącza się między nimi, płacąc za każde przejście kosztem metabolicznym (rekonfiguracja pamięci roboczej, spadek płynności, ryzyko błędu).', isCorrect: true },
      { label: 'B', text: 'Mózg posiada nieograniczone zasoby uwagi i potrafi bez problemu pisać dwa trudne raporty naraz.', isCorrect: false },
      { label: 'C', text: 'Multitasking jest szkodliwy tylko dla osób po 70. roku życia.', isCorrect: false },
      { label: 'D', text: 'Dźwięki powiadomień zwiększają poziom ilorazu inteligencji o 15 punktów.', isCorrect: false }
    ],
    explanation: 'Możemy łączyć czynności wysoce zautomatyzowane (spacer i rozmowa), ale dwa zadania wymagające kontroli wykonawczej rywalizują o te same obwody czołowe. Przełączanie uwagi co 3 minuty wywołuje „resztkowe zaangażowanie uwagi” (attention residue) i dramatycznie obniża jakość przetwarzania.',
    keyTakeaway: 'Czas spędzony przy biurku nie równa się czasowi skupienia. Prawdziwa głębia wymaga ochrony uwagi przed ciągłą fragmentacją.'
  },
  {
    id: 15,
    question: 'Jak powstaje pętla sprzężenia zwrotnego: Lęk → Selektywność Uwagi → Błąd Potwierdzenia → Decyzja Obronna (Sekcja 27.5)?',
    topic: 'Afektywne Meblowanie Uwagi i Pętla Zagrożenia',
    sectionRef: 'Sekcja 27.5',
    options: [
      { label: 'A', text: 'Lęk automatycznie zwiększa obiektywizm i otwiera umysł na wszystkie możliwe fakty w otoczeniu.', isCorrect: false },
      { label: 'B', text: 'Stan afektywny podnosi istotność bodźców zgodnych z obawą; uwaga selektywnie wyławia neutralne sygnały (np. krótką odpowiedź, pauzę), interpretuje je jako wrogie, co wzmacnia lęk i prowadzi do nieadaptacyjnych decyzji obronnych.', isCorrect: true },
      { label: 'C', text: 'Uwaga i emocje działają w całkowicie odrębnych półkulach mózgu i nie wpływają na siebie.', isCorrect: false },
      { label: 'D', text: 'Zjawisko to występuje wyłącznie u dzieci w wieku przedszkolnym.', isCorrect: false }
    ],
    explanation: 'Emocja nie tylko informuje o stanie organizmu, ale staje się soczewką dla uwagi. Osoba obawiająca się odrzucenia zauważa każde mrugnięcie okiem i każdą zwłokę w odpisaniu, ignorując sygnały życzliwości. Ta asymetria uwagi utrwala fałszywą interpretację sytuacji.',
    keyTakeaway: 'To, że zauważasz coś częściej pod wpływem emocji, nie oznacza, że występuje to częściej w obiektywnym świecie.'
  },
  {
    id: 16,
    question: 'W psychologii emocji moralnych i samoświadomych fundamentalne znaczenie ma rozróżnienie między WST YDEM a POCZUCIEM WINY (badania June Tangney). Dlaczego różnica ta decyduje o jakości uczenia się po błędzie (Sekcja 27.4 & 27.10)?',
    topic: 'Wstyd a Poczucie Winy w Pętli Retrospekcji',
    sectionRef: 'Sekcja 27.4',
    options: [
      { label: 'A', text: 'Wstyd dotyczy wyłącznie spraw finansowych, a poczucie winy dotyczy diety.', isCorrect: false },
      { label: 'B', text: 'Wstyd jest negatywną oceną całego „ja” („Jestem beznadziejny”) i wywołuje wycofanie, zaprzeczenie lub agresję obronną; poczucie winy ocenia konkretne zachowanie („Zrobiłem błąd”) i mobilizuje do zadośćuczynienia oraz naprawy procesu.', isCorrect: true },
      { label: 'C', text: 'Wstyd jest zawsze adaptacyjny, a poczucie winy zawsze patologiczne.', isCorrect: false },
      { label: 'D', text: 'Te terminy oznaczają w języku naukowym dokładnie to samo.', isCorrect: false }
    ],
    explanation: 'Gdy po porażce uruchamia się wstyd, jednostka skupia się na obronie tożsamości (ucieczka w racjonalizację, atak na innych, prokrastynacja). Poczucie winy oddziela tożsamość od zachowania: „Jestem wartościowym człowiekiem, który podjął złą decyzję — co mogę naprawić w procesie?”.',
    keyTakeaway: 'Oddziel ocenę swojego postępowania od oceny swojej wartości jako człowieka. Tylko wtedy błąd staje się lekcją zamiast wyrokiem.'
  }
];

export const chapterTwentySevenCaseStudyMateusz: CaseStudy = {
  id: 'cs-ch27-mateusz-rozstaje',
  title: 'Skrzyżowanie Dróg Mateusza: Wiwisekcja Wielopoziomowego Wyboru',
  subtitle: 'Jak splot zakotwiczenia, lęku przed stratą, konfliktu ról i kosztów utopionych doprowadził lidera na skraj katastrofy zawodowej',
  protagonist: 'Mateusz, 34 lata, lider zespołu analizy danych w firmie technologicznej',
  context: 'Czwartkowy wieczór w biurze. Mateusz siedzi przed dwoma dokumentami: ofertą objęcia prestiżowego, ale skrajnie ryzykownego projektu wdrożeniowego w nowym dziale korporacji oraz propozycją przejścia do stabilnego, mniejszego software house’u z większą elastycznością czasu pracy dla rodziny.',
  story: [
    'Mateusz od 5 lat budował swoją pozycję w korporacji NexaTech. Włożył w to setki nadgodzin, weekendów i kompromisów kosztem zdrowia. Wiceprezes firmy wezwał go rano na rozmowę: „Mateusz, mamy dla ciebie projekt życia — wdrażamy system predykcyjny dla sektora bankowego. Budżet 4 miliony. Jeśli to dowieziesz, masz fotel dyrektora. Jeśli nie... cóż, zarząd będzie musiał wyciągnąć wnioski. Potrzebuję decyzji do jutra rano”.',
    'Równolegle od dwóch tygodni na biurku Mateusza leżała oferta z firmy GreenData — mniejsza presja, 20% wyższe wynagrodzenie bazowe, 100% pracy zdalnej i obietnica 40-godzinnego tygodnia pracy, o którym marzyła jego żona po narodzinach ich drugiego dziecka.',
    'Mateusz poczuł, jak jego ciało wchodzi w stan paraliżu decyzyjnego. Serce biło w tempie 105 bpm. W głowie odpalała się kanonada sprzecznych sygnałów: z jednej strony obietnica statusu („dyrektor w wieku 35 lat”), z drugiej — wyczerpanie i lęk przed publiczną kompromitacją w razie fiaska projektu. Projekt bankowy miał nierealistyczne terminy (deadline za 4 miesiące przy szacowanym czasie prac 9 miesięcy).',
    'Co zrobił Mateusz? Zamiast chłodno przeanalizować ryzyko wykonalności i bilans zysków/strat, uległ splotowi heurystyk: zakotwiczył się na prestiżowym tytule dyrektora (anchoring), wpadł w pułapkę kosztów utopionych („Poświęciłem tej firmie 5 lat, nie mogę teraz odejść i oddać tego komuś innemu!”) oraz uległ framingowi wiceprezesa („albo jesteś graczem wagi ciężkiej, albo tchórzem”).',
    'O 22:45 Mateusz wysłał maila do wiceprezesa: „Wchodzę w to, biorę projekt bankowy”. Odrzucił propozycję GreenData. Przez kolejne 4 miesiące spał po 4 godziny na dobę. Projekt z powodu błędów architektonicznych i nierealistycznych założeń zaliczył spektakularne opóźnienie. Bank zerwał kontrakt. Zarząd obarczył winą Mateusza, degradując go ze stanowiska lidera. W domu doszło do głębokiego kryzysu małżeńskiego.',
    'Dopiero podczas retrospekcji Mateusz zrozumiał, że jego decyzja nie była wynikiem świadomego wyboru wartości, lecz panicznej ucieczki przed lękiem przed utratą statusu i bezkrytycznego ulegania pułapce kosztów utopionych.'
  ],
  dialogue: [
    { speaker: 'Wiceprezes NexaTech', text: 'Mateusz, to projekt życia. Albo bierzesz to i za rok jesteś dyrektorem, albo zadowalasz się przeciętnością. Potrzebuję decyzji do jutra.', subtext: 'Agresywny framing dychotomiczny (sukces vs przeciętność) i sztuczne poczucie pilności (zakłócenie Systemu 2).' },
    { speaker: 'Mateusz (w myślach)', text: 'Jeśli teraz odejdę, te wszystkie zarwane noce przez 5 lat pójdą do kosza. Wyjdę na człowieka, który stchórzył przed największą szansą.', subtext: 'Klasyczna pułapka kosztów utopionych sprzężona z lękiem przed naruszeniem tożsamości „człowieka sukcesu”.' },
    { speaker: 'Żona Mateusza', text: 'Mateusz, obiecałeś, że po tym kwartale zwolnisz. Dzieci cię nie widzą. Czy naprawdę musisz udowadniać coś ludziom, którzy w razie błędu i tak cię poświęcą?', subtext: 'Głos perspektywy długoterminowej i wartości relacyjnych zderzający się z korporacyjną presją statusu.' }
  ],
  decisionTaken: 'Przyjęcie niemożliwego do zrealizowania projektu bankowego pod wpływem kosztów utopionych i manipulacji ramą statusu, przy jednoczesnym odrzuceniu zrównoważonej oferty alternatywnej.',
  whatProtagonistSaw: 'Tytuł dyrektora, 4-milionowy budżet, podziw kolegów z biura oraz zagrożenie uznania za tchórza w razie odmowy.',
  whatWasMissed: 'Twarde dane o niewykonalności projektu w 4 miesiące, asymetria odpowiedzialności (sukces zarządu vs porażka Mateusza), realny stan własnych zasobów zdrowotnych i alternatywny koszt w postaci rozpadu życia rodzinnego.',
  psychologicalAnalysis: {
    coreMechanism: 'Kaskada błędów poznawczych: Sunk Cost Fallacy (5 lat w firmie) + Framing Effect wiceprezesa + Present Bias (natychmiastowe uniknięcie wstydu z odmowy) + Overconfidence (wiara, że „jakoś to dociągnie siłą woli”).',
    cognitiveBiases: [
      { name: 'Koszty Utopione (Sunk Cost Fallacy)', description: 'Uzasadnianie podjęcia gigantycznego ryzyka przeszłymi, nieodwracalnymi inwestycjami czasu i zdrowia.', impact: 'Zablokowało racjonalne wyjście z toksycznego środowiska.' },
      { name: 'Efekt Ramy (Framing Effect)', description: 'Przyjęcie narzuconej alternatywy: „bohater vs tchórz” zamiast merytorycznej oceny wykonalności kontraktu.', impact: 'Zniekształciło ocenę ryzyka biznesowego.' },
      { name: 'Awersja do Strat (Loss Aversion)', description: 'Lęk przed utratą wypracowanej pozycji w NexaTech był silniejszy niż obiektywne zyski z nowej oferty GreenData.', impact: 'Odrzucenie obiektywnie korzystniejszej alternatywy życiowej.' }
    ],
    defenseMechanisms: [
      { name: 'Racjonalizacja', explanation: '„Robię to dla przyszłości rodziny, żeby zabezpieczyć nas finansowo raz na zawsze”.' },
      { name: 'Zaprzeczanie', explanation: 'Ignorowanie jednoznacznych ostrzeżeń programistów o nierealistycznych terminach wdrożenia.' }
    ],
    emotionalDynamic: 'Przejście od euforycznego pobudzenia ambicjonalnego (dopamina) przez paraliżujący lęk przed porażką (kortyzol) aż po wyczerpanie i depresyjną rezygnację po katastrofie projektu.'
  },
  decisionProcessAnalysis: {
    trigger: 'Propozycja wiceprezesa postawiona z 24-godzinnym ultimatum.',
    attentionFocus: 'Zagrożenie utraty twarzy i prestiżowy tytuł dyrektora (wąskie pole uwagi).',
    interpretation: '„Jeśli odmówię, moja kariera tutaj jest skończona i udowodnię, że jestem słaby”.',
    emotion: 'Lęk przed wykluczeniem, chciwość statusowa, presja czasu.',
    impulse: 'Zgodzić się natychmiast, by rozładować napięcie w gabinecie szefa.',
    action: 'Podpisanie kontraktu bez klauzul ochronnych i odrzucenie GreenData.',
    consequence: 'Klęska projektu, degradacja zawodowa, utrata zdrowia i kryzys relacyjny.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Prążkowie brzuszne (Ventral Striatum)', role: 'Wizualizacja nagrody statusowej (gabinet dyrektora)', activationState: 'Hiperaktywacja pod wpływem obietnicy prestiżu' },
      { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Chłodna analiza wykonalności technicznej i harmonogramu', activationState: 'Wyhamowana przez presję czasu i stres decyzyjny' },
      { region: 'Wyspa (Insula)', role: 'Rejestracja somatycznego dyskomfortu związanego z lękiem przed odmową', activationState: 'Pobudzona — wymuszała uległość wobec szefa' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol i noradrenalina', roleInScenario: 'Zwężenie pola uwagi do najbliższych 24 godzin (blokada myślenia długofalowego).' },
      { name: 'Dopamina', roleInScenario: 'Krótkotrwały strzał w momencie wyobrażenia sobie sukcesu, maskujący realne ryzyko.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Spotkanie u wiceprezesa', process: 'Wyrzut katecholamin pod wpływem ultimatum „decyzja do jutra”.' },
      { timeMs: 'Godzina 22:45 w domu', process: 'Wyczerpanie zasobów kontroli wykonawczej (ego depletion) po 14 godzinach pracy — kapitulacja Systemu 2.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Sztuczne poczucie pilności (Scarcity of Time)', description: 'Ultimatum 24h uniemożliwiające konsultację z prawnikiem i zespołem technicznym.', vulnerabilityExploited: 'Lęk przed utratą okazji.' },
      { tactic: 'Fałszywa dychotomia (Black-and-White Framing)', description: '„Albo dyrektor, albo przeciętniak” — wycięcie wszystkich opcji pośrednich.', vulnerabilityExploited: 'Ambicja tożsamościowa.' }
    ],
    counterMeasures: [
      { step: '1. Zastosowanie Zasady 72 Godzin', script: '„Panie wiceprezesie, to kluczowy projekt dla firmy. Właśnie ze względu na szacunek do budżetu 4 milionów potrzebuję 3 dni roboczych na audyt ryzyk z głównym architektem. W poniedziałek o 9:00 przedstawię warunki brzegowe mojego wejścia”.', rationale: 'Rozbija sztuczną presję czasu i przywraca pozycję podmiotową.' },
      { step: '2. Audyt Kosztów Utopionych', script: 'Wypisanie na kartce: „Te 5 lat już minęło i nic ich nie zwróci. Co zyskam od jutra w NexaTech vs GreenData?”.', rationale: 'Neutralizuje emocjonalny wpływ przeszłych inwestycji.' }
    ]
  },
  alternativePath: 'Gdyby Mateusz rozpoznał pułapkę kosztów utopionych, odrzucił nierealistyczny projekt i przeszedł do GreenData, po roku cieszyłby się stabilną pozycją seniorską, wyższymi zarobkami, czasem dla małych dzieci i odzyskaną równowagą psychiczną.',
  readerQuestion: 'W jakiej sferze swojego życia trwasz w toksycznej sytuacji tylko dlatego, że „włożyłeś już w nią zbyt wiele czasu i wysiłku, by teraz zrezygnować”?',
  keyTakeaway: 'Przeszłość jest kosztem zamkniętym. Decyzja podjęta dzisiaj powinna zależeć wyłącznie od tego, co jest najlepsze dla Twojej przyszłości, a nie od tego, ile zapłaciłeś za przeszłe błędy.'
};

export const chapterTwentySevenCaseStudyEwa: CaseStudy = {
  id: 'cs-ch27-ewa-zaniechanie',
  title: 'Pętla Zaniechania Ewy: Jak Brak Działania Stał Się Najcięższą Decyzją',
  subtitle: 'Anatomia biernego dryfu, ucieczki w status quo i pozornego bezpieczeństwa braku wyboru',
  protagonist: 'Ewa, 29 lat, specjalistka ds. obsługi klienta z aspiracjami do roli UX Researchera',
  context: 'Mieszkanie Ewy. Mija 18 miesięcy od ukończenia przez nią prestiżowego kursu projektowania doświadczeń użytkownika. Każdego miesiąca pojawia się kilka ofert pracy dla juniorów.',
  story: [
    'Ewa ukończyła studia humanistyczne i od 4 lat pracowała w dziale obsługi reklamacji w dużej korporacji logistycznej. Praca była monotonna, słabo płatna i frustrująca, ale dawała jedną rzecz: absolutną przewidywalność. Ewa znała na pamięć każdy skrypt rozmowy.',
    'Dwa lata temu postanowiła zmienić życie. Zainwestowała 8000 zł w roczny kurs UX Researchu. Miała świetne oceny, stworzyła portfolio z dwoma projektami badawczymi. Wszyscy wykładowcy mówili jej: „Aplikuj, rynek czeka na takich ludzi jak ty”.',
    'I wtedy zaczął się proces cichego sabotażu. Za każdym razem, gdy Ewa widziała atrakcyjne ogłoszenie o pracę, jej uwaga skupiała się na jednym zdaniu w wymaganiach: „Mile widziane minimum 2 lata komercyjnego doświadczenia”. Mimo że był to wymóg opcjonalny, Ewa interpretowała go jednoznacznie: „Odrzucą mnie w pierwszym etapie. Lepiej jeszcze dopracuję portfolio”.',
    'Miesiące mijały. Ewa nie wysłała ani jednego CV. Każdego wieczoru mówiła sobie: „Nie podjęłam jeszcze decyzji o zmianie, po prostu czekam na idealny moment”. W rzeczywistości podejmowała najcięższą z możliwych decyzji — decyzję przez zaniechanie (decision by omission). Wybierała codzienne trwanie w frustrującej pracy kosztem własnego rozwoju.',
    'Działał tu klasyczny mechanizm: brak działania dawał natychmiastową ulgę (ochrona przed odrzuceniem i wstydem rozmowy rekrutacyjnej — nagroda natychmiastowa), podczas gdy koszt zaniechania (utrata szansy na rozwój, spadek zarobków, erozja wiary w siebie) był odsunięty w czasie.',
    'Po 2 latach wiedza z kursu zdezaktualizowała się, a znajomi z roku objęli stanowiska midów. Ewa obudziła się z poczuciem głębokiego żalu i dojmującym pytaniem: „Jak to możliwe, że nic nie robiąc, podjęłam decyzję, która zniszczyła moje marzenie?”.'
  ],
  decisionTaken: 'Permanentne odkładanie wysłania dokumentów aplikacyjnych, skutkujące biernym pozostaniem w niesatysfakcjonującej pracy przez kolejne lata.',
  whatProtagonistSaw: 'Opcjonalny wymóg 2 lat doświadczenia, rzekomy brak gotowości portfolio i ryzyko odrzucenia przez rekrutera.',
  whatWasMissed: 'Że w procesach rekrutacyjnych wymagania są listą życzeń, a nie sztywnym warunkiem; że brak wysłania CV gwarantuje 100% prawdopodobieństwo braku zmiany; że bierność jest w istocie aktywnym wyborem obecnego dyskomfortu.',
  psychologicalAnalysis: {
    coreMechanism: 'Błąd zaniechania (Omission Bias) sprzężony z awersją do ryzyka i ucieczką przed dyskomfortem oceny społecznej (niskie Self-Efficacy).',
    cognitiveBiases: [
      { name: 'Błąd Zaniechania (Omission Bias)', description: 'Podświadome przekonanie, że szkodliwe konsekwencje wynikające z braku działania są moralnie i psychologicznie mniej dotkliwe niż błąd popełniony w wyniku aktywnego działania.', impact: 'Usprawiedliwianie bierności jako „ostrożności”.' },
      { name: 'Efekt Status Quo', description: 'Irracjonalna preferencja dla obecnego stanu rzeczy tylko dlatego, że jest znany i nie wymaga wydatku energii na zmianę.', impact: 'Zablokowanie poszukiwania nowej pracy.' },
      { name: 'Filtracja Negatywna (Confirmation Bias)', description: 'Wypatrywanie w ogłoszeniach wyłącznie przeszkód i powodów, dla których kandydatura zostanie odrzucona.', impact: 'Permanentne poczucie „niegotowości”.' }
    ],
    defenseMechanisms: [
      { name: 'Racjonalizacja prokrastynacyjna', explanation: '„Muszę jeszcze przeczytać dwie książki i zrobić trzeci projekt do portfolio, dopiero wtedy będę w pełni profesjonalna”.' }
    ],
    emotionalDynamic: 'Niewielki, ale stały poziom przewlekłego lęku i poczucia winy, tłumiony przez chwilową ulgę z zamknięcia karty z ogłoszeniem o pracę.'
  },
  decisionProcessAnalysis: {
    trigger: 'Nowe ogłoszenie na LinkedIn na stanowisko Junior UX Researcher.',
    attentionFocus: 'Punkt o „2 latach doświadczenia” w wymaganiach.',
    interpretation: '„Jestem za słaba, wyśmieją moje portfolio”.',
    emotion: 'Wstyd wyprzedzający, lęk przed weryfikacją kompetencji.',
    impulse: 'Zamknąć przeglądarkę, włączyć serial.',
    action: 'Niewysłanie aplikacji (zaniechanie).',
    consequence: 'Dwa lata utraconych szans rozwojowych, spadek samooceny, wypalenie w dziale reklamacji.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Ciało migdałowate (Amygdala)', role: 'Wykrywanie zagrożenia oceną społeczną', activationState: 'Uruchamiało reakcję unikania na widok formularza aplikacyjnego' },
      { region: 'Kora przedczołowa (dlPFC)', role: 'Planowanie kariery i realizacja celów tożsamościowych', activationState: 'Paraliżowana przez brak natychmiastowego wzmocnienia' }
    ],
    neurotransmitters: [
      { name: 'Dopamina', roleInScenario: 'Spadała w obliczu abstrakcyjnego procesu rekrutacyjnego, rosła przy ucieczce w bezpieczne, codzienne schematy.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Kliknięcie w ofertę pracy', process: 'Skok tętna i natychmiastowy impuls wycofania (unikanie dyskomfortu).' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Zasada 10 Odrzuceń jako Cel', script: 'Zamiast stawiać sobie cel: „Muszę dostać tę pracę”, Ewa ustala cel procesowy: „Moim zadaniem na ten miesiąc jest zebrać 10 oficjalnych odmów od firm”.', rationale: 'Przebudowuje ramę poznawczą (re-framing): odrzucenie przestaje być porażką, a staje się zrealizowanym krokiem w statystyce poszukiwań.' }
    ]
  },
  alternativePath: 'Gdyby Ewa wysłała 30 aplikacji w pierwszym kwartale po kursie, po 4-6 rozmowach znalazłaby stanowisko asystenckie i dziś zarabiałaby dwukrotnie więcej, pracując przy innowacyjnych projektach badawczych.',
  readerQuestion: 'W jakiej sprawie w Twoim życiu „czekasz na idealny moment”, udając przed sobą, że niepodjęcie decyzji chroni Cię przed ryzykiem?',
  keyTakeaway: 'Brak decyzji jest jedną z najbardziej radykalnych decyzji, jakie możesz podjąć. Różnica polega na tym, że zamiast sterować własnym statkiem, pozwalasz prądowi rzeki rozbić go o losowe skały.'
};

export const chapterTwentySevenExerciseDecisionAudit: SelfExercise = {
  id: 'ex-ch27-decision-audit',
  title: 'Ćwiczenie 27.1: 10-Etapowy Dziennik Dekompozycji Procesu Decyzyjnego',
  subtitle: 'Rozbij realną decyzję na części pierwsze i oddziel proces od wyniku',
  objective: 'Nauczenie się analizowania własnych wyborów jako 10-etapowej pętli systemowej zamiast zero-jedynkowego oceniania rezultatu.',
  durationMinutes: 25,
  neuroScientificFoundation: 'Wymuszone rozbicie sytuacji na fazę faktów, uwagi, interpretacji i przewidywania aktywuje grzbietowo-boczną korę przedczołową, wygaszając automatyczne schematy obronne ciała migdałowatego.',
  steps: [
    {
      stepNumber: 1,
      title: 'Krok 1 i 2: Czysty Fakt i Reflektor Uwagi',
      instruction: 'Wybierz jedną trudną decyzję z ostatnich 30 dni. Opisz tylko to, co zarejestrowałaby kamera (bez przymiotników i ocen) oraz na czym początkowo skupiła się Twoja uwaga.',
      promptText: 'Fakt obiektywny oraz pierwsze ognisko mojej uwagi:',
      placeholder: 'Fakt: Dostałem propozycję projektu wymagającego 10h pracy tygodniowo więcej za dodatkowe 2000 zł. Moja uwaga natychmiast skupiła się wyłącznie na kwocie 2000 zł...'
    },
    {
      stepNumber: 2,
      title: 'Krok 3 i 4: Interpretacja, Heurystyki i Konflikt Celów',
      instruction: 'Jaką historię opowiedział Twój umysł? Jakie heurystyki zadziałały (zakotwiczenie, framing, dowód społeczny)? Jaki konflikt celów się pojawił (nagroda natychmiastowa vs przyszłość)?',
      promptText: 'Moja interpretacja, heurystyki i starcie celów:',
      placeholder: 'Interpretacja: „Muszę to wziąć, bo inaczej uznają, że mi nie zależy”. Heurystyka: framing w kategoriach straty. Konflikt: natychmiastowy zastrzyk gotówki vs długofalowy odpoczynek i zdrowie...'
    },
    {
      stepNumber: 3,
      title: 'Krok 5 i 6: Ocena Ryzyka i Przewidywanie Przyszłości',
      instruction: 'Czy była to sytuacja ryzyka (znane szanse), czy niepewności (brak danych)? Jakie konsekwencje przewidywałeś, a które całkowicie zignorowałeś przez optymizm lub present bias?',
      promptText: 'Moja kalkulacja niepewności i błędy przewidywania:',
      placeholder: 'Sytuacja głębokiej niepewności. Założyłem nierealistycznie, że dam radę pracować po nocach bez spadku energii. Całkowicie pominąłem koszt zmęczenia...'
    },
    {
      stepNumber: 4,
      title: 'Krok 7 i 8: Wybór, Architektura Środowiska i Działanie',
      instruction: 'Jaki był Twój ruch (działanie aktywne czy zaniechanie)? Jakie tarcie w otoczeniu wpłynęło na ten krok?',
      promptText: 'Ostateczny wybór i rola tarcia środowiskowego:',
      placeholder: 'Zgodziłem się przez maila w 3 minuty. Tarcie do odmowy było ogromne (wymagało trudnej rozmowy), a tarcie do zgody wynosiło jedno kliknięcie...'
    },
    {
      stepNumber: 5,
      title: 'Krok 9 i 10: Wynik a Jakość Procesu — Lekcja na Przyszłość',
      instruction: 'Jaki był rezultat? Czy niekorzystny wynik dowodzi, że jesteś „zły”, czy obnaża luki w procesie? W którym punkcie pętli wdrożysz zmianę następnym razem?',
      promptText: 'Wnioski procesowe i nowy punkt interwencji:',
      placeholder: 'Rezultat: przepracowanie i błąd w projekcie. Wniosek: wynik był zły, bo proces był zły (uległem presji czasu). Następnym razem wdrożę Zasadę 24h na Odpowiedź (Punkt Interwencji 1)...'
    }
  ],
  reflectionQuestions: [
    'W którym z 10 kroków najczęściej dochodzi u Ciebie do zniekształcenia rzeczywistości?',
    'Jak zmienia się Twoje poczucie spokoju, gdy przestajesz obwiniać siebie, a zaczynasz korygować architekturę procesu decyzyjnego?'
  ]
};

export const chapterTwentySevenExerciseCounterfactualLab: SelfExercise = {
  id: 'ex-ch27-counterfactual-lab',
  title: 'Ćwiczenie 27.2: Laboratorium Myślenia Kontrfaktycznego — Rekonstrukcja Bez Samobiczowania',
  subtitle: 'Przekształć żal i poczucie winy w konkretny protokół odporności decyzyjnej',
  objective: 'Zneutralizowanie błędu oceny wstecznej (hindsight bias) i wydobycie twardej wiedzy z przeszłych błędów.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Świadome odtworzenie ówczesnego stanu informacji zapobiega nakładaniu dzisiejszej wiedzy na przeszłe wybory, chroniąc poczucie sprawczości i samoskuteczności.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zidentyfikuj decyzję obarczoną żalem',
      instruction: 'Wybierz sytuację z przeszłości, do której często wracasz myślami z poczuciem złości na samego siebie („Dlaczego byłem taki ślepy?”).',
      promptText: 'Decyzja, której żałuję:',
      placeholder: 'Żałuję zakupu drogiego samochodu na kredyt 3 lata temu, który pochłonął moje oszczędności...'
    },
    {
      stepNumber: 2,
      title: 'Zrekonstruuj wiedzę z TAMTEGO momentu',
      instruction: 'Co dokładnie wiedziałeś wtedy? Czego obiektywnie NIE MOGŁEŚ wiedzieć? Jakie emocje, presje i ograniczenia czasu towarzyszyły Ci w tamtej minucie?',
      promptText: 'Stan informacji i presji w chwili podejmowania decyzji:',
      placeholder: 'Wtedy miałem stabilną pracę, nie wiedziałem, że firma zredukuje mój dział. Czułem silną presję statusu i lęk przed oceną znajomych...'
    },
    {
      stepNumber: 3,
      title: 'Zidentyfikuj 3 Punkty Interwencji Kontrfaktycznej',
      instruction: 'Wskaż 3 konkretne miejsca w procesie, w których jedna mikrozmiana zmieniłaby bieg wydarzeń (np. zasada skonsultowania z doradcą, odczekanie 7 dni, zmiana ramy).',
      promptText: 'Moje 3 punkty zwrotne:',
      placeholder: '1. Odczekanie 14 dni przed podpisaniem umowy. 2. Zrobienie arkusza pesymistycznego (analiza pre-mortem). 3. Rozpoznanie heurystyki afektu w salonie...'
    },
    {
      stepNumber: 4,
      title: 'Sformułuj Nową Żelazną Regułę Decyzyjną (Heurystykę Pozytywną)',
      instruction: 'Przekształć tę lekcję w jednozdaniową zasadę operacyjną, którą zapiszesz w telefonie na przyszłość.',
      promptText: 'Moja żelazna zasada decyzyjna na przyszłość:',
      placeholder: 'Przed każdym zakupem powyżej 1000 zł obowiązuje mnie bezwzględna 7-dniowa kwarantanna decyzyjna i arkusz kosztów całkowitych.'
    }
  ],
  reflectionQuestions: [
    'Czy osoba, którą byłeś 3 lata temu, zasługuje na Twoje współczucie i zrozumienie wobec ówczesnego braku wiedzy?',
    'Jak ta trudna sytuacja przyczyniła się do wzrostu Twojej dojrzałości strategicznej dzisiaj?'
  ]
};

export const chapterTwentySevenCaseStudyRelationalConflict: CaseStudy = {
  id: 'cs-ch27-relational-conflict',
  title: 'Wiadomość o 22:15: Kaskada Uwagi, Lęku i Złości w Zespole',
  subtitle: 'Jak identyczny komunikat cyfrowy uruchomił trzy skrajne trajektorie emocjonalne i o mały włos nie rozbił projektu',
  protagonist: 'Robert (Project Lead), Marta (Senior Dev) i Kacper (Junior Dev)',
  context: 'Czwartkowy wieczór, godzina 22:15. Zespół kończy wyczerpujący sprint przed wdrożeniem systemu płatności. Wszyscy trzej otrzymują lakoniczny e-mail od wiceprezesa zarządu: „Musimy jutro o 8:30 porozmawiać o module płatności”.',
  story: [
    'Obiektywny fakt był jeden: zdanie o spotkaniu o 8:30. Nie zawierało ono ani słowa oceny, przymiotnika ani wykrzyknika. Jednak w ułamku sekundy w umysłach Roberta, Marty i Kacpra uruchomiły się całkowicie odmienne procesy uwagi i oceny znaczenia (appraisal).',
    'Robert od tygodnia żył w stanie podwyższonego napięcia. Na widok wiadomości jego ciało migdałowate zinterpretowało komunikat jako natychmiastowe zagrożenie tożsamości: „Klient złożył reklamację, prezes mnie zwolni”. Serce zabiło w tempie 115 bpm. Reflektor uwagi Roberta uległ gwałtownemu zwężeniu (threat-induced attentional tunneling) — przez 4 godziny w nocy gorączkowo przeszukiwał logi serwera, szukając wyłącznie dowodów na własne błędy (confirmation trap). Rano przyszedł na spotkanie po nieprzespanej nocy, roztrzęsiony, z garścią tabletek uspokajających.',
    'Marta weszła w inną trajektorię. Dwa dni wcześniej prosiła zarząd o nieprzesyłanie spraw po 20:00. Wiadomość o 22:15 oceniła jako bezczelne naruszenie jej granic i brak szacunku. Wzrosło ciśnienie krwi, zacisnęła szczęki. W jej ciele zapłonęła złość. Zamiast sprawdzić alternatywne hipotezy, utożsamiła interpretację z faktem: „Robią to specjalnie, by pokazać swoją władzę”. O 23:10, pod wpływem impulsu i braku modulacji somatycznej, wysłała agresywną odpowiedź na ogólny adres: „To jest mobbing organizacyjny. Nie będę uczestniczyć w spotkaniach zwoływanych w środku nocy!”.',
    'Kacper, który pracował dopiero od 3 miesięcy, przeczytał maila w łóżku. Z powodu braku wcześniejszego doświadczenia poczuł paraliżujący wstyd: „Na pewno odkryli, że nie umiem pisać testów (Syndrom Oszusta). Zostanę wyrzucony przed końcem okresu próbnego”. Wycofał się pod kołdrę, wyłączył telefon i podjął decyzję o zaniechaniu — postanowił rano nie przyjść do biura i wysłać zwolnienie lekarskie.',
    'O 8:30 prawda wyszła na jaw: wiceprezes zarządu wszedł do salki z uśmiechem i kartonem świeżych croissantów. Główny inwestor firmy podpisał rano kluczowy kontrakt i prezes chciał osobiście podziękować zespołowi, zaoferować 30% premii za wdrożenie i zaproponować przesunięcie deadline’u o dwa tygodnie, by zespół mógł odpocząć.',
    'Skutki braku regulacji były jednak druzgocące: Robert był na skraju wyczerpania nerwowego, Marta musiała tłumaczyć się przed działem HR z agresywnego maila rozesłanego do zarządu, a Kacper spędził poranek w gabinecie lekarskim w ataku paniki. Ta sama informacja — trzy różne światy psychologiczne.'
  ],
  dialogue: [
    { speaker: 'E-mail od Wiceprezesa', text: 'Musimy jutro o 8:30 porozmawiać o module płatności.', subtext: 'Czysty fakt bez zabarwienia afektywnego — neutralny bodziec wejściowy.' },
    { speaker: 'Robert (myśli)', text: 'Wiedziałem. Wykryli błąd w autoryzacji transakcji. To koniec mojego awansu.', subtext: 'Lęk wywołany katastrofizacją i projektowaniem zagrożenia na niejednoznaczny bodziec.' },
    { speaker: 'Marta (do partnera)', text: 'Specjalnie to robią! Testują, na ile mogą sobie pozwolić. Nie odpuszczę im tego.', subtext: 'Złość wywołana bezrefleksyjnym przypisaniem wrogich intencji nadawcy.' },
    { speaker: 'Wiceprezes (rano)', text: 'Chciałem wam osobiście podziękować i ogłosić premie, zanim rozejdziecie się do zadań.', subtext: 'Rzeczywista intencja nadawcy, całkowicie sprzeczna z nocnymi hipotezami zespołu.' }
  ],
  decisionTaken: 'Marta wysłała agresywnego maila eskalującego konflikt, Robert spędził bezsenną noc na kompulsywnym szukaniu winy, a Kacper uciekł w zwolnienie lekarskie — wszystkie te decyzje zapadły pod wpływem nieuregulowanego afektu.',
  whatProtagonistSaw: 'Każdy widział wyłącznie własną projekcję emocjonalną: Robert widział zwolnienie, Marta widziała demonstrację władzy, Kacper widział demaskację niekompetencji.',
  whatWasMissed: 'Obiektywny fakt, że lakoniczna wiadomość nie zawierała żadnych negatywnych treści; możliwość zadania pytania wyjaśniającego; istnienie hipotez neutralnych i pozytywnych.',
  psychologicalAnalysis: {
    coreMechanism: 'Kaskada: Niedookreślony bodziec → Afektywne ukierunkowanie uwagi → Błąd atrybucji intencji → Brak pauzy poznawczej i regulacji emocji wg Grossa → Destrukcyjna decyzja.',
    cognitiveBiases: [
      { name: 'Wrogie przypisanie intencji (Hostile Attribution Bias)', description: 'Marta zinterpretowała neutralne zachowanie jako celowy atak na swoje granice.', impact: 'Agresywna eskalacja w relacji z pracodawcą.' },
      { name: 'Katastrofizacja i Filtr Negatywny', description: 'Robert wyobraził sobie najgorszy możliwy scenariusz utraty pracy.', impact: 'Ciężki stan somatyczny i bezsenność.' },
      { name: 'Selektywność Uwagi (Selective Attention)', description: 'Uwaga skupiła się wyłącznie na słowach „musimy porozmawiać”, ignorując neutralny kontekst.', impact: 'Zablokowanie poszukiwania alternatywnych interpretacji.' }
    ],
    defenseMechanisms: [
      { name: 'Projekcja', explanation: 'Przypisywanie szefowi własnych lęków i ukrytej agresji.' },
      { name: 'Ucieczka / Unikanie (Kacper)', explanation: 'Ucieczka w chorobę jako znieczulenie przed lękiem zdemaskowania.' }
    ],
    emotionalDynamic: 'Przejście od neutralnego bodźca przez gwałtowne pobudzenie autonomiczne aż po zachowania obronne, które wykreowały realny kryzys w zespole.'
  },
  decisionProcessAnalysis: {
    trigger: 'Lakoniczny e-mail o 22:15.',
    attentionFocus: 'Słowo „musimy porozmawiać” + późna pora (paliwo dla lęku).',
    interpretation: 'Robert: „zwolnienie”; Marta: „atak na granice”; Kacper: „kara”.',
    emotion: 'Lęk (Robert), Gniew (Marta), Wstyd i panika (Kacper).',
    impulse: 'Szukać błędów w logach (Robert), zaatakować w mailu (Marta), uciec (Kacper).',
    action: 'Działania zgodne z pierwszym impulsem bez zastosowania pauzy poznawczej.',
    consequence: 'Wyczerpanie, interwencja HR, kryzys zaufania w zespole.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Ciało migdałowate (Amygdala)', role: 'Wykrywanie niejednoznaczności jako bezpośredniego zagrożenia', activationState: 'Maksymalne pobudzenie u wszystkich trzech bohaterów' },
      { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Hamowanie impulsów i generowanie hipotez alternatywnych', activationState: 'Wyłączona przez nocny wyrzut noradrenaliny i kortyzolu' },
      { region: 'Wyspa (Insula)', role: 'Przetwarzanie somatycznych sygnałów napięcia żołądka i tętna', activationState: 'Wzmacniała przekonanie: „skoro moje ciało tak reaguje, to na pewno katastrofa”' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol i adrenalina', roleInScenario: 'Zablokowały sen i wywołały tunelowe widzenie u Roberta.' }
    ],
    biologicalTimeline: [
      { timeMs: '22:15 (Dźwięk powiadomienia)', process: 'Wzbudzenie układu współczulnego, skok tętna o 30 bpm.' },
      { timeMs: '23:10 (Wysłanie maila przez Martę)', process: 'Działanie w szczycie afektu bez fazy modulacji poznawczej.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: '1. Zasada Kwarantanny Nocnych Emocji', script: '„Po 21:00 nie wysyłam żadnych wiadomości o charakterze konfrontacyjnym. Jeśli czuję gniew, zapisuję szkic w notatniku, a decyzję podejmuję po 8 godzinach snu”.', rationale: 'Regeneracja kory przedczołowej i obniżenie poziomu katecholamin przed podjęciem działania.' },
      { step: '2. Protokół 3 Hipotez Interpretacyjnych', script: '„Fakt to spotkanie o 8:30. Hipoteza 1 (pesymistyczna): problem techniczny. Hipoteza 2 (neutralna): bieżąca synchronizacja harmonogramu. Hipoteza 3 (optymistyczna): dobre wieści od klienta”.', rationale: 'Zgodnie z teoriami oceny Lazarusa, rozbicie monopolu jednej katastroficznej interpretacji neutralizuje afekt.' }
    ]
  },
  alternativePath: 'Gdyby Marta i Robert zastosowali pauzę poznawczą i technikę reinterpretacji, oboje przespali by spokojnie noc, a o 8:30 w doskonałych nastrojach odebrali premie od wiceprezesa.',
  readerQuestion: 'Ile razy w życiu wysłałeś pod wpływem złości lub lęku wiadomość, której żałowałeś już 10 minut później?',
  keyTakeaway: 'Emocja jest cenną informacją o stanie Twojego organizmu, ale nigdy nie powinna być jedynym autorem Twoich decyzji. Oddziel fakt od interpretacji, zanim naciśniesz „Wyślij”.'
};

export const chapterTwentySevenExerciseEmotionAttentionAudit: SelfExercise = {
  id: 'ex-ch27-emotion-attention-audit',
  title: 'Ćwiczenie 27.3: Protokół Rozplątywania Pętli: Fakt → Uwaga → Interpretacja → Emocja → Działanie',
  subtitle: 'Zatrzymaj automatyczną reakcję i przejmij kontrolę nad łańcuchem poznawczo-afektywnym',
  objective: 'Nauczenie się precyzyjnego rozróżniania poszczególnych ogniw reakcji na trudny bodziec.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Świadoma werbalizacja i kategoryzacja poszczególnych etapów (affect labeling) obniża reaktywność ciała migdałowatego i przywraca łączność funkcjonalną kory przedczołowej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Czysty Fakt (Co zarejestrowałaby kamera?)',
      instruction: 'Opisz zdarzenie bez ani jednego słowa oceniającego, przymiotnika czy domysłu intencji.',
      promptText: 'Obiektywny fakt:',
      placeholder: 'Współpracownik nie odpowiedział na mojego maila przez 24 godziny, mimo że napisał post na firmowym czacie...'
    },
    {
      stepNumber: 2,
      title: 'Reflektor Uwagi (Na co patrzę, a co ignoruję?)',
      instruction: 'Co natychmiast przyciągnęło Twoją uwagę? Jakie inne informacje o tej osobie lub sytuacji mogły umknąć Twojemu reflektorowi?',
      promptText: 'Ognisko uwagi i pominięte tło:',
      placeholder: 'Moja uwaga skupiła się wyłącznie na jego aktywności na czacie. Pominąłem fakt, że wczoraj kończył kwartalny raport dla zarządu...'
    },
    {
      stepNumber: 3,
      title: 'Ocena Znaczenia (Co to dla mnie oznacza?)',
      instruction: 'Jaką historię opowiedział Twój umysł? Czy potraktowałeś sytuację jako zagrożenie, naruszenie granic czy stratę?',
      promptText: 'Moja interpretacja:',
      placeholder: 'Zinterpretowałem to jako brak szacunku dla mojej pracy i demonstrację wyższości...'
    },
    {
      stepNumber: 4,
      title: 'Reakcja Ciała i Nazwanie Emocji (Co mówi organizm?)',
      instruction: 'Jakie zmiany zaszły w ciele (napięcie barków, ucisk w klatce, ściśnięty żołądek)? Nazwij emocję: lęk, złość, wstyd, smutek czy rozczarowanie?',
      promptText: 'Stan ciała i nazwana emocja:',
      placeholder: 'Napięcie w karku, płytki oddech. Emocja: złość połączona z niepewnością i lękiem przed byciem pominiętym...'
    },
    {
      stepNumber: 5,
      title: 'Dwie Alternatywne Hipotezy i Świadomy Wybór Działania',
      instruction: 'Sformułuj 2 alternatywne wyjaśnienia sytuacji i wybierz reakcję zgodną z Twoim celem nadrzędnym.',
      promptText: 'Hipotezy alternatywne i mój kolejny krok:',
      placeholder: 'Hipoteza A: Miał awarię skrzynki pocztowej. Hipoteza B: Jest przeciążony zadaniami zarządu. Działanie: Zapytam go osobiście w kuchni: „Cześć, widziałem, że masz urwanie głowy. Daj znać, kiedy spojrzysz na mój temat”.'
    }
  ],
  reflectionQuestions: [
    'O ile łatwiej opanować impuls, gdy widzisz, że Twoja pierwsza złość była oparta na domyśle, a nie na twardym fakcie?',
    'Jak technika 3 hipotez chroni Twoje relacje przed eskalacją niepotrzebnych konfliktów?'
  ]
};

export const chapterTwentySevenExerciseGrossRegulator: SelfExercise = {
  id: 'ex-ch27-gross-regulator',
  title: 'Ćwiczenie 27.4: Laboratorium Regulacji Emocji wg Modelu Grossa — 5 Dźwigni w Trudnej Decyzji',
  subtitle: 'Wybierz optymalną strategię radzenia sobie z afektem zamiast destrukcyjnego tłumienia',
  objective: 'Praktyczne przetestowanie 5 poziomów regulacji emocjonalnej w realnej sytuacji decyzyjnej.',
  durationMinutes: 25,
  neuroScientificFoundation: 'Dopasowanie strategii regulacyjnej do chronologii powstawania emocji (od wyboru środowiska po modulację oddechu) pozwala zoptymalizować bilans energetyczny układu nerwowego.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniuj sytuację wywołującą chroniczny dyskomfort',
      instruction: 'Wybierz powtarzającą się sytuację, która regularnie wytrąca Cię z równowagi decyzyjnej.',
      promptText: 'Opis sytuacji zapalnej:',
      placeholder: 'Poranne zebrania statusowe, na których jeden z członków zarządu podnosi głos i krytykuje harmonogram...'
    },
    {
      stepNumber: 2,
      title: 'Dźwignia 1: Wybór Sytuacji (Situation Selection)',
      instruction: 'Czy w ogóle musisz tam być? Czy możesz podjąć autonomiczną decyzję o uniknięciu tego środowiska bez szkody dla celów?',
      promptText: 'Możliwość wyboru sytuacji:',
      placeholder: 'Mogę poprosić o przesyłanie podsumowań asynchronicznie lub zamienić się dyżurami z liderem technicznym...'
    },
    {
      stepNumber: 3,
      title: 'Dźwignia 2: Modyfikacja Sytuacji (Situation Modification)',
      instruction: 'Jeśli musisz uczestniczyć, jak możesz zmienić fizyczne warunki (ustawienie krzeseł, obecność sojusznika, sztywna agenda czasowa)?',
      promptText: 'Możliwa modyfikacja warunków:',
      placeholder: 'Wprowadzenie zasady, że każdy mówi po 3 minuty z zegarem w ręku; siadam obok zaufanej osoby...'
    },
    {
      stepNumber: 4,
      title: 'Dźwignia 3: Przekierowanie Uwagi (Attentional Deployment)',
      instruction: 'Na czym skupisz swój reflektor uwagi w trakcie trudnego momentu (notowanie argumentów, obserwacja mowy ciała zamiast skupiania się na tonie głosu)?',
      promptText: 'Zarządzanie uwagą w trakcie zdarzenia:',
      placeholder: 'Zamiast skupiać się na agresywnym tonie głosu, skupiam uwagę na notowaniu konkretnych liczb na kartce w punktach...'
    },
    {
      stepNumber: 5,
      title: 'Dźwignia 4 i 5: Reinterpretacja i Modulacja Reakcji',
      instruction: 'Jak przeformułujesz znaczenie sytuacji („On krzyczy nie dlatego, że ja zawiodłem, lecz dlatego, że sam panicznie boi się inwestorów”)? Jaki protokół fizjologiczny zastosujesz (np. podwójny wdech nosem i powolny wydech ustami)?',
      promptText: 'Nowa interpretacja i kotwica fizjologiczna:',
      placeholder: 'Reinterpretacja: Jego krzyk to objaw jego bezradności, nie mojej winy. Modulacja: Dłuższy wydech niż wdech, stopy twardo oparte o podłogę, 5 sekund pauzy przed zabraniem głosu.'
    }
  ],
  reflectionQuestions: [
    'Która z 5 dźwigni modelu Grossa jest Twoim najsłabszym ogniwem, a która przychodzi Ci najbardziej naturalnie?',
    'Dlaczego przygotowanie strategii ZANIM wejdziesz w trudną sytuację daje stokroć lepsze rezultaty niż improwizacja w trakcie porwania emocjonalnego?'
  ]
};

export const chapterTwentySeven: Chapter = {
  number: 27,
  volume: 3,
  volumeChapterNumber: 11,
  title: 'Rozdział 11: Integracja Wiedzy — Od Pojedynczych Rozdziałów do Jednego Systemu',
  subtitle: 'Etap 2: Architektura Procesów Decyzyjnych, Dynamika Emocji i Filtry Uwagi (Wielka Integracja Rozdziałów 1, 2 i 3)',
  leadParagraph: 'Dotarłeś do wielkiego punktu zbieżności. Przez poprzednie rozdziały badałeś poszczególne elementy ludzkiego funkcjonowania: mechanizmy decyzji, architekturę środowiska, stany emocjonalne, filtry uwagowe i strategie samoregulacji. Jednak w prawdziwym życiu żaden z tych procesów nie działa w próżni. W każdym codziennym wyborze — od odebrania trudnej wiadomości po strategiczny zwrot życiowy — decyzje, emocje i uwaga oddziałują na siebie w ciągłej, dynamicznej pętli sprzężeń zwrotnych. Niniejszy rozdział jest wielkim laboratorium integracyjnym. Na obecnym etapie łączymy fundament decyzyjny z biologiczną dynamiką afektu (Rozdział 2) oraz mechaniką reflektora uwagi (Rozdział 3) w spójny model 10-etapowej pętli poznawczo-emocjonalnej.',
  totalEstimatedPages: 78,
  sections: [
    {
      id: 'sec-27-1',
      pageNumber: 760,
      sectionNumber: '27.1',
      title: 'Dlaczego pojedyncze mechanizmy nie wystarczają? Wprowadzenie do systemowego modelu człowieka',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'System to coś więcej niż suma jego części. To sieć dynamicznych relacji, w której każda zmiana jednego parametru wywołuje falę w całym organizmie.',
        author: 'Ludwig von Bertalanffy, Ogólna Teoria Systemów'
      },
      paragraphs: [
        'Wyobraź sobie mechanika, który rozłożył nowoczesny silnik samochodowy na tysiąc pojedynczych śrub, zaworów i uszczelek. Zna dokładną wagę tłoka, skład chemiczny oleju i twardość każdej sprężyny. Jednak dopóki nie zobaczy, jak paliwo pod ciśnieniem spotyka się z iskrą, jak temperatura zmienia gęstość cieczy i jak praca wału korbowego przekłada się na obrót kół, nie rozumie dynamiki pojazdu. Dokładnie to samo dzieje się w psychologii, gdy redukujemy człowieka do izolowanych pojęć.',
        'Wielu czytelników literatury popularnonaukowej wpada w pułapkę redukcjonizmu: „Znam definicję heurystyki dostępności, wiem, czym jest confirmation bias, przeczytałem o kosztach utopionych — rozumiem więc ludzkie zachowanie”. To iluzja. W rzeczywistym świecie żaden błąd poznawczy, żadna emocja ani żaden filtr uwagi nie pojawia się w stanie laboratoryjnej izolacji. W realnej sytuacji biznesowej, rodzinnej czy osobistej mamy do czynienia ze zderzeniem ograniczonej pojemności uwagi, somatycznego napięcia w ciele, presji czasu, lęku przed odrzuceniem, konfliktu wartości i skomplikowanego środowiska zewnętrznego.',
        'Celem tego rozdziału jest transformacja Twojego myślenia: przejście od poziomu analitycznego katalogowania pojedynczych mechanizmów do poziomu holistycznej syntezy systemowej. Nie pytamy już tylko: „Co oznacza to pojęcie?”. Pytamy: „W jakich warunkach filtr uwagi (Rozdział 3) zniekształca interpretację sytuacji, jak wzbudzona emocja (Rozdział 2) zawęża pole widzenia i w którym konkretnym punkcie procesu decyzyjnego (Rozdział 1) człowiek może odzyskać sprawczość?”.',
        'Niniejszy rozdział stanowi ETAP 2 wielkiego procesu integracyjnego. Łączymy w nim fundament procesów decyzyjnych (Rozdział 1) z dwoma nowo wdrożonymi filarami: naturą procesów emocjonalnych (Rozdział 2: od oceny poznawczej Lazarusa po model regulacji Grossa) oraz architekturą selekcji uwagi (Rozdział 3: od procesów odgórnych i oddolnych po koszty przełączania i ślepotę nieuwagi). Tworzy to spójną, organiczną całość, przygotowując grunt pod kolejne wymiary funkcjonowania człowieka.'
      ]
    },
    {
      id: 'sec-27-2',
      pageNumber: 765,
      sectionNumber: '27.2',
      title: 'Wielka Mapa Procesu Decyzyjnego — Rdzeń Systemu (Wersja 2.0: Podłączenie Portów Uwagi i Emocji)',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Jednym z największych błędów potocznego myślenia o człowieku jest traktowanie decyzji jako pojedynczego punktu w czasie — jako błysku woli, w którym ktoś mówi: „Wybieram to”. W rzeczywistości decyzja jest zaledwie siódmym lub ósmym krokiem w skomplikowanym łańcuchu przetwarzania informacji. Jeżeli chcesz zrozumieć, dlaczego ktoś podjął pozornie irracjonalny krok, nie patrz na sam moment wyboru. Prześledź całą trajektorię od pierwszego kontaktu z bodźcem.',
        'W oparciu o zintegrowaną wiedzę z Rozdziałów 1, 2 i 3 definiujemy kompletny, 10-etapowy model pętli decyzyjno-afektywnej. Model ten nie zakłada, że człowiek zawsze świadomie i sekwencyjnie wykonuje każdy krok. Jest on mapą diagnostyczną, która pozwala rozłożyć dowolne zachowanie na elementarne czynniki pierwsze i zidentyfikować punkty awarii systemu.'
      ],
      subsections: [
        {
          title: 'Anatomia 10 Etapów Pętli Decyzyjno-Afektywnej (Zintegrowane Wpięcia)',
          paragraphs: [
            'ETAP 1: BODZIEC I CZYSTA INFORMACJA. Do narządów zmysłów dociera strumień surowych danych ze środowiska (liczba na koncie, dźwięk powiadomienia o 22:15, lakoniczny ton głosu, treść dokumentu). Na tym etapie informacja jest czysto fizyczna, obiektywna i pozbawiona psychologicznego znaczenia. [Źródło: Rozdział 1.1 & 2.2.1]',
            'ETAP 2: FILTR I UKIERUNKOWANIE UWAGI (PORT UWAGOWY — AKTYWNY). Ponieważ mózg nie jest w stanie przetworzyć całości docierających danych, zasoby uwagi dokonują drastycznej selekcji. Działają tu dwa wektory: odgórny (top-down — sterowany aktualnym celem i wiedzą) oraz oddolny (bottom-up — automatycznie przechwytywany przez kontrast, głośność, ruch lub bodźce związane z zagrożeniem). Pamiętaj: fizyczna obecność bodźca w polu widzenia nie gwarantuje jego świadomego zauważenia (zjawisko ślepoty nieuwagi). [Źródło: Rozdział 3.1–3.4 & 3.8]',
            'ETAP 3: INTERPRETACJA POZNAWCZA I HEURYSTYKI. Zauważona informacja zostaje natychmiast zinterpretowana. Mózg nie rejestruje biernie faktów, lecz konstruuje o nich spójną hipotezę. W tym momencie uaktywniają się heurystyki: zakotwiczenie (wpływ pierwszej liczby), framing (ramowanie w kategoriach straty vs zysku), dostępność skojarzeń oraz confirmation bias (wyszukiwanie wyłącznie faktów pasujących do wstępnej hipotezy). [Źródło: Rozdział 1.3, 1.4 & 3.15]',
            'ETAP 4: AKTYWACJA STANÓW AFEKTYWNYCH, OCENA ZNACZENIA I EMOCJE (PORT AFEKTYWNY — AKTYWNY). Zgodnie z teoriami oceny emocjonalnej (appraisal theories Richarda Lazarusa), emocja nie wynika z samego faktu, lecz ze znaczenia, jakie nadajemy zdarzeniu w relacji do naszych celów, wartości i poczucia kontroli. Uruchamiają się zmiany w organizmie (tętno, oddech, napięcie mięśni — układ autonomiczny) oraz subiektywne uczucie i tendencja do działania (unikanie przy lęku, konfrontacja przy złości, wycofanie przy smutku). Emocja staje się potężnym sygnałem wartościującym. [Źródło: Rozdział 2.1–2.4 & 2.12]',
            'ETAP 5: WYCENA SUBIEKTYWNA I OCENA NIEPEWNOŚCI (Value-based Choice). Mózg przypisuje wagę dostępnym możliwościom. Zgodnie z teorią perspektywy potencjalne straty ważą psychologicznie silniej niż odpowiadające im zyski (asymetria afektywna). Umysł musi także rozstrzygnąć, czy działa w warunkach policzalnego RYZYKA, czy w warunkach głębokiej NIEPEWNOŚCI, gdzie brakuje wiarygodnych danych. [Źródło: Rozdział 1.5 & 1.11.2]',
            'ETAP 6: PRZEWIDYWANIE KONSEKWENCJI I SYMULACJA W CZASIE. Wyobrażenie przyszłych skutków. Tutaj uderzają dwa zniekształcenia: present bias (zaniżanie wartości odroczonych kosztów na rzecz bieżącej ulgi emocjonalnej) oraz optimism bias (nierealistyczna wiara, że „mnie negatywne skutki ominą”). [Źródło: Rozdział 1.4 & 2.6]',
            'ETAP 7: WYBÓR (Decyzja Aktywna vs Zaniechanie). Moment rozstrzygnięcia. Może przybrać formę deklaratywnego wyboru określonej ścieżki działania lub pozornego braku działania (status quo). Jak dowiedliśmy w Rozdziale 1.1.2 i 2.6, unikanie i zaniechanie są w istocie pełnoprawnym wyborem służącym krótkoterminowej redukcji napięcia.',
            'ETAP 8: PRZEJŚCIE DO DZIAŁANIA I KOSZT AKTYWACJI. Zamiar spotyka się z materią. Sama decyzja nie gwarantuje wykonania. Kora przedczołowa musi przełamać opór spoczynkowy i tarcie środowiskowe. Jeśli otoczenie stawia bariery, intencja może ulec załamaniu na rzecz automatycznego nawyku lub rozproszenia cyfrowego. [Źródło: Rozdział 1.2 & 3.9]',
            'ETAP 9: REAKCJA ŚRODOWISKA, INNYCH LUDZI I OBIEKTYWNY WYNIK. Wykonane działanie zderza się z rzeczywistością, zmiennymi losowymi oraz reakcjami otoczenia. Rezultat nie zależy wyłącznie od jakości decyzji — w grę wchodzi przypadek, szczęście i czynniki niezależne od człowieka.',
            'ETAP 10: RETROSPEKCJA, UCZENIE SIĘ I PĘTLA SPRZĘŻENIA ZWROTNEGO. Rezultat staje się nową informacją wejściową. Umysł dokonuje bilansu: pojawia się myślenie kontrfaktyczne („co by było, gdybym...”), ryzyko błędu oceny wstecznej (hindsight bias) oraz stany afektywne: wstyd vs poczucie winy, żal lub satysfakcja. Nowe doświadczenie rekonfiguruje pamięć i oczekiwania, zamykając wielką pętlę. [Źródło: Rozdział 1.9, 1.10, 2.12 & 2.15]'
          ],
          highlightBox: {
            title: 'Wielka Pętla Sprzężenia Zwrotnego',
            content: 'Pętla decyzyjna nigdy się nie zamyka. Wynik działania i towarzysząca mu emocja w KROKU 10 stają się filtrem uwagi w KROKU 2 kolejnego cyklu. Jeśli lęk po błędzie nie zostanie zregulowany, uwaga w następnej sytuacji automatycznie zawęzi się wyłącznie do poszukiwania zagrożeń, paraliżując proces decyzyjny.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-27-3',
      pageNumber: 771,
      sectionNumber: '27.3',
      title: 'Architektura Uwagi w Systemie Decyzyjnym: Selekcja, Ślepota Nieuwagi i Koszt Przełączania',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Jednym z najbardziej zwodniczych mitów na temat ludzkiego umysłu jest traktowanie go jak kamery wideo, która biernie i wiernie rejestruje obiektywną rzeczywistość. W języku codziennym powtarzamy: „Nie zwracasz uwagi”, „Patrz uważnie”, jakby uwaga była prostym włącznikiem. W rzeczywistości uwaga jest wyrafinowanym, wąskoprzepustowym systemem selekcji i bramą do świadomości.',
        'Spośród milionów bitów informacji sensorycznej docierających co sekundę do naszych receptorów, zaledwie ułamek otrzymuje priorytet dalszego przetwarzania. To oznacza fundamentalną zasadę integracyjną: ZANIM ZACZNIESZ DECYDOWAĆ, TWOJA UWAGA JUŻ ZDEFINIOWAŁA, CO W TEJ SYTUACJI W OGÓLE ISTNIEJE. To, co nie znajdzie się pod reflektorem, nie wejdzie do kalkulacji Systemu 2.'
      ],
      subsections: [
        {
          title: 'Dwa Wektory Reflektora: Procesy Odgórne (Top-Down) i Oddolne (Bottom-Up)',
          paragraphs: [
            'PROCESY ODGÓRNE (STEROWANE CELEM): Gdy szukasz czerwonego samochodu na wielkim parkingu, Twoja kora przedczołowa nakłada filtr: czerwone obiekty zyskują natychmiastowy priorytet poznawczy. Cel mebluje przestrzeń postrzegania. Dokładnie to samo dzieje się w relacjach: jeśli wchodzisz na spotkanie z założeniem „oni chcą mnie skrytykować”, Twój reflektor odgórny będzie aktywnie skanował salę w poszukiwaniu najmniejszych grymasów twarzy.',
            'PROCESY ODDOLNE (PRZECHWYTYWANE PRZEZ BODZIEC): Nagły huk, błyskawiczny ruch za oknem, jaskrawy kolor lub powiadomienie na ekranie smartfona przechwytują uwagę automatycznie, bez żadnej uprzedniej decyzji woli. System nerwowy traktuje nagłą zmianę jako potencjalne zagrożenie lub szansę ewolucyjną.',
            'W codziennym życiu oba wektory nieustannie walczą o ograniczone zasoby. Klasycznym dowodem elastyczności tego filtra jest efekt cocktail-party: w głośnej, zatłoczonej kawiarni prowadzisz rozmowę z jedną osobą, ignorując dziesiątki innych głosów, dopóki ktoś przy stoliku obok nie wypowie Twojego imienia. Umysł nie wyłącza tła całkowicie — monitoruje je w trybie niskiego poboru energii, gotowy do natychmiastowego przełączenia reflektora.'
          ]
        },
        {
          title: 'Ślepota Nieuwagi i Koszt Przełączania: Iluzja Multitaskingu',
          paragraphs: [
            'W słynnych eksperymentach nad ślepotą nieuwagi (inattentional blindness) badani, których uwagę pochłonęło trudne zadanie liczenia podań piłki, nie zauważyli człowieka w stroju goryla tańczącego pośrodku kadru. To nie była wada wzroku — to dowód, że FIZYCZNY DOSTĘP SENSORYCZNY NIE JEST TOŻSAMY ZE ŚWIADOMYM ZAUWAŻENIEM.',
            'Zjawisko to doskonale ilustruje kazus Michała (Rozdział 3.19): wracając do domu, głęboko przeżywał trudną rozmowę z nauczycielem, myślał o odebranym SMS-ie i planował odpowiedź. Gdy spotkał kolegę, który machał do niego z odległości trzech metrów, minął go obojętnie. Kolega uznał to za celowe lekceważenie („On mnie ignoruje”), podczas gdy Michał fizycznie nie zarejestrował sygnału w świadomości. W relacjach międzyludzkich ograniczenia uwagi są notorycznie mylone ze złą wolą.',
            'Kolejną pułapką jest tzw. wielozadaniowość (multitasking). Mózg potrafi łączyć czynności automatyczne (chodzenie i rozmowa), ale zadania wymagające kontroli poznawczej (pisanie raportu i sprawdzanie komunikatora) zmuszają go do ciągłego przełączania uwagi (task switching). Każde takie przełączenie generuje koszt metaboliczny: kora przedczołowa musi wygasić stary kontekst, załadować do pamięci roboczej nowy, a po powrocie mozolnie odtwarzać: „Na czym to ja skończyłem?”. Czas spędzony przy biurku nie jest miarą skupienia — 30 minut poszarpanych powiadomieniami daje mniejszy efekt niż 10 minut nieprzerwanej pracy głębokiej.'
          ],
          highlightBox: {
            title: 'Prawo Dostępności Uwagi',
            content: 'To, że zauważasz coś częściej (np. biegaczy na ulicy po tym, jak sam zacząłeś biegać, albo wady partnera po kłótni), nie oznacza, że tych zjawisk w świecie przybyło. Zmieniła się wyłącznie kategoria dostępności dla Twojego reflektora uwagi.',
            type: 'warning'
          }
        }
      ]
    },
    {
      id: 'sec-27-4',
      pageNumber: 777,
      sectionNumber: '27.4',
      title: 'Emocje jako System Nawigacji i Wartościowania: Od Ciała do Oceny Znaczenia',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Czy emocje są wrogiem racjonalnego myślenia, jak twierdziły wieki potocznej filozofii? Współczesna neuronauka i psychologia emocji odpowiadają jednoznacznie: NIE. Człowiek pozbawiony emocji nie staje się bezbłędnym komputerem — staje się bezradnym obserwatorem niezdolnym do dokonania jakiegokolwiek wyboru.',
        'Emocja to złożony, dynamiczny proces przygotowujący organizm do działania w odpowiedzi na znaczenie nadane sytuacji. Nie jest ona jedynie abstrakcyjną myślą, ani nie jest samym tylko pobudzeniem fizjologicznym. Obejmuje ocenę sytuacji, zmiany autonomiczne (tętno, oddech, hormony), subiektywne doświadczenie, ekspresję oraz specyficzną tendencję do działania.'
      ],
      subsections: [
        {
          title: 'Rozróżnienia Pojęciowe i Ewolucja Teorii Emocji',
          paragraphs: [
            'W języku naukowym precyzujemy pojęcia: AFEKT to fundamentalny wymiar walencji (przyjemny/nieprzyjemny) i poziomu pobudzenia; UCZUCIE to subiektywnie przeżywana strona doświadczenia („Jak to jest tego doświadczać?”); EMOCJA to pełny, wielokomponentowy proces związany ze znaczeniem konkretnego zdarzenia; NASTRÓJ to stan bardziej rozlany, trwający godzinami lub dniami, często bez wyraźnego pojedynczego punktu zapalnego.',
            'Historia badań nad emocjami pokazuje zmagania z pytaniem: co pojawia się pierwsze — ciało czy myśl? Teoria Jamesa-Langego podkreśliła rolę somatyki: „Widzę niedźwiedzia → moje ciało ucieka i serce wali → czuję strach”. Cannon i Bard wykazali równoległość procesów wzgórzowo-korowych. Z kolei Schachter i Singer oraz teorie oceny poznawczej (Appraisal Theories Lazarusa) udowodniły, że SAMO POBUDZENIE AUTONOMICZNE NIE WYSTARCZA DO NASTANIA EMOCJI. Przyspieszone bicie serca może oznaczać lęk, złość, podniecenie lub po prostu wypicie mocnej kawy. To POZNAWCZA OCENA ZNACZENIA („Co to dla mnie znaczy? Czy zagraża moim celom? Czy mam nad tym kontrolę?”) nadaje pobudzeniu określony wektor psychologiczny.',
            'Współczesne podejście konstrukcjonistyczne (teoria skonstruowanej emocji Lisy Feldman Barrett) idzie jeszcze dalej: mózg nie posiada wbudowanych „modułów złości” czy „modułów strachu”. Konstruuje emocję na bieżąco na podstawie sygnałów z ciała (interocepcja), wcześniejszych doświadczeń, pojęć językowych i kontekstu społecznego.'
          ]
        },
        {
          title: 'Dynamika Emocji Podstawowych i Społecznych w Wyborach',
          paragraphs: [
            'STRACH A LĘK: Strach dotyczy bezpośredniego, obecnego zagrożenia (pies biegnący w moją stronę), mobilizując do ucieczki lub walki. Lęk dotyczy antycypacji przyszłej niepewności (jutrzejsza rozmowa kwalifikacyjna). Unikanie lękowego zadania daje natychmiastową ulgę afektywną (nagroda tu i teraz), ale blokuje dopływ informacji korygującej — w ten sposób ucieczka utrwala lęk i prowadzi do przewlekłej prokrastynacji.',
            'ZŁOŚĆ A AGRESJA: To fundamentalne rozróżnienie. Złość jest naturalnym sygnałem informującym o naruszeniu granic, zablokowaniu celu lub niesprawiedliwości. Agresja jest tylko jednym z możliwych (często dysfunkcyjnych) zachowań. Człowiek dojrzały potrafi czuć silną złość i wybrać asertywne wyznaczenie granic zamiast ataku.',
            'WSTYD VS POCZUCIE WINY: Zgodnie z badaniami June Tangney, wstyd atakuje tożsamość („Jestem beznadziejny”) i wywołuje odruch ukrycia się, zaprzeczenia lub agresji obronnej. Poczucie winy ocenia konkretne zachowanie („Zrobiłem błąd”) i mobilizuje do zadośćuczynienia oraz korekty procesu decyzyjnego. W pętli uczenia się zamiana wstydu w poczucie winy jest warunkiem koniecznym zachowania sprawczości.',
            'ZAZDROŚĆ JAKO KOMPAS WARTOŚCI: Zamiast traktować zazdrość jako wstydliwą wadę charakteru, systemowe podejście odczytuje w niej cenną informację decyzyjną: „Jeśli zazdroszczę koledze awansu lub publikacji książki, to znak, że ten cel jest dla mnie stokroć ważniejszy, niż dotąd sądziłem”.'
          ],
          highlightBox: {
            title: 'Sygnał to Nie Rozkaz',
            content: 'Emocja jest bezcennym sygnałem informującym o relacji między środowiskiem a Twoimi potrzebami. Jednak sygnał to nie instrukcja wykonawcza. To, że czujesz złość, nie daje prawa do krzyku; to, że czujesz lęk, nie oznacza, że sytuacja jest obiektywnie niebezpieczna.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-27-5',
      pageNumber: 785,
      sectionNumber: '27.5',
      title: 'Sprzężenie Zwrotne: Jak Emocje Meblują Uwagę, a Uwaga Kształtuje Decyzje',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Teraz możemy połączyć wszystkie trzy wymiary w jeden nierozerwalny mechanizm. Decyzja nie zaczyna się w izolowanej korze przedczołowej, a uwaga i emocje nie są niezależnymi modułami. Funkcjonują w nieustannej pętli sprzężeń zwrotnych:',
        'STAN AFEKTYWNY → REFLEKTOR UWAGI → FILTRACJA PERCEPCYJNA → OCENA ZNACZENIA → DECYZJA → ZACHOWANIE → NOWY STAN CIAŁA'
      ],
      subsections: [
        {
          title: 'Mechanizm Tunelowania Afektywnego i Potwierdzania Obaw',
          paragraphs: [
            'Wyobraź sobie sytuację Anny z Rozdziału 3.20: Anna rozmawia z przyjaciółką w kawiarni. Telefon przyjaciółki kilkakrotnie się rozświetla, a ta odpisuje na wiadomość. U Anny pojawia się myśl: „Nie jestem dla niej ważna”, która natychmiast wywołuje ukłucie rozczarowania i lęku przed odrzuceniem.',
            'Co dzieje się w ułamku sekundy? Wzbudzona emocja natychmiast przejmuje kontrolę nad jej reflektorem uwagi (Affective Attentional Biasing). Anna przestaje słuchać treści słów przyjaciółki. Jej uwaga zaczyna gorączkowo i selektywnie rejestrować wyłącznie sygnały pasujące do hipotezy o odrzuceniu: spojrzenie na zegarek, poprawienie włosów, chwilowe ziewnięcie.',
            'Każdy z tych neutralnych gestów (wynikających ze zmęczenia po pracy) staje się dla umysłu Anny „niepodważalnym dowodem”. W ciągu 10 minut powstaje potężna eskalacja interpretacyjna, która prowadzi do decyzji: Anna zamyka się w sobie, odpowiada chłodnymi monosylabami, a na koniec demonstracyjnie wychodzi. Przyjaciółka czuje się zdezorientowana i zraniona — w ten sposób emocjonalne zniekształcenie uwagi wygenerowało realny konflikt w świecie fizycznym.'
          ]
        },
        {
          title: 'Stres a Uwaga: Czujność (Hypervigilance) to Nie Koncentracja',
          paragraphs: [
            'Kolejnym krytycznym zjawiskiem w podejmowaniu decyzji jest wpływ stresu na jakość przetwarzania. Pod wpływem ostrego wyrzutu kortyzolu i noradrenaliny układ nerwowy wchodzi w stan wysokiej czujności. Wielu ludzi myli ten stan ze skupieniem: „Jestem pobudzony, więc działam wydajnie”.',
            'To błąd. Wysoka czujność (hypervigilance) polega na chaotycznym, oddolnym wychwytywaniu każdego ruchu, szmeru i potencjalnego zagrożenia. Równolegle drastycznie spada zdolność do elastycznego, odgórnego utrzymywania uwagi na skomplikowanym zadaniu logicznym. Człowiek w silnym stresie rejestruje skrzypienie podłogi za ścianą, ale nie jest w stanie dostrzec błędu w założeniach wielomilionowej umowy biznesowej. Zrozumienie tej dynamiki wymusza zasadę kwarantanny decyzyjnej w momentach somatycznego wzburzenia.'
          ]
        }
      ]
    },
    {
      id: 'sec-27-6',
      pageNumber: 791,
      sectionNumber: '27.6',
      title: 'Konflikt wielopoziomowy: Negocjacje celów, emocji, ról i tożsamości',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'W klasycznych modelach ekonomicznych zakłada się, że człowiek ma jeden, jasno zdefiniowany cel: maksymalizację użyteczności. W psychologii wiemy, że to fikcja. W dowolnym momencie w Twoim umyśle toczy się zażarta negocjacja pomiędzy wieloma autentycznymi, ale wykluczającymi się potrzebami.',
        'W ujęciu integracyjnym wyróżniamy cztery fundamentalne poziomy konfliktu decyzyjnego, które nakładają się na siebie w każdej ważnej życiowo sytuacji:'
      ],
      subsections: [
        {
          title: 'Poziom 1: Konflikt Temporalny (Nagroda Natychmiastowa vs Odroczona)',
          paragraphs: [
            'To najbardziej powszechne pole bitwy. Nagroda natychmiastowa ma unikalną cechę biologiczną: jest namacalna, sensoryczna i dostępna tu i teraz. Odłożenie telefonu i zjedzenie ciastka natychmiast obniża napięcie fizjologiczne. Nagroda odroczona (np. zdrowie za 15 lat, zdany egzamin za 3 miesiące) wymaga abstrakcyjnej reprezentacji w korze przedczołowej.',
            'Zjawisko dyskontowania odroczenia (delay discounting) sprawia, że wartość przyszłych rezultatów podlega drastycznej erozji poznawczej. Człowiek nie odkłada nauki dlatego, że „nie zależy mu na przyszłości”. Zależy mu — ale w aktualnej minucie jego system nerwowy traktuje swoje przyszłe „ja” niemal jak obcego człowieka.'
          ]
        },
        {
          title: 'Poziom 2: Konflikt Aksjologiczny (Starcie Autentycznych Wartości)',
          paragraphs: [
            'Najtrudniejsze decyzje to nie te, w których wybieramy między dobrem a złem, lecz te, w których stają naprzeciw siebie dwie fundamentalne wartości. Przykład z Rozdziału 1.7: lojalność wobec przyjaciela kontra odpowiedzialność społeczna i uczciwość. Żadne logiczne równanie nie wskaże jednoznacznej odpowiedzi, ponieważ obie wartości są uprawnione.',
            'W takich sytuacjach próba wymuszenia „chłodnej matematycznej kalkulacji” wywołuje ostry paraliż decyzyjny. Rozwiązanie wymaga świadomego ustalenia hierarchii kontekstowej: „W tej konkretnej sytuacji, przy tych ograniczeniach, pierwszeństwo nadaję wartości X, przyjmując z pełną odpowiedzialnością bolesny koszt uszczerbku wartości Y”.'
          ]
        },
        {
          title: 'Poziom 3: Konflikt Ról Społecznych',
          paragraphs: [
            'Każdy człowiek funkcjonuje w sieci ról: jesteś jednocześnie pracownikiem, rodzicem, dzieckiem, partnerem i przyjacielem. Każda z tych ról generuje inne oczekiwania otoczenia i inny zestaw reguł postępowania. Kiedy szef wymaga pozostania po godzinach w biurze („bądź lojalnym pracownikiem”), a dziecko czeka na występ w przedszkolu („bądź obecnym rodzicem”), decyzja staje się zderzeniem dwóch lojalności relacyjnych. Próba zadowolenia wszystkich stron jednocześnie niemal zawsze kończy się decyzją najgorszą z możliwych — chaotycznym zaniechaniem.'
          ]
        },
        {
          title: 'Poziom 4: Konflikt Tożsamościowy',
          paragraphs: [
            'Najgłębszy poziom decyzji dotyczy spójności z obrazem samego siebie: „Kim jestem, gdy to robię?”. Jeżeli postrzegasz siebie jako osobę bezkompromisowo niezależną, przyjęcie pomocy od innych — nawet gdy jest ona obiektywnie niezbędna — wywoła gwałtowny opór tożsamościowy. Zrozumienie, że wiele z pozoru nielogicznych decyzji służy obronie kruchej tożsamości, pozwala wyjść poza proste oskarżenia o „głupotę”.'
          ]
        }
      ]
    },
    {
      id: 'sec-27-4',
      pageNumber: 777,
      sectionNumber: '27.4',
      title: 'Splot heurystyk i pułapek poznawczych w jednym wyborze',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Zniekształcenia poznawcze rzadko operują w laboratoryjnej izolacji. W realnych wyborach życiowych i instytucjonalnych łączą się w samonapędzające się kaskady poznawcze: błąd kosztów utopionych podpala awersję do strat, ta uruchamia stronniczość potwierdzenia w obronie tożsamości, a całość zostaje zacementowana przez nadmierną pewność siebie.',
        author: 'Prof. Daniel Kahneman & Amos Tversky',
        source: 'Princeton University / Stanford University, „Judgment under Uncertainty: Heuristics and Biases”, Cambridge University Press, 1982'
      },
      paragraphs: [
        'Jednym z kluczowych ustaleń Rozdziału 1 było odczarowanie pojęcia heurystyki: uproszczona strategia decyzyjna nie jest błędem biologicznym ani ułomnością mózgu. W stabilnym, powtarzalnym środowisku heurystyka znajomości, domyślności czy afektu pozwala oszczędzać bezcenną energię metaboliczną kory przedczołowej.',
        'Problem pojawia się w złożonym, zmanipulowanym lub dynamicznie zmieniającym się środowisku XXI wieku. Wtedy kilka heurystyk zaczyna współdziałać w toksycznym splocie, tworząc efekt synergii poznawczej, przed którym niezwykle trudno się obronić bez narzędzi systemowych.'
      ],
      subsections: [
        {
          id: 'sub-27-4-1',
          title: 'Analiza słów Kahnemana i Tversky’ego: Anatomia Kaskady Poznawczej',
          content: [
            'Wypowiedź twórców psychologii behawioralnej obnaża pułapkę „pojedynczego błędu”. Większość ludzi sądzi, że popełnia jeden błąd (np. „zbyt drogo kupiłem mieszkanie”). W rzeczywistości ulegliśmy łańcuchowej kaskadzie:',
            'FAZA 1: PUNKT WEJŚCIA — ZAKOTWICZENIE I FRAMING. Proces zaczyna się od sposobu zaprezentowania danych. Pierwsza liczba (np. cena wyjściowa produktu, pierwsza oferta w negocjacjach) tworzy nieodwracalną kotwicę. Równolegle framing definiuje punkt odniesienia: czy zyskujesz okazję, czy unikasz katastrofy? Zgodnie z teorią perspektywy przedstawienie opcji jako „uniknięcia straty” natychmiast podbija determinację układu nerwowego.',
            'FAZA 2: SELEKCJA DOWODÓW — CONFIRMATION BIAS I DOSTĘPNOŚĆ. Gdy umysł przyjmie wstępną hipotezę, reflektor uwagi zaczyna selekcjonować wyłącznie fakty potwierdzające tę interpretację. Jeżeli dodatkowo niedawno widziałeś w mediach emocjonalny materiał na dany temat, heurystyka dostępności fałszywie podpowiada, że zjawisko jest powszechne i wysoce prawdopodobne.',
            'FAZA 3: BLOKADA WYCOFANIA — KOSZTY UTOPIONE I STATUS QUO. Kiedy człowiek zainwestuje w daną ścieżkę czas, pieniądze lub reputację, włącza się pułapka kosztów utopionych (sunk cost). Zamiast dokonać rzetelnego bilansu od punktu zero, pojawia się lęk przed zaksięgowaniem straty. Status quo staje się opcją domyślną, nawet jeśli prowadzi wprost na mieliznę.',
            'FAZA 4: USZTYWNIENIE — NADMIERNA PEWNOŚĆ SIEBIE (OVERCONFIDENCE). Na końcu procesu kora przedczołowa generuje spójne, logiczne uzasadnienie (racjonalizację post-factum). Człowiek czuje 100% pewności co do słuszności swojego wyboru, ignorując fakt, że cały gmach argumentacji został wzniesiony na przypadkowej kotwicy i przefiltrowanych dowodach.'
          ]
        },
        {
          id: 'sub-27-4-2',
          title: 'Procedura Rozbijania Kaskady: Red Teaming i Zerowy Punkt Bilansu',
          content: [
            'Aby unieszkodliwić kaskadę poznawczą, doświadczone zespoły strategiczne stosują procedurę Red Teamingu (powołanie niezależnego adwokata diabła, którego zadaniem jest sfalsyfikowanie każdego założenia) oraz Pytanie o Czystą Kartę: „Gdybyśmy weszli do tej firmy dzisiaj rano i nie wydali na ten projekt ani jednej złotówki, czy zainwestowalibyśmy w niego dzisiejsze 40 tysięcy?”. Jeśli odpowiedź brzmi „nie”, projekt musi zostać natychmiast zamknięty.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-27-4-1',
          type: 'ostrzezenie',
          title: 'Wniosek Systemowy: Nie Walcz z Pojedynczym Błędem w Izolacji',
          content: 'Nigdy nie walcz z jednym błędem poznawczym w izolacji. Jeśli chcesz powstrzymać koszt utopiony, musisz najpierw sprawdzić, jaka kotwica wyznaczyła Twój punkt odniesienia i jak przeformułować ramę całej sytuacji.'
        }
      ],
      interactiveWindow: {
        id: 'win-27-4',
        title: 'Dekompozycja Kaskady Poznawczej: Jak Jedna Pułapka Uruchamia Kolejną',
        type: 'gdzie_zaczela_sie_petla',
        context: 'Zarząd spółki IT zainwestował 500 000 zł w autorski system CRM, który po roku jest przestarzały i nielubiany przez pracowników. Mimo to dyrektor naciska na wydanie kolejnych 200 000 zł na „aktualizację”.',
        steps: [
          {
            stepNumber: 1,
            title: 'Pierwotna kotwica psychologiczna dyrektora',
            description: 'Jaki pierwotny mechanizm paraliżuje trzeźwą ocenę sytuacji przez dyrektora?',
            options: [
              {
                text: 'Błąd kosztów utopionych (Sunk Cost) sprzężony z lękiem przed utratą reputacji nieomylnego lidera',
                feedback: 'Dokładnie tak. Wydane 500 000 zł jest kosztem zamkniętym (utopionym), ale dyrektor traktuje je jak żywy kapitał do uratowania.',
                isOptimal: true
              },
              {
                text: 'Czysta kalkulacja ekonomiczna wykazująca wyższość CRM nad rynkowymi rozwiązaniami',
                feedback: 'Błędne założenie. Raporty techniczne jednoznacznie wykazują ułomność systemu — to afekt blokuje wycofanie.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Zastosowanie pytania o czystą kartę',
            description: 'Jakie pytanie radykalnie przetnie kaskadę poznawczą na posiedzeniu zarządu?',
            options: [
              {
                text: '„Gdybyśmy nie wydali ani grosza na ten CRM, czy kupilibyśmy go dzisiaj na wolnym rynku za 200 000 zł?”',
                feedback: 'Genialne pytanie resetujące punkt odniesienia! Zmusza korę przedczołową do oceny teraźniejszości bez balastu przeszłości.',
                isOptimal: true
              },
              {
                text: '„Kto z pracowników jest winny temu, że system działa wolno?”',
                feedback: 'To tylko uruchomi defensywę i wzajemne oskarżenia, cementując status quo.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'W jaki projekt, relację lub zakup inwestujesz kolejne zasoby wyłącznie dlatego, że szkoda Ci tego, co już zainwestowałeś?'
      }
    },
    {
      id: 'sec-27-5',
      pageNumber: 783,
      sectionNumber: '27.5',
      title: 'Jakość procesu a jakość wyniku: Przełamywanie pułapki oceny wstecznej',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Emocje nie są wbudowanymi odruchami wyzwalanymi biernie przez świat zewnętrzny; są aktami aktywnego nadawania znaczenia. Poznawcza ocena relacji pomiędzy wydarzeniem a dobrostanem podmiotu (Cognitive Appraisal) jest motorem przekształcającym surowe somatyczne pobudzenie w konkretną psychologiczną rzeczywistość.',
        author: 'Prof. Richard S. Lazarus & Lisa Feldman Barrett',
        source: 'University of California, Berkeley / Northeastern University, „Emotion and Adaptation”, Oxford University Press, 1991'
      },
      paragraphs: [
        'Wyobraź sobie chirurga, który przeprowadza skomplikowaną operację. Działa zgodnie z najnowszą wiedzą medyczną, wykonuje perfekcyjne nacięcia, monitoruje parametry pacjenta. W trakcie zabiegu dochodzi do rzadkiego, nieprzewidywalnego wstrząsu anafilaktycznego na standardowy lek i pacjent umiera. Czy chirurg podjął złą decyzję medyczną?',
        'Większość ludzi pod wpływem błędu oceny wstecznej (hindsight bias) oraz outcome bias odpowie: „Skoro pacjent zmarł, decyzja musiała być zła”. To fundamentalny błąd poznawczy, który niszczy możliwość wyciągania konstruktywnych wniosków w życiu osobistym i zawodowym.',
        'Zasada rzetelności naukowej z Rozdziału 1.1.4 głosi bezwzględnie: JAKOŚĆ PROCESU DECYZYJNEGO MUSI BYĆ ODDZIELONA OD JAKOŚCI JEGO REZULTATU. Świat nie jest deterministycznym zegarkiem — zawiera w sobie szum, losowość, zdarzenia o niskim prawdopodobieństwie oraz czynniki całkowicie niezależne od człowieka.'
      ],
      subsections: [
        {
          id: 'sub-27-5-1',
          title: 'Analiza słów Lazarusa i Barrett: Teoria Oceny Poznawczej i Konstrukcja Emocji',
          content: [
            'Wypowiedź prof. Lazarusa i prof. Barrett rzuca fundamentalne światło na sprzężenie pomiędzy stanem emocjonalnym a podejmowaną decyzją. Dwie osoby w tym samym stanie pobudzenia autonomicznego (przyspieszone tętno, suchość w ustach, wyrzut adrenaliny):',
            '• Pierwsza ocenia sytuację jako ZAGROŻENIE (Threat Appraisal): „Moje ciało drży, a więc zaraz polegnę i skompromituję się przed zarządem”. Jej uwaga ulega zawężeniu tunelowemu, a decyzja staje się lękowym unikaniem.',
            '• Druga ocenia to samo pobudzenie jako WYZWANIE (Challenge Appraisal): „Moje ciało pompuje tlen do mięśni i mózgu, bo za chwilę dam z siebie wszystko”. Jej uwaga pozostaje szeroka, a decyzja jest odważną konfrontacją merytoryczną.',
            'To nie fizjologia decyduje o jakości Twojego wyboru — to ramka interpretacyjna, którą nakładasz na pobudzenie somatyczne.'
          ]
        },
        {
          id: 'sub-27-5-2',
          title: 'Macierz Oceny Decyzji: Cztery Stany Rzeczywistości',
          content: [
            '1. DOBRY PROCES + DOBRY WYNIK (Zasłużony Sukces): Rzetelna diagnoza faktów, rozpoznanie heurystyk, uwzględnienie ryzyka i sprzyjające okoliczności. Wniosek: utrwal procedurę, zachowując pokorę wobec losowości.',
            '2. DOBRY PROCES + ZŁY WYNIK (Zrozumiały Pech): Decyzja była w pełni racjonalna przy dostępnych wtedy informacjach, ale ziścił się scenariusz o małym prawdopodobieństwie. Wniosek krytyczny: NIE zmieniaj dobrego procesu pod wpływem pojedynczego niepowodzenia! Zmiana dobrej strategii tylko dlatego, że raz przyniosła pecha, to prosta droga do chaosu.',
            '3. ZŁY PROCES + DOBRY WYNIK (Niebezpieczna Iluzja): Impulsywny, lekkomyślny krok bez analizy ryzyka przypadkowo zakończony sukcesem (np. ryzykowny zakład na giełdzie, jazda z nadmierną prędkością bez wypadku). To najbardziej toksyczny stan w psychologii: rodzi nadmierną pewność siebie (overconfidence bias) i przekonanie o własnym geniuszu, które w kolejnej próbie prowadzi do katastrofy.',
            '4. ZŁY PROCES + ZŁY WYNIK (Przewidywalna Porażka): Zignorowanie danych, uleganie presji czasu i kosztom utopionym zakończone klęską. Wniosek: nie atakuj swojej tożsamości („jestem do niczego”), lecz precyzyjnie zidentyfikuj, w którym z 10 kroków doszło do załamania uwagi lub interpretacji.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-27-5-1',
          type: 'wniosek',
          title: 'Ryzyko a Głęboka Niepewność: Kluczowe Rozróżnienie',
          content: 'W sytuacji RYZYKA znamy zbiór możliwych wyników i możemy wyliczyć ich prawdopodobieństwo matematyczne (np. ubezpieczenia). W sytuacji GŁĘBOKIEJ NIEPEWNOŚCI (kryzys rynkowy, zwrot życiowy) zbiór wyników jest nieznany. W niepewności liczy się nie optymalizacja matematyczna, lecz odporność na błędy (antykruchość) i elastyczność wycofywania się z nietrafionych ścieżek.'
        }
      ],
      interactiveWindow: {
        id: 'win-27-5',
        title: 'Audytor Jakości Procesu: Cztery Kwadranty Oceny Decyzji',
        type: 'fakt_czy_interpretacja',
        context: 'Paweł (29 lat) postawił oszczędności 3 lat na jedną spółkę biotechnologiczną bez jakiejkolwiek analizy, bo „miał przeczucie po śnie”. Kurs wystrzelił o 300% i Paweł uważa się za geniusza finansowego.',
        steps: [
          {
            stepNumber: 1,
            title: 'Kwalifikacja do macierzy decyzji',
            description: 'W którym kwadrancie rzeczywistości znajduje się sukces Pawła?',
            options: [
              {
                text: 'Kwadrant 3: Zły Proces + Dobry Wynik (Niebezpieczna Iluzja / Fuks Spekulacyjny)',
                feedback: 'Dokładnie tak. Decyzja była skrajnie lekkomyślna pod względem metodologii zarządzania kapitałem, a zysk był czystą anomalią losową.',
                isOptimal: true
              },
              {
                text: 'Kwadrant 1: Dobry Proces + Dobry Wynik, bo liczy się tylko zysk na koncie',
                feedback: 'Podstawowy błąd Outcome Bias. Uznanie tego za dobry proces gwarantuje bankructwo w kolejnych trzech transakcjach.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Konsekwencja poznawcza dla przyszłości Pawła',
            description: 'Jakie niebezpieczeństwo rodzi ten sukces dla układu nerwowego Pawła?',
            options: [
              {
                text: 'Gwałtowny skok dopaminy utrwala błędne przekonanie o „nieomylnej intuicji”, popychając go do postawienia całego zysku na kolejną spekulację',
                feedback: 'Precyzyjna obserwacja psychologiczna. Sukces ze złego procesu jest najbardziej destrukcyjnym doświadczeniem w karierze decydenta.',
                isOptimal: true
              },
              {
                text: 'Paweł stanie się ostrożnym inwestorem dywersyfikującym portfel',
                feedback: 'Niezwykle rzadkie bez zewnętrznej interwencji edukacyjnej — overconfidence bias przejmuje kontrolę.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Który z Twoich największych sukcesów życiowych był wynikiem świetnego procesu, a który jedynie uśmiechem ślepego losu?'
      }
    },
    {
      id: 'sec-27-6',
      pageNumber: 789,
      sectionNumber: '27.6',
      title: 'Sprawczość i architektura wpływu: Gdzie kończy się kontrola, a zaczyna odpowiedzialność',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Ludzka sprawczość opiera się na fundamencie przekonania o własnej skuteczności (Self-Efficacy) — wierze, że posiadamy zdolność do wywierania realnego wpływu na bieg własnego życia. Bez poczucia sprawczości człowiek staje się bezwolną ofiarą losu, myląc granice realnego wpływu z paraliżującym fatalizmem.',
        author: 'Prof. Albert Bandura & Julian B. Rotter',
        source: 'Stanford University / University of Connecticut, „Self-Efficacy: The Exercise of Control”, W.H. Freeman, 1997'
      },
      paragraphs: [
        'Pojęcie sprawczości (Agency) jest zwornikiem całej książki. W Rozdziale 1.8 zdefiniowaliśmy sprawczość jako poczucie, że nasze działania mają realne znaczenie i możemy w pewnym zakresie wpływać na bieg zdarzeń. Czym jednak różni się dojrzała sprawczość od naiwnej iluzji kontroli?',
        'Naiwna pop-psychologia głosi: „Możesz wszystko, ograniczenia są tylko w twojej głowie”. To fałsz, który prowadzi wprost do neurotycznego poczucia winy, gdy rzeczywistość stawia opór. Dojrzała sprawczość w ujęciu Bandury (self-efficacy) i Rottera (locus of control) opiera się na bezkompromisowym audycie granic wpływu.'
      ],
      subsections: [
        {
          id: 'sub-27-6-1',
          title: 'Analiza słów prof. Alberta Bandury: Cztery Źródła Poczucia Sprawczości',
          content: [
            'Wypowiedź prof. Bandury definiuje motor ludzkiego działania. Poczucie samoskuteczności (self-efficacy) nie jest wrodzoną cechą charakteru — jest dynamicznym stanem budowanym przez cztery źródła informacji:',
            '1. DOŚWIADCZENIA MISTRZOSTWA (Enactive Mastery): Najpotężniejsze źródło. Każde małe zadanie doprowadzone do końca pomimo trudności buduje w mózgu twardy dowód: „Potrafię to zrobić”.',
            '2. MODELOWANIE SPOŁECZNE (Vicarious Experience): Obserwacja ludzi podobnych do nas, którzy pokonali analogiczne przeszkody.',
            '3. PERSWAZJA SPOŁECZNA (Verbal Persuasion): Realistyczna informacja zwrotna od mądrego mentora.',
            '4. INTERPRETACJA STANÓW FIZJOLOGICZNYCH: Odczytywanie drżenia rąk nie jako dowodu paniki, lecz jako sygnału gotowości organizmu do działania.'
          ]
        },
        {
          id: 'sub-27-6-2',
          title: 'Dychotomia Kontroli: Dwa Kręgi Rzeczywistości',
          content: [
            'KRĄG WPŁYWU (Co zależy ode mnie): Moje przygotowanie, ramy interpretacyjne, zarządzanie uwagą, regulacja reakcji afektywnej, konstrukcja środowiska fizycznego, zadawane pytania, decyzje o działaniu lub zaniechaniu.',
            'KRĄG TROSKI / ZEWNĘTRZNY (Co nie zależy ode mnie bezpośrednio): Reakcje innych ludzi, decyzje przełożonych, fluktuacje rynkowe, zdarzenia losowe, przeszłość i jej koszty zamknięte.',
            'Zdrowie psychiczne i skuteczność działania zależą od jednego: natychmiastowego wycofania energii z Kręgu Zewnętrznego i zainwestowania 100% zasobów w Krąg Wpływu. Kiedy tracisz energię na złoszczenie się, że „szef ma zły humor” (brak wpływu), odbierasz zasoby swojej korze przedczołowej na przygotowanie merytorycznych argumentów (wpływ).'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-27-6-1',
          type: 'praktyka',
          title: 'Architektura Środowiska jako Najwyższa Forma Sprawczości',
          content: 'Najwyższy poziom sprawczości nie polega na napinaniu mięśni w walce z pokusami (heroiczna samokontrola). Polega na takim zaprojektowaniu otoczenia, by właściwe decyzje działy się przy minimalnym wydatku energii. Zwiększenie fizycznego tarcia dla zachowań niepożądanych i obniżenie tarcia dla zachowań pożądanych to zwycięstwo inżynierii środowiska nad ułomnością kory przedczołowej.'
        }
      ],
      interactiveWindow: {
        id: 'win-27-6',
        title: 'Audyt Dychotomii Kontroli: Przesunięcie Energii do Kręgu Wpływu',
        type: 'co_zrobilbys',
        context: 'Monika (34 lata) przygotowuje się do kluczowego przetargu. Od trzech nocy nie śpi, zamartwiając się: „Co jeśli komisja przetargowa będzie stronnicza? Co jeśli konkurencja złoży ofertę poniżej kosztów?”. Czuje paraliż i bezsilność.',
        steps: [
          {
            stepNumber: 1,
            title: 'Identyfikacja obiektu uwagi Moniki',
            description: 'Gdzie Monika inwestuje 90% swoich zasobów poznawczych?',
            options: [
              {
                text: 'W Krąg Troski (Zewnętrzny) — w zachowania komisji i konkurencji, na które nie ma bezpośredniego wpływu',
                feedback: 'Trafna diagnoza. Monika wyczerpuje korę przedczołową na analizowanie zmiennych całkowicie poza jej kontrolą.',
                isOptimal: true
              },
              {
                text: 'W Krąg Wpływu — w doskonalenie własnej prezentacji i kalkulacji kosztorysowej',
                feedback: 'Nie. Monika nie ma siły pracować nad ofertą, bo jej umysł jest sparaliżowany lękiem o czynniki zewnętrzne.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Przekierowanie wektora sprawczości',
            description: 'Jaki krok przywróci Monice poczucie wpływu i obniży lęk?',
            options: [
              {
                text: 'Radykalne odcięcie myśli o konkurencji i skoncentrowanie 100% czasu na dopracowaniu własnego wystąpienia i symulacji trudnych pytań',
                feedback: 'Wzorcowe zastosowanie dychotomii kontroli Epikteta i Bandury. Sprawczość rośnie natychmiast po powrocie do własnego podwórka.',
                isOptimal: true
              },
              {
                text: 'Próba znalezienia znajomości w komisji przetargowej, aby wybadać nastroje',
                feedback: 'To tylko pogłębi chaos etyczny i niepewność psychologiczną.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'O co martwisz się dzisiaj, co znajduje się całkowicie poza Twoim Kręgiem Wpływu — i jakie jedno konkretne działanie w Twoim Kręgu Wpływu możesz zamiast tego podjąć?'
      }
    },
    {
      id: 'sec-27-7',
      pageNumber: 795,
      sectionNumber: '27.7',
      title: 'Wielkie Studium Przypadku: Skrzyżowanie Dróg Mateusza — Anatomia Wielopoziomowego Wyboru',
      category: 'studium-przypadku',
      readingTimeMinutes: 20,
      paragraphs: [
        'Przyjrzyjmy się teraz pełnej, wielowymiarowej wiwisekcji realnego dramatu decyzyjnego. Zobaczmy, w jaki sposób zakotwiczenie na statusie, pułapka kosztów utopionych, agresywny framing przełożonego i konflikt ról doprowadziły doświadczonego lidera technologicznego do podjęcia decyzji, która kosztowała go zdrowie, reputację i kryzys małżeński.',
        'Poniższe studium przypadku ilustruje działanie wszystkich 10 kroków pętli decyzyjnej w warunkach ostrego stresu korporacyjnego.'
      ],
      caseStudyRef: chapterTwentySevenCaseStudyMateusz
    },
    {
      id: 'sec-27-8',
      pageNumber: 803,
      sectionNumber: '27.8',
      title: 'Drugie Studium Przypadku: Pętla Zaniechania Ewy — Jak „Brak Decyzji” Kształtuje Rzeczywistość',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Czy brak podjęcia działania może być najbardziej brzemienną w skutki decyzją w życiu człowieka? W Rozdziale 1.1.2 podkreślaliśmy, że bierne dryfowanie w stronę status quo nie jest neutralnym brakiem wyboru — jest aktywnym opowiedzeniem się za trwaniem w dotychczasowych warunkach.',
        'Poniższa analiza przypadku Ewy ukazuje, jak błąd zaniechania (omission bias) w połączeniu z niskim poczuciem samoskuteczności (self-efficacy) i lękiem przed odrzuceniem potrafi na lata sparaliżować rozwój zawodowy zdolnego człowieka.'
      ],
      caseStudyRef: chapterTwentySevenCaseStudyEwa
    },
    {
      id: 'sec-27-9',
      pageNumber: 809,
      sectionNumber: '27.9',
      title: 'Warsztat Integracyjny: Protokół Dekompozycji Decyzji w Czasie Rzeczywistym',
      category: 'cwiczenia',
      readingTimeMinutes: 16,
      paragraphs: [
        'Teoria bez praktyki pozostaje jedynie jałową wiedzą encyklopedyczną. Aby zintegrowany model decyzji stał się Twoim codziennym nawykiem poznawczym, musisz przećwiczyć dekompozycję własnych wyborów na czynniki pierwsze.',
        'Poniższy warsztat przeprowadzi Cię przez procedurę rozbicia dowolnej trudnej decyzji z ostatnich 30 dni na 10 kroków pętli systemowej. Twoim zadaniem jest bezwzględne oddzielenie czystych faktów od heurystycznych opowieści Twojego umysłu.'
      ],
      exerciseRef: chapterTwentySevenExerciseDecisionAudit
    },
    {
      id: 'sec-27-10',
      pageNumber: 815,
      sectionNumber: '27.10',
      title: 'Warsztat Kontrfaktyczny: Rekonstrukcja Trudnego Wyboru bez Samobiczowania',
      category: 'cwiczenia',
      readingTimeMinutes: 16,
      paragraphs: [
        'Wielu ludzi niszczy swoje poczucie sprawczości poprzez toksyczny żal: godzinami odtwarzają przeszłe błędy, powtarzając w myślach: „Dlaczego byłem taki głupi?”. Z perspektywy psychologii poznawczej to błąd: nakładasz swoją dzisiejszą wiedzę na ówczesny stan niepewności.',
        'Poniższy warsztat uczy funkcjonalnego myślenia kontrfaktycznego. Zamiast atakować własną tożsamość, zrekonstruujesz ówczesny stan informacji i zidentyfikujesz 3 punkty interwencji, które zamienisz w żelazną regułę decyzyjną na przyszłość.'
      ],
      exerciseRef: chapterTwentySevenExerciseCounterfactualLab
    },
    {
      id: 'sec-27-11',
      pageNumber: 821,
      sectionNumber: '27.11',
      title: 'Błędne Intuicje i Granice Współczesnej Wiedzy: Co Wiemy, a Co Nadal Nie Jest Jasne',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Zgodnie z naczelną zasadą metodologiczną naszej książki, rzetelna psychologia nie tworzy dogmatów ani nie udaje, że zna proste odpowiedzi na wszystkie pytania o człowieka. Pora skonfrontować powszechne mity z twardymi danymi naukowymi oraz uczciwie nakreślić granice współczesnej wiedzy o decyzjach.'
      ],
      subsections: [
        {
          title: 'Sekcja: BŁĘDNA INTUICJA (Trzy Powszechne Złudzenia)',
          paragraphs: [
            'BŁĘDNA INTUICJA 1: „Idealna racjonalność polega na całkowitym wyłączeniu emocji i chłodnej, matematycznej kalkulacji”.\nPRAWDA NAUKOWA: Współczesna neuronauka poznawcza jednoznacznie dowodzi, że człowiek pozbawiony sygnałów afektywnych staje się całkowicie niezdolny do podjęcia nawet najprostszej decyzji. Wartościowanie opcji zawsze wymaga sygnału somatycznego: „to jest dla mnie ważne”. Problem nie polega na obecności emocji, lecz na braku rozpoznania ich jako jednej ze składowych równania.',
            'BŁĘDNA INTUICJA 2: „Im więcej informacji zbierzesz przed decyzją, tym lepszy będzie Twój wybór”.\nPRAWDA NAUKOWA: Powyżej pewnego progu nasycenia dodatkowe dane nie zwiększają trafności przewidywań, lecz drastycznie podnoszą poziom nadmiernej pewności siebie (overconfidence). Dodatkowo nadmiar informacji wywołuje paraliż analityczny i wyczerpuje zasoby pamięci roboczej.',
            'BŁĘDNA INTUICJA 3: „Jeśli ktoś postąpił wbrew swoim długofalowym celom, to znaczy, że nie miał silnej woli”.\nPRAWDA NAUKOWA: Zjawisko ulegania impulsowi to nie defekt moralny, lecz precyzyjny wynik konfliktu parametrów temporalnych (present bias), wysokiego tarcia środowiskowego oraz wyczerpania zasobów metabolicznych kory przedczołowej. Zmiana geometrii otoczenia rozwiązuje problem tam, gdzie sama wola zawodzi.'
          ]
        },
        {
          title: 'Sekcja: CO NADAL NIE JEST JASNE? (Otwarte Spory w Nauce)',
          paragraphs: [
            '1. SPÓR O UNIWERSALNOŚĆ AWERSJI DO STRAT (LOSS AVERSION): Choć klasyczna teoria perspektywy zakładała, że strata boli psychologicznie około dwukrotnie bardziej niż tożsamy zysk (współczynnik λ ≈ 2), najnowsza gigantyczna metaanaliza z 2024 roku (obejmująca ponad 600 estymacji ze 150 badań) wykazuje znaczne zróżnicowanie tego efektu. W wielu realnych warunkach rynkowych i przy małych kwotach awersja do strat bywa znacznie słabsza, a u części osób w określonym kontekście ustępuje poszukiwaniu ryzyka.',
            '2. OGRANICZENIA MODELI DUAL-PROCESS: Środowisko neuronaukowe coraz głośniej kwestionuje prosty podział na System 1 i System 2 jako dwa rozłączne mechanizmy. Badania funkcjonalnym rezonansem magnetycznym (fMRI) wskazują, że procesy intuicyjne mogą w ułamkach sekund wykonywać niezwykle wyrafinowane obliczenia probabilistyczne, a procesy analityczne Systemu 2 bywają często jedynie powolnym adwokatem pierwotnego afektu.',
            '3. DECYZJE W GŁĘBOKIEJ NIEPEWNOŚCI (DEEP UNCERTAINTY): Wciąż brakuje spójnego, uniwersalnego modelu matematycznego opisującego, jak optymalnie podejmować decyzje w warunkach, w których reguły środowiska zmieniają się szybciej niż proces uczenia się organizmu (np. rozwój zaawansowanej sztucznej inteligencji, gwałtowne kryzysy geopolityczne).'
          ]
        }
      ]
    },
    {
      id: 'sec-27-12',
      pageNumber: 827,
      sectionNumber: '27.12',
      title: 'Jak Zastosować to Jutro? Zestaw Narzędzi Decyzyjnych do Natychmiastowego Wdrożenia',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Zintegrowana wiedza ma sens tylko wtedy, gdy potrafisz przekształcić ją w konkretne protokoły operacyjne w ciągu pierwszych 24 godzin. Oto 5 przetestowanych narzędzi systemowych, które możesz wdrożyć do swojego życia od zaraz:'
      ],
      subsections: [
        {
          title: '1. Protokół Pauzy Poznawczej (Oddzielenie Faktu od Opowieści)',
          paragraphs: [
            'Gdy w pracy lub w relacji otrzymujesz bodziec wywołujący nagły skok napięcia (np. lakoniczny mail od szefa, milczenie partnera), zastosuj 60-sekundową regułę podziału kartki na dwie kolumny. Po lewej stronie zapisz: CZYSTY FAKT (to, co widzi kamera: „Szef napisał: Przejrzyjmy jutro raport”). Po prawej stronie zapisz: INTERPRETACJA MOJEGO UMYSŁU („Uważa, że raport jest beznadziejny i chce mnie zwolnić”). Już samo fizyczne rozdzielenie tych dwóch sfer wygasza 80% nieadaptacyjnego lęku.'
          ]
        },
        {
          title: '2. Analiza Pre-Mortem (Szczepionka przeciwko Overconfidence)',
          paragraphs: [
            'Zanim podpiszesz umowę, rozpoczniesz nowy projekt lub podejmiesz nieodwracalne zobowiązanie, zbierz zespół (lub usiądź sam w ciszy) i powiedz: „Cofnijmy się w czasie z przyszłości. Mamy dziś [data za rok]. Nasz projekt zakończył się spektakularną, całkowitą katastrofą. Budżet przepadł, reputacja legła w gruzach. Macie 10 minut na wypisanie historii: dlaczego do tego doszło?”. To ćwiczenie natychmiast neutralizuje optymizm poznawczy i ujawnia krytyczne martwe pola procesu.'
          ]
        },
        {
          title: '3. Test Odwracalności Decyzji (Jeff Bezos Two-Way Door)',
          paragraphs: [
            'Podziel decyzje na Drzwi Jednokierunkowe (nieodwracalne, wysoki koszt wycofania — np. sprzedaż firmy, rzucenie studiów) oraz Drzwi Dwukierunkowe (łatwo odwracalne — np. test nowego oprogramowania, zmiana harmonogramu spotkań). Drzwi dwukierunkowe podejmuj w 5 minut przy 70% informacji. Drzwi jednokierunkowe wymagają spowolnienia procesu, audytu założeń i konsultacji zewnętrznej. Najczęstszym błędem jest tracenie tygodni na decyzje odwracalne i podejmowanie w 5 minut decyzji nieodwracalnych.'
          ]
        },
        {
          title: '4. Inżynieria Tarcia Środowiskowego (Zasada 20 Sekund)',
          paragraphs: [
            'Zidentyfikuj jedno zachowanie, które sabotuje Twoje długofalowe cele (np. sięganie po smartfon o 23:00 w łóżku). Zwiększ tarcie jego rozpoczęcia o zaledwie 20 sekund: kup klasyczny budzik na baterie, a telefon ładuj w kuchni. W ciągu tych 20 sekund marszu kora przedczołowa zyskuje czas na zadanie pytania: „Czy ja naprawdę chcę to teraz robić?”.'
          ]
        },
        {
          title: '5. Kwarantanna Utopionych Kosztów (Reset od Zera)',
          paragraphs: [
            'Gdy stoisz przed dylematem, czy kontynuować nierentowny projekt, toksyczną relację czy nietrafioną inwestycję, zadaj sobie jedno pytanie resetujące: „Gdybym wszedł w tę sytuację dzisiaj rano jako całkowicie obcy człowiek, bez żadnych przeszłych powiązań i wkładu finansowego, czy wybrałbym wejście w to dokładnie na takich warunkach?”. Jeśli odpowiedź brzmi „nie” — każda kolejna złotówka i godzina jest wyrzucaniem zasobów w błoto.'
          ]
        }
      ]
    },
    {
      id: 'sec-27-13',
      pageNumber: 833,
      sectionNumber: '27.13',
      title: 'Pomost do Kolejnych Wymiarów Umysłu: Zapowiedź Rozszerzenia Systemu',
      category: 'podsumowanie',
      readingTimeMinutes: 14,
      paragraphs: [
        'W tym rozdziale postawiliśmy potężny fundament. Wiemy już, że decyzja nie jest izolowanym aktem woli, lecz dynamiczną pętlą 10 etapów, w której zderzają się surowe informacje, filtry uwagi, uproszczenia heurystyczne, wielopoziomowe konflikty celów i twarda architektura środowiska. Zrozumieliśmy, dlaczego ocena jakości wyboru musi być bezwzględnie oddzielona od losowości wyniku, a sprawczość zaczyna się tam, gdzie kończy się walka z rzeczami niezależnymi od nas.',
        'Jednak nasza mapa systemu decyzyjnego wciąż ma otwarte porty. W tym pierwszym etapie świadomie zarysowaliśmy jedynie ramy procesowe. W kolejnych etapach naszej drogi ten system zacznie tętnić biologicznym i społecznym życiem:',
        'W kolejnym kroku podłączymy do KROKU 4 PORT AFEKTYWNY: zbadamy naturę emocji, dowiemy się, skąd bierze się porwanie migdałowate, dlaczego stany lękowe zawężają pole uwagi i w jaki sposób somatyczne markery Antonio Damasio prowadzą nas przez labirynt wyborów.',
        'Następnie rozbudujemy KROK 2 o PORT UWAGI I PERCEPCJI: zbadamy reflektor świadomości, ślepotę pozauwagową oraz to, jak sensoryczne filtry konstruują naszą subiektywną reprezentację świata.',
        'W dalszej kolejności podłączymy PORT PAMIĘCI: odkryjemy, dlaczego pamięć nie jest twardym dyskiem rejestrującym przeszłość, lecz dynamicznym procesem rekonstrukcyjnym, który bezustannie przepisuje nasze wspomnienia, by dopasować je do bieżących potrzeb tożsamości.',
        'A na koniec wyjdziemy poza jednostkę — do wielkiego PORTU RELACYJNEGO I SPOŁECZNEGO: zbadamy komunikację, mechanizmy wpływu społecznego, uległość wobec autorytetu, perswazję, manipulację oraz dynamikę stadną.',
        'Zapamiętaj: żaden z kolejnych tematów nie będzie zaczynał się od zera. Każdy nowy mechanizm, który poznasz, znajdzie swoje precyzyjne miejsce w tej wielkiej pętli integracyjnej. Zanim jednak ruszysz dalej, sprawdź swoje zrozumienie systemowe w poniższym Egzaminie Końcowym.'
      ]
    },
    {
      id: 'sec-27-14',
      pageNumber: 839,
      sectionNumber: '27.14',
      title: 'Wielki Egzamin Analityczny z Integracji Decyzyjnej (Etap 1)',
      category: 'podsumowanie',
      readingTimeMinutes: 20,
      paragraphs: [
        'Ten egzamin nie sprawdza Twojej pamięci definicji. Sprawdza Twoją zdolność do myślenia systemowego, rozpoznawania złożonych interakcji psychologicznych oraz rozkładania rzeczywistych dylematów ludzkich na czynniki pierwsze.',
        'Przeanalizuj uważnie każde z 10 pytań problemowych. Zwróć szczególną uwagę na rozróżnienie procesu od wyniku oraz identyfikację punktów interwencji decyzyjnej.'
      ]
    }
  ]
};
