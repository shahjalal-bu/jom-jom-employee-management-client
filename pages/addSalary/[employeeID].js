import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "../../utils/Axios";
import { useRouter } from "next/router";

const UpdateSalaryForm = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [salary, setSalary] = useState("");
  const router = useRouter();

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      from: fromDate,
      to: toDate,
      salary: salary,
    };
    axios
      .put(`/employee/salary/${router.query.employeeID}`, data)
      .then((response) => {
        console.log("Salary updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating salary:", error);
      });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="fromDate" className="block mb-1">
          From:
        </label>
        <DatePicker
          id="fromDate"
          selected={fromDate}
          onChange={handleFromDateChange}
          dateFormat="yyyy-MM-dd"
          className="w-full px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="toDate" className="block mb-1">
          To:
        </label>
        <DatePicker
          id="toDate"
          selected={toDate}
          onChange={handleToDateChange}
          dateFormat="yyyy-MM-dd"
          className="w-full px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="salary" className="block mb-1">
          Salary:
        </label>
        <input
          type="text"
          id="salary"
          value={salary}
          onChange={handleSalaryChange}
          className="w-full px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Salary
      </button>
    </form>
  );
};

export default UpdateSalaryForm;
