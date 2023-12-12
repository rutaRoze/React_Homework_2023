function FilterForm({ setFilter }) {
  const handleForm = (event) => {
    setFilter((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCheckbox = (event) => {
    // console.log({ name: event.target.name, checked: event.target.checked });

    // setFilter((previousFilter) => (
    //     const year = previousFilter.year;
    //     if (event.target.checked) {
    //         year.push(event.target.name);
    //     } else {
    //         //remove from year
    //     }
    //     return {
    //   ...previousFilter,
    //   year: year,
    // }));

    setFilter((previousFilter) => ({
      ...previousFilter,
      [event.target.checked]: event.target.value,
    }));
  };

  return (
    <>
      <form
        data-testid="submit-form"
        className=" col-8 col-sm-8 col-md-6 col-xl-4 mt-3"
      >
        {/* find by brand */}
        <div className="mb-3">
          <label className="form-label form-fields-title">
            Filter by Brand
          </label>
          <select className="form-select" name="brand" onChange={handleForm}>
            <option value="" className="form-fields-title">
              All
            </option>
            <option value="BMW" className="form-fields-title">
              BMW
            </option>
            <option value="VW" className="form-fields-title">
              VW
            </option>
            <option value="Audi" className="form-fields-title">
              Audi
            </option>
          </select>
        </div>

        {/* find by year */}
        <div className="mb-3">
          <label className="form-label form-fields-title">Filter by Year</label>

          <div className="form-check">
            <input
              className="form-check-input "
              type="checkbox"
              value="2018"
              onChange={handleCheckbox}
            />
            <label className="form-check-label form-fields-title">
              2018 year
            </label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input "
              type="checkbox"
              value="2019"
              onChange={handleCheckbox}
            />
            <label className="form-check-label form-fields-title">
              2019 year
            </label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input "
              type="checkbox"
              value="2020"
              onChange={handleCheckbox}
            />
            <label className="form-check-label form-fields-title">
              2020 year
            </label>
          </div>
        </div>

        {/* find by price */}

        <div className="mb-3">
          <label className="form-label form-fields-title">
            Filter by Price
          </label>
          <br />
          <label htmlFor="">From:</label>
          <input
            type="number"
            className="form-control"
            name="priceFrom"
            onChange={handleForm}
          />
          <label htmlFor="">To:</label>
          <input
            type="number"
            className="form-control"
            name="priceTo"
            onChange={handleForm}
          />
        </div>
      </form>
    </>
  );
}

export default FilterForm;
