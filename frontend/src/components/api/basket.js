import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";




import "../../styles/basket.css";

import Swal from "sweetalert2";

const Basket = (props) => {
  const onPayPalCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: props.price.toFixed(2),
          },
        },
      ],
    });
  };

  const onPayPalApprove = (data, actions) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "center-end",
      showConfirmButton: false,
      timer: 3000,
      background: "#FFF",
      // iconColor: "rgb(238, 76, 103)",
      confirmButtonColor: "rgb(221, 46, 113)",
      timerProgressBar: true,

      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: `Payment made succesfully`,
    });
  };

  return (
    <>
      <div className="basketContainer">
        {props.user ? (
          props.price ? (
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AVwC9go19k3v-1HU5T8wUDa-qS6TmP6_nH7RAesdYWv4_KURqO9gD7j9vX7Bp-BzLdSZnYhd8Qv-tOZT",
                currency: "USD",
              }}
            >
              <div>Checkout with PayPal...</div>
              <PayPalButtons
                style={{ layout: "horizontal", tagline: false }}
                createOrder={onPayPalCreateOrder}
                onApprove={onPayPalApprove}
              />
              <div>...or </div>
              <Link to="/games" className="text-reset">
                <button className="backToGameBasketButton">
                  Add more games{" "}
                  <span className="icon">
                    <ShoppingCartOutlinedIcon />
                  </span>
                </button>
              </Link>
            </PayPalScriptProvider>
          ) : (
            <div className="basketText">
              <div>Your cart is empty... Add games!</div>
              <Link to="/games" className="text-reset">
                <button className="backToGameBasketButton">
                  Back to Games  {""}
                  <span className="icon">
                    <SportsEsportsOutlinedIcon />
                  </span>
                </button>
              </Link>
            </div>
          )
        ) : (
          <div className="basketText">
            <div>Sign in to checkout with PayPal! </div>
            <Link to="/user" className="text-reset">
              <button className="backToGameBasketButton">
                Sign in{" "}
                <span className="icon">
                  <PermIdentityOutlinedIcon />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    inShopGames: state.gamesReducer.inShopGames,
    user: state.usersReducer.user,
  };
};

export default connect(mapStateToProps, null)(Basket);
