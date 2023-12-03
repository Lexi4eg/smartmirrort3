
const handler = async (

) => {
    const dataIBM = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=Z5H8Z0Y4QXG9JQW0");
    const json = await dataIBM.json();

    const dataMSFT = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=Z5H8Z0Y4QXG9JQW0");
    const json2 = await dataMSFT.json();

    const dataAAPL = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=Z5H8Z0Y4QXG9JQW0");
    const json3 = await dataAAPL.json();

    const dataGOOG = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG&apikey=Z5H8Z0Y4QXG9JQW0");
    const json4 = await dataGOOG.json();

    const dataAMZN = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&apikey=Z5H8Z0Y4QXG9JQW0");
    const json5 = await dataAMZN.json();

    const dataFB = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&apikey=Z5H8Z0Y4QXG9JQW0");
    const json6 = await dataFB.json();

    const dataTSLA = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=Z5H8Z0Y4QXG9JQW0");
    const json7 = await dataTSLA.json();

    const dataNVDA = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NVDA&apikey=Z5H8Z0Y4QXG9JQW0");
    const json8 = await dataNVDA.json();

    //bundle the data into one json
    const data = JSON.stringify({IBM: json, MSFT: json2, AAPL: json3, GOOG: json4, AMZN: json5, FB: json6, TSLA: json7, NVDA: json8});

    return new Response(data);

}

export { handler as GET, handler as POST };