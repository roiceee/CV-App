import React from "react";

function IdPreview({ studentInfo }) {

  return (
    <div className="preview border border-secondary text-center">
      <div>{studentInfo.schoolName}</div>
      <div
        className="bg-tertiary d-flex flex-column align-items-center mx-auto"
        id="inner-container"
      >
        <div className="border border-tertiary bg-white" id="image-holder">
          <img className="img-fluid" src={studentInfo.photo}></img>
        </div>
        <div id="main-details">
          <div className="d-block" id="name-preview">{studentInfo.name}</div>
          <div id="course-preview">{studentInfo.course}</div>
        </div>
      </div>
      <div id="secondary-details">
        <div className="d-flex">
            <div>Email:&nbsp;</div>
          <div id="email-preview">{studentInfo.email}</div>
        </div>
        <div>
          <div className="d-flex">
            <div>Address:&nbsp;</div>
            <div id="address-preview">{studentInfo.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdPreview;
