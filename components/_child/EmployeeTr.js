import Image from "next/image";
import React, { useState } from "react";
import axios from "../../utils/Axios";

const EmployeeTr = ({
  name,
  role,
  id,
  setEmployData,
  employData,
  date,
  photo,
}) => {
  let [attendance, setAttendance] = useState(1);
  const [comment, setComment] = useState("");

  //handle function for present

  function handleRadioPresent() {
    setComment("");
    setAttendance("");
    const newValue = 1;
    let copyEmployData = [...employData];
    let index = copyEmployData.findIndex((item) => item.employeeId === id);
    if (index !== -1) {
      copyEmployData[index] = {
        employeeId: id,
        comment,
        attendance: newValue,
        date,
      };
    } else {
      copyEmployData = [
        ...copyEmployData,
        {
          employeeId: id,
          comment,
          attendance: newValue,
          date,
        },
      ];
    }

    setEmployData(copyEmployData);
  }

  //handle if half

  function handleRadioHalf() {
    setComment("");
    setAttendance("");
    const newValue = 0.5;
    let copyEmployData = [...employData];
    let index = copyEmployData.findIndex((item) => item.employeeId === id);
    if (index !== -1) {
      copyEmployData[index] = {
        employeeId: id,
        comment,
        attendance: newValue,
        date,
      };
    } else {
      copyEmployData = [
        ...copyEmployData,
        {
          employeeId: id,
          comment,
          attendance: newValue,
          date,
        },
      ];
    }

    setEmployData(copyEmployData);
  }

  //handle if absent

  function handleRadioChangeWithComment() {
    let copyEmployData = [...employData];
    let index = copyEmployData.findIndex((item) => item.employeeId === id);
    if (index !== -1) {
      copyEmployData[index] = {
        employeeId: id,
        comment,
        attendance: attendance,
        date,
      };
    } else {
      copyEmployData = [
        ...copyEmployData,
        {
          employeeId: id,
          comment,
          attendance: attendance,
          date,
        },
      ];
    }

    setEmployData(copyEmployData);
    setComment("");
    setAttendance("");
  }

  // function format(inputDate) {
  //   let date = new Date(inputDate);
  //   return date.toLocaleDateString("en-GB", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //   });
  // }

  let index = employData.find((item) => item.employeeId === id);
  console.log(index?.attendance);
  // console.log("object", index);

  return (
    <div
      className={`p-2 rounded shadow-sm ${
        index?.attendance === 1 && "bg-green-100"
      } ${index?.attendance === 0 && "bg-red-100"}
      ${index?.attendance === 0.5 && "bg-yellow-100"}`}
    >
      <div className="flex items-center justify-around space-x-3 shadow py-2 px-3 rounded">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <Image
              src={
                photo
                  ? `https://drive.google.com/uc?id=${photo}`
                  : "https://daisyui.com/tailwind-css-component-profile-2@56w.png"
              }
              height={100}
              width={100}
              alt="avator"
            ></Image>
          </div>
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm opacity-50">{role}</div>
        </div>
        <div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Present</span>
              <input
                type="radio"
                name={`${name}`}
                className="ml-2 radio checked:bg-blue-500"
                value=""
                onChange={handleRadioPresent}
              />
            </label>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Absent</span>
                <input
                  type="radio"
                  name={`${name}`}
                  className="ml-2 radio checked:bg-red-500 "
                  value=""
                  onChange={() => setAttendance(0)}
                />
              </label>
            </div>
            <label className="label cursor-pointer">
              <span className="label-text">Half</span>
              <input
                type="radio"
                name={`${name}`}
                className="ml-2 radio checked:bg-blue-500"
                value=""
                onChange={handleRadioHalf}
              />
            </label>
          </div>
        </div>
      </div>

      {attendance == "0" && (
        <div className="flex my-2">
          <input
            type="text"
            className="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            placeholder="Enter comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="bg-zinc-900 text-white rounded p-2 ml-2"
            onClick={handleRadioChangeWithComment}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeTr;
