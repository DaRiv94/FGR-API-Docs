import React, { Component } from "react";
import API_Section from "./API_Section";
import LoginLogout from "../common/LoginLogout";
import Response from "../common/Response";
import Payload from "../common/Payload";
import IdInput from "../common/IdInput";
import ApiCall from '../common/ApiCall';
import DataSection from "../DataSection/DataSection";


  /*eslint-disable react/jsx-pascal-case*/

export class Vidly_API_Doc extends Component {
  constructor(props) {
    super(props);
    //has this.props.appData

    this.state = {};
    this.renderLogin = this.renderLogin.bind(this);
    this.renderIdInput = this.renderIdInput.bind(this);
    this.renderPayload = this.renderPayload.bind(this);
    this.renderResponse = this.renderResponse.bind(this);
    this.renderApiCall = this.renderApiCall.bind(this);
  }

  //renderLogin
  //will return login componet for use to login and out.
  renderLogin() {
    let athenticationProps = {
      login: this.props.login,
      logout: this.props.logout,
      jwt: this.props.jwt
    };

    return <LoginLogout {...athenticationProps} />;
  }

  //renderIdInput
  //will render the input for endpoints that require an id.
  renderIdInput(exampleId, idNote) {
    return (
      <IdInput updateId={this.props.updateId} id={this.props.id} exampleId={exampleId} idNote={idNote} />
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
  renderApiCall(url, method, endpoint, hasId) {
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
      <ApiCall url={url} method={method} httpMethod={httpmethodToCall} hasId={hasId} endpoint={endpoint} />
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
          <h1>Vidly</h1>

          <h6>Vidly is an example movie rental service api.</h6>
          <h6>
            Vidly is hosted at{" "}
            <a
              href="https://boiling-meadow-22539.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://boiling-meadow-22539.herokuapp.com
            </a>
          </h6>
          <h6>All api Endpoints begin with the Base Url above.</h6>
          <h6 className="ApiExample">
            <b>Example:</b> Using Base Url{" "}
            <i>https://boiling-meadow-22539.herokuapp.com</i> and Endpoint{" "}
            <i>/api/auth</i> would call{" "}
            <i>https://boiling-meadow-22539.herokuapp.com/api/auth</i>
          </h6>

          <API_Section
            renderApiCall={this.renderApiCall}
            renderLogin={this.renderLogin}
            renderPayload={this.renderPayload}
            renderResponse={this.renderResponse}
            renderIdInput={this.renderIdInput}
            className="UISection bgcolor1"
            {...this.props.appData.vidlyAuthenticationAuthorization}
            title={this.props.appData.vidlyAuthenticationAuthorization.title}
          />
          <API_Section
            renderApiCall={this.renderApiCall}
            renderLogin={this.renderLogin}
            renderPayload={this.renderPayload}
            renderResponse={this.renderResponse}
            renderIdInput={this.renderIdInput}
            className="UISection bgcolor2"
            {...this.props.appData.Vidlygenres}
            title={this.props.appData.Vidlygenres.title}
          />
          <API_Section
            renderApiCall={this.renderApiCall}
            renderLogin={this.renderLogin}
            renderPayload={this.renderPayload}
            renderResponse={this.renderResponse}
            renderIdInput={this.renderIdInput}
            className="UISection bgcolor1"
            {...this.props.appData.VidlyCustomers}
            title={this.props.appData.VidlyCustomers.title}
          />
          <API_Section
            renderApiCall={this.renderApiCall}
            renderLogin={this.renderLogin}
            renderPayload={this.renderPayload}
            renderResponse={this.renderResponse}
            renderIdInput={this.renderIdInput}
            className="UISection bgcolor2"
            {...this.props.appData.VidlyMovies}
            title={this.props.appData.VidlyMovies.title}
          />
          <API_Section
            renderApiCall={this.renderApiCall}
            renderLogin={this.renderLogin}
            renderPayload={this.renderPayload}
            renderResponse={this.renderResponse}
            renderIdInput={this.renderIdInput}
            className="UISection bgcolor1"
            {...this.props.appData.vidlyRentalReturns}
            title={this.props.appData.vidlyRentalReturns.title}
          />


        </div>

        <DataSection className="dataDiv col-md-5" {...dataSectionsProps} />
      </div>
    );
  }
}

export default Vidly_API_Doc;
