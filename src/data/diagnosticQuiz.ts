import { QuizQuestion } from '../types/book';

export const DIAGNOSTIC_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Wracasz do domu po 10 godzinach wyczerpującej pracy. W zlewie czeka stos brudnych naczyń, mimo wcześniejszej obietnicy partnera. Co dzieje się w pierwszej chwili?',
    category: 'impulsywnosc',
    options: [
      { label: 'Eksploduję natychmiastowym krzykiem lub zjadliwym wyrzutem – to silniejsze ode mnie.', score: 1, explanation: 'Klasyczny Amygdala Hijack – kora przedczołowa została odcięta przez wyczerpanie wolicjonalne.' },
      { label: 'Czuję falę gorąca i zaciskam zęby, rzucam garnkiem, po czym milczę przez resztę wieczoru.', score: 2, explanation: 'Tłumienie somatyczne: ciało produkuje kortyzol, który nie znajduje konstruktywnego ujścia.' },
      { label: 'Biorę głęboki oddech, uświadamiam sobie swoje zmęczenie i czekam 5 minut przed rozmową.', score: 3, explanation: 'Świadoma pauza neuronawykowa – aktywacja szlaku wolnego kory przedczołowej.' },
      { label: 'Nazywam na głos stan („jestem skrajnie zmęczony i zły”) i proponuję rozmowę po odpoczynku.', score: 4, explanation: 'Mistrzostwo etykietowania emocjonalnego (Affect Labeling) i samoregulacji neurobiologicznej.' }
    ]
  },
  {
    id: 2,
    question: 'Kiedy otwierasz telefon, by sprawdzić kalendarz, a po 25 minutach orientujesz się, że bezmyślnie oglądasz krótkie filmiki w mediach społecznościowych:',
    category: 'impulsywnosc',
    options: [
      { label: 'Zdarza mi się to wielokrotnie w ciągu dnia i czuję bezsilność wobec powiadomień.', score: 1, explanation: 'Układ dopaminergiczny w pełni podporządkowany zmiennemu wzmocnieniu losowemu (RPE).' },
      { label: 'Złoszczę się na siebie, odinstalowuję aplikację, by za dwa dni zainstalować ją ponownie.', score: 2, explanation: 'Próba walki czystą wolą bez przebudowy środowiska i architektury bodźców.' },
      { label: 'Stosuję limity czasowe i staram się trzymać telefon w innym pokoju podczas pracy.', score: 3, explanation: 'Projektowanie tarcia (Friction Design) zmniejsza impulsywne sięganie po ekran.' },
      { label: 'Rozpoznaję, że scrollowanie to ucieczka przed trudną emocją lub zadaniem, i adresuję źródło.', score: 4, explanation: 'Głęboka metapoznawcza autorefleksja nad pierwotną potrzebą psychologiczną.' }
    ]
  },
  {
    id: 3,
    question: 'Podczas zebrania w firmie dyrektor przedstawia nierealny harmonogram. Wszyscy koledzy z zespołu potakują z uśmiechem. Co robisz?',
    category: 'podatnosc_spoleczna',
    options: [
      { label: 'Potakuję z resztą i myślę, że skoro inni milczą, to zapewne ja czegoś nie rozumiem.', score: 1, explanation: 'Pluralistic ignorance i lęk przed wykluczeniem w przedniej korze zakrętu obręczy (dACC).' },
      { label: 'Czuję sprzeciw, ale milczę, a po spotkaniu narzekam z kolegami w korytarzu.', score: 2, explanation: 'Zjawisko konformizmu normatywnego przy jednoczesnym dysonansie poznawczym.' },
      { label: 'Zadaję ostrożne, dyplomatyczne pytanie: „Jak uwzględnimy ewentualne opóźnienia dostawców?”.', score: 3, explanation: 'Zdolność do zaszczepienia sceptycyzmu bez frontalnego ataku na autorytet.' },
      { label: 'Spokojnie przedstawiam faktyczne wyliczenia i alternatywny wariant z troską o cel projektu.', score: 4, explanation: 'Odporność na presję Ascha, konstruktywny dyssens i wysoka dojrzałość merytoryczna.' }
    ]
  },
  {
    id: 4,
    question: 'Wchodzisz do ekskluzywnego sklepu. Sprzedawca częstuje cię pyszną kawą, poświęca 40 minut na doradzanie i przynosi ubrania z magazynu. Nic ci się w pełni nie podoba. Co czujesz?',
    category: 'podatnosc_spoleczna',
    options: [
      { label: 'Kupuję cokolwiek tańszego, bo wstydziłbym się wyjść z pustymi rękami po takim traktowaniu.', score: 1, explanation: 'Porażenie regułą wzajemności i lęk przed oceną społeczną.' },
      { label: 'Kupuję coś niechętnie, a potem żałuję i próbuję to zwrócić lub chowam w szafie.', score: 2, explanation: 'Uległość wobec nieproszonej przysługi i ucieczka przed dyskomfortem długu.' },
      { label: 'Czuję presję, ale zbieram się w sobie i mówię, że muszę się z tym przespać do jutra.', score: 3, explanation: 'Wykorzystanie techniki opóźnienia decyzji jako bariery ochronnej.' },
      { label: 'Szczerze dziękuję za miłą obsługę i wychodzę bez cienia poczucia winy – kawa była kosztem marketingu sklepu.', score: 4, explanation: 'Jasne rozróżnienie bezinteresownej życzliwości od handlowej techniki perswazyjnej.' }
    ]
  },
  {
    id: 5,
    question: 'Nowo poznana osoba w pracy lub życiu osobistym obsypuje cię komplementami, natychmiast chce dzielić wszystkie sekrety i deklaruje, że „jesteście dla siebie stworzeni”. Jak reagujesz?',
    category: 'granice_manipulacja',
    options: [
      { label: 'Czuję zachwyt i ekscytację – nareszcie ktoś, kto mnie w 100% docenia i rozumie!', score: 1, explanation: 'Podatność na love-bombing i głód walidacji zewnętrznej.' },
      { label: 'Czuję lekki niepokój, ale zagłuszam go, nie chcąc wyjść na osobę chłodną i nieufną.', score: 2, explanation: 'Ignorowanie intuicyjnych sygnałów ostrzegawczych z ciała migdałowatego i wyspy.' },
      { label: 'Doceniam życzliwość, ale świadomie utrzymuję spokojne tempo i nie przyspieszam zażyłości.', score: 3, explanation: 'Zdrowa zasada stopniowego budowania zaufania na bazie powtarzalnych zachowań.' },
      { label: 'Włącza mi się radar ostrożności: sprawdzam, czy słowa pokrywają się z czynami i jak traktuje innych.', score: 4, explanation: 'Wysoka świadomość mechanizmów manipulacji i zdrowa autonomia emocjonalna.' }
    ]
  },
  {
    id: 6,
    question: 'Bliska osoba lub szef wmawia ci: „Nigdy ci tego nie obiecywałem, znowu coś sobie uroiłeś, chyba pamięć ci szwankuje”. Choć jesteś pewien swoich wspomnień, co się dzieje?',
    category: 'granice_manipulacja',
    options: [
      { label: 'Zaczynam panikować i zastanawiam się, czy rzeczywiście tracę pamięć i zdrowy rozsądek.', score: 1, explanation: 'Sukces gaslightingu: zwątpienie w percepcję własnych zmysłów.' },
      { label: 'Wdaję się w histeryczną kłótnię, przynoszę dziesiątki dowodów, wypruwając sobie żyły z bezsilności.', score: 2, explanation: 'Wpadnięcie w pułapkę tłumaczenia się i karmienia manipulatora energią emocjonalną.' },
      { label: 'Wracam do notatek lub maili, by potwierdzić fakt dla samego siebie, nie wchodząc w pyskówki.', score: 3, explanation: 'Kotwiczenie rzeczywistości (Reality Anchoring) na obiektywnych dowodach.' },
      { label: 'Spokojnie stwierdzam: „Moja pamięć jest jasna i nie pozwolę jej kwestionować. Rozmawiajmy o faktach”.', score: 4, explanation: 'Żelazne granice osobiste połączone z techniką szarego kamienia.' }
    ]
  },
  {
    id: 7,
    question: 'Zainwestowałeś 5 000 zł i 3 miesiące pracy w kurs/projekt, który po pierwszym miesiącu okazuje się kompletnym niewypałem i stratą czasu. Co robisz?',
    category: 'racjonalnosc',
    options: [
      { label: 'Ciągnę to do samego końca, bo „nie mogę zmarnować tych 5 000 zł i tylu godzin”.', score: 1, explanation: 'Klasyczna pułapka utopionych kosztów (Sunk Cost Fallacy) – dokładanie do strat.' },
      { label: 'Czuję ogromne wyrzuty sumienia, męczę się z tym, ale odpuszczam dopiero w połowie.', score: 2, explanation: 'Częściowa świadomość, okupiona wysokim kosztem psychofizycznym.' },
      { label: 'Robię bilans: czy włożenie kolejnych godzin przyniesie jakikolwiek realny zwrot? Jeśli nie – zamykam.', score: 3, explanation: 'Rachunek marginalny i myślenie o kosztach alternatywnych.' },
      { label: 'Zamykam projekt natychmiast (Zero-Base Thinking). Pieniądze przepadły bezpowrotnie, czas jest bezcenny.', score: 4, explanation: 'Czysta racjonalność ekonomii behawioralnej i brak awersji do zaksięgowania błędu.' }
    ]
  },
  {
    id: 8,
    question: 'Trafiasz na wstrząsający artykuł w internecie, który całkowicie przeczy twoim poglądom politycznym lub światopoglądowym. Jaka jest twoja pierwsza reakcja?',
    category: 'racjonalnosc',
    options: [
      { label: 'Natychmiast myślę: „Co za stek kłamstw opłacony przez propagandę!” i zamykam kartę.', score: 1, explanation: 'Efekt potwierdzenia i mechanizm obronny przed zagrożeniem tożsamości.' },
      { label: 'Czytam tylko po to, by znaleźć w tekście błędy i wyśmiać autora w komentarzach.', score: 2, explanation: 'Motywowane rozumowanie (motivated reasoning) nakierowane na utwierdzenie ego.' },
      { label: 'Czytam z ciekawością, weryfikując źródła i dane statystyczne, na które powołuje się autor.', score: 3, explanation: 'Naukowa dociekliwość i gotowość do konfrontacji z dysonansem.' },
      { label: 'Robię test Ideological Turing: staram się sformułować argumenty drugiej strony tak precyzyjnie, by sami się z nimi zgodzili.', score: 4, explanation: 'Najwyższy poziom pokory poznawczej i epistemicznej elastyczności.' }
    ]
  },
  {
    id: 9,
    question: 'Rozmawiasz z kimś o drażliwym temacie. Rozmówca krzyżuje ramiona, odchyla się do tyłu, zaciska usta i unika kontaktu wzrokowego, mówiąc: „Wszystko jest w porządku”. Co robisz?',
    category: 'empatia',
    options: [
      { label: 'Uznaję, że skoro mówi, że w porządku, to nie ma tematu i kontynuuję swój monolog.', score: 1, explanation: 'Ślepota na mikrosygnały niewerbalne i brak rezonansu afektywnego.' },
      { label: 'Irytuję się i rzucam z pretensją: „Przecież widzę, że masz fochy, powiedz wreszcie o co ci chodzi!”.', score: 2, explanation: 'Agresywna interpretacja eskalująca obronność ciała migdałowatego rozmówcy.' },
      { label: 'Dostrzegam napięcie, zmieniam ton głosu na łagodniejszy i daję mu przestrzeń na milczenie.', score: 3, explanation: 'Intuicyjna kalibracja wokalna i szacunek dla granic komfortu rozmówcy.' },
      { label: 'Stosuję etykietowanie: „Czuję, że to co powiedziałem, mogło zabrzmieć zbyt surowo albo wywołać niepokój...”.', score: 4, explanation: 'Zaawansowana empatia taktyczna (Chris Voss / NVC) natychmiast redukująca opór.' }
    ]
  },
  {
    id: 10,
    question: 'Ktoś bliski przychodzi do ciebie ze łzami w oczach, opowiadając o trudnej porażce w pracy. Jaka jest twoja pierwsza naturalna odpowiedź?',
    category: 'empatia',
    options: [
      { label: '„Nie przejmuj się, jutro będzie lepiej! Wszystko dzieje się po coś!”.', score: 1, explanation: 'Toksyczny optymizm – unieważnienie bólu i ucieczka przed dyskomfortem cudzego cierpienia.' },
      { label: 'Od razu zaczynam analizować: „A dlaczego nie zrobiłeś tego inaczej? Powinieneś jutro napisać do dyrektora...”.', score: 2, explanation: 'Odruch naprawiacza (Righting Reflex) – kora przedczołowa wkracza tam, gdzie potrzebna jest więź emocjonalna.' },
      { label: 'Siadam obok, obejmuję i mówię: „Jestem przy tobie. To musiało być okropnie bolesne”.', score: 3, explanation: 'Czysta obecność i walidacja emocjonalna na poziomie neuronów lustrzanych.' },
      { label: 'Daję przestrzeń, pytam: „Chcesz, żebym po prostu cię wysłuchał i przytulił, czy wolisz razem poszukać rozwiązań?”.', score: 4, explanation: 'Złoty standard wsparcia: szacunek dla aktualnego stanu neurobiologicznego drugiej osoby.' }
    ]
  }
];

