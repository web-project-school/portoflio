import Card from "./components/Card";
import React, { useState } from "react";

import { Popup } from "./components/Popup";

const Projects = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <title>{props.title}</title>
      <div></div>
      <div className="row cus-container">
        <div className="col">
          <Card
            title="Github repos"
            des="Get Github repos"
            img="github"
            site="github repos/index.html"
          />
        </div>
        {/* <div className="col">
          <Card
            title="portoflio"
            des="Portoflio Single Page App"
            img="portflio"
          />
        </div> */}
        <div className="col">
          <Card
            title="Facebook Design"
            des="Facebook Design Single Page App"
            img="facebook"
            site="facebook/index.html"
          />
        </div>
        <div className="col">
          <Card
            title="Youtube Design"
            des="Youtube Design"
            img="youtube"
            site="youtube/index.html"
          />
        </div>
        <div className="col">
          <Card
            title="Qr code Genreator"
            des="Enter the url to genreate qr code"
            img="qr-ge"
            site="qr-code-genreator/index.html"
          />
        </div>
        <div className="col">
          <Card
            title="To Do list"
            des="To Do List App"
            img="to-do"
            site="to do/index.html"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
