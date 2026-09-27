import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterEightExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W modelu prawdopodobieństwa elaboracji (ELM) Petty’ego i Cacioppo (Sekcja 8.2), trwała zmiana postaw i przekonań zachodzi wtedy, gdy perswazja przebiega:',
    topic: 'Tor Centralny vs Peryferyjny (ELM)',
    sectionRef: 'Sekcja 8.2',
    options: [
      { label: 'A', text: 'Torem peryferyjnym — dzięki obecności celebryty i chwytliwej muzyce w tle.', isCorrect: false },
      { label: 'B', text: 'Torem centralnym — wymaga motywacji i zdolności poznawczej odbiorcy do głębokiego przetworzenia merytorycznych argumentów.', isCorrect: true },
      { label: 'C', text: 'Wyłącznie podczas snu hipnotycznego.', isCorrect: false },
      { label: 'D', text: 'Za pomocą wysyłania powtarzających się powiadomień push.', isCorrect: false }
    ],
    explanation: 'Tor centralny angażuje korę przedczołową i wymaga wysiłku Systemu 2. Zmiana postaw osiągnięta tą drogą jest stabilna w czasie, odporna na kontrargumenty i przekłada się na realne zachowanie.',
    keyTakeaway: 'Emocje i triki dają szybką, ale nietrwałą uległość. Trwałe przekonanie wymaga toru centralnego.'
  },
  {
    id: 2,
    question: 'Na czym polega Reguła Wzajemności Roberta Cialdiniego (Sekcja 8.7) i dlaczego ma ona tak potężny biologiczny charakter?',
    topic: 'Reguła Wzajemności',
    sectionRef: 'Sekcja 8.7',
    options: [
      { label: 'A', text: 'Jest to nakaz prawny zapisany w konstytucji większości państw.', isCorrect: false },
      { label: 'B', text: 'Otrzymanie bezinteresownego daru lub przysługi generuje silne napięcie psychologiczne i dług wdzięczności, który zmusza nas do odwzajemnienia gestu, często z nawiązką.', isCorrect: true },
      { label: 'C', text: 'Działa wyłącznie w transakcjach na rynku nieruchomości.', isCorrect: false },
      { label: 'D', text: 'Zawsze sprawia, że zaczynamy nienawidzić darczyńcę.', isCorrect: false }
    ],
    explanation: 'Wzajemność to fundament ewolucyjnego przetrwania gatunku (altruizm odwzajemniony). Dług wdzięczności jest dla mózgu stanem dyskomfortu afektywnego, którego jednostka pragnie się jak najszybciej pozbyć.',
    keyTakeaway: 'Nawet niechciany prezent tworzy zobowiązanie, które paraliżuje odmowę.'
  },
  {
    id: 3,
    question: 'W eksperymentach Tversky’ego i Kahnemana z „Problemem Choroby Azjatyckiej” (Sekcja 8.10), Framing (Ramowanie) wykazał, że:',
    topic: 'Efekt Ramowania (Framing)',
    sectionRef: 'Sekcja 8.10',
    options: [
      { label: 'A', text: 'Ludzie są odporni na formę prezentacji danych matematycznych.', isCorrect: false },
      { label: 'B', text: 'W ramie zysków („uratujemy 200 osób”) ludzie unikają ryzyka, natomiast w identycznej matematycznie ramie strat („umrze 400 osób”) ludzie stają się skłonni do podejmowania skrajnego ryzyka.', isCorrect: true },
      { label: 'C', text: 'Lekarze zawsze wybierają najtańsze leki.', isCorrect: false },
      { label: 'D', text: 'Wirusy rozprzestrzeniają się szybciej w obecności słów o zabarwieniu negatywnym.', isCorrect: false }
    ],
    explanation: 'Teoria Perspektywy dowodzi, że ból straty boli około 2–2,5 raza mocniej niż radość z analogicznego zysku. Zmiana jednego słowa (zysk vs strata) całkowicie przełącza preferencje decyzyjne mózgu.',
    keyTakeaway: 'To, jak ujmiesz rzeczywistość w ramy, decyduje o wyborze bardziej niż same fakty.'
  },
  {
    id: 4,
    question: 'Technika „Drzwi zatrzaśniętych przed nosem” (Door-in-the-Face) polega na:',
    topic: 'Techniki Wpływu i Kotwiczenie Społeczne',
    sectionRef: 'Sekcja 8.7 i 8.11',
    options: [
      { label: 'A', text: 'Wysunięciu najpierw skrajnie wygórowanej prośby, na którą rozmówca na pewno powie „nie”, a następnie natychmiastowym przedstawieniu mniejszej, właściwej prośby jako „ustępstwa”.', isCorrect: true },
      { label: 'B', text: 'Fizycznym barykadowaniu wejścia do biura.', isCorrect: false },
      { label: 'C', text: 'Zadawaniu pytań tylko przez zamknięte drzwi.', isCorrect: false },
      { label: 'D', text: 'Podpisaniu umowy kredytowej bez czytania załączników.', isCorrect: false }
    ],
    explanation: 'Technika ta opiera się na kontraście percepcyjnym (Tom I, Rozdział 4) oraz regule wzajemności ustępstw: skoro nadawca ustąpił ze swoich pierwotnych żądań, odbiorca czuje presję, by również pójść na kompromis.',
    keyTakeaway: 'Odmowa dużej prośby toruje drogę do zgody na prośbę mniejszą.'
  },
  {
    id: 5,
    question: 'Jaka jest fundamentalna granica etyczna oddzielająca szlachetną perswazję od manipulacji (Sekcja 8.1 i 8.14)?',
    topic: 'Granica Wpływu: Wolność i Prawda',
    sectionRef: 'Sekcja 8.1',
    options: [
      { label: 'A', text: 'Perswazja dotyczy tylko polityki, a manipulacja tylko zakupów.', isCorrect: false },
      { label: 'B', text: 'Perswazja szanuje autonomię odbiorcy, nie zataja kluczowych faktów i służy także jego dobru, podczas gdy manipulacja traktuje człowieka instrumentalnie, ukrywając prawdziwy cel i zniekształcając obraz sytuacji.', isCorrect: true },
      { label: 'C', text: 'Nie ma żadnej różnicy, każde porozumienie z drugim człowiekiem to manipulacja.', isCorrect: false },
      { label: 'D', text: 'Perswazja może być prowadzona wyłącznie szeptem.', isCorrect: false }
    ],
    explanation: 'W perswazji odbiorca zachowuje pełną wolność powiedzenia „nie” bez poczucia winy lub strachu i dysponuje rzetelną wiedzą. W manipulacji jego procesy poznawcze są podstępnie sabotowane dla korzyści manipulatora.',
    keyTakeaway: 'Perswazja daje wybór; manipulacja tworzy iluzję wyboru.'
  },
  {
    id: 6,
    question: 'Dlaczego heurystyka Zaangażowania i Konsekwencji (Sekcja 8.9) zmusza ludzi do trwania w ewidentnie błędnych decyzjach życiowych?',
    topic: 'Zaangażowanie i Konsekwencja',
    sectionRef: 'Sekcja 8.9',
    options: [
      { label: 'A', text: 'Z powodu przepisu prawa handlowego.', isCorrect: false },
      { label: 'B', text: 'Mózg dąży do spójności poznawczej — przyznanie się do błędu po publicznej deklaracji wywołuje bolesny dysonans poznawczy i spadek statusu społecznego.', isCorrect: true },
      { label: 'C', text: 'Ludzie fizycznie zapominają o pierwotnie podjętych decyzjach.', isCorrect: false },
      { label: 'D', text: 'Decyzje raz podjęte są trwale zapisywane w DNA komórek nerwowych.', isCorrect: false }
    ],
    explanation: 'Po złożeniu publicznej obietnicy lub zainwestowaniu czasu i pieniędzy (pułapka utopionych kosztów), człowiek zaczyna naginać fakty, byle tylko zachować wizerunek osoby stałej i prawdomównej.',
    keyTakeaway: 'Potrzeba bycia konsekwentnym w oczach innych bywa silniejsza niż instynkt samozachowawczy.'
  },
  {
    id: 7,
    question: 'W jaki sposób zasada Społecznego Dowodu Słuszności (Social Proof) może zostać wykorzystana w sposób prospołeczny i etyczny (Sekcja 8.6)?',
    topic: 'Społeczny Dowód Słuszności',
    sectionRef: 'Sekcja 8.6',
    options: [
      { label: 'A', text: 'Przez kupowanie fałszywych opinii i botów w internecie.', isCorrect: false },
      { label: 'B', text: 'Poprzez pokazywanie autentycznych zachowań większości grupy wspierających pożądany cel (np. „8 na 10 sąsiadów w naszej gminie już segreguje odpady”).', isCorrect: true },
      { label: 'C', text: 'Poprzez straszenie karami finansowymi za brak jednomyślności.', isCorrect: false },
      { label: 'D', text: 'Przez ukrywanie statystyk przed opinią publiczną.', isCorrect: false }
    ],
    explanation: 'Społeczny dowód słuszności działa najsilniej, gdy odwołuje się do lokalnej, tożsamej grupy odniesienia. Pokazanie realnego pozytywnego zachowania stada natychmiast obniża opór jednostki przed dołączeniem.',
    keyTakeaway: 'Ludzie podążają za stadem; jeśli chcesz zmiany, pokaż, że stado już tam zmierza.'
  }
];

