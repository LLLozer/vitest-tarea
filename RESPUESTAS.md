En este archivo se responden a las preguntas de Testing-Guía-Practica.md

**Preguntas:** ¿qué archivo contiene la regla de cálculo? ¿Qué archivo define la ruta HTTP? ¿En qué se diferencian sus responsabilidades?

El archivo que tiene la regla de cálculo es services/precios.ts. El que define la ruta HTTP es app.ts. Las responsabilidades se diferencian en que uno maneja la lógica de negocio, mientras que otro maneja la configuración de endpoints.

Leé la prueba que contiene `calcularPrecioFinal(1000, 150)`. ¿Qué comportamiento exige? ¿Qué hace realmente el código? **Todavía no modifiques la implementación.**

Lo que hace el código es lanzar un error de fuera de rango en caso de que el descuento sea mayor a 100, la función está dentro del callback para que llegue al framework, comprobar si hay un error, y lanzar el RangeError en caso de serlo.

1. ¿Qué total devuelve actualmente un descuento del 150 % sobre $1.000?
El total que devolvería sería -500 (el precio final)
2. ¿Por qué ese resultado no cumple la regla de negocio?
El resultado no cumple la regla de negocio porque no debe haber descuentos de más del 100%
3. ¿Por qué la prueba falla si la función terminó de ejecutarse?
La prueba falla porque no existe una validación que lance un error ante el caso

El código `400` indica que la petición contiene datos que el servidor no acepta. La ruta de `src/app.ts` ya contempla la respuesta `400` cuando el servicio lanza `RangeError` o `TypeError`.

Ejecutá `npm test` nuevamente. Explicá por qué esta comprobación es de **integración** y no solamente una prueba unitaria.
La comprobación es de integración porque esta misma enlaza pruebas unitarias (las aisladas), comprobando que funcione todo lo que está integrado dentro de api.tests.ts, incluidas las comprobaciones unitarias

**Pregunta:** ¿por qué conviene utilizar tanto `typecheck` como `npm test`?
Conviene utilizar ambas verificaciones, ya que, en una se analizan los tipos sin generar archivos .js sin ejecutar los tests, y las pruebas automatizadas comprueban comportamiento de manera directa, pero no comprueban sus tipos, su uso mútuo tiene el fin de complementar las debilidades de ambas verificaciones.

1. ¿Qué diferencia hay entre comprobar manualmente una respuesta y ejecutar una prueba automatizada?
En una prueba manual, una persona realiza acciones específicas, además de analizar las respuestas del sistema, en cambio, en una prueba automatizada, esa verificación está expresada mediante código y puede ejecutarse repetidas veces.
2. ¿Cuál fue la causa de la primera prueba fallida?
La causa fue que no había ninguna validación que diera error al salirse del rango del descuento.
3. ¿Por qué es útil incluir casos inválidos además de los casos habituales?
Es útil incluir casos inválidos como una medida de seguridad extra ante acciones imprevistas.
4. ¿Qué parte del sistema comprueba `tests/precios.test.ts` y qué partes comprueba `tests/api.test.ts`?
La parte del sistema que los comprueba es el script de test, el cual corre comprobaciones de vitest a lo largo del sistema.
5. ¿Qué ventajas ofrece ejecutar las pruebas después de cada modificación?
La ventaja que parte de ejecutar pruebas luego de una modificación se sujeta bajo la premisa de que una prueba que falla puede indicar un error de implementación, una expectativa equivocada o un requisito que todavía no está claro, permitiendo que esto funcione como un resultado a ser interpretado y posteriormente corregido.