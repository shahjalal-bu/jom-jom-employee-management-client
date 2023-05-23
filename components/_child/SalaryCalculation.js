import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import EditSalaryTo from "./EditSalaryTo";
import moment from "moment";
import "moment/locale/bn";
moment.locale("bn");

const SalaryCalculation = ({ data }) => {
  return (
    <div>
      {/* modal for edit  */}
      <div className="grid grid-cols-5 bg-slate-600 py-2 px-2 text-white w-1/2">
        <div>No.</div>
        <div>From </div>
        <div>To</div>
        <div>Salary</div>
        <div>Edit</div>
      </div>

      {data[0]?.salary?.map((el, index) => (
        <div className="grid grid-cols-5 bg-gray-100 py-2 px-2 sm:w-1/2">
          <div>{index + 0}</div>
          <div>{moment(el.from).format("LL")}</div>
          <div>{el.to ? moment(el.to).format("LL") : "running"}</div>
          <div>{el.salary}</div>
          <div>
            <EditSalaryTo employeeId={data[0]._id} salaryId={el._id} />
          </div>
        </div>
      ))}

      {/* <h3>Monthly Salary:TK. {data[0]?.salary}.00</h3>
      <h3>Per Day Salary:TK. {(data[0]?.salary / 30).toFixed(2)}</h3>
      <h3>Total Working Day: {data[0]?.attendance?.length}</h3>
      <h3>
        Total Attain Day:{" "}
        {(data[0]?.attendance?.filter((el) => el.attendance === 1)).length}
      </h3>
      <h3>
        Total Half Day:{" "}
        {(data[0]?.attendance?.filter((el) => el.attendance === 0.5)).length}
      </h3>
      <h3>
        Total Missing Day:{" "}
        {(data[0]?.attendance?.filter((el) => el.attendance === 0)).length}
      </h3>
      <h3>
        Total Salary:{" "}
        {(
          ((data[0]?.attendance?.filter((el) => el.attendance === 1)).length *
            data[0]?.salary) /
            30 +
          ((data[0]?.attendance?.filter((el) => el.attendance === 0.5)).length *
            data[0]?.salary) /
            30 /
            2
        ).toFixed(2)}
      </h3> */}
    </div>
  );
};

export default SalaryCalculation;
