//Buton.tsx
import { ReactNode } from "react";
import { bsButtonStrength } from "../models/bsButtonStrength";

interface ButtonProps {
  children: ReactNode;
  strength: bsButtonStrength;
  onClick: () => void;
}

const Button = ({ children, strength, onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={strength}>
      {children}
    </button>
  );
};

export default Button;
