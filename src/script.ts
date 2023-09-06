import Estatisticas from "./Estatisticas.js";
import { countList } from "./countBy.js";
import fetchData from "./feachDate.js";
import normalizarTransacao from "./normalizarTransacao.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );
  if (!data) return;
  const transacoes = data.map(normalizarTransacao);
  preecherTabela(transacoes);
  preecherEstatisticas(transacoes);
}

function preecherLista(lista: countList, containerId: string): void {
  const containerElement = document.getElementById(containerId);
  if(containerElement) {
    Object.keys(lista).forEach(key => {
      containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`
    })
  }
}


function preecherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes);
  
  preecherLista(data.pagamento, 'pagamento');
  preecherLista(data.status, 'status');
  
  const totalElement = document.querySelector<HTMLElement>('#total span');
  if(totalElement) {
    totalElement.innerText = data.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}

function preecherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes tbody");
  if (!tabela) return;
  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>R$ ${transacao.moeada}</td>
        <td>${transacao.pagamento}</td>
        <td>${transacao.status}</td>
      <tr>
    `;
  });
}
handleData();
