import { all } from 'redux-saga/effects';
import gifs from './gifs';

export default function* rootSaga() {
  // recibe arreglo de funciones
  yield all([
	  gifs()
	]);
}
