import React, { useState } from 'react';
import { Network, ArrowDown, ChevronRight, HelpCircle, Sparkles, Brain, CheckCircle2 } from 'lucide-react';
import { DecisionProcessNode } from '../types/book';

const processNodes: DecisionProcessNode[] = [
  {
    id: 'bodziec',
    stepNumber: 1,
    label: '1. BODZIEC (Trigger)',
    subtitle: 'Fizyczny sygnał ze świata zewnętrznego lub wewnętrznego',
    description: 'Dźwięk powiadomienia, spojrzenie szefa, spadek poziomu cukru we krwi czy nagły ból głowy. Bodziec jest czystym faktem fizycznym – sam w sobie nie ma jeszcze żadnego znaczenia emocjonalnego ani moralnego.',
    everydayExample: 'Ekran telefonu rozbłyskuje z napisem: „Wiadomość od: Dyrektor Wiktor”.',
    neurobiologicalContext: 'Receptory zmysłowe (siatkówka oka, ślimak w uchu) przekształcają fale świetlne lub akustyczne w potencjały czynnościowe przesyłane do wzgórza (thalamus).',
    reflectionQuestion: 'Czy potrafisz zidentyfikować fizyczny bodziec, zanim Twój umysł dopisze do niego katastroficzną historię?',
    colorScheme: 'slate'
  },
  {
    id: 'uwaga',
    stepNumber: 2,
    label: '2. UWAGA (Attentional Filter)',
    subtitle: 'Wąski reflektor świadomości selekcjonujący dane',
    description: 'W każdej sekundzie do Twojego mózgu dociera ok. 11 milionów bitów informacji. Twoja świadoma uwaga może przetworzyć zaledwie 40–50 bitów na sekundę. To, na czym zatrzyma się ten reflektor, staje się Twoją rzeczywistością; reszta znika w cieniu.',
    everydayExample: 'Ignorujesz szum klimatyzacji i widok za oknem, a cała Twoja uwaga zostaje zassana przez imię nadawcy wiadomości.',
    neurobiologicalContext: 'Brzuszna sieć uwagowa (Ventral Attention Network) oraz jądro siatkowate wzgórza filtrują bodźce o wysokiej wyrazistości (salience).',
    reflectionQuestion: 'Co w Twoim obecnym otoczeniu kradnie reflektor Twojej uwagi bez Twojej świadomej zgody?',
    colorScheme: 'amber'
  },
  {
    id: 'interpretacja',
    stepNumber: 3,
    label: '3. INTERPRETACJA (Cognitive Appraisal)',
    subtitle: 'Błyskawiczne nadanie znaczenia: „Czy to mi zagraża?”',
    description: 'To tutaj rodzi się iluzja. Bodziec zostaje przepuszczony przez filtr Twoich dotychczasowych przekonań, kompleksów i schematów poznawczych. To nie sytuacja wywołuje Twoją reakcję, lecz to, CO O NIEJ MYŚLISZ.',
    everydayExample: 'Zamiast: „Dyrektor chce porozmawiać”, Twój umysł generuje: „Na pewno zrobiłem błąd i zaraz mnie zwolnią”.',
    neurobiologicalContext: 'Kora skroniowa i przedczołowa błyskawicznie porównują bodziec ze schematami poznawczymi zapisanymi w sieci wzbudzeń podstawowych (DMN).',
    reflectionQuestion: 'Czy to, co w tej chwili myślisz o danej sytuacji, to twardy fakt, czy jedynie Twoja subiektywna hipoteza?',
    colorScheme: 'blue'
  },
  {
    id: 'emocja_stan',
    stepNumber: 4,
    label: '4. EMOCJA / STAN (Affective State)',
    subtitle: 'Fizjologiczna reakcja organizmu przygotowująca do działania',
    description: 'Emocja to nie mgliste pojęcie psychologiczne — to konkretna zmiana fizjologiczna w ciele: wyrzut hormonów, zmiana tętna, napięcie mięśniowe, uderzenie gorąca lub lodowaty ucisk w żołądku. Emocja jest sygnałem adaptacyjnym.',
    everydayExample: 'Pojawia się lęk: serce przyspiesza, gardło wysycha, żołądek się zaciska.',
    neurobiologicalContext: 'Ciało migdałowate aktywuje pień mózgu i oś HPA, powodując uwolnienie noradrenaliny i kortyzolu do krwioobiegu.',
    reflectionQuestion: 'Gdzie w ciele fizycznie czujesz tę emocję, zanim zaczniesz o niej mówić lub działać pod jej wpływem?',
    colorScheme: 'purple'
  },
  {
    id: 'pamiec_doswiadczenia',
    stepNumber: 5,
    label: '5. PAMIĘĆ I DOŚWIADCZENIA (Prior Conditioning)',
    subtitle: 'Archiwum minionych ran, sukcesów i wzorców przetrwania',
    description: 'Mózg jest maszyną predykcyjną. Nie ocenia teraźniejszości na czysto — bezustannie zgaduje, co się stanie, nakładając wspomnienia dawnych porażek, krytyki z dzieciństwa lub toksycznych relacji na obecną sytuację.',
    everydayExample: 'Przypomina Ci się sytuacja sprzed 3 lat, gdy inny szef w podobny sposób zwolnił Twojego kolegę.',
    neurobiologicalContext: 'Hipokamp wysyła sygnały asocjacyjne do kory przedczołowej, odtwarzając kontekst pamięciowy.',
    reflectionQuestion: 'Czy reagujesz na człowieka, który stoi przed Tobą, czy na ducha kogoś z Twojej przeszłości?',
    colorScheme: 'slate'
  },
  {
    id: 'impuls',
    stepNumber: 6,
    label: '6. IMPULS (Urge / Action Tendency)',
    subtitle: 'Przymus wykonania automatycznego ruchu',
    description: 'Biologiczny pęd do natychmiastowego rozładowania nieprzyjemnego napięcia. Może to być chęć ucieczki (prokrastynacja), ataku (krzyk, sarkazm) lub uległego przeproszenia (zamrożenie/fawn). Impuls NIE JEST jeszcze decyzją.',
    everydayExample: 'Silny impuls, by od razu odpisać w panice: „Czy coś się stało? Czy to przeze mnie?!”.',
    neurobiologicalContext: 'Prążkowie i układ ruchowy są wstępnie aktywowane; kora ruchowa wysyła impulsy do mięśni.',
    reflectionQuestion: 'Czy potrafisz poczuć impuls w ciele i pozwolić mu przepłynąć bez natychmiastowego ulegania mu?',
    colorScheme: 'rose'
  },
  {
    id: 'pauza',
    stepNumber: 7,
    label: '7. PAUZA (Świadomy Bezpiecznik)',
    subtitle: 'Złote 4–6 sekund wolnej woli: Protokół STOP',
    description: 'Najważniejszy punkt całego procesu. To tutaj człowiek różni się od zwierzęcia reagującego czystym odruchem bezwarunkowym. Zatrzymanie się na kilka sekund i wzięcie oddechu fizjologicznego pozwala na powrót dopływu krwi do kory przedczołowej.',
    everydayExample: 'Kładziesz dłoń na stole, bierzesz głęboki wdech przez nos i mówisz sobie w myślach: „STOP. Jestem bezpieczny”.',
    neurobiologicalContext: 'Aktywacja prawej brzuszno-bocznej kory przedczołowej (rvlPFC) wyhamowuje jądro środkowe ciała migdałowatego za pośrednictwem neuronów GABA-ergicznych.',
    reflectionQuestion: 'Czy pamiętasz o zrobieniu jednej pauzy oddechowej, zanim wyślesz trudną wiadomość?',
    colorScheme: 'emerald'
  },
  {
    id: 'wybor',
    stepNumber: 8,
    label: '8. ŚWIADOMY WYBÓR (Cognitive Choice)',
    subtitle: 'Zastosowanie Systemu 2: Co jest naprawdę korzystne?',
    description: 'Świadoma kalkulacja długoterminowych konsekwencji w oparciu o wartości, a nie o chwilowy lęk. Rozważenie opcji alternatywnych.',
    everydayExample: 'Decyzja: „Zamiast panikować, przygotuję rano zestawienie zrealizowanych zadań i pójdę na spotkanie z faktami”.',
    neurobiologicalContext: 'Grzbietowo-boczna kora przedczołowa (dlPFC) waży zyski i koszty w oparciu o pamięć roboczą.',
    reflectionQuestion: 'Jaki wybór w tej sytuacji będzie spójny z człowiekiem, jakim chcesz być za 5 lat?',
    colorScheme: 'blue'
  },
  {
    id: 'dzialanie',
    stepNumber: 9,
    label: '9. DZIAŁANIE (Constructive Execution)',
    subtitle: 'Wdrożenie zaplanowanego zachowania w świecie fizycznym',
    description: 'Rzeczywisty krok wykonany w rzeczywistości. Słowa wypowiedziane spokojnym głosem, postawienie granicy lub skupienie się na pracy.',
    everydayExample: 'Wysłanie spokojnej, profesjonalnej odpowiedzi: „Dzień dobry, będę jutro o 9:00. Pozdrawiam”.',
    neurobiologicalContext: 'Pierwotna kora ruchowa (M1) wysyła sygnały przez drogi piramidowe do mięśni obwodowych.',
    reflectionQuestion: 'Czy Twoje działanie było reakcją obronną, czy przemyślaną odpowiedzią?',
    colorScheme: 'emerald'
  },
  {
    id: 'konsekwencja',
    stepNumber: 10,
    label: '10. KONSEKWENCJA (Feedback Loop)',
    subtitle: 'Rezultat zewnętrzny i wewnętrzny stan emocjonalny',
    description: 'Każde działanie przynosi podwójny skutek: w świecie zewnętrznym (reakcja drugiej osoby) oraz w Twoim układzie nerwowym (spadek kortyzolu, wzrost poczucia własnej sprawczości).',
    everydayExample: 'Wieczór spędzony spokojnie z rodziną zamiast w męczarniach paniki.',
    neurobiologicalContext: 'Poziom hormonów stresu opada; układ przywspółczulny (nerw błędny) przywraca homeostazę.',
    reflectionQuestion: 'Jakie emocjonalne koszty ponosisz, gdy pozwalasz impulsom decydować za Ciebie?',
    colorScheme: 'slate'
  },
  {
    id: 'uczenie_sie',
    stepNumber: 11,
    label: '11. UCZENIE SIĘ (Neuroplastic Consolidation)',
    subtitle: 'Przebudowa synaps: wzmocnienie nowej ścieżki',
    description: 'Zgodnie z regułą Hebba: neurony, które razem odpalają, razem się łączą. Za każdym razem, gdy zastosujesz pauzę i wybierzesz świadomie, osłabiasz stary automatyzm i tworzysz nową, silniejszą autostradę synaptyczną w mózgu.',
    everydayExample: 'Następnym razem, gdy dostaniesz podobnego maila, Twój mózg nie wpadnie już w panikę — automatycznie przypomni sobie, że to tylko bodziec.',
    neurobiologicalContext: 'Długotrwałe wzmocnienie synaptyczne (LTP) i proces mielinizacji nowych obwodów czołowo-podkorowych.',
    reflectionQuestion: 'Którą ścieżkę neuronową w swoim mózgu chcesz dzisiaj nakarmić?',
    colorScheme: 'purple'
  }
];