export const chapterEightCaseStudyCarDealer: CaseStudy = {
  id: 'cs-ch8-salon-kredyt',
  title: 'Kawa, Prezent i Pułapka Zobowiązania: Grzegorz w Salonie Aut',
  subtitle: 'Jak 31-letni inżynier podpisał 10-letni niekorzystny kredyt pod wpływem reguły wzajemności',
  protagonist: 'Grzegorz, 31 lat, inżynier budownictwa',
  context: 'Sobotnia wizyta w salonie samochodowym w celu niezobowiązującego obejrzenia auta kompaktowego.',
  story: [
    'Grzegorz planował kupić 4-letnie auto używane za gotówkę (około 60 000 zł). W sobotnie przedpołudnie wszedł do autoryzowanego salonu, aby jedynie usiąść w nowym modelu i sprawdzić ilość miejsca z tyłu.',
    'Przywitał go uśmiechnięty doradca Norbert. Zamiast zarzucać Grzegorza ofertami, zaprosił go do skórzanego fotela, przyniósł wybitną kawę z ekspresu i elegancki brelok z logo marki w prezencie: „To dla pana, bez względu na to, co pan wybierze”. Następnie Norbert zaproponował: „Wie pan co, dzisiaj jest piękny dzień. Mam tu zatankowaną wersję Premium z napędem 4x4. Proszę wziąć kluczyki i pojechać z żoną na godzinną przejażdżkę za miasto”.',
    'Grzegorz spędził godzinę w pachnącym nowością aucie o mocy 200 KM. Kiedy wrócił do salonu, czuł ogromne podekscytowanie i... potężny dług wdzięczności. Norbert poświęcił mu 2 godziny, poczęstował kawą, dał prezent i powierzył drogie auto.',
    'Kiedy usiedli do biurka, Norbert przedstawił kalkulację: nowe auto kosztowało 165 000 zł. Widząc wahanie Grzegorza, Norbert zastosował regułę ustępstwa: „Rozumiem, to duża kwota. Ale co, jeśli obniżę marżę salonu o 8 000 zł, a resztę rozłożymy na nasz promocyjny kredyt z ratą zaledwie 1800 zł miesięcznie?”.',
    'Grzegorz poczuł, że odmowa w tym momencie byłaby chamskim policzkiem dla tak wspaniałego, pomocnego człowieka. Jego kora przedczołowa została całkowicie zablokowana przez wdzięczność i kontrast percepcyjny. Podpisał umowę kredytową na 8 lat z obowiązkowym drogim pakietem ubezpieczeń. Trzy dni później, gdy emocje opadły, uświadomił sobie, że całkowity koszt kredytu wyniesie ponad 230 000 zł.'
  ],
  decisionTaken: 'Grzegorz podpisał długoterminowe, ryzykowne zobowiązanie finansowe, ulegając sekwencji reguły wzajemności, zaangażowania i kontrastu.',
  whatProtagonistSaw: 'Niezwykle uprzejmego, bezinteresownego doradcę, wyjątkową okazję cenową i prestiż nowego auta.',
  whatWasMissed: 'Że kawa, brelok i jazda próbna były ustrukturyzowaną procedurą wywoływania paraliżu decyzyjnego za pomocą długu wdzięczności.',
  psychologicalAnalysis: {
    coreMechanism: 'Reguła Wzajemności (Cialdini) połączona z heurystyką zakotwiczenia raty miesięcznej i redukcją dysonansu poznawczego.',
    cognitiveBiases: [
      { name: 'Dług wdzięczności (Reciprocity Debt)', description: 'Nieznośny przymus emocjonalny zrewanżowania się za okazaną uprzejmość.', impact: 'Paraliż asertywności i niemożność powiedzenia „nie”.' },
      { name: 'Księgowanie umysłowe (Mental Accounting)', description: 'Skupienie uwagi na racie 1800 zł zamiast na całkowitej kwocie długu 230 000 zł.', impact: 'Zignorowanie skrajnego ryzyka finansowego.' }
    ],
    defenseMechanisms: [
      { name: 'Racjonalizacja po zakupie', explanation: '„Przecież nowe auto jest bezpieczniejsze i nie będzie się psuło, więc w zasadzie oszczędzam na mechaniku”.' }
    ],
    emotionalDynamic: 'Lęk przed wyjściem na niewdzięcznika połączony z dopaminowym hajem z jazdy testowej.'
  },
  decisionProcessAnalysis: {
    trigger: 'Otrzymanie prezentu, kawy i zaufania w postaci kluczyków do nowego auta.',
    attentionFocus: 'Przyjazna twarz Norberta i poczucie zobowiązania.',
    interpretation: '„Ten człowiek zrobił dla mnie tak wiele, nie mogę go teraz zawieść i wyjść bez niczego”.',
    emotion: 'Wdzięczność, wstyd na myśl o odmowie, ekscytacja prestiżem.',
    impulse: 'Przystać na propozycję, by rozładować napięcie w gabinecie.',
    action: 'Podpisanie umowy kredytowej.',
    consequence: 'Dramatyczne obciążenie budżetu domowego na kolejną dekadę i utrata płynności.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Prążkowie (Układ nagrody)', role: 'Wyrzut dopaminy podczas jazdy luksusowym autem', activationState: 'Ekstremalna stymulacja' },
      { region: 'Brzuszno-przyśrodkowa kora przedczołowa', role: 'Kalkulacja moralna długu społecznego', activationState: 'Zdominowana przez regułę wzajemności' }
    ],
    neurotransmitters: [
      { name: 'Dopamina i oksytocyna', roleInScenario: 'Zbudowanie pozornego poczucia przyjaźni i więzi ze sprzedawcą' }
    ],
    biologicalTimeline: [
      { timeMs: 'Początek', process: 'Otrzymanie darmowego podarunku aktywuje szlak wzajemności.' },
      { timeMs: 'Po powrocie', process: 'Dopaminowy szczyt paraliżuje logiczne myślenie dlPFC.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Reguła wzajemności i stopa w drzwiach', description: 'Mały podarunek toruje drogę do gigantycznej transakcji.', vulnerabilityExploited: 'Lęk przed byciem postrzeganym jako roszczeniowy lub niewdzięczny' }
    ],
    counterMeasures: [
      { step: 'Zasada 72 Godzin i Redefinicja Darczyńcy', script: '„Panie Norbercie, dziękuję za świetną obsługę i pyszną kawę. Moja żelazna zasada życiowa brzmi: przy decyzjach powyżej 10 000 zł nigdy nie podpisuję dokumentów w dniu prezentacji. Wrócę do domu, przeliczę budżet i odezwę się we wtorek”.', rationale: 'Rozpoznanie chwytu marketingowego zwalnia z długu moralnego: kawa była kosztem marketingu korporacji, a nie prywatnym darem Norberta.' }
    ]
  },
  alternativePath: 'Gdyby Grzegorz zdefiniował w głowie kawę i jazdę jako element pracy handlowca, a nie osobistą przysługę, spokojnie podziękowałby za jazdę i kupił planowane auto używane, oszczędzając 170 000 zł.',
  readerQuestion: 'Kiedy ostatnio kupiłeś coś lub zgodziłeś się na niekorzystną przysługę tylko dlatego, że ktoś wcześniej był dla Ciebie „taki miły”?',
  keyTakeaway: 'Uprzejmość handlowa nie jest długiem osobistym. Masz niezbywalne prawo wypić darmową kawę i powiedzieć spokojne: „Nie, dziękuję”.'
};

