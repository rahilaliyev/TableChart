import React from "react";
import moment from "moment";
import "./style.css";
import Filter from "./Filter";

const Table = ({ data, setData }) => {
  return (
    <div className="table-filter">
      <Filter data={data} setData={setData} />
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Order date</th>
            <th>Order amount</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((singleData) => (
            <tr key={singleData._id}>
              <td>
                {singleData.product.map((dataInfo) => (
                  <span key={dataInfo._id}>{dataInfo.name}</span>
                ))}
              </td>
              <td>{moment(singleData.date).format("YYYY-MM-DD")}</td>
              <td>{singleData.amount}</td>
              <td>
                {singleData.product.map((dataInfo) => (
                  <span key={dataInfo._id}>$ {dataInfo.price}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
