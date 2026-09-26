import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterTwentyExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii motywacji wartość (value) różni się od celu (goal) tym, że:',
    topic: 'Wartości vs Cyle',
    sectionRef: 'Sekcja 20.1',
    options: [
      { label: 'A', text: 'Wartość to kierunek i kompas jakościowy żywy w każdym momencie, zaś cel to konkretny, osiągalny punkt końcowy, który można odhaczyć na liście.', isCorrect: true },
      { label: 'B', text: 'Wartość dotyczy tylko pieniędzy, a cel dotyczy sportu.', isCorrect: false },
      { label: 'C', text: 'Cel znika po 5 minutach, a wartość trwa dokładnie rok.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy merytorycznej.', isCorrect: false }
    ],
    explanation: 'Bycie wspierającym rodzicem to wartość (kierunek na całe życie). Kupienie dziecku roweru to cel (punkto końcowy do odhaczenia).',
    keyTakeaway: 'Wartości to kierunki na kompasie, cele to przystanki na drodze.'
  },
  {
    id: 2,
    question: 'Według Teorii Samodeterminacji (SDT - Deci & Ryan) trzy podstawowe, uniwersalne potrzeby psychologiczne człowieka to:',
    topic: 'Teoria Samodeterminacji SDT',
    sectionRef: 'Sekcja 20.2',
    options: [
      { label: 'A', text: 'Autonomia (Autonomy), Kompetencja (Competence) oraz Powiązanie/Bliskość (Relatedness).', isCorrect: true },
      { label: 'B', text: 'Sława, Pieniądze i Władza.', isCorrect: false },
      { label: 'C', text: 'Jedzenie, Sen i Dobra Pogoda.', isCorrect: false },
      { label: 'D', text: 'Lajki, Prestiż i Samochód.', isCorrect: false }
    ],
    explanation: 'Zaspokojenie tych trzech potrzeb stanowi warunek konieczny dla dobrostanu, motywacji wewnętrznej i rozwoju autonomii.',
    keyTakeaway: 'Niezaspokojenie autonomii, kompetencji lub bliskości wywołuje obniżenie dobrostanu.'
  },
  {
    id: 3,
    question: 'Czym różnią się wartości deklarowane od wartości realizowanych w działaniu?',
    topic: 'Wartości Deklarowane vs Realizowane',
    sectionRef: 'Sekcja 20.4',
    options: [
      { label: 'A', text: 'Deklarowane to słowa wypowiadane w wywiadach, zaś realizowane to faktyczne decyzje alokacji czasu, energii i pieniędzy w codzienności.', isCorrect: true },
      { label: 'B', text: 'Wartości realizowane są zapisane w konstytucji.', isCorrect: false },
      { label: 'C', text: 'Wartości deklarowane kosztują najwięcej pieniędzy.', isCorrect: false },
      { label: 'D', text: 'Oba pojęcia oznaczają to samo.', isCorrect: false }
    ],
    explanation: 'Jeśli ktoś twierdzi, że jego wartością jest „Zdrowie”, a spędza 14 godzin na siedząco i je fast foody, zdrowie jest wartością deklarowaną, a nie realizowaną.',
    keyTakeaway: 'Twój kalendarz i wyciąg z konta mówią o Twoich wartościach prawdę, której nie zagłuszą słowa.'
  },
  {
    id: 4,
    question: 'Co według psychologii decyzyjnej wywołuje konflikt wartości (Value Conflict)?',
    topic: 'Konflikt Wartości',
    sectionRef: 'Sekcja 20.5',
    options: [
      { label: 'A', text: 'Sytuacja, w której opowiedzenie się za jedną wartością (np. Wolność) wymusza naruszenie innej ważnej wartości (np. Bezpieczeństwo).', isCorrect: true },
      { label: 'B', text: 'Brak możliwości kupienia biletu na koncert.', isCorrect: false },
      { label: 'C', text: 'Sprzeczka o to, który film obejrzeć w kinie.', isCorrect: false },
      { label: 'D', text: 'Zgubienie portfela w sklepie.', isCorrect: false }
    ],
    explanation: 'Konflikty wartości są nieodłączną częścią dojrzałego życia i wymagają świadomego ustalenia priorytetów w konkretnym kontekście.',
    keyTakeaway: 'Hierarchia wartości jest zwrotnicą pozwalającą podejmować trudne decyzje.'
  },
  {
    id: 5,
    question: 'Jak opóźniona gratyfikacja (Delayed Gratification) odnosi się do priorytetów krótko- i długoterminowych?',
    topic: 'Gratyfikacja',
    sectionRef: 'Sekcja 20.6',
    options: [
      { label: 'A', text: 'Zdolność do rezygnacji z natychmiastowej, małej nagrody impulsywnej na rzecz realizacji ważniejszej wartości długoterminowej.', isCorrect: true },
      { label: 'B', text: 'Kupowanie produktów wyłącznie na wyprzedażach.', isCorrect: false },
      { label: 'C', text: 'Odkładanie jedzenia na 5 dni.', isCorrect: false },
      { label: 'D', text: 'Zapominanie o urodzinach bliskich.', isCorrect: false }
    ],
    explanation: 'Konflikt między układy limbicznym (natychmiastowa ulga) a korą przedczołową (długoterminowa wartość) decyduje o sukcesie samokontroli.',
    keyTakeaway: 'Wybieraj to, czego chcesz najbardziej, zamiast tego, czego chcesz w tej jednej minucie.'
  },
  {
    id: 6,
    question: 'Na czym polega pętla konfliktu „Chcę” vs „Powinienem” (Want vs Ought)?',
    topic: 'Chcę vs Powinienem',
    sectionRef: 'Sekcja 20.10',
    options: [
      { label: 'A', text: 'Napięcie między natychmiastowym pragnieniem impulsywnym a narzuconym lub przyjętym wymogiem moralno-społecznym.', isCorrect: true },
      { label: 'B', text: 'Niezdolność do wyboru koloru samochodu.', isCorrect: false },
      { label: 'C', text: 'Radość z wykonywania trudnych zadań.', isCorrect: false },
      { label: 'D', text: 'Brak jakichkolwiek potrzeb biologicznych.', isCorrect: false }
    ],
    explanation: 'Gdy „powinienem” opiera się wyłącznie na presji zewnętrznej bez autonomicznej akceptacji, wywołuje szybki opór i prokrastynację.',
    keyTakeaway: 'Przekształć zewnętrzne „powinienem” we własne, autonomiczne „wybieram”.'
  },
  {
    id: 7,
    question: 'Jak presja społeczna i oczekiwania grupy wpływają na nasze wartości?',
    topic: 'Presja Społeczna a Wartości',
    sectionRef: 'Sekcja 20.7',
    options: [
      { label: 'A', text: 'Mogą prowadzić do przyjęcia narzuconych wartości zewnętrznych (introjekcja) w obronie przed wykluczeniem z grupy.', isCorrect: true },
      { label: 'B', text: 'Zawsze wspierają naszą indywidualną autonomię.', isCorrect: false },
      { label: 'C', text: 'Nie mają żadnego wpływu na nasze decyzje życiowe.', isCorrect: false },
      { label: 'D', text: 'Wyłączają zapotrzebowanie na bliskość.', isCorrect: false }
    ],
    explanation: 'Strach przed odrzuceniem skłania jednostkę do realizowania celów, które nie są spójne z jej wewnętrznym kompasem.',
    keyTakeaway: 'Odnajdź odwagę do życia w zgodzie z własnym kompasem, a nie ze skryptem grupy.'
  },
  {
    id: 8,
    question: 'Jak ewolucja wartości przebiega na różnych etapach życia człowieka?',
    topic: 'Ewolucja Wartości',
    sectionRef: 'Sekcja 20.9',
    options: [
      { label: 'A', text: 'Hierarchia wartości przesuwa się w reakcji na przełomowe wydarzenia rozwojowe (np. młodość = eksploracja, dojrzałość = stabilizacja i troska).', isCorrect: true },
      { label: 'B', text: 'Wartości są zamrożone i nie zmieniają się od urodzenia do śmierci.', isCorrect: false },
      { label: 'C', text: 'Wartości zmieniają się dokładnie co 30 dni.', isCorrect: false },
      { label: 'D', text: 'Zależą wyłącznie od znaku zodiaku.', isCorrect: false }
    ],
    explanation: 'Zmiana hierarchii wartości wraz z wiekiem jest naturalnym objawem dojrzałości psychologicznej.',
    keyTakeaway: 'Pozwól swoim priorytetom ewoluować wraz ze zmianą Twojego etapu życiowego.'
  },
  {
    id: 9,
    question: 'Czym różni się wartość od zwykłej preferencji?',
    topic: 'Wartość vs Preferencja',
    sectionRef: 'Sekcja 20.3',
    options: [
      { label: 'A', text: 'Wartość jest głęboką zasadą organizującą tożsamość i wybory moralne, a preferencja to zmienny gust dotyczący wygody lub estetyki.', isCorrect: true },
      { label: 'B', text: 'Preferencja trwa 50 lat, a wartość 5 minut.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy.', isCorrect: false },
      { label: 'D', text: 'Wartość dotyczy tylko jedzenia.', isCorrect: false }
    ],
    explanation: 'Wybór kawy zamiast herbaty to preferencja. Wybór uczciwości w biznesie kosztem łatwego zysku to wartość.',
    keyTakeaway: 'Nie myl błahych preferencji z nienaruszalnymi wartościami.'
  },
  {
    id: 10,
    question: 'Jaką rolę w podejmowaniu decyzji pod presją odgrywa jasna hierarchia priorytetów?',
    topic: 'Nawigacja Decyzyjna',
    sectionRef: 'Sekcja 20.8',
    options: [
      { label: 'A', text: 'Działa jak zwrotnica poznawcza, skracając czas analizy i chroniąc przed paraliżem decyzyjnym.', isCorrect: true },
      { label: 'B', text: 'Zwiększa poziom lęku o 100%.', isCorrect: false },
      { label: 'C', text: 'Uniemożliwia podjęcie jakiegokolwiek wyboru.', isCorrect: false },
      { label: 'D', text: 'Gwarantuje brak jakichkolwiek konsekwencji finansowych.', isCorrect: false }
    ],
    explanation: 'Gdy wiesz, co jest dla Ciebie najważniejsze, podejmowanie trudnych decyzji staje się znacznie prostsze.',
    keyTakeaway: 'Gdy Twoje wartości są jasne, decyzje przestają być udręką.'
  },
  {
    id: 11,
    question: 'Na czym polega audyt realizowanych wartości (Values Audit)?',
    topic: 'Audyt Wartości',
    sectionRef: 'Sekcja 20.13',
    options: [
      { label: 'A', text: 'Przegląd realnych wydatków czasowych i finansowych z ostatniego miesiąca w celu sprawdzenia ich spójności z deklaracjami.', isCorrect: true },
      { label: 'B', text: 'Sprawdzanie stanu konta bankowego co 5 minut.', isCorrect: false },
      { label: 'C', text: 'Pisanie listów do znajomych z dzieciństwa.', isCorrect: false },
      { label: 'D', text: 'Mierzenie tętna w trakcie pracy.', isCorrect: false }
    ],
    explanation: 'Audyt ujawnia hipokryzję poznawczą i pozwala bezatastycznie skorygować codzienne nawyki.',
    keyTakeaway: 'Porównaj swoje deklaracje z wpisami w kalendarzu.'
  },
  {
    id: 12,
    question: 'Co charakteryzuje decyzję podjętą w zgodzie z wartościami (Value-Based Decision)?',
    topic: 'Decyzja Oparta na Wartościach',
    sectionRef: 'Sekcja 20.8',
    options: [
      { label: 'A', text: 'Gwarantuje wewnętrzny spokój i spójność, nawet jeśli niesie ze sobą koszty materialne lub dyskomfort w krótkim terminie.', isCorrect: true },
      { label: 'B', text: 'Gwarantuje natychmiastowy i wielki zysk finansowy.', isCorrect: false },
      { label: 'C', text: 'Zawsze spotyka się z zachwytem ze strony wszystkich ludzi.', isCorrect: false },
      { label: 'D', text: 'Nie wymaga żadnego wysiłku.', isCorrect: false }
    ],
    explanation: 'Spójność z wartościami jest źródłem długoterminowej dumy i szacunku do samego siebie.',
    keyTakeaway: 'Dobre decyzje bywają trudne w krótkim terminie, lecz dają spokój w długim.'
  },
  {
    id: 13,
    question: 'Jaką rolę w Teorii Samodeterminacji odgrywa potrzeba Autonomii?',
    topic: 'Potrzeba Autonomii',
    sectionRef: 'Sekcja 20.2',
    options: [
      { label: 'A', text: 'Poczucie, że jesteśmy autorem i gospodarzem własnych wyborów, a nie tylko pionkiem sterowanym zewnętrzną presją.', isCorrect: true },
      { label: 'B', text: 'Mieszkanie na bezludnej wyspie bez kontaktu z ludźmi.', isCorrect: false },
      { label: 'C', text: 'Zarabianie miliona dolarów rocznie.', isCorrect: false },
      { label: 'D', text: 'Brak jakichkolwiek zasad w społeczeństwie.', isCorrect: false }
    ],
    explanation: 'Brak autonomii zamienia działanie w przymus i prowadzi do wypalenia oraz biernego oporu.',
    keyTakeaway: 'Autonomia to poczucie kierowania własnym życiem.'
  },
  {
    id: 14,
    question: 'Co dzieje się, gdy zachodzi długotrwałe naruszenie wartości w pracy zawodowej?',
    topic: 'Kryzys Wartości w Pracy',
    sectionRef: 'Sekcja 20.5',
    options: [
      { label: 'A', text: 'Pojawia się wypalenie wartościowe (Moral Injury), cynizm, wyczerpanie emocjonalne i spadek motywacji.', isCorrect: true },
      { label: 'B', text: 'Automatyczny wzrost efektywności o 50%.', isCorrect: false },
      { label: 'C', text: 'Brak jakiejkolwiek reakcji psychicznej.', isCorrect: false },
      { label: 'D', text: 'Wzrost odporności na stres.', isCorrect: false }
    ],
    explanation: 'Zmuszanie do działań sprzecznych z własnym kompasem moralnym jest silnym czynnikiem chorobotwórczym w organizacji.',
    keyTakeaway: 'Praca wbrew własnym wartościom niszczy od wewnątrz.'
  },
  {
    id: 15,
    question: 'Na czym polega błąd „Ilość zamiast Jakości” w ustalaniu priorytetów?',
    topic: 'Błąd Ilości Priorytetów',
    sectionRef: 'Sekcja 20.6',
    options: [
      { label: 'A', text: 'Próba uznania 15 spraw za „najważniejsze priorytety” naraz, co w praktyce oznacza brak jakiegokolwiek priorytetu i rozproszenie sił.', isCorrect: true },
      { label: 'B', text: 'Kupowanie zbyt dużej ilości książek.', isCorrect: false },
      { label: 'C', text: 'Jedzenie zbyt obfitych posiłków.', isCorrect: false },
      { label: 'D', text: 'Spanie dłużej niż 8 godzin.', isCorrect: false }
    ],
    explanation: 'Słowo „priorytet” historycznie występowało wyłącznie w liczbie pojedynczej. Prawdziwe priorytety są nieliczne.',
    keyTakeaway: 'Gdy wszystko jest priorytetem, nic nim nie jest.'
  },
  {
    id: 16,
    question: 'Jak radzić sobie z konfliktem wartości Wolność vs Bezpieczeństwo?',
    topic: 'Wolność vs Bezpieczeństwo',
    sectionRef: 'Sekcja 20.5',
    options: [
      { label: 'A', text: 'Świadomie określić granicę akceptowalnego ryzyka i zbudować bazę bezpieczeństwa, która zasila przestrzeń wolności.', isCorrect: true },
      { label: 'B', text: 'Całkowicie zrezygnować z wolności.', isCorrect: false },
      { label: 'C', text: 'Całkowicie zrezygnować z bezpieczeństwa.', isCorrect: false },
      { label: 'D', text: 'Udawać, że konflikt nie istnieje.', isCorrect: false }
    ],
    explanation: 'Dojrzałość decyzyjna polega na szukaniu synergii i akceptacji koniecznych kompromisów.',
    keyTakeaway: 'Bezpieczna baza pozwala na śmiałą eksplorację wolności.'
  },
  {
    id: 17,
    question: 'Jaką funkcję w urealnianiu priorytetów pełni Zasada Pareto (80/20)?',
    topic: 'Zasada Pareto',
    sectionRef: 'Sekcja 20.6',
    options: [
      { label: 'A', text: 'Identyfikuje 20% kluczowych działań, które przynoszą 80% najważniejszych wartościowych rezultatów w życiu.', isCorrect: true },
      { label: 'B', text: 'Narzuca spanie przez 20% doby.', isCorrect: false },
      { label: 'C', text: 'Zmusza do wydawania 80% zarobków na rozrywkę.', isCorrect: false },
      { label: 'D', text: 'Nie ma zastosowania w psychologii.', isCorrect: false }
    ],
    explanation: 'Skupienie siły na 20% najważniejszych aktywności chroni przed marnowaniem energii na błahostki.',
    keyTakeaway: 'Znajdź swoje kluczowe 20% i mu poświęć swoją najlepszą uwagę.'
  },
  {
    id: 18,
    question: 'Czym charakteryzuje się dojrzałe wyznaczanie granic (Boundaries) w oparciu o wartości?',
    topic: 'Wyznaczanie Granic',
    sectionRef: 'Sekcja 20.8',
    options: [
      { label: 'A', text: 'Jasne i spokojne komunikowanie otoczeniu, na co się zgadzamy, a na co nie, bez agresji i bez poczucia winy.', isCorrect: true },
      { label: 'B', text: 'Krzyczenie na ludzi przy każdej próbie rozmowy.', isCorrect: false },
      { label: 'C', text: 'Zgadzanie się na wszystko ze strachu przed odrzuceniem.', isCorrect: false },
      { label: 'D', text: 'Zerwanie kontaktów ze wszystkimi znajomymi.', isCorrect: false }
    ],
    explanation: 'Granice służą ochronie naszych kluczowych wartości i zasobów, umożliwiając zdrowe relacje.',
    keyTakeaway: 'Mówienie „nie” innym bywa jedynym sposobem na powiedzenie „tak” własnym wartościom.'
  },
  {
    id: 19,
    question: 'Jak zjawisko prokrastynacji wiąże się z brakiem spójności z wartościami?',
    topic: 'Prokrastynacja a Wartości',
    sectionRef: 'Sekcja 20.10',
    options: [
      { label: 'A', text: 'Odkładanie zadań często wynika z faktu, że celem kieruje zewnętrzna presja („powinienem”), a nie wewnętrzna wartość („chcę”).', isCorrect: true },
      { label: 'B', text: 'Prokrastynacja to po prostu brak zegarka.', isCorrect: false },
      { label: 'C', text: 'Występuje tylko u osób nielubiących kawy.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnego związku z wartościami.', isCorrect: false }
    ],
    explanation: 'Gdy zadanie nie ma dla nas sensu ani wartości, umysł stawia opór i szuka natychmiastowej ulgi.',
    keyTakeaway: 'Odnajdź głębsze „dlaczego” w zadaniu, by odzyskać naturalną motywację.'
  },
  {
    id: 20,
    question: 'Co jest ostatecznym sprawdzianem spójności życiowej (Integrity)?',
    topic: 'Spójność Życiowa',
    sectionRef: 'Sekcja 20.12',
    options: [
      { label: 'A', text: 'Gotowość do postępowania zgodnie z wartościami nawet wtedy, gdy nikt nie patrzy i gdy nie przynosi to natychmiastowych zysków.', isCorrect: true },
      { label: 'B', text: 'Posiadanie tysięcy obserwujących na TikToku.', isCorrect: false },
      { label: 'C', text: 'Brak jakichkolwiek trudnych emocji.', isCorrect: false },
      { label: 'D', text: 'Wygranie dużej kwoty na loterii.', isCorrect: false }
    ],
    explanation: 'Integralność to stan spójności między myśleniem, mówieniem a działaniem w każdych warunkach.',
    keyTakeaway: 'Prawdziwa spójność to robić to, co słuszne, nawet gdy nikt nie patrzy.'
  }
];

