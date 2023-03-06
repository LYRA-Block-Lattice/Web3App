import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  HTMLProps,
  ReactNode
} from "react";
import "./SecondaryButton.css";

interface SecondaryButtonType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

const SecondaryButton: FunctionComponent<SecondaryButtonType> = ({
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`buttons3  ${disabled ? "button-disabled" : ""} ${className}`}
      {...rest}
    >
      <div className="secondary-button">{children}</div>
    </button>
  );
};

export default SecondaryButton;
