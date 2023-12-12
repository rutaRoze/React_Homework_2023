import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function Heading() {
  const [cardArray, setCardArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .request({
        url: "https://rozeruta.free.beeceptor.com/jobs",
        method: "get",
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        setCardArray(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));

    // .get("https://rozeruta.free.beeceptor.com/jobs", {
    //   headers: { Accept: "application/json" },
    // })
    // .then((response) => {
    //   console.log({ response: response.data });
    //   console.log({ cardArray });
    //   setCardArray(response.data);
    //   // jei neveikia su header
    //   // setCardArray(JSON.parse(response.data));
    //   console.log({ cardArray });
    //   setIsLoading(false);
    // })
    // .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Data is loading...</div>;
  }

  const mapppedCards = cardArray.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return <>{mapppedCards}</>;
}

export default Heading;
