import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  inverted?: boolean;
}

const Button = ({ children, type, disabled, onClick, className, inverted=false }: ButtonProps) => {
  return (
    <button
      className={`${disabled ? 'bg-[#a9a9a9] text-white' : inverted ? 'bg-white text-black' : 'bg-darkBlue text-white'} 
      hover:shadow-form rounded-[4px] w-full flex justify-center  py-2 px-2 text-center text-base font-semibold outline-none ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
