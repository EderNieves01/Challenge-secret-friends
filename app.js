// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let btnAddFriends = document.querySelector(".button-add");
let inputFriend = document.getElementById("amigo");
let showFriends = document.getElementById("resultado");

let friends = [];

 btnAddFriends.addEventListener("click", addFriends);

function addFriends(){
    let inputValue = inputFriend.value;
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

function showFriendsList(){
    let html = friends.map(friend => `<li>${friend}</li>`).join("");
    showFriends.innerHTML = html;
}

function resetInput(){
    inputFriend.value = "";
}