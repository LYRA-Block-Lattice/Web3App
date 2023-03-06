import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  HTMLProps,
  ReactNode
} from "react";
import "./PrimaryIconButton.css";

interface PrimaryIconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

const PrimaryIconButton: FunctionComponent<PrimaryIconButtonProps> = ({
  icon,
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`buttons6  ${disabled ? "button-disabled" : ""} ${className}`}
      {...rest}
    >
      <img className="evapricetags-outline-icon1" alt="" src={icon} />
      <div className="primary-button3">{children}</div>
    </button>
  );
};

export default PrimaryIconButton;
