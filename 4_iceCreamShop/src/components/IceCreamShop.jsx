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
  // const [chosenIceCream, setChosenIceCream] = useState();
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
    // setChosenIceCream(iceCreamToChose);
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

  const mappedIceCreamForFlavor = iceCreamList.map((iceCream) => {
    return (
      <React.Fragment key={iceCream.key}>
        <IceCreamFlavors iceCream={iceCream} buyIceCream={buyIceCream} />
      </React.Fragment>
    );
  });

  const mappedIceCreamForCount = iceCreamList.map((iceCream) => {
    return (
      <React.Fragment key={iceCream.key}>
        <IceCreamCount iceCream={iceCream} />
      </React.Fragment>

    );
  });

  return (
    <>
      {mappedIceCreamForFlavor}
      {mappedIceCreamForCount}
      <IceCreamTotalPrice discount={discount} totalPrice={totalPrice} />
    </>
  );
}

export default IceCreamShop;
