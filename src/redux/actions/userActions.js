import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from "../constants/userConstants";
const url = window.REACT_APP_URL;
export const login = (name, password) => async (dispatch) => {
  debugger;
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      url + "createUser",
      { name, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("token", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};
