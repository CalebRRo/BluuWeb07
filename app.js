const lista = document.querySelector("#lista");

const arrayPaises = ["Peru", "Mexico", "Colombia"]

const fragment = document.createDocumentFragment()

//<li class="list">
               // <b>Pais:</b>
                //<span class="text-primary">Aqui va el pais</span>
           // </li>
let template = "";

arrayPaises.forEach((pais) => {
template += 
 `<li class="list">
     <b>Pais:</b>
     <span class="text-primary">${pais}</span>
  </li>`;
}); 

lista.innerHTML = template;

/* arrayPaises.forEach((pasi) => {

    const li = document.createElement("li")
    li.className = "list"

    const b = document.createElement("b")
    b.textContent = "Pais:"

    const span = document.createElement("span")
    span.className = "text-primary"
    span,textContent = pais

    li.appendChild(b)
    li.appendChild(span)

    fragment.appendChild(li)

}) */

//lista.appendChild(fragment)





