import { ChangeEvent, useEffect, useRef } from "react";
import styles from "./styles/Slider.module.scss";

interface Props {
  setLength: any;
  length: number;
}

export const Slider: React.FC<Props> = ({ length, setLength }) => {
  const slider = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (slider.current) {
      const progress: number = (length / parseInt(slider.current.max)) * 100;
      slider.current.style.background = `linear-gradient(to right, var(--clr-accent-green) ${progress}%, var(--clr-neutral-400) ${progress}%)`;
    }
  }, [length]);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(e.target.value));
  };

  return (
    <input
      aria-label="password length"
      ref={slider}
      type="range"
      min={0}
      max={20}
      value={length}
      onChange={onValueChange}
      className={styles.slider}
    />
  );
};
