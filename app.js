// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo(){
  let nuevoAmigo = document.getElementById("amigo").value;
  if (nuevoAmigo.trim() === ""){
    alert ("Por favor ingresa un nombre");
  }else {
    listaDeAmigos.push(nuevoAmigo);
    console.log("Nuevo amigo ingresado: " + nuevoAmigo);
    mostrarAmigos();
    document.getElementById("amigo").value = "";
  }
}
// Función para mostrar los amigos en la lista
function mostrarAmigos(){
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  listaDeAmigos.forEach(function(amigo) {
      let li = document.createElement("li");
      li.textContent = amigo;
      listaAmigos.appendChild(li);
  });

}
// Función para sortear un amigo
function sortearAmigo(){
  if (listaDeAmigos.length === 0){
    alert("la lista está vacía");
    return;
  }
  let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  let amigoSorteado = listaDeAmigos[indiceSorteado];
  mostrarResultado(amigoSorteado);
}
// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "El amigo sorteado es: " + amigo;
}
