var current_mole_tile;
var current_plant_tile;
let score = 0;
let game_over = false;


/* call the set game function on loading of window*/
window.onload = function (){
    set_game();

}

function set_game(){
    console.log("game as been set");

    //set up the game tiles
    
    for (i = 0; i < 9; i++){

        //create div element for each tile
        tile = document.createElement("div");

        //assign id value 0-8 to each tile
        tile.id = i.toString();

        //create event listener for when a tile is clicked
        tile.addEventListener("click", select_tile);


        //get the div element tagged board in the html, and append the tile element to it
        document.getElementById("board").appendChild(tile);
    }

    //call function at set interval
    setInterval(set_mole, 1500);
    setInterval(set_plant, 1800);
}

    


function get_random_tile(){
    let num = Math.floor(Math.random() *9 )
    return num.toString();

}

function set_mole(){
    if(game_over)
    {
        return;
    }
    //clear the values within current mole tile to prevent duplicates
    if(current_mole_tile){
        current_mole_tile.innerHTML ="";
    }

    console.log("set mole called");

    let mole = document.createElement("img");
    mole.src = "./MontyMole.webp";

    let num = get_random_tile();

    if(current_plant_tile && current_plant_tile.id == num)
    {
        return;

    }

    current_mole_tile = document.getElementById(num);

    // add the mole (png) to a div
    current_mole_tile.appendChild(mole);



}

function set_plant(){
    if (game_over){
        return;
    }
    if (current_plant_tile){
    current_plant_tile.innerHTML = "";


    }

    let plant = document.createElement("img");
    plant.src = "./piranha.png";

    //get random number for the tile
    let num = get_random_tile();

    if (current_mole_tile && current_mole_tile.id == num)
    {
        return;
    }

    //get the tile on the map which had the matching value
    current_plant_tile = document.getElementById(num);
    current_plant_tile.appendChild(plant);
    
    }

    function select_tile()
    {

        if(game_over){
            return;
        }
        console.log("select !!");
        if (this == current_mole_tile){

            score += 10;

            //delete the mole once it has been clicked to prevent duplication
            current_mole_tile.innerHTML ="";


            //update score
            document.getElementById("score").innerText = score.toString();
        }
        else if (this == current_plant_tile){

            document.getElementById("score").innerText = "Game Over: " +score.toString();
            game_over = true;
        }

    }

// create a reset button









    //function for responsive nav bar
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


function topbar_navigation_function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
