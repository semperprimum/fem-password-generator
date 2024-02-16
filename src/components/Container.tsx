import { FC } from "react";
import styles from "./styles/Container.module.scss";

interface Props {
  children?: React.ReactNode;
  smallPadding?: boolean;
}

export const Container: FC<Props> = (props) => {
  return (
    <>
      <div
        className={`${styles.container} ${
          props.smallPadding && styles.smallPadding
        }`}
      >
        {props.children}
      </div>
    </>
  );
};
