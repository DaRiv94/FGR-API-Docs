import React from "react";
import API_MultiRoute from "./API_MultiRoute";
import API_Route from "./API_Route";

function API_Section({
  className,
  title,
  endpoints,
  renderLogin,
  renderIdInput,
  renderPayload,
  renderResponse,
  renderApiCall
}) {
  return (
    <div className={className}>
      <h4>{title}</h4>

      <div className=" row">
        {endpoints.map(endpoint => {
          if (endpoint.multiroute) {
            return (
              <API_MultiRoute
                key={endpoint.key}
                renderLogin={renderLogin}
                renderIdInput={renderIdInput}
                renderPayload={renderPayload}
                renderResponse={renderResponse}
                renderApiCall={renderApiCall}
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
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default API_Section;
