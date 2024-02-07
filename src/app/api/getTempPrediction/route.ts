

export async function GET(request: Request) {
    const data = await request.json();

    const response = await fetch('http://localhost:3005/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return new Response(await response.json(), { status: 200 });

}
