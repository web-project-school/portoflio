import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <>
      <li className="mr-6">
        <Link className="text-netural-500 hover:text-blue-500" aria-current="page" to={props.link}>
          {props.name}
        </Link>
      </li>
    </>
  );
};

export default Projects;
