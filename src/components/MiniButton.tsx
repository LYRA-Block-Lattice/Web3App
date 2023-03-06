import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  HTMLProps,
  ReactNode
} from "react";
import "./MiniButton.css";

interface MiniButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

const MiniButton: FunctionComponent<MiniButtonProps> = ({
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`buttons5  ${disabled ? "button-disabled" : ""} ${className}`}
      {...rest}
    >
      <div className="mini-button6">{children}</div>
    </button>
  );
};

export default MiniButton;
