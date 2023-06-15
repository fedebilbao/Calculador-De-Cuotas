//VARIABLES//

let Monto_Prestamo;
let Cuota;
let Interes;
let Nombre;
let DNI;
let Edad;
let Usuario;
let Contraseña;
let Monto_Cuota;
let Nuevo_Credito;
let Lista_Creditos = [];
let A = 0;
let JSONCliente;
let obj;
let ErrorNuevoCliente = 0;


//FUNCIONES//

function Crear_Perfil(){
    Nombre= document.getElementById("Nombre");
    Nombre = Nombre.value;
    DNI= document.getElementById("DNI");
    DNI = DNI.value;
    Edad=document.getElementById("Edad");
    Edad= Edad.value;
    Usuario= document.getElementById("UsuarioNuevo");
    Usuario= Usuario.value;
    Contraseña = document.getElementById("ContraseñaNueva");
    Contraseña = Contraseña.value;

    if(Edad<18){
        if (ErrorNuevoCliente == 0){
            let NuevoCliente = document.getElementById("NuevoCliente");
            ErrorNuevoCliente = document.createElement("p");
            ErrorNuevoCliente.innerHTML = "<p> Los menores de 18 años no pueden adquirir nuestros productos </p>";
            NuevoCliente.append(ErrorNuevoCliente);
            ErrorNuevoCliente = 1;
        }
    }
    else{
        let PerfilCreado = document.getElementById("IngresoCorrecto");
        PerfilCreado.innerHTML = "<h4>Su usuario se creó correctamente y se encuentra logeado</h4>"
        A = 1;
        NuevoCliente.style.display = "none";
        let IngresoUsuario = document.getElementById("IngresoUsuario");
        IngresoUsuario.style.display = "none";
        let MarginBottom = document.getElementById("Ingreso");
        MarginBottom.style.margin= "0px";      
    }
    
}

function Ingreso(){
    Usuario= document.getElementById("Usuario");
    Usuario = Usuario.value;
    Contraseña = document.getElementById("Contraseña");
    Contraseña = Contraseña.value;
    if(Usuario<5/* falta realizar verificación con un .find para ver si el usuario ya existe */){
        let IngresoUsuario = document.getElementById("IngresoUsuario");
        let ErrorIngresoUsuario = document.createElement("p");
        ErrorIngresoUsuario.innerHTML = "<p> Los datos ingresados no son correctos </p>";
        IngresoUsuario.append(ErrorIngresoUsuario);
    }
    
    else{
        let IngresoPerfil = document.getElementById("IngresoCorrecto");
        IngresoPerfil.innerHTML ="<h4>Ingresó a nuestro sistema correctamente y ya se encuentra logeado</h4>";
        A = 1;
        let NuevoCliente = document.getElementById("NuevoCliente");
        NuevoCliente.style.display = "none";
        IngresoUsuario.style.display = "none";
        let MarginBottom = document.getElementById("Ingreso");
        MarginBottom.style.margin= "0px";        
    }
    
}

function Calculadora_De_Cuotas(){
    Monto_Cuota = (((Monto_Prestamo*((Interes/12)*Cuota))+Monto_Prestamo)/Cuota);
    Monto_Cuota = Monto_Cuota.toFixed(2);
    let TextoCuota = document.getElementById("montocuota");
    TextoCuota.innerHTML="$" + Monto_Cuota;
}

function Arreglo(){
    class Cliente{
        constructor(Nombre,DNI,Edad,Usuario,Contraseña,Cuota,Monto_Cuota,Monto_Prestamo){
        this.Nombre= Nombre;
        this.DNI= DNI;
        this.Edad= Edad;
        this.Usuario= Usuario;
        this.Contraseña= Contraseña;
        this.Cuota=Cuota;
        this.Monto_Cuota=Monto_Cuota;
        this.Monto_Prestamo=Monto_Prestamo;
        }
    }
    let Cliente_Uno = new Cliente (Nombre,DNI,Edad,Usuario,Contraseña,Monto_Prestamo,Cuota,Monto_Cuota);
    Lista_Creditos.push ({Cliente_Uno});
    console.log(Lista_Creditos); 
    JSONCliente = JSON.stringify(Lista_Creditos);
    localStorage.setItem("obj", JSONCliente);
}

function Calcular(){
    Monto_Prestamo = document.getElementById("Monto");
    Monto_Prestamo = Number(Monto_Prestamo.value);
    Cuota =  document.getElementById("Cuota");
    Cuota = Number(Cuota.value);
    let Calculo = document.getElementById("Calculo");


    if(A==1 && Monto_Prestamo>0 && Monto_Prestamo<=10000 && Cuota<=3 && Cuota>0){
        Interes=2;
        Calculadora_De_Cuotas();
    }
    else if (A==1 && Monto_Prestamo>10000 && Monto_Prestamo<=50000 && Cuota<=6 && Cuota>0){
        Interes=1,5;
        Calculadora_De_Cuotas();
    }
    else if(A==1 && Monto_Prestamo>50000 && Monto_Prestamo<=100000 && Cuota<=12 && Cuota>0){
        Interes=1;
        Calculadora_De_Cuotas();
    }
    else if(A!=1){
        let ErrorLogueo = document.createElement("p");
        ErrorLogueo.innerHTML="<p>Usted no se encuentra logeado en nuestro sistema</p>";
        Calculo.append(ErrorLogueo);
    }
    else if(Monto_Prestamo<=0 || Monto_Prestamo>100000){
        let ErrorMonto = document.createElement("p");
        ErrorMonto.innerHTML ="<p>El monto debe encontrarse entre $0 y $100.000</p>";
        Calculo.append(ErrorMonto);
    }
    else{
        let ErrorCuota = document.createElement("p");
        ErrorCuota.innerHtml ="<p>La cantidad de cuotas no es correcta</p>";
        Calculo.append(ErrorCuota);
    }
    
}

function SolicitarCredito(){
    if(Usuario == undefined || Monto_Cuota==undefined || Cuota == undefined || Monto_Cuota == "" || Cuota ==0){
        let ErrorSolicitar = document.getElementById ("Otorgado");
        ErrorSolicitar.innerHTML = "Usted no cargó algún dato de la operación, por favor vuelva a realizarlo"
        ErrorSolicitar.style.color = "red";
    }

    else{
        let Otorgado = document.getElementById ("Otorgado");
        Otorgado.innerHTML = "Su crédito fue otorgado correctamente, el monto solicitado es: $" + Monto_Prestamo + " a pagar en " + Cuota + " cuotas de $" + Monto_Cuota;
        Otorgado.style.color = "green";
        Arreglo();
        Calculo.style.display ="none";
        btn_SolicitarCredito.style.display="none";
    }

}


JSONCliente = localStorage.getItem("obj");
JSONCliente = JSON.parse(JSONCliente);

// BOTONES //

let btn_Ingresar= document.getElementById("btn_Ingresar");
btn_Ingresar.addEventListener("click",Ingreso);

let btn_CrearPerfil= document.getElementById("btn_CrearPerfil");
btn_CrearPerfil.addEventListener("click", Crear_Perfil);

let btn_Calcular= document.getElementById("btn_Calcular");
btn_Calcular.addEventListener("click", Calcular)

let btn_SolicitarCredito = document.getElementById("btn_SolicitarCredito");
btn_SolicitarCredito.addEventListener("click", SolicitarCredito);

/* Falta realizar un .filter para mostrar los créditos otorgados por usuario en pantalla*/

