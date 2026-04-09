import { useState } from 'react';
import type { StudioStep, GeneratorConfig } from '../types';

const DEFAULT_CONFIG: GeneratorConfig = {
  title: '',
  subtitle: '',
  selectedStyleId: null,
  selectedPersonaId: null,
  backgroundMode: 'ai',
  colorPreset: 'preset1',
  customColorHex: '#4F46E5',
};

export function useStudioFlow() {
  const [step, setStep] = useState<StudioStep>(1);
  const [config, setConfig] = useState<GeneratorConfig>(DEFAULT_CONFIG);

  function updateConfig(updates: Partial<GeneratorConfig>) {
    setConfig(prev => ({ ...prev, ...updates }));
  }

  function goToStep(s: StudioStep) {
    setStep(s);
  }

  function goNext() {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
  }

  function goBack() {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
    else if (step === 'editor') setStep(3);
  }

  return { step, config, updateConfig, goToStep, goNext, goBack };
}
