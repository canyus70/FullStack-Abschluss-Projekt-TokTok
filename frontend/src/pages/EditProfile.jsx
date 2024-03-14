import Avatar from "../components/avatar/Avatar";
import Header from "../components/header/Header";
import Back from "../components/SVG/Back.svg";

import styles from "./EditProfile.module.scss";

const EditProfile = () => {
  return (
    <main className={styles.editProfilePage}>
      <Header image={Back} title="Edit Profile" path="/profile" />
      <section>
        <Avatar large edit />
        {/* <form>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          className="reg-input"
          placeholder="First Name"
        />
        <Input
          type="text"
          name="lastName"
          id="lastName"
          className="reg-input"
          placeholder="Last Name"
        />
        <Input
          type="text"
          name="userName"
          id="userName"
          className="reg-input"
          placeholder="User Name"
        />
        <Input
          type="date"
          name="birthday"
          id="birthday"
          className="reg-input"
          placeholder="Birthday"
        />

        <Input
          type="email"
          name="email"
          id="email"
          className="reg-input"
          placeholder="Email"
        />

        <Input
          type="text"
          name="telephoneNumber"
          id="telephoneNumber"
          className="reg-input"
          placeholder="Telephone Number"
        />
        <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <Input
          type="text"
          name="website"
          id="website"
          className="reg-input"
          placeholder="Website"
        />
      </form> */}
        <button className="primaryButton">Update</button>
      </section>
    </main>
  );
};

export default EditProfile;
