import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <div class="row align-items-center">
        <div class="col">
          {" "}
          <img
            src="imgs/ali-img.png"
            className="ratio ratio-1x1 rounded mx-auto d-block"
          />
        </div>
        <div class="col">
          <h1 className="text-5xl mb-4">I'M A FRONT-END DEVELOPER FROM SAUDI ARABIA</h1>
          <Link to="/projects">
            <button className="btn btn-primary">Explore My Projects</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
