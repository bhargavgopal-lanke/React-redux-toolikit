// import { useState } from "react";
import "./App.css";
import store from "./store";
import { setErrors, setFirstName, setLastName } from "./slices/form-slice";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { validate } from "./helper/validations";

function App() {
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

  console.log("error", errors);

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
      </form>
    </div>
  );
}

export default App;
