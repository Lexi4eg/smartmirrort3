"use client"
import React, {useEffect, useState} from 'react';



interface Props {
    style?: string;
}

const StockWidget= async (props: Props) => {
    const data = await fetch("http://localhost:3000/api/getStockData")

    //to through every of the stock and if the the market is closed show the last value else show the data at the end of the day and if the stock is risiing is green if falling red

    for (let i = 0; i < data.size(); i++) {
        const stockdata = data[i];
        <StockItem name={stockdata["Symbol"]} open={stockdata["Time Series (5min)"][""]} />

    }



    return (
        <>

        </>

    );
};
interface StockItemProps {
    name: string;
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;

}
function StockItem(props: StockItemProps, p) {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <div>{props.name}</div>
                <div>{props.value}</div>
            </div>
            <div className="flex flex-col">
                <div>{props.name}</div>
                <div>{props.value}</div>
            </div>
        </div>
    );
}

export default StockWidget;