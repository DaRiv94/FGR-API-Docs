import React from "react";

function ApiCall({ url, method, httpMethod, hasId , endpoint }) {
  return (
    
    <div>
      <label className={method} >{method}</label>
      <button className="apicall btn btn-secondary" id={hasId.toString()} onClick={httpMethod} value={url}>
        {endpoint}
      </button>
    </div>
  );
}

export default ApiCall;
