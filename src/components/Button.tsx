import styles from "./styles/Button.module.scss";

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => any;
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.children}
      <span className={styles.icon}>{props.icon}</span>
    </button>
  );
};
