import usePatientsHook from "./use-patients-hook";

const Patients = () => {
  const {
    patientData,
    isEditing,
    handleEdit,
    handleSave,
    handleChange,
    fields,
  } = usePatientsHook();

  return (
        <div className="flex items-center flex-wrap m-3 bg-white">
          {patientData.map((data: any, index: number) => {
            return (
              <div
                key={index}
                className="sm:w-[280px] w-full  m-2 p-4 shadow-lg rounded-lg"
              >
                <h2 className="text-xl font-semibold mb-4">
                  Patient Details {index+1}
                </h2>
                <div>
                  {fields.map((field) => (
                    <div
                      key={field.key}
                      className="mb-2 flex items-center gap-2"
                    >
                      <label className="text-gray-600">{field.label}:</label>
                      {isEditing ? (
                        <input
                          type={field.key === "DOB" ? "date" : "text"}
                          name={field.key}
                          value={data[field.key]}
                          onChange={handleChange}
                          className="border rounded-md p-2 w-full"
                        />
                      ) : (
                        <div>{data[field.key]}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  {isEditing ? (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:ring focus:ring-blue-200"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:ring focus:ring-blue-200"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
  );
};

export default Patients;
