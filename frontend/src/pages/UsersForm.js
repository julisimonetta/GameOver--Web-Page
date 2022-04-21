import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import userActions from "../redux/actions/usersActions";
import axios from "axios";
import "../styles/usersForm.css";
import Paises from "./apiPaises";
import Swal from "sweetalert2";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ImKey } from "react-icons/im";
import {
  AiOutlineMail,
  AiFillFileImage,
  AiFillEdit,
  AiOutlineGlobal,
} from "react-icons/ai";

import GoogleSignUp from "../components/general/GoogleSignUp.js";
import GoogleLogIn from "../components/general/GoogleLogIn.js";

const UsersForm = (props) => {
  const [selectCountry, setSelectCountry] = useState("unselected");
  function selected(event) {
    setSelectCountry(event.target.value);
  }

  //API COUNTRIES
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data))
      .catch((error) => console.log(error));
  }, []);

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [urlimage, setUrlimage] = useState("");
  const [country, setCountry] = useState("");
  const [avatarFile, setAvatarFile] = useState(undefined);

  const [hidden, setHidden] = useState(true);

  const handleSubmit = (event) => {
    console.log(event.target[4].files)
    event.preventDefault();
    const userData = {
      firstname: event.target[1].value,
      lastname: event.target[2].value,
      country: event.target[3].value,
      urlimage: 'mock_user_image',
      email: event.target[6].value,
      password: event.target[7].value,
      from: "form-Signup",
    };
    props.signUpUser(userData);
    if (
      [lastname, firstname, email, password, urlimage, country].includes("")
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 3000,
        background: "#FFF",
        iconColor: "rgb(238, 76, 103)",
        confirmButtonColor: "rgb(221, 46, 113)",
        timerProgressBar: true,

        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: `You must fill all the fields!`,
      });
    } else {
      const logedUser = {
        email: event.target[1].value,
        password: event.target[2].value,
        from: "form-Login",
      };
      props.signInUser(logedUser);
    }
  };

  // window.scrollTo({ top: 0, behavior: "smooth" });

  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  const handleSubmitSignIn = (event) => {
    event.preventDefault();

    if ([emailSignIn, passwordSignIn].includes("")) {
      const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 3000,
        background: "#FFF",
        iconColor: "rgb(238, 76, 103)",
        confirmButtonColor: "rgb(221, 46, 113)",
        timerProgressBar: true,

        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: `You must fill all the fields!`,
      });
    } else {
      const logedUser = {
        email: event.target[0].value,
        password: event.target[1].value,
        from: "form-Login",
      };
      props.signInUser(logedUser);
    }
  };

  //FUNCTION CARD FORM
  setTimeout(() => {
    document.getElementById("flip-card-btn-turn-to-back").style.visibility =
    "visible";
  document.getElementById("flip-card-btn-turn-to-front").style.visibility =
    "visible";
  document.getElementById("flip-card-btn-turn-to-back").onclick =
    function () {
      document.getElementById("flip-card").classList.toggle("do-flip");
    };

  document.getElementById("flip-card-btn-turn-to-front").onclick =
    function () {
      document.getElementById("flip-card").classList.toggle("do-flip");
    };
  },200);

  //Function Scroll
  async function setSignIn(event) {
    const container = document.getElementById("containerUsersForm");
    container.classList.remove("right-panel-active");
  }

  async function setSignUp(event) {
    const container = document.getElementById("containerUsersForm");
    container.classList.add("right-panel-active");
  }

  return (
    <>
      <div className="backgroundForm fullForm">
        <div className="container-usersForm " id="containerUsersForm">
          <div className="usersForm-container sign-up-container">
            <form className="SignForm" onSubmit={handleSubmit}>
              <h1 className="h1-usersForm">Create Account</h1>
              <GoogleSignUp />
              <span className="span-usersForm">
                or use your email for registration
              </span>
              <div className="formIconsContainer">
                <AiFillEdit className="iconsmargin" />
                <input
                  className="input-usersForm"
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="formIconsContainer">
                <AiFillEdit className="iconsmargin" />
                <input
                  className="input-usersForm"
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
                <div className="formIconsContainer">
                  <AiOutlineGlobal className="iconsmargin" />
                  <select
                    className="input-usersForm"
                    name="select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="value" defaultValue disabled>
                      Select your country
                    </option>
                    {countries.map((country, key) => {
                      return (
                        <option
                          className="input-usersForm"
                          key={key}
                          value={country.name}
                        >
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              <div className="formIconsContainer file">
                <AiFillFileImage className="iconsmargin iconimage" />
                <input
                  className="input-usersForm file-child"
                  type="file"
                  placeholder="Url Image"
                  name="urlimage"
                  value={urlimage}
                  onChange={(e) => setAvatarFile(e.target.files[0].name)}
                  style={{display: "none"}}
                  id="file-upload-01"
                />
              <button className="file-upload-button" type="button" onClick={() => document.getElementById("file-upload-01").click()}>{avatarFile ? avatarFile : "Upload profile picture"}</button>

              </div>
              <div className="formIconsContainer">
                <AiOutlineMail className="iconsmargin" />
                <input
                  className="input-usersForm"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formIconsContainer">
                <ImKey className="iconsmargin" />
                <div
                  className="positionhidden"
                  onClick={() => setHidden(!hidden)}
                >
                  {" "}
                  {hidden ? <BsEyeSlash /> : <BsEye />}
                </div>
                <input
                  name="password"
                  className="input-usersForm "
                  placeholder="Password"
                  type={hidden ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="button-usersForm"
                type="submit"
                value="Sign up"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="usersForm-container sign-in-container">
            <form className="SignForm" onSubmit={handleSubmitSignIn}>
              <h1 className="h1-usersForm">Sign in</h1>
              <div className="social-container">
                <GoogleLogIn />
              </div>
              <span className="span-usersForm">or use your account</span>
              <div className="formIconsContainer">
                <AiOutlineMail className="iconsmargin" />
                <input
                  className="input-usersForm"
                  type="email"
                  placeholder="Email"
                  value={emailSignIn}
                  onChange={(e) => setEmailSignIn(e.target.value)}
                />
              </div>
              <div className="formIconsContainer">
                <ImKey className="iconsmargin" />
                <div
                  className="positionhidden"
                  onClick={() => setHidden(!hidden)}
                >
                  {" "}
                  {hidden ? <BsEyeSlash /> : <BsEye />}
                </div>
                <input
                  className="input-usersForm"
                  type={hidden ? "password" : "text"}
                  placeholder="Password"
                  value={passwordSignIn}
                  onChange={(e) => setPasswordSignIn(e.target.value)}
                />
              </div>
              <button
                className="button-usersForm"
                type="submit"
                value="Sign in"
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h1-usersForm">Welcome Back!</h1>
                <p className="p-usersForm">
                  It's nice to see you again, please enter your credentials to sign in 
                </p>
                <button
                  className="button-usersForm ghost"
                  id="signIn"
                  onClick={setSignIn}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="h1-usersForm">Hello, Friend!</h1>
                <p className="p-usersForm">
                  Enter your personal details and start your journey with us
                </p>
                <button
                  className="button-usersForm ghost"
                  id="signUp"
                  onClick={setSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARD FORM RESPONSIVE */}

      <div className="backgroundForm formResponsive">
        <div className="flip-card-3D-wrapper">
          <div id="flip-card" className="container-usersFormResp ">
            <div className="flip-card-front usersFormResp-container resp-sign-in-container">
              <form className="SignForm" onSubmit={handleSubmitSignIn}>
                <h1 className="h1-usersForm">Sign in</h1>
                <div className="social-container">
                  <GoogleLogIn />
                </div>
                <span className="span-usersForm">or use your account</span>
                <div className="formIconsContainer">
                <AiOutlineMail className="iconsmargin" />
                <input
                  className="input-usersForm"
                  type="email"
                  placeholder="Email"
                  value={emailSignIn}
                  onChange={(e) => setEmailSignIn(e.target.value)}
                />
                </div>
                <div className="formIconsContainer">
                <ImKey className="iconsmargin" />
                <div
                  className="positionhidden"
                  onClick={() => setHidden(!hidden)}
                >
                  {" "}
                  {hidden ? <BsEyeSlash /> : <BsEye />}
                </div>
                <input
                  className="input-usersForm"
                  type={hidden ? "password" : "text"}
                  placeholder="Password"
                  value={passwordSignIn}
                  onChange={(e) => setPasswordSignIn(e.target.value)}
                />
                </div>
                <button
                  className="button-usersForm"
                  type="submit"
                  value="Sign in"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  id="flip-card-btn-turn-to-back"
                  className="button-usersForm flip-card-btn-turn-to-back"
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="flip-card-back usersFormResp-container resp-sign-up-container">
              <form className="SignForm" onSubmit={handleSubmit}>
                <h1 className="h1-usersForm">Create Account</h1>
                <GoogleSignUp />
                <span className="span-usersForm">
                  or use your email for registration
                </span>
                <div className="formIconsContainer">
                <AiFillEdit className="iconsmargin" />
                <input
                  className="input-usersForm"
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                </div>
                <div className="formIconsContainer">
                <AiFillEdit className="iconsmargin" />
                <input
                  className="input-usersForm"
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                </div>
                <div className="inputSelect">
                <div className="formIconsContainer">
                <AiOutlineGlobal className="iconsmargin" />
                  <select
                    className="input-usersForm"
                    name="select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="value" defaultValue disabled>
                      Select your country
                    </option>
                    {countries.map((country, key) => {
                      return (
                        <option
                          className="input-usersForm"
                          key={key}
                          value={country.name}
                        >
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
                  </div>
                </div>
                <div className="formIconsContainer">
                <AiFillFileImage className="iconsmargin" />
                <input
                  className="input-usersForm file-child"
                  type="file"
                  placeholder="Url Image"
                  name="urlimage"
                  value={urlimage}
                  onChange={(e) => setAvatarFile(e.target.files[0].name)}
                  style={{display: "none"}}
                  id="file-upload-02"
                />
                <button className="file-upload-button" type="button" onClick={() => document.getElementById("file-upload-02").click()}>{avatarFile ? avatarFile : "Upload profile picture"}</button>
                </div>
                <div className="formIconsContainer">
                <AiOutlineMail className="iconsmargin" />
                <input
                  className="input-usersForm"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="formIconsContainer">
                <ImKey className="iconsmargin" />
                <div
                  className="positionhidden"
                  onClick={() => setHidden(!hidden)}
                >
                  {" "}
                  {hidden ? <BsEyeSlash /> : <BsEye />}
                </div>
                <input
                  className="input-usersForm"
                  type={hidden ? "password" : "text"}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button
                  className="button-usersForm"
                  type="submit"
                  value="Sign up"
                >
                  Sign Up
                </button>
                <button
                  id="flip-card-btn-turn-to-front"
                  className="button-usersForm flip-card-btn-turn-to-back"
                  type="button"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer.user,
  };
};

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
  signInUser: userActions.signInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm);
