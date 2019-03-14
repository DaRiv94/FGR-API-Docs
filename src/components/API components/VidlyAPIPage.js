import React, { Component } from "react";
import vidly from "../../Apis/vidly";
import "./VidlyAPIPage.css";
import Vidly_API_Doc from "./Vidly_API_Doc";
import FGR_Vidly_API_data from "../common/InMemoryData/FGR_Vidly_API_data";

export class VidlyAPIPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appData: FGR_Vidly_API_data,
      hasAuthentication:true,
      id: "",
      jwt: "",
      payload: "",
      jsonData: [],
      dataLoaded: false
    };

    //always necessary for posts and puts
    this.updatePayload = this.updatePayload.bind(this);

    //specifc to routes that have /:id param
    this.updateId = this.updateId.bind(this);
    this.resetId = this.resetId.bind(this);

    //api method calls specifc to api
    this.vidlyGET = this.vidlyGET.bind(this);
    this.vidlyPOST = this.vidlyPOST.bind(this);
    this.vidlyPUT = this.vidlyPUT.bind(this);
    this.vidlyDELETE = this.vidlyDELETE.bind(this);

    //methods specifc to if an api that has authorization
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  updatePayload(event) {
    this.setState({
      payload: event.target.value
    });
  }

  //specifc to routes that have /:id param
  //to clear the id when we enter a Section.
  resetId() {
    this.setState({ id: "" });
    //setTimeout(console.log("resetid id: ", this.state.id), 2000);
  }

  //specifc to routes that have /:id param
  //for an input box in the id sections
  updateId(event) {
    this.setState({
      id: event.target.value
    });
    //console.log("updateid id: ", event.target.value);
  }

  //api method calls specifc to api
  vidlyPOST(event) {

    if (this.state.firstCall) {
      alert(`Thanks for checking out my APIs! 
    Please wait a moment while the heroku server wakes up.
    Unless you refresh the page, you shouldn't need to see this 
    message again for this Api.`);
      this.setState({ firstCall: false });
    }

    //console.log("targ: ",event.target);
    //console.log("targ: ",event.target.body);
    
    var login = event.target.id === "loginButton" || event.target.value==="https://boiling-meadow-22539.herokuapp.com/api/auth";
    vidly
      .post(event.target.value, this.state.payload, this.state.jwt)
      .then(data => {
        if (login && data.length > 130) {
          this.setState({ dataLoaded: true, jsonData: data, jwt: data });
        } else {
          this.setState({ dataLoaded: true, jsonData: data });
        }
      });
    this.resetId();
  }

  //api method calls specifc to api
  vidlyGET(event) {

    if (this.state.firstCall) {
      alert(`Thanks for checking out my APIs! 
    Please wait a moment while the heroku server wakes up.
    Unless you refresh the page, you shouldn't need to see this 
    message again for this Api.`);
      this.setState({ firstCall: false });
    }

    //console.log("target: ",event.target);
    if (event.target.id) {
      vidly
        .get(event.target.value, this.state.jwt, event.target.id, this.state.id)
        .then(data => {
          this.setState({ dataLoaded: true, jsonData: data });
        });
    } else {
      vidly.get(event.target.value, this.state.jwt).then(data => {
        this.setState({ dataLoaded: true, jsonData: data });
      });
      this.resetId();
    }
  }

  //api method calls specifc to api
  vidlyPUT(event) {

    if (this.state.firstCall) {
      alert(`Thanks for checking out my APIs! 
    Please wait a moment while the heroku server wakes up.
    Unless you refresh the page, you shouldn't need to see this 
    message again for this Api.`);
      this.setState({ firstCall: false });
    }

    if (event.target.id) {
      vidly
        .put(
          event.target.value,
          this.state.payload,
          this.state.jwt,
          event.target.id,
          this.state.id
        )
        .then(data => {
          this.setState({ dataLoaded: true, jsonData: data });
        });
    } else {
      vidly
        .put(event.target.value, this.state.payload, this.state.jwt)
        .then(data => {
          this.setState({ dataLoaded: true, jsonData: data });
        });
      this.resetId();
    }
  }

  //api method calls specifc to api
  vidlyDELETE(event) {

    if (this.state.firstCall) {
      alert(`Thanks for checking out my APIs! 
    Please wait a moment while the heroku server wakes up.
    Unless you refresh the page, you shouldn't need to see this 
    message again for this Api.`);
      this.setState({ firstCall: false });
    }

    if (event.target.id) {
      vidly
        .delete(
          event.target.value,
          this.state.jwt,
          event.target.id,
          this.state.id
        )
        .then(data => {
          this.setState({ dataLoaded: true, jsonData: data });
        });
    } else {
      vidly.delete(event.target.value, this.state.jwt).then(data => {
        this.setState({ dataLoaded: true, jsonData: data });
      });
      this.resetId();
    }
  }

  //methods specifc to if an api that has authorization
  login() {
    const payload = { email: "b@b.com", password: "bbbb" };
    vidly
      .post(
        "https://boiling-meadow-22539.herokuapp.com/api/auth",
        payload,
        this.state.jwt
      )
      .then(data => {
        if (data.length > 130) {
          this.setState({ dataLoaded: true, jsonData: data, jwt: data });
        } else {
          this.setState({ dataLoaded: true, jsonData: data });
        }
      });
  }

  //methods specifc to if an api that has authorization
  logout(event) {
    this.setState({ jwt: "" });
  }

  render() {
    return (
      <Vidly_API_Doc
        {...this.state}
        updatePayload={this.updatePayload}
        resetId={this.resetId}
        updateId={this.updateId}
        callDELETE={this.vidlyDELETE}
        callPUT={this.vidlyPUT}
        callGET={this.vidlyGET}
        callPOST={this.vidlyPOST}
        logout={this.logout}
        login={this.login}
      />
    );
  }
}

export default VidlyAPIPage;
