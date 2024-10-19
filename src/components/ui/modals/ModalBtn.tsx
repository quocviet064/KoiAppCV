import { ReactNode } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string | ReactNode;
  onClick: () => void;
  disable?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType; // Type for React icons
}

const ModalButton = ({
  label,
  onClick,
  disable = false,
  outline = false,
  small = false,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full
        ${outline ? "bg-white" : "bg-primary"}
        ${outline ? "border-black" : "border-primary"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "py-1" : "py-3"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
        `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default ModalButton;
