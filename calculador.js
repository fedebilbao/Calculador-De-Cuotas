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
        /* PerfilCreado.innerHTML = "<h4>Su usuario se creó correctamente y se encuentra logeado</h4>" */
        PerfilCreado.innerHTML = "<h4></h4>"
        A = 1;
        NuevoCliente.style.display = "none";
        let IngresoUsuario = document.getElementById("IngresoUsuario");
        IngresoUsuario.style.display = "none";
        let MarginBottom = document.getElementById("Ingreso");
        MarginBottom.style.margin= "0px";

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su usuario se creó correctamente y ya se encuentra logeado',
            showConfirmButton: false,
            timer: 1500
          })      
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
        /* IngresoPerfil.innerHTML ="<h4>Ingresó a nuestro sistema correctamente y ya se encuentra logeado</h4>"; */
        IngresoPerfil.innerHTML ="<h4></h4>";
        A = 1;
        let NuevoCliente = document.getElementById("NuevoCliente");
        NuevoCliente.style.display = "none";
        IngresoUsuario.style.display = "none";
        let MarginBottom = document.getElementById("Ingreso");
        MarginBottom.style.margin= "0px";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usted ingresó en nuestro sistema',
            showConfirmButton: false,
            timer: 1500
          })        
    }
    
}

function Calculadora_De_Cuotas(){
    Monto_Cuota = (((Monto_Prestamo*((Interes/12)*Cuota))+Monto_Prestamo)/Cuota);
    Monto_Cuota = Monto_Cuota.toFixed(2);
    let TextoCuota = document.getElementById("montocuota");
    TextoCuota.innerHTML="$" + Monto_Cuota;
}

function Arreglo(){
    JSONCliente = localStorage.getItem("obj");
    JSONCliente = JSON.parse(JSONCliente);
    Lista_Creditos = JSONCliente;
        if (Lista_Creditos == null){
            Lista_Creditos = [];
            let Cliente_Uno = new Cliente (Nombre,DNI,Edad,Usuario,Contraseña,Monto_Prestamo,Cuota,Monto_Cuota);
            Lista_Creditos.push (Cliente_Uno);
            console.log(Lista_Creditos); 
            JSONCliente = JSON.stringify(Lista_Creditos);
            localStorage.setItem("obj", JSONCliente);
        }
        else{
            let Cliente_Uno = new Cliente (Nombre,DNI,Edad,Usuario,Contraseña,Monto_Prestamo,Cuota,Monto_Cuota);
            Lista_Creditos.push (Cliente_Uno);
            console.log(Lista_Creditos); 
            JSONCliente = JSON.stringify(Lista_Creditos);
            localStorage.setItem("obj", JSONCliente);
        }

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
        /* Otorgado.innerHTML = "Su crédito fue otorgado correctamente, el monto solicitado es: $" + Monto_Prestamo + " a pagar en " + Cuota + " cuotas de $" + Monto_Cuota; */
        Otorgado.innerHTML = "";
        Otorgado.style.color = "green";
        Arreglo();
        Calculo.style.display ="none";
        btn_SolicitarCredito.style.display="none";
        
        Swal.fire(
            'Su crédito fue otorgado correctamente',
            'el monto solicitado es $ '+ Monto_Prestamo + ' a pagar en ' + Cuota + ' cuotas de $ ' + Monto_Cuota,
            'success'
          )
    }

}

(async () =>{
    const { value: accept } = await Swal.fire({
    title: 'Terminos y condiciones',
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder:
      'Estoy de acuerdo con los terminos y condiciones',
    confirmButtonText:
      'Continue <i class="fa fa-arrow-right"></i>',
    inputValidator: (result) => {
      return !result && 'Usted debe aceptar los terminos de nuestra pagina'
    }
  })
  if (accept) {
    Swal.fire('Usted aceptó nuestros terminos y condiciones')
  };
})()






// BOTONES //

let btn_Ingresar= document.getElementById("btn_Ingresar");
btn_Ingresar.addEventListener("click",Ingreso);

let btn_CrearPerfil= document.getElementById("btn_CrearPerfil");
btn_CrearPerfil.addEventListener("click", Crear_Perfil);

let btn_Calcular= document.getElementById("btn_Calcular");
btn_Calcular.addEventListener("click", Calcular)

let btn_SolicitarCredito = document.getElementById("btn_SolicitarCredito");
btn_SolicitarCredito.addEventListener("click", SolicitarCredito);

let btn_FiltrarCreditos = document.getElementById("btn_FiltrarCreditos");
btn_FiltrarCreditos.addEventListener("click", FiltrarCreditos );


/* Falta realizar un .filter para mostrar los créditos otorgados por usuario en pantalla*/
function FiltrarCreditos (){
    const filtro = Lista_Creditos.filter(credito => credito.Nombre === Nombre);
    console.log(filtro);
    let tabla="";
    let fila="";

    let Crear_Tabla = filtro.forEach(element => {
            fila = "<td>";
            fila+= element.Nombre;
            fila+= "</td>"
    
            fila+= "<td>"
            fila+= element.Monto_Prestamo;
            fila+= "</td>"
    
            fila+= "<td>"
            fila+= element.Cuota;
            fila+= "</td>"
    
            fila+= "<td>"
            fila+= element.Monto_Cuota;
            fila+= "</td>"
    
            tabla += fila;
            console.log(tabla)
            return tabla
        });
        
    htmltabla = document.getElementById("tbody_table");
    htmltabla.innerHTML =tabla; 
}

/* FETCH, estuve buscando una API relacionada a mi trabajo y encontré del BCRA, NOSIS, VERAZ y pensé en utilizar un buscador de personas según su DNI pero todas ellas son pagas o se debe completar un proceso para utilizarlas por que son datos sensibles. Por ello utilice una API que no tiene relación pero que se pueda ver el uso del tema. */

function AleatorioRick(){

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      let Personaje = getRandomInt(19);

    let RickAndMorty_Img = document.getElementById ("RickAndMorty");

    fetch ("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then (data => RickAndMorty_Img.innerHTML = "<h2>En hora buena, obtuviste a "+ data.results[Personaje].name +"</h2> <img src=" + data.results[Personaje].image +">" );
}

let btn_RickAndMorty = document.getElementById ("btn_RickAndMorty");
btn_RickAndMorty.addEventListener("click", AleatorioRick);