export const chapterEightCaseStudyMlm: CaseStudy = {
  id: 'cs-ch8-mlm-konsekwencja',
  title: 'Schody do Sukcesu: Natalia w Pułapce Konsekwencji',
  subtitle: 'Jak 22-letnia studentka straciła oszczędności i przyjaciół w pogoni za iluzją wolności finansowej',
  protagonist: 'Natalia, 22 lata, studentka filologii angielskiej',
  context: 'Konferencja motywacyjna i struktura marketingu sieciowego (MLM) produktów kosmetycznych.',
  story: [
    'Natalia szukała dorywczej pracy. Dawna znajoma ze szkoły, Karolina, zaprosiła ją na kawę, mówiąc: „Rozwijam projekt e-commerce z liderami biznesu i pomyślałam o tobie, bo jesteś ambitna”.',
    'Spotkanie odbyło się w luksusowym hotelu. Natalia zobaczyła elegancko ubranych ludzi, którzy witali ją oklaskami i entuzjazmem. Lider struktury na scenie mówił o rzuceniu etatu, wolności finansowej i podróżach na Bali. Natalia poczuła się wyróżniona.',
    'Krok 1 (Mikro-zobowiązanie): Zaczęło się od zakupu pakietu startowego próbek za 250 zł. „To tylko inwestycja w twoją naukę, Natalia”.',
    'Krok 2 (Publiczna deklaracja): Na kolejnym spotkaniu poproszono ją o wyjście na scenę i wypowiedzenie do mikrofonu: „Mam na imię Natalia i do końca roku będę Diamentowym Liderem!”. Dwieście osób biło brawo na stojąco. W tym momencie uruchomiła się potężna heurystyka konsekwencji.',
    'Krok 3 (Utopione koszty i izolacja): Aby utrzymać status, Natalia musiała kupować miesięcznie produkty za 1500 zł i rekrutować znajomych. Kiedy jej przyjaciółki z roku zaczęły ją ostrzegać, liderzy powiedzieli jej: „Oni mają mentalność biedaków i zazdroszczą ci sukcesu. Jeśli chcesz latać z orłami, nie możesz grzebać w ziemi z kurami”. Natalia zerwała relacje z przyjaciółmi.',
    'Po 10 miesiącach Natalia miała pokój zastawiony niesprzedanymi kremami, 18 000 zł długu na karcie kredytowej i zero znajomych. Mimo to nadal powtarzała: „Już za chwilę nastąpi przełom”. Potrzeba bycia konsekwentną wobec publicznej deklaracji na scenie paraliżowała jej zmysł krytyczny.'
  ],
  decisionTaken: 'Natalia brnęła w rosnące długi i niszczyła relacje, by uniknąć przyznania przed sobą i grupą, że padła ofiarą piramidy finansowej.',
  whatProtagonistSaw: 'Wizję sukcesu, elitarną społeczność wsparcia i wiarę w to, że brak wyników wynika wyłącznie z jej „niewystarczającego zaangażowania”.',
  whatWasMissed: 'Matematyka struktury: w tego typu modelach 99,2% uczestników traci pieniądze, a publiczne deklaracje służą zablokowaniu drogi ucieczki.',
  psychologicalAnalysis: {
    coreMechanism: 'Zasada Zaangażowania i Konsekwencji (Cialdini) połączona z pułapką utopionych kosztów (Sunk Cost Fallacy) i sekciarską polaryzacją grupy (My kontra Oni).',
    cognitiveBiases: [
      { name: 'Pułapka utopionych kosztów', description: 'Im więcej pieniędzy i godności Natalia zainwestowała, tym trudniej było jej się wycofać.', impact: 'Eskalacja zaangażowania w przegraną sprawę.' },
      { name: 'Dysonans poznawczy', description: 'Sprzeczność między „jestem inteligentną studentką” a „zostałam oszukana na 18 tysięcy”.', impact: 'Wybór zakłamywania rzeczywistości zamiast konfrontacji z prawdą.' }
    ],
    defenseMechanisms: [
      { name: 'Wyparcie i projekcja', explanation: 'Uznanie szczerych ostrzeżeń przyjaciół za „zawiść i toksyczność”.' }
    ],
    emotionalDynamic: 'Paniczny lęk przed wstydem porażki przed ludźmi, którym deklarowała pewny sukces.'
  },
  decisionProcessAnalysis: {
    trigger: 'Darmowa kawa i pochwała ambicji ze strony znajomej.',
    attentionFocus: 'Wizja wolności finansowej i poczucie przynależności do elitarnej grupy.',
    interpretation: '„Wreszcie ktoś docenił mój potencjał, to szansa mojego życia”.',
    emotion: 'Ekstaza, nadzieja, podwyższone poczucie własnej wartości.',
    impulse: 'Zrobić wszystko, by nie zawieść zaufania liderów.',
    action: 'Zakup pakietów, publiczne deklaracje i zrywanie starych więzi.',
    consequence: 'Dług finansowy, samotność i głęboka trauma relacyjna.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Brzuszne pole nakrywki (VTA)', role: 'Wyrzut dopaminy podczas oklasków na scenie', activationState: 'Uwarunkowanie instrumentalne' },
      { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Krytyczna ocena modelu biznesowego', activationState: 'Całkowicie uśpiona przez euforię stada' }
    ],
    neurotransmitters: [
      { name: 'Dopamina i endorfiny', roleInScenario: 'Fizjologiczne uzależnienie od atmosfery uwielbienia na wiecach' }
    ],
    biologicalTimeline: [
      { timeMs: 'Faza 1', process: 'Bombardowanie miłością (Love Bombing) zalewa mózg oksytocyną.' },
      { timeMs: 'Faza 2', process: 'Publiczne zobowiązanie aktywuje dACC w razie próby wycofania się.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Bombardowanie miłością i Stopa w drzwiach', description: 'Płynne przechodzenie od 250 zł do publicznych przysiąg wierności.', vulnerabilityExploited: 'Potrzeba przynależności i lęk przed przeciętnością' }
    ],
    counterMeasures: [
      { step: 'Audyt Liczb Bezwzględnych i Konsultacja Zewnętrzna', script: 'Wymuszenie zasady: „Przed zainwestowaniem kolejnej złotówki pokazuję arkusz przychodów i kosztów niezależnemu doradcy finansowemu lub księgowemu spoza grupy”.', rationale: 'Konfrontacja z zewnętrzną, chłodną matematyką natychmiast rozbija trans emocjonalny grupy.' }
    ]
  },
  alternativePath: 'Gdyby Natalia po pierwszym spotkaniu sprawdziła sprawozdania finansowe spółki w KRS i zapytała o średni dochód 95% członków struktury, natychmiast zrezygnowałaby, zachowując oszczędności i relacje.',
  readerQuestion: 'W jakiej dziedzinie swojego życia trwasz w niekorzystnej sytuacji tylko dlatego, że kiedyś publicznie obiecałeś, że dasz radę?',
  keyTakeaway: 'Odwaga nie polega na ślepym trwaniu w błędzie. Prawdziwa dojrzałość to zdolność powiedzenia: „Myliłem się, wycofuję się”.'
};

export const chapterEightExerciseCanvas: SelfExercise = {
  id: 'ex-ch8-persuasion-canvas',
  title: 'Ćwiczenie 8.1: Szablon Projektowania Argumentacji (Tor Centralny ELM)',
  subtitle: 'Przygotuj prezentację lub propozycję opartą na twardych dowodach, która przetrwa próbę czasu',
  objective: 'Zbudowanie argumentacji angażującej logiczny System 2 rozmówcy, eliminując puste chwyty erystyczne.',
  durationMinutes: 25,
  neuroScientificFoundation: 'Strukturyzacja argumentów wokół dowodów i przewidywanie kontrargumentów aktywuje grzbietowo-boczną korę przedczołową (dlPFC) u odbiorcy, budując trwałe ślady pamięciowe.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniuj cel i kluczową tezę',
      instruction: 'Napisz w jednym, precyzyjnym zdaniu, do jakiego konkretnego działania lub zmiany zdania chcesz przekonać odbiorcę.',
      promptText: 'Moja główna teza perswazyjna to:',
      placeholder: 'Chcę przekonać zarząd do przeznaczenia 50 000 zł na audyt cyberbezpieczeństwa w I kwartale...'
    },
    {
      stepNumber: 2,
      title: 'Dobierz 3 filary dowodowe (Tor Centralny)',
      instruction: 'Podaj 3 twarde fakty, liczby, badania lub studia przypadków, które bezsprzecznie potwierdzają Twoją tezę.',
      promptText: 'Moje 3 twarde argumenty to:',
      placeholder: '1. Średni koszt ataku ransomware w naszej branży to 1,8 mln zł. 2. Nasza obecna zapora ma 4 lata bez aktualizacji. 3. Zgodność z dyrektywą NIS2 jest wymogiem prawnym...'
    },
    {
      stepNumber: 3,
      title: 'Szczepionka poznawcza — uprzedź najsilniejszy kontrargument',
      instruction: 'Jaki jest najpoważniejszy zarzut, jaki postawi druga strona (np. „Nie mamy na to budżetu”)? Nazwij go pierwszy i podaj rozwiązanie.',
      promptText: 'Zarzut odbiorcy oraz moja odpowiedź uprzedzająca:',
      placeholder: '„Wiem, że budżet na ten kwartał jest napięty. Dlatego wynegocjowałem płatność w 3 ratach, z czego pierwsza to tylko 15 000 zł, co mieści się w bieżącej rezerwie operacyjnej”.'
    }
  ],
  reflectionQuestions: [
    'Czy sam byłbyś w 100% przekonany przez argumenty, które właśnie przygotowałeś?',
    'W jakich sytuacjach ulegasz pokusie stosowania presji emocjonalnej zamiast rzetelnego przygotowania merytorycznego?'
  ]
};

