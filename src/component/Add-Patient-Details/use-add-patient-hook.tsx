import axios from "axios";
import { useEffect, useState } from "react";

const useAddPatientHook = () => {

  const initialFormData = {
    name: '',
    phone_number: '',
    date_of_birth: '',
    residence: '',
    doctor_appointed: '',
  };

  const [formData, setFormData] = useState<any>(initialFormData);

  const [message, setMessage] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone_number: "",
      date_of_birth: "",
      residence: "",
      doctor_appointed: "",
    });
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();

  //   const data = {
  //     Name: formData.name,
  //     Phone: formData.phone_number,
  //     DOB: formData.date_of_birth,
  //     Residence: formData.residence,
  //     Appointment: formData.doctor_appointed,
  //   };

  //   axios
  //     .post(
  //       "https://sheet.best/api/sheets/7b02cd82-bdf1-4158-abd3-b0351f6ecc8d",
  //       data
  //     )
  //     .then((response) => {
  //       console.log(response); // Log the response data
  //       setMessage(response.data.message);
  //       resetForm();
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  const [patientData, setPatientData] = useState(null);

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

  const createPatientDetails = (e:any) => {
    e.preventDefault();
    axios
      .post(
        "https://sheetdb.io/api/v1/4xxmijjpz0pc1",
        {
          data: [
            {
              Name: formData.name,
              Phone: formData.phone_number,
              DOB: formData.date_of_birth,
              Residence: formData.residence,
              Appointment: formData.doctor_appointed,
            },
          ],
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response); // Log the response data
        setMessage(response.data.message);
        resetForm();
      })
      .catch((error) => {
        console.error("Error creating patient details:", error);
        // Handle error if needed
      });
  };

  // const updatePatientDetails = async () => {
  //   try {
  //     const response = await axios.patch('https://sheetdb.io/api/v1/4xxmijjpz0pc1/id/3', {
  //       data: {
  //         name: 'Emma',
  //       },
  //     }, {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error updating data:', error);
  //     // Handle errors if needed
  //   }
  // };

  useEffect(() => {
    getPatientDetails();
  }, []);

  // useEffect(() => {
  //   updatePatientDetails();
  // }, []);


  // console.log("data", patientData);

  return {
    message,
    handleInputChange,
    formData,
    createPatientDetails,
  };
};

export default useAddPatientHook;
