import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterTwentyOneExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii poznawczej metapoznanie (Metacognition) wg Johna Flavella oznacza:',
    topic: 'Metapoznanie',
    sectionRef: 'Sekcja 21.2',
    options: [
      { label: 'A', text: 'Zdolność do monitorowania, kontrolowania i oceniania własnych procesów poznawczych („myślenie o myśleniu”).', isCorrect: true },
      { label: 'B', text: 'Zdolność do szybkiego czytania książek w języku angielskim.', isCorrect: false },
      { label: 'C', text: 'Proces czyszczenia pamięci podręcznej komputera.', isCorrect: false },
      { label: 'D', text: 'Niekontrolowane myślenie o wakacjach podczas pracy.', isCorrect: false }
    ],
    explanation: 'Metapoznanie to nawigacja drugiego rzędu. Pozwala zadać sobie pytanie: „Czy ja naprawdę rozumiem ten materiał, czy tylko wydaje mi się, że go rozumiem?”.',
    keyTakeaway: 'Metapoznanie to kapitan, który obserwuje nawigatora w Twoim umyśle.'
  },
  {
    id: 2,
    question: 'Eksperymenty Nisbetta i Wilsona („Telling More Than We Can Know”) dowiodły, że ludzie pytani o przyczyny własnych wyborów:',
    topic: 'Ograniczenia Introspekcji',
    sectionRef: 'Sekcja 21.4',
    options: [
      { label: 'A', text: 'Często tworzą przekonujące racjonalizacje post-factum, nie mając rzeczywistego bezpośredniego dostępu do podświadomych mechanizmów decyzyjnych.', isCorrect: true },
      { label: 'B', text: 'Zawsze podają idealnie trafną przyczynę neurologiczną każdego odruchu.', isCorrect: false },
      { label: 'C', text: 'Mówią wyłącznie prawdę popartą wykresami z rezonansu.', isCorrect: false },
      { label: 'D', text: 'Tracą zdolność mówienia na okres godziny.', isCorrect: false }
    ],
    explanation: 'Introspekcja nie jest bezpośrednim wglądem w synapsy, lecz wyreżyserowaną opowieścią kory przedczołowej próbującej uzasadnić podjęty odruch.',
    keyTakeaway: 'Nie bierz swoich pierwszych racjonalizacji za obiektywną prawdę o swoich motywach.'
  },
  {
    id: 3,
    question: 'Na czym polega kluczowa różnica między Obserwacją a Interpretacją w monitorowaniu własnego stanu psychicznego?',
    topic: 'Obserwacja vs Interpretacja',
    sectionRef: 'Sekcja 21.3',
    options: [
      { label: 'A', text: 'Obserwacja rejestruje gołe fakty i sygnały z ciała bez ocen; interpretacja dodaje do nich opowieść, oceny moralne i przewidywania.', isCorrect: true },
      { label: 'B', text: 'Obserwacja dotyczy przyrody, a interpretacja dotyczy teologicznych tekstów.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy, to dwa synonimy.', isCorrect: false },
      { label: 'D', text: 'Interpretacja jest zawsze bezbłędna, a obserwacja myli się w 90% przypadków.', isCorrect: false }
    ],
    explanation: 'Sygnał z ciała („ucisk w żołądku”) jest obserwacją. Opowieść („zaraz skompromituję się przed zespołem”) jest interpretacją.',
    keyTakeaway: 'Zatrzymaj się na obserwacji sygnału, zanim pozwolisz umysłowi nakręcić katastroficzny film.'
  },
  {
    id: 4,
    question: 'W jaki sposób złudzenie Poczucia Wiedzy (Feeling of Knowing / Illusion of Explanatory Depth) wprowadza nas w błąd?',
    topic: 'Złudzenie Wiedzy',
    sectionRef: 'Sekcja 21.6',
    options: [
      { label: 'A', text: 'Mylimy powierzchowną znajomość terminu lub wrażenie płynności (fluency) z głębokim rozumieniem mechanizmu.', isCorrect: true },
      { label: 'B', text: 'Zmusza nas do czytania encyklopedii po nocach.', isCorrect: false },
      { label: 'C', text: 'Sprawia, że zapominamy swoje imię w stresie.', isCorrect: false },
      { label: 'D', text: 'Gwarantuje wygraną w teleturniejach.', isCorrect: false }
    ],
    explanation: 'Myślisz, że wiesz, jak działa spłuczka w toalecie lub zegarek, dopóki nie musisz narysować dokładnego schematu mechanicznego.',
    keyTakeaway: 'Najlepszym testem wiedzy jest próba prostego wyjaśnienia mechanizmu od zera.'
  },
  {
    id: 5,
    question: 'Na czym polega zagrożenie wynikające z Nadmiernej Analizy i Ruminacji (Paralysis by Analysis)?',
    topic: 'Ruminacja i Nadanaliza',
    sectionRef: 'Sekcja 21.8',
    options: [
      { label: 'A', text: 'Ciągłe, zapętlone rozmyślanie o problemie bez przechodzenia do działania wyczerpuje zasoby kory przedczołowej i potęguje lęk.', isCorrect: true },
      { label: 'B', text: 'Umożliwia natychmiastowe rozwiązanie każdego konfliktu.', isCorrect: false },
      { label: 'C', text: 'Prowadzi do niekontrolowanego wzrostu inteligencji emocjonalnej.', isCorrect: false },
      { label: 'D', text: 'Zwiększa sprawność fizyczną organizmu.', isCorrect: false }
    ],
    explanation: 'Ruminacja nie jest rozwiązywaniem problemu — jest kręceniem się w pętli lęku, które daje iluzję pracy bez jakichkolwiek wyników.',
    keyTakeaway: 'Odróżnij konstruktywne myślenie od jałowej pętli ruminacyjnej.'
  },
  {
    id: 6,
    question: 'Jaką funkcję w metapoznaniu pełni rola Wewnętrznego Obserwatora (Self-As-Context / Observer Self)?',
    topic: 'Wewnętrzny Obserwator',
    sectionRef: 'Sekcja 21.5',
    options: [
      { label: 'A', text: 'Przyjęcie perspektywy świadomego świadka, który przygląda się myśla i emocjom bez utożsamiania się z nimi i bez automatycznej reakcji.', isCorrect: true },
      { label: 'B', text: 'Krytykowanie samego siebie za każdy popełniony błąd.', isCorrect: false },
      { label: 'C', text: 'Wyobrażanie sobie, że patrzy na nas publiczność w teatrze.', isCorrect: false },
      { label: 'D', text: 'Wyłączenie jakiejkolwiek świadomości zmysłowej.', isCorrect: false }
    ],
    explanation: 'Jesteś niebem, przez które przechodzą chmury myśli i burze emocji. Nie jesteś chmurą — jesteś przestrzenią nieba.',
    keyTakeaway: 'Nie jesteś swoimi myślami — jesteś świadomością, która te myśli zauważa.'
  },
  {
    id: 7,
    question: 'Co według psychologii oznacza pojęcie Decentryzacji Poznawczej (Defusion / Decentering)?',
    topic: 'Decentryzacja',
    sectionRef: 'Sekcja 21.7',
    options: [
      { label: 'A', text: 'Zdolność do zdystansowania się od własnych myśli i traktowania ich jako hipotez lub zdarzeń umysłowych, a nie jako niepodważalnych faktów.', isCorrect: true },
      { label: 'B', text: 'Błąd w ustawieniu ostrości w aparacie fotograficznym.', isCorrect: false },
      { label: 'C', text: 'Niezdolność do skupienia uwagi na jednej książce.', isCorrect: false },
      { label: 'D', text: 'Utrata orientacji przestrzennej w nowym mieście.', isCorrect: false }
    ],
    explanation: 'Decentryzacja zmienia zdanie „Jestem beznadziejny” na „Mam myśl, że jestem beznadziejny”, stwarzając przestrzeń do wyboru reakcji.',
    keyTakeaway: 'Złagodź nacisk myśli, traktując je jako słowa na ekranie, a nie jak wyroki losu.'
  },
  {
    id: 8,
    question: 'W jaki sposób monitorowanie poziomów zmęczenia (Wskaźnik HALT) wspiera procesy metapoznawcze?',
    topic: 'HALT w Metapoznaniu',
    sectionRef: 'Sekcja 21.9',
    options: [
      { label: 'A', text: 'Pozwala powstrzymać się od wyciągania ostatecznych wniosków o swoim życiu w chwile głodu, złości, samotności czy zmęczenia.', isCorrect: true },
      { label: 'B', text: 'Zmusza człowieka do natychmiastowego zjedzenia posiłku obfitego w cukier.', isCorrect: false },
      { label: 'C', text: 'Eliminuje jakąkolwiek potrzebę snu.', isCorrect: false },
      { label: 'D', text: 'Gwarantuje sukces na egzaminie z filozofii.', isCorrect: false }
    ],
    explanation: 'Gdy zasoby metaboliczne są na wyczerpaniu, metapoznanie wysyła sygnał: „Twój pesymizm jest wynikiem niskiego poziomu glukozy, a nie katastrofy życiowej”.',
    keyTakeaway: 'Nie podejmuj ważnych decyzji tożsamościowych na głodnym lub zmęczonym mózgu.'
  },
  {
    id: 9,
    question: 'Na czym polega technika Pytania „Skąd Wiem, Że Wiem?” w weryfikacji przekonań?',
    topic: 'Skąd Wiem Że Wiem',
    sectionRef: 'Sekcja 21.6',
    options: [
      { label: 'A', text: 'Żądanie od własnego umysłu podania konkretnych źródeł, dowodów i ścieżki wnioskowania dla danej pewności.', isCorrect: true },
      { label: 'B', text: 'Podważanie własnego imienia i nazwiska w urzędzie.', isCorrect: false },
      { label: 'C', text: 'Głośne krzyczenie na pytających nas ludzi.', isCorrect: false },
      { label: 'D', text: 'Unikanie czytania artykułów naukowych.', isCorrect: false }
    ],
    explanation: 'Pytanie to odróżnia intuicyjne wrażenie wiedzy od rzeczywistego opanowania materiału i merytorycznego uzasadnienia.',
    keyTakeaway: 'Sprawdź, czy Twoja pewność ma pokrycie w faktach, czy jest tylko emocjonalnym wrażeniem.'
  },
  {
    id: 10,
    question: 'Czym charakteryzuje się stan Mindful Awareness (Uważnej Świadomości) w codziennym działaniu?',
    topic: 'Uważna Świadomość',
    sectionRef: 'Sekcja 21.10',
    options: [
      { label: 'A', text: 'Niewartościujące, pełne ciekawości kierowanie uwagi na doświadczenie obecnej chwili (sygnały z ciała, myśli, otoczenie).', isCorrect: true },
      { label: 'B', text: 'Ciągłe analizowanie błędów z przeszłości przez 24 godziny na dobę.', isCorrect: false },
      { label: 'C', text: 'Wyłączenie jakichkolwiek myśli i stanów emocjonalnych na stałe.', isCorrect: false },
      { label: 'D', text: 'Zdolność do czytania w myślach innych ludzi.', isCorrect: false }
    ],
    explanation: 'Uważność zrywa automatyczny pilotaż, dając kory przedczołowej ułamek sekundy na wybór świadomej reakcji zamiast odruchu.',
    keyTakeaway: 'Pomiędzy bodźcem a reakcją istnieje przestrzeń. W tej przestrzeni leży nasza wolność.'
  },
  {
    id: 11,
    question: 'Jaka jest rola Kory Przedczołowej (dlPFC i mPFC) w procesach samomonitorowania metapoznawczego?',
    topic: 'Neuronauka Metapoznania',
    sectionRef: 'Sekcja 21.11',
    options: [
      { label: 'A', text: 'Reprezentują i oceniają własne stany poznawcze, wyhamowując automatyczne reakcje podkorowe z ciała migdałowatego.', isCorrect: true },
      { label: 'B', text: 'Odpowiadają wyłącznie za trawienie pokarmu i tętno.', isCorrect: false },
      { label: 'C', text: 'Są aktywne tylko podczas snu głębokiego.', isCorrect: false },
      { label: 'D', text: 'Nie mają żadnej roli w procesach myślowych.', isCorrect: false }
    ],
    explanation: 'Przednie obszary kory przedczołowej stanowią biologiczne podłoże metapoznania, umożliwiając refleksję nad własnym procesem myślowym.',
    keyTakeaway: 'Trening metapoznania fizycznie wzmacnia połączenia w Twojej korze przedczołowej.'
  },
  {
    id: 12,
    question: 'Na czym polega praktyka Dziennika Refleksji Metapoznawczej?',
    topic: 'Dziennik Metapoznawczy',
    sectionRef: 'Sekcja 21.16',
    options: [
      { label: 'A', text: 'Notowanie nie tylko samych decyzji, lecz także stanu emocjonalnego, założeń i wyłapanych błędów poznawczych towarzyszących ich podejmowaniu.', isCorrect: true },
      { label: 'B', text: 'Pisywanie wierszy i opowiadań fikcyjnych.', isCorrect: false },
      { label: 'C', text: 'Zapisywanie cen produktów w sklepach.', isCorrect: false },
      { label: 'D', text: 'Kopiowanie tekstów z podręczników.', isCorrect: false }
    ],
    explanation: 'Dziennik metapoznawczy uczy wyłapywać własne powtarzalne pułapki myślowe i buduje precyzyjny model własnego umysłu.',
    keyTakeaway: 'Badaj proces podejmowania swoich decyzji, a nie tylko ich ostateczny wynik.'
  },
  {
    id: 13,
    question: 'Co jest głównym celem Laboratorium Metapoznania (Sekcja 21.5)?',
    topic: 'Laboratorium Metapoznania',
    sectionRef: 'Sekcja 21.5',
    options: [
      { label: 'A', text: 'Przećwiczenie wyłapywania automatycznych myśli, testowania ich trafności i świadomego przełączania się z reakcji na obserwację.', isCorrect: true },
      { label: 'B', text: 'Nauka szybkiego pisania na klawiaturze.', isCorrect: false },
      { label: 'C', text: 'Mierzenie ciśnienia krwi po wysiłku.', isCorrect: false },
      { label: 'D', text: 'Trening zapamiętywania ciągu słów.', isCorrect: false }
    ],
    explanation: 'Laboratorium dostarcza praktycznego doświadczenia rozdzielenia Jaźni-Obserwatora od bieżącego szumu myślowego.',
    keyTakeaway: 'Przejdź z pozycji aktora wciągniętego w dramat na pozycję reżysera w reżyserce.'
  },
  {
    id: 14,
    question: 'W jaki sposób Pętla Świadomej Pauzy (Protokół STOP) chroni przed impulsywnym reagowaniem pod wpływem emocji?',
    topic: 'Protokół STOP',
    sectionRef: 'Sekcja 21.14',
    options: [
      { label: 'A', text: 'Wymusza zatrzymanie (S), wzięcie oddechu (T), obserwację stanu (O) i świadome przejście do działania (P).', isCorrect: true },
      { label: 'B', text: 'Zmusza do ucieczki z miejsca zdarzenia.', isCorrect: false },
      { label: 'C', text: 'Wywołuje natychmiastowy sen.', isCorrect: false },
      { label: 'D', text: 'Krzyczenie słowa „STOP” na rozmówcę.', isCorrect: false }
    ],
    explanation: 'Protokół STOP wstawia klin między bodziec a reakcję, pozwalając na przejęcie kontroli przez dlPFC.',
    keyTakeaway: 'Zatrzymaj się, weź oddech, zaobserwuj swój stan i wybierz mądrą reakcję.'
  },
  {
    id: 15,
    question: 'Co według badań nad podświadomymi odruchami oznacza pojęcie Autopilot Życiowy?',
    topic: 'Autopilot Życiowy',
    sectionRef: 'Sekcja 21.1',
    options: [
      { label: 'A', text: 'Wykonywanie większości codziennych czynności, ocen i decyzji za pomocą nawykowych, podkorowych skryptów bez udziału świadomej refleksji.', isCorrect: true },
      { label: 'B', text: 'Korzystanie z nowoczesnych systemów nawigacji w samochodzie.', isCorrect: false },
      { label: 'C', text: 'Zdolność do latania samolotem bez licencji.', isCorrect: false },
      { label: 'D', text: 'Brak jakichkolwiek emocji w życiu.', isCorrect: false }
    ],
    explanation: 'Autopilot oszczędza energię, lecz prowadzi do powielania dawnych błędów i utraty sterowności nad własnym życiem.',
    keyTakeaway: 'Wyłącz autopilota — zacznij świadomie sterować swoimi wyborami.'
  },
  {
    id: 16,
    question: 'Jaką rolę w metapoznaniu pełni akceptacja granic własnego poznania (Intelektualna Skromność)?',
    topic: 'Intelektualna Skromność',
    sectionRef: 'Sekcja 21.15',
    options: [
      { label: 'A', text: 'Chroni przed dogmatyzmem i otwiera umysł na uczenie się oraz przyjmowanie nowych informacji.', isCorrect: true },
      { label: 'B', text: 'Zmusza człowieka do udawania, że niczego nie wie.', isCorrect: false },
      { label: 'C', text: 'Niszczy jakąkolwiek pewność siebie w pracy.', isCorrect: false },
      { label: 'D', text: 'Jest cechą wyłącznie ludzi w podeszłym wieku.', isCorrect: false }
    ],
    explanation: 'Uznanie, że nasz umysł bywa omylny i posiada plamy ślepe, jest warunkiem koniecznym do dalszego rozwoju.',
    keyTakeaway: 'Świadomość własnej omylności to najwyższa forma dojrzałości poznawczej.'
  },
  {
    id: 17,
    question: 'W jaki sposób technika Scenariusza Najgorszego Wyjścia (Pre-Mortem Analysis) wspomaga metapoznanie przed podjęciem trudnej decyzji?',
    topic: 'Pre-Mortem Analysis',
    sectionRef: 'Sekcja 21.13',
    options: [
      { label: 'A', text: 'Przed wdrożeniem wyobrażamy sobie, że projekt zakończył się całkowitą klęską, i szukamy przyczyny tej klęski z wyprzedzeniem.', isCorrect: true },
      { label: 'B', text: 'Napisanie testamentu przed wyjazdem na wakacje.', isCorrect: false },
      { label: 'C', text: 'Oskarżenie zespołu o brak zaangażowania na samym początku.', isCorrect: false },
      { label: 'D', text: 'Rezygnacja z jakichkolwiek działań z lęku.', isCorrect: false }
    ],
    explanation: 'Pre-Mortem oszukuje Błąd Potwierdzenia i zmusza kory przedczołową do szukania plam ślepych w własnym planie.',
    keyTakeaway: 'Wyobraź sobie klęskę dzisiaj, by móc jej zapobiec jutro.'
  },
  {
    id: 18,
    question: 'Czym kończy się całościowa podróż przez Tom I, Tom II i Tom III dzieła „Anatomia Umysłu”?',
    topic: 'Synteza Całości',
    sectionRef: 'Sekcja 21.20',
    options: [
      { label: 'A', text: 'Zintegrowaniem wiedzy o biologii mózgu, relacjach społecznych i wolności do świadomego kształtowania własnego zachowania.', isCorrect: true },
      { label: 'B', text: 'Utratą wszelkiej nadziei na zmianę.', isCorrect: false },
      { label: 'C', text: 'Koniecznością przeczytania książki od nowa 10 razy.', isCorrect: false },
      { label: 'D', text: 'Otrzymaniem dyplomu doktora habilitowanego.', isCorrect: false }
    ],
    explanation: 'Zrozumienie mechanizmów psychicznych i relacyjnych daje wolność od bycia ślepym pionkiem i pozwala żyć w zgodzie z prawem i mądrością.',
    keyTakeaway: 'Nie jesteś już ślepy. Idź i żyj świadomie.'
  }
  { id: "deep-21.22", pageNumber:40, sectionNumber:"21.22", title:"Obserwacja nie jest tym samym co interpretacja", category:"teoria", readingTimeMinutes:8, paragraphs:["„Serce bije szybciej” jest obserwacją. „Boję się, bo ta osoba chce mnie upokorzyć” jest interpretacją. Obie informacje mogą być ważne, lecz mają inny status. Rozdzielenie ich zwiększa możliwość sprawdzenia własnego wniosku.","Przyspieszone tętno może towarzyszyć lękowi, ekscytacji, wysiłkowi albo złości. Jeśli od razu przypiszemy mu jedną przyczynę, możemy przestać szukać alternatyw.","Praktyczne ćwiczenie to trzy kolumny: „co zauważyłem”, „co z tego wnioskuję”, „co jeszcze mogłoby to oznaczać”. Taka struktura nie eliminuje błędów, ale pomaga zauważyć moment przejścia od danych do interpretacji."] },
  { id: "deep-21.23", pageNumber:41, sectionNumber:"21.23", title:"Pewność nie jest tym samym co trafność", category:"teoria", readingTimeMinutes:8, paragraphs:["Człowiek może być bardzo pewny odpowiedzi i jednocześnie się mylić. Może też być niepewny i mieć rację. Dlatego samo pytanie „jak bardzo jestem pewien?” nie wystarcza. Metapoznanie wymaga porównania pewności z późniejszym wynikiem.","Kalibracja polega na uczeniu się, jak wiarygodne są własne oceny pewności. Jeśli odpowiedzi oceniane na około 80% są poprawne w podobnym odsetku, pewność jest względnie dobrze skalibrowana. Jeśli przy tej samej pewności trafność jest dużo niższa, warto ostrożniej traktować własne odczucie.","Ta umiejętność dotyczy także diagnozowania własnych motywów, przewidywania reakcji innych i oceniania decyzji. Czasem najbardziej metapoznawczą odpowiedzią jest „mam za mało danych”."] },
  { id: "deep-21.24", pageNumber:42, sectionNumber:"21.24", title:"Introspekcja ma granice", category:"teoria", readingTimeMinutes:8, paragraphs:["Człowiek ma dostęp do wielu własnych myśli i uczuć, ale nie zawsze zna dokładne przyczyny zachowania. Możemy trafnie opisać wynik procesu, a błędnie wyjaśnić jego źródło. Ktoś może wiedzieć, że unika telefonu, ale przypisać to lenistwu, podczas gdy głównym problemem jest obawa przed trudną rozmową.","Introspekcja nie jest przez to bezużyteczna. Jest jednym ze źródeł informacji. Warto łączyć ją z obserwacją zachowania, informacją zwrotną i danymi z kolejnych sytuacji.","Metapoznanie nie powinno zamieniać się w niekończące się analizowanie. Celem jest poprawa decyzji i uczenia się, nie absolutna pewność co do wszystkich własnych motywów."] },
  { id: "deep-21.25", pageNumber:43, sectionNumber:"21.25", title:"Samomonitorowanie bez obsesyjnego analizowania", category:"teoria", readingTimeMinutes:8, paragraphs:["Monitorowanie siebie jest użyteczne, gdy prowadzi do lepszej informacji zwrotnej. Jeśli po każdym błędzie człowiek godzinami analizuje, dlaczego go popełnił, może uzyskać ogromną ilość interpretacji i niewiele nowych danych.","Lepsze jest pytanie, które można sprawdzić. Zamiast „dlaczego zawsze wszystko psuję?” można zapytać „w których sytuacjach najczęściej odkładam zadanie i co je poprzedza?”. Drugie pytanie prowadzi do obserwowalnych wzorców.","Po analizie potrzebny jest mały test. Jeśli podejrzewam, że brak jasnego pierwszego kroku powoduje odkładanie, mogę przez tydzień przygotowywać pierwszy krok poprzedniego wieczoru i sprawdzić, czy zachowanie się zmienia."] },
  { id: "deep-21.26", pageNumber:44, sectionNumber:"21.26", title:"Meta-warstwa: obserwować własny model siebie", category:"teoria", readingTimeMinutes:8, paragraphs:["Tożsamość, przekonania, samoocena i wartości są źródłami informacji o sobie, ale żaden z tych elementów nie musi być kompletną prawdą. Tożsamość się zmienia, przekonania mogą być aktualizowane, ocena siebie może być niedokładna, a deklarowane wartości mogą różnić się od codziennych wyborów.","Metapoznanie dodaje warstwę kontroli jakości. Zamiast tylko pytać „co myślę?”, można pytać „skąd to wiem?”, „jak pewny jestem?”, „jakie dane mogłyby mnie skorygować?”, „czy moje zachowanie pasuje do mojego opisu?” oraz „jaki mały test pozwoli to sprawdzić?”.","Nie chodzi o nieustanne podejrzewanie siebie. Chodzi o większą elastyczność poznawczą i traktowanie własnego modelu siebie jako narzędzia, które można ulepszać."] },
  { id:19, question:"Które rozróżnienie najlepiej pomaga analizować ten temat?", topic:"Świadomość siebie i metapoznanie", sectionRef:"Sekcja 21.22", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Rozdzielenie danych, interpretacji i warunków, w których dany opis jest trafny.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:20, question:"Co jest przykładem aktualizacji przekonania zamiast jego bezrefleksyjnej obrony?", topic:"Świadomość siebie i metapoznanie", sectionRef:"Sekcja 21.23", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Zmiana zdania tylko dlatego, że zrobiła to większość.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:21, question:"Które działanie dostarcza lepszej informacji o własnym funkcjonowaniu?", topic:"Świadomość siebie i metapoznanie", sectionRef:"Sekcja 21.24", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Porównanie kilku obserwacji z własną hipotezą i korekta jej zakresu.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:22, question:"Dlaczego kontekst jest ważny przy ocenie człowieka lub jego zachowania?", topic:"Świadomość siebie i metapoznanie", sectionRef:"Sekcja 21.25", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Uwzględnienie sytuacji zamiast wyciągania globalnego wniosku.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:23, question:"Które pytanie najlepiej ujawnia ograniczenie własnej pewności?", topic:"Świadomość siebie i metapoznanie", sectionRef:"Sekcja 21.26", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Sprawdzenie, jakie dane mogłyby pokazać, że mój wniosek jest błędny.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
];

