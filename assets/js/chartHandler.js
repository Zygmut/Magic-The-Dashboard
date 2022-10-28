async function call(query) {
  let url = "./assets/php/query.php?q=" + query;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error in database response: ${response.status}");
  }

  return response.json();
}

const colors = ["N", "B", "G", "R", "U", "W"];

/* Get count of cards of specified color within:
    - N: No-color
    - B: Black
    - G: Green
    - R: Red
    - U: Blue
    - W: White
*/
async function getCardDist() {
  //Call
  let data = await call(
    "SELECT Card.colorIdentity as Color, COUNT(Card.id) AS numCards FROM Card GROUP BY Color;"
  );

  let total_cards = 0;
  data.forEach((elem) => (total_cards += parseInt(elem["numCards"])));
  data.forEach(
    (elem) =>
      (elem["numCards"] = (parseInt(elem["numCards"]) / total_cards) * 100)
  );

  return {
    N: data[0]["numCards"],
    B: data[1]["numCards"],
    G: data[2]["numCards"],
    R: data[3]["numCards"],
    U: data[4]["numCards"],
    W: data[5]["numCards"],
  };
}

getCardDist().then((data) => manaDist(data));
