import React from 'react';

interface Props {
    style?: string;
}
const DailyQuoteWidget = async (props: Props) => {

    const res = await  fetch("https://zenquotes.io/api/today")
    const data =  await res.json()

    return (
        <>
            {data && (
                <>
                    <div className={`flex flex-col p-5 justify-center items-center w-full h-full ${props.style === "nightmode" ? "text-nightmode" : "text-white"}`}>
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