export const caseStudiesChapterTwentyOne: CaseStudy[] = [
  {
    id: 'studium-21-1-autopilot-reaktywny',
    title: 'W niewoli automatycznych odruchów: Przypadek Marka na spotkaniach zarządu',
    subtitle: 'Niewydolność metapoznawcza, odruch kontrataku i wyłączanie autopilota',
    protagonist: 'Marek, 44 lata, dyrektor operacyjny',
    context: 'Marek na każdą uwagą krytyczną ze strony dyrektora finansowego reagował natychmiastowym, podniesionym głosem i agresywnym atakiem. Po spotkaniach żałował swojego zachowania, lecz w trakcie zebrania działał w całkowitej nieświadomości.',
    story: [
      'Marek posiadał wyuczony w dzieciństwie schemat obronny: „Najlepszą obroną jest atak”. Gdy słyszał jakąkolwiek uwagę dotyczącą jego budżetu, jego ciało migdałowate przejmowało kontrolę w 100 milisekund.',
      'Zanim jego kora przedczołowa zdołała zanalizować treść uwagi, Marek już przerywał rozmówcy, podnosił głos i wypominał mu dawne błędy. Działał w trybie pełnego Autopilota Życiowego.',
      'Brak metapoznania (brak monitorowania własnego stanu emocjonalnego w trakcie) sprawiał, że Marek po każdym spotkaniu czuł się wyczerpany i wstydził się swojego wybuchu, mówiąc: „Coś we mnie wstąpiło, nie kontrolowałem tego”.',
      'Wdrożenie techniki Wewnętrznego Obserwatora i metody STOP pozwoliło mu dostrzec pierwszy skok tętna i zaciskanie pięści ZANIM wypowiedział pierwsze słowo, dając mu ułamek sekundy na wybór świadomej odpowiedzi.'
    ],
    dialogue: [
      { speaker: 'Dyrektor Finansowy', text: 'Marek, te koszty w dziale B są o 15% wyższe niż zakładaliśmy. Musimy to przejrzeć.', subtext: 'Merytoryczna uwaga dotycząca wskaźników budżetowych.' },
      { speaker: 'Marek (Autopilot)', text: 'A sam ile wydałeś na te durne szkolenia?! Zawsze się do mnie przywalasz!', subtext: 'Automatyczny odruch kontrataku bez reflekscji metapoznawczej.' }
    ],
    decisionTaken: 'Marek wdrożył 5-sekundową pauzę oddechową przed każdą odpowiedzią na uwagi budżetowe.',
    whatProtagonistSaw: 'Atak na swoją osobę i zagrożenie dla swojego autorytetu.',
    whatWasMissed: 'Fakt, że dyrektor finansowy po prostu wykonywał swoją pracę, a jego uwaga była merytorycznym zaproszeniem do optymalizacji.',
    psychologicalAnalysis: {
      coreMechanism: 'Porwanie migdałowate (Amygdala Hijack) przy braku kontroli metapoznawczej (brak samomonitorowania).',
      cognitiveBiases: [
        { name: 'Błąd wrogości', description: 'Przypisywanie neutralnym uwagom intencji agresywnych.', impact: 'Niszczenie relacji zawodowych.' }
      ],
      defenseMechanisms: [
        { name: 'Aktor-obserwator bias', explanation: 'Tłumaczenie swojej agresji „prowokacją drugiego”, a agresji drugiego — jego złym charakterem.' }
      ],
      emotionalDynamic: 'Gwałtowny skok gniewu przechodzący w po-faktyczny wstyd i poczucie winy.'
    },
    decisionProcessAnalysis: {
      trigger: 'Uwaga budżetowa od dyrektora finansowego.',
      attentionFocus: 'Zacisk w klatce piersiowej i poczucie ataku.',
      interpretation: '„On mnie podważa przed wszystkimi, muszę go zniszczyć”.',
      emotion: 'Wściekłość, impulsywny gniew.',
      impulse: 'Wykrzyczenie oskarżeń.',
      action: 'Agresywna przerwa i atak werbalny.',
      consequence: 'Kryzys w zarządzie i opinia osoby niestabilnej emocjonalnie.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Inicjowanie reakcji walki drogą podkorową', activationState: 'Hiperaktywacja' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Brak aktywacji samomonitorowania (metapoznanie wyłączone)', activationState: 'Utrata kontroli' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Maksymalny skok wywołujący zacisk krtani i podniesienie głosu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Słowo „koszty” wywołuje impuls w ciele migdałowatym; reakcja werbalna następuje w 400 ms, zanim włączy się dlPFC.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Wyczulenie na zagrożenie statusu', description: 'Wyuczony odruch reagowania gniewem na każdą uwagą.', vulnerabilityExploited: 'Lęk przed odrzuceniem i niskie poczucie wartości.' }
      ],
      counterMeasures: [
        { step: '1. Kotwica Somatyczna (Protokół STOP)', script: 'Oparcie stóp o podłogę, podwójny wydech i zaobserwowanie ucisku w klatce bez wypowiadania słów.', rationale: 'Daje czas dlPFC na przejęcie kontroli.' }
      ]
    },
    alternativePath: 'Gdyby Marek wdrożył metapoznanie, odpowiedziałby spokojnie: „Przejrzyjmy te pozycje po zebraniu”, budując opinię opanowanego lidera.',
    readerQuestion: 'W jakich sytuacjach Twój autopilot przejmuje kontrolę, zanim zdążysz zadać sobie pytanie: „Co ja właściwie robię?”?',
    keyTakeaway: 'Metapoznanie to wstawienie klinu między impuls a reakcję. W tym ułamku sekundy leży Twoja wolność.'
  },
  {
    id: 'studium-21-2-paraliż-analityczny',
    title: 'W pułapce nadanalizy: Jak ruminacja zniszczyła projekt biznesowy Joanny',
    subtitle: 'Nadużycie procesów analitycznych, Paralysis by Analysis i powrót do działania',
    protagonist: 'Joanna, 35 lat, analityczka finansowa',
    context: 'Joanna miała otworzyć własną firmę doradczą. Spędziła 2 lata na analizowaniu każdego możliwego ryzyka, pisząc 150-stronicowy biznesplan, lecz nigdy nie wykonała ani jednego telefonu do klienta.',
    story: [
      'Joanna pomyliła metapoznanie z Rumiancją (jałową nadanalizą). Uważała, że jeśli przemyśli problem jeszcze raz z każdej strony, wyeliminuje ryzyko błędu do zera.',
      'Jej umysł produkował ciągłe pętle myślowe: „A co, jeśli inflacja wzrośnie?”, „A co, jeśli klient X nie zapłaci?”, „A co, jeśli przepisy się zmienią?”. Całą energię zużywała na symulacje w głowie.',
      'Po 2 latach przygotowań jej pomysł został wdrożony przez inną firmę, która po prostu zaczęła działać i korygowała błędy na bieżąco.',
      'Joanna zrozumiała, że jej nadanaliza nie była mądrością, lecz wyrafinowaną formą ucieczki przed lękiem przed porażką.'
    ],
    dialogue: [
      { speaker: 'Mąż', text: 'Aśka, masz już biznesplan na 150 stron. Kiedy zrobisz pierwszą stronę internetową?', subtext: 'Zderzenie jałowej analizy z potrzebą konkretnego działania.' },
      { speaker: 'Joanna', text: 'Nie rozumiesz, muszę jeszcze przeanalizować ryzyko podatkowe w scenariuszu C... Został mi tydzień analiz...', subtext: 'Ucieczka w pętlę nadanalizy przed ryzykiem rynkowym.' }
    ],
    decisionTaken: 'Joanna ustaliła limit czasu na analizę (maksymalnie 30 minut) i wdrożyła zasadę „testowania hipotez w realu”.',
    whatProtagonistSaw: 'Mądrość, skrupulatność i konieczność bezbłędnego przygotowania się.',
    whatWasMissed: 'Fakt, że rzeczywistość biznesowa jest nieprzewidywalna, a jedyną prawdziwą wiedzę dają rynkowe eksperymenty, a nie pętle myślowe.',
    psychologicalAnalysis: {
      coreMechanism: 'Ruminacja i Paralysis by Analysis.',
      cognitiveBiases: [
        { name: 'Iluzja kontroli myślowej', description: 'Nierealistyczne przekonanie, że rozmyślanie uchroni przed ryzykiem.', impact: 'Przewlekła prokrastynacja.' }
      ],
      defenseMechanisms: [
        { name: 'Ucieczka w analizę', explanation: 'Zastępowanie działania w realu pisaniem opracowań.' }
      ],
      emotionalDynamic: 'Przewlekłe napięcie lękowe przykryte płaszczem rzekomego profesjonalizmu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Domyślna Sieć Neuronalna', role: 'Jałowe kręcenie się w pętli myślowej', activationState: 'Hiperaktywacja' },
        { region: 'Kora przedczołowa', role: 'Przeciążenie pętli kontrolnej', activationState: 'Wyczerpanie' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Utrzymujący się niepokój antycypacyjny.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Myśl o pierwszej rozmowie z klientem wywołuje lęk.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kult perfekcyjnego przygotowania', description: 'Wmawianie, że brak bezbłędnego planu to nieodpowiedzialność.', vulnerabilityExploited: 'Lęk przed porażką.' }
      ],
      counterMeasures: [
        { step: '1. Zasada Testu Empirycznego', script: '„Wykonam 1 telefon i zbiorę realne dane zamiast tworzyć symulacje”.', rationale: 'Przełamuje pętlę ruminacyjną.' }
      ]
    },
    keyTakeaway: 'Odróżnij konstruktywne myślenie od jałowej ruminacji. Mądrość testuje hipotezy w działaniu.'
  },
  {
    id: 'studium-21-3-iluzja-wiedzy',
    title: 'Mówca bez pokrycia: Jak Piotr zderzył się ze Złudzeniem Głębokości Objaśniania',
    subtitle: 'Illusion of Explanatory Depth, test prostego wyjaśnienia i naukowa pokora',
    protagonist: 'Piotr, 28 lat, popularyzator nauki na YouTube',
    context: 'Piotr przeczytał nagłówki kilku artykułów o fizyce kwantowej i nagrał film, w którym z wielką pewnością siebie tłumaczył mechanizmy splątania. Kiedy w komentarzach pojawił się profesor fizyki z konkretnymi pytaniami, Piotr kompromitująco zamilkł.',
    story: [
      'Piotr padł ofiarą Złudzenia Głębokości Objaśniania (Illusion of Explanatory Depth). Ponieważ przeczytał łatwo napisany artykuł popularnonaukowy, wydawało mu się, że rozumie mechanizm.',
      'Jego umysł pomylił płynność czytania (Fluency) z rzeczywistym opanowaniem wiedzy. Piotr nie zadał sobie metapoznawczego pytania: „Czy potrafię narysować ten proces i odpowiedzieć na pytanie O DLACZEGO?”.',
      'Krytyka ze strony profesora była dla niego zimnym prysznicem. Piotr zrezygnował z udawania eksperta i zaczął stosować Technikę Feynmana — próbę pisemnego wyjaśnienia pojęcia tak prosto, by zrozumiał je 10-latek.'
    ],
    dialogue: [
      { speaker: 'Profesor (w komentarzu)', text: 'Panie Piotrze, w minucie 4:20 pomylił Pan stan stacjonarny z nakładaniem fal. Proszę podać równanie, na którym Pan bazuje.', subtext: 'Twardy test merytoryczny odsłaniający brak fundamentów.' },
      { speaker: 'Piotr (w myśli)', text: 'Boże... myślałem, że to rozumiem... przecież to brzmiało tak prosto w artykule...', subtext: 'Pęknięcie złudzenia wiedzy i zderzenie z rzeczywistością.' }
    ],
    decisionTaken: 'Piotr usunął nierzetelny film i wprowadził wymóg konsultowania skryptów z ekspertami akademickimi.',
    whatProtagonistSaw: 'Własną erudycję i łatwość wypowiedzi na bazie powierzchownych lektur.',
    whatWasMissed: 'Fakt, że powierzchowna znajomość pojęć nie jest równoznaczna z rozumieniem głębokiego mechanizmu.',
    psychologicalAnalysis: {
      coreMechanism: 'Illusion of Explanatory Depth i Błąd Płynności (Fluency Bias).',
      cognitiveBiases: [
        { name: 'Błąd ponadprzeciętności wiedzy', description: 'Mylenie przeczytania tekstu z opanowaniem rzemiosła.', impact: 'Skompromitowanie publiczne.' }
      ],
      defenseMechanisms: [
        { name: 'Racjonalizacja ignorancji', explanation: 'Tłumaczenie błędu „skrótem myślowym dla widzów”.' }
      ],
      emotionalDynamic: 'Nierealistyczna pewność siebie przechodząca w ostry wstyd.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora obwodu', role: 'Rejestracja porażki poznawczej', activationState: 'Hiperaktywacja po komentarzu' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Konieczność rzetelnej weryfikacji faktów', activationState: 'Aktywacja' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Gwałtowny spadek poziomu po krytyce.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Komentarz profesora wywołuje wstyd i opadnięcie pewności.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Pop-naukowy błąd spłycenia', description: 'Sprzedawanie złożonych zjawisk w powierzchownych pigułkach.', vulnerabilityExploited: 'Leniwy mózg szukający prostych odpowiedzi.' }
      ],
      counterMeasures: [
        { step: '1. Technika Feynmana', script: 'Pisz wyjaśnienia tak prosto, by zrozumiał je 10-latek — luki ujawnią się same.', rationale: 'Testuje prawdziwą głębię wiedzy.' }
      ]
    },
    keyTakeaway: 'Nie myl płynności czytania z mądrością. Sprawdzaj swoją wiedzę w konfrontacji z twardymi mechanizmami.'
  },
  {
    id: 'studium-21-4-decentryzacja-mysli',
    title: 'Wolność od własnego monologu: Jak Decentryzacja uratowała Karola przed atakiem paniki',
    subtitle: 'Cognitive Defusion, patrzenie na myśli jak na chmury i odzyskiwanie spokoju',
    protagonist: 'Karol, 40 lat, architekt',
    context: 'Karol podczas ważnej prezentacji odczuł nagłe ukłucie w klatce piersiowej. W jego umyśle natychmiast pojawiła się myśl: „To zawał, zaraz umrę na oczach klientów”.',
    story: [
      'Dawny Karol dałby się wciągnąć w tę myśl bezreszty (Fuzja Poznawcza). Zareagowałby paniką, przerwaniem prezentacji i wezwaniem karetki.',
      'Tym razem Karol zastosował technikę Decentryzacji (Defusion). Zamiast utożsamić się z myślą, powiedział sobie w duchu: „Zauważam, że mój umysł właśnie wygenerował myśl o zawale”.',
      'Spojrzał na tę myśl z dystansu, jak na napis na ekranie. Zauważył, że serce bije szybciej z powodu stresu, ale oddycha normalnie. Spokojnie kontynuował wypowiedź, a po 2 minutach myśl o zawale rozpłynęła się.'
    ],
    dialogue: [
      { speaker: 'Umysł Karola (Myśl)', text: 'To jest zawał! Zaraz zemdlejesz i umrzesz przed tymi ludźmi!', subtext: 'Automatyczny, katastroficzny odruch lękowy.' },
      { speaker: 'Karol (Wewnętrzny Obserwator)', text: 'Dziękuję umyśle za tę hipotezę. Zauważam cię, ale teraz wracam do prezentacji projektu.', subtext: 'Decentryzacja poznawcza i brak fuzji z myślą.' }
    ],
    decisionTaken: 'Karol dokończył prezentację bez wpadania w panikę i podpisał kontrakt na projekt.',
    whatProtagonistSaw: 'Myśl jako niepodważalny wyrok i zagrożenie biologiczne.',
    whatWasMissed: 'Fakt, że myśl jest jedynie zdarzeniem elektrycznym w mózgu, które nie musi mieć nic wspólnego z rzeczywistością.',
    psychologicalAnalysis: {
      coreMechanism: 'Decentryzacja Poznawcza (Cognitive Defusion) i zdystansowanie od lęku.',
      cognitiveBiases: [
        { name: 'Myślenie katastroficzne', description: 'Mylein ukłucia z zagrożeniem życia.', impact: 'Próba przerwania wystąpienia.' }
      ],
      defenseMechanisms: [
        { name: 'Obserwacja bez fuzji', explanation: 'Traktowanie myśli jako zdarzenia umysłowego, a nie jako faktu.' }
      ],
      emotionalDynamic: 'Przejście od zagrażającej paniki do głębokiego opanowania.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przyśrodkowa kora przedczołowa', role: 'Świadoma obserwacja własnych stanów bez fuzji', activationState: 'Utrzymanie kontroli' },
        { region: 'Ciało migdałowate', role: 'Inicjowanie paniki', activationState: 'Szybkie wygaszenie' }
      ],
      neurotransmitters: [
        { name: 'GABA', roleInScenario: 'Wzrost hamowania przekaźnictwa lękowego po zastosowaniu decentryzacji.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Ukłucie wywołuje myśl; w 300 ms włącza się Obserwator i gasi alarm.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Fuzja myśli z rzeczywistością', description: 'Nawyk traktowania każdej myśli jako faktu.', vulnerabilityExploited: 'Lęk przed śmiercią i utratą kontroli.' }
      ],
      counterMeasures: [
        { step: '1. Fraza Defuzyjna', script: '„Zauważam, że mam myśl, że...”.', rationale: 'Rozdziela podmiot od treści myśli.' }
      ]
    },
    keyTakeaway: 'Nie jesteś swoimi myślami — jesteś świadomością, która je zauważa. Dystans daje wolność.'
  },
  {
    id: 'studium-21-5-pre-mortem-biznes',
    title: 'Szczepionka na bezkrytyczny optymizm: Analiza Pre-Mortem w projekcie Marty',
    subtitle: 'Wykrywanie plam ślepych przed wdrożeniem i oszukiwanie Błędu Potwierdzenia',
    protagonist: 'Marta, 42 lata, dyrektorka ds. innowacji',
    context: 'Marta przygotowywała wdrożenie nowego systemu CRM w całej firmie. Wszyscy w zespole byli zachwyceni projektem i panował hurraoptymizm.',
    story: [
      'Marta wiedziała, że grupy mają tendencję do myślenia grupowego (Groupthink) i ignorowania ryzyk. Zorganizowała sesję Pre-Mortem Analysis.',
      'Zebrała zespół i powiedziała: „Wyobraźmy sobie, że minął rok. Nasz projekt CRM okazał się potworną, drogową katastrofą. Firma straciła miliony. Wypiszcie na kartkach 5 powodów, dlaczego do tego doszło”.',
      'Dzięki tej zmianie perspektywy zespół bez lęku wskazał kluczowe plamy ślepe: brak przeszkolenia pracowników liniowych i niekompatybilność z dawnym oprogramowaniem. Marta wprowadziła poprawki, zapobiegając realnej katastrofie.'
    ],
    dialogue: [
      { speaker: 'Marta', text: 'Udawajmy, że jesteśmy po katastrofie tego projektu. Dlaczego polegliśmy?', subtext: 'Uruchomienie techniki Pre-Mortem i obejście Błędu Potwierdzenia.' },
      { speaker: 'Inżynier', text: 'Szczerze? Jeśli nie zrobimy małych warsztatów dla magazynu, oni nie będą wpisywać danych i cały system leży.', subtext: 'Ujawnienie krytycznej plamy ślepej dzięki nowej ramie pytania.' }
    ],
    decisionTaken: 'Marta opóźniła start o 2 tygodnie, by przeprowadzić warsztaty dla magazynu, co zagwarantowało sukces wdrożenia.',
    whatProtagonistSaw: 'Niezbędność celowego szukania luk w optymistycznych planach.',
    whatWasMissed: 'Fakt, że bez intencjonalnego pytania o klęskę ludzie milczą na temat ryzyk z lęku przed wyłamaniem się z grupy.',
    psychologicalAnalysis: {
      coreMechanism: 'Analiza Pre-Mortem i przełamywanie Groupthink.',
      cognitiveBiases: [
        { name: 'Błąd optymizmu', description: 'Nierealistyczne przekonanie, że własny projekt nie napotka przeszkód.', impact: 'Ignorowanie ryzyk.' }
      ],
      defenseMechanisms: [
        { name: 'Kontrolowana symulacja porażki', explanation: 'Bezpieczne przećwiczenie scenariusza klęski przed wdrożeniem.' }
      ],
      emotionalDynamic: 'Przejście od ślepego entuzjazmu do dojrzałego, zabezpieczonego planowania.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Symulacje perspektywiczne i analiza ryzyk', activationState: 'Uruchomienie krytycznego myślenia' },
        { region: 'Przednia kora obwodu', role: 'Wykrywanie potencjalnych błędów proceduralnych', activationState: 'Podwyższona czujność' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Konstruktywna czujność ukierunkowana na poprawki.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Pytanie Pre-Mortem zdejmuje presję konformizmu z uczestników.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Presja hurraoptymizmu', description: 'Tępienie głosów krytycznych jako „braku zaangażowania”.', vulnerabilityExploited: 'Potrzeba przynależności zespołu.' }
      ],
      counterMeasures: [
        { step: '1. Gra w Klęskę (Pre-Mortem)', script: 'Prośba o oskarżenie projektu o porażkę w fikcyjnej przyszłości.', rationale: 'Legitymizuje krytyczne myślenie.' }
      ]
    },
    keyTakeaway: 'Wyobraź sobie porażkę dzisiaj, by móc jej zapobiec jutro. Mądrość szuka ryzyk wcześniej.'
  },
  {
    id: 'studium-21-6-halt-i-decyzje',
    title: 'Głód i złość za kierownicą: Jak wskaźnik HALT uratował małżeństwo Pawła',
    subtitle: 'Biologiczne uwarunkowania metapoznania i zasada powstrzymania się od wyroków w wyczerpaniu',
    protagonist: 'Paweł, 38 lat, przedstawiciel handlowy',
    context: 'Paweł po 10 godzinach jazdy samochodem w korkach, głodny i wyczerpany, wracał do domu. Kiedy żona zapytała go o zakup mleka, Paweł poczuł potężną falę wściekłości i chęć wyrzucenia z siebie oskarżeń o „brak szacunku”.',
    story: [
      'Paweł na szczęście zastosował wskaźnik HALT (Hungry, Angry, Lonely, Tired). Jego metapoznanie wysłało sygnał: „Twój poziom glukozy wynosi zero, Twój mózg jest wyczerpany. Ta wściekłość to nie stan Twojego małżeństwa — to Twój głód”.',
      'Paweł milczał przez 3 minuty, wszedł do kuchni, zjadł banana i wypił szklankę wody.',
      'Po 10 minutach, gdy glukoza dotarła do kory przedczołowej, złość całkowicie opadła. Paweł przytulił żonę i powiedział: „Przepraszam, byłem potwornie głodny i zmęczony. Już idę po to mleko”.'
    ],
    dialogue: [
      { speaker: 'Żona', text: 'Paweł, kupiłeś to mleko, o które prosiłam?', subtext: 'Zwykłe, neutralne pytanie domowe.' },
      { speaker: 'Paweł (Wewnętrzny Obserwator)', text: 'Uwaga! Jesteś głodny i wyczerpany (HALT). Nie odzywaj się, zanim czegoś nie zjesz.', subtext: 'Zaaplikowanie metapoznawczego hamulca biologicznego.' }
    ],
    decisionTaken: 'Paweł powstrzymał się od wybuchu gniewu i zjadł posiłek przed podjęciem rozmowy.',
    whatProtagonistSaw: 'Wykrycie fizjologicznych źródeł własnego rozdrażnienia.',
    whatWasMissed: 'Fakt, że zmęczenie biologiczne jest najczęstszym generatorem fałszywych konfliktów relacyjnych.',
    psychologicalAnalysis: {
      coreMechanism: 'Interocepcja i Skaner Biologiczny HALT.',
      cognitiveBiases: [
        { name: 'Personalizacja wyczerpania', description: 'Przypisywanie złości zachowaniu partnera zamiast własnemu głodowi.', impact: 'Awantury domowe.' }
      ],
      defenseMechanisms: [
        { name: 'Pauza fizjologiczna', explanation: 'Uzupełnienie glukozy przed pójściem w konfrontację.' }
      ],
      emotionalDynamic: 'Gwałtowny impuls irytacji wygaszony świadomym posiłkiem.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia wyspa', role: 'Rejestracja wewnętrznych stanów ciała (głód, zmęczenie)', activationState: 'Skanowanie stanu' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Powistrzymanie wybuchu gniewu', activationState: 'Przejęcie kontroli po dopływie glukozy' }
      ],
      neurotransmitters: [
        { name: 'Glukoza i Serotonina', roleInScenario: 'Spadek wywołuje agresję; posiłek przywraca stabilność.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Pytanie o mleko wywołuje złość w ciele migdałowatym; pauza ratuje relację.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Biologiczna ślepota na zmęczenie', description: 'Niezauważanie wpływu głodu na poziom cierpliwości.', vulnerabilityExploited: 'Spadek glukozy w korze przedczołowej.' }
      ],
      counterMeasures: [
        { step: '1. Skan HALT przed Rozmową', script: 'Sprawdź czy nie jesteś głodny/zmęczony zanim powiesz przykre słowo.', rationale: 'Chroni relację przed skutkami wyczerpania.' }
      ]
    },
    keyTakeaway: 'Nie rozwiązuj problemów małżeńskich na głodnym mózgu. Najpierw nakarm organizm, potem rozmawiaj.'
  },
  {
    id: 'studium-21-7-wielka-synteza',
    title: 'Świadomy architekt własnego życia: Przypadek Ewy po przejściu trzech tomów',
    subtitle: 'Zintegrowanie wiedzy o umyśle, relacjach i autonomii w jedną spójną praktykę życiową',
    protagonist: 'Ewa, 41 lat, menedżerka i matka dwóch dorastających synów',
    context: 'Ewa przed przeczytaniem całej serii żyła w ciągłym poczuciu winy, konfliktach relacyjnych i paraliżu przed oceną. Po przepracowaniu materiału Tomu I, II i III stała się człowiekiem głęboko osadzonym w wewnętrznej autonomii.',
    story: [
      'Ewa zrozumiała biologię swojego stresu (Tom I), rozbroiła manipulacje i konflikty w relacjach (Tom II) oraz zbudowała autonomiczną tożsamość opartą na własnych wartościach (Tom III).',
      'Kiedy dzisiaj napotyka trudną sytuację w pracy czy w domu, jej wewnętrzny Obserwator uśmiecha się z czułością i mówi: „Poznaję cię. To błąd atrybucji. To odruch obronny. Weź oddech. Zastosuj pauzę. Wybierz mądrość”.',
      'Ewa nie stała się robotem bez emocji. Nadal odczuwa lęk, złość czy smutek. Różnica polega na tym, że nie jest już ich ślepą niewolnicą. Jest świadomym architektem swojego doświadczenia.'
    ],
    dialogue: [
      { speaker: 'Syn', text: 'Mamo, znowu mi marudzić będziesz o te ocenach?', subtext: 'Trudny bodziec relacyjny i próba prowokacji.' },
      { speaker: 'Ewa', text: 'Synu, zależy mi na twojej przyszłości, ale to twoje życie i twoje decyzje. Jestem tu, gdybyś potrzebował pomocy.', subtext: 'Świadoma postawa autonomii, wsparcia i braku przemocowej kontroli.' }
    ],
    decisionTaken: 'Ewa stworzyła swój Osobisty Kompas Nawigacyjny i żyje w głębokiej harmonii ze sobą i otoczeniem.',
    whatProtagonistSaw: 'Życie jako fascynujące pole do praktykowania mądrości i rozwoju.',
    whatWasMissed: 'Fakt, że największą wolnością człowieka jest wolność od własnych nieuświadomionych automatyzmów.',
    psychologicalAnalysis: {
      coreMechanism: 'Zintegrowana Metapoznawcza Autonomia i Wolność od Automatyzmów.',
      cognitiveBiases: [
        { name: 'Świadomość własnych stronniczości', description: 'Wyłapywanie własnych błędów poznawczych w czasie rzeczywistym.', impact: 'Spokój i wysoka sprawność decyzji.' }
      ],
      defenseMechanisms: [
        { name: 'Świadomy wybór reakcji', explanation: 'Zastąpienie odruchów podkorowych dojrzałą samoregulacją.' }
      ],
      emotionalDynamic: 'Głęboka spójność wewnętrzna, życzliwość dla siebie i stabilne poczucie wolności.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Kora przedczołowa (dlPFC, mPFC, vmPFC)', role: 'Pełna integracja kontroli wykonawczej i samowiedzy', activationState: 'Harmonijna, wysoka sprawność' },
        { region: 'Ciało migdałowate', role: 'Wygaszona nadreaktywność', activationState: 'Optymalny poziom czujności' }
      ],
      neurotransmitters: [
        { name: 'GABA, Serotonina, Dopamina', roleInScenario: 'Zbalansowany profil neurochemiczny dający spokój i motywację.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Bodziec dociera do amygdali, lecz w 200 ms kora przedczołowa wybiera świadomą pauzę.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Manipulacje otoczenia', description: 'Próby wywołania poczucia winy lub lęku.', vulnerabilityExploited: 'Odmowa ulegania dzięki silnej autonomii.' }
      ],
      counterMeasures: [
        { step: '1. Osobista Mapa Systemowa', script: 'Kierowanie się własnymi wartościami przy zachowaniu szacunku do innych.', rationale: 'Daje pełną odporność psychologiczną.' }
      ]
    },
    keyTakeaway: 'Zrozumienie własnego umysłu daje najwyższą wolność — wolność świadomego tworzenia własnego losu.'
  }
];

