import React from "react";
import Chart from "react-apexcharts";
import moment from "moment";

const ChartData = ({ data }) => {
  const getDate = data.map((data) => data.date);
  const options = {
    chart: {
      id: "line-chart",
    },
    xaxis: {
      categories: getDate.map((singleDate) =>
        moment(singleDate).format("YYYY/MM/DD")
      ),
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 43, 45, 34, 56],
    },
  ];
  return (
    <div>
      <Chart options={options} series={series} type="line" width="600" />
    </div>
  );
};

export default ChartData;
