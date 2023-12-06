import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contact-background contact-container">
      <div className="container">
        <div className="row">
          <h5 className="col-12 mb-5">You can contact us:</h5>
          <div className="col-3"></div>
          <div className="col-2">
            <FontAwesomeIcon className="icon-size" icon="fa-solid fa-phone" />
            <p className="mt-2">Tel.: 2345567899</p>
          </div>
          <div className="col-2">
            <FontAwesomeIcon
              className="icon-size"
              icon="fa-solid fa-envelope"
            />
            <p className="mt-2">E-mail: labas@labas.lt</p>
          </div>
          <div className="col-2">
            <FontAwesomeIcon className="icon-size" icon="fa-solid fa-house" />
            <p className="mt-2">Address: Trinapolio 2, Vilnius Lithuania</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
