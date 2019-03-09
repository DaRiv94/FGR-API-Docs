/* eslint-disable import/no-named-as-default */

import axios from "axios";

class vidly {
  static async get(url, jwt, targetId = "", id = "") {
    console.log("url: ",url);
    console.log("jwt: ",jwt);
    console.log("targetId: ",targetId);
    console.log("id: ",id);

    try {
      if (targetId==="true" && jwt) {
        const res = await axios.get(url + `/${id}`, {
          headers: { "x-auth-token": jwt }
        });
        //console.log("res1: ",res);
        return res.data;
      } else if (targetId==="true") {
        const res = await axios.get(url + `/${id}`);
        //console.log("res2: ",res);
        return res.data;
      } else if (jwt) {
        const res = await axios.get(url, { headers: { "x-auth-token": jwt } });
        //console.log("res3: ",res);
        return res.data;
      } else {
        const res = await axios.get(url);
        //console.log("res4: ",res);
        return res.data;
      }
    } catch (err) {
      //console.log("err: ",err);
      return err.response.data;
    }
  }

  static async post(url, payload, jwt) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    try {
      if (jwt) {
        const res = await axios.post(url, payload, {
          headers: { "x-auth-token": jwt }
        });
        return res.data;
      } else {
        const res = await axios.post(url, payload, {
          headers: { "x-auth-token": jwt }
        });
        return res.data;
      }
    } catch (err) {
      return err.response.data;
    }
  }

  static async put(url, payload, jwt, targetId, id) {
    axios.defaults.headers.put['Content-Type'] = 'application/json';

    if(!id){
      id="1";
    }


    try {
      if (targetId==="true" && jwt) {
        //console.log("if targ and jwt");
        const res = await axios.put(url + `/${id}`, payload, {
          headers: { "x-auth-token": jwt  }
        });
        return res.data;
      } else if (jwt) {
        console.log("I should always have a target type so this condition shouldnt occur");
      } else {
        console.log("last else of put");
        const res = await axios.put(url + `/${id}`, payload);
        return res.data;
      }
    } catch (err) {
      return err.response.data;
    }
  }



  static async delete(url, jwt, targetId, id) {

    if(!id){
      id="1";
    }

    try {
      if (targetId==="true" && jwt) {
        console.log("if targ and jwt");
        const res = await axios.delete(url + `/${id}`, {
          headers: { "x-auth-token": jwt  }
        });
        return res.data;
      } else if (jwt) {
        console.log(" Should always have a target type so this condition shouldnt occur");
      } else {
        console.log("last else of delete");
        const res = await axios.delete(url + `/${id}`);
        return res.data;
      }
    } catch (err) {
      return err.response.data;
    }
  }

}

export default vidly;
