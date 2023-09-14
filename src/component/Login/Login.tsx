import React, { useState } from "react";
import Input from "./Input";
import { loginFields } from "../Const/const";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase.config";

export type LoginState = {
  [key: string]: string;
};
const Login = () => {
  const [loginState, setLoginState] = useState<LoginState>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>();
  const isFormValid = Object.values(loginState).every(
    (value) => value && value.trim() !== ""
  );
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    accountLogin();
  };

  const accountLogin = () => {
    const { email, password }: any = loginState;

    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        setUser(user);
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
      "auth/wrong-password":
        "Wrong password. Please enter the correct password.",
        "auth/email-not-found":
      "Email not found. The provided email address is not registered.",
      // Add more error codes and custom messages as needed
    };

    return (
      errorMessages[errorCode] || "An error occurred. Please try again later."
    ); // Default message
  };

  return (
    <form className="space-y-6">
      <div className="space-y-2">
        {loginFields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id] || ""}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormExtra />
      {error && <p className="text-red-500 text-sm font-normal">{error}</p>}
      <FormAction
        handleSubmit={handleSubmit}
        text="Login"
        disabled={!isFormValid}
      />
    </form>
  );
};

export default Login;
