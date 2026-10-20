/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {
  if (!Number.isFinite(precio) || precio < 0) {
    throw new RangeError("El precio debe ser finito, y mayor o igual a cero")
  }
  if (!Number.isFinite(descuento) || descuento > 100 || descuento < 0) {
    throw new RangeError("El descuento debe ser finito, y de 0 a 100")
  }
  return precio - (precio * descuento) / 100;
}
