import { useState } from "react";   

function UseCurrencyInfo(currency){
    const [data,setdata]=useState(0)
       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
        return data;
 } 
 export default UseCurrencyInfo