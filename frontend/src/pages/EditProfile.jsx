import { Input, Select, ConfigProvider } from "antd";

import Avatar from "../components/avatar/Avatar";
import Header from "../components/header/Header";
import Back from "../components/SVG/Back.svg";

import styles from "./EditProfile.module.scss";
import { useContext, useRef, useState } from "react";
import UserContext from "../contexts/UserContext";
import AuthorizationContext from "../contexts/AuthorizationContext";
import fetchUser from "../services/fetchUser";

const EditProfile = () => {
  const ref = useRef();

  const [image, setImage] = useState("");
  const [user, setUser] = useContext(UserContext);
  const [accessToken] = useContext(AuthorizationContext);

  if (!user) return null;

  const onSelectPhotos = (event) => {
    if (event.target.files) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const editProfile = async () => {
    if (!ref.current) return;

    const profile = new FormData(ref.current);

    const response = await fetch(`api/v1/users/${user._id}/profile`, {
      method: "PATCH",
      headers: { authorization: `Bearer ${accessToken}` },
      body: profile,
    });

    await response.json();
    await fetchUser(user._id, setUser, accessToken);
  };

  return (
    <main className={styles.editProfilePage}>
      <Header image={Back} title="Edit Profile" path="/profile" />
      <section>
        <ConfigProvider
          theme={{
            token: {
              lineHeight: 4,
              colorPrimary: "#ff4d67",
              colorBgContainer: "#fafafa",
            },
          }}
        >
          <form ref={ref}>
            <div className={styles.uploadAvatar}>
              <Avatar avatar={image} large edit />
              <input type="file" name="avatar" onChange={onSelectPhotos} />
            </div>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              defaultValue={user.firstname}
            />
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              defaultValue={user.lastname}
            />
            <Input
              type="text"
              name="userName"
              id="userName"
              placeholder="User Name"
              defaultValue={user.username}
            />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              defaultValue={user.email}
            />
            <Input
              type="date"
              name="birthday"
              id="birthday"
              placeholder="dd.mm.yyyy"
              defaultValue={user.birthday}
            />
            <Select
              style={{ color: "red" }}
              className={styles.selectField}
              variant="borderless"
              placeholder="Gender"
              defaultValue={user.gender}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />
            <Input
              type="text"
              name="profession"
              id="profession"
              placeholder="profession"
              defaultValue={user.profession}
            />
            <Input
              type="text"
              name="bio"
              id="bio"
              placeholder="Bio"
              defaultValue={user.bio}
            />
            <Input
              type="text"
              name="telephoneNumber"
              id="telephoneNumber"
              placeholder="Telephone Number"
              defaultValue={user.phonenumber}
            />
            <Input
              type="text"
              name="website"
              id="website"
              placeholder="Website"
              defaultValue={user.website}
            />
          </form>
        </ConfigProvider>
        <button type="button" className="primaryButton" onClick={editProfile}>
          Update
        </button>
      </section>
    </main>
  );
};

export default EditProfile;
