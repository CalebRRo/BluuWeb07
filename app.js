const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment()
const liTemplate = document.querySelector("#liTemplate")

const arrayPaises = ["Peru", "Mexico", "Colombia"]

arrayPaises.forEach(pais => {

    const clone = liTemplate.content.cloneNode(true)
    clone.querySelector("span").textContent = pais

    fragment.appendChild(clone);
})

lista.appendChild(fragment)



//const clone = liTemplate.content.cloneNode(true)

//clone.querySelector(".text-primary").textContent = "agregué a través de un template";

//lista.appendChild(clone);





