import moeadaParaNumero from "./moedaParaNumero.js";
import stringToDate from "./stringToDate.js";

declare global {
  type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
  type TransacaoStatus =
    | "Paga"
    | "recusada pela peradora do cartão"
    | "Agurdando pagamento"
    | "retornada";

  interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ["Valor (R$)"]: string;
    ["Forma de Pagamento"]: TransacaoPagamento;
    ["Cliente Novo:"]: number;
  }

  interface Transacao {
    nome: string;
    id: number;
    data: Date;
    status: TransacaoStatus;
    email: string;
    moeada: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
  }
}

export default function normalizarTransacao(transcao: TransacaoAPI): Transacao {
  return {
    nome: transcao.Nome,
    id: transcao.ID,
    data: stringToDate(transcao.Data),
    status: transcao.Status,
    email: transcao.Email,
    moeada: transcao["Valor (R$)"],
    valor: moeadaParaNumero(transcao["Valor (R$)"]),
    pagamento: transcao["Forma de Pagamento"],
    novo: Boolean(transcao["Cliente Novo:"]),
  };
}
