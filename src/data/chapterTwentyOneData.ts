import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

export const chapterTwentyOneExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii poznawczej metapoznanie (metacognition) definiuje się jako:',
    topic: 'Definicja Metapoznania',
    sectionRef: 'Sekcja 21.1',
    options: [
      { label: 'A', text: 'Zdolność do myślenia o własnym myśleniu — procesy monitorowania i kontrolowania własnych stanów poznawczych, pamięciowych i emocjonalnych.', isCorrect: true },
      { label: 'B', text: 'Zdolność do szybkiego zapamiętywania nazwisk osób poznamych na imprezie.', isCorrect: false },
      { label: 'C', text: 'Umiejętność czytania w myślach innych ludzi bez używania słów.', isCorrect: false },
      { label: 'D', text: 'Proces automatycznego trawienia pokarmu po posiłku.', isCorrect: false }
    ],
    explanation: 'Metapoznanie to nadzorcza warstwa umysłu (Meta-Cognitive Executive), która obserwuje jak myślimy, pamiętamy i podejmujemy decyzje.',
    keyTakeaway: 'Metapoznanie to zdolność stanie się świadomym obserwatorem własnego umysłu.'
  },
  {
    id: 2,
    question: 'Na czym polega iluzja wglądu (Illusion of Insight) opisywana w badaniach nad introspekcją (Nisbett & Wilson)?',
    topic: 'Granice Introspekcji',
    sectionRef: 'Sekcja 21.4',
    options: [
      { label: 'A', text: 'Ludzie często nie mają bezpośredniego dostępu do wyższych procesów poznawczych i tworzą po fakcie dorobione, zmyślone teorie na temat przyczyn własnych decyzji.', isCorrect: true },
      { label: 'B', text: 'Introspekcja daje zawsze w 100% doskonałą i obiektywną wiedzę o przyczynach naszych zachowań.', isCorrect: false },
      { label: 'C', text: 'Introspekcja jest możliwa tylko podczas głębokiego snu.', isCorrect: false },
      { label: 'D', text: 'Nikt na świecie nie potrafi podjąć świadomej decyzji.', isCorrect: false }
    ],
    explanation: 'Nisbett i Wilson udowodnili, że gdy pytamy ludzi „dlaczego to wybrałeś?”, ich umysł często generuje racjonalizację post-hoc, zamiast podawać realną przyczynę.',
    keyTakeaway: 'Nie bierz swoich automatycznych wyjaśnień „dlaczego tak zrobiłem” za niepodważalną prawdę.'
  },
  {
    id: 3,
    question: 'Jaką funkcję w metapoznaniu pełni kalibracja metapoznawcza (Metacognitive Calibration)?',
    topic: 'Kalibracja Metapoznawcza',
    sectionRef: 'Sekcja 21.8',
    options: [
      { label: 'A', text: 'Mierzy stopień spójności między subiektywną pewnością człowieka co do słuszności swojego sądu a obiektywną trafnością tego sądu.', isCorrect: true },
      { label: 'B', text: 'Wylicza poziom cukru we krwi przed i po wysiłku.', isCorrect: false },
      { label: 'C', text: 'Służy do ustawiania ostrości w aparatach fotograficznych.', isCorrect: false },
      { label: 'D', text: 'Mierzy pojemność płuc w trakcie biegu.', isCorrect: false }
    ],
    explanation: 'Dobra kalibracja oznacza, że gdy jesteś pewien na 90%, mylisz się tylko w 10% przypadków. Zła kalibracja wywołuje fałszywą pewność siebie.',
    keyTakeaway: 'Wysoka pewność siebie przy niskiej trafności to prosta droga do katastroficznych błędów.'
  },
  {
    id: 4,
    question: 'Czym różni się obserwacja fenomenologiczna własnego stanu od jego interpretacji?',
    topic: 'Obserwacja vs Interpretacja',
    sectionRef: 'Sekcja 21.5',
    options: [
      { label: 'A', text: 'Obserwacja rejestruje surowy bodziec z ciała („Czuję ścisk w żołądku”), zaś interpretacja dorabia do niego teorię („On mnie nienawidzi”).', isCorrect: true },
      { label: 'B', text: 'Interpretacja trwa 5 sekund, a obserwacja 2 godziny.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy, oba słowa oznaczają to samo.', isCorrect: false },
      { label: 'D', text: 'Obserwacja dotyczy tylko fizyki, a interpretacja biologii.', isCorrect: false }
    ],
    explanation: 'Umiejętność rozdzielenia surowego doznania somatycznego od dramatycznej narracji jest fundamentem regulacji emocjonalnej.',
    keyTakeaway: 'Oddziel surowe doznanie biologiczne od dorobionej do niego teorii.'
  },
  {
    id: 5,
    question: 'Jak ruminacja (Overthinking) różni się od konstruktywnego metapoznania?',
    topic: 'Ruminacja vs Metapoznanie',
    sectionRef: 'Sekcja 21.13',
    options: [
      { label: 'A', text: 'Ruminacja to bezowocne, jałowe kręcenie się wokół problemu w poczuciu bezradności, zaś metapoznanie to analityczny obserwator, który prowadzi do korekty działania.', isCorrect: true },
      { label: 'B', text: 'Ruminacja jest zawsze przyjemna, a metapoznanie bolesne.', isCorrect: false },
      { label: 'C', text: 'Ruminacja występuje tylko u dzieci.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy w funkcjonowaniu mózgu.', isCorrect: false }
    ],
    explanation: 'Ruminacja utrzymuje hiperaktywację w DMN i ciele migdałowatym, podczas gdy metapoznanie włącza sieć kontroli wykonawczej w dlPFC.',
    keyTakeaway: 'Nie pomyl jałowego zamartwiania się ze świadomym rozwiązywaniem problemu.'
  },
  {
    id: 6,
    question: 'Jaką rolę w wykrywaniu własnych błędów poznawczych w czasie rzeczywistym pełni kora przedczołowa?',
    topic: 'Wykrywanie Błędów w Mózgu',
    sectionRef: 'Sekcja 21.9',
    options: [
      { label: 'A', text: 'Przednia kora obwodu (ACC) wysyła sygnał konfliktu, a grzbietowo-boczna kora przedczołowa (dlPFC) powstrzymuje odruch automatyczny i wdraża korektę.', isCorrect: true },
      { label: 'B', text: 'Wykrywanie błędów zachodzi wyłącznie w rdzeniu kręgowym.', isCorrect: false },
      { label: 'C', text: 'Mózg nie posiada żadnego mechanizmu wykrywania własnych błędów.', isCorrect: false },
      { label: 'D', text: 'Kora przedczołowa służy tylko do rejestrowania zapachów.', isCorrect: false }
    ],
    explanation: 'Integracja ACC i dlPFC tworzy neuronalny hamulec bezpieczeństwa chroniący przed impulsywnymi błędami.',
    keyTakeaway: 'Pauza poznawcza przed reakcją to czas na aktywację Twojego wewnętrznego hamulca.'
  },
  {
    id: 7,
    question: 'Co charakteryzuje postawę „Meta-Warstwy” w odniesieniu do pierwszych 4 rozdziałów Tomu III?',
    topic: 'Meta-Warstwa Tomu III',
    sectionRef: 'Sekcja 21.12',
    options: [
      { label: 'A', text: 'Traktowanie własnej tożsamości, przekonań, samooceny i wartości jako obserwowalnych procesów, które można badać i korygować z dystansu.', isCorrect: true },
      { label: 'B', text: 'Napisanie książki autobiograficznej pod pseudonimem.', isCorrect: false },
      { label: 'C', text: 'Zapomnienie wszystkiego czego nauczyliśmy się wcześniej.', isCorrect: false },
      { label: 'D', text: 'Kupowanie okularów do czytania w ciemności.', isCorrect: false }
    ],
    explanation: 'Przejście od „Jestem moimi myślami” do „Jestem obserwatorem moich myśli” jest największym skokiem rozwojowym w autonomicznym funkcjonowaniu.',
    keyTakeaway: 'Nie jesteś swoimi myślami — jesteś przestrzenią, w której te myśli się pojawiają.'
  },
  {
    id: 8,
    question: 'Jak zjawisko ślepych plamek (Blind Spots) wpływa na naszą samoświadomość?',
    topic: 'Ślepe Plamki Samoświadomości',
    sectionRef: 'Sekcja 21.10',
    options: [
      { label: 'A', text: 'Sprawia, że nie dostrzegamy własnych zniekształceń i błędów behawioralnych, które są doskonale widoczne dla zewnętrznych obserwatorów.', isCorrect: true },
      { label: 'B', text: 'Wywołuje trwała utratę wzroku w ciemnym pokoju.', isCorrect: false },
      { label: 'C', text: 'Uniemożliwia czytanie map drogowych.', isCorrect: false },
      { label: 'D', text: 'Zwiększa odporność na infekcje.', isCorrect: false }
    ],
    explanation: 'Dlatego uczciwy feedback od zaufanych mentorytów jest niezbędny dla zniwelowania własnych ślepych plamek.',
    keyTakeaway: 'Potrzebujemy innych ludzi jako luster, by zobaczyć to, co ukryte przed naszym własnym wzrokiem.'
  },
  {
    id: 9,
    question: 'Na czym polega monitorowanie procesów poznawczych w pętli Metapoznawczej?',
    topic: 'Pętla Metapoznawcza',
    sectionRef: 'Sekcja 21.3',
    options: [
      { label: 'A', text: 'Ciągły przepływ informacji między poziomem obiektowym (gdzie zachodzi myślenie) a poziomem meta (gdzie oceniamy sprawność i trafność tego myślenia).', isCorrect: true },
      { label: 'B', text: 'Liczenie oddechów przez 24 godziny bez przerwy.', isCorrect: false },
      { label: 'C', text: 'Powtarzanie regułek z gramatyki angielskiej.', isCorrect: false },
      { label: 'D', text: 'Sprawdzanie stanu konta bankowego.', isCorrect: false }
    ],
    explanation: 'Poziom meta dokonuje ewaluacji („Czy dobrze zrozumiałem ten tekst?”) i wywoływa kontrolę („Muszę przeczytać ten akapit jeszcze raz”).',
    keyTakeaway: 'Monitorowanie bez kontroli jest jałowe, kontrola bez monitorowania jest ślepa.'
  },
  {
    id: 10,
    question: 'Jaką rolę w kalibracji pewności siebie odgrywa pętla samoobserwacji z dziennikiem decyzji?',
    topic: 'Dziennik Decyzji i Metapoznanie',
    sectionRef: 'Sekcja 21.15',
    options: [
      { label: 'A', text: 'Pozwala po czasie zweryfikować obiektywną trafność własnych prognoz, odsłaniając błędy pewności siebie i racjonalizacje post-hoc.', isCorrect: true },
      { label: 'B', text: 'Służy do zapisywania wyłącznie listy zakupów.', isCorrect: false },
      { label: 'C', text: 'Wyłącza potrzebę myślenia przed podjęciem decyzji.', isCorrect: false },
      { label: 'D', text: 'Gwarantuje brak jakichkolwiek niepowodzeń finansowych.', isCorrect: false }
    ],
    explanation: 'Zapisanie subiektywnego prawdopodobieństwa na piśmie PRZED poznałem wyniku chroni przed Błędem Mądrości Po Fakcie (Hindsight Bias).',
    keyTakeaway: 'Zapisuj swoje prognozy na piśmie, by konfrontować subiektywną pewność z obiektywnym wynikiem.'
  },
  {
    id: 11,
    question: 'Co według badań dotyczych autorefleksji charakteryzuje pytanie „CO?” w odróżnieniu od pytania „DLACZEGO?” (Tasha Eurich)?',
    topic: 'Pytanie CO vs DLACZEGO',
    sectionRef: 'Sekcja 21.14',
    options: [
      { label: 'A', text: 'Pytanie „DLACZEGO czuję lęk?” promuje jałową ruminację, podczas gdy „CO mogę zrobić w tej sytuacji?” kieruje uwagę na sprawcze działanie.', isCorrect: true },
      { label: 'B', text: 'Pytanie „DLACZEGO” daje natychmiastowe rozwiązania biznesowe.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy w psychologii autorefleksji.', isCorrect: false },
      { label: 'D', text: 'Pytanie „CO” wywołuje atak paniki.', isCorrect: false }
    ],
    explanation: 'Zamiana pytania „Dlaczego to mnie spotkało?” na „Co mogę z tym zrobić?” jest najprostszym przełączeniem z ruminacji na metapoznanie.',
    keyTakeaway: 'Pytaj „CO?” i „JAK?”, zamiast ugrzęznąć w jałowym „DLACZEGO?”.'
  },
  {
    id: 12,
    question: 'Jaką funkcję pełni pauza poznawcza (Cognitive Pause) w procesie podejmowania decyzji?',
    topic: 'Pauza Poznawcza',
    sectionRef: 'Sekcja 18.15',
    options: [
      { label: 'A', text: 'Tworzy szczelinę czasową między bodźcem a reakcją, pozwalając wyjść z automatycznego skryptu limficznego i włączyć refleksję w dlPFC.', isCorrect: true },
      { label: 'B', text: 'Narzuca natychmiastowe usnięcie na 15 minut.', isCorrect: false },
      { label: 'C', text: 'Uniemożliwia jakąkolwiek odpowiedź werbalną.', isCorrect: false },
      { label: 'D', text: 'Służy do wyliczania podatków.', isCorrect: false }
    ],
    explanation: 'W owej szczelinie między bodźcem a reakcją leży nasza cała wolność wyboru i autonomia decyzyjna.',
    keyTakeaway: 'Pomiędzy bodźcem a reakcją znajduje się przestrzeń na Twoją wolność.'
  },
  {
    id: 13,
    question: 'Na czym polega błąd „Pewność to Trafność” (Certainty-Accuracy Fallacy)?',
    topic: 'Błąd Pewność to Trafność',
    sectionRef: 'Sekcja 21.8',
    options: [
      { label: 'A', text: 'Fałszywe założenie, że im silniejsze i bardziej gwałtowne jest subiektywne poczucie pewności co do jakiegoś sądu, tym bardziej jest on obiektywnie prawdziwy.', isCorrect: true },
      { label: 'B', text: 'Przekonanie, że każdy wykres jest prawdziwy.', isCorrect: false },
      { label: 'C', text: 'Niezdolność do odczuwania pewności w jakiejkolwiek sprawie.', isCorrect: false },
      { label: 'D', text: 'Utrata pamięci po urazie głowy.', isCorrect: false }
    ],
    explanation: 'Siła emocjonalnego przekonania nie ma bezpośredniego związku z jego merytoryczną poprawnością.',
    keyTakeaway: 'Można być głęboko, absolutnie i gwałtownie przekonanym... i całkowicie się mylić.'
  },
  {
    id: 14,
    question: 'Jaką rolę w metapoznaniu odgrywa ciało migdałowate vs kora przedczołowa?',
    topic: 'Anatomi Mózgu w Metapoznaniu',
    sectionRef: 'Sekcja 21.6',
    options: [
      { label: 'A', text: 'Ciało migdałowate generuje szybkie, nawykowe reakcje lękowe, a kora przedczołowa sprawuje nadzór metapoznawczy i wycisza impuls obronny.', isCorrect: true },
      { label: 'B', text: 'Ciało migdałowate odpowiada za logikę, a kora za strach.', isCorrect: false },
      { label: 'C', text: 'Obie struktury wyłączają się w trakcie myślenia.', isCorrect: false },
      { label: 'D', text: 'Nie uczestniczą w procesach decyzyjnych.', isCorrect: false }
    ],
    explanation: 'Trening metapoznawczy wzmacnia funkcjonalne połączenia hamujące między dlPFC a ciałem migdałowatym.',
    keyTakeaway: 'Świadomy nadzór kory przedczołowej poskramia impulsywność układu limficznego.'
  },
  {
    id: 15,
    question: 'Czym charakteryzuje się samoobserwacja bez oceniania (Non-Judgmental Awareness)?',
    topic: 'Samoobserwacja bez Oceny',
    sectionRef: 'Sekcja 21.5',
    options: [
      { label: 'A', text: 'Rejestrowanie pojawiających się myśli i emocji jak chmur na niebie, bez natychmiastowego przypisywania im etykiet „dobry” czy „zły”.', isCorrect: true },
      { label: 'B', text: 'Całkowity brak jakichkolwiek myśli w głowie.', isCorrect: false },
      { label: 'C', text: 'Ocenianie każdego swojego kroku w skali 1-10.', isCorrect: false },
      { label: 'D', text: 'Ignorowanie konsekwencji własnych działań.', isCorrect: false }
    ],
    explanation: 'Przyglądanie się myśli bez wchodzenia z nią w fuzję poznawczą pozwala na zachowanie dystansu i spokoju.',
    keyTakeaway: 'Zauważ myśl, pozwól jej przepłynąć i wybierz swoją odpowiedź.'
  },
  {
    id: 16,
    question: 'Jak błąd Hindsight Bias (Mądrość Po Fakcie) niszczy naszą samoświadomość?',
    topic: 'Hindsight Bias',
    sectionRef: 'Sekcja 21.10',
    options: [
      { label: 'A', text: 'Po poznaniu wyniku zdarzenia wmawiamy sobie: „Od początku wiedziałem że tak będzie!”, zniekształcając pamięć o naszej wstępnej niepewności.', isCorrect: true },
      { label: 'B', text: 'Uniemożliwia zapamiętywanie dat urodzin.', isCorrect: false },
      { label: 'C', text: 'Zmusza do ciągłego czytania gazet historycznych.', isCorrect: false },
      { label: 'D', text: 'Gwarantuje idealną trafność prognoz giełdowych.', isCorrect: false }
    ],
    explanation: 'Hindsight Bias uniemożliwia uczenie się na błędach, wywołując iluzję nieomylności retrospektywnej.',
    keyTakeaway: 'Uczciwa ocena decyzji wymaga oceny danych dostępnych w W MOMENCIE jej podejmowania.'
  },
  {
    id: 17,
    question: 'Na czym polega defuzja poznawcza (Cognitive Defusion) w Terapii Akceptacji i Zaangażowania (ACT)?',
    topic: 'Defuzja Poznawcza',
    sectionRef: 'Sekcja 21.14',
    options: [
      { label: 'A', text: 'Oddzielenie siebie od myśli poprzez zauważenie: „Mam myśl, że nie dam rady”, zamiast fuzji: „Nie dam rady”.', isCorrect: true },
      { label: 'B', text: 'Próba całkowitego wymazania myśli z głowy siłą woli.', isCorrect: false },
      { label: 'C', text: 'Głośne krzyczenie na własne myśli w pokoju.', isCorrect: false },
      { label: 'D', text: 'Picie dużej ilości wody podczas nauki.', isCorrect: false }
    ],
    explanation: 'Defuzja tworzy przestrzeń metapoznawczą, w której myśl jest uznana za wytwór umysłu, a nie za nienaruszalny nakaz działania.',
    keyTakeaway: 'Ty jesteś obserwatorem myśli, a nie samą myślą.'
  },
  {
    id: 18,
    question: 'Jaką funkcję w metapoznaniu pełni proces re-framingu (Przeformułowania Poznawczego)?',
    topic: 'Re-framing',
    sectionRef: 'Sekcja 21.15',
    options: [
      { label: 'A', text: 'Świadoma zmiana ramy interpretacyjnej danego zdarzenia w celu odnalezienia nowej, bardziej sprawczej perspektywy.', isCorrect: true },
      { label: 'B', text: 'Malowanie ramek na zdjęcia na nowy kolor.', isCorrect: false },
      { label: 'C', text: 'Oszukiwanie samego siebie że trudna sytuacja nie istnieje.', isCorrect: false },
      { label: 'D', text: 'Wyłączanie pamięci krótkotrwałej.', isCorrect: false }
    ],
    explanation: 'Re-framing nie jest naiwnym optymizmem — jest poszukiwaniem prawdziwej, lecz bardziej użytecznej ramy dla tego samego faktu.',
    keyTakeaway: 'Zmień ramę obrazu, a zobaczysz zupełnie inne możliwości działania.'
  },
  {
    id: 19,
    question: 'Co jest głównym wskaźnikiem wysokiego poziomu Dojrzałości Metapoznawczej?',
    topic: 'Dojrzałość Metapoznawcza',
    sectionRef: 'Sekcja 21.12',
    options: [
      { label: 'A', text: 'Spokojna zdolność do obserwowania własnych emocji, nawyków i błędów z życzliwym dystansem oraz sprawna korekta działania bez utraty poczucia wartości.', isCorrect: true },
      { label: 'B', text: 'Brak jakichkolwiek błędów myślowych i emocji.', isCorrect: false },
      { label: 'C', text: 'Przekonanie o własnej wyższości nad innymi.', isCorrect: false },
      { label: 'D', text: 'Ciągłe zamartwianie się o przyszłość.', isCorrect: false }
    ],
    explanation: 'Dojrzałość metapoznawcza łączy czujną samoobserwację z głębokim samowspółczuciem i elastycznością wykonawczą.',
    keyTakeaway: 'Dojrzałość to spokój w obserwacji własnego umysłu i odważna korekta w działaniu.'
  },
  {
    id: 20,
    question: 'Jak metapoznanie pozwala domknąć I blok Tomu III (Tożsamość, Przekonania, Samoocena, Wartości)?',
    topic: 'Synteza Bloku I Tomu III',
    sectionRef: 'Sekcja 21.12',
    options: [
      { label: 'A', text: 'Daje narzędzie nadzorcze, które pozwala badać naszą tożsamość, przekonania, samoocenę i wartości jako dynamiczny system, nad którym sprawujemy aktywną kontrolę.', isCorrect: true },
      { label: 'B', text: 'Narzuca zapomnienie wszystkich zdobytych wglądów.', isCorrect: false },
      { label: 'C', text: 'Eliminuje potrzebę podejmowania jakichkolwiek decyzji życiowych.', isCorrect: false },
      { label: 'D', text: 'Zmusza do zrezygnowania z rozwoju osobistego.', isCorrect: false }
    ],
    explanation: 'Metapoznanie jest spoiwem, które zamienia teorię w codzienną, autonomiczną praktykę samokształtowania.',
    keyTakeaway: 'Zyskałeś klucz do własnego umysłu — używaj go z mądrością i odwaga.'
  }
];

