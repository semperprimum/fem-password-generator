import { useState } from "react";
import styles from "./styles/Checkbox.module.scss";

interface Props {
  value: string;
  children: React.ReactNode;
  checked?: boolean;
  onChange: (value: string, checked: boolean) => void;
}

export const Checkbox: React.FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.checked || false);

  const checkHandler = (): void => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    props.onChange(props.value, newValue);
  };

  return (
    <label className={styles.label}>
      <input
        onChange={checkHandler}
        checked={isChecked}
        type="checkbox"
        name={props.value}
        value={props.value}
        className={styles.checkbox}
      />
      {props.children}
    </label>
  );
};
