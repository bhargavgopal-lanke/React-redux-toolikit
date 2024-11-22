export const validate = (firstName, lastName) => {
  const errors = {};

  if (firstName === null || firstName === undefined) {
    errors.firstName = "first name is required";
  } else if (!firstName.trim()) {
    // only trim only if firtsname is not null or undefined
    errors.firstName = "Please enter valid first Name";
  }
  if (lastName === null || lastName === undefined) {
    errors.lastName = "last name is required";
  } else if (!lastName.trim()) {
    // only trim only if lastname is not null or undefined
    errors.lastName = "Please enter valid last name";
  }

  return errors;
};
