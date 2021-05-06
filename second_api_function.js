function searchFunctionAPI2(){
    var list_ingredient = document.getElementById("recipe-ingr").value;
    var table = document.getElementById("tableSecondAPI");
    var tableCalories = document.getElementById("caloriesTable");
    var tableNutrients = document.getElementById("nutrientsTable");
    
    table.style.display = "none";

    var tr = table.getElementsByTagName("tr");
    document.getElementById("error2").style.display = "none";
    document.getElementById("nutritionFacts").style.display = "none";
    
    var tr_length = tr.length;
    for (var i = 1; i < tr_length; i++) {
        table.deleteRow(1);
    }
    var ingredients = list_ingredient.split(",\n");
    var j = 0;
    var totalCalories = 0;
    var totalTotalWeight = 0;
    var totalFat = 0;
    var totalChole = 0;
    var totalSodium = 0;
    var totalCarbs = 0;
    var totalProtein = 0;
    var totalVitaminD = 0;
    var totalCalcium = 0;
    var totalIron = 0;
    var totalPotassium = 0;
    for(var i = 0; i < ingredients.length; i++){
        ingredient = ingredients[i].replaceAll(" ", "%20");
        var url_search = "https://api.edamam.com/api/nutrition-data?app_id=918f927c&app_key=852d971200121c02c19973365979a269&ingr=" + ingredient;
        var split_ingredient = ingredient.split("%20");
        $.ajax({
            url: url_search,
            type: 'GET',
            async: false,
            success: function (response) {
                if(response.totalWeight != 0 && split_ingredient.length == 3){
                    j++;
                    var row = table.insertRow(j);
                    var td0 = row.insertCell(0);
                    var td1 = row.insertCell(1);
                    var td2 = row.insertCell(2);
                    var td3 = row.insertCell(3);
                    var td4 = row.insertCell(4);

                    td0.innerHTML = split_ingredient[2];
                    td0.style.backgroundColor = "#fff";

                    td1.innerHTML = split_ingredient[0];
                    td1.style.backgroundColor = "#ddd";

                    td2.innerHTML = split_ingredient[1];
                    td2.style.backgroundColor = "#fff";

                    td3.innerHTML = response.calories.toString() + " kcal";
                    td3.style.backgroundColor = "#ddd";

                    td4.innerHTML = response.totalWeight.toFixed(1).toString() + " g";
                    td4.style.backgroundColor = "#fff";

                    totalCalories += parseInt(response.calories);
                    totalTotalWeight += parseFloat(response.totalWeight);
                    totalFat += parseFloat(response.totalNutrients.FAT.quantity);
                    totalChole += parseFloat(response.totalNutrients.CHOLE.quantity);
                    totalSodium += parseFloat(response.totalNutrients.NA.quantity);
                    totalCarbs += parseFloat(response.totalNutrients.CHOCDF.quantity);
                    totalProtein += parseFloat(response.totalNutrients.PROCNT.quantity);
                    totalVitaminD += parseFloat(response.totalNutrients.VITD.quantity);
                    totalCalcium += parseFloat(response.totalNutrients.CA.quantity);
                    totalIron += parseFloat(response.totalNutrients.FE.quantity);
                    totalPotassium += parseFloat(response.totalNutrients.K.quantity);
                    
                    if(j == ingredients.length){
                        tableCalories.getElementsByTagName("tr")[0].getElementsByTagName("td")[1].innerHTML = totalCalories;
                        tableNutrients.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].innerHTML = "Fat - " + totalFat.toFixed(1).toString() + " g";
                        tableNutrients.getElementsByTagName("tr")[0].getElementsByTagName("td")[1].innerHTML = (totalFat/65*100).toFixed(0).toString() + " %";
                        tableNutrients.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].innerHTML = "Cholesterol - " + totalChole.toFixed(1).toString() + " mg";
                        tableNutrients.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].innerHTML = (totalChole/300*100).toFixed(0).toString() + " %";
                        tableNutrients.getElementsByTagName("tr")[2].getElementsByTagName("td")[0].innerHTML = "Sodium - " + totalSodium.toFixed(1).toString() + " mg";
                        tableNutrients.getElementsByTagName("tr")[2].getElementsByTagName("td")[1].innerHTML = (totalSodium/2400*100).toFixed(0).toString() + " %";
                        tableNutrients.getElementsByTagName("tr")[3].getElementsByTagName("td")[0].innerHTML = "Carbohydrate - " + totalCarbs.toFixed(1).toString() + " g";
                        tableNutrients.getElementsByTagName("tr")[3].getElementsByTagName("td")[1].innerHTML = (totalCarbs/300*100).toFixed(0).toString() + " %";
                        tableNutrients.getElementsByTagName("tr")[4].getElementsByTagName("td")[0].innerHTML = "Protein - " + totalProtein.toFixed(1).toString() + " g";
                        tableNutrients.getElementsByTagName("tr")[4].getElementsByTagName("td")[1].innerHTML = (totalProtein/50*100).toFixed(0).toString() + " %";
                        
                        tableNutrients.getElementsByTagName("tr")[5].getElementsByTagName("td")[0].innerHTML = "Vitamin D - " + totalVitaminD.toFixed(1).toString() + " mcg";
                        tableNutrients.getElementsByTagName("tr")[5].getElementsByTagName("td")[1].innerHTML = (totalVitaminD/10*100).toFixed(0).toString() + " %";
                        tableNutrients.getElementsByTagName("tr")[6].getElementsByTagName("td")[0].innerHTML = "Calcium - " + totalCalcium.toFixed(1).toString() + " mg";
                        tableNutrients.getElementsByTagName("tr")[6].getElementsByTagName("td")[1].innerHTML = (totalCalcium/1000*100).toFixed(0).toString() + " %";
                        tableNutrients.getElementsByTagName("tr")[7].getElementsByTagName("td")[0].innerHTML = "Iron - " + totalIron.toFixed(1).toString() + " mg";
                        tableNutrients.getElementsByTagName("tr")[7].getElementsByTagName("td")[1].innerHTML = (totalIron/18*100).toFixed(0).toString() + " %";
                        tableNutrients.getElementsByTagName("tr")[8].getElementsByTagName("td")[0].innerHTML = "Potassium - " + totalPotassium.toFixed(1).toString() + " mg";
                        tableNutrients.getElementsByTagName("tr")[8].getElementsByTagName("td")[1].innerHTML = (totalPotassium/4700*100).toFixed(0).toString() + " %";
                        
                        document.getElementById("nutritionFacts").style.display = "";
                        table.style.display = "";
                    }
                }
                else {
                    document.getElementById("error2").innerHTML = "Something is wrong! Maybe your ingredients or structure of your text."
                    document.getElementById("error2").style.color = "#04AA6D";
                    table.style.display = "none";
                    document.getElementById("error2").style.display = "";
                }
            }
        });
    }
}

function newRecipeFunctionAPI2(){
    document.getElementById("recipe-ingr").value = "";
    document.getElementById("tableSecondAPI").style.display = "none";
    document.getElementById("nutritionFacts").style.display = "none";
    document.getElementById("error2").style.display = "none";
}