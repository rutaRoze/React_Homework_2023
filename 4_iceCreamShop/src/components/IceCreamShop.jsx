import IceCreamCount from "./IceCreamCount";
import IceCreamFlavors from "./IceCreamFlavors";
import { iceCreamData } from "../data/iceCreamData";
import IceCreamTotalPrice from "./IceCreamTotalPrice.jsx";
import React, { useState } from "react";

function IceCreamShop() {
  const [iceCreamList, setIceCreamList] = useState(iceCreamData);
  const [totalPrice, setTotalPrice] = useState({
    priceBeforeDiscount: 0,
    priceAfterDiscount: 0,
  });

  const [discount, setDiscount] = useState(5);

  const buyIceCream = (iceCreamToChose) => {
    const updatedIceCreamList = iceCreamList.map((iceCream) => {
      if (iceCream.key === iceCreamToChose.key) {
        const updatedIceCream = {
          ...iceCream,
          count: iceCream.count + 1,
        };
        return updatedIceCream;
      }
      return iceCream;
    });
    setIceCreamList(updatedIceCreamList);
    totalPriceCounter(iceCreamToChose);
  };

  const totalPriceCounter = (iceCream) => {
    const beforeDiscount = () => {
      return totalPrice.priceBeforeDiscount + iceCream.price;
    };

    const afterDicount = () => {
      return (
        totalPrice.priceAfterDiscount +
        iceCream.price -
        (iceCream.price * discount) / 100
      );
    };

    setTotalPrice({
      priceBeforeDiscount: beforeDiscount(),
      priceAfterDiscount: afterDicount(),
    });
  };

  const mappedIceCream = iceCreamList.map((iceCream) => {
    return (
      <React.Fragment key={iceCream.key}>
        <IceCreamFlavors iceCream={iceCream} buyIceCream={buyIceCream} />
        <IceCreamCount iceCream={iceCream} />
        <IceCreamTotalPrice discount={discount} totalPrice={totalPrice} />
      </React.Fragment>
    );
  });

  return <div>{mappedIceCream}</div>;
}

export default IceCreamShop;
