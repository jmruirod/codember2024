# Desafío 5: ¡Encuentra a ΩMEGA!

La IA maligna ΩMEGA está acorralada. Tras revisar todos los nodos sanos de la red en el reto anterior... ¡hemos detectado que ΩMEGA se ha escondido en uno!

No sabemos exactamente cuál es... pero sabemos las reglas que ha seguido ΩMEGA para esconderse.

## Condiciones del problema

Necesitamos encontrar los números que cumplen las siguientes condiciones:

1. El número es primo.
2. La suma de sus dígitos también es un número primo.

## Tarea

Escribe un programa que:

1. Encuentre cuántos números de la lista cumplen con estas condiciones.
2. Determine cuál es el **tercer número** que cumple con ellas al recorrer la lista en orden ascendente.

### Ejemplo

Si tuviéramos la lista: `11, 12, 13, 14`

- **11**: Es primo. `1 + 1 = 2`, que es primo. → Cumple.
- **12**: No es primo. → No cumple.
- **13**: Es primo. `1 + 3 = 4`, que no es primo. → No cumple.
- **14**: No es primo. → No cumple.

En este caso, solo un número cumple las condiciones, y ese número sería el primero (`11`).

## ¿Qué debes hacer?

1. Analiza la lista de nodos del resultado del reto anterior y encuentra todos los números que cumplen las condiciones.
2. Determina cuántos números cumplen las condiciones.
3. Identifica el tercer número que cumple las condiciones al recorrer la lista en orden ascendente.

## Respuesta

Envía el número total de números que cumplen las condiciones y el tercer número encontrado, separados por un guión. Por ejemplo, si hay 4 números que cumplen y el tercer número es `11`, enviarías:

```plaintext
submit 4-11
```
