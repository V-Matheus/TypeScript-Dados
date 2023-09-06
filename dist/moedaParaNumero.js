export default function moeadaParaNumero(moeada) {
    const numero = Number(moeada.replaceAll(".", "").replace(",", "."));
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=moedaParaNumero.js.map