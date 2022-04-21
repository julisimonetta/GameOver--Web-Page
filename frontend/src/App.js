import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {React, useEffect, useState} from 'react'
import './App.css';
import {connect} from 'react-redux'
import usersActions from './redux/actions/usersActions.js'
import Error from './components/general/Error'
import Footer from "./components/general/Footer"
import NavBar from './components/general/Navbar.js'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs.js'
import Games from './pages/Games.js'
import Admin from './pages/Admin.js'
import GamesDetails from './pages/GamesDetails.js'
import withRouter from './utils/withRouter'
import UsersForm from './pages/UsersForm'
import ModifyGame from './pages/modifyGame'
import Cart from './pages/Cart'
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import ProgressBar from "react-scroll-progress-bar"



const ModifyGameElement = withRouter(ModifyGame)

function App(props) {

	useEffect(() => {
	    if(localStorage.getItem('token')!== null){
	      const token = localStorage.getItem("token")
	      props.verifyToken(token)
	    }
	},[])

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<div className="App">
			{loading ? (
				<div className="loadingContainer">
					<div className="loadingImg">
						<PacmanLoader className="pacman" size={100} color={"#FFFFFF"} loading={true} />
					</div>
				</div>
				) : (
					<BrowserRouter>
						<ProgressBar />
						<NavBar/>

						<Routes>
							<Route path='/' element={<Home/>}/>
							<Route path='/home' element={<Home/>}/>
							<Route path='/aboutus' element={<AboutUs/>}/>
							<Route path='/games' element={<Games/>}/>
							<Route path='/gamesdetails/:id' element={<GamesDetails/>}/>
							<Route path='*' element={ <Error/> }/>
							<Route path='/cart' element={ <Cart/> }/>
							<Route path='/modifyGame/:id' element={<ModifyGameElement/>}/>
							<Route path="/user" element={ localStorage.getItem('token') ? (<Navigate replace to="/" />) : <UsersForm/>}/>
							{props.user && props.user.isAdmin && <Route path='/admin' element={<Admin/>}/>}
						</Routes>
						<ScrollToTop smooth component={<ArrowCircleUpSharpIcon  sx={{ fontSize: 50 }}/>}/>

						<Footer/>

					</BrowserRouter>
				)
			}



		</div>
	);
}

const mapDispatchToProps = {
	verifyToken: usersActions.verifyToken,

}

const mapStateToProps = (state) => {
	return {
		user:state.usersReducer.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
