import React from "react";

function IdPreview({ studentInfo, idProperties }) {
  return (
    <div id="outline" className="border border-1 mx-auto">
      <div
        id="id-image"
        className="preview"
        style={{
          background: idProperties.outerColor,
          color: idProperties.outerTextColor,
          fontFamily: idProperties.bodyFont,
          border: `8px solid ${idProperties.borderColor}`,
        }}
      >
        <div id="id-header">
          <div
            id="school-name-preview"
            style={{ fontFamily: idProperties.headerFont }}
          >
            {studentInfo.schoolName}
          </div>
          <div
            id="header-line"
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
            <img id="image-container" src={studentInfo.photo}></img>
          </div>
          <div id="main-details">
            <div id="name-preview">{studentInfo.name}</div>
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
              <div id="address-preview">{studentInfo.address.trim() === "" ? "Prefer to not say." : studentInfo.address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdPreview;
