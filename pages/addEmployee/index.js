import React, { useState } from "react";
import Format from "../../layout/Format";
import { useForm } from "react-hook-form";
import axios from "../../utils/Axios";
const index = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [photo, setPhoto] = useState("");

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", photo);
      formData.append("name", data?.name);
      formData.append("role", data?.role);
      formData.append("salary", data?.salary);
      const res = await axios.post("/employee", formData);
      console.log(res);
      // const response = await axios.post("/employee", data);
      if (res.status === 200) {
        alert("Success: Data was posted successfully!");
      }

      console.log(res.data);
      setPhoto("")
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Format>
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg"
        >
          <h2 className="text-lg font-medium mb-4">Add Employee</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Employee Name"
              className="border border-gray-100 shadow py-3 px-2 rounded-sm w-4/5 my-3"
              {...register("name")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Employee Role
            </label>
            <input
              type="text"
              placeholder="Employee Role"
              className="border border-gray-100 shadow py-3 px-2 rounded-sm w-4/5 my-3"
              {...register("role")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Salary
            </label>
            <input
              type="text"
              placeholder="Employee Salary"
              className="border border-gray-100 shadow py-3 px-2 rounded-sm w-4/5 my-3"
              {...register("salary")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Photo
            </label>
            <input
              type="file"
              placeholder="Employee Photo"
              className="border border-gray-100 shadow py-3 px-2 rounded-sm w-4/5 my-3"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>

          <button type="submit" className="btn mt-2 block">
            Submit
          </button>
        </form>
      </div>
    </Format>
  );
};

export default index;
