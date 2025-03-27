// Variables principales para el sistema
let sistemaActivo = true
let vendedores = ''
let totalGeneral = 0
let comisionGeneral = 0
let maxVentasNombre = ''
let maxVentasValor = 0
let totalElectro = 0
let totalTecno = 0
let totalHog = 0
let vendedoresCount = 0

console.log('SISTEMA DE VENTAS Y COMISIONES')
console.log('-----------------------------')
console.log('Instrucciones:')
console.log('1. Ingresa el nombre del vendedor')
console.log('2. Selecciona una categoría (1, 2 o 3)')
console.log('3. Ingresa el monto de la venta')
console.log('4. Repite hasta terminar con el vendedor')
console.log("5. Escribe 'salir' para finalizar el sistema\n")

// Función para simular input en consola (solo para demostración) es el único que use profe jajajaja
function input (prompt) {
  return window.prompt(prompt)
}

// Proceso principal
while (sistemaActivo) {
  // Ingresar nombre del vendedor
  let nombre = input(
    "\nIngrese nombre del vendedor (o 'salir' para terminar): "
  )

  if (nombre.toLowerCase() === 'salir') {
    sistemaActivo = false
    break
  }

  vendedoresCount++
  let totalVendedor = 0
  let comisionVendedor = 0
  vendedores += nombre + ', '

  // Procesar ventas del vendedor
  let procesando = true
  while (procesando) {
    let categoria = input(
      '\nCategorías disponibles:\n' +
        '1. Electrodomésticos (5% comisión)\n' +
        '2. Tecnología (8% comisión)\n' +
        '3. Hogar (10% comisión)\n' +
        '4. Terminar con este vendedor\n' +
        'Seleccione una opción (1-4): '
    )

    if (categoria === '4') {
      procesando = false
      continue
    }

    if (categoria !== '1' && categoria !== '2' && categoria !== '3') {
      console.log('Opción no válida. Intente nuevamente.')
      continue
    }

    let monto = parseFloat(input('Ingrese el monto de la venta: $'))

    if (isNaN(monto) || monto <= 0) {
      console.log('Monto inválido. Intente nuevamente.')
      continue
    }

    let comision = 0
    let categoriaNombre = ''

    if (categoria === '1') {
      comision = monto * 0.05
      totalElectro += monto
      categoriaNombre = 'Electrodomésticos'
    } else if (categoria === '2') {
      comision = monto * 0.08
      totalTecno += monto
      categoriaNombre = 'Tecnología'
    } else if (categoria === '3') {
      comision = monto * 0.1
      totalHog += monto
      categoriaNombre = 'Hogar'
    }

    totalVendedor += monto
    comisionVendedor += comision

    console.log(
      `Venta registrada: $${monto.toFixed(2)} en ${categoriaNombre} - ` +
        `Comisión: $${comision.toFixed(2)}`
    )
  }
  console.log('------------------------------------------------------------')
  // Mostrar resumen del vendedor
  console.log('\nRESUMEN VENDEDOR:')
  console.log(`Nombre: ${nombre}`)
  console.log(`Total vendido: $${totalVendedor.toFixed(2)}`)
  console.log(`Comisión obtenida: $${comisionVendedor.toFixed(2)}`)

  // Actualizar totales generales
  totalGeneral += totalVendedor
  comisionGeneral += comisionVendedor

  // Verificar si es el mayor vendedor
  if (totalVendedor > maxVentasValor) {
    maxVentasValor = totalVendedor
    maxVentasNombre = nombre
  }
}

// Mostrar reporte final
console.log('\nREPORTE FINAL DEL SISTEMA')
console.log('-------------------------')
console.log(`Total de vendedores: ${vendedoresCount}`)
console.log(`Nombres de vendedores: ${vendedores.slice(0, -2)}`)
console.log(`Total vendido en la tienda: $${totalGeneral.toFixed(2)}`)
console.log(`Total en comisiones pagadas: $${comisionGeneral.toFixed(2)}`)

if (vendedoresCount > 0) {
  console.log(
    `\nVendedor con mayores ventas: ${maxVentasNombre} ($${maxVentasValor.toFixed(
      2
    )})`
  )

  // Determinar categoría más vendida
  let categoriaMayor = ''
  let mayorVenta = Math.max(totalElectro, totalTecno, totalHog)

  if (mayorVenta === totalElectro) {
    categoriaMayor = 'Electrodomésticos'
  } else if (mayorVenta === totalTecno) {
    categoriaMayor = 'Tecnología'
  } else {
    categoriaMayor = 'Hogar'
  }

  console.log(`Categoría más vendida: ${categoriaMayor}`)

  console.log('\nVentas por categoría:')
  console.log(`- Electrodomésticos: $${totalElectro.toFixed(2)}`)
  console.log(`- Tecnología: $${totalTecno.toFixed(2)}`)
  console.log(`- Hogar: $${totalHog.toFixed(2)}`)
}

console.log('\nSistema finalizado. Gracias por usar la interfaz!')
