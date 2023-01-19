import Image from "next/image";
import React from "react";
import Format from "../../layout/Format";
import axios from "../../utils/Axios";
import DateFormat from "../../utils/DateFormat";
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const Employee = ({ data }) => {
  console.log(data);
  return (
    <Format>
      <div className="container md:p-11 flex justify-center">
        <div className="w-4/12 flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src={
                  data[0].photo
                    ? `https://drive.google.com/uc?id=${data[0].photo}`
                    : "https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                }
                height={100}
                width={100}
                alt="avator"
              ></Image>
            </div>
          </div>
          <div className="py-1 px-3 text-3xl my-1">{data[0].name}</div>
          <div className="py-1 px-3 text-xl">{data[0].role}</div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-3xl font-bold py-2">All Attendance</h2>
        <div className="flex flex-wrap gap-4 text-ellipsis overflow-hidden">
          {data[0]?.attendance.map((el) => (
            <div className="flex flex-col items-center border-2 border-gray-400 p-1 rounded-md">
              <div className="border-b-2 border-gray-400 flex-1">
                {new Date(el?.date).toLocaleDateString("bn-BD", options)}
              </div>
              <div className="badge my-2 font-bold">
                {el?.present ? "Present" : "Absent"}
              </div>
              <div className="">{el?.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </Format>
  );
};

export default Employee;

export async function getServerSideProps(context) {
  console.log(context);
  const res = await axios(`/employee/${context.query.employeeID}`);
  const data = await res.data;

  // Pass data to the page via props
  return { props: { data } };
}
