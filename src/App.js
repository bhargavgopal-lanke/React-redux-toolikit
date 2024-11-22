import { useState } from "react";
import "./App.css";
import store from "./store";
import { setFirstName, setLastName } from "./slices/form-slice";
import { useSelector } from "react-redux";

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
    <div className="App">
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => {
            handleChange(e);
            store.dispatch(setFirstName(e.target.value));
          }}
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => {
            handleChange(e);
            store.dispatch(setLastName(e.target.value));
          }}
        />
      </div>
    </div>
  );
}

export default App;
