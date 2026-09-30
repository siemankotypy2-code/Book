import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

export const chapterSeventeenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii społecznej i poznawczej pojęcie „obrazu siebie” (self-concept) różni się od „tożsamości osobistej” tym, że:',
    topic: 'Struktura Tożsamości',
    sectionRef: 'Sekcja 17.1',
    options: [
      { label: 'A', text: 'Obraz siebie to genetycznie zdeterminowany odruch, podczas gdy tożsamość zależy wyłącznie od wykształcenia.', isCorrect: false },
      { label: 'B', text: 'Obraz siebie to całokształt przekonań i wiedzy deklaratywnej na własny temat, podczas gdy tożsamość osobista dotyczy podmiotowego poczucia odrębności, spójności i trwania w czasie.', isCorrect: true },
      { label: 'C', text: 'Tożsamość osobista znika po ukończeniu 25. roku życia i ustępuje miejsca obrazowi siebie.', isCorrect: false },
      { label: 'D', text: 'Obraz siebie jest pojęciem wyłącznie z teatru, a tożsamość nie występuje w naukach społecznych.', isCorrect: false }
    ],
    explanation: 'Obraz siebie (self-concept) gromadzi wiedzę opisaną słowami („jaki jestem, co potrafię”), podczas gdy tożsamość daje poczucie bycia tym samym podmiotem doświadczającym przeżyć mimo upływu lat.',
    keyTakeaway: 'Obraz siebie to mapa właściwości, tożsamość to poczucie bycia autorem i gospodarzem tej mapy.'
  },
  {
    id: 2,
    question: 'Na czym polega zjawisko self-stereotyping (samospełniającego się etykietowania tożsamościowego)?',
    topic: 'Etykiety i Schematy Tożsamościowe',
    sectionRef: 'Sekcja 17.3',
    options: [
      { label: 'A', text: 'Przyjęcie przez jednostkę etykiety roli lub cechy (np. „jestem umysłem ścisłym, nie potrafię rozmawiać z ludźmi”) i bezwiedne dostosowanie zachowania do wpisanych w nią ograniczeń.', isCorrect: true },
      { label: 'B', text: 'Kupowanie produktów z wyłącznie jedną marką.', isCorrect: false },
      { label: 'C', text: 'Trwałe unikanie kontaktów z osobami mówiącymi w innych językach.', isCorrect: false },
      { label: 'D', text: 'Przekonanie, że wszyscy ludzie na świecie odczuwają dokładnie te same emocje.', isCorrect: false }
    ],
    explanation: 'Umysł dąży do spójności. Gdy przyjmujesz etykietę „słabego mówcy”, próbę wystąpienia publicznego układy obronne traktują jako złamanie wewnętrznego skryptu, wywołując paraliżujący stres.',
    keyTakeaway: 'Etykieta staje się samospełniającą się przepowiednią, gdy pomylisz chwilowy brak nawyku ze sztywną cechą.'
  },
  {
    id: 3,
    question: 'W jaki sposób Domyślna Sieć Neuronalna (Default Mode Network – DMN) uczestniczy w tworzeniu narracji autobiograficznej?',
    topic: 'Neuronauka Tożsamości',
    sectionRef: 'Sekcja 17.6',
    options: [
      { label: 'A', text: 'Steruje wyłącznie ruchem gałek ocznych podczas snu fazy REM.', isCorrect: false },
      { label: 'B', text: 'Łączy wspomnienia z hipokampa, przewidywania z koryprzedczołowej i wycenę emocjonalną, tworząc ciągły wewnętrzny monolog i opowieść o tym, kim jesteśmy.', isCorrect: true },
      { label: 'C', text: 'Aktywuje się wyłącznie w trakcie rozwiązywania równań matematycznych.', isCorrect: false },
      { label: 'D', text: 'Odpowiada za automatyczne skurcze serca w sytuacjach spoczynku.', isCorrect: false }
    ],
    explanation: 'Gdy nie rozwiązujemy konkretnego zadania celowego, DMN generuje monolog autobiograficzny, rekonstruując znaczenie minionych zdarzeń i projektując przyszłość.',
    keyTakeaway: 'Tożsamość jest wynikiem ciągłej pracy rekonstrukcyjnej DMN, a nie jednorazowo odlaną rzeźbą.'
  },
  {
    id: 4,
    question: 'Czym różni się podejście esencjalistyczne do tożsamości („odkrywanie prawdziwego ja”) od podejścia procesowo-konstruktywistycznego?',
    topic: 'Konstruktywizm vs Esencjalizm',
    sectionRef: 'Sekcja 17.4',
    options: [
      { label: 'A', text: 'Esencjalizm traktuje tożsamość jako stałą, ukrytą cechę do odkopania, podczas gdy konstruktywizm widzi ją jako otwarty proces kształtowany przez decyzje, nawyki i środowisko.', isCorrect: true },
      { label: 'B', text: 'Konstruktywizm zakłada, że człowiek rodzi się z gotowym zestawem przekonań zapisanych w genach.', isCorrect: false },
      { label: 'C', text: 'Esencjalizm to technika ćwiczeń oddechowych stosowana w sporcie.', isCorrect: false },
      { label: 'D', text: 'Oba podejścia twierdzą, że zachowanie człowieka nie ma żadnego związku z doświadczeniami.', isCorrect: false }
    ],
    explanation: 'Szukanie „gotowego ja” wywołuje bierność i lęk przed błędem. Podejście procesowe pozwala aktywnie budować pożądane zachowania w oparciu o wartości.',
    keyTakeaway: 'Nie szukaj prawdziwego siebie w próżni — buduj wartościowe nawyki w świecie realnym.'
  },
  {
    id: 5,
    question: 'Dlaczego sformułowanie „W tej sytuacji odłożyłem zadanie z powodu braku jasnych wytycznych” jest sprawniejsze rozwojowo niż „Jestem leniwy”?',
    topic: 'Gramatyka Wewnętrznego Monologu',
    sectionRef: 'Sekcja 17.3',
    options: [
      { label: 'A', text: 'Ponieważ jest dłuższe i brzmi łagodniej.', isCorrect: false },
      { label: 'B', text: 'Przesuwa ocenę z tożsamościowej etykiety na opis behawioralno-kontekstowy, otwierając przestrzeń do konkretnej modyfikacji działania przez grzbietowo-boczną korę przedczołową (dlPFC).', isCorrect: true },
      { label: 'C', text: 'Zwalnia człowieka z wszelkiej odpowiedzialności za uzyskany wynik.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, obydwa zdania wywołują dokładnie ten sam poziom stresu.', isCorrect: false }
    ],
    explanation: 'Globalne etykiety („jestem leniwy”) wywołują wstyd i paraliż obronny, podczas gdy opis kontekstu i braku umiejętności pozwala zaplanować konkretne kroki zaradcze.',
    keyTakeaway: 'Zamieniaj tożsamościowe wyroki na procesowe opisy zachowania i kontekstu.'
  },
  {
    id: 6,
    question: 'W teorii dramaturgicznej Ervinga Goffmana pojęcia „scena” (front stage) i „kulisy” (backstage) wskazują, że:',
    topic: 'Teatr Społeczny i Maski',
    sectionRef: 'Sekcja 17.9',
    options: [
      { label: 'A', text: 'Ludzie odgrywają role społeczne dopasowane do oczekiwań publiczności, a brak dostępu do kulis, gdzie można zrzucić rolę, prowadzi do wyczerpania i alienacji.', isCorrect: true },
      { label: 'B', text: 'Każdy człowiek powinien pracować wyłącznie w teatrze zawodowym.', isCorrect: false },
      { label: 'C', text: 'Aktorzy teatralni nie odczuwają żadnego stresu przed występami.', isCorrect: false },
      { label: 'D', text: 'Zachowanie na scenie jest w 100% zdetermnowane przez poziom cukru we krwi.', isCorrect: false }
    ],
    explanation: 'Kulisy są niezbędne dla regeneracji układu nerwowego. Brak prywatnej przestrzeni, w której nie trzeba spełniać wymogów roli, powoduje przewlekłą hiperaktywację współczulną.',
    keyTakeaway: 'Dbaj o kulisy, w których nie musisz odgrywać żadnego teatru przed publicznością.'
  },
  {
    id: 7,
    question: 'Czym charakteryzuje się tożsamość autonomiczna w odróżnieniu od tożsamości zorientowanej na zewnętrzną walidację (External Identity Validation)?',
    topic: 'Tożsamość Autonomiczna',
    sectionRef: 'Sekcja 17.12',
    options: [
      { label: 'A', text: 'Tożsamość autonomiczna opiera się na wewnętrznym kompasie wartości i własnych standardach, podczas gdy zewnętrzna waha się w zależności od sygnałów aprobaty, statusu i lajków.', isCorrect: true },
      { label: 'B', text: 'Tożsamość autonomiczna wymaga zerwania wszelkich kontaktów ze społeczeństwem.', isCorrect: false },
      { label: 'C', text: 'Tożsamość zewnętrzna występuje wyłącznie u dzieci poniżej 3 roku życia.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy w stabilności psychicznej między oboma typami.', isCorrect: false }
    ],
    explanation: 'Ugruntowanie wewnętrzne pozwala zachować spokój i poczucie sensu nawet w obliczu krytyki lub odrzucenia przez grupę.',
    keyTakeaway: 'Oparcie tożsamości na aprobacie otoczenia to budowa domu na cudzym fundamencie.'
  },
  {
    id: 8,
    question: 'Jak według badań Carol Dweck osoba o nastawieniu na rozwój (Growth Mindset) interpretuje porażkę w wyzwaniu?',
    topic: 'Growth Mindset a Tożsamość',
    sectionRef: 'Sekcja 17.13',
    options: [
      { label: 'A', text: 'Jako informację zwrotną o niedoskonałości użytej strategii lub braku włożonego wysiłku, a nie jako ostateczny wyrok na temat swoich możliwości i wartości.', isCorrect: true },
      { label: 'B', text: 'Jako dowód na to, że urodziła się bez odpowiednich genów.', isCorrect: false },
      { label: 'C', text: 'Jako znak, że powinna natychmiast przerwać jakiekolwiek działania naukowe.', isCorrect: false },
      { label: 'D', text: 'Jako potwierdzenie, że oceny innych są zawsze fałszywe.', isCorrect: false }
    ],
    explanation: 'Niewłaściwa metoda to stan przejściowy, a nie cecha tożsamościowa. Growth Mindset zapobiega utożsamianiu popełnionego błędu z własną wartością.',
    keyTakeaway: 'Porażka to zdarzenie w czasie, a nie cecha człowieka.'
  },
  {
    id: 9,
    question: 'Na czym polega koncepcja „jaźni odzwierciedlonej” (Looking-Glass Self) Charlesa Cooleya?',
    topic: 'Jaźń Odzwierciedlona',
    sectionRef: 'Sekcja 17.7',
    options: [
      { label: 'A', text: 'Budujemy wyobrażenie o sobie na podstawie tego, jak sądzimy, że widzimy i oceniamy nas znaczący ludzie z naszego otoczenia.', isCorrect: true },
      { label: 'B', text: 'Sprawdzamy swój wygląd w lustrze trzy razy dziennie.', isCorrect: false },
      { label: 'C', text: 'Kopiujemy styl ubierania bohaterów z popularnych seriali.', isCorrect: false },
      { label: 'D', text: 'Unikamy patrzenia w oczy osobom starszym.', isCorrect: false }
    ],
    explanation: 'Sygnały i reakcje otoczenia działają jak społeczne zwierciadło, z którego umysł rekonstruuje wczesne zarysy własnego self-concept.',
    keyTakeaway: 'Zbadaj, czyje oczy patrzą na Ciebie, gdy oceniasz siebie przed lustrem.'
  },
  {
    id: 10,
    question: 'Co dzieje się, gdy mechanizm obrony obrazu siebie (Identity Preservation Bias) napotyka na twardy fakt podważający dotychczasowe mniemanie o sobie?',
    topic: 'Obrona Obrazu Siebie',
    sectionRef: 'Sekcja 17.11',
    options: [
      { label: 'A', text: 'Umysł uruchamia zniekształcenia poznawcze, racjonalizacje i wyparcie, by chronić spójność wyobrażenia o własnej szlachetności lub mądrości.', isCorrect: true },
      { label: 'B', text: 'Umysł natychmiast i bezstresowo porzuca wszystkie błędne poglądy.', isCorrect: false },
      { label: 'C', text: 'Nastepuje automatyczne podwojenie tętna bez reakcji emocjonalnej.', isCorrect: false },
      { label: 'D', text: 'Kora przedczołowa wyłącza się na stałe.', isCorrect: false }
    ],
    explanation: 'Dla układu limbicznego zagrożenie dla spójności narracji o sobie jest traktowane równie poważnie jak fizyczne niebezpieczeństwo.',
    keyTakeaway: 'Obiektywna prawda bywa odrzucana na ołtarzu ochrony własnego ego.'
  },
  {
    id: 11,
    question: 'W koncepcji E. Tory Higginsa (Self-Discrepancy Theory) rozbieżność między „ja realnym” a „ja powinnościowym” (Ought Self) wywołuje głównie:',
    topic: 'Teoria Rozbieżności Ja',
    sectionRef: 'Sekcja 17.14',
    options: [
      { label: 'A', text: 'Poczucie niepokoju, lęku, presji oraz zagrożenia brakiem spełnienia narzuconych wymogów i obowiązków.', isCorrect: true },
      { label: 'B', text: 'Radość i nagły przypływ energii fizycznej.', isCorrect: false },
      { label: 'C', text: 'Poczucie głębokiej senności po posiłku.', isCorrect: false },
      { label: 'D', text: 'Zwiększenie odporności immunologicznej.', isCorrect: false }
    ],
    explanation: 'Rozbieżność z ja idealnym wywołuje przygnębienie i smutek, zaś z ja powinnościowym — lęk i poczucie winy wynikające z nieprzystawania do norm.',
    keyTakeaway: 'Rozpoznaj, czy kieruje Tobą własne pragnienie wzrostu, czy lęk przed niedopełnieniem obowiązku.'
  },
  {
    id: 12,
    question: 'Co charakteryzuje tożsamość procesową (Evolutive Self) w przeciwieństwie do tożsamości statycznej?',
    topic: 'Tożsamość Procesowa',
    sectionRef: 'Sekcja 17.15',
    options: [
      { label: 'A', text: 'Traktowanie siebie jako ewoluującego układu, który modyfikuje swoje zachowania i przekonania w odpowiedzi na nowe doświadczenia, bez poczucia, że zmiana jest zdradą samego siebie.', isCorrect: true },
      { label: 'B', text: 'Częsta zmiana danych osobowych i dokumentów tożsamości.', isCorrect: false },
      { label: 'C', text: 'Brak jakiejkolwiek pamięci o własnym dzieciństwie.', isCorrect: false },
      { label: 'D', text: 'Niezdolność do podejmowania jakichkolwiek zobowiązań społecznych.', isCorrect: false }
    ],
    explanation: 'Tożsamość procesowa pozwala uczyć się i adaptować bez lęku, że zmiana zdania zniszczy fundament naszego jestestwa.',
    keyTakeaway: 'Możesz zmieniać poglądy i nawyki, pozostając wiernym wartościom rozwoju.'
  },
  {
    id: 13,
    question: 'Jakie zagrożenie wiąże się ze zjawiskiem over-identification z jedną rolą społeczną (np. byciem menedżerem lub sportowcem)?',
    topic: 'Dywersyfikacja Tożsamości',
    sectionRef: 'Sekcja 17.10',
    options: [
      { label: 'A', text: 'W przypadku utraty tej roli (np. zwolnienie z pracy, kontuzja) następuje głęboki kryzys egzystencjalny i załamanie poczucia własnej wartości.', isCorrect: true },
      { label: 'B', text: 'Automatyczne opanowanie trzech języków obcych.', isCorrect: false },
      { label: 'C', text: 'Trwały spadek ciśnienia tętniczego krwi.', isCorrect: false },
      { label: 'D', text: 'Brak możliwości korzystania z komputera.', isCorrect: false }
    ],
    explanation: 'Tożsamość oparta na jednym filarze jest skrajnie niestabilna. Wywrócenie tego filaru niszczy całe poczucie sensu życia.',
    keyTakeaway: 'Buduj tożsamość na wielu niezależnych filarach: wartościach, relacjach, pasjach i umiejętnościach.'
  },
  {
    id: 14,
    question: 'Na czym polega funkcja sprawcza tożsamości w koncepcji Dana McAdamsa (Tożsamość Narracyjna)?',
    topic: 'Tożsamość Narracyjna McAdamsa',
    sectionRef: 'Sekcja 17.5',
    options: [
      { label: 'A', text: 'Organizowanie wydarzeń z życia w spójną opowieść, w której jednostka występuje jako aktywny podmiot wyciągający wnioski, a nie tylko bierna ofiara okoliczności.', isCorrect: true },
      { label: 'B', text: 'Pisanie powieści fikcyjnych pod pseudonimem literackim.', isCorrect: false },
      { label: 'C', text: 'Zapamiętywanie wyłącznie numerów telefonów i haseł.', isCorrect: false },
      { label: 'D', text: 'Mierzenie tętna przed snem.', isCorrect: false }
    ],
    explanation: 'Narracja autobiograficzna decyduje o tym, czy przeszłe trudności interpretujemy jako paraliżującą krzywdę, czy jako bolesną, lecz cenną lekcję dojrzałości.',
    keyTakeaway: 'Nie zmienisz minionych faktów, ale masz pełny wpływ na rolę, jaką sobie w nich przypiszesz.'
  },
  {
    id: 15,
    question: 'Jak konflikt ról społecznych (Role Conflict) wpływa na funkcjonowanie poznawcze jednostki?',
    topic: 'Konflikt Ról',
    sectionRef: 'Sekcja 17.10',
    options: [
      { label: 'A', text: 'Generuje napięcie decyzyjne i poczucie winy, gdy oczekiwania wpisane w jedną rolę (np. sprawiedliwy szef) stoją w sprzeczności z drugą (np. lojalny przyjaciel).', isCorrect: true },
      { label: 'B', text: 'Automatycznie podwaja zasoby uwagi w kory przedczołowej.', isCorrect: false },
      { label: 'C', text: 'Eliminuje potrzebę podejmowania jakichkolwiek decyzji życiowych.', isCorrect: false },
      { label: 'D', text: 'Sprawia, że człowiek przestaje odczuwać zmęczenie.', isCorrect: false }
    ],
    explanation: 'Bez jasnej hierarchii wartości sprzeczne role wywołują paraliż decyzyjny i ciągłe poczucie, że kogoś się zawodzi.',
    keyTakeaway: 'Nadrzędny kompas wartości jest zwrotnicą pozwalającą nawigować w konflikcie ról.'
  },
  {
    id: 16,
    question: 'Jaka jest główna różnica między tożsamością osobistą a tożsamością społeczną (SJT - Social Identity Theory, Tajfel & Turner)?',
    topic: 'Tożsamość Społeczna Tajfela',
    sectionRef: 'Sekcja 17.8',
    options: [
      { label: 'A', text: 'Tożsamość osobista opiera się na indywidualnych cechach i historii, a społeczna na przynależności do grup i utożsamianiu się z ich normami oraz wizerunkiem.', isCorrect: true },
      { label: 'B', text: 'Tożsamość społeczna występuje wyłącznie u polityków.', isCorrect: false },
      { label: 'C', text: 'Tożsamość osobista niszczy relacje rodzinne.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnych różnic, oba terminy oznaczają to samo.', isCorrect: false }
    ],
    explanation: 'Tożsamość społeczna pozwala odczuwać dumę lub wstyd z powodu osiągnięć grupy, do której przynależymy (grupa własna vs inna).',
    keyTakeaway: 'Grupy, do których dołączasz, cicho meblują Twoją tożsamość społeczną.'
  },
  {
    id: 17,
    question: 'Jak w praktyce działa protokół redefinicji narracji autobiograficznej?',
    topic: 'Praktyka Redefinicji',
    sectionRef: 'Sekcja 17.17',
    options: [
      { label: 'A', text: 'Przeformułowuje trudne doświadczenia z pozycji biernej ofiary na pozycję podmiotu, który przetrwał, wyciągnął wnioski i zbudował nowe zasoby.', isCorrect: true },
      { label: 'B', text: 'Polega na wymazywaniu przykrych wspomnień za pomocą hipnozy.', isCorrect: false },
      { label: 'C', text: 'Nakazuje winą za własne niepowodzenia obarczać wyłącznie otoczenie.', isCorrect: false },
      { label: 'D', text: 'Zahtewa odrzucenie wszelkiej odpowiedzialności za przyszłe decyzje.', isCorrect: false }
    ],
    explanation: 'Re-framing przywraca poczucie sprawczości w kory przedczołowej, pozwalając przekształcić traumę lub porażkę w zasób rozwojowy.',
    keyTakeaway: 'Twoja historia zależy od tego, gdzie postawisz akcent sprawczy.'
  },
  {
    id: 18,
    question: 'W jaki sposób otoczenie społeczne może działać jako kotwica utrudniająca zmianę tożsamościową?',
    topic: 'Tożsamość a Środowisko',
    sectionRef: 'Sekcja 17.8',
    options: [
      { label: 'A', text: 'Otoczenie oczekuje powtarzalności dotychczasowych ról i etykiet, wywierając presję na powrót do starych zachowań, gdy próbujesz je zmienić.', isCorrect: true },
      { label: 'B', text: 'Otoczenie zawsze entuzjastycznie wspiera każdą zmianę nawyków.', isCorrect: false },
      { label: 'C', text: 'Środowisko nie ma żadnego wpływu na poczucie spójności jednostki.', isCorrect: false },
      { label: 'D', text: 'Ludzie wokół nas pamiętają tylko nasze ostatnie 5 minut życia.', isCorrect: false }
    ],
    explanation: 'Ludzie z otoczenia dążą do przewidywalności. Zmiana Twojej roli zmusza ich do renegocjacji własnych pozycji, co wywołuje opór.',
    keyTakeaway: 'Zmiana tożsamości często wymaga renegocjacji lub zmiany środowiska społecznego.'
  },
  {
    id: 19,
    question: 'Czym grozi traktowanie własnych poglądów politycznych lub światopoglądowych jako absolutnego filaru tożsamości?',
    topic: 'Tożsamość Ideologiczna',
    sectionRef: 'Sekcja 17.11',
    options: [
      { label: 'A', text: 'Każda krytyka poglądu jest odbierana jako bezpośredni atak biologiczny na własne ja, co wyłącza krytyczne myślenie i generuje agresję obronną.', isCorrect: true },
      { label: 'B', text: 'Prowadzi do natychmiastowego wzrostu inteligencji płynnej.', isCorrect: false },
      { label: 'C', text: 'Zapobiega wszelkim błędom logicznym w dyskusji.', isCorrect: false },
      { label: 'D', text: 'Gwarantuje idealne samopoczucie psychiczne.', isCorrect: false }
    ],
    explanation: 'Gdy pogląd staje się tożsamością, zmiana zdania pod wpływem nowych faktów jest odczuwana jako samounicestwienie.',
    keyTakeaway: 'Trzymaj swoje opinie słabo, a wartości mocno.'
  },
  {
    id: 20,
    question: 'Jaka jest rola mikrokroków behawioralnych w budowaniu nowej tożsamości według koncepcji dowodów tożsamościowych?',
    topic: 'Dowody Tożsamościowe',
    sectionRef: 'Sekcja 17.17',
    options: [
      { label: 'A', text: 'Dostarczają mózgowi realnych, empirycznych dowodów z działania, które krok po kroku aktualizują wiedzę w DMN o tym, kim jesteśmy.', isCorrect: true },
      { label: 'B', text: 'Służą do chwalenia się przed znajomymi w mediach społecznościowych.', isCorrect: false },
      { label: 'C', text: 'Działają wyłącznie wtedy, gdy wykonujemy je raz na pięć lat.', isCorrect: false },
      { label: 'D', text: 'Nie mają żadnego znaczenia w porównaniu z samą deklaracją ustną.', isCorrect: false }
    ],
    explanation: 'Umysł nie wierzy pustym afirmacjom, lecz dowodom behawioralnym. Każde powtórzone działanie to głos oddany na nową wersję siebie.',
    keyTakeaway: 'Nie przekonuj siebie słowami — dostarcz umysłowi dowodów z działania.'
  }
];

