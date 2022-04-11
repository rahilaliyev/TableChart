import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Filter = ({ data, setData }) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(data);
  const handleFilter = (e) => {
    const searchWord = e.target.value;

    const newFilter = data.filter((value) => {
      return value.product.map((singleData) =>
        singleData.name
          .toString()
          .toLowerCase()
          .includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setData([]);
    } else {
      setData(newFilter);
    }
  };

  return (
    <div className="filter">
      {" "}
      <div className="form-label">
        <input type="text" onChange={handleFilter} />
      </div>
      <div className="form-label">
        <input type="text" />
      </div>
      <div className="form-label">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
};

export default Filter;
