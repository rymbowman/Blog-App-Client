import * as yup from "yup";

export const getValidationSchema = (usersData) => {
  return yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Please enter a valid email (e.g. sample@email.com)")
      .required("Email is required")
      .test("unique-email", "Email is already in use", (value) => {
        return !usersData.some((user) => user.email === value);
      }),
    username: yup
      .string()
      .min(6, "Username must be at least 6 characters long.")
      .required("Username is required")
      .test("unique-username", "Username is already in use", (value) => {
        return !usersData.some((user) => user.username === value);
      }),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long.")
      .required("Password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])/,
        "Password must contain a number, a letter, and a special character."
      )
      .required("Password is required"),
  });
};

export const validateForm = async (schema, formData) => {
  try {
    await schema.validate(formData, {
      abortEarly: false,
    });
    return {};
  } catch (error) {
    const errors = {};
    if (error.inner) {
      error.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
    } else {
      errors[error.path] = error.message;
    }
    console.log("Validation errors:", errors); // Log validation errors for debugging
    return errors;
  }
};
