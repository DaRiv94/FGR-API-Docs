import React from 'react'
import JSONPretty from "react-json-pretty";

function DataSection({className, jwt, hasAuthentication, updatePayload, payload, dataLoaded, jsonData}) {
  return (
    <div className={className}>
          <div className="payloadDiv">
            <label>
              PAYLOAD:{" "}
              {hasAuthentication ? (
                <span
                  className={jwt !== "" ? "Authenticated" : "Not-Authenticated"}
                >
                  {jwt !== "" ? "Authenticated" : "Not-Authenticated"}
                </span>
              ) : (
                <></>
              )}
            </label>
            <textarea
              className="payloadTextArea"
              onChange={updatePayload}
              value={payload}
              placeholder="Your payload data should go here. (Note: payload data must be in JSON format)"
            />
          </div>
          <div className="responseDiv">
            <label>RESPONSE:</label>
            {dataLoaded ? (
              <JSONPretty id="json-pretty" data={jsonData} />
            ) : (
              <p>Response data will appear here</p>
            )}
          </div>
        </div>
  )
}

export default DataSection
