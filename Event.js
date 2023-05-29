const Event = (props) => {
  return (
    <>
      <li className="event" data-date={props.date}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <hr />
      </li>
    </>
  );
};

export default Event;
