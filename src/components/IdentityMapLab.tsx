import React, { useState } from 'react';
import { User, Users, Shield, Sparkles, AlertCircle, CheckCircle2, ArrowRight, RefreshCw, Eye, Award, Compass } from 'lucide-react';

interface RoleNode {
  id: string;
  name: string;
  category: 'personal' | 'social' | 'professional' | 'relational';
  labels: string[]; // "Jestem..."
  actualBehaviors: string[]; // "W praktyce zachowuję się..."
  authenticityScore: number; // 1-10
  stressLevel: number; // 1-10
  expectations: string;
}

const DEFAULT_ROLES: RoleNode[] = [
  {
    id: 'role-prof',
    name: 'Ja w Pracy / Na Uczelni',
    category: 'professional',
    labels: ['Niezawodny', 'Opanowany', 'Wszystko kontrolujący'],
    actualBehaviors: ['Biorę nadgodziny, by nie wyjść na niekompetentnego', 'Tłumię wątpliwości przed szefem', 'Odkładam trudne decyzje z obawy przed błędem'],
    authenticityScore: 6,
    stressLevel: 8,
    expectations: 'Oczekiwanie perfekcji, natychmiastowej dyspozycyjności i bezbłędności'
  },
  {
    id: 'role-rel',
    name: 'Ja w Relacji Partnerskiej / Bliskich',
    category: 'relational',
    labels: ['Ciepły', 'Wyrozumiały', 'Zawsze wspierający'],
    actualBehaviors: ['Ustępuję dla świętego spokoju', 'Nie mówię o własnym zmęczeniu', 'Ukrywam drobne frustracje aż do wybuchu'],
    authenticityScore: 7,
    stressLevel: 6,
    expectations: 'Bycie filarem emocjonalnym, unikanie konfrontacji i dbanie o komfort drugiej strony'
  },
  {
    id: 'role-soc',
    name: 'Ja w Grupie Znajomych / W Sieci',
    category: 'social',
    labels: ['Wyluzowany', 'Z poczuciem humoru', 'Ciekawy świata'],
    actualBehaviors: ['Dostosowuję opinie do tonu grupy', 'Śmieję się z żartów, które mnie rażą', 'Filtruję wizerunek pod kątem akceptacji'],
    authenticityScore: 5,
    stressLevel: 7,
    expectations: 'Dopasowanie do nastroju grupy, brak marudzenia, wysoka atrakcyjność towarzyska'
  },
  {
    id: 'role-priv',
    name: 'Ja Sam ze Sobą (Gdy nikt nie patrzy)',
    category: 'personal',
    labels: ['Wątpiący', 'Przemęczony', 'Poszukujący sensu'],
    actualBehaviors: ['Przewijam bezmyślnie telefon wieczorami', 'Krytykuję się za brak postępów', 'Marzę o ciszy i braku oczekiwań'],
    authenticityScore: 9,
    stressLevel: 7,
    expectations: 'Wewnętrzny krytyk domagający się natychmiastowych sukcesów i dyscypliny'
  }
];

