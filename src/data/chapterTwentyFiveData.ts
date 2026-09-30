import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

export const chapterTwentyFiveExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii behawioralnej i poznawczej zachowanie (behavior) różni się od intencji lub decyzji tym, że:',
    topic: 'Definicja Zachowania',
    sectionRef: 'Sekcja 25.1',
    options: [
      { label: 'A', text: 'Zachowanie jest obserwowalnym, uzewnętrznionym działaniem motorycznym, werbalnym lub fizjologicznym w świecie realnym, podczas gdy intencja to jedynie wewnętrzny stan ukierunkowania umysłu.', isCorrect: true },
      { label: 'B', text: 'Zachowanie występuje wyłącznie w trakcie snu.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy, każda myśl jest automatycznie zachowaniem.', isCorrect: false },
      { label: 'D', text: 'Zachowanie jest zdetermnowane wyłącznie przez siłę grawitacji.', isCorrect: false }
    ],
    explanation: 'Można podjąć sto decyzji w głowie, lecz dopóki ciało nie wykona ruchu w przestrzeni (słowo, gest, czynność), stan rzeczywistości nie ulega zmianie.',
    keyTakeaway: 'Świat i inni ludzie nie reagują na Twoje utajnione intencje — reagują na Twoje uzewnętrznione zachowanie.'
  },
  {
    id: 2,
    question: 'Jaką rolę w Łańcuchu Behawioralnym (Sytuacja -> Percepcja -> Interpretacja -> Emocja -> Decyzja -> Zachowanie) odgrywa etykieta INTERPRETACJI?',
    topic: 'Łańcuch Behawioralny',
    sectionRef: 'Sekcja 25.2',
    options: [
      { label: 'A', text: 'Nadaje znaczenie bodźcowi z otoczenia — to nie sam fakt fizyczny wywołuje reakcję, lecz to, jak umysł go zinterpretuje (np. usłyszany szmer jako zagrożenie lub jako wiatr).', isCorrect: true },
      { label: 'B', text: 'Niewielką, ponieważ zachowanie człowieka jest w 100% odruchem bezwarunkowym.', isCorrect: false },
      { label: 'C', text: 'Interpretacja następuje zawsze po wykonaniu zachowania.', isCorrect: false },
      { label: 'D', text: 'Interpretacja odpowiada wyłącznie za utrzymanie równowagi w błędniku.', isCorrect: false }
    ],
    explanation: 'Ten sam bodziec (np. milczenie szefa) wywoła zachowanie agresywno-obronne u kogoś, kto zinterpretuje je jako „jest na mnie wściekły”, i spokój u kogoś, kto zinterpretuje je jako „szef jest skupiony”.',
    keyTakeaway: 'Reagujesz nie na rzeczywistość, lecz na znaczenie, jakie jej przypisałeś.'
  },
  {
    id: 3,
    question: 'Na czym polega zjawisko Luki Intencja-Działanie (Intention-Behavior Gap)?',
    topic: 'Luka Intencja-Działanie',
    sectionRef: 'Sekcja 25.7',
    options: [
      { label: 'A', text: 'Trwała rozbieżność pomiędzy deklarowanym i szczerze chcianym postanowieniem (np. „Będę ćwiczyć”), a rzeczywistym brakiem wykonania tego zachowania pod wpływem impulsów i zmęczenia.', isCorrect: true },
      { label: 'B', text: 'Choroba polegająca na utracie pamięci krótkotrwałej.', isCorrect: false },
      { label: 'C', text: 'Sytuacja, w której człowiek robi rzeczy bez jakiejkolwiek wiedzy.', isCorrect: false },
      { label: 'D', text: 'Zdolność do wykonywania dwóch czynności naraz.', isCorrect: false }
    ],
    explanation: 'Samo podjęcie decyzji i szczera chęć w korze przedczołowej często pękają w zderzeniu z wyuczonymi nawykami podkorowymi i nieprzyjemnymi emocjami.',
    keyTakeaway: 'Mostem łączącym intencję z zachowaniem nie jest silna wola, lecz architektura nawyku i środowiska.'
  },
  {
    id: 4,
    question: 'W jaki sposób Unikanie (Avoidance Behavior) staje się samowzmacniającą się pętlą nawykową?',
    topic: 'Unikanie jako Wzmocnienie Negatywne',
    sectionRef: 'Sekcja 25.5',
    options: [
      { label: 'A', text: 'Ucieczka przed trudnym zadaniem wywołuje natychmiastowy spadek lęku (Wzmocnienie Negatywne), co mózg zapamiętuje jako wybitnie skuteczną strategię przetrwania, utrwalając nawyk unikania.', isCorrect: true },
      { label: 'B', text: 'Unikanie niszczy szare komórki w móżdżku.', isCorrect: false },
      { label: 'C', text: 'Unikanie sprawia, że problem sam znika po 24 godzinach.', isCorrect: false },
      { label: 'D', text: 'Unikanie wzmacnia siłę mięśniową kończyn dolnych.', isCorrect: false }
    ],
    explanation: 'Ucieczka daje natychmiastową ulgę somatyczną. Działa jak psychologiczny narkotyk: za cenę krótkoterminowego spokoju oddajesz sprawczość długoterminową.',
    keyTakeaway: 'Ulga z ucieczki wzmacnia lęk na przyszłość.'
  },
  {
    id: 5,
    question: 'Czym różnią się zachowania sterowane celem (Goal-Directed) od zachowań nawykowych (Habitual)?',
    topic: 'Zachowania Celowe vs Nawykowe',
    sectionRef: 'Sekcja 25.3',
    options: [
      { label: 'A', text: 'Zachowania celowe wymagają wysiłku kory przedczołowej i uwzględniają aktualną wartość nagrody, a zachowania nawykowe są automatycznie uruchamiane przez bodziec przez jądra podstawy niezależnie od wartości nagrody.', isCorrect: true },
      { label: 'B', text: 'Zachowania nawykowe są zawsze nielegalne.', isCorrect: false },
      { label: 'C', text: 'Zachowania celowe występują tylko u dzieci do 5 roku życia.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy w strukturach mózgowych obsługujących oba typy.', isCorrect: false }
    ],
    explanation: 'Gdy zachowanie staje się nawykiem (np. sięganie po papierosa czy jedzenie przy telewizorze), jest odpalane mechanicznie na widok wyzwalacza, nawet gdy człowiek wcale nie ma na to ochoty.',
    keyTakeaway: 'Nawyk pominie Twoją świadomą korę, jeśli nie zmienisz wyzwalacza lub środowiska.'
  },
  {
    id: 6,
    question: 'Jaką rolę w prokrastynacji odgrywa nieumiejętność regulowania nieprzyjemnych stanów afektywnych (Mood Repair)?',
    topic: 'Prokrastynacja jako Regulacja Emocjonalna',
    sectionRef: 'Sekcja 25.6',
    options: [
      { label: 'A', text: 'Prokrastynacja nie jest brakiem zarządzania czasem, lecz ucieczką od trudnych emocji (lęk przed oceną, nudy, poczucie bezradności) wywoływanych przez zadanie.', isCorrect: true },
      { label: 'B', text: 'Prokrastynacja wynika z braku zegarka w pokoju.', isCorrect: false },
      { label: 'C', text: 'Prokrastynacja dotyczy wyłącznie osób o niskim ilorazie inteligencji.', isCorrect: false },
      { label: 'D', text: 'Prokrastynacja jest uwarunkowana wyłącznie przez poziom witaminy D3.', isCorrect: false }
    ],
    explanation: 'Kiedy zadanie budzi lęk lub opór, sięgnięcie po media społecznościowe daje szybki zastrzyk dopaminy i redukcję napięcia — kosztem przyszłych konsekwencji.',
    keyTakeaway: 'Nie naprawiaj kalendarza — zaopiekuj się emocją, przed którą uciekasz w odwlekanie.'
  },
  {
    id: 7,
    question: 'W jaki sposób zasada Wzmocnienia Nieregularnego (Intermittent Reinforcement) utrwala trudne do wygaszenia schematy zachowań?',
    topic: 'Wzmocnienie Nieregularne Skinnera',
    sectionRef: 'Sekcja 25.4',
    options: [
      { label: 'A', text: 'Nagroda pojawiająca się nieprzewidywalnie (raz na jakiś czas) wywołuje największy skok dopaminy i buduje najbardziej odporny na wygaszenie nawyk (efekt jednorękiego bandyty).', isCorrect: true },
      { label: 'B', text: 'Nieregularne nagradzanie sprawia, że zachowanie natychmiast zanika.', isCorrect: false },
      { label: 'C', text: 'Uczenie się zachodzi tylko wtedy, gdy nagroda jest podawana co do sekundy.', isCorrect: false },
      { label: 'D', text: 'Wzmocnienie nieregularne działa wyłącznie na zwierzęta laboratoryjne.', isCorrect: false }
    ],
    explanation: 'To dlatego relacje z nieprzewidywalnym partnerem lub sprawdzanie powiadomień tak silnie uzależniają — mózg nieustannie czeka na niepewną nagrodę.',
    keyTakeaway: 'Nieprzewidywalność nagrody uzależnia silniej niż jej pewność.'
  },
  {
    id: 8,
    question: 'Co charakteryzuje zachowania biernie-agresywne w interakcjach społecznych?',
    topic: 'Bierna Agresja jako Zachowanie',
    sectionRef: 'Sekcja 25.9',
    options: [
      { label: 'A', text: 'Pośrednie wyrażanie złości lub oporu poprzez spóźnienia, celowe zaniedbywanie obowiązków, milczenie czy „złośliwą uległość” bez otwartej konfrontacji.', isCorrect: true },
      { label: 'B', text: 'Fizyczny atak na rozmówcę w miejscu publicznym.', isCorrect: false },
      { label: 'C', text: 'Głośne i wprost artykułowanie swoich żądań.', isCorrect: false },
      { label: 'D', text: 'Zgadzenie się na wszystkie prośby z zachwytem.', isCorrect: false }
    ],
    explanation: 'Bierna agresja pojawia się tam, gdzie człowiek czuje złość, ale boi się konsekwencji otwartej asertywności lub konfrontacji.',
    keyTakeaway: 'Zamiast karalnego milczenia, nazwij swoją złość i powód oporu na głos.'
  },
  {
    id: 9,
    question: 'Jak według koncepcji Alberta Bandury przebiega Uczenie się przez Obserwację (Vicarious Learning)?',
    topic: 'Uczenie się przez Obserwację Bandury',
    sectionRef: 'Sekcja 25.4',
    options: [
      { label: 'A', text: 'Acquire nowe wzorce zachowań poprzez obserwowaniu działań modeli (rodziców, rówieśników, liderów) oraz konsekwencji, jakie ich za to spotykają.', isCorrect: true },
      { label: 'B', text: 'Jednostka uczy się wyłącznie na własnych bolesnych błędach.', isCorrect: false },
      { label: 'C', text: 'Uczenie się zachodzi wyłącznie w trakcie czytania podręczników.', isCorrect: false },
      { label: 'D', text: 'Obserwacja innych wyłącza układ neuronów lustrzanych.', isCorrect: false }
    ],
    explanation: 'Nie musimy osobisto wpaść w przepaść — neurony lustrzane i obserwacja nagród/kar u innych pozwalają nam przyswoić skomplikowane wzorce zachowań.',
    keyTakeaway: 'Otoczenie, którym się otaczasz, po cichu koduje w Twoim mózgu swoje nawyki behawioralne.'
  },
  {
    id: 10,
    question: 'Co jest pierwszym, koniecznym krokiem do dokonania audytu własnego niepożądanego zachowania?',
    topic: 'Audyt Behawioralny',
    sectionRef: 'Sekcja 25.12',
    options: [
      { label: 'A', text: 'Obiektywne, pozbawione oceny moralnej opisanie faktu fizycznego (Co dokładnie zrobiłem?) oraz zidentyfikowanie bezpośredniego wyzwalacza.', isCorrect: true },
      { label: 'B', text: 'Surowe wyzywanie siebie od nieudaczników w myśli.', isCorrect: false },
      { label: 'C', text: 'Zignorowanie zdarzenia i udawanie, że nic się nie stało.', isCorrect: false },
      { label: 'D', text: 'Obwinienie za swoje zachowanie wyłącznie pogody.', isCorrect: false }
    ],
    explanation: 'Oceny moralne („jestem zły”) wywołują wstyd i ucieczkę. Chłodny opis naukowy („zjadłem ciastko o 22:00 pod wpływem zmęczenia”) pozwala zaprojektować zmianę.',
    keyTakeaway: 'Mierz i opisuj swoje zachowanie jak naukowiec, a nie jak bezwzględny sędzia.'
  }
];

