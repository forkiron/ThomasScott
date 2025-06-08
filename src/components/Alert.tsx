import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="">
      {children}
      <button onClick={onClose} className="btn-close"></button>
    </div>
  );
};

export default Alert;