export const caseStudiesChapterTwentyOne: CaseStudy[] = [
  {
    id: 'studium-21-1-iluzja-wgladu',
    title: 'W sieci własnych racjonalizacji: Jak Iluzja Wglądu oślepiła menedżera Konrada',
    subtitle: 'Illusion of Insight, opór przed feedbackiem i przełom metapoznawczy',
    protagonist: 'Konrad, 43 lata, dyrektor operacyjny',
    context: 'Konrad uważał siebie za wzór samoświadomości. Po przeczytaniu kilkudziesięciu książek psychologicznych potrafił z łatwością analizować mechanizmy innych ludzi, całkowicie przeoczając własny agresywny styl zarządzania.',
    story: [
      'Konrad na zebraniach często podnosił głos, przerywał podwładnym i drwił z ich pomysłów. Pytany o te zachowania podawał wyrafinowane teorie psychologiczne: „Ja po prostu stosuję prowokatywną metodę wyciągania ludzi ze strefy komfortu dla ich własnego rozwoju”.',
      'Był to podręcznikowy przykład Iluzji Wglądu (Nisbett & Wilson) — Konrad tworzył post-hoc błyskotliwe rationalizacje, by ukryć przed sobą prosty fakt: nie potrafił kontrolować własnej irytacji.',
      'Dopiero gdy z jego działu odeszło 4 kluczowych specjalistów w ciągu miesiąca, zarząd nakazał mu udział w sesjach feedbackowych z użyciem nagrań wideo z zebrań.',
      'Obejrzenie własnego nagrania bez możliwości ucieczki w teorie było dla Konrada szokiem metapoznawczym. Po raz pierwszy zobaczył swoje zachowanie bez zniekształcającej soczewki własnych rationalizacji.'
    ],
    dialogue: [
      { speaker: 'Coach', text: 'Konrad, spójrz na slajd 12 nagrania. Dlaczego przerwałeś Ani w 3 sekundzie jej wypowiedzi i podniosłeś głos?', subtext: 'Zderzenie z obiektywnym materiałem dowodowym.' },
      { speaker: 'Konrad', text: 'Bo ja wiedziałem co ona chce powiedzieć... Chciałem oszczędzić czas zespołu...', subtext: 'Automatyczna racjonalizacja post-hoc wyciszana przez nagranie.' }
    ],
    decisionTaken: 'Konrad rozpoczął codzienną praktykę rejestracji pauzy poznawczej i przeprosił zespół za swoje dotychczasowe zachowanie.',
    whatProtagonistSaw: 'Własną rzekomą mądrość psychologiczną i misję edukacyjną.',
    whatWasMissed: 'Fakt, że jego zachowanie było zwykłą, niekontrolowaną impulsywnością emocjonalną.',
    psychologicalAnalysis: {
      coreMechanism: 'Iluzja Wglądu (Illusion of Insight) i racjonalizacja post-hoc.',
      cognitiveBiases: [
        { name: 'Blind Spot Bias', description: 'Dostrzeganie błędów u innych przy ślepocie na własne zniekształcenia.', impact: 'Niszczenie relacji z zespołem.' }
      ],
      defenseMechanisms: [
        { name: 'Intelektualizacja', explanation: 'Używanie teorii psychologicznych do usprawiedliwiania braku samokontroli.' }
      ],
      emotionalDynamic: 'Pycha poznawcza pękająca w zderzeniu z obiektywnym nagraniem wideo.'
    },
    decisionProcessAnalysis: {
      trigger: 'Oglądanie nagrania własnego zebrania na sesji coachingu.',
      attentionFocus: 'Własna twarz i reakcja przerażenia na twarzach podwładnych.',
      interpretation: '„Ja ich nie motywowałem... ja ich zastraszałem”.',
      emotion: 'Szok, wstyd, pokora.',
      impulse: 'Obrona, przerywanie nagrania.',
      action: 'Zatrzymanie się, akceptacja faktów i przeprosiny zespołu.',
      consequence: 'Odbudowa relacji i uratowanie działu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'mPFC i dlPFC', role: 'Przejście do obiektywnego monitorowania metapoznawczego', activationState: 'Aktywacja kory nadzorczej' }
      ],
      neurotransmitters: [
        { name: 'Serotonina i Dopamina', roleInScenario: 'Spadek pychy na rzecz stabilnego ugruntowania w faktach.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Widok własnego krzyku na nagraniu wywołuje skok tętna i wstyd.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Intelektualne uzasadnienie przemocy', description: 'Nazywanie własnej agresji „prowokatywnym rozwojem”.', vulnerabilityExploited: 'Arogancję i potrzebę dominacji.' }
      ],
      counterMeasures: [
        { step: '1. Obiektywny Zapis Wideo/Audio', script: '„Nie dyskutujemy o Twoich intencjach. Oglądamy twardy materiał wideo i analizujemy fakt”.', rationale: 'Przełamuje racjonalizację post-hoc.' }
      ]
    },
    alternativePath: 'Gdyby Konrad odrzucił nagranie, zostałby zwolniony z zarządu za mobbing.',
    readerQuestion: 'Jakie własne niedociągnięcia dorabiasz do pięknych teorii psychologicznych?',
    keyTakeaway: 'Teoretyczna wiedza o psychologii bez uczciwej samoobserwacji staje się jedynie bardziej wyrafinowaną formą samooszustwa.'
  },
  {
    id: 'studium-21-2-ruminacja-vs-metapoznanie',
    title: 'Błędne koło myśli: Jak Marta zamieniła jałową ruminację na sprawcze metapoznanie',
    subtitle: 'Ruminacja (Overthinking), pętla DMN i przełączenie na pytania sprawcze',
    protagonist: 'Marta, 29 lat, analityczka finansowa',
    context: 'Marta po popelnieniu błędu w wycenie przeżywała nocne gonitwy myśli. Przez 4 godziny w łóżku powtarzała w głowie te same pytania: „Dlaczego ja zawsze muszę coś zepsuć? Co szef sobie o mnie pomyśli? Dlaczego jestem taka nieuważna?”.',
    story: [
      'Marta uważała, że jej nocne zamartwianie się jest dowodem odpowiedzialności i „głębokiej autorefleksji”. W rzeczywistości była to jałowa ruminacja.',
      'Ruminacja podtrzymywała hiperaktywację DMN i ciała migdałowatego, uniemożliwiając sen i generując poranne wyczerpanie.',
      'Terapeutka uświadomiła Marcie różnicę: Ruminacja pyta bez końca „DLACZEGO?”, nie szukając rozwiązań. Metapoznanie pyta „CO?” i „JAK?”, prowadząc do konkretnej akcji.',
      'Marta wdrożyła Protokół Przełączenia: gdy przychodziła nocna myśl, zapisywała ją w Dzienniku Metapoznawczym i zadawała jedno pytanie: „Co konkretnie mogę zrobić z tym jutro o 8:00?”.'
    ],
    dialogue: [
      { speaker: 'Wewnętrzny Głos (Ruminacja)', text: 'Dlaczego znowu to zrobiłam? Jestem do niczego... Cała moja kariera się zawali...', subtext: 'Jałowa pętla lękowa w DMN.' },
      { speaker: 'Marta (Metapoznanie)', text: 'Stop. To jest myśl lękowa, a nie fakt. Jutro o 8:00 wyślę korektę tabeli. Teraz idę spać.', subtext: 'Defuzja poznawcza i przełączenie na akcję.' }
    ],
    decisionTaken: 'Marta wdrożyła Dziennik Metapoznawczy i zamieniła pytania „Dlaczego” na pytania „Co zrobić”.',
    whatProtagonistSaw: 'Nocne zamartwianie się jako dowód troski o pracę.',
    whatWasMissed: 'Fakt, że ruminacja niszczyła jej zdrowie bez przynoszenia jakiejkolwiek korzyści merytorycznej.',
    psychologicalAnalysis: {
      coreMechanism: 'Ruminacja poznawcza (Overthinking) vs Metapoznawcza Kontrola Wykonawcza.',
      cognitiveBiases: [
        { name: 'Katastrofizacja', description: 'Rozmnażanie czarnych scenariuszy bez weryfikacji faktów.', impact: 'Bezsenność i wyczerpanie.' }
      ],
      defenseMechanisms: [
        { name: 'Ruminacja jako iluzja działania', explanation: 'Zamartwianie się jako zastępnik realnego rozwiązania.' }
      ],
      emotionalDynamic: 'Ciągły lęk, poczucie bezradności i poranne wyczerpanie.'
    },
    decisionProcessAnalysis: {
      trigger: 'Przypomnienie sobie błędu z pracy w łóżku o 23:00.',
      attentionFocus: 'Czarne scenariusze i własna niedostateczność.',
      interpretation: '„Moje zamartwianie się jest potrzebne”.',
      emotion: 'Lęk, panika, bezsenność.',
      impulse: 'Przewracanie się z boku na bok i odtwarzanie rozmów.',
      action: 'Włączenie światła, zapisanie akcji w dzienniku i defuzja.',
      consequence: 'Głęboki sen i wysłanie korekty rano.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'DMN i Ciało migdałowate', role: 'Hiperaktywacja pętli ruminacyjnej', activationState: 'Obniżenie aktywacji po defuzji' },
        { region: 'dlPFC', role: 'Przełączenie uwagi na konkretny plan akcji', activationState: 'Wzrost aktywacji' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Melatolina', roleInScenario: 'Spadek kortyzolu pozwalający na naturalny wyrzut melatoniny.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Myśl o błędzie wywołuje skok tętna wyciszany zapisem na piśmie.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Pułapka Overthinkingu', description: 'Mylenie zamartwiania się z rozwiązywaniem problemu.', vulnerabilityExploited: 'Lęk przed porażką.' }
      ],
      counterMeasures: [
        { step: '1. Pytanie CO zamiast DLACZEGO', script: '„Zamiast pytać dlaczego to się stało, pytam: CO dokładnie mogę z tym zrobić jutro o 8:00?”.', rationale: 'Przełącza DMN na kontrolę wykonawczą.' }
      ]
    },
    alternativePath: 'Gdyby Marta trwała w ruminacji, nabawiłaby się przewlekłej bezsenności i nerwicy lękowej.',
    readerQuestion: 'Czy Twoje nocne myśli prowadzą do konkretnego planu działania, czy są tylko jałowym katastrofizowaniem?',
    keyTakeaway: 'Nie myl zamartwiania się z myśleniem. Prawdziwe myślenie kończy się planem akcji.'
  },
  {
    id: 'studium-21-3-pauza-poznawcza',
    title: 'W szczelinie między bodźcem a reakcją: Jak Robert opanował wybuchy wściekłości',
    subtitle: 'Pauza poznawcza (Cognitive Pause), wyciszanie ciała migdałowatego i samokontrola',
    protagonist: 'Robert, 37 lat, architekt wnętrz',
    context: 'Robert słynął z gwałtownego charakteru. Gdy podwykonawca na budowie zrobił coś niezgodnie z rysunkiem, Robert wpadał w szał, krzyczał i rzucał przedmiotami, co niszczyło jego reputację.',
    story: [
      'Robert tłumaczył się: „Ja po prostu mam krótki lont, reaguję błyskawicznie, to jest silniejsze ode mnie!”. Uważał swój wybuch za automatyczny odruch biologiczny.',
      'Terapeuta zapoznał go z koncepcją Pauzy Poznawczej Viktor Frankla: „Między bodźcem a reakcją jest przestrzeń. W tej przestrzeni leży nasza wolność wyboru”.',
      'Robert zaczął trenować 3-sekundową pauzę oddechową (Kotwica Ciała) za każdym razem, gdy widział błąd na budowie. Zamiast natychmiast krzyczeć, brał głęboki wdech i zadawał sobie pytanie: „Jaka jest moja reakcja docelowa?”.',
      'Trening pauzy poznawczej pozwolił mu przejąć kontrolę nad odruchem limbicznym. Jego relacje z budowlańcami uległy radykalnej poprawie, a projekty zaczęły być dowożone bez opóźnień.'
    ],
    dialogue: [
      { speaker: 'Budowlaniec', text: 'Panie Robercie, ściana wyszła 5 cm w lewo, pomyliliśmy rysunki.', subtext: 'Bodzeć wyzwalający potencjalny wybuch.' },
      { speaker: 'Robert (po 3-sekundowej pauzie)', text: 'Rozumiem. Zatrzymajmy prace. Pokażcie mi rysunek i zobaczmy jak to najszybciej skorygować.', subtext: 'Autonomiczna, opanowana odpowiedź z dlPFC.' }
    ],
    decisionTaken: 'Robert wdrożył 3-sekundową pauzę oddechową i przejął kontrolę nad automatycznym atakiem.',
    whatProtagonistSaw: 'Swoją wściekłość jako nieunikniony odruch biologiczny.',
    whatWasMissed: 'Fakt, że miedzy bodźcem a reakcją zawsze istnieje przestrzeń na świadomy wybór.',
    psychologicalAnalysis: {
      coreMechanism: 'Pauza Poznawcza (Cognitive Pause) i odgórna kontrola przedczołowa nad ciałem migdałowatym.',
      cognitiveBiases: [
        { name: 'Iluzja braku wyboru', description: 'Przekonanie że emocja MUSI automatycznie prowadzić do agresywnego zachowania.', impact: 'Zwalnianie się z odpowiedzialności.' }
      ],
      defenseMechanisms: [
        { name: 'Acting out', explanation: 'Natychmiastowe rozładowanie napięcia emocjonalnego przez krzyk i agresję.' }
      ],
      emotionalDynamic: 'Gwałtowny skok wściekłości wyciszany przywspółczulnym oddechem.'
    },
    decisionProcessAnalysis: {
      trigger: 'Widok błędnie wybudowanej ściany.',
      attentionFocus: 'Fala gorąca w ciele i impuls do krzyku.',
      interpretation: '„Mam 3 sekundy pauzy. Wybieram spokój i rozwiązanie”.',
      emotion: 'Złość wyciszana do poziomu opanowania.',
      impulse: 'Krzyk i rzucenie miarką.',
      action: '3 głębokie oddechy i spokojna rozmowa o korekcie.',
      consequence: 'Szybka naprawa błędu i zachowanie szacunku ekipy.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'dlPFC i ACC', role: 'Hamowanie impulsu limbicznego w szczelinie czasowej', activationState: 'Wzrost aktywacji kontrolnej' },
        { region: 'Ciało migdałowate', role: 'Generowanie pierwotnego impulsu walki', activationState: 'Wyhamowanie reakcji' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Spadek poziomu pobudzenia pod wpływem aktywacji nerwu błędnego.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Pauza 3-sekundowa daje czas na dotarcie sygnału do kory przedczołowej.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Mityczny krótki lont', description: 'Tłumaczenie braku samokontroli cechą temperamentu.', vulnerabilityExploited: 'Wygodę i impulsywność.' }
      ],
      counterMeasures: [
        { step: '1. Kotwica Oddechowa 3-Sekund', script: '„Widzę błąd -> Biorę wdech -> Liczę do 3 -> Dopiero wtedy mówię”.', rationale: 'Tworzy fizyczną pauzę poznawczą.' }
      ]
    },
    alternativePath: 'Gdyby Robert nie wdrożył pauzy, pobiłby się z podwykonawcą i stracił licencję.',
    readerQuestion: 'Jak długa jest Twoja pauza między bodźcem emocjonalnym a reakcją werbalną?',
    keyTakeaway: 'Twoja wolność leży w pauzie między tym, co Cię spotyka, a tym, jak na to odpowiadasz.'
  },
  {
    id: 'studium-21-4-kalibracja-pewnosci',
    title: 'Ślepa pewność w biznesie: Jak zła kalibracja metapoznawcza zniszczyła inwestycję Daniela',
    subtitle: 'Metacognitive Calibration, Overconfidence i dziennik prognoz',
    protagonist: 'Daniel, 41 lat, inwestor w branży nieruchomości',
    context: 'Daniel był w 100% pewien, że zakup działki pod Warszawą i budowa osiedla przyniesie 30% zysku w rok. Ignorował pytania doradców o warunki zabudowy i plany przestrzenne.',
    story: [
      'Daniel cierpiał na fatalną kalibrację metapoznawczą: jego subiektywna pewność wynosiła 100%, podczas gdy obiektywna trafność jego wiedzy o prawie budowlanym wynosiła zaledwie 30%.',
      'Mylił gwałtowną pewność emocjonalną z merytoryczną poprawnością sądu (Certainty-Accuracy Fallacy). Odrzucał audyty prawne jako „zbędne koszty”.',
      'Po zakupie ziemi okazało się, że przez działkę przebiega planowana linia wysokiego napięcia, co uniemożliwia jakąkolwiek budowę przez najbliższe 10 lat. Wartość ziemi spadła o 70%.',
      'Dopiero ta katastrofa zmusiła Daniela do nauki kalibracji metapoznawczej: zaczął szacować ilościowo prawdopodobieństwo i powoływać niezależnych audytorów do każdego projektu.'
    ],
    dialogue: [
      { speaker: 'Prawnik', text: 'Daniel, nie mamy jeszcze wypisu z planu zagospodarowania. Wstrzymaj przelew!', subtext: 'Merytoryczny sygnał ostrzegawczy.' },
      { speaker: 'Daniel', text: 'Ja wiem jak działają te urzędy! Załatwię to w tydzień, nie ma żadnego ryzyka! Przelewaj kapitał!', subtext: 'Zła kalibracja metapoznawcza i błąd pewności.' }
    ],
    decisionTaken: 'Daniel kupił działkę bez audytu prawnego na podstawie ślepej pewności siebie.',
    whatProtagonistSaw: 'Pewny zysk i własny nos do interesów.',
    whatWasMissed: 'Twarde zapisy w urzędowych księgach wieczystych i planach przestrzennych.',
    psychologicalAnalysis: {
      coreMechanism: 'Brak kalibracji metapoznawczej (Metacognitive Miscalibration) i Overconfidence Effect.',
      cognitiveBiases: [
        { name: 'Certainty-Accuracy Fallacy', description: 'Mylenie siły emocjonalnego przekonania z obiektywną prawdą.', impact: 'Tragiczna decyzja finansowa.' }
      ],
      defenseMechanisms: [
        { name: 'Wyparcie ryzyka', explanation: 'Traktowanie ostrzeżeń prawnika jako zbędnej biurokracji.' }
      ],
      emotionalDynamic: 'Ślepy huraoptymizm zakończony drastycznym upadkiem.'
    },
    decisionProcessAnalysis: {
      trigger: 'Okazja zakupu działki poniżej ceny rynkowej.',
      attentionFocus: 'Wizja szybkiego zysku 30%.',
      interpretation: '„Jestem genialnym inwestorem, poradzę sobie ze wszystkim”.',
      emotion: 'Chciwość, pycha.',
      impulse: 'Natychmiastowy przelew zaliczki.',
      action: 'Podpisanie aktu bez audytu.',
      consequence: 'Zamrożenie milionów złotych w bezużytecznej ziemi.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'ACC', role: 'Niedostateczna sygnalizacja ryzyka przez brak kalibracji', activationState: 'Brak aktywacji' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Pętla nagrody zasilana wizją zysku wyłączająca krytyczne myślenie.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Ostrzeżenie prawnika zlekceważone uśmiechem pychy.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Presja czasu i okazjonalność', description: 'Sprzedający narzucał pośpiech, by uniemożliwić audyt.', vulnerabilityExploited: 'Chciwość i pewność siebie.' }
      ],
      counterMeasures: [
        { step: '1. Dziennik Kalibracji Prognoz', script: '„Oceniam pewność tej decyzji na 90%. Zanim przeleję środki, wymuszam niezależny audyt merytoryczny”.', rationale: 'Urealnia kalibrację metapoznawczą.' }
      ]
    },
    alternativePath: 'Gdyby Daniel poczekał 3 dni na wypis z planu, uniknąłby straty milionów złotych.',
    readerQuestion: 'W jakich decyzjach mylisz siłę swojego optymizmu z twardymi faktami?',
    keyTakeaway: 'Pewność siebie to stan emocjonalny, a trafność to stan faktów. Nigdy ich nie myl.'
  },
  {
    id: 'studium-21-5-meta-warstwa-integracja',
    title: 'Nawigator własnego umysłu: Jak Krzysztof zintegrował 5 filarów Tomu III',
    subtitle: 'Tożsamość, Przekonania, Samoocena, Wartości i Metapoznanie w praktyce życiowej',
    protagonist: 'Krzysztof, 50 lat, dyrektor generalny i mentor biznesowy',
    context: 'Krzysztof po przejściu przez kryzys wieku średniego, rozwód i wypalenie zawodowe podjął głęboką pracę nad sobą. Zintegrował wiedzę z zakresu architektury umysłu w jeden spójny system samoregulacji.',
    story: [
      'Krzysztof nauczył się patrzeć na swoją tożsamość jako na ewoluujący proces (Rozdział 1), uwalniając się od sztywnej etykiety „prezesa-pracoholika”.',
      'Przekształcił swoje dotychczasowe dogmaty w hipotezy testowe (Rozdział 2), wykształcając pokorę epistemiczną i umiejętność słuchania innych.',
      'Oparł swoją samoocenę na wewnętrznym kompasie wartości i twardych dowodach sprawczości (Rozdział 3), całkowicie odcinając się od porównań społecznych.',
      'Zdefiniował nienaruszalne wartości (Rozdział 4) i zaczął zarządzać czasem zgodnie z zasadą Pareto. A nad wszystkim postawił czujnego obserwatora metapoznawczego (Rozdział 5).',
      'Krzysztof stał się człowiekiem o głębokiej autonomii, spokoju ducha i niezwykłej skuteczności w prowadzeniu ludzi.'
    ],
    dialogue: [
      { speaker: 'Młody Menedżer', text: 'Krzysztof, jak ty to robisz, że w największym kryzysie w firmie zachowujesz taki spokój i podejmujesz trafne decyzje?', subtext: 'Podziw dla dojrzałości metapoznawczej.' },
      { speaker: 'Krzysztof', text: 'Widzę emocje i ryzyka, ale nie jestem moimi emocjami. Mam proces, mam wartości i mam pauzę przed reakcją.', subtext: 'Pełna integracja Meta-Warstwy Tomu III.' }
    ],
    decisionTaken: 'Krzysztof stworzył osobczy system codziennej samoobserwacji i kalibracji decyzji oparty na 5 filarach.',
    whatProtagonistSaw: 'Własny umysł jako skomplikowany, ale obserwowalny i sterowalny system.',
    whatWasMissed: 'Nic — Krzysztof wykształcił pełną przejrzystość metapoznawczą.',
    psychologicalAnalysis: {
      coreMechanism: 'Pełna integracja Meta-Warstwy Tomu III: Nadzór Metapoznawczy nad procesami tożsamości, przekonań, samooceny i wartości.',
      cognitiveBiases: [
        { name: 'Redukcja wszystkich zniekształceń', description: 'Świadome wykrywanie i neutralizowanie błędów w czasie rzeczywistym.', impact: 'Niezwykła trafność decyzyjna.' }
      ],
      defenseMechanisms: [
        { name: 'Świadoma samoregulacja', explanation: 'Korekta zachowania z pozycji życzliwego obserwatora.' }
      ],
      emotionalDynamic: 'Głęboki, niezmącony spokój, spójność i duma z własnej drogi.'
    },
    decisionProcessAnalysis: {
      trigger: 'Kryzys biznesowy lub relacyjny.',
      attentionFocus: 'Meta-obserwacja własnych reakcji i faktów.',
      interpretation: '„Oto wyzwanie. Mam narzędzia, mam wartości, wybieram najlepszy krok”.',
      emotion: 'Spokój, skupienie, jasność.',
      impulse: 'Brak impulsywności.',
      action: 'Przemyślane, zrównoważone działanie.',
      consequence: 'Rozwiązanie problemu i budowanie autorytetu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Cała Sieć Kontroli Wykonawczej (FPN) i mPFC', role: 'Maksymalna synchronizacja procesów nadzorczych i emocjonalnych', activationState: 'Optymalna tonacja' }
      ],
      neurotransmitters: [
        { name: 'Równowaga Dopaminowo-Serotoninowa', roleInScenario: 'Stan wysokiego skupienia i poczucia dobrostanu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Sygnał stresowy jest natychmiast rejestrowany przez ACC i mitygowany przez dlPFC.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Odporność na wszelką manipulację', description: 'Dzięki znajomości własnych wartości i mechanizmów Krzysztof jest całkowicie niewrażliwy na szantaż emocjonalny.', vulnerabilityExploited: 'Brak podatności.' }
      ],
      counterMeasures: [
        { step: '1. Osobisty System Samoregulacji', script: '„Obserwuję mój umysł, kieruję moimi wartościami i podejmuję autonomiczne decyzje”.', rationale: 'Gwarantuje pełną autonomię psychologiczną.' }
      ]
    },
    alternativePath: 'Krzysztof stał się autentycznym liderem własnego życia i wzorem dla innych.',
    readerQuestion: 'Czy jesteś gotów zacząć traktować swój umysł jako system, który możesz świadomie obserwować i udoskonalać?',
    keyTakeaway: 'Autonomia to nie stan, w którym nie masz problemów. To zdolność świadomego nawigowania w swoim umyśle w każdym kryzysie.'
  }
];

