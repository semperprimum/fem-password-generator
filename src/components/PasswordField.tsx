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
    navigator.clipboard.writeText(props.password);
    props.setCopied(true);
  };

  return (
    <Container smallPadding={true}>
      <div className={styles.flexPair}>
        <h2 className={styles.password}>{props.password}</h2>
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
