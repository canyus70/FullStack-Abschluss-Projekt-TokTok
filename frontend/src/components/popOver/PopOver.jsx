import Archive from "../SVG/Archive.svg";
import Activity from "../SVG/Activity.svg";
import qrCode from "../SVG/qrCode.svg";
import Saved from "../SVG/Saved.svg";
import Friends from "../SVG/Friends.svg";
import Favorites from "../SVG/Favorites.svg";

const PopOver = () => {
  return (
    <div className="popOver">
      <div>
        <div>
          <img src={Archive} alt="archive" />
          <h2>Archive</h2>
        </div>
        <div>
          <img src={Activity} alt="activity" />
          <h2>Your Activity</h2>
        </div>
        <div>
          <img src={qrCode} alt="QR-Code" />
          <h2>QR Code</h2>
        </div>
        <div>
          <img src={Saved} alt="saved" />
          <h2>Saved</h2>
        </div>
        <div>
          <img src={Friends} alt="friends" />
          <h2>Close Friends</h2>
        </div>
        <div>
          <img src={Favorites} alt="favorites" />
          <h2>Favorites</h2>
        </div>
      </div>
    </div>
  );
};

export default PopOver;
