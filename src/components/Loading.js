import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader type="Puff" color="#667eea" height={100} width={100} />
    </div>
  );
};

export default Loading;
