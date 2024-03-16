import { Input, Select, ConfigProvider } from "antd";

import Avatar from "../components/avatar/Avatar";
import Header from "../components/header/Header";
import Back from "../components/SVG/Back.svg";

import styles from "./EditProfile.module.scss";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

const EditProfile = () => {
  const [image, setImage] = useState("");
  const [user] = useContext(UserContext);

  console.log(user);

  const onSelectPhotos = (event) => {
    if (event.target.files) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <main className={styles.editProfilePage}>
      <Header image={Back} title="Edit Profile" path="/profile" />
      <section>
        <div className={styles.uploadAvatar}>
          <Avatar avatar={image} large edit />
          <input type="file" name="avatar" onChange={onSelectPhotos} />
        </div>
        <ConfigProvider
          theme={{
            token: {
              lineHeight: 4,
              colorPrimary: "#ff4d67",
              colorBgContainer: "#fafafa",
            },
          }}
        >
          <form>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
            <Input
              type="text"
              name="userName"
              id="userName"
              placeholder="User Name"
            />
            <Input
              type="date"
              name="birthday"
              id="birthday"
              placeholder="dd.mm.yyyy"
            />

            <Input type="email" name="email" id="email" placeholder="Email" />

            <Input
              type="text"
              name="telephoneNumber"
              id="telephoneNumber"
              placeholder="Telephone Number"
            />

            <Select
              style={{ color: "red" }}
              className={styles.selectField}
              variant="borderless"
              placeholder="Gender"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />

            <Input
              type="text"
              name="website"
              id="website"
              placeholder="Website"
            />
          </form>
        </ConfigProvider>
        <button className="primaryButton">Update</button>
      </section>
    </main>
  );
};

export default EditProfile;
