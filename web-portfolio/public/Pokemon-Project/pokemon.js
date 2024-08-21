/**
 * Function which does a GET request to the API whose URL is passed in. If
 * successful, returns a JavaScript object containing the response from the API.
 * Throws an error if not successful.

 * @param {string} url - URL of the API to make the GET request to.
 * @returns {Promise<Response>} The response object containing data received from the API.
 * @throws {Record<string, any>} The response object received. The function throws at a status code of 400 and higher.
 */ 

let imgUnload = false;
let quickInput = null;
let randomPokemon = [];
let correctGuess;

const getDataFrom = function(url) {
  return fetch(url).then(function(response) {
    // Every response has a status code. 
    // Status codes 200-300 generally mean Success! ✅
    // Status codes 400+ generally mean Failure. 😢
    if (response.status >= 400) {
      // Throw forces a JavaScript error.

      let unfoundPoke = $(".pokemon").val();
      imgUnload = true;
      
      $("#pokeId").text("");
      $("#front").attr("src", "");
      $("#back").attr("src", "");
      $("#shiny").attr("src", "");
      $("#height").text("");
      $("#weight").text("");
      $("#type").text("");

      if (imgUnload == true) {
        $("#front").width(0);
        $("#front").height(0);
        $("#back").width(0);
        $("#back").height(0);
        $("#shiny").width(0);
        $("#shiny").height(0);
      }
      
      $("#res").text(`Error ${response.status}: Pokemon Not Found`)
      $("#errorInfo").text(`The Pokemon "${unfoundPoke}" could not be found. Check if the name is spelled correctly or try writing a name like "ditto" or "Pikachu".`)
      throw response
    }
    // The response object we get back from fetch has a built in method called
    // "json", which converts the string response into a JavaScript object.
    return response.json()
  })
}

const quickSearch = function() {
  sessionStorage.setItem("quickInput", $(".pokemonQuick").val().toLowerCase());
  
  quickInput = $(".pokemonQuick").val().toLowerCase()
  $(".pokemon").val(quickInput);
  fetchPokemon();
  $(".pokemonQuick").val("");
}

const load = function() {
  $(".pokemon").val(sessionStorage.getItem("quickInput"));
  fetchPokemon();
  $(".pokemonQuick").val("");
  sessionStorage.removeItem("quickInput");

  pokeRecommend();
  pokeGuess();
}

const pokeRecommend = function() {
  randomPokemon = [
    Math.floor(Math.random() * 1016) + 1,
    Math.floor(Math.random() * 1016) + 1,
    Math.floor(Math.random() * 1016) + 1, 
    Math.floor(Math.random() * 1016) + 1,
    Math.floor(Math.random() * 1016) + 1,
    Math.floor(Math.random() * 1016) + 1
  ];
  
  let url = [
    `https://pokeapi.co/api/v2/pokemon/${randomPokemon[0]}`,
    `https://pokeapi.co/api/v2/pokemon/${randomPokemon[1]}`, 
    `https://pokeapi.co/api/v2/pokemon/${randomPokemon[2]}`,
    `https://pokeapi.co/api/v2/pokemon/${randomPokemon[3]}`,
    `https://pokeapi.co/api/v2/pokemon/${randomPokemon[4]}`,
    `https://pokeapi.co/api/v2/pokemon/${randomPokemon[5]}`
  ];

  getDataFrom(url[0]).then(function(data) {
    let frontImg = data.sprites.front_default;
    $("#randomPokemon1").attr("src", frontImg);
    $("#randomPokemon1").css("display", "initial");

    $("#loadingRec1").removeClass("loader");
  });
  getDataFrom(url[1]).then(function(data) {
    let frontImg = data.sprites.front_default;
    $("#randomPokemon2").attr("src", frontImg);
    $("#randomPokemon2").css("display", "initial");

    $("#loadingRec2").removeClass("loader");
  });
  getDataFrom(url[2]).then(function(data) {
    let frontImg = data.sprites.front_default;
    $("#randomPokemon3").attr("src", frontImg);
    $("#randomPokemon3").css("display", "initial");

    $("#loadingRec3").removeClass("loader");
  });
  getDataFrom(url[3]).then(function(data) {
    let frontImg = data.sprites.front_default;
    $("#randomPokemon4").attr("src", frontImg);
    $("#randomPokemon4").css("display", "initial");

    $("#loadingRec4").removeClass("loader");
  });
  getDataFrom(url[4]).then(function(data) {
    let frontImg = data.sprites.front_default;
    $("#randomPokemon5").attr("src", frontImg);
    $("#randomPokemon5").css("display", "initial");

    $("#loadingRec5").removeClass("loader");
  });
  getDataFrom(url[5]).then(function(data) {
    let frontImg = data.sprites.front_default;
    $("#randomPokemon6").attr("src", frontImg);
    $("#randomPokemon6").css("display", "initial");

    $("#loadingRec6").removeClass("loader");
  });
}

