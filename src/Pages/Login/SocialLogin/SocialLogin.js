import React from "react";
import "./SocialLogin.css";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}{" "}
      </p>
    );
  }

  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  if (user || user1) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-4">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img className="me-2" style={{ width: "30px" }} src={google} alt="" />
          Google Sign In
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img
            className="me-2"
            style={{ width: "30px" }}
            src={facebook}
            alt=""
          />
          Facebook Sign In
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img className="me-2" style={{ width: "30px" }} src={github} alt="" />
          Github Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
