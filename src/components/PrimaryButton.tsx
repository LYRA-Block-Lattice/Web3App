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
      className={`prepare-sell-order-button25  ${
        disabled ? "button-disabled" : ""
      } ${className}`}
      {...rest}
    >
      <div className="primary-button9">{children}</div>
    </button>
  );
};

export default PrimaryButton;
