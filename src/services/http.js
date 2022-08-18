import axios from "axios";

/*
    The http service for API calls
*/

const requestHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
};

const http = {
    // Get request
    get: (url) => new Promise((resolve, reject) => {
        axios
            .get(`${url}`, {
                headers: requestHeaders
            })
            .then(({ data }) => resolve(data))
            .catch((e) => reject(e));
    }),
};

export default http;
