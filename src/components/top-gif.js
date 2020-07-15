import React from "react";
import Navigation from "./generics/navigation/navigation";
import GridGifs from "./generics/grid-gif/grid-gif";
import Search from "./generics/search/search";

import request from "superagent";

class TopGifs extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      word: "Top Gifs",
    };

    this.handleTermChange();
  }

  handleTermChange = () => {
    const url = `http://api.giphy.com/v1/gifs/trending?q=&api_key=xHLtPO1DiNWG8Vq8D5DHCCeQsIiT0DSF`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
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

export default TopGifs;