const pokeGuess = function() {
  let randomPokeGuess = [
    Math.floor(Math.random() * 1016) + 1,
    Math.floor(Math.random() * 1016) + 1,
    Math.floor(Math.random() * 1016) + 1
  ];
  let url = [
    `https://pokeapi.co/api/v2/pokemon/${randomPokeGuess[0]}`,
    `https://pokeapi.co/api/v2/pokemon/${randomPokeGuess[1]}`,
    `https://pokeapi.co/api/v2/pokemon/${randomPokeGuess[2]}`
  ];
  let randomAssign = [
    Math.floor(Math.random() * 3),
    Math.floor(Math.random() * 3),
    Math.floor(Math.random() * 3)
  ];

  while (randomAssign[0] == randomAssign[1] || randomAssign[0] == randomAssign[2] || randomAssign[1] == randomAssign[2]) {
    randomAssign = [
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3)
    ];
  };
  getDataFrom(url[0]).then(function(data) {
    let frontImg = data.sprites.front_default;
    correctGuess = data.name;

    $("#guessPokeImage").attr("src", frontImg);
    $(`#guessButton${randomAssign[0]}`).text(correctGuess.charAt(0).toUpperCase() + correctGuess.slice(1));
  });
  getDataFrom(url[1]).then(function(data) {
    let pokeGuessName = data.name;
    $(`#guessButton${randomAssign[1]}`).text(pokeGuessName.charAt(0).toUpperCase() + pokeGuessName.slice(1));
  });
  getDataFrom(url[2]).then(function(data) {
    let pokeGuessName = data.name;
    $(`#guessButton${randomAssign[2]}`).text(pokeGuessName.charAt(0).toUpperCase() + pokeGuessName.slice(1));
  });
}

const guessCheck = function(buttonNumber) {
  if ($(`#guessButton${buttonNumber}`).text() == correctGuess.charAt(0).toUpperCase() + correctGuess.slice(1)) {
    $("#guessPokeImage").css("filter", "brightness(100%)");
    $(`#guessButton${buttonNumber}`).removeClass("guessButton");
    $(`#guessButton${buttonNumber}`).addClass("rightButton");
    $("#guessPokeImage").addClass("correctGuessImage");

    $("#confetti").css("background-image", `url("https://media.tenor.com/pz0zpQXlK5sAAAAi/sparkle-confetti.gif")`);
    $("#confetti").addClass("confettiAppear");
} else {
    $(`#guessButton${buttonNumber}`).removeClass("guessButton");
    $(`#guessButton${buttonNumber}`).addClass("wrongButton");
}
}

