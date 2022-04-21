import React from 'react'
import "../styles/uploadGames.css";

import {connect} from 'react-redux'
import gamesActions from '../redux/actions/gamesActions'

class ModifyGame extends React.Component{

	constructor(props){
		super(props)
		this.id = this.props.params.id
		this.state = {
			files:[],
			game:{}
		}
	}

	componentDidMount(){
		this.props.fetchGame(this.id)
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const file = await this.state.files[0];
		const fileOne = await this.state.files[1];
		const fileTwo = await this.state.files[2];
		const fileThree = await this.state.files[3];
		const fileFour = await this.state.files[4];

		const name = await event.target[0].value;
		const genre = await event.target[1].value;
		const size = await event.target[2].value;
		const workson = await event.target[3].value;
		const company = await event.target[4].value;
		const description = await event.target[5].value;
		const processor = await event.target[6].value;
		const memory = await event.target[7].value;
		const graphics = await event.target[8].value;
		const storage = await event.target[9].value;
		const price = await event.target[10].value;

		const formData = new FormData();
		formData.append("id", this.props.game.games._id)
		formData.append("name", name);
		formData.append("genre", genre);
		formData.append("size", size);
		formData.append("workson", workson);
		formData.append("company", company);
		formData.append("description", description);
		formData.append("processor", processor);
		formData.append("memory", memory);
		formData.append("graphics", graphics);
		formData.append("storage", storage);
		formData.append("price", price);
		formData.append("file", file);
		formData.append("file", fileOne);
		formData.append("file", fileTwo);
		formData.append("file", fileThree);
		formData.append("file", fileFour);

		this.props.modifyGame(formData)
	}

	render(){

	return(
		<> 
		{this.props.game.games && (
	<form onSubmit={this.handleSubmit} className="form-style-9" key={this.props.game.games._id}>
	      <p className="upload-new-game-title">MODIFY GAME</p>
		<ul>
		  <li>
		    <div className="inputContainer">
		      <label name="name">
			Game Name
			<input
			  className="field-style field-split align-left"
			  name="name"
			  placeholder="Game's name"
			  defaultValue={this.props.game.games && this.props.game.games.gameName}
			  type="text"
			/>
		      </label>
		    </div>
		  </li>
		  <li>
		    <div className="inputContainer">
		      <label name="genre">Game Genre
		      <input
			className="field-style field-split align-right"
			name="genre"
			placeholder="Game's genre"
			type="text"
		        defaultValue={this.props.game.games && this.props.game.games.genre.map(genre => genre)}
		      />
		      </label>
		    </div>
		    <div className="inputContainer">
		      <label name="size">
			Game Size
			<input
			  className="field-style field-split align-left"
			  name="size"
			  placeholder="Game's size"
			  type="number"
			  defaultValue={this.props.game.games && this.props.game.games.size}
			/>
		      </label>
		    </div>
		  </li>
		  <li>
		    <div className="inputContainer">
		      <label name="workson">
			Works on
			<input
			  className="field-style field-split align-right"
			  name="workson"
			  placeholder="Works on"
			  type="text"
			  defaultValue={this.props.game.games && this.props.game.games.workson}
			/>
		      </label>
		    </div>
		    <div className="inputContainer">
		      <label name="company">
			Game Developer
			<input
			  className="field-style field-split align-left"
			  name="company"
			  placeholder="Game's company"
			  type="text"
			  defaultValue={this.props.game.games && this.props.game.games.company}
			/>
		      </label>
		    </div>
		  </li>
		  <li>
		    <div className="inputContainer">
		      <label name="description">
			Game Description
			<input
			  className="field-style field-split align-right"
			  name="description"
			  placeholder="Game's description"
			  type="text"
			  defaultValue={this.props.game.games && this.props.game.games.description}
			/>
		      </label>
		    </div>
		    <div className="inputContainer">
		      <label name="processor">
			System Processor
			<input
			  className="field-style field-split align-left"
			  name="processor"
			  placeholder="System's processor"
			  type="text"
			  defaultValue={this.props.game.games && this.props.game.games.requirements[0].processor}
			/>
		      </label>
		    </div>
		  </li>
		  <li>
		    <div className="inputContainer">
		      <label name="memory">
			System Memory
			<input
			  className="field-style field-split align-right"
			  name="memory"
			  placeholder="System's memory"
			  type="number"
			  defaultValue={this.props.game.games.requirements[0].memory}
			/>
		      </label>
		    </div>
		    <div className="inputContainer">
		      <label name="graphics">
			System Graphics
			<input
			  className="field-style field-split field-full"
			  name="graphics"
			  placeholder="System's graphics"
			  type="text"
			  defaultValue={this.props.game.games.requirements[0].graphics}
			/>
		      </label>
		    </div>
		  </li>
		  <li>
		    <div className="inputContainer">
		      <label name="storage">
			System Storage
			<input
			  className="field-style field-split align-left"
			  name="storage"
			  placeholder="System's storage"
			  type="number"
			  defaultValue={this.props.game.games.requirements[0].storage}
			/>
		      </label>
		    </div>

		    <div className="inputContainer">
		      <label name="price">
			Game Price
			<input
			  className="field-style field-split align-right"
			  name="price"
			  placeholder="Game's price"
			  type="number"
			  step="0.01"
			  defaultValue={this.props.game.games.price}
			/>
		      </label>
		    </div>
		  </li>
		  <li>
		    <div className="inputContainer">
		      <label name="src">
			Game coverge img
			<input
			  onChange={(event) =>
			  this.setState({files:[...this.state.files, ...event.target.files]})
			  }
			  name="src"
			  placeholder="Game's img"
			  type="file"
			  className="field-style field-split "
			/>
		      </label>
		    </div>
		  </li>
		  <li className="srcImg">
		    <div className="inputContainer">
		      <label name="src1">
			First Img
			<input
			  onChange={(event) =>
			  this.setState({files:[...this.state.files, ...event.target.files]})
			  }
			  name="src1"
			  placeholder="First img"
			  type="file"
			  className="field-style field-split field-split"
			/>
		      </label>
		    </div>
		    <div className="inputContainer">
		      <label name="src2">
			Second Img
			<input
			  onChange={(event) =>
			  this.setState({files:[...this.state.files, ...event.target.files]})
			  }
			  name="src2"
			  placeholder="Second img"
			  type="file"
			  className="field-style field-split field-split"
			/>
		      </label>
		    </div>
		  </li>
		  <li>
		    <div className="inputContainer">
		      <label name="src3">
			Third Img
			<input
			  onChange={(event) =>
			  this.setState({files:[...this.state.files, ...event.target.files]})
			  }
			  name="src3"
			  placeholder="Three img"
			  type="file"
			  className="field-style field-split field-split"
			/>
		      </label>
		    </div>

		    <div className="inputContainer">
		      <label name="src4">
			Fourth Img
			<input
			  onChange={(event) =>
			  this.setState({files:[...this.state.files, ...event.target.files]})
			  }
			  name="src4"
			  placeholder="Four img"
			  type="file"
			  className="field-style field-split field-split"
			/>
		      </label>
		    </div>
		  </li>
		  <div>
		    <button type="submit" className="button-AdmForm" href='#'>
		      modify game
		    </button>
		  </div>
		</ul>
	      </form>
		)}
		</>
	)
	}
}

const mapDispatchToProps = {
	modifyGame:gamesActions.modifyGame,
	fetchGame:gamesActions.fetchGame
}

const mapStateToProps = (state) => {
    return {
        game: state.gamesReducer.game,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModifyGame)
