import * as actionTypes from "./actionTypes";
import axios from "axios";

export const sendMessage = (msg) => (dispatch) => {
  axios
  .post("/chat/send", msg)
  .then((res) => res.data)
  .then((msg) =>
    dispatch({
      type: actionTypes.SEND_MESSAGE,
      message: msg.message,
    })
  )

};

export const getMessage = () => (dispatch) => {
    dispatch({
      type: actionTypes.GET_MESSAGE,
    });
};