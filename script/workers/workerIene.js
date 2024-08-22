addEventListener("message", event => {
    conectaAPI();
    setInterval(() => conectaAPI(), 2000)
})

async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/JPY-BRL");
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.JPYBRL);
}