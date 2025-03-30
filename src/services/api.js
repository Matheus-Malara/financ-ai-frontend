export async function fetchAnalysis(ticker) {
    const res = await fetch(`/analysis/${ticker}`);
    if (!res.ok) {
        throw new Error("Erro na requisição");
    }
    return await res.json();
}