export const caseStudiesChapterSeventeen: CaseStudy[] = [
  {
    id: 'studium-17-1-pułapka-etykiety',
    title: 'W więzieniu własnego skryptu: Jak etykieta „analitycznej introwertyczki” zablokowała awans Marty',
    subtitle: 'Samospełniająca się przepowiednia tożsamościowa i dekonstrukcja skryptu „ja taka jestem”',
    protagonist: 'Marta, 34 lata, główna analityczka danych w firmie technologicznej',
    context: 'Marta przez lata powtarzała zespołowi i sobie: „Jestem czystym introwertykiem i umysłem ścisłym, nie nadaję się do wystąpień i kierowania ludźmi”. Kiedy pojawiła się szansa awansu na stanowisko dyrektorskie, Marta nie złożyła aplikacji, mimo że merytorycznie przewyższała wszystkich kandydatów.',
    story: [
      'Marta od czasów szkolnych słyszała od nauczycieli i rodziców: „Marta jest cicha, dobrze liczy, ale z ludźmi się nie wychyla”. Przyjęła tę etykietę jako niezmienną prawdę biologiczną. Z czasem zbudowała wokół niej całą swoją tożsamość: ubierała się w stonowane kolory, unikała firmowych wyjść i przekazywała prezentowanie wyników kolegom.',
      'Gdy zarząd ogłosił rekrutację na stanowisko VP of Analytics, przełożony Marty powiedział jej wprost: „Marta, masz najlepsze wyniki i unikalną wiedzę. Zgłoś się”. W mózgu Marty wybuchła panika tożsamościowa. Zamiast ucieszyć się z uznania, odczuła silny dysonans: „Ja dyrektorem? Przecież dyrektor musi czarować tłumy, błyszczeć i dominować. To zupełnie nie jestem ja”.',
      'Marta nie złożyła dokumentów. Aplikację złożył za to jej młodszy kolega, Robert, osoba o znacznie mniejszych kompetencjach merytorycznych, lecz traktująca siebie jako „urodzonego lidera”. Po awansie Roberta Marta czuła rosnącą frustrację i żal, wykonując pod jego dyktando zadania, które sama wymyśliła.',
      'Dopiero podczas pracy z psychologiem Marta zrozumiała, że pomyliła swoje wyuczone zachowania nawykowe z niezmienną cechą tożsamości. Etykieta „cichej analityczki” służyła jej przez lata jako wygodna tarcza chroniąca przed lękiem przed oceną.'
    ],
    dialogue: [
      { speaker: 'Przełożony', text: 'Marta, zgłoś się na VP. Masz największą wiedzę w tym dziale.', subtext: 'Zewnętrzne uznanie kompetencji i próba przełamania etykiety.' },
      { speaker: 'Marta (w myślach)', text: 'Ja na scenie? Nie ma mowy, jestem introwertyczką. Wyśmieją mnie, gdy głos mi zadrży.', subtext: 'Lęk tożsamościowy przed złamaniem dotychczasowej narracji o sobie.' }
    ],
    decisionTaken: 'Marta zrezygnowała ze zgłoszenia kandydatury na stanowisko dyrektora z powodu tożsamościowego przekonania „ja się do tego nie nadaję”.',
    whatProtagonistSaw: 'Wyczerpujące wystąpienia publiczne, głośnych liderów, własny lęk i drżenie rąk przy tablicy.',
    whatWasMissed: 'Fakt, że przywództwo jest zbiorem wyuczalnych umiejętności behawioralnych, a cichy, merytoryczny styl zarządzania jest wysoko ceniony we współczesnych organizacjach.',
    psychologicalAnalysis: {
      coreMechanism: 'Self-stereotyping oraz esencjalistyczna pułapka tożsamościowa (Fixed Mindset wobec osobowości).',
      cognitiveBiases: [
        { name: 'Błąd esencjalizmu', description: 'Traktowanie zmiennych cech zachowania jako sztywnej, genetycznej istoty jednostki.', impact: 'Uniemożliwił Marcie podjęcie jakiejkolwiek próby treningu wystąpień.' },
        { name: 'Confirmation Bias', description: 'Wyszukiwanie w pamięci tylko tych sytuacji, w których Marta czuła się niepewnie w grupie.', impact: 'Wymazanie wspomnień o udanych kameralnych prezentacjach.' }
      ],
      defenseMechanisms: [
        { name: 'Racjonalizacja', explanation: 'Tłumaczenie rezygnacji słowami: „Wolisz pracować z danymi, stanowiska menedżerskie są polityczne i brudne”.' }
      ],
      emotionalDynamic: 'Gwałtowny skok lęku przed odrzuceniem w reakcji na propozycję wyjścia z bezpiecznego nawyku rolnego.'
    },
    decisionProcessAnalysis: {
      trigger: 'Propozycja awansu od przełożonego.',
      attentionFocus: 'Własny lęk, wizja porażki przed zarządem.',
      interpretation: '„Jestem introwertyczką, zniszczę tę rolę i skompromituję się”.',
      emotion: 'Lęk egzystencjalny, spadek samopoczucia, późniejszy żal i poczucie krzywdy.',
      impulse: 'Ucieczka, unikanie ryzyka, pozostanie w strefie komfortu.',
      action: 'Niezłożenie aplikacji na stanowisko VP.',
      consequence: 'Praca pod kierunkiem mniej kompetentnego szefa i poczucie utknięcia zawodowego.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora obwodu (ACC)', role: 'Wykrywanie konfliktu między propozycją awansu a wewnętrznym obrazem siebie', activationState: 'Wysoka aktywacja' },
        { region: 'Ciało migdałowate', role: 'Generowanie sygnału zagrożenia dla spójności self-concept', activationState: 'Hiperaktywacja' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Utrzymujący się wysoki poziom stresu hamujący plastyczność poznawczą.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Słowo „zarząd” wywołuje szybki impuls lękowy.' },
        { timeMs: '300 ms+', process: 'Kora przedczołowa generuje racjonalizacje broniące ucieczki.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Auto-manipulacja etykietą', description: 'Używanie introwersji jako wymówki przed podejmowaniem wyzwań.', vulnerabilityExploited: 'Potrzebę wygody i uniknięcia oceny.' }
      ],
      counterMeasures: [
        { step: '1. Zamiana etykiety na opis behawioralny', script: '„Nie jestem nieadekwatna w przemówieniach, lecz mam małe doświadczenie w dużych audytoriach i muszę przećwiczyć strukturę”.', rationale: 'Otwiera przestrzeń uczenia się.' }
      ]
    },
    alternativePath: 'Gdyby Marta rozbiła rolę dyrektora na konkretne umiejętności i podjęła mikrokroki, zdobyłaby awans i zbudowała elastyczny obraz siebie.',
    readerQuestion: 'Jaka etykieta na Twój własny temat powstrzymuje Cię przed podjęciem kluczowego kroku w życiu?',
    keyTakeaway: 'Nie jesteś swoją etykietą. Twoja tożsamość to ewoluujący proces, a nie sztywna matryca z przeszłości.'
  },
  {
    id: 'studium-17-2-kryzys-po-korporacji',
    title: 'Kiedy rozpada się fasada statusu: Kryzys tożsamości Jakuba po opuszczeniu korporacji',
    subtitle: 'Uzależnienie self-concept od stanowiska i proces odbudowy autonomii osobistej',
    protagonist: 'Jakub, 42 lata, były dyrektor sprzedaży w międzynarodowym koncernie',
    context: 'Jakub przez 15 lat utożsamiał swoje „ja” z wizytówką dyrektora, służbowym samochodem premium i zespołem 80 podwładnych. Po restrukturyzacji i nagłym zwolnieniu zastał siebie w pustym mieszkaniu, nie wiedząc, kim jest bez firmowego identyfikatora.',
    story: [
      'Przez ponad dekadę kalendarz Jakuba wypełniony był spotkaniami od 8:00 do 20:00. Każde wejście do biura wiązało się z ukłonami, szacunkiem podwładnych i poczuciem władzy. Jakub nie posiadał hobby ani bliskich relacji poza pracą — cała jego tożsamość opierała się na filarze statusu zawodowego.',
      'Gdy nowy zarząd odprawił go z trzymiesięczną odprawą, Jakub odczuł to nie jako zmianę pracy, lecz jako fizyczną śmierć własnego „ja”. Przez pierwsze tygodnie codziennie ubierał garnitur, siadał przy stole i wpatrywał się w telefon, który przestał dzwonić.',
      'Znajomi pytali go: „Jakub, czym teraz się zajmujesz?”. To proste pytanie wywoływało u niego ataki paniki i falę wstydu. Nie potrafił odpowiedzieć na pytanie „kim jestem”, gdy zabrano mu tytuł dyrektora.',
      'Dopiero w toku terapii zaczął powoli odseparowywać swoją wartość jako człowieka od pozycji w strukturze organizacyjnej, budując tożsamość opartą na własnych wartościach i relacjach.'
    ],
    dialogue: [
      { speaker: 'Współpracownik', text: 'Jakub, co teraz robisz? W jakiej jesteś strukturze?', subtext: 'Badanie statusu społecznego i pozycji.' },
      { speaker: 'Jakub', text: 'Odpoczywam... szukam nowych wyzwań na poziomie C-level.', subtext: 'Obrona wykreowanej fasady i wstyd przed przyznaniem się do utraty roli.' }
    ],
    decisionTaken: 'Jakub odrzucał oferty mniejszych firm przez 8 miesięcy, woląc pozostawać bez pracy niż przyjąć stanowisko bez prestiżowego tytułu.',
    whatProtagonistSaw: 'Utratę statusu, spadek zainteresowania ze strony dawnych „przyjaciół” z branży i wizję bycia nikim.',
    whatWasMissed: 'Fakt, że stanowisko było jedynie czasowo użyczoną rolą społeczną, a jego rzeczywiste kompetencje nadal istnieją.',
    psychologicalAnalysis: {
      coreMechanism: 'Over-identification z rolą społeczną (External Identity Validation) i załamanie self-concept.',
      cognitiveBiases: [
        { name: 'Błąd statusu quo', description: 'Uznawanie dotychczasowej pozycji za jedyny możliwy wyznacznik wartości.', impact: 'Paraliż przed podjęciem nowych ścieżek.' }
      ],
      defenseMechanisms: [
        { name: 'Zaprzeczenie', explanation: 'Udawanie przed sobą i otoczeniem, że przerwa jest świadomym urlopem sabatowym.' }
      ],
      emotionalDynamic: 'Żałoba tożsamościowa i głęboki spadek poczucia własnej wartości po odebraniu zewnętrznych rekwizytów statusu.'
    },
    decisionProcessAnalysis: {
      trigger: 'Otrzymanie wypowiedzenia umowy o pracę.',
      attentionFocus: 'Pusty telefon, brak tytułu w stopce e-maila.',
      interpretation: '„Bez mojej firmy jestem nikim, straciłem swoją wartość”.',
      emotion: 'Wstyd, egzystencjalny lęk, poczucie pustki.',
      impulse: 'Izolacja społeczna, ukrywanie faktu zwolnienia.',
      action: 'Odrzucanie realistycznych ofert pracy i trwanie w paraliżu.',
      consequence: 'Przewlekła depresja i wyczerpanie oszczędności.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia wyspa (Anterior Insula)', role: 'Przetwarzanie bólu społecznego i odrzucenia', activationState: 'Ciągła hiperaktywacja' },
        { region: 'Przyśrodkowa kora przedczołowa (mPFC)', role: 'Procesy refleksji nad sobą i oceniania własnej wartości', activationState: 'Zaburzona praca' }
      ],
      neurotransmitters: [
        { name: 'Serotonina', roleInScenario: 'Drastyczny spadek poziomu wynikający z utraty pozycji w hierarchii dominacji.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Pytanie „czym się zajmujesz” aktywuje ból w wyspie zanim włączy się odpowiedź werbalna.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Korporacyjna obietnica tożsamości', description: 'Kultura organizacji zachęcająca do poświęcenia całego życia w zamian za status.', vulnerabilityExploited: 'Potrzebę znaczenia i struktury.' }
      ],
      counterMeasures: [
        { step: '1. Dywersyfikacja filarów tożsamości', script: 'Oparcie self-concept na co najmniej 4 niezależnych filarach: relacje, wartości, umiejętności, pasje.', rationale: 'Utrata jednego filaru nie niszczy całej konstrukcji psychicznej.' }
      ]
    },
    alternativePath: 'Gdyby Jakub od początku traktował pracę jako kontrakt biznesowy, zwolnienie stałoby się jedynie impulsem do zmiany projektu.',
    readerQuestion: 'Na ilu niezależnych filarach stoi Twoje poczucie własnej wartości?',
    keyTakeaway: 'Jesteś kimś więcej niż Twoja wizytówka. Stanowisko to tylko rola, którą odgrywasz.'
  },
  {
    id: 'studium-17-3-idealna-corka',
    title: 'Gdy cudze oczekiwania stają się własnym głosem: Syndrom „idealnej córki” u Karoliny',
    subtitle: 'Jaźń odzwierciedlona, introjekcja schematów rodzinnych i odzyskiwanie autonomii decyzyjnej',
    protagonist: 'Karolina, 27 lat, aplikantka adwokacka w renomowanej kancelarii',
    context: 'Karolina od dzieciństwa realizowała scenariusz napisany przez rodziców-prawników. Mimo doskonałych wyników w nauce odczuwała przewlekły smutek i poczucie, że żyje w cudzym ciele.',
    story: [
      'W domu Karoliny każdy sukces uwarunkowany był aprobatą Ojca: „Piątka? A dlaczego nie z plusem?”. Karolina nauczyla się, że akceptacja jest dawką wymierzaną za posłuszeństwo i oszałamiające osiągnięcia.',
      'Wybór studiów prawniczych był konsekwencją tej dynamiki. Mimo że marzyła o architekturze wnętrz, zrezygnowała ze swoich pasji, bojąc się rozczarowania w oczach rodziców.',
      'W wieku 27 lat, stojąc przed podpisaniem umowy w kancelarii, dostała silnego napadu paniki. Jej ciało zbuntowało się przeciwko narzuconemu skryptowi.',
      'Praca nad sobą pozwoliła jej uświadomić sobie proces introjekcji — bezkrytycznego przejęcia celów rodziców jako własnych.'
    ],
    dialogue: [
      { speaker: 'Ojciec', text: 'Karolinko, kancelaria X to szczyt marzeń. Jesteśmy z ciebie tacy dumni przed znajomymi.', subtext: 'Uwarunkowana aprobata.' },
      { speaker: 'Karolina', text: 'Tak tatusiu, zrobię wszystko, żeby was nie zawieść...', subtext: 'Kapitulacja autonomii na rzecz ochrony relacji.' }
    ],
    decisionTaken: 'Karolina złożyła rezygnację z aplikacji adwokackiej i zapisała się na kurs projektowania przestrzeni.',
    whatProtagonistSaw: 'Oczekiwania rodziców, wizję ich rozczarowania i lęk przed wykluczeniem z rodziny.',
    whatWasMissed: 'Fakt, że dorosłe życie wymaga odseparowania własnego self-concept od emocjonalnych wymagań rodziców.',
    psychologicalAnalysis: {
      coreMechanism: 'Introjekcja oraz Looking-Glass Self uwarunkowane aprobatą.',
      cognitiveBiases: [
        { name: 'Myślenie katastroficzne', description: 'Przekonanie, że odmowa woli rodziców doprowadzi do ruiny rodziny.', impact: 'Paraliż decyzyjny.' }
      ],
      defenseMechanisms: [
        { name: 'Uległość (Fawn Response)', explanation: 'Automatyczne przypodobnywanie się autorytetom.' }
      ],
      emotionalDynamic: 'Przewlekłe napięcie między pragnieniem autonomii a lękiem przed utratą miłości.'
    },
    decisionProcessAnalysis: {
      trigger: 'Propozycja długoterminowego kontraktu w kancelarii.',
      attentionFocus: 'Dławiący ucisk w gardle.',
      interpretation: '„To nie jest moje życie, uduszę się, jeśli podpiszę tę umowę”.',
      emotion: 'Panika, głęboki smutek, błysk determinacji.',
      impulse: 'Ucieczka, odmowa podpisania.',
      action: 'Szczera rozmowa z rodzicami i zmiana kierunku.',
      consequence: 'Chwilowy chłód w relacjach z ojcem, lecz ogromne poczucie ulgi.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'dlPFC', role: 'Podejmowanie autonomicznych decyzji pod prąd nawykowi', activationState: 'Stopniowe przejmowanie kontroli' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Pojawienie się motywacji po wybraniu własnego celu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Atak paniki przy próbie podpisania umowy.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Szantaż emocjonalny aprobatą', description: 'Uzależnianie ciepła od wyników dziecka.', vulnerabilityExploited: 'Potrzebę przywiązania.' }
      ],
      counterMeasures: [
        { step: '1. Różnicowanie (Differentiation of Self)', script: '„Rozumiem wasze troski, ale jestem odrębnym człowiekiem z własnymi wartościami”.', rationale: 'Stawia jasną granicę tożsamościową.' }
      ]
    },
    alternativePath: 'Gdyby Karolina kontynuowała pracę w kancelarii, rozwinęłaby uogólnione zaburzenia lękowe.',
    readerQuestion: 'Które z Twoich celów życiowych są naprawdę Twoje, a które stanowią nakaz opiekunów?',
    keyTakeaway: 'Autonomia zaczyna się w miejscu, w którym pozwalasz sobie na rozczarowanie innych, by nie rozczarować samego siebie.'
  },
  {
    id: 'studium-17-4-pęknięcie-cyfrowe',
    title: 'Dwa życia Piotra: Pęknięcie między idealną fasadą w mediach a samotnością w realu',
    subtitle: 'Zatarcie granic między sceną a kulisami w dobie tożsamości cyfrowej',
    protagonist: 'Piotr, 29 lat, twórca treści i konsultant marketingu cyfrowego',
    context: 'Piotr w sieci prezentował życie pełne sukcesów, podróży i energii. W rzeczywistości zmagał się z bezsennością, stanami lękowymi i głębokim poczuciem pustki.',
    story: [
      'Konto Piotra obserwowało 120 tysięcy osób. Każde zdjęcie było starannie wyreżyserowane. Piotr spędzał 6 godzin dziennie na kreowaniu treści.',
      'Umysł Piotra uzależnił się od dopaminowych strzałów powiadomień. Jego self-concept został zdominowany przez cyfrowy awatar.',
      'Gdy pewnego dnia jego post spotkał się z falą hejtu i odpływem obserwujących, Piotr doznał załamania nerwowego.',
      'Dopiero całkowity detox cyfrowy i praca nad tożsamością offline pozwoliły mu zrozumieć, że zamienił autentyczny kontakt na cyfrowy poklask.'
    ],
    dialogue: [
      { speaker: 'Fanka', text: 'Piotr, jesteś moim ideałem! Jak robisz, że nigdy nie masz gorszych dni?', subtext: 'Projekcja wyreżyserowanej fasady.' },
      { speaker: 'Piotr (w myśli)', text: 'Gdybyś wiedziała, że przed chwilą płakałem z samotności...', subtext: 'Syndrom oszusta.' }
    ],
    decisionTaken: 'Piotr wyłączył konto na 30 dni i zaczął budować lokalne relacje rówieśnicze bez udziału smartfona.',
    whatProtagonistSaw: 'Licznik obserwujących, komentarze i wizję bycia podziwianą ikoną.',
    whatWasMissed: 'Fakt, że cyfrowa fasada uniemożliwia jakąkolwiek prawdziwą bliskość.',
    psychologicalAnalysis: {
      coreMechanism: 'Zatarcie granicy między Front Stage a Backstage (Dramaturgia Goffmana).',
      cognitiveBiases: [
        { name: 'Porównania społeczne w górę', description: 'Śledzenie wyreżyserowanych sukcesów innych.', impact: 'Podbijanie własnego poczucia niedostateczności.' }
      ],
      defenseMechanisms: [
        { name: 'Kompensacja', explanation: 'Nadrabianie braku głębokich więzi zbieraniem aprobaty od obcych ludzi.' }
      ],
      emotionalDynamic: 'Narastający syndrom oszusta i paraliżujący lęk przed zdemaskowaniem.'
    },
    decisionProcessAnalysis: {
      trigger: 'Fala krytyki i utrata obserwujących.',
      attentionFocus: 'Negatywne komentarze i spadek statystyk.',
      interpretation: '„Jestem bezwartościowy, mój świat się rozpada”.',
      emotion: 'Rozpacz, panika, pustka.',
      impulse: 'Gorączkowe wrzucanie kolejnych postów.',
      action: 'Świadome odcięcie sieci i wejście w proces leczenia tożsamości.',
      consequence: 'Spadek zasięgów, lecz odzyskanie spokoju psychicznego.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące (NAcc)', role: 'Ośrodek nagrody aktywowany powiadomieniami', activationState: 'Gwałtowne wahania dopaminowe' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Uzależniający cykl sprawdzania statystyk.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Dźwięk powiadomienia wywołuje wyrzut dopaminy.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Algorytmiczna pętla dopaminowa', description: 'Projektowanie aplikacji wywołujące zmienny harmonogram wzmocnień.', vulnerabilityExploited: 'Potrzebę uznania.' }
      ],
      counterMeasures: [
        { step: '1. Odbudowa Kulis (Backstage)', script: 'Tworzenie przestrzeni, w których obowiązuje zakaz nagrywania.', rationale: 'Chroni układ nerwowy.' }
      ]
    },
    alternativePath: 'Gdyby Piotr kontynuował grę awatarem, doszłoby u niego do pełnoobjawowego epizodu depresyjnego.',
    readerQuestion: 'Jaka część Twojego wizerunku w sieci jest autentycznym odbiciem Twojego życia?',
    keyTakeaway: 'Nie zamieniaj autentyczności na cyfrowy poklask.'
  },
  {
    id: 'studium-17-5-konflikt-rol-menedzer',
    title: 'Między przyjaźnią a egzekucją wyników: Dylemat tożsamościowy Tomasza',
    subtitle: 'Konflikt ról społecznych i budowanie nadrzędnego kompasu etycznego',
    protagonist: 'Tomasz, 36 lat, kierownik działu operacyjnego',
    context: 'Tomasz musiał przeprowadzić zwolnienie grupowe, w tym zwolnić swojego bliskiego przyjaciela z lat dzieciństwa, którego sam ściągnął do firmy.',
    story: [
      'Tomasz i Michał znali się od podstawówki. Kiedy Tomasz został awansowany na kierownika, pomógł Michałowi dostać pracę w swoim zespole.',
      'Zarząd podjął decyzję o redukcji zatrudnienia o 30%. Michał znalazł się na szczycie listy do zwolnienia.',
      'W umyśle Tomasza zderzyły się dwie tożsamości: „Lojalny Przyjaciel” oraz „Odpowiedzialny Menedżer Firmy”.',
      'Tomasz próbował odwlec decyzję, manipulować wskaźnikami Michała i kłócić się z dyrekcją, co omal nie kosztowało go własnego stanowiska.'
    ],
    dialogue: [
      { speaker: 'Michał', text: 'Tomek, przecież znasz moją sytuację z kredytem. Chyba mnie nie wystawisz?', subtext: 'Odwołanie do roli przyjaciela.' },
      { speaker: 'Tomasz', text: 'Michał... sytuacja firmy jest dramatyczna. Musimy porozmawiać o faktach.', subtext: 'Próba wyjścia z roli przyjaciela na rzecz roli menedżerskiej.' }
    ],
    decisionTaken: 'Tomasz przeprowadził profesjonalne zwolnienie Michała z zapewnieniem pakietu wsparcia i osobistej rekomendacji.',
    whatProtagonistSaw: 'Oczy przyjaciela pełne żalu i poczucie bycia zdrajcą.',
    whatWasMissed: 'Fakt, że ochrona Michała kosztem innych pracowników byłaby naruszeniem etyki menedżerskiej.',
    psychologicalAnalysis: {
      coreMechanism: 'Konflikt Ról Społecznych (Role Conflict) i dysonans tożsamościowy.',
      cognitiveBiases: [
        { name: 'Efekt faworyzowania grupy własnej', description: 'Faworyzowanie bliskich osób wbrew obiektywnym kryteriom.', impact: 'Próba fałszowania wskaźników.' }
      ],
      defenseMechanisms: [
        { name: 'Odmowa działania (Paraliż)', explanation: 'Odkładanie trudnej rozmowy w nadziei, że sytuacja rozwiąże się sama.' }
      ],
      emotionalDynamic: 'Głębokie poczucie winy wynikające z niemożności zaspokojenia obu ról naraz.'
    },
    decisionProcessAnalysis: {
      trigger: 'Polecenie zarządu dotyczące zwolnień.',
      attentionFocus: 'Twarz przyjaciela i lęk przed utratą relacji.',
      interpretation: '„Cokolwiek zrobię, będę podłym człowiekiem”.',
      emotion: 'Poczucie winy, bezsilność.',
      impulse: 'Ucieczka, kłótnia z dyrekcją.',
      action: 'Przeprowadzenie bolesnej, lecz uczciwej rozmowy.',
      consequence: 'Czasowy chłód w relacji, lecz zachowanie spójności etycznej.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'ACC', role: 'Wykrywanie ostrego konfliktu poznawczo-emocjonalnego', activationState: 'Hiperaktywacja' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Wysokie pobudzenie układu współczulnego.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Słowa przyjaciela wywołują ukłucie w klatce piersiowej.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Szantaż relacyjny', description: 'Używanie prywatnej relacji do wymuszenia preferencyjnego traktowania.', vulnerabilityExploited: 'Lęk przed odrzuceniem.' }
      ],
      counterMeasures: [
        { step: '1. Rozdzielenie płaszczyzn', script: '„Jako Twój przyjaciel pomogę Ci znaleźć nową pracę. Jako menedżer muszę wykonać decyzję zarządu”.', rationale: 'Chroni obie rola przed zniszczeniem.' }
      ]
    },
    alternativePath: 'Gdyby Tomasz sfałszował wyniki, zostałby zwolniony dyscyplinarnie za naruszenie obowiązków.',
    readerQuestion: 'W jakich sytuacjach Twoje role społeczne wchodzą ze sobą w bezpośrednie starcie?',
    keyTakeaway: 'Nadrzędny kompas etyczny pozwala podejmować trudne decyzje bez utraty szacunku do samego siebie.'
  },
  {
    id: 'studium-17-6-powrot-do-sportu',
    title: 'Gdy ciało odmawia posłuszeństwa: Re-definicja tożsamości sportowej u Marka',
    subtitle: 'Kontuzja wykluczająca, utrata pierwotnego źródła sprawczości i konstrukcja nowej roli',
    protagonist: 'Marek, 31 lat, były zawodowy maratończyk',
    context: 'Po ciężkim wypadku rowerowym Marek dowiedział się, że nigdy nie wróci do wyczynowego biegania. Bieganie stanowiło dla niego jedyne źródło rozładowania stresu, tożsamości i poczucia wyższości.',
    story: [
      'przez 12 lat dzień Marka podporządkowany był treningom. Cała jego tożsamość brzmiała: „Jestem sportowcem, zwycięzcą, najszybszym gościem w mieście”.',
      'Wypadek na trasie i skomplikowane złamanie miednicy zakończyły karierę zawodową z dnia na dzień. Gdy lekarz poinformował go o braku możliwości biegania, Marek popadł w głęboki marazm.',
      'Patrzenie na puchary i medale na ścianie wywoływało u niego wściekłość i łzy. Czuł, że bez biegania jego ciało i umysł stają się bezużyteczną powłoką.',
      'Przełom nastąpił, gdy zaczął analizować, Co tak naprawdę dawało mu bieganie: była to motywacja do przekraczania granic i analityczne podejście do procesu. Przekierował te cechy na pracę jako trener i fizjoterapeuta.'
    ],
    dialogue: [
      { speaker: 'Lekarz', text: 'Panie Marku, o maratonach trzeba zapomnieć. Teraz walczymy o sprawny chód.', subtext: 'Zniszczenie dotychczasowej matrycy tożsamościowej.' },
      { speaker: 'Marek', text: 'To po co ja mam w ogóle wstawać z łóżka?', subtext: 'Załamanie poczucia sensu.' }
    ],
    decisionTaken: 'Marek ukończył studia z zakresu fizjoterapii i otworzył gabinet pracy ze sportowcami po traumach.',
    whatProtagonistSaw: 'Koniec swojego świata, kalectwo i bezużyteczność.',
    whatWasMissed: 'Fakt, że hart ducha i dyscyplina są uniwersalnymi kompetencjami, które można przenieść na dowolną inną dziedzinę.',
    psychologicalAnalysis: {
      coreMechanism: 'Kryzys tożsamościowy w wyniku nagłej utraty głównego filaru sprawczości i aktywacja ewoluującego self.',
      cognitiveBiases: [
        { name: 'Myślenie zero-jedynkowe', description: '„Albo jestem wyczynowym sportowcem, albo jestem niczym”.', impact: 'Poglębienie stany depresyjnego.' }
      ],
      defenseMechanisms: [
        { name: 'Sublimacja', explanation: 'Przekierowanie energii sportowej na naukę anatomii i pracę z pacjentami.' }
      ],
      emotionalDynamic: 'Głęboka żałoba po utraconej sprawności i powolna rekonstrukcja sensu.'
    },
    decisionProcessAnalysis: {
      trigger: 'Diagnoza lekarska wykluczająca powrót do sportu.',
      attentionFocus: 'Ból fizyczny, unieruchomienie, brak możliwości treningu.',
      interpretation: '„Moje życie się skończyło”.',
      emotion: 'Rozpacz, wściekłość, żałoba.',
      impulse: 'Izolacja, odrzucenie rehabilitacji.',
      action: 'Podjęcie nauki w nowej dziedzinie i otwarcie gabinetu.',
      consequence: 'Odnalezienie nowej, jeszcze głębszej misji życiowej.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Hipokamp i dlPFC', role: 'Odbudowa nowej narracji życiowej i uczenie się nowych kompetencji', activationState: 'Stopniowy wzrost neuroplastyczności' }
      ],
      neurotransmitters: [
        { name: 'Endorfiny i Dopamina', roleInScenario: 'Znalezienie nowych źródeł stymulacji nagrody przez pomoc innym pacjentom.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 1 sek', process: 'Widok sprzętu sportowego wywołuje nagłe ukłucie żalu.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kult wyczynowości', description: 'Kultura wpajająca, że wartość człowieka zależy od jego fizycznych osiągów.', vulnerabilityExploited: 'Potrzebę wyjątkowości.' }
      ],
      counterMeasures: [
        { step: '1. Re-definicja tożsamości', script: '„Bieganie było formą ekspresji mojej dyscypliny. Teraz tą formą będzie pomoc innym w powrocie do zdrowia”.', rationale: 'Przenosi rdzeń wartości na nową rolę.' }
      ]
    },
    alternativePath: 'Gdyby Marek trwał w żalu, ugrzązłby w bezczynności i przewlekłym bólu psychosomatycznym.',
    readerQuestion: 'Gdybyś jutro stracił swoje główne narzędzie działania, jaka cecha Twojego charakteru pozostałaby nienaruszona?',
    keyTakeaway: 'Forma działania może ulec zniszczeniu, lecz Twój rdzeń sprawczy można przenieść na nowe pole.'
  },
  {
    id: 'studium-17-7-maska-perfekcjonizmu',
    title: 'Pod pancerzem nieomylności: Perfekcjonizm tożsamościowy u Ewy',
    subtitle: 'Lęk przed demaskowaniem niedoskonałości i budowanie samowspółczucia',
    protagonist: 'Ewa, 39 lat, partner w firmie audytorskiej',
    context: 'Ewa zbudowała wizerunek osoby bezbłędnej, która nigdy się nie myli i nie potrzebuje pomocy. Poważny błąd w raporcie dla klienta doprowadził ją do paraliżu i próby zatajenia prawdy.',
    story: [
      'Ewa od dziecka była wychowywana w przeświadczeniu, że błąd jest dowodem kompromitacji. Jej tożsamość brzmiała: „Jestem perfekcyjna, na mnie można polegać zawsze”.',
      'W wyniku przemęczenia Ewa przeoczyła kluczową pozycję w bilansie spółki, co spowodowało stratę 200 tysięcy złotych dla klienta.',
      'Gdy odkryła błąd, w jej umyśle wybuchła panika tożsamościowa. Zamiast natychmiast poinformować zarząd i wdrożyć procedurę naprawczą, spędziła noc na próbach zamaskowania cyfr w systemie.',
      'Dopiero gdy sprawa wyszła na jaw podczas kontroli, Ewa musiała stawić czoła konfrontacji ze swoim największym lękiem: pokazaniem własnej niedoskonałości.'
    ],
    dialogue: [
      { speaker: 'Współpracownik', text: 'Ewa, popełniliśmy błąd w raporcie. Musimy to zgłosić.', subtext: 'Zgłoszenie faktu merytorycznego.' },
      { speaker: 'Ewa', text: 'Nikt o tym nie może się dowiedzieć! Ja to sama odkręcę, nie ma żadnego błędu!', subtext: 'Obrona tożsamości nieomylności za wszelką cenę.' }
    ],
    decisionTaken: 'Ewa próbowała sfałszować korektę w systemie, co naraziło ją na utratę licencji zawodowej.',
    whatProtagonistSaw: 'Natychmiastową ruinę wizerunku i wstyd przed zespołem.',
    whatWasMissed: 'Fakt, że szybkia i uczciwa korekta błędu buduje znacznie większe zaufanie niż fałszywa nieomylność.',
    psychologicalAnalysis: {
      coreMechanism: 'Obrona obrazu siebie (Identity Preservation Bias) napędzana lękiem przed demaskacją (Impostor Syndrome).',
      cognitiveBiases: [
        { name: 'Myślenie katastroficzne', description: 'Przekonanie, że przyznanie się do błędu oznacza koniec kariery.', impact: 'Podjęcie nieetycznych prób tuszowania.' }
      ],
      defenseMechanisms: [
        { name: 'Zaprzeczenie i Racjonalizacja', explanation: 'Tłumaczenie sobie, że mała korekta w systemie nie jest oszustwem.' }
      ],
      emotionalDynamic: 'Paraliżujący wstyd i paniczny lęk przed utratą pozycji.'
    },
    decisionProcessAnalysis: {
      trigger: 'Odkrycie błędu w raporcie audytowym.',
      attentionFocus: 'Własny wizerunek nieomylności.',
      interpretation: '„Jeśli się przyznam, wszyscy zobaczą, że jestem oszustką”.',
      emotion: 'Wstyd, przerażenie, panika.',
      impulse: 'Tuszowanie faktu, fałszowanie danych.',
      action: 'Nocne modyfikowanie wpisów w bazie.',
      consequence: 'Kryzys zaufania w zarządzie i postępowanie wyjaśniające.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate i Wyspa', role: 'Generowanie silnego odczucia wstydu i zagrożenia statusu', activationState: 'Ekstremalna aktywacja' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Skok poziomu hormonu stresu wyłączający racjonalne myślenie w dlPFC.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 150 ms', process: 'Zauważenie błędnej cyfry wywołuje zimny pot i przyspieszenie tętna.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Auto-szantaż nieomylnością', description: 'Narzucenie sobie nierealistycznego standardu bez prawa do pomyłki.', vulnerabilityExploited: 'Potrzebę bezpieczeństwa.' }
      ],
      counterMeasures: [
        { step: '1. Praktyka Samowspółczucia (Self-Compassion)', script: '„Popełniłam błąd, ponieważ jestem zmęczonym człowiekiem. Błąd to informacja do naprawy, a nie wyrok na moją wartość”.', rationale: 'Obniża poziom lęku i przywraca logikę.' }
      ]
    },
    alternativePath: 'Gdyby Ewa natychmiast zgłosiła błąd i wdrożyła procedurę, firma uniknęłaby strat, a jej reputacja pozostałaby nienaruszona.',
    readerQuestion: 'Ile energii zużywasz na ukrywanie swoich niedoskonałości przed światem?',
    keyTakeaway: 'Prawdziwa siła tożsamości nie polega na braku błędów, lecz na odwadze do ich przyznania i naprawy.'
  },
  {
    id: 'studium-17-8-redefinicja-po-50',
    title: 'Trzeci akt życia: Redefinicja tożsamości u Barbary po odejściu dzieci z domu',
    subtitle: 'Syndrom pustego gniazda, ewolucja ról rodzinnych i odkrywanie nowej sprawczości',
    protagonist: 'Barbara, 53 lata, z zawodu nauczycielka, matka trójki dorosłych dzieci',
    context: 'Barbara przez 25 lat definiowała siebie niemal wyłącznie jako „Troskliwą Matkę”. Gdy najmłodsza córka wyprowadziła się na studia do innego miasta, Barbara zastała w domu pustkę, której nie potrafiła wypełnić.',
    story: [
      'Każdy dzień Barbary od dwóch dekad kręcił się wokół gotowania, prania, sprawdzania ocen i organizacji życia domowego. Matczyne obowiązki były jej głównym źródłem poczucia sensu i wartości.',
      'Gdy ostatnie dziecko opuściło dom, Barbara odczuła dojmującą ciszę. Zaczęła gorączkowo dzwonić do dzieci po kilka razy dziennie, wypytując o szczegóły posiłków i ubioru, co wywoływało u nich irytację.',
      'Więź z mężem osłabła przez lata — rozmawiali tylko o dzieciach. Barbara poczuła, że stała się niewidzialna i niepotrzebna.',
      'Dopiero gdy córka poprosiła o przestrzeń, Barbara zrozumiała, że musi renegocjować swoją tożsamość: z matki opiekującej się dziećmi na autonomiczną kobietę z własnymi pasjami i nową relacją z partnerem.'
    ],
    dialogue: [
      { speaker: 'Córka', text: 'Mamo, mam 20 lat! Nie musisz mi mówić, kiedy mam zjeść obiad!', subtext: 'Stawianie granic autonomii przez dorosłe dziecko.' },
      { speaker: 'Barbara', text: 'Ja tylko chcę dla ciebie dobrze... Przecież bez was ten dom jest pusty.', subtext: 'Lęk przed utratą sensu jedynej pełnionej roli.' }
    ],
    decisionTaken: 'Barbara zapisała się na uniwersytet trzeciego wieku oraz rozpoczęła kurs fotografii krajobrazowej.',
    whatProtagonistSaw: 'Odrzucenie ze strony dzieci i własną nieprzydatność.',
    whatWasMissed: 'Fakt, że rola matki nie zniknęła, lecz zmieniła formę na partnerstwo dorosłych ludzi, zwalniając czas na własny rozwój.',
    psychologicalAnalysis: {
      coreMechanism: 'Przejście tożsamościowe w cyklu życia (Syndrom pustego gniazda) i konieczność redefiniowania roli.',
      cognitiveBiases: [
        { name: 'Uwaga selektywna', description: 'Skupianie się wyłącznie na pustych pokojach w domu.', impact: 'Poglębienie żalu.' }
      ],
      defenseMechanisms: [
        { name: 'Nadkontrola', explanation: 'Próba utrzymania dawnych nawyków opiekuńczych wobec dorosłych dzieci.' }
      ],
      emotionalDynamic: 'Smutek stratny, lęk przed osamotnieniem i stopniowe odkrywanie ciekawości świata.'
    },
    decisionProcessAnalysis: {
      trigger: 'Wyprowadzka najmłodszego dziecka z domu.',
      attentionFocus: 'Pustka w domu, brak obowiązków domowych.',
      interpretation: '„Moja rola się skończyła, do niczego już nie jestem potrzebna”.',
      emotion: 'Smutek, poczucie bezużyteczności.',
      impulse: 'Telefonowanie do dzieci, narzucanie się z pomocą.',
      action: 'Podjęcie nowych pasji i zaangażowanie społecznie.',
      consequence: 'Odbudowa relacji z mężem i odzyskanie radości życia.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'DMN', role: 'Przetwarzanie nowej narracji o sobie po przełomie życiowym', activationState: 'Uruchomienie elastyczności' }
      ],
      neurotransmitters: [
        { name: 'Oksytocyna', roleInScenario: 'Spadek poziomu wynikający ze zmiany stałego kontaktu fizycznego z dziećmi.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Cisza w mieszkaniu po powrocie z pracy aktywuje reakcję osamotnienia.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kult poświęcenia macierzyńskiego', description: 'Kulturowy skrypt nakazujący matce oddanie całego życia dzieciom.', vulnerabilityExploited: 'Potrzebę bycia potrzebnym.' }
      ],
      counterMeasures: [
        { step: '1. Dekonstrukcja rola-wartość', script: '„Byłam i jestem wspaniałą matką. Teraz czas, abym stała się wspaniałą towarzyszką dla samej siebie”.', rationale: 'Otwiera nową przestrzeń samorozwoju.' }
      ]
    },
    alternativePath: 'Gdyby Barbara trwała w nadkontroli, doprowadziłaby do konfliktu i zerwania więzi z dziećmi.',
    readerQuestion: 'Gdy znikną Twoje dotychczasowe obowiązki, co wypełni Twoją codzienność?',
    keyTakeaway: 'Każdy etap życia wymaga nowej narracji. Dojrzałość to umiejętność witania nowych ról.'
  }
];

