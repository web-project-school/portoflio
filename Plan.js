import List from "./components/List";

const Actions = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <div className="container">
        <h1 className="text-4xl text-center text-white">Host Plans</h1>
        <div className="row mt-3 d-flex justify-content-around">
          <div className="card ml-6 text-white sm:hover:scale-105 lg:hover:scale-110 sm:mt-7 lg:hover:bg-neutral-800 sm:hover:bg-neutral-900 duration-500" style={{width: '18rem'}}>
            <div className="card-body text-inherit">
              <h1 className="card-title text-inherit text-center text-2xl">One site</h1>
              <p className="card-text text-center text-xl text-inherit text-white">1.4$/Month to 48Month</p>
              <span className="card-text text-center text-md text-inherit text-gray-300">5.49 SAR/Month for 48Month</span>
            <ul className="list-group list-group-flush bg-inherit text-inherit">
              <List item="1 site" />
              <List item="SSD 50GB" />
              <List item="1 Email" />
              <List item="FREE SSL Unlimited" />
              <List item="Wordpress" />
              <List item="Speed wordpress" />
              <List item="Site creator" />
              <List item="2 Databases" />
              <List item="Access to Git" />
            </ul>
            </div>
          </div>
          <div className="card ml-6 text-white sm:hover:scale-105 lg:hover:scale-110 sm:mt-7 lg:hover:bg-neutral-800 sm:hover:bg-neutral-900 duration-500" style={{width: '18rem'}}>
            <div className="card-body text-inherit">
              <h1 className="card-title text-inherit text-center text-2xl">Unice site</h1>
              <p className="card-text text-center text-xl text-inherit text-white">2.49$/Month to 48Month</p>
              <span className="card-text text-center text-md text-inherit text-gray-300">9.39 SAR/Month for 48Month</span>
            <ul className="list-group list-group-flush bg-inherit text-inherit">
              <List item="100 Site" />
              <List item="SSD 100GB" />
              <List item="Free Email" />
              <List item="SSL FREE Unlimited" />
              <List item="Free Domain (with price 8$)" />
              <List item="Unlimited data transfer" />
              <List item="Wordpress" />
              <List item="Speed wordpress" />
              <List item="Site creator" />
              <List item="Unlimited Databases" />
              <List item="Access to Git" />
              <List item="Access to SSH" />
            </ul>
            </div>
          </div>
          <div className="card ml-6 text-white sm:hover:scale-105 lg:hover:scale-110 sm:mt-7 lg:hover:bg-neutral-800 sm:hover:bg-neutral-900 duration-500" style={{width: '18rem'}}>
            <div className="card-body text-inherit">
              <h1 className="card-title text-inherit text-center text-2xl">Business site</h1>
              <p className="card-text text-center text-xl text-inherit text-white">3.84$/Month to 48Month</p>
              <span className="card-text text-center text-md text-inherit text-gray-300">14.49 SAR/Month for 48Month</span>
            <ul className="list-group list-group-flush bg-inherit text-inherit">
              <List item="100 Site" />
              <List item="SSD 200GB" />
              <List item="Free Email" />
              <List item="SSL FREE Unlimited" />
              <List item="Free Domain (with price 8$)" />
              <List item="Unlimited data transfer" />
              <List item="Wordpress" />
              <List item="Speed wordpress" />
              <List item="Site creator" />
              <List item="Unlimited Databases" />
              <List item="Access to Git" />
              <List item="Access to SSH" />
              <List item="Backup data everyDay" />
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actions;
