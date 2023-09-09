import axios from "axios";
import { useEffect, useState } from "react";

const usePatientsHook = () => {
  const initialPatientData = {
    Name: "",
    Phone: "",
    DOB: "",
    Residence: "",
    Appointment: "",
  };
  const [patientData, setPatientData] = useState([initialPatientData]);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const getPatientDetails = () => {
    const apiUrl = "https://sheetdb.io/api/v1/4xxmijjpz0pc1";
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle successful response
        setPatientData(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getPatientDetails();
  }, []);

  return { patientData,isEditing, handleEdit,handleSave,handleChange};
};

export default usePatientsHook;
