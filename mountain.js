const params = window.location.search 
const searchParams = new URLSearchParams(params)
const id = searchParams.get("id")

fetch(`http://localhost:3000/mountain/${id}`)
    .then(response => response.json())
    .then(mountain => {
        
        const h3 = document.createElement("h3")
        const p = document.createElement("p")

        h3.innerText = mountain.name
        p.innerText = mountain.height

        document.body.append(h3, p)
    })