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
    ["Forma de Pagamento:"]: string;
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

export default function normalizarTransacao(transcao: TransacaoAPI) {
  return {
    nome: transcao.Nome,
    id: transcao.ID,
    data: transcao.Data,
    status: transcao.Status,
    email: transcao.Email,
    moeada: transcao["Valor (R$)"],
    valor: 0,
    pagamento: transcao["Forma de Pagamento:"],
    novo: Boolean(transcao["Cliente Novo:"]),
  };
}
