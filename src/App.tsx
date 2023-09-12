import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Patients from "./component/Patients/Patients";
import AddPatientDetails from "./component/Add-Patient-Details/AddPatientDetails";
import Home from "./component/Home/Home";
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// import Login from "./component/Login/Login";
// import SignUp from "./component/Login/SignUp";
import SignUpPage from "./component/Login/SignUpPage";
import LoginPage from "./component/Login/LoginPage";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/add-patients" element={<AddPatientDetails />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
library.add(fab, fas, far)
