export interface dropDownProps {
  name: string;
  arrows: string[];
  className?: string;
  list: string[];
  icons?: string[];
}

export interface buttonStyledProps {
  type: string;
}

export interface modalProps {
  children: React.ReactNode;
  handleClose: () => void;
  modalState: boolean;
}
