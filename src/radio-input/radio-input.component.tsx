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
}

const RadioInput = ({ value, disabled, checked , divClassName, handleChange, labelType='label', label, name }: RadioInputProps) => {
  return (
    
    <div className={`flex items-center gap-1 ${divClassName}`}>
        <input disabled={disabled}  type="radio" id={value.toLocaleString()} name={name} value={value} checked={checked} onChange={(e) => handleChange(e.target.value)} />
        {
            labelType == 'input' && <input value={value} onChange={() => {}} className={`text-end px-1 w-[50px] border-lightGray border-2 ${checked ? '' : 'text-lightGray'}`} /> 
        }
        <label className={checked ? '' : 'text-lightGray'}>{label}</label> 
    </div>
  );
};

export default RadioInput;
