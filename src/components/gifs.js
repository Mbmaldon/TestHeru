import React from "react";
import Navigation from "./generics/navigation/navigation";
import GridGifs from "./generics/grid-gif/grid-gif";
import Search from "./generics/search/search";

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
    const url = `http://api.giphy.com/v1/gifs/search?q=${word.replace(
      /\s/g,
      "+"
    )}&api_key=xHLtPO1DiNWG8Vq8D5DHCCeQsIiT0DSF`;

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