export const caseStudiesChapterTwenty: CaseStudy[] = [
  {
    id: 'studium-20-1-awans-vs-rodzina',
    title: 'W kleszczach sukcesu: Konflikt wartości Wolność vs Rodzina u Huberta',
    subtitle: 'Krótki termin vs długi termin, iluzja „jeszcze tylko jednego projektu” i audyt priorytetów',
    protagonist: 'Hubert, 39 lat, dyrektor zarządzający w branży budowlanej',
    context: 'Hubert otrzymał propozycję objęcia rynków zagranicznych, co wiązało się z 50% podwyżką pensji, lecz wymagało przebywania w podróży przez 4 dni w tygodniu. W domu czekała żona z dwoma synami w wieku 6 i 9 lat.',
    story: [
      'Hubert deklarował, że największą wartością w jego życiu jest „Rodzina”. Jednocześnie od 5 lat spędzał w pracy po 12 godzin dziennie, tłumacząc sobie: „Robię to wszystko dla nich, by mieli bezpieczną przyszłość”.',
      'Propozycja awansu wywołała w nim ostry konflikt wartości. Z jednej strony parła potrzeba statusu, prestiżu i uznania („Sukces/Wolność finansowa”), z drugiej zaś obietnica bycia obecnym ojcem.',
      'Gdy Hubert skonsultował decyzję z żoną, ta powiedziała wprost: „Chłopcy nie potrzebują kolejnego drogiego gadżetu. Potrzebują ojca na meczu w sobotę”.',
      'Hubert przeprowadził Rzetelny Audyt Czasowy i uświadomił sobie, że lata dzieciństwa synów nie powtórzą się nigdy. Odrzucił awans zagraniczny, wynegocjowując redefinicję obecnej roli.'
    ],
    dialogue: [
      { speaker: 'Prezes Zarządu', text: 'Hubert, taka szansa trafia się raz w życiu. Będziesz rządził całym regionem!', subtext: 'Kuszenie statusem i prestiżem.' },
      { speaker: 'Hubert (do siebie)', text: 'Jeśli odmówię, uznają mnie za pozbawionego ambicji... Ale jeśli wyjadę, przegapię dorastanie synów.', subtext: 'Ostry konflikt ról i wartości.' }
    ],
    decisionTaken: 'Hubert odrzucił awans zagraniczny i ustalił sztywną granicę powrotów do domu o godzinie 17:30.',
    whatProtagonistSaw: 'Mijający czas dorastania dzieci i puste słowa własnych deklaracji.',
    whatWasMissed: 'Fakt, że nieograniczony rozwój zawodowy kosztem rodziny był formułą na rozpad małżeństwa.',
    psychologicalAnalysis: {
      coreMechanism: 'Konflikt wartości (Status/Osiągnięcia vs Bliskość/Rodzina) i dysonans poznawczy.',
      cognitiveBiases: [
        { name: 'Racjonalizacja wartościująca', description: 'Tłumaczenie pracoholizmu „troską o finansowe bezpieczeństwo rodziny”.', impact: 'Ukrywanie pragnienia statusu.' }
      ],
      defenseMechanisms: [
        { name: 'Odkładanie na później (Prokrastynacja życiowa)', explanation: 'Mówienie sobie: „Jeszcze tylko 2 lata intensywnej pracy i zwolnię”.' }
      ],
      emotionalDynamic: 'Lęk przed przeoczeniem szansy zawodowej kontra lęk przed utratą więzi z dziećmi.'
    },
    decisionProcessAnalysis: {
      trigger: 'Propozycja awansu zagranicznego od Prezesa.',
      attentionFocus: 'Reakcja żony i wiek synów (6 i 9 lat).',
      interpretation: '„Czas dorastania moich dzieci jest zasobem nieodnawialnym”.',
      emotion: 'Smutek, ulga, pewność wyboru.',
      impulse: 'Odmowa przyjęcia delegacji.',
      action: 'Szczera rozmowa z zarządem i renegocjacja warunków obecnej roli.',
      consequence: 'Zachowanie rodziny i spokój psychiczny.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'dlPFC', role: 'Świadomy wybór wartości długoterminowej wbrew impulsowi statusowemu', activationState: 'Uruchomienie kontroli' }
      ],
      neurotransmitters: [
        { name: 'Oksytocyna', roleInScenario: 'Wzrost poziomu po podjęciu decyzji o obecności w domu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Słowa żony „Chłopcy potrzebują ojca” wywołują wzruszenie i jasność wyboru.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Korporacyjna marchewka', description: 'Wykorzystywanie ambicji i potrzeby statusu do wymuszenia pełnej dyspozycyjności.', vulnerabilityExploited: 'Potrzebę uznania.' }
      ],
      counterMeasures: [
        { step: '1. Test Ostateczny (Deathbed Test)', script: '„Na łożu śmierci nie będę żałował, że spędziłem za mało czasu w biurze. Będę żałował każdego przegapionego meczu syna”.', rationale: 'Urealnia prawdziwą hierarchię wartości.' }
      ]
    },
    alternativePath: 'Gdyby Hubert przyjął awans, po 3 latach dorobiłby się majątku, lecz jego małżeństwo zakończyłoby się rozwodem.',
    readerQuestion: 'Która z Twoich wartości jest najczęściej poświęcana na ołtarzu codziennego pośpiechu?',
    keyTakeaway: 'Nie możesz mieć wszystkiego na raz. Prawdziwe priorytety poznaje się po tym, z czego potrafisz zrezygnować.'
  },
  {
    id: 'studium-20-2-autonomia-etyka',
    title: 'Cena niezależności: Jak decyzja oparta na etyce kosztowała Olgę posadę',
    subtitle: 'Wartości w działaniu, odmowa udziału w oszustwie i budowanie autonomii',
    protagonist: 'Olga, 34 lata, dyrektor ds. marketingu w firmie farmaceutycznej',
    context: 'Olga odkryła, że nowy suplement diety wprowadzany na rynek przez jej firmę zawiera substancje wywołujące skutki uboczne, a badania w ulotce zostały sfałszowane. Zarząd nakazał jej ruszyć z kampanią.',
    story: [
      'Dla Olgi kluczową wartością była „Prawda i Uczciwość”. Zderzenie z cynicznym poleceniem zarządu („Kampania ma ruszyć w poniedziałek, a badania się wyprostuje later”) wywołało u niej paraliżujący dysonans.',
      'Zarząd straszył ją dyscyplinarnym zwolnieniem i wilczym biletem w branży. W jej umyśle walczyły dwie siły: Bezpieczeństwo finansowe kontra Prawda.',
      'Olga odmówiła podpisania budżetu na fałszywą kampanię i złożyła raport do komisji etycznej. Została zwolniona tego samego dnia.',
      'Mimo że przez 4 miesiące szukała nowej pracy, spędzając oszczędności, odczuwała głęboką dumę i spokój. Jej decyzja odbiła się echem w branży i ostatecznie trafiła do firmy o najwyższych standardach etycznych.'
    ],
    dialogue: [
      { speaker: 'Prezes', text: 'Olgo, nie bądź świętsza od papieża. Wszyscy tak robią na tym rynku. Podpisujesz czy szukamy kogoś innego?', subtext: 'Presja konformizmu i szantaż rynkowy.' },
      { speaker: 'Olga', text: 'Nie podpiszę kampanii wprowadzającej pacjentów w błąd. Moje imię jest dla mnie ważniejsze niż to stanowisko.', subtext: 'Obrona nienaruszalnej wartości.' }
    ],
    decisionTaken: 'Olga odmówiła udziału w oszustwie i przyjęła wypowiedzenie umowy o pracę.',
    whatProtagonistSaw: 'Czysty brak moralności w zarządzie i zagrożenie dla zdrowia pacjentów.',
    whatWasMissed: 'Fakt, że zgoda na kompromis etyczny zniszczyłaby jej szacunek do samej siebie na całe lata.',
    psychologicalAnalysis: {
      coreMechanism: 'Wartości w działaniu (Value-Based Action) i ochrona spójności moralnej.',
      cognitiveBiases: [
        { name: 'Efekt konformizmu społecznego', description: 'Nacisk zarządu: „Wszyscy tak robią, więc to norma”.', impact: 'Próba złamania kręgosłupa etycznego.' }
      ],
      defenseMechanisms: [
        { name: 'Odmowa udziału (Bojkot)', explanation: 'Kategoryczne postawienie granicy etycznej.' }
      ],
      emotionalDynamic: 'Lęk przed brakiem pracy kontra głęboka duma i wewnętrzny spokój.'
    },
    decisionProcessAnalysis: {
      trigger: 'Polecenie uruchomienia sfałszowanej kampanii.',
      attentionFocus: 'Ulotka z sfałszowanymi wynikami i zdrowie pacjentów.',
      interpretation: '„Jeśli to podpiszę, stanę się współwinna oszustwa”.',
      emotion: 'Oburzenie, lęk przed brakiem pracy, duma.',
      impulse: 'Odmowa złożenia podpisu.',
      action: 'Złożenie raportu etycznego i przyjęcie zwolnienia.',
      consequence: 'Przejściowe trudności finansowe, a następnie awans w renomowanej firmie.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora obwodu (ACC)', role: 'Wykrywanie ostrego naruszenia wartości moralnych', activationState: 'Ekstremalna aktywacja' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Wysokie pobudzenie w walce o własne granice.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Słowo „sfałszujmy” wywołuje fizyczną odrazę.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Szantaż rynkowy i racjonalizacja grupy', description: 'Tłumaczenie oszustwa „wymogami rynku” i zastraszaniem zwolnieniem.', vulnerabilityExploited: 'Lęk przed brakiem środków.' }
      ],
      counterMeasures: [
        { step: '1. Nienaruszalna Granica', script: '„Moja spójność etyczna nie jest na sprzedaż za żadne wynagrodzenie”.', rationale: 'Chroni przed utratą godności.' }
      ]
    },
    alternativePath: 'Gdyby Olga podpisała kampanię, żyłaby w ciągłym lęku przed prokuraturą i wypaleniem moralnym.',
    readerQuestion: 'Jaka jest Twoja cena za złamanie własnych wartości moralnych?',
    keyTakeaway: 'Spójność życiowa polega na robieniu tego, co słuszne, nawet gdy płaci się za to wysokie koszty.'
  },
  {
    id: 'studium-20-3-minimalizm-kariera',
    title: 'Ucieczka z wyścigu szczurów: Re-definicja priorytetów u Pawła',
    subtitle: 'Autonomia, porzucenie narzuconych potrzeb i wybór prostoty',
    protagonist: 'Paweł, 42 lata, były wiceprezes banku',
    context: 'Paweł zarabiał 80 tysięcy złotych miesięcznie, posiadał dwa luksusowe apartamenty i odczuwał dojmujący brak sensu. Praca po 14 godzin dziennie doprowadziła go do stanu przedzawałowego.',
    story: [
      'Przez 15 lat Paweł gonił za wyznacznikami sukcesu: droższe zegarki, nowsze samochody, prestiżowe adresy. Jego hierarchia wartości została zdominowana przez narzucone skrypty korporacyjne.',
      'Po pobycie na oddziale kardiologii Paweł zadał sobie po raz pierwszy od dekady pytanie: „Po co ja to wszystko robię? Czy te przedmioty dają mi choć gram prawdziwego szczęścia?”.',
      'Uświadomił sobie, że jego rzeczywistymi potrzebami są: Spokój, Bliskość z naturą i Czas dla rodziny. Cały luksus był jedynie kosztownym rekwizytem maskującym pustkę.',
      'Paweł sprzedał jeden z apartamentów, zrezygnował ze stanowiska wiceprezesa i otworzył małą firmę doradczą. Jego dochody spadły o 70%, lecz poziom satysfakcji z życia wzrósł wielokrotnie.'
    ],
    dialogue: [
      { speaker: 'Kolega z Banku', text: 'Paweł, zwariowałeś? Porzucasz taki status i taką pensję dla jakiejś małej firmy?!', subtext: 'Niedowierzanie otoczenia uwięzionego w wyścigu szczurów.' },
      { speaker: 'Paweł', text: 'Zamieniłem pieniądze, których nie miałem kiedy wydawać, na czas, którego nie kupię za żadne miliony.', subtext: 'Urealnienie prawdziwej hierarchii wartości.' }
    ],
    decisionTaken: 'Paweł porzucił korporacyjny wyścig szczurów i zredukował koszty życia na rzecz autonomii czasowej.',
    whatProtagonistSaw: 'Pustkę ekskluzywnego życia i zdrowotną cenę pracoholizmu.',
    whatWasMissed: 'Fakt, że wolność czasowa jest cenniejszym zasobem niż stan konta bankowego.',
    psychologicalAnalysis: {
      coreMechanism: 'Re-kalibracja potrzeb i przejście od motywacji zewnętrznej do wewnętrznej (Teoria SDT).',
      cognitiveBiases: [
        { name: 'Kierat hedoniczny (Hedonic Treadmill)', description: 'Szybkie przyzwyczajanie się do wyższego standardu i potrzeba kolejnych bodźców.', impact: 'Ciągły niedosyt.' }
      ],
      defenseMechanisms: [
        { name: 'Urealnienie wartości', explanation: 'Odrzucenie narzuconych wymogów statusowych.' }
      ],
      emotionalDynamic: 'Uwolnienie od ciągłego wyścigu i głęboki spokój.'
    },
    decisionProcessAnalysis: {
      trigger: 'Epizod sercowy i pobyt na kardiologii.',
      attentionFocus: 'Własne zdrowie i przelotność życia.',
      interpretation: '„Gonię za iluzją, która mnie zabija”.',
      emotion: 'Przerażenie, jasność celu, ulga.',
      impulse: 'Złożenie rezygnacji.',
      action: 'Sprzedaż majątku i restrukturyzacja stylu życia.',
      consequence: 'Zdrowie, odzyskanie relacji z dziećmi i autonomia.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'DMN', role: 'Integration nowej, prostej opowieści o dobrym życiu', activationState: 'Obniżenie ruminacji' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Drastyczny spadek spoczynkowego poziomu hormonów stresu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Decyzja o rezygnacji wywołuje fizyczne odprężenie mięśni karku.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kierat konsumpcyjny', description: 'Kultura wmawiająca, że wartość człowieka zależy od posiadanych dóbr.', vulnerabilityExploited: 'Potrzebę statusu.' }
      ],
      counterMeasures: [
        { step: '1. Swiadomy Minimalizm', script: '„Kupuję tylko to, co służy moim realnym wartościom, a nie mym rekwizytom wizerunkowym”.', rationale: 'Uwalnia od zależności finansowej.' }
      ]
    },
    alternativePath: 'Gdyby Paweł został w banku, w ciągu 2 lat przeszedłby rozległy zawał serca.',
    readerQuestion: 'Ile swojego czasu i zdrowia sprzedajesz za rzeczy, których tak naprawdę nie potrzebujesz?',
    keyTakeaway: 'Najbogatszy jest ten, którego potrzeby są najmniejsze, a czas należy do niego.'
  },
  {
    id: 'studium-20-4-konflikt-pogladów-rodzina',
    title: 'Gdy tradycja zderza się z wyborem: Odważna decyzja Ani o własnej ścieżce życiowej',
    subtitle: 'Autonomia vs oczekiwania rodowe, przełamanie szantażu emocjonalnego',
    protagonist: 'Ania, 28 lat, lekarka weterynarii',
    context: 'Ania pochodziła z tradycyjnej rodziny, w której oczekiwano, że po studiach wyjdzie za mąż za wskazanego partnera, przejmie gospodarstwo i zostanie na wsi. Ania marzyła o pracy w klinice dla dzikich zwierząt w Afryce.',
    story: [
      'Rodzina wywierała na Anię potężną presję emocjonalną: „Matka przez ciebie zachoruje”, „Jesteś samolubna”, „Zdradzasz nasze tradycje”.',
      'Ania przez lata zmagała się z dławiącym poczuciem winy. Jej potrzeba autonomii zderzała się z wrodzoną potrzebą powiązania i bliskości z rodziną.',
      'Dopiero gdy uświadomiła sobie, że poświęcenie własnego życia dla spełnienia oczekiwań rodziców doprowadzi ją do głębokiej depresji, podjęła decyzję o wyjeździe.',
      'Napisala do rodziców ciepły, lecz stanowczy list, stawiający jasne granice jej autonomii.'
    ],
    dialogue: [
      { speaker: 'Matka', text: 'Aniu, jeśli wyjedziesz do tej Afryki, nie masz po co wracać do tego domu!', subtext: 'Szantaż emocjonalny odrzuceniem.' },
      { speaker: 'Ania', text: 'Mamo, kocham was bardzo, ale moje życie należy do mnie. Wyjeżdżam, ale moje serce zostaje z wami.', subtext: 'Stawianie granic z pozycji miłości i autonomii.' }
    ],
    decisionTaken: 'Ania wyjechała na kontrakt do Afryki, stawiając dojrzałe granice w relacji z rodzicami.',
    whatProtagonistSaw: 'Szantaż emocjonalny i wizję utraty rodziny.',
    whatWasMissed: 'Fakt, że dojrzała miłość rodzicielska potrzebuje czasu, by zaakceptować autonomię dziecka.',
    psychologicalAnalysis: {
      coreMechanism: 'Różnicowanie siebie (Differentiation of Self) i odzyskiwanie autonomii w systemie rodzinnym.',
      cognitiveBiases: [
        { name: 'Myślenie katastroficzne', description: 'Przekonanie, że wyjazd bezpowrotnie zniszczy relację z rodzicami.', impact: 'Paraliż decyzyjny.' }
      ],
      defenseMechanisms: [
        { name: 'Stawianie granic', explanation: 'Odmowa ulegania szantażowi emocjonalnemu.' }
      ],
      emotionalDynamic: 'Poczucie winy przechodzące w ulgę i poczucie sprawczości.'
    },
    decisionProcessAnalysis: {
      trigger: 'Otrzymanie oficjalnej propozycji kontraktu z Afryki.',
      attentionFocus: 'Własne pragnienie rozwoju i odwoływanie się matki.',
      interpretation: '„Jestem dorosłym człowiekiem i mam prawo do własnego życia”.',
      emotion: 'Lęk, poczucie winy, ogromna determinacja.',
      impulse: 'Rezygnacja z wyjazdu dla świętego spokoju.',
      action: 'Podpisanie umowy i szczera rozmowa z rodzicami.',
      consequence: 'Wyjazd, realizacja pasji i stopniowa akceptacja ze strony rodziców.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'dlPFC', role: 'Podejmowanie autonomicznych decyzji pod prąd presji społecznej', activationState: 'Wysoka aktywacja' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Skok motywacji dopaminowej po wybraniu własnej ścieżki.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Słowa matki wywołują dławienie w gardle wyciszane oddechem.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Szantaż emocjonalny poczuciem winy', description: 'Wpajanie, że autonomia dziecka jest krzywdą dla rodziców.', vulnerabilityExploited: 'Potrzebę przywiązania.' }
      ],
      counterMeasures: [
        { step: '1. Różnicowanie (Differentiation)', script: '„Jestem osobnym człowiekiem. Kocham was, ale moje wybory należą do mnie”.', rationale: 'Odbudowuje granice tożsamościowe.' }
      ]
    },
    alternativePath: 'Gdyby Ania została na wsi, żyłaby w narastającym żalu i niechęci do własnej rodziny.',
    readerQuestion: 'Którą ze swoich decyzji odkładasz z powodu lęku przed poczuciem winy wobec bliskich?',
    keyTakeaway: 'Twoje życie jest Twoim dziełem. Nie oddawaj pędzla w ręce innych ludzi, nawet tych, których kochasz.'
  },
  {
    id: 'studium-20-5-zarzadzanie-energii-priorytety',
    title: 'Sztuka rezygnacji: Jak Michał uratował swój projekt poprzez wdrożenie Zasady Pareto',
    subtitle: 'Mniej znaczy więcej, eliminacja błahostek i koncentracja na 20% kluczowych działań',
    protagonist: 'Michał, 36 lat, twórca aplikacji edukacyjnej',
    context: 'Michał pracował po 16 godzin dziennie, próbując wdrożyć 50 funkcji w nowej aplikacji. Projekt opóźniał się o pół roku, a budżet się kończył.',
    story: [
      'Michał cierpiał na błąd „wszystko jest tak samo ważne”. Każdy pomysł użytkowników dodawał do listy wymagań, rozpraszając zespół.',
      'Pracował do skrajnego wyczerpania, lecz efekty były mierne: aplikacja była skomplikowana, wolna i przeładowana.',
      'Inwestor postawił ultimatum: Albo w 30 dni ruszają z działającym rdzeniem, albo wycofuje finansowanie.',
      'Michał zastosował Zasadę Pareto: bezwzględnie usunął 40 funkcji, skupiając się na 3 kluczowych, które dawały 80% wartości. Aplikacja ruszyła w terminie i stała się hitem.'
    ],
    dialogue: [
      { speaker: 'Inwestor', text: 'Michał, wytnij 80% tego gąszczu. Zostaw tylko to, co naprawdę rozwiązuje problem klienta!', subtext: 'Wymuszenie koncentracji na kluczowych priorytetach.' },
      { speaker: 'Michał', text: 'Ale te wszystkie funkcje są takie piękne... Jak mam z nich zrezygnować?', subtext: 'Przywiązanie do błahostek i brak priorytetyzacji.' }
    ],
    decisionTaken: 'Michał drastycznie okroił zakres projektu do 3 najważniejszych funkcji i wydał wersję podstawową.',
    whatProtagonistSaw: 'Konieczność zachowania wszystkich swoich pomysłów.',
    whatWasMissed: 'Fakt, że prostota i koncentracja są kluczem do użyteczności i sukcesu.',
    psychologicalAnalysis: {
      coreMechanism: 'Priorytetyzacja oparta na Zasadzie Pareto (80/20) i eliminacja rozpraszaczy.',
      cognitiveBiases: [
        { name: 'Sunk Cost Fallacy', description: 'Trzymanie się zbędnych funkcji tylko dlatego, że poświęcono na nie czas.', impact: 'Paraliż projektu.' }
      ],
      defenseMechanisms: [
        { name: 'Przeładowanie pracą (Busyness)', explanation: 'Ucieczka w ilość zadań przed trudną decyzją o selekcji.' }
      ],
      emotionalDynamic: 'Lęk przed wycięciem funkcji przechodzący w olśnienie prostotą.'
    },
    decisionProcessAnalysis: {
      trigger: 'Ultimatum od inwestora.',
      attentionFocus: 'Rdzenna wartość aplikacji dla użytkownika.',
      interpretation: '„Mniej funkcji oznacza lepszą jakość i szybszy start”.',
      emotion: 'Ulga, jasność, skupienie.',
      impulse: 'Wycięcie 80% zbędnego kodu.',
      action: 'Publikacja wersji prostej.',
      consequence: 'Sukces rynkowy i uratowanie firmy.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'dlPFC', role: 'Kierowanie zasobami uwagi na jeden kluczowy cel', activationState: 'Maksymalna wydajność' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Szybkie ukończenie prostej wersji aktywuje pętlę sukcesu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Widok działającej prostej wersji daje natychmiastowy spokój.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Iluzja kompletności', description: 'Przekonanie, że produkt musi zawierać wszystko, by był wartościowy.', vulnerabilityExploited: 'Perfekcjonizm.' }
      ],
      counterMeasures: [
        { step: '1. Brutalna Selekcja (Radical Pruning)', script: '„Zostawiam tylko to, co jest bezwzględnie konieczne. Reszta idzie do kosza”.', rationale: 'Gwarantuje dowożenie wyników.' }
      ]
    },
    alternativePath: 'Gdyby Michał nie dokonał selekcji, projekt upadłby, a firma zbankrutowałaby.',
    readerQuestion: 'Które 20% Twoich codziennych działań przynosi Ci 80% rzeczywistego szczęścia i sukcesu?',
    keyTakeaway: 'Istotą priorytetyzacji nie jest decydowanie o tym, co robić — jest nią odważne decydowanie o tym, czego NIE robić.'
  }
];

