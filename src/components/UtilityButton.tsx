import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  HTMLProps,
  ReactNode
} from "react";
import "./UtilityButton.css";

interface UtilityButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

const UtilityButton: FunctionComponent<UtilityButtonProps> = ({
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`buttons4  ${disabled ? "button-disabled" : ""} ${className}`}
      {...rest}
    >
      <div className="utility-button">{children}</div>
    </button>
  );
};

export default UtilityButton;
