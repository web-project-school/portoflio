import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <div className="row align-items-center">
        <div className="col">
          {" "}
          <img
            src="imgs/ali-img.png"
            className="ratio ratio-1x1 rounded mx-auto d-block"
          />
        </div>
        <div className="col">
          <h1 className="text-5xl mb-4">I am {props.name}, I am front-end developer</h1>
          <button className="btn btn-primary">
            <Link to="/about">Explore About Me Page</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
