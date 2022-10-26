const axios = require("axios").default;

axios.defaults.baseURL = "http://127.0.0.1:8000";

export function getEvents() {
  const data = axios
    .get("/events/")
    .then(
      (response) =>
        // handle success
        response
    )
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return data;
}
