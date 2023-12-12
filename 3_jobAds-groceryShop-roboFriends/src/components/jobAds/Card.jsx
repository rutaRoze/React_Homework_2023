function Card({ card }) {
  const { companyname, position, country, contracttype, postingdate, logo } =
    card;

  return (
    <>
      <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={logo} className="img-fluid rounded-start" alt="logo" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-title">{companyname}</p>
              <h5 className="card-text">{position}</h5>
              <p className="card-text">
                <small className="text-body-secondary pe-2"  >{postingdate}</small>
                <small className="text-body-secondary pe-2">{contracttype}</small>
                <small className="text-body-secondary">{country}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
