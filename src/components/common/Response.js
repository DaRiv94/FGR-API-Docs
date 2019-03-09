import React from "react";

function Response({ info, example }) {
  return (
    <>
      <p>
        <b>Response</b>
      </p>

      <p>{info}</p>

      <p>
        <b>Example Response</b>
      </p>

      <code>{example}</code>
    </>
  );
}

export default Response;
