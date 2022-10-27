async function call(query){

    const url = "./assets/php/query.php?q=" + query;
    const response = await fetch(url);
    if (!response.ok){
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
async function getCardCountByColor(color){
    //Error management
    if (!(color in colors)){
        throw new Error("Error in query: Color introduced is unknown")
    }
    //Call
    const query = "SELECT COUNT (Card.id) AS numCards FROM Card GROUP BY color";
    return await call(query);
}
