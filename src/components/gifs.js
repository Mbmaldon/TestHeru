import React from "react";
import Navigation from "./generics/navigation/navigation";
import GridGifs from "./generics/grid-gif/grid-gif";
import Search from "./generics/search/search";
import  {CONFIG}  from '../config/api-info';
import request from "superagent";

class Gifs extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      word: "",
    };
  }

  handleTermChange = (word) => {
	// const url = CONFIG.API_SEARCH ${word.replace(/\s/g,"+")}&api_key;
    const url = CONFIG.API_SEARCH + `${word.replace(/\s/g,"+")}&api_key=`+CONFIG.KEYAPI

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data, word: word });
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <Search onTermChange={this.handleTermChange} />
        <GridGifs data={this.state} />
      </div>
    );
  }
}
export default Gifs;
