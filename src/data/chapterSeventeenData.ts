import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterSeventeenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii społecznej i poznawczej pojęcie „obrazu siebie” (self-concept) różni się od „tożsamości osobistej” tym, że:',
    topic: 'Struktura Tożsamości',
    sectionRef: 'Sekcja 17.2',
    options: [
      { label: 'A', text: 'Obraz siebie to genetycznie zdeterminowany odruch, podczas gdy tożsamość osobista zdepends zależy wyłącznie od wykształcenia.', isCorrect: false },
      { label: 'B', text: 'Obraz siebie to całokształt przekonań, wyobrażeń i ocen na własny temat, natomiast tożsamość osobista dotyczy subiektywnego poczucia odrębności, spójności i ciągłości w czasie.', isCorrect: true },
      { label: 'C', text: 'Tożsamość osobista znika po ukończeniu 25. roku życia i ustępuje miejsca obrazowi siebie.', isCorrect: false },
      { label: 'D', text: 'Obraz siebie jest pojęciem z filozofii neobarokowej, a tożsamość nie występuje w naukach społecznych.', isCorrect: false }
    ],
    explanation: 'Obraz siebie (self-concept) gromadzi wiedzę deklaratywną („kim jestem, jaki jestem”), podczas gdy tożsamość daje podmiotowe poczucie trwania tego samego „ja” mimo upływu lat i zmian okoliczności.',
    keyTakeaway: 'Obraz siebie to mapa właściwości, tożsamość to poczucie bycia autorem i gospodarzem tej mapy.'
  },
  {
    id: 2,
    question: 'Na czym polega zjawisko self-stereotyping (samospełniającego się etykietowania tożsamościowego)?',
    topic: 'Etykiety i Schematy Tożsamościowe',
    sectionRef: 'Sekcja 17.5',
    options: [
      { label: 'A', text: 'Przyjęcie przez jednostkę etykiety roli lub grupy (np. „jestem humanistą, nie umiem w cyfry”) i podświadome dostosowanie zachowań do ograniczeń wpisanych w tę etykietę.', isCorrect: true },
      { label: 'B', text: 'Kupowanie produktów wyłącznie z naklejoną marką premium.', isCorrect: false },
      { label: 'C', text: 'Trwałe unikanie kontaktów z ludźmi z innych krajów.', isCorrect: false },
      { label: 'D', text: 'Przekonanie, że każdy człowiek ma dokładnie te same cechy charakteru.', isCorrect: false }
    ],
    explanation: 'Mózg dąży do spójności (cognitive consistency). Gdy przyjmujesz etykietę „nieśmiałego”, ciało migdałowate traktuje próbę publicznego zabrania głosu jako złamanie wewnętrznego skryptu.',
    keyTakeaway: 'Etykieta staje się samospełniającą się przepowiednią, gdy pomylisz chwilowy nawyk ze sztywną cechą.'
  },
  {
    id: 3,
    question: 'W jaki sposób Domyślna Sieć Neuronalna (Default Mode Network – DMN) uczestniczy w tworzeniu narracji autobiograficznej?',
    topic: 'Neuronauka Tożsamości',
    sectionRef: 'Sekcja 17.1',
    options: [
      { label: 'A', text: 'Steruje wyłącznie ruchem gałek ocznych podczas snu fazy REM.', isCorrect: false },
      { label: 'B', text: 'Łączy wspomnienia z hipokampa, antycypacje przyszłości z kory przedczołowej i wycenę emocjonalną, tworząc ciągłą narrację o tym, kim jesteśmy.', isCorrect: true },
      { label: 'C', text: 'Aktywuje się wyłącznie w trakcie rozwiązywania skomplikowanych równań różniczkowych.', isCorrect: false },
      { label: 'D', text: 'Jest odpowiedzialna za skurcze mięśni gładkich układu pokarmowego.', isCorrect: false }
    ],
    explanation: 'Gdy nie rozwiązujemy zadania celowego, DMN generuje wewnętrzny monolog i opowieść autobiograficzną. To tam rekonstruowane są sensy i interpretacje minionych zdarzeń.',
    keyTakeaway: 'Tożsamość jest wynikiem ciągłej pracy DMN, a nie jednorazowo wykutej rzeźby.'
  },
  {
    id: 4,
    question: 'Czym różni się podejście esencjalistyczne do tożsamości („odkrywanie prawdziwego ja”) od podejścia konstruktywistycznego („tworzenie tożsamości”)?',
    topic: 'Konstruktywizm vs Esencjalizm',
    sectionRef: 'Sekcja 17.6',
    options: [
      { label: 'A', text: 'Esencjalizm traktuje tożsamość jako stałą, zamrożoną substancję do odkopania, podczas gdy konstruktywizm widzi ją jako otwarty proces kształtowany przez decyzje i nawyki.', isCorrect: true },
      { label: 'B', text: 'Konstruktywizm zakłada, że człowiek rodzi się z gotowym zestawem przekonań zapisanych w genach.', isCorrect: false },
      { label: 'C', text: 'Esencjalizm jest metodą leczenia chorób zakaźnych w szpitalach.', isCorrect: false },
      { label: 'D', text: 'Oba podejścia twierdzą, że zachowanie człowieka nie ma żadnego związku z jego doświadczeniami.', isCorrect: false }
    ],
    explanation: 'Szukanie „gotowego ja” wywołuje bierność i poczucie utknięcia. Podejście procesowe umożliwia aktywną przebudowę własnych nawyków i spójności życiowej.',
    keyTakeaway: 'Nie szukaj prawdziwego siebie — buduj wartościowe zachowania w świecie realnym.'
  },
  {
    id: 5,
    question: 'Dlaczego zdanie „W tej sytuacji odkładałem zadanie z powodu braku jasnych wytycznych” jest bezporównania sprawniejsze rozwojowo niż „Jestem leniwy”?',
    topic: 'Gramatyka Wewnętrznego Monologu',
    sectionRef: 'Sekcja 17.8',
    options: [
      { label: 'A', text: 'Ponieważ jest dłuższe i brzmi mądrzej w towarzystwie.', isCorrect: false },
      { label: 'B', text: 'Zmienia ocenę esencjalistyczną („jestem skażony”) na opis behawioralny i kontekstowy, otwierając przestrzeń do konkretnej modyfikacji działania.', isCorrect: true },
      { label: 'C', text: 'Ponieważ zwalnia człowieka z jakiejkolwiek odpowiedzialności za wynik.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, oba zdania wywołują ten sam poziom stresu.', isCorrect: false }
    ],
    explanation: 'Zdania esencjalistyczne aktywują shame response i paraliż, podczas gdy precyzyjny opis kontekstu uruchamia dlPFC do rozwiązania problemu.',
    keyTakeaway: 'Zamień tożsamościowe wyroki na procesowe opisy zachowania.'
  },
  {
    id: 6,
    question: 'W koncepcji Ervinga Goffmana dramaturgia życia codziennego opisuje podział na scenę (front stage) i kulisy (backstage). Jakie zagrożenie wiąże się ze zatarciem tej granicy?',
    topic: 'Maski i Teatr Społeczny',
    sectionRef: 'Sekcja 17.9',
    options: [
      { label: 'A', text: 'Brak możliwości kupienia biletów do teatru na sztuki klasyczne.', isCorrect: false },
      { label: 'B', text: 'Ciągła potrzeba odgrywania wyreżyserowanej roli (np. w mediach społecznościowych) bez przestrzeni kulis wywołuje wyczerpanie tożsamościowe i alienację.', isCorrect: true },
      { label: 'C', text: 'Utrata umiejętności czytania tekstów pisanych.', isCorrect: false },
      { label: 'D', text: 'Niekontrolowany wzrost masy ciała.', isCorrect: false }
    ],
    explanation: 'Kulisy są niezbędne dla regeneracji układu nerwowego i zrzucenia społecznego gorsetu. Bez nich człowiek zaczyna utożsamiać się ze stworzoną fasadą.',
    keyTakeaway: 'Dbaj o kulisy, gdzie nie musisz odgrywać żadnej roli społecznej.'
  },
  {
    id: 7,
    question: 'Czym charakteryzuje się tożsamość autonomiczna w przeciwieństwie do tożsamości uzależnionej zewnętrznie (External Identity Validation)?',
    topic: 'Tożsamość Autonomiczna',
    sectionRef: 'Sekcja 17.12',
    options: [
      { label: 'A', text: 'Tożsamość autonomiczna opiera się na wewnętrznych wartościach i standardach samoregulacji, podczas gdy zewnętrzna waha się w zależności od lajków, statusu i aprobaty.', isCorrect: true },
      { label: 'B', text: 'Tożsamość autonomiczna wymaga całkowitego zerwania więzi z rodziną i przyjaciółmi.', isCorrect: false },
      { label: 'C', text: 'Tożsamość zewnętrzna występuje wyłącznie u osób pracujących w budownictwie.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy w stabilności psychicznej między oboma typami.', isCorrect: false }
    ],
    explanation: 'Tożsamość ugruntowana wewnętrznie wytrzymuje krytykę i odrzucenie, gdyż jej środek ciężkości nie leży w opiniach otoczenia.',
    keyTakeaway: 'Oparcie tożsamości na zewnętrznej aprobacie to budowa domu na cudzym fundamencie.'
  },
  {
    id: 8,
    question: 'Co według Carol Dweck dzieje się w mózgu osoby o nastawieniu na rozwój (Growth Mindset), gdy napotyka porażkę tożsamościową?',
    topic: 'Growth Mindset a Tożsamość',
    sectionRef: 'Sekcja 17.13',
    options: [
      { label: 'A', text: 'Traktuje niepowodzenie jako informację zwrotną o niedoskonałości zastosowanej strategii, a nie jako ostateczny wyrok na temat własnych wartości i inteligencji.', isCorrect: true },
      { label: 'B', text: 'Trwale wyłącza działanie kory przedczołowej na okres co najmniej dwóch lat.', isCorrect: false },
      { label: 'C', text: 'Przekonuje siebie, że cele i wyniki są całkowicie bezwartościowe.', isCorrect: false },
      { label: 'D', text: 'Uważa, że wygrana zależy wyłącznie od układu gwiazd.', isCorrect: false }
    ],
    explanation: 'Fixed mindset widzi w porażce dowód niekompetencji („jestem do niczego”), podczas gdy Growth mindset rejestruje sygnał do korekty procesu („ta metoda nie zadziałała”).',
    keyTakeaway: 'Porażka to zdarzenie w czasie, a nie cecha człowieka.'
  },
  {
    id: 9,
    question: 'Na czym polega zjawisko „jaźni odzwierciedlonej” (Looking-Glass Self) Charlesa Cooleya?',
    topic: 'Jaźń Odzwierciedlona',
    sectionRef: 'Sekcja 17.7',
    options: [
      { label: 'A', text: 'Budujemy wyobrażenie o sobie na podstawie tego, jak sądzimy, że widzimy i oceniamy nas kluczowe osoby z otoczenia.', isCorrect: true },
      { label: 'B', text: 'Mierzymy swój wzrost przed lustrem co rano.', isCorrect: false },
      { label: 'C', text: 'Kopiujemy ubrania aktorów z filmów sensacyjnych.', isCorrect: false },
      { label: 'D', text: 'Unikamy patrzenia w gładkie powierzchnie w miejscach publicznych.', isCorrect: false }
    ],
    explanation: 'Otoczenie działa jak zwierciadło. Odbierane od najmłodszych lat sygnały stają się budulcem wewnętrznej opowieści o własnej wartości i roli w świecie.',
    keyTakeaway: 'Zbadaj, czyje oczy patrzą na Ciebie, gdy oceniasz siebie przed lustrem.'
  },
  {
    id: 10,
    question: 'Jakie zagrożenie niesie ze sobą nadmierna obrona obrazu siebie (Identity Preservation Bias) w obliczu nowych, twardych faktów?',
    topic: 'Obrona Obrazu Siebie',
    sectionRef: 'Sekcja 17.10',
    options: [
      { label: 'A', text: 'Zmusza umysł do zniekształcania rzeczywistości, wypierania faktów i racjonalizacji, byle nie dopuścić do bolesnej korekty self-concept.', isCorrect: true },
      { label: 'B', text: 'Prowadzi do natychmiastowego opanowania trzech języków obcych.', isCorrect: false },
      { label: 'C', text: 'Wywołuje wyłącznie pozytywne reakcje u współtowarzyszy.', isCorrect: false },
      { label: 'D', text: 'Sprawia, że człowiek nigdy się nie myli.', isCorrect: false }
    ],
    explanation: 'Gdy fakt zagraża wyobrażeniu o własnej szlachetności lub nieomylności, mózg woli odrzucić fakt niż zmienić narrację o sobie.',
    keyTakeaway: 'Prawda merytoryczna bywa składana na ołtarzu ochrony własnego ego.'
  },
  {
    id: 11,
    question: 'W jaki sposób konflikt ról społecznych (np. menedżer zwolennik vs wyrozumiały przyjaciel) wpływa na poczucie spójności tożsamościowej?',
    topic: 'Konflikt Ról',
    sectionRef: 'Sekcja 17.11',
    options: [
      { label: 'A', text: 'Generuje paraliż decyzyjny i poczucie zdrady własnych zasad, dopóki jednostka nie ustali nadrzędnej hierarchii wartości.', isCorrect: true },
      { label: 'B', text: 'Automatycznie podwaja pensję na koncie bankowym.', isCorrect: false },
      { label: 'C', text: 'Sprawia, że obie role stają się idealnie spójne bez żadnego wysiłku.', isCorrect: false },
      { label: 'D', text: 'Eliminuje potrzebę podejmowania jakichkolwiek decyzji zawodowych.', isCorrect: false }
    ],
    explanation: 'Dwie przeciwstawne role wymagają sprzecznych zachowań. Brak nadrzędnego kompasu wartości sprawia, że każdy wybór wywołuje poczucie winy.',
    keyTakeaway: 'Hierarchia wartości jest zwrotnicą pozwalającą nawigować w konflikcie ról.'
  },
  {
    id: 12,
    question: 'Jaka jest rola pamięci autobiograficznej według Dana McAdamsa w kontekście tożsamości narracyjnej?',
    topic: 'Tożsamość Narracyjna',
    sectionRef: 'Sekcja 17.6',
    options: [
      { label: 'A', text: 'Pamięć autobiograficzna organizuje minione wydarzenia w spójną opowieść z motywami przewodnimi (np. odkupienie, skrzywdzenie, wzrost).', isCorrect: true },
      { label: 'B', text: 'Pamięć autobiograficzna działa dokładnie jak twardy dysk rejestrujący piksele obrazu bez żadnej interpretacji.', isCorrect: false },
      { label: 'C', text: 'Pamięć autobiograficzna odpowiada wyłącznie za pamiętanie haseł do banku.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnego wpływu na poczucie tego, kim jesteśmy.', isCorrect: false }
    ],
    explanation: 'To od przydzielonej sobie roli w opowieści (bohater sprawczy vs bierna ofiara) zależy nasz aktualny poziom sprawczości i poczucie sensu.',
    keyTakeaway: 'Nie zmienisz faktów z przeszłości, ale możesz zmienić swoją rolę w opowieści.'
  },
  {
    id: 13,
    question: 'Na czym polega różnica między elastycznością tożsamościową a brakiem stabilności psychicznej?',
    topic: 'Elastyczność vs Niestabilność',
    sectionRef: 'Sekcja 17.15',
    options: [
      { label: 'A', text: 'Elastyczność to zdolność do adaptowania zachowań do kontekstu przy zachowaniu spójnego rdzenia wartości; niestabilność to brak jakiegokolwiek wewnętrznego kompasu.', isCorrect: true },
      { label: 'B', text: 'Elastyczność występuje tylko u dzieci do 5 roku życia.', isCorrect: false },
      { label: 'C', text: 'Niestabilność oznacza stałość poglądów przez 80 lat.', isCorrect: false },
      { label: 'D', text: 'Oba pojęcia są tożsame i oznaczają zaburzenie osobowości.', isCorrect: false }
    ],
    explanation: 'Elastyczność pozwala uczyć się i zmieniać strategie bez poczucia, że rozpada się cała nasza tożsamość.',
    keyTakeaway: 'Bądź twardy w wartościach, lecz elastyczny w opisach zachowania.'
  },
  {
    id: 14,
    question: 'Jaki jest główny cel protokołu Redefinicji Narracji Autobiograficznej (Sekcja 17.16)?',
    topic: 'Redefinicja Narracji',
    sectionRef: 'Sekcja 17.16',
    options: [
      { label: 'A', text: 'Przeformułowanie trudnych doświadczeń z pozycji „biernej ofiary losu” na pozycję „aktywnego podmiotu, który wyciągnął lekcję i przetrwał”.', isCorrect: true },
      { label: 'B', text: 'Wymazanie trudnych wspomnień z mózgu za pomocą hipnozy.', isCorrect: false },
      { label: 'C', text: 'Oskarżenie wszystkich znajomych o własne porażki życiowe.', isCorrect: false },
      { label: 'D', text: 'Napisanie fikcyjnej powieści fantastycznej pod pseudonimem.', isCorrect: false }
    ],
    explanation: 'Przeformułowanie opowieści przesuwa akcent z traumy na zasoby i wyciągnięte wnioski, przywracając sprawczość w dlPFC.',
    keyTakeaway: 'Twoja historia zależy od tego, w którym miejscu postawisz akcent sprawczy.'
  },
  {
    id: 15,
    question: 'Co według psychologii humanistycznej dzieje się, gdy rozbieżność między „ja realnym” a „ja idealnym” staje się zbyt duża?',
    topic: 'Ja Realne vs Ja Idealne',
    sectionRef: 'Sekcja 17.14',
    options: [
      { label: 'A', text: 'Pojawia się przewlekła frustracja, poczucie niższości i ciągły wstyd z powodu nieprzystawania do nierealistycznych oczekiwań.', isCorrect: true },
      { label: 'B', text: 'Mózg automatycznie generuje natychmiastowy sukces finansowy.', isCorrect: false },
      { label: 'C', text: 'Nie zachodzi żadna zmiana w samopoczuciu emocjonalnym.', isCorrect: false },
      { label: 'D', text: 'Człowiek przestaje odczuwać jakiekolwiek potrzeby fizjologiczne.', isCorrect: false }
    ],
    explanation: 'Nierealistyczne „ja idealne” działa jak kat, który nieustannie chłosta „ja realne” za wszelkie niedoskonałości.',
    keyTakeaway: 'Zastąp nierealistyczne ja idealne elastycznym ja procesowym.'
  },
  {
    id: 16,
    question: 'Jak funkcja samozachowawcza tożsamości wpływa na interpretację krytyki merytorycznej ze strony przełożonego?',
    topic: 'Obrona Ego przed Krytyką',
    sectionRef: 'Sekcja 17.10',
    options: [
      { label: 'A', text: 'Jeśli tożsamość jest sztywna, krytyka projektu jest odbierana jako bezpośredni atak na wartość człowieka, wyzwalając odruch obronny.', isCorrect: true },
      { label: 'B', text: 'Krytyka jest zawsze przyjmowana z entuzjazmem i uśmiechem.', isCorrect: false },
      { label: 'C', text: 'Mózg traktuje krytykę jako sygnał do natychmiastowego snu.', isCorrect: false },
      { label: 'D', text: 'Nie wywołuje żadnej reakcji w układzie limbicznym.', isCorrect: false }
    ],
    explanation: 'Gdy utożsamiasz siebie ze stworzonym plikiem, uwagi do pliku traktujesz jak cios w klatkę piersiową.',
    keyTakeaway: 'Oddziel swoją wartość jako człowieka od jakości wykonanego zadania.'
  },
  {
    id: 17,
    question: 'W jaki sposób dołączenie do nowej grupy społecznej (np. nowego zespołu w pracy) modyfikuje tożsamość społeczną jednostki?',
    topic: 'Tożsamość Grupowy',
    sectionRef: 'Sekcja 17.3',
    options: [
      { label: 'A', text: 'Jednostka absorbuje normy, język i wartości grupy, co stopniowo przesuwa jej granice dozwolonych i pożądanych zachowań.', isCorrect: true },
      { label: 'B', text: 'Tożsamość społeczna nie ulega żadnej zmianie po ukończeniu 18 roku życia.', isCorrect: false },
      { label: 'C', text: 'Jednostka traci zdolność mówienia w swoim ojczystym języku.', isCorrect: false },
      { label: 'D', text: 'Zmienia się wyłącznie kolor oczu badanej osoby.', isCorrect: false }
    ],
    explanation: 'Grupa dostarcza gotowych skryptów i wyznacza standardy, które z czasem stają się częścią osobistego self-concept.',
    keyTakeaway: 'Grupa, w której przebywasz, po cichu mebluje Twoją tożsamość.'
  },
  {
    id: 18,
    question: 'Co charakteryzuje tożsamość procesową (Evolutive Self) w przeciwieństwie do tożsamości statycznej?',
    topic: 'Tożsamość Procesowa',
    sectionRef: 'Sekcja 17.15',
    options: [
      { label: 'A', text: 'Postrzeganie siebie jako nieustannie uczącego się układu, który adaptuje swoje przekonania na podstawie dowodów ze świata.', isCorrect: true },
      { label: 'B', text: 'Niekontrolowana zmiana nazwiska co dwa tygodnie.', isCorrect: false },
      { label: 'C', text: 'Brak jakichkolwiek wspomnień z dzieciństwa.', isCorrect: false },
      { label: 'D', text: 'Całkowita niezdolność do podejmowania stałych zobowiązań.', isCorrect: false }
    ],
    explanation: 'Tożsamość procesowa pozwala na ciągły rozwój bez lęku, że zmiana poglądu jest dowodem na „zdradę samego siebie”.',
    keyTakeaway: 'Możesz zmieniać poglądy i zachowania, pozostając wiernym swojej drodze rozwoju.'
  }
  { id: 19, question: "W analizie tożsamości ważne jest rozróżnienie między zachowaniem a etykietą. Dlaczego?", topic: "Tożsamość", sectionRef: "Sekcja 17.22", options: [{label:"A",text:"Bo etykieta zawsze jest fałszywa.",isCorrect:false},{label:"B",text:"Bo opis konkretnego zachowania łatwiej sprawdzić i zmienić niż globalny sąd o całej osobie.",isCorrect:true},{label:"C",text:"Bo zachowanie nie ma związku z tożsamością.",isCorrect:false},{label:"D",text:"Bo etykiety nie wpływają na decyzje.",isCorrect:false}], explanation: "Opis zachowania uwzględnia kontekst i pozostawia miejsce na korektę.", keyTakeaway: "Konkretny opis jest bardziej użyteczny niż globalna etykieta." },
  { id: "deep-17.22", pageNumber:40, sectionNumber:"17.22", title:"Tożsamość jako model roboczy", category:"teoria", readingTimeMinutes:8, paragraphs:["Tożsamość można traktować jako model roboczy, za pomocą którego człowiek porządkuje informacje o sobie. Model nie jest fotografią całej osoby. Wybiera pewne cechy, role, wspomnienia i znaczenia, ponieważ nie da się jednocześnie utrzymywać w centrum uwagi całej historii życia. Dlatego opis siebie zmienia się wraz z kontekstem, aktualnymi celami i doświadczeniami.","Ważne jest rozróżnienie stabilności od niezmienności. Stabilność oznacza, że pewne wzorce utrzymują się wystarczająco długo, aby można było na nich polegać. Niezmienność oznaczałaby brak realnej możliwości rozwoju. Człowiek może zachowywać poczucie ciągłości, a jednocześnie zmieniać role, kompetencje, poglądy i sposób działania.","Pomocne pytanie brzmi nie tylko „jaki jestem?”, lecz także „w jakich warunkach taki się staję?”. Osoba opisująca siebie jako nieśmiałą może być cicha w nowej grupie, ale bardzo rozmowna wśród bliskich. Ta różnica jest informacją o kontekście, a nie automatycznym dowodem hipokryzji."] },
  { id: "deep-17.23", pageNumber:41, sectionNumber:"17.23", title:"Pamięć autobiograficzna nie jest nagraniem", category:"teoria", readingTimeMinutes:8, paragraphs:["Wspomnienie może być jednocześnie związane z rzeczywistym doświadczeniem i rekonstruowane podczas przypominania. Pamięć autobiograficzna nie działa jak kamera, która przechowuje pełny zapis wydarzenia. Przywoływanie korzysta z wcześniejszych informacji, ale znaczenie wydarzenia może być modyfikowane przez późniejsze doświadczenia i aktualną interpretację.","Ma to znaczenie dla obrazu siebie. Jeśli ktoś pamięta siebie jako „zawsze słabego ucznia”, kilka porażek może dominować nad mniej spektakularnymi sukcesami. Z kolei osoba przekonana, że „zawsze dawała sobie radę”, może pomijać okresy zależności od innych. Nie musi to oznaczać świadomego kłamstwa. Selekcja i dostępność wspomnień wpływają na narrację.","Dojrzała praca z przeszłością nie polega na zamianie jednej opowieści na bardziej pochlebną. Polega na poszerzeniu zbioru danych: co rzeczywiście pamiętam, co można sprawdzić, czego nie wiem i jakie inne znaczenie jest zgodne z faktami?"] },
  { id: "deep-17.24", pageNumber:42, sectionNumber:"17.24", title:"Etykieta opisuje, ale czasem zaczyna nakazywać", category:"teoria", readingTimeMinutes:8, paragraphs:["Zdanie „jestem sportowcem” może być użyteczne, jeśli pomaga organizować trening i cele. Problem pojawia się wtedy, gdy etykieta zaczyna działać jak reguła: „sportowiec nie może odpoczywać”, „humanista nie powinien interesować się matematyką”, „odpowiedzialna osoba nie popełnia błędów”. Opis zmienia się wtedy w normę.","Warto rozróżniać etykietę opisową od preskryptywnej. Pierwsza mówi, że coś jest częścią obecnej historii. Druga mówi, że skoro jestem taki, muszę zawsze zachowywać się w określony sposób. To może utrudniać uczenie się, bo zachowanie odbiegające od etykiety zaczyna wyglądać jak zagrożenie dla całego obrazu siebie.","Pomocna jest zamiana globalnego sądu na opis warunkowy. Zamiast „jestem nieśmiały” można powiedzieć: „w nowych grupach potrzebuję czasu, zanim zabiorę głos”. Druga wersja nie usuwa trudności, ale wskazuje sytuację, zachowanie i możliwość sprawdzenia zmiany."] },
  { id: "deep-17.25", pageNumber:43, sectionNumber:"17.25", title:"Ciągłość bez zamrożenia", category:"teoria", readingTimeMinutes:8, paragraphs:["Zmiana szkoły, pracy, miejsca zamieszkania, związku albo sposobu życia może osłabić dotychczasowe odpowiedzi na pytania „kim jestem?” i „gdzie należę?”. Nie każdy taki okres oznacza kryzys kliniczny. Często jest to zwykły koszt przebudowy modelu siebie, gdy stare role przestają wystarczać.","Jednym ze sposobów zachowania ciągłości jest wskazanie elementów, które przetrwały zmianę: wartości, ważne relacje, zainteresowania, sposób rozwiązywania problemów albo długoterminowy kierunek. Inne elementy mogą zostać porzucone. Dzięki temu zmiana nie musi wyglądać jak wymiana całej osoby na nową.","Nowe środowisko dostarcza też danych. Osoba przekonana, że jest „kiepska w wystąpieniach”, może odkryć, że największą trudność powodował brak przygotowania lub nieznajomość grupy. Nowe doświadczenie nie kasuje automatycznie starego przekonania, ale może zmienić jego zakres."] },
  { id: "deep-17.26", pageNumber:44, sectionNumber:"17.26", title:"Tożsamość jako proces do obserwowania", category:"teoria", readingTimeMinutes:8, paragraphs:["Tożsamość nie musi być traktowana jako ukryty przedmiot, który trzeba kiedyś odnaleźć. Jest także sposobem organizowania doświadczeń: rozpoznawania ról, wybierania znaczeń, przewidywania własnego zachowania i utrzymywania poczucia ciągłości.","Użyteczny opis siebie powinien pomagać przewidywać zachowanie, podejmować decyzje i uczyć się. Jeśli zaczyna blokować informacje sprzeczne z rzeczywistością, warto go skorygować. Pytanie „kim jestem?” dobrze uzupełnić pytaniami „co robię?”, „w jakich warunkach?”, „co jest dla mnie ważne?” i „jakie dane mogłyby zmienić mój opis?”.","To przygotowuje następny rozdział. Skoro obraz siebie zawiera interpretacje, trzeba przyjrzeć się przekonaniom, które wpływają na to, jak człowiek rozumie wydarzenia i samego siebie."] },
  { id:19, question:"Które rozróżnienie najlepiej pomaga analizować ten temat?", topic:"Tożsamość — kim właściwie jestem?", sectionRef:"Sekcja 17.22", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Rozdzielenie danych, interpretacji i warunków, w których dany opis jest trafny.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:20, question:"Co jest przykładem aktualizacji przekonania zamiast jego bezrefleksyjnej obrony?", topic:"Tożsamość — kim właściwie jestem?", sectionRef:"Sekcja 17.23", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Zmiana zdania tylko dlatego, że zrobiła to większość.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:21, question:"Które działanie dostarcza lepszej informacji o własnym funkcjonowaniu?", topic:"Tożsamość — kim właściwie jestem?", sectionRef:"Sekcja 17.24", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Porównanie kilku obserwacji z własną hipotezą i korekta jej zakresu.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:22, question:"Dlaczego kontekst jest ważny przy ocenie człowieka lub jego zachowania?", topic:"Tożsamość — kim właściwie jestem?", sectionRef:"Sekcja 17.25", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Uwzględnienie sytuacji zamiast wyciągania globalnego wniosku.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
  { id:23, question:"Które pytanie najlepiej ujawnia ograniczenie własnej pewności?", topic:"Tożsamość — kim właściwie jestem?", sectionRef:"Sekcja 17.26", options:[{"label":"A","text":"Zastąpienie wszystkich wcześniejszych informacji jedną nową opinią.","isCorrect":false},{"label":"B","text":"Uzależnienie oceny wyłącznie od aktualnego nastroju.","isCorrect":false},{"label":"C","text":"Sprawdzenie, jakie dane mogłyby pokazać, że mój wniosek jest błędny.","isCorrect":true},{"label":"D","text":"Traktowanie pierwszej intuicji jako pewnego faktu.","isCorrect":false}], explanation:"Poprawna odpowiedź wymaga zastosowania mechanizmu opisanego w rozdziale, a nie jedynie rozpoznania terminu.", keyTakeaway:"Precyzja rośnie, gdy rozdzielasz obserwację, interpretację, kontekst i stopień pewności." },
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
        { tactic: 'Auto-manipulacja etykietą', description: 'Używanie introwersji jako wymówki przed podejmowaniem wyzwań.', vulnerabilityExploited: 'Potrzeba wygody i uniknięcia oceny.' }
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
      'przez ponad dekadę kalendarz Jakuba wypełniony był spotkaniami od 8:00 do 20:00. Każde wejście do biura wiązało się z ukłonami, szacunkiem podwładnych i poczuciem władzy. Jakub nie posiadał hobby ani bliskich relacji poza pracą — cała jego tożsamość opierała się na filarze statusu zawodowego.',
      'Gdy nowy zarząd odprawił go z trzymiesięczną odprawą, Jakub odczuł to nie jako zmianę pracy, lecz jako fizyczną śmierć własnego „ja”. Przez pierwsze tygodnie codziennie ubierał garnitur, siadał przy stole i wpatrywał się w telefon, który przestał dzwonić. Brak e-maili odczuwał jak wykluczenie ze stada.',
      'Znajomi pytali go: „Jakub, czym teraz się zajmujesz?”. To proste pytanie wywoływało u niego ataki paniki i falę wstydu. Nie potrafił odpowiedzieć na pytanie „kim jestem”, gdy zabrano mu tytuł dyrektora.',
      'Dopiero w toku rocznej terapii zaczął powoli odseparowywać swoją wartość jako człowieka od pozycji w strukturze organizacyjnej, budując tożsamość opartą na własnych wartościach, pasji do stolarstwa i relacjach rodzinnych.'
    ],
    dialogue: [
      { speaker: 'Współpracownik z branży', text: 'Jakub, co teraz robisz? W jakiej jesteś strukturze?', subtext: 'Badanie statusu społecznego i pozycji w hierarchii.' },
      { speaker: 'Jakub', text: 'Odpoczywam... szukam nowych wyzwań na poziomie C-level.', subtext: 'Obrona wykreowanej fasady i wstyd przed przyznaniem się do utraty roli.' }
    ],
    decisionTaken: 'Jakub odrzucał oferty mniejszych firm przez 8 miesięcy, woląc pozostawać bezpracy niż przyjąć stanowisko bez prestiżowego tytułu.',
    whatProtagonistSaw: 'Utratę statusu, spadek zainteresowania ze strony dawnych „przyjaciół” z branży i wizję bycia nikim.',
    whatWasMissed: 'Fakt, że stanowisko było jedynie czasowo użyczoną rolą społeczną, a jego rzeczywiste kompetencje analityczne i ludzkie nadal istnieją.',
    psychologicalAnalysis: {
      coreMechanism: 'Over-identification z rolą społeczną (External Identity Validation) i załamanie self-concept.',
      cognitiveBiases: [
        { name: 'Błąd statusu quo', description: 'Uznawanie dotychczasowej pozycji zawodowej za jedyny możliwy wyznacznik wartości.', impact: 'Paraliż przed podjęciem nowych ścieżek życiowych.' }
      ],
      defenseMechanisms: [
        { name: 'Zaprzeczenie', explanation: 'Udawanie przed sobą i otoczeniem, że przerwa w pracy jest świadomym urlopem sabatowym.' }
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
        { tactic: 'Korporacyjna obietnica tożsamości', description: 'Kultura organizacji zachęcająca do poświęcenia całego życia w zamian za status i przynależność.', vulnerabilityExploited: 'Potrzeba znaczenia i struktury.' }
      ],
      counterMeasures: [
        { step: '1. Dywersyfikacja filarów tożsamości', script: 'Oparcie self-concept na co najmniej 4 niezależnych filarach: relacje, wartości, umiejętności, pasje.', rationale: 'Utrata jednego filaru nie niszczy całej konstrukcji psychicznej.' }
      ]
    },
    alternativePath: 'Gdyby Jakub od początku traktował pracę jako kontrakt biznesowy, a nie jako treść swojego jestestwa, zwolnienie stałoby się jedynie impulsem do zmiany projektu.',
    readerQuestion: 'Na ilu niezależnych filarach stoi Twoje poczucie własnej wartości? Co zostałoby, gdyby odebrano Ci dzisiejszą rolę zawodową?',
    keyTakeaway: 'Jesteś kimś więcej niż Twoja wizytówka. Stanowisko to tylko rola, którą odgrywasz, a nie fundament Twojego jestestwa.'
  },
  {
    id: 'studium-17-3-idealna-corka',
    title: 'Gdy cudze oczekiwania stają się własnym głosem: Syndrom „idealnej córki” u Karoliny',
    subtitle: 'Jaźń odzwierciedlona, introjekcja schematów rodzinnych i odzyskiwanie autonomii decyzyjnej',
    protagonist: 'Karolina, 27 lat, aplikantka adwokacka w renomowanej kancelarii',
    context: 'Karolina od dzieciństwa realizowała scenariusz napisany przez rodziców-prawników. Mimo doskonałych wyników w nauce odczuwała przewlekły smutek i poczucie, że żyje w cudzym ciele.',
    story: [
      'W domu Karoliny każdy sukces na klasówce uwarunkowany był aprobatą Ojca: „Piątka? A dlaczego nie piątka z plusem?”. Karolina szybko nauczyła się, że miłość i akceptacja są dawkami wymierzanymi za posłuszeństwo i oszałamiające osiągnięcia.',
      'Wybór studiów prawniczych był naturalną konsekwencją tej dynamiki. Mimo że Karolina marzyła o projektowaniu architektury wnętrz, zrezygnowała ze swoich pasji, bojąc się rozczarowania w oczach rodziców. Przyjęła tożsamość „ambitnej prawniczki”, tłumiąc własne potrzeby.',
      'W wieku 27 lat, stojąc przed podpisaniem umowy w kancelarii, dostała silnego napadu paniki. Jej ciało zbuntowało się przeciwko narzuconemu skryptowi: pojawiły się bezsenność, drżenie rąk i silny opór przed wejściem do sądu.',
      'Praca nad sobą pozwoliła jej uświadomić sobie proces introjekcji — bezkrytycznego przejęcia celów rodziców jako własnych. Karolina musiała po raz pierwszy w życiu stawić czoła lękowi przed odrzuceniem i zbudować własny kompas tożsamościowy.'
    ],
    dialogue: [
      { speaker: 'Ojciec', text: 'Karolinko, kancelaria X to szczyt marzeń. Jesteśmy z ciebie tacy dumni przed znajomymi.', subtext: 'Uwarunkowana aprobata i używanie dziecka do budowania własnego statusu.' },
      { speaker: 'Karolina', text: 'Tak tatusiu, zrobię wszystko, żeby was nie zawieść...', subtext: 'Kapitulacja autonomii na rzecz ochrony relacji przywiązania.' }
    ],
    decisionTaken: 'Karolina złożyła rezygnację z aplikacji adwokackiej i zapisała się na roczny kurs projektowania przestrzeni.',
    whatProtagonistSaw: 'Oczekiwania rodziców, wizję ich rozczarowania i lęk przed wykluczeniem z rodziny.',
    whatWasMissed: 'Fakt, że dorosłe życie wymaga odseparowania własnego self-concept od emocjonalnych wymagań rodziców.',
    psychologicalAnalysis: {
      coreMechanism: 'Introjekcja (przejęcie cudzych norm bez przetrawienia) oraz Looking-Glass Self uwarunkowane aprobatą.',
      cognitiveBiases: [
        { name: 'Myślenie katastroficzne', description: 'Przekonanie, że odmowa realizacji woli rodziców doprowadzi do całkowitej ruiny rodziny.', impact: 'Paraliż decyzyjny przez całą młodość.' }
      ],
      defenseMechanisms: [
        { name: 'Uległość (Fawn Response)', explanation: 'Automatyczne przypodobnywanie się autorytetom w celu uniknięcia odrzucenia.' }
      ],
      emotionalDynamic: 'Przewlekłe napięcie między pragnieniem autonomii a lękiem przed utratą miłości bliskich.'
    },
    decisionProcessAnalysis: {
      trigger: 'Propozycja długoterminowego kontraktu w kancelarii.',
      attentionFocus: 'Dławiący ucisk w gardle i wizja spędzenia kolejnych 30 lat w sądzie.',
      interpretation: '„To nie jest moje życie, uduszę się, jeśli podpiszę tę umowę”.',
      emotion: 'Panika, głęboki smutek, ale i pierwszy błysk determinacji.',
      impulse: 'Ucieczka, odmowa podpisania dokumentu.',
      action: 'Szczera rozmowa z rodzicami i zmiana kierunku zawodowego.',
      consequence: 'Chwilowy chłód w relacjach z ojcem, lecz ogromne poczucie ulgi i odzyskanie spójności wewnętrznej.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Podejmowanie autonomicznych decyzji pod prąd nawykowi', activationState: 'Stopniowe przejmowanie kontroli' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Pojawienie się dopaminowej motywacji po wybraniu własnego celu (architektura).' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Atak paniki (aktywacja ciała migdałowatego) przy próbie podpisania umowy.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Szantaż emocjonalny aprobatą', description: 'Uzależnianie ciepła rodzicielskiego od wyników dziecka.', vulnerabilityExploited: 'Pierwotna potrzeba bezpiecznego przywiązania.' }
      ],
      counterMeasures: [
        { step: '1. Różnicowanie (Differentiation of Self)', script: '„Rozumiem wasze troski, ale jestem odrębnym człowiekiem z własnymi wartościami”.', rationale: 'Stawia jasną granicę tożsamościową.' }
      ]
    },
    alternativePath: 'Gdyby Karolina kontynuowała pracę w kancelarii, rozwinęłaby uogólnione zaburzenia lękowe lub ciężką depresję epizodyczną.',
    readerQuestion: 'Które z Twoich celów życiowych są naprawdę Twoje, a które stanowią cichy spadkobierczy nakaz Twoich opiekunów?',
    keyTakeaway: 'Autonomia zaczyna się w miejscu, w którym pozwalasz sobie na rozczarowanie innych, by nie rozczarować samego siebie.'
  },
  {
    id: 'studium-17-4-pęknięcie-cyfrowe',
    title: 'Dwa życia Piotra: Pęknięcie między idealną fasadą w mediach a samotnością w realu',
    subtitle: 'Zatarcie granic między sceną a kulisami w dobie tożsamości cyfrowej',
    protagonist: 'Piotr, 29 lat, twórca treści i konsultant marketingu cyfrowego',
    context: 'Piotr w sieci prezentował życie pełne sukcesów, podróży i niewyczerpanej energii. W rzeczywistości zmagał się z bezsennością, stanami lękowymi i głębokim poczuciem pustki emocjonalnej.',
    story: [
      'Konto Piotra obserwowało 120 tysięcy osób. Każde zdjęcie było starannie wyreżyserowane: kawiarnie na Bali, luksusowy sprzęt, wypracowana sylwetka i uśmiech pełen pewności siebie. Piotr spędzał 6 godzin dziennie na kreowaniu treści i odpowiadaniu na komentarze.',
      'Umysł Piotra uzależnił się od dopaminowych strzałów powiadomień. Jego self-concept został całkowicie zdominowany przez cyfrowy awatar — „Piotra Sukcesu”. Kiedy wracał do wynajętego mieszkania, odczuwał dojmujący chłód. Nie potrafił rozmawiać z ludźmi bez wyciągania telefonu.',
      'Gdy pewnego dnia jego post spotkał się z falą hejtu i odpływem 2000 obserwujących, Piotr doznał załamania nerwowego. Odczuł spadek lajków nie jako zmianę wskaźnika marketingowego, lecz jako odmowę prawa do istnienia.',
      'Dopiero całkowity detox cyfrowy i praca nad tożsamością offline pozwoliły mu zrozumieć, że zamienił autentyczny kontakt z ludźmi na powierzchowną aprobatę cyfrowego tłumu.'
    ],
    dialogue: [
      { speaker: 'Fanka z sieci', text: 'Piotr, jesteś moim ideałem! Jak ty to robisz, że nigdy nie masz gorszych dni?', subtext: 'Projekcja wyreżyserowanej fasady na nierealny ideał.' },
      { speaker: 'Piotr (w myśli)', text: 'Gdybyś wiedziała, że przed chwilą płakałem w łazience z samotności...', subtext: 'Poczucie oszustwa tożsamościowego (Syndrom Oszusta).' }
    ],
    decisionTaken: 'Piotr wyłączył konto na 30 dni i zaczął budować lokalne relacje rówieśnicze bez udziału smartfona.',
    whatProtagonistSaw: 'Licznik obserwujących, zachwycone komentarze i wizję bycia podziwianym ikoną sukcesu.',
    whatWasMissed: 'Fakt, że cyfrowa fasada uniemożliwia jakąkolwiek prawdziwą bliskość, gdyż ludzie kochają jego awatar, a nie jego rzeczywistego.',
    psychologicalAnalysis: {
      coreMechanism: 'Zatarcie granicy między Front Stage a Backstage (Dramaturgia Goffmana w erze cyfrowej).',
      cognitiveBiases: [
        { name: 'Porównania społeczne w górę', description: 'Śledzenie wyłącznie wyreżyserowanych sukcesów innych twórców.', impact: 'Podbijanie własnego poczucia niedostateczności.' }
      ],
      defenseMechanisms: [
        { name: 'Kompensacja', explanation: 'Nadrabianie braku głębokich więzi zbieraniem masowej aprobaty od obcych ludzi.' }
      ],
      emotionalDynamic: 'Narastający syndrom oszusta i paraliżujący lęk przed zdemaskowaniem słabości.'
    },
    decisionProcessAnalysis: {
      trigger: 'Fala krytyki i utrata obserwujących w internecie.',
      attentionFocus: 'Negatywne komentarze i spadek statystyk.',
      interpretation: '„Jestem bezwartościowy, mój świat się rozpada”.',
      emotion: 'Rozpacz, panika, egzystencjalna pustka.',
      impulse: 'Gorączkowe wrzucanie kolejnych postów podbijających status.',
      action: 'Świadome odcięcie sieci i wejście w proces leczenia tożsamości.',
      consequence: 'Spadek zasięgów, lecz odzyskanie spokoju psychicznego i autentyczności.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące (NAcc)', role: 'Ośrodek nagrody aktywowany powiadomieniami', activationState: 'Gwałtowne wahania dopaminowe' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Uzależniający cykl sprawdzania statystyk i głód cyfrowego uznania.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Dźwięk powiadomienia wywołuje natychmiastowy wyrzut dopaminy w NAcc.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Algorytmiczna pętla dopaminowa', description: 'Projektowanie aplikacji wywołujące zmienny harmonogram wzmocnień.', vulnerabilityExploited: 'Potrzeba przynależności i uznania.' }
      ],
      counterMeasures: [
        { step: '1. Odbudowa Kulis (Backstage)', script: 'Tworzenie przestrzeni i relacji, w których obowiązuje zakaz nagrywania i publikacji.', rationale: 'Chroni układ nerwowy przed ciągłą ekspozycją.' }
      ]
    },
    alternativePath: 'Gdyby Piotr kontynuował grę awatarem, doszłoby u niego do pełnoobjawowego epizodu depresyjnego z myśli rezygnacyjnymi.',
    readerQuestion: 'Jaka część Twojego wizerunku w sieci jest autentycznym odbiciem Twojego życia, a jaka jest wyreżyserowaną fasadą?',
    keyTakeaway: 'Nie zamieniaj autentyczności na cyfrowy poklask. Awatar nigdy nie zastąpi bliskości drugiego człowieka.'
  },
  {
    id: 'studium-17-5-konflikt-rol-menedzer',
    title: 'Między przyjaźnią a egzekucją wyników: Dylemat tożsamościowy Tomasza',
    subtitle: 'Konflikt ról społecznych i budowanie nadrzędnego kompasu etycznego',
    protagonist: 'Tomasz, 36 lat, kierownik działu operacyjnego',
    context: 'Tomasz musiał przeprowadzić zwolnienie grupowe, w tym zwolnić swojego bliskiego przyjaciela z lat dzieciństwa, którego sam ściągnął do firmy.',
    story: [
      'Tomasz i Michał znali się od podstawówki. Kiedy Tomasz został awansowany na kierownika, pomógł Michałowi dostać pracę w swoim zespole. Przez trzy lata ich relacja łączyła sferę prywatną i zawodową.',
      'Zarząd podjął decyzję o redukcji zatrudnienia o 30%. Michał, z powodu słabszych wyników w ostatnich kwartałach, znalazł się na szczycie listy do zwolnienia. Tomasz otrzymał polecenie wręczenia mu wypowiedzenia.',
      'W umyśle Tomasza zderzyły się dwie tożsamości: „Lojalny Przyjaciel” oraz „Odpowiedzialny Menedżer Firmy”. Reakcja fizjologiczna była natychmiastowa: silne bóle brzucha, wymioty i bezsenność przez pięć kolejnych nocy.',
      'Tomasz próbował odwlec decyzję, manipulować wskaźnikami Michała i kłócić się z dyrekcją, co omal nie kosztowało go własnego stanowiska. Dopiero wypracowanie przejrzystej procedury i szczera, trudna rozmowa oparta na szacunku pozwoliły mu zachować spójność etyczną.'
    ],
    dialogue: [
      { speaker: 'Michał (Przyjaciel)', text: 'Tomek, przecież znasz moją sytuację z kredytem. Chyba mnie nie wystawisz?', subtext: 'Odwołanie do roli przyjaciela w celu uzyskania ochrony w roli zawodowej.' },
      { speaker: 'Tomasz', text: 'Michał... sytuacja firmy jest dramatyczna. Musimy porozmawiać o faktach.', subtext: 'Próba wyjścia z roli przyjaciela na rzecz roli menedżerskiej.' }
    ],
    decisionTaken: 'Tomasz przeprowadził profesjonalne zwolnienie Michała z zapewnieniem pakietu wsparcia i osobistej rekomendacji.',
    whatProtagonistSaw: 'Oczy przyjaciela pełne żalu i poczucie bycia zdrajcą.',
    whatWasMissed: 'Fakt, że ochrona Michała kosztem innych pracowników byłaby naruszeniem etyki menedżerskiej i nie sprawiłaby, że sytuacja firmy uległaby poprawie.',
    psychologicalAnalysis: {
      coreMechanism: 'Konflikt Ról Społecznych (Role Conflict) i dysonans tożsamościowy.',
      cognitiveBiases: [
        { name: 'Efekt faworyzowania grupy własnej', description: 'Faworyzowanie bliskich osób wbrew obiektywnym kryteriom.', impact: 'Próba fałszowania wyników wskaźników.' }
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
      emotion: 'Poczucie winy, bezsilność, paraliż somatyczny.',
      impulse: 'Ucieczka, kłótnia z dyrekcją.',
      action: 'Przeprowadzenie bolesnej, lecz uczciwej rozmowy.',
      consequence: 'Czasowy chłód w relacji z Michał, lecz zachowanie spójności i szacunku do samego siebie.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora obwodu (ACC)', role: 'Wykrywanie ostrego konfliktu poznawczo-emocjonalnego', activationState: 'Hiperaktywacja' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Wysokie pobudzenie układu współczulnego dające objawy somatyczne.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Słowa przyjaciela wywołują ukłucie w klatce piersiowej.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Powoływanie się na lojalność osobistą', description: 'Wykorzystywanie relacji prywatnej do wymuszenia ustępstw biznesowych.', vulnerabilityExploited: 'Poczucie winy i lęk przed oceną jako nieetyczny.' }
      ],
      counterMeasures: [
        { step: '1. Separacja Ról (Role Separation)', script: '„Jako twój przyjaciel pomogę ci napisać CV i znajdę kontakty. Jako menedżer muszę wykonać decyzję zarządu”.', rationale: 'Rozdziela wsparcie relacyjne od funkcji decyzyjnej.' }
      ]
    },
    alternativePath: 'Gdyby Tomasz sfałszował wyniki Michała, zostałby zwolniony dyscyplinarnie z firmy za nadużycie zaufania.',
    readerQuestion: 'W jakich sytuacjach łączysz role społeczne, które powinny pozostać wyraźnie odseparowane?',
    keyTakeaway: 'Nawet w trudnym konflikcie ról możesz zachować szacunek i godność, rozdzielając funkcję od relacji.'
  },
  {
    id: 'studium-17-6-humanistka-i-cyfry',
    title: 'Etykieta „humanistki” i paraliż technologiczny: Przadek Ewy',
    subtitle: 'Przełamywanie self-stereotyping i budowanie tożsamości Growth Mindset',
    protagonist: 'Ewa, 38 lat, redaktorka i korektorka tekstów',
    context: 'Ewa przez całe życie powtarzała: „Ja i komputery to dwa różne światy, jestem humanistką staromodną”. Kiedy wydawnictwo wprowadziło systemy analityki algorytmicznej i sztucznej inteligencji, Ewa wpadła w przerażenie, że straci pracę.',
    story: [
      'Ewa szczyciła się tym, że pisze w tradycyjnym notesie i nie rozumie pojęć takich jak kodowanie, wskaźniki SEO czy algorytmy. Etykieta „wrażliwej humanistki” była jej powodem do dumy, ale i barierą odgradzającą ją od nowoczesnego rynku.',
      'Gdy zarząd poinformował o wdrażaniu narzędzi automatyzujących edycję i wymagających obsługi nowych platform, Ewa uznała to za bezpośredni zamach na swoją tożsamość. Zamknęła się w oporze, krytykując nowe technologie jako bezduszne.',
      'Jej młodsza koleżanka zaproponowała jej wspólne przechodzenie przez szkolenie krok po kroku. Kiedy Ewa po raz pierwszy opanowała podstawy automatyzacji i zobaczyła, jak skraca to jej czas pracy o połowę, w jej umyśle doszło do pęknięcia starego skryptu.',
      'Zrozumiała, że humanistyczny styl myślenia nie wyklucza sprawnego posługiwania się technologią. Zamieniła zdanie „Jestem humanistką, nie rozumiem maszyn” na „Jestem humanistką, która wykorzystuje technologię do głębszej pracy ze słowem”.'
    ],
    dialogue: [
      { speaker: 'Ewa', text: 'Ja się do tych programów nie nadaję. Mój mózg działa inaczej, jestem humanistką.', subtext: 'Używanie etykiety jako tarczy obronnej przed trudem uczenia się.' },
      { speaker: 'Koleżanka', text: 'Ewa, to tylko aplikacja. Po prostu kliknij tu i zobacz, co się stanie.', subtext: 'Obniżenie progu aktywacji i odczarowanie mitu trudności.' }
    ],
    decisionTaken: 'Ewa ukończyła kurs narzędzi cyfrowych i została liderką wdrożenia nowego oprogramowania w redakcji.',
    whatProtagonistSaw: 'Niezrozumiałe interfejsy, własny wiek i zagrożenie utraty tożsamości autentycznej redaktorki.',
    whatWasMissed: 'Fakt, że technologia to jedynie narzędzie wykonawcze, a jej wrażliwość językowa stanowi unikalny atut przy kalibracji tych narzędzi.',
    psychologicalAnalysis: {
      coreMechanism: 'Self-stereotyping (etykieta humanistki) i odruch ochronny DMN.',
      cognitiveBiases: [
        { name: 'Fałszywa dychotomia', description: 'Podział ludzi na „ścisłych” i „humanistów” bez przestrzeni na kompetencje hybrydowe.', impact: 'Blokada rozwoju przez 20 lat.' }
      ],
      defenseMechanisms: [
        { name: 'Dewaluacja bodźca', explanation: 'Twierdzenie, że nowe technologie niszczą kulturę i nie są warte uwagi.' }
      ],
      emotionalDynamic: 'Lęk przed wyjściem ze strefy poczucia kompetencji i obawa przed wyśmianiem.'
    },
    decisionProcessAnalysis: {
      trigger: 'Obowiązkowe szkolenie z narzędzi cyfrowych.',
      attentionFocus: 'Trudne pojęcia techniczne i własna nieporadność.',
      interpretation: '„Jestem za stara na to, to nie dla mojego umysłu”.',
      emotion: 'Opór, złość, lęk przed utratą pracy.',
      impulse: 'Odmowa udziału w kursie, krytyka zarządu.',
      action: 'Podjęcie próby pod okiem życzliwej koleżanki.',
      consequence: 'Opanowanie narzędzi i nagły skok poczucia skuteczności.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowa część hipokampa', role: 'Tworzenie nowych ścieżek pamięciowych dla interfejsu', activationState: 'Pobudzona neuroplastyczność' }
      ],
      neurotransmitters: [
        { name: 'Acetylocholina', roleInScenario: 'Niezbędna do koncentracji uwagi podczas nauki nowych procedur.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Słowo „algorytm” wywołuje opór w układzie limbicznym.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kulturowy mit dwóch mózgów', description: 'Wmawianie dzieciom, że mają umysł ścisły albo humanistyczny.', vulnerabilityExploited: 'Potrzeba szybkiej kategoryzacji własnych zdolności.' }
      ],
      counterMeasures: [
        { step: '1. Przekształcenie tożsamości hybrydowej', script: '„Łączę wrażliwość humanistyczną ze sprawnością technologiczną”.', rationale: 'Rozszerza self-concept zamiast go ograniczać.' }
      ]
    },
    alternativePath: 'Gdyby Ewa trwała w oporze, zostałaby zwolniona w ciągu roku z powodu braku efektywności w nowym modelu pracy.',
    readerQuestion: 'Jaki obszar wiedzy odrzucasz z góry, wmawiając sobie, że Twój umysł „nie jest do tego stworzony”?',
    keyTakeaway: 'Twój mózg jest wysoce neuroplastyczny. Nie daj się zamknąć w klatce fałszywych dychotomii.'
  },
  {
    id: 'studium-17-7-kontuzja-sportowca',
    title: 'Gdy znika ciało mistrza: Utrata jedynego filaru tożsamości u Kamila',
    subtitle: 'Zagrożenia jednofilarowego self-concept i proces tożsamościowej rekonstrukcji',
    protagonist: 'Kamil, 24 lata, półprofesjonalny zawodnik biegów przeszkodowych (OCR)',
    context: 'Kamil budował całe wyobrażenie o sobie wokół siły fizycznej, wygranych zawodów i podziwu w mediach. Zerwanie więzadła i skomplikowane złamanie kolana wykluczyły go ze sportu na zawsze.',
    story: [
      'Dla Kamila treść dnia była prosta: dwa treningi, trzymanie diety i sprawność fizyczna. Gdy patrzył w lustro, widział „Wojownika”. Nie dbał o edukację ani relacje uczuciowe — sport był jedyną walutą jego poczucia wartości.',
      'Wypadek na zawodach zmienił wszystko w jednej sekundzie. Diagnoza lekarska była bezlitosna: „Koniec ze sportem wyczynowym. Może pan będzie mógł spacerować”.',
      'Kamil wpadł w ciężką złość, a następnie w stupor. Siedząc na wózku, patrzył na swoje ubywające mięśnie i czuł, jakby niknął sam człowiek. Mówił: „Nie ma już Kamila. Ten na wózku to jakiś śmieć”.',
      'Proces rekonstrukcji wymagał od niego odnalezienia w sobie cech „wojownika” (determinizm, dyscyplina, odporność) i przeniesienia ich z planu czysto fizycznego na obszar pracy trenerskiej i fizjoterapii. Budowanie nowej tożsamości zajęło mu dwa trudne lata.'
    ],
    dialogue: [
      { speaker: 'Lekarz', text: 'Kamil, musisz zaakceptować, że te kolano nie wytrzyma już takich obciążeń.', subtext: 'Zderzenie nierealistycznego obrazu siebie z biologicznym faktem.' },
      { speaker: 'Kamil', text: 'To po co ja mam w ogóle żyć? Bez sportu jestem nikim!', subtext: 'Jednofilarowy self-concept w stanie całkowitego zawalenia.' }
    ],
    decisionTaken: 'Kamil podjął studia z zakresu fizjoterapii i został cenionym trenerem przygotowania motorycznego dla osób po urazach.',
    whatProtagonistSaw: 'Zniszczone kolano, zanikające mięśnie i utratę podziwu ze strony kibiców.',
    whatWasMissed: 'Fakt, że jego prawdziwą siłą nie były same mięśnie, lecz hart ducha, dyscyplina i wiedza o treningu, które można wykorzystać w nowej roli.',
    psychologicalAnalysis: {
      coreMechanism: 'Załamanie jednofilarowej struktury tożsamościowej (Monolithic Self-Structure).',
      cognitiveBiases: [
        { name: 'Myślenie czarno-białe', description: '„Albo jestem mistrzem sportu, albo jestem śmieciem”.', impact: 'Głęboki epizod depresyjny.' }
      ],
      defenseMechanisms: [
        { name: 'Wypieranie faktów', explanation: 'Początkowe próby trenowania mimo potwornego bólu i ryzyka kalectwa.' }
      ],
      emotionalDynamic: 'Gwałtowna żałoba po utraconej tożsamości i powolny proces rekonstrukcji.'
    },
    decisionProcessAnalysis: {
      trigger: 'Diagnoza lekarska kończąca karierę.',
      attentionFocus: 'Zanikające mięśnie i spadek sprawności.',
      interpretation: '„Moje życie się skończyło, jestem bezwartościowy”.',
      emotion: 'Rozpacz, wściekłość, poczucie głębokiej niesprawiedliwości.',
      impulse: 'Autodestrukcja, izolacja od ludzi.',
      action: 'Podjęcie nauki i przekierowanie zasobów na obszar wspierania innych.',
      consequence: 'Odnalezienie nowej, głębszej roli życiowej opartej na dojrzałej autonomii.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Somatosensoryczna kora czuciowa', role: 'Zmiana reprezentacji schematu własnego ciała', activationState: 'Reorganizacja mapy korowej' }
      ],
      neurotransmitters: [
        { name: 'Endorfiny i Dopamina', roleInScenario: 'Drastyczny spadek poziomów po zaprzestaniu intensywnego wysiłku.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 1000 ms', process: 'Słowa lekarza wywołują pełnoobjawowy wstrząs emocjonalny.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kult wyczyczynowości', description: 'Promowanie w mediach przekazu, że człowiek jest warty tyle, ile jego fizyczne osiągnięcia.', vulnerabilityExploited: 'Młodzieńcze pragnienie niezniszczalności.' }
      ],
      counterMeasures: [
        { step: '1. Redefinicja zasobów (Reframing Identity)', script: '„Moja siła leży w mojej woli i dyscyplinie, a nie tylko w czworogłowym udowym”.', rationale: 'Przenosi accent z rekwizytu na cechę charakteru.' }
      ]
    },
    alternativePath: 'Gdyby Kamil trwał w żalu i odrzucał rekonstrukcję, popadłby w uzależnienie od alkoholu lub środków przeciwbólowych.',
    readerQuestion: 'Gdyby sytuacja losowa odebrała Ci Twoją główną sprawność lub atut, co pozostałoby Twoim fundamentem?',
    keyTakeaway: 'Nigdy nie opieraj swojego self-concept na jednym filarze. Dojrzała tożsamość to stabilny wielokąt.'
  }
];

