import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterFourteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W Harwardzkim Projekcie Negocjacyjnym (Fisher, Ury, Patton: „Dochodząc do TAK”), na czym polega rewolucyjna różnica między STANOWISKIEM a INTERESEM (Sekcja 14.2)?',
    topic: 'Stanowisko a Interes w Negocjacjach Harwardzkich',
    sectionRef: 'Sekcja 14.2',
    options: [
      { label: 'A', text: 'Stanowisko dotyczy tylko polityków, a interes tylko biznesmenów.', isCorrect: false },
      { label: 'B', text: 'STANOWISKO to powierzchowne, sztywne żądanie („Chcę jedynej pomarańczy na stole!”), podczas gdy INTERES to głęboka, leżąca u podstaw potrzeba (jedna osoba potrzebuje soku z miąższu do picia, a druga skórki do upieczenia ciasta).', isCorrect: true },
      { label: 'C', text: 'Interes to kwota na koncie bankowym, a stanowisko to adres zamieszkania.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, to synonimy w prawie cywilnym.', isCorrect: false }
    ],
    explanation: 'Skupienie się na stanowiskach prowadzi do wojny na wyniszczenie lub zgniłego kompromisu (rozcięcie pomarańczy na pół, przez co obie strony dostają za mało). Odkrycie ukrytych interesów pozwala wygenerować kreatywne rozwiązanie, w którym obie strony wygrywają w 100%.',
    keyTakeaway: 'Nie negocjuj o stanowiska — pytaj o stojące za nimi interesy i potrzeby.'
  },
  {
    id: 2,
    question: 'Czym jest koncepcja BATNA (Best Alternative to a Negotiated Agreement) i dlaczego stanowi najważniejsze źródło siły negocjacyjnej (Sekcja 14.8)?',
    topic: 'Koncepcja BATNA jako Pancerz Negocjatora',
    sectionRef: 'Sekcja 14.8',
    options: [
      { label: 'A', text: 'Tajnym programem szpiegowskim podsłuchującym oponenta.', isCorrect: false },
      { label: 'B', text: 'Najlepszą alternatywą w razie braku porozumienia — to realny plan B, który zrealizujesz, jeśli odejdziesz od stołu negocjacyjnego. Im silniejsza Twoja BATNA, tym większa swoboda i odporność na manipulacje drugiej strony.', isCorrect: true },
      { label: 'C', text: 'Zniżką handlową udzielaną za płatność gotówką.', isCorrect: false },
      { label: 'D', text: 'Karą umowną za spóźnienie na spotkanie.', isCorrect: false }
    ],
    explanation: 'Siła przy stole nie wynika z agresji ani twardego głosu. Wynika z tego, jak dobrą masz alternatywę, gdy wstaniesz od stołu. Jeśli masz drugą świetną ofertę pracy (silna BATNA), szef nie może cię zaszantażować.',
    keyTakeaway: 'Nigdy nie siadaj do stołu negocjacyjnego bez zdefiniowanej, silnej BATNA.'
  },
  {
    id: 3,
    question: 'W negocjacjach kryzysowych i biznesowych Christopher Voss (były główny negocjator FBI) zaleca stosowanie techniki „Etykietowania Taktycznego” (Tactical Labeling) (Sekcja 14.5 i 14.10). Polega ona na:',
    topic: 'Taktyczne Etykietowanie Emocji wg Chrisa Vossa',
    sectionRef: 'Sekcja 14.5',
    options: [
      { label: 'A', text: 'Przyklejaniu taśmy z nazwiskiem oponenta na jego czole.', isCorrect: false },
      { label: 'B', text: 'Neutralnym, spokojnym nazwaniu obaw i negatywnych emocji drugiej strony za pomocą zwrotów: „Wygląda na to, że obawiasz się...”, „Brzmi to tak, jakbyś czuł się pominięty...”, co deaktywuje amygdalę oponenta bez przyznawania mu racji.', isCorrect: true },
      { label: 'C', text: 'Zażądaniu natychmiastowego poddania się pod groźbą broni.', isCorrect: false },
      { label: 'D', text: 'Udawaniu, że nie słyszy się żadnych słów drugiej strony.', isCorrect: false }
    ],
    explanation: 'Voss wykorzystuje to samo odkrycie Matthew Liebermana (Tom I, Rozdział 2): nazwanie lęku na głos odbiera mu siłę rażenia i przenosi zasoby do kory przedczołowej. Oponent czuje się wysłuchany i przestaje walczyć.',
    keyTakeaway: 'Nie zaprzeczaj emocjom oponenta — nazwij je z empatią, by rozbroić minę.'
  },
  {
    id: 4,
    question: 'Dlaczego tradycyjny „Kompromis” bywa często najgorszym możliwym rozwiązaniem sporu (Sekcja 14.9)?',
    topic: 'Zgniły Kompromis a Kreatywna Integracja',
    sectionRef: 'Sekcja 14.9',
    options: [
      { label: 'A', text: 'Ponieważ jest nielegalny w świetle prawa Unii Europejskiej.', isCorrect: false },
      { label: 'B', text: 'W kompromisie („spotkajmy się w połowie drogi”) obie strony muszą zrezygnować z części swoich kluczowych potrzeb, w efekcie czego obie odchodzą od stołu niezadowolone, ze zniekształconym projektem i ukrytą urazą.', isCorrect: true },
      { label: 'C', text: 'Kompromis zawsze prowadzi do natychmiastowej bójki.', isCorrect: false },
      { label: 'D', text: 'Wymaga obecności tłumacza przysięgłego.', isCorrect: false }
    ],
    explanation: 'Wyobraź sobie, że mąż chce spędzić wakacje w górach, a żona nad morzem. Zgniły kompromis to wyjazd do Radomia — żadne z nich nie ma ani gór, ani morza, oboje są wściekli. Negocjacje integracyjne szukają trzeciego rozwiązania (np. góry w Grecji z widokiem na morze).',
    keyTakeaway: 'Nie dziel dziecka na pół. Szukaj rozwiązań integracyjnych zamiast mechanicznego cięcia.'
  },
  {
    id: 5,
    question: 'W modelu dynamiki eskalacji Friedricha Glasla (Sekcja 14.3), czym charakteryzuje się wejście w fazę drugą (poziomy 4–6)?',
    topic: 'Schody Eskalacji Konfliktu Friedricha Glasla',
    sectionRef: 'Sekcja 14.3',
    options: [
      { label: 'A', text: 'Wzrostem życzliwości i podpisywaniem paktów pokojowych.', isCorrect: false },
      { label: 'B', text: 'Przejściem od sporu merytorycznego o fakty do wojny personalnej: pojawiają się koalicje, dążenie do utraty twarzy rywala i groźby.', isCorrect: true },
      { label: 'C', text: 'Automatyczną interwencją policji we wszystkich przypadkach.', isCorrect: false },
      { label: 'D', text: 'Natychmiastowym porozumieniem finansowym.', isCorrect: false }
    ],
    explanation: 'Na poziomach 1–3 strony wciąż wierzą w porozumienie Win-Win. Na poziomach 4–6 cel zmienia się na Win-Lose: „nieważne, ile stracę, ważne, by on poniósł klęskę”. Na poziomach 7–9 następuje zniszczenie obu stron (Lose-Lose).',
    keyTakeaway: 'Zatrzymaj konflikt na poziomach 1–3 zanim zniekształcenia poznawcze odbiorą wam kontrolę.'
  },
  {
    id: 6,
    question: 'W roli Neutralnego Mediatora (Sekcja 14.12), najważniejszym zadaniem w pierwszej fazie pracy ze skłóconymi stronami jest:',
    topic: 'Rola Mediatora: Od Emocji do Faktów',
    sectionRef: 'Sekcja 14.12',
    options: [
      { label: 'A', text: 'Wskazanie, kto ma rację, i ukaranie winnego grzywną.', isCorrect: false },
      { label: 'B', text: 'Zapewnienie bezpieczeństwa psychologicznego, obniżenie temperatury afektywnej, rozdzielenie ludzi od problemu i przetłumaczenie wzajemnych oskarżeń na język niezaspokojonych potrzeb.', isCorrect: true },
      { label: 'C', text: 'Zamknięcie obu stron w ciemnym pokoju bez jedzenia.', isCorrect: false },
      { label: 'D', text: 'Podyktowanie gotowego wyroku w imieniu sądu.', isCorrect: false }
    ],
    explanation: 'Mediator nie jest sędzią. Nie rozstrzyga o winie. Mediator zarządza procesem komunikacji, umożliwiając skłóconym stronom bezpieczne przejście z walki na śmierć i życie do wspólnego rozwiązywania problemu.',
    keyTakeaway: 'Bądź twardy dla problemu, ale miękki dla człowieka.'
  },
  {
    id: 7,
    question: 'Czym są „pytania kalibrowane” (Calibrated Questions) Chrisa Vossa rozpoczynające się od słów „Jak” lub „Co” (Sekcja 14.7)?',
    topic: 'Pytania Kalibrowane w Negocjacjach Oporowych',
    sectionRef: 'Sekcja 14.7',
    options: [
      { label: 'A', text: 'Pytaniami z testu na prawo jazdy.', isCorrect: false },
      { label: 'B', text: 'Pytaniami otwartymi, które zmuszają oponenta do włożenia wysiłku poznawczego w rozwiązanie Twojego problemu („Jak mam to zrobić przy obecnym budżecie?”), usuwając agresję i dając mu poczucie kontroli.', isCorrect: true },
      { label: 'C', text: 'Pytaniami zmuszającymi do natychmiastowej odpowiedzi TAK lub NIE.', isCorrect: false },
      { label: 'D', text: 'Pytaniami służącymi do obrażania wykształcenia kontrahenta.', isCorrect: false }
    ],
    explanation: 'Pytanie kalibrowane „Jak mam to zrobić?” jest potężną formą odmowy bez mówienia „Nie”. Zamiast prowokować opór, przerzuca ciężar myślenia na drugą stronę, angażując jej korę przedczołową.',
    keyTakeaway: 'Zastąp konfrontacyjne „Nie zrobię tego!” kalibrowanym „Jak mam to zrobić w tych warunkach?”.'
  }
];