export const selfExercisesChapterSeventeen: SelfExercise[] = [
  {
    id: 'ex-17-1',
    title: 'Audyt Etykiet Tożsamościowych',
    subtitle: 'Rozbrajanie skryptów „Ja po prostu taki jestem”',
    objective: 'Zidentyfikowanie samospełniających się etykiet ograniczających codzienne zachowanie i przetłumaczenie ich na język opisu behawioralnego.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Przeniesienie oceny z tożsamościowej DMN na język opisu kontekstowego w dlPFC obniża aktywację ciała migdałowatego i przywraca elastyczność wykonawczą.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wypisanie etykiet',
        instruction: 'Zapisz 3 zdania, które często powtarzasz sobie lub innym na swój temat, zaczynające się od słów: „Ja po prostu jestem...” (np. Jestem spóźnialski, Jestem nieśmiały).',
        promptText: 'Moje 3 główne etykiety ograniczające:',
        placeholder: '1. Ja po prostu jestem...\n2. Ja po prostu jestem...\n3. Ja po prostu jestem...'
      },
      {
        stepNumber: 2,
        title: 'Dekonstrukcja na zachowania',
        instruction: 'Dla każdej etykiety wypisz 2 konkretne sytuacje z ostatniego miesiąca, w których to zachowanie wystąpiło. Zamień etykietę na opis braku nawyku.',
        promptText: 'Opis behawioralny zamiast etykiety:',
        placeholder: 'Sytuacja 1: W zeszły wtorek nie przygotowałem planu i spóźniłem się 15 minut...\nSytuacja 2: Na zebraniu nie podniosłem ręki, bo poczułem lęk przed oceną...'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie hipotezy procesowej',
        instruction: 'Przepisuj każdą etykietę na zdanie otwarte na naukę: „W sytuacji X mam tendencję do Y, ale mogę wyćwiczyć nawyk Z”.',
        promptText: 'Moje nowe zdania procesowe:',
        placeholder: 'W sytuacji wystąpień czuję lęk, ale mogę przećwiczyć pierwsze 3 minuty prezentacji...'
      }
    ],
    reflectionQuestions: [
      'Kiedy po raz pierwszy usłyszałeś tę etykietę i od kogo ona pochodziła?',
      'Jakie korzyści (strefa komfortu, brak ryzyka) czerpałeś z zasłaniania się tą etykietą?'
    ]
  },
  {
    id: 'ex-17-2',
    title: 'Mapa Filarów Tożsamości',
    subtitle: 'Dywersyfikacja źródeł poczucia własnej wartości',
    objective: 'Zbudowanie zrównoważonej struktury self-concept opartej na co najmniej 4 niezależnych obszarach życia.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Dywersyfikacja reprezentacji w przyśrodkowej korze przedczołowej (mPFC) zabezpiecza układ nerwowy przed załamaniem w przypadku kryzysu w jednym obszarze.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identyfikacja obecnych filarów',
        instruction: 'Oceń w skali 0-100%, ile Twojego poczucia wartości zależy obecnie od: Pracy/Statusu, Relacji, Wyglądu/Sprawności, Pasji/Wartości.',
        promptText: 'Obecny podział procentowy filarów:',
        placeholder: 'Praca: 60%\nRelacje: 25%\nPasje: 10%\nWygląd: 5%'
      },
      {
        stepNumber: 2,
        title: 'Projektowanie struktury docelowej',
        instruction: 'Zaprojektuj nowy, stabilniejszy podział filarów tak, by żaden obszar nie przekraczał 35% Twojego poczucia wartości.',
        promptText: 'Docelowy podział filarów:',
        placeholder: 'Praca: 30%\nRelacje: 30%\nPasje/Rozwój: 25%\nZdrowie/Sprawność: 15%'
      },
      {
        stepNumber: 3,
        title: 'Mikro-akcja zasilająca najsłabszy filar',
        instruction: 'Wybierz jeden zaniedbany filar i zaplanuj jedną konkretną czynność na ten tydzień, która go zasili.',
        promptText: 'Moja mikro-akcja zasilająca:',
        placeholder: 'W ten czwartek pójdę na 45-minutowy spacer bez telefonu, zasilając filar relacji ze sobą...'
      }
    ],
    reflectionQuestions: [
      'Co stałoby się z Twoim samopoczuciem, gdyby Twój główny filar uległ osłabieniu?',
      'Kiedy ostatni raz robiłeś coś wyłącznie dla radości z procesu, bez oceny wyniku?'
    ]
  },
  {
    id: 'ex-17-3',
    title: 'Redefinicja Narracji Autobiograficznej',
    subtitle: 'Przekształcanie bolesnych doświadczeń w zasoby sprawcze',
    objective: 'Zmiana pozycji w kluczowym wspomnieniu z biernej ofiary na aktywnego podmiotu, który wyciągnął lekcję.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Rekonsolidacja pamięci w hipokampie pod wpływem nowej interpretacji z dlPFC zmienia ślad emocjonalny przechowywany w ciele migdałowatym.',
    steps: [
      {
        stepNumber: 1,
        title: 'Opis zdarzenia z przeszłości',
        instruction: 'Wybierz trudne zdarzenie z przeszłości, które dotąd interpretowałeś jako swoją porażkę lub krzywdę.',
        promptText: 'Krótki opis zdarzenia:',
        placeholder: 'Niezaliczone egzaminy na studia / Trudne rozstanie w wieku 22 lat...'
      },
      {
        stepNumber: 2,
        title: 'Wypisanie zdobytych zasobów',
        instruction: 'Wypisz 3 konkretne umiejętności, cechy lub wglądy, które wykształciłeś W WYNIKU przejścia przez to trudne doświadczenie.',
        promptText: 'Czego nauczyło mnie to zdarzenie:',
        placeholder: '1. Nauczyłem się radzić sobie z odmową...\n2. Odkryłem w sobie odporność na stres...\n3. Zrozumiałem moje prawdziwe granice...'
      },
      {
        stepNumber: 3,
        title: 'Nowa deklaracja narracyjna',
        instruction: 'Sformułuj jedno zdanie podsumowujące: „To zdarzenie było trudne, ale dzięki niemu stałem się człowiekiem, który potrafi...”',
        promptText: 'Moja nowa narracja sprawcza:',
        placeholder: 'To rozstanie było bolesne, ale dzięki niemu nauczyłem się stawiać granice i cenić autentyczność...'
      }
    ],
    reflectionQuestions: [
      'Jak zmiana opowieści wpływa na Twoje fizyczne odczucia w ciele, gdy myślisz o tym zdarzeniu?',
      'Komu w swoim otoczeniu powinieneś opowiedzieć tę nową wersję swojej historii?'
    ]
  },
  {
    id: 'ex-17-4',
    title: 'Gra Sceniczna i Kulisy',
    subtitle: 'Audyt masek społecznych i ochrona przestrzeni osobistej',
    objective: 'Zidentyfikowanie ról wyczerpujących energetycznie i stworzenie bezpiecznej przestrzeni kulis (backstage).',
    durationMinutes: 20,
    neuroScientificFoundation: 'Odłączenie konieczności autoprezentacji redukuje obciążenie allostatyczne i przywraca przywspółczulny ton nerwu błędnego.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identyfikacja masek i scen',
        instruction: 'Wypisz sytuacje, w których czujesz, że musisz zakładać najbardziej wyczerpującą maskę (np. nieomylny szef, idealny partner).',
        promptText: 'Moje najbardziej wyczerpujące role sceniczne:',
        placeholder: '1. Spotkania z zarządem - maska absolutnej pewności siebie...\n2. Spotkania rodzinne - maska sukcesu...'
      },
      {
        stepNumber: 2,
        title: 'Opis potrzebnych kulis',
        instruction: 'Opisz warunki, w których czujesz się w 100% bezpieczny i nie musisz odgrywać żadnej roli (miejsca, ludzie, czynności).',
        promptText: 'Moje idealne kulisy regeneracyjne:',
        placeholder: 'Samotny spacer w lesie / Czas z przyjacielem, który zna moje słabości...'
      },
      {
        stepNumber: 3,
        title: 'Wdrożenie rytuału zdjęcia maski',
        instruction: 'Zaprojektuj 5-minutowy rytuał przejścia ze sceny do kulis po powrocie z pracy.',
        promptText: 'Mój rytuał zdjęcia maski:',
        placeholder: 'Po wejściu do domu zmiana ubrań na wygodne, zmycie twarzy wodą i 3 głębokie oddechy...'
      }
    ],
    reflectionQuestions: [
      'Czy w Twoim życiu jest przynajmniej jedna osoba, przed którą nie musisz udawać nikogo innego?',
      'Co powstrzymuje Cię przed częstszym pokazywaniem swojej autentyczności na scenie?'
    ]
  },
  {
    id: 'ex-17-5',
    title: 'Instrukcja Obsługi Samego Siebie',
    subtitle: 'Kodyfikacja unikalnych mechanizmów i granic',
    objective: 'Stworzenie przejrzystego dokumentu opisującego Twoje wartości, wyzwalacze stresu i optymalne warunki pracy.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Krystalizacja wiedzy metapoznawczej ułatwia sprawne komunikowanie granic w relacjach bez wchodzenia w reakcje obronne.',
    steps: [
      {
        stepNumber: 1,
        title: 'Moje warunki optymalne',
        instruction: 'Wypisz 3 czynniki, które sprawiają, że działasz na najwyższym poziomie jasności umysłu.',
        promptText: 'Kiedy działam najlepiej:',
        placeholder: '1. Gdy mam rano 2 godziny nieprzerwanej pracy głębokiej...\n2. Gdy cel jest jasno zdefiniowany na piśmie...'
      },
      {
        stepNumber: 2,
        title: 'Moje wyzwalacze stresu (Triggery)',
        instruction: 'Wypisz 3 sytuacje, które najszybciej wywołują u Ciebie reakcję lęku lub wściekłości.',
        promptText: 'Co mnie najszybciej wytrąca z równowagi:',
        placeholder: '1. Nagła zmiana ustaleń bez podania powodu...\n2. Podnoszenie głosu w dyskusji...'
      },
      {
        stepNumber: 3,
        title: 'Komunikacja dla otoczenia',
        instruction: 'Napisz zdanie, jak otoczenie powinno reagować, gdy widzisz u siebie sygnały przeciążenia.',
        promptText: 'Instrukcja dla moich bliskich/współpracowników:',
        placeholder: 'Gdy jestem milczący, daj mi 30 minut na spacer, zanim zaczniemy trudną rozmowę...'
      }
    ],
    reflectionQuestions: [
      'Jak często udostępniasz te informacje osobom, z którymi żyjesz i pracujesz?',
      'Którą ze swoich granic najczęściej sam naruszasz?'
    ]
  },
  {
    id: 'ex-17-6',
    title: 'Eksperyment Złamania Skryptu',
    subtitle: 'Behawioralne testowanie granic elastyczności tożsamościowej',
    objective: 'Wykonanie jednego celowego, bezpiecznego działania stojącego w sprzeczności z utrwaloną etykietą.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Przełamanie oczekiwania lękowego przez bezpieczny eksperyment stymuluje wydzielanie BDNF i neuroplastyczność w kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór bezpiecznego eksperymentu',
        instruction: 'Wybierz jedną małą czynność, której zwykle unikasz z powodu etykiety (np. poproś o rabat w sklepie, zabierz głos jako pierwszy na spotkaniu).',
        promptText: 'Mój eksperyment złamania skryptu:',
        placeholder: 'Zadanie pytania prelegentowi podczas webinaru przed 100 osobami...'
      },
      {
        stepNumber: 2,
        title: 'Prognoza lękowa',
        instruction: 'Zapisz, co według Twojego najgorszego scenariusza ma się stać.',
        promptText: 'Moja prognoza lękowa (0-100%):',
        placeholder: 'Zająknę się, ludzie pomyślą, że jestem głupi (Prawdopodobieństwo: 80%)...'
      },
      {
        stepNumber: 3,
        title: 'Rejestracja rzeczywistego wyniku',
        instruction: 'Wykonaj akcję i natychmiast opisz obiektywne fakty: co dokładnie się stało i jak zareagowało ciało.',
        promptText: 'Obiektywny wynik eksperymentu:',
        placeholder: 'Zadałem pytanie, głos lekko drżał na początku, prelegent podziękował za świetny punkt. Nikt się nie śmiał.'
      }
    ],
    reflectionQuestions: [
      'O ile procent Twój czarny scenariusz minął się z rzeczywistością?',
      'Czego ten eksperyment uczy Cię o wiarygodności Twojego wewnętrznego krytyka?'
    ]
  },
  {
    id: 'ex-17-7',
    title: 'Dekonstrukcja Ja Idealnego',
    subtitle: 'Urealnianie nierealistycznych wzorców i zmniejszanie rozbieżności',
    objective: 'Zmniejszenie presji wynikającej z nierealistycznego obrazu „kim powinienem być” i zastąpienie go ja procesowym.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Redukcja rozbieżności między ja realnym a ja idealnym zmniejsza poziom uwalniania kortyzolu i chroni przed wypaleniem.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wypisanie wymogów ja idealnego',
        instruction: 'Zapisz 3 nierealistyczne wymagania, które stawiasz sobie każdego dnia (np. Muszę zawsze być uśmiechnięty, Muszę zarabiać X do wieku Y).',
        promptText: 'Moje surowe wymogi ja idealnego:',
        placeholder: '1. Nigdy nie mogę odczuwać zmęczenia ani braku motywacji...\n2. Muszę idealnie godzić pracę z życiem rodzinnym...'
      },
      {
        stepNumber: 2,
        title: 'Konfrontacja z rzeczywistością ludzką',
        instruction: 'Zapisz, jak to samo wymaganie oceniłbyś u swojego najlepszego przyjaciela.',
        promptText: 'Ocena wymagania u przyjaciela:',
        placeholder: 'Powiedziałbym mu, że jest człowiekiem, a nie robotem i ma prawo do odpoczynku...'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie standardu procesowego',
        instruction: 'Przepisuj wymóg na realistyczny cel procesowy: „Zamiast być idealnym, dążę do tego, by być wystarczająco dobry w...”',
        promptText: 'Mój nowy standard procesowy:',
        placeholder: 'Dążę do tego, by być obecnym dla dzieci przez 1 godzinę dziennie z pełną uwagą, zamiast idealnym ojcem przez całą dobę...'
      }
    ],
    reflectionQuestions: [
      'Kto zaszczepił w Tobie ten nierealistyczny wzorzec doskonałości?',
      'O ile lżejsze staje się Twoje ciało, gdy odpuszczasz nierealistyczny wymóg?'
    ]
  },
  {
    id: 'ex-17-8',
    title: 'Deklaracja Procesowej Tożsamości',
    subtitle: 'Podsumowanie rozdziału i stworzenie osobistego manifestu',
    objective: 'Zsyntetyzowanie wglądów z Rozdziału 1 w jeden zwięzły manifest kierujący przyszłymi decyzjami.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Werbalizacja manifestu procesowego aktywuje struktury koryprzedczołowej odpowiedzialne za torowanie wyższego rzędu.',
    steps: [
      {
        stepNumber: 1,
        title: 'Mój fundament wartości',
        instruction: 'Napisz 3 wartości, które stanowią niezmienny rdzeń Twojej tożsamości.',
        promptText: 'Moje 3 rdzenne wartości:',
        placeholder: 'Prawda, Prawdziwa Bliskość, Ciągły Rozwój...'
      },
      {
        stepNumber: 2,
        title: 'Moje otwarcie na zmianę',
        instruction: 'Napisz, w jakich obszarach dajesz sobie pełne prawo do zmiany poglądów i nawyków.',
        promptText: 'Obszary mojej elastyczności:',
        placeholder: 'Mam prawo zmieniać moje metody pracy, opinie polityczne i styl życia w oparciu o nowe fakty...'
      },
      {
        stepNumber: 3,
        title: 'Osobisty manifest procesowy',
        instruction: 'Stwórz 3-zdaniowy manifest: „Nie jestem gotową rzeźbą, lecz autorem swojego rozwoju...”',
        promptText: 'Mój osobisty manifest tożsamościowy:',
        placeholder: 'Nie jestem definowany przez błędy z przeszłości. Każdego dnia dostarczam moim umysłowi dowodów na to, że potrafię się uczyć i wybierać wartości.'
      }
    ],
    reflectionQuestions: [
      'Gdzie powiesisz lub zapiszesz ten manifest, aby przypominał Ci o Twojej sprawczości każdego dnia?',
      'Jaki jest Twój pierwszy mikrokrok, który wykonasz jeszcze dzisiaj?'
    ]
  }
];

