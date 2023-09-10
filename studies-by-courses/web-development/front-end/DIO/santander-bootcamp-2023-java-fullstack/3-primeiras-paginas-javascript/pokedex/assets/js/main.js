const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const detailsModal = document.getElementById("pokemonListDetails");

const maxRecords = 151;
const limit = 10;
let offset = 0;

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons
      .map(
        (pokemon) => `
            <li class="pokemon ${pokemon.type}" ontouch="requestPokemonDetail(${
          pokemon.id
        })" onclick='requestPokemonDetail(${pokemon.id})'>
                <span class="id">#${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types
                          .map(
                            (type) => `<li class="type ${type}">${type}</li>`
                          )
                          .join("")}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">       
                </div>
            </li>
        `
      )
      .join("");
  });
}

function requestPokemonDetail(pokemonID) {
  pokeApi.getPokemonDetailsForModal(pokemonID).then((pokemonDetail = []) => {
    detailsModal.innerHTML = `
      <header class="${pokemonDetail.type}">
      <div>
        <a href="javascript:history.back()"> &larr; </a>
      </div>
      <div>&hearts;</div>
    
      <div id="title" class="title-values">
        <h1 style="font-size: 2.4em">${pokemonDetail.name}</h1>
        <h3 style="letter-spacing: 1.5px">#${pokemonDetail.id}</h3>
      </div>
      <div>
        ${pokemonDetail.types
          .map(
            (type) => `<span class="type ${type}"
          >${type}</span
        >`
          )
          .join("")}
      </div>
      <div class="poke-img-container">
        <img alt="imagem do pokemon" src="${pokemonDetail.photo}" />
      </div>
    </header>
        
        `;
  });
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordNextPage = offset + limit;

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItems(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItems(offset, limit);
  }
});
