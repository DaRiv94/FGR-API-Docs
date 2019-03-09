import React from "react";

function LoginLogout({ jwt, login, logout }) {
  return (
    <>
      <div className="row">
        <label className="alert alert-warning col-12 col-sm-6">
          Authentication Required
        </label>
        <label
          onClick={jwt !== "" ? logout : login}
          className={
            jwt !== ""
              ? "col-12 col-sm-2 offset-sm-3 logbtn btn btn-danger"
              : "col-12 col-sm-2 offset-sm-3 logbtn btn btn-primary"
          }
        >
          {jwt !== "" ? "logout" : "login"}
        </label>
      </div>
      {jwt !== "" ? (
        <p>Client must be logged in to use this endpoint.</p>
      ) : (
        <p>
          Client must be logged in to use this endpoint. Go to
          <i>/api/auth</i> to log in or click the <i>login</i> button
        </p>
      )}
    </>
  );
}

export default LoginLogout;
