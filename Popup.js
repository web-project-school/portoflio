import { Link } from "react-router-dom";

import React from "react";
import "./Popup.css";

export const Popup = ({ img, site, title, content, closePopup }) => {
  window.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) {
      // Trigger the button element with a click
      closePopup();
    }
  });
  return (
    <div className="popup-container card">
      <div className="out-card" onClick={closePopup}></div>
      <div className="popup-body card-body" style={{ height: "95vh" }}>
        <iframe
          src={"websites/" + site}
          className="iframe"
          style={{ height: "80%", width: "100%" }}
        />
        {/* <img src={img} className="card-img-top" /> */}
        <hr />

        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        {/* <span style={{ cursor: "pointer" }} onClick={closePopup}>
          X
        </span> */}
      </div>
    </div>
  );
};
