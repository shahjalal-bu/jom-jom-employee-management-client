import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "../../utils/Axios";

const EditSalaryTo = ({ employeeId, salaryId }) => {
  const [toDate, setToDate] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = () => {
    if (!toDate) {
      return alert("Must be fill up date");
    }
    const data = {
      to: toDate,
    };
    axios
      .put(`/employee/editsalary/${employeeId}/${salaryId}`, data)
      .then((response) => {
        alert("Salary to date updated successfully");
        setModalOpen(false);
        setToDate(null);
      })
      .catch((error) => {
        console.error("Error updating salary:", error);
      });
    console.log(data);
  };

  return (
    <div>
      {/* The button to open modal */}
      <button className="btn btn-sm" onClick={() => setModalOpen(true)}>
        Edit to date
      </button>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        checked={isModalOpen}
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box h-1/2">
          <div className="mb-4">
            <label htmlFor="toDate" className="block mb-1">
              To:
            </label>
            <DatePicker
              id="toDate"
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="yyyy-MM-dd"
              className="w-full px-2 py-1 border border-gray-300 rounded-md"
            />
          </div>
          <button onClick={handleSubmit} className=" btn mx-1">
            Add Salary
          </button>
          <button onClick={() => setModalOpen(false)} className="btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSalaryTo;
