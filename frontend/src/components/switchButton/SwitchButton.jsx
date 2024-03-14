import { useState } from "react";
import clsx from "clsx";

import styles from "./SwitchButton.module.scss";

const SwitchButton = () => {
  const [on, setOn] = useState(false);

  return (
    <div
      className={clsx(styles.switchButton, { [styles.buttonON]: on })}
      onClick={() => setOn(!on)}
    >
      <div></div>
    </div>
  );
};

export default SwitchButton;
