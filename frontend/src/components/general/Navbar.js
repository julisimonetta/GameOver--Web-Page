import React, { useEffect, useState } from "react";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../../styles/navbar.css";
import userActions from "../../redux/actions/usersActions";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Swal from "sweetalert2";

function Navbar(props) {
  const [list, setList] = useState();
  const [indicatorExtraClass, setIndicatorExtraClass] = useState('')
  const location = useLocation();

  useEffect(() => {
    setList(document.querySelectorAll(".list"));
  }, []);

  useEffect(() => {
    if (list) {
      list.forEach((item) => {
        item.classList.remove("active");
        if (location.pathname.includes(item.id)) {
          item.classList.add("active");
        }

        if (location.pathname == "/" && item.id == "home") {
          item.classList.add("active");
        }
      });
    }
  }, [location, []]);

  let activeLink = (event) => {
    list.forEach((item) => item.classList.remove("active"));

    list.forEach((item) => {
      if (
        event.currentTarget.className.includes(item.className) &&
        event.currentTarget.className.length !== 0
      ) {
        item.classList.add("active");
      }
    });
  };

  function signOutUserAlert(event) {
    event.preventDefault();
      const Toast = Swal.mixin({
        toast: false,
        position: "center-end",
        showConfirmButton: true,
        showCancelButton: true,
        timer: 3000,
        background: "#FFF",
        iconColor: "rgb(238, 76, 103)",
        icon: "error",
        confirmButtonColor: "rgb(221, 46, 113)",
        timerProgressBar: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonColor: "#d33",


        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        title: "Are you sure you want to log out?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        position: "center",
        showConfirmButton: true,
        showCancelButton: true,
        timer: 3000,
        background: "#FFF",
        iconColor: "rgb(238, 76, 103)",
        confirmButtonColor: "rgb(221, 46, 113)",
        timerProgressBar: true,
        confirmButtonText: "Yes, log out!",
        cancelButtonColor: "#000",
      }).then((result) => {
        if (result.isConfirmed) {
          props.signOutUser(props.user.email);
          Swal.fire(
            "You have been logged out!",
            "",
            "success",
          );
        }
      });
  }

  useEffect(() => {}, [props.user]);

  return (
    <div className="navbar navbarHidden">
      <div className="div_logo_navbar">
        <img
          src={process.env.PUBLIC_URL + "/assets/footerImages/logofinal.png"}
          alt="img"
          className="logonavbar"
        />
      </div>
      <div className="navigation">
        <ul>
          <li className="list" onClick={(event) => {
              activeLink(event)
              setIndicatorExtraClass("indicator-first-child")
            }} id="home">
            <LinkRouter to="/home">
              <span className="icon">
                <HomeOutlinedIcon />
              </span>
              <span className="text">Home</span>
            </LinkRouter>
          </li>
          <li
            className="list"
            onClick={(event) => {
              setTimeout(() => {
                setIndicatorExtraClass('')
              }, 350)
              activeLink(event)
            }}
            id="games"
          >
            <LinkRouter to="/games">
              <span className="icon">
                <SportsEsportsOutlinedIcon />
              </span>
              <span className="text">Games</span>
            </LinkRouter>
          </li>
          <li
            className="list"
            onClick={(event) => {
              setTimeout(() => {
                setIndicatorExtraClass('')
              }, 350)
              activeLink(event)
            }}
            id="aboutus"
          >
            <LinkRouter to="/aboutus">
              <span className="icon">
                <InfoOutlinedIcon />
              </span>
              <span className="text">About us</span>
            </LinkRouter>
          </li>

          <li className="list" onClick={(event) => {
              setTimeout(() => {
                setIndicatorExtraClass('')
              }, 350)
              activeLink(event)
            }} id="cart">
            <LinkRouter to="/cart">
              <span className="icon">
                <ShoppingCartOutlinedIcon />
              </span>
              <span className="text">Cart</span>
            </LinkRouter>
          </li>

          {props.user ? (
            <li className="list" onClick={signOutUserAlert} id="logout">
              <LinkRouter to="/user">
                <span className="icon">
                  <LogoutIcon />
                </span>
                <span className="text">Log out</span>
              </LinkRouter>
            </li>
          ) : (
            <li
              className="list"
              onClick={(event) => {
                activeLink(event)
                setIndicatorExtraClass("indicator-last-child")
              }}
              id="user"
            >
              <LinkRouter to="/user">
                <span className="icon">
                  <PermIdentityOutlinedIcon />
                </span>
                <span className="text">Profile</span>
              </LinkRouter>
            </li>
          )}

          <div className={`indicator ${indicatorExtraClass}`} />
        </ul>
      </div>
      <div className="listadmin">
        {props.user && props.user.isAdmin && (
          <li onClick={(event) => activeLink(event)} id="admin">
            <LinkRouter to="/admin">
              <span className="icon specialadmin">
                <StarBorderOutlinedIcon />
              </span>
              {/* <span className="text">Admin</span> */}
            </LinkRouter>
          </li>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer.user,
  };
};

const mapDispatchToProps = {
  signOutUser: userActions.signOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