export const IdentityMapLab: React.FC = () => {
  const [roles, setRoles] = useState<RoleNode[]>(DEFAULT_ROLES);
  const [selectedRoleId, setSelectedRoleId] = useState<string>(DEFAULT_ROLES[0].id);
  const [newLabel, setNewLabel] = useState<string>('');
  const [newBehavior, setNewBehavior] = useState<string>('');
  const [showAnalysis, setShowAnalysis] = useState<boolean>(false);

  const activeRole = roles.find((r) => r.id === selectedRoleId) || roles[0];

  const handleUpdateAuthenticity = (val: number) => {
    setRoles((prev) =>
      prev.map((r) => (r.id === selectedRoleId ? { ...r, authenticityScore: val } : r))
    );
  };

  const handleUpdateStress = (val: number) => {
    setRoles((prev) =>
      prev.map((r) => (r.id === selectedRoleId ? { ...r, stressLevel: val } : r))
    );
  };

  const handleAddLabel = () => {
    if (!newLabel.trim()) return;
    setRoles((prev) =>
      prev.map((r) =>
        r.id === selectedRoleId ? { ...r, labels: [...r.labels, newLabel.trim()] } : r
      )
    );
    setNewLabel('');
  };

  const handleAddBehavior = () => {
    if (!newBehavior.trim()) return;
    setRoles((prev) =>
      prev.map((r) =>
        r.id === selectedRoleId ? { ...r, actualBehaviors: [...r.actualBehaviors, newBehavior.trim()] } : r
      )
    );
    setNewBehavior('');
  };

  const handleRemoveLabel = (idx: number) => {
    setRoles((prev) =>
      prev.map((r) =>
        r.id === selectedRoleId ? { ...r, labels: r.labels.filter((_, i) => i !== idx) } : r
      )
    );
  };

  const handleRemoveBehavior = (idx: number) => {
    setRoles((prev) =>
      prev.map((r) =>
        r.id === selectedRoleId ? { ...r, actualBehaviors: r.actualBehaviors.filter((_, i) => i !== idx) } : r
      )
    );
  };

  // Calculations for synthesis
  const avgAuthenticity = (roles.reduce((acc, r) => acc + r.authenticityScore, 0) / roles.length).toFixed(1);
  const avgStress = (roles.reduce((acc, r) => acc + r.stressLevel, 0) / roles.length).toFixed(1);
  const gapSpread = Math.max(...roles.map(r => r.stressLevel)) - Math.min(...roles.map(r => r.stressLevel));

  return (
    <div className="my-10 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-lg overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-1">
          <Compass className="w-4 h-4 text-amber-400" />
          <span>Laboratorium Tomu III • Rozdział 1</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-amber-50">
          Interaktywna Mapa Tożsamości i Rozbieżności Ról
        </h3>
        <p className="text-sm text-stone-300 mt-1 max-w-2xl">
          Człowiek nie jest monolitem. Funkcjonujesz w siatce ról społecznych, z których każda narzuca odrębne skrypty zachowań i etykiety. Zbadaj rozbieżność pomiędzy „jestem taki” a „tak się zachowuję”.
        </p>
      </div>

      <div className="p-6">
        {/* Role Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {roles.map((r) => {
            const isSelected = r.id === selectedRoleId;
            return (
              <button
                key={r.id}
                onClick={() => setSelectedRoleId(r.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-amber-100/70 border-amber-500/80 shadow-xs ring-2 ring-amber-400 dark:bg-amber-950/40 dark:border-amber-500'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 dark:bg-stone-800/50 dark:border-stone-700'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold mb-0.5">
                  Rola:
                </div>
                <div className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 truncate">
                  {r.name}
                </div>
                <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-stone-500 dark:text-stone-400">
                  <span>Autent.: {r.authenticityScore}/10</span>
                  <span>•</span>
                  <span>Stres: {r.stressLevel}/10</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Role Configuration Card */}
        <div className="bg-stone-50/80 dark:bg-stone-800/60 rounded-xl p-5 border border-stone-200 dark:border-stone-700 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-200 dark:border-stone-700">
            <div>
              <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold uppercase">
                Edycja Profilu Roli
              </span>
              <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                {activeRole.name}
              </h4>
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400 font-mono">
              Oczekiwania kontekstu: <span className="italic">{activeRole.expectations}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: Labels ("Kim wydaje mi się, że jestem") */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-2">
                <Shield className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Etykiety Tożsamościowe („Jestem taki...”):</span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-2">
                Pojęcia i określenia, którymi definiujesz siebie w tym obszarze (często sztywne etykiety).
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {activeRole.labels.map((lbl, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-100 text-blue-900 dark:bg-blue-950/60 dark:text-blue-200 border border-blue-200 dark:border-blue-800"
                  >
                    {lbl}
                    <button
                      onClick={() => handleRemoveLabel(idx)}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-xs ml-1 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="Dodaj etykietę (np. Perfekcyjny)..."
                  className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100"
                  onKeyDown={(e) => e.key === 'Enter' && handleAddLabel()}
                />
                <button
                  onClick={handleAddLabel}
                  className="px-3 py-1.5 bg-blue-700 text-white rounded-lg text-xs font-semibold hover:bg-blue-800 transition"
                >
                  Dodaj
                </button>
              </div>
            </div>

            {/* Column 2: Actual Behaviors ("Jak naprawdę działam") */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-2">
                <User className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Rzeczywiste Zachowania („W praktyce zachowuję się...”):</span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-2">
                Obiektywne mikrozachowania i kompromisy podejmowane pod presją sytuacji.
              </p>
              <div className="space-y-1.5 mb-3">
                {activeRole.actualBehaviors.map((beh, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-2 p-2 rounded-lg text-xs bg-amber-50 dark:bg-amber-950/30 text-stone-800 dark:text-stone-200 border border-amber-200/60 dark:border-amber-900/50"
                  >
                    <span>• {beh}</span>
                    <button
                      onClick={() => handleRemoveBehavior(idx)}
                      className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 text-xs font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newBehavior}
                  onChange={(e) => setNewBehavior(e.target.value)}
                  placeholder="Dodaj zachowanie (np. Boję się zabrać głos)..."
                  className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100"
                  onKeyDown={(e) => e.key === 'Enter' && handleAddBehavior()}
                />
                <button
                  onClick={handleAddBehavior}
                  className="px-3 py-1.5 bg-amber-700 text-white rounded-lg text-xs font-semibold hover:bg-amber-800 transition"
                >
                  Dodaj
                </button>
              </div>
            </div>
          </div>

          {/* Sliders: Authenticity & Stress */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 pt-4 border-t border-stone-200 dark:border-stone-700">
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="text-stone-700 dark:text-stone-300 font-bold">
                  Poczucie Autentyczności w tej Roli:
                </span>
                <span className="font-bold text-amber-700 dark:text-amber-400">
                  {activeRole.authenticityScore} / 10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={activeRole.authenticityScore}
                onChange={(e) => handleUpdateAuthenticity(parseInt(e.target.value, 10))}
                className="w-full accent-amber-700 cursor-pointer"
              />
              <span className="text-[10px] text-stone-400 block mt-0.5">
                (1 = pełna gra aktorska / maska, 10 = pełna zgodność z własnymi wartościami)
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="text-stone-700 dark:text-stone-300 font-bold">
                  Napięcie / Koszt Emocjonalny Utrzymania Roli:
                </span>
                <span className="font-bold text-rose-700 dark:text-rose-400">
                  {activeRole.stressLevel} / 10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={activeRole.stressLevel}
                onChange={(e) => handleUpdateStress(parseInt(e.target.value, 10))}
                className="w-full accent-rose-700 cursor-pointer"
              />
              <span className="text-[10px] text-stone-400 block mt-0.5">
                (1 = swoboda i lekkość, 10 = skrajne zmęczenie i lęk przed zdemaskowaniem)
              </span>
            </div>
          </div>
        </div>

        {/* Generate Synthesis Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAnalysis(!showAnalysis)}
            className="px-6 py-2.5 bg-stone-900 dark:bg-amber-700 hover:bg-stone-800 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{showAnalysis ? 'Zwiń Analizę Systemową' : 'Generuj Psychologiczny Profil Tożsamości'}</span>
          </button>
        </div>

        {/* Comprehensive Systemic Feedback */}
        {showAnalysis && (
          <div className="mt-6 p-6 rounded-xl bg-amber-50/70 dark:bg-stone-800/90 border border-amber-300 dark:border-amber-700 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2 text-sm font-mono font-bold text-amber-900 dark:text-amber-300 uppercase">
              <Eye className="w-4 h-4" />
              <span>Raport Integracji Tożsamości (Tom III, Rozdział 1)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700">
                <span className="text-[11px] font-mono text-stone-500 uppercase block">Średnia Autentyczność</span>
                <span className="text-xl font-bold font-mono text-stone-900 dark:text-stone-100">{avgAuthenticity} / 10</span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700">
                <span className="text-[11px] font-mono text-stone-500 uppercase block">Średnie Napięcie Ról</span>
                <span className="text-xl font-bold font-mono text-rose-700 dark:text-rose-400">{avgStress} / 10</span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700">
                <span className="text-[11px] font-mono text-stone-500 uppercase block">Rozstęp Pomiędzy Rolami</span>
                <span className="text-xl font-bold font-mono text-amber-700 dark:text-amber-400">{gapSpread} pkt</span>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed space-y-2">
              <p>
                <strong>1. Konflikt Ról i Zmęczenie Poznawcze:</strong> Zauważ, że rola o najniższej autentyczności generuje najwyższy wydatek energetyczny. Utrzymywanie wizerunku („Jestem opanowany”) przy zachowaniach kompensacyjnych („Tłumię wątpliwości”) zmusza grzbietowo-boczną korę przedczołową do ciągłego tłumienia autentycznych sygnałów z wyspy.
              </p>
              <p>
                <strong>2. Przesunięcie „Jestem taki” ku „Zachowuję się tak”:</strong> Gdy definiujesz siebie jako „Jestem słaby w relacjach” lub „Jestem perfekcjonistą”, tworzysz sztywny dogmat tożsamościowy. Zastąpienie tego językiem operacyjnym: „W pracy czasami ulegam nawykowi nadmiernego sprawdzania maili” pozwala na realną modyfikację zachowania bez naruszania poczucia własnej wartości.
              </p>
              <p>
                <strong>3. Rekomendacja z Rozdziału 1:</strong> Wybierz jedną rolę, w której Twoja autentyczność wynosi poniżej 7 punktów. W tym tygodniu przeprowadź jeden mikroeksperyment behawioralny: otwarcie powiedz jedno autentyczne zdanie o swoim stanie („Dziś nie dam rady tego przeanalizować, wrócę do tematu jutro rano”) i zaobserwuj, że świat się nie zawalił.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
