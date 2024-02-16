import { useState } from "react";
import { Container } from ".";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Slider } from "./Slider";
import styles from "./styles/ModifierForm.module.scss";
// @ts-ignore
import IconArrow from "../assets/images/icon-arrow-right.svg?react";
import { StrengthMeter } from "./StrengthMeter";
import { generatePassword } from "../utils/generatePassword";

import {
  lowercaseLetters,
  uppercaseLetters,
  numbers,
  symbols,
} from "../utils/generatePassword";

interface Props {
  setPassword: any;
  password: string;
  setCopied: any;
}

export const ModifierForm: React.FC<Props> = ({
  password,
  setPassword,
  setCopied,
}) => {
  const [length, setLength] = useState<number>(0);

  const [checkboxes, setCheckboxes] = useState({
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
  });

  const onGeneratePassword = (): void => {
    if (length < 1) return;
    const modifiers = [
      checkboxes.lowercase ? lowercaseLetters : [],
      checkboxes.uppercase ? uppercaseLetters : [],
      checkboxes.numbers ? numbers : [],
      checkboxes.symbols ? symbols : [],
    ];
    setPassword(
      generatePassword(
        modifiers.filter((modifier) => modifier.length > 0),
        length
      )
    );
    setCopied(false);
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setCheckboxes({ ...checkboxes, [value]: checked });
  };

  return (
    <Container>
      <div className={styles.flexPair}>
        <p className={styles.characterLength}>Character Length</p>
        <p className={styles.characterNumber}>{length}</p>
      </div>

      <div className={styles.slider}>
        <Slider length={length} setLength={setLength} />
      </div>

      <div className={styles.checkboxContainer}>
        <Checkbox
          checked={checkboxes.uppercase}
          onChange={handleCheckboxChange}
          value={"uppercase"}
        >
          Include Uppercase Letters
        </Checkbox>
        <Checkbox
          checked={checkboxes.lowercase}
          onChange={handleCheckboxChange}
          value={"lowercase"}
        >
          Include Lowercase Letters
        </Checkbox>
        <Checkbox
          checked={checkboxes.numbers}
          onChange={handleCheckboxChange}
          value={"numbers"}
        >
          Include Numbers
        </Checkbox>
        <Checkbox
          checked={checkboxes.symbols}
          onChange={handleCheckboxChange}
          value={"symbols"}
        >
          Include Symbols
        </Checkbox>
      </div>

      <StrengthMeter
        password={password}
        checkboxes={checkboxes}
        length={length}
      />

      <div className={styles.btn}>
        <Button onClick={onGeneratePassword} icon={<IconArrow />}>
          Generate
        </Button>
      </div>
    </Container>
  );
};
