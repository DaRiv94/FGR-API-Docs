import React from "react";

function Payload({schema, example, exampleNote}) {
  return (
    <>
      <p className="payloadlabel">
        <b>Payload</b>
      </p>
      <ul>
        {schema.map(property => {
          return (
            <li key={property.key} >
              {property.key + " : " + property.type}
              {property.optional ? <span>(optional)</span> : <></>}
            </li>
          );
        })}
      </ul>
      <p>
        <b>Example Payload:</b>
      </p>
      <code>{example}</code>

      <p>{exampleNote}</p>
    </>
  );
}

export default Payload;
