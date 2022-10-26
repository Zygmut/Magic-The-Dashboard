
var set_name = "aer"

fetch("https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3A" + set_name + "&unique=prints").then((response) => {
  console.log(response.json());
  response.json()
});
