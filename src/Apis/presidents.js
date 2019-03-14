/* eslint-disable import/no-named-as-default */

import axios from "axios";

class President {
  static async get(url, jwt, targetRowKey = "", RowKey = "") {
    // console.log("url: ",url);
    // console.log("jwt: ",jwt);
    // console.log("targetRowKey: ",targetRowKey);
    // console.log("RowKey: ",RowKey);

    try {
      if (targetRowKey === "true") {
        const res = await axios.get(url + `/${RowKey}`);
       // console.log("res1: ",res);
        return res.data;
      } else {
        const res = await axios.get(url);
       // console.log("res4: ",res);
        return res.data;
      }
    } catch (err) {
      //console.log("err: ",err);
      return err.response.data;
    }
  }

  static async post(url, payload, jwt) {
    axios.defaults.headers.post["Content-Type"] = "application/json";
    try {
      const res = await axios.post(url, payload);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }

  static async put(url, payload, jwt, targetRowKey, RowKey) {
    axios.defaults.headers.put["Content-Type"] = "application/json";

    if (!RowKey) {
      RowKey = "1";
    }

    try {
      const res = await axios.put(url + `/${RowKey}`, payload);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }

  static async delete(url, jwt, targetRowKey, RowKey) {
    if (!RowKey) {
      RowKey = "1";
    }

    try {
      const res = await axios.delete(url + `/${RowKey}`);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }
}

export default President;
