import { FC, useState } from 'react';
import { FilterCheckbox } from './FilterCheckbox';

export interface ICheckboxOption {
  label: string;
  value: string;
  checked: boolean;
}

interface ICheckboxFilterGroupProps {
  options: ICheckboxOption[];
  title: string;
  limit?: number;
  className?: string;
  onChange?: (label: string, checked: boolean) => void;
}

export const CheckboxFilterGroup: FC<ICheckboxFilterGroupProps> = ({
  options,
  title,
  limit = 5,
  className,
  onChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [localOptions, setLocalOptions] = useState<ICheckboxOption[]>(options);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const visibleOptions = isExpanded ? filteredOptions : filteredOptions.slice(0, limit);

  const handleCheckboxChange = (label: string, checked: boolean) => {
    const updatedOptions = localOptions.map((option) =>
      option.label === label ? { ...option, checked } : option,
    );
    setLocalOptions(updatedOptions);
    if (onChange) onChange(label, checked);
  };

  return (
    <div className={className}>
      <p className="border-b-2 pb-1 font-semibold">{title}</p>

      <input
        type="text"
        placeholder="Пошук..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      />

      {visibleOptions.map((option, index) => (
        <FilterCheckbox
          key={index}
          label={option.label}
          checked={option.checked}
          onChange={(checked) => handleCheckboxChange(option.label, checked)}
          className="mb-1"
        />
      ))}

      {filteredOptions.length > limit && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-primary font-semibold w-full text-center text-sm underline underline-offset-4"
        >
          {isExpanded ? 'Сховати' : 'Показати всі'}
        </button>
      )}
    </div>
  );
};