export const selfExercisesChapterTwentyOne: SelfExercise[] = [
  {
    id: 'cwiczenie-21-1-protokol-stop',
    title: 'Trening Świadomej Pauzy: Protokół STOP',
    subtitle: 'Wstawianie klina między bodziec a automatyczną reakcję',
    objective: 'Opanowanie 4-etapowego nawyku zatrzymywania się w chwilach emocjonalnego wzburzenia.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Aktywacja dlPFC w celu zahamowania wyładowań w ciele migdałowatym i odzyskania kontroli wykonawczej.',
    steps: [
      {
        stepNumber: 1,
        title: 'S - Stop (Zatrzymaj się)',
        instruction: 'W chwili skoku emocji zamroź na 3 sekundy mowę i ruchy ciała.',
        promptText: 'Moja kotwica zatrzymania:',
        placeholder: 'Zatrzymuję mowę, opieram stopy na podłodze.'
      },
      {
        stepNumber: 2,
        title: 'T - Take a breath (Weź oddech)',
        instruction: 'Wykonaj podwójny wdech nosem i długi, spokojny wydech ustami (oddech fizjologiczny).',
        promptText: 'Reakcja oddechowa:',
        placeholder: 'Robię 2 głębokie wydechy, wyciszając tętno.'
      },
      {
        stepNumber: 3,
        title: 'O - Observe (Zaobserwuj)',
        instruction: 'Zauważ bez oceny: Co dzieje się w moim ciele? Jakie myśli biegną przez głowę?',
        promptText: 'Moje obserwacje:',
        placeholder: 'Czuję napięcie w żuchwie i myśl: „On chce mnie oszukać”.'
      },
      {
        stepNumber: 4,
        title: 'P - Proceed (Przejdź do działania)',
        instruction: 'Wybierz mądrą, autonomiczną reakcję zgodną z Twoimi wartościami.',
        promptText: 'Moja świadoma reakcja:',
        placeholder: 'Mówię spokojnym tonem: „Chcę dokładnie zrozumieć Twój punkt widzenia”.'
      }
    ],
    reflectionQuestions: [
      'O ile zmienia się jakość Twoich rozmów, gdy dajesz sobie 5 sekund pauzy przed odpowiedzią?'
    ]
  },
  {
    id: 'cwiczenie-21-2-decentryzacja-mysli',
    title: 'Warsztat Decentryzacji Poznawczej (Cognitive Defusion)',
    subtitle: 'Patrzenie na myśli jak na chmury na niebie',
    objective: 'Osłabienie fuzji z katastroficznymi myślami i zmiana stosunku do własnego monologu wewnętrznego.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Zmiana perspektywy w sieci DMN poprzez aktywację przyśrodkowej kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zapis myśli stresogennej',
        instruction: 'Zapisz myśl, która Cię dokucza w formacie: „Jestem [X]” lub „Musi się stać [Y]”.',
        promptText: 'Trudna myśl:',
        placeholder: '„Na pewno zepsuję ten projekt i stracę pracę”'
      },
      {
        stepNumber: 2,
        title: 'Przekształcenie na perspektywę obserwatora',
        instruction: 'Przepisz to zdanie dodając przed nim frazę: „Mam myśl, że...”',
        promptText: 'Zdanie z dystansem:',
        placeholder: '„Mam myśl, że zepsuję ten projekt i stracę pracę”'
      },
      {
        stepNumber: 3,
        title: 'Dodanie poziomu metapoznawczego',
        instruction: 'Przepisz zdanie dodając frazę: „Zauważam, że mój umysł produkuje myśl, że...”',
        promptText: 'Pełny dystans metapoznawczy:',
        placeholder: '„Zauważam, że mój umysł właśnie produkuję myśl, że zepsuję ten projekt”'
      }
    ],
    reflectionQuestions: [
      'Jak zmienia się ciężar i ładunek emocjonalny tej myśli, gdy patrzysz na nią z poziomu Obserwatora?'
    ]
  },
  {
    id: 'cwiczenie-21-3-skad-wiem-ze-wiem',
    title: 'Test Skąd Wiem, Że Wiem? (Illusion of Knowledge Audit)',
    subtitle: 'Prześwietlanie własnej wiedzy i wyłapywanie plam ślepych',
    objective: 'Weryfikacja rzetelności opanowania kluczowych pojęć i przekonań.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Testowanie pamięci deklaratywnej i osłabianie błędu płynności (fluency bias) w dlPFC.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór pojęcia / tezy',
        instruction: 'Wybierz temat, o którym uważasz, że masz głęboką wiedzę (np. jak działa silnik, jak działa inflacja).',
        promptText: 'Temat testowy:',
        placeholder: 'Jak działa sztuczna inteligencja oparta na sieciach neuronowych...'
      },
      {
        stepNumber: 2,
        title: 'Prosty opis mechanizmu (Technika Feynmana)',
        instruction: 'Napisz krok po kroku prosty opis mechanizmu od zera, bez używania trudnego żargonu.',
        promptText: 'Moje wyjaśnienie od zera:',
        placeholder: 'Sieć neuronowa przyjmuje liczby, mnoży je przez wagi, dodaje do nich wartość i sprawdza wynik...'
      },
      {
        stepNumber: 3,
        title: 'Identiakcja luki',
        instruction: 'Wskazać punkt, w którym Twoje wyjaśnienie staje się ogólnikowe („i potem dzieje się magia”). To jest Twoja plama ślepa.',
        promptText: 'Moja wyłapana luka:',
        placeholder: 'Nie potrafię dokładnie wyjaśnić, jak działa algorytm wstecznej propagacji błędu.'
      }
    ],
    reflectionQuestions: [
      'O ile częściej warto przyznawać się do niewiedzy, by móc zdobyć prawdziwą mądrość?'
    ]
  },
  {
    id: 'cwiczenie-21-4-analiza-pre-mortem',
    title: 'Warsztat Analizy Pre-Mortem przed Wielką Decyzją',
    subtitle: 'Szczepionka na Błąd Potwierdzenia i Groupthink',
    objective: 'Wyobrażenie sobie porażki projektu z wyprzedzeniem celem identyfikacji ukrytych ryzyk.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Celowa aktywacja symulacji perspektywicznych w kory przedczołowej z wyłączeniem optymistycznych stronniczości.',
    steps: [
      {
        stepNumber: 1,
        title: 'Opis planowanego projektu',
        instruction: 'Zapisz cel lub projekt, który zamierzasz wdrożyć.',
        promptText: 'Mój projekt:',
        placeholder: 'Zmiana pracy i przejście do nowej branży...'
      },
      {
        stepNumber: 2,
        title: 'Scenariusz katastrofy z przyszłości',
        instruction: 'Wyobraź sobie, że minął rok i projekt zakończył się całkowitą klęską. Wypisz 4 konkretne przyczyny tej klęski.',
        promptText: 'Dlaczego ponieśliśmy klęskę (patrząc z przyszłości):',
        placeholder: '1. Brak poduszki finansowej na 6 miesięcy. 2. Brak znajomości branży. 3. Słaby networking. 4. Brak dyscypliny.'
      },
      {
        stepNumber: 3,
        title: 'Działania prewencyjne dziś',
        instruction: 'Dla każdej przyczyny zaplanuj jedno konkretne działanie zabezpieczające już dzisiaj.',
        promptText: 'Moje zabezpieczenia:',
        placeholder: '1. Oszczędzam 6-miesięczną poduszkę przed odejściem. 2. Zapisuję się na kurs. 3. Idę na 3 wydarzenia branżowe.'
      }
    ],
    reflectionQuestions: [
      'Jakie to uczucie przechytrzyć własny Błąd Potwierdzenia i zapobiec porażce, zanim do niej dojdzie?'
    ]
  },
  {
    id: 'cwiczenie-21-5-halt-praktyka',
    title: 'Skaner Stanu Biologicznego HALT',
    subtitle: 'Chrona decyzji przed fałszywymi emocjami wynikającymi ze zmęczenia',
    objective: 'Wyuczenie nawyku sprawdzania stanu organizmu przed podejmowaniem trudnych rozmów.',
    durationMinutes: 10,
    neuroScientificFoundation: 'Skanowanie interoceptywne w wyspie przedniej i wstrzymanie pochopnych reakcji w dlPFC.',
    steps: [
      {
        stepNumber: 1,
        title: 'Skan 4 wskaźników HALT',
        instruction: 'Oceń w skali 1-10: H (Hungry - Czy jestem głodny?), A (Angry - Czy jestem wzburzony?), L (Lonely - Czy czuję samotność?), T (Tired - Czy jestem zmęczony?).',
        promptText: 'Mój dzisiejszy stan HALT:',
        placeholder: 'Głód: 8/10, Złość: 4/10, Samotność: 2/10, Zmęczenie: 9/10 (Stan wysokiego ryzyka!)'
      },
      {
        stepNumber: 2,
        title: 'Decyzja o wstrzymaniu',
        instruction: 'Jeśli którykolwiek wskaźnik przekracza 7/10, powstrzymaj się od trudnych ustaleń i najpierw zrealizuj potrzebę biologiczną.',
        promptText: 'Moja akcja regeneracyjna:',
        placeholder: 'Przekładam trudną rozmowę z partnerem na jutro rano po śniadaniu. Dzisiaj idę spać o 22:00.'
      }
    ],
    reflectionQuestions: [
      'Ile niepotrzebnych kłótni w Twoim życiu wynikało po prostu ze zmęczenia i spadku glukozy we krwi?'
    ]
  },
  {
    id: 'cwiczenie-21-6-dziennik-metapoznawczy',
    title: 'Dziennik Refleksji Metapoznawczej',
    subtitle: 'Budowanie własnego modelu procesów myślowych',
    objective: 'Codzienna rejestracja jakości własnych decyzji, wyłapanych błędów i stanów emocjonalnych.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Rozwijanie neuroplastycznych połączeń w kory przedczołowej odpowiedzialnych za samowiedzę.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zapis kluczowej decyzji dnia',
        instruction: 'Zapisz jedną ważną decyzję podjętą w ciągu dnia.',
        promptText: 'Moja decyzja:',
        placeholder: 'Odwet na maila z żądaniem rabatu...'
      },
      {
        stepNumber: 2,
        title: 'Audyt procesu myślowego',
        instruction: 'Jakie emocje i błędy poznawcze próbowały wpłynąć na tę decyzję? Jak poraziłeś sobie z ich wyhamowaniem?',
        promptText: 'Moje obserwacje procesu:',
        placeholder: 'Chciałem odpisać agresywnie (złość), ale zastosowałem STOP, poczekałem 2 godziny i dałem ofertę merytoryczną.'
      }
    ],
    reflectionQuestions: [
      'Jak stała praktyka pisania dziennika metapoznawczego zmienia Twoją odporność na stres społeczny?'
    ]
  },
  {
    id: 'cwiczenie-21-7-mapa-systemowa-synteza',
    title: 'Wielka Synteza: Osobista Mapa Systemowa Autonomii',
    subtitle: 'Zintegrowanie wiedzy z Tomu I, Tomu II i Tomu III w spójny dokument życiowy',
    objective: 'Stworzenie indywidualnego operacyjnego kompasu samoregulacji poznawczo-społecznej.',
    durationMinutes: 40,
    neuroScientificFoundation: 'Głęboka integracja narracyjna w mPFC łożąca podwaliny pod dojrzałą rezyliencję i autonomię.',
    steps: [
      {
        stepNumber: 1,
        title: 'Filar I: Moje pułapki umysłu (Tom I)',
        instruction: 'Wypisz swoje 2 najczęstsze błędy poznawcze z Tomu I (np. Błąd Potwierdzenia, Tunelowanie uwagi) i ich antidotum.',
        promptText: 'Moje pułapki i antidota:',
        placeholder: 'Confirmation bias (antidotum: szukam kontrdowodów); Tunelowanie uwagi (antidotum: poszerzam perspektywę).'
      },
      {
        stepNumber: 2,
        title: 'Filar II: Moja dynamika relacyjna (Tom II)',
        instruction: 'Wypisz swój główny nawyk relacyjny w konflikcie z Tomu II i swoje nowe asertywne zachowanie.',
        promptText: 'Moje relacje i granice:',
        placeholder: 'Nawyk: wycofanie (stonewalling); Nowe zachowanie: zapowiedź pauzy i powrót do rozmowy po 15 min.'
      },
      {
        stepNumber: 3,
        title: 'Filar III: Moja tożsamość i wartości (Tom III)',
        instruction: 'Wypisz swoją Deklarację Tożsamości Procesowej i TOP 3 wartości nienegocjowalne.',
        promptText: 'Moja tożsamość i kompas:',
        placeholder: 'Deklaracja: Jestem człowiekiem rozwijającym się. Wartości: Prawda, Zdrowie, Wolność.'
      }
    ],
    reflectionQuestions: [
      'O ile bardziej świadomym, spokojnym i autonomicznym człowiekiem stałeś się po przejściu tej drogi?',
      'Jak zamierzasz wykorzystać tę wiedzę do budowania dobra wokół siebie każdego dnia?'
    ]
  }
  {id:"deep-21-ex-a",title:"Analiza przypadku krok po kroku",subtitle:"Od automatycznej oceny do sprawdzalnej hipotezy",objective:"Nauczyć się oddzielać dane od interpretacji i planować następny krok.",durationMinutes:18,neuroScientificFoundation:"Ćwiczenie rozwija metapoznawcze monitorowanie własnych ocen; nie zakłada jednego mechanizmu neuronalnego.",steps:[{stepNumber:1,title:"Zapisz konkretną sytuację.",instruction:"Zapisz konkretną sytuację.",promptText:"Co dokładnie się wydarzyło?",placeholder:"Zapisz odpowiedź tutaj."},{stepNumber:2,title:"Oddziel obserwowalne fakty od własnego wniosku.",instruction:"Oddziel obserwowalne fakty od własnego wniosku.",promptText:"Co dopowiedziałem?",placeholder:"Zapisz odpowiedź tutaj."},{stepNumber:3,title:"Wypisz dwa alternatywne wyjaśnienia.",instruction:"Wypisz dwa alternatywne wyjaśnienia.",promptText:"Co jeszcze może być prawdą?",placeholder:"Zapisz odpowiedź tutaj."},{stepNumber:4,title:"Zaplanuj mały test lub działanie.",instruction:"Zaplanuj mały test lub działanie.",promptText:"Co mogę sprawdzić?",placeholder:"Zapisz odpowiedź tutaj."}],reflectionQuestions:["Co było faktem?","Który wniosek był najbardziej niepewny?","Jak zmienił się plan działania?"]},
  {id:"deep-21-ex-b",title:"Eksperyment z własnym opisem",subtitle:"Sprawdź, czy opis siebie przewiduje zachowanie",objective:"Porównać etykietę lub przekonanie z rzeczywistymi danymi z kilku sytuacji.",durationMinutes:20,neuroScientificFoundation:"Ćwiczenie wykorzystuje obserwację zachowania i aktualizację modelu siebie na podstawie powtarzających się danych.",steps:[{stepNumber:1,title:"Wybierz jedno zdanie o sobie.",instruction:"Wybierz jedno zdanie o sobie.",promptText:"Jak brzmi mój obecny opis?",placeholder:"Zapisz obserwacje."},{stepNumber:2,title:"Przez tydzień zbieraj konkretne przykłady za i przeciw.",instruction:"Przez tydzień zbieraj konkretne przykłady za i przeciw.",promptText:"Jakie mam dane?",placeholder:"Zapisz obserwacje."},{stepNumber:3,title:"Zaznacz warunki, w których opis działa.",instruction:"Zaznacz warunki, w których opis działa.",promptText:"Kiedy opis jest mniej trafny?",placeholder:"Zapisz obserwacje."},{stepNumber:4,title:"Przepisz zdanie tak, aby uwzględniało kontekst.",instruction:"Przepisz zdanie tak, aby uwzględniało kontekst.",promptText:"Jak brzmi bardziej precyzyjna wersja?",placeholder:"Zapisz obserwacje."}],reflectionQuestions:["Czy etykieta była zbyt globalna?","Jakie warunki miały znaczenie?","Co chcę sprawdzić ponownie?"]},
];

