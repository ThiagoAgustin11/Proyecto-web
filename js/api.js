const url = 'https://pokeapi.co/api/v2/pokemon/11/'

fetch (url)
.then (response => response.json())
.then (data => {
    console.log (data)
    
    let element = document.getElementById ('asd')
    element.innerHTML = `
    <p>${data.name}</p>
    <img src='${data.sprites.front_default}'/>
    `;
})

.catch (err=>console.log(err))