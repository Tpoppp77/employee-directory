import React from "react";

function EmployeeCard (props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong></strong> {props.image}
          </li>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>DOB:</strong> {props.DOB}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.sortEmployeeName(props.name)} className="name-employee">
        𝘅
      </span> */}
    </div>
  );
}

export default EmployeeCard;