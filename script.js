//Mail

const lista = ["davide.cotigliani@gmail.com","lucaradio@hotmail.com","giuseppecaligoli@gmail.com", "mariarossi@gmail.com"]
let mail = prompt("Inserisci la tua mail")
let checkmail = false;
for(i=0;i<lista.length;i++){
   if (lista[i] === mail)
    checkmail = true;   
}

// per verificare se il messaggio inserito è corretto o meno e mostrare due tipi di messaggio diversi
if (checkmail){
    console.log("email presente")
}
else {
    console.log("email non presente");
}


//Dadi

let userNum = Math.floor(Math.random() * 7) 
let computerNum = Math.floor(Math.random() * 7)
console.log(userNum,computerNum);
for(i = 0; i<1; i++){
    if(userNum > computerNum){
        console.log("L'utente ha vinto");
    }
    else if (userNum < computerNum){
        console.log("Il computer ha vinto")
    }
    else{
        console.log("C'è un pareggio");
        
    }
}