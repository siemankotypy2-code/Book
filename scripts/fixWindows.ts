import * as fs from 'fs';

// Fix 51
const path51 = 'src/data/chapterFiftyOneData.ts';
let c51 = fs.readFileSync(path51, 'utf-8');
const win51 = {
  id: "iw-51-7-fakty-kontra-tozsamosc",
  type: "counter_case",
  title: "Fakty kontra Tożsamość: Granice Mocy Dowodu",
  subtitle: "Eksperyment myślowy: co dzieje się w umyśle, gdy dowód zagraża tożsamości",
  context: "Manager wyższego szczebla otrzymuje bezsporny raport analityczny wskazujący, że flagowa strategia firmy przynosi straty.",
  counterCase: {
    standardTheory: "Ludzie zmieniają zdanie, gdy przedstawi się im twarde dowody empiryczne i logiczne argumenty.",
    counterExample: "Gdy dowód podważa rdzenne poczucie tożsamości i lojalności, umysł uruchamia motywowane rozumowanie, dyskredytuje autorów raportu i usztywnia swoje fałszywe przekonanie.",
    whyItDefiesRule: "Mózg traktuje tożsamość społeczną jak biologiczną tarczę przetrwania — atak na przekonanie jest neurobiologicznie przetwarzany przez ciało migdałowate jak fizyczny zamach.",
    deeperLesson: "Aby umożliwić człowiekowi rewizję poglądu, musisz najpierw zdjąć zagrożenie tożsamościowe i ochronić jego godność."
  },
  takeaway: "Umysł ludzki nie broni przekonań dlatego, że są prawdziwe, lecz dlatego, że stanowią one rusztowanie jego tożsamości."
};
c51 = c51.replace(/export const chapterFiftyOneInteractiveWindow: InteractiveWindowData = \{[\s\S]*?\};\n\nexport const chapterFiftyOne:/,
  `export const chapterFiftyOneInteractiveWindow: InteractiveWindowData = ${JSON.stringify(win51, null, 2)};\n\nexport const chapterFiftyOne:`);
// Also fix in section 7 reference
c51 = c51.replace(/"interactiveWindowRef":\s*\{[\s\S]*?"id": "iw-51-7-fakty-kontra-tozsamosc"[\s\S]*?\},(\s*"category")/,
  `"interactiveWindowRef": ${JSON.stringify(win51, null, 2)},$1`);
fs.writeFileSync(path51, c51, 'utf-8');

// Fix 52
const path52 = 'src/data/chapterFiftyTwoData.ts';
let c52 = fs.readFileSync(path52, 'utf-8');
const win52 = {
  id: "iw-52-7-milczenie-przy-stole",
  type: "what_if",
  title: "Milczenie przy Stole Decyzyjnym: Anatomia Konformizmu",
  subtitle: "Symulacja interwencji lidera: jak zmiana procedury zebrania rozbija pancerz jednomyślności",
  context: "Zarząd spółki debatuje nad ryzykownym przejęciem zadłużonego konkurenta. Prezes jest zachwycony pomysłem. Trzech dyrektorów ma poważne obawy, lecz żaden nie śmie odezwać się pierwszy.",
  whatIfOptions: {
    defaultScenario: "Prezes pyta: 'Czy ktoś ma jakieś zastrzeżenia?'. W sali panuje trzysekundowa cisza. Prezes konstatuje: 'Świetnie, skoro jest jednomyślność, podpisujemy list intencyjny'. Sześć miesięcy później spółka staje na skraju niewypłacalności.",
    options: [
      {
        id: "opt-secret-ballot",
        changeLabel: "Wariant A: Anonimowe Głosowanie Ryzyk przed Dyskusją",
        resultingInterpretation: "Każdy dyrektor na tablecie wpisuje stopień obawy w skali 1-10 oraz jedno największe zagrożenie bez podpisu.",
        resultingBehavior: "Na ekranie pojawia się średnia obaw 7.8/10 oraz anonimowe ostrzeżenie o ukrytych długach celnych konkurenta. Prezes jest zszokowany, lecz zmuszony do podjęcia dyskusji merytorycznej.",
        psychologicalImpact: "Zlikwidowanie presji normatywnej i lęku przed natychmiastową reprymendą lidera."
      },
      {
        id: "opt-outside-evaluator",
        changeLabel: "Wariant B: Wprowadzenie Niezależnego Audytora Zewnętrznego",
        resultingInterpretation: "Zewnętrzny ekspert bez powiązań personalnych z zarządem przedstawia analizę najgorszego przypadku (Worst-Case Scenario).",
        resultingBehavior: "Ciężar krytyki spoczywa na osobie z zewnątrz, co pozwala wewnętrznym sceptykom na dołączenie do argumentacji bez ryzyka utraty reputacji lojalnych członków zespołu.",
        psychologicalImpact: "Przełamanie bariery my kontra oni i ochrona spójności relacyjnej zarządu przy zachowaniu prawdy operacyjnej."
      }
    ]
  },
  takeaway: "Milczenie w obecności władzy nigdy nie jest dowodem porozumienia; jest naturalnym odruchem samoobrony. Jeśli chcesz usłyszeć prawdę, musisz zaprojektować architekturę spotkania tak, by prawda nie wymagała heroizmu."
};
c52 = c52.replace(/export const chapterFiftyTwoInteractiveWindow: InteractiveWindowData = \{[\s\S]*?\};\n\nexport const chapterFiftyTwo:/,
  `export const chapterFiftyTwoInteractiveWindow: InteractiveWindowData = ${JSON.stringify(win52, null, 2)};\n\nexport const chapterFiftyTwo:`);
