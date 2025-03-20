const lista = ["davide.cotigliani@gmail.com","lucaradio@hotmail.com","giuseppecaligoli@gmail.com", "mariarossi@gmail.com"]
let mail = prompt("Inserisci la tua mail")
let checkmail = false;
for(i=0;i<lista.length;i++){
   if (lista[i] === mail)
    checkmail = true;   
}
console.log(checkmail);