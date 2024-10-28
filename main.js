/* 
Creiamo la prima applicazione con NodeJs:
1-Iniziate creando un file main.js con un semplice console.log che dica hello node js   //FATTO
2-fate girare lo script usando node main.js     //FATTO
3-aggiungete allo script una variabile di ambiente chiamata PIN  con associato numero a piacere es. PIN=666     //FATTO
4-usate il modulo process per recuperare e stampare in console dalla proprietá env la variabile PIN     //FATTO
5-ora passate un argomento al vostro script e recuperatene il valore usando process e la proprietá argv per stamparlo in console    //FATTO
Bonus:
se il valore dell'argomento é admin ed il valore di PIN definito é 666 allora stampa in console Welcome Admin
altrimenti stampa Access restricted
*/

/* console.log("hello node js"); */

const api_key = process.env.PIN;

const word = process.argv.slice(2);

if (word == "admin" && api_key === "666"){
    console.log(`Welcome ${word}`);
} else {
    console.log("Access restricted");
};
clearInterval



