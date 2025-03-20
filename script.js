// const lista = ["davide.cotigliani@gmail.com","lucaradio@hotmail.com","giuseppecaligoli@gmail.com", "mariarossi@gmail.com"]
// let mail = prompt("Inserisci la tua mail")
// let checkmail = false;
// for(i=0;i<lista.length;i++){
//    if (lista[i] === mail)
//     checkmail = true;   
// }

// // per verificare se il messaggio inserito è corretto o meno e mostrare due tipi di messaggio diversi
// if (checkmail){
//     console.log("email presente")
// }
// else {
//     console.log("email non presente");
// }


//Dadi

let userNum = Math.floor(Math.random() * 7) 
let computerNum = Math.floor(Math.random() * 7)
let checkNumber = false;
console.log(userNum,computerNum);
for(i = 0; i<userNum; i++){
    if(userNum > computerNum){
        checkNumber= true;
    }
}

if(checkNumber){
    console.log("L'utente ha vinto");
}
else{
    console.log("Il computer ha vinto")
}