export const chapterFourteen: Chapter = {
  number: 14,
  title: 'Konflikt i Negocjacje: Sztuka Porozumienia Gdy Interesy Się Ścierają',
  subtitle: 'Od walki pozycyjnej do metody harwardzkiej, potęga BATNA i psychologia wygrana-wygrana',
  leadParagraph: 'Konflikt nie jest anomalią ani porażką moralną — jest naturalnym prawem tarcia społecznego. Tam, gdzie spotykają się dwa różne układy nerwowe, dwie historie życiowe i dwa ograniczone budżety, różnica zdań jest gwarantowana. Pytanie nie brzmi, czy będziesz miał konflikty, lecz jak będziesz przez nie przechodził: czy spalisz mosty w bezsilnej wojnie na wyniszczenie, czy zamienisz kryzys w fundament trwałego porozumienia.',
  totalEstimatedPages: 56,
  sections: [
    {
      id: 'sec-14-1',
      pageNumber: 658,
      sectionNumber: '14.1',
      title: 'Konflikt interesów: Dlaczego zasoby są ograniczone, a potrzeby nieskończone',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'W negocjacjach nie dostajesz tego, na co zasługujesz. Dostajesz to, co wynegocjujesz.',
        author: 'Chester L. Karrass'
      },
      paragraphs: [
        'Wyobraź sobie dwoje wspólników w małej spółce. Firma wypracowała 200 tysięcy złotych zysku. Wspólnik A chce kupić nową maszynę produkcyjną, by zwiększyć moce przerobowe. Wspólnik B chce wypłacić dywidendę, by spłacić kredyt hipoteczny. Pieniądze są jedne, żądania dwa. Wybucha konflikt.',
        'Większość ludzi w takiej sytuacji wchodzi w Walkę Pozycyjną (Positional Bargaining). Zaczynają krzyczeć, szantażować się emocjonalnie, wyciągać dawne urazy i okopywać się na swoich pozycjach. Każde ustępstwo traktują jako utratę honoru i kapitulację ego.',
        'Prawdziwa dojrzałość polega na zrozumieniu, że konflikt interesów to problem matematyczno-psychologiczny, a nie zdrada przyjaźni. Konflikt staje się destrukcyjny dopiero wtedy, gdy ludzie zlewają problem merytoryczny z własną tożsamością i poczuciem własnej wartości.'
      ]
    },
    {
      id: 'sec-14-2',
      pageNumber: 662,
      sectionNumber: '14.2',
      title: 'Stanowiska a Interesy: Rewolucja metody harwardzkiej',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'W 1981 roku Roger Fisher i William Ury z Harvard Negotiation Project opublikowali książkę „Getting to Yes” („Dochodząc do TAK”). Zdefiniowali w niej fundament współczesnej teorii negocjacji:',
        'STANOWISKO to powierzchowna deklaracja tego, czego żądasz: „Chcę podwyżki o 2000 zł!”, „Chcę, żebyś przestał pracować po godzinach!”, „Ten lokal musi kosztować 5000 zł czynszu!”. Stanowiska są zazwyczaj sztywne, binarne i wykluczające się nawzajem.',
        'INTERES to ukryta potrzeba, lęk, pragnienie lub motywacja stojąca za stanowiskiem: „Boję się, że inflacja zje oszczędności mojej rodziny”, „Tęsknię za tobą i czuję się samotna wieczorami”, „Muszę pokryć ratę kredytu za lokal”.',
        'Kiedy negocjujesz o stanowiska, lądujesz w przeciąganiu liny. Kiedy schodzisz na poziom interesów, odkrywasz dziesiątki alternatywnych sposobów ich zaspokojenia, o których żadna ze stron wcześniej nie pomyślała.',
        'PRZYKŁAD 1: Kłótnia w bibliotece o okno. Czytelnik A żąda, by okno było otwarte na oścież (stanowisko). Czytelnik B żąda, by było szczelnie zamknięte (stanowisko). Bibliotekarka podchodzi i pyta: „Dlaczego chce pan otwartego okna?” (odkrywanie interesu). Czytelnik A odpowiada: „Potrzebuję świeżego powietrza, bo boli mnie głowa”. Pyta Czytelnika B: „A dlaczego pan chce zamkniętego?”. Czytelnik B: „Bo siedzę w przeciągu i marznę”. Rozwiązanie bibliotekarki: Otwiera okno w sąsiednim pokoju. Świeże powietrze napływa, a przeciągu nie ma. Obie strony zrealizowały swój interes w 100% bez zgniłego kompromisu.'
      ],
      exerciseRef: {
        id: 'ex-14-stanowisko-interes',
        title: 'Rentgen Stanowisk: Tłumaczenie Żądań na Ukryte Potrzeby',
        subtitle: 'Przekształć konfrontacyjną walkę o pozycje w przestrzeń twórczej kooperacji',
        objective: 'Nauczenie się oddzielania powierzchownych żądań od leżących u ich podłoża potrzeb.',
        durationMinutes: 20,
        neuroScientificFoundation: 'Zmiana perspektywy ze stanowiska na interes wycisza reakcję alarmową ciała migdałowatego i pobudza grzbietowo-boczną korę przedczołową odpowiedzialną za myślenie dywergencyjne.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wypisz sztywne stanowiska stron',
            instruction: 'Zidentyfikuj konflikt ze swojego życia i wypisz swoje sztywne stanowisko oraz stanowisko oponenta.',
            promptText: 'Moje żądanie vs Żądanie drugiej strony:',
            placeholder: 'Ja żądam: natychmiastowej zapłaty za fakturę; Druga strona żąda: wstrzymania płatności do końca kwartału...'
          },
          {
            stepNumber: 2,
            title: 'Zadaj 5 razy pytanie „Dlaczego?”',
            instruction: 'Dokop się do głębokich potrzeb i lęków stojących za Twoim żądaniem i żądaniem partnera.',
            promptText: 'Jakie realne potrzeby kryją się pod spodem?',
            placeholder: 'Mój interes: płynność finansowa i zapłata raty leasingu. Ich interes: obawa przed zamrożeniem gotówki przed audytem...'
          },
          {
            stepNumber: 3,
            title: 'Zaprojektuj rozwiązanie integracyjne',
            instruction: 'Zbuduj wariant, który realizuje oba interesy bez konieczności rezygnacji ze swoich wartości.',
            promptText: 'Jakie trzecie rozwiązanie spełnia obie potrzeby?',
            placeholder: 'Rozbicie płatności na 2 raty z 3% rabatem za pierwszą część płatną dziś...'
          }
        ],
        reflectionQuestions: [
          'Które z twoich dotychczasowych żądań wynikało wyłącznie z dumy i obrony ego?',
          'O ile łatwiejsza staje się rozmowa, gdy zamiast oceniać żądanie oponenta, pytasz go: „Co dla ciebie jest w tej sprawie najważniejsze”?'
        ]
      }
    },
    {
      id: 'sec-14-3',
      pageNumber: 666,
      sectionNumber: '14.3',
      title: 'Dynamika eskalacji: 9 stopni schodów Friedricha Glasla',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Austriacki mediator Friedrich Glasl opracował model 9 poziomów eskalacji konfliktu. Pokazuje on, jak niekontrolowany spór systematycznie degraduje ludzkie zdolności poznawcze:',
        'FAZA 1 (Poziomy 1–3: Win-Win): 1. Usztywnienie stanowisk; 2. Polaryzacja i debata; 3. Działanie zamiast słów (stawianie przed faktami dokonanymi). Strony wciąż wierzą, że mogą wspólnie rozwiązać problem.',
        'FAZA 2 (Poziomy 4–6: Win-Lose): 4. Troska o własny wizerunek i szukanie koalicji; 5. Utrata twarzy (publiczne upokorzenie przeciwnika); 6. Strategie gróźb i ultimatum. Tu celem staje się pokonanie oponenta.',
        'FAZA 3 (Poziomy 7–9: Lose-Lose): 7. Ograniczone uderzenia niszczące; 8. Fragmentacja i zniszczenie wrogiego systemu; 9. Wspólne runięcie w przepaść („Zginę, byle tylko pociągnąć cię na dno!”).',
        'PRZYKŁAD 2: Rozwód Grzegorza i Anny. Zaczęło się od poziomu 1 (spór o to, kto ma odebrać dziecko z basenu). Przeszło w poziom 4 (angażowanie teściów i znajomych do poparcia swojej wersji). Na poziomie 6 padły groźby alimentacyjne. Na poziomie 9 oboje wydali po 80 tysięcy złotych na prawników, stracili oszczędności życia, zniszczyli psychikę dziecka i doprowadzili do licytacji wspólnego domu komornikowi — klasyczne runięcie w przepaść Lose-Lose.'
      ]
    },
    {
      id: 'sec-14-4',
      pageNumber: 670,
      sectionNumber: '14.4',
      title: 'Style radzenia sobie z konfliktem: Model Thomasa-Kilmanna',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Model Kennetha Thomasa i Ralpha Kilmanna opiera się na dwóch wymiarach: Asertywności (dbałości o własne cele) oraz Współpracy (dbałości o relację z drugą stroną). Wyróżnia 5 stylów:',
        '1. Rywalizacja (Wysoka asertywność, niska współpraca): „Ja wygrywam, ty przegrywasz”. Skuteczna w sytuacjach kryzysowych lub gdy stawką są zasady etyczne, niszcząca dla relacji.',
        '2. Dostosowanie się (Niska asertywność, wysoka współpraca): „Ty wygrywasz, ja przegrywam”. Uleganie dla świętego spokoju; rodzi poczucie krzywdy i pasywną agresję.',
        '3. Unikanie (Niska asertywność, niska współpraca): „Nikt nie wygrywa, chowam głowę w piasek”. Dobra taktyka na przeczekanie wybuchu emocji, fatalna na dłuższą metę.',
        '4. Kompromis (Średnia asertywność, średnia współpraca): „Każdy z nas z czegoś rezygnuje”. Szybkie, pragmatyczne rozwiązanie, ale rzadko optymalne.',
        '5. Współpraca / Integracja (Wysoka asertywność, wysoka współpraca): „Razem szukamy trzeciej drogi, w której oboje wygrywamy”. Wymaga czasu, zaufania i kreatywności.',
        'PRZYKŁAD 3: Młoda graficzka freelanserce Karolina mierzy się z notorycznym opóźnianiem płatności przez stałego klienta. Przez rok stosowała Dostosowanie się („Nie chcę go urazić, bo stracę zlecenie”), co doprowadziło ją na skraj bankructwa. Dopiero przejście do Asertywnej Współpracy (wprowadzenie 50% zaliczki i harmonogramu transz z zachowaniem partnerskiego tonu) uzdrowiło współpracę i zapewniło terminowe wpływy.'
      ],
      caseStudyRef: {
        id: 'cs-ch14-freelance',
        title: 'Pułapka Darmowych Poprawek: Jak Asertywna Współpraca Uratowała Agencję przed Upadkiem',
        subtitle: 'Od lęku przed odrzuceniem klienta do profesjonalnego renegocjowania kontraktu',
        protagonist: 'Tomasz (właściciel 4-osobowej agencji web developmentu, 31 lat) i Dyrektor Marketingu sieci retail (klient korporacyjny)',
        context: 'Projekt wdrożenia nowego e-commerce, który z 3-miesięcznego zlecenia za 40 000 zł rozrósł się w 9-miesięczny koszmar scope creep bez dodatkowego budżetu.',
        story: [
          'Tomasz podpisał kontrakt ze zbyt ogólnym zakresem prac. Klient zaczął przesyłać dziesiątki kolejnych „drobnych uwag”: zmianę logiki koszyka, integrację z trzema nowymi hurtowniami, przebudowę interfejsu mobilnego.',
          'Tomasz panicznie bał się konfliktu. Za każdym razem odpowiadał: „Oczywiście, zrobimy to w cenie”. Bał się, że jeśli postawi granicę, klient zerwie umowę i wystawi złą opinię na rynku.',
          'Po 7 miesiącach zespół Tomasza pracował po 12 godzin na dobę, programiści zagrozili odejściem z powodu wypalenia, a firmowe konto świeciło pustkami. Tomasz nie miał z czego wypłacić pensji.',
          'Punkt zwrotny: Klient zażądał kolejnej bezpłatnej przebudowy bazy danych. Tomasz zrozumiał, że uległość doprowadzi jego firmę do natychmiastowego bankructwa. Zgłosił się do mentora biznesowego.',
          'Zastosowanie metody Thomasa-Kilmanna: Tomasz przestał stosować Styl Dostosowania. Przygotował pełny raport wykonanych prac z podziałem na zakres pierwotny kontraktu i 142 zrealizowane dodatkowe poprawki o wartości 35 000 zł.',
          'Spotkanie negocjacyjne: Tomasz nie zaatakował klienta agresywnie. Użył metody harwardzkiej: „Chcemy, by państwa e-commerce odniósł gigantyczny sukces i dowozimy najwyższą jakość (Wspólny interes). Aby utrzymać tempo wdrożenia przed świętami, musimy podzielić pozostałe funkcjonalności na wersję MVP i Etap 2 z dedykowanym aneksem budżetowym (Integracja)”.',
          'Klient, widząc profesjonalizm i twarde dane, zgodził się na podpisanie aneksu na 25 000 zł i przesunięcie mniej istotnych funkcji na kolejny kwartał. Agencja odzyskała płynność finansową, a klient otrzymał działający sklep na czas.'
        ],
        decisionTaken: 'Tomasz zrezygnował z uległości i strachu przed konfrontacją na rzecz rzetelnego, partnerskiego wyznaczenia granic kontraktowych opartych na danych.',
        whatProtagonistSaw: 'Tomasz początkowo widział w kliencie bezwzględnego wyzyskiwacza, a w sobie bezsilną ofiarę.',
        whatWasMissed: 'Klient nie chciał zniszczyć agencji — po prostu testował granice, dopóki nikt nie mówił „stop”. Nieświadomie wykorzystywał brak asertywności Tomasza.',
        psychologicalAnalysis: {
          coreMechanism: 'Lęk przed odrzuceniem i błąd uległości (People-Pleasing) maskowane jako „dbałość o obsługę klienta”.',
          cognitiveBiases: [
            { name: 'Katastrofizacja', description: 'Przekonanie, że odmowa zrobienia 143. poprawki spowoduje natychmiastowy proces sądowy i śmierć firmy.', impact: 'Paraliż asertywności.' },
            { name: 'Iluzja braku alternatywy', description: 'Uznanie, że klient korporacyjny ma absolutną władzę nad wykonawcą.', impact: 'Zrzeczenie się własnej podmiotowości.' }
          ],
          defenseMechanisms: [
            { name: 'Racjonalizacja', explanation: 'Tłumaczenie sobie: „Zrobię to za darmo, to w przyszłości dadzą nam większe zlecenie”.' }
          ],
          emotionalDynamic: 'Przejście od skrajnej uległości i lęku do stłumionej wściekłości, a ostatecznie do spokojnej, profesjonalnej pewności siebie.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Ciało migdałowate', role: 'Generowanie paniki przed utratą klienta', activationState: 'Nadaktywne przez pierwsze 7 miesięcy' },
            { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Obliczenie realnych kosztów i przygotowanie tabeli poprawek', activationState: 'Uruchomiona po interwencji mentora' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol', roleInScenario: 'Długotrwały, wyczerpujący stres zagrażający zdrowiu fizycznemu' }
          ],
          biologicalTimeline: [
            { timeMs: 'Przed spotkaniem', process: 'Ćwiczenia oddechowe i przygotowanie scenariusza obniżają tętno z 110 do 72 bpm.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'Scope Creep (Przesuwanie granic)', description: 'Dorzucanie małych zadań krok po kroku, tak by każde pojedynczo wydawało się zbyt błahe, by odmówić.', vulnerabilityExploited: 'Lęk wykonawcy przed konfliktem' }
          ],
          counterMeasures: [
            { step: 'Księga Zmian (Change Request Protocol)', script: '„Z przyjemnością wdrożymy tę nową funkcję! Przygotuję wycenę roboczogodzin w ramach procedury Change Request i prześlę do akceptacji do jutra”.', rationale: 'Wycenia każdą prośbę, zmuszając klienta do kalkulacji kosztów.' }
          ]
        },
        alternativePath: 'Gdyby Tomasz nadal milczał, programiści rzuciliby wypowiedzenia, projekt runąłby w połowie, a klient naliczyłby kary umowne doprowadzając agencję do upadłości.',
        readerQuestion: 'W których relacjach zawodowych lub osobistych zgadzasz się na darmowe poprawki kosztem własnego zdrowia i snu?',
        keyTakeaway: 'Jasne granice nie psują relacji biznesowych — one sprawiają, że relacja w ogóle może przetrwać.'
      }
    },
    {
      id: 'sec-14-5',
      pageNumber: 674,
      sectionNumber: '14.5',
      title: 'Deeskalacja w praktyce: Techniki FBI i etykietowanie taktyczne',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Chris Voss, wieloletni główny negocjator FBI do spraw zakładników, udowodnił, że w stanie skrajnego pobudzenia emocjonalnego logika i argumenty racjonalne nie działają. Próba powiedzenia wściekłemu człowiekowi: „Proszę się uspokoić i myśleć logicznie” działa jak polanie ognia benzyną.',
        'Kluczowe techniki deeskalacji kryzysowej:',
        '1. Głos Nocnego Radiowca (Late-Night FM DJ Voice): Głęboki, spokojny, powolny i opadający na końcu zdań ton głosu. Fizjologicznie stymuluje nerw błędny u rozmówcy i obniża tętno.',
        '2. Lustro (Mirroring): Powtórzenie ostatnich 1–3 kluczowych słów wypowiedzianych przez rozmówcę z pytającą intonacją. Zmusza go do rozwinięcia myśli bez poczucia przesłuchania.',
        '3. Taktyczne Etykietowanie (Tactical Labeling): Beznamiętne nazwanie emocji rozmówcy: „Wygląda na to, że czujesz się ignorowany przez zarząd”, „Brzmi to tak, jakbyś obawiał się, że ten projekt zabierze ci wolny czas”. Zgodnie z badaniami neurobiologicznymi, nazwanie emocji dezaktywuje ciało migdałowate i przenosi aktywność do kory mózgowej.'
      ],
      exerciseRef: {
        id: 'ex-14-fbi-labeling',
        title: 'Laboratorium Chrisa Vossa: Rozbrajanie Miny Emocjonalnej',
        subtitle: 'Zastosuj etykietowanie taktyczne i głos nocnego radiowca do neutralizacji ataku',
        objective: 'Wytrenowanie odruchu deeskalacji afektu u agresywnego rozmówcy bez ulegania agresji.',
        durationMinutes: 15,
        neuroScientificFoundation: 'Nazwanie emocji na głos (Affect Labeling wg Liebermana) obniża aktywność ciała migdałowatego i przenosi kontrolę do prawej kory przedczołowej.',
        steps: [
          {
            stepNumber: 1,
            title: 'Zauważ atak bez kontrataku',
            instruction: 'Wyobraź sobie oponenta mówiącego: „Ten raport to kompletny chłam! Marnujecie mój czas!”.',
            promptText: 'Powstrzymaj chęć obrony. Jaki impuls czujesz w ciele?',
            placeholder: 'Czuję ucisk w żołądku i chęć powiedzenia: Sam zrób lepszy...'
          },
          {
            stepNumber: 2,
            title: 'Zastosuj Lustro i Głos DJ-a',
            instruction: 'Powtórz ostatnie słowa z pytającą intonacją niskim, opadającym głosem.',
            promptText: 'Wpisz frazę lustra:',
            placeholder: 'Marnujemy pana czas?...'
          },
          {
            stepNumber: 3,
            title: 'Nazwij emocję oponenta',
            instruction: 'Sformułuj etykietę taktyczną zaczynającą się od „Wygląda na to, że...” lub „Brzmi to tak, jakby...”.',
            promptText: 'Wpisz etykietę taktyczną:',
            placeholder: 'Wygląda na to, że presja terminu budzi ogromny niepokój, a te dane nie dają panu jeszcze jasności...'
          }
        ],
        reflectionQuestions: [
          'Dlaczego powiedzenie komuś „uspokój się” wywołuje jeszcze większą wściekłość?',
          'Jak czuje się Twoje ciało, gdy świadomie obniżasz ton głosu do rejestru „nocnego radiowca”?'
        ]
      }
    },
    {
      id: 'sec-14-6',
      pageNumber: 678,
      sectionNumber: '14.6',
      title: 'Przygotowanie do rozmowy: Mapa interesów i emocji',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        '90% sukcesu w negocjacjach decyduje się przed wejściem do sali konferencyjnej. Ludzie nieprzygotowani polegają na improwizacji, co oznacza, że w sytuacji stresu oddają stery swojemu układowi limbicznemu.',
        'Profesjonalna Mapa Negocjacyjna obejmuje:',
        '1. Macierz Zaufania i Władzy: Kto ma większą władzę formalną? Kto ma lepszy dostęp do informacji? Jakie jest dotychczasowe zaufanie?',
        '2. Rejestr Obaw Oponenta (Accusation Audit): Spisanie wszystkich najgorszych rzeczy, jakie druga strona mogłaby o tobie pomyśleć lub powiedzieć („Pomyślą, że jestem roszczeniowy, nielojalny, chciwy i chcę ich oszukać”). Wypowiedzenie tych obaw na samym początku rozmowy rozbraja je zanim zostaną użyte przeciwko tobie.',
        '3. Waluty Wymienne (Traded Currencies): Co ma dla ciebie niski koszt, ale ogromną wartość dla nich? Co ma dla nich niski koszt, a ogromną wartość dla ciebie?'
      ]
    },
    {
      id: 'sec-14-7',
      pageNumber: 682,
      sectionNumber: '14.7',
      title: 'Pytania kalibrowane: Jak zmusić drugą stronę do myślenia',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Zamiast stawiać twarde veta, wytrawny negocjator posługuje się pytaniami kalibrowanymi zaczynającymi się od słów „Jak” lub „Co”.',
        'Zamiast powiedzieć: „Nie ma mowy, nie obetnę ceny o 30%!”, pyta: „Jak mam utrzymać jakość materiałów i termin dostawy przy takiej cenie?”.',
        'Zamiast: „Musicie oddać mi te pieniądze do piątku!”, pyta: „Co możemy zrobić, by rozliczenie wpłynęło do końca tygodnia bez zakłócania waszej płynności?”.',
        'Pytania kalibrowane przenoszą ciężar rozwiązania problemu na drugą stronę, nie wywołując w niej poczucia ataku ani oporu psychologicznego. Rozmówca przestaje walczyć, a zaczyna główkować nad Twoim dylematem.',
        'PRZYKŁAD 4: Wynajmujący mieszkanie student Paweł staje przed żądaniem właściciela lokalu: „Od przyszłego miesiąca podnoszę czynsz o 600 zł, albo do końca tygodnia ma się pan wyprowadzić!”. Paweł zamiast krzyczeć lub płakać, stosuje pytanie kalibrowane tonem nocnego radiowca: „Panie Stanisławie, bardzo zależy mi na dbaniu o to mieszkanie tak jak dotąd. Jak mam pogodzić tak nagłą podwyżkę z moim studenckim budżetem w połowie semestru bez konieczności rzucania uczelni?”. Właściciel, zaskoczony brakiem agresji, zawahał się, spojrzał w podłogę i zaproponował: „No dobrze, niech będzie 150 zł teraz, a resztę omówimy w wakacje”.'
      ]
    },
    {
      id: 'sec-14-8',
      pageNumber: 686,
      sectionNumber: '14.8',
      title: 'BATNA: Pancerz i fundament siły negocjacyjnej',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'BATNA (Best Alternative to a Negotiated Agreement) to Twoja najlepsza alternatywa w przypadku braku porozumienia. To Twój realny plan B, który wprowadzisz w życie, jeśli wstaniesz od stołu negocjacyjnego.',
        'Twoja pozycja negocjacyjna nie zależy od tego, jak głośno potrafisz krzyczeć, ani jak drogim garniturem dysponujesz. Zależy wyłącznie od tego, jak dobrą masz alternatywę, gdy negocjacje zakończą się fiaskiem.',
        'ZASADY BUDOWANIA BATNA:',
        '1. Nigdy nie siadaj do stołu bez zbadania alternatyw.',
        '2. Aktywnie inwestuj w uatrakcyjnianie swojego planu B przed rozpoczęciem rozmów.',
        '3. Poznaj lub oszacuj BATNA drugiej strony (Czy oni mają kolejki chętnych, czy jesteś ich jedyną deską ratunku?).',
        '4. Nigdy nie myl BATNA z marzeniem (BATNA musi być realna i gotowa do wdrożenia).',
        'PRZYKŁAD 5: Negocjacje zakupu używanego samochodu. Klient A ma upatrzony tylko jeden model w całym województwie i jest w nim zakochany (zerowa BATNA). Sprzedawca wyczuwa jego desperację i nie opuszcza ani złotówki. Klient B przed wizytą w komisie znalazł dwa inne bardzo dobre auta u prywatnych właścicieli i umówił się na jazdę próbną na jutro (silna BATNA). Może ze spokojem powiedzieć: „Mój budżet to 32 000 zł. Jeśli nie możemy dojść do tej kwoty, dziękuję za poświęcony czas, obejrzę jutro drugie auto”. Sprzedawca natychmiast zgadza się na rabat, widząc, że klient nie boi się odejść.'
      ],
      caseStudyRef: {
        id: 'cs-ch14-batna-praca',
        title: 'Negocjacje na Szczycie: Jak Monika Wykorzystała BATNA do Zmiany Roli w Korporacji',
        subtitle: 'Od niedocenianej specjalistki do liderki nowo utworzonego departamentu innowacji',
        protagonist: 'Monika (Senior Product Manager w sektorze finansowym, 36 lat) i Dyrektor Pionu Technologii',
        context: 'Coroczna rewizja wyników i płac w dużej instytucji bankowej po 3 latach rekordowych wyników zespołu Moniki.',
        story: [
          'Monika zarządzała kluczową aplikacją mobilną banku. Przez 3 lata zwiększyła liczbę aktywnych użytkowników o 300%. Mimo to jej pensja pozostawała na poziomie rynkowego juniora, a jej wnioski o awans na dyrektora były stale odkładane na „lepsze czasy budżetowe”.',
          'Początkowe próby negocjacji kończyły się fiaskiem. Dyrektor zbywał ją słowami: „Moniko, wiesz, jaka jest sytuacja gospodarcza. Wszyscy musimy zacisnąć pasa”. Monika czuła bezsilność i złość.',
          'Zamiast wchodzić w jałowy konflikt emocjonalny, Monika postanowiła zbudować żelazną BATNA. Przez 4 miesiące odświeżyła sieć kontaktów, zaktualizowała portfolio i wzięła udział w dyskretnych rekrutacjach.',
          'Efekt: otrzymała oficjalną ofertę od konkurencyjnego fintechu na stanowisko VP of Product z 50% wyższym wynagrodzeniem i pakietem akcji.',
          'Mając twardą BATNA w kieszeni, Monika nie rzuciła wypowiedzenia na biurko w geście zemsty. Umówiła się na spokojną rozmowę strategiczną z obecnym dyrektorem.',
          'Strategia rozmowy: „Bardzo zależy mi na tej firmie i na zespole, który tu zbudowałam (Wspólny interes). Otrzymałam jednak propozycję objęcia roli VP w innej instytucji. Zanim podejmę jakąkolwiek decyzję, chcę zapytać, jak pan widzi rozwój nowego obszaru Open Banking u nas i czy widzi pan dla mnie przestrzeń do poprowadzenia tego jako dyrektor pionu?”.',
          'Dyrektor, czując całkowity spokój Moniki i widząc realne ryzyko utraty filaru całego departamentu (zmiana układu sił dzięki BATNA), w ciągu 48 godzin stworzył nowy departament innowacji i powierzył Monice jego stery z wyrównaniem pensji do poziomu rynkowego.'
        ],
        decisionTaken: 'Monika nie szantażowała przełożonego, lecz wykorzystała zewnętrzną ofertę jako pancerz dający jej wewnętrzną pewność siebie i swobodę decyzyjną.',
        whatProtagonistSaw: 'Monika wcześniej wierzyła, że „ciężka praca sama się obroni”, a proszenie o pieniądze jest czymś niestosownym.',
        whatWasMissed: 'Dyrektor nie podnosił pensji nie dlatego, że jej nie szanował, ale dlatego, że dopóki nie miała alternatywy, bank oszczędzał na jej skromności.',
        psychologicalAnalysis: {
          coreMechanism: 'Zmiana bilansu sił poprzez eliminację lęku przed odrzuceniem (efekt silnej BATNA).',
          cognitiveBiases: [
            { name: 'Klątwa skromności (Impostor Syndrome)', description: 'Przekonanie, że domaganie się adekwatnej zapłaty jest arogancją.', impact: 'Długoletnie tkwienie w niedocenieniu.' }
          ],
          defenseMechanisms: [
            { name: 'Sublimacja', explanation: 'Przekierowanie frustracji z niesprawiedliwości na profesjonalne poszukiwanie alternatyw rynkowych.' }
          ],
          emotionalDynamic: 'Przejście od syndromu ofiary do suwerennego partnera w dialogu biznesowym.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Brzuszno-przyśrodkowa kora przedczołowa', role: 'Stabilna wycena własnej wartości bez lęku', activationState: 'Wysoka podczas rozmowy końcowej' }
          ],
          neurotransmitters: [
            { name: 'Serotonina', roleInScenario: 'Wysoki poziom dający spokój i dominację bez agresji' }
          ],
          biologicalTimeline: [
            { timeMs: 'Rozmowa z dyrektorem', process: 'Brak skoków adrenaliny — Monika wiedziała, że niezależnie od wyniku rozmowy, wygrywa.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Dyskrecja i etyka', script: '„Nie traktuję tej rozmowy jako szantażu, lecz jako dowód mojego zaangażowania — lojalnie daję obecnej firmie pierwszeństwo”.', rationale: 'Chroni przed etykietą nielojalnego zdrajcy.' }
          ]
        },
        alternativePath: 'Gdyby Monika weszła do gabinetu ze złością i bez oferty w kieszeni, usłyszałaby kolejne puste obietnice lub została zwolniona za brak dyscypliny.',
        readerQuestion: 'Jaka jest Twoja realna BATNA w obecnej pracy lub w Twoich kluczowych relacjach osobistych?',
        keyTakeaway: 'Nigdy nie będziesz bezpieczny przy stole negocjacyjnym, dopóki nie masz dokąd pójść, gdy stół zapłonie.'
      }
    },
    {
      id: 'sec-14-9',
      pageNumber: 690,
      sectionNumber: '14.9',
      title: 'Kompromis kontra integracja: Dlaczego cięcie na pół niszczy wartość',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Wielu uważa kompromis za szczyt dojrzałości. W rzeczywistości kompromis polega na tym, że obie strony rezygnują z części swoich kluczowych potrzeb. Rezultatem jest „zgniły kompromis”, w którym produkt końcowy jest kaleki, a obie strony czują niedosyt i ukryty żal.',
        'Negocjacje Integracyjne (Rozszerzanie Tortu) polegają na poszukiwaniu nowych zmiennych, które nie były brane pod uwagę w pierwotnym sporze.',
        'PRZYKŁAD 6: Małżeństwo kupuje mieszkanie. On chce parter z ogródkiem dla psa, ona chce 4. piętro ze względu na widok i światło. Zgniły kompromis: 2. piętro bez ogródka i ze słabym widokiem — oboje są niezadowoleni. Rozwiązanie integracyjne: Kupują mieszkanie na ostatnim piętrze w budynku z dużym tarasem dachowym obsadzonym zielenią, na którym pies ma wybieg, a żona ma wymarzony widok na panoramę miasta.'
      ]
    },
    {
      id: 'sec-14-10',
      pageNumber: 694,
      sectionNumber: '14.10',
      title: 'Trudny partner: Blef, groźba, szantaż emocjonalny i technika „Dobrego i Złego Psa”',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Co zrobić, gdy druga strona gra nieczysto? Stosuje groźby, krzyczy, blefuje lub stosuje klasyczną manipulację „Dobry i Zły Policjant” (jeden negocjator jest agresywny i grozi zerwaniem rozmów, a drugi udaje przyjaciela i prosi o ustępstwo)?',
        'ZASADY OBRONY PRZED BRUDNĄ GRĄ:',
        '1. Zdemaskuj taktykę bez agresji: „Wygląda na to, że gramy w dobrego i złego policjanta. Czy możemy pominąć ten teatr i przejść do twardych liczb?”. Nazwanie gry na głos natychmiast ją paraliżuje.',
        '2. Oddziel człowieka od problemu: Kiedy ktoś na ciebie krzyczy, nie krzycz głośniej. Zastosuj milczenie i poczekaj, aż wyrzuci z siebie całą energię afektu.',
        '3. Testuj blef pytaniami o szczegóły techniczne i dowody: „Jeśli macie ofertę o 40% niższą od naszej, dlaczego wciąż marnujecie czas na rozmowy z nami?”.',
        'PRZYKŁAD 7: Negocjator korporacyjny w rozmowie z dostawcą oprogramowania mówi z udawaną wściekłością: „Wasza cena to absurd! Jeśli do jutra nie zejdziecie o połowę, zrywamy umowę i idziemy do sądu!”. Dostawca spokojnie zapisuje notatkę, milczy przez 5 sekund, po czym mówi łagodnym tonem: „Rozumiem, że kwestia budżetu na ten rok jest pod ogromną presją. Jeśli jednak decydujecie się na drogę sądową, szanuję tę decyzję. Z kim z państwa działu prawnego powinien skontaktować się nasz radca?”. Negocjator korporacyjny natychmiast wycofał się z groźby: „Nie no, nie musimy od razu iść do prawników, usiądźmy i porozmawiajmy o rabacie ilościowym”. Blef został obnażony.'
      ]
    },
    {
      id: 'sec-14-11',
      pageNumber: 698,
      sectionNumber: '14.11',
      title: 'Studium przypadku: Spór o sukcesję i podział majątku rodzinnego',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Konflikty w firmach rodzinnych należą do najbardziej skomplikowanych na świecie, ponieważ mieszają się w nich dwa skrajnie sprzeczne systemy: system rodzinny (oparty na bezwarunkowej miłości, opiece i równości) oraz system rynkowy (oparty na efektywności, merytokracji i twardych wynikach).',
        'Poniższe studium przypadku ilustruje, jak brak rozdzielenia ról rodzinnych od ról biznesowych potrafi zepchnąć dochodowe imperium na skraj bankructwa i jak interwencja mediacyjna uratowała firmę.'
      ],
      caseStudyRef: {
        id: 'cs-ch14-sukcesja',
        title: 'Fabryka na Rozdrożu: Wojna Braci o Przyszłość Imperium Ojca',
        subtitle: 'Zderzenie tradycji z innowacją — jak rozdzielić role rodzinne od ról biznesowych',
        protagonist: 'Adam (starszy brat, Dyrektor Operacyjny, 42 lata) i Filip (młodszy brat, Dyrektor Marketingu, 34 lata)',
        context: 'Posiedzenie zarządu po odejściu na emeryturę założyciela firmy, produkującej meble tapicerowane.',
        story: [
          'Firma zatrudniała 250 pracowników i przynosiła 40 milionów złotych obrotu. Po ustąpieniu ojca stery przejęli dwaj bracia. Konflikt tlił się od dawna, ale wybuchł podczas debaty nad budżetem na kolejny rok.',
          'Stanowisko Adama: „Musimy zainwestować 8 milionów w automatyzację linii produkcyjnej i roboty spawalnicze. Musimy ciąć koszty jednostkowe, inaczej zjedzą nas fabryki z Azji!”.',
          'Stanowisko Filipa: „Bzdura! Musimy przeznaczyć te pieniądze na e-commerce, rebranding i wejście na rynek niemiecki z meblami designerskimi. Świat idzie w stronę marek premium!”.',
          'Dyskusja szybko zeszła po schodach Glasla na poziom 4 i 5. Adam wykrzyczał: „Zawsze byłeś rozpuszczonym marzycielem ojca, który nie ma pojęcia o twardej robocie!”. Filip odpowiedział: „A ty jesteś skostniałym dinozaurem bez wizji, który zniszczy tę firmę!”. Zablokowali nawzajem podpisywanie faktur. Bank zagroził wymówieniem linii kredytowej.',
          'Ojciec zatrudnił zewnętrznego mediatora gospodarczego. Pierwsza sesja: oddzielenie ludzi od problemu. Mediator zakazał braciom używania słów „ty zawsze” i nakazał spisanie twardych faktów.',
          'Odkrycie ukrytych interesów: Adam nie bał się marketingu — bał się, że przestarzała fabryka stanie z powodu awarii i nie dowiezie zamówień (potrzeba bezpieczeństwa operacyjnego). Filip nie chciał zniszczyć fabryki — bał się, że produkcja tanich mebli bez marki skazuje firmę na powolną śmierć marżową (potrzeba wzrostu i prestiżu).',
          'Rozwiązanie integracyjne (Win-Win): Podzielono budżet na etapy. 4 miliony przeznaczono na zrobotyzowanie wąskiego gardła fabryki (co uwolniło moce), a 4 miliony na pilotaż e-commerce na rynku niemieckim dla nowej submarki premium. W ciągu 2 lat przychody spółki wzrosły o 35%, a bracia odzyskali braterską więź.'
        ],
        decisionTaken: 'Bracia zgodzili się na proces mediacji i przeszli ze sztywnej wojny o całą pulę budżetu do sekwencyjnego finansowania obu celów.',
        whatProtagonistSaw: 'Adam widział w bracie nieodpowiedzialnego lekkoducha; Filip widział w Adamie zawistnego zazdrośnika blokującego innowacje.',
        whatWasMissed: 'Że ich kompetencje były komplementarne — fabryka bez marketingu zbankrutowałaby, a marketing bez sprawnej fabryki nie miałby czego wysyłać klientom.',
        psychologicalAnalysis: {
          coreMechanism: 'Przeniesienie dynamiki rywalizacji braterskiej z dzieciństwa na strukturę zarządczą spółki.',
          cognitiveBiases: [
            { name: 'Iluzja sumy zerowej (Zero-Sum Fallacy)', description: 'Przekonanie, że każdy milion wydany przez brata jest bezpośrednią osobistą stratą drugiego.', impact: 'Zacięta walka pozycyjna.' },
            { name: 'Błąd potwierdzenia', description: 'Każdy błąd w dziale brata był traktowany jako dowód na jego całkowitą niekompetencję.', impact: 'Eskalacja nieufności.' }
          ],
          defenseMechanisms: [
            { name: 'Reakcja upozorowana', explanation: 'Agresywna pewność siebie maskowała lęk przed sprostaniem legendzie ojca-założyciela.' }
          ],
          emotionalDynamic: 'Głęboki lęk przed byciem „tym gorszym synem” w oczach emerytowanego ojca.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Przednia kora zakrętu obręczy (ACC)', role: 'Rejestracja zagrożenia statusowego w rodzinie', activationState: 'Ekstremalna' },
            { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Ocena modeli biznesowych', activationState: 'Odblokowana dopiero po interwencji mediatora' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol i testosteron', roleInScenario: 'Mieszanka napędzająca walkę o pozycję samca alfa w zarządzie' }
          ],
          biologicalTimeline: [
            { timeMs: 'Początek mediacji', process: 'Wymuszenie 10 minut milczenia i parafrazy obniża poziom pobudzenia autonomicznego.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Protokół Rozdzielenia Kapeluszy', script: 'Na posiedzeniu zarządu bracia występują wyłącznie jako Dyrektor Operacyjny i Dyrektor Marketingu. Kwestie rodzinne omawiane są na osobnym spotkaniu przy kawie.', rationale: 'Chroni biznes przed toksynami z przeszłości.' }
          ]
        },
        alternativePath: 'Gdyby nie mediacja, spór skończyłby się podziałem majątku przez sąd, likwidacją 250 miejsc pracy i dożywotnią nienawiścią w rodzinie.',
        readerQuestion: 'W jakich konfliktach w Twoim życiu kłócisz się o stanowisko, zapominając zapytać o to, jaka prawdziwa potrzeba stoi za żądaniem drugiej strony?',
        keyTakeaway: 'Wielcy negocjatorzy nie pokonują partnera przy stole. Oni wspólnie z partnerem pokonują problem, który leży na stole.'
      }
    },
    {
      id: 'sec-14-12',
      pageNumber: 702,
      sectionNumber: '14.12',
      title: 'Mediacja: Sztuka bycia mostem nad przepaścią',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Kiedy dwie strony utkną na 5. lub 6. poziomie Glasla, ich zdolność do bezpośredniej rozmowy wynosi zero. Każde słowo jest odczytywane jako kłamstwo lub atak.',
        'W tym momencie wkracza Mediator. Mediator nie wydaje wyroków, nie wskazuje winnych i nie rozstrzyga o prawie. Jest architektem bezpiecznego środowiska komunikacyjnego.',
        'Cyrkularne Pytania Mediatora: Zamiast pytać: „Kto zaczął?”, pyta: „Jak myślisz, jak Twoje milczenie wpłynęło na reakcję drugiej strony?”.',
        'Reframing Przemocowych Komunikatów: Kiedy jedna strona krzyczy: „On jest złodziejem i oszustem!”, mediator tłumaczy to na język potrzeb: „Rozumiem, że kwestia przejrzystości rozliczeń finansowych jest dla pani absolutnym fundamentem bezpieczeństwa w tej umowie?”. Toksyna zostaje zneutralizowana, esencja zostaje ocalona.'
      ]
    },
    {
      id: 'sec-14-13',
      pageNumber: 706,
      sectionNumber: '14.13',
      title: 'Laboratorium Negocjacji: Przygotowanie 5-krokowej strategii',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Oto szablon przygotowania do dowolnej trudnej rozmowy negocjacyjnej, który powinieneś wypełnić na piśmie przed wejściem do pokoju:',
        '1. Moje Stanowisko vs Mój Interes: Czego żądam? Dlaczego tak naprawdę tego potrzebuję?',
        '2. Prawdopodobny Interes Drugiej Strony: Czego oni się boją? Co jest dla nich sprawą honoru lub bezpieczeństwa?',
        '3. Moja BATNA: Co dokładnie zrobię, jeśli nie dojdziemy do porozumienia? Jak mogę wzmocnić mój plan B przed rozmową?',
        '4. Waluty Wymienne (Non-monetary currencies): Co kosztuje mnie niewiele, a ma ogromną wartość dla nich? (Terminy, rekomendacje, wsparcie techniczne, elastyczność).',
        '5. Pytania Kalibrowane: Jakie pytania zaczynające się od „Jak” i „Co” zadam, by skłonić ich do współpracy zamiast obrony?'
      ],
      exerciseRef: {
        id: 'ex-14-lab-karty',
        title: 'Karta Przygotowania do Negocjacji: Twój Osobisty Szablon Przed Rozmową',
        subtitle: 'Zaprojektuj precyzyjną architekturę rozmowy zanim usiądziesz do stołu',
        objective: 'Zbudowanie kompletnego arkusza negocjacyjnego eliminującego improwizację i stres.',
        durationMinutes: 25,
        neuroScientificFoundation: 'Stworzenie zewnętrznej procedury poznawczej (checklisty) odciąża pamięć roboczą i hamuje reakcje odruchowe pnia mózgu w sytuacji stresu negocjacyjnego.',
        steps: [
          {
            stepNumber: 1,
            title: 'Warunki brzegowe (Walk-Away)',
            instruction: 'Wpisz swoje 3 nieprzekraczalne warunki brzegowe (cena minimalna, terminy, zasady etyczne).',
            promptText: 'Moje warunki brzegowe:',
            placeholder: 'Minimalna stawka: 120 zł/h; brak pracy w weekendy; płatność w terminie 14 dni...'
          },
          {
            stepNumber: 2,
            title: 'Waluty pozafinansowe',
            instruction: 'Wypisz 3 waluty wymienne, którymi możesz handlować (np. czas trwania umowy, polecenia, elastyczność).',
            promptText: 'Moje waluty wymienne:',
            placeholder: 'Mogę zaoferować dłuższy termin w zamian za pisemne referencje na LinkedInie...'
          },
          {
            stepNumber: 3,
            title: 'Audyt Zarzutów i BATNA',
            instruction: 'Sformułuj audyt zarzutów i nazwij swoją twardą alternatywę (plan B).',
            promptText: 'Audyt zarzutów i moja BATNA:',
            placeholder: 'Zarzut: Pomyślą, że jestem zbyt drogi. BATNA: Mam ofertę od klienta Y na 110 zł/h...'
          }
        ],
        reflectionQuestions: [
          'O ile spokojniejszy się czujesz, gdy masz plan B spisany czarno na białym?',
          'Dlaczego improwizacja w negocjacjach niemal zawsze kończy się uległością lub niepotrzebną agresją?'
        ]
      }
    },
    {
      id: 'sec-14-14',
      pageNumber: 710,
      sectionNumber: '14.14',
      title: 'Wielki Test Konfliktu, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Poznaliśmy tajniki rozwiązywania sporów: przejście od stanowisk do interesów, deeskalację taktyczną, budowanie twardej BATNA oraz sztukę mediacji.',
        'Wiesz już, jak poruszać się wśród ludzi, jak wpływać na świat i jak negocjować trudne porozumienia. Ale na drodze każdego człowieka stoi najtrudniejszy, najbardziej wymagający przeciwnik, jakiego kiedykolwiek spotkasz:',
        'TY SAM. Twój własny stres, Twoja samokrytyka, Twój paraliżujący perfekcjonizm i ból porażki.',
        'W Rozdziale 15 wejdziemy w ostateczną twierdzę psychiki: SAMOKONTROLĘ, ODPORNOŚĆ PSYCHICZNĄ I DZIAŁANIE — nauczymy się budować niewzruszony wewnętrzny spokój w oku cyklonu.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 14.'
      ]
    }
  ]
};
