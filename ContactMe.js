// import { Link } from "react-router-dom";

function submit() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");
  if (
    name.value != "" &&
    email.value != "" &&
    subject.value != "" &&
    message.value != ""
  ) {
    fetch(
      `http://192.168.8.153:5000/api?name=${name.value}&&email=${email.value}&&subject=${subject.value}&&message=${message.value}`
    ).then(clear_inputs());
  }
  function clear_inputs() {
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    let alert = document.getElementById("alert");

    alert.className = "alert alert-success";
    alert.style.display = "block";
    alert.innerHTML = "Success";
    clear_alert();
  }
  let alert = document.getElementById("alert");
  if (alert.innerHTML != "Success") {
    alert.className = "alert alert-danger";
    alert.style.display = "block";
    alert.innerHTML = "Error";
    clear_alert();
  }
  function clear_alert() {
    setTimeout(() => {
      alert.style.display = "none";
    }, 5000);
  }
}

const Contact = (props) => {
  return (
    <>
      <title>{props.title}</title>

      <section className="mb-4">
        {/*Section heading*/}
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact me
        </h2>
        <div style={{ display: "none" }} className="alert" id="alert"></div>
        <div className="mob-alert alert alert-danger">
          You screen size is small
        </div>
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-9 mb-md-0 mb-5">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="name" className>
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control p-2"
                  />
                </div>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="email" className>
                    Your email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control p-2"
                  />
                </div>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            {/*Grid row*/}
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <label htmlFor="subject" className>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control p-2"
                  />
                </div>
              </div>
            </div>
            {/*Grid row*/}
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-12">
                <div className="md-form">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows={2}
                    className="form-control p-2 md-textarea"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            {/*Grid row*/}
            <div className="text-center text-md-left">
              <button className="btn btn-primary mt-3 w-100" onClick={submit}>
                Send
              </button>
            </div>
            <div className="status" />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0 p-4">
              <li>
                <i className="fas fa-map-marker-alt fa-2x" />
                <p>Eastern Kingdom, QATIF, KSA</p>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x" />
                <p>+966 55 212 246 66</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x" />
                <p>contact@work.com</p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
      </section>
    </>
  );
};

export default Contact;
