import React, { useState } from 'react';
import { User, ShieldAlert, Sparkles, RefreshCw, CheckCircle, Tag, Layers, HeartHandshake } from 'lucide-react';

interface RoleItem {
  id: string;
  roleName: string;
  context: string;
  perceivedLabel: string;
  behavioralDescription: string;
  conflictPotential: 'low' | 'medium' | 'high';
}

const initialRoles: RoleItem[] = [
  {
    id: 'r1',
    roleName: 'Pracownik / Menedżer',
    context: 'Środowisko zawodowe, zebrania, ocena wyników',
    perceivedLabel: '„Muszę być perfekcyjny i bezbłędny”',
    behavioralDescription: 'Skupienie na wynikach, skłonność do nadgodzin i trudność w delegowaniu zadań.',
    conflictPotential: 'high'
  },
  {
    id: 'r2',
    roleName: 'Partner / Małżonek',
    context: 'Dom, relacja bliska, spędzanie wolnego czasu',
    perceivedLabel: '„Powinienem być zawsze wyrozumiały i obecny”',
    behavioralDescription: 'Dążenie do harmonii, unikanie konfrontacji, czasami tłumienie własnych potrzeb.',
    conflictPotential: 'medium'
  },
  {
    id: 'r3',
    roleName: 'Przyjaciel',
    context: 'Spotkania towarzyskie, luźne rozmowy',
    perceivedLabel: '„Jestem wesołym duszą towarzystwa”',
    behavioralDescription: 'Rozładowywanie napięcia żartem, słuchanie problemów innych.',
    conflictPotential: 'low'
  }
];

export const IdentityMapWidget: React.FC = () => {
  const [roles, setRoles] = useState<RoleItem[]>(initialRoles);
  const [selectedRoleId, setSelectedRoleId] = useState<string>('r1');
  const [activeTab, setActiveTab] = useState<'map' | 'reframing' | 'conflicts'>('map');

  const selectedRole = roles.find((r) => r.id === selectedRoleId) || roles[0];

  const handleUpdateLabel = (newDescription: string) => {
    setRoles((prev) =>
      prev.map((r) => (r.id === selectedRoleId ? { ...r, behavioralDescription: newDescription } : r))
    );
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 border border-amber-900/40 shadow-xl font-sans my-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1.5 w-fit mb-2">
            <Layers className="w-3.5 h-3.5" />
            Tom III • Rozdział 17 • Interaktywne Laboratorium
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100">
            Mapa Ról Społecznych i Dekonstrukcja Etykiet
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            Zbadaj strukturę swoich ról, zidentyfikuj konflikty tożsamościowe i przekształć sztywne etykiety w elastyczne opisy behawioralne.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center space-x-2 bg-stone-800/80 p-1 rounded-2xl border border-stone-700 font-mono text-xs">
          <button
            onClick={() => setActiveTab('map')}
            className={`px-3 py-1.5 rounded-xl transition ${activeTab === 'map' ? 'bg-amber-700 text-white font-bold' : 'text-stone-400 hover:text-white'}`}
          >
            Mapa Ról
          </button>
          <button
            onClick={() => setActiveTab('reframing')}
            className={`px-3 py-1.5 rounded-xl transition ${activeTab === 'reframing' ? 'bg-amber-700 text-white font-bold' : 'text-stone-400 hover:text-white'}`}
          >
            Reframing Etykiet
          </button>
          <button
            onClick={() => setActiveTab('conflicts')}
            className={`px-3 py-1.5 rounded-xl transition ${activeTab === 'conflicts' ? 'bg-amber-700 text-white font-bold' : 'text-stone-400 hover:text-white'}`}
          >
            Konflikty Ról
          </button>
        </div>
      </div>

      {activeTab === 'map' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Role List */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-stone-400 font-bold block mb-2">
              Twoje Główne Role Społeczne:
            </span>
            {roles.map((r) => {
              const isSelected = r.id === selectedRoleId;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRoleId(r.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-amber-900/40 border-amber-500 text-white shadow-md'
                      : 'bg-stone-800/50 border-stone-700/80 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-amber-400" />
                      <h4 className="font-bold text-sm text-amber-100">{r.roleName}</h4>
                    </div>
                    <p className="text-xs text-stone-400 mt-1 line-clamp-1">{r.perceivedLabel}</p>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${
                      r.conflictPotential === 'high'
                        ? 'bg-rose-950/60 text-rose-300 border-rose-800'
                        : r.conflictPotential === 'medium'
                        ? 'bg-amber-950/60 text-amber-300 border-amber-800'
                        : 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                    }`}
                  >
                    Konflikt: {r.conflictPotential.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Role Detail View */}
          <div className="lg:col-span-2 p-5 rounded-2xl bg-stone-800/60 border border-stone-700/80 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-700 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                  Szczegóły Roli
                </span>
                <h4 className="text-lg font-serif font-bold text-white">{selectedRole.roleName}</h4>
              </div>
              <span className="text-xs font-mono text-stone-400 bg-stone-700/60 px-3 py-1 rounded-full">
                Kontekst: {selectedRole.context}
              </span>
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/40">
                <span className="font-mono text-[11px] text-rose-400 font-bold block uppercase mb-1">
                  Obecna Sztywna Etykieta Tożsamościowa:
                </span>
                <p className="text-stone-200 font-serif italic text-base">{selectedRole.perceivedLabel}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-900/40">
                <span className="font-mono text-[11px] text-amber-400 font-bold block uppercase mb-1">
                  Opis Behawioralny (Zachowanie w Środowisku):
                </span>
                <p className="text-stone-300">{selectedRole.behavioralDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reframing' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-stone-800/60 border border-stone-700 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase">
              <Tag className="w-4 h-4" />
              <span>Przekształcanie Etykiety „Jestem Taki” na Opis Behawioralny</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300">
              Wybierz rola i zmodyfikuj definicję zachowania tak, by nie zamrażała możliwości zmiany.
            </p>

            <div className="space-y-2 pt-2">
              <label className="text-xs font-mono text-stone-400 block">Zaktualizuj opis zachowania w roli {selectedRole.roleName}:</label>
              <textarea
                value={selectedRole.behavioralDescription}
                onChange={(e) => handleUpdateLabel(e.target.value)}
                className="w-full p-3 rounded-xl bg-stone-900 border border-stone-700 text-stone-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-amber-500"
                rows={3}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => alert('Opis behawioralny został pomyślnie zaktualizowany na nową hipotezę roboczą!')}
                className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-bold text-xs font-mono transition flex items-center space-x-1.5"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Zapisz Nową Hipotezę</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'conflicts' && (
        <div className="space-y-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700 space-y-2">
            <span className="font-mono text-xs text-rose-400 font-bold uppercase block">
              Konflikt Ról #1: Menedżer vs Przyjaciel
            </span>
            <p className="text-stone-300 leading-relaxed">
              Wymóg bezstronnej oceny wyników zespołu (rola Menedżera) wchodzi w bezpośrednią kolizję z dążeniem do wyrozumiałości i ochrony bliskiego kumpla (rola Przyjaciela).
            </p>
            <div className="p-3 rounded-xl bg-stone-900 border border-stone-700/80 text-amber-200/90 font-serif italic mt-2">
              Rozwiązanie aksjologiczne: Przeprowadź jawny podział kontekstu („Rozmawiamy teraz jako szef i pracownik, a po godzinach wracamy do relacji prywatnej”).
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
