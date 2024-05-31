
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    currency = currency.toLowerCase()
    const [currencyData, setCurrencyData] = useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((data) => {
            setCurrencyData(data[currency]);
        });
    }, [currency]);
    
    // useEffect(() => {
    //     console.log(currencyData);
    // }, [currencyData]);
    // console.log(currencyData);
    return currencyData;
}

export default useCurrencyInfo;