export interface DiagnosticResultCategory {
  category: string;
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
  status: 'wymaga_uwagi' | 'umiarkowany' | 'mistrzowski';
  recommendation: string;
  chapterRef: string;
}

export function calculateDiagnosticResult(answers: Record<number, number>): {
  totalScore: number;
  maxTotalScore: number;
  overallPercentage: number;
  archetype: string;
  archetypeDesc: string;
  categories: DiagnosticResultCategory[];
} {
  const catScores: Record<string, { total: number; count: number }> = {
    impulsywnosc: { total: 0, count: 0 },
    podatnosc_spoleczna: { total: 0, count: 0 },
    granice_manipulacja: { total: 0, count: 0 },
    racjonalnosc: { total: 0, count: 0 },
    empatia: { total: 0, count: 0 }
  };

  let totalScore = 0;
  let maxTotalScore = DIAGNOSTIC_QUESTIONS.length * 4;

  DIAGNOSTIC_QUESTIONS.forEach(q => {
    const chosenScore = answers[q.id] || 2; // fallback
    catScores[q.category].total += chosenScore;
    catScores[q.category].count += 1;
    totalScore += chosenScore;
  });

  const overallPercentage = Math.round((totalScore / maxTotalScore) * 100);

  const categoryNames: Record<string, { name: string; chapter: string }> = {
    impulsywnosc: { name: 'Neuro-Samoregulacja i Odporność na Bodźce', chapter: 'Rozdział 1 & 2' },
    podatnosc_spoleczna: { name: 'Odporność na Presję Grupy i Wzajemność', chapter: 'Rozdział 3 & 4' },
    granice_manipulacja: { name: 'Radar Manipulacji i Granice Osobiste', chapter: 'Rozdział 5 & 6' },
    racjonalnosc: { name: 'Klarowność Myślenia i Ekonomia Behawioralna', chapter: 'Rozdział 7 & 8' },
    empatia: { name: 'Empatia Taktyczna i Kalibracja Relacji', chapter: 'Rozdział 9 & 10' }
  };

  const categories: DiagnosticResultCategory[] = Object.keys(catScores).map(catKey => {
    const { total, count } = catScores[catKey];
    const max = count * 4;
    const pct = Math.round((total / max) * 100);
    let status: 'wymaga_uwagi' | 'umiarkowany' | 'mistrzowski' = 'umiarkowany';
    let recommendation = '';

    if (pct < 50) {
      status = 'wymaga_uwagi';
      recommendation = 'Twój układ nerwowy często reaguje automatycznie pod wpływem nagłego stresu lub presji. Warto wdrożyć protokoły pauzy i fizjologiczne kotwice.';
    } else if (pct < 80) {
      status = 'umiarkowany';
      recommendation = 'Dobra świadomość mechanizmów, jednak w stanach przemęczenia lub wysokiej stawki dawne odruchy potrafią przejąć stery. Skup się na profilaktyce regeneracyjnej.';
    } else {
      status = 'mistrzowski';
      recommendation = 'Wysoka dojrzałość poznawczo-emocjonalna. Twoja kora przedczołowa skutecznie kalibruje reakcje, zapewniając spokój i szacunek dla granic.';
    }

    return {
      category: catKey,
      name: categoryNames[catKey].name,
      score: total,
      maxScore: max,
      percentage: pct,
      status,
      recommendation,
      chapterRef: categoryNames[catKey].chapter
    };
  });

  let archetype = 'Świadomy Obserwator w Drodze do Mistrzostwa';
  let archetypeDesc = 'Posiadasz solidne fundamenty intuicyjnej psychologii, jednak codzienna presja, przemęczenie i zaawansowane techniki perswazyjne innych ludzi bywają dla Ciebie wyzwaniem. Ta książka da Ci precyzyjne neuro-narzędzia, by zamienić niepewność w wewnętrzną suwerenność.';

  if (overallPercentage >= 85) {
    archetype = 'Suwerenny Strateg i Empatyczny Lider';
    archetypeDesc = 'Cechuje Cię rzadka równowaga pomiędzy głębokim wglądem neuronaukowym, żelaznymi granicami a ciepłą, niewymuszoną empatią. Niniejszy podręcznik posłuży Ci jako krystalizacja i usystematyzowanie Twoich naturalnych talentów.';
  } else if (overallPercentage < 55) {
    archetype = 'Wrażliwy Poszukiwacz Równowagi';
    archetypeDesc = 'Twój układ nerwowy bardzo intensywnie odbiera bodźce ze świata, przez co często płacisz wysoką cenę w postaci wyczerpania decyzyjnego, poczucia winy lub trudności w mówieniu „nie”. Rozdziały poświęcone układowi limbicznemu i granicom przyniosą Ci natychmiastową ulgę.';
  }

  return {
    totalScore,
    maxTotalScore,
    overallPercentage,
    archetype,
    archetypeDesc,
    categories
  };
}
