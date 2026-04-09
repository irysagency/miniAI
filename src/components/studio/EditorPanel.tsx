import { Undo2, Redo2, Eye, EyeOff, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useEditor } from '../../hooks/useEditor';

interface Props {
  onClose: () => void;
}

const FONTS = ['Inter', 'Roboto', 'Montserrat', 'Playfair Display', 'Space Grotesk'];

export function EditorPanel({ onClose }: Props) {
  const { state, update, undo, redo, canUndo, canRedo } = useEditor();

  return (
    <div className="fixed top-0 right-0 bottom-0 w-[400px] bg-white border-l border-[#E5E7EB] shadow-2xl z-50 flex flex-col animate-slide-in-right">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E7EB] shrink-0">
        <span className="font-semibold text-sm text-[#111827]">Éditeur</span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={undo}
            disabled={!canUndo}
            title="Annuler"
            className="p-1.5 rounded-lg hover:bg-gray-50 disabled:opacity-30 text-[#6B7280]"
          >
            <Undo2 size={15} />
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            title="Refaire"
            className="p-1.5 rounded-lg hover:bg-gray-50 disabled:opacity-30 text-[#6B7280]"
          >
            <Redo2 size={15} />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-red-50 text-[#9CA3AF] hover:text-red-500 ml-1"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
        {/* Texte */}
        <section>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">
            Texte
          </h4>
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs text-[#6B7280] mb-1 block">Police</label>
              <select
                value={state.fontFamily}
                onChange={e => update({ fontFamily: e.target.value })}
                className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2 text-sm text-[#111827] focus:outline-none focus:border-[#4F46E5]"
              >
                {FONTS.map(f => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-[#6B7280] mb-1 block">Taille</label>
                <input
                  type="number"
                  min={12}
                  max={120}
                  value={state.fontSize}
                  onChange={e => update({ fontSize: Number(e.target.value) })}
                  className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#4F46E5]"
                />
              </div>
              <div>
                <label className="text-xs text-[#6B7280] mb-1 block">Couleur</label>
                <input
                  type="color"
                  value={state.textColor}
                  onChange={e => update({ textColor: e.target.value })}
                  className="w-full h-9 border border-[#E5E7EB] rounded-xl cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fond */}
        <section>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">
            Fond
          </h4>
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs text-[#6B7280] mb-1 block">
                Opacité overlay ({state.bgOpacity}%)
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={state.bgOpacity}
                onChange={e => update({ bgOpacity: Number(e.target.value) })}
                className="w-full accent-[#4F46E5]"
              />
            </div>
            <div>
              <label className="text-xs text-[#6B7280] mb-1 block">Couleur overlay</label>
              <input
                type="color"
                value={state.bgColorOverlay}
                onChange={e => update({ bgColorOverlay: e.target.value })}
                className="w-full h-9 border border-[#E5E7EB] rounded-xl cursor-pointer"
              />
            </div>
          </div>
        </section>

        {/* Photo créateur */}
        <section>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">
            Photo créateur
          </h4>
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs text-[#6B7280] mb-1 block">
                Taille ({state.creatorPhotoSize}%)
              </label>
              <input
                type="range"
                min={20}
                max={100}
                value={state.creatorPhotoSize}
                onChange={e => update({ creatorPhotoSize: Number(e.target.value) })}
                className="w-full accent-[#4F46E5]"
              />
            </div>
            <div>
              <label className="text-xs text-[#6B7280] mb-1 block">Position</label>
              <div className="flex gap-2">
                {(['left', 'center', 'right'] as const).map(pos => (
                  <button
                    key={pos}
                    onClick={() => update({ creatorPhotoPosition: pos })}
                    className={cn(
                      'flex-1 py-1.5 rounded-xl text-xs font-medium border transition-all',
                      state.creatorPhotoPosition === pos
                        ? 'bg-[#4F46E5] text-white border-[#4F46E5]'
                        : 'border-[#E5E7EB] text-[#6B7280] hover:border-[#4F46E5]/40'
                    )}
                  >
                    {pos}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calques */}
        <section>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">
            Calques
          </h4>
          <div className="flex flex-col gap-1">
            {state.layers.map(layer => (
              <div
                key={layer.id}
                className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm text-[#111827]">{layer.label}</span>
                <button
                  onClick={() =>
                    update({
                      layers: state.layers.map(l =>
                        l.id === layer.id ? { ...l, visible: !l.visible } : l
                      ),
                    })
                  }
                  className="text-[#9CA3AF] hover:text-[#111827] transition-colors"
                >
                  {layer.visible ? <Eye size={14} /> : <EyeOff size={14} />}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
