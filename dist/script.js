import fetchData from "./feachDate.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    console.log(data);
    if (data) {
        data.forEach((item) => {
            console.log("Cliente Novo");
        });
    }
    console.log();
}
handleData();
//# sourceMappingURL=script.js.map