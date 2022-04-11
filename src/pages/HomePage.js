import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "../components/Chart";
import Table from "../components/Table";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(
    () =>
      axios
        .get("https://assignment-6fdaf-default-rtdb.firebaseio.com/orders.json")
        .then((res) => setData(res.data)),
    [data._id]
  );

  return (
    <div>
      <Table data={data} setData={setData} />
      <Chart data={data} />
    </div>
  );
};

export default HomePage;
