import React from "react";

const NotFound = () => {
  return (
    <>
      <h1 className="text-info display-2">Uh oh! 404</h1>
      <p className="text-danger">
        You're far beyond the border, pal! Go back, home!
      </p>
      <button type="button" className="btn btn-outline-danger">
        Reroute
      </button>
    </>
  );
};

export default NotFound;
