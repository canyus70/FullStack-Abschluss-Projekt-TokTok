import { useState } from "react";

import HeartRed from "../SVG/HeartRed.svg";
import Heart from "../SVG/Heart.svg";
import RedSaved from "../SVG/RedSaved.svg";
import Saved from "../SVG/Saved.svg";

const toggle = (getter, setter) => {
  setter(!getter);
  return getter;
};

export const ToggleLike = () => {
  const [like, setLike] = useState(false);

  return (
    <button onClick={() => toggle(like, setLike)}>
      {like ? (
        <img src={HeartRed} alt="HeartRed" />
      ) : (
        <img src={Heart} alt="heart" />
      )}
    </button>
  );
};

export const ToggleSaved = () => {
  const [saved, setSaved] = useState(false);

  return (
    <button onClick={() => toggle(saved, setSaved)}>
      {saved ? (
        <img src={RedSaved} alt="redSaved" />
      ) : (
        <img src={Saved} alt="saved" />
      )}
    </button>
  );
};
