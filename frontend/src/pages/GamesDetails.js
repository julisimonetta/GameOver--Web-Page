import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/gamesDetails.css";
import gamesActions from "../redux/actions/gamesActions";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const GamesDetails = (props) => {
  const { game } = props;

  window.scrollTo({ top: 0, behavior: "smooth" });

  const { id } = useParams();

  useEffect(() => {
    props.fetchGame(id);
    // eslint-disable-next-line
  }, []);

  console.log(game);


  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }


  function addToShop(event) {
    props.addToShop(game.games);
    console.log("se añadio al carrito");
    const Toast = Swal.mixin({
      toast: true,
      position: "center-end",
      showConfirmButton: false,
      timer: 3000,
      background: "#FFF",
      confirmButtonColor: "rgb(221, 46, 113)",
      timerProgressBar: true,

      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      position: "center-end",
      icon: "success",
      title: "Game added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <>
      {game.games && (
        <>
          <form>
            <div className="details-container">
              <div className="product-details">
                <ul className="details-menu-list">
                  <ul className="text-home-container">
                    {game.games.genre &&
                      game.games.genre.map((genres) => (
                        <li className="text-genres" key={Math.random()}>
                          {genres}
                        </li>
                      ))}
                  </ul>
                  <li className="text-product-details">
                    {game.games.gameName}
                  </li>
                  <div className="price-container">
                    <h2 className="price-gamesdetails">
                      $ {game.games.price} USD
                    </h2>
                    <div className="btn add-to-cart" onClick={addToShop}>
                      Add to cart
                    </div>
                  </div>
                </ul>
              </div>
              <div className="product-container">
                <div className="product-container-child">
                  <div className="container-image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/gamesImages/" +
                        game.games.src
                      }
                      alt="img"
                      className="product-image"
                    />
                    <div className="container-images wrap-responsive">
                      {game.games.images.map((imgs) => (
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/productImages/" +
                            imgs
                          }
                          key={imgs}
                        />
                      ))}
                      {values.map((v, idx) => (
                        <Button
                          key={idx}
                          className="btnModalGamesDetails"
                          onClick={() => handleShow(v)}
                        >
                          Full screen
                          {typeof v === "string" && `below ${v.split("-")[0]}`}
                        </Button>
                      ))}
                      <Modal
                        show={show}
                        fullscreen={fullscreen}
                        onHide={() => setShow(false)}
                        className="gameDetailsModal"
                      >
                        {/* <Modal.Body className="gameDetailsModalBody"> */}
                          <Carousel closeButton className="gameDetailsCarrousel">
                            {game.games.images.map((imgs) => (
                              <Carousel.Item
                                interval={2000}
                                className="gameDetailsCarrouselImgs"
                              >
                                <Button
                                  onClick={handleClose}
                                  className="carrouselBtn"
                                >
                                  {" "}
                                  X{" "}
                                </Button>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/productImages/" +
                                    imgs
                                  }
                                  key={imgs}
                                  className="gameDetailImage"
                                />
                              </Carousel.Item>
                            ))}
                          </Carousel>
                        {/* </Modal.Body> */}
                      </Modal>
                    </div>
                  </div>
                  <div className="product-detail-info">
                    <h5 className="requirements-gamedetails container-general-details">
                      General info
                    </h5>

                    <div className="list-details">
                      <h5 className="requirements-gamedetails">
                        Works on: {game.games.workson}
                      </h5>
                      <p></p>
                      <h5 className="requirements-gamedetails">
                        Developer: {game.games.company}
                      </h5>
                      <p></p>
                      <h5 className="requirements-gamedetails">
                        Size: {game.games.size} GB
                      </h5>
                      <div className="list-req">
                        <h5 className="requirements-gamedetails container-system-details">
                          System Requirements
                        </h5>
                        {game.games.requirements.length > 1 ? (
                          game.games.requirements.map((req, index) => (
                            <div key={index}>
                              <p className="product-item">
                                {Object.keys(req)[0]
                                  .substring(0, 1)
                                  .toUpperCase()}
                                {Object.keys(req)[0].substring(1)}:{" "}
                                {req[Object.keys(req)[0]]}{" "}
                                {Object.keys(req)[0] === "storage" ||
                                Object.keys(req)[0] === "memory"
                                  ? "GB"
                                  : ""}
                              </p>
                            </div>
                          ))
                        ) : (
                          <>
                            <p className="product-item">
                              <span>Processor: </span>
                              {game.games.requirements[0].processor}
                            </p>
                            <p className="product-item">
                              Memory: {game.games.requirements[0].memory} GB
                            </p>
                            <p className="product-item">
                              Graphics: {game.games.requirements[0].graphics}
                            </p>
                            <p className="product-item">
                              Storage: {game.games.requirements[0].storage} GB
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-container-child-2">
                  <h3 className="aboutgame-details">- About the game -</h3>
                  <p className="aboutgame-details-info">
                    {game.games.description}
                  </p>
                  <Link to="/games" className="text-reset">
                    <div className="" href="#scroll3">
                      <button className="backToGamebutton">
                        Back to Games
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    game: state.gamesReducer.game,
  };
};

const mapDispatchToProps = {
  fetchGame: gamesActions.fetchGame,
  addToShop: gamesActions.addToShop,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesDetails);
