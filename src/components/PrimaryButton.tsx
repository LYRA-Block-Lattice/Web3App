import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  HTMLProps,
  ReactNode
} from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`buttons9  ${disabled ? "button-disabled" : ""} ${className}`}
      {...rest}
    >
      <div className="primary-button9">{children}</div>
    <button className="buttons9" onClick={onButtonsClick} style={buttonsStyle}>
      <div className="primary-button2">{primaryButton}</div>
    </button>
  );
};

export default PrimaryButton;
