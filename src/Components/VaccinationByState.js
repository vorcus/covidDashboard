import React from "react";

const VaccinationByState = (props) => {
  if (props.stateVal !== "" && props.districtVal === "") {
    return (
      <div className="vaccinationByState">
        <h2>Vaccination By District</h2>
        <table>
          <thead>
            <tr>
              <th>District</th>
              <th>Today</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {props.getByState.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.title}</td>
                  <td>{value.today}</td>
                  <td>{value.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else if (props.districtVal !== "") {
    return (
      <div className="vaccinationByState">
        <h2>Vaccination By Centres</h2>
        <table>
          <thead>
            <tr>
              <th>Centres</th>
              <th>Today</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {props.getByState.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.title}</td>
                  <td>{value.today}</td>
                  <td>{value.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="vaccinationByState">
        <h2>Vaccination By State/UT</h2>
        <table>
          <thead>
            <tr>
              <th>State/UT</th>
              <th>Today</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {props.getByState.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.title}</td>
                  <td>{value.today}</td>
                  <td>{value.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default VaccinationByState;