export const caseStudiesChapterTwentyFive: CaseStudy[] = [
  {
    id: 'cs-ch25-odwlekanie-prezentacji',
    title: 'Pętla Unikania: Dlaczego Marek Sprzątał Garaż Zamiast Pisać Raport',
    subtitle: 'Anatomia prokrastynacji jako zniekształconej regulacji emocjonalnej',
    protagonist: 'Marek, 35 lat, starszy analityk finansowy',
    context: 'Trudny projekt audytowy dla kluczowego klienta z terminem oddania za 10 dni.',
    story: [
      'Marek miał przygotować 40-stronicowy raport ze złożonymi wycenami. Za każdym razem, gdy siadał do laptopa, czuł ukłucie niepokoju w klatce piersiowej i myśl: „A co, jeśli popełnię błąd w wyliczeniach i wyjdę na niekompetentnego?”.',
      'Mózg Marka zinterpretował raport jako zagrożenie dla jego reputacji. Aby zredukować nieprzyjemne napięcie somatyczne, Marek natychmiast znajdował „pilne” zajęcie zastępcze: czyszczenie skrzynki mailowej, ukradkowe sprzątanie garażu czy naprawę szuflady.',
      'Sprzątanie garażu dało mu natychmiastowy zastrzyk dopaminy i poczucie produktywności („Przynajmniej coś zrobiłem!”). W ten sposób uruchomił Wzmocnienie Negatywne: ucieczka od raportu dała natychmiastową ulgę od lęku.',
      'Trzy dni przed terminem Marek znalazł się w stanie paniki. Napisał raport w ciągu dwóch nieprzespanych nocy, na kofeinie i lekach uspokajających. Jakość raportu była średnia, a Marek przypłacił to wyczerpaniem i ugruntowaniem przekonania: „Pracuję dobrze tylko pod pistoletem”.',
      'Jego zachowanie nie było brakiem czasu — było ucieczką przed nieprzyjemną emocją niepewności.'
    ],
    decisionTaken: 'Marek wybrał natychmiastową ulgę od lęku poprzez zadanie zastępcze (sprzątanie), kosztem spiętrzenia stresu w przyszłości.',
    whatProtagonistSaw: 'Odsunięcie w czasie nieprzyjemnego zadania i poczucie porządku w garażu.',
    whatWasMissed: 'Że ucieczka wzmacniała lęk przed raportem, czyniąc go z każdym dniem coraz straszniejszym w jego wyobraźni.',
    psychologicalAnalysis: {
      coreMechanism: 'Mood Repair via Avoidance (Prokrastynacja jako emocjonalna ucieczka) uwarunkowana Wzmocnieniem Negatywnym.',
      cognitiveBiases: [
        { name: 'Dyskontowanie Hiperboliczne', description: 'Wybór natychmiastowej ulgi w tej sekundzie zamiast spokoju za tydzień.', impact: 'Chroniczne spiętrzenie stresu.' },
        { name: 'Afektywne Myślenie Tunelowe', description: 'Przekonanie, że do pisania raportu potrzebuje „idealnego nastroju i natchnienia”.', impact: 'Czekanie na iluzoryczny wena.' }
      ],
      defenseMechanisms: [
        { name: 'Sublimacja / Przemieszczenie', explanation: 'Kierowanie energii z lękowego raportu na społecznie aprobowane sprzątanie garażu.' }
      ],
      emotionalDynamic: 'Lęk przed oceną wyzwalający odruch ucieczki i pogoń za łatwą dopaminą.'
    },
    decisionProcessAnalysis: {
      trigger: 'Widok otwartego, pustego dokumentu w komputerze.',
      attentionFocus: 'Ścisk w żołądku i myśl o potencjalnym błędzie.',
      interpretation: '„Ten raport jest za trudny, nie wiem od czego zacząć, zaraz zrobimy z siebie głupca”.',
      emotion: 'Lęk, bezradność, opór.',
      impulse: 'Zamknąć laptopa i zająć się czymś prostym.',
      action: 'Wyjście do garażu i ukradkowe sprzątanie przez 4 godziny.',
      consequence: 'Chwilowa ulga, wyzrzuty sumienia wieczorem, potworna panika na 2 dni przed terminem.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Detekcja zagrożenia oceną w raporcie', activationState: 'Hiperaktywacja' },
        { region: 'Prążkowie', role: 'Wyrzut dopaminy za szybkie ukończenie sprzątania garażu', activationState: 'Uwarunkowana pętla ulgi' }
      ],
      neurotransmitters: [
        { name: 'Dopamina i Noradrenalina', roleInScenario: 'Dopamina z zadań zastępczych utrwala nawyk prokrastynacji' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Otwarcie pliku wywołuje skok tętna i ucisk w klatce.' },
        { timeMs: '200 ms', process: 'Ucieczka do garażu natychmiast obniża tętno (nagroda).' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [],
      counterMeasures: [
        { step: 'Protokół Tolerancji Dyskomfortu i Zasada 5 Minut', script: '„Będę pisać raport przez dokładnie 5 minut bez oceniania jakości. Jeśli po 5 minutach lęk będzie nie do udźwignięcia, mam prawo wstać”.', rationale: 'Rozbija opór progu startowego, po czym układ afektywny uspokaja się w trakcie działania.' }
      ]
    },
    alternativePath: 'Gdyby Marek zredukował pierwsze zadanie do napisania jednego nagłówka (mikrokrok), obniżyłby lęk w ciele migdałowatym i napisałby raport bez nieprzespanych nocy.',
    readerQuestion: 'przed jaką konkretną emocją uciekasz, gdy po raz kolejny odkladasz to samo ważne zadanie?',
    keyTakeaway: 'Prokrastynacja nie jest brakiem organizacji czasu — jest nieumiejętnością wytrzymania nieprzyjemnej emocji.'
  },
  {
    id: 'cs-ch25-wybuch-w-pracy',
    title: 'Ścieżka Złości: Agnieszka i Wybuch na Zebraniu',
    subtitle: 'Jak nawykowa reakcja agresywno-obronna zniszczyła pozycję menedżerską',
    protagonist: 'Agnieszka, 41 lat, kierowniczka działu marketingu',
    context: 'Trudne zebranie operacyjne, na którym dyrektor zakwestionował budżet kampanii Agnieszki.',
    story: [
      'Podczas zebrania dyrektor powiedział spokojnym głosem: „Agnieszko, te wskaźniki CAC są za wysokie. Musimy zweryfikować efektywność Twojego zespołu”.',
      'Agnieszka wychowała się w domu, gdzie krytyka oznaczała odrzucenie i brak szacunku. Jej umysł natychmiast zinterpretował słowa dyrektora jako bezprawny, personalny atak na jej kompetencje i godność.',
      'W ułamku sekundy kora przedczołowa Agnieszki została wyłączona (Emotional Hijacking). Zamiast przedstawić analityczne dane, Agnieszka pociemniała na twarzy, uderzyła dłonią w stół i wykrzyczała podniesionym głosem: „Jeśli uważasz, że robimy to źle, to sam sobie prowadź ten dział! Nie pozwolę sobą pomiatać!”. Wstała i wyszła z sali, trzaskając drzwiami.',
      'Jej zachowanie dało jej 10-sekundową iluzję siły i ochrony godności. Jednak konsekwencje były opłakane: zarząd nałożył na nią naganę, zespół poczuł się upokorzony, a jej szanse na awans spadły do zera.',
      'Jej wybuch był utrwalonym nawykiem reagowania agresją wyprzedzającą na każdy sygnał oceny.'
    ],
    decisionTaken: 'Agnieszka uległa natychmiastowemu impulsowi obronnemu (krzyk i ucieczka), niszcząc swoje relacje zawodowe.',
    whatProtagonistSaw: 'Ochronę własnej godności przed rzekomym „poniżeniem” ze strony dyrektora.',
    whatWasMissed: 'Że dyrektor pytał o suche dane biznesowe, a jej reakcja udowodniła brak dojrzałości emocjonalnej.',
    psychologicalAnalysis: {
      coreMechanism: 'Porwanie Emocjonalne (Emotional Hijacking) połączone z Wrogiem Błędem Atrybucji (Hostile Attribution Bias).',
      cognitiveBiases: [
        { name: 'Hostile Attribution Bias', description: 'Przypisanie dyrektorowi wrogich, personalnych intencji przy merytorycznym pytaniu o wskaźnik CAC.', impact: 'Eskalacja konfliktu bez powodu.' },
        { name: 'Myślenie Zero-Jedynkowe', description: '„Albo natychmiast go zaatakuję, albo zostanę zmiażdżona i uznana za nieudacznika”.', impact: 'Brak przestrzeni na odpowiedź asertywną.' }
      ],
      defenseMechanisms: [
        { name: 'Reakcja Pozorowana / Agresja Wyprzedzająca', explanation: 'Atak jako sposób na ukrycie głębokiego lęku przed odrzuceniem.' }
      ],
      emotionalDynamic: 'Gwałtowny skok wściekłości jako pancerz chroniący wstyd.'
    },
    decisionProcessAnalysis: {
      trigger: 'Pytanie dyrektora o koszty CAC.',
      attentionFocus: 'Swoje poczucie zagrożenia i wzrok współpracowników.',
      interpretation: '„On mnie publicznie upokarza i chce zniszczyć moją pozycję”.',
      emotion: 'Wściekłość, wstyd, poczucie zagrożenia.',
      impulse: 'Uderzyć w stół, wykrzyczeć odpowiedź i uciec.',
      action: 'Krzyk, uderzenie w stół i ostentacyjne wyjście z sali.',
      consequence: 'Nagana od zarządu, utrata autorytetu w zespole, zniszczenie kariery.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Natychmiastowe odpalenie reakcji walki (Fight)', activationState: 'Gwałtowny wybuch' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Brak zdolności do wyhamowania impulsu słownego', activationState: 'Całkowita hipoaktywacja' }
      ],
      neurotransmitters: [
        { name: 'Adrenalina i Noradrenalina', roleInScenario: 'Gwałtowny zalew fizjologiczny powodujący drżenie rąk i purpurę na twarzy' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 50 ms', process: 'Słowa dyrektora aktywują ciało migdałowate.' },
        { timeMs: '100 ms', process: 'Brak pauzy poznawczej — natychmiastowe uderzenie dłonią w stół.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [],
      counterMeasures: [
        { step: 'Protokół Kotwicy Ciała i Zamrożenia Słowa', script: '„Gdy czuję falę gorąca na szyi, mocno dociskam stopy do podłogi, liczę w duchu do 4 i mówię: "Przeanalizuję te wskaźniki CAC i wrócę z raportem za godzinę"”.', rationale: 'Wymuszenie fizycznej pauzy oddaje władzę korze przedczołowej.' }
      ]
    },
    alternativePath: 'Gdyby Agnieszka zastosowała pauzę oddechową, odpowiedziałaby chłodnymi faktami, wzmacniając swój autorytet ekspercki.',
    readerQuestion: 'Jaki stały wyzwalacz w ustach innych ludzi sprawia, że w ułamku sekundy tracisz panowanie nad swoim zachowaniem?',
    keyTakeaway: 'Nie masz wpływu na to, co mówią inni, ale ponosisz 100% odpowiedzialności za to, co robisz ze swoimi dłońmi i głosem.'
  }
];

export const selfExercisesChapterTwentyFive: SelfExercise[] = [
  {
    id: 'ex-ch25-chain-analysis',
    title: 'Ćwiczenie 9.1: Wiwisekcja Łańcucha Behawioralnego (ABC / S-O-R)',
    subtitle: 'Rozłóż swoje niepożądane zachowanie na 9 kroków procesowych',
    objective: 'Zrozumienie, że zachowanie nie pojawia się w próżni i zidentyfikowanie punktu, w którym można przerwać nawyk.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Analityczne rozłożenie ciągu impuls-reakcja wzmacnia hamowanie gniazdowe w rIFG (prawej dolnej korze czołowej).',
    steps: [
      {
        stepNumber: 1,
        title: 'Opisz obiektywne zachowanie (Fakt fizyczny)',
        instruction: 'Co dokładnie zrobiłeś? Bez ocen moralnych i przymiotników (np. „Zjadłem 3 pączki o 23:00”, „Nawaliłem na przyjaciela”).',
        promptText: 'Moje analizowane zachowanie:',
        placeholder: 'Podniosłem głos na dziecko, gdy zrzuciło szklankę z wodą...'
      },
      {
        stepNumber: 2,
        title: 'Identyfikacja Wyzwalacza (Sytuacja i Percepcja)',
        instruction: 'Co wydarzyło się sekundy wcześniej? Co dokładnie zauważyłeś zmysłami?',
        promptText: 'Wyzwalacz zewnętrzny i rejestracja:',
        placeholder: 'Dźwięk tłuczonego szkła i rozlana woda na moim nowym komputerze...'
      },
      {
        stepNumber: 3,
        title: 'Odkryj Interpretację i Myśl',
        instruction: 'Jakie znaczenie natychmiast nadałeś temu zdarzeniu? Co pomyślałeś w duchu?',
        promptText: 'Interpretacja i automatyczna myśl:',
        placeholder: '„On robi to specjalnie! Znowu nie uważa i niszczy moje rzeczy, zero szacunku!”...'
      },
      {
        stepNumber: 4,
        title: 'Zidentyfikuj Emocję i Potrzebę',
        instruction: 'Co poczułeś w ciele i czego w tej sekundzie zapragnąłeś (np. ulgi, kontroli, ucieczki)?',
        promptText: 'Emocja i potrzeba:',
        placeholder: 'Wściekłość, lęk o sprzęt. Potrzeba natychmiastowego odzyskania kontroli.'
      },
      {
        stepNumber: 5,
        title: 'Zapisz Konsekwencję i Wzmocnienie',
        instruction: 'Co stało się sekundy po zachowaniu, a co godziny później? Dlaczego to zachowanie mogłoby się powtórzyć?',
        promptText: 'Konsekwencje krótkie i długoterminowe:',
        placeholder: 'Krótka konsekwencja: rozładowanie złości (ulga). Długa konsekwencja: płacz dziecka, poczucie winy, wstyd...'
      }
    ],
    reflectionQuestions: [
      'W którym momencie tego łańcucha miałeś realną przestrzeń na zatrzymanie reakcji?',
      'Jakie inne, alternatywne zachowanie mogłoby zaspokoić tę samą potrzebę bez niszczenia relacji?'
    ]
  },
  {
    id: 'ex-ch25-behavioral-journal',
    title: 'Ćwiczenie 9.2: Dziennik Obserwacji Mikrokroków Behawioralnych',
    subtitle: 'Rejestruj swoje zachowania w świecie realnym bez oceniania',
    objective: 'Zbudowanie nawyku uważności metapoznawczej na własne reakcje fizyczne i werbalne.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Systematyczne monitorowanie zachowania na piśmie aktywuje sieć kontroli wykonawczej, osłabiając reaktywność podkorową.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybierz jedno zachowanie do obserwacji przez 3 dni',
        instruction: 'Wybierz jeden konkretny mikronawyk (np. sięganie po telefon podczas rozmowy, przerywanie innym, podjadanie przy komputerze).',
        promptText: 'Mój cel obserwacyjny:',
        placeholder: 'Będę obserwować każde sięgnięcie po telefon w trakcie pracy...'
      },
      {
        stepNumber: 2,
        title: 'Rejestruj każde wystąpienie zachowania (Tabela 1:1)',
        instruction: 'Zapisz godzinę, miejsce, stan zmęczenia i sytuację towarzyszącą każdemu wystąpieniu.',
        promptText: 'Rejestr wystąpień z dzisiaj:',
        placeholder: '10:15 - przy biurku, zmęczenie 6/10, trudny mail -> sięgnięcie po telefon. 11:40 - przerwa...'
      },
      {
        stepNumber: 3,
        title: 'Wyciągnij wniosek o powtarzalnym schemacie',
        instruction: 'Jaki wspólny mianownik łączy większość sytuacji, w których to zachowanie się pojawia?',
        promptText: 'Mój odkryty schemat wyzwalający:',
        placeholder: 'Najczęściej sięgam po telefon nie z nudów, lecz w momencie pojawienia się trudnego zadania w pracy...'
      }
    ],
    reflectionQuestions: [
      'Jak sama obecność Dziennika zmieniła częstotliwość występowania opisanego zachowania?',
      'Czego nauczyłeś się o ukrytej funkcji tego zachowania?'
    ]
  }
];

export const chapterTwentyFive: Chapter = {
  number: 25,
  volume: 3,
  volumeChapterNumber: 9,
  title: 'Rozdział 9: Zachowanie: Od Intencji do Działania',
  subtitle: 'Jak decyzje, interpretacje i emocje przekładają się na zachowanie? Anatomia reakcji i konsekwencji',
  leadParagraph: 'Możesz posiadać najgłębsze przemyślenia, najbardziej szlachetne wartości i setki podjętych decyzji w głowie — lecz dopóki nie zostaną one uzewnętrznione w postaci konkretnego, obserwowalnego ZACHOWANIA, stan rzeczywistości pozostaje nienaruszony. Zachowanie jest jedyną walutą, w której ludzki umysł rozlicza się ze światem zewnętrznym. Niestety, droga od myśli i emocji do realnego czynu bywa usłana wybojami: nawykami, ucieczką przed nieprzyjemnym stanem somatycznym, presją otoczenia czy luką intencja-działanie. W tym rozdziale rozłożymy ludzkie zachowanie na czynniki pierwsze, by zrozumieć, dlaczego robimy to, co robimy — i dlaczego tak często robimy coś, czego sami nie chcemy.',
  totalEstimatedPages: 56,
  sections: [
    {
      id: 'sec-25-1',
      pageNumber: 620,
      sectionNumber: '25.1',
      title: 'Czym jest zachowanie? Granica pomiędzy światem wewnętrznym a zewnętrznym',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Niezrealizowana intencja jest jedynie cieniem w głowie. Dopiero zachowanie nadaje kształt Twojej obecności na ziemi.',
        author: 'B.F. Skinner'
      },
      paragraphs: [
        'W języku potocznym często mylimy to, co dzieje się wewnątrz naszej głowy, z tym, co rzeczywiście robimy. Mówimy: „Chciałem to zrobić”, „Miałem dobrą intencję”, „Podjąłem przecież decyzję”. Jednak z punktu widzenia nauk behawioralnych i neuronauki istnieje nieprzekraczalna granica pomiędzy stanem wewnętrznym (myśl, emocja, intencja) a ZACHOWANIEM (uzewnętrznioną aktywnością motoryczną, werbalną lub autonomiczną).',
        'Zachowanie to każde obserwowalne działanie organizmu: wypowiedziane słowo, milczenie w konkretnym momencie, uderzenie dłonią w stół, ucieczka z pokoju, sięgnięcie po szklankę czy powstrzymanie się od ruchu. Otoczenie i nasz własny układ nerwowy nie odbierają naszych utajonych intencji — odbierają jedynie konsekwencje naszych realnych zachowań.',
        'Zrozumienie tej różnicy jest kluczem do dojrzałości. Przeniesienie uwagi z pytania: „Co myślałem i czułem?” na pytanie: „Co dokładnie zrobiłem w świecie fizycznym?” pozwala odrzeć nasze życie z iluzji i zaplanować realną zmianę.'
      ]
    },
    {
      id: 'sec-25-2',
      pageNumber: 624,
      sectionNumber: '25.2',
      title: 'Model Łańcucha Behawioralnego: Od bodźca do wzmocnienia',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Ludzkie zachowanie nigdy nie pojawia się „znikąd”. Jest ono zawsze ogniwem w precyzyjnym łańcuchu przyczynowo-skutkowym. Prawidłowy model analizy zachowania obejmuje 9 etapów:',
        '1. SYTUACJA (Bodziec zewnętrzny lub wewnętrzny).',
        '2. PERCEPCJA (Rejestracja bodźca przez zmysły).',
        '3. INTERPRETACJA (Nadanie znaczenia i subiektywna ocena).',
        '4. MYŚLI AUTOMATYCZNE (Szybki monolog wewnętrzny).',
        '5. EMOCJA & POTRZEBA (Sygnał somatyczny w ciele).',
        '6. DECYZJA / IMPULS (Wybór ścieżki).',
        '7. ZACHOWANIE (Fizyczny czyn, słowo lub ruch).',
        '8. KONSEKWENCJA (Rezultat krótkoterminowy i długoterminowy).',
        '9. WZMOCNIENIE (Utrwalenie lub wygaszenie schematu na przyszłość).'
      ]
    },
    {
      id: 'sec-25-3',
      pageNumber: 628,
      sectionNumber: '25.3',
      title: 'Zachowania automatyczne a kontrolowane: Sterowanie z jąder podstawy',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Przejście od działania zorientowanego na cel do nawyku oznacza fundamentalną rekonfigurację kontroli neuronalnej: zachowanie przestaje być kierowane przewidywaną wartością rezultatu, a staje się mechanicznie wyzwalane przez bodźce uprzednie, „wypalone” w grzbietowo-bocznym prążkowiu.',
        author: 'Prof. Anthony Dickinson & Bernard Balleine',
        source: 'University of Cambridge / University of Sydney, „The Role of Learning in the Generation of Action”, Psychological Research, 1994'
      },
      paragraphs: [
        'Wszystkie działania, jakie człowiek podejmuje od momentu otwarcia oczu, dzielą się na dwie fundamentalne kategorie neurobiologiczne: zachowania kontrolowane (Goal-Directed Actions) oraz zachowania automatyczne i nawykowe (Habitual Behaviors).',
        'Zachowania kontrolowane wymagają pełnej obecności uwagi, angażują grzbietowo-boczną korę przedczołową (dlPFC) oraz pamięć roboczą. Są zorientowane na cel (Action-Outcome / A-O) — mózg nieustannie kalkuluje bieżącą wartość nagrody i weryfikuje, czy wykonywane działanie przybliża nas do zamierzonego rezultatu. Przykładem jest nauka prowadzenia samochodu w pierwszych godzinach kursu, manewrowanie na śliskiej drodze lub pisanie trudnego pisma procesowego.',
        'Kiedy jednak dane zachowanie zostanie powtórzone dziesiątki lub setki razy w obecności tego samego wyzwalacza środowiskowego, mózg — w ramach ewolucyjnej ekonomii energetycznej — przenosi kontrolę wykonawczą do podkorowych jąder podstawy (prążkowia grzbietowo-bocznego, DLS). W tym momencie zachowanie przestaje być zależne od bieżącej wartości celu — odpala się automatycznie jak gotowy skrypt w odpowiedzi na bodziec (Stimulus-Response / S-R).',
        'Większość dorosłych ludzi funkcjonuje w trybie automatycznym przez niemal 45-50% każdego dnia. Oznacza to, że sięgasz po telefon, otwierasz lodówkę po wejściu do kuchni lub zaczynasz tłumaczyć się uległym tonem nie dlatego, że podjąłeś taką decyzję, lecz dlatego, że jądra podstawy uruchomiły utrwalony obwód neuronowy bez pytania kory przedczołowej o zgodę.'
      ],
      subsections: [
        {
          id: 'sub-25-3-1',
          title: 'Analiza słów Dickinsona i Balleine’a: Test Dewaluacji Nagrody Jako Próba Złota Nawyków',
          content: [
            'Wypowiedź Dickinsona i Balleine’a opisuje zjawisko autonomizacji ruchowej. W klasycznym paradygmacie laboratoryjnym dowiedziono, że:',
            '1. W FAZIE WCZESNEJ (A-O): Jeśli zwierzę nauczy się naciskać dźwignię dla słodkiego syropu, a badacz zepsuje smak syropu lub wywoła nudności (dewaluacja celu), zwierzę NATYCHMIAST PRZESTAJE naciskać dźwignię. Zachowanie jest w pełni kontrolowane przez świadomą wartość wyniku.',
            '2. W FAZIE NAWYKOWEJ (S-R): Po wielomiesięcznym przetrenowaniu, to samo zwierzę poddane dewaluacji syropu NADAL NACISKA DŹWIGNIĘ w odpowiedzi na zapalenie lampki. Dźwignia stała się odruchem prążkowia całkowicie odciętym od realnej potrzeby organizmu. Dokładnie ten sam proces zachodzi u człowieka, który bezmyślnie sięga po kolejnego papierosa lub otwiera portal informacyjny, czując mdłości i znużenie.'
          ]
        },
        {
          id: 'sub-25-3-2',
          title: 'Neurobiologiczny Przełącznik: DMS vs DLS',
          content: [
            'W mózgu ssaka istnieją dwa rywalizujące ze sobą podsystemy w obrębie prążkowia:',
            '• Grzbietowo-przyśrodkowe prążkowie (DMS): Połączone gęstą siecią aksonów z korą przedczołową, odpowiada za elastyczne, celowe wybory adaptacyjne.',
            '• Grzbietowo-boczne prążkowie (DLS): Połączone bezpośrednio z korą czuciowo-ruchową, odpowiada za sztywne, bezmyślne automatyzmy motoryczne.',
            'Stres, zmęczenie i niedobór snu drastycznie wyciszają układ DMS, oddając bezwzględną władzę układowi DLS. Dlatego po ciężkim dniu tak łatwo wracamy do naszych najgorszych, podkorowych nawyków.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-25-3-1',
          type: 'wniosek',
          title: 'Wniosek Neurokognitywny: Nie Negocjuj z Prążkowiem w Środowisku Bodźca',
          content: 'Kiedy znajdziesz się w obecności bodźca inicjującego utrwaloną pętlę S-R (np. leżenie w łóżku z telefonem na szafce nocnej), grzbietowo-boczne prążkowie odpala ruch w kilkadziesiąt milisekund. Próba prowadzenia wewnętrznego dialogu („Nie powinienem tego robić”) angażuje powolną korę, która przegrywa z szybkością podkorowego skryptu. Jedyną skuteczną obroną jest fizyczne usunięcie bodźca wyzwalającego ze środowiska.'
        }
      ],
      interactiveWindow: {
        id: 'win-25-3',
        title: 'Dekompozycja Behawioralna: Odruch S-R czy Działanie Celowe A-O?',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Karol (32 lata) wraca do domu po 10 godzinach wyczerpującej pracy. Wchodzi do przedpokoju, rzuca torbę na podłogę, idzie prosto do kuchni i bez namysłu otwiera lodówkę, wpatrując się w jej zawartość, mimo że nie odczuwa głodu fizjologicznego.',
        steps: [
          {
            stepNumber: 1,
            title: 'Analiza neurobiologicznego źródła zachowania',
            description: 'Co steruje zachowaniem Karola w tym momencie?',
            options: [
              {
                text: 'System S-R w grzbietowo-bocznym prążkowiu (DLS) uruchomiony przez wyzwalacz wejścia do kuchni i spadek energii korowej',
                feedback: 'Precyzyjna diagnoza oparta na modelu Dickinsona i Balleine’a. Zachowanie Karola to automatyczny skrypt S-R z jąder podstawy.',
                isOptimal: true
              },
              {
                text: 'Świadoma kalkulacja zapotrzebowania kalorycznego w grzbietowo-bocznej korze przedczołowej (dlPFC)',
                feedback: 'Błędne założenie. Karol nie odczuwa głodu i nie kalkuluje kalorii — kora przedczołowa jest w stanie wyczerpania.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Wybór interwencji przerywającej pętlę',
            description: 'Jak Karol może zablokować to automatyczne zachowanie w przyszłości?',
            options: [
              {
                text: 'Powiesić kartkę na lodówce: „Karolu, pamiętaj o diecie!”',
                feedback: 'Niska skuteczność. Wyczerpane prążkowie habituuje się do napisów w ciągu 3 dni.',
                isOptimal: false
              },
              {
                text: 'Zmienić układ przestrzenny: po wejściu do domu skierować się natychmiast do łazienki na 5-minutowy prysznic, omijając kuchnię',
                feedback: 'Znakomite rozwiązanie. Przełamanie łańcucha kontekstowego blokuje odpalenie skryptu S-R w prążkowiu.',
                isOptimal: true
              }
            ]
          }
        ],
        reflectionPrompt: 'Które z Twoich codziennych czynności powrotu do domu wykonujesz na całkowitym „autopilocie” prążkowia bez jakiejkolwiek świadomej intencji?'
      }
    },
    {
      id: 'sec-25-4',
      pageNumber: 632,
      sectionNumber: '25.4',
      title: 'Prawa Uczenia się: Nagroda, kara i siła wzmocnienia negatywnego',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Człowiek nie działa na świat z próżni; to świat oddziałuje na niego poprzez konsekwencje jego czynów. Zachowanie jest kształtowane i podtrzymywane przez swoje skutki. A pośród wszystkich mechanizmów sprawczych to właśnie wzmocnienie negatywne — natychmiastowa ucieczka od przykrego stanu afektywnego — buduje najbardziej nieugięte i niewidzialne więzienia behawioralne.',
        author: 'Prof. B.F. Skinner',
        source: 'Harvard University, „About Behaviorism”, Alfred A. Knopf, 1974'
      },
      paragraphs: [
        'B.F. Skinner, twórca radykalnego behawioryzmu i paradygmatu warunkowania sprawczego (Operant Conditioning), zrewolucjonizował rozumienie ludzkiego działania, wykazując, że prawdopodobieństwo pojawienia się zachowania w przyszłości jest bezpośrednią funkcją konsekwencji, jakie następują natychmiast po jego wykonaniu.',
        'W analizie behawioralnej wyróżniamy cztery podstawowe relacje konsekwencji:',
        '1. Wzmocnienie Pozytywne (Positive Reinforcement): Dodanie bodźca przyjemnego (nagroda, pochwała, dopamina), co zwiększa częstotliwość zachowania.',
        '2. Wzmocnienie Negatywne (Negative Reinforcement): Usunięcie bodźca awersyjnego (redukcja bólu, lęku, nudy, napięcia trzewnego), co RÓWNIEŻ ZWIĘKSZA częstotliwość zachowania.',
        '3. Kary (Pozytywna i Negatywna): Wprowadzenie bodźca przykrego lub zabranie przywileju w celu wygaszenia zachowania — badania pokazują jednak, że kara rzadko uczy nowego zachowania, a najczęściej uczy jedynie ukrywania się i lęku przed karzącym.',
        'Najważniejszym, a zarazem najbardziej mylonym pojęciem jest WZMOCNIENIE NEGATYWNE. To nie jest kara! To mechanizm ulgi: zrobienie czegoś, co sprawia, że cierpienie natychmiast ustaje. Niemal wszystkie toksyczne nawyki człowieka — od nałogowego sięgania po alkohol i papierosy, przez kompulsywne jedzenie, po prokrastynację i uległość — są napędzane potęgą wzmocnienia negatywnego.'
      ],
      subsections: [
        {
          id: 'sub-25-4-1',
          title: 'Analiza słów prof. B.F. Skinnera: Więzienie Wzmocnienia Negatywnego',
          content: [
            'Wypowiedź prof. Skinnera ujawnia psychologiczny paradoks unikania. Kiedy człowiek doświadcza lęku, poczucia nieadekwatności lub napięcia w relacji, jego układ nerwowy desperacko domaga się wyzerowania tego afektu.',
            'Jeśli w tym momencie sięgnie po zachowanie ucieczkowe (np. wycofa się z zebrania, sięgnie po kieliszek wina, odłoży telefon i zapadnie w sen), napięcie znika w ułamku sekundy. Ta gwałtowna ulga staje się potężnym wzmocnieniem biologicznym: mózg uczy się, że ucieczka jest jedynym bezpiecznym ratunkiem, cementując wzorzec na lata.'
          ]
        },
        {
          id: 'sub-25-4-2',
          title: 'Asymetria Wzmocnień: Dlaczego Ulga Wygrywa z Długoterminową Nagrodą',
          content: [
            'Mózg wycenia konsekwencje zachowania według zasady bliskości czasowej (Temporal Contiguity). Ulga uzyskana w ciągu 500 milisekund (wzmocnienie negatywne) ma dla układów podkorowych wielokrotnie większą siłę uczenia niż obietnica zdrowia czy sukcesu za 5 lat (odroczone wzmocnienie pozytywne).',
            'Aby zmienić zachowanie podtrzymywane przez wzmocnienie negatywne, trzeba nauczyć się wytrzymywać mikro-dyskomfort somatyczny bez natychmiastowej ucieczki w znieczulenie (tzw. ekspozycja z powstrzymaniem reakcji — ERP).'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-25-4-1',
          type: 'badanie',
          title: 'Eksperyment Skinnera: Nieregularne Rozkłady Wzmocnień i Pułapka Gry wideo',
          content: 'Skinner odkrył, że zachowanie najtrudniej poddaje się wygaszeniu wtedy, gdy wzmocnienie pojawia się według Zmiennego Rozkładu Wzmocnień (Variable Ratio Schedule) — czyli w sposób nieprzewidywalny. Zwierzęta naciskały dźwignię z obłędną częstotliwością, gdy nie wiedziały, za którym razem wypadnie ziarno. Ten sam mechanizm wykorzystują dziś twórcy algorytmów społecznościowych i gier hazardowych.'
        }
      ],
      interactiveWindow: {
        id: 'win-25-4',
        title: 'Anatomia Wzmocnienia Negatywnego: Dlaczego Ucieczka Daje Ulgę?',
        type: 'zmien_jeden_element',
        context: 'Michał (27 lat) ma zadzwonić do niezadowolonego klienta, by wyjaśnić opóźnienie w projekcie. Czuje narastający ścisk w klatce piersiowej i przyspieszone tętno.',
        steps: [
          {
            stepNumber: 1,
            title: 'Wariant A: Ucieczka w zachowanie zastępcze (Wzmocnienie Negatywne)',
            description: 'Michał zamyka zakładkę z kontaktem do klienta i mówi sobie: „Zadzwonię jutro rano, teraz posprzątam skrzynkę mailową”. Jak reaguje jego ciało w pierwszych 3 sekundach?',
            options: [
              {
                text: 'Następuje gwałtowny spadek napięcia fizjologicznego — ulga somatyczna, która wzmacnia nawyk ucieczki na przyszłość',
                feedback: 'Dokładnie tak działa wzmocnienie negatywne Skinnera. Ta natychmiastowa ulga to neurochemiczna zapłata za ucieczkę.',
                isOptimal: true
              },
              {
                text: 'Pojawia się natychmiastowa euforia i duma z doskonałego zarządzania czasem',
                feedback: 'Nie. To nie euforia, lecz wygaszenie alarmu ciała migdałowatego — ulga, która uczy mózg bierności.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Wariant B: Wytrzymanie dyskomfortu i wykonanie telefonu (Zmień jeden element)',
            description: 'Michał bierze głęboki wydech przeponowy, akceptuje chwilowy ucisk w klatce piersiowej i wybiera numer klienta. Rozmowa trwa 4 minuty, klient dziękuje za szczerość.',
            options: [
              {
                text: 'Ciało migdałowate uczy się, że konfrontacja nie niesie śmiertelnego zagrożenia — wygaszanie lęku i budowanie poczucia samoskuteczności',
                feedback: 'Znakomita interwencja behawioralna. Przerwanie pętli unikania pozwala na wygaszenie warunkowej reakcji lękowej.',
                isOptimal: true
              },
              {
                text: 'Układ nerwowy Michała ulega trwałemu uszkodzeniu na skutek stresu rozmowy',
                feedback: 'Absolutnie nie. Krótkotrwały stres adaptacyjny jest warunkiem koniecznym budowania odporności psychicznej.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Przed jaką jedną trudną rozmową lub zadaniem uciekasz w tym tygodniu, kupując sobie chwilową ulgę kosztem narastającego w tle problemu?'
      }
    },
    {
      id: 'sec-25-5',
      pageNumber: 636,
      sectionNumber: '25.5',
      title: 'Strategia unikania (Avoidance Behavior): Krótkoterminowa ulga, długoterminowe więzienie',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Zachowanie unikania (Avoidance Behavior) jest jednym z najbardziej podstępnych i destrukcyjnych mechanizmów w ludzkiej psychice. Polega na podejmowaniu działań mających na celu ucieczkę przed bezpośrednią konfrontacją z bodźcem, sytuacją lub wewnętrznym stanem emocjonalnym, który wywołuje lęk, poczucie bezradności lub dyskomfort.',
        'Z punktu widzenia neurobiologii unikanie jest potężnie wzmacniane przez mechanizm Wzmocnienia Negatywnego (Negative Reinforcement). W momencie, gdy wycofujesz się z trudnej rozmowy, odsuwasz otwarcie wezwania do zapłaty czy rezygnujesz ze złożenia aplikacji o pracę, w Twoim ciele następuje gwałtowny, fizjologiczny spadek napięcia — ciśnienie krwi spada, a układ współczulny się wycisza. Mózg rejestruje tę chwilową ulgę jako gigantyczny sukces adaptacyjny: „Ucieczka uratowała nas przed cierpieniem!”.',
        'Cena, jaką płacimy za tę chwilową ulgę, jest jednak dewastująca. Każdy akt unikania wysyła do ciała migdałowatego sygnał potwierdzający: „Uniknięta sytuacja była śmiertelnie groźna, a ja nie mam zasobów, by jej stawić czoła”. W rezultacie lęk ulega utrwaleniu i eskalacji, pole życiowej sprawczości kurczy się, a nierozwiązany problem narasta w tle.',
        'Poniższe studium przypadku ukazuje pełną anatomię pętli unikania u starszego analityka finansowego, który w obliczu lęku przed oceną uciekał w kompulsywne porządkowanie otoczenia.'
      ],
      caseStudyRef: caseStudiesChapterTwentyFive[0]
    },
    {
      id: 'sec-25-6',
      pageNumber: 640,
      sectionNumber: '25.6',
      title: 'Prokrastynacja jako zachowanie: Ucieczka przed trudną emocją, a nie brakiem czasu',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Prokrastynacja nie jest defektem zarządzania czasem, wadą charakteru ani brakiem samodyscypliny. To pierwotna neurobiologiczna reakcja unikania, w której układ limbiczny — w obliczu dyskomfortu afektywnego wywołanego przez trudne zadanie — wybiera natychmiastową naprawę nastroju (short-term mood repair). Mózg przedkłada chwilową ulgę w tej sekundzie ponad dobrostan przyszłego ja.',
        author: 'Prof. Timothy A. Pychyl & Fuschia Sirois',
        source: 'Carleton University / University of Sheffield, „Procrastination and the Priority of Short-Term Mood Regulation”, Social and Personality Psychology Compass, 2013'
      },
      paragraphs: [
        'Jednym z najbardziej rozpowszechnionych i szkodliwych mitów na temat ludzkiego działania jest przekonanie, że prokrastynacja wynika ze złej organizacji czasu, braku odpowiednich aplikacji do zarządzania kalendarzem czy lenistwa. Wieloletnie badania empiryczne prof. Timothy’ego Pychyla z Centre for Procrastination Research na Carleton University oraz prof. Fuschii Sirois definitywnie obaliły tę tezę: prokrastynacja jest zaburzeniem regulacji emocjonalnej, a nie deficytem wiedzy o planowaniu.',
        'Kiedy siadasz do pisania pracy dyplomowej, wypełniania deklaracji podatkowej, przygotowania trudnego raportu lub trudnej rozmowy, Twoja kora przedczołowa zderza się z zadaniem niosącym potencjalne zagrożenie: nudę, niepewność kompetencyjną, lęk przed porażką (lub lęk przed sukcesem i odpowiedzialnością). Ciało migdałowate interpretuje to zadanie jak drapieżnika — jako zagrożenie afektywne.',
        'W tym ułamku sekundy organizm odpala odruch „natychmiastowej naprawy nastroju” (Short-Term Mood Repair). Zamiast znosić nieprzyjemne somatyczne napięcie, mózg odwraca uwagę i wybiera zachowanie zastępcze o zerowym oporze: wytarcie kurzu z biurka, sprawdzenie maila, przejrzenie wiadomości ze świata. Przynosi to natychmiastowy wyrzut dopaminy i ulgę od lęku — płacimy za to jednak potężnym rachunkiem odroczonym: wstydem, poczuciem winy, nocną paniką i drastycznym spadkiem jakości wykonanej pracy.'
      ],
      subsections: [
        {
          id: 'sub-25-6-1',
          title: 'Analiza słów Pychyla i Sirois: Wojna Pomiędzy Ja-Bieżącym a Ja-Przyszłym',
          content: [
            'Wypowiedź badaczy obnaża neurobiologiczną schizofrenię czasową naszego mózgu. W badaniach fMRI Hala Hershfielda wykazano, że kiedy badani myślą o sobie za 10 lat, wzorzec aktywności ich kory przedczołowej jest niemal identyczny z tym, gdy myślą o obcej osobie na ulicy! Dla układu limbicznego „Przyszły Ja”, który będzie musiał zarwać noc i wstydzić się przed szefem, to obcy człowiek.',
            'Prokrastynacja to bezduszne przerzucenie emocjonalnego i fizycznego ciężaru na obcego człowieka (na nas samych za kilka godzin lub dni) w zamian za 20 minut spokoju dla Ja-Bieżącego. Uzdrowienie tego mechanizmu wymaga emocjonalnej empatii wobec własnego przyszłego ja.'
          ]
        },
        {
          id: 'sub-25-6-2',
          title: 'Protokół Wytrzymania Dyskomfortu: Zasada 5 Minut i Tolerancja Afektu',
          content: [
            'Najwyższy poziom oporu somatycznego pojawia się ZANIM zaczniesz działać. W momencie, gdy patrzysz na pusty dokument, ciało migdałowate krzyczy najgłośniej. Badania wykazują, że już po 3–5 minutach fizycznego zaangażowania w czynność, pobudzenie lękowe gwałtownie opada, a do głosu dochodzi efekt Zeigarnik (potrzeba domknięcia rozpoczętego zadania).',
            'Złota instrukcja Pychyla brzmi: „Obniż próg wejścia do absurdu. Nie mów: «napiszę rozdział». Powiedz: «otworzę plik i napiszę jedno koślawe zdanie przez 3 minuty». Po 3 minutach masz pełne prawo przestać”. W 85% przypadków po napisaniu pierwszego zdania mózg przechodzi w tryb kontynuacji.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-25-6-1',
          type: 'wniosek',
          title: 'Samowspółczucie Zamiast Samobiczowania (Sirois et al.)',
          content: 'Badania Fuschii Sirois dowodzą, że osoby, które po epizodzie prokrastynacji wybaczają sobie i okazują życzliwość („To normalne, byłem zmęczony, wyciągam wnioski”), w kolejnym tygodniu prokrastynują znacznie MNIEJ. Z kolei osoby, które biczują się poczuciem winy, generują kolejną falę negatywnych emocji, co zmusza ich mózg do ponownej ucieczki w prokrastynację!'
        }
      ],
      interactiveWindow: {
        id: 'win-25-6',
        title: 'Anatomia Prokrastynacji: Przerwanie Odruchu Naprawy Nastroju',
        type: 'gdzie_zaczela_sie_petla',
        context: 'Dorota (31 lat) ma przygotować prezentację dla zarządu spółki. O 10:00 siada przy komputerze, czuje ścisk w żołądku na myśl o krytyce, odruchowo otwiera sklep internetowy i kupuje buty. O 14:00 płacze ze wstydu i bezsilności.',
        steps: [
          {
            stepNumber: 1,
            title: 'Punkt zwrotny pętli: Reakcja na sygnał z ciała migdałowatego',
            description: 'W którym momencie łańcucha behawioralnego rozpoczęła się rzeczywista eskalacja problemu?',
            options: [
              {
                text: 'W ułamku sekundy, gdy Dorota poczuła lęk i uciekła w przeglądanie sklepu, zamiast wytrzymać dyskomfort przez 3 minuty',
                feedback: 'Trafna diagnoza. Zakup butów był behawioralną naprawą nastroju w odpowiedzi na mikro-panikę przed oceną.',
                isOptimal: true
              },
              {
                text: 'O godzinie 14:00, kiedy zorientowała się, ile czasu zmarnowała',
                feedback: 'O 14:00 nastąpiła już tylko wtórna kaskada wstydu — źródłowy punkt zwrotny nastąpił o 10:00.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Wdrożenie protokołu mikrokroku z akceptacją dyskomfortu',
            description: 'Jaka interwencja przełamie pętlę Doroty?',
            options: [
              {
                text: 'Zastosowanie reguły 5 minut: „Zrobię tylko pierwszy slajd tytułowy i wpiszę swoje nazwisko, godząc się na to, że czuję lekki niepokój”',
                feedback: 'Wzorcowe zastosowanie metody Pychyla. Obniżenie kosztu wejścia rozbraja alarm afektywny.',
                isOptimal: true
              },
              {
                text: 'Złożenie przysięgi: „Dzisiaj nie wstanę od biurka przez 6 godzin, aż skończę całość”',
                feedback: 'Błąd. Zbyt wielkie wymaganie podbije lęk do poziomu paniki, gwarantując kolejny powrót do zakupów.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Przed jakim jednym zadaniem uciekasz w zachowania zastępcze i jak brzmi jego 3-minutowa, bezbronna wersja startowa?'
      }
    },
    {
      id: 'sec-25-7',
      pageNumber: 644,
      sectionNumber: '25.7',
      title: 'Luka Intencja-Działanie (Intention-Behavior Gap): Dlaczego robimy to, czego nie chcemy',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Zjawisko znane w filozofii starożytnej jako Akrasia (działanie wbrew lepszemu rozeznaniu), a we współczesnej psychologii jako Luka Intencja-Działanie (Intention-Behavior Gap), stanowi jedną z największych zagadek ludzkiej natury. Dlaczego ludzie, którzy szczerze chcą zdrowo się odżywiać, regularnie ćwiczyć, oszczędzać pieniądze i zachowywać spokój w relacjach, tak często postępują dokładnie odwrotnie?',
        'Metaanalizy badań behawioralnych pokazują, że posiadanie silnej, pozytywnej intencji w korze przedczołowej tłumaczy zaledwie 20–30% wariancji w rzeczywistym, obserwowalnym zachowaniu. Oznacza to, że w 70–80% przypadków o naszym ruchu decydują czynniki pozaświadome: bieżący stan zmęczenia fizjologicznego, dostępność wyzwalaczy w środowisku oraz siła wyuczonych automatyzmów podkorowych.',
        'Mostem pozwalającym przekroczyć tę lukę nie jest „bardziej intensywne chcenie”, lecz inżynieria behawioralna: planowanie implementacyjne (reguły Jeśli-To), modyfikacja środowiska fizycznego oraz redukcja oporu wejściowego dla pożądanych zachowań.'
      ]
    },
    {
      id: 'sec-25-8',
      pageNumber: 648,
      sectionNumber: '25.8',
      title: 'Dwie waluty czasu: Krótkoterminowa ulga vs długoterminowa katastrofa',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Niemal każde zachowanie człowieka jest rozliczane w dwóch zupełnie różnych walutach czasowych: w walucie TERAZ (natychmiastowy bilans sensoryczno-afektywny) oraz w walucie PÓŹNIEJ (skumulowane konsekwencje życiowe).',
        'Główna asymetria ludzkiego zachowania polega na tym, że zachowania autodestrukcyjne (objadanie się, wybuch agresji, ucieczka w nałóg, bierność) oferują natychmiastową wypłatę w walucie TERAZ (przyjemność dopaminowa, ulga od napięcia, brak wysiłku), odraczając potężny koszt w walucie PÓŹNIEJ (choroby kardiometaboliczne, rozpad relacji, utrata kariery, utrata szacunku do siebie).',
        'Z kolei zachowania prozdrowotne i rozwojowe (trening siłowy, trudna rozmowa asertywna, nauka trudnych umiejętności, oszczędzanie) wymagają natychmiastowego uiszczenia kosztu w walucie TERAZ (wysiłek fizyczny, dyskomfort somatyczny, powstrzymanie pokusy), oferując wielką nagrodę dopiero w odległej walucie PÓŹNIEJ.',
        'Ewolucyjnie nasz mózg preferuje walutę TERAZ. Budowanie dojrzałej sprawczości polega na świadomym równoważeniu tego bilansu poprzez nagradzanie małych kroków tu i teraz oraz wizualizację kosztu odroczonego.'
      ]
    },
    {
      id: 'sec-25-9',
      pageNumber: 652,
      sectionNumber: '25.9',
      title: 'Zachowania społeczne i konformizm: Jak grupa modyfikuje nasz ruch',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Człowiek w samotności zachowuje się zupełnie inaczej niż ten sam człowiek w obecności innych ludzi. Obecność grupy aktywuje specyficzne obwody neuronalne związane z empatią, oceną hierarchii oraz lękiem przed wykluczeniem społecznym.',
        'W klasycznych eksperymentach Solomona Ascha, Stanleya Milgrama czy Bibba Latané udowodniono, że presja grupy potrafi skłonić racjonalną jednostkę do zaprzeczenia własnym zmysłom, podporządkowania się destrukcyjnym rozkazom autorytetu czy biernego przyglądania się tragedii drugiego człowieka (Efekt Widza / Rozproszenie Odpowiedzialności).',
        'W środowisku zawodowym i relacyjnym presja społeczna często manifestuje się w postaci tzw. złośliwej uległości, biernej agresji lub lękowego potakiwania na zebraniach, gdzie nikt nie ma odwagi nazwać błędów zarządu.',
        'Poniższe studium przypadku ukazuje dynamikę zachowania menedżerki podczas burzliwego zebrania zespołowego i analizuje jej reakcję na presję otoczenia.'
      ],
      caseStudyRef: caseStudiesChapterTwentyFive[1]
    },
    {
      id: 'sec-25-10',
      pageNumber: 656,
      sectionNumber: '25.10',
      title: 'Reakcja na krytykę, porażkę i sukces: Defensywność vs uczenie się',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'To, jak człowiek zachowuje się w pierwszych 5 sekundach po usłyszeniu krytyki, doświadczeniu porażki lub osiągnięciu spektakularnego sukcesu, jest najbardziej precyzyjnym testem jego dojrzałości psychologicznej i elastyczności układu nerwowego.',
        'Niedojrzałe ego reaguje na krytykę w sposób obronno-plemienny. Uruchamia mechanizm DARVO (Deny, Attack, and Reverse Victim and Offender — Zaprzecz, Zaatakuj, Odwróć role Ofiary i Sprawcy), ucieka w agresywną defensywę, oburzone milczenie lub teatralne samobiczowanie („Tak, wiem, jestem najgorszy, wszystko moja wina!”), które ma na celu wymuszenie na rozmówcy pocieszenia.',
        'Dojrzała reakcja behawioralna opiera się na pauzie poznawczej i dekonstrukcji informacji: oddzieleniu emocjonalnego tonu rozmówcy od merytorycznej zawartości komunikatu. Zdolność do przyjęcia trudnej informacji zwrotnej bez rozpadu poczucia własnej wartości jest cechą ludzi o tzw. nastawieniu na rozwój (Growth Mindset, Carol Dweck).'
      ]
    },
    {
      id: 'sec-25-11',
      pageNumber: 660,
      sectionNumber: '25.11',
      title: 'Powtarzające się schematy życiowe: Dlaczego wciąż lądujemy w tych samych miejscach',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Wczesnodziecięce nieadaptacyjne schematy działają jak niewidzialne grawitacyjne magnesy. Człowiek ma biologiczny, podświadomy przymus odtwarzania w dorosłym życiu dokładnie tych samych warunków emocjonalnych, które raniły go w dzieciństwie. Znajome cierpienie jest bowiem dla układu nerwowego bezpieczniejsze niż nieznana, obca wolność.',
        author: 'Dr Jeffrey E. Young',
        source: 'Columbia University, „Schema Therapy: A Practitioner\'s Guide”, Guilford Press, 2003'
      },
      paragraphs: [
        'Jednym z najbardziej wstrząsających fenomenów ludzkiego losu jest przymus powtarzania (Wiederholungszwang Freuda, w nowoczesnej psychoterapii zdefiniowany przez Jeffreya Younga jako Pułapki Schematów). Wielu inteligentnych, wykształconych ludzi z przerażeniem konstatuje, że pomimo zmian miast, partnerów i miejsc pracy, ich relacje i kariery kończą się w dokładnie ten sam bolesny sposób.',
        'W Terapii Schematów wyróżniamy 18 Wczesnych Nieadaptacyjnych Schematów (Early Maladaptive Schemas) powstałych w wyniku niezaspokojenia fundamentalnych potrzeb emocjonalnych w dzieciństwie (np. Deprywacja Emocjonalna, Porzucenie, Wadliwość, Podporządkowanie, Roszczeniowość).',
        'Kiedy schemat zostaje uaktywniony w dorosłym życiu przez z pozoru neutralne zdarzenie (np. partner spóźnia się 15 minut), człowiek nie widzi partnera tu i teraz — widzi rodzica z przeszłości. Natychmiast odpala się jeden z trzech dziecięcych stylów radzenia sobie (Coping Styles): 1) Poddanie się schematowi (Surrender — bierność i cierpienie), 2) Unikanie schematu (Avoidance — ucieczka w samotność lub nałogi), 3) Nadkompensacja (Overcompensation — agresja, arogancja, chęć dominacji).'
      ],
      subsections: [
        {
          id: 'sub-25-11-1',
          title: 'Analiza słów dr. Jeffreya Younga: Neurobiologia Magnetyzmu Schematów',
          content: [
            'Wypowiedź dr. Younga tłumaczy, dlaczego ludzie wybierają partnerów, którzy ich ranią. Dla ludzkiego mózgu „bezpieczeństwo” nie oznacza braku bólu — oznacza PRZEWIDYWALNOŚĆ.',
            'Jeśli jako dziecko nauczyłeś się, że na miłość trzeba zasłużyć ciągłym zadowalaniem innych i podporządkowaniem, to dorosły partner kochający bezwarunkowo, spokojny i stabilny, wyda Ci się „nudny” i „pozbawiony chemii”. Twój układ nerwowy szuka partnera chłodnego, krytycznego i niestabilnego, bo tylko przy nim odpala się znany z dzieciństwa program neurohormonalny. Wybieramy to, co znamy, a nie to, co nam służy.'
          ]
        },
        {
          id: 'sub-25-11-2',
          title: 'Tryby Schematów (Schema Modes): Kto w Tobie Przejmuje Kierownicę?',
          content: [
            'W terapii Younga kluczem do przerwania przymusu powtarzania jest zidentyfikowanie tzw. Trybu, który w danej minucie przejął kontrolę nad ciałem:',
            '• Tryb Wrażliwego Dziecka: Poczucie opuszczenia, bezradności, wstydu i paniki.',
            '• Tryb Wściekłego Dziecka: Atak furii w reakcji na poczucie niesprawiedliwości.',
            '• Tryb Karzącego Rodzica: Wewnętrzny głos nienawiści do samego siebie („Jesteś nic niewart, nikt cię nie pokocha”).',
            '• Tryb Zdrowego Dorosłego: Część psychiki, która potrafi otoczyć troską Wrażliwe Dziecko, uciszyć Karzącego Rodzica i podjąć racjonalne, odważne działanie w świecie realnym.'
          ]
        }
      ],
      highlightBoxes: [
        {
          id: 'hb-25-11-1',
          type: 'badanie',
          title: 'Skuteczność Terapii Schematów w Zaburzeniach Osobowości (Giesen-Bloo et al., 2006)',
          content: 'W wieloośrodkowym badaniu klinicznym wykazano, że terapia schematów doprowadziła do pełnego wyleczenia lub znaczącej redukcji objawów u ponad 52% pacjentów z głębokim zaburzeniem osobowości typu borderline (BPD), przewyższając klasyczną psychoterapię psychodynamiczną. Zmiana zachowania wymagała pracy z ciałami migdałowatymi i ponownego rodzicielstwa (reparenting) w wyobraźni.'
        }
      ],
      interactiveWindow: {
        id: 'win-25-11',
        title: 'Audyt Pułapki Schematu: Kto w Tobie Reaguje?',
        type: 'czlowiek_pod_mikroskopem',
        context: 'Ewa (35 lat) po raz trzeci w życiu wchodzi w związek z mężczyzną, który po kilku miesiącach staje się chłodny, kontrolujący i odmawia zaangażowania. Ewa czuje rozdzierający lęk i zamiast postawić granice, zaczyna kompulsywnie gotować, sprzątać i przepraszać za rzeczy, których nie zrobiła.',
        steps: [
          {
            stepNumber: 1,
            title: 'Identyfikacja uaktywnionego schematu i stylu radzenia sobie',
            description: 'Jaki schemat i tryb przejął zachowanie Ewy?',
            options: [
              {
                text: 'Schemat Wadliwości / Podporządkowania w trybie Poddania się (Surrender): uległość i zasługiwanie na akceptację',
                feedback: 'Precyzyjna diagnoza zgodna z modelem Jeffreya Younga. Ewa odtwarza dynamikę ze swoim krytycznym, chłodnym ojcem.',
                isOptimal: true
              },
              {
                text: 'Tryb Zdrowego Dorosłego stawiający asertywne granice',
                feedback: 'Nie. Zdrowy Dorosły zakomunikowałby swoje potrzeby i zakończył relację w obliczu braku szacunku.',
                isOptimal: false
              }
            ]
          },
          {
            stepNumber: 2,
            title: 'Krok wyzwalający Zdrowego Dorosłego',
            description: 'Jakie zachowanie w świecie fizycznym przełamie wieloletni schemat Ewy?',
            options: [
              {
                text: 'Zatrzymanie uległych gestów, spokojna i stanowcza rozmowa o potrzebach oraz gotowość do odejścia, jeśli partner nie podejmie terapii',
                feedback: 'Wzorcowe zachowanie Zdrowego Dorosłego. Przerwanie uległości niszczy schemat i przywraca podmiotowość.',
                isOptimal: true
              },
              {
                text: 'Jeszcze większe starania i kupienie partnerowi drogiego prezentu, aby poprawić mu humor',
                feedback: 'To tylko pogłębi pułapkę podporządkowania i utrwali poczucie krzywdy.',
                isOptimal: false
              }
            ]
          }
        ],
        reflectionPrompt: 'Jaki bolesny schemat z przeszłości odtwarzasz w swoich relacjach i jak zachowałby się w tej sytuacji Twój wewnętrzny Zdrowy Dorosły?'
      }
    },
    {
      id: 'sec-25-12',
      pageNumber: 664,
      sectionNumber: '25.12',
      title: 'Analiza i Audyt Własnego Zachowania: Jak badać siebie jak naukowiec',
      category: 'cwiczenia',
      readingTimeMinutes: 17,
      paragraphs: [
        'Najczęstszą przeszkodą w zmianie zachowania jest moralizowanie i samokrytyka. Kiedy po niepożądanym czynie mówisz sobie: „Jestem beznadziejny, nie mam silnej woli, nigdy mi się nie uda”, wywołujesz wstyd, który aktywuje układ stresowy i prowadzi do kolejnego aktu ucieczki w nawyk.',
        'Dojrzały audyt behawioralny wymaga przyjęcia postawy życzliwego badacza i rozłożenia zdarzenia na obiektywny łańcuch przyczynowo-skutkowy: bodziec wyzwalający -> interpretacja poznawcza -> stan emocjonalno-somatyczny -> wykonane zachowanie fizyczne -> konsekwencja krótkoterminowa -> konsekwencja długoterminowa.',
        'Poniższy warsztat uczy prowadzenia precyzyjnej dekompozycji łańcucha behawioralnego krok po kroku bez samobiczowania.'
      ],
      exerciseRef: selfExercisesChapterTwentyFive[0]
    },
    {
      id: 'sec-25-13',
      pageNumber: 668,
      sectionNumber: '25.13',
      title: 'Obserwacja mikrokroków: Dziennik faktów vs narracje ego',
      category: 'cwiczenia',
      readingTimeMinutes: 16,
      paragraphs: [
        'Nasze ego ma tendencję do tworzenia ubarwionych narracji: wyolbrzymia nasze sukcesy, kiedy chcemy czuć się lepsi od innych, lub wyolbrzymia nasze porażki, kiedy wpadamy w rolę bezradnej ofiary. Żadna z tych narracji nie pomaga w budowaniu trwałej sprawczości.',
        'Prawdziwy obraz naszego funkcjonowania wyłania się z obserwacji mikrokroków — twardych, policzalnych faktów zarejestrowanych w świecie fizycznym: ile minut spacerowałem? ile stron przeczytałem? o której godzinie poszedłem spać? jak zareagowałem na odmowę?',
        'Poniższy warsztat prowadzi przez procedurę prowadzenia Dziennika Faktów Behawioralnych, który uczy widzieć siebie w prawdzie pozbawionej iluzji.'
      ],
      exerciseRef: selfExercisesChapterTwentyFive[1]
    },
    {
      id: 'sec-25-14',
      pageNumber: 672,
      sectionNumber: '25.14',
      title: 'Możliwość zmiany zachowania: Przygotowanie podłoża pod rewolucję',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Fundamentalnym odkryciem współczesnej neuronauki jest neuroplastyczność mózgu dorosłego człowieka. Oznacza to, że żadna ścieżka synaptyczna, żaden nawyk i żaden schemat reakcji nie są w Twoim układzie nerwowym „wykute w skale” raz na zawsze.',
        'Zmiana zachowania nie polega jednak na magicznym wymazaniu dawnych ścieżek neuronowych — stare koryta rzeczne pozostają w mózgu w stanie uśpionym. Prawdziwa zmiana polega na powtarzalnym wydeptywaniu NOWEJ ścieżki alternatywnej, która z czasem staje się dla impulsów nerwowych szlakiem szybszym i bardziej energooszczędnym niż stary nawyk.',
        'W ten sposób przygotowujemy fundament pod kolejny rozdział: przejście od biernego rozumienia problemu do aktywnego projektowania własnego środowiska, nawyków i nowej tożsamości.'
      ]
    },
    {
      id: 'sec-25-15',
      pageNumber: 676,
      sectionNumber: '25.15',
      title: 'Błędne intuicje na temat ludzkiego zachowania',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Przeanalizujmy 5 popularnych błędnych mity na temat zachowania:',
        'BŁĘDNE PRZEKONANIE 1: „Ludzkie zachowanie jest prostą konsekwencją posiadanych poglądów i wartości.” -> Prawda: Luka intencja-działanie sprawia, że ludzie często postępują wprost sprzecznie ze swoimi deklarowanymi wartościami.',
        'BŁĘDNE PRZEKONANIE 2: „Jeśli ktoś zachowuje się źle, oznacza to, że jest po prostu złym człowiekiem.” -> Prawda: Zachowanie jest wynikiem skomplikowanej interakcji sytuacji, interpretacji i nawyku (Błąd Atrybucji).',
        'BŁĘDNE PRZEKONANIE 3: „Kara jest najskuteczniejszym sposobem na trwałą zmianę czyjegoś zachowania.” -> Prawda: Kara tłumi zachowanie tylko w obecności karzącego i wywołuje ucieczkę; trwałą zmianę budują wzmocnienia pozytywne.',
        'BŁĘDNE PRZEKONANIE 4: „Prokrastynacja to lenistwo i zła organizacja czasu.” -> Prawda: Prokrastynacja jest emocjonalną ucieczką przed nieprzyjemnym stanem afektywnym towarzyszącym zadaniu.',
        'BŁĘDNE PRZEKONANIE 5: „Złych nawyków można pozbyć się czystą silną wolą.” -> Prawda: Silna wola wyczerpuje się szybko; zmiana nawyku wymaga modyfikacji wyzwalacza lub środowiska.'
      ]
    },
    {
      id: 'sec-25-16',
      pageNumber: 680,
      sectionNumber: '25.16',
      title: 'Co nadal nie jest jasne? Ograniczenia wiedzy o zachowaniu',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Nadal istnieją granice naszej wiedzy w zakresie psychologii behawioralnej:',
        '1. Dlaczego te same wzmocnienia środowiskowe wywołują drastycznie odmienne nawyki u dwóch osób o tym samym wychowaniu?',
        '2. Jaki jest dokładny próg powtórzeń wymagany do przeniesienia kontroli nad zachowaniem z kory przedczołowej do jąder podstawy (mit 21 dni vs rzeczywistość 18-254 dni)?',
        '3. Jak interakcje epigenetyczne i wczesnodziecięce traumy modyfikują podatność na zachowania kompulsywne w dorosłości?'
      ]
    },
    {
      id: 'sec-25-17',
      pageNumber: 684,
      sectionNumber: '25.17',
      title: 'Jak zastosować to jutro? Praktyczny protokół obserwacji zachowania',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Oto 5 kroków audytu behawioralnego do wdrożenia jutro:',
        '1. Wybierz jedno konkretne zachowanie, które chcesz zmienić, i opisz je w kategoriach czysto fizycznych.',
        '2. Zidentyfikuj wyzwalacz (miejsce, pora, obecne osoby, emocja), który bezpośrednio poprzedza to zachowanie.',
        '3. Zbadaj, jaką krótkoterminową ulgę lub nagrodę przynosi Ci to zachowanie.',
        '4. Przestań karać się moralnie za potknięcia — traktuj swoje zachowanie jak obiektywny eksperyment naukowy.',
        '5. Zaplanuj jeden mikrokrok, który wstawi pauzę 3 sekund pomiędzy wyzwalacz a Twoją reakcję.'
      ]
    },
    {
      id: 'sec-25-18',
      pageNumber: 688,
      sectionNumber: '25.18',
      title: 'Egzamin z Rozdziału 9: Test znajomości mechanizmów zachowania',
      category: 'podsumowanie',
      readingTimeMinutes: 20,
      paragraphs: [
        'Oto kompleksowy test sprawdzający Twoją wiedzę z zakresu łańcucha behawioralnego, praw uczenia się, prokrastynacji i audytu własnych reakcji.'
      ]
    },
    {
      id: 'sec-25-19',
      pageNumber: 692,
      sectionNumber: '25.19',
      title: 'Most do Rozdziału 10: Od zrozumienia zachowania do świadomego projektowania zmiany',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Zrozumieliśmy, jak powstaje decyzja (Rozdział 8) i jak decyzja wraz z emocją przechodzi w realne zachowanie (Rozdział 9). Wiener wiemy, dlaczego powtarzamy te same błędy i skąd bierze się opór.',
        'Jesteśmy gotowi na kulminacyjny krok naszej podróży. W Rozdziale 10 przejdziemy od diagnozy do działania: zobaczyliśmy JAK można świadomie, trwale i bezpiecznie zmieniać własne zachowanie, projektować środowisko, przełamywać nawroty i budować własny system samokształtowania.'
      ]
    }
  ]
};
