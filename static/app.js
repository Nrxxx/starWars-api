// fetch('https://akabab.github.io/starwars-api/api/id/1.json')
//     .then(response => response.json())
//     .then(data => console.log(data));

function getCharacters(done) {
    const results = fetch("https://akabab.github.io/starwars-api/api/all.json");

    results
        .then(Response => Response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {
    
    data.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment(`
            <article>

            <div class="image-container">
                <img src="${personaje.image}" alt="${personaje.name}"
            </div>

            <ul>
                <li><h2>Name:${personaje.name}</h2></li>
                <li><h3>Specie:${personaje.species}</h3></li>
                <li><h3>Height:${personaje.height}</h3></li>
                <li><h3>Homeworld:${personaje.homeworld}</h3></li>
            </ul>

        </article>
            `);

            const main = document.querySelector("main");
            main.append(article);

    });

})