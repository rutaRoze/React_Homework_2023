import { useState } from "react";
import "./NewProductFillForm.css";
import axios from "axios";
import NewProductConfirmation from "./NewProductConfirmation";

function NewProductFillForm() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    discount: "",
  });

  const [inputError, setInputError] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [newProduct, setNewProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <div>Data is loading...</div>;
  }

  const handleForm = (event) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
    if (formData.description.length < 5) {
      setInputError(<p>Input should be more then 5 symbols</p>);
    } else {
      setInputError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendDataToBackend();
    setIsLoading(true);
  };

  const sendDataToBackend = () => {
    axios
      .post("https://dummyjson.com/products/add", {
        title: formData.title,
        price: formData.price,
        description: formData.description,
        category: formData.category,
      })
      .then((response) => {
        setNewProduct(response.data);
        //console.log(response.data);
        setIsLoading(false);
        setShowConfirmation(true);
      })
      .catch((error) => console.log(error));
  };

  //console.log("formData", formData);

  const hideConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      {showConfirmation && (
        <NewProductConfirmation
          product={newProduct}
          hideConfirmation={hideConfirmation}
        />
      )}
      <div className="background-form ">
        <div className="form-container background-form ">
          <form onSubmit={handleSubmit} className="mt-3">
            <fieldset>
              <legend style={{ color: "#3b5a5a", fontWeight: "500" }}>
                New Product Fill Form
              </legend>
              <div className="mb-3">
                <label className="form-label form-fields-title">
                  Product name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                  name="title"
                  value={formData.title}
                  onChange={handleForm}
                />
              </div>
              <div className="mb-3">
                <label className="form-label form-fields-title">
                  Product price
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product price"
                  name="price"
                  value={formData.price}
                  onChange={handleForm}
                />
              </div>
              <div className="mb-3">
                <label className="form-label form-fields-title">
                  Product description
                </label>
                <textarea
                  type="text"
                  rows={5}
                  className="form-control"
                  placeholder="Product description"
                  minLength={5}
                  maxLength={150}
                  name="description"
                  value={formData.description}
                  onChange={handleForm}
                />
                {inputError && (
                  <span
                    style={{
                      fontSize: "11px",
                      color: "blue",
                      paddingTop: "10px",
                    }}
                  >
                    {inputError}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label form-fields-title">
                  Select product category
                </label>
                <select
                  className="form-select"
                  name="category"
                  value={formData.category}
                  onChange={handleForm}
                >
                  <option className="form-fields-title">
                    Product category
                  </option>
                  <option className="form-fields-title">smartphones</option>
                  <option className="form-fields-title">laptops</option>
                  <option className="form-fields-title">fragnances</option>
                  <option className="form-fields-title">skincare</option>
                  <option className="form-fields-title">groceries</option>
                  <option className="form-fields-title">home-decoration</option>
                  <option className="form-fields-title">other</option>
                </select>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input " type="checkbox" />
                  <label
                    className="form-check-label form-fields-title"
                    name="discount"
                    value={formData.discount}
                    onChange={handleForm}
                  >
                    Please check this if product is on sale
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={inputError}
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewProductFillForm;
