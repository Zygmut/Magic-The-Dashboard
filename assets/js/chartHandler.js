async function call(query) {
  let url = "./assets/php/query.php?q=" + query;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error in database response: ${response.status}");
  }

  return response.json();
}

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

async function getCostDist() {return "costDist"}

async function getPTDist() {return "ptDist"}

getCardDist().then((data) => manaDistChart(data));
getCostDist().then((data) => costDistChart(data));
getPTDist().then((data) => ptDistChart(data));
