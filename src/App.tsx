import { Layout } from './components/Layout';
import { UploadZone } from './components/UploadZone';
import { FormInputs } from './components/FormInputs';
import { ColorPicker } from './components/ColorPicker';
import { StyleSelector } from './components/StyleSelector';
import { PreviewCanvas } from './components/PreviewCanvas';
import { FloatingActionBar } from './components/FloatingActionBar';
import { AIChatInput } from './components/AIChatInput';
import { useGenerator } from './hooks/useGenerator';

function App() {
  const { state, updateState, generateThumbnails, selectVariant } = useGenerator();

  return (
    <Layout>
      <div className="w-full h-full flex">
        {/* Left Tools Panel */}
        <div className="w-96 min-w-[24rem] h-full overflow-y-auto border-r border-border-default bg-white p-6 flex flex-col gap-8">
          <UploadZone />
          
          <FormInputs 
            title={state.title}
            subtitle={state.subtitle}
            onTitleChange={(v) => updateState({ title: v })}
            onSubtitleChange={(v) => updateState({ subtitle: v })}
          />

          <ColorPicker 
            selectedPreset={state.selectedColorRef}
            customHex={state.customColorHex}
            onPresetSelect={(p) => updateState({ selectedColorRef: p })}
            onCustomColorChange={(h) => updateState({ customColorHex: h, selectedColorRef: 'custom' })}
          />

          <StyleSelector 
            selectedId={state.selectedStyleId}
            onSelect={(id) => updateState({ selectedStyleId: id })}
          />
          
          <button 
            onClick={generateThumbnails}
            disabled={state.isGenerating}
            className="btn-primary w-full mt-4 py-3 shadow-[0px_4px_16px_rgba(99,102,241,0.2)] hover:shadow-[0px_6px_20px_rgba(99,102,241,0.3)] transition-all duration-150"
            style={{ boxShadow: 'none' /* Override according to strict constraints */ }}
          >
            {state.isGenerating ? 'Generating Variants...' : 'Generate Magic'}
          </button>
        </div>

        {/* Right Canvas Panel */}
        <div className="flex-1 h-full relative">
          <PreviewCanvas state={state} onVariantSelect={selectVariant} />
          <FloatingActionBar 
             isGenerating={state.isGenerating} 
             onRegenerate={generateThumbnails} 
          />
          <AIChatInput />
        </div>
      </div>
    </Layout>
  );
}

export default App;
