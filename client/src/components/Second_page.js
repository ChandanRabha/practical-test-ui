import React, { useState } from "react";
import "./Second_page.css";
import product_design from "../assets/img/product_design.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveData } from "../redux/action";

export const SecondPage = () => {
  const [inputData, setInputData] = useState([
    {
      inputField: "",
    },
  ]);

  const dispatch = useDispatch();

  const handleAddInput = () => {
    setInputData([
      ...inputData,
      {
        inputField: "",
      },
    ]);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputData];
    values[index][event.target.name] = event.target.value;
    setInputData(values);
  };

  const data = useSelector((state) => state);

  React.useEffect(() => {
    if (data) {
      console.log("Data saved From Store", data);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    };
    fetch("/dynamicinput", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data send to api", data.sentData);
        dispatch(saveData(data.sentData));
      });
  };

  return (
    <>
      <div className="container">
        <div className="column">
          <div style={{ paddingLeft: "5rem" }}>
            <div className="goBackAnchor">
              <Link to="/">Go Back</Link>
            </div>
            <h1>Product Design</h1>
            <p style={{ width: "80%" }}>
              Our multifaceted apps are custom built and developed to support
              multiple platforms, including both Android and iOS, making apps
              accessible for all.
            </p>
          </div>
          <div
            className="illustrations"
            style={{
              backgroundImage: `url(${product_design})`,
              backgroundSize: "cover",
              backgroundPositionY: " bottom",
              backgroundPositionX: "1rem",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <h3>Dynamic Input Fields Form</h3>
        <label>Check Console for Outputs</label>
        {/* form starts here */}
        <form onSubmit={handleSubmit}>
          <input
            type="button"
            value="+"
            onClick={handleAddInput}
            className="addButton"
            title="Add Input Field"
            placeholder="Enter Form Data"
          />
          {inputData.map((field, index) => (
            <div key={index}>
              <input
                name="inputField"
                type="text"
                onChange={(event) => handleChangeInput(index, event)}
                value={inputData.inputField}
                required
                title="Submit Form Data"
              />
            </div>
          ))}
          <button type="submit" value="Submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
