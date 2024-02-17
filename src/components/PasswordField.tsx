import { Container } from ".";
import styles from "./styles/PasswordField.module.scss";
// @ts-ignore
import IconCopy from "../assets/images/icon-copy.svg?react";

interface Props {
  password: string;
  copied: boolean;
  setCopied: any;
}

export const PasswordField: React.FC<Props> = (props) => {
  const onCopy = (): void => {
    if (!props.password) return;
    navigator.clipboard.writeText(props.password);
    props.setCopied(true);
  };

  return (
    <Container smallPadding={true}>
      <div className={styles.flexPair}>
        {!props.password ? (
          <h2 className={`${styles.password} ${styles.muted}`}>P4$5W0rD!</h2>
        ) : (
          <h2 className={styles.password}>{props.password}</h2>
        )}
        <div className={styles.flexPair}>
          <p
            style={!props.copied ? { display: "none" } : {}}
            className={styles.copied}
          >
            Copied
          </p>
          <button onClick={onCopy} className={styles.copyBtn}>
            <IconCopy />
          </button>
        </div>
      </div>
    </Container>
  );
};
