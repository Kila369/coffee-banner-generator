import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = ({ children, type, disabled, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`${disabled ? 'bg-[#a9a9a9]' : 'bg-darkBlue'} 
      hover:shadow-form rounded-[4px] w-full flex justify-center  py-2 px-4 text-center text-base font-semibold text-white outline-none ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