export const selfExercisesChapterSeventeen: SelfExercise[] = [
  {
    id: 'cwiczenie-17-1-dekonstrukcja-etykiet',
    title: 'Audit Etykiet Tożsamościowych: Od „Jestem taki” do „Zachowuję się tak”',
    subtitle: 'Przekształcanie sztywnych przekonań tożsamościowych w plastyczne opisy behawioralne',
    objective: 'Identyfikacja ograniczających etykiet na własny temat i zamiana ich na elastyczny opis sytuacji oraz nawyków.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Neuroplastyczność kory przedczołowej wymaga przełamania utrwalonych obwodów Domyślnej Sieci Neuronalnej (DMN), które automatycznie aktywują starą narrację o sobie.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wypisanie etykiet tożsamościowych',
        instruction: 'Zapisz 5 zdań zaczynających się od słów „Nie potrafię...”, „Jestem zbyt...”, „Nigdy nie będę...”.',
        promptText: 'Moje etykiety ograniczające:',
        placeholder: 'np. „Jestem zbyt chaotyczny”, „Nigdy nie nauczę się publicznie przemawiać”'
      },
      {
        stepNumber: 2,
        title: 'Analiza kontekstowa',
        instruction: 'Przy każdej etykiecie napisz, w jakich konkretnych sytuacjach to zachowanie występuje, a kiedy NIE występuje.',
        promptText: 'Wyjątki od reguły i kontekst:',
        placeholder: 'np. „Bywam chaotyczny, gdy działam bez listy zadań, ale w sytuacji kryzysowej potrafię uporządkować priorytety”'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie nowej hipotezy roboczej',
        instruction: 'Przekształć zdanie tożsamościowe na zdanie procesowe z użyciem słowa „Dotychczas...”.',
        promptText: 'Nowe sformułowanie procesowe:',
        placeholder: 'np. „Dotychczas nie stosowałem struktury w przemówieniach, ale mogę opanować tę technikę”'
      }
    ],
    reflectionQuestions: [
      'Kto pierwszy sprzedał Ci tę etykietę w przeszłości?',
      'Jakie korzyści (np. uniknięcie wysiłku lub krytyki) czerpiesz z utrzymywania tego wyobrażenia o sobie?'
    ]
  },
  {
    id: 'cwiczenie-17-2-mapa-rol-spolecznych',
    title: 'Mapa Ról Społecznych i Analiza Konfliktów',
    subtitle: 'Uporządkowanie własnego teatru życia i rozbrojenie sprzecznych oczekiwań',
    objective: 'Zmapowanie pełnionych ról, ocena ich wagi oraz wyeliminowanie ukrytych konfliktów rolnych.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Świadoma kategoryzacja ról aktywuje grzbietowo-boczną korę przedczołową (dlPFC), redukując lęk wynikający z przeciążenia struktur usilnych.',
    steps: [
      {
        stepNumber: 1,
        title: 'Inwentaryzacja Ról',
        instruction: 'Wypisz 6 głównych ról społecznych, które odgrywasz w ciągu tygodnia (np. pracownik, partner, rodzic, dziecko, przyjaciel, społecznik).',
        promptText: 'Moje role społeczne:',
        placeholder: 'Menedżer, Ojciec, Syn, Biegacz, Przyjaciel, Sąsiad...'
      },
      {
        stepNumber: 2,
        title: 'Wycena Czasu i Energii',
        instruction: 'Oceń w skali 1-10, ile energii pochłania każda rola, a ile faktycznie chciałbyś jej poświęcać.',
        promptText: 'Bilans energii w rolach:',
        placeholder: 'Menedżer: daję 9/10, chcę 6/10. Ojciec: daję 4/10, chcę 8/10...'
      },
      {
        stepNumber: 3,
        title: 'Identyfikacja Konfliktu Ról',
        instruction: 'Wskaż dwie role, które najsilniej ze sobą rywalizują i ułóż zasadę graniczną.',
        promptText: 'Moja zasada graniczna:',
        placeholder: 'Od godziny 18:00 zamykam rolę Menedżera i wchodzę w rolę Ojca (telefon w innym pokoju).'
      }
    ],
    reflectionQuestions: [
      'Z której roli odczuwasz największy wstyd, gdy nie osiągasz perfekcji?',
      'Co stałoby się, gdybyś całkowicie zrezygnował z jednej, najmniej ważnej roli?'
    ]
  },
  {
    id: 'cwiczenie-17-3-redefinicja-narracji',
    title: 'Redefinicja Narracji Autobiograficznej',
    subtitle: 'Przekształcanie roli ofiary w opowieść o sprawczości i wzroście',
    objective: 'Przeformułowanie trudnego wydarzenia z przeszłości z perspektywy wyciągniętych wniosków i zdobytych zasobów.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Rekonsolidacja pamięci autobiograficznej zmienia zabarwienie emocjonalne wspomnień w ciele migdałowatym poprze znową interpretację w mPFC.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór trudnego zdarzenia',
        instruction: 'Wybierz porażkę lub trudne zdarzenie z przeszłości, które nadal wywołuje u Ciebie żal lub wstyd.',
        promptText: 'Opis zdarzenia z przeszłości:',
        placeholder: 'Zwolnienie z pierwszej pracy po 6 miesiącach...'
      },
      {
        stepNumber: 2,
        title: 'Audyt starej narracji',
        instruction: 'Zapisz, jaką rolę przydzieliłeś sobie w dotychczasowej opowieści (np. bezradna ofiara, pechowiec).',
        promptText: 'Stara rola i wnioski:',
        placeholder: 'Czułem się potraktowany niesprawiedliwie, uważałem, że świat jest wrogi...'
      },
      {
        stepNumber: 3,
        title: 'Napisanie nowej wersji sprawczej',
        instruction: 'Opisz to samo zdarzenie z naciskiem na to, jakich umiejętności Cię nauczyło i jak wzmocniło Twoją odporność.',
        promptText: 'Nowa opowieść sprawcza:',
        placeholder: 'To zwolnienie było bolesnym impulsem, który zmusił mnie do podniesienia kwalifikacji i nauczył stawiać granice...'
      }
    ],
    reflectionQuestions: [
      'Jakie cechy charakteru ujawniły się w Tobie dzięki temu, że przetrwałeś to trudne zdarzenie?',
      'Jak nowa narracja wpływa na Twoją odwagę przy podejmowaniu dzisiejszych decyzji?'
    ]
  },
  {
    id: 'cwiczenie-17-4-dziennik-wyjatkow',
    title: 'Dziennik Obserwacji Wyjątków od Etykiety',
    subtitle: 'Zbieranie twardych dowodów empirycznych podważających sztywne wyobrażenie o sobie',
    objective: 'Świadome rejestrowanie sytuacji, w których zachowałeś się w sposób sprzeczny z ograniczającą etykietą.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Osłabianie Confirmation Bias poprzez celowe kierowanie reflektora uwagi na anomalia procesowe.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zdefiniowanie celu obserwacji',
        instruction: 'Wybierz etykietę (np. „jestem niezaangażowany”, „zawsze się spóźniam”) i szukaj jej zaprzeczeń.',
        promptText: 'Etykieta do podważenia:',
        placeholder: '„Nigdy nie potrafię dokończyć tego, co zacząłem”'
      },
      {
        stepNumber: 2,
        title: 'Zapis konkretnego wyjątku',
        instruction: 'Zapisz przynajmniej jedno zdarzenie z ostatnich dni, w którym dokończyłeś zadanie.',
        promptText: 'Dowód na wyjątek:',
        placeholder: 'Wczoraj dokończyłem składanie mebli i wysłałem zaległy formularz urzędowy.'
      }
    ],
    reflectionQuestions: [
      'Dlaczego Twój umysł ma tendencję do zapominania o własnych sukcesach, a pamiętania tylko o potknięciach?'
    ]
  },
  {
    id: 'cwiczenie-17-5-eksperyment-przelamania-maski',
    title: 'Eksperyment Behawioralny: Przełamanie Maski',
    subtitle: 'Świadome wyjście z wyuczonej roli w bezpiecznym otoczeniu',
    objective: 'Testowanie reakcji otoczenia na pokazanie bezbronności lub wypowiedzenie własnego zdania.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Wygaszanie lęku społecznego poprzez kontrolowaną ekspozycję bodźcową i weryfikację braku katastroficznych konsekwencji.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zaplanowanie mikrokroku',
        instruction: 'Zaprojektuj małe zachowanie, którego zwykle unikasz z lęku przed oceną (np. przyznanie się do niewiedzy na spotkaniu).',
        promptText: 'Mój eksperyment:',
        placeholder: 'Powiem wprost na zebraniu: „Nie rozumiem tej tabeli, czy możesz mi to wyjaśnić?”.'
      },
      {
        stepNumber: 2,
        title: 'Rejestracja rzeczywistej reakcji',
        instruction: 'Zapisz, co FAKTYCZNIE się wydarzyło po wykonaniu akcji.',
        promptText: 'Wynik eksperymentu:',
        placeholder: 'Kolega spokojnie wyjaśnił wyliczenia, a dwie inne osoby podziękowały mi za zadanie tego pytania.'
      }
    ],
    reflectionQuestions: [
      'O ile stopień realnego zagrożenia był niższy od przewidywań Twojego ciała migdałowatego?'
    ]
  },
  {
    id: 'cwiczenie-17-6-audyt-jazni-odzwierciedlonej',
    title: 'Tabela Jaźni Odzwierciedlonej: Czyje oczy mnie oceniają?',
    subtitle: 'Identyfikacja zewnętrznych autorytetów z przeszłości i odzyskiwanie suwerenności',
    objective: 'Odkrycie źródeł głosów krytycznych w głowie i zastąpienie ich własnym, racjonalnym standardem.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Deaktywacja narzuconych schematów relacyjnych poprzez przeniesienie ewaluacji z podkorowych emocji do kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identyfikacja krytycznego głosu',
        instruction: 'Kiedy czujesz wstyd lub nieadekwatność, zapytaj siebie: Czyim głosem do siebie mówię?',
        promptText: 'Źródło krytyki:',
        placeholder: 'Głos mojej nauczycielki matematyki z liceum...'
      },
      {
        stepNumber: 2,
        title: 'Merytoryczna weryfikacja',
        instruction: 'Napisz, czy ta osoba ma obecnie jakiekolwiek prawo i kompetencje do oceniania Twojego dorosłego życia.',
        promptText: 'Moja suwerenna odpowiedź:',
        placeholder: 'Ta osoba nie zna moich sukcesów i nie ma żadnego wpływu na moje dzisiejsze wybory.'
      }
    ],
    reflectionQuestions: [
      'Jakie to uczucie oddać dawne oceny ich właścicielom i zwolnić się z obowiązku ich spełniania?'
    ]
  },
  {
    id: 'cwiczenie-17-7-plan-tozsamosci-procesowej',
    title: 'Plan Konstrukcji Tożsamości Procesowej',
    subtitle: 'Projektowanie nowej wersji siebie w oparciu o wartości i nawyki',
    objective: 'Sformułowanie nowej Deklaracji Tożsamości opartej na ciągłym rozwoju i działaniu.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Integracja celów w przyśrodkowej korze przedczołowej wzmacnia motywację wewnętrzną i odporność na wstrząsy.',
    steps: [
      {
        stepNumber: 1,
        title: 'Definicja wartości filarowych',
        instruction: 'Wybierz 3 kluczowe wartości, które mają stanowić fundament Twojej nowej tożsamości.',
        promptText: 'Moje wartości fundamenty:',
        placeholder: 'Prawda, Wolność, Rozwój...'
      },
      {
        stepNumber: 2,
        title: 'Formuła Tożsamości Procesowej',
        instruction: 'Napisz deklarację: „Jestem człowiekiem, który każdego dnia...”',
        promptText: 'Moja deklaracja procesowa:',
        placeholder: 'Jestem człowiekiem, który każdego dnia podejmuje wyzwania, uczy się na błędach i działa w zgodzie z prawdą.'
      }
    ],
    reflectionQuestions: [
      'Jak ta nowa deklaracja zmienia Twoje podejście do dzisiejszych, najtrudniejszych zadań?'
    ]
  }
  {id:"deep-17-ex-a",title:"Analiza przypadku krok po kroku",subtitle:"Od automatycznej oceny do sprawdzalnej hipotezy",objective:"Nauczyć się oddzielać dane od interpretacji i planować następny krok.",durationMinutes:18,neuroScientificFoundation:"Ćwiczenie rozwija metapoznawcze monitorowanie własnych ocen; nie zakłada jednego mechanizmu neuronalnego.",steps:[{stepNumber:1,title:"Zapisz konkretną sytuację.",instruction:"Zapisz konkretną sytuację.",promptText:"Co dokładnie się wydarzyło?",placeholder:"Zapisz odpowiedź tutaj."},{stepNumber:2,title:"Oddziel obserwowalne fakty od własnego wniosku.",instruction:"Oddziel obserwowalne fakty od własnego wniosku.",promptText:"Co dopowiedziałem?",placeholder:"Zapisz odpowiedź tutaj."},{stepNumber:3,title:"Wypisz dwa alternatywne wyjaśnienia.",instruction:"Wypisz dwa alternatywne wyjaśnienia.",promptText:"Co jeszcze może być prawdą?",placeholder:"Zapisz odpowiedź tutaj."},{stepNumber:4,title:"Zaplanuj mały test lub działanie.",instruction:"Zaplanuj mały test lub działanie.",promptText:"Co mogę sprawdzić?",placeholder:"Zapisz odpowiedź tutaj."}],reflectionQuestions:["Co było faktem?","Który wniosek był najbardziej niepewny?","Jak zmienił się plan działania?"]},
  {id:"deep-17-ex-b",title:"Eksperyment z własnym opisem",subtitle:"Sprawdź, czy opis siebie przewiduje zachowanie",objective:"Porównać etykietę lub przekonanie z rzeczywistymi danymi z kilku sytuacji.",durationMinutes:20,neuroScientificFoundation:"Ćwiczenie wykorzystuje obserwację zachowania i aktualizację modelu siebie na podstawie powtarzających się danych.",steps:[{stepNumber:1,title:"Wybierz jedno zdanie o sobie.",instruction:"Wybierz jedno zdanie o sobie.",promptText:"Jak brzmi mój obecny opis?",placeholder:"Zapisz obserwacje."},{stepNumber:2,title:"Przez tydzień zbieraj konkretne przykłady za i przeciw.",instruction:"Przez tydzień zbieraj konkretne przykłady za i przeciw.",promptText:"Jakie mam dane?",placeholder:"Zapisz obserwacje."},{stepNumber:3,title:"Zaznacz warunki, w których opis działa.",instruction:"Zaznacz warunki, w których opis działa.",promptText:"Kiedy opis jest mniej trafny?",placeholder:"Zapisz obserwacje."},{stepNumber:4,title:"Przepisz zdanie tak, aby uwzględniało kontekst.",instruction:"Przepisz zdanie tak, aby uwzględniało kontekst.",promptText:"Jak brzmi bardziej precyzyjna wersja?",placeholder:"Zapisz obserwacje."}],reflectionQuestions:["Czy etykieta była zbyt globalna?","Jakie warunki miały znaczenie?","Co chcę sprawdzić ponownie?"]},
];

