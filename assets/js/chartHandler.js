async function call(query) {
  let url = "./assets/php/query.php?q=" + query;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error in database response: ${response.status}");
  }

  return response.json();
}

const colors = ["B", "W", "U", "R", "G", "N"];

/* Get count of cards of specified color within:
    - B: Black
    - W: White
    - U: Blue
    - R: Red
    - G: Green
    - N: No-color
*/
async function getCardCountByColor() {
  //Call
  const query =
    "SELECT Card.colorIdentity as ColorIdentity, COUNT\(Card.id\) AS numCards FROM Card GROUP BY Card.colorIdentity;";
    let data = await call(query);
  return data;
}

async function getNumberOfCards() {
  //Call
  const query = "SELECT COUNT\(Card.id\) FROM Card;";
  let data = await call(query);
  return data;
}

async function getCardColorPercentile(color) {
  //Error management
  if (!(color in colors)) {
    throw new Error("Error in query: Color introduced is unknown");
  }

  //Call
  return null;
}

getCardCountByColor().then((data) => manaDist(data));
