"use client"

import React, {useEffect, useState} from 'react';

interface Props {
    style?: string;

}

interface StockItemProps {
    name: string;
    open: string;
    close: string;
    high: string;
    low: string;
    volume: string;
}

function StockItem(props: StockItemProps) {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <div>{props.name}</div>
                <div>Open: {props.open}</div>
                <div>Close: {props.close}</div>
                <div>High: {props.high}</div>
                <div>Low: {props.low}</div>
                <div>Volume: {props.volume}</div>
            </div>
        </div>
    );
}
function getLastTradingDay() {
    const today = new Date();
    let day = today.getDay();
    let date = today.getDate();

    // If today is Monday to Friday, subtract 1 day
    if (day >= 1 && day <= 5) {
        date -= 1;
    }
    // If today is Saturday, subtract 2 days
    else if (day === 6) {
        date -= 2;
    }
    // If today is Sunday, subtract 3 days
    else if (day === 0) {
        date -= 3;
    }

    const lastTradingDay = new Date(today.getFullYear(), today.getMonth(), date);

    const year = lastTradingDay.getFullYear();
    const month = (lastTradingDay.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const dayOfMonth = lastTradingDay.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${dayOfMonth}`;
}

console.log(getLastTradingDay());

const StockWidget = (props: Props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const day = getLastTradingDay();
            console.log(day);

            const response = await fetch("http://localhost:3000/api/getStockData");
            const json = await response.json();
            console.log(json);
            console.log (json["AAPL"]);

            const high = json[0]["Time Series (Daily)"][day]["2. high"];
            const low = json[0]["Time Series (Daily)"][day]["3. low"];
            const open = json[0]["Time Series (Daily)"][day]["1. open"];
            const close = json[0]["Time Series (Daily)"][day]["4. close"];
            const volume = json[0]["Time Series (Daily)"][day]["5. volume"];
            const name = json[0]["Meta Data"]["2. Symbol"];

            console.log(high, low, open, close, volume, name);
        };
        fetchData().then(r => console.log(r));
    }, []);

    return (
        <>
            {data.map((stockData, index) => (
               <h1>HI</h1>
            ))}
        </>
    );
};

export default StockWidget;