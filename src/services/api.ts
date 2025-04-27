export async function fetchAnalysis(ticker: string) {
    if (!ticker) {
        throw new Error("Ticker is required");
    }

    console.log("Calling API with ticker:", ticker);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/analysis/${ticker}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch analysis: ${response.status}`);
    }

    return await response.json();
}
