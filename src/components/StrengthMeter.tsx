import { useEffect, useState } from "react";
import styles from "./styles/StrengthMeter.module.scss";

interface Props {
  password: string;
  length: number;
  checkboxes: {
    lowercase: boolean;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
  };
}

export const StrengthMeter: React.FC<Props> = ({
  password,
  length,
  checkboxes,
}) => {
  const [strength, setStrength] = useState<string>("");

  useEffect(() => {
    if (password) calculateStrength();
  }, [password]);

  const calculateStrength = (): void => {
    let points: number = 0;

    points +=
      length * Object.values(checkboxes).filter((value) => value).length;

    if (points <= 10) {
      setStrength("too weak");
    } else if (points <= 20) {
      setStrength("weak");
    } else if (points <= 30) {
      setStrength("medium");
    } else {
      setStrength("strong");
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.label}>Strength</p>

      <div className={styles.flexPair}>
        <p className={styles.strength}>{strength}</p>

        <div
          data-strength={strength}
          className={styles.blockList}
          aria-hidden="true"
        >
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
        </div>
      </div>
    </div>
  );
};
