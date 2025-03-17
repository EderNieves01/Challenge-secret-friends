// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let btnAddFriends = document.querySelector(".button-add");
let inputFriend = document.getElementById("amigo");
let showFriends = document.getElementById("listaAmigos");
let btnDraw = document.querySelector(".button-draw");
let showResult = document.getElementById("resultado")
let friends = [];

 btnAddFriends.addEventListener("click", addFriends);
 btnDraw.addEventListener("click", drawFriends);

function addFriends(){
    let inputValue = inputFriend.value.trim();
    console.log(inputValue)
    if(inputValue){
        friends.push(inputValue);
        resetInput();
        console.log(friends);
        showFriendsList();
    }else{
        alert("Debes ingresar un nombre de amigo");
        return;
    }

}

function drawFriends(){

    if (friends.length === 0) {
        alert("Debes agregar amigos antes de sortear.");
        return;
    }

    let randomFriend = friends[Math.floor(Math.random() * friends.length)];
    showResult.innerHTML = `<li> EL amigo secreto es: ${randomFriend} </li>`;

    friends = [];
    showFriends.innerHTML = "";
}

function showFriendsList(){
    let html = friends.map(friend => `<li>${friend}</li>`).join("");
    showFriends.innerHTML = html;
}

function resetInput(){
    inputFriend.value = "";
}