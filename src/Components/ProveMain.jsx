import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ProveMain = () => {
  const { fullName, middleName } = useSelector(
    (state) => state?.ProveMainInfo?.mainCard
  );
  
  return (
    <div className="prove-main-card">
      <div className="card-sec">
        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            disabled
            value={fullName}
          />
        </div>
        <div className="mb-3">
          <label>Middle Name</label>
          <input
            type="text"
            className="form-control"
            disabled
            value={middleName}
          />
        </div>
        <NavLink to={"/editMain"}>Go to Edit component</NavLink>
      </div>
    </div>
  );
};

export default ProveMain;
