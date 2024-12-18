'use client';

import { FC, useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import cn from 'clsx';

interface IProps {
  className?: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const FilterCheckbox: FC<IProps> = ({ className, label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) onChange(newChecked);
  };

  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      <input type="checkbox" checked={isChecked} className="hidden" onChange={handleChange} />
      <div
        className={`w-4 h-4 mr-2 border rounded flex items-center justify-center ${
          isChecked ? 'bg-secondaryDark2 border-gray-100' : 'bg-white border-gray-400'
        }`}
      >
        {isChecked ? <Check className="text-white" /> : ''}
      </div>
      <span className={cn(isChecked ? 'text-secondaryDark2 font-semibold' : '')}>{label}</span>
    </label>
  );
};
