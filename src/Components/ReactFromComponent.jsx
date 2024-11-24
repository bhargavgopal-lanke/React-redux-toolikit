import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { validate } from "../helper/validations";
import { setErrors, setFirstName, setLastName } from "../slices/form-slice";
import store from "../store";

const ReactFromComponent = () => {
  // const [formData, setFormData] = useState({});
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };


  const { firstName, lastName, errors } = useSelector(
    (store) => store?.userSliceInfo
  );

  const handleChange = (e) => {
    e.preventDefault();
    const validateErrors = validate(firstName, lastName);
    if (Object.keys(validateErrors).length > 0) {
      store.dispatch(setErrors(validateErrors));
    }
  };

  return (
    <div className="react-form">
      <form onSubmit={handleChange}>
        <div className="form-group mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={firstName}
            onChange={(e) => {
              store.dispatch(setFirstName(e.target.value));
            }}
          />
          {errors.firstName && (
            <span className="error-msg">{errors.firstName}</span>
          )}
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={lastName}
            onChange={(e) => {
              store.dispatch(setLastName(e.target.value));
            }}
          />
          {errors.lastName && (
            <span className="error-msg">{errors.lastName}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <div className="my-3">
          <NavLink to={"/proveMain"}>Go to prove component</NavLink>
        </div>
      </form>
    </div>
  );
};

export default ReactFromComponent;
