import React, { Component } from "react";
import API_Section from "../API_Section";
// import LoginLogout from "../common/LoginLogout";
import Response from "../../common/Response";
import Payload from "../../common/Payload";
import ParamInput from "../../common/ParamInput";
import ApiCall from '../../common/ApiCall';
import DataSection from "../../DataSection/DataSection";


  /*eslint-disable react/jsx-pascal-case*/

export class US_Colony_Api_Doc extends Component {
  constructor(props) {
    super(props);
    //has this.props.appData

    this.state = {};
    // this.renderLogin = this.renderLogin.bind(this);
    this.renderIdInput = this.renderIdInput.bind(this);
    this.renderPayload = this.renderPayload.bind(this);
    this.renderResponse = this.renderResponse.bind(this);
    this.renderApiCall = this.renderApiCall.bind(this);
  }

  //renderLogin
  //will return login componet for use to login and out.
//   renderLogin() {
//     let athenticationProps = {
//       login: this.props.login,
//       logout: this.props.logout,
//       jwt: this.props.jwt
//     };

//     return <LoginLogout {...athenticationProps} />;
//   }

  //renderIdInput
  //will render the input for endpoints that require an id.
  renderIdInput(exampleParam, paramNote) {
    return (
      <ParamInput updateParam={this.props.updateParam} param={this.props.param} exampleParam={exampleParam} paramNote={paramNote} placeholder=":/Id" />
    );
  }

  //renderPayload- params is the payload data
  //renders the payload info for an endpoint.
  renderPayload(payload) {
    return (
      <Payload
        schema={payload.schema}
        example={payload.example}
        exampleNote={payload.exampleNote}
      />
    );
  }

  //renderResponse- param is the response data
  //renders response form endpoint.
  renderResponse(response) {
    return <Response info={response.info} example={response.example} />;
  }

  //renderApiCall - params are the url, method, and endpoint
  //will actully call the button
  renderApiCall(url, method, endpoint, hasParam) {
    var httpmethodToCall;
    switch(method){

      case "POST":
      httpmethodToCall=this.props.callPOST;
      break;
      case "PUT":
      httpmethodToCall=this.props.callPUT;
      break;
      case "DELETE":
      httpmethodToCall=this.props.callDELETE;
      break;
      default:
      httpmethodToCall=this.props.callGET;
    }




    return (
      <ApiCall url={url} method={method} httpMethod={httpmethodToCall} hasId={hasParam} endpoint={endpoint} />
    );
  }

  render() {
    //renders API_Sections,
    //Sections take a title, and an array of endpoints where enpoints contain inMemData, they also take all the render methods from this component

    //start with passing appData.vidlyRentalReturns

    let dataSectionsProps = {
      hasAuthentication: this.props.hasAuthentication,
      jwt: this.props.jwt,
      dataLoaded: this.props.dataLoaded,
      payload: this.props.payload,
      jsonData: this.props.jsonData,
      updatePayload: this.props.updatePayload
    };
    

    return (
      <div className="row">
        <div className="UIDiv col-md-7">
          <h1>FGR US Colony Api</h1>

            <h6>FGR US Colony Api uses a serverless architecture on Microsoft Azure by using a Microsoft Azure Function in the cloud.</h6>
            <h6>The benefit to using Azure Functions is that the developer does not need to manage a server, (hence serverless) and can focus more on the core logic necessary to building an application.</h6>
          <h6>FGR US Colony Api returns one of the 13 US Colonies by Id. Where the Id is the order in which a US Colony ratified the constitution of the United States to join the american union.</h6>
          
          <h6>This Api makes a single call to the endpoint...</h6>
          <h6 className="ApiExample">
            <i>https://fgrfunctions.azurewebsites.net/api/uscolony/:id</i>
          </h6>
          <h6>The :id that is supplied could be 1-13 where the returning states will be...</h6>
          <ol>
              <li>Delaware</li>
              <li>Pennsylvania</li>
              <li>New Jersey</li>
              <li>Georgia</li>
              <li>Connecticut</li>
              <li>Massachusetts</li>
              <li>Maryland</li>
              <li>South Carolina</li>
              <li>New Hampshire</li>
              <li>Virginia</li>
              <li>New York</li>
              <li>North Carolina</li>
              <li>Rhode Island</li>
          </ol>


          <API_Section
            renderApiCall={this.renderApiCall}
            renderLogin={this.renderLogin}
            renderPayload={this.renderPayload}
            renderResponse={this.renderResponse}
            renderIdInput={this.renderIdInput}
            className="UISection bgcolor1"
            {...this.props.appData.uscolonies}
            title={this.props.appData.uscolonies.title}
          />
          


        </div>

        <DataSection className="dataDiv col-md-5" {...dataSectionsProps} />
      </div>
    );
  }
}

export default US_Colony_Api_Doc;
