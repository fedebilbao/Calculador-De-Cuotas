let Monto_Prestamo;
let Cuota;
let Interes;
let Nombre;
let Monto_Cuota;
let Volver_A_Calcular;

function Calculadora_De_Cuotas(){
    Monto_Cuota = (((Monto_Prestamo*((Interes/12)*Cuota))+Monto_Prestamo)/Cuota);
    Monto_Cuota = Monto_Cuota.toFixed(2)
}

function Resultado(){
    Calculadora_De_Cuotas();
    console.log("<------PLAN SOLICITADO------fran>")
    console.log("Estas solicitando: $",Monto_Prestamo,);
    console.log("Elegiste pagarlo en ", Cuota, "Cuotas");
    console.log("El total a pagar por cuota es de $",Monto_Cuota);
}

Nombre = prompt("Bienvenidos al calculador de cuotas para prestamos de $0 a $100.000, ¿Como es tu nombre?");

while(typeof("Nombre") != "string"){
    alert("Porfavor solo utilice letras para este campo" );
    Nombre = Number(prompt("Bienvenidos al calculador de cuotas para prestamos de $0 a $100.000, ¿Como es tu nombre?"));
}

do{
    do{
        console.log("Hola", Nombre, "vamos a armar tu plan de cuotas");
        console.log("");
        Monto_Prestamo = Number(prompt("¿Que cantidad de dinero querés solicitar en esta oportunidad? Recordá que podes solicitar hasta $100.000 y no pueden ser números negativos"));
    }while(Monto_Prestamo>100000 || Monto_Prestamo<0);
    
    if(Monto_Prestamo <=10000){
        Interes=2;
        do{
            Cuota = Number(prompt("En cuantas cuotas te gustaría sacar nuestro crédito, tenes la posibilidad de hacerlo hasta en 3 cuotas"));
        }while(Cuota>3 || Cuota<0);
        Resultado();
        Volver_A_Calcular = prompt ("Si queres volver a calcular tu prestamo escribi: recalcular, con cualquier otra palabra el calculador termina")
    }
    else if(Monto_Prestamo >=50000){
        Interes=1;
        do{
            Cuota = Number(prompt("En cuantas cuotas te gustaría sacar nuestro crédito, tenes la posibilidad de hacerlo hasta en 12 cuotas"));
        }while(Cuota>12 || Cuota<0);
        Resultado();
        Volver_A_Calcular = prompt ("Si queres volver a calcular tu prestamo escribi: recalcular, con cualquier otra palabra el calculador termina")
    }
    else{

        Interes=1,5;
        do{
            Cuota = Number(prompt("En cuantas cuotas te gustaría sacar nuestro crédito, tenes la posibilidad de hacerlo hasta en 6 cuotas"));
        }while(Cuota>6 || Cuota<0);
        Resultado();
        Volver_A_Calcular = prompt ("Si queres volver a calcular tu prestamo escribi: recalcular, con cualquier otra palabra el calculador termina")
    }
}while(Volver_A_Calcular == "recalcular");

console.log("");
console.log("Gracias por utilizar nuestro calculador de cuotas");
