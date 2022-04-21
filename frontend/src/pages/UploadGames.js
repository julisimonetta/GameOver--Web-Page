import { useState } from "react";
import { connect } from "react-redux";
import gamesActions from "../redux/actions/gamesActions";
import "../styles/uploadGames.css";

function UploadGames(props) {
  const [files, setFiles] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const file = await files[0];
    const fileOne = await files[1];
    const fileTwo = await files[2];
    const fileThree = await files[3];
    const fileFour = await files[4];

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

    props.uploadGames(formData);
  }

  return (
    <div className="backgroundAdmForm">

      <form onSubmit={handleSubmit} className="form-style-9">
      <p className="upload-new-game-title">UPLOAD NEW GAME</p>
        <ul>
          <li>
            <div className="inputContainer">
              <label name="name">
                Game Name
                <input
                  className="field-style field-split align-left"
                  name="name"
                  placeholder="Game's name"
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
                    setFiles([...files, ...event.target.files])
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
                    setFiles([...files, ...event.target.files])
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
                    setFiles([...files, ...event.target.files])
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
                    setFiles([...files, ...event.target.files])
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
                    setFiles([...files, ...event.target.files])
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
            <button type="submit" className="button-AdmForm">
              Upload game
            </button>
          </div>
        </ul>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  uploadGames: gamesActions.uploadGames,
};

const mapStateToProps = (state) => {
  return {
    games: state.gamesReducer.games,
    user: state.usersReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadGames);