export const selfExercisesChapterTwentyOne: SelfExercise[] = [
  {
    id: 'ex-21-1',
    title: 'Dziennik Obserwatora Metapoznawczego',
    subtitle: 'Praktyka rozdzielania surowych faktów od interpretacji',
    objective: 'Wykształcenie nawyku rejestrowania zdarzeń bez natychmiastowego dorabiania dramatycznych teorii.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Świadome rozdzielenie bodźca od interpretacji aktywuje grzbietowo-boczną korę przedczołową i wycisza reakcję limbiczną.',
    steps: [
      {
        stepNumber: 1,
        title: 'Rejestracja surowego faktu',
        instruction: 'Zapisz zdarzenie z dzisiaj w sposób czysto obiektywny, tak jak zarejestrowałaby je kamera wideo (bez przymiotników oceniasjących).',
        promptText: 'Surowy fakt wideo:',
        placeholder: 'Fakt: Szef wszedł do pokoju, nie powiedział „dzień dobry” i usiadł przy biurku o 9:01...'
      },
      {
        stepNumber: 2,
        title: 'Uchwycenie automatycznej interpretacji',
        instruction: 'Zapisz, jaką historię Twój umysł natychmiast do tego faktu dośpiewał.',
        promptText: 'Automatyczna historia mojego umysłu:',
        placeholder: 'Historia: On jest na mnie wściekły za ten raport, zaraz mnie wezwie i opieprzy...'
      },
      {
        stepNumber: 3,
        title: 'Sformułowanie 2 alternatywnych wyjaśnień',
        instruction: 'Zapisz 2 inne, równie prawdopodobne wyjaśnienia tego samego faktu.',
        promptText: 'Alternatywne wyjaśnienia:',
        placeholder: '1. Szef jest zamyślony bo ma trudną rozmowę z zarządem...\n2. Boli go ząb i spieszył się do łazienki...'
      }
    ],
    reflectionQuestions: [
      'Jak często Twoja pierwsza automatyczna historia okazuje się fałszywa?',
      'O ile lżejsze staje się Twoje ciało, gdy nie wierzysz bezkrytycznie w pierwszą myśl?'
    ]
  },
  {
    id: 'ex-21-2',
    title: 'Trening 3-Sekundowej Pauzy Poznawczej',
    subtitle: 'Budowanie szczeliny między bodźcem a reakcją',
    objective: 'Wykształcenie fizycznego nawyku wyhamowania impulsywnej odpowiedzi werbalnej lub behawioralnej.',
    durationMinutes: 10,
    neuroScientificFoundation: 'Trzysekundowa pauza oddechowa stwarza okno czasowe na dotarcie sygnału z podkorowego ciała migdałowatego do kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wyznaczenie kotwicy pauzy',
        instruction: 'Wybierz sygnał, który od dziś będzie dla Ciebie wezwaniem do 3-sekundowej pauzy (np. dźwięk powiadomienia, trudne pytanie od współpracownika).',
        promptText: 'Moja kotwica pauzy:',
        placeholder: 'Moja kotwica: Gdy ktoś zadaje mi trudne lub prowokujące pytanie na zebraniu...'
      },
      {
        stepNumber: 2,
        title: 'Procedura 3 sekund',
        instruction: 'Zapisz dokładny przebieg Twojej pauzy: 1. Zamknięcie ust, 2. Głęboki wdech do brzucha, 3. Ciche policzenie: 1... 2... 3...',
        promptText: 'Procedura pauzy:',
        placeholder: '1. Zamykam usta, 2. Biorę wdech nosem, 3. Liczę w myśli do 3, 4. Pytam sam siebie: Jaki jest mój cel?'
      },
      {
        stepNumber: 3,
        title: 'Trening na sucho',
        instruction: 'Wyobraź sobie prowokującą sytuację i przećwicz procedurę 3 sekund 5 razy zrzadką.',
        promptText: 'Potwierdzenie treningu:',
        placeholder: 'Przećwiczono na sucho 5 razy. Ciało zapamiętało odruch.'
      }
    ],
    reflectionQuestions: [
      'Jak ten krótki odruch chroni Cię przed wypowiedzeniem słów, których później żałujesz?',
      'Jak reaguje rozmówca, gdy widzi Twoje opanowanie i przemyślaną odpowiedź?'
    ]
  },
  {
    id: 'ex-21-3',
    title: 'Dziennik Kalibracji Prognoz i Pewności',
    subtitle: 'Urealnianie subiektywnej pewności z obiektywną trafnością',
    objective: 'Nauczenie się ilościowego szacowania prawdopodobieństwa i rozbrajanie Błędu Mądrości Po Fakcie.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Ilościowy zapis prognozy przed poznałem wyniku zmusza układ nadzorczy do nauki na błędach i koryguje Overconfidence Effect.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zapis prognozy i subiektywnej pewności',
        instruction: 'Przed podjęciem ważnej decyzji zapisz swoją prognozę i oceń swoją pewność w skali 0-100% (np. Ta rekrutacja zamknie się w 2 tygodnie - Pewność: 90%).',
        promptText: 'Prognoza i pewność:',
        placeholder: 'Prognoza: Klient podpisze umowę w tym tygodniu. Pewność: 85%.'
      },
      {
        stepNumber: 2,
        title: 'Weryfikacja obiektywnego wyniku po czasie',
        instruction: 'Po upływie wyznaczonego czasu zapisz rzeczywisty wynik zdarzenia.',
        promptText: 'Obiektywny wynik:',
        placeholder: 'Wynik: Klient przesunął decyzję o miesiąc z powodu braku budżetu.'
      },
      {
        stepNumber: 3,
        title: 'Analiza luki kalibracyjnej',
        instruction: 'Zapisz, dlaczego Twoja pewność była przesadzona i jaką lukę w informacjach przeoczyłeś.',
        promptText: 'Lekcja kalibracyjna:',
        placeholder: 'Moja pewność była za wysoka bo nie sprawdziłem cyklu budżetowego klienta. Następnym razem dodam to pytanie na pierwszej rozmowie.'
      }
    ],
    reflectionQuestions: [
      'O ile częściej mylisz się w sprawach, w których byłeś „w 100% pewien”?',
      'Jak rejestracja prognoz uczy Cię pokory epistemicznej?'
    ]
  },
  {
    id: 'ex-21-4',
    title: 'Praktyka Defuzji Poznawczej (ACT)',
    subtitle: 'Uwalnianie się od dyktatu automatycznych myśli',
    objective: 'Nauczenie się dystansowania od własnych myśli lękowych poprzez zmianę ramy językowej.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Zmiana ramy z „Jestem nieudacznikiem” na „Zauważam myśl, że jestem nieudacznikiem” aktywuje sieć kontroli i zmniejsza fuzję poznawczą.',
    steps: [
      {
        stepNumber: 1,
        title: 'Uchwycenie trudnej myśli w fuzji',
        instruction: 'Zapisz myśl, która często Cię paraliżuje w formie bezpośredniej (np. Nie dam rady, Zepsuję to).',
        promptText: 'Myśl w fuzji:',
        placeholder: 'Myśl: Kompromituję się na tym zebraniu...'
      },
      {
        stepNumber: 2,
        title: 'Zastosowanie ramy obserwatora',
        instruction: 'Przepisuj tę myśl dodając na początku frazę: „Mam myśl, że...”',
        promptText: 'Myśl z dystansem:',
        placeholder: 'Mam myśl, że kompromituję się na tym zebraniu...'
      },
      {
        stepNumber: 3,
        title: 'Głęboka defuzja metapoznawcza',
        instruction: 'Przepisuj myśl dodając frazę: „Zauważam, że mój umysł produkuje teraz myśl, że...”',
        promptText: 'Głęboka defuzja:',
        placeholder: 'Zauważam, że mój umysł produkuje teraz myśl, że kompromituję się na tym zebraniu. Dziękuję umyśle za tę myśl, ale wracam do prezentacji.'
      }
    ],
    reflectionQuestions: [
      'Jak zmiana słów wpływa na ciężar emocjonalny, jaki niesie ta myśl?',
      'Czy widzisz różnicę między BYCIEM myślą a BYCIEM OBSERWATOREM myśli?'
    ]
  },
  {
    id: 'ex-21-5',
    title: 'Audyt Ślepych Plamek (Blind Spot Survey)',
    subtitle: 'Używanie otoczenia jako obiektywnego lustra',
    objective: 'Zebranie życzliwego i rzetelnego feedbacku od 2 osób na temat Twoich schematów, których sam nie dostrzegasz.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Zewnętrzny feedback przełamuje automatyczne racjonalizacje DMN i pozwala korygować błędy w zachowaniu.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór 2 zaufanych osób',
        instruction: 'Wybierz 2 osoby z Twojego otoczenia (partner, przyjaciel, życzliwy współpracownik), które znają Cię dobrze i mówią prawdę.',
        promptText: 'Moi 2 obiektywni obserwatorzy:',
        placeholder: '1. Przyjaciel Michał\n2. Współpracownik Ewa'
      },
      {
        stepNumber: 2,
        title: 'Zadanie 2 pytań diagnostycznych',
        instruction: 'Zapytaj te osoby: 1. Jaka jest moja największa mocna strona? 2. Jaki nawyk lub zachowanie najczęściej utrudnia mi osiąganie celów, a którego sam nie zauważam?',
        promptText: 'Zebrany feedback:',
        placeholder: 'Michał: Masz świetne pomysły, ale gdy ktoś się nie zgadza, natychmiast zamykasz się w sobie i przestajesz rozmawiać...'
      },
      {
        stepNumber: 3,
        title: 'Metapoznawcza akceptacja bez obrony',
        instruction: 'Zapisz zebrany feedback bez szukania usprawiedliwień i podziękuj za niego.',
        promptText: 'Moja lekcja ze ślepej plamki:',
        placeholder: 'Akceptuję fakt, że wycofanie się z dyskusji jest moim rodzajem zniekształcenia obronnego. Zaplanuję reakcję zastępczą.'
      }
    ],
    reflectionQuestions: [
      'O ile trudniej dostrzec własną ślepą plamkę bez pomocy drugiego człowieka?',
      'Jak docenić odwagę osoby, która dała Ci szczery i trudny feedback?'
    ]
  },
  {
    id: 'ex-21-6',
    title: 'Zamiana „DLACZEGO” na „CO” (Overthinking Detox)',
    subtitle: 'Przełączanie ruminacji na sprawcze rozwiązywanie problemów',
    objective: 'Przekształcenie jałowych pytań lękowych w pytania ukierunkowane na akcję.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Pytania typu „CO” aktywują kwadrant zadaniowy kory przedczołowej, hamując jałowe krążenie w DMN.',
    steps: [
      {
        stepNumber: 1,
        title: 'Uchwycenie pytania ruminacyjnego („Dlaczego?”)',
        instruction: 'Zapisz pytanie, które często męczy Cię w głowie (np. Dlaczego ja zawsze mam pecha? Dlaczego on tak do mnie powiedział?).',
        promptText: 'Moje pytanie ruminacyjne:',
        placeholder: 'Pytanie: Dlaczego szef zawsze krytykuje akurat moje pomysły?'
      },
      {
        stepNumber: 2,
        title: 'Przepisanie na pytanie sprawcze („CO?”)',
        instruction: 'Przepisuj to pytanie na formułę: „CO konkretnie mogę zrobić w tej sytuacji?” lub „JAK mogę przygotować się do następnej rozmowy?”.',
        promptText: 'Moje pytanie sprawcze:',
        placeholder: 'Pytanie sprawcze: CO konkretnie mogę poprawić w strukturze mojej kolejnej prezentacji, by argumenty były niepodważalne?'
      },
      {
        stepNumber: 3,
        title: 'Określenie 1 akcji wykonawczej',
        instruction: 'Zapisz jedno działanie, które wykonasz w odpowiedzi na nowe pytanie.',
        promptText: 'Moja akcja wykonawcza:',
        placeholder: 'Prześlę wstępny szkic prezentacji do konsultacji z Ewą w czwartek.'
      }
    ],
    reflectionQuestions: [
      'O ile szybciej odzyskujesz energię do działania po zamianie pytań?',
      'Jak ta prosta zmiana nawyku językowego chroni Twój sen?'
    ]
  },
  {
    id: 'ex-21-7',
    title: 'Syntetyczny Rejestr Spójności Bloku I Tomu III',
    subtitle: 'Integracja Tożsamości, Przekonań, Samooceny i Wartości',
    objective: 'Sprawdzenie spójności między Twoim nowym obrazem siebie, przekonaniami, samooceną i wartościami.',
    durationMinutes: 30,
    neuroScientificFoundation: 'Całościowa synteza struktur poznawczych buduje zintegrowany, odporny na kryzysy model samoregulacji w mPFC.',
    steps: [
      {
        stepNumber: 1,
        title: 'Tożsamość i Przekonania (Rozdziały 1 i 2)',
        instruction: 'Napisz kim jesteś w ujęciu procesowym i jaka jest Twoja główna zaktualizowana hipoteza o świecie.',
        promptText: 'Tożsamość i Przekonanie:',
        placeholder: 'Jestem ewoluującym człowiekiem, który uczy się na błędach. Świat jest skomplikowany, ale mam narzędzia, by w nim nawigować.'
      },
      {
        stepNumber: 2,
        title: 'Samoocena i Wartości (Rozdziały 3 i 4)',
        instruction: 'Napisz na czym opiera się Twoja samoocena i jaka wartość prowadzi Twoje codzienne wybory.',
        promptText: 'Samoocena i Wartość:',
        placeholder: 'Moja samoocena opiera się na twardych dowodach pracy i wierności mojej wartości: Uczciwości i Troski o bliskich.'
      },
      {
        stepNumber: 3,
        title: 'Nadzór Metapoznawczy (Rozdział 5)',
        instruction: 'Napisz zdanie określające Twoją rolę jako obserwatora własnego umysłu.',
        promptText: 'Mój nadzór metapoznawczy:',
        placeholder: 'Jestem uważnym obserwatorem moich myśli i emocji. Zanim zareaguję, biorę oddech i wybieram odpowiedź w zgodzie z moim kompasem.'
      }
    ],
    reflectionQuestions: [
      'Jak czujesz się patrząc na ten zintegrowany fundament własnej autonomii?',
      'Jak ten fundament zmienia Twoją postawę wobec wyzwań, które czekają Cię w kolejnych tomach?'
    ]
  },
  {
    id: 'ex-21-8',
    title: 'Manifest Metapoznawczej Autonomii',
    subtitle: 'Zwieńczenie bloku I Tomu III i osobista deklaracja dojrzałości',
    objective: 'Stworzenie ostatecznego manifestu nawigatora własnego umysłu.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Kodyfikacja manifestu tworzy najwyższy skrypt torujący dla kory przedczołowej na całe przyszłe życie.',
    steps: [
      {
        stepNumber: 1,
        title: 'Moja przestrzeń wolności',
        instruction: 'Napisz zdanie o swojej wolności wyboru między bodźcem a reakcją.',
        promptText: 'Moja przestrzeń wyboru:',
        placeholder: 'Żaden bodziec ani emocja nie ma władzy wymusić na mnie automatycznej reakcji. Zawsze mam przestrzeń na pauzę i wybór.'
      },
      {
        stepNumber: 2,
        title: 'Moja postawa wobec własnego umysłu',
        instruction: 'Napisz jak będziesz traktować swoje myśli, błędy i sukcesy.',
        promptText: 'Postawa wobec umysłu:',
        placeholder: 'Traktuję moje myśli jako hipotezy, moje błędy jako darmowe lekcje, a moje sukcesy jako owoc mojej pracy.'
      },
      {
        stepNumber: 3,
        title: 'Ostateczny manifest dojrzałości',
        instruction: 'Napisz 2-zdaniowy manifest nawigatora własnego umysłu.',
        promptText: 'Mój manifest dojrzałości:',
        placeholder: 'Jestem gospodarzem mojego umysłu i autorem mojej opowieści. Żyję w zgodzie z moimi wartościami, stale ucząc się i rozwijając w świecie.'
      }
    ],
    reflectionQuestions: [
      'Gdzie umieścisz ten manifest, by towarzyszył Ci każdego dnia?',
      'O ile bardziej spójnym i silnym człowiekiem czujesz się po przejściu tej drogi?'
    ]
  }
];

