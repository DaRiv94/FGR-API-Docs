import React, { Component } from "react";
import UsColony from "../../../Apis/uscolony";
import "../VidlyAPIPage.css";
import UsColonyDoc from "./USColonyDoc";
import FGR_USColony_API_data from "../../common/InMemoryData/FGR_USColony_API_data";

export class USColonyAPIPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appData: FGR_USColony_API_data,
      hasAuthentication: false,
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
    this.UsColonyGET = this.UsColonyGET.bind(this);
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
    //setTimeout(console.log("resetParam Param: ", this.state.param), 2000);
  }

  //specifc to routes that have /:Param param
  //for an input box in the Param sections
  updateParam(event) {
    this.setState({
      param: event.target.value
    });
    //console.log("updateParam Param: ", event.target.value);
  }

  //api method calls specifc to api
  UsColonyGET(event) {
    //console.log("target: ", event.target);
    if (event.target.id) {
      UsColony.get(
        event.target.value,
        this.state.jwt,
        event.target.id,
        this.state.param
      ).then(data => {
        this.setState({ dataLoaded: true, jsonData: data });
      });
    } else {
      UsColony.get(event.target.value, this.state.jwt).then(data => {
        this.setState({ dataLoaded: true, jsonData: data });
      });
      this.resetParam();
    }
  }

  render() {
    return (
      <UsColonyDoc
        {...this.state}
        updatePayload={this.updatePayload}
        resetParam={this.resetParam}
        updateParam={this.updateParam}
        callGET={this.UsColonyGET}
      />
    );
  }
}

export default USColonyAPIPage;
