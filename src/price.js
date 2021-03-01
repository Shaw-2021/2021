import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const Price = () => {
  const [price, setPrice] = useState();

  const fetchData=() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=3AAS9C1MEK94K9MB"
      )
      .then((res) => {
        setPrice(
          res.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        console.log("hello");
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="price">USD$ {price}</div>;
};

export default Price;