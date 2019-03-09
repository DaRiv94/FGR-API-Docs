import React, { Component } from "react";
import API_Route from "./API_Route";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export class API_MultiRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  getendpointtitlelist() {
    return <></>;
  }

  render() {
    let {
      className,
      title,
      endpoints,
      renderLogin,
      renderApiCall,
      renderIdInput,
      renderPayload,
      renderResponse
    } = this.props;

    return (
      <div className={className}>
        <>
          <Button
            variant="primary"
            onClick={() => this.setState({ open: !this.state.open })}
            aria-controls="example-collapse-text"
            aria-expanded={this.state.open}
          >
            {title}
          </Button>
          <Collapse in={this.state.open}>
            <div className={className}>
              {endpoints.map(endpoint => {
                if (endpoint.multiroute) {
                  return (
                    <API_MultiRoute
                      renderLogin={renderLogin}
                      renderIdInput={renderIdInput}
                      renderPayload={renderPayload}
                      renderResponse={renderResponse}
                      renderApiCall={renderApiCall}
                      key={endpoint.key}
                      className="routeDiv col-12"
                      title={endpoint.endpoint}
                      endpoints={endpoint.endpoints}
                    />
                  );
                } else {
                  return (
                    <API_Route
                      renderLogin={renderLogin}
                      renderIdInput={renderIdInput}
                      renderPayload={renderPayload}
                      renderResponse={renderResponse}
                      renderApiCall={renderApiCall}
                      key={endpoint.key}
                      className="routeDiv col-12"
                      {...endpoint}
                      title={endpoint.methodType + " " + endpoint.title}
                    />
                  );
                }
              })}
            </div>
          </Collapse>
        </>
      </div>
    );
  }
}

export default API_MultiRoute;
