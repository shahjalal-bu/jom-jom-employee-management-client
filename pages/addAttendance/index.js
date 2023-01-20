import React, { useEffect, useState } from "react";
import EmployeeTr from "../../components/_child/EmployeeTr";
import Format from "../../layout/Format";
import axios from "../../utils/Axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const index = ({ data }) => {
  const [employData, setEmployData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [isdisable, setIsDisable] = useState(false);

  // console.log(employData.length);
  // console.log(startDate);

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const handleAttaindence = async () => {
    setIsDisable(true);
    if (data?.length === employData?.length) {
      try {
        const response = await axios.post("/attendance", employData);
        if (response.status === 200) {
          alert("Success: Data was posted successfully!");
          setStartDate(new Date());
          setEmployData([]);
          setIsDisable(false);
          window.location.reload();
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("You have to put all employee attaindence !");
      setIsDisable(false);
    }
  };

  return (
    <Format>
      <div className="container text-center text-2xl">
        {/* {day} {month} {year} */}
        {new Date(startDate).toLocaleDateString("bn-BD", options)}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="container p-3 grid  md:grid-cols-4 gap-2 my-2">
        {data?.map((el) => (
          <EmployeeTr
            key={el._id}
            name={el.name}
            role={el.role}
            id={el._id}
            setEmployData={setEmployData}
            employData={employData}
            date={startDate}
            photo={el.photo}
          />
        ))}
      </div>
      <button
        className="btn btn-block neutral my-7"
        disabled={isdisable}
        onClick={handleAttaindence}
      >
        Submit
      </button>
    </Format>
  );
};
export async function getServerSideProps() {
  const res = await axios("/employee");
  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default index;
