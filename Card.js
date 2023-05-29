import { Popup } from "./Popup";
import React, { useState } from "react";

const Card = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          src={"imgs/" + props.img + ".png"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h1 className="card-title text-2xl">{props.title}</h1>
          <p className="card-text">{props.des}</p>
          <button className="btn btn-primary mt-3" onClick={() => setOpen(true)}>
            {" "}
            Click for more details
          </button>
          {open ? (
            <Popup
              title={props.title}
              img={"imgs/" + props.img + ".png"}
              content={props.des}
              site={props.site}
              closePopup={() => setOpen(false)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Card;
