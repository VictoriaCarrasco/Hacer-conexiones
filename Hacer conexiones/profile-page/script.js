function cambiar( element ){
    let variable = document.querySelector (".nombreReal");
    variable.innerText = "Mary Le"
}


function remover( element ){
    let borrar = element.closest (".card-list-item");
    borrar.remove();
}
    