export const selfExercisesChapterTwenty: SelfExercise[] = [
  {
    id: 'ex-20-1',
    title: 'Audyt Wartości Realizowanych (Time & Money Audit)',
    subtitle: 'Konfrontacja deklaracji słownych z rzeczywistymi wyborami',
    objective: 'Przeanalizowanie realnego wykorzystania czasu i pieniędzy w zeszłym miesiącu i porównanie go z deklarowanymi wartościami.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Konfrontacja z obiektywnymi danymi wywołuje powstrzymanie racjonalizacji w kory przedczołowej i umożliwia korektę nawyków.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wypisanie 3 głównych wartości deklarowanych',
        instruction: 'Zapisz 3 wartości, które uważasz za najważniejsze w swoim życiu (np. Zdrowie, Rodzina, Rozwój).',
        promptText: 'Moje wartości deklarowane:',
        placeholder: '1. Zdrowie\n2. Czas dla rodziny\n3. Rozwój osobisty'
      },
      {
        stepNumber: 2,
        title: 'Obiektywna analiza kalendarza i wydatków',
        instruction: 'Sprawdź ile godzin w zeszłym tygodniu poświęciłeś na działania bezpośrednio karmiące te wartości.',
        promptText: 'Realny czas i pieniądze przeznaczone na wartości:',
        placeholder: 'Zdrowie: 1 godzina ćwiczeń w tygodniu (1.5% czasu)...\nRodzina: 4 godziny bez telefonu...\nRozwój: 0 godzin...'
      },
      {
        stepNumber: 3,
        title: 'Plan korekty alokacji zasobów',
        instruction: 'Zaplanuj jedną konkretną zmianę w kalendarzu na ten tydzień, która przesunie co najmniej 3 godziny na rzecz najwyższej wartości.',
        promptText: 'Moja korekta w kalendarzu:',
        placeholder: 'Wprowadzam 30-minutowy spacer codziennie o 18:00 (Zdrowie) oraz blokuję niedzielne popołudnie bez ekranów (Rodzina).'
      }
    ],
    reflectionQuestions: [
      'Gdzie w Twoim kalendarzu przepadają godziny, które miały służyć Twoim najważniejszym wartościom?',
      'Jaką jedną zbędną czynność musisz wyeliminować, by odzyskać czas dla siebie?'
    ]
  },
  {
    id: 'ex-20-2',
    title: 'Matryca Rozstrzygania Konfliktów Wartości',
    subtitle: 'Nawigacja decyzyjna w sytuacjach trudnych wyborów',
    objective: 'Stworzenie jasnej hierarchii priorytetów w sytuacji zderzenia dwóch ważnych wartości.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Jawne ustalenie hierarchii wartości redukuje paraliż decyzyjny i obniża pobudzenie przedniej kory obwodu (ACC).',
    steps: [
      {
        stepNumber: 1,
        title: 'Zdefiniowanie konfliktu wartości',
        instruction: 'Zapisz dwie wartości, które wchodzą w bezpośrednie starcie w Twoim obecnym życiu (np. Bezpieczeństwo finansowe vs Wolność twórcza).',
        promptText: 'Starcie wartości:',
        placeholder: 'Wartość A: Bezpieczeństwo etatowe vs Wartość B: Niezależność i własna firma...'
      },
      {
        stepNumber: 2,
        title: 'Określenie warunków granicznych',
        instruction: 'Określ minimalne warunki bezpieczeństwa, po spełnieniu których dajesz sobie prawo do realizacji wartości wolności.',
        promptText: 'Moje warunki brzegowe:',
        placeholder: 'Przejdę na własną działalność, gdy zgromadzę poduszkę finansową na 6 miesięcy życia...'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie kompasu decyzyjnego',
        instruction: 'Napisz zdanie podsumowujące Twoją hierarchię w tym etapie życia.',
        promptText: 'Mój kompas na ten etap:',
        placeholder: 'Na tym etapie buduję poduszkę bezpieczeństwa, by za 8 miesięcy zrealizować moją wartość wolności bez niszczenia spokoju rodziny.'
      }
    ],
    reflectionQuestions: [
      'Dlaczego próba realizowania obu wartości bez planu wywoływała w Tobie ciągłe poczucie winy?',
      'Jak jasny warunek brzegowy obniża Twój poziom stresu?'
    ]
  },
  {
    id: 'ex-20-3',
    title: 'Przekształcenie „Powinienem” w „Wybieram”',
    subtitle: 'Budowanie motywacji autonomicznej (Teoria SDT)',
    objective: 'Odzyskanie poczucia sprawczości i autonomii w codziennych obowiązkach.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Zmiana ramy językowej z zewnętrznego przymusu na autonomiczny wybór aktywuje obszary koryprzedczołowej odpowiedzialne za motywację wewnętrzną.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wypisanie zdań przymusu („Powinienem”)',
        instruction: 'Zapisz 3 zdania dotyczące obowiązków, które wypowiadasz ze słowami „Muszę...” lub „Powinienem...” (np. Muszę pisać ten raport).',
        promptText: 'Moje zdania przymusu:',
        placeholder: '1. Muszę chodzić na siłownię...\n2. Powinienem oszczędzać pieniądze...\n3. Muszę jeździć do teściów...'
      },
      {
        stepNumber: 2,
        title: 'Odkrycie ukrytej wartości/korzyści',
        instruction: 'Dla każdego zdania odpowiedz na pytanie: Z jakiej wartości lub korzyści korzystam, decydując się na to działanie?',
        promptText: 'Ukryta wartość/korzyść:',
        placeholder: '1. Chcę mieć sprawne ciało bez bólu kręgosłupa...\n2. Chcę spokoju duchowego na wypadek kryzysu...\n3. Cenię dobre relacje w rodzinie...'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie zdania wyboru („Wybieram, bo...”)',
        instruction: 'Przepisuj każde zdanie na formułę: „Wybieram X, ponieważ zależy mi na Y. Albo decyduję się nie robić X i przyjmuję konsekwencje”.',
        promptText: 'Moje nowe zdania autonomii:',
        placeholder: 'Wybieram trening 3 razy w tygodniu, ponieważ chcę mieć sprawne kręgosłup i energię do pracy.'
      }
    ],
    reflectionQuestions: [
      'Jak zmienia się Twoja chęć do działania, gdy zastępujesz przymus autonomicznym wyborem?',
      'Z którego „powinienem” w swoim życiu powinieneś po prostu zrezygnować?'
    ]
  },
  {
    id: 'ex-20-4',
    title: 'Trening Asertywnego Mówienia „NIE”',
    subtitle: 'Ochrona priorytetów bez agresji i bez poczucia winy',
    objective: 'Nauczenie się zwięzłej komunikacji odmowy w sprawach stojących w sprzeczności z Twoimi priorytetami.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Skuteczna komunikacja granic redukuje lęk przed odrzuceniem społecznym i chroni zasoby wykonawcze.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zidentyfikowanie sytuacji naruszania granic',
        instruction: 'Wypisz sytuację, w której najczęściej zgadzasz się na coś wbrew sobie z powodu lęku przed rozczarowaniem kogoś.',
        promptText: 'Sytuacja trudnej odmowy:',
        placeholder: 'Gdy kolega z pracy prosi o przejęcie jego zadania w piątek o 16:00...'
      },
      {
        stepNumber: 2,
        title: 'Opracowanie skryptu zwięzłej odmowy',
        instruction: 'Stwórz 2-zdaniową odmowę opartą na szacunku i jasnym komunikacie bez nadmiernego tłumaczenia się.',
        promptText: 'Mój skrypt zwięzłej odmowy:',
        placeholder: 'Nie pomogę Ci w tym projekcie w ten piątek, ponieważ mam zaplanowane priorytety rodzinne. Daj znać w poniedziałek rano.'
      },
      {
        stepNumber: 3,
        title: 'Przećwiczenie odmowy na głos',
        instruction: 'Powiedz ten skrypt 3 razy na głos z pewną, spokojną mową ciała.',
        promptText: 'Potwierdzenie treningu:',
        placeholder: 'Przećwiczono na głos. Postawa prosta, głos spokojny.'
      }
    ],
    reflectionQuestions: [
      'Dlaczego tłumaczenie się i przepraszanie przy odmowie osłabia Twój przekaz?',
      'Jakie to uczucie obronić swój czas bez wchodzenia w agresję?'
    ]
  },
  {
    id: 'ex-20-5',
    title: 'Zasada Pareto w Praktyce Życiowej (Cut the 80%)',
    subtitle: 'Eliminacja bezużytecznych działań na rzecz kluczowych rezultatów',
    objective: 'Zidentyfikowanie 20% aktywności dających 80% rezultatów i drastyczne ograniczenie reszty.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Redukcja przeładowania bodźcami odciąża pamięć roboczą i zwiększa głębokość skupienia w kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wypisanie wszystkich obowiązków z danego obszaru',
        instruction: 'Zapisz listę 10 zadań, które wykonujesz w ciągu tygodnia w pracy lub w domu.',
        promptText: 'Moja lista 10 zadań:',
        placeholder: '1. Pisanie raportów, 2. Spotkania statusowe, 3. Odpowiadanie na maile, 4. Tworzenie strategii...'
      },
      {
        stepNumber: 2,
        title: 'Wskazanie kluczowych 20%',
        instruction: 'Wskaż 2 zadania z tej listy, które przynoszą 80% realnej wartości i postępu.',
        promptText: 'Kluczowe 20%:',
        placeholder: '1. Tworzenie strategii dla kluczowych klientów\n2. Bezpośrednie spotkania sprzedażowe'
      },
      {
        stepNumber: 3,
        title: 'Plan delegowania lub eliminacji pozostałych 80%',
        instruction: 'Napisz, co zrobisz z przynajmniej dwoma zadaniami z pozostałych 80% (automatyzacja, skrócona forma, delegowanie).',
        promptText: 'Plan cięć:',
        placeholder: 'Skracam spotkania statusowe z 60 do 15 minut. Zastępuję e-maile jednym krótkim podsumowaniem dziennym.'
      }
    ],
    reflectionQuestions: [
      'O ile wzrośnie Twoja skuteczność, gdy skupisz siły na kluczowym 20%?',
      'Co powstrzymuje Cię przed natychmiastowym wycięciem zbędnych spotkań?'
    ]
  },
  {
    id: 'ex-20-6',
    title: 'Test Ostateczny Wartości (Deathbed Test)',
    subtitle: 'Urealnienie perspektywy życiowej i odrzucenie błahostek',
    objective: 'Głęboka weryfikacja priorytetów z perspektywy końca życia.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Wyobrażenie skończoności życia aktywuje struktury mPFC odpowiedzialne za refleksję egzystencjalną i odrzucenie narzuconych gier statusowych.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wyobrażenie perspektywy końca drogi',
        instruction: 'Wyobraź sobie siebie w wieku 90 lat, siedzącego na fotelu i patrzącego wstecz na swoje obecne życie.',
        promptText: 'Co widzę z perspektywy 90 lat:',
        placeholder: 'Widzę, że wyścigi o status i lajki nie miały żadnego znaczenia. Liczyły się relacje i odwaga bycia sobą...'
      },
      {
        stepNumber: 2,
        title: 'Wypisanie rzeczy, których NIE będziesz żałować',
        instruction: 'Wypisz 3 sprawy, którymi dziś się zamartwiasz, a które z perspektywy 90 lat będą całkowicie bez znaczenia.',
        promptText: 'Błahostki bez znaczenia:',
        placeholder: '1. Opinia sąsiadów o moim samochodzie...\n2. Nietrafiony projekt sprzed dwóch lat...\n3. Złośliwy komentarz w pracy...'
      },
      {
        stepNumber: 3,
        title: 'Jedna zmiana na dzisiaj',
        instruction: 'Napisz jedną decyzję, którą podejmiesz dzisiaj, by żyć w większej spójności z tą egzystencjalną mądrością.',
        promptText: 'Moja decyzja z perspektywy końca drogi:',
        placeholder: 'Spędzę ten wieczór z dziećmi bez telefonu, ciesząc się chwolą obecną.'
      }
    ],
    reflectionQuestions: [
      'Jak Test Ostateczny zmienia Twoją ocenę obecnych problemów zawodowych?',
      'Dlaczego czekamy z życiem na własnych zasadach aż do kryzysu?'
    ]
  },
  {
    id: 'ex-20-7',
    title: 'Instrukcja Obsługi Potrzeb Psychologicznych (SDT Audit)',
    subtitle: 'Diagnoza zaspokojenia Autonomii, Kompetencji i Bliskości',
    objective: 'Zidentyfikowanie obszarów deficytu w 3 podstawowych potrzebach i zaplanowanie działań naprawczych.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Zaspokojenie potrzeb SDT jest warunkiem koniecznym dla neurobiologicznej równowagi i zapobiegania wypaleniu.',
    steps: [
      {
        stepNumber: 1,
        title: 'Ocena nasycenia potrzeb (0-100%)',
        instruction: 'Oceń na ile Twoje obecne życie zaspokaja potrzeby: Autonomii (poczucie wyboru), Kompetencji (poczucie rozwoju) oraz Bliskości (poczucie więzi).',
        promptText: 'Obecny poziom nasycenia:',
        placeholder: 'Autonomia: 40%\nKompetencja: 80%\nBliskość: 30%'
      },
      {
        stepNumber: 2,
        title: 'Identyfikacja największego deficytu',
        instruction: 'Wybierz potrzebę o najniższym wyniku i opisz, co najbardziej ją blokuje w Twoim codziennym życiu.',
        promptText: 'Główna blokada potrzeby:',
        placeholder: 'Bliskość jest blokowana przez ciągły pracoholizm i brak czasu na szczere rozmowy z partnerem...'
      },
      {
        stepNumber: 3,
        title: 'Działanie regenerujące potrzebę',
        instruction: 'Zaplanuj jedną konkretną akcję na ten tydzień, która podniesie poziom nasycenia tej potrzeby.',
        promptText: 'Moja akcja regenerująca:',
        placeholder: 'Zaplanuję randkę z partnerem bez tematów pracy i dzieci w ten piątek.'
      }
    ],
    reflectionQuestions: [
      'Jak brak zaspokojenia tej potrzeby przekłada się na Twój poziom irytacji w ciągu dnia?',
      'Co możesz zrobić, by chronić tę przestrzeń co tydzień?'
    ]
  },
  {
    id: 'ex-20-8',
    title: 'Manifest Spójności i Priorytetów',
    subtitle: 'Osobisty kompas kierowania własnym życiem',
    objective: 'Zsyntetyzowanie wglądów z Rozdziału 4 w zwięzłą deklarację wartości i priorytetów.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Formalna kodyfikacja priorytetów w koryprzedczołowej ułatwia automatyczne podejmowanie wyborów pod presją czasu.',
    steps: [
      {
        stepNumber: 1,
        title: 'Moja nienaruszalna zasada',
        instruction: 'Napisz jedną zasadę etyczną, której nie złamiesz dla żadnych pieniędzy ani awansu.',
        promptText: 'Moja nienaruszalna zasada:',
        placeholder: 'Nigdy nie będę kłamać w sprawach bezpieczeństwa i relacji dla własnej korzyści.'
      },
      {
        stepNumber: 2,
        title: 'Mój główny priorytet na ten rok',
        instruction: 'Napisz jeden główny priorytet, któremu podporządkujesz swoje zasoby czasowe w najbliższym roku.',
        promptText: 'Mój priorytet nr 1:',
        placeholder: 'Odbudowa zdrowia fizycznego i obecności w domu.'
      },
      {
        stepNumber: 3,
        title: 'Osobisty manifest spójności',
        instruction: 'Napisz 2-zdaniowy manifest: „Wybieram życie w zgodzie z moim kompasem...”',
        promptText: 'Mój osobisty manifest priorytetów:',
        placeholder: 'Wybieram wolność czasową i spokój sumienia zamiast cudzego podziwu. Moje wartości prowadzą moje decyzje każdego dnia.'
      }
    ],
    reflectionQuestions: [
      'Jak ten manifest ułatwi Ci powiedzenie „nie” najbliższej niekorzystnej propozycji?',
      'O ile spokojniejszy czujesz się mając jasny kompas w ręku?'
    ]
  }
];

