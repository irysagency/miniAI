import { newStyles } from '../../data/styles';
import { StyleCard } from './StyleCard';

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function StyleGrid({ selectedId, onSelect }: Props) {
  return (
    <div className="grid grid-cols-4 gap-5">
      {newStyles.map(style => (
        <StyleCard
          key={style.id}
          style={style}
          isSelected={selectedId === style.id}
          onClick={() => onSelect(style.id)}
        />
      ))}
    </div>
  );
}
