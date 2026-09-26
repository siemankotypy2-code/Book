import { Chapter, ExamQuestion } from '../types/book';

export const chapterTwoExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Na czym polega fundamentalna różnica pomiędzy EMOCJĄ a NASTROJEM?',
    topic: 'Emocja vs Nastrój',
    sectionRef: 'Sekcja 2.2',
    options: [
      { label: 'A', text: 'Emocja jest zawsze pozytywna, a nastrój bywa wyłącznie negatywny.', isCorrect: false },
      { label: 'B', text: 'Emocja to rzutka, krótkotrwała reakcja na konkretny wyzwalacz, podczas gdy nastrój to dłużej trwające tło afektywne o mniejszym natężeniu i często bez jednego jasnego bodźca.', isCorrect: true },
      { label: 'C', text: 'Emocje powstają w sercu, a nastrój jest wytworem kory przedczołowej.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, terminy te są w psychologii synonimami.', isCorrect: false }
    ],
    explanation: 'Emocja to rzutki proces trwający od kilku sekund do kilku minut, powiązany z konkretnym bodźcem (np. strach przed psem). Nastrój (np. chandra) trwa godzinami lub dniami i odzwierciedla ogólny stan energetyczny organizmu.',
    keyTakeaway: 'Emocja ma konkretny wyzwalacz, nastrój jest klimatem tła.'
  },
  {
    id: 2,
    question: 'W koncepcji Josepha LeDouxa „Droga Niska” (Low Road) przetwarzania bodźca emocjonalnego charakteryzuje się tym, że:',
    topic: 'Droga Niska vs Wysoka',
    sectionRef: 'Sekcja 2.5',
    options: [
      { label: 'A', text: 'Sygnał biegnie ze wzgórza bezpośrednio do ciała migdałowatego w ciągu 12–15 ms, omijając korę nową, co umożliwia natychmiastową reakcję obronną kosztem precyzji rozpoznania.', isCorrect: true },
      { label: 'B', text: 'Służy wyłącznie do logicznego rozwiązywania równań matematycznych.', isCorrect: false },
      { label: 'C', text: 'Jest dwukrotnie wolniejsza od drogi korowej i wymaga pełnego skupienia uwagi.', isCorrect: false },
      { label: 'D', text: 'Występuje wyłącznie u gadów i nie występuje u naczelnych.', isCorrect: false }
    ],
    explanation: 'Droga niska (thalamo-amygdala) to ewolucyjna droga szybkiego reagowania. Pozwala odskoczyć od wijącego się cienia na leśnej ścieżce, zanim kora wzrokowa zorientuje się, czy to wąż, czy zeschła gałąź.',
    keyTakeaway: 'Ciało reaguje na potencjalne zagrożenie szybciej, niż świadomy umysł zdąży je nazwać.'
  },
  {
    id: 3,
    question: 'Dlaczego twierdzenie „Moje emocje są bezwzględną prawdą o sytuacji” jest błędem poznawczym?',
    topic: 'Zasada Podwójnej Prawdy',
    sectionRef: 'Sekcja 2.4 & 2.11',
    options: [
      { label: 'A', text: 'Ponieważ emocje są zawsze iluzją i nigdy nie należy na nie zwracać uwagi.', isCorrect: false },
      { label: 'B', text: 'Ponieważ emocja jest autentyczną reakcją biologiczną na subiektywną INTERPRETACJĘ bodźca, a nie dowodem na obiektywny stan faktów (emocja informuje o stanie umysłu, nie o faktach).', isCorrect: true },
      { label: 'C', text: 'Ponieważ ludzie racjonalni w ogóle nie doświadczają emocji.', isCorrect: false },
      { label: 'D', text: 'Ponieważ emocje wywoływane są wyłącznie przez czynniki pogodowe.', isCorrect: false }
    ],
    explanation: 'Poczucie zagrożenia (np. gdy szef wzywa na rozmowę) jest w 100% prawdziwe jako stan somatyczny, ale nie dowodzi, że grozi nam zwolnienie. Emocja odzwierciedla hipotezę mózgu, a nie obiektywne fakty.',
    keyTakeaway: 'Emocja to informacja o interpretacji, a nie niepodważalny dowód w sprawie.'
  },
  {
    id: 4,
    question: 'Na czym polega różnica pomiędzy REEWALUACJĄ POZNAWCZĄ a TŁUMIENIEM EKSPRESJI wg Jamesa Grossa?',
    topic: 'Regulacja Emocji',
    sectionRef: 'Sekcja 2.10',
    options: [
      { label: 'A', text: 'Tłumienie obniża aktywność ciała migdałowatego, a reewaluacja ją drastycznie podnosi.', isCorrect: false },
      { label: 'B', text: 'Reewaluacja to zmiana interpretacji sytuacji przed szczytem pobudzenia (skutecznie wycisza amygdalę), a tłumienie to próba ukrycia objawów po wybuchu (zwiększa obciążenie układu krążenia).', isCorrect: true },
      { label: 'C', text: 'Tłumienie polega na wykrzyczeniu złości, a reewaluacja na ucieczce.', isCorrect: false },
      { label: 'D', text: 'Obie strategie są biologicznie identyczne i dają te same rezultaty.', isCorrect: false }
    ],
    explanation: 'Badania fMRI Grossa dowiodły, że udawanie obojętności (tłumienie) utrzymuje wysokie ciśnienie krwi i pobudzenie autonomiczne, podczas gdy zmiana perspektywy (reewaluacja) wygasza reakcję u źródła.',
    keyTakeaway: 'Zmień interpretację zanim emocja przejmie kontrolę nad mięśniami.'
  },
  {
    id: 5,
    question: 'W badaniach Matthew Liebermana technika „Etykietowania Afektu” (Affect Labeling) powoduje:',
    topic: 'Etykietowanie Afektu',
    sectionRef: 'Sekcja 2.10 & 2.15',
    options: [
      { label: 'A', text: 'Wzrost agresji i natychmiastową utratę kontroli motorycznej.', isCorrect: false },
      { label: 'B', text: 'Spadek aktywności ciała migdałowatego na skutek aktywacji prawej brzuszno-bocznej kory przedczołowej (rvPFC) po nazwaniu stanu słowami.', isCorrect: true },
      { label: 'C', text: 'Całkowity paraliż układu mowy.', isCorrect: false },
      { label: 'D', text: 'Wypłukanie dopaminy z prążkowia.', isCorrect: false }
    ],
    explanation: 'Nazwanie emocji precyzyjnym pojęciem (np. „czuję obawę przed oceną”) angażuje korę językową i przedczołową, co wysyła sygnał hamujący do struktur limbicznych (tzw. Name It to Tame It).',
    keyTakeaway: 'Nazwanie emocji przenosi energię neuronalną ze struktur paniki do struktur analitycznych.'
  },
  {
    id: 6,
    question: 'Według teorii markerów somatycznych Antonio Damasio sygnały z ciała (np. ścisk w żołądku, przyspieszone tętno):',
    topic: 'Markery Somatyczne',
    sectionRef: 'Sekcja 2.9',
    options: [
      { label: 'A', text: 'Są szkodliwym szumem biologicznym, który należy bezwzględnie ignorować.', isCorrect: false },
      { label: 'B', text: 'Stanowią ewolucyjny skrót decyzyjny, który na bazie wcześniejszych doświadczeń zawęża pole wyboru zanim kora przedczołowa dokona kalkulacji.', isCorrect: true },
      { label: 'C', text: 'Pojawiają się wyłącznie podczas zawału serca.', isCorrect: false },
      { label: 'D', text: 'Dowodzą, że człowiek nie posiada wolnej woli.', isCorrect: false }
    ],
    explanation: 'Pacjenci z uszkodzeniem brzuszno-przyśrodkowej kory przedczołowej (vmPFC), odcięci od sygnałów z ciała, nie potrafili podejmować najprostszych decyzji życiowych, mimo nienaruszonego ilorazu inteligencji.',
    keyTakeaway: 'Emocje cielesne nie przeszkadzają w racjonalności — są jej niezbędnym kompasem.'
  },
  {
    id: 7,
    question: 'W sytuacji Tomasza na zebraniu zarządu (Sekcja 2.12), głównym błędem poznawczym prowadzącym do wybuchu złości była:',
    topic: 'Studium Przypadku Tomasz',
    sectionRef: 'Sekcja 2.12',
    options: [
      { label: 'A', text: 'Personalizacja uwagi technicznej i zinterpretowanie merytorycznego pytania jako zamachu na własny status i autorytet.', isCorrect: true },
      { label: 'B', text: 'Zasypianie z nudów podczas prezentacji slajdów.', isCorrect: false },
      { label: 'C', text: 'Pomylenie sali konferencyjnej.', isCorrect: false },
      { label: 'D', text: 'Brak znajomości języka polskiego u uczestników spotkania.', isCorrect: false }
    ],
    explanation: 'Tomasz potraktował uwagę o dyrektywie API nie jako problem techniczny projektu, lecz jako komunikat o własnej niekompetencji i upokorzenie przed zarządem.',
    keyTakeaway: 'Złość jest często tarczą ochronną przed wstydem i poczuciem bezradności.'
  },
  {
    id: 8,
    question: 'Dlaczego ból odrzucenia społecznego (np. brak odpowiedzi na wiadomość, wykluczenie z grupy) odczuwany jest cieleśnie tak samo jak fizyczne zranienie?',
    topic: 'Emocje Społeczne i dACC',
    sectionRef: 'Sekcja 2.8',
    options: [
      { label: 'A', text: 'Ponieważ to tylko metafora literacka bez pokrycia w neuroanatomii.', isCorrect: false },
      { label: 'B', text: 'Ponieważ ból społeczny aktywuje tę samą strukturę mózgu (grzbietową przednią korę zakrętu obręczy – dACC) i wyspę, które rejestrują ból fizyczny.', isCorrect: true },
      { label: 'C', text: 'Ponieważ odrzucenie społeczne natychmiast łamie kości.', isCorrect: false },
      { label: 'D', text: 'Ponieważ w trakcie odrzucenia organizm przestaje produkować czerwone krwinki.', isCorrect: false }
    ],
    explanation: 'Dla naszych przodków wykluczenie z plemienia oznaczało nieuchronną śmierć z głodu lub atak drapieżników. Ewolucja podpięła ból odrzucenia pod ten sam obwód alarmowy, co ból fizyczny.',
    keyTakeaway: 'Mózg traktuje zagrożenie relacji społecznej z taką samą powagą jak fizyczną ranę.'
  },
  {
    id: 9,
    question: 'Co oznacza pojęcie „Tendencji do Działania” (Action Tendency) sformułowane przez Nico Frijdę?',
    topic: 'Tendencje do Działania',
    sectionRef: 'Sekcja 2.7',
    options: [
      { label: 'A', text: 'Obowiązek natychmiastowego zapisania się na kurs tańca.', isCorrect: false },
      { label: 'B', text: 'Zaprogramowaną neurobiologicznie gotowość mięśni i metabolizmu do określonego typu ruchu (np. złość przygotowuje do uderzenia/obrony, lęk do ucieczki).', isCorrect: true },
      { label: 'C', text: 'Przekonanie, że los człowieka jest z góry przesądzony genetycznie.', isCorrect: false },
      { label: 'D', text: 'Niezdolność do wykonywania jakichkolwiek ruchów.', isCorrect: false }
    ],
    explanation: 'Każda emocja jest biologiczną wektorem motorycznym: złość przyspiesza dopływ krwi do rąk (walka), strach do dużych mięśni nóg (ucieczka), a wstręt zamyka drogi oddechowe i wywołuje odruch wymiotny.',
    keyTakeaway: 'Emocja przygotowuje ciało do konkretnego ruchu, zanim podejmiesz świadomą decyzję.'
  },
  {
    id: 10,
    question: 'W protokole regulacji STOPP (Sekcja 2.12), litera „P” (Pauza / Pomyśl z perspektywy) służy do:',
    topic: 'Protokół STOPP',
    sectionRef: 'Sekcja 2.12',
    options: [
      { label: 'A', text: 'Natychmiastowego wysłania agresywnego e-maila zanim emocja ostygnie.', isCorrect: false },
      { label: 'B', text: 'Stworzenia szczeliny czasowej między impulsem limbicznym a reakcją motoryczną, co pozwala korze przedczołowej na ocenę alternatywnych wyjaśnień.', isCorrect: true },
      { label: 'C', text: 'Wypicia potrójnego espresso w celu podbicia ciśnienia.', isCorrect: false },
      { label: 'D', text: 'Udawania, że problem w ogóle nie istnieje.', isCorrect: false }
    ],
    explanation: 'Zatrzymanie się i świadomy wydech dają 3–5 sekund na włączenie kontroli wykonawczej dlPFC i ugaszenie bezpośredniego wyładowania autonomicznego.',
    keyTakeaway: 'Pomiędzy bodźcem a reakcją istnieje przestrzeń. W tej przestrzeni leży nasza wolność wyboru.'
  },
  {
    id: 11,
    question: 'W studium przypadku Marty (Sekcja 2.13) impuls do gorączkowego kasowania plików i paniki wynikał z:',
    topic: 'Studium Przypadku Marta',
    sectionRef: 'Sekcja 2.13',
    options: [
      { label: 'A', text: 'Pewności opartej na pisemnym wypowiedzeniu umowy leżącym na biurku.', isCorrect: false },
      { label: 'B', text: 'Katastroficznej interpretacji neutralnej wiadomości od szefa („Musimy porozmawiać”) jako zapowiedzi zwolnienia, napędzanej syndromem oszusta.', isCorrect: true },
      { label: 'C', text: 'Awarii zasilania w całym wieżowcu biurowym.', isCorrect: false },
      { label: 'D', text: 'Wypicia przeterminowanego soku pomarańczowego.', isCorrect: false }
    ],
    explanation: 'Marta zareagowała na własną fantazję o zwolnieniu, podczas gdy szef chciał powierzyć jej przewodnictwo w nowym, prestiżowym projekcie.',
    keyTakeaway: 'Najgorsze katastrofy w naszym życiu to te, które wydarzyły się wyłącznie w naszej wyobraźni.'
  },
  {
    id: 12,
    question: 'Co jest najskuteczniejszą biologiczną metodą przerwania ostrego pobudzenia współczulnego (serce bijące jak młot, płytki oddech)?',
    topic: 'Fizjologia Wyciszenia',
    sectionRef: 'Sekcja 2.6 & 2.12',
    options: [
      { label: 'A', text: 'Wydłużony wydech (np. westchnienie fizjologiczne — podwójny wdech nosem i długi wydech ustami), który pobudza nerw błędny i zwalnia akcję węzła zatokowego serca.', isCorrect: true },
      { label: 'B', text: 'Gwałtowne napinanie wszystkich mięśni twarzy i krzyk.', isCorrect: false },
      { label: 'C', text: 'Szybkie, płytkie oddychanie przez usta.', isCorrect: false },
      { label: 'D', text: 'Powtarzanie sobie w myśli: „Muszę natychmiast przestać się bać!”.', isCorrect: false }
    ],
    explanation: 'Mechaniczne wydłużenie fazy wydechu aktywuje układ przywspółczulny za pośrednictwem nerwu błędnego (Vagus Nerve), co obniża tętno niezależnie od treści myśli.',
    keyTakeaway: 'Ciałem można uspokoić umysł szybciej niż samymi myślami.'
  }
];

