import {NextRequest} from "next/server";
import {env} from "~/env.mjs";
import {metadata} from "~/app/layout";
import {NextApiRequest, NextApiResponse} from "next";

const handler = async (req: NextApiRequest , res: NextApiResponse) => {

    const data = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${env.NYTKEY}`)
    const json = await data.json();
    const articles = [];

    if (json && json.results) {
        for(let i = 0; i < json.results.length; i++){
            if (json.results[i].media && json.results[i].media[0] && json.results[i].media[0]['media-metadata']) {
                const thirdUrl = json.results[i].media[0]['media-metadata'][2]?.url;
                articles.push({
                    title: json.results[i].title,
                    abstract: json.results[i].abstract,
                    imageUrl: thirdUrl,
                });
            }
        }
    }

    //make articles to json
    const articles2 = JSON.stringify(articles);

    return new Response(articles2);
}

export { handler as GET, handler as POST };

