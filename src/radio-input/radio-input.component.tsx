interface RadioInputProps {
value: string | number;
  disabled: boolean;
  checked: boolean;
  handleChange: Function;
  divClassName?: string;
  labelType?: 'label' | 'input',
  label?: string,
  name: string
}

const RadioInput = ({ value, disabled, checked , divClassName, handleChange, labelType='label', label, name }: RadioInputProps) => {
  return (
    
    <div className={`flex items-center gap-1 ${divClassName}`}>
        <input disabled={disabled}  type="radio" id={value} name={name} value={value} checked={checked} onChange={(e) => handleChange(e.target.value)} />
        {
            labelType == 'label' ? <label className={checked ? '' : 'text-lightGray'}>{label}</label> : <input />
        }
    </div>
  );
};

export default RadioInput;