export const chapterSeventeen: Chapter = {
  number: 17,
  volume: 3,
  volumeChapterNumber: 1,
  title: 'Rozdział 1: Tożsamość: Kim Właściwie Jestem?',
  subtitle: 'Architektura obrazu siebie, narracja autobiograficzna, role społeczne i mechanizmy plastyczności tożsamościowej',
  leadParagraph: 'Pytanie „Kim jestem?” wydaje się najprostszą intuicją ludzkiego umysłu, lecz z perspektywy neuronauki i psychologii poznawczej odpowiedź na nie jest dynamicznym, stale rekonstruowanym procesem. Tożsamość nie jest nieruchomą rzeźbą ukrytą w głębi naszej psychiki, którą wystarczy „odkryć”. Jest skomplikowaną siecią narracji autobiograficznych, ról społecznych, odruchów zachowawczych i biologicznych struktur pamięci. Zrozumienie, jak powstaje obraz siebie, pozwala odzyskać kontrolę nad własnym życiem i przestać być więźniem etykiet narzuconych przez przeszłość.',
  totalEstimatedPages: 56,
  sections: [
    {
      id: 'sec-17-1',
      pageNumber: 1,
      sectionNumber: '17.1',
      title: 'Iluzja Rdzenia: Dlaczego Tożsamość Nie Jest Nieruchomą Rzeźbą?',
      category: 'wstep',
      readingTimeMinutes: 9,
      quote: {
        text: 'Tożsamość nie jest czymś znalezionym, jest czymś stworzonym.',
        author: 'Thomas Szasz'
      },
      paragraphs: [
        'Wielu ludzi spędza całe życie na poszukiwaniu tzw. „prawdziwego ja”, żywiąc głębokie przekonanie, że gdzieś wewnątrz nich istnieje stały, nieprzetworzony rdzeń osobowości. Oczekują, że pewnego dnia natrafią na ten fundament i odtąd wszystkie decyzje staną się proste. Jest to jednak jedna z najbardziej powszechnych iluzji poznawczych.',
        'Współczesna neuronauka poznawcza wyraźnie pokazuje, że mózg nie posiada jednego „ośrodka jaźni”. Wyobrażenie o sobie powstaje w wyniku skoordynowanej pracy Domyślnej Sieci Neuronalnej (Default Mode Network – DMN), która łączy fragmenty wspomnień, wyobrażenia przyszłości, oceny społeczne i sygnały z ciała w jedną, spójną opowieść.',
        'Gdy mówisz „Jestem introwertykiem”, „Jestem urodzonym liderem” lub „Nie mam talentu do języków”, nie opisujesz obiektywnego faktu fizycznego, takiego jak wzrost czy grupa krvi. Wyrażasz w ten sposób zrekonstruowaną hipotezę tożsamościową, do której Twój umysł dopasował wybrane dowody z przeszłości.',
        'Ta hipoteza staje się soczewką, przez którą przesiewasz każde nowe doświadczenie. Zrozumienie procesowego charakteru tożsamości zdejmuje z nas ciężar esencjalizmu i otwiera przestrzeń do świadomej autotransformacji.'
      ],
      subsections: [
        {
          title: 'Dynamiczna rekonstrukcja self-concept',
          paragraphs: [
            'Obraz siebie (self-concept) ulega nieustannej aktualizacji. Każde nowe doświadczenie, odniesiony sukces czy poniesiona porażka jest przesiewana przez istniejące filtry, ale ma też potencjał do modyfikacji całej struktury.',
            'Problem polega na tym, że umysł wykazuje potężny odruch zachowawczy (Identity Preservation Bias). Woli trzymać się znanej, nawet krzywdzącej etykiety, niż wejść w stan niepewności związany ze zmianą wyobrażenia o sobie.'
          ],
          highlightBox: {
            title: 'Wgląd Neuronaukowy: DMN a narracja o sobie',
            content: 'Gdy nie zajmujesz się trudnym zadaniem obliczeniowym, Domyślna Sieć Neuronalna aktywuje się, snując opowieści o tym, kim jesteś, co inni o Tobie myślą i co wydarzy się jutro. To tam wykuwa się Twoja tożsamość.',
            type: 'neuro'
          }
        }
      ]
    },
    {
      id: 'sec-17-2',
      pageNumber: 4,
      sectionNumber: '17.2',
      title: 'Obraz Siebie a Tożsamość Osobista: Precyzyjna Rozdzielczość Pojęciowa',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'W języku potocznym pojęcia takie jak „samoocena”, „obraz siebie”, „tożsamość osobista” i „poczucie własnej wartości” są często używane zamiennie, co prowadzi do chaotycznych wniosków. Aby skutecznie pracować nad własnym rozwojem, musimy wprowadzić ścisłą dyscyplinę pojęciową.',
        'Obraz siebie (self-concept) to poznawczy katalog wiedzy o sobie. Zawiera odpowiedzi na pytania: Jakie mam cechy? Co umiem? Jakie są moje słabości? Jest to struktura informacyjna, przypominająca bazę danych.',
        'Tożsamość osobista (personal identity) to fenomenologiczne poczucie bycia tym samym człowiekiem w czasie. To ciągłość świadomości, która sprawia, że wiedząc, jak bardzo zmieniły się Twoje poglądy od czasów dzieciństwa, nadal czujesz, że to Ty przeszedłeś tę drogę.',
        'Gdy te struktury są spójne, człowiek odczuwa wewnętrzne ugruntowanie. Gdy dochodzi do pęknięcia — np. z powodu traumy lub nagłej utraty roli społecznej — pojawia się depersonalizacja i głęboki kryzys egzystencjalny.'
      ],
      subsections: [
        {
          title: 'Tożsamość Społeczna (Social Identity)',
          paragraphs: [
            'Obok tożsamości osobistej istnieje tożsamość społeczna – ta część obrazu siebie, która wywodzi się z przynależności do grup (naród, zawód, klub sportowy, rodzina).',
            'Tożsamość społeczna daje poczucie bezpieczeństwa i przynależności, ale niosąc ze sobą gotowe skrypty zachowań, może drastycznie ograniczać indywidualną autonomię.'
          ]
        }
      ]
    },
    {
      id: 'sec-17-3',
      pageNumber: 7,
      sectionNumber: '17.3',
      title: 'Architektura Ról Społecznych i Maski Tożsamościowe',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Człowiek nie funkcjonuje w próżni. Wchodząc do teatru życia społecznego, nakłada różnorodne role: pracownika, rodzica, partnera, obywatela, klienta. Socjolog Erving Goffman opisał to zjawisko jako dramaturgię życia codziennego.',
        'Każda rola wymaga innego zestawu zachowań, słownictwa, a nawet ekspresji emocjonalnej. Przejście z roli wymagającego szefa w biurze do roli opiekuńczego ojca w domu wymaga elastycznego przełączania obwodów tożsamościowych.',
        'Problem pojawia się wtedy, gdy człowiek całkowicie zrasta się z jedną rolą (np. rolą dyrektora), traktując jej utratę jako fizyczną śmierć własnego „ja”.',
        'Zdrowa struktura psychiczna przypomina wielokąt — ubytek jednego boku nie powoduje zawalenia się całej konstrukcji.'
      ]
    },
    {
      id: 'sec-17-4',
      pageNumber: 10,
      sectionNumber: '17.4',
      title: 'Interaktywna Mapa Tożsamości i Ról Społecznych',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        'Przeanalizujmy praktycznie, z jakich filarów składa się Twoja obecna tożsamość. Poniższe narzędzie pozwala wyrenderować mapę ról i zobaczyć, które obszary są ze sobą w konflikcie, a które stanowią Twoją główną siłę.',
        'Użyj tego narzędzia do zweryfikowania, czy Twój self-concept nie stoi na tylko jednym, chwiejnym filarze statusu zawodowego lub aprobaty otoczenia.'
      ]
    },
    {
      id: 'sec-17-5',
      pageNumber: 13,
      sectionNumber: '17.5',
      title: 'Samospełniające się Etykiety: Jak Słowa Kształtują Biologię Zachowania',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Kiedy powtarzasz sobie lub innym: „Ja już taki jestem”, uruchamiasz potężny mechanizm poznawczy. Mózg dąży do spójności (cognitive consistency). Jeśli uwierzysz, że jesteś osobą nieśmiałą, każda próba odezwania się na forum będzie traktowana przez ciało migdałowate jako zagrożenie dla przyjętej tożsamości.',
        'Etykiety działają jak soczewka, która przepuszcza tylko te dowody, które potwierdzają przyjęty schemat. Błąd potłuczenia szklanki przez osobę o etykiecie „gajowy i niezgrabny” zostanie uznany za dowód reguły, podczas gdy u osoby o etykiecie „zręcznego sportowca” zostanie potraktowany jako przypadek.',
        'Proces ten, zwany self-stereotyping, sprawia, że ludzie dobrowolnie nakładają na siebie ograniczenia, unikając wyzwań, które mogłyby wzbogacić ich kompetencje.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[0]
    },
    {
      id: 'sec-17-6',
      pageNumber: 16,
      sectionNumber: '17.6',
      title: 'Pamięć Autobiograficzna jako Autorski Warsztat Pisarski',
      category: 'neuronauka',
      readingTimeMinutes: 10,
      paragraphs: [
        'Większość ludzi wierzy, że wspomnienia są przechowywane w mózgu jak pliki MP4 na twardym dysku. Tymczasem odnajdywanie wspomnień jest procesem twórczym. Każde przywołanie wydarzenia z przeszłości jest jego ponownym przepisaniem w kontekście aktualnego stanu emocjonalnego.',
        'Dan McAdams, badacz psychologii narracyjnej, wykazał, że tożsamość to wyreżyserowana opowieść, w której człowiek przydziela sobie rolę ofiary, bohatera, uciekiniera lub męczennika.',
        'Zmieniając sposób opowiadania o swoich porażkach z przeszłości, zmienia się struktura połączeń neuronalnych odpowiedzialnych za odczuwanie lęku i sprawczości.'
      ]
    },
    {
      id: 'sec-17-7',
      pageNumber: 19,
      sectionNumber: '17.7',
      title: 'Jaźń Odzwierciedlona: Wpływ Innych na Nasz Obraz Siebie',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Pojęcie „jaźni odzwierciedlonej” (looking-glass self) wprowadzone przez Charlesa Cooleya wskazuje, że nie budujemy obrazu siebie w izolacji. Nasze wyobrażenie o własnej wartości jest odbiciem tego, jak sądzimy, że postrzegają nas inni.',
        'Jeśli w dzieciństwie lub w pierwszej pracy Twoje pomysły spotykały się z protekcjonalnym uśmiechem, mogłeś przyswoić tożsamość osoby „mniej błyskotliwej”. Warto zadać sobie pytanie: Czyje oczy patrzą na Ciebie, gdy oceniasz siebie przed lustrem?',
        'Odbudowa autonomii wymaga zweryfikowania, które oceny pochodzą z autentycznych źródeł, a które są jedynie historycznymi osadami z cudzych kompleksów.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[2]
    },
    {
      id: 'sec-17-8',
      pageNumber: 22,
      sectionNumber: '17.8',
      title: '„Jestem Taki” vs „Zachowuję Się Tak”: Kluczowa Transformacja Językowa',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Jednym z najpotężniejszych narzędzi przebudowy tożsamości jest zmiana gramatyki wewnętrznego monologu. Zdania esencjalistyczne zamrażają plastyczność poznawczą.',
        'Zamiast mówić: „Jestem leniwy”, powiedz: „W ostatnich dwóch dniach odsuwałem napisanie raportu z powodu niejasnych wytycznych”. Pierwsze zdanie przypisuje Ci skazę moralną; drugie precyzyjnie definiuje problem wykonawczy, który można rozwiązać.'
      ],
      exerciseRef: selfExercisesChapterSeventeen[0]
    },
    {
      id: 'sec-17-9',
      pageNumber: 25,
      sectionNumber: '17.9',
      title: 'Scena i Kulisy: Tożsamość w Teatrze Interakcji Społecznych',
      category: 'studium-przypadku',
      readingTimeMinutes: 10,
      paragraphs: [
        'W erze mediów społecznościowych granica między sceną (front stage) a kulisami (backstage) uległa całkowitemu zatarciu. Ludzie ciągle odgrywają wyreżyserowane wersje siebie, oczekując cyfrowej aprobaty.',
        'Gdy wirtualna fasada staje się ważniejsza od rzeczywistego stanu psychicznego, dochodzi do pęknięcia tożsamościowego i przewlekłego poczucia pustki.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[3]
    },
    {
      id: 'sec-17-10',
      pageNumber: 28,
      sectionNumber: '17.10',
      title: 'Odruch Zachowawczy Tożsamości: Za Co Dyskredytujemy Prawdę?',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Mózg broni spójności tożsamości z taką samą zawziętością, z jaką broni ciała przed infekcją. Gdy docierają do nas fakty świadczące o tym, że podjęliśmy złą decyzję lub skrzywdziliśmy kogoś, pojawia się dysonans poznawczy.',
        'Zamiast zmienić obraz siebie („byłem nieuczciwy”), wolimy zinterpretować fakt („oni na to zasłużyli”). Ochrona ego wygrywa z prawdą merytoryczną.',
        'Uświadomienie sobie tego mechanizmu pozwala przyjąć krytykę bez wchodzenia w automatyczny odruch kontrataku.'
      ]
    },
    {
      id: 'sec-17-11',
      pageNumber: 31,
      sectionNumber: '17.11',
      title: 'Konflikt Ról: Gdy Oczekiwania Stają w Kolizji',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Bycie bezkompromisowym menedżerem i wyrozumiałym przyjacielem, gdy musisz zwolnić bliską osobę z zespołu, to klasyczny przykład konfliktu ról.',
        'Brak jasnej hierarchii wartości sprawia, że w sytuacjach węzłowych człowiek czuje się zdrajcą niezależnie od tego, którą opcję wybierze.',
        'Rozwiązaniem jest precyzyjna separacja sfer oraz komunikacja oparta na prawdzie i szacunku.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[4]
    },
    {
      id: 'sec-17-12',
      pageNumber: 34,
      sectionNumber: '17.12',
      title: 'Tożsamość Zewnętrzna vs Autonomiczna: Gdzie Leży Twój Środek Ciężkości?',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Osoby o tożsamości zewnętrznej uzależniają poczucie wartości od statusu, stanowiska, cen posiadanych przedmiotów i opinii otoczenia. Ich stan psychiczny przypomina łódkę bez kotwicy.',
        'Tożsamość autonomiczna opiera się na wewnętrznych kryteriach: spójności z wartościami, rozwoju kompetencji i zdolności do samoregulacji.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[1]
    },
    {
      id: 'sec-17-13',
      pageNumber: 37,
      sectionNumber: '17.13',
      title: 'Nastawienie na Rozwój (Growth Mindset) w Budowaniu Obrazu Siebie',
      category: 'neuronauka',
      readingTimeMinutes: 9,
      paragraphs: [
        'Badania Carol Dweck nad mindsetem pokazują, że ludzie dzielą się na tych, którzy traktują cechy jako stałe (Fixed Mindset), i tych, którzy widzą je jako potencjał do rozwoju (Growth Mindset).',
        'W Growth Mindset błąd nie oznacza „jestem do niczego”, lecz „ten sposób jeszcze nie zadziałał”. To fundamentalna różnica w biologii reakcji na stres.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[5]
    },
    {
      id: 'sec-17-14',
      pageNumber: 40,
      sectionNumber: '17.14',
      title: 'Zagrożenia Jednofilarowej Struktury Tożsamościowej',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Gdy całe poczucie własnej wartości opiera się na jednej domenie — np. sporcie, wyglądzie lub zyskach firmy — jakakolwiek anomalia w tym obszarze zagraża całej strukturze.',
        'Trwałość psychiczna wymaga dywersyfikacji filarów i elastyczności rolnej.'
      ],
      caseStudyRef: caseStudiesChapterSeventeen[6]
    },
    {
      id: 'sec-17-15',
      pageNumber: 43,
      sectionNumber: '17.15',
      title: '🧠 BŁĘDNA INTUICJA: „Muszę Odnaleźć Prawdziwego Siebie”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'INTUICJA: Wielu ludzi wierzy, że gdzieś w świecie istnieje ich „prawdziwe ja”, które trzeba odnaleźć poprzez podróże, zmianę pracy czy wielogodzinne rozmyślania.',
        'CO MOŻE BYĆ BŁĘDNE? Szukanie „prawdziwego ja” zakłada, że jesteś rzeźbą czekającą na odkopanie. Sprzyja to bierności i poczuciu, że skoro jeszcze go nie odnalazłeś, nie musisz podejmować wysiłku.',
        'CO MÓWI PSYCHOLOGIA? Nie ma gotowego „ja”, które czeka w szufladzie. Tożsamość jest tworzona przez codzienne wybory, podejmowane nawyki i działania w świecie realnym.',
        'BARDZIEJ PRECYZYJNY MODEL: Nie „szukaj siebie”, lecz świadomie projektuj i buduj swoje zachowania w oparciu o wybrane wartości.'
      ]
    },
    {
      id: 'sec-17-16',
      pageNumber: 46,
      sectionNumber: '17.16',
      title: '🔬 CO NADAL NIE JEST JASNE? Granice Plastyczności Tożsamościowej',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'Naukowe badanie tożsamości napotyka na poważne pytania metodologiczne. W jakim stopniu podstawa temperamentu (genetycznie uwarunkowana reaktywność układu nerwowego) ogranicza możliwość zmiany obrazu siebie?',
        'Choć neuroplastyczność pozwala na modyfikację nawyków i narracji, nie każdy człowiek może w dowolnym stopniu zmienić poziom neurotyczności czy ekstrawersji. Spór między determinizmem biologicznym a konstruktywizmem społecznym pozostaje otwarty.'
      ]
    },
    {
      id: 'sec-17-17',
      pageNumber: 48,
      sectionNumber: '17.17',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokół Redefinicji Narracji',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        '1. Identyfikacja kluczowej etykiety: Zauważ moment, w którym wypowiadasz w myśli słowa „Ja po prostu taki jestem”.',
        '2. Zastosowanie pauzy językowej: Przetłumacz to zdanie na konkretną sytuację i brak nawyku.',
        '3. Mikrokrok tożsamościowy: Wykonaj jedno małe działanie, które jest bezpośrednim zaprzeczeniem starej etykiety (np. zabierz głos na spotkaniu przez 30 sekund).',
        '4. Zapis w dzienniku sprawczości: Zarejestruj fakt wykonania akcji jako nowy dowód w Twojej prywatnej bazie danych.'
      ],
      exerciseRef: selfExercisesChapterSeventeen[2]
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
      pageNumber: 52,
      sectionNumber: '17.19',
      title: 'Most do Rozdziału 18 oraz Powiązania z Tomem I i II',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        'Tożsamość, którą poznaliśmy w tym rozdziale, opiera się na fundamencie mechanizmów poznawczych z Tomu I (pamięć autobiograficzna z Rozdziału 5, uwaga z Rozdziału 3) oraz dynamiki społecznej z Tomu II (konformizm z Rozdziału 6, komunikacja z Rozdziału 7).',
        'Jednak tożsamość nie istnieje w próżni – jej cegiełkami są przekonania. W następnym rozdziale przejdziemy do badania tego, czym są przekonania, jak powstają schematy poznawcze i jak aktualizować swój sposób patrzenia na świat, gdy napotykamy nowe fakty.'
      ]
    },
    {
      id: 'sec-17-20',
      pageNumber: 54,
      sectionNumber: '17.20',
      title: 'Podsumowanie Rozdziału 1: Kluczowe Wglądy',
      category: 'podsumowanie',
      readingTimeMinutes: 6,
      paragraphs: [
        '1. Tożsamość nie jest sztywnym rdzeniem, lecz dynamicznym procesem rekonstruowanym przez DMN.',
        '2. Etykiety „ja taki jestem” działają jak samospełniające się przepowiednie, blokujące neuroplastyczność.',
        '3. Zamiana zdań esencjalistycznych na opisy behawioralne odzyskuje sprawczość w dlPFC.',
        '4. Zrównoważona tożsamość stoi na wielu niezależnych filarach i elastyczności w odgrywaniu ról.'
      ]
    },
    {
      id: 'sec-17-21',
      pageNumber: 56,
      sectionNumber: '17.21',
      title: 'Egzamin Końcowy Rozdziału 1: Tożsamość i Obraz Siebie',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu architektury tożsamości, etykiet tożsamościowych i reakcji zachowawczych. Poniższy test zawiera pytania analityczne wymagające głębokiego zrozumienia opisywanych procesów.'
      ]
    }
  ]
};
