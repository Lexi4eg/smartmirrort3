import React from 'react';


const DailyQuoteWidget = async () => {

    const res = await  fetch("https://zenquotes.io/api/today")
    const data =  await res.json()

    return (
        <>
        {data &&(
            <>
                <div className={"flex flex-col text-white p-5 justify-center items-center w-full h-full"}>
                    <div className="text-3xl text-center">
                        {data[0].q}

                    </div>
                    <div className="p-4 text-xl">
                        {data[0].a}
                    </div>

                </div>
            </>
        )}
        </>
    );
};

export default DailyQuoteWidget;
