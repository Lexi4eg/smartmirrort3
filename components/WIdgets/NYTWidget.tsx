"use client"
import React, { useState } from 'react';

interface Props {
    style?: string;
}
const NYTWidget = (props: Props) => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${process.env.NYTKEY}`);
        const jsonData = await res.json();
        setData(jsonData);
    };


    return (
        <>
            <div>Hello World</div>
            <button onClick={fetchData}>Fetch Data</button>

        </>
    );
};

export default NYTWidget;