export const chapterTwentyOne: Chapter = {
  number: 21,
  volume: 3,
  volumeChapterNumber: 5,
  title: 'Rozdział 5: Świadomość Siebie i Metapoznanie',
  subtitle: 'Myślenie o myśleniu, monitorowanie procesów poznawczych, granice introspekcji i zwieńczenie dzieła Anatomia Umysłu',
  leadParagraph: 'Stoisz na szczycie monumentalnej konstrukcji dzieła „Anatomia Umysłu”. Przeszliśmy wspólnie drogę od biologicznych fundamentów percepcji, uwagi i emocji (Tom I), przez skomplikowane teatry gier społecznych, komunikacji i perswazji (Tom II), aż po architekturę tożsamości, przekonań, samooceny i wartości (Tom III). Zwieńczeniem całej tej wiedzy jest Metapoznanie — zdolność umysłu do przyglądania się samemu sobie, monitorowania własnych procesów myślowych i świadomego przejmowania steru nad własnym życiem. Bez metapoznania cała ta wiedza pozostaje jedynie martwym podręcznikiem. Z metapoznaniem stajesz się suwerennym architektem swojego doświadczenia.',
  totalEstimatedPages: 62,
  sections: [
    {
      id: 'sec-21-1',
      pageNumber: 1,
      sectionNumber: '21.1',
      title: 'Zwieńczenie Drogi: Od Biologii przez Relacje do Suwerennej Świadomości',
      category: 'wstep',
      readingTimeMinutes: 10,
      quote: {
        text: 'Dopóki nie uczynisz podświadomego świadomym, będzie ono kierowało Twoim życiem, a Ty będziesz nazywał to przeznaczeniem.',
        author: 'Carl Gustav Jung'
      },
      paragraphs: [
        'Wyobraź sobie człowieka, który spędza całe życie wewnątrz skomplikowanej machiny, nie wiedząc, jak działają jej przekładnie. Każde pociągnięcie dźwigni emocji wywołuje u niego lęk, każda presja ze strony otoczenia zmusza go do uległości, a każde stary przekonanie więzi go w klatce wyobrażeń.',
        'Przejście przez 21 rozdziałów tej książki miało jeden główny cel: zaprosić Cię do reżyserki. Zobaczyliśmy, jak ciało migdałowate reaguje na zagrożenia statusowe, jak błąd potwierdzenia wykręca fakty, jak techniki perswazji hakują naszą potrzebę spójności i jak tożsamość buduje się na fundamencie opowieści autobiograficznej.',
        'Od dzisiaj nie jesteś już ślepym obserwatorem własnych automatyzmów. Masz w rękach precyzyjną mapę nawigacyjną.'
      ]
    },
    {
      id: 'sec-21-2',
      pageNumber: 4,
      sectionNumber: '21.2',
      title: 'Natura Metapoznania: John Flavell i Nawigacja Drugiego Rzędu',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'Pojęcie Metapoznania (Metacognition) wprowadzone przez Johna Flavella oznacza wprost „myślenie o myśleniu” — zdolność do monitorowania, kontrolowania i oceniania własnych procesów poznawczych.',
        'Myślenie pierwszego rzędu rozwiązywuje zadanie („Jak napisać ten raport?”). Myślenie drugiego rzędu (metapoznanie) przygląda się samemu procesowi („Czy ja mam wystarczająco dużo danych do tego raportu?”, „Czy nie ulegam Błędowi Potwierdzenia?”, „Czy mój stan zmęczenia nie zniekształca moich wniosków?”).',
        'Metapoznanie jest najwyższą formą ludzkiej inteligencji, stanowiącą biologiczny fundament dla samoregulacji, dojrzałości i mądrości.'
      ]
    },
    {
      id: 'sec-21-3',
      pageNumber: 7,
      sectionNumber: '21.3',
      title: 'Obserwacja vs Interpretacja: Czyszczenie Percepcji ze Szumu',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'Kluczowym nawykiem metapoznawczym jest umiejętność błyskawicznego rozdzielania czystej Obserwacji od nakładanej na nią Interpretacji.',
        'Obserwacja rejestruje sygnał somatyczny lub bodziec zewnętrzny bez opowieści moralnej (np. „Moje tętno wynosi 95 uderzeń na minutę”, „Rozmówca skrzyżował ręce”).',
        'Interpretacja natychmiast dodaje do tego katastroficzny scenariusz („Zaraz zemdleję”, „On mnie nienawidzi”).',
        'Utrzymanie uwagi na poziomie czystej obserwacji wygasza alarm w ciele migdałowatym i pozwala kory przedczołowej na wybór racjonalnej reakcji.'
      ]
    },
    {
      id: 'sec-21-4',
      pageNumber: 10,
      sectionNumber: '21.4',
      title: 'Ograniczenia Introspekcji: Nisbett, Wilson i Złudzenie Wglądu',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'Wielu ludzi uważa, że wystarczy głęboko „pomyśleć w milczeniu”, by poznać prawdziwe motywy swojego zachowania. Klasyczne badania Nisbetta i Wilsona („Telling More Than We Can Know”) zadały potężny cios temu przekonaniu.',
        'Dowiedziono, że ludzie pytani o przyczyny swoich wyborów podają przekonujące, zgrabne opowieści, nie mając w rzeczywistości bezpośredniego dostępu do podświadomych mechanizmów podkorowych.',
        'Introspekcja bywa często jedynie fabryką racjonalizacji. Dlatego metapoznanie opiera się nie na czystej introspekcji, lecz na testowaniu hipotez w działaniu i zbieraniu twardych danych empirycznych.'
      ]
    },
    {
      id: 'sec-21-5',
      pageNumber: 13,
      sectionNumber: '21.5',
      title: 'Laboratorium Metapoznania i Wewnętrznego Obserwatora',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        'Przeanalizujmy interaktywnie, jak działa Twój Wewnętrzny Obserwator. Poniższe narzędzie uczy wychodzić z roli aktora wciągniętego w emocjonalny dramat na pozycję reżysera stojącego w reżyserce.'
      ]
    },
    {
      id: 'sec-21-6',
      pageNumber: 16,
      sectionNumber: '21.6',
      title: 'Złudzenie Głębokości Objaśniania i Test „Skąd Wiem, Że Wiem?”',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Często ulegamy Złudzeniu Głębokości Objaśniania (Illusion of Explanatory Depth), myląc powierzchowną znajomość słów z głębokim rozumieniem mechanizmu.',
        'Test Feynmana („wyjaśnij to prosto od zera”) natychmiast odsłania plamy ślepe w naszej wiedzy, pozwalając na ich rzetelne uzupełnienie.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[2]
    },
    {
      id: 'sec-21-7',
      pageNumber: 19,
      sectionNumber: '21.7',
      title: 'Decentryzacja Poznawcza (Defusion): Zdjęcie Nacisku Myśli',
      category: 'studium-przypadku',
      readingTimeMinutes: 10,
      paragraphs: [
        'Decentryzacja polega na zmianie relacji z własnymi myślami: przestajemy traktować je jak wyroki losu, a zaczynamy widzieć w nich przemijające zdarzenia umysłowe.',
        'Fraza „Zauważam, że mam myśl, że...” tworzy bezpieczną przestrzeń między Tobą a Twoim monologiem wewnętrznym.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[3]
    },
    {
      id: 'sec-21-8',
      pageNumber: 22,
      sectionNumber: '21.8',
      title: 'Zagrożenia Nadanalizy: Paralysis by Analysis i Ruminacja',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Metapoznanie nie oznacza ciągłego, jałowego rozmyślania o problemie (Ruminacja). Nadanaliza wyczerpuje zasoby kory przedczołowej i wzmaga lęk.',
        'Konstruktywne myślenie prowadzi do konkretnego eksperymentu w świecie realnym; ruminacja kręci się w pętli bez końca.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[1]
    },
    {
      id: 'sec-21-9',
      pageNumber: 25,
      sectionNumber: '21.9',
      title: 'Biologia Metapoznania: Wskaźnik HALT i Skaner Ciała',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Jakość procesów metapoznawczych ściśle zależy od stanu fizjologicznego organizmu. Spadek glukozy i zmęczenie wyłączają wyższe funkcje kontrolne.',
        'Wskaźnik HALT uczy wstrzymywania się od wyciągania ostatecznych wniosków o swoim życiu, gdy organizm jest wyczerpany.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[5]
    },
    {
      id: 'sec-21-10',
      pageNumber: 28,
      sectionNumber: '21.10',
      title: 'Mindful Awareness: Uważność bez Oceniania',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Uważna Świadomość to stan pełnego, żywego kontaktu z obecną chwilą bez przylepiania etykiet „dobre” czy „złe”.',
        'Praktyka uważności fizycznie pogrubia warstwę kory w obszarach odpowiedzialnych za samoregulację emocjonalną.'
      ]
    },
    {
      id: 'sec-21-11',
      pageNumber: 31,
      sectionNumber: '21.11',
      title: 'Neuronauka Samomonitorowania: Rola dlPFC i mPFC',
      category: 'neuronauka',
      readingTimeMinutes: 9,
      paragraphs: [
        'Obszary kory przedczołowej (dlPFC, mPFC) oraz przednia kora obwodu (ACC) tworzą biologiczny obwód metapoznawczy.',
        'Trening samomonitorowania wzmacnia te ścieżki, czyniąc nas bardziej odpornymi na odruchy podkorowe.'
      ]
    },
    {
      id: 'sec-21-12',
      pageNumber: 34,
      sectionNumber: '21.12',
      title: 'Odbudowa Autonomii w Reakcjach: Autopilot vs Wybór',
      category: 'studium-przypadku',
      readingTimeMinutes: 10,
      paragraphs: [
        'Wyłączenie autopilota życiowego pozwala na przełączenie się z reatywności na autonomiczną kreację.',
        'Każdy moment świadomego wyboru buduje Twoją suwerenność osobistą.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[0]
    },
    {
      id: 'sec-21-13',
      pageNumber: 37,
      sectionNumber: '21.13',
      title: 'Szczepionka na Optymizm: Analiza Pre-Mortem',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Technika Pre-Mortem Analysis zmusza umysł do wyobrażenia sobie klęski przed wdrożeniem projektu, ujawniając ukryte plamy ślepe.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[4]
    },
    {
      id: 'sec-21-14',
      pageNumber: 40,
      sectionNumber: '21.14',
      title: 'Protokół STOP: 4 Kroki Świadomej Pauzy',
      category: 'cwiczenia',
      readingTimeMinutes: 9,
      paragraphs: [
        '4 kroki (Stop, Take a breath, Observe, Proceed) wstawiają klin w automatyczną pętlę emocjonalną.'
      ],
      exerciseRef: selfExercisesChapterTwentyOne[0]
    },
    {
      id: 'sec-21-15',
      pageNumber: 43,
      sectionNumber: '21.15',
      title: 'Intelektualna Skromność i Ciągły Rozwój',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Intelektualna skromność to świadomość granic własnego poznania i otwartość na ciagłe uczenie się.'
      ]
    },
    {
      id: 'sec-21-16',
      pageNumber: 46,
      sectionNumber: '21.16',
      title: 'Praktyka Dziennika Metapoznawczego',
      category: 'cwiczenia',
      readingTimeMinutes: 9,
      paragraphs: [
        'Codzienna rejestracja jakości własnych procesów myślowych utrwala nawyk samomonitorowania.'
      ],
      exerciseRef: selfExercisesChapterTwentyOne[5]
    },
    {
      id: 'sec-21-17',
      pageNumber: 49,
      sectionNumber: '21.17',
      title: '🧠 BŁĘDNA INTUICJA: „Gdy Będę Miał Pełne Metapoznanie, Przestanę Odczuwać Jakiekolwiek Trudne Emocje”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'INTUICJA: Oczekiwanie, że świadomość procesów myślowych sprawi, iż lęk, złość czy smutek całkowicie znikną z naszego życia.',
        'CO MOŻE BYĆ BŁĘDNE? Mylein samokontroli z zamrożeniem emocjonalnym. Emocje są naturalnymi ewolucyjnymi sygnałami z ciała i będą pojawiać się zawsze.',
        'CO MÓWI PSYCHOLOGIA? Metapoznanie nie wyłącza powstawania fal emocjonalnych — daje Ci deskę surfingową, byś potrafił na tych falach pływać bez tonięcia.',
        'BARDZIEJ PRECYZYJNY MODEL: Nie walcz z falą emocji — ucz się świadomie na niej żeglować.'
      ]
    },
    {
      id: 'sec-21-18',
      pageNumber: 52,
      sectionNumber: '21.18',
      title: '🔬 CO NADAL NIE JEST JASNE? Granice Świadomości w Przetwarzaniu Podprogowym',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'Jaki procent naszych codziennych decyzji podejmujemy w sposób w pełni świadomy, a jaki stanowi jedynie podprogową realizację skryptów neuronalnych?',
        'Badania pokazują, że udział procesów podświadomych jest ogromny, lecz to właśnie metapoznanie stanowi jedyny znany ewolucyjnie interfejs pozwalający na modyfikację tych skryptów.'
      ]
    },
    {
      id: 'sec-21-19',
      pageNumber: 54,
      sectionNumber: '21.19',
      title: '🎯 ZWIEŃCZENIE CAŁOŚCI: Osobista Mapa Systemowa Autonomii',
      category: 'cwiczenia',
      readingTimeMinutes: 12,
      paragraphs: [
        'Oto Twoje najważniejsze zadanie podsumowujące całe monumentalne dzieło „Anatomia Umysłu”. Połącz wiedzę z Tomu I, II i III w jeden spójny kompas operacyjny.'
      ],
      exerciseRef: selfExercisesChapterTwentyOne[6]
    },
    {
      id: 'sec-21-20',
      pageNumber: 58,
      sectionNumber: '21.20',
      title: 'Ostateczne Posłanie: Życie jako Świadoma Praktyka Mądrości',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Przeszliśmy wspólnie monumentalną drogę. Od dzisiaj masz w rękach nie tylko wiedzę naukowa, lecz i narzędzia do jej codziennego praktykowania.',
        'Nie staniesz się idealny z dnia na dzień. Nadal będziesz czasem popełniać błędy. Różnica polega na tym, że OD DZISIAJ NIE JESTEŚ JUŻ ŚLEPY.',
        'W chwili, gdy poczujesz trudny impuls, Twój wewnętrzny Obserwator uśmiechnie się z czułością i powie: „Oho, poznaję cię. Weź oddech. Zastosuj pauzę. Wybierz mądrość”.',
        'Idź i żyj świadomie. Buduj dobro wokół siebie.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[6]
    },
    {
      id: 'sec-21-21',
      pageNumber: 62,
      sectionNumber: '21.21',
      title: 'Wielki Egzamin Finałowy Rozdziału 5 i Całego Tomu III',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu metapoznania, samomonitorowania, decentryzacji oraz syntezy całej wiedzy o człowieku. Poniższy egzamin zwieńcza dzieło Anatomia Umysłu.'
      ]
    }
  ]
};
