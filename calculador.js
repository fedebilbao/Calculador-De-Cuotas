let Monto_Prestamo;
let Cuota;
let Interes;
let Nombre;
let DNI;
let Edad;
let Monto_Cuota;
let Volver_A_Calcular;
let Cuota_Maxima;
let Nuevo_Credito;
let Lista_Creditos = [];

function Calculadora_De_Cuotas(){
    Monto_Cuota = (((Monto_Prestamo*((Interes/12)*Cuota))+Monto_Prestamo)/Cuota);
    Monto_Cuota = Monto_Cuota.toFixed(2)
}

function Resultado(){
    Calculadora_De_Cuotas();
    console.log("<------PLAN SOLICITADO------>")
    console.log("Estas solicitando: $",Monto_Prestamo,);
    console.log("Elegiste pagarlo en ", Cuota, "Cuotas");
    console.log("El total a pagar por cuota es de $",Monto_Cuota);
}

function Cantidad_De_Cuotas(){
    do{
        console.log("Tenes la posibilidad de sacar nuestro crédito en hasta",Cuota_Maxima,"cuotas");
        console.log("nuestro sistema rechazará cualquier intento de ingreso de valores negativos o cuotas mayores a la antes mencionada.")
        Cuota = Number(prompt("En cuantas cuotas te gustaría sacar nuestro crédito"));
    }while(Cuota>Cuota_Maxima || Cuota<0);
}

function Volver(){
    Volver_A_Calcular = prompt ("Si queres volver a calcular tu prestamo escribi: recalcular, con cualquier otra palabra su crédito quedará completo");
}

function Crear_Perfil(){
        Nombre=prompt("Bienvenidos al calculador de cuotas para prestamos de $0 a $100.000, ¿Como es tu nombre?");
        DNI=prompt("¿Cual es tu DNI");
        Edad=prompt ("¿Cuantos años tenes?");  
}
do{
    console.log("El sistema lleva otorgados:", Lista_Creditos.length, "créditos");
    Crear_Perfil();

    do{
        do{
            console.log("");
            console.log("Hola", Nombre, "vamos a armar tu plan de cuotas");
            console.log("");
            Monto_Prestamo = Number(prompt("¿Que cantidad de dinero querés solicitar en esta oportunidad? Recordá que podes solicitar hasta $100.000 y no pueden ser números negativos"));
        }while(Monto_Prestamo>100000 || Monto_Prestamo<0);
    
        if(Monto_Prestamo <=10000){
            Interes=2;
            Cuota_Maxima=3;
            Cantidad_De_Cuotas();
            Resultado();
            Volver();
        }
        else if(Monto_Prestamo >=50000){
            Interes=1;
            Cuota_Maxima=12;
            Cantidad_De_Cuotas();
            Resultado();
            Volver();
        }
        else{

            Interes=1,5;
            Cuota_Maxima=6;
            Cantidad_De_Cuotas();
            Resultado();
            Volver();
        }
    }while(Volver_A_Calcular == "recalcular");

    class Cliente{
        constructor(Nombre,DNI,Edad){
        this.Nombre= Nombre;
        this.DNI= DNI;
        this.Edad= Edad;
        this.Cuota=Cuota;
        this.Monto_Cuota=Monto_Cuota;
        this.Monto_Prestamo=Monto_Prestamo;
        }
    }
    let Cliente_Uno = new Cliente (Nombre,DNI,Edad,Monto_Prestamo,Cuota,Monto_Cuota);
    Lista_Creditos.push ({Cliente_Uno}); 
    console.log("");


    console.log("Para cargar un nuevo crédito digite 1, de lo contrario el sistema finaliza y le da un listado de los créditos concedidos");
    Nuevo_Credito = Number(prompt("Para continuar cargando créditos presione 1"));
}while(Nuevo_Credito==1);

console.log("");
console.log("Gracias por utilizar nuestro calculador de cuotas");
console.log(Lista_Creditos);