import Image from "next/image";
import React, { useEffect, useState } from "react";
import SalaryCalculation from "../../components/_child/SalaryCalculation";
import Format from "../../layout/Format";
import axios from "../../utils/Axios";
import DateFormat from "../../utils/DateFormat";
import { useRouter } from "next/router";
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const currentDate = new Date();
// get the current month number
const currentMonthNumber = currentDate.getMonth() + 1;
const currentYearNumber = currentDate.getFullYear();

const Employee = ({ data }) => {
  const [view, setView] = useState("Profile");
  const [year, setYear] = useState(currentYearNumber);
  const [month, setMonth] = useState(currentMonthNumber);
  const router = useRouter();
  // Handle the year input change event
  const handleYearInputChange = (event) => {
    setYear(event.target.value);
  }; // Handle the year input change event
  const handleMonthInputChange = (event) => {
    setMonth(event.target.value);
  };
  // Handle the form submission event
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(
      `/employee/${router.query.employeeID}?year=${year}&month=${month}`
    );
  };
  useEffect(() => {
    router.push(
      `/employee/${router.query.employeeID}?year=${year}&month=${month}`
    );
  }, []);
  console.log(data);
  return (
    <Format>
      <div className="container md:p-11 flex justify-center">
        <div className="w-12/12 flex flex-col items-center">
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
        <div className="flex justify-around">
          <h2
            className={`text-sm md:text-xl font-bold flex-auto mx-2 ${
              view === "Profile" && "bg-green-400 text-white"
            } rounded px-3 py-2`}
            onClick={() => setView("Profile")}
          >
            Profile
          </h2>

          <h2
            className={`text-sm md:text-xl font-bold flex-auto mx-2 ${
              view === "Attendance" && "bg-green-400 text-white"
            } rounded px-3 py-2`}
            onClick={() => setView("Attendance")}
          >
            Attendance
          </h2>
          <h2
            className={`text-sm md:text-xl font-bold flex-auto mx-2 ${
              view === "SalaryStatement" && "bg-green-400 text-white"
            } rounded px-3 py-2`}
            onClick={() => setView("SalaryStatement")}
          >
            Salary Statement
          </h2>
        </div>
        <div>
          <div className="container py-3 px-4">
            {view === "Profile" && (
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Job</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                    </tr>
                    <tr>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                    </tr>
                    <tr>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {view === "Attendance" && (
              <div>
                <div className="sm:flex items-center justify-between">
                  <h2 className="text-2xl py-3">All Attendances</h2>
                  <div className="py-3">
                    <form
                      className="flex flex-col sm:flex-row gap-2"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label htmlFor="year-select" className="mx-1">
                          Select a year:
                        </label>
                        <select
                          id="year-select"
                          className="mx-1 select select-sm"
                          value={year}
                          onChange={handleYearInputChange}
                        >
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="month-select" className="mx-1">
                          Select a month:
                        </label>
                        <select
                          id="month-select"
                          className="mx-1 select select-sm"
                          value={month}
                          onChange={handleMonthInputChange}
                        >
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </div>
                      <div>
                        <button
                          className="btn btn-sm btn-success"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-ellipsis overflow-hidden">
                  {data[0]?.attendance.map((el) => (
                    <div className="flex flex-col items-center border-2 border-gray-400 p-1 rounded-md flex-1">
                      <div className="border-b-2 border-gray-400 whitespace-nowrap">
                        {new Date(el?.date).toLocaleDateString(
                          "bn-BD",
                          options
                        )}
                      </div>
                      <div className="badge my-2 font-bold">
                        {el?.attendance === 1 && "Present"}
                        {el?.attendance === 0 && "Absent"}
                        {el?.attendance === 0.5 && "Half"}
                      </div>
                      <div className="">{el?.comment}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {view === "SalaryStatement" && <SalaryCalculation data={data} />}
          </div>
        </div>
      </div>
    </Format>
  );
};

export default Employee;

export async function getServerSideProps(context) {
  const { employeeID, year, month } = context.query;
  const currentDate = new Date();
  // get the current month number
  const monthNumber = currentDate.getMonth() + 1;
  const yearNumber = currentDate.getFullYear();
  const res = await axios(
    `/employee/${employeeID}?year=${year || yearNumber}&month=${
      month || monthNumber
    }`
  );
  const data = await res.data;

  // Pass data to the page via props
  return { props: { data } };
}
