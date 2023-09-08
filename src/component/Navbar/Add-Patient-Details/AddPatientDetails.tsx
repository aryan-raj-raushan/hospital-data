import React from "react";
import useAddPatientHook from "./use-add-patient-hook";

const AddPatientDetails = () => {
  const { message, handleInputChange, formData, createPatientDetails } =
    useAddPatientHook();

  const inputFields = [
    {
      id: "name",
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter Name",
    },
    {
      id: "phone_number",
      name: "phone_number",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter Phone Number",
    },
    {
      id: "date_of_birth",
      name: "date_of_birth",
      label: "Date of Birth",
      type: "date",
      placeholder: "Select Date of Birth",
    },
    {
      id: "residence",
      name: "residence",
      label: "Place of Residence",
      type: "text",
      placeholder: "Enter Place of Residence",
    },
    {
      id: "doctor_appointed",
      name: "doctor_appointed",
      label: "Appointed Doctor",
      type: "text",
      placeholder: "Enter Appointed Doctor",
    },
  ];

  return (
    <div className="flex items-center justify-center py-10 bg-white">
      <div className="p-8 rounded-lg shadow-md w-full max-w-lg border border-gray-200">
        <h1 className="text-2xl font-semibold mb-4">Add Patient Information</h1>
        <form onSubmit={createPatientDetails} className="space-y-4">
          {inputFields.map((field) => (
            <div key={field.id} className="mb-4">
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}:
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                required
                value={formData[field.name]}
                onChange={handleInputChange}
                placeholder={field.placeholder}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md outline-none"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:ring focus:ring-blue-200"
          >
            Add Patient
          </button>
        </form>

        {message && <div className="mt-4 text-green-500">{message}</div>}
      </div>
    </div>
  );
};

export default AddPatientDetails;
