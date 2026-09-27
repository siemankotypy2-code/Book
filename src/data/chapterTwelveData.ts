import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterTwelveExamQuestions: ExamQuestion[] = [
  { id:1, question:'Dlaczego „chcę” nie oznacza automatycznie „robię”?', topic:'Luka intencja–działanie', sectionRef:'Sekcja 12.1', options:[
    {label:'A',text:'Ponieważ intencja może współistnieć z wysokim przewidywanym kosztem, nieprzyjemnymi emocjami, rozpraszaczami i brakiem konkretnego planu.',isCorrect:true},
    {label:'B',text:'Ponieważ cele nigdy nie wpływają na zachowanie.',isCorrect:false},{label:'C',text:'Ponieważ motywacja jest stałą cechą osobowości.',isCorrect:false},{label:'D',text:'Ponieważ działanie nie ma związku z decyzjami.',isCorrect:false}], explanation:'Między intencją a zachowaniem działa wiele procesów: oczekiwany wysiłek, emocje, nagrody, środowisko, poczucie kompetencji i konkretny plan.',keyTakeaway:'Intencja jest ważna, ale sama nie jest wykonaniem.'},
  { id:2, question:'Który ciąg najlepiej opisuje przejście od celu do zachowania?', topic:'Cel i plan', sectionRef:'Sekcja 12.2', options:[
    {label:'A',text:'Cel → plan → konkretna czynność → wykonanie → informacja zwrotna → korekta',isCorrect:true},
    {label:'B',text:'Cel → sukces bez dalszych kroków',isCorrect:false},{label:'C',text:'Cel → emocja → automatyczny sukces',isCorrect:false},{label:'D',text:'Pragnienie → nagroda → brak działania',isCorrect:false}], explanation:'Cel określa rezultat, ale plan i konkretne zachowanie przekładają go na działanie możliwe do wykonania teraz.',keyTakeaway:'Dobry cel potrzebuje mostu do konkretnego zachowania.'},
  { id:3, question:'Jaką rolę może pełnić natychmiastowa nagroda w prokrastynacji?', topic:'Prokrastynacja', sectionRef:'Sekcja 12.5', options:[
    {label:'A',text:'Może dostarczać szybkiej ulgi i wzmacniać unikanie nieprzyjemnego zadania.',isCorrect:true},
    {label:'B',text:'Zawsze usuwa problem długoterminowo.',isCorrect:false},{label:'C',text:'Nie wpływa na przyszłe zachowanie.',isCorrect:false},{label:'D',text:'Jest zawsze świadomie zaplanowana.',isCorrect:false}], explanation:'Unikanie może natychmiast zmniejszyć napięcie, a to może zwiększać prawdopodobieństwo powtórzenia wzorca.',keyTakeaway:'Prokrastynacja może być krótkoterminową regulacją emocji, która ma długoterminowy koszt.'},
  { id:4, question:'Dlaczego projektowanie środowiska może wspierać samokontrolę?', topic:'Samokontrola', sectionRef:'Sekcja 12.6', options:[
    {label:'A',text:'Zmniejsza liczbę sytuacji, w których trzeba aktywnie hamować impuls.',isCorrect:true},
    {label:'B',text:'Gwarantuje całkowity brak pokus.',isCorrect:false},{label:'C',text:'Zastępuje każdą formę planowania.',isCorrect:false},{label:'D',text:'Sprawia, że człowiek nigdy nie odczuwa zmęczenia.',isCorrect:false}], explanation:'Telefon poza pokojem czy wyłączone powiadomienia zmieniają warunki działania, zamiast wymagać ciągłego „nie”.',keyTakeaway:'Nie każdą przeszkodę trzeba pokonywać siłą woli.'},
  { id:5, question:'Co może wzmacniać poczucie postępu?', topic:'Informacja zwrotna', sectionRef:'Sekcja 12.7', options:[
    {label:'A',text:'Mierzalne etapy, wykonane zadania i testy kontrolne dostarczające informacji zwrotnej.',isCorrect:true},
    {label:'B',text:'Wyłącznie odległy cel końcowy.',isCorrect:false},{label:'C',text:'Brak informacji o rezultatach.',isCorrect:false},{label:'D',text:'Codzienne ocenianie własnej wartości.',isCorrect:false}], explanation:'Widoczny postęp może informować, że działanie prowadzi w pożądanym kierunku.',keyTakeaway:'Warto monitorować nie tylko „czy osiągnąłem cel?”, ale też „czy jestem bliżej niż wcześniej?”.'}
];

