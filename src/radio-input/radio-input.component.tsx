import { useState } from 'react'
interface RadioInputProps {
  value: string | number;
  disabled: boolean;
  checked: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleChange: Function;
  divClassName?: string;
  labelType?: 'label' | 'input';
  label?: string;
  name: string;
  width?: string | number;
}

const RadioInput = ({ value, disabled, checked, divClassName, handleChange, labelType='label', label, name, width }: RadioInputProps) => {
  const [inputVal, setInputVal] = useState(value);

  const handleInput = (value) => {
    setInputVal(value);
    handleChange(value);
  }

  return (
    <div className={`flex items-center gap-1 ${divClassName}`}>
        <input disabled={disabled}  type="radio" id={value.toLocaleString()} name={name} value={value} checked={width ? inputVal == width : checked} onChange={(e) => handleChange(e.target.value)} />
        {
            labelType == 'input' ? <input value={inputVal} onChange={(e) => handleInput(e.target.value)} className={`text-end px-1 w-[60px] border-lightGray border-2 ${(width ? inputVal == width : checked) ? '' : 'text-lightGray'}`} /> : <label className={checked ? '' : 'text-lightGray'}>{label}</label> 
        }
    </div>
  );
};

export default RadioInput;
