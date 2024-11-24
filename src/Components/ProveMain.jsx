import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ProveMain = () => {
  // const test = useSelector((state) => state);
  // console.log(test)

  return (
    <div className="prove-main-card">
      <div className="card-sec">
        <p>FirstName: {"fullName"}</p>
        <p>Middle Name: {"middleName"}</p>
        <NavLink to={"/editMain"}>Go to Edit component</NavLink>
      </div>
    </div>
  );
};

export default ProveMain;
