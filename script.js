document.getElementById("enviarBtn").addEventListener("click", saveDataData);

function saveData() {
    element.getElementById("formulario").
}

const data = document.getElementById("Formulario");
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: data
})
.then(function(response) {
    if(response.ok) {
        return response.text()
    } else {
        throw "Error en la llamada"
    }
})
.then(function(texto) {
    console.log(texto);
})
.catch(function(err) {
    console.log(err);
});