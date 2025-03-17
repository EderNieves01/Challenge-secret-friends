// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let btnAddFriends = document.querySelector(".button-add");
let inputFriend = document.getElementById("amigo");


let friends = [];

 btnAddFriends.addEventListener("click", addFriends);
function addFriends(){
    friends.push(inputFriend.value);
    resetInput();
}

function resetInput(){
    inputFriend.value = "";
}