import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import usersActions from '../../redux/actions/usersActions';
import '../../styles/usersForm.css'

function GoogleLogUp(props) {

  const responseGoogle = async (res) => {
    console.log(res)
    const userData = {
      firstname: res.profileObj.givenName,
      lastname: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      from: "google",
      country: "google",
      urlimage: res.profileObj.imageUrl
    }

    await props.signUpUser(userData)
  }

  return (
    <GoogleLogin
      className="btnGoogleDisplay   relative flex justify-center py-1 px-1  text-sm font-medium rounded-md text-black"
      clientId="710252764146-ak1dqlo7bsbbpkviok5c312f299cmbec.apps.googleusercontent.com"
      buttonText=""
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    >
    <div class="social-container">
        <a className="a-usersForm" href="#" class="social a-usersForm">
          <i class="fab fa-google-plus-g"></i>
        </a>
      </div>
    </GoogleLogin>

  );
}

const mapDispatchToProps = {
  signUpUser: usersActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(GoogleLogUp);
