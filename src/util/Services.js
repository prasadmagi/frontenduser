import axios from "axios";
import { trackPromise } from "react-promise-tracker";

export async function PostService(url, data) {
  debugger;
  try {
    const response = await trackPromise(
      axios.post(window.REACT_APP_URL + url, data)
    );
    return response;
  } catch (error) {
    throw error;
  }
}
export async function GetService(url) {
  debugger;
  try {
    const response = await trackPromise(
      axios.get(window.REACT_APP_URL + url)
    );
    return response;
  } catch (error) {
    throw error;
  }
}
