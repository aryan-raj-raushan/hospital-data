import React, { useState } from "react";
import FormAction from "./FormAction";
import Input from "./Input";
import { signupFields } from "../Const/const";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const fieldsState = Object.fromEntries(
  signupFields.map((field) => [field.id, ""])
);
const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  // const [userData, setUserData] = useState<any>();
  // const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState<string | null>(null);
  const isFormValid = Object.values(signupState).every(
    (value) => value.trim() !== ""
  );
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { id, value } = e.target;

  //   // Validate the field and update the error state
  //   if (
  //     signupFields.find((field) => field.id === id)?.isRequired &&
  //     value.trim() === ""
  //   ) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       [id]: `${id} is required`,
  //     }));
  //   } else {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       [id]: "", // Clear the error message if the field is filled
  //     }));
  //   }

    setSignupState({ ...signupState, [id]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createAccount();
  };

  // Handle Signup API Integration here
  const createAccount = async () => {
    const { email, password, username } = signupState;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: username
        })
        // setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = getCustomErrorMessage(errorCode);
        setError(errorMessage);
      });
  };

  const getCustomErrorMessage = (errorCode: string) => {
    // Create a mapping of Firebase error codes to custom error messages
    const errorMessages: any = {
      "auth/invalid-email":
        "Invalid email address. Please try with a different email.",
      "auth/email-already-in-use":
        "Email address is already in use. Please use a different email or login",
      // Add more error codes and custom messages as needed
    };

    return (
      errorMessages[errorCode] || "An error occurred. Please try again later."
    ); // Default message
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {signupFields.map((field) => (
          <div key={field.id}>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          </div>
        ))}
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
        <FormAction
          handleSubmit={handleSubmit}
          text="Signup"
          disabled={!isFormValid}
        />
      </div>
    </form>
  );
};

export default Signup;