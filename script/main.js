async function fetchAssincrono(url) {
  resposta = await fetch(`https://swapi.dev/api/${url}/`);
  const dados = await resposta.json();

  if (url === "films") {
    mostrarResultadoFilmmes(dados);
  } else if (url === "people") {
    mostrarResultadoPeople(dados);
  } else if (url === "starships") {
    mostrarResultadoStarships(dados);
  }
}

document.querySelector(".navbar__link").addEventListener("click", (evento) => {
  fetchAssincrono(evento.target.textContent.trim().toLowerCase());
});

document
  .querySelector(".mavbar__hamburguer")
  .addEventListener("click", toggleMenu);

document.querySelector(".overlay").addEventListener("click", toggleMenu);

function toggleMenu() {
  const menuNav = document.querySelector(".navbar__link");
  const over = document.querySelector(".overlay");

  menuNav.classList.toggle("mavbar__links--active");
  over.classList.toggle("mavbar__overlay--active");
}

function mostrarResultadoPeople(resultadoJson) {
  let itens = "";
  for (let index = 0; index < resultadoJson.results.length; index++) {
    itens += `<div class="card">
                  <div class="card__titulo">
                    ${resultadoJson.results[index].name}
                  </div>
                  <div class="card__text">
                    <p>Cor dos olhos: ${resultadoJson.results[index].eye_color}</p>
                    <p>Altura: ${resultadoJson.results[index].height}</p>
                    <p>Gênero: ${resultadoJson.results[index].gender}</p>
                  </div>
              </div>`;
  }

  let container = (document.querySelector(".container").innerHTML = itens);
}

function mostrarResultadoFilmmes(resultadoJson) {
  let itens = "";
  for (let index = 0; index < resultadoJson.results.length; index++) {
    itens += `<div class="card">
      <div class="card__titulo">
        ${resultadoJson.results[index].title}
      </div>
      <div class="card__text">
        <p>Diretor: ${resultadoJson.results[index].director}</p>
        <p>Produtor: ${resultadoJson.results[index].producer}</p>
        <p>Data lançamento: ${resultadoJson.results[index].release_date}</p>
      </div>
    </div>`;
  }

  let container = (document.querySelector(".container").innerHTML = itens);
}

function mostrarResultadoStarships(resultadoJson) {
  let itens = "";
  for (let index = 0; index < resultadoJson.results.length; index++) {
    itens += `<div class="card">
      <div class="card__titulo">
        ${resultadoJson.results[index].name}
      </div>
      <div class="card__text">
        <p>Modelo: ${resultadoJson.results[index].model}</p>
        <p>Classe: ${resultadoJson.results[index].starship_class}</p>
        <p>Hyperdrive: ${resultadoJson.results[index].hyperdrive_rating}</p>
      </div>
    </div>`;
  }

  let container = (document.querySelector(".container").innerHTML = itens);
}

/*The target "property" gets the element on which the event originally occurred 
o evento click nesse caso foi adicionado a div com tres links o target retornar
o link que disparou o evento.

The trim() method removes whitespace from both sides of a string, caso haja.
*/
