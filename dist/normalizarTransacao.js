import moeadaParaNumero from "./moedaParaNumero.js";
import stringToDate from "./stringToDate.js";
export default function normalizarTransacao(transcao) {
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
//# sourceMappingURL=normalizarTransacao.js.map