export const chapterEightExerciseCialdini: SelfExercise = {
  id: 'ex-ch8-cialdini-audit',
  title: 'Ćwiczenie 8.2: Osobisty Audyt Podatności na 6 Zasad Cialdiniego',
  subtitle: 'Zlokalizuj swoje biologiczne słabe punkty, na których najczęściej grają inni',
  objective: 'Zidentyfikowanie, która z heurystyk (Wzajemność, Niedostępność, Autorytet, Konsekwencja, Dowód Słuszności, Lubienie) jest Twoją piętą achillesową.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Świadome nazwanie własnych automatyzmów pozwala skrócić czas reakcji kory hamującej (rIFG), gdy w przyszłości pojawi się bodziec wyzwalający manipulację.',
  steps: [
    {
      stepNumber: 1,
      title: 'Oceń swoją podatność w skali 1-5',
      instruction: 'Oceń, jak łatwo ulegasz każdemu z mechanizmów: 1. Wzajemność (nie umiem odmawiać po prezencie), 2. Niedostępność (panikuję na hasło „ostatnia sztuka”), 3. Autorytet (paraliżuje mnie tytuł lub mundur), 4. Konsekwencja (trwam w złych decyzjach), 5. Społeczny dowód (kupuję to, co inni), 6. Lubienie (zgadzam się z miłymi ludźmi).',
      promptText: 'Wpisz swoje oceny i wskaż 2 najbardziej niebezpieczne dla Ciebie zasady:',
      placeholder: 'Najbardziej ulegam: 1. Wzajemności (5/5) i 2. Autorytetowi (4/5)...'
    },
    {
      stepNumber: 2,
      title: 'Analiza ostatniej wpadki decyzyjnej',
      instruction: 'Przypomnij sobie zakup, obietnicę lub ustępstwo z ostatnich 6 miesięcy, którego żałujesz. Która zasada Cialdiniego została tam bezwzględnie wykorzystana?',
      promptText: 'Co to była za sytuacja i jaki skrót myślowy zadziałał?',
      placeholder: 'Kupiłem drogi kurs online, bo zegar na stronie odliczał 15 minut do końca oferty (Niedostępność)...'
    },
    {
      stepNumber: 3,
      title: 'Stwórz osobistą regułę bezpiecznikową',
      instruction: 'Sformułuj jedną prostą procedurę behawioralną (np. „Nigdy nie kupuję niczego pod presją licznika czasu — zawsze czekam 24 godziny”).',
      promptText: 'Moja nowa reguła ochronna:',
      placeholder: 'Gdy ktoś wywiera presję czasu („oferta ważna tylko dzisiaj”), moja automatyczna odpowiedź brzmi: „W takim razie dziękuję, rezygnuję”.'
    }
  ],
  reflectionQuestions: [
    'Dlaczego poczucie długu wdzięczności jest dla Ciebie tak trudne do udźwignięcia w ciele?',
    'Kto w Twoim otoczeniu potrafi najbardziej bezbłędnie naciskać na Twoje guziki posłuszeństwa?'
  ]
};

export const chapterEightExerciseFraming: SelfExercise = {
  id: 'ex-ch8-framing-lab',
  title: 'Ćwiczenie 8.3: Laboratorium Przekadrowania — Magia Framingu',
  subtitle: 'Naucz się przekształcać ramy problemu z obciążenia w szansę i ze straty w zysk',
  objective: 'Opanowanie umiejętności zmiany ramy poznawczej (Reframing) w celu zmiany dynamiki trudnej rozmowy.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Zmiana ramowania bezpośrednio moduluje aktywność ciała migdałowatego i przedniej części wyspy, przekształcając sygnał zagrożenia w sygnał możliwości rozwojowej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zidentyfikuj sytuację zablokowaną w negatywnej ramie',
      instruction: 'Wybierz problem zawodowy lub osobisty, który obecnie budzi w Tobie lub Twoim zespole opór, frustrację lub lęk.',
      promptText: 'Jaka jest obecna, negatywna rama problemu?',
      placeholder: '„Wdrożenie nowego systemu CRM to koszmar, który zabierze nam setki godzin i utrudni pracę...”'
    },
    {
      stepNumber: 2,
      title: 'Zbuduj Ramę Rozwojową / Zysku',
      instruction: 'Przebuduj tę samą sytuację, kładąc akcent na to, co dzięki niej zyskacie w długim horyzoncie czasowym.',
      promptText: 'Jak brzmi ta sytuacja w ramie szansy i zysku?',
      placeholder: '„Ten CRM to jednorazowy wysiłek porządkowy, który od przyszłego kwartału uwolni 8 godzin w tygodniu każdego handlowca od papierkologii...”'
    },
    {
      stepNumber: 3,
      title: 'Zbuduj Ramę Kosztu Zaniechania (Unikanie Straty)',
      instruction: 'Ludzie boją się straty 2 razy bardziej niż cieszą z zyskiem. Sformułuj ramę pokazującą, co stracicie, jeśli NIC nie zmienicie.',
      promptText: 'Jak brzmi koszt pozostania w starym schemacie?',
      placeholder: '„Jeśli nie wdrożymy tego systemu teraz, w ciągu roku stracimy 25% klientów na rzecz konkurencji, która odpowiada na zapytania w 5 minut...”'
    }
  ],
  reflectionQuestions: [
    'O ile łatwiej jest podjąć działanie, gdy myślisz o nim w kategorii długofalowej wolności, a nie chwilowego trudu?',
    'Jak często w rozmowach z innymi nieświadomie narzucasz im ramę strachu i beznadziei?'
  ]
};

