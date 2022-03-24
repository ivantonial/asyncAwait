// const $ = require( "jquery" )( window );

const btnIdRequest = document.getElementById('btnIdRequest');
const userInsertion = document.getElementById('rickID');

btnIdRequest.addEventListener('click', requirement);

async function requirement() {
    if(!userInsertion) {
        return;
    } else {

        const firstResponse = await (await fetch("https://rickandmortyapi.com/api/character/" + userInsertion.value)).json();

        const lastResponse = await (await fetch("https://rickandmortyapi.com/api/character/?name=" + firstResponse.name)).json();

        document.getElementById('firstResponse').innerHTML = "Primeira Requisição<br />" + firstResponse.name;
        document.getElementById('firstResponse').innerHTML += `<br /><img width=100px heigth=100px src="`+ firstResponse.image + `" />`;
        document.getElementById('lastResponse').innerHTML = "Segunda Requisição<br />";
        console.log(lastResponse);
        for (let i=0; i<lastResponse.info.count;i++){
            document.getElementById('lastResponse').innerHTML += `<br /><br />` + JSON.stringify(lastResponse.results[i]);
        }
    }
}