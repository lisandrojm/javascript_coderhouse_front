//Proyecto Freelander: Una calculadora para saber cuánto cobrar como freelancer.

// alert
// Bienvienida.

alert(
  "Bienvenido a Freelo Calculator. Una herramienta simple para que sepas cuanto cobrar como freelancer."
);

// let / prompt / while / switch
// Solicitud de ingreso de la moneda para hacer el calculo.

let moneda = prompt(
  "Ingresa la moneda con la que deseas hacer el cálculo."
).toLowerCase();

while (
  moneda !== "dólar" &&
  moneda !== "dólares" &&
  moneda !== "dolar" &&
  moneda !== "dolares" &&
  moneda !== "euro" &&
  moneda !== "euros"
) {
  switch (moneda) {
    case "peso":
    case "pesos":
    case "peso argentino":
    case "pesos argentinos":
      alert(
        "¿Pero estás loco?. ¿Cómo vas a calcular en PESOS jaja?. Esa moneda devalúa constantemente. Elige por favor una moneda estable de intercambio y ahorro a nivel mundial."
      );
      break;
    case "real":
    case "reales":
    case "peso uruguayo":
    case "pesos uruguayos":
    case "libra":
    case "libras":
      alert(
        "No te recomendamos hacer el cálculo con esa moneda ya que es de uso local. Elige por favor una moneda de intercambio y ahorro a nivel mundial."
      );
      break;
    default:
      alert(
        "No ingresaste una moneda válida o el sistema no puede hacer el cálculo con esa moneda."
      );
      break;
  }
  moneda = prompt(
    "Ingresa la moneda con la que deseas hacer el cálculo."
  ).toLowerCase();
}

// const / arrow function / if
// Cambio del string "dolar o "dólar" o "euro" de singular a plural para el caso en el que el usuario lo ingrese en singular. Para que quede bien en la redacción.

const pluralizarMoneda = () => {
  if (
    moneda === "dolar" ||
    moneda === "dólar" ||
    moneda === "dolares" ||
    moneda === "dólares"
  ) {
    moneda = "dólares";
  } else {
    moneda = "euros";
  }
};

pluralizarMoneda();

let ingresos = parseInt(
  prompt(
    "Ingresa el monto en " +
      moneda.toUpperCase() +
      " de lo que pretendes ganar mensualmente."
  ).toLowerCase()
);

while (isNaN(ingresos)) {
  alert(
    "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
  );
  ingresos = parseInt(
    prompt(
      "Ingresa el monto en " +
        moneda.toUpperCase() +
        " de lo que pretendes ganar mensualmente."
    ).toLowerCase()
  );
}

alert(
  "Pretendes ganar " +
    ingresos +
    " " +
    moneda.toUpperCase() +
    " mensuales. Vamos a calcular cómo puedes lograrlo."
);

//******* PreEntrega2Martinez *********//
//
//Objetos
//
class IngresoPretendido {
  constructor(moneda, ingreso) {
    this.moneda = moneda;
    this.ingreso = ingreso;
  }
}

class Gastos {
  constructor(oficina, internet, software) {
    this.oficina = oficina;
    this.internet = internet;
    this.software = software;
  }
  resumen() {
    alert(
      "Tus gastos totales son " +
        (this.oficina + this.internet + this.software) +
        " " +
        moneda.toUpperCase()
    );
  }
}

let gastosOficina = parseInt(
  prompt(
    "Ingresa tus gastos de Oficina en " + moneda.toUpperCase()
  ).toLowerCase()
);

let gastosInternet = parseInt(
  prompt(
    "Ingresa tus gastos de Internet en " + moneda.toUpperCase()
  ).toLowerCase()
);
let gastosSoftware = parseInt(
  prompt(
    "Ingresa tus gastos de Software en " + moneda.toUpperCase()
  ).toLowerCase()
);

const persona1 = new Gastos(gastosOficina, gastosInternet, gastosSoftware);

persona1.resumen();

//Arrays
//

const costosDeVida = ["Tu seguro de salud", "Tus impuestos", "Otros costos"];
const resultadoTotal = [];

for (let index = 0; index < costosDeVida.length; index++) {
  let resultado = parseInt(
    prompt(
      "Ingresa el costo en  " +
        moneda.toUpperCase() +
        " de " +
        costosDeVida[index]
    )
  );
  resultadoTotal.push(resultado);
}

console.log(resultadoTotal);

let suma = 0;

for (let i = 0; i < resultadoTotal.length; i++) {
  suma += resultadoTotal[i];
}

alert("Tus costos totales son " + suma + " " + moneda);
