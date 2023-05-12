import React from "react";
import Card from "../components/_child/Card";
import Format from "../layout/Format";
import axios from "../utils/Axios";
import PrivateRoute from "../components/PrivateRoute";

const Index = ({ data }) => {
  return (
    <Format>
      <PrivateRoute>
        <div className="container p-3 grid  md:grid-cols-6 gap-2 my-2">
          {data?.map((el) => (
            <Card
              name={el.name}
              role={el.role}
              id={el._id}
              key={el._id}
              photo={el.photo}
            />
          ))}
        </div>
      </PrivateRoute>
    </Format>
  );
};

export async function getServerSideProps() {
  const res = await axios("/employee");
  const data = await res.data;

  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
