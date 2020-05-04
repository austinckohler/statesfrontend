const dropdown = document.querySelector("#dropdown")

fetch("http://localhost:3000/states")
    .then(response => response.json())
    .then(displayState)

    function displayState(states) {
        states.forEach(state => {
            
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        
        
        h3.innerHTML =`<a href=state.html?id=${state.id}>${state.name}</a>`
        p.innerText = state.geography

        document.body.append(h3, p)
    })
    }

         fetch('http://localhost:3000/mountains')
    .then(response => response.json())
    .then(mountains => showDropdown(mountains))

    function showDropdown(mountains) {
        console.log(mountains)
        mountains.forEach(mountain => {
            
            const option = document.createElement("option")

            option.innerText = mountain.name
            option.value = mountain.id
            
            dropdown.append(option)
            // search.append(option)
        })              
    }