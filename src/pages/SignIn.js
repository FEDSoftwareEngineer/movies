import React, { useState } from "react";
import Background from "../components/Background";
import thepredatorHero from "../Images/signinBg2.webp";
import LQthepredatorHero from "../Images/lowq/LQsigninBg.webp";
import style from "../styles/Signin.module.css";

export default function SignIn() {
  const [isAlert, setIsAlert] = useState(false);
  return (
    <div className={style.signin}>
      <Background
        image={thepredatorHero}
        lqImage={LQthepredatorHero}
        title="signin"
        bgClass="signinBg"
      />
      <div className={style.signinBox}>
        <div className="mAlert" style={{ display: isAlert ? "flex" : "none" }}>
          <p className="alert alert-danger" style={{ display: "flex" }}>
            this is a demo site you cannot sign up/in
          </p>
        </div>
        <form>
          <h1>Sign In</h1>
          <div className={style.signinItems}>
            <input
              required
              type="text"
              name="username"
              placeholder="username"
            />
          </div>
          <div className={style.signinItems}>
            <input
              required
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <button
            type="button"
            onClick={() => {
              setIsAlert(true);
            }}
            className={style.signinBtn}
          >
            Sign in
          </button>
          <p className={style.signinNA}>
            Dont have an account?{" "}
            <span className="signupBtn" onClick={() => setIsAlert(true)}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
