import React from "react";
import sleeping from "../../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="text-center">
      <h2 className="text-primary text-center py-4">Mechanic is sleeping</h2>
      <img className="w-50 " src={sleeping} alt="" />
    </div>
  );
};

export default NotFound;