export const chapterTwo: Chapter = {
  number: 2,
  title: 'Porwanie Emocjonalne',
  subtitle: 'Dlaczego czasami emocja pojawia się szybciej niż myśl?',
  leadParagraph:
    'Zanim zdążysz wypowiedzieć jedno logiczne zdanie, Twoje serce zaczyna walić jak młot, dłonie stają się wilgotne, a w klatce piersiowej rozlewa się ścisk. Dlaczego rewolucje psychiczne i fizjologiczne wybuchają w ułamku sekundy, wyprzedzając chłodny namysł? W tym rozdziale odsłaniamy mechanizmy porwania emocjonalnego, rozbrajając mit, że emocje są wrogiem rozumu.',
  totalEstimatedPages: 44,
  sections: [
    {
      id: 'sec-2-1',
      pageNumber: 53,
      sectionNumber: '2.1',
      title: 'Sygnał Odrzucenia: Wiadomość „Musimy porozmawiać”',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Emocje to nie błędy w oprogramowaniu naszego mózgu. To pierwotne, genialne ewolucyjnie programy przetrwania, które niekiedy działają na przestarzałych danych.',
        author: 'Joseph LeDoux, "Synaptic Self"'
      },
      paragraphs: [
        'Jest wtorkowe popołudnie. Marta siedzi przed monitorem komputera, dopracowując kwartalny zestawienie finansowe dla klienta. W tle cicho szumi klimatyzacja biurowa. Nagle w prawym dolnym rogu ekranu pojawia się cicha powiadomienie z komunikatora służbowego. Nadawca: Dyrektor Operacyjny. Treść zwięzła i bezżadnych ozdobników: „Marta, wejdź do mojego gabinetu za 10 minut. Musimy porozmawiać.”',
        'Zanim umysł Marty zdąży postawić racjonalne pytanie: „Co dokładnie jest w agendzie?”, jej ciało reaguje błyskawiczną kaskadą hormonalną. Serce przyspiesza z 72 do 110 uderzeń na minutę. W ustach pojawia się suchość, a żołądek zaciska się w twardą pięść. W ciągu zaledwie 180 milisekund – zanim jakakolwiek świadoma myśl zdąży uformować się w korze przedczołowej – os podwzgórze-przysadka-nadnercza (HPA) wpompowuje do jej krwiobiegu pokaźną dawkę noradrenaliny i adrenaliny.',
        '„Coś schrzaniłam. Pewnie wykryli błąd w bilansie. Będą chcieli ze mną rozwiązać umowę” – podpowiada natychmiast wewnętrzny głos. W ułamku sekundy świat Marty kurczy się do scenariusza przetrwania. Cały kunszt analityczny, znajomość przepisów podatkowych i chłodny profesjonalizm znikają, ustępując miejsca pierwotnej chęci ucieczki lub poddania się. Marta stała się właśnie obiektem klasycznego porwania emocjonalnego (Emotional Hijacking).'
      ],
      subsections: [
        {
          title: 'Definicja Porwania Emocjonalnego',
          paragraphs: [
            'Pojęcie porwania limbicznolimbicznego (często nazywanego porwaniem ciała migdałowatego) zostało wprowadzone do psychologii przez Daniela Golemana. Oznacza ono sytuację, w której układ limbiczny – w szczególności ciało migdałowate (amygdala) – przejmuje kontrolę nad zachowaniem i fizjologią organizmu zanim wyższe ośrodki kory nowej zdołają w pełni przeanalizować spływające bodźce.',
            'Porwanie to nie jest oznaką choroby psychicznej ani braku silnej woli. To precyzyjnie oszlifowany przez miliony lat ewolucji mechanizm obronny. Problem polega na tym, że nasz układ nerwowy traktuje e-mail od szefa, publiczną krytykę czy brak odpowiedzi na SMS-a z tą samą powagą fizjologiczną, z jaką nasi przodkowie traktowali wstrząs w zaroślach zwiastujący ataki drapieżnika.'
          ],
          highlightBox: {
            title: 'Wgląd Neurobiologiczny',
            content: 'Czas potrzebny bodźcowi sensorycznemu na dotarcie do ciała migdałowatego drogą niską (ze wzgórza bezpośrednio do amygdali) wynosi zaledwie 12–15 milisekund. Dotarcie tego samego sygnału drogą wysoką (przez korę czuciową do kory przedczołowej) zajmuje około 300 milisekund. Oznacza to, że cieleśnie reagujesz na zagrożenie dwa razy szybciej niż świadomie je rozumiesz!',
            type: 'neuro'
          }
        },
        {
          title: 'Doświadczenie Codzienne: Kiedy Ciało Przejmuje Ster',
          paragraphs: [
            'Każdy z nas zna to zjawisko z autopsji. W szkole: moment, gdy nauczyciel zawiesza palec nad dziennikiem i mówi „Do odpowiedzi ustnej zapraszam...”. W relacji partnerskiej: pojedyncze słowo wypowiedziane chłodnym tonem, które natychmiast wywołuje lawinę podejrzeń lub złości. W internecie: kąśliwy komentarz pod naszym postem, który sprawia, że przez następne dwie godziny układamy w głowie riposty z zaciśniętymi szczękami.',
            'Zrozumienie anatomii tego procesu pozwala zdjąć z siebie poczucie winy. Nie jesteś „zepsuty” ani „przewrażliwiony” — Twój mózg po prostu wzorowo wykonuje zadanie, do którego został ukształtowany w epoce plejstocenu: chroni Cię za wszelką cenę.'
          ]
        }
      ]
    },
    {
      id: 'sec-2-2',
      pageNumber: 58,
      sectionNumber: '2.2',
      title: 'Taksonomia Stanów Afektywnych: Emocja, Nastrój, Pobudzenie i Zachowanie',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'W potocznym języku pojęcia „emocja”, „nastrój”, „uczucie” i „pobudzenie” używane są zamiennie. Gdy mówimy: „jestem w złym nastroju”, „czuję złość” albo „jestem zestresowany”, często opisujemy zupełnie różne procesy neurobiologiczne. Aby nauczyć się regulować stany wewnętrzne, musimy najpierw wprowadzić ścisłą taksonomię naukową.',
        '1. Pobudzenie fizjologiczne (Arousal): To poziom aktywacji obwodowego układu nerwowego (współczulnego vs przywspółczulnego). Mierzy się je tętnem, przewodnictwem skóry (GSR), rozszerzeniem źrenic i napięciem mięśniowym. Pobudzenie może być wysokie (np. podczas biegu lub paniki) albo niskie (podczas snu lub głębokiej relaksacji), ale samo w sobie jest neutralne wartościująco.',
        '2. Emocja (Emotion): To rzutki, krótkotrwały (trwający od kilku sekund do kilku minut) kompleksowy wzorzec reakcji biopsychicznej na konkretny bodziec. Składa się z subiektywnego odczucia afektywnego, reakcji fizjologicznej oraz wyrazu ekspresyjnego (twarz, głos, postawa). Emocja zawsze ma swój obiektywny wyzwalacz.',
        '3. Nastrój (Mood): To tło afektywne o niższym natężeniu, ale znacznie dłuższym czasie trwania (godziny, dni, a nawet tygodnie). Nastrój często nie ma jednego, jasno zidentyfikowanego wyzwalacza. Stanowi racjonalne uśrednienie naszej kondycji biologicznej, zasobów oraz doświadczeń.',
        '4. Zachowanie (Behavior): To widoczna na zewnątrz, obiektywna reakcja motoryczna lub słowna. Kluczowa zasada neurobiologii brzmi: Emocja tworzy silny IMPULS do zachowania, ale sama emocja NIE JEST zachowaniem. Między odczuciem złości a uderzeniem pięścią w stół istnieje przestrzeń decyzyjna.'
      ],
      subsections: [
        {
          title: 'Dlaczego Rozróżnienie Ma Znaczenie Praktyczne?',
          paragraphs: [
            'Jeżeli mylisz nastrój z emocją, będziesz gorączkowo szukać „winnego” w otoczeniu. Gdy budzisz się z obniżonym nastrojem (wynikającym np. ze złego snu, odwodnienia lub spadku glukozy), Twój mózg zacznie natychmiast konfabulować: „To na pewno przez to, co wczoraj powiedział partner” albo „Ta praca mnie niszczy”. W ten sposób fizjologiczny spadek energii zostaje zinterpretowany jako kryzys egzystencjalny.',
            'Z kolei gdy oddzielisz emocję od zachowania, zyskujesz immunitet przed bezsilnością. Złość staje się po prostu sygnałem telemetrycznym o naruszeniu granicy, a nie nakazem wszczęcia awantury.'
          ],
          highlightBox: {
            title: 'Wzór Samoregulacji',
            content: 'POBUDZENIE to obroty silnika. NASTRÓJ to pogoda na trasie. EMOCJA to nagłe ominięcie przeszkody. ZACHOWANIE to kierunek, w którym skręcasz kierownicą. Pamiętaj: nie jesteś pogodą, jesteś kierowcą!',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-2-3',
      pageNumber: 64,
      sectionNumber: '2.3',
      title: 'Architektura Reakcji: Model Bodziec → Ocena → Emocja → Pobudzenie → Impuls',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Tradycyjny model potoczny zakłada liniowość: wydarza się coś złego → automatycznie czuję złość → muszę wybuchnąć. Współczesna psychologia poznawczo-afektywna (model Richarda Lazarusa i Klausa Scherera) pokazuje jednak, że między bodźcem a emocją znajduje się kluczowy ogniwo: OCENA POZNAWCZA (Cognitive Appraisal).',
        'Nie sam bodziec wywołuje emocję, lecz ZNACZENIE, jakie nasz mózg przypisuje danemu bodźcowi w kontekście naszych celów, wartości, lęków i bezpieczeństwa.',
        'Oto sekwencja, która zachodzi w ułamku sekundy:'
      ],
      subsections: [
        {
          title: 'Sekwencja 6 Etapów Reakcji Emocjonalnej',
          paragraphs: [
            'Etap 1: BODZIEC (Stimulus) – Odczyt sensoryczny ze środowiska zewnętrznego (np. sygnał dźwiękowy wiadomości, wyraz twarzy rozmówcy) lub wewnętrznego (np. wspomnienie, kłucie w klatce piersiowej).',
            'Etap 2: PIERWOTNA OCENA POZNAWCZA (Primary Appraisal) – Podświadome pytanie mózgu: „Czy to jest dla mnie bezpieczne, czy zagraża mojemu dobrostanowi/statusowi/przetrwaniu?”.',
            'Etap 3: EMOCJA (Emotional Affect) – Wyzwolenie konkretnego stanu afektywnego (np. strach, złość, wstyd, radość).',
            'Etap 4: POBUDZENIE FIZJOLOGICZNE (Physiological Arousal) – Mobilizacja zasobów ciała przez autonomiczny układ nerwowy (wyrzut hormonów, zmiana tętna i oddychania).',
            'Etap 5: IMPULS (Action Tendency) – Gotowość do określonego działania (np. chęć ucieczki, ataku, przypodobania się lub znieruchomienia).',
            'Etap 6: ŚWIADOME DZIAŁANIE (Conscious Action) – Ostateczny wybór zachowania, wynegocjowany pomiędzy impulsem limbicznym a kontrolą wykonawczą kory przedczołowej.'
          ]
        },
        {
          title: 'Praktyczny Przykład: Trzech Kierowców w Korku',
          paragraphs: [
            'Ten sam obiektywny bodziec (nagłe zahamowanie auta przed nami) wywoła trzy zupełnie różne reakcje w zależności od etapu Oceny:',
            'Kierowca A ocenia: „Ten idiota robi to specjalnie, żeby mnie sprowokować!” → Emocja: wściekłość → Impuls: trąbienie, podjeżdżanie pod zderzak.',
            'Kierowca B ocenia: „O rany, mogłem w niego uderzyć, moje auto jest niesprawne!” → Emocja: panika → Impuls: zjechanie na pobocze, drżenie rąk.',
            'Kierowca C ocenia: „Widocznie pieszy wszedł na pasy, dobrze że zachowałem odstęp” → Emocja: ulga i skupienie → Impuls: spokojne czekanie.',
            'Fakt fizyczny był identyczny. Rzeczywistość psychiczna została wykreowana przez filtr oceny.'
          ]
        }
      ]
    },
    {
      id: 'sec-2-4',
      pageNumber: 71,
      sectionNumber: '2.4',
      title: 'Emocja jako Funkcja Adaptacyjna: Dlaczego Nie Istnieją „Złe” Emocje',
      category: 'neuronauka',
      readingTimeMinutes: 14,
      paragraphs: [
        'W zachodniej kulturze przez stulecia panował szkodliwy podział na emocje „dobre” (radość, spokój, wdzięczność) oraz emocje „złe” lub „destrukcyjne” (strach, złość, smutek, zazdrość, wstyd). Współczesna psychologia ewolucyjna odrzuca ten manichejski podział. Każda podstawowa emocja stanowi wyspecjalizowany program adaptacyjny, zaprojektowany do rozwiązywania konkretnych problemów przetrwania.',
        '• STRACH (Fear): Mobilizuje organizm do unikania lub ucieczki przed bezpośrednim niebezpieczeństwem. Wyostrza uwagę na sygnały zagrożenia.',
        '• ZŁOŚĆ (Anger): Reakcja na przekroczenie granic, niesprawiedliwość lub przeszkodę na drodze do celu. Dostarcza energii metabolicznej do obrony własnego terytorium i praw.',
        '• SMUTEK (Sadness): Sygnał utraty wartościowego zasobu lub relacji. Zmusza organizm do spowolnienia, wycofania się i oszczędzania energii oraz sygnalizuje otoczeniu potrzebę wsparcia społeczne.',
        '• WSTYD (Shame): Chroni przed wykluczeniem z grupy społecznej (co w toku ewolucji oznaczało śmierć). Sygnalizuje ryzyko utraty reputacji i wymusza dostosowanie się do norm plemiennych.',
        '• RADOŚĆ I NAGRODA (Joy & Reward): Utwalają zachowania sprzyjające przetrwaniu (zdobycie pożywienia, nawiązanie więzi, sukces produktywny).'
      ],
      subsections: [
        {
          title: 'Zasada Podwójnej Prawdy',
          paragraphs: [
            'Aby bezpiecznie nawigować w świecie emocji, musimy zrealizować dwie z pozoru sprzeczne prawdy:',
            '1. EMOCJA ≠ BŁĄD. Twoja emocja jest zawsze autentyczną i uzasadnioną reakcją biologiczna na sposób, w jaki Twój mózg zinterpretował sytuację w danej milisekundzie. Zmuszanie się do słowami „nie powinienem czuć złości” jest biologicznie niedorzeczne.',
            '2. EMOCJA ≠ AUTOMATYCZNA PRAWDA O RZECZYWISTOŚCI. To, że czujesz przerażenie, nie oznacza, że sytuacja jest obiektywnie śmiertelna. To, że czujesz złość, nie oznacza automatycznie, że druga strona miała złośliwe intencje. Emocja jest informacją o stanie Twojego umysłu, a nie niezbiwalnym dowodem w sprawie.'
          ],
          highlightBox: {
            title: 'Kluczowa Zasada Mądrości Emocjonalnej',
            content: 'Traktuj swoje emocje jak kontrolki na desce rozdzielczej samochodu. Zapalona kontrolka niskiego poziomu oleju nie jest wrogiem silnika – informuje o stanie układu. Ale zjechanie do mechanika nie oznacza, że musisz spalić auto!',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-2-5',
      pageNumber: 78,
      sectionNumber: '2.5',
      title: 'Anatomia Porwania: Dwie Drogi Przetwarzania w Mózgu',
      category: 'neuronauka',
      readingTimeMinutes: 16,
      paragraphs: [
        'Wybitny neurobiolog Joseph LeDoux z New York University odkrył, w jaki sposób mózg przetwarza bodźce o potencjalnym ładunku emocjonalnym. Badania ujawniły istnienie dwóch równoległych szlaków neuronalnych:',
        '1. Droga Niska (The Low Road – krótka, szybka, niedokładna): Bodziec wzrokowy lub słuchowy trafia ze zmysłów do WZGÓRZA (Thalamus). stamtąd bezpośrednio, omijając korę mózgową, jedzie wąskim pęczkiem aksonów do CIAŁA MIGDAŁOWATEGO. Ta droga trwa zaledwie 12–15 milisekund. Nie zapewnia szczegółowej analizy obrazu, ale błyskawicznie uruchamia odpowiedź obronną. To dzięki niej odskakujesz od czarnej gałęzi w lesie, zanim uświadomisz sobie, że to nie wąż.',
        '2. Droga Wysoka (The High Road – długa, wolna, precyzyjna): Równolegle ten sam sygnał ze wzgórza wędruje do odpowiednich pól KORY CZUCIOWEJ (np. wzrokowej w płacie potylicznym), a następnie do KORY PRZEDCZOŁOWEJ (dlPFC). Kora dokonywać precyzyjnego montażu danych, analizuje kontekst, wspomnienia i po 300 milisekundach wysyła komendę korygującą: „Spokojnie, to tylko zwiędła gałąź, nie żmija”.'
      ],
      subsections: [
        {
          title: 'Wąskie Gardło Ewolucyjne',
          paragraphs: [
            'Dlaczego ewolucja zachowała tak nieprecyzyjną drogę niską? Ponieważ w dzikiej naturze koszt błędu fałszywie pozytywnego (uznanie gałęzi za węża) wynosił zaledwie kilka kalorii zużytych na niepotrzebny skok w bok. Z kolei koszt błędu fałszywie negatywnego (uznanie jadowitego węża za nieszkodliwą gałąź) oznaczał śmierć organizmu i wyeliminowanie genów z puli.',
            'Dlatego nasz układ nerwowy jest z natury pesymistyczny: woli dziesięć razy zaalarmować Cię bez potrzeby, niż raz zignorować realne niebezpieczeństwo. Zrozumienie tego faktu uczy pokory wobec własnych lęków.'
          ]
        }
      ]
    },
    {
      id: 'sec-2-6',
      pageNumber: 84,
      sectionNumber: '2.6',
      title: 'Somatyczne Markery i Sygnały z Ciała: Teoria Antonio Damasio',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Przez dziesięciolecia dominował pogląd, że chłodny, racjonalny umysł powinien być całkowicie odcięty od „zakłóceń” płynących z ciała. Rewolucję przyniósł neurobiolog Antonio Damasio, autor przełomowej książki „Błąd Kartezjusza”.',
        'Damasio badał pacjentów z uszkodzeniem brzuszno-przyśrodkowej kory przedczołowej (vmPFC) – obszaru łączącego korę myślową z układem autonomicznym i czuciowym. Pacjenci ci posiadali nienaruszoną pamięć, logiczne myślenie i wysokie IQ, a mimo to byli całkowicie niezdolni do podejmowania trafnych decyzji życiowych. Wybór restauracji na obiad potrafił zająć im dwie godziny analitycznych rozważań, a w życiu osobistym i finansowym podejmowali katastrofalne ryzyka.',
        'Dlaczego? Ponieważ byli pozbawieni SOMATYCZNYCH MARKERÓW (Somatic Markers) – mikroskopijnych sygnałów trzewnych (tzw. gut feelings), które powstają w ciele na bazie wcześniejszych doświadczeń nagrody i kary.'
      ],
      subsections: [
        {
          title: 'Iowa Gambling Task: Jak Ciało Wie Zanim Pomyśli Głowa',
          paragraphs: [
            'W słynnym eksperymencie Iowa Gambling Task badani wybierali karty z czterech talii. Dwie talie były „dobre” (dawały stabilne, małe zyski), a dwie „złe” (obiecywały ogromne wygrane, ale niosły ze sobą katastrofalne straty).',
            'Badanie pokazało, że już około 10. losowania – na długo przed tym, jak uczestnicy potrafili świadomie wytłumaczyć, które talie są niebezpieczne (co następowało dopiero około 50. losowania) – ich dłonie zaczynały pocić się przy samym sięganiu w stronę „złych” talii!',
            'Układ autonomiczny i wyspa (insula) ostrzegały organizm za pomocą mikro-sygnałów somatycznych na kilkadziesiąt prób przed tym, jak kora przedczołowa zdołała sformułować regułę matematyczną.'
          ],
          highlightBox: {
            title: 'Wgląd Kliniczny',
            content: 'Emocje cielesne nie są przeszkodą w racjonalnym myśleniu — są jego biologiczną trampoliną. Bez somatycznych markerów kora przedczołowa gubi się w nieskończonym labiryncie alternatyw.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-2-7',
      pageNumber: 89,
      sectionNumber: '2.7',
      title: 'Tendencje do Działania (Nico Frijda) i Wyzwalacze Emocjonalne',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Holenderski psycholog Nico Frijda zdefiniował emocję jako stan gotowości do działania (Action Tendency). Każdy stan afektywny nie jest jedynie „myślą” czy „wrażeniem” — jest specyficznym programem motorycznym:',
        '• ZŁOŚĆ przygotowuje do walki: krew odpływa z trzewi do mięśni rąk, szczęki zaciskają się, obniża się próg odczuwania bólu.',
        '• STRACH przygotowuje do ucieczki: krew pompowana jest w potężne mięśnie czworogłowe ud, źrenice rozszerzają się, by objąć pole ucieczki.',
        '• WSTRĘT przygotowuje do wydalenia: zamykają się drogi oddechowe, wykrzywia się górna warga, pojawia się odruch wymiotny chroniący przed trucizną.',
        '• WSTYD przygotowuje do skurczenia się: głowa opada w dół, ramiona zapadają się do klatki piersiowej, wzrok ucieka w podłogę (sygnał uległości wobec silniejszego członka grupy).'
      ],
      subsections: [
        {
          title: 'Wyzwalacze Uniwersalne vs Indywidualne',
          paragraphs: [
            'Wyzwalacze możemy podzielić na dwie kategorie:',
            '1. Wyzwalacze ewolucyjne (twarde): nagły głośny huk, widok węża/pająka, zapach zgnilizny, nagła utrata równowagi.',
            '2. Wyzwalacze nabyte (indywidualne / społeczne): ton głosu przypominający surowego rodzica, zignorowanie pytania w e-mailu, spóźnienie partnera o 15 minut.',
            'Prawdziwa praca nad inteligencją emocjonalną polega na zidentyfikowaniu własnej „mapy minowej” wyzwalaczy nabytych, aby nie odpalały one pierwotnych programów walki i ucieczki w nowoczesnym biurze.'
          ]
        }
      ]
    },
    {
      id: 'sec-2-8',
      pageNumber: 94,
      sectionNumber: '2.8',
      title: 'Emocje Społeczne: Ból Odrzucenia, Wstyd, Poczucie Winy i Strach przed Oceną',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Dla człowieka jako istoty ultraspołecznej najgroźniejszymi wyzwalaczami nie są drapieżniki, lecz sygnały zagrożenia przynależności do stada. Naomi Eisenberger z UCLA przeprowadziła przełomowe badanie z użyciem gry komputerowej Cyberball.',
        'Badani w skanerze fMRI rzucali wirtualną piłkę do dwóch innych graczy (w rzeczywistości algorytmów komputerowych). W pewnym momencie dwaj gracze zaczynali rzucać piłkę wyłącznie do siebie, całkowicie ignorując badanego.',
        'Obrazowanie mózgu ujawniło zdumiewający fakt: doświadczenie bycia wykluczonym aktywowało GRZBIETOWĄ PRZEDNIĄ KORĘ ZAKRĘTU OBRĘCZY (dACC) oraz PRZEDNIĄ WYSPĘ – dokładnie te same obszary, które odpowiadają za afektywny komponent FIZYCZNEGO BÓLU (np. przy oparzeniu dłoni)!',
        'Gdy mówisz: „poczułem ból w sercu, gdy mnie pominęli”, nie posługujesz się poezją. Twój mózg dosłownie rejestruje odrzucenie społeczne jako fizyczną ranę.'
      ],
      subsections: [
        {
          title: 'Wstyd vs Poczucie Winy: Fundamentalne Rozróżnienie',
          paragraphs: [
            'Brené Brown i inni badacze emocji zwracają uwagę na kluczową różnicę:',
            '• POCZUCIE WINY (Guilt): Skupia się na ZACHOWANIU („Zrobiłem coś złego / popełniłem błąd”). Motywuje do naprawienia szkody, przeprosin i zmiany postępowania. Jest konstruktywne społecznie.',
            '• WSTYD (Shame): Skupia się na CAŁEJ OSOBIE („Jestem zły / jestem bezwartościowy”). Wywołuje poczucie obnażenia, paraliż i chęć zapadnięcia się pod ziemię lub gwałtowny kontratak agresją. Wstyd jest jednym z najczęstszych zapalników porwania emocjonalnego.'
          ]
        }
      ]
    },
    {
      id: 'sec-2-9',
      pageNumber: 99,
      sectionNumber: '2.9',
      title: '„Nie Każda Emocja Mówi Prawdę”: Rozróżnienie „Czuję Zagrożenie” a „Jestem Zagrożony”',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'W dobie kultury afirmacji popularne stało się hasło: „Ufaj swoim emocjom, one nigdy nie kłamią”. To zdanie zawiera groźną pułapkę poznawczą.',
        'Emocje nie kłamią co do tego, CO CZUJESZ w danej chwili. Twój lęk jest prawdziwy, Twoje tętno jest prawdziwe, Twój ucisk w klatce piersiowej istnieje obiektywnie. Ale emocje bardzo często MYLĄ SIĘ co do obiektywnego stanu świata zewnętrznego!',
        '• Uczucie: „Czuję się niekompetentny i gorszy od reszty zespołu” ≠ Fakt: „Moje wyniki są poniżej normy”.',
        '• Uczucie: „Czuję, że partner mnie zdradza lub lekceważy” ≠ Fakt: „Partner spóźnił się 20 minut z powodu korka”.',
        '• Uczucie: „Czuję przerażenie przed wystąpieniem publicznym” ≠ Fakt: „Publiczność szykuje się, by mnie zaatakować fizycznie”.'
      ],
      subsections: [
        {
          title: 'Pułapka Uzasadniania Emocjonalnego (Emotional Reasoning)',
          paragraphs: [
            'W terapii poznawczo-behawioralnej (CBT) zjawisko to nosi nazwę uzasadniania emocjonalnego: „Skoro czuję lęk, to na pewno grozi mi niebezpieczeństwo. Skoro czuję zazdrość, to na pewno doszło do zdrady”.',
            'To odwrócenie logiki: zamiast wyciągać wnioski z dowodów, traktujemy stan afektywny jako dowód. Dojrzałość emocjonalna polega na umiejętności powiedzenia sobie: „Moje ciało bije na alarm, to bardzo nieprzyjemne uczucie, ale biorę głęboki oddech i sprawdzam twarde fakty”.'
          ],
          highlightBox: {
            title: 'Eksperyment Myślowy: Dzwonek Alarmowy w Sklepie',
            content: 'Gdy wchodzisz do sklepu i bramka przy drzwiach zaczyna głośno piszczeć, czy od razu zakładasz na ręce kajdanki i krzyczysz: „Jestem złodziejem!”? Oczywiście nie. Wiesz, że system ochrony po prostu zareagował na niewykasowany klips z książki. Dokładnie tak samo traktuj fałszywy alarm w ciele migdałowatym!',
            type: 'exercise'
          }
        }
      ]
    },
    {
      id: 'sec-2-10',
      pageNumber: 104,
      sectionNumber: '2.10',
      title: 'Strategie Regulacji Emocji: Reewaluacja vs Destrukcyjne Tłumienie',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Skoro emocje pojawiają się automatycznie, jak możemy odzyskać nad nimi sprawczość? Wybitny badacz James Gross ze Stanford University opracował Procesowy Model Regulacji Emocji. Kluczowe rozróżnienie dotyczy dwóch najczęstszych strategii:',
        'A. TŁUMIENIE EKSPRESJI (Expressive Suppression): Polega na próbie ukrycia, zahamowania lub zablokowania uzewnętrzniania emocji, gdy ta już wybuchła (np. zagryzanie warg, udawanie niewzruszonego, powstrzymywanie łez). Badania fMRI pokazują, że tłumienie NIE ZMNIEJSZA pobudzenia ciała migdałowatego, a wręcz zwiększa aktywację układu współczulnego, podnosi ciśnienie krwi i obciąża pamięć roboczą.',
        'B. REEWALUACJA POZNAWCZA (Cognitive Reappraisal): Polega na świadomej zmianie interpretacji sytuacji, ZANIM reakcja emocjonalna osiągnie punkt szczytowy (np. „Przełożony prosi o rozmowę, ponieważ chce przydzielić mi nowy projekt, a nie dlatego, że chce mnie zwolnić”). Reewaluacja skutecznie wycisza ciało migdałowate i obniża pobudzenie fizjologiczne.'
      ],
      subsections: [
        {
          title: 'Technika Etykietowania Afektu (Affect Labeling)',
          paragraphs: [
            'Jednym z najprostszych i najsilniej przebadanych narzędzi osłabiania porwania emocjonalnego jest proste nazwanie własnego stanu wewnętrznego. Badania Matthew Liebermana z UCLA wykazały, że wypowiedzenie w myśli lub na głos precyzyjnego słowa opisującego stan (np. „Czuję obawę przed odrzuceniem”, „To jest złość na brak szacunku”) wywołuje natychmiastowy spadek aktywności w ciele migdałowatym.',
            'Mechanizm ten działa poprzez aktywację prawej brzuszno-bocznej kory przedczołowej (rvPFC), która działa jak biologiczny hamulec dla struktury limbicznej. Gdy nazywasz emocję, przenosisz aktywność z automatycznego układu czuciowego do struktury pojęciowej.'
          ],
          highlightBox: {
            title: 'Narzędzie Praktyczne',
            content: 'Gdy czujesz rosnący impuls emocjonalny, zastosuj regułę „Name It to Tame It” (Nazwij, aby oswoić): Powiedz sobie w myśli dwukrotnie: „Zauważam w sobie uczucie złości/lęku”. Użycie słowa „Zauważam” tworzy dystans poznawczy.',
            type: 'exercise'
          }
        }
      ]
    },
    {
      id: 'sec-2-11',
      pageNumber: 109,
      sectionNumber: '2.11',
      title: 'Praktyczny Protokół STOPP i RAIN w Ostrej Reakcji Emocjonalnej',
      category: 'cwiczenia',
      readingTimeMinutes: 16,
      paragraphs: [
        'W momencie, gdy fala pobudzenia zalewa układ nerwowy, skomplikowane teorie stają się bezużyteczne. Potrzebujesz prostego, mechanicznego algorytmu ratunkowego. Dwoma najlepiej przebadanymi protokołami klinicznymi są protokół STOPP oraz protokół RAIN (Tara Brach).'
      ],
      subsections: [
        {
          title: 'Protokół STOPP Krok po Kroku',
          paragraphs: [
            'S – STOP: Zatrzymaj się fizycznie. Zastygnij na 2 sekundy. Nie wypowiadaj ani jednego słowa, nie dotykaj klawiatury, nie wysyłaj SMS-a.',
            'T – TAKE A BREATH: Weź głęboki, powolny wydech (najlepiej tzw. westchnienie fizjologiczne: podwójny wdech nosem i długi, świszczący wydech ustami). To pobudza nerw błędny i natychmiast zwalnia akcję serca.',
            'O – OBSERVE: Zaobserwuj swoje ciało i myśli. Co czujesz w mięśniach? Jakie słowa podpowiada Twój umysł? Zauważ: to tylko myśli i odczucia, nie nakazy działania.',
            'P – PULL BACK / PERSPECTIVE: Zmień perspektywę. Jak ta sprawa będzie wyglądać za 6 miesięcy? Co doradziłbyś najlepszemu przyjacielowi w tej samej sytuacji? Czy znam wszystkie fakty?',
            'P – PROCEED: Przejdź do konstruktywnego działania. Wybierz reakcję, która służy Twoim długofalowym celom, a nie chwilowemu rozładowaniu napięcia.'
          ]
        },
        {
          title: 'Metoda RAIN dla Trudnych Emocji',
          paragraphs: [
            'R (Recognize): Rozpoznaj, co się dzieje („Aha, pojawił się we mnie lęk przed odrzuceniem”).',
            'A (Allow): Pozwól temu być („Nie walczę z tym, to naturalna reakcja organizmu”).',
            'I (Investigate): Zbadaj z życzliwą ciekawością („Gdzie dokładnie w ciele to czuję? W klatce? W gardle?”).',
            'N (Nurture / Non-identification): Zaopiekuj się sobą i nie utożsamiaj się („Jest we mnie lęk, ale ja NIE JESTEM lękiem”).'
          ]
        }
      ]
    },
    {
      id: 'sec-2-12',
      pageNumber: 115,
      sectionNumber: '2.12',
      title: 'Studium Przypadku: Tomasz na Zebraniu Zarządu (Atak na Kompetencje)',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Przeanalizujmy szczegółowo sytuację Tomasza (38-letniego kierownika projektu IT), który podczas cotygodniowego zebrania zarządu doświadczył nagłego porwania emocjonalnego w odpowiedzi na uwagę młodszego programisty.'
      ],
      caseStudyRef: {
        id: 'cs-tomasz-meeting',
        title: 'Atak na Kompetencje: Porwanie Emocjonalne na Żywo',
        subtitle: 'Jak niewinna uwaga techniczna uruchomiła obwód zagrożenia egzystencjalnego',
        protagonist: 'Tomasz, Senior Project Manager (38 lat)',
        context: 'Prezentacja nowego harmonogramu wdrożenia systemu przed zarządem spółki.',
        story: [
          'Tomasz kończył omówienie slajdu dotyczącego terminów oddania modułu płatności. W tym momencie młodszy architekt o imieniu Łukasz podniósł rękę i powiedział spokojnym tonem: „Tomasz, ten harmonogram nie uwzględnia nowej dyrektywy bezpieczeństwa API. Jeśli wdrożymy to w tym kształcie, system wyłoży się przy pierwszym audycie.”',
          'W ułamku sekundy krew uderzyła Tomaszowi do głowy. Uszy zrobiły się gorące. W oczach zarządu Tomasz odczytał – jak mu się wydawało – pobłażliwe uśmieszki. Jego ciało migdałowate zaklasyfikowało wypowiedź Łukasza nie jako wsparcie merytoryczne, lecz jako publiczny zamach na jego pozycję i autorytet zawodowy.',
          'Zamiast powiedzieć: „Dzięki Łukasz za uwagę, sprawdźmy te dyrektywę po zebraniu”, Tomasz wyprostował się gwałtownie, podniósł głos i odpowiedział z wyraźną irytacją: „Łukasz, od trzech tygodni proszę cię o aktualne wytyczne na Slacku i nic nie wysłałeś! Teraz nagle wyskakujesz z tym na zarządzie? Może najpierw zacznij wykonywać swoje podstawowe obowiązki!”',
          'W sali zapadła głucha, krępująca cisza. Członkowie zarządu spuścili wzrok. Po zebraniu Tomasz wrócił do gabinetu z poczuciem ogromnego kwasu i wstydu.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Porwanie emocjonalne wywołane zagrożeniem statusu społecznego (SCARF model: Status & Certainty threat). Tomasz zinterpretował informację o błędzie technicznym jako komunikat: „Jesteś niekompetentny i bezwartościowy”.',
          cognitiveBiases: [
            {
              name: 'Personalizacja (Personalization)',
              description: 'Przypisanie wypowiedzi technicznej Łukasza złośliwej intencji ukierunkowanej na zniszczenie reputacji Tomasza.',
              impact: 'Uniemożliwiła chłodną analizę faktu i przeniosła dyskusję na płaszczyznę Personalną.'
            },
            {
              name: 'Myślenie Tunelowe (Tunnel Vision)',
              description: 'Odcęcie widzenia kontekstu zebrania pod wpływem wysokiego pobudzenia noradrenalinowego.',
              impact: 'Skupienie całej uwagi wyłącznie na rzekomym ataku i braku odwrotu.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Projekcja i Kontratak (Projection & Fight Response)',
              explanation: 'Przeniesienie odpowiedzialności na Łukasza poprzez zaatakowanie jego sumienności na Slacku (ochrona chwiejnej samooceny przed poczuciem wstydu).'
            }
          ],
          emotionalDynamic: 'Gwałtowny skok z poczucia pewności siebie w głęboki lęk przed kompromitacją, natychmiast zamieniony w defensywną złość.'
        },
        decisionProcessAnalysis: {
          trigger: 'Krytyczna wypowiedź Łukasza o braku uwzględnienia dyrektywy API.',
          attentionFocus: 'Zmarszczone brwi członka zarządu i wyobrażenie własnej kompromitacji.',
          interpretation: '„On chce mnie publicznie poniżyć i podważyć moje kompetencje przed szefami”.',
          emotion: 'Piekący wstyd błyskawicznie przepalony w defensywną wściekłość.',
          impulse: 'Zniszczyć wiarygodność krytyka i odzyskać dominację w sali.',
          action: 'Słowny atak ad hominem na Łukasza dotyczący opóźnień na Slacku.',
          consequence: 'Utrata twarzy w oczach zarządu, zniszczenie zaufania w zespole i kac moralny.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Ciało Migdałowate (Amygdala)', role: 'Wykrycie zagrożenia statusu i aktywacja osi HPA', activationState: 'Ekstremalna nadaktywność' },
            { region: 'dlPFC (Kora Przedczołowa)', role: 'Chłodna kontrola wykonawcza i hamowanie impulsów', activationState: 'Wyłączenie / Hypoaktywność' },
            { region: 'dACC (Kora Zakrętu Obręczy)', role: 'Rejestracja bólu społecznego odrzucenia', activationState: 'Wysoka aktywacja' }
          ],
          neurotransmitters: [
            { name: 'Noradrenalina', roleInScenario: 'Spowodowała zwężenie pola uwagi i reakcję walcz-lub-uciekaj.' },
            { name: 'Kortyzol', roleInScenario: 'Podtrzymał podwyższone tętno i czujność przez kolejne godziny po wydarzeniu.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 15 ms', process: 'Sygnał słuchowy trafia ze wzgórza do ciała migdałowatego.' },
            { timeMs: '50 ms', process: 'Wyrzut noradrenaliny ze miejsca sinawego (Locus Coeruleus).' },
            { timeMs: '200 ms', process: 'Tętno rośnie o 35 uderzeń/min, mięśnie karku ulegają usztywnieniu.' },
            { timeMs: '800 ms', process: 'Tomasz wypowiada pierwsze agresywne słowo zanim kora przedczołowa zdoła zahamować wypowiedź.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Pauza Oddechowa', script: 'Przełknij ślinę, poczuj stopy na podłodze, weź głęboki wydech.', rationale: 'Stymuluje nerw błędny i przywraca kontrolę przywspółczulną.' },
            { step: 'Krok 2: Parafraza Zadaniowa', script: '„Łukasz, podajesz ważny punkt techniczny. Upewnijmy się, że dobrze rozumiem: chodzi o zgodność z dyrektywą X, tak?”', rationale: 'Przenosi rozmowę z poziomu statusu na poziom faktów merytorycznych.' }
          ]
        },
        keyTakeaway: 'Atak słowny pod wpływem emocji prawie nigdy nie dotyczy sytuacji bieżącej – jest rozpaczliwą obroną ego przed poczuciem bezradności lub wstydu.'
      }
    },
    {
      id: 'sec-2-13',
      pageNumber: 121,
      sectionNumber: '2.13',
      title: 'Studium Przypadku: Marta i Panika przed Zwolnieniem (Wiadomość „Musimy porozmawiać”)',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Dokończmy wiwisekcję sytuacji Marty z początku rozdziału, analizując jak mikrowiadomość uruchomiła spiralę katastrofizowania i syndromu oszusta.'
      ],
      caseStudyRef: {
        id: 'cs-marta-message',
        title: 'Syndrom Oszusta w Amoku: Katastrofizacja Marty',
        subtitle: 'Jak 5 słów od przełożonego wywołało 4 godziny paraliżu psychofizycznego',
        protagonist: 'Marta, Senior Financial Specialist (34 lata)',
        context: 'Otrzymanie lakonicznej wiadomości od dyrektora operacyjnego w środku dnia roboczego.',
        story: [
          'Po otrzymaniu wiadomości: „Marta, wejdź do mojego gabinetu za 10 minut. Musimy porozmawiać”, Marta nie była w stanie wpisać ani jednej cyfry do Excela. Jej dłonie drżały tak mocno, że dwukrotnie upuściła długopis.',
          'W jej głowie ruszyła lawina: „Wiedziałam! Zauważyli, że w zeszłym miesiącu miałam gorszy tydzień. Teraz odbiorą mi projekt i wyrzucą dyscyplinarnie. Z czego spłacę kredyt hipoteczny? Wszyscy w biurze dowiedzą się, że jestem oszustką”.',
          'Zamiast sprawdzić fakty lub zadać pytanie pomocnicze, Marta pobiegła do łazienki, ochlapała twarz zimną wodą i zaczęła nerwowo kasować prywatne pliki z komputera, przygotowując się na najgorsze.',
          'O 15:10 weszła do gabinetu dyrektora zgarbiona, z bladą twarzą i spuszczonym wzrokiem. Dyrektor uśmiechnął się serdecznie, wskazał fotel i powiedział: „Marta, chcemy mianować cię liderem nowego zespołu wdrożeniowego w Berlinie i zaoferować ci 30% podwyżki. Czy zechciałabyś przyjąć tę rolę?”.',
          'Marta opadła na oparcie fotela. Prawie zemdlała z wyczerpania. Całe piekło psychiczne, które przeżyła przez ostatnie 30 minut, było w 100% wygenerowane przez jej własne obwody lękowe.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Katastrofizowanie (Catastrophizing) połączone z chronicznym syndromem oszusta (Impostor Phenomenon). Brak informacji w bodźcu (tzw. próżnia informacyjna) został natychmiast wypełniony najgorszym koszmarem.',
          cognitiveBiases: [
            {
              name: 'Wyciąganie Pochopnych Wniosków (Jumping to Conclusions)',
              description: 'Założenie najczarniejszego scenariusza bez cienia dowodu empirycznego.',
              impact: 'Doprowadziło do paraliżu motorycznego i paniki fizjologicznej.'
            },
            {
              name: 'Filtr Negatywny (Mental Filter)',
              description: 'Przypominanie sobie wyłącznie drobnych potknięć z przeszłości z jednoczesnym wymazaniem lat sukcesów i awansów.',
              impact: 'Wygenerowało poczucie zbliżającej się kary.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Fawn / Freeze Response',
              explanation: 'Zastygnięcie poznawcze i poddanie się wyobrażonej katastrofie bez podjęcia próby obrony faktów.'
            }
          ],
          emotionalDynamic: 'Gwałtowna panika lękowa, poczucie bezradności i wstydu egzystencjalnego.'
        },
        decisionProcessAnalysis: {
          trigger: 'Wiadomość tekstowa: „Musimy porozmawiać”.',
          attentionFocus: 'Własne tętno i lęk przed zwolnieniem.',
          interpretation: '„Jestem zdemaskowana, stracę pracę i dach nad głową”.',
          emotion: 'Obezwładniający lęk, rozpacz.',
          impulse: 'Ucieczka, kasowanie plików, ukrycie się.',
          action: 'Wejście do gabinetu w pozycji ofiary.',
          consequence: 'Ekstremalne wyczerpanie metaboliczne układu nerwowego i szok poznawczy.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Oś HPA (Podwzgórze-Przysadka-Nadnercza)', role: 'Wyrzut kortyzolu i adrenaliny', activationState: 'Maksymalny wyrzut stresowy' },
            { region: 'Przednia Wyspa (Insula)', role: 'Rejestracja somatycznego ścisku w żołądku', activationState: 'Nadaktywność' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol', roleInScenario: 'Zablokował dostęp do racjonalnych wspomnień sukcesów w hipokampie.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 200 ms', process: 'Odczytanie wiadomości uruchamia alarm w ciele migdałowatym.' },
            { timeMs: '2 min', process: 'Stężenie kortyzolu we krwi osiąga szczyt, blokując pamięć roboczą.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Weryfikacja Próżni Informacyjnej', script: 'Odpisanie: „Jasne, będę o 15:00. Czy mam przygotować jakieś konkretne dane lub raport?”', rationale: 'Wymusza na nadawcy doprecyzowanie kontekstu i natychmiast likwiduje pole do domysłów.' }
          ]
        },
        keyTakeaway: 'Próżnia informacyjna w ludzkim mózgu nigdy nie pozostaje pusta — lękowy umysł zawsze zapełni ją najgorszym z możliwych scenariuszy.'
      }
    },
    {
      id: 'sec-2-14',
      pageNumber: 128,
      sectionNumber: '2.14',
      title: 'Studium Przypadku: Piotr i Eskalacja Konfliktu Partnerskiego pod Wpływem Zmęczenia',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Trzecim polem bitwy emocjonalnej są relacje intymne. Przeanalizujmy wieczorną kłótnię Piotra i Karoliny, która rozpoczęła się od nieumytego kubka w zlewie.'
      ],
      caseStudyRef: {
        id: 'cs-piotr-kitchen',
        title: 'Efekt Niewypłukanego Kubka: Pętla Reaktywności w Związku',
        subtitle: 'Jak wyczerpanie metaboliczne zamienia błahostkę w zagrożenie więzi',
        protagonist: 'Piotr, Dyrektor Handlowy (44 lata)',
        context: 'Powrót do domu po 11 godzinach trudnych negocjacji w stanie głodu i zmęczenia.',
        story: [
          'Piotr wrócił do domu o 20:30 po całym dniu stresu. Marzył tylko o ciszy i gorącej herbacie. Wchodząc do kuchni, zobaczył w zlewie stertę naczyń, w tym kubek po kawie swojej partnerki Karoliny.',
          'W tym samym momencie Karolina weszła do kuchni i powiedziała zmęczonym głosem: „Piotrek, miałeś po drodze odebrać paczkę z paczkomatu, zapomniałeś?”.',
          'W mózgu Piotra – wyczerpanym z glukozy i działającym w trybie przetrwania – doszło do natychmiastowej eksplozji. Zamiast powiedzieć: „Przepraszam, byłem wykończony, odbiorę jutro rano”, Piotr rzucił kluczami o blat i wykrzyknął: „A ty znowu zostawiłaś chlew w zlewie! Cały dzień haruję na ten dom, a ty traktujesz mnie jak służącego!”.',
          'Karolina zamarła, po czym wybuchnęła płaczem i zamknęła się w sypialni. Wieczór zamienił się w wielogodzinną, wyniszczającą wojnę domową, w której padły słowa o rozwodzie i braku szacunku.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Ego Depletion (wyczerpanie wolicjonalne) w połączeniu z afektywnym transferem pobudzenia (Excitation Transfer). Pobudzenie stresowe z pracy przelało się na bezpieczną relację domową.',
          cognitiveBiases: [
            {
              name: 'Nadmierne Uogólnianie (Overgeneralization)',
              description: 'Użycie słów „zawsze”, „nigdy”, „cały dzień haruję”.',
              impact: 'Przekształciło pojedynczy incydent w oskarżenie o charakter partnera.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Przemieszczenie (Displacement)',
              explanation: 'Wyładowanie stłumionej złości na trudnego klienta na bezpiecznym obiekcie (partnerce).'
            }
          ],
          emotionalDynamic: 'Głębokie wyczerpanie przykryte defensywnym atakiem złości.'
        },
        decisionProcessAnalysis: {
          trigger: 'Pytanie o paczkę i widok naczyń w zlewie.',
          attentionFocus: 'Własne zmęczenie i poczucie bycia niedocenionym.',
          interpretation: '„Ona mnie nie szanuje, wymaga ode mnie wszystkiego, a sama nic nie robi”.',
          emotion: 'Wściekłość, żal, rozgoryczenie.',
          impulse: 'Uderzyć słownie, zranić, wyrzucić napięcie.',
          action: 'Rzucenie kluczami i krzyk.',
          consequence: 'Głęboki kryzys zaufania i poczucie winy.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'vlPFC (Brzuszno-boczna kora przedczołowa)', role: 'Hamowanie agresji', activationState: 'Całkowite wyczerpanie zasobów' },
            { region: 'Ciało Migdałowate', role: 'Generowanie ataku', activationState: 'Brak hamowania z góry' }
          ],
          neurotransmitters: [
            { name: 'Niski poziom glukozy', roleInScenario: 'Uniemożliwił korze przedczołowej podtrzymanie samokontroli.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 100 ms', process: 'Słowa partnerki odpalają transfer napięcia nagromadzonego w ciągu dnia.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Protokół HALT', script: 'Zapytaj się: Czy jestem Hungry (głodny), Angry (zły), Lonely (samotny), Tired (zmęczony)? Jeśli tak — zakaz trudnych rozmów przed posiłkiem i 20 minutami odpoczynku.', rationale: 'Chroni przed biologicznym porwaniem na tle fizjologicznym.' }
          ]
        },
        keyTakeaway: 'Nigdy nie podejmuj ważnych rozmów relacyjnych w stanie HALT (głód, zmęczenie, złość, samotność). Najpierw nakarm biologię, potem rozmawiaj.'
      }
    },
    {
      id: 'sec-2-15',
      pageNumber: 134,
      sectionNumber: '2.15',
      title: 'Zeszyt Ćwiczeń: Rozpoznawanie Wyzwalacza, Etykietowanie Afektu i Oddzielanie Emocji',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Zintegrujmy wiedzę teoretyczną w trzech praktycznych ćwiczeniach samorozwojowych, które możesz wykonywać za każdym razem, gdy poczujesz rosnące napięcie.'
      ],
      subsections: [
        {
          title: 'Ćwiczenie 1: Wiwisekcja Własnego Wyzwalacza',
          paragraphs: [
            'Przypomnij sobie sytuację z ostatnich 7 dni, w której Twoja reakcja była niewspółmiernie silna do bodźca (wybuch złości, paraliżujący lęk, nagłe wycofanie). Odpowiedz na piśmie:',
            '1. FAKT: Co dokładnie zarejestrowałaby kamera wideo? (Zero interpretacji, same fakty fizyczne).',
            '2. MOJA INTERPRETACJA: Jakie znaczenie natychmiast nadał temu mój umysł?',
            '3. CIAŁO: W którym miejscu poczułem pierwszy skurcz (gardło, klatka, żołądek)?',
            '4. PIERWOTNY LĘK: Jakiego zagrożenia bał się mój mózg (odrzucenie, kompromitacja, utrata kontroli)?'
          ]
        },
        {
          title: 'Ćwiczenie 2: Etykietowanie Afektu z Dystansem Językowym',
          paragraphs: [
            'Zamiast mówić: „Jestem wściekły / boję się”, przećwicz trzystopniową progresję językową:',
            'Poziom 1 (Zlanie z emocją): „Jestem wściekły!” (emocja to całe Twoje Ja).',
            'Poziom 2 (Obserwacja): „Czuję złość” (emocja jest stanem przejściowym).',
            'Poziom 3 (Metaświadomość): „Zauważam, że w moim ciele pojawił się impuls złości w reakcji na słowa X”.',
            'Zauważ: ten, kto zauważa złość, sam nie jest złością. Jesteś obserwatorem, nie burzą.'
          ]
        }
      ]
    },
    {
      id: 'sec-2-16',
      pageNumber: 140,
      sectionNumber: '2.16',
      title: 'Podsumowanie Rozdziału 2, Egzamin Końcowy i Most do Rozdziału 3 (Uwaga)',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'W tym rozdziale odbyliśmy głęboką podróż w świat układu afektywnego. Wiemy już, że emocje to genialne, ewolucyjne programy adaptacyjne, a nie błędy w oprogramowaniu. Wiemy, że droga niska LeDouxa wyprzedza świadomy namysł o setki milisekund, a ciało migdałowate reaguje na zagrożenia społeczne z tą samą powagą, co na drapieżniki.',
        'Kluczem do dojrzałości emocjonalnej nie jest kamienna maska ani destrukcyjne tłumienie uczuć, lecz umiejętność stosowania pauzy, reewaluacji poznawczej oraz oddzielenia faktu od interpretacji.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 2, a następnie przejdź do kolejnego wielkiego filaru naszej architektury: Rozdziału 3 — UWAGA.'
      ]
    }
  ]
};
