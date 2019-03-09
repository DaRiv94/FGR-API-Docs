import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export class API_Route extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  render() {

    //keep in mind that sub Routs with have their method and enpoint to make their title
    let {
      className,
      endpoint,
      title,
      url,
      methodType,
      hasIdInput,
      hasLogin,
      hasPayload,
      header,
      description,
      response,
      payload,
      exampleId,
      idNote,
      renderLogin,
      renderApiCall,
      renderIdInput,
      renderPayload,
      renderResponse
    } = this.props;

    return (
      
      <div className={className}>
      <Button
          variant="primary"
          onClick={() => this.setState({ open: !this.state.open })}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.open}
        >
        {this.props.title}
          
        </Button>
        <Collapse in={this.state.open}>
          <div className={className}>
           <p><b>{header}</b></p> 
            <p>{description}</p>
            {hasLogin? <div>{renderLogin()}</div> : <></>}
            {renderResponse(response)}
            {hasPayload? <div>{renderPayload(payload)}</div> : <></>}
            {hasIdInput? <div>{renderIdInput(exampleId, idNote)}</div>:<></>}
            {renderApiCall(url, methodType, endpoint, hasIdInput)}

          </div>
        </Collapse>
      </div>
        
      
    );
  }
}

export default API_Route;


