import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onButtonClick: () => void;
  color: string;
}

const Button = ({ children, onButtonClick, color }: Props) => {
  return (
    <button className={color} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
