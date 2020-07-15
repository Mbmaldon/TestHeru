import React from "react";
import { useDispatch, useSelector, Provider } from "react-redux";

class Search extends React.Component {
	
  constructor() {
    super();
    this.state = { word: "" };
  }

  onInputChange = (word) => {
    this.setState({ word });
	this.props.onTermChange(word);
  };
  

  render() {
    return (
      <div className="search">
        <input
          placeholder="Ingresa parámetros de búsqueda"
          onChange={(event) => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default Search;
