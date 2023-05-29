import Event from "./components/Event";

const Actions = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Timeline</h6>
                <div id="content">
                  <ul className="timeline">
                    <Event
                      title="UX | UI"
                      content="Designing a website is the first and crucial step in creating a successful website. You can work with us to create a unique and attractive design that meets your needs, or you can provide the design to someone else. In either case, you will need to prepare a design report that specifies aspects such as the site’s margins, colors, font type and color, and other important details. Choose our services for a professional and easy website design experience!"
                      date="1 Day - 3 Day"
                    />
                    <Event
                      title="Front-end"
                      content="The second step in creating websites, which appears to be the first step, but they are completely different steps from each other. The job of the first person is to design the site on a program such as Illustrator, Figma, or any other program; While in the second step, the front-end developer must follow that design created by the designer and then convert it into an interactive website on a web browser that is responsive to different screen sizes. then this is another job and it has a different wage than the other steps"
                      date="3 Day - 7 Day"
                    />
                    <Event
                      title="Back-end"
                      content="The third step in creating websites involves the background process work of the sites. This includes tasks such as creating a seamless login and logout system, enabling account creation and sign-in, developing a control panel to effortlessly manage the site designed in previous steps, fetching data from the database and displaying it on the site with ease, or creating an API for a front-end developer to fetch data efficiently."
                      date="4 Day - 25 Day"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actions;