const fetchPokemon = function() {
  let input = $(".pokemon").val().toLowerCase();
  let url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  
  if (input == "") {
    return;
  }

  getDataFrom(url).then(function(data) {
    let pokeName = data.name;
    let pokeId = data.id;
    let frontImg = data.sprites.front_default;
    let backImg = data.sprites.back_default;
    let shinyImg = data.sprites.front_shiny;
    let pokeHeight = data.height / 10;
    let pokeWeight = data.weight / 10;
    let pokeType = data.types[0].type.name;
    let typeSymbol;
    
    if (pokeType == "normal") {
      typeSymbol = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgdd92-72b221ea-6ce8-4345-8af6-6bb37adc71b2.png/v1/fill/w_1280,h_1280/colorless_type_symbol_tcg_by_jormxdos_dfgdd92-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnZGQ5Mi03MmIyMjFlYS02Y2U4LTQzNDUtOGFmNi02YmIzN2FkYzcxYjIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xhEfgyrY7ZDNqVv7V0IvGDufJxDdk2ubxnK55Cc-qY0";
    } else if (pokeType == "water") {
      typeSymbol = "https://i.pinimg.com/originals/c3/61/39/c3613977779d28d1da20e3d814ac1ce0.png";
    } else if (pokeType == "fire") {
      typeSymbol = "https://www.giantbomb.com/a/uploads/scale_medium/16/164924/3083931-8746743194-flat%2C.jpg";
    } else if (pokeType == "grass") {
      typeSymbol = "https://tiermaker.com/images/templates/grass-type-pokemon-no-megas-gigantamax-919262/9192621617468365.jpg";
    } else if (pokeType == "flying") {
      typeSymbol = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgbe7l-11fab1a7-31db-4b4d-9226-205f87db5b84.png/v1/fill/w_1280,h_1280/flying_type_symbol_pasio_by_jormxdos_dfgbe7l-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnYmU3bC0xMWZhYjFhNy0zMWRiLTRiNGQtOTIyNi0yMDVmODdkYjViODQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9hKS8lZFzyaukUSdN_WNToDCt-MwK85zFUPfl_B4mYE";
    } else if (pokeType == "poison") {
      typeSymbol="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1200px-Pok%C3%A9mon_Poison_Type_Icon.svg.png"
    } else if (pokeType == "fighting") {
      typeSymbol="https://www.giantbomb.com/a/uploads/scale_medium/16/164924/3129073-3687239775-tumbl.png"
    } else if (pokeType == "electric") {
      typeSymbol="https://www.pngkit.com/png/full/8-80892_pokemon-electric-type-stickers-by-cat-games-inc.png"
    } else if (pokeType == "ground") {
      typeSymbol="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgbe8g-39bfbb41-9a15-4aaa-ad0f-e3101f75c0cc.png/v1/fill/w_1280,h_1280/ground_type_symbol_pasio_by_jormxdos_dfgbe8g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnYmU4Zy0zOWJmYmI0MS05YTE1LTRhYWEtYWQwZi1lMzEwMWY3NWMwY2MucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CEe1D-8LQCBYWMadqEQ78K7Q0mdkqqzx5oRHbtbL69s"
    } else if (pokeType == "rock") {
      typeSymbol="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/2048px-Pok%C3%A9mon_Rock_Type_Icon.svg.png"
    } else if (pokeType == "psychic") {
      typeSymbol="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3p6-aa8c3894-d7bf-450b-99be-f608d14e1e4a.png/v1/fill/w_720,h_720/psychic_energy_by_humac1_d50w3p6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3M3A2LWFhOGMzODk0LWQ3YmYtNDUwYi05OWJlLWY2MDhkMTRlMWU0YS5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.X66lXufkAxkVXIW4UYQjAbHyGeoKZ9pBYVr-q8__wHo"
    } else if (pokeType == "ice") {
      typeSymbol="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/480px-Pok%C3%A9mon_Ice_Type_Icon.svg.png"
    } else if (pokeType == "bug") {
      typeSymbol="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl73-294f6e5b-aad2-484f-bde8-1ecf082f1dfe.png/v1/fill/w_894,h_894/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw3My0yOTRmNmU1Yi1hYWQyLTQ4NGYtYmRlOC0xZWNmMDgyZjFkZmUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.msN6ZkYf5XuPiA27qO-1Zaow3B4iSRqp3nAHzctfBW0"
    } else if (pokeType == "ghost") {
      typeSymbol="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl2d-818164a9-f8e6-41fc-ba4e-c725e2be0d66.png/v1/fill/w_1280,h_1280/ghost_type_symbol_galar_by_jormxdos_dffvl2d-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwyZC04MTgxNjRhOS1mOGU2LTQxZmMtYmE0ZS1jNzI1ZTJiZTBkNjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YKEzh2shCheghxM31oOkuEOOrQlMeW1axtKAyK-Iceg"
    } else if (pokeType == "steel") {
      typeSymbol="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3tj-08f8872a-82e0-4261-b39f-6d66030b354f.png/v1/fill/w_720,h_720/metal_energy_by_humac1_d50w3tj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3M3RqLTA4Zjg4NzJhLTgyZTAtNDI2MS1iMzlmLTZkNjYwMzBiMzU0Zi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Dpncm4PEyyma0CBCZcpVZ0Lm0YeMMKHnrxCu5RK9Nh0"
    } else if (pokeType == "dragon") {
      typeSymbol="https://www.pokebeach.com/news/1211/pokemon-tcg-dragon-type-symbol.png"
    } else if (pokeType == "dark") {
      typeSymbol="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0726fbdd-a6a6-4871-bed6-e8e0b9ce2af0/d60p3e9-3f607ab3-403d-4eb9-85b6-035dac99f672.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MjZmYmRkLWE2YTYtNDg3MS1iZWQ2LWU4ZTBiOWNlMmFmMFwvZDYwcDNlOS0zZjYwN2FiMy00MDNkLTRlYjktODViNi0wMzVkYWM5OWY2NzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YPWIE_pDnJPckzhoQKAZMGLb41p9CVDIuZpRJ-jFCcI"
    } else if (pokeType == "fairy") {
      typeSymbol="https://pm1.aminoapps.com/6343/61e7e9385472d4770546a69b7498f9784455c8b6_00.jpg"
    }
      $("#res").text(`${pokeName.charAt(0).toUpperCase()}${pokeName.slice(1)}`);
    $("#errorInfo").text("");
    $("#pokeId").text(`Pokemon ID: #${pokeId}`);
    $("#front").attr("src", frontImg);
    $("#back").attr("src", backImg);
    $("#shiny").attr("src", shinyImg);
    $("#height").text(`Height: ${pokeHeight}m`);
    $("#weight").text(`Weight: ${pokeWeight}kg`);
    $("#type").text("Type: ");
    $("#type").append(`<img id="typeSymbol" src="${typeSymbol}">`);
  $("#type").append(` ${pokeType.charAt(0).toUpperCase()}${pokeType.slice(1)}`);
  })
}

const loadFront = function() {
  let width = $("#front").get(0).naturalWidth;
  let height = $("#front").get(0).naturalHeight;
  width = width * 2;
  height = height * 2;
  $("#front").width(width);
  $("#front").height(height);
}

const loadBack = function() {
  let width = $("#back").get(0).naturalWidth;;
  let height = $("#back").get(0).naturalHeight;
  width = width * 2;
  height = height * 2;
  $("#back").width(width);
  $("#back").height(height);
}

const loadShiny = function() {
  let width = $("#shiny").get(0).naturalWidth;;
  let height = $("#shiny").get(0).naturalHeight;
  width = width * 2;
  height = height * 2;
  $("#shiny").width(width);
  $("#shiny").height(height);
}

const refresh = function() {
  $(".randomPokemonImages").css("display", "none");
  $(".loading").addClass("loader");
  
  pokeRecommend();
}

const showPoke = function(index) {
  let pokeSelected = randomPokemon[index];

  $("#front").width(0);
  $("#front").height(0);
  $("#back").width(0);
  $("#back").height(0);
  $("#shiny").width(0);
  $("#shiny").height(0);
  $(".pokemon").val(pokeSelected);
  fetchPokemon();
  $(".pokemon").val("");
}