import { ChevronLeft, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStudioFlow } from '../hooks/useStudioFlow';
import { StepIndicator } from '../components/studio/StepIndicator';
import { StyleGrid } from '../components/studio/StyleGrid';
import { AvatarSelector } from '../components/studio/AvatarSelector';
import { ConfigPanel } from '../components/studio/ConfigPanel';
import { ResultsPanel } from '../components/studio/ResultsPanel';
import { EditorPanel } from '../components/studio/EditorPanel';
import { mockPersonas } from '../data/mockPersonas';

export function StudioPage() {
  const navigate = useNavigate();
  const { step, config, updateConfig, goNext, goBack, goToStep } = useStudioFlow();

  /* ── Step 1: Style selection ────────────────────────── */
  if (step === 1) {
    return (
      <div className="px-12 pt-10 pb-24">
        <StepIndicator currentStep={step} />
        <h1 className="text-4xl font-bold text-[#111827] mb-2 tracking-tight">
          Choose your visual direction
        </h1>
        <p className="text-sm text-[#6B7280] mb-8">
          Select a style template to apply to your project assets.
        </p>
        <StyleGrid
          selectedId={config.selectedStyleId}
          onSelect={id => {
            updateConfig({ selectedStyleId: id });
            goNext();
          }}
        />
      </div>
    );
  }

  /* ── Step 2: Configure ──────────────────────────────── */
  if (step === 2) {
    const selectedPersonaId = config.selectedPersonaId ?? mockPersonas[0].id;
    return (
      <div className="px-12 pt-10 pb-24">
        <button
          onClick={goBack}
          className="flex items-center gap-1 text-sm text-[#9CA3AF] hover:text-[#111827] mb-4 transition-colors"
        >
          <ChevronLeft size={15} /> Retour au style
        </button>
        <StepIndicator currentStep={step} />
        <h1 className="text-4xl font-bold text-[#111827] mb-2 tracking-tight">
          Configure ta miniature
        </h1>
        <p className="text-sm text-[#6B7280] mb-8">
          Personnalise le contenu et l'apparence.
        </p>

        <div className="flex flex-col gap-8 max-w-xl">
          <AvatarSelector
            personas={mockPersonas}
            selectedId={selectedPersonaId}
            onSelect={id => updateConfig({ selectedPersonaId: id })}
            onCreateNew={() => navigate('/personas')}
          />
          <ConfigPanel config={config} onChange={updateConfig} />
        </div>

        <button
          onClick={goNext}
          disabled={!config.title.trim()}
          className="mt-10 flex items-center gap-2 bg-[#4F46E5] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#4338CA] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Sparkles size={16} />
          Générer mes miniatures
        </button>
      </div>
    );
  }

  /* ── Step 3: Results + inline editor ───────────────── */
  return (
    <div className="px-12 pt-10 pb-24">
      <button
        onClick={goBack}
        className="flex items-center gap-1 text-sm text-[#9CA3AF] hover:text-[#111827] mb-4 transition-colors"
      >
        <ChevronLeft size={15} /> Retour à la configuration
      </button>
      <StepIndicator currentStep={step} />
      <h1 className="text-4xl font-bold text-[#111827] mb-6 tracking-tight">Tes miniatures</h1>
      <ResultsPanel config={config} onEdit={() => goToStep('editor')} />

      {step === 'editor' && <EditorPanel onClose={() => goToStep(3)} />}
    </div>
  );
}
