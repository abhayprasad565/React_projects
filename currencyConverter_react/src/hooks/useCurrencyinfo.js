import { useEffect, useState } from "react";
// takes input of the currency returns exchange rate
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    // call api to get conversion rates
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then(res => res.json())
            // set res to the ui
            .then((res) => setData(res[currency]))
            .catch((err) => console.log(err));
    }, currency)
    console.log(data);
    return data;
}
export default useCurrencyInfo;