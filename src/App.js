import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import "./App.css";

import { startGetGifs } from "./redux/actions/gifs";
import createStore from "./redux/store";

const store = createStore()

function App (props){

  return (
	<Provider store={store} >
		<div className="App">Test HERU</div>
	</Provider>
  )
}

export default App;
