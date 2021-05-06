function searchFunctionAPI1(){
    var ingredient = document.getElementById("ingr").value;
    ingredient = ingredient.replaceAll(" ", "%20");
    
    var url_search = "https://api.edamam.com/api/food-database/v2/parser?ingr=" + ingredient + "&app_id=8cb39be1&app_key=1eb66ea78321471581780819156aa1fe";
    
    var table = document.getElementById("tableFirstAPI");
    table.style.display = "none";
    var tr = table.getElementsByTagName("tr");
    document.getElementById("error1").style.display = "none";
    req = $.ajax({
        url: url_search,
        type: 'GET',
        success: function (response) {
            if(response.parsed.length != 0){
                tr[1].getElementsByTagName("td")[0].innerHTML = response.parsed[0].food.label;
                tr[1].getElementsByTagName("td")[1].innerHTML = "Energy KCAL: " + response.parsed[0].food.nutrients.ENERC_KCAL + " kcal <br />"
                                                                + "Protein: " +  response.parsed[0].food.nutrients.PROCNT + " g <br />"
                                                                + "Fat: " + response.parsed[0].food.nutrients.FAT + " g <br />"
                                                                + "Carbs: " + response.parsed[0].food.nutrients.CHOCDF + " g ";
                tr[1].getElementsByTagName("td")[2].innerHTML = "100 g";
                table.style.display = "";
            }
            else {
                document.getElementById("error1").innerHTML = "Something is wrong! Maybe your ingredient doesn't exist in our database."
                document.getElementById("error1").style.color = "#04AA6D";
                table.style.display = "none";
                document.getElementById("error1").style.display = "";
            }
        }

    });
}

function newRecipeFunctionAPI1(){
    document.getElementById("ingr").value = "";
    document.getElementById("tableFirstAPI").style.display = "none";
    document.getElementById("error1").style.display = "none";
}