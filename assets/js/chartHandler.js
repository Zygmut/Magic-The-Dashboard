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

async function getCostDist() {
  // Data
  let data = await call(
    "SELECT COUNT(id) as numCards FROM card GROUP BY CAST(cmc AS FLOAT)"
  );

  let parsed_data = [];
  data.forEach((elem) => parsed_data.push(parseInt(elem["numCards"])));

  // Labels
  let labels = await call(
    "SELECT Card.cmc as cmc FROM Card GROUP BY CAST(cmc AS FLOAT)"
  );

  let parsed_labels = [];
  labels.forEach((data) => {
    if (data["cmc"] == "") {
      data["cmc"] = 0;
    } else {
      data["cmc"] = parseFloat(data["cmc"]);
    }
    parsed_labels.push(data["cmc"]);
  });

  return {
    data: parsed_data,
    labels: parsed_labels,
  };
}

async function getPTDist() {
  let data = await call(
    "SELECT COUNT(id) as numCards, SUM(Card.power) AS totalPower, SUM(Card.toughness) AS totalToughness FROM card GROUP BY card.colorIdentity"
  );
  return {
    NP: data[0]["totalPower"] / data[0]["numCards"],
    NT: data[0]["totalToughness"] / data[0]["numCards"],
    BP: data[1]["totalPower"] / data[1]["numCards"],
    BT: data[1]["totalToughness"] / data[1]["numCards"],
    GP: data[2]["totalPower"] / data[2]["numCards"],
    GT: data[2]["totalToughness"] / data[2]["numCards"],
    RP: data[3]["totalPower"] / data[3]["numCards"],
    RT: data[3]["totalToughness"] / data[3]["numCards"],
    UP: data[4]["totalPower"] / data[4]["numCards"],
    UT: data[4]["totalToughness"] / data[4]["numCards"],
    WP: data[5]["totalPower"] / data[5]["numCards"],
    WT: data[5]["totalToughness"] / data[5]["numCards"],
  };
}

async function getCardTypesDist() {
  // Get card types
  let labels = await call(
    "SELECT card.types AS type FROM card GROUP BY (card.types);"
  );

  let parsed_labels = [];
  labels.forEach((elem) => parsed_labels.push(elem["type"]));

  // Get distribution
  let data = await call("SELECT COUNT(card.id) AS numCards FROM card GROUP BY (card.types);");

  let parsed_data = [];
  data.forEach((elem) => parsed_data.push(parseInt(elem["numCards"])));
  // Return value
  return { data: parsed_data, labels: parsed_labels };
}

async function getCardRarityDist() {
  // Get card types
  let labels = await call(
    "SELECT Card.rarity as rarity FROM Card GROUP BY rarity"
  );

  let parsed_labels = [];
  labels.forEach((elem) => parsed_labels.push(elem["rarity"]));

  // Get distribution
  let data = await call(
    "SELECT COUNT(id) as numCards FROM Card GROUP BY rarity"
  );

  let parsed_data = [];
  data.forEach((elem) => parsed_data.push(parseInt(elem["numCards"])));

  // Return value
  return { data: parsed_data, labels: parsed_labels };
}

getCardDist().then((data) => manaDistChart(data));
getCostDist().then((data) => costDistChart(data));
getPTDist().then((data) => ptDistChart(data));
getCardTypesDist().then((data) => cardTypeChart(data));
getCardRarityDist().then((data) => cardRarityChart(data));
