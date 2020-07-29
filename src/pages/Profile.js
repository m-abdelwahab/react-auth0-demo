import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, email, picture } = user;
  return (
    <div className="h-screen flex flex-col mx-auto items-center justify-center">
      <h1 className="mb-10 text-5xl">Your Profile</h1>
      <img className="rounded-full w-32 h-32" src={picture} alt="" />
      <h1 className="text-3xl">Name: {name}</h1>
      <p className="font-bold">E-mail: {email}</p>
    </div>
  );
};

export default Profile;
