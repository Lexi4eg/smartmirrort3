import {NextRequest, NextResponse} from "next/server";

const handler = async (req: NextRequest, res: NextResponse) => {
    const dataIBM = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo");
    const json = await dataIBM.json();

    const dataMSFT = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=demo");
    const json2 = await dataMSFT.json();

    const dataAAPL = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&outputsize=full&apikey=demo");
    const json3 = await dataAAPL.json();

    const dataGOOG = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOG&interval=5min&outputsize=full&apikey=demo");
    const json4 = await dataGOOG.json();

    const dataAMZN = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMZN&interval=5min&outputsize=full&apikey=demo");
    const json5 = await dataAMZN.json();

    const dataFB = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=FB&interval=5min&outputsize=full&apikey=demo");
    const json6 = await dataFB.json();

    const dataTSLA = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=5min&outputsize=full&apikey=demo");
    const json7 = await dataTSLA.json();

    const dataNVDA = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NVDA&interval=5min&outputsize=full&apikey=demo");
    const json8 = await dataNVDA.json();

    //bundle the data into one json
    const data = JSON.stringify({IBM: json, MSFT: json2, AAPL: json3, GOOG: json4, AMZN: json5, FB: json6, TSLA: json7, NVDA: json8});

    return new Response(data);
}

export { handler as GET, handler as POST };