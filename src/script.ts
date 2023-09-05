import fetchData from "./feachDate.js";

type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacaoStatus =
  | "Paga"
  | "recusada pela peradora do cartão"
  | "Agurdando pagamento"
  | "retornada";

interface transacaoAPI {
  Nome: string;
  ID: number;
  Data: string;
  Status: TransacaoStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento:"]: string;
  ["Cliente Novo:"]: number;
}

async function handleData() {
  const data = await fetchData<transacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  console.log(data);

  if (data) {
    data.forEach((item) => {
      console.log("Cliente Novo");
    });
  }

  console.log();
}

handleData();
