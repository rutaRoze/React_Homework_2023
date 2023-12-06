import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <>Data is loading...</>;
  }

  if (errorMessage) {
    return <>Something is wrong</>;
  }

  const { title, price, description, images, category } = product;

  console.log(product);

  return (
    <>
          <div className="container p-5 ">
        <div className="row row-cols-sm-1 row-cols-lg-2 ">
          <div className="col p-4">
            <figure>
              <img
                className="p-2 itemImage"
                src={images[2]}
                alt="product picture"
              />
            </figure>
            <figure>
              <img
                className="p-2 itemImage"
                src={images[3]}
                alt="product picture"
              />
            </figure>
          </div>
          <div className="col py-5 px-5">
            <h4>{title}</h4>
            <p>{category}</p>
            <p>{price} Eur</p>
            <p>{description}</p>
            <button type="button" className="btn btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
