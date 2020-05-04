const params = window.location.search
const searchParmams = new URLSearchParams(params)
const id = searchParmams.get("id")

const ul = document.createElement("ul")

fetch(`http://localhost:3000/states/${id}`)
    .then(response => response.json())
    .then(showStateInfo)

    function showStateInfo(state) {
        const h3 = document.createElement("h3")
        const h5 = document.createElement("h5")
        const li = document.createElement("li")
        
        h3.innerText = state.name
        h5.innerText = state.climate
        li.innerHTML =`<a href=mountain.html?id=${state.mountains.id}>${state.mountains.name}</a>`

        document.body.append(h3, h5, ul, li)
        
    }