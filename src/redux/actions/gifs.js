export const START_GET_GIFS = "START_GET_GIFS";
export const SUCCESS_GET_GIFS = "SUCCESS_GET_GIFS";

export const startGetGifs = (payload) => ({
  type: START_GET_GIFS,
  ...payload,
});

export const successGetGifs = (payload) => ({
  type: SUCCESS_GET_GIFS,
  ...payload,
});
