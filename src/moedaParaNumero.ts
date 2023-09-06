
/**
 * 
 * Recebe string '1.200,50' retorna number: 1200.50
 */
export default function moeadaParaNumero(moeada: string): number | null {
  console.log(moeada);
  const numero = Number(moeada.replaceAll(".", "").replace(",", "."));
  return isNaN(numero) ? null : numero;
}
