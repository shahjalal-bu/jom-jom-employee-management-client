import React from "react";

const SalaryCalculation = ({ data }) => {
  return (
    <div>
      <h3>Monthly Salary:TK. {data[0]?.salary}.00</h3>
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
      </h3>
    </div>
  );
};

export default SalaryCalculation;
