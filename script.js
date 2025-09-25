async function pokemon() {
  const nome = document.getElementById("input").value.toLowerCase();

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const dado = await resposta.json();
    const imgPokemon = dado.sprites.front_default;
    const img = document.getElementById("imgPokemon");
    img.src = imgPokemon;
    img.style.display = "block";
  } catch (e) {
    console.error(error);
  }
}
