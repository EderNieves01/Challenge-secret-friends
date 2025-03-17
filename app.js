// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let btnAddFriends = document.querySelector(".button-add");
let inputFriend = document.getElementById("amigo");


let friends = [];

 btnAddFriends.addEventListener("click", addFriends);

function addFriends(){
    let inputValue = inputFriend.value;
    console.log(inputValue)
    if(inputValue){
        friends.push(inputValue);
        resetInput();
        console.log(friends);
    }else{
        alert("Debes ingresar un nombre de amigo");
        return;
    }

}

function resetInput(){
    inputFriend.value = "";
}