export const chapterTwenty: Chapter = {
  number: 20,
  volume: 3,
  volumeChapterNumber: 4,
  title: 'Wartości, potrzeby i priorytety',
  subtitle: 'Teoria Samodeterminacji SDT, kompasy moralne, nawigacja w konflikcie wartości i sztuka wyznaczania granic',
  leadParagraph: 'Dlaczego tak często wiemy, co jest dla nas dobre i ważne, a mimo to działamy w sposób całkowicie sprzeczny z naszymi deklaracjami? Dlaczego osławiony „brak czasu” okazuje się w rzeczywistości jedynie brakiem jasnych priorytetów? W świecie przeładowanym bodźcami, presją społeczną i cyfrowym hałasem umiejętność precyzyjnego zdefiniowania własnych wartości oraz potrzeb psychologicznych przestaje być luksusem — staje się warunkiem koniecznym zachowania psychicznej autonomii. W tym rozdziale przeanalizujemy, jak budować nienaruszalny kompas priorytetów i podejmować odważne decyzje w zgodzie ze sobą.',
  totalEstimatedPages: 62,
  sections: [
    {
      id: 'sec-20-1',
      pageNumber: 1,
      sectionNumber: '20.1',
      title: 'Czym Są Wartości? Filary Motywacyjne i Kompasy Decyzyjne',
      category: 'teoria',
      readingTimeMinutes: 15,
      quote: {
        text: 'Gdy Twoje wartości są dla Ciebie jasne, podejmowanie decyzji staje się proste.',
        author: 'Roy E. Disney'
      },
      paragraphs: [
        'Wartości (values) w psychologii poznawczo-behawioralnej i akceptacji (ACT) definiowane są jako wybrane jakości działania, które nadają życiu kierunek i głęboki sens. Wartość nie jest rzeczą do posiadania ani celem do odhaczenia na liście.',
        'Metaforycznie wartości przypominają kierunki na kompasie (np. Zachód). Nigdy nie „docierasz” na Zachód — po prostu podróżujesz w tym kierunku każdego dnia. Działanie zgodne z wartością „Bycie troskliwym partnerem” nie kończy się po jednym miłym geście, lecz trwa w każdym kolejnym wyborze.',
        'Wartości stanowią najgłębszą warstwę motywacji wewnętrznej. Gdy działasz w zgodzie z własnymi wartościami, Twoja kora przedczołowa odczuwa stan spójności (integrity), wyzwalając poczucie dumy i spokoju ducha.'
      ]
    },
    {
      id: 'sec-20-2',
      pageNumber: 4,
      sectionNumber: '20.2',
      title: 'Teoria Samodeterminacji (SDT Deci & Ryan) — 3 Podstawowe Potrzeby Psychologiczne',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Edward Deci i Richard Ryan w Teorii Samodeterminacji (Self-Determination Theory) udowodnili, że każdy człowiek do prawidłowego rozwoju i dobrostanu potrzebuje stałego zaspokajania 3 uniwersalnych potrzeb psychologicznych:',
        '1. Potrzeba Autonomii (Autonomy) — poczucie, że jesteśmy autorem własnych wyborów, a nie pionkiem przesuwanym na szachownicy przez szefa czy rodzinę; 2. Potrzeba Kompetencji (Competence) — poczucie sprawczości i rozwoju umiejętności w starciu z wyzwaniami; 3. Potrzeba Bliskości i Powiązania (Relatedness) — poczucie przynależności, bycia kochanym i szanowanym w bezpiecznej grupie.',
        'Gdy środowisko pracy lub domowe blokuje te potrzeby (np. mikromanagement niszczący autonomię), człowiek popada w stan wyczerpania, cynizmu i biernego oporu.'
      ]
    },
    {
      id: 'sec-20-3',
      pageNumber: 7,
      sectionNumber: '20.3',
      title: 'Wartość vs Cel vs Preferencja — Różnice Strukturalne w Architekturze Decyzyjnej',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Niezwykle ważne jest precyzyjne rozróżnienie trzech pojęć, które często bywają mylone w praktyce samorozwojowej.',
        'Wartość to jakościowy kierunek działania na całe życie (np. „Dbnie o zdrowie”). Cel to konkretny, mierny przystanek na tej drodze, który można osiągnąć („Przebiegnięcie maratonu w pażdzierniku”). Preferencja to zmienny gust lub nawyk dotyczący wygody („Wolę biegać rano niż wieczorem”).',
        'Mylenie celu z wartością prowadzi do pułapki „Osiągnę cel i będę szczęśliwy”. Po przebiegnięciu maratonu pojawia się pustka. Gdy rozumiesz, że maraton był tylko przystankiem na drodze wartości „Zdrowie”, kontynuujesz ruch w wybranym kierunku.'
      ]
    },
    {
      id: 'sec-20-4',
      pageNumber: 10,
      sectionNumber: '20.4',
      title: 'Wartości Deklarowane vs Wartości Realizowane w Działaniu',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Istnieje drastyczna różnica między tym, co człowiek twierdzi na temat swoich wartości, a tym, jak faktycznie żyje.',
        'Wartości deklarowane to szlachetne słowa wypowiadane podczas dyskusji czy pisane w CV („Rodzina jest dla mnie najważniejsza”). Wartości realizowane to obiektywne fakty wynikające ze sposobu alokacji czasu, energii i pieniędzy.',
        'Jeśli Twój kalendarz wykazuje 70 godzin pracy i 2 godziny dla rodziny w tygodniu, to bez względu na deklaracje słowne Twoją wartością realizowaną jest Status/Praca, a nie Rodzina. Konfrontacja z tą prawdą jest pierwszym krokiem do dojrzałości.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[0]
    },
    {
      id: 'sec-20-5',
      pageNumber: 13,
      sectionNumber: '20.5',
      title: 'Konflikty Wartości — Gdy Wolność Zderza Się z Bezpieczeństwem',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Dojrzałe życie nie polega na łatwym wyborze między Dobrem a Złem. Najtrudniejsze dylematy życiowe to starcie między dwoma wartościami, z których obie są dobre (np. Wolność vs Bezpieczeństwo, Uczciwość vs Lojalność).',
        'W sytuacji konfliktu wartości opowiedzenie się za jedną opcją wymusza konieczność znoszenia kosztu rezygnacji z drugiej. Brak akceptacji tego kosztu generuje przewlekły paraliż decyzyjny.',
        'Świadoma nawigacja wymaga ustalenia jasnej hierarchii priorytetów na dany etap życia i akceptacji faktu, że nie można mieć wszystkiego naraz.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[1]
    },
    {
      id: 'sec-20-6',
      pageNumber: 16,
      sectionNumber: '20.6',
      title: 'Priorytety i Nawigacja Decyzyjna — Krótki Termin vs Długi Termin',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Umysł ludzki z powodu ewolucyjnego budowy układu limbicznym ma naturalną tendencję do faworyzowania natychmiastowej ulgi i małych nagród krótko-terminowych nad dużymi celami długo-terminowymi (Hyperbolic Discounting).',
        'Zarządzanie priorytetami to umiejętność odraczania gratyfikacji (Delayed Gratification). To świadomy wybór dyskomfortu w tej minucie w imię spójności z wartościami w perspektywie lat.',
        'Zasada Pareto (80/20) w zarządzaniu priorytetami nakazuje odważne wyeliminowanie 80% błahostek po to, by skoncentrować pełną energię na 20% kluczowych działań zasilających nasze główne wartości.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[4]
    },
    {
      id: 'sec-20-7',
      pageNumber: 19,
      sectionNumber: '20.7',
      title: 'Presja Społeczna, Oczekiwania Rodziny i Grupy a Narzucone Wartości',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Większość ludzi przeżywa znaczne części swojego życia realizując narzucone wartości zewnętrznej grupy (rodziny, korporacji, subkultury) w obronie przed lękiem przed odrzuceniem.',
        'Zjawisko introjekcji polega na bezkrytycznym poknięciu cudzych priorytetów i traktowaniu ich jako własnych. Powoduje to powolne wyobcowanie i poczucie, że żyje się w cudzym scenariuszu.',
        'Odzyskanie autonomii wymaga odważnego różnicowania siebie (Differentiation of Self) od oczekiwań otoczenia.'
      ],
      caseStudyRef: caseStudiesChapterTwenty[3]
    },
    {
      id: 'sec-20-8',
      pageNumber: 22,
      sectionNumber: '20.8',
      title: 'Decyzje Pod Naciskiem i Zachowanie Autonomii — Sztuka Wyznaczania Granic',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Wyznaczanie granic (Boundaries) jest umiejętnością komunikowania własnych nienaruszalnych wartości bez agresji i bez poczucia winy.',
        'Granica nie jest atakiem na drugiego człowieka — jest jasną informacją o tym, na co się zgadzamy, a na co nie. Osoba o jasnych priorytetach potrafi wypowiedzieć spokojne „Nie” prośbie szefa czy znajomego, powołując się na własny kompas.',
        'Mówienie „Nie” innym ludziom jest w rzeczywistości jedyną drogą do powiedzenia „Tak” własnym priorytetom.'
      ]
    },
    {
      id: 'sec-20-9',
      pageNumber: 25,
      sectionNumber: '20.9',
      title: 'Ewolucja Wartości na Różnych Etapach Życia',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Hierarchia wartości nie jest sztywnym spisem stanowionym raz na zawsze. Zmienia się i ewoluuje wraz z wiekiem i doświadczeniami życiowymi.',
        'W młodości dominuje potrzeba eksploracji, wolności, budowania pozycji i zdobywania kompetencji. W wieku dojrzałym wskaźniki przesuwają się ku stabilizacji, głębokim relacjom, zdrowiu i przekazywaniu wiedzy innym (generatywność wg Eriksona).',
        'Zaakceptowanie faktu, że Twoje priorytety sprzed 10 lat nie muszą być Twoimi priorytetami dzisiaj, uwalnia od fałszywego poczucia winy.'
      ]
    },
    {
      id: 'sec-20-10',
      pageNumber: 28,
      sectionNumber: '20.10',
      title: 'Wewnętrzny Konflikt „Chcę” vs „Powinienem” — Uwalnianie Prokrastynacji',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Prokrastynacja rzadko jest wynikiem zwykłego lenistwa. Najczęściej jest objawem ostrego konfliktu między nakazem „Powinienem” (pochodzącym z norm zewnętrznych) a pragnieniem „Chcę”.',
        'Gdy zadanie jest opatrzone etykietą „Przymus”, umysł reaguje oporem i szuka ucieczki w natychmiastowe gratyfikacje.',
        'Rozwiązanie polega na re-framingu: przeformułowaniu zadania z pozycji autonomii: „Wybieram to działanie, ponieważ służy ono mojej wartości X”.'
      ]
    },
    {
      id: 'sec-20-11',
      pageNumber: 31,
      sectionNumber: '20.11',
      title: '💡 BŁĘDNA INTUICJA: Działanie zgodne z wartościami przychodzi bez wysiłku',
      category: 'teoria',
      readingTimeMinutes: 12,
      paragraphs: [
        'Częstym mit miedzyludzkim jest przekonanie, że jeśli coś jest naszą prawdziwą wartością, to realizacja tego działania powinna być lekka, łatwa i przyjemna.',
        'W rzeczywistości działanie w zgodzie z wartościami (np. Uczciwość w trudnej rozmowie, Wstanie na trening o 6:00 rano dla Zdrowia) bardzo często wymaga pokonania znacznego oporu i dyskomfortu w krótkim terminie.',
        'Wartości dają głęboki sens i dumę, a nie brak wysiłku fizjologicznego.'
      ]
    },
    {
      id: 'sec-20-12',
      pageNumber: 34,
      sectionNumber: '20.12',
      title: '🔬 CO NADAL NIE JEST JASNE? Zmiana Wartości w Obliczu Kryzysów Egzystencjalnych',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'W jakim stopniu nagła, drastyczna zmiana hierarchii wartości po traumie czy chorobie (Post-Traumatic Growth) jest trwałym przebudowaniem sieci neuronalnych, a w jakim przejściowym stanem obronnym?',
        'Badania nad wzrostem potreumatycznym wskazują na dużą rolę aktywnej restrukturyzacji narracji autobiograficznej.'
      ]
    },
    {
      id: 'sec-20-13',
      pageNumber: 36,
      sectionNumber: '20.13',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Audyt Realizowanych Wartości i Kalendarza',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        '1. Przeprowadź audyt kalendarza z zeszłego tygodnia.',
        '2. Wylicz procent czasu przeznaczony na poszczególne wartości.',
        '3. Wyeliminuj 1 zbędną czynność pożerającą czas.',
        '4. Zablokuj nienaruszalny czas na najwyższą wartość.'
      ],
      exerciseRef: selfExercisesChapterTwenty[0]
    },
    {
      id: 'sec-20-14',
      pageNumber: 38,
      sectionNumber: '20.14',
      title: 'Warsztat Samorozwojowy: Laboratorium Priorytetyzacji i Granic',
      category: 'cwiczenia',
      readingTimeMinutes: 12,
      paragraphs: [
        'Poniżej znajduje się zestaw ćwiczeń dedykowanych rozwiązywaniu konfliktów wartości, rozbrajaniu zwrotów przymusu oraz nauce asertywnej odmowy.'
      ],
      exerciseRef: selfExercisesChapterTwenty[1]
    },
    {
      id: 'sec-20-15',
      pageNumber: 41,
      sectionNumber: '20.15',
      title: 'Most do Rozdziału 21 oraz Powiązania z Tomem I i II',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'Zdefiniowanie wartości i priorytetów daje nam jasny kompas działania. Aby jednak ten kompas działał w praktyce, musimy wykształcić zdolność do ciągłego monitorowania naszych procesów myślowych i emocjonalnych.',
        'W następnym rozdziale przejdziemy do zwieńczenia pierwszego bloku Tomu III: Świadomości Siebie i Metapoznania — umiejętności patrzenia na własne myśli, emocje i tożsamość z pozycji obiektywnego obserwatora.'
      ]
    },
    {
      id: 'sec-20-16',
      pageNumber: 43,
      sectionNumber: '20.16',
      title: 'Podsumowanie Rozdziału 4: Kluczowe Wglądy',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        '1. Wartości to jakościowe kierunki działania, cele to przystanki na drodze.',
        '2. Prawdziwe wartości poznaje się po alokacji czasu i pieniędzy w kalendarzu.',
        '3. Konflikty wartości wymagają świadomego ustalenia priorytetów na dany etap.',
        '4. Mówienie „nie” narzuconym przymusom jest warunkiem koniecznym autonomii.'
      ]
    },
    {
      id: 'sec-20-17',
      pageNumber: 46,
      sectionNumber: '20.17',
      title: 'Egzamin Końcowy Rozdziału 4: Wartości, Potrzeby i Priorytety',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu Teorii Samodeterminacji, konfliktów wartości i sztuki priorytetyzacji. Poniższy test zawiera pytania analityczne wymagające głębokiego zrozumienia opisywanych procesów.'
      ]
    }
  ]
};
