import React from "react";

function IdPreview({ studentInfo, idProperties }) {
  return (
    <div
      className="preview border border-2"
      style={{
        background: idProperties.outerColor,
        color: idProperties.outerTextColor,
      }}
    >
      <div id="id-header">
        <div id="school-name-preview">{studentInfo.schoolName}</div>
        <div
          className="line"
          style={{ background: idProperties.innerColor }}
        ></div>
      </div>
      <div
        id="inner-container"
        style={{
          background: idProperties.innerColor,
          color: idProperties.innerTextColor,
        }}
      >
        <div id="image-holder">
          <img className="img-fluid" src={studentInfo.photo}></img>
        </div>
        <div id="main-details">
          <div id="name-preview">{studentInfo.name}</div>
          <div id="course-preview">{studentInfo.course}</div>
        </div>
      </div>
      <div id="secondary-details">
        <div>
          <div className="d-flex">Email:&nbsp;</div>
          <div id="email-preview">{studentInfo.email}</div>
        </div>
        <div>
          <div>
            <div className="d-flex">Address:&nbsp;</div>
            <div id="address-preview">{studentInfo.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdPreview;
