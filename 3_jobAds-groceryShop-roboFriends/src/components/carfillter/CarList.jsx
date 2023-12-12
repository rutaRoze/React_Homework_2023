import { useState } from "react";
import CarCard from "./CarCard";
import FilterForm from "./FilterForm";
import { carsdata } from "./cardata";

function CarList() {
  const [carsList, setCarsList] = useState(carsdata);
  const [searchFilter, setSearchFilter] = useState({
    brand: "",
    year2018: false,
    year2019: false,
    year2020: false,
    priceFrom: "",
    priceTo: "",
  });

  const filteredCars = carsList
    .filter((car) => {
      //   console.log({searchFilter})
      if (!searchFilter.brand) {
        return true;
      }

      return car.name.includes(searchFilter.brand);
    })
    .filter((car) => {
      if (!searchFilter.year2018) {
        return true;
      }

      return car.release_year.includes(searchFilter.year2018);
    })
    .filter((car) => {
        if (!searchFilter.year2019) {
          return true;
        }
  
        return car.release_year.includes(searchFilter.year2019);
      })
      .filter((car) => {
        if (!searchFilter.year2020) {
          return true;
        }
  
        return car.release_year.includes(searchFilter.year2020);
      })
    .filter((car) => {
      if (!searchFilter.priceFrom) {
        return true;
      }

      return car.price >= searchFilter.priceFrom;
    })
    .filter((car) => {
      if (!searchFilter.priceTo) {
        return true;
      }

      return car.price <= searchFilter.priceTo;
    });

  const mappedCars = filteredCars.map((car) => {
    return <CarCard key={car.name} car={car} />;
  });

  return (
    <>
      <div>
        <h1>CARS SHOP</h1>
      </div>
      <FilterForm setFilter={setSearchFilter} />
      {mappedCars}
    </>
  );
}

export default CarList;
