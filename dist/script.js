import fetchData from "./feachDate.js";
import normalizarTransacao from "./normalizarTransacao.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    console.log(transacoes);
    transacoes.forEach(item => {
        item.data.getHours();
    });
}
handleData();
//# sourceMappingURL=script.js.map