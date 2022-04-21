import React from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import usersActions from "../../redux/actions/usersActions";

import { LoginSocialGoogle } from "reactjs-social-login";

function GoogleLogIn(props) {
  const responseGoogle = async (res) => {
    const logedUser = {
      email: res.email,
      password: res.id,
      from: "google",
    };
    await props.signInUser(logedUser);
  };

  return (
    <LoginSocialGoogle
      client_id="710252764146-ak1dqlo7bsbbpkviok5c312f299cmbec.apps.googleusercontent.com"
      onResolve={({ provider, data }) => {
        console.log(data);
        responseGoogle(data);
      }}
    >
      <div class="social-container">
        <a className="a-usersForm" href="#" class="social a-usersForm">
          <i class="fab fa-google-plus-g"></i>
        </a>
      </div>
    </LoginSocialGoogle>
  );
}

const mapDispatchToProps = {
  signInUser: usersActions.signInUser,
};

export default connect(null, mapDispatchToProps)(GoogleLogIn);