export const chapterTwelveCaseStudy: CaseStudy = {
 id:'cs-ch12-michal', title:'Egzamin za miesiąc: Michał i luka między intencją a działaniem',
 subtitle:'Jak zmiana systemu działania może być ważniejsza niż czekanie na „większą motywację”',
 protagonist:'Michał, 17 lat, uczeń przygotowujący się do ważnego egzaminu',
 context:'Miesiąc przed egzaminem, po powrocie ze szkoły.',
 story:[
  'Michał wie, że wynik egzaminu jest dla niego ważny. Mówi: „Od jutra będę uczył się trzy godziny dziennie”. Intencja jest wyraźna, ale pierwszego dnia wraca zmęczony, siada na łóżku i bierze telefon „tylko na chwilę”.',
  'Po dwudziestu minutach ogląda krótkie filmy i mówi: „Jest jeszcze dużo czasu”. Zdanie zmniejsza napięcie, ale nie przybliża go do celu. Następnego dnia sytuacja się powtarza.',
  'Po tygodniu zaległość jest większa, więc rośnie stres. Większy stres zwiększa potrzebę szybkiej ulgi, a szybka ulga wzmacnia unikanie. Powstaje pętla: mniej nauki → większa zaległość → większy stres → większa potrzeba ulgi → więcej unikania.',
  'Michał zmienia system. Dzieli materiał na pięć działów, każdy dzieli na mniejsze części, ustala konkretną godzinę rozpoczęcia, zostawia telefon poza pokojem, zaczyna od 25-minutowego bloku i kończy pytaniami kontrolnymi.',
  'Po kilku dniach ma informację zwrotną: potrafi rozwiązać więcej zadań niż wcześniej. Nie pojawiła się magiczna, nieskończona motywacja. Zmieniły się warunki, konkretność działania i informacja zwrotna.'
 ],
 decisionTaken:'Michał przeszedł od ogólnej intencji do małych, zaplanowanych działań i zmienił środowisko.',
 whatProtagonistSaw:'„Brakuje mi motywacji”.',
 whatWasMissed:'Luka między celem a zachowaniem, przewidywany koszt, natychmiastowa nagroda telefonu i brak konkretnego pierwszego kroku.',
 psychologicalAnalysis:{coreMechanism:'Pętla intencja–unikanie–ulga–wzmocnienie oraz jej przerwanie przez planowanie i zmianę środowiska.',cognitiveBiases:[{name:'Dyskontowanie przyszłości',description:'Odległa korzyść z egzaminu przegrywała z natychmiastową przyjemnością telefonu.',impact:'Odkładanie działania.'},{name:'Planowanie bez wykonania',description:'Ogólny plan „trzy godziny dziennie” dawał poczucie przygotowania bez konkretnego zachowania.',impact:'Pozorna gotowość.'}],defenseMechanisms:[],emotionalDynamic:'Napięcie związane z zadaniem było chwilowo redukowane przez unikanie.'},
 decisionProcessAnalysis:{trigger:'Myśl o nauce i powrocie ze szkoły.',attentionFocus:'Zmęczenie, trudność zadania i telefon.',interpretation:'„To będzie trudne; mogę zacząć później.”',emotion:'Napięcie i niechęć.',impulse:'Sięgnąć po telefon.',action:'Odłożenie nauki.',consequence:'Natychmiastowa ulga i większa zaległość.'},
 neurobiologicalAnalysis:{brainRegions:[{region:'Sieci związane z kontrolą wykonawczą',role:'Planowanie i hamowanie konkurencyjnych reakcji.',activationState:'Wymagają aktywnego zaangażowania.'}],neurotransmitters:[],biologicalTimeline:[{timeMs:'0–25 min',process:'Zaplanowany blok ogranicza liczbę decyzji i pozwala utrzymać uwagę na jednym zadaniu.'}]},
 influenceAndManipulation:{tacticsUsed:[],counterMeasures:[{step:'Usunięcie telefonu',script:'„Telefon zostaje poza pokojem na czas bloku.”',rationale:'Zmniejsza dostępność natychmiastowej nagrody.'}]},
 alternativePath:'Gdyby Michał wcześniej podzielił cel na konkretne działania i zmienił środowisko, część pętli unikania mogłaby nie zostać wzmocniona.',
 readerQuestion:'W którym miejscu własnej pętli odkładania najłatwiej byłoby Ci wprowadzić zmianę?',
 keyTakeaway:'Nie pytaj wyłącznie „jak zwiększyć motywację?”. Zapytaj także „jak zmienić system, w którym mam działać?”.'
};

