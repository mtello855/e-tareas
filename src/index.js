import "./styles.css";

//document.getElementById("app").innerHTML = `

//`;
const word = document.getElementById("word");
const btn = document.getElementById("btn");
const text = document.getElementById("text");

function guardar(tareasValor) {
  text.innerHTML += tareasValor;
}
btn.addEventListener("click", function() {
  var tareas = word.value;
  guardar(tareas);
});
guardar("la");
guardar("le");
guardar("li");
guardar("lo");
guardar("lu");
