const pokeHistory = function() {
  let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  let advance = 0;
  
  getDataFrom(url).then(function(data) {
    for (let allPoke of data.results) {
      $("#pokemonGen1List").append(`<li>${data.results[advance].name}</li>`);
      advance += 1;
    }
  })
}

const pokeList = function(initialEntry) {
  let url = `https://pokeapi.co/api/v2/pokemon/?offset=${initialEntry}&limit=20`;
  let advance = 0;

  if (initialEntry == 140) {
    url = `https://pokeapi.co/api/v2/pokemon/?offset=${initialEntry}&limit=11`;
  }

  $("#pokemonGen1List").text("");
  $("#pokemonGen1List").attr("start", `${initialEntry + 1}`);
  
  getDataFrom(url).then(function(data) {
    for (let allPoke of data.results) {
    $("#pokemonGen1List").append(`<li>${data.results[advance].name}</li>`);
      advance += 1;
    }
  })
}