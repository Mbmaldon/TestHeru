import { put, call, takeLatest } from "redux-saga/effects/";
import { START_GET_GIFS, SUCCESS_GET_GIFS } from "../actions/gifs";

import apiCall from '../../api';

//put: pone las acciones similar a dispath
//call: llamada a la api
//takeLast: escucha la funcion generadora

function* getGifs({ payload }) {
  try {
    const results = yield call(
      apiCall,
      "https://api.giphy.com/v1/gifs/trending?q=&api_key=xHLtPO1DiNWG8Vq8D5DHCCeQsIiT0DSF"
    );
    console.log(results);
    yield put({ type: SUCCESS_GET_GIFS, results });
  } catch (error) {
    alert("algo salio mal!");
  }
}

// Watchers
export default function* gifs() {
  // funcion que exporta todas las funciones de este sitio
  // colodas en una misma
  yield takeLatest(START_GET_GIFS, getGifs);
}
