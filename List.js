import { Popup } from "./Popup";
import React, { useState } from "react";

const List = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li className="list-group-item text-inherit" >{props.item}</li>
    </>
  );
};

export default List;
