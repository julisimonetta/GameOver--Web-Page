import React from "react";
import { connect } from "react-redux";
import "../styles/cart.css";
import Delete from "@mui/icons-material/DeleteRounded";
import CreditCard from "@mui/icons-material/CreditCardOutlined";
import gamesActions from "../redux/actions/gamesActions";
import PaypalIcon from "../assets/PaypalIcon";
import Swal from "sweetalert2";

import Basket from "../components/api/basket";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: 0 };
  }

  /**
   * PayPal Sandbox accounts, generated through a real PayPal account at https://developer.paypal.com/developer/accounts/
   * The Business account will receive all funds earned through mock purcheses, while the Personal one can be used to make mock purchases
   * You can actually login to these accounts at https://www.sandbox.paypal.com/ and view their purchase/earning histories, etc
   *
   * Business: x
   * Persinal: x
   *
   * PayPal client-id, generated through a real PayPal account at https://developer.paypal.com/developer/applications
   *
   * AVwC9go19k3v-1HU5T8wUDa-qS6TmP6_nH7RAesdYWv4_KURqO9gD7j9vX7Bp-BzLdSZnYhd8Qv-tOZT
   */

  componentDidMount() {
    if (this.props.inShopGames) {
      let iterator = 0;

      this.props.inShopGames.map((game) => {
        iterator += game.price;
      });

      this.setState({ price: iterator });
    }
  }

  componentDidUpdate(props) {
    if (props.inShopGames !== this.props.inShopGames) {
      let iterator = 0;

      this.props.inShopGames.map((game) => {
        iterator += game.price;
      });

      this.setState({ price: iterator });
    }
  }

  render() {
    return (
      <div className="cart-container">
        <div className="cart-container-child">
          {" "}
          {/* el container blanco */}
          <div className="articles-container">
            {/* el contenedor que tiene w50% */}
            <div className="articles-container-first">
              {/* contenedor que tiene w80% */}
              <h3 className="summary-order">Order Summary</h3>
              <p className="summary-order-p">
                Review your item(s) and checkout with PayPal for a better experience.
              </p>
                {/* el container grisasio que lleva los juegos con sus precios */}
                {this.props.inShopGames.length > 0 ? (
                  this.props.inShopGames.map((game) => (
                    <div className="articles-container-child">
                    <div key={game._id} className="article-container">
                      <div className="image-name-price">
                        {" "}
                        {/* contenedor de la imagen el precio y nombre */}
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/gamesImages/" +
                            game.src
                          }
                          className="article-img"
                        />
                        <div className="name-price">
                          <h5 className="article-name">{game.gameName}</h5>
                          <p className="article-price">$ {game.price} USD</p>
                        </div>
                      </div>
                      <Delete
                        className="delete-article"
                        onClick={() => {
                          {
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
                              confirmButtonText: "Yes, remove it!",
                              cancelButtonColor: "#d33",
                              didOpen: (toast) => {
                                Toast.addEventListener(
                                  "mouseenter",
                                  Swal.stopTimer
                                );
                                Toast.addEventListener(
                                  "mouseleave",
                                  Swal.resumeTimer
                                );
                              },
                            });

                            Toast.fire({
                              title:
                                "Do you want to remove the game from the cart?",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              position: "center",
                              icon: "error",
                              showConfirmButton: true,
                              showCancelButton: true,
                              timer: 3000,
                              background: "#FFF",
                              iconColor: "rgb(238, 76, 103)",
                              confirmButtonColor: "rgb(221, 46, 113)",
                              timerProgressBar: true,
                              cancelButtonColor: "#000",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                this.props.deleteFromShop(game);
                                Swal.fire("Item removed!", "", "success");
                              }
                            });
                          }
                        }}
                      />
                    </div>
                    </div>
                  ))
                ) : (
                  <div className="cart-container-child cart-empty">
                    <div className="hero-text">
                      <div className="container-paragraphs">
                        <p className="hero-paragraph">No games added {":("}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            
          </div>
          <div className="articles-container-second">
            {/* width 50% */}
            <div className="articles-container-second-child">
              {/* width 80% */}

              <div className="article-total">
                <h6>Total </h6>
                <h6 className="total">$ {this.state.price.toFixed(2)} USD</h6>
              </div>
              <div className="payment-method">
                <div className="CreditCard-container">
                  <Basket price={this.state.price} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteFromShop: gamesActions.deleteFromShop,
};

const mapStateToProps = (state) => {
  return {
    inShopGames: state.gamesReducer.inShopGames,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
