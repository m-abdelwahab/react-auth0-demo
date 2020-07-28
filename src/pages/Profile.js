import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, email, picture } = user;
  return (
    <div>
      <img src={picture} alt="" />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Profile;
