import React from "react";
import { setEditCard, UpdateMainCard } from "../slices/prove-slice";
import { useSelector } from "react-redux";
import store from "../store";
import { useNavigate } from "react-router-dom";

const EditMainComponent = () => {
  const navigate = useNavigate();

  const editCard = useSelector((state) => {
    return state.ProveMainInfo.editCard;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    store.dispatch(setEditCard({ ...editCard, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(UpdateMainCard());
    navigate("/proveMain");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="edit-form">
        <h1 className="mb-4">Edit Card</h1>
        <div className="mb-3">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            value={editCard.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Middle Name:</label>
          <input
            type="text"
            name="middleName"
            className="form-control"
            value={editCard.middleName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          save
        </button>
      </form>
    </div>
  );
};

export default EditMainComponent;
