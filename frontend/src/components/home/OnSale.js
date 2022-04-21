import "../../styles/onSale.css";
import React from 'react'
import gamesActions from '../../redux/actions/gamesActions.js'
import {connect} from 'react-redux'
import Swal from "sweetalert2";

class OnSale extends React.Component{

  constructor(props){
	  super(props)
  }

  componentDidMount(){
	  this.props.fetchGames()
	  this.gameList = [
		{name:'Monster Hunter: World', disc:'60%', oldprice: '33.00'}, 
		{name:'Hades', disc:'10%', oldprice:'25.00'},
		{name: 'Mario Party Superstars', disc: '50%', oldprice:'60.00' },
		{name: 'Mortal Kombat 11', disc:'90%', oldprice:'49.99'}]
  }

  render(){
	  
	  return (
	    <div className="onSaleContainer">
	      <div className="onSaleTitle">
		      <img src={process.env.PUBLIC_URL + '/onsale.png'} className='on-sale-title'/>
	      </div>
	      <div className="onSaleCardsDisplay">
		{this.props.games && this.gameList && this.props.games.map((game) => {
		  if(this.gameList.map(element => element.name).includes(game.gameName)){
			  return(
			  <div className="onSaleCard" key={game._id}>
				  <div className="cardImage">
				    <img src={process.env.PUBLIC_URL+`/assets/gamesImages/` + game.src}></img>
				  </div>
				  <div className="cardInfo">
				    <div className="cardName">
					<h1>{game.gameName}</h1>
				    </div>
				    <div className="cardPrice">
				      <div className="cardDiscount">
					<h2> {this.gameList.find(e => e.name === game.gameName).disc} </h2>
				      </div>
				      <div className="prices">
					<h4 className="oldPrice"> $ {this.gameList.find(e => e.name === game.gameName).oldprice} USD</h4>
					<h3> $ {game.price} USD</h3>
				      </div>
				    </div>
					  <button className="cardbutton"  onClick={() => {
                          this.props.addToShop(game);

                          const Toast = Swal.mixin({
                            toast: true,
                            position: "center-end",
                            showConfirmButton: false,
                            timer: 3000,
                            background: "#FFF",
                            confirmButtonColor: "rgb(221, 46, 113)",
                            timerProgressBar: true,

                            didOpen: (toast) => {
                              toast.addEventListener(
                                "mouseenter",
                                Swal.stopTimer
                              );
                              toast.addEventListener(
                                "mouseleave",
                                Swal.resumeTimer
                              );
                            },
                          });
                          Toast.fire({
                            position: "center-end",
                            icon: "success",
                            title: "Game added to cart",
                            showConfirmButton: false,
                            timer: 1500,
                          });
                        }}> ADD TO CART </button>
				    </div>
			    </div>
			  )
		  }
		})	
		}	
	      </div>
	    </div>
	  );
  }
};

const mapStateToProps = (state) => {
    return {
	    games:state.gamesReducer.games,
	    inShopGames:state.gamesReducer.inShopGames
    }
}

const mapDispatchToProps = {
	fetchGames:gamesActions.fetchGames,
	addToShop:gamesActions.addToShop
}

export default connect(mapStateToProps, mapDispatchToProps)(OnSale);
