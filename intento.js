// 1) Extraer el total de ingresos
// 2) Extraer el total de egresos (o extracciones)
// 3) Extraer un saldo final (a ver si llegamos a fin de mes)
// TRATAR DE NO COPIARSE DE NINGUN LADO :')

var movimientos = [
    {
      tipo: "ingreso",
      monto: 5000,
    },
    {
      tipo: "ingreso",
      monto: 300,
    },
    {
      tipo: "extraccion",
      monto: 500,
    },
    {
      tipo: "ingreso",
      monto: 300,
    },
    {
      tipo: "extraccion",
      monto: 1000,
    },
  
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "extraccion",
      monto: 2000,
    },
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "extraccion",
      monto: 500,
    },
  ];


var extraccionesBancarias = movimientos.filter(function(mov) {
    return (mov.tipo === "extraccion");
});

var ingresosBancarios = movimientos.filter(function(mov) {
    return (mov.tipo === "ingreso");
});

//console.log(ingresosBancarios)
//console.log(extraccionesBancarias)

var montosExt = extraccionesBancarias.map((item) => item["monto"])
var montosIng = ingresosBancarios.map((item) => item["monto"])
//console.log(montosExt)
//console.log(montosIng)

var sumaExt = montosExt.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

var sumaIng = montosIng.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

//console.log(sumaExt)
//console.log(sumaIng)

var saldo = sumaIng - sumaExt
//console.log(saldo)


console.log(`Este mes ha ingresado un total de ${sumaIng}`)
console.log(`Este mes ha extraído un total de ${sumaExt}`)
console.log(`Por lo tanto su saldo es de ${saldo}`)

if (saldo > 0) 
    window.alert("Su balance mensual es POSITIVO")
else 
    window.alert("Su balance mensual es NEGATIVO")