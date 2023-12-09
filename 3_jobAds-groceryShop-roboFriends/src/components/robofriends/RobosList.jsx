import React, { useState } from "react";
import RoboCard from "./RoboCard";
import { robosData } from "./robos";
import ReservedRoboCard from "./ReservedRoboCard";

function RobosList() {
  const [robos, setRobos] = useState(robosData);

  const reserveRoboOnClick = (roboToReserve) => {
    const updatedRobosList = robos.map((robo) => {
      if (robo.id === roboToReserve.id) {
        const updatedRobo = {
          ...robo,
          reserved: true,
        };
        return updatedRobo;
      }
      return robo;
    });

    setRobos(updatedRobosList);
  };

  const mappedRobos = robos.map((robo) => {
    return (
      <React.Fragment key={robo.id}>
        {robo.reserved ? (
          <ReservedRoboCard robo={robo} />
        ) : (
          <RoboCard
          robo={robo}
          clickToReserve={reserveRoboOnClick} />
        )}
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="container text-center ">
        <div className="">
          <h1 className="m-3">Robofriends</h1>
          <div className="d-flex justify-content-center">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">{mappedRobos}</div>
      </div>
    </>
  );
}

export default RobosList;