export const DecisionProcessMap: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(processNodes[0].id);

  const selectedNode = processNodes.find((n) => n.id === selectedNodeId) || processNodes[0];

  return (
    <div className="my-10 rounded-2xl border border-stone-300 bg-white dark:bg-stone-900 shadow-xl overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950 text-white p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-1">
          <Network className="w-4 h-4" />
          <span>Interaktywna Architektura Procesu • Sekcja 1.14</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-amber-50">
          Mapa Twojego Procesu Decyzyjnego
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Decyzja nie jest punktem w czasie — to 11-etapowy łańcuch neurologiczny. Kliknij dowolne ogniwo, aby zobaczyć, co dzieje się w Twoim mózgu i jak przejąć stery.
        </p>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Interactive Sequence Pipeline */}
        <div className="flex flex-wrap gap-2 justify-center py-2 border-b border-stone-200 dark:border-stone-800 pb-6">
          {processNodes.map((node, idx) => {
            const isSelected = node.id === selectedNodeId;
            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-md scale-105 ring-2 ring-amber-400/40'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  <span className="opacity-75">{idx + 1}.</span>
                  <span>{node.label.split('. ')[1].split(' (')[0]}</span>
                </button>
                {idx < processNodes.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-stone-400 self-center hidden sm:block shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Node Detailed Card */}
        <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-5 animate-fadeIn">
          <div className="border-b border-stone-200 dark:border-stone-700 pb-3">
            <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider block">
              Ogniwo {selectedNode.stepNumber} z 11
            </span>
            <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
              {selectedNode.label}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans mt-0.5 font-medium">
              {selectedNode.subtitle}
            </p>
          </div>

          <p className="font-serif text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed">
            {selectedNode.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
            {/* Real Life Example */}
            <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700/80 shadow-xs">
              <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 uppercase block mb-1">
                Przykład z życia codziennego:
              </span>
              <p className="font-serif text-stone-700 dark:text-stone-300 italic leading-relaxed">
                "{selectedNode.everydayExample}"
              </p>
            </div>

            {/* Neurobiology context */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 shadow-xs">
              <span className="font-mono text-xs font-bold text-blue-900 dark:text-blue-300 uppercase block mb-1 flex items-center space-x-1">
                <Brain className="w-3.5 h-3.5 text-blue-600" />
                <span>Podłoże Neurobiologiczne:</span>
              </span>
              <p className="font-sans text-stone-700 dark:text-stone-300 leading-relaxed text-xs">
                {selectedNode.neurobiologicalContext}
              </p>
            </div>
          </div>

          {/* Reflection Question */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-600/20 text-xs sm:text-sm flex items-start space-x-2.5">
            <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-950 dark:text-amber-200 font-mono text-xs uppercase block mb-0.5">
                Pytanie do Autorefleksji:
              </strong>
              <span className="font-serif text-stone-800 dark:text-stone-200 italic">
                {selectedNode.reflectionQuestion}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
