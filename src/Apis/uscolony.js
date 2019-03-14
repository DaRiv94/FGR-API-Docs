/* eslint-disable import/no-named-as-default */

import axios from "axios";

class USColony {
  static async get(url, jwt, targetRowKey = "", RowKey = "") {
    // console.log("url: ",url);
    // console.log("jwt: ",jwt);
    // console.log("targetRowKey: ",targetRowKey);
    // console.log("RowKey: ",RowKey);

    if(!RowKey){
        RowKey="1";
    }

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
     // console.log("err: ",err);
      return err.response.data;
    }
  }

  

  

 
}

export default USColony;