c52 = c52.replace(/"interactiveWindowRef":\s*\{[\s\S]*?"id": "iw-52-7-milczenie-przy-stole"[\s\S]*?\},(\s*"category")/,
  `"interactiveWindowRef": ${JSON.stringify(win52, null, 2)},$1`);
fs.writeFileSync(path52, c52, 'utf-8');

// Fix 53
const path53 = 'src/data/chapterFiftyThreeData.ts';
let c53 = fs.readFileSync(path53, 'utf-8');
const win53 = {
  id: "iw-53-7-linia-podzialu",
  type: "dual_perspectives",
  title: "Linia Podziału: Spór o Zasoby Oczami Dwóch Obozów",
  subtitle: "Eksperyment empatii poznawczej: jak to samo wydarzenie interpretuje Inżynieria i Sprzedaż",
  context: "Opóźnienie wdrożenia flagowej platformy o cztery tygodnie wywołuje wściekłość działu handlowego i poczucie niezrozumienia wśród programistów.",
  dualPerspective: {
    situation: "Opóźnienie wdrożenia flagowej platformy o cztery tygodnie ze względów bezpieczeństwa kodu.",
    personA: {
      name: "Tomasz (Dział Inżynierii)",
      quote: "Nie wypuszczę dziurawego systemu tylko dlatego, że handlowcy naobiecywali cudów.",
      whatTheyKnow: "System ma luki w szyfrowaniu danych, które w warunkach produkcyjnych doprowadzą do paraliżu serwerów.",
      whatTheyMiss: "Firma ma środki na pensje tylko na kolejne trzy miesiące, a kontrakt ratuje płynność finansową.",
      interpretation: "Sprzedawcy to cyniczni gracze myślący wyłącznie o kwartalnych prowizjach.",
      coreNeed: "Poczucie bezpieczeństwa technologicznego i szacunek dla inżynierskiego kunsztu.",
      fear: "Odpowiedzialność karna i zawodowa za potencjalny wyciek danych bazy klientów.",
      action: "Blokowanie procedury wdrożeniowej i żądanie kolejnych testów penetracyjnych."
    },
    personB: {
      name: "Kamil (Dział Sprzedaży)",
      quote: "Jeśli nie dowieziemy tego w tym miesiącu, klient pójdzie do Niemców i możemy zamykać firmę.",
      whatTheyKnow: "Klient postawił twarde ultimatum i jest gotów zerwać wart 4 miliony kontrakt.",
      whatTheyMiss: "Koszt naprawy awarii na żywej bazie danych przewyższy roczny zysk z kontraktu.",
      interpretation: "Inżynierowie to leniwi perfekcjoniści oderwani od realiów rynkowych.",
      coreNeed: "Wiarygodność w oczach rynku i dotrzymanie danego słowa.",
      fear: "Utrata reputacji rynkowej i bankructwo spółki.",
      action: "Eskalacja skargi do prezesa i publiczne atakowanie działu technologicznego."
    },
    synthesis: "Obie strony działają racjonalnie w oparciu o wąskie wskaźniki własnych pionów. Rozwiązaniem nie jest kapitulacja jednej ze stron, lecz nadrzędny cel: wspólne spotkanie z klientem i wdrożenie etapu 1 z ograniczonym zakresem funkcji."
  },
  takeaway: "Wojna plemienna w firmie wygasa wtedy, gdy zbieżne stają się wskaźniki sukcesu obu stron."
};
c53 = c53.replace(/export const chapterFiftyThreeInteractiveWindow: InteractiveWindowData = \{[\s\S]*?\};\n\nexport const chapterFiftyThree:/,
  `export const chapterFiftyThreeInteractiveWindow: InteractiveWindowData = ${JSON.stringify(win53, null, 2)};\n\nexport const chapterFiftyThree:`);
c53 = c53.replace(/"interactiveWindowRef":\s*\{[\s\S]*?"id": "iw-53-7-linia-podzialu"[\s\S]*?\},(\s*"category")/,
  `"interactiveWindowRef": ${JSON.stringify(win53, null, 2)},$1`);
fs.writeFileSync(path53, c53, 'utf-8');

console.log("All windows updated successfully!");
