import Image from "next/image";
import React, { useState } from "react";
import axios from "../../utils/Axios";

const EmployeeTr = ({ name, role, id, setEmployData, employData, date, photo }) => {
  let [present, setPresent] = useState(true);
  const [comment, setComment] = useState("");
  function handleRadioChange(event) {
    setComment("");
    setPresent("");
    const newValue = event.target.value;
    let copyEmployData = [...employData];
    let index = copyEmployData.findIndex((item) => item.employeeId === id);
    if (index !== -1) {
      copyEmployData[index] = {
        employeeId: id,
        comment,
        present: newValue,
        date,
      };
    } else {
      copyEmployData = [
        ...copyEmployData,
        {
          employeeId: id,
          comment,
          present: newValue,
          date,
        },
      ];
    }

    setEmployData(copyEmployData);
  }
  function handleRadioFalse(event) {
    setPresent(e.target.value);
  }

  function handleRadioChangeWithComment() {
    let copyEmployData = [...employData];
    let index = copyEmployData.findIndex((item) => item.employeeId === id);
    if (index !== -1) {
      copyEmployData[index] = {
        employeeId: id,
        comment,
        present: present,
        date,
      };
    } else {
      copyEmployData = [
        ...copyEmployData,
        {
          employeeId: id,
          comment,
          present: present,
          date,
        },
      ];
    }

    setEmployData(copyEmployData);
    setComment("");
    setPresent("");
  }

  function format(inputDate) {
    let date = new Date(inputDate);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  let index = employData.find((item) => item.employeeId === id);
  console.log("object", index);

  return (
    <div className={`p-2 rounded shadow-sm ${index && "bg-red-100"}`}>
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
                value="true"
                onChange={handleRadioChange}
              />
            </label>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Absent</span>
                <input
                  type="radio"
                  name={`${name}`}
                  className="ml-2 radio checked:bg-red-500 "
                  value="false"
                  onChange={(e) => setPresent(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {present === "false" && (
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