export const chapterEight: Chapter = {
  number: 8,
  title: 'Wpływ i Perswazja: Dlaczego Ludzie Zmieniają Zdanie',
  subtitle: 'Architektura przekonywania, psychologia decyzji, heurystyki Cialdiniego i etyka wpływu',
  leadParagraph: 'Codziennie jesteś obiektem setek prób perswazji — od billboardów i algorytmów rekomendacji, przez maile handlowe, po prośby partnera i negocjacje z szefem. Jednocześnie sam nieustannie próbujesz wpływać na innych: zachęcasz dziecko do nauki, klienta do zakupu, a zespół do zmiany strategii. Wpływ to nie magia ani ciemna sztuka — to precyzyjna kognitywistyka oparta na znajomości biologicznych skrótów decyzyjnych.',
  totalEstimatedPages: 50,
  sections: [
    {
      id: 'sec-8-1',
      pageNumber: 334,
      sectionNumber: '8.1',
      title: 'Wpływ nie oznacza manipulacji: Etyczna oś relacji',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Perswazja to zaproszenie drugiej osoby do wspólnej wędrówki; manipulacja to potajemne zawiązanie jej oczu i pchnięcie w przepaść.',
        author: 'Robert Cialdini'
      },
      paragraphs: [
        'Wielu ludzi czuje wstręt na samo słowo „wpływ” czy „sprzedaż”. Kojarzy im się to z natrętnym domokrążcą wciskającym wadliwe garnki lub politykiem składającym obietnice bez pokrycia. Przyjmują postawę: „Prawda obroni się sama. Jeśli mój pomysł jest dobry, ludzie sami to zrozumieją”.',
        'To naiwny idealizm poznawczy. W świecie zalanym szumem informacyjnym (Tom I, Rozdział 3: Uwaga) prawda nie obroni się sama, jeśli nikt jej nie usłyszy i nie zrozumie. Lekarz przekonujący pacjenta do rzucenia palenia, nauczyciel rozbudzający pasję w uczniu czy inżynier walczący o wdrożenie procedury bezpieczeństwa — wszyscy oni uprawiają perswazję.',
        'Wpływ jest naturalnym spoiwem tkanki społecznej. Różnica między etyczną perswazją a manipulacją leży w trzech fundamentalnych kryteriach:',
        '1. Czystość intencji i symetria korzyści: Czy sukces perswadowanego rozwiązania służy także długofalowo odbiorcy, czy wyłącznie nadawcy?',
        '2. Przejrzystość informacji i alternatyw: Czy nadawca przedstawia pełny obraz sytuacji (w tym koszty i ryzyka), czy celowo ukrywa niewygodne fakty?',
        '3. Nienaruszalna autonomia wyboru: Czy odbiorca może bez strachu powiedzieć „NIE”, nie narażając się na odwet emocjonalny, poczucie winy, agresję pasywną czy kary społeczne? Jeśli odmowa wiąże się z karą, mamy do czynienia z przemocą lub manipulacją, a nie z perswazją.'
      ]
    },
    {
      id: 'sec-8-2',
      pageNumber: 338,
      sectionNumber: '8.2',
      title: 'Model prawdopodobieństwa elaboracji (ELM): Tor centralny a peryferyjny',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Richard Petty i John Cacioppo w modelu ELM (Elaboration Likelihood Model) wykazali, że istnieją dwie zasadnicze autostrady, którymi przekaz dociera do ludzkiego mózgu:',
        'Tor Centralny: Wymaga wysokiej motywacji i zasobów poznawczych. Odbiorca analizuje jakość argumentów, sprawdza dane, porównuje fakty (System 2). Zmiana postaw osiągnięta tą drogą jest trwała, stabilna w czasie i odporna na kontrataki.',
        'Tor Peryferyjny: Działa, gdy odbiorca jest zmęczony, przebodźcowany lub niezainteresowany tematem (System 1). Decyzja zapada w oparciu o powierzchowne sygnały: atrakcyjność nadawcy, chwytliwą muzykę, prestiżowe logo, liczbę slajdów. Zmiana postawy jest szybka, ale nietrwała i podatna na kolejną modę.'
      ]
    },
    {
      id: 'sec-8-3',
      pageNumber: 342,
      sectionNumber: '8.3',
      title: 'Wiarygodność źródła: Autorytet, kompetencja i intencja',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Zanim odbiorca oceni Twój argument, jego mózg ocenia CIEBIE. Arystoteles nazywał to Ethosem. Współczesna kognitywistyka rozbija wiarygodność na dwa parametry: Kompetencję (Czy on wie, o czym mówi?) oraz Życzliwość (Czy dba o mój interes?).',
        'Jeśli odbiorca uważa Cię za geniusza, ale podejrzewa, że chcesz go wykorzystać dla własnego zysku, Twoja argumentacja natychmiast wywoła opór poznawczy (reaktancję). Zaufanie rodzi się ze zderzenia wiedzy z empatią.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 1: Reklama pasty ze stetoskopem — Peryferyjna heurystyka autorytetu',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: W telewizyjnym bloku reklamowym pojawia się 45-letni mężczyzna w nieskazitelnie białym kitlu laboratoryjnym, ze stetoskopem przewieszonym przez szyję, na tle mikroskopów. Z powagą rekomenduje pastę do zębów z „nowatorskim kompleksem bio-krzemianów”. Na dole ekranu widnieje mały napis: „Aktor gra postać”.',
            '2. Co widzi bohater (widz Marek, 52 lata): Marek widzi wybitnego lekarza stomatologa lub naukowca, który bezinteresownie dzieli się przełomowym odkryciem medycznym.',
            '3. Czego bohater nie widzi (martwe pole): Marek nie dostrzega mikro-napisu o aktorze, nie analizuje chemicznego składu pasty (który jest identyczny ze zwykłą pastą z dyskontu za 4 zł) i nie weryfikuje braku niezależnych badań klinicznych.',
            '4. Działający mechanizm psychologiczny: Peryferyjny sygnał autorytetu w modelu ELM. Kiedy zasoby poznawcze widza są zredukowane wieczornym zmęczeniem, System 1 automatycznie łączy atrybuty statusu (kitel, stetoskop, mikroskop) z kompetencją i wiarygodnością.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W społecznościach przedpiśmiennych zaufanie starszyźnie i wyspecjalizowanym zielarzom oszczędzało czas i chroniło przed zatruciem.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się bezrefleksyjnego przekonania: „Skoro profesor to zaleca, to musi działać”, połączone z brakiem chęci zajrzenia do karty produktu.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Przełączenie na tor centralny: „Kim jest ta postać? Jaki jest faktyczny skład chemiczny? Czy produkt posiada atest niezależnego towarzystwa stomatologicznego?”.',
            '8. Konsekwencje alternatywnego wyboru: Oszczędność pieniędzy i wybór produktów w oparciu o stężenie fluoru/hydroksyapatytu, a nie o kostium aktora.',
            '9. Wniosek dydaktyczny dla czytelnika: Rekwizyty autorytetu to najtańsza waluta w marketingu. Zawsze oddzielaj insygnia wiedzy od twardych dowodów merytorycznych.'
          ]
        }
      ]
    },
    {
      id: 'sec-8-4',
      pageNumber: 346,
      sectionNumber: '8.4',
      title: 'Struktura żelaznego argumentu: Teza, dowód i wniosek',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Dobry argument nie jest głośniejszym powtórzeniem swojej opinii. Prawdziwa argumentacja logiczna opiera się na strukturze Toulmina: Twierdzenie (Claim), Dane dowodowe (Data), Uzasadnienie powiązania (Warrant) oraz Zastrzeżenie (Rebuttal).',
        'Poniższy warsztat pozwala zaprojektować kompletną, odporną na krytykę prezentację argumentacyjną opartą na torze centralnym.'
      ],
      exerciseRef: chapterEightExerciseCanvas
    },
    {
      id: 'sec-8-5',
      pageNumber: 350,
      sectionNumber: '8.5',
      title: 'Emocje w perswazji: Znaczniki somatyczne Damasio i waga argumentu',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Czysta logika bez emocji jest decyzyjnie bezpłodna. Antonio Damasio w swojej hipotezie znaczników somatycznych (Somatic Marker Hypothesis) udowodnił, badając pacjentów z uszkodzeniami brzuszno-przyśrodkowej kory przedczołowej (vmPFC) i przedniej wyspy, że odcięcie informacji afektywnej paraliżuje proces wyboru. Człowiek pozbawiony „podpowiedzi ciała” potrafi spędzić 4 godziny na bezowocnym porównywaniu dwóch dat spotkania w kalendarzu.',
        'Emocja w etycznej perswazji nie służy do ogłupienia odbiorcy, lecz do nadania wagi poznawczej (Salience) przedstawianym faktom. Kora przedczołowa musi wiedzieć, co z przedstawionych danych jest dla organizmu rzeczywiście ważne, a co jest tylko szumem statystycznym.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 2: Zbiórka charytatywna — Statystyka kontra identyfikowalna ofiara',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Międzynarodowa fundacja humanitarna wysyła do 10 000 darczyńców dwa warianty listu z apelem o wsparcie rejonu Sahelu dotkniętego suszą.',
            '2. Co widzi bohater (wariant A vs wariant B): Odbiorca wariantu A czyta: „Trzy miliony dzieci w Afryce Subsaharyjskiej jest zagrożonych śmiercią głodową”. Odbiorca wariantu B widzi zdjęcie 7-letniej dziewczynki: „Oto Rokia z Mali. Twoja wpłata 50 zł zapewni jej żywność i dostęp do szkoły na cały miesiąc”.',
            '3. Czego bohater nie widzi (martwe pole): Darczyńca wariantu B nie analizuje makroekonomicznych uwarunkowań głodu w Afryce; darczyńca wariantu A zostaje przytłoczony skalą problemu i czuje bezradność poznawczą („Co może zmienić moje 50 zł wobec 3 milionów?”).',
            '4. Działający mechanizm psychologiczny: Efekt Identyfikowalnej Ofiary (Identifiable Victim Effect — Small, Loewenstein, Slovic). Układ limbiczny i neurony lustrzane reagują na konkretną, jednostkową narrację z twarzą i imieniem. Wielkie liczby aktywują chłodne przetwarzanie pojęciowe i paraliżującą apatię (Psychic Numbing).',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Nasi przodkowie żyli w małych grupach plemiennych (50-150 osób). Empatia i współdzielenie zasobów wyewoluowały wobec konkretnych członków klanu, a nie wobec wielomilionowych abstrakcji statystycznych.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się natychmiastowego ściśnięcia klatki piersiowej, wzruszenia i odruchu sięgnięcia do portfela pod wpływem portretu jednej osoby.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Zintegrowanie empatii z oceną efektywności: darczyńca kieruje się sercem wobec Roku, ale rozumem sprawdza raport finansowy fundacji (jaki procent środków realnie dociera do beneficjentów).',
            '8. Konsekwencje alternatywnego wyboru: Wariant B generuje 400% wyższe wpłaty, pozwalając na realną pomoc, a świadomy darczyńca wspiera organizację transparentną.',
            '9. Wniosek dydaktyczny dla czytelnika: Jeśli chcesz poruszyć ludzi do działania, nie zasypuj ich tabelami danych. Pokaż im człowieka, któremu ta zmiana ratuje życie.'
          ]
        }
      ]
    },
    {
      id: 'sec-8-6',
      pageNumber: 354,
      sectionNumber: '8.6',
      title: 'Społeczny dowód słuszności: Gdy wszyscy patrzą na wszystkich',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Kiedy nie wiemy, jak się zachować, patrzymy na zachowanie innych. W świecie niepewności rynkowej i społecznej zachowanie stada staje się najważniejszą heurystyką decyzyjną.',
        'Jeśli 500 osób kupiło dany produkt i wystawiło ocenę 4.9, nasz System 1 zwalnia nas z konieczności samodzielnego testowania technologii. To potężna oszczędność metaboliczna, pod warunkiem, że dowód społeczny jest prawdziwy, a nie wykreowany przez farmy trolli.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 3: Pusta restauracja a kolejka na mrozie w Krakowie — Pętla dowodu społecznego',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Na ulicy Szerokiej w Krakowie działają dwie włoskie restauracje oddalone o 25 metrów. W lokalu A jest pusto, kelner wygląda przez szybę. Przed lokalem B w ulewnym deszczu stoi w kolejce 18 osób czekających na stolik.',
            '2. Co widzi bohater (turysta Michał, 31 lat): Michał idzie z narzeczoną, oboje są głodni i zmarznięci. Widząc kolejkę, Michał bez wahania staje na jej końcu i mówi: „Skoro ci ludzie marzną na deszczu, to pizza musi być wybitna. W tej pustej obok na pewno mają nieświeże jedzenie”.',
            '3. Czego bohater nie widzi (martwe pole): Michał nie wie, że lokal B ma zaledwie 5 stolików (więc szybko się zapełnia) i został opisany na profilu popularnego influencera, podczas gdy lokal A ma 20 stolików, własny piec opalany drewnem i wybitnego kucharza z Neapolu, lecz nie zainwestował w marketing.',
            '4. Działający mechanizm psychologiczny: Społeczny Dowód Słuszności (Social Proof) jako kaskada informacyjna (Informational Cascade). W warunkach braku bezpośredniej wiedzy o jakości produktu zachowanie innych ludzi staje się dominującą heurystyką zastępczą.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Ewolucyjnie podążanie za wyborem większości stada drastycznie redukowało ryzyko zjedzenia trującej rośliny czy wejścia na terytorium drapieżnika.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się silnego wewnętrznego oporu przed wejściem do pustego lokalu („A co, jeśli się zatruję?”) połączonego z gotowością do ponoszenia niewygody (stanie na deszczu), byle być w grupie.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Weryfikacja kryteriów obiektywnych: podejście do lokalu A, obejrzenie karty menu, zapytanie kelnera o świeżość ciasta i składniki D.O.P., a następnie wejście i zjedzenie posiłku w ciepłym wnętrzu bez kolejki.',
            '8. Konsekwencje alternatywnego wyboru: Zjedzenie doskonałego posiłku od ręki w cichej atmosferze za 60% ceny modnego lokalu, z zaoszczędzeniem 45 minut stania na deszczu.',
            '9. Wniosek dydaktyczny dla czytelnika: Tłum najczęściej przyciąga tłum na zasadzie samonapędzającej się pętli widoczności, a nie obiektywnej wyższości jakościowej.'
          ]
        }
      ]
    },
    {
      id: 'sec-8-7',
      pageNumber: 358,
      sectionNumber: '8.7',
      title: 'Reguła wzajemności: Niewidzialny dług wdzięczności',
      category: 'studium-przypadku',
      readingTimeMinutes: 15,
      paragraphs: [
        'Reguła wzajemności to najstarszy klej ewolucyjny ludzkości. Pozwoliła naszym przodkom dzielić się upolowanym mięsem z gwarancją, że gdy sami wrócą z pustymi rękami, otrzymają wsparcie od sąsiada.',
        'Jednak w rękach wytrawnych handlowców wzajemność staje się bronią precyzyjnego rażenia. Darmowa próbka, mały podarunek czy nadzwyczajna uprzejmość wywołują w mózgu odbiorcy stan nieprzyjemnego napięcia, którego pragnie pozbyć się za wszelką cenę. Poniższe studium przypadku ukazuje to w brutalnej praktyce.'
      ],
      caseStudyRef: chapterEightCaseStudyCarDealer
    },
    {
      id: 'sec-8-8',
      pageNumber: 362,
      sectionNumber: '8.8',
      title: 'Zasada niedostępności: Panika uciekającej szansy',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Kiedy rzecz staje się rzadka, trudno dostępna lub jej czas jest ograniczony, nasz mózg natychmiast przypisuje jej wyższą wartość. Działa tu zjawisko psychologicznej reaktancji (Jack Brehm): ograniczenie swobody wyboru wywołuje gwałtowny bunt i pragnienie odzyskania utraconej wolności.',
        'W marketingu komunikaty typu „Zostały tylko 2 sztuki!”, „Oferta wygasa za 12 minut” wyłączają racjonalną kalkulację kory przedczołowej i uruchamiają panikę FOMO (Fear of Missing Out).',
        'Poniższy warsztat pozwala zbadać własną podatność na 6 zasad Cialdiniego i zbudować tarcze ochronne.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 4: Znikające pokoje na portalu rezerwacyjnym — FOMO i sztuczny pośpiech',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Użytkownik Piotr (29 lat) przegląda w piątkowy wieczór portal rezerwacji hoteli. Przy wybranym apartamencie w górach pojawia się pulsujący czerwony napis: „Ostatni pokój w tej cenie! 19 osób właśnie przegląda tę ofertę!”. Dodatkowo odlicza zegar: „Promocja ważna jeszcze przez 8 minut”.',
            '2. Co widzi bohater (Piotr): Piotr czuje, że jeśli nie kliknie w ciągu kilku sekund, straci życiową okazję, a wymarzony wyjazd z partnerką przepadnie na rzecz innych użytkowników.',
            '3. Czego bohater nie widzi (martwe pole): Piotr nie wie, że algorytmy platformy generują komunikaty o „przeglądających osobach” na podstawie całego regionu lub danych z ostatnich 48 godzin, a hotel na własnej stronie www dysponuje jeszcze czterema wolnymi pokojami w niższej cenie.',
            '4. Działający mechanizm psychologiczny: Reguła niedostępności połączona z awersją do straty (Kahneman & Tversky) i sztucznie wywołaną presją czasu. Wyrzut noradrenaliny blokuje analityczne myślenie dlPFC.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W środowisku niedoboru (ubytek wody w oazie, znikające stado antylop) natychmiastowa reakcja chwytania zasobu decydowała o przetrwaniu klanu.',
            '6. Jak rozpoznać w czasie rzeczywistym: Przyspieszone bicie serca, płytki oddech i nerwowe sięganie po kartę płatniczą bez doczytania warunków anulacji rezerwacji.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Wdrożenie protokołu 20-minutowego ochłodzenia: zamknięcie karty portalu, bezpośredni telefon do recepcji hotelu i porównanie warunków bez pośredników.',
            '8. Konsekwencje alternatywnego wyboru: Uzyskanie lepszego pokoju ze śniadaniem bezpośrednio od właściciela i uniknięcie niepodlegającej zwrotowi prowizji portalu.',
            '9. Wniosek dydaktyczny dla czytelnika: Kiedy interfejs cyfrowy zmusza Cię do pośpiechu czerwonym kolorem i stoperem, to dowód, że ktoś próbuje odebrać Ci kontrolę nad portfelem.'
          ]
        }
      ],
      exerciseRef: chapterEightExerciseCialdini
    },
    {
      id: 'sec-8-9',
      pageNumber: 366,
      sectionNumber: '8.9',
      title: 'Zaangażowanie i konsekwencja: Pułapka własnego słowa',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Człowiek ma obsesyjną biologiczną potrzebę bycia postrzeganym jako spójny i konsekwentny. Jeśli publicznie zadeklarujesz jakieś stanowisko, Twoje ego zrobi wszystko, by nagiąć fakty i obronić ten wybór, nawet gdy okoliczności ulegną radykalnej zmianie.',
        'Zasada „stopy w drzwiach” (Foot-in-the-Door) polega na nakłonieniu odbiorcy do małego, niewinnego kroku (np. podpisanie petycji, wzięcie darmowej próbki). Kiedy ten krok zostanie zrobiony, człowiek sam definiuje siebie jako kogoś zaangażowanego w sprawę, co toruje drogę do gigantycznych ustępstw. Studium przypadku poniżej przedstawia dramat studentki uwikłanej w strukturę MLM.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 5: Petycja o zieleń i późniejsza darowizna — Technika stopy w drzwiach',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Na deptaku miejskim uśmiechnięty wolontariusz podchodzi do Macieja (26 lat) z prośbą o podpisanie petycji do prezydenta miasta o posadzenie 20 lip w parku miejskim. Złożenie podpisu zajmuje 10 sekund i nic nie kosztuje. Maciej podpisuje.',
            '2. Co widzi bohater (Maciej): Widzi siebie jako świadomego, dobrego obywatela, który wspiera lokalną przyrodę jednym ruchem długopisu.',
            '3. Czego bohater nie widzi (martwe pole): Maciej nie wie, że złożenie podpisu zmieniło jego wewnętrzny autowizerunek (Self-Perception Theory Daryla Bema) — z człowieka neutralnego stał się w swoich oczach „aktywistą ekologicznym”. Dwa tygodnie później ta sama organizacja puka do jego drzwi z prośbą o stałe zlecenie 150 zł miesięcznie.',
            '4. Działający mechanizm psychologiczny: Potrzeba spójności tożsamościowej i technika stopy w drzwiach (Freedman & Fraser). Odmowa darowizny wywołałaby w mózgu Macieja bolesny dysonans poznawczy z wcześniej podjętym zobowiązaniem.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W społecznościach plemiennych osoby niespójne, zmieniające zdanie z dnia na dzień, były uznawane za nielojalne i wykluczane z sojuszy.',
            '6. Jak rozpoznać w czasie rzeczywistym: Wewnętrzny głos: „Skoro powiedziałem A, to głupio teraz nie powiedzieć B, co ten człowiek o mnie pomyśli?”.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Rozdzielenie spraw i asertywne postawienie granicy: „Cieszę się, że podpisałem petycję o drzewa, ale mój budżet nie przewiduje stałych darowizn finansowych. Mówię nie”.',
            '8. Konsekwencje alternatywnego wyboru: Ochrona własnych finansów bez poczucia winy i bez konieczności bycia zakładnikiem własnego niewinnego podpisu.',
            '9. Wniosek dydaktyczny dla czytelnika: Zgoda na mały krok nie obliguje Cię do wzięcia udziału w maratonie. Zawsze masz prawo zmienić zdanie w obliczu nowych żądań.'
          ]
        }
      ],
      caseStudyRef: chapterEightCaseStudyMlm
    },
    {
      id: 'sec-8-10',
      pageNumber: 370,
      sectionNumber: '8.10',
      title: 'Sztuka ramowania (Framing): Rzeczywistość w nowym świetle',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Fakty nie mają obiektywnego znaczenia w izolacji — znaczenie nadaje im RAMA, w jakiej zostaną osadzone. To samo mięso można opisać jako „w 80% chude” lub „w 20% tłuste”. Badania dowodzą, że klienci oceniają mięso w ramie „80% chude” jako znacznie smaczniejsze i zdrowsze!',
        'W relacjach i biznesie ramowanie decyduje o sukcesie lub porażce negocjacji. Poniższy warsztat uczy, jak świadomie przekształcać ramy problemu z kosztu w inwestycję i z zagrożenia w szansę.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 6: Zgoda na operację kardiologiczną — Ramowanie zysku kontra straty',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Pacjent Jan (60 lat) stoi przed decyzją o operacji wszczepienia by-passów. Dwa zespoły lekarskie przedstawiają tę samą statystykę w odmienny sposób.',
            '2. Co widzi bohater (Jan): Gdy lekarz A mówi: „90% pacjentów przeżywa ten zabieg bez powikłań i wraca do pełnej sprawności”, Jan czuje spokój, nadzieję i podpisuje zgodę. Gdy lekarz B mówi: „Istnieje 10% ryzyka zgonu śródoperacyjnego”, ten sam Jan wpada w panikę, wycofuje zgodę i ucieka ze szpitala.',
            '3. Czego bohater nie widzi (martwe pole): Jan nie dostrzega, że matematyczna treść obu komunikatów jest co do joty identyczna. Widzi jedynie emocjonalną barwę ramy.',
            '4. Działający mechanizm psychologiczny: Efekt Ramowania (Framing Effect — Amos Tversky, Daniel Kahneman). Ludzie wykazują silną awersję do ryzyka w ramie zysków („przeżycie”), a skłonność do unikania działania lub paniki w ramie strat („zgon”).',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Potencjalna strata zasobu (życia, pożywienia) była ewolucyjnie bardziej dotkliwa niż symetryczny zysk, stąd układ nerwowy nadmiernie reaguje na semantykę zagrożenia.',
            '6. Jak rozpoznać w czasie rzeczywistym: Nagła zmiana decyzji pod wpływem samej zmiany doboru słów opisujących ten sam fakt.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Samodzielne odwracanie ramy (Reframing): za każdym razem, gdy słyszysz statystykę w ramie straty, przelicz ją na zysk (i odwrotnie), by ocenić surowe prawdopodobieństwo.',
            '8. Konsekwencje alternatywnego wyboru: Podjęcie racjonalnej, dojrzałej decyzji ratującej życie w oparciu o rzetelny bilans medyczny, a nie o afektywne przerażenie.',
            '9. Wniosek dydaktyczny dla czytelnika: Kto kontroluje ramę wypowiedzi, kontroluje emocje odbiorcy. Zawsze zdejmuj ramę ze słów, by zobaczyć nagi fakt.'
          ]
        }
      ],
      exerciseRef: chapterEightExerciseFraming
    },
    {
      id: 'sec-8-11',
      pageNumber: 374,
      sectionNumber: '8.11',
      title: 'Kotwiczenie w perswazji: Pierwsza liczba kontroluje pole',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Wracamy do heurystyki zakotwiczenia i dopasowania (Kahneman & Tversky). Pierwsza rzucona liczba staje się punktem odniesienia, do którego System 1 dopasowuje wszystkie kolejne oferty.',
        'Kiedy w menu restauracji stek Wagyu kosztuje 680 zł, stek z polędwicy za 180 zł wydaje się „rozsądny”. Gdyby najwyższą ceną był kurczak za 40 zł, ten sam stek wydałby się absurdem. Kto kontroluje kotwicę, kontroluje pole negocjacji.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 7: Negocjacja ceny mieszkania z rynku wtórnego — Pułapka pierwszej liczby',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Sprzedający wystawia mieszkanie na warszawskiej Woli o realnej rynkowej wartości 730 000 zł za kwotę ofertową 850 000 zł (agresywna kotwica). Kupujący Krzysztof po wyczerpujących, tygodniowych negocjacjach zbija cenę do 790 000 zł.',
            '2. Co widzi bohater (Krzysztof): Krzysztof czuje triumf i euforię. Opowiada rodzinie: „Zbiłem cenę aż o 60 000 zł, jestem mistrzem negocjacji!”.',
            '3. Czego bohater nie widzi (martwe pole): Krzysztof nie zauważa, że przepłacił za mieszkanie 60 000 zł powyżej średniej rynkowej z operatów szacunkowych. Negocjował z kotwicą sprzedającego, a nie z rynkiem.',
            '4. Działający mechanizm psychologiczny: Heurystyka Zakotwiczenia i Niewystarczającego Dopasowania (Anchoring and Adjustment). Pierwsza rzucona kwota stała się grawitacyjnym centrum negocjacji, ściągając wszystkie kontroferty w swoją stronę.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W warunkach braku obiektywnych pomiarów pierwsza dostępna informacja ilościowa służyła jako punkt orientacyjny, od którego mózg dokonywał drobnych korekt.',
            '6. Jak rozpoznać w czasie rzeczywistym: Poczucie zadowolenia wynikające z wielkości „rabatu”, zamiast z obiektywnej relacji ceny do wartości nabywanego dobra.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Całkowite odrzucenie kotwicy i reset stołu negocjacyjnego: „Z całym szacunkiem, kwota 850 000 zł jest oderwana od realiów transakcyjnych w tej dzielnicy. Przyniosłem wyciąg z aktów notarialnych z ostatnich 3 miesięcy. Moja oferta to 710 000 zł”.',
            '8. Konsekwencje alternatywnego wyboru: Zakup nieruchomości w uczciwej cenie rynkowej lub szybkie wycofanie się z transakcji bez straty dziesiątek tysięcy złotych.',
            '9. Wniosek dydaktyczny dla czytelnika: Nigdy nie negocjuj w korytarzu wyznaczonym przez kotwicę drugiej strony. Zbuduj własną kotwicę opartą na faktach.'
          ]
        }
      ]
    },
    {
      id: 'sec-8-12',
      pageNumber: 378,
      sectionNumber: '8.12',
      title: 'Perswazja odporna na manipulację: Budowanie tarczy poznawczej',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'William McGuire sformułował Teorię Inokulacji (Szczepienia Poznawczego). Podobnie jak szczepionka wprowadza osłabiony patogen, by wytworzyć przeciwciała, tak samo umysł można zaszczepić przeciwko manipulacji.',
        'Jeśli wiesz z góry, jak działa technika stopy w drzwiach lub fałszywa niedostępność, w chwili gdy ktoś jej użyje, Twój mózg nie odpala automatycznej uległości, lecz dzwonek alarmowy kory przedczołowej: „Znam tę sztuczkę, to próba wywarcia presji”.'
      ]
    },
    {
      id: 'sec-8-13',
      pageNumber: 382,
      sectionNumber: '8.13',
      title: 'Wielkie Studium Przypadku: Kampania ratowania szpitala powiatowego',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Mistrzowskie studium przypadku pokazujące, jak etyczna perswazja, zmiana ramowania (framing) i zaangażowanie społeczności odwróciły losy likwidowanego oddziału pediatrii.'
      ],
      caseStudyRef: {
        id: 'cs-ch8-szpital',
        title: 'Oddział Dziecięcy: Jak Perswazja Oparta na Faktach Pokonała Cynizm',
        subtitle: 'Zderzenie tabelki budżetowej z wartościami społecznymi w samorządzie',
        protagonist: 'Dr Joanna, Ordynator Pediatrii (42 lata) i Starosta Powiatu (58 lat)',
        context: 'Nadzwyczajna sesja rady powiatu decydująca o likwidacji nierentownego oddziału pediatrycznego.',
        story: [
          'Oddział pediatrii generował rocznie 1,2 miliona złotych straty. Na biurku starosty leżał bezlitosny raport audytorów: zamknąć oddział, a małych pacjentów wozić do szpitala wojewódzkiego oddalonego o 45 kilometrów. Mieszkańcy zbierali podpisy pod petycją, ale urzędnicy byli nieugięci: „Matematyka jest nieubłagana. Nie mamy z czego dokładać”.',
          'Dr Joanna wiedziała, że tradycyjny krzyk i oskarżanie radnych o brak serca wywoła jedynie opór i okopanie się na pozycjach (reaktancja). Postanowiła zastosować zintegrowany protokół perswazyjny.',
          'Po pierwsze: Framing zysku i straty. Zamiast mówić o „dopłacaniu do straty pediatrii”, Joanna przedstawiła radnym analizę kosztów transportu karetek, powikłań sepsy przy 50-minutowym dojeździe i pozwów odszkodowawczych. Pokazała, że likwidacja oddziału wygeneruje w perspektywie 3 lat koszty zewnętrzne przewyższające obecny deficyt o 400 tysięcy złotych!',
          'Po drugie: Kotwiczenie i Zaangażowanie (Stopa w drzwiach). Joanna nie poprosiła o natychmiastowe wyrzucenie audytu do kosza. Poprosiła radę o powołanie 6-miesięcznego programu pilotażowego z twardymi wskaźnikami optymalizacji, do którego sama zadeklarowała bezpłatne pozyskanie nowoczesnego sprzętu od fundacji charytatywnych.',
          'Głosowanie zakończyło się jednomyślnym przyjęciem planu Joanny. Oddział przetrwał, a po dwóch latach zbilansował się dzięki nowej poradni przyszpitalnej.'
        ],
        decisionTaken: 'Joanna zamieniła argumentację emocjonalno-roszczeniową na merytoryczne przekadrowanie finansowe połączone z małym krokiem (program pilotażowy).',
        whatProtagonistSaw: 'Że radni nie są z natury źli — są przerażeni deficytem budżetowym powiatu i potrzebują ramy, która pozwoli im ocalić szpital bez poczucia niegospodarności.',
        whatWasMissed: 'Poprzednie delegacje rodziców krzyczały na sesjach, co tylko wzmacniało postawę obronną urzędników (błąd atrybucji po obu stronach).',
        psychologicalAnalysis: {
          coreMechanism: 'Zastosowanie toru centralnego (twarde dane o ukrytych kosztach) wspartego regułą zaangażowania i ramowaniem unikania strat.',
          cognitiveBiases: [
            { name: 'Księgowanie umysłowe (Mental Accounting)', description: 'Radni widzieli tylko rubrykę „koszt pediatrii”, ignorując koszty w innych rubrykach budżetu.', impact: 'Fałszywe poczucie oszczędności.' },
            { name: 'Dysonans poznawczy', description: 'Głosowanie za zamknięciem oddziału kłóciło się z wizerunkiem radnych jako opiekunów społeczności lokalnej.', impact: 'Szukali moralnego wyjścia z impasu.' }
          ],
          defenseMechanisms: [],
          emotionalDynamic: 'Zamiana bezsilnej wściekłości na konstruktywny etos ekspercki.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Kalkulacja wieloletniego bilansu kosztów i logiczna analiza wskaźników', activationState: 'Uruchomiona u radnych dzięki twardym liczbom Joanny' },
            { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Integracja znaczników somatycznych: zysków moralnych i ochrony budżetu', activationState: 'Wysoka spójność decyzyjna' }
          ],
          neurotransmitters: [
            { name: 'Układ dopaminergiczny i modulacja noradrenergiczna', roleInScenario: 'Wykonalny plan pilotażu uruchamia projekcje dopaminergiczne związane z antycypacją sukcesu politycznego, obniżając poziom lęku obronnego' }
          ],
          biologicalTimeline: [
            { timeMs: 'Pierwsze 5 minut', process: 'Rozbrojenie obrony radnych brakiem agresji i szacunkiem dla trudnej sytuacji budżetowej.' },
            { timeMs: '20 minuta', process: 'Pokazanie wykresu kosztów zewnętrznych przełącza salę na analityczny tor centralny (ELM).' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'Reframing strategiczny i Stopa w drzwiach', description: 'Zamiana zamknięcia na 6-miesięczny program testowy z udziałem fundacji.', vulnerabilityExploited: 'Potrzeba radnych uniknięcia skandalu społecznego' }
          ],
          counterMeasures: []
        },
        alternativePath: 'Gdyby Joanna przyszła z transparentem i oskarżyła starostę o „morderstwo dzieci”, sesja zostałaby przerwana, ochrona wyprowadziłaby lekarzy, a oddział zostałby zlikwidowany w ciszy gabinetów.',
        readerQuestion: 'Kiedy próbujesz przekonać kogoś do zmiany, czy mówisz w języku SWOICH potrzeb, czy w języku JEGO zysków i strat?',
        keyTakeaway: 'Najwyższa forma perswazji polega na pokazaniu drugiej osobie, że to, co proponujesz, jest najwspanialszym zrealizowaniem jej własnych najgłębszych wartości.'
      }
    },
    {
      id: 'sec-8-14',
      pageNumber: 386,
      sectionNumber: '8.14',
      title: 'Granica wpływu, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Poznaliśmy potężne prawa wpływu: od modeli centralnych i peryferyjnych, przez wzajemność, niedostępność i autorytet, po magię ramowania i kotwiczenia. Te narzędzia są neutralne aksjologicznie — jak skalpel chirurgiczny, którym można uratować życie lub zadać śmiertelną ranę.',
        'Jednak na krawędzi perswazji czai się jej mroczny bliźniak: MANIPULACJA. Co dzieje się, gdy ktoś celowo odcina Ci dostęp do prawdy, gra na Twoim poczuciu winy, wywołuje sztuczny strach i kwestionuje Twoje zmysły?',
        'W Rozdziale 9 wejdziemy do psychologicznego gabinetu cieni: zbadamy anatomię gazowania (gaslighting), szantażu emocjonalnego, fałszywych wyborów i drapieżnych technik wywierania presji oraz nauczymy się budować nieprzenikniony pancerz asertywności.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 8.'
      ]
    }
  ]
};
