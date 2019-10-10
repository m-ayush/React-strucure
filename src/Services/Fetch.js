import axios from "axios";
import { API_HOST } from "../_constants";
export { _fetch as fetch };

// function requestOptions(options) {
//   return {
//     method: "POST",
//     // mode: "cors",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     ...options
//   };
// }
function handleError(error) {
  console.log("eeeeeeeeee", error);
  return error;
}

function handleResponse(successs) {
  return successs;
}

function _fetch(path, body, options) {
  return new Promise((resolve, reject) => {
    return axios
      .post(`${API_HOST}${path}`, body)
      .then(function(response) {
        console.log("api response", response);
        resolve(handleResponse(response));
        return;
      })
      .catch(function(error) {
        // return handleError(error);
        reject(handleError(error));
        return;
      });
  });
}