export const chapterTwelveExerciseGoal: SelfExercise = {id:'ex-12-goal',title:'Od celu do pierwszego działania',subtitle:'Rozbij odległy rezultat na zachowanie możliwe do wykonania teraz.',objective:'Zobaczyć dokładnie, gdzie cel zamienia się w konkretne działanie.',durationMinutes:15,neuroScientificFoundation:'Konkretyzacja działania zmniejsza niejasność zadania i ułatwia przejście od intencji do wykonania.',steps:[
{stepNumber:1,title:'Cel końcowy',instruction:'Wybierz jeden ważny cel.',promptText:'Mój cel:',placeholder:'Np. przygotować się do egzaminu.'},
{stepNumber:2,title:'Cel pośredni',instruction:'Wymień 2–5 etapów.',promptText:'Etapy:',placeholder:'Dział 1, dział 2, zadania...'},
{stepNumber:3,title:'Pierwsza czynność',instruction:'Zapisz czynność, którą można wykonać bez dalszego planowania.',promptText:'Pierwsza czynność:',placeholder:'O 17:00 otwieram podręcznik i rozwiązuję 5 zadań.'},
{stepNumber:4,title:'Przeszkoda',instruction:'Przewidź najbliższą przeszkodę i odpowiedź na nią.',promptText:'Jeśli...',placeholder:'Jeśli zacznę sięgać po telefon, zostawiam go poza pokojem.'}],reflectionQuestions:['Co wcześniej było zbyt ogólne?','Który element najbardziej zwiększa prawdopodobieństwo wykonania?','Co możesz zmienić w środowisku?']};

export const chapterTwelveExerciseProcrastination: SelfExercise = {id:'ex-12-procrastination',title:'Mapa prokrastynacji',subtitle:'Rozłóż jedno odkładane zadanie na elementy pętli.',objective:'Rozpoznać punkt, w którym krótkoterminowa ulga wzmacnia długoterminowe unikanie.',durationMinutes:20,neuroScientificFoundation:'Analiza sekwencji zachowania pozwala oddzielić zadanie, interpretację, emocję, impuls, działanie i konsekwencję.',steps:[
{stepNumber:1,title:'Zadanie',instruction:'Wybierz jedno odkładane zadanie.',promptText:'Zadanie:',placeholder:'Nauka do sprawdzianu.'},
{stepNumber:2,title:'Przewidywanie',instruction:'Zapisz, czego spodziewasz się po rozpoczęciu.',promptText:'Myśl:',placeholder:'Będzie trudne i zajmie długo.'},
{stepNumber:3,title:'Emocja',instruction:'Nazwij stan pojawiający się przed unikaniem.',promptText:'Emocja/pobudzenie:',placeholder:'Napięcie, nuda, niepewność.'},
{stepNumber:4,title:'Ulga i nagroda',instruction:'Zapisz, co daje unikanie natychmiast.',promptText:'Natychmiastowy skutek:',placeholder:'Ulga + telefon + rozrywka.'}],reflectionQuestions:['Co dokładnie zostaje wzmocnione?','Czy problemem jest zadanie, interpretacja, środowisko czy kilka elementów naraz?','Gdzie można przerwać pętlę?']};

