import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="container-fluid contact-background">
      <div className="row justify-content-center">
        <h4 className="col-12 pt-5 m-5">You can contact us:</h4>
        <div className="col-lg-auto m-2">
          <FontAwesomeIcon className="icon-size" icon="fa-solid fa-phone" />
          <p className="mt-2">Tel.: 2345567899</p>
        </div>
        <div className="col-lg-auto m-2">
          <FontAwesomeIcon className="icon-size" icon="fa-solid fa-envelope" />
          <p className="mt-2">E-mail: labas@labas.lt</p>
        </div>
        <div className=" col-lg-1 m-2">
          <FontAwesomeIcon className="icon-size" icon="fa-solid fa-house" />
          <p className="mt-2">Address: Trinapolio 2, Vilnius Lithuania</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
