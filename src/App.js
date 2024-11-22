import { useState } from "react";
import "./App.css";
import store from "./store";
import { setFirstName, setLastName } from "./slices/form-slice";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { firstName, lastName } = useSelector((store) => store.userSliceInfo);

  console.log("firstName", firstName);
  console.log("lastName", lastName);

  return (
    <div className="react-form">
      <div className="form-group mb-3 ">
        <label class="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          value={formData.firstName}
          onChange={(e) => {
            handleChange(e);
            store.dispatch(setFirstName(e.target.value));
          }}
        />
      </div>
      <div className="form-group mb-3 ">
        <label class="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          value={formData.lastName}
          onChange={(e) => {
            handleChange(e);
            store.dispatch(setLastName(e.target.value));
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  );
}

export default App;
