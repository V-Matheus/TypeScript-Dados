export default function moeadaParaNumero(moeada) {
    console.log(moeada);
    const numero = Number(moeada.replaceAll(".", "").replace(",", "."));
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=moedaParaNumero.js.map