export const chapterSeventeen: Chapter = {
  number: 17,
  volume: 3,
  volumeChapterNumber: 1,
  title: 'Tożsamość — kim właściwie jestem?',
  subtitle: 'Konstrukcja self-concept, etykiety tożsamościowe, teatr społeczny i psychologia ewoluującego ja',
  leadParagraph: 'Pytanie „kim jestem?” towarzyszy ludzkości od zarania filozofii, lecz współczesna psychologia poznawcza i neuronauka rzucają na nie zupełnie nowe światło. Człowiek nie posiada zamrożonej, statycznej substancji zwanej „jaźnią”, lecz nieustannie rekonstruuje obraz samego siebie w oparciu o pamięć autobiograficzną, odgrywane role społeczne i język, jakim do siebie mówi. Zrozumienie, jak powstaje, utrwala się i zmienia tożsamość, stanowi absolutny fundament do odzyskania autonomii decyzyjnej.',
  totalEstimatedPages: 62,
  sections: [
    {
      id: 'sec-17-1',
      pageNumber: 1,
      sectionNumber: '17.1',
      title: 'Fundamenty Tożsamości: Obraz Siebie, Poczucie Ja i Tożsamość Osobista',
      category: 'teoria',
      readingTimeMinutes: 14,
      quote: {
        text: 'Tożsamość to nie jest coś, co znajdujesz w zakamarkach duszy. To opowieść, którą piszesz swoimi wyborami każdego dnia.',
        author: 'Dan P. McAdams'
      },
      paragraphs: [
        'Kiedy pyta się człowieka, kim jest, najczęściej w pierwszej kolejności wymieniane są nazwy ról zawodowych, cechy charakteru lub przynależności grupowe. W języku potocznym pojęcia takie jak „obraz siebie”, „samoocena” i „tożsamość” używane są zamiennie. Jednak precyzyjny język nauk poznawczych wymaga wyraźnego rozróżnienia tych poziomów.',
        'Obraz siebie (self-concept) to skomplikowana struktura wiedzy deklaratywnej — swoisty magazyn danych zawierający wszystkie przekonania, wyobrażenia, oceny i teorie, jakie jednostka posiada na własny temat. To odpowiedź na pytanie: „Jaki jestem?”. Zawiera informacje o cechach fizycznych, kompetencjach, słabościach i nawykach.',
        'Z kolei tożsamość osobista dotyczy głębszego, podmiotowego poczucia ciągłości i spójności w czasie. To subiektywne przekonanie: „To ja jestem tym samym człowiekiem, który 10 lat temu pisał maturę, mimo że zmieniły się moje komórki, poglądy i otoczenie”. Tożsamość daje architekturze psychicznej stabilny punkt odniesienia.',
        'Należy wyraźnie zaznaczyć, że tożsamość nie jest pojedynczą strukturą anatomiczną w mózgu. Nie istnieje żaden „ośrodek tożsamości”. To, co odczuwamy jako spójne „ja”, jest efektem synchronizacji rozproszonych sieci neuronalnych, łączących wspomnienia z hipokampa z wyceną emocjonalną z układu limficznego oraz kontrolą kory przedczołowej.'
      ],
      subsections: [
        {
          title: 'Wiedza deklaratywna a doznanie podmiotowości',
          paragraphs: [
            'Wiedza o sobie („jestem wysokim analitykiem”) różni się fundamentalnie od doznania bycia podmiotem doświadczającym („ja teraz czytam te słowa”). Pierwsza jest treścią poznawczą, drugie zaś procesem doznaniowym.'
          ],
          highlightBox: {
            title: 'Wgląd Neuronaukowy: DMN i Narracyjne Ja',
            content: 'Domyślna Sieć Neuronalna (DMN) ulega aktywacji zawsze, gdy umysł przechodzi w stan spoczynku i tworzy monolog wewnętrzny. To w DMN powstają ciągłe syntezy przeszłości i przyszłości tworzące narracyjne ja.',
            type: 'neuro'
          }
        }
      ]
    },
    {
      id: 'sec-17-2',
      pageNumber: 4,
      sectionNumber: '17.2',
      title: 'Struktura Pytania „Kim Jestem?” — Wielopoziomowy Model Self-Concept',
      category: 'teoria',
      readingTimeMinutes: 12,
      paragraphs: [
        'Odpowiedź na pytanie „kim jestem?” zmienia się w zależności od kontekstu, w jakim człowiek się znajduje. Jeśli zapytasz o to tego samego człowieka na rozmowie kwalifikacyjnej, w gronie bliskich przyjaciół lub w trakcie sytuacji zagrożenia, otrzymasz zupełnie inne zestawy cech i priorytetów.',
        'Umysł organizuje wiedzę o sobie w hierarchiczne schematy. Na najwyższym poziomie znajdują się wartości i cechy rdzenne, zaś niżej role społeczne i konkretne nawyki behawioralne. Im bardziej centralna dla self-concept jest dana treść, tym silniejszą reakcję emocjonalną wywołuje jej podważenie.',
        'Przykładowo, jeśli ktoś uważa się za „eksperta finansowego”, to wytknięcie błędu w prostej tabeli Excela może zostać odebrane nie jako korekta merytoryczna, lecz jako atut wymierzony bezpośrednio w jego prawo do istnienia w organizacji.'
      ]
    },
    {
      id: 'sec-17-3',
      pageNumber: 7,
      sectionNumber: '17.3',
      title: 'Tożsamość a Zachowanie: Dystynkcja „Zrobiłem coś” vs „Taki już jestem”',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Jednym z najbardziej kosztownych błędów poznawczych w zarządzaniu własną tożsamością jest zbyt szybkie przeskakiwanie z poziomu opisu zachowania na poziom globalnej etykiety tożsamościowej.',
        'Wyobraź sobie sytuację, w której człowiek spóźnia się na dwa ważne spotkania w tygodniu. Opis behawioralny brzmi: „W tym tygodniu dwukrotnie spóźniłem się z powodu braku zapasu czasowego w planie”. Jest to opis faktu, który wskazuje na konkretną lukę w nawyku organizacyjnym i otwiera przestrzeń do korekty w kory przedczołowej.',
        'Jeśli jednak ten sam człowiek dokona syntezy tożsamościowej i powie do siebie: „Jestem po prostu nieodpowiedzialnym spóźnialskim”, to przenosi problem z poziomu operacyjnego na poziom esencjalny. Etykieta „jestem spóźnialskim” zaczyna działać jako samospełniająca się przepowiednia, uwalniając go od wysiłku zmiany, bo przecież „taki już jestem”.'
      ],
      subsections: [
        {
          title: 'Pułapka języka esencjalistycznego',
          paragraphs: [
            'Język, jakiego używamy do opisywania własnych błędów, determinuje odpowiedź układu nerwowego. Etykiety tożsamościowe aktywują poczucie wstydu (shame response), które zamraża aktywność poszukiwawczą, podczas gdy opis behawioralny uruchamia ciekawość i poszukiwanie rozwiązań.'
          ],
          highlightBox: {
            title: 'Błędna Intuicja: Mój język tylko opisuje rzeczywistość',
            content: 'Intuicyjnie wydaje nam się, że słowa „jestem leniwy” są po prostu uczciwym podsumowaniem faktów. W rzeczywistości język tworzy ramę poznawczą, która blokuje neuroplastyczność i uniemożliwia zmianę nawyku.',
            type: 'warning'
          }
        }
      ]
    },
    {
      id: 'sec-17-4',
      pageNumber: 10,
      sectionNumber: '17.4',
      title: 'Etykiety i Schematy Tożsamościowe — Od Rodziny po Media Społeczne',
      category: 'teoria',
      readingTimeMinutes: 18,
      quote: {
        text: 'Kiedy przypinasz człowiekowi etykietę, zwalniasz swój mózg z konieczności widzenia jego złożoności — i zmuszasz jego umysł do obrony lub kapitulacji wobec karykatury.',
        author: 'Claude Steele (Whistling Vivaldi: How Stereotypes Affect Us, 2010)'
      },
      paragraphs: [
        'Etykiety tożsamościowe rzadko powstają w próżni. Większość z nich zostaje nam zasugerowana lub bezwzględnie narzucona w procesie wczesnej socjalizacji przez znaczących dorosłych: rodziców, rodzeństwo, nauczycieli oraz rówieśników.',
        'W dynamice rodzinnej niezwykle często dochodzi do nieświadomego rozdawania sztywnych ról tożsamościowych: „Janek to ten mądry i spokojny, a Kasia to ta zwariowana artystka, która nigdy nie ogarnie finansów”. Dziecko, powodowane pierwotną biologiczną potrzebą przynależności i przewidywalności, absorbuje przydzieloną rolę i bezwiednie dostosowuje do niej swoje wybory życiowe, traktując ją jako biologiczny wyrok.',
        'Claude Steele i Joshua Aronson w swoich przełomowych badaniach nad Zagrożeniem Stereotypem (Stereotype Threat) wykazali, że sama świadomość bycia obserwowanym przez pryzmat negatywnej etykiety tożsamościowej drenuje zasoby pamięci roboczej w korze przedczołowej. W eksperymentach wybitni studenci rozwiązywali zadania matematyczne znacznie gorzej tylko wtedy, gdy przed testem przypomniano im o stereotypie dotyczącym ich grupy społecznej. To nie brak intelektu powodował spadek wyniku — to lęk przed potwierdzeniem cudzej etykiety blokował aparat poznawczy.',
        'W dobie algorytmów cyfrowych proces ten osiągnął stadium masowej polaryzacji. Algorytmy oraz bańki rówieśnicze wymuszają natychmiastowe autodeklaracje i wpisywanie się w jednorodne pakiety poglądów. Dochodzi do zjawiska self-stereotyping: jednostka, przyjmując etykietę danej grupy, natychmiast przejmuje cały zestaw jej lęków, uprzedzeń i języka, rezygnując z własnej autonomii myślenia.'
      ],
      subsections: [
        {
          title: 'Neurobiologia etykiety: Od słowa rodzica do sztywnej ścieżki w DMN',
          paragraphs: [
            'Słowa powtarzane w dzieciństwie („zawsze byłeś roztargniony”) zostają skonsolidowane w strukturach hipokampa i przyśrodkowej kory przedczołowej (mPFC). Za każdym razem, gdy dorosły człowiek staje przed zadaniem wymagającym skupienia, Domyślna Sieć Neuronalna (DMN) odtwarza ten zapis jako automatyczną predykcję: «nie poradzę sobie, bo taki jestem».',
            'Przełamanie tego schematu wymaga nie walki z samą etykietą, lecz dostarczenia układowi nerwowemu powtarzalnych, empirycznych dowodów behawioralnych z działania (tzw. dowodów tożsamościowych).'
          ],
          highlightBox: {
            title: 'Analiza słów naukowca: Claude Steele o uwięzieniu w cudzym spojrzeniu',
            content: 'Steele podkreślał: „Zagrożenie stereotypem nie wynika z tego, że wierzysz w etykietę. Wynika z tego, że wiesz, iż inni w nią wierzą — a Twój mózg zużywa gigantyczną energię na próbę jej obalenia, przez co brakuje mu tlenu na samo zadanie”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-17-4-etykieta-mikroskop',
        type: 'microscope',
        title: 'Człowiek pod mikroskopem: Marta i paraliż etykiety „analityka”',
        subtitle: 'Wiwisekcja mechanizmu: jak jedno zdanie z przeszłości paraliżuje awans dyrektorski',
        context: 'Marta stoi przed szansą objęcia stanowiska Vice President w firmie technologicznej.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: 'BODZIEC SYTUACYJNY',
            question: 'Co obiektywnie proponuje przełożony?',
            content: '„Marta, masz najlepsze kompetencje w dziale. Chcę, abyś została dyrektorem całego pionu analitycznego”.',
            subtext: 'Obiektywne zaproszenie do rozwoju poparte faktami.'
          },
          {
            stepNumber: 2,
            label: 'AKTYWACJA STAREJ ETYKIETY W DMN',
            question: 'Jaka automatyczna taśma pamięciowa zostaje uruchomiona?',
            content: 'W ułamku sekundy w mPFC odpala się głos ze szkoły: „Marta jest cicha i dobra do cyferek, ale do ludzi i przywództwa się nie nadaje”.',
            subtext: 'Błąd esencjalizmu: potraktowanie cechy nawykowej jako genetycznej granicy możliwości.'
          },
          {
            stepNumber: 3,
            label: 'REAKCJA SOMATYCZNO-EMOCJONALNA',
            question: 'Co rejestruje ciało Marty?',
            content: 'Gwałtowny skok kortyzolu, suchość w ustach, drżenie dłoni i ucisk za mostkiem — pień mózgu interpretuje propozycję jako zagrożenie wykluczeniem społecznym.',
            subtext: 'Fałszywy alarm układu limbicznego chroniący przed ryzykiem kompromitacji.'
          },
          {
            stepNumber: 4,
            label: 'RACJONALIZACJA DECYZJI',
            question: 'Jak kora przedczołowa usprawiedliwia ucieczkę?',
            content: 'Marta myśli: „Po co mi to? Będę musiała użerać się z ludźmi i politykować. Wolę czyste dane”. Rezygnuje z aplikacji.',
            subtext: 'Obrona spójności self-concept kosztem wieloletnich ambicji zawodowych.'
          },
          {
            stepNumber: 5,
            label: 'KOSZT SYSTEMOWY',
            question: 'Co dzieje się po 6 miesiącach?',
            content: 'Dyrektorem zostaje mniej kompetentny Robert, a Marta musi realizować jego chaotyczne polecenia, czując chroniczną frustrację i rozgoryczenie.',
            subtext: 'Potwierdzenie reguły: jeśli sam nie zarządzasz swoją tożsamością, inni zarządzają Twoim losem.'
          }
        ],
        takeaway: 'Etykieta to nie fakt biologiczny — to skrót myślowy, który zamienia się w klatkę, jeśli nie poddasz go empirycznej weryfikacji.'
      }
    },
    {
      id: 'sec-17-5',
      pageNumber: 13,
      sectionNumber: '17.5',
      title: 'Narracja Autobiograficzna i Pamięć — Jak Umysł Reinterpretuje Przeszłość',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Większość ludzi wierzy, że ich pamięć autobiograficzna działa jak biblioteka nagrań wideo, w której przechowywane są obiektywne zapisy minionych wydarzeń. Badania nad pamięcią rekonstrukcyjną (Elizabeth Loftus, Dan McAdams) jednoznacznie obaliły ten mit.',
        'Pamięć autobiograficzna jest elastycznym procesem pisania i redagowania opowieści na żywo. Za każdym razem, gdy przywołujesz wspomnienie z dzieciństwa lub młodości, Twój umysł nie odtwarza oryginalnego zapisu, lecz konstruuje go na nowo z obecnej perspektywy tożsamościowej.',
        'Oznacza to, że Twój aktualny self-concept decyduje o tym, które fakty z przeszłości zostaną wyciągnięte na wierzch, a które zignorowane. Jeśli dziś uważasz się za „ofiarę pecha”, Twój umysł bezbłędnie wyszuka w pamięci wszystkie sytuacje porażek, ignorując liczne epizody, w których odniosłeś sukces lub wykazałeś się sprawczością.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[0]
    },
    {
      id: 'sec-17-6',
      pageNumber: 16,
      sectionNumber: '17.6',
      title: 'Neuronauka Tożsamości: DMN, Hipokamp i Przyśrodkowa Kora Przedczołowa',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Na poziomie neurobiologicznym tworzenie i utrzymywanie tożsamości wymaga ścisłej współpracy trzech głównych układów mózgowych.',
        'Przyśrodkowa kora przedczołowa (mPFC) odpowiada za ewaluację informacji w odniesieniu do własnej osoby. To w mPFC zapala się sygnał aktywacji, gdy słyszysz swoje imię lub gdy oceniasz, czy dana cecha do Ciebie pasuje.',
        'Hipokamp dostarcza surowca w postaci koncontextualizowanych epizodów pamięciowych, zaś Domyślna Sieć Neuronalna (DMN) łączy te elementy w ciągłą narrację czasową. Gdy DMN działa bez kontroli ze strony kory przedczołowej (dlPFC), monolog wewnętrzny zaczyna kręcić się wokół utrwalonych schematów lękowych i ruminacji.'
      ]
    },
    {
      id: 'sec-17-7',
      pageNumber: 19,
      sectionNumber: '17.7',
      title: 'Jaźń Odzwierciedlona (Looking-Glass Self) Charlesa Cooleya',
      category: 'teoria',
      readingTimeMinutes: 18,
      quote: {
        text: 'Nie jestem tym, czym myślę, że jestem, ani tym, czym ty myślisz, że jestem. Jestem tym, czym myślę, że ty myślisz, że jestem.',
        author: 'Charles Horton Cooley (Human Nature and the Social Order, 1902)'
      },
      paragraphs: [
        'Socjolog Charles Horton Cooley sformułował fundamentalną zasadę psychologii społecznej: człowiek nie buduje obrazu siebie w laboratoryjnej izolacji, lecz w nieustannym zwierciadle relacyjnym, które nazwał „jaźnią odzwierciedloną” (Looking-Glass Self).',
        'Zgodnie z precyzyjną formułą Cooleya proces powstawania self-concept przebiega w trzech nierozłącznych krokach poznawczych:',
        'KROK 1: Wyobrażenie sobie, jak nasza osoba, zachowanie lub wypowiedź jawią się drugiemu człowiekowi (np. „Mój szef widzi we mnie człowieka kompetentnego”).\nKROK 2: Wyobrażenie sobie, jaki sąd wartościujący wydaje na nasz temat ta druga osoba (np. „On uważa, że poradzę sobie z tym kryzysem”).\nKROK 3: Doznanie emocjonalne powiązane z tym sądem — duma, satysfakcja, zawstydzenie lub upokorzenie.',
        'Kluczowym, często pomijanym przez pop-psychologię elementem teorii Cooleya jest słowo „WYOBRAŻENIE”. Człowiek rzadko reaguje na to, co inny człowiek RZECZYWIŚCIE o nim myśli — reaguje na WŁASNĄ PROJEKCJĘ cudzych myśli. Jeśli nosisz w sobie głęboki, nieuświadomiony lęk przed odrzuceniem, będziesz w neutralnym ziewnięciu rozmówcy widzieć pogardę i lekceważenie, budując swój obraz jako osoby nudnej i niechcianej.'
      ],
      subsections: [
        {
          title: 'Analiza słów Cooleya: Dlaczego „zwierciadło” bywa krzywym lustrem?',
          paragraphs: [
            'Cooley ostrzegał przed pasywnym przyjmowaniem społecznych odbić. Zwierciadło społeczne nie jest płaską taflą szkła — jest krzywym zwierciadłem z lunaparku, które zniekształca obraz pod wpływem projekcji, kompleksów i zmęczenia innych ludzi.',
            'Jeśli przeglądasz się w oczach narcystycznego rodzica lub lękowego partnera, otrzymujesz zniekształconą informację zwrotną, którą Twój układ nerwowy rejestruje jako obiektywną prawdę o Twojej wartości.'
          ],
          highlightBox: {
            title: 'Wgląd Psychologiczny: Kto trzyma Twoje lustro?',
            content: 'Zadaj sobie fundamentalne pytanie: „Czyje oczy widzę, kiedy patrzę na siebie w chwilach zwątpienia?”. Większość ludzi nie ocenia siebie własnym głosem — ocenia siebie echem głosu surowego rodzica, dawnego nauczyciela lub złośliwego rówieśnika sprzed lat.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-17-7-lustro-cooleya',
        type: 'dual_perspectives',
        title: 'Dwa Spojrzenia: Karolina i Jej Ojciec — Zwierciadło Oczekiwań',
        subtitle: 'Konfrontacja wyobrażonej oceny z rzeczywistymi potrzebami obu stron',
        context: 'Karolina rozważa rezygnację z prestiżowej kancelarii prawniczej, by zająć się architekturą wnętrz.',
        dualPerspective: {
          situation: 'Niedzielny obiad rodzinny. Karolina milczy, ściskając serwetkę pod stołem.',
          personA: {
            name: 'Karolina (Uwięziona w jaźni odzwierciedlonej)',
            quote: '„Jeśli powiem tacie, że rzucam prawo, zniszczę jego dumę, uzna mnie za życiową porażkę i przestanie mnie kochać”.',
            whatTheyKnow: 'Czuje chroniczny ucisk w klatce piersiowej i bezsenność od 8 miesięcy.',
            whatTheyMiss: 'Nie wie, że ojciec zmaga się z własnym wypaleniem zawodowym w sądownictwie.',
            interpretation: '„Moja wartość istnieje tylko tak długo, jak przynoszę sukcesy do rodzinnego stołu”.',
            coreNeed: 'Bezwarunkowa akceptacja i prawo do własnego powołania.',
            fear: 'Emocjonalne wykluczenie z rodziny i etykieta niewdzięcznicy.',
            action: 'Fałszywy uśmiech, potakiwanie i ukrywanie zgłoszenia na kurs projektowania.'
          },
          personB: {
            name: 'Ojciec (Autor projekcji statusowej)',
            quote: '„Chcę tylko, żeby Karolina miała stabilność finansową, której mi brakowało w jej wieku”.',
            whatTheyKnow: 'Wie, jak brutalny i niepewny bywa wolny rynek bez twardego zawodu regulowanego.',
            whatTheyMiss: 'Nie dostrzega, że jego córka stoi na krawędzi ciężkiego epizodu depresyjnego.',
            interpretation: '„Karolina jest stworzona do wielkich procesów, jest taka bystra”.',
            coreNeed: 'Poczucie bezpieczeństwa córki i potwierdzenie własnego sukcesu wychowawczego.',
            fear: 'Że córka nie utrzyma się z niepewnej pracy artystycznej.',
            action: 'Wypytywanie o sprawy kancelarii, chwalenie się córką przed znajomymi.'
          },
          synthesis: 'Karolina nie boi się ojca — boi się własnego wyobrażenia o jego odrzuceniu. Dopóki nie postawi sprawy jasno, oboje tkwią w tańcu pozorów, gdzie córka płaci za spokój ojca własnym zdrowiem psychicznym.'
        },
        takeaway: 'Nie pozwól, aby wyobrażenie o cudzych oczekiwaniach decydowało o tym, kim masz prawo się stać.'
      },
      caseStudyRef: caseStudiesChapterSeventeen[2]
    },
    {
      id: 'sec-17-8',
      pageNumber: 22,
      sectionNumber: '17.8',
      title: 'Tożsamość Społeczna i Grupy — Wpływ Przynależności na Wizerunek Siebie',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Teoria Tożsamości Społecznej (SJT - Henri Tajfel) pokazuje, że część naszego self-concept pochodzi bezpośrednio z przynależności do grup społecznych (grupa własna - in-group).',
        'Kiedy utożsamiamy się z grupą (np. firmą, klubem sportowym, ruchem społecznym), sukcesy tej grupy podbijają naszą osobistą samoocenę, zaś jej porażki są odczuwane jako osobiste ciosy.',
        'Zjawisko to niesie ze sobą niebezpieczeństwo zatracenia indywidualnej autonomii decyzyjnej. W obronie dobrego imienia grupy jednostka jest w stanie negować ewidentne fakty i rezygnować z własnych wartości etycznych.'
      ]
    },
    {
      id: 'sec-17-9',
      pageNumber: 25,
      sectionNumber: '17.9',
      title: 'Teatr Społeczny Ervinga Goffmana: Scena, Kulisy i Maska',
      category: 'teoria',
      readingTimeMinutes: 18,
      quote: {
        text: 'Cały świat jest sceną, ale to kulisy decydują o tym, czy aktor dotrwa do końca spektaklu bez załamania nerwowego.',
        author: 'Erving Goffman (The Presentation of Self in Everyday Life, 1959)'
      },
      paragraphs: [
        'Erving Goffman w swoim klasycznym dziele „Człowiek w teatrze życia codziennego” zrewolucjonizował socjologię i psychologię, odrzucając esencjalistyczny mit „jednolitej, stałej osobowości”. Zamiast tego przedstawił człowieka jako wytrawnego aktora nieustannie zarządzającego wrażeniem (Impression Management).',
        'Goffman podzielił przestrzeń ludzkiego doświadczenia na trzy kluczowe sfery:',
        '1. SCENA (Front Stage): Przestrzeń, w której obowiązuje określony protokół roli. Gdy lekarz zakłada biały fartuch, sędzia togę, a menedżer garnitur — wchodzą na scenę. Używają specyficznego słownictwa, kontrolują mimikę i ton głosu, by wysłać publiczności sygnał: «jestem dokładnie tym, za kogo mnie uważacie, możecie mi zaufać».\n2. KULISY (Backstage): Zamknięta, intymna przestrzeń, do której publiczność nie ma wstępu. To tu aktor może zdjąć niewygodne buty, zakląć ze złości, popłakać się ze zmęczenia lub przyznać przed zaufaną osobą: „Nie mam pojęcia, co robić, improwizowałem przez całe spotkanie”. Kulisy są biologicznym warunkiem regeneracji układu przywspółczulnego.\n3. POZA SCENĄ (Outside): Przestrzeń neutralna, w której jednostka nie jest ani na scenie przed publicznością, ani nie przygotowuje roli w kulisach.',
        'Najważniejsza teza Goffmana brzmi: ODGRYWANIE ROLI NIE JEST HIPOKRYZJĄ ANI KŁAMSTWEM. Jest fundamentalnym narzędziem koordynacji społecznej. Problem pojawia się wtedy, gdy człowiek traci dostęp do kulis — gdy z powodu smartfonów, kamer i ciągłej presji wizerunkowej zaczyna odgrywać rolę przez 24 godziny na dobę. Wtedy teatr zamienia się w kliniczne wyczerpanie i depersonalizację.'
      ],
      subsections: [
        {
          title: 'Wyczerpanie sceniczne w erze cyfrowej: Zagłada kulis',
          paragraphs: [
            'Współczesna kultura cyfrowa dokonała brutalnego zamachu na kulisy. Kiedyś powrót do domu oznaczał bezpieczne zamknięcie drzwi. Dzisiaj media społecznościowe przeniosły scenę do sypialni i łazienki. Człowiek nagrywa relacje z przygotowywania śniadania, odgrywając rolę „człowieka sukcesu z uśmiechem”.',
            'Brak kulis prowadzi do tzw. zmęczenia autoprezentacyjnego (Ego Depletion in Impression Management). Kora przedczołowa, zmuszona do ciągłego monitorowania mimiki i tonu, ulega przeciążeniu, co objawia się nagłymi wybuchami wściekłości lub apatią.'
          ],
          highlightBox: {
            title: 'Ostrzeżenie Goffmana: Kiedy maska wrasta w twarz',
            content: 'Goffman pisał: „Początkowo odgrywamy rolę z dystansem. Lecz w miarę upływu lat, jeśli nie posiadamy autentycznych kulis, maska wrasta w skórę — i zaczynamy naprawdę wierzyć, że jesteśmy wyłącznie rolą, którą gramy dla zysku lub świętego spokoju”.',
            type: 'warning'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-17-9-teatr-goffmana',
        type: 'what_if',
        title: 'Zmień jeden element: Piotr i syndrom permanentnej sceny',
        subtitle: 'Symulacja wpływu odbudowy kulis na zdrowie psychiczne influencera',
        context: 'Piotr (32 lata, twórca internetowy) odczuwa chroniczny lęk i anhedonię, relacjonując całe życie w sieci.',
        whatIfOptions: {
          defaultScenario: 'Piotr traktuje każde wyjście z partnerką i każdy posiłek jako materiał na vloga, ukrywając przed publicznością ataki paniki.',
          options: [
            {
              id: 'c17-opt-g1',
              changeLabel: 'Wprowadzenie żelaznych kulis: zakaz nagrywania po 18:00 i sypialnia bez ekranów',
              resultingInterpretation: 'Układ nerwowy Piotra po 14 dniach wyłącza stan stałej mobilizacji współczulnej; poziom kortyzolu spada o 38%.',
              resultingBehavior: 'Piotr przestaje odczuwać dławiący ucisk w gardle, a jego relacja z partnerką odzyskuje intymność.',
              psychologicalImpact: 'Odzyskanie kontaktu z własnymi autentycznymi emocjami bez konieczności ich monetyzacji.'
            },
            {
              id: 'c17-opt-g2',
              changeLabel: 'Publiczne przyznanie się do kryzysu na scenie (tzw. pornografia emocjonalna dla lajków)',
              resultingInterpretation: 'Publiczność nagradza post tysiącami serduszek, lecz Piotr czuje jeszcze większy wstyd — jego słabość stała się nową rolą.',
              resultingBehavior: 'Uwięzienie w kolejnej roli: „autentycznego cierpiącego”, co uniemożliwia rzeczywistą psychoterapię.',
              psychologicalImpact: 'Kolejny poziom uwikłania w teatr społeczny bez stworzenia prawdziwych kulis.'
            }
          ]
        },
        takeaway: 'Lekarstwem na wyczerpanie sceniczne nie jest pokazywanie swoich łez na scenie, lecz zejście za kulisy w bezpiecznej samotności lub z bliskim człowiekiem.'
      },
      caseStudyRef: caseStudiesChapterSeventeen[3]
    },
    {
      id: 'sec-17-10',
      pageNumber: 28,
      sectionNumber: '17.10',
      title: 'Konflikt Ról Społecznych i Jego Koszty Psychologiczne',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'W miarę jak człowiek wkracza w dojrzałość, liczba pełnionych przez niego ról rośnie: pracownik, przełożony, partner, rodzic, dziecko starzejących się rodziców, przyjaciel.',
        'Konflikt ról (Role Conflict) występuje wtedy, gdy wymogi jednej roli stoją w bezpośredniej sprzeczności z wymogami drugiej. Przykładowo, rola ambitnego menedżera wymaga pracy po 12 godzin, zaś rola obecnego rodzica wymaga obecności w domu o 17:00.',
        'Brak jasnej hierarchii wartości w sytuacji konfliktu ról wywołuje paraliżujący dysonans i przewlekłe poczucie winy, niezależnie od podjętej decyzji.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[4]
    },
    {
      id: 'sec-17-11',
      pageNumber: 31,
      sectionNumber: '17.11',
      title: 'Mechanizmy Obrony Obrazu Siebie — Od Racjonalizacji po Wypieranie',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Umysł stosuje cały wachlarz mechanizmów obronnych (Identity Preservation Bias), by chronić spójność i pozytywny wizerunek self-concept przed zagrażającymi informacjami.',
        'Racjonalizacja pozwala szukać logicznie brzmiących usprawiedliwień dla własnych błędów („Zrobiłem to tylko dlatego, że oni mnie sprowokowali”), zaś wyparcie usuwa z pola uwagi fakty podważające naszą szlachetność.',
        'Cena za nadmierną obronę ego jest ogromna: człowiek przestaje uczyć się na własnych błędach, tworząc fałszywą mapę rzeczywistości i izolując się od krytyki merytorycznej.'
      ]
    },
    {
      id: 'sec-17-12',
      pageNumber: 34,
      sectionNumber: '17.12',
      title: 'Tożsamość Autonomiczna vs Zewnętrznie Uzależniona',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Tożsamość zorientowana na zewnętrzną walidację (External Identity Validation) działa jak liść na wietrze: jej poziom stabilności waha się w zależności od liczby polubień w sieci, ocen szefa i nastroju partnera.',
        'Tożsamość autonomiczna opiera się na wewnętrznym kompasie wartości i własnych standardach samoregulacji. Człowiek o tożsamości autonomicznej potrafi przyjąć krytykę bez załamania poczucia wartości, gdyż jego środek ciężkości leży wewnątrz, a nie na zewnątrz.'
      ]
    },
    {
      id: 'sec-17-13',
      pageNumber: 37,
      sectionNumber: '17.13',
      title: 'Growth Mindset a Tożsamość — Carol Dweck i Psychologia Rozwoju',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'W nastawieniu na stałość sukces polega na udowodnieniu, że jesteś mądry lub utalentowany. W nastawieniu na rozwój sukces polega na rozciąganiu swoich granic, by stać się mądrzejszym.',
        author: 'Carol S. Dweck (Mindset: The New Psychology of Success, 2006)'
      },
      paragraphs: [
        'Przełomowe badania prof. Carol Dweck ze Stanford University nad dwiema orientacjami umysłu — nastawieniem na stałość (Fixed Mindset) oraz nastawieniem na rozwój (Growth Mindset) — stanowią jeden z najważniejszych filarów współczesnej psychologii tożsamości.',
        'Dweck wykazała, że ludzie przyjmują jedną z dwóch fundamentalnych teorii na temat własnych zdolności, inteligencji i charakteru:',
        '1. NASTAWIENIE NA STAŁOŚĆ (Fixed Mindset): Przekonanie, że cechy osobiste są z góry daną, niezmienną wielkością biologiczną („albo masz talent matematyczny, albo nie”; „albo jesteś urodzonym liderem, albo nikim”). W tym modelu każde wyzwanie staje się śmiertelnym zagrożeniem tożsamościowym. Jeśli musisz ciężko pracować nad zadaniem, oznacza to w Twojej logice, że brak Ci talentu. Jeśli popełnisz błąd — nie popełniłeś błędu operacyjnego, lecz ujawniłeś swoją genetyczną niższość.\n2. NASTAWIENIE NA ROZWÓJ (Growth Mindset): Przekonanie, że zdolności wyjściowe są zaledwie punktem startowym, a ludzki mózg dzięki plastyczności synaptycznej uczy się i adaptuje pod wpływem właściwej strategii, wysiłku i informacji zwrotnej.',
        'NAJCZĘSTSZE ZNIEKSZTAŁCENIE POP-PSYCHOLOGICZNE: Wiele szkół i firm spłyciło odkrycie Dweck do pustego sloganu: „po prostu wierz w siebie i ciężko pracuj”. Sama Dweck w swoich późniejszych pracach z całą mocą podkreślała: sam ślepy wysiłek bez korekty strategii i poszukiwania nowej wiedzy nie jest Growth Mindset — jest upartą bezradnością. Prawdziwe nastawienie na rozwój polega na ciekawości wobec błędu: «dlaczego ta metoda nie zadziałała i jak muszę przebudować proces?».',
        'Eksperymenty Dweck z dziećmi rozwiązującymi łamigłówki dały porażające rezultaty: dzieci chwalone za INTELIGENCJĘ („Jesteś taki mądry!”) w kolejnej rundzie wybierały zadania ŁATWE, byle tylko nie zaryzykować utraty etykiety mądrego. Dzieci chwalone za STRATEGIĘ I WYSIŁEK („Widzę, jak wspaniale szukałeś różnych dróg rozwiązania!”) wybierały zadania TRUDNE, traktując błąd jako fascynującą łamigłówkę do rozwikłania.'
      ],
      subsections: [
        {
          title: 'Neurobiologia błędu: Co widzi EEG w Fixed vs Growth Mindset?',
          paragraphs: [
            'Badania elektroencefalograficzne (EEG) przeprowadzone przez Jasona Mosera i Carol Dweck pokazały, że mózgi osób z Growth Mindset w chwili popełnienia błędu wykazują potężną falę Pe (error positivity) w przedniej korze obręczy (ACC). Ich mózgi natychmiast kierują uwagę na analizę pomyłki i szukanie nowej ścieżki.',
            'U osób z Fixed Mindset w chwili błędu pojawia się wczesny sygnał lękowy (ERN), po czym kora przedczołowa gwałtownie WYŁĄCZA uwagę z zadania. Umysł ucieka od widoku błędu, by chronić kruche poczucie własnej wartości.'
          ],
          highlightBox: {
            title: 'Analiza słów Carol Dweck: Przekleństwo etykiety geniusza',
            content: 'Dweck zauważyła: „Chwalenie dzieci za ich inteligencję nie buduje ich pewności siebie. Niszczy ją. Sprawia, że stają się niewolnikami cudzej aprobaty i unikają wyzwań, bo każdy trudny problem staje się groźbą zdemaskowania ich rzekomej przeciętności”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-17-13-slowa-dweck',
        type: 'counter_case',
        title: 'Kontrprzypadek: Gdy pochwała niszczy motywację — Wiwisekcja Dweck',
        subtitle: 'Dlaczego chwalenie za talent paraliżuje rozwój inżyniera i studenta',
        context: 'Projektowanie kultury feedbacku w zespole innowacji technologicznych.',
        counterCase: {
          standardTheory: 'Intuicja podpowiada: aby zmotywować pracownika lub dziecko do wielkich osiągnięć, należy nieustannie powtarzać mu, jakim jest wybitnym geniuszem i talentem.',
          counterExample: 'Kamil, utalentowany programista, od podstawówki słyszał: „Jesteś geniuszem kodu”. W wieku 28 lat, gdy napotkał na projekt wymagający nowej, trudnej architektury rozproszonej, wpadł w paraliż. Zamiast uczyć się nowej technologii, symulował chorobę i spychał zadania na kolegów. Wolał uchodzić za leniwego niż zaryzykować, że napisze słaby kod i straci tożsamość geniusza.',
          whyItDefiesRule: 'Pochwała tożsamościowa zamyka umysł w Fixed Mindset. Człowiek staje się zakładnikiem własnej reputacji.',
          deeperLesson: 'Skuteczna informacja zwrotna nigdy nie dotyczy tożsamości człowieka — dotyczy konkretnej strategii, analizy parametrów i procesu poszukiwania rozwiązań.'
        },
        takeaway: 'Nie chwal za to, kim ktoś rzekomo jest — doceniaj to, jak analizuje, jak testuje hipotezy i jak wyciąga wnioski z potknięć.'
      }
    },
    {
      id: 'sec-17-14',
      pageNumber: 40,
      sectionNumber: '17.14',
      title: 'Teoria Rozbieżności Ja — Ja Realne, Idealne i Powinnościowe',
      category: 'teoria',
      readingTimeMinutes: 18,
      quote: {
        text: 'Rozbieżność między tym, kim jesteś, a tym, kim powinieneś być według innych, nie generuje smutku — generuje stan ciągłego czuwania przed karą.',
        author: 'E. Tory Higgins (Self-Discrepancy: A Theory Relating Affect and Motivation, 1987)'
      },
      paragraphs: [
        'E. Tory Higgins z Columbia University w swojej fundamentalnej Teorii Rozbieżności Ja (Self-Discrepancy Theory) dokonał matematycznie precyzyjnego rozbicia struktury ludzkiego cierpienia emocjonalnego na wektory tożsamościowe.',
        'Higgins zdefiniował trzy domeny Ja (Self-Domains):',
        '1. JA REALNE (Actual Self): Zbiór cech i zachowań, które według Twojego przekonania rzeczywiście posiadasz w tej chwili w świecie fizycznym.\n2. JA IDEALNE (Ideal Self): Reprezentacja Twoich własnych najgłębszych marzeń, pragnień, aspiracji i nadziei — kim szczerze chciałbyś się stać, gdybyś nie był ograniczony strachem.\n3. JA POWINNOŚCIOWE (Ought Self): Zbiór obowiązków, nakazów, moralnych powinności i oczekiwań, które w Twoim przekonaniu nakłada na Ciebie rodzina, religia, korporacja lub społeczeństwo.',
        'Najważniejsze odkrycie Higginsa polega na powiązaniu konkretnego typu rozbieżności z precyzyjną odpowiedzią emocjonalną i fizjologiczną układu nerwowego:',
        'ROZBIEŻNOŚĆ 1: Ja Realne vs Ja Idealne (Dejection-related emotions).\nGdy Twoje rzeczywiste życie drastycznie odbiega od Twoich marzeń, czujesz smutek, apatię, rozczarowanie sobą i bezsilność. To stan hipoaktywacji układu dopaminergicznego — poczucie braku nagrody i utraty sensu.',
        'ROZBIEŻNOŚĆ 2: Ja Realne vs Ja Powinnościowe (Agitation-related emotions).\nGdy Twoje zachowanie łamie standardy Ja Powinnościowego, Twój układ nerwowy nie odczuwa smutku — odczuwa lęk, panikę, niepokój, poczucie winy i napięcie mięśniowe. Ciało migdałowate interpretuje tę rozbieżność jako natychmiastowe zagrożenie karą, utratą statusu lub odrzuceniem przez stado.',
        'Większość ludzi leczy niepokój lekami lub rozrywką, nie rozumiejąc, że ich lęk jest czysto tożsamościową reakcją na próbę spełnienia nierealistycznych, obcych powinności (introjektów), które nie mają nic wspólnego z ich Ja Idealnym.'
      ],
      subsections: [
        {
          title: 'Perspektywa Własna vs Perspektywa Znaczącego Innego',
          paragraphs: [
            'Higgins dodał do swojego modelu tzw. perspektywę obserwatora (Standpoints on the Self). Możesz porównywać swoje Ja Realne z własnym Ja Powinnościowym („ja sam uważam, że powinienem...”) lub z Ja Powinnościowym w oczach matki, szefa czy współmałżonka.',
            'Rozbieżność z wymogami narzuconymi przez innych generuje wstyd i lęk przed karą, podczas gdy rozbieżność z własnymi zasadami etycznymi rodzi poczucie winy.'
          ],
          highlightBox: {
            title: 'Wgląd Higginsa: Prawdziwe źródło przewlekłego niepokoju',
            content: 'Higgins pisał: „Ludzie nie cierpią dlatego, że są słabi. Cierpią dlatego, że mierzą swoje codzienne zachowanie dwoma sprzecznymi linijkami: linijką własnych marzeń i linijką cudzych roszczeń”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-17-14-higgins-rozbieznosc',
        type: 'what_we_know',
        title: 'Co naprawdę wiemy? — Demontaż Rozbieżności Ja wg Higginsa',
        subtitle: 'Rozdzielenie faktów od iluzji w genezie smutku i stanów lękowych',
        context: 'Analiza pacjenta zmagającego się z poczuciem wypalenia i lękiem wolnopłynącym.',
        whatWeKnow: {
          items: [
            {
              id: 'c17-hig-1',
              statement: 'Przewlekły lęk i pobudzenie nerwowe wynikają najczęściej z rozbieżności między zachowaniem a cudzymi powinnościami (Ja Powinnościowe).',
              category: 'fakt',
              explanation: 'To twardo udowodniona teza Higginsa: niespełnianie wymogów Ja Powinnościowego wyzwala oś stresu i lęk przed karą społeczną.'
            },
            {
              id: 'c17-hig-2',
              statement: 'Aby pozbyć się depresji i smutku, wystarczy zmusić się do cięższej pracy i spełnienia wszystkich oczekiwań otoczenia.',
              category: 'interpretacja',
              explanation: 'Błąd poznawczy. Spełnianie cudzych oczekiwań powiększa dystans do Ja Idealnego (własnych marzeń), pogłębiając apatię i pustkę egzystencjalną.'
            },
            {
              id: 'c17-hig-3',
              statement: 'Ja Powinnościowe często składa się z bezkrytycznie przejętych skryptów rodzicielskich, które nie zostały poddane dorosłej weryfikacji.',
              category: 'fakt',
              explanation: 'Proces introjekcji sprawia, że dorosły 40-latek nadal boi się wyimaginowanej nagany ojca, paraliżując swoje wybory biznesowe.'
            },
            {
              id: 'c17-hig-4',
              statement: 'Człowiek dojrzały musi całkowicie zniszczyć swoje Ja Powinnościowe i żyć wyłącznie impulsami.',
              category: 'interpretacja',
              explanation: 'To infantylna skrajność. Dojrzałość polega na świadomej selekcji: odrzuceniu toksycznych powinności i zachowaniu tych, które chronią etykę i bliskich.'
            }
          ]
        },
        takeaway: 'Ulecz swój lęk poprzez audyt cudzych powinności, a ulecz swój smutek poprzez powrót do małych kroków realizujących Twoje Ja Idealne.'
      }
    },
    {
      id: 'sec-17-15',
      pageNumber: 43,
      sectionNumber: '17.15',
      title: 'Zmiana Tożsamości w Biegu Życia — Psychologia Ewoluującego Ja',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Tożsamość nie jest pomnikiem wykutym w granicie, lecz żywym organizmem, który przechodzi przez naturalne kryzysy rozwojowe (Erik Erikson).',
        'Zdolność do redefiniowania siebie po przełomowych wydarzeniach (zmiana kariery, rozstanie, narodziny dziecka, starzenie się) determinuje odporność psychiczną (resilience).',
        'Kluczem do elastyczności tożsamościowej jest traktowanie siebie jako autora procesu, a nie jako więźnia własnej historii.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[5]
    },
    {
      id: 'sec-17-16',
      pageNumber: 46,
      sectionNumber: '17.16',
      title: '🔬 CO NADAL NIE JEST JASNE? Ograniczenia i Pytania Otwarte',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Naukowe badanie tożsamości napotyka na poważne pytania metodologiczne. W jakim stopniu genetycznie uwarunkowane cechy temperamentu ograniczają plastyczność naszej self-concept?',
        'Choć badania nad neuroplastycznością pokazują możliwość modyfikacji narracji, spór między determinizmem biologicznym a konstruktywizmem społecznym wciąż pozostaje otwarty.'
      ]
    },
    {
      id: 'sec-17-17',
      pageNumber: 48,
      sectionNumber: '17.17',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Strategie Redefinicji Narracji',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        '1. Identyfikacja kluczowej etykiety: Zauważ moment, w którym wypowiadasz w myśli słowa „Ja po prostu taki jestem”.',
        '2. Zastosowanie pauzy językowej: Przetłumacz to zdanie na konkretną sytuację i brak nawyku.',
        '3. Mikrokrok tożsamościowy: Wykonaj jedno małe działanie, które jest bezpośrednim zaprzeczeniem starej etykiety.',
        '4. Zapis w dzienniku sprawczości: Zarejestruj fakt wykonania akcji jako nowy dowód w Twojej prywatnej bazie danych.'
      ],
      exerciseRef: selfExercisesChapterSeventeen[0]
    },
    {
      id: 'sec-17-18',
      pageNumber: 50,
      sectionNumber: '17.18',
      title: 'Warsztat Samorozwojowy: Zbiór Narzędzi Konstrukcji Self',
      category: 'cwiczenia',
      readingTimeMinutes: 12,
      paragraphs: [
        'Poniżej znajduje się zestaw ćwiczeń dedykowanych dekonstrukcji ograniczających schematów, wyznaczeniu granic w rolach i zbudowaniu spójnej deklaracji procesowej.'
      ],
      exerciseRef: selfExercisesChapterSeventeen[1]
    },
    {
      id: 'sec-17-19',
      pageNumber: 53,
      sectionNumber: '17.19',
      title: 'Most do Rozdziału 18 oraz Powiązania z Tomem I i II',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'Tożsamość opiera się na fundamencie procesów poznawczych z Tomu I (pamięć autobiograficzna, uwaga) oraz dynamiki społecznej z Tomu II (konformizm, teatr społeczny).',
        'Jednak cegiełkami budującymi naszą tożsamość są przekonania. W następnym rozdziale zbadamy, jak powstają schematy poznawcze i jak aktualizować swój sposób patrzenia na świat.'
      ]
    },
    {
      id: 'sec-17-20',
      pageNumber: 55,
      sectionNumber: '17.20',
      title: 'Podsumowanie Rozdziału 1: Kluczowe Wglądy',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        '1. Tożsamość to dynamiczny proces rekonstruowany przez DMN, a nie sztywna matryca.',
        '2. Etykiety „ja taki jestem” blokują neuroplastyczność i zmianę nawyków.',
        '3. Zamiana etykiet na opisy behawioralne odzyskuje sprawczość w dlPFC.',
        '4. Zrównoważona tożsamość stoi na wielu niezależnych filarach i elastyczności procesowej.'
      ]
    },
    {
      id: 'sec-17-21',
      pageNumber: 58,
      sectionNumber: '17.21',
      title: 'Egzamin Końcowy Rozdziału 1: Tożsamość i Obraz Siebie',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu architektury tożsamości, etykiet tożsamościowych i reakcji zachowawczych. Poniższy test zawiera pytania analityczne wymagające głębokiego zrozumienia opisywanych procesów.'
      ]
    }
  ]
};
