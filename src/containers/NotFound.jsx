import React from "react";
const errorImage =
  "https://res.cloudinary.com/alvison-hunter/image/upload/v1661298881/JestEnzymeReact/404Error_auvbu8.png";
const NotFound = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-12">
            <img src={errorImage} class="img-fluid" alt="Uh oh! 404" />
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <p className="text-info fs-3 my-2">
              Hey, now! You're far beyond the border, pal! Go back, home!
            </p>
            <button type="button" className="btn btn-outline-danger mb-5">
              Reroute
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
