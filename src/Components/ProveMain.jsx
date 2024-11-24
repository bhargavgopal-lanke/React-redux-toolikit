import React from "react";
import { useSelector } from "react-redux";

const ProveMain = () => {
  const { fullName, middleName } = useSelector((state) =>
    console.log("maincardstate", state.ProveMain.mainCard)
  );

  return (
    <div className="prove-main-card">
      <div className="card-sec">
        <p>FirstName: {fullName}</p>
        <p>Middle Name: {middleName}</p>
      </div>
    </div>
  );
};

export default ProveMain;