export const chapterTwelve: Chapter = {number:12,title:'Motywacja, Cele i Uruchamianie Działania',subtitle:'Dlaczego samo „chcę” nie wystarcza i jak przełożyć intencję na zachowanie.',leadParagraph:'Człowiek może bardzo czegoś chcieć i jednocześnie tego nie robić. Motywacja nie jest przełącznikiem, lecz procesem zależnym od potrzeb, oczekiwań, emocji, wartości celu, przewidywanych konsekwencji, poczucia kompetencji i środowiska.',totalEstimatedPages:34,sections:[
{id:'sec-12-1',pageNumber:550,sectionNumber:'12.1',title:'Czym jest motywacja?',category:'wstep',readingTimeMinutes:12,paragraphs:[
'Człowiek może bardzo czegoś chcieć i jednocześnie tego nie robić. W codziennym języku często rozwiązujemy ten problem jednym słowem: „brak motywacji”. Takie wyjaśnienie jest jednak zbyt proste.',
'Motywację można rozumieć jako proces wpływający na uruchomienie, kierunek, intensywność i podtrzymywanie działania. Warto odróżnić potrzebę, pragnienie, cel i intencję.',
'Potrzeba wskazuje na stan, który człowiek chce zmienić. Pragnienie jest bardziej bezpośrednim doświadczeniem psychicznym. Cel wskazuje pożądany rezultat. Intencja oznacza zamiar wykonania działania.',
'Najważniejsze jest to, że „chcę” nie oznacza „robię”. Pomiędzy intencją a wykonaniem znajduje się luka, na którą wpływają emocje, przewidywany wysiłek, wcześniejsze doświadczenia, środowisko i dostępność nagród.'
]},
{id:'sec-12-2',pageNumber:554,sectionNumber:'12.2',title:'Cel a działanie',category:'teoria',readingTimeMinutes:13,paragraphs:[
'„Chcę zdać egzamin” jest celem, ale nie jest konkretnym działaniem. Działaniem może być otwarcie podręcznika, przeczytanie pięciu stron, rozwiązanie dziesięciu zadań albo sprawdzenie błędów.',
'Pomocne jest rozdzielenie celu końcowego od celów pośrednich, zadania i konkretnej czynności. Każde przejście zmniejsza odległość pomiędzy pragnieniem a zachowaniem.',
'Cel może być zbyt odległy, ogólny, trudny lub pozbawiony informacji zwrotnej. Plan jest mechanizmem tłumaczącym intencję na zachowanie.',
'Można użyć ciągu: cel → plan → konkretna czynność → wykonanie → informacja zwrotna → korekta. To bardziej użyteczny model niż samo „cel → sukces”.'
]},
{id:'sec-12-3',pageNumber:558,sectionNumber:'12.3',title:'Motywacja wewnętrzna i zewnętrzna',category:'teoria',readingTimeMinutes:11,paragraphs:[
'Niektóre działania są interesujące same w sobie, inne są środkiem do uzyskania czegoś innego. Motywacja wewnętrzna i zewnętrzna mogą współistnieć.',
'Nagroda, ocena, wynagrodzenie, pochwała czy uniknięcie kary mogą być zewnętrznymi powodami działania. Nie oznacza to, że motywacja zewnętrzna jest zawsze niekorzystna.',
'Ważne jest także poczucie autonomii: człowiek może inaczej doświadczać celu, który sam uznaje za ważny, niż czynności wykonywanej wyłącznie pod przymusem. Znaczenie ma również poczucie kompetencji — przewidywanie, że można sobie poradzić.'
]},
{id:'sec-12-4',pageNumber:562,sectionNumber:'12.4',title:'Natychmiastowa nagroda kontra przyszła korzyść',category:'teoria',readingTimeMinutes:12,paragraphs:[
'Telefon daje rozrywkę i nowość teraz. Nauka może przynieść korzyść dopiero za kilka tygodni. Oszczędzanie pieniędzy oznacza rezygnację z części przyjemności obecnie na rzecz większych możliwości później.',
'W takich sytuacjach pojawia się problem odraczania gratyfikacji. Przyszła nagroda może być psychologicznie mniej konkretna niż obecna. Zjawisko dyskontowania przyszłości pomaga zrozumieć, dlaczego „zdam za miesiąc” może przegrywać z „jeszcze jeden film”.',
'Przykład 50 zł dzisiaj kontra 60 zł za miesiąc pokazuje, że matematyczna różnica nie musi być psychologicznie odbierana w ten sam sposób.'
]},
{id:'sec-12-5',pageNumber:566,sectionNumber:'12.5',title:'Prokrastynacja jako system',category:'teoria',readingTimeMinutes:15,paragraphs:[
'Prokrastynacja nie musi oznaczać lenistwa. Może być odkładaniem zaplanowanego działania pomimo świadomości kosztu opóźnienia.',
'Przykładowa pętla wygląda tak: zadanie → przewidywanie wysiłku → nieprzyjemna emocja → unikanie → chwilowa ulga → natychmiastowa nagroda → większa gotowość do unikania następnym razem.',
'Ważne zadanie może wywoływać większe napięcie właśnie dlatego, że jest ważne. Człowiek może próbować uniknąć nie tylko pracy, ale też lęku przed oceną, poczucia niekompetencji albo możliwości porażki.',
'Prokrastynacja może więc krótkoterminowo regulować emocje, choć długoterminowo pogarsza sytuację.'
]},
{id:'sec-12-6',pageNumber:571,sectionNumber:'12.6',title:'Samokontrola i projektowanie środowiska',category:'teoria',readingTimeMinutes:13,paragraphs:[
'Samokontrola często kojarzy się z siłą woli. Jednak można część problemu rozwiązać wcześniej: telefon zostawić w innym pomieszczeniu, wyłączyć powiadomienia, przygotować książki i ustalić godzinę rozpoczęcia.',
'To różnica między kontrolą impulsu a kontrolą środowiska. Pierwsza wymaga aktywnego hamowania. Druga zmniejsza liczbę sytuacji, w których trzeba hamować.',
'Nie każdą przeszkodę trzeba pokonywać siłą. Czasami można ją usunąć z drogi.'
]},
{id:'sec-12-7',pageNumber:575,sectionNumber:'12.7',title:'Poczucie postępu i informacja zwrotna',category:'teoria',readingTimeMinutes:10,paragraphs:[
'Widoczny postęp może wzmacniać poczucie kompetencji. Użyteczne bywają listy wykonanych zadań, mierzalne etapy, testy kontrolne, liczba rozwiązanych zadań czy obserwowalny rozwój umiejętności.',
'Nie chodzi o obsesyjne mierzenie wszystkiego. Chodzi o informację zwrotną: nie tylko „czy osiągnąłem cel?”, lecz także „czy jestem bliżej niż wcześniej?”.'
]},
{id:'sec-12-8',pageNumber:579,sectionNumber:'12.8',title:'Studium przypadku — Michał przed egzaminem',category:'studium-przypadku',readingTimeMinutes:18,paragraphs:[
'Michał ma siedemnaście lat i za miesiąc zdaje ważny egzamin. Wie, że wynik jest istotny, ale jego ogólny plan „trzy godziny dziennie” nie przekłada się na zachowanie.',
'Po powrocie ze szkoły sięga po telefon. „Jeszcze tylko chwilę” daje natychmiastową ulgę. Po tygodniu zaległość rośnie, a wraz z nią stres.',
'Przełomem jest rozbicie egzaminu na pięć działów, ustalenie konkretnej godziny, odłożenie telefonu poza pokój, rozpoczęcie od 25 minut i zakończenie bloku pytaniami kontrolnymi.',
'Przypadek pokazuje różnicę między próbą zwiększenia motywacji a zmianą systemu, w którym motywacja musi działać.'
],caseStudyRef:chapterTwelveCaseStudy},
{id:'sec-12-9',pageNumber:584,sectionNumber:'12.9',title:'Laboratorium: ćwiczenia z uruchamiania działania',category:'cwiczenia',readingTimeMinutes:25,paragraphs:[
'Wybierz jeden cel, którego obecnie nie realizujesz. Przejdź od celu końcowego do konkretnej czynności, a następnie przeanalizuj przeszkodę, natychmiastową nagrodę i możliwą zmianę środowiska.',
'Drugi krok to mapa prokrastynacji. Zapisz zadanie, przewidywanie, emocję, impuls, działanie, natychmiastowy skutek i konsekwencję długoterminową.',
'Na końcu odpowiedz: gdzie dokładnie można przerwać pętlę? Nie szukaj wyłącznie większej siły woli — szukaj punktu, w którym można zmienić system.'
],exerciseRef:chapterTwelveExerciseGoal},
{id:'sec-12-10',pageNumber:589,sectionNumber:'12.10',title:'Podsumowanie i połączenie z dalszą częścią książki',category:'podsumowanie',readingTimeMinutes:12,paragraphs:[
'Motywacja nie jest pojedynczym przełącznikiem. Działanie zależy od relacji między celem, planem, oczekiwaniami, emocjami, nagrodami, środowiskiem i informacją zwrotną.',
'Najważniejsze pytanie praktyczne brzmi: „Co musi się wydarzyć, aby następny krok był łatwy do wykonania?”.',
'W następnym rozdziale zobaczymy, jak stres i presja zmieniają uwagę, interpretację oraz decyzje. Później połączymy te procesy z obrazem siebie i przekonaniami o własnych możliwościach.'
]}
]};