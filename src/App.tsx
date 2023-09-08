import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/Navbar/About/About";
import Patients from "./component/Navbar/Patients/Patients";
import AddPatientDetails from "./component/Navbar/Add-Patient-Details/AddPatientDetails";
import Home from "./component/Home/Home";
// import AddPatientForm from './component/PatientDetails';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
