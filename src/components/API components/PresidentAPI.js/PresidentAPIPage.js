import React, { Component } from "react";
import President from "../../../Apis/presidents";
import "./PresidentAPIPage.css";
import President_API_Doc from "./President_API_Doc";
import FGR_President_API_data from "../../common/InMemoryData/FGR_President_API_data";

export class PresidentAPIPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appData: FGR_President_API_data,
      hasAuthentication:false,
      param: "",
      jwt: "",
      payload: "",
      jsonData: [],
      dataLoaded: false
    };

    //always necessary for posts and puts
    this.updatePayload = this.updatePayload.bind(this);

    //specifc to routes that have /:Param param
    this.updateParam = this.updateParam.bind(this);
    this.resetParam = this.resetParam.bind(this);

    //api method calls specifc to api
    this.PresidentGET = this.PresidentGET.bind(this);
    this.PresidentPOST = this.PresidentPOST.bind(this);
    this.PresidentPUT = this.PresidentPUT.bind(this);
    this.PresidentDELETE = this.PresidentDELETE.bind(this);

    //methods specifc to if an api that has authorization
    // this.logout = this.logout.bind(this);
    // this.login = this.login.bind(this);
  }

  updatePayload(event) {
    this.setState({
      payload: event.target.value
    });
  }

  //specifc to routes that have /:Param param
  //to clear the Param when we enter a Section.
  resetParam() {
    this.setState({ Param: "" });
    setTimeout(console.log("resetParam Param: ", this.state.param), 2000);
  }

  //specifc to routes that have /:Param param
  //for an input box in the Param sections
  updateParam(event) {
    this.setState({
      param: event.target.value
    });
    console.log("updateParam Param: ", event.target.value);
  }

  //api method calls specifc to api
  PresidentPOST(event) {
    President
      .post(event.target.value, this.state.payload, this.state.jwt)
      .then(data => {
       
          this.setState({ dataLoaded: true, jsonData: data });
        
      });
    this.resetParam();
  }

  //api method calls specifc to api
  PresidentGET(event) {
    console.log("target: ",event.target);
    if (event.target.id) {
      President
        .get(event.target.value, this.state.jwt, event.target.id, this.state.param)
        .then(data => {
          this.setState({ dataLoaded: true, jsonData: data });
        });
    } else {
      President.get(event.target.value, this.state.jwt).then(data => {
        this.setState({ dataLoaded: true, jsonData: data });
      });
      this.resetParam();
    }
  }

  //api method calls specifc to api
  PresidentPUT(event) {
    if (event.target.id) {
      President
        .put(
          event.target.value,
          this.state.payload,
          this.state.jwt,
          event.target.id,
          this.state.param
        )
        .then(data => {
          this.setState({ dataLoaded: true, jsonData: data });
        });
    } else {
      President
        .put(event.target.value, this.state.payload, this.state.jwt)
        .then(data => {
          this.setState({ dataLoaded: true, jsonData: data });
        });
      this.resetParam();
    }
  }

  //api method calls specifc to api
  PresidentDELETE(event) {
    if (event.target.id) {
      President
        .delete(
          event.target.value,
          this.state.jwt,
          event.target.id,
          this.state.param
        )
        .then(data => {
          this.setState({ dataLoaded: true, jsonData: data });
        });
    } else {
      President.delete(event.target.value, this.state.jwt).then(data => {
        this.setState({ dataLoaded: true, jsonData: data });
      });
      this.resetParam();
    }
  }

//   //methods specifc to if an api that has authorization
//   login() {
//     const payload = { email: "b@b.com", password: "bbbb" };
//     President
//       .post(
//         "https://boiling-meadow-22539.herokuapp.com/api/auth",
//         payload,
//         this.state.jwt
//       )
//       .then(data => {
//         if (data.length > 130) {
//           this.setState({ dataLoaded: true, jsonData: data, jwt: data });
//         } else {
//           this.setState({ dataLoaded: true, jsonData: data });
//         }
//       });
//   }

//   //methods specifc to if an api that has authorization
//   logout(event) {
//     this.setState({ jwt: "" });
//   }

  render() {
    return (
      <President_API_Doc
        {...this.state}
        updatePayload={this.updatePayload}
        resetParam={this.resetParam}
        updateParam={this.updateParam}
        callDELETE={this.PresidentDELETE}
        callPUT={this.PresidentPUT}
        callGET={this.PresidentGET}
        callPOST={this.PresidentPOST}
        // logout={this.logout}
        // login={this.login}
      />
    );
  }
}

export default PresidentAPIPage;
