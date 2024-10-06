export interface Option {
  label: string; // Display text
  value: string; // Value when selected
}

export interface DropdownProps {
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}