export const chapterTwentyOne: Chapter = {
  number: 21,
  volume: 3,
  volumeChapterNumber: 5,
  title: 'Świadomość siebie i metapoznanie',
  subtitle: 'Metacognition, nadzór wykonawczy, granice introspekcji, kalibracja pewności siebie i integracja bloku I Tomu III',
  leadParagraph: 'Osiągnęliśmy punkt zwrotny naszej podróży przez architekturę ludzkiego umysłu. Poznaliśmy mechanizmy tworzenia tożsamości, powstawania przekonań, kształtowania samooceny oraz wyznaczania wartości. Jednak wiedza ta pozostałaby jedynie martwym zbiorem teorii, gdyby umysł nie posiadał zdolności najwyższego rzędu — zdolności do spojrzenia na samego siebie z dystansu. Metapoznanie (Metacognition) to umiejętność myślenia o własnym myśleniu, monitorowania własnych emocji i korygowania własnych decyzji w czasie rzeczywistym. To ten nadzorczy reflektor świadomości zamienia nas z bezwolnych odtwórców automatycznych skryptów w prawdziwych gospodarzy własnego życia.',
  totalEstimatedPages: 66,
  sections: [
    {
      id: 'sec-21-1',
      pageNumber: 1,
      sectionNumber: '21.1',
      title: 'Świadomość Siebie (Self-Awareness) i Architektura Metapoznania',
      category: 'teoria',
      readingTimeMinutes: 15,
      quote: {
        text: 'Dopóki nie uczynisz nieświadomego świadomym, będzie ono kierować Twoim życiem, a Ty będziesz nazywał to przeznaczeniem.',
        author: 'Carl Gustav Jung'
      },
      paragraphs: [
        'Świadomość siebie (Self-Awareness) nie jest stanem zero-jedynkowym, lecz wielopoziomową zdolnością do monitorowania własnych procesów wewnętrznych.',
        'Metapoznanie (Metacognition) jest pojęciem ukutym przez Johna Flavella w 1976 roku i oznacza wyższą funkcję wykonawczą umysłu: wiedzę o własnych procesach poznawczych oraz zdolność do ich aktywnej regulacji.',
        'System metapoznawczy składa się z dwóch powiązanych ze sobą pętli: 1. Monitorowania metapoznawczego (obserwacja: „Czy rozumiem ten tekst?”, „Czy czuję złość?”); 2. Kontroli metapoznawczej (decyzja: „Muszę przeczytać ten akapit wolniej”, „Muszę wziąć oddech przed odpowiedzią”).'
      ]
    },
    {
      id: 'sec-21-2',
      pageNumber: 4,
      sectionNumber: '21.2',
      title: 'Metapoznanie — Myślenie o Własnym Myśleniu i Obserwator Nadzorczy',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Metapoznanie odnosi się do wiedzy jednostki dotyczącej jej własnych procesów poznawczych oraz do aktywnego monitorowania i orkiestracji tych procesów w relacji do celów poznawczych.',
        author: 'John H. Flavell (Metacognition and Cognitive Monitoring, 1979)'
      },
      paragraphs: [
        'John H. Flavell z Uniwersytetu Stanforda, uznawany za ojca badań nad metapoznaniem, sformułował fundamentalną teorię wyjaśniającą, czym różni się zwykłe myślenie od myślenia o myśleniu.',
        'W modelu Flavella metapoznanie składa się z dwóch powiązanych ze sobą wymiarów:',
        '1. WIEDZA METAPOZNAWCZA (Metacognitive Knowledge): Zgromadzona w pamięci długotrwałej wiedza na temat trzech składowych: OSOBY („Wiem, że w stresie mam tendencję do zapominania dat”), ZADANIA („Wiem, że ten raport wymaga głębszej analizy statystycznej niż zwykła notatka”) oraz STRATEGII („Wiem, że rozrysowanie schematu blokowego pomoże mi zrozumieć ten problem”).\n2. DOŚWIADCZENIA I REGULACJA METAPOZNAWCZA (Metacognitive Experiences & Regulation): Świadome odczucia i decyzje pojawiające się w czasie rzeczywistym podczas wykonywania zadania (poczucie nagłego braku zrozumienia, impuls do zwolnienia tempa czytania, decyzja o sprawdzeniu poprawności wyliczeń).',
        'Wykształcenie w sobie Obserwatora Nadzorczego pozwala na przejście od stanu fuzji poznawczej („Moja myśl TO JA”) do stanu dystansu metapoznawczego („Mój mózg właśnie wygenerował myśl o porażce — traktuję ją jako zjawisko meteorologiczne w świadomości, a nie jako nakaz działania”).'
      ],
      subsections: [
        {
          title: 'Szczegółowa analiza słów Johna Flavella: Trójkąt poznawczy w praktyce',
          paragraphs: [
            'Flavell wykazał, że mistrzowie w dowolnej dziedzinie — od arcymistrzów szachowych, przez neurochirurgów, po wytrawnych negocjatorów — nie różnią się od nowicjuszy samą pojemnością pamięci roboczej. Różnią się precyzją pętli metapoznawczej.',
            'Nowicjusz brnie w ślepą uliczkę, nie zauważając, że jego strategia nie działa. Ekspert w ułamku sekundy rejestruje sygnał błędu, zatrzymuje proces, zadaje sobie pytanie: «Dlaczego ta metoda zawodzi?» i płynnie przełącza się na strategię alternatywną.'
          ],
          highlightBox: {
            title: 'Wgląd Psychologiczny: Przełącznik Flavella',
            content: '„Nie jesteś swoimi myślami — jesteś przestrzenią, w której te myśli się pojawiają. Kiedy potrafisz zaobserwować własny lęk, ten lęk przestaje być Twoim panem, a staje się obiektem Twojej obserwacji”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-21-2-mikroskop-flavell',
        type: 'microscope',
        title: 'Człowiek pod mikroskopem: Karolina — 19 kroków przejścia z automatycznej paniki do kontroli metapoznawczej',
        subtitle: 'Wiwisekcja opanowania ataku paniki scenicznej przed wejściem do studia telewizyjnego',
        context: 'Karolina (29 lat, prawniczka) czeka za kulisami na wejście na żywo do debaty w ogólnokrajowej telewizji.',
        microscopeSteps: [
          { stepNumber: 1, label: 'SYTUACJA', question: 'Co zaszło w otoczeniu?', content: 'Inspicjent mówi do mikrofonu: „Wchodzimy na żywo za 60 sekund, Karolina na stanowisko 2”.', subtext: 'Obiektywny bodziec czasowy o wysokiej stawce społecznej.' },
          { stepNumber: 2, label: 'INFORMACJE ZNANE', question: 'Co Karolina wie merytorycznie?', content: 'Zna na pamięć treść nowelizacji ustawy, przygotowała 3 zwięzłe tezy i posiada twarde dane statystyczne.', subtext: 'Wysoka wiedza merytoryczna.' },
          { stepNumber: 3, label: 'BRAK INFORMACJI', question: 'Czego nie wie o debacie?', content: 'Nie wie, które pytanie jako pierwsze zada prowadzący ani czy oponent nie zastosuje agresywnego chwytu erystycznego.', subtext: 'Naturalna niepewność dynamicznej sytuacji społecznej.' },
          { stepNumber: 4, label: 'UWAGA', question: 'Gdzie ucieka uwaga?', content: 'Gwałtownie odrywa się od merytoryki i wbija w somatykę: pulsujące skronie i ścisk w gardle.', subtext: 'Zawężenie pola uwagi przez układ limbiczny.' },
          { stepNumber: 5, label: 'PERCEPCJA', question: 'Co rejestrują zmysły?', content: 'Oślepiające światło reflektorów studyjnych i czerwone światełko kamery głównej.', subtext: 'Bodźce potęgujące pobudzenie autonomiczne.' },
          { stepNumber: 6, label: 'INTERPRETACJA AUTOMATYCZNA', question: 'Jaka myśl automatyczna pojawia się w Systemie 1?', content: '„Zaraz zemdleję. Zapomnę języka w gębie, zbłaźnię się przed milionem ludzi i zniszczę kancelarię”.', subtext: 'Katastrofizacja Systemu 1.' },
          { stepNumber: 7, label: 'EMOCJE', question: 'Co czuje w ciele?', content: 'Eksplozję panicznego lęku, zimny pot na karku i uczucie zapadania się w klatce piersiowej.', subtext: 'Wyrzut adrenaliny i noradrenaliny.' },
          { stepNumber: 8, label: 'POBUDZENIE', question: 'Stan fizjologiczny?', content: 'Tętno 155 bpm, płytki oddech szczytowy, skurcz naczyń obwodowych.', subtext: 'Ostry stan przedomdleniowy z hiperwentylacji.' },
          { stepNumber: 9, label: 'POTRZEBA', question: 'Czego potrzebuje?', content: 'Błyskawicznego przywrócenia homeostazy fizjologicznej i odzyskania jasności kory przedczołowej.', subtext: 'Biologiczna potrzeba samoregulacji.' },
          { stepNumber: 10, label: 'AKTYWACJA METAPOZNANIA (FLAVELL)', question: 'Jaki proces uruchamia Reżyser?', content: 'Karolina mówi w myślach: „STOP. Rejestruję, że mój umysł właśnie wszedł w katastrofizację. To tylko biochemia adrenaliny, a nie fakt biologiczny”.', subtext: 'Defuzja metapoznawcza — przejście do Obserwatora.' },
          { stepNumber: 11, label: 'OBAWY POD LUPĄ', question: 'Jak metapoznanie traktuje obawę?', content: '„Czy kiedykolwiek zemdlałam na sali sądowej? Nigdy. To tylko fałszywy alarm ciała migdałowatego”.', subtext: 'Metapoznawcza weryfikacja dowodów.' },
          { stepNumber: 12, label: 'CEL WYKONAWCZY', question: 'Jaki mikronawyk wybiera?', content: 'Zastosować oddech pudełkowy (4 sekundy wdech, 4 zatrzymanie, 4 wydech, 4 zatrzymanie) i oprzeć stopy twardo o podłogę.', subtext: 'Przejęcie kontroli przez układ przywspółczulny.' },
          { stepNumber: 13, label: 'ALTERNATYWY', question: 'Co by się stało bez metapoznania?', content: 'Uciekłaby ze studia lub zaczęła dławić się własnym głosem przy pierwszym pytaniu.', subtext: 'Katastrofa wizerunkowa w trybie automatycznym.' },
          { stepNumber: 14, label: 'DECYZJA', question: 'Dlaczego procedura działa?', content: 'Bo aktywacja dlPFC poprzez liczenie oddechów fizycznie hamuje wyładowania w ciele migdałowatym.', subtext: 'Neurobiologiczny mechanizm hamowania zstępującego.' },
          { stepNumber: 15, label: 'ZACHOWANIE', question: 'Co robi, gdy kamera rusza?', content: 'Patrzy prosto w obiektyw, bierze spokojny wdech i odpowiada na pytanie wyważonym, głębokim głosem, punktując pierwszą tezę.', subtext: 'Wzorowa ekspozycja merytoryczna.' },
          { stepNumber: 16, label: 'REAKCJA INNYCH', question: 'Jak reaguje studio?', content: 'Prowadzący kiwa głową z uznaniem, a oponent jest zaskoczony jej spokojem i traci rezon.', subtext: 'Dominacja spokoju w przestrzeni medialnej.' },
          { stepNumber: 17, label: 'KONSEKWENCJE', question: 'Bilans wystąpienia?', content: 'Świetny odbiór debaty, dziesiątki gratulacji od partnerów i propozycja stałej rubryki eksperckiej.', subtext: 'Ogromny sukces zawodowy wywalczony w 30 sekundach metapoznania.' },
          { stepNumber: 18, label: 'AKTUALIZACJA PRZEKONAŃ', question: 'Czego uczy się mózg Karoliny?', content: '„Panika w ciele nie oznacza katastrofy. Posiadam narzędzia metapoznawcze, by zresetować układ nerwowy w każdych warunkach”.', subtext: 'Potężny wzrost Self-Efficacy.' },
          { stepNumber: 19, label: 'KOLEJNA RUNDA', question: 'Jak zachowa się przed kolejnym wywiadem?', content: 'Podejdzie do reflektorów z ciekawością i spokojnym oddechem, traktując pobudzenie jako paliwo.', subtext: 'Trwałe ukształtowanie nawyku metapoznawczego.' }
        ],
        takeaway: 'Największą potęgą człowieka nie jest brak lęku, lecz zdolność do stania się świadomym obserwatorem własnego lęku i pokierowania swoim zachowaniem wbrew panice ciała migdałowatego.'
      }
    },
    {
      id: 'sec-21-3',
      pageNumber: 7,
      sectionNumber: '21.3',
      title: 'Monitorowanie Procesów Poznawczych, Emocjonalnych i Decyzyjnych',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Monitorowanie metapoznawcze wymaga ciągłego zadawania sobie pytań sprawdzających stan własnego aparatu poznawczego.',
        '„Na ile jestem zmęczony i jak to wpływa na moją cierpliwość?”, „Czy ta decyzja opiera się na twardych danych, czy na moim lęku przed porażką?”, „Czy ta ocena rozmówcy nie jest napędzana moim Błędem Potwierdzenia?”.',
        'Ciągła diagnostyka własnego stanu zapobiega wpadaniu w pułapki zmęczeniowe i decyzje podejmowane pod wpływem afektu.'
      ]
    },
    {
      id: 'sec-21-4',
      pageNumber: 10,
      sectionNumber: '21.4',
      title: 'Introspekcja i Jej Granice — Badania Nisbetta i Wilsona nad Iluzją Wglądu',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Ludzie nie mają bezpośredniego dostępu do wyższych procesów poznawczych. Kiedy pytamy ich, dlaczego podjęli daną decyzję, nie zdają relacji z faktów — snują kulturowo akceptowalne teorie na temat tego, co mogło nimi kierować.',
        author: 'Richard E. Nisbett & Timothy D. Wilson (Telling More Than We Can Know, 1977)'
      },
      paragraphs: [
        'W 1977 roku Richard Nisbett i Timothy DeCamp Wilson opublikowali w Psychological Review artykuł, który wywołał prawdziwe trzęsienie ziemi w psychologii: „Telling More Than We Can Know: Verbal Reports on Mental Processes”.',
        'Przez stulecia filozofia i psychologia zakładały, że człowiek poprzez introspekcję (wewnętrzne wejrzenie) potrafi bezbłędnie podać motywy swoich wyborów. Nisbett i Wilson obalili ten dogmat w serii genialnych eksperymentów.',
        'W jednym z nich badacze rozłożyli na stole w domu towarowym cztery identyczne pary nylonowych rajstop (oznaczone literami A, B, C, D) i poprosili klientki o wskazanie pary najwyższej jakości. Klientki zdecydowanie wybierały parę D (skrajnie po prawej stronie) — aż czterokrotnie częściej niż parę A (tzw. Right-Side Position Effect — podświadoma tendencja oka do faworyzowania obiektów po prawej stronie).',
        'Gdy badacze zapytali kobiety: «Dlaczego wybrała Pani właśnie tę parę?», żadna z nich nie wspomniała o pozycji na stole. Zamiast tego z pełnym przekonaniem podawały wyrafinowane uzasadnienia: „Ta para ma znacznie lepszy splot”, „Ten materiał jest bardziej elastyczny”, „Odcień jest szlachetniejszy”. Nawet gdy eksperymentator wprost zapytał, czy pozycja po prawej stronie mogła mieć wpływ, klientki uznały to pytanie za absurdalną obrazę ich inteligencji!',
        'Najważniejszy wniosek brzmi: Kiedy pytasz samego siebie: «Dlaczego tak postąpiłem?», Twój mózg nie czyta zapisu z czarnej skrzynki. Twój lewopółkulowy moduł narracyjny (The Interpreter, Michael Gazzaniga) natychmiast generuje wiarygodną bajkę, która ma logicznie uzasadnić zachowanie sterowane nieuświadomionymi automatyzmami.'
      ],
      subsections: [
        {
          title: 'Analiza słów Nisbetta i Wilsona: Dlaczego pytania „Dlaczego?” bywają toksyczne?',
          paragraphs: [
            'Wilson w swoich późniejszych badaniach (Strangers to Ourselves, 2002) wykazał, że zmuszanie ludzi do drobiazgowej introspekcji („Dlaczego kochasz swojego partnera?”, „Dlaczego wybrałeś ten obraz?”) często POGARSZA jakość decyzji! Umysł zaczyna faworyzować te powody, które łatwo ubrać w słowa, ignorując głębokie, holistyczne intuicje zmysłowe.',
            'Dojrzałe metapoznanie nie polega na nieustannym dociekaniu „Dlaczego?”. Polega na rejestrowaniu: „CO dokładnie robię, JAKIE są tego konsekwencje i JAK mogę zmienić ten proces w działaniu”.'
          ],
          highlightBox: {
            title: 'Wgląd Psychologiczny: Iluzja introspekcyjna',
            content: 'Nigdy nie wierz bezkrytycznie we własne uzasadnienia post-hoc. Twój umysł jest genialnym prawnikiem, który potrafi znaleźć logiczne wytłumaczenie dla każdego głupstwa, jakiego dopuścił się Twój układ limbiczny.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-21-4-kontrprzypadek-nisbett',
        type: 'counter_case',
        title: 'Kontrprzypadek: Gdy prezes był pewien, że podjął genialną decyzję analityczną',
        subtitle: 'Dekonstrukcja iluzji wglądu podczas rekrutacji dyrektora marketingu',
        context: 'Decyzja rekrutacyjna w dużej spółce e-commerce.',
        counterCase: {
          standardTheory: 'Prezes zarządu jest przekonany: „Wybieram ludzi wyłącznie na podstawie obiektywnej analizy ich wskaźników ROI, wiedzy merytorycznej i wyników testów kompetencyjnych”.',
          counterExample: 'Spośród dwóch finalistów prezes wybrał kandydata B, odrzucając kandydatkę A o 30% lepszych referencjach. Zapytany przez HR o powód, prezes przygotował 3-stronicową notatkę analityczną wykazującą rzekome „ryzyka w podejściu kandydatki A do budżetowania”. W rzeczywistości audyt psychologiczny wykazał, że kandydat B kibicował temu samemu klubowi piłkarskiemu i miał taki sam zegarek jak ojciec prezesa. To uderzenie w neurony lustrzane wywołało u prezesa natychmiastowe poczucie sympatii i zaufania, a cała 3-stronicowa notatka była czystą konfabulacją post-hoc wygenerowaną przez lewą półkulę.',
          whyItDefiesRule: 'Prezes nie kłamał świadomie — on naprawdę wierzył we własną notatkę. Padł ofiarą Iluzji Wglądu Nisbetta i Wilsona.',
          deeperLesson: 'Jeśli nie wprowadzisz ślepych procedur decyzyjnych (anonimizacja CV, ustrukturyzowane pytania punktowane przez niezależną komisję), Twoje decyzje będą sterowane prymitywnymi skojarzeniami podkorowymi ubranymi w garnitur racjonalizacji.'
        },
        takeaway: 'Introspekcja nie jest oknem na prawdę o motywach — jest generatorem spójnej opowieści. Chcesz poznać prawdę? Zbadaj procedurę i mierzalne dane, a nie własne deklaracje.'
      },
      caseStudyRef: caseStudiesChapterTwentyOne[0]
    },
    {
      id: 'sec-21-5',
      pageNumber: 13,
      sectionNumber: '21.5',
      title: 'Obserwacja Fenomenologiczna vs Interpretacja i Drabina Wnioskowania Argyrisa',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Wspinamy się po drabinie wnioskowania z zawrotną prędkością, tak że mylimy nasze subiektywne interpretacje i założenia z surowymi danymi rzeczywistości, stając się więźniami własnych mentalnych modeli.',
        author: 'Chris Argyris (Overcoming Organizational Defenses, 1990)'
      },
      paragraphs: [
        'Prof. Chris Argyris z Harvard Business School stworzył jedno z najpotężniejszych narzędzi metapoznawczych we współczesnej nauce — Drabinę Wnioskowania (The Ladder of Inference).',
        'Model Argyrisa opisuje mikrosekundowy proces, w którym człowiek przeskakuje od rzeczywistości fizycznej do wojen personalnych:',
        'SZCZEBEL 1 (Rzeczywistość obiektywna): Surowe dane i fakty, które zarejestrowałaby kamera (np. Jan spóźnił się 15 minut na spotkanie i milczał przez pierwsze pół godziny).\nSZCZEBEL 2 (Selekcja danych): Twój aparat uwagowy wyłapuje tylko niektóre fakty na bazie wcześniejszych schematów (zauważasz jego milczenie, ignorujesz, że przyniósł wydrukowane materiały dla wszystkich).\nSZCZEBEL 3 (Nadanie znaczenia): Tłumaczysz dane surowe w języku kulturowym („Jan jest zdemotywowany i lekceważy ten projekt”).\nSZCZEBEL 4 (Założenia): Dorabiasz ukryte założenia („Zawsze, gdy ktoś milczy, oznacza to, że spiskuje przeciwko mnie”).\nSZCZEBEL 5 (Wnioski): Wyciągasz ostateczny wyrok („Jan jest nielojalny i nie można na nim polegać”).\nSZCZEBEL 6 (Przekonania o świecie): Wzmacniasz schemat rdzenny („Współpracownicy to wrogowie”).\nSZCZEBEL 7 (Działanie): Wchodzisz na spotkanie z agresją, odbierasz Janowi projekt i niszczysz relację.',
        'Dramat polega na tym, że wspinaczka po drabinie trwa 300 milisekund! Człowiek ląduje na szczeblu 7, będąc święcie przekonanym, że jego agresywne zachowanie wynika bezpośrednio z obiektywnej rzeczywistości (szczebel 1).'
      ],
      subsections: [
        {
          title: 'Analiza słów Chrisa Argyrisa: Protokół schodzenia po drabinie',
          paragraphs: [
            'Mistrzostwo metapoznawcze polega na umiejętności „zejścia po drabinie w dół” w trakcie trudnej rozmowy. Gdy czujesz narastającą wściekłość, zadajesz sobie i rozmówcy pytanie operacyjne:',
            '«Jakie surowe dane ze szczebla 1 obaj zaobserwowaliśmy? Czy to, co uważam za fakt, nie jest zaledwie moim założeniem ze szczebla 4?». Otwarta weryfikacja danych zdejmuje ładunek afektywny i przywraca dialog merytoryczny.'
          ],
          highlightBox: {
            title: 'Wgląd Argyrisa: Uważność według Ellen Langer',
            content: 'Ellen Langer z Harvardu definiuje uważność (mindfulness) nie jako siedzenie na poduszce medytacyjnej, lecz jako ciągłą czujność wobec kontekstu — gotowość do zadania sobie pytania: „Czy to, co biorę za pewnik, nie jest tylko jednym z wielu możliwych sposobów ułożenia faktów?”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-21-5-drabina-argyrisa',
        type: 'what_we_know',
        title: 'Co naprawdę wiemy? — Demontaż Drabiny Wnioskowania w Zespole',
        subtitle: 'Rozdzielenie faktów kamerowych od założeń i wyroków personalnych',
        context: 'Konflikt między szefową marketingu a dyrektorem IT o opóźnienie wdrożenia strony.',
        whatWeKnow: {
          items: [
            {
              id: 'c21-arg-1',
              statement: 'Fakt ze szczebla 1 to wyłącznie zdarzenie, które mogłaby zarejestrować kamera wideo (np. brak maila z kodem do godziny 17:00).',
              category: 'fakt',
              explanation: 'Podstawa rygoru poznawczego Argyrisa: oddzielenie danych od interpretacji.'
            },
            {
              id: 'c21-arg-2',
              statement: 'Zdanie „Dyrektor IT celowo torpeduje mój projekt, bo czuje się zagrożony moją pozycją” jest obiektywnym faktem psychologicznym.',
              category: 'interpretacja',
              explanation: 'To klasyczny skok na szczebel 5 (Wnioski i atrybucje intencji) bez zweryfikowania założeń.'
            },
            {
              id: 'c21-arg-3',
              statement: 'Mózg ludzki ma wbudowaną tendencję do traktowania własnych założeń jako prawd absolutnych, pomijając etapy pośrednie wnioskowania.',
              category: 'fakt',
              explanation: 'Ewolucyjny mechanizm kompresji czasu decyzyjnego kosztem dokładności epistemicznej.'
            },
            {
              id: 'c21-arg-4',
              statement: 'Zejście po drabinie w dół i zadanie pytania: „Jakie fakty skłoniły cię do takiego wniosku?” pozwala rozładować 80% konfliktów korporacyjnych.',
              category: 'fakt',
              explanation: 'Empirycznie potwierdzona metoda facylitacji dialogu organizacyjnego wg Argyrisa i Schöna.'
            }
          ]
        },
        takeaway: 'Zanim rzucisz w kogoś oskarżeniem ze szczebla 7, zejdź na szczebel 1 i sprawdź, co naprawdę zarejestrowała kamera.'
      }
    },
    {
      id: 'sec-21-6',
      pageNumber: 16,
      sectionNumber: '21.6',
      title: 'Automatyzmy Behawioralne vs Świadoma Kontrola Wykonawcza',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Około 80% naszych codziennych zachowań przebiega w trybie automatycznym, sterowanym przez jądrą podstawy i układ limficzny (System 1 Daniel Kahneman).',
        'Świadoma kontrola wykonawcza (System 2) wywoływana przez grzbietowo-boczna korę przedczołową (dlPFC) jest zasobem skrajnie kosztownym metabolicznie.',
        'Metapoznanie działa jak inteligentny przełącznik: wykrywa sygnały błędu (ACC) i wyłącza automatycznego pilota dokładnie wtedy, gdy sytuacja wymaga nienawykowej, przemyślanej decyzji.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[2]
    },
    {
      id: 'sec-21-7',
      pageNumber: 19,
      sectionNumber: '21.7',
      title: '„Skąd Wiem, Że Wiem?” — Monitorowanie Wiedzy i Pewności w Pamięci',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Umysł posiada doznania metapoznawcze zwane „poczuciem wiedzy” (Feeling of Knowing - FOK) oraz „pamięcią na końcu języka” (Tip-of-the-Tongue State).',
        'Te subiektywne stany pozwalają nam ocenić, czy posiadamy dane zasoby w pamięci, zanim jeszcze dokładnie je wydobędziemy.',
        'Trening kalibracji FOK jest kluczowy dla efektywnego uczenia się i zapobiega iluzji opanowania materiału po samym pobieżnym przeczytaniu tekstu.'
      ]
    },
    {
      id: 'sec-21-8',
      pageNumber: 22,
      sectionNumber: '21.8',
      title: 'Pewność Siebie vs Trafność Sądu — Kalibracja Metapoznawcza',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Nasza pocieszająca wiara w to, że świat ma sens, spoczywa na bezpiecznym fundamencie: naszej niemal nieograniczonej zdolności do ignorowania własnej ignorancji.',
        author: 'Daniel Kahneman (Thinking, Fast and Slow, 2011)'
      },
      paragraphs: [
        'Daniel Kahneman i Amos Tversky w swoich fundamentalnych pracach nad heurystykami i błędami poznawczymi wykazali, że subiektywna pewność siebie (Subjective Confidence) NIE JEST miarą prawdy obiektywnej. Jest miarą SPÓJNOŚCI OPOWIEŚCI, jaką umysł zdołał skonstruować na bazie posiadanych danych (zasada WYSIATI: What You See Is All There Is).',
        'Kalibracja metapoznawcza (Metacognitive Calibration) to matematyczny wskaźnik spójności między subiektywnym prawdopodobieństwem przypisywanym swojemu sądowi a rzeczywistą trafnością tego sądu w świecie fizycznym.',
        'Badania nad ekspertami wykazują powszechną i groźną patologię zwaną Efektem Nadmiernej Pewności Siebie (Overconfidence Effect):',
        'Gdy lekarze, maklerzy giełdowi czy analitycy polityczni twierdzą, że są „w 100% pewni” swojej diagnozy lub prognozy, mylą się w rzeczywistości w 15–30% przypadków! W medycynie i lotnictwie taka nieskalibrowana pewność siebie bywa bezpośrednią przyczyną zgonów pacjentów i katastrof samolotów.',
        'Człowiek doskonale skalibrowany metapoznawczo to taki, u którego spośród wszystkich twierdzeń wygłoszonych z pewnością 70% dokładnie 70% okazuje się prawdziwych, a gdy jego wiedza jest znikoma, bez wahania deklaruje pewność na poziomie 10% lub przyznaje: „Nie wiem”.'
      ],
      subsections: [
        {
          title: 'Szczegółowa analiza słów Daniela Kahnemana: Trening kalibracji probabilistycznej',
          paragraphs: [
            'Kahneman zalecał stosowanie procedur kalibracyjnych używanych przez analityków wywiadu (np. metoda Philipa Tetlocka w turniejach Superforecasting). Zamiast mówić: „Uważam, że ten projekt odniesie sukces”, analityk musi podać liczbę: „Oceniam prawdopodobieństwo dowiezienia projektu w terminie na 65%”.',
            'Prowadzenie pisemnego rejestru własnych prognoz z podaniem procentu pewności i późniejsze bezwzględne porównanie ich z rzeczywistością po 6 miesiącach jest jedynym znanym nauce sposobem na uleczenie mózgu z pychy poznawczej i wyrobienie mistrzowskiej precyzji sądu.'
          ],
          highlightBox: {
            title: 'Wgląd Kahnemana: Prawdziwy koszt fałszywej pewności',
            content: '„Najgorsze decyzje w historii ludzkości nie zostały podjęte przez ludzi, którzy się wahali. Zostały podjęte przez charyzmatycznych przywódców, którzy byli w 100% pewni swoich racji i nie dopuszczali do siebie myśli o własnej ślepocie”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-21-8-kalibracja-spór',
        type: 'dual_perspectives',
        title: 'Dwie Perspektywy: Spór o Prognozę Kryzysu Walutowego',
        subtitle: 'Konfrontacja aroganckiej pewności siebie z rygorem kalibracji probabilistycznej',
        context: 'Komitet inwestycyjny funduszu hedgingowego decyduje o zabezpieczeniu pozycji walutowych przed decyzją banku centralnego.',
        dualPerspective: {
          situation: 'Wtorek rano. Główny ekonomista funduszu i młoda analityczka danych prezentują sprzeczne rekomendacje dotyczące kursu walutowego.',
          personA: {
            name: 'Artur (Główny Ekonomista — Nieskalibrowana Pewność Siebie)',
            quote: '„Jestem w 100% pewien, że bank centralny obniży stopy procentowe o 50 punktów bazowych. Znam prezesa banku od 20 lat, rynki nie mają wątpliwości. Nie wydawajmy miliona na opcje zabezpieczające!”.',
            whatTheyKnow: 'Zna oficjalne komunikaty i opinie publicystów finansowych z wiodących gazet.',
            whatTheyMiss: 'Ignoruje niejawne dane o skoku inflacji bazowej w sektorze usług z ostatniego piątku.',
            interpretation: '„Moja reputacja i doświadczenie gwarantują nieomylność. Każdy, kto wątpi, jest tchórzem”.',
            coreNeed: 'Utrzymanie statusu wyroczni i dominacji w komitecie inwestycyjnym.',
            fear: 'Przyznanie się do niepewności i utrata aury geniusza rynkowego.',
            action: 'Forsowanie otwarcia lewarowanej pozycji bez ubezpieczenia.'
          },
          personB: {
            name: 'Monika (Analityczka Danych — Skalibrowana Pokora Bayesowska)',
            quote: '„Na bazie modelu bayesowskiego szacuję prawdopodobieństwo obniżki stóp na 62%, a prawdopodobieństwo braku zmian na 38%. Koszt opcji to 2% kapitału, a brak zabezpieczenia w przypadku braku zmian oznacza stratę 40 milionów”.',
            whatTheyKnow: 'Zna rozkład prawdopodobieństw i historyczną asymetrię wypłat w scenariuszach skrajnych.',
            whatTheyMiss: 'Czuje presję hierarchiczną i boi się otwartego ataku ze strony wpływowego ekonomisty.',
            interpretation: '„Rynek jest złożonym systemem nieliniowym — 38% ryzyka to gigantyczna ekspozycja, której nie wolno ignorować”.',
            coreNeed: 'Ochrona kapitału funduszu i rzetelność naukowa procesu decyzyjnego.',
            fear: 'Wyrzucenie z pracy za podważanie autorytetu przełożonego.',
            action: 'Przedstawienie wykresu symulacji Monte Carlo i żądanie zakupu opcji ochronnych.'
          },
          synthesis: 'Bank centralny zaskoczył rynek i pozostawił stopy bez zmian. Fundusze bez zabezpieczeń straciły fortuny. Dzięki uporowi Moniki fundusz zrealizował zysk z opcji, ocalając kapitał inwestorów. Artur padł ofiarą Certainty-Accuracy Fallacy, podczas gdy kalibracja Moniki okazała się tarczą chroniącą przed bankructwem.'
        },
        takeaway: 'Prawdziwy profesjonalizm nie polega na wykrzykiwaniu stuprocentowej pewności. Polega na precyzyjnym skalkulowaniu niepewności i zabezpieczeniu systemu przed skutkami własnej pomyłki.'
      },
      caseStudyRef: caseStudiesChapterTwentyOne[3]
    },
    {
      id: 'sec-21-9',
      pageNumber: 25,
      sectionNumber: '21.9',
      title: 'Wykrywanie Własnych Błędów Poznawczych w Czasie Rzeczywistym — Teoria Kegana',
      category: 'teoria',
      readingTimeMinutes: 20,
      quote: {
        text: 'Jesteśmy więźniami tego, z czym jesteśmy utożsamieni jako Podmiot. Dopiero to, na co potrafimy spojrzeć z dystansu jako na Przedmiot, możemy świadomie badać, kontrolować i przekraczać.',
        author: 'Robert Kegan (The Evolving Self, 1982)'
      },
      paragraphs: [
        'Prof. Robert Kegan z Harvard University w swojej Teorii Rozwoju Konstruktywistyczno-Rozwojowego (Subject-Object Theory) dokonał jednego z najgłębszych wglądów w ewolucję ludzkiej świadomości.',
        'Kegan zdefiniował dwa stany relacji człowieka z własnymi procesami psychicznymi:',
        '1. PODMIOT (Subject): To elementy naszej psychiki, z którymi jesteśmy bez reszty zrośnięci i utożsamieni. Nie możemy ich zobaczyć, ponieważ patrzymy PRZEZ NIE na świat. Jeśli jesteś podmiotem swojego lęku, gniewu lub schematu tożsamościowego, nie mówisz: „czuję złość” — TY JESTEŚ ZŁOŚCIĄ. Twoje reakcje są automatyczne i bezrefleksyjne.\n2. PRZEDMIOT (Object): To elementy naszej psychiki, od których zdołaliśmy się odkleić (dystans poznawczy / defuzja). Możemy na nie spojrzeć z zewnątrz, zbadać ich strukturę, poddać krytycznej ocenie i zdecydować, czy chcemy za nimi podążać.',
        'Cały rozwój dojrzałości człowieka według Kegana polega na nieustannym przesuwaniu kolejnych warstw psychiki ze stanu Podmiotu do stanu Przedmiotu. Kiedy Twoje przekonania, Twoja samoocena i Twoje błędy poznawcze przestają być Tobą (Podmiotem), a stają się obserwowalnymi procesami w Twoim laboratorium umysłu (Przedmiotem) — osiągasz najwyższy stopień wolności wewnętrznej (Self-Transforming Mind).'
      ],
      subsections: [
        {
          title: 'Szczegółowa analiza teorii Kegana: Jak uwolnić się od fuzji poznawczej?',
          paragraphs: [
            'Gdy człowiek mówi: „Ja po prostu taki jestem — jestem wybuchowy i nie znoszę sprzeciwu”, tkwi w niewoli Podmiotu. Utożsamił swój biologiczny odruch ze swoją tożsamością.',
            'Trening przesunięcia Subject-Object polega na zmianie gramatyki wewnętrznej: zamiast „Jestem załamany”, mówisz: „Zauważam w moim ciele doznanie załamania”. W ten sposób tworzy się podmiot obserwujący (Świadek), który posiada pełną suwerenność wyboru reakcji behawioralnej.'
          ],
          highlightBox: {
            title: 'Wgląd Roberta Kegana: Wolność wyboru',
            content: '„Nie możesz zmienić niczego, czym w danej chwili jesteś. Możesz zmienić wyłącznie to, co potrafisz postawić przed sobą na stole i obejrzeć ze wszystkich stron jak ciekawy kamień znaleziony na plaży”.',
            type: 'insight'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-21-9-kegan-przesuniecie',
        type: 'what_if',
        title: 'Zmień jeden element: Od fuzji z myślą katastroficzną do przesunięcia Subject-Object',
        subtitle: 'Symulacja reakcji menedżera podczas niespodziewanego audytu skarbowego',
        context: 'Piotr (42 lata, właściciel firmy produkcyjnej) otrzymuje zawiadomienie o kontroli skarbowej za ostatnie 5 lat.',
        whatIfOptions: {
          defaultScenario: 'Piotr utożsamia się z myślą: „Zniszczą mnie, pójdę z torbami, to koniec firmy”. Jest Podmiotem swojego przerażenia. Wpada w amok, nie śpi przez 3 noce, krzyczy na księgową, która w stresie składa błędne korekty deklaracji, ściągając na firmę dotkliwe kary.',
          options: [
            {
              id: 'c21-opt-k1',
              changeLabel: 'Zastosowanie przesunięcia Subject-Object Kegana: zamiana lęku w obserwowany Przedmiot',
              resultingInterpretation: 'Piotr bierze kartkę, zapisuje na niej słowa: „W moim ciele pojawił się ostry lęk przed utratą bezpieczeństwa finansowego”. Oddziela siebie od emocji i patrzy na notatkę z dystansu.',
              resultingBehavior: 'Spokojna rozmowa z doświadczonym doradcą podatkowym, rzetelne przygotowanie segregatorów z dokumentami, bezbłędne przejście kontroli z drobną dopłatą odsetkową.',
              psychologicalImpact: 'Głęboki spokój wewnętrzny i uświadomienie sobie własnej odporności psychicznej w obliczu kryzysu.'
            },
            {
              id: 'c21-opt-k2',
              changeLabel: 'Ucieczka w mechanizmy wyparcia i racjonalizacji („Nie będę otwierał tych pism, jakoś to będzie”)',
              resultingInterpretation: 'Piotr próbuje stłumić lęk alkoholem i pracoholizmem w innych obszarach.',
              resultingBehavior: 'Przekroczenie ustawowych terminów na odpowiedź, zajęcie kont bankowych przez urząd i paraliż płynności finansowej firmy.',
              psychologicalImpact: 'Prawdziwa katastrofa życiowa spowodowana brakiem kontaktu z rzeczywistością.'
            }
          ]
        },
        takeaway: 'Dopóki jesteś swoim lękiem, lęk podejmuje decyzje za Ciebie. Przekształć lęk w obserwowany obiekt, a odzyskasz władzę nad własnym losem.'
      }
    },
    {
      id: 'sec-21-10',
      pageNumber: 28,
      sectionNumber: '21.10',
      title: 'Informacja Zwrotna od Innych i Ślepe Plamki (Blind Spots) Samoświadomości',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Nawet najbardziej rozwinięte metapoznanie nie chroni nas całkowicie przed własnymi ślepymi plamkami (Blind Spots).',
        'Istnieją zachowania, ton głosu i mikro-ekspresje, które są doskonale widoczne dla otoczenia, a pozostają całkowicie ukryte przed naszym wewnętrznym wzrokiem.',
        'Tworzenie bezpiecznych relacji z mentorami i przyajciółmi, którzy mają odwagę dać nam szczery feedback, jest nieodzownym uzupełnieniem własnej samoświadomości.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[4]
    },
    {
      id: 'sec-21-11',
      pageNumber: 31,
      sectionNumber: '21.11',
      title: 'Rozbieżność Między Obrazem Siebie a Rzeczywistym Zachowaniem',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Wielu ludzi żyje w głębokim rozłamie między tym, jak wyobraża sobie siebie (np. „Jestem tolerancyjny, spokony i otwarty”), a tym, jak zachowuje się w sytuacjach stresowych (agresja, zamknięcie, krytykanctwo).',
        'Zniwelowanie tej rozbieżności wymaga odwagi do odrzucenia wyidealizowanej fasady i zaakceptowania prawdy o swoich obecnych nawykach.',
        'Dopiero akceptacja stanu faktycznego daje punkt oparcia do realnej zmiany.'
      ]
    },
    {
      id: 'sec-21-12',
      pageNumber: 34,
      sectionNumber: '21.12',
      title: 'Meta-Warstwa Tomu III — Integracja Tożsamości, Przekonań, Samooceny i Wartości',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Ten rozdział stanowi zwieńczenie i klamrę kompozycyjną pierwszego bloku Tomu III.',
        'Tożsamość (Rozdział 1) daje nam elastyczną opowieść o sobie; Przekonania (Rozdział 2) dają nam zaktualizowane modele świata; Samoocena i Self-Efficacy (Rozdział 3) dają nam wiarę w działanie i urealnione kompetencje; Wartości (Rozdział 4) dają nam nienaruszalny kompas priorytetów.',
        'A Metapoznanie (Rozdział 5) jest nawigatorem, który spaja te 4 filary w jeden, spójny, żywy i autonomiczny system samokształtowania.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[4]
    },
    {
      id: 'sec-21-13',
      pageNumber: 37,
      sectionNumber: '21.13',
      title: '💡 BŁĘDNA INTUICJA: Analizowanie siebie bez końca prowadzi do samopoznania',
      category: 'teoria',
      readingTimeMinutes: 12,
      paragraphs: [
        'Częstą pułapką u osób dbających o rozwój osobisty jest mylenie sprawczego metapoznania z jałową ruminacją (Overthinking).',
        'Godziny spędzone na analizowaniu „dlaczego tak czuję” i rozkładaniu każdego detalu na czynniki pierwsze niszczą energię i prowadzą do paraliżu analitycznego (Analysis Paralysis).',
        'Metapoznanie ma służyć Lepszemu Działaniu w świecie realnym, a nie zastępować to działanie.'
      ]
    },
    {
      id: 'sec-21-14',
      pageNumber: 40,
      sectionNumber: '21.14',
      title: '🔬 CO NADAL NIE JEST JASNE? Fizjologiczne Korelaty Metapoznania',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Jakie dokładnie obwody neuronalne odpowiadają za doznanie „wglądu metapoznawczego” (Insight) i na ile trening medytacyjny zmienia strukturę szarej masy w mPFC i ACC?',
        'Badania nad neuroobrazowaniem osób o wysokiej samoświadomości pokazują wzrost gęstości połączeń między korą przedczołową a wyspą.'
      ]
    },
    {
      id: 'sec-21-15',
      pageNumber: 42,
      sectionNumber: '21.15',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokoły Kalibracji Metapoznawczej',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        '1. Stosuj 3-sekundową pauzę poznawczą przed trudną reakcją.',
        '2. Prowadź Dziennik Prognoz z wyliczaniem procentu pewności.',
        '3. Zamieniaj pytania „DLACZEGO” na pytania „CO z tym zrobię”.',
        '4. Zbieraj regularny feedback od obiektywnych obserwatorów.'
      ],
      exerciseRef: selfExercisesChapterTwentyOne[0]
    },
    {
      id: 'sec-21-16',
      pageNumber: 44,
      sectionNumber: '21.16',
      title: 'Warsztat Samorozwojowy: Laboratorium Nawigatora Umysłu',
      category: 'cwiczenia',
      readingTimeMinutes: 12,
      paragraphs: [
        'Poniżej znajduje się zestaw ćwiczeń dedykowanych treningowi defuzji poznawczej, audytowi ślepych plamek i integracji pierwszego bloku Tomu III.'
      ],
      exerciseRef: selfExercisesChapterTwentyOne[1]
    },
    {
      id: 'sec-21-17',
      pageNumber: 47,
      sectionNumber: '21.17',
      title: 'Most do Rozdziału 22 oraz Zapowiedź Bloku II Tomu III',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'Opanowaliśmy fundamenty indywidualnej autonomii psychicznej: wiemy kim jesteśmy, jak myślimy, jak oceniamy swoje możliwości, czym się kierujemy i jak to wszystko monitorować.',
        'W kolejnym bloku Tomu III przejdziemy do badania tego, jak człowiek w praktyce kształtuje swoje środowisko, buduje odporność nawykową i realizuje długoterminowe cele w świecie zewnętrznym.'
      ]
    },
    {
      id: 'sec-21-18',
      pageNumber: 49,
      sectionNumber: '21.18',
      title: 'Podsumowanie Rozdziału 5: Kluczowe Wglądy',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        '1. Metapoznanie to zdolność myślenia o własnym myśleniu i odzyskiwania kontroli.',
        '2. Introspekcja ma swoje granice i tworzy racjonalizacje post-hoc.',
        '3. Pauza poznawcza tworzy wolność wyboru między bodźcem a reakcją.',
        '4. Metapoznanie spaja tożsamość, przekonania, samoocenę i wartości w jeden spójny system.'
      ]
    },
    {
      id: 'sec-21-19',
      pageNumber: 52,
      sectionNumber: '21.19',
      title: 'Egzamin Końcowy Rozdziału 5: Świadomość Siebie i Metapoznanie',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu metapoznania, kalibracji pewności siebie, defuzji poznawczej i integracji pierwszego bloku Tomu III. Poniższy test zawiera pytania analityczne wymagające głębokiego zrozumienia opisywanych procesów.'
      ]
    }
  ]
};
