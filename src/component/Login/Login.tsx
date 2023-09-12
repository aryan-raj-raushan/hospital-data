import React, { useState } from "react";
import Input from "./Input";
import { loginFields } from "../Const/const";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";

const fields = loginFields;
const fieldsState: any = {};
fields.forEach((field: any) => (fieldsState[field.id] = ""));

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    authenticateUser();
  };
  const apiKey = 1234

  //Handle Login API Integration here
  const authenticateUser = () =>{
        
       
    const endpoint=`https://api.loginradius.com/identity/v2/auth/login?apikey=${apiKey}`;
     fetch(endpoint,
         {
         method:'POST',
         headers: {
         'Content-Type': 'application/json'
         },
         body:JSON.stringify(loginFields)
         }).then(response=>response.json())
         .then(data=>{
            //API Success from LoginRadius Login API
         })
         .catch(error=>console.log(error))
     
}

  return (
    <form className="space-y-6">
      <div className="space-y-2">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
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
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
};

export default Login;
