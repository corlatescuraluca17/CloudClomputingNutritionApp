# CloudClomputingNutritionApp

## Introducere
Dacă plănuieşti să dai jos câteva kilograme, dar ţi-e greu să îţi dai seama câte calorii consumi, această aplicație te poate ajuta în acest sens. Vei putea calcula estimativ numărul de calorii din diferite alimente, astfel încât să mănânci responsabil şi să ajungi la greutatea dorită. În plus, poți obține și coeficientul caloric pentru rețetele tale preferate totul la un click distanță.

## Descrierea problemei și a aplicației
Este o aplicaţie utilă în special celor care doresc să urmeze un regim pe bază de restricţie calorică, integrând o bază de date imensă, care cuprinde sute de mii de alimente cu ajutorul a 2 API-uri create de Edamam. 
Utilizatorul are 2 opțiuni:
- inserează denumirea unui aliment și va obține valorile nutriționale și numărul de calorii asociate cu 100 g din respectivul aliment
- inserează o rețetă completă, inclusiv unitățile de măsură și se vor afișa macronutrienții și numarul de calorii corespunzătoare cantităților specificate

## Descrierea API-urilor folosite
Pentru implementarea aplicației au fost folosite 2 API-uri. <br/>
* Food and Grocery Database API with Natural Language Processing (NLP) - oferă, prin autentificare, API key-uri, pentru varianta free având un număr limitat de 100 request-uri/minut, utilizatorilor ce își doresc să integreze  în aplicațiile lor un API care calculează valorile nutriționale.  <br/>
Exemplu de request: GET https://api.edamam.com/api/food-database/v2/parser?ingr=french%20fries&app_id=8cb39be1&app_key=1eb66ea78321471581780819156aa1fe <br/><br/>
Se observă în request-ul de mai sus parametrii:<br/>
       * ingr - ce reprezintă alimentul pentru care se dorește afișarea informațiilor <br/>
       * app_id - identificatorul unic asociat contului ce permite trimiterea request-urilor, dat explicit în codul sursă <br/>
       * app_key - cheia de autentificare contului ce permite trimiterea request-urilor, dat explicit în codul sursă <br/>
Exemplu de response:<br/>
```
{
    "text": "french fries",
    "parsed": [
        {
            "food": {
                "foodId": "food_aqa4qtwapci86kar0l275bjqmkal",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 150.0,
                    "PROCNT": 2.34,
                    "FAT": 4.99,
                    "CHOCDF": 23.96,
                    "FIBTG": 2.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/559/559b143365bf3dde8d5889ec627e1da7.jpg"
            }
        }
    ],
    "hints": [
        {
            "food": {
                "foodId": "food_aqa4qtwapci86kar0l275bjqmkal",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 150.0,
                    "PROCNT": 2.34,
                    "FAT": 4.99,
                    "CHOCDF": 23.96,
                    "FIBTG": 2.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/559/559b143365bf3dde8d5889ec627e1da7.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 240.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_strip",
                    "label": "Strip",
                    "weight": 8.2
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                    "label": "Gram",
                    "weight": 1.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
                    "label": "Ounce",
                    "weight": 28.349523125
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
                    "label": "Pound",
                    "weight": 453.59237
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
                    "label": "Kilogram",
                    "weight": 1000.0
                }
            ]
        }
    ],
    "_links": {
        "next": {
            "title": "Next page",
            "href": "https://api.edamam.com/api/food-database/v2/parser?session=44&ingr=french+fries&app_id=8cb39be1&app_key=1eb66ea78321471581780819156aa1fe"
        }
    }
}
```
   
   
* Nutrition Analysis API - oferă, prin autentificare, API key-uri, pentru varianta free având un număr limitat de 400 de retete evaluate/ luna, adica maximum 4000 de linii interpretate lunar. Acest API acopera cele mai importante cazuri de utilizare a unui astfel de tool, avand la baza procesarea limbajului natural care permite extragerea unor unitati de masura si produse alimentare dintr-un text nestructurat. <br/>
Exemplu de request: GET https://api.edamam.com/api/nutrition-data?app_id=918f927c&app_key=852d971200121c02c19973365979a269&ingr=1%20large%20apple <br/><br/>
Se observă în request-ul de mai sus parametrii:<br/>
       * app_id - identificatorul unic asociat contului ce permite trimiterea request-urilor, dat explicit în codul sursă <br/>
       * app_key - cheia de autentificare contului ce permite trimiterea request-urilor, dat explicit în codul sursă <br/>
       * ingr - ce reprezintă alimentele ce alcatuiesc reteta impreuna cu cantitatile corespunzatoare<br/>
Exemplu de response:<br/>
      ```
{
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c5fec61b1505495f97bc277ca4ea71a2",
    "calories": 115,
    "totalWeight": 223.0,
    "dietLabels": [
        "LOW_FAT",
        "LOW_SODIUM"
    ],
    "healthLabels": [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "KOSHER"
    ],
    "cautions": [
        "SULFITES"
    ],
    "totalNutrients": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 115.96,
            "unit": "kcal"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 0.37910000000000005,
            "unit": "g"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 0.06244,
            "unit": "g"
        },
        "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.01561,
            "unit": "g"
        },
        "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.11373,
            "unit": "g"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 30.796300000000002,
            "unit": "g"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 5.351999999999999,
            "unit": "g"
        },
        "SUGAR": {
            "label": "Sugars",
            "quantity": 23.169700000000002,
            "unit": "g"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 0.5798,
            "unit": "g"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0.0,
            "unit": "mg"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 2.23,
            "unit": "mg"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 13.379999999999999,
            "unit": "mg"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 11.15,
            "unit": "mg"
        },
        "K": {
            "label": "Potassium",
            "quantity": 238.60999999999999,
            "unit": "mg"
        },
        "FE": {
            "label": "Iron",
            "quantity": 0.2676,
            "unit": "mg"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 0.0892,
            "unit": "mg"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 24.53,
            "unit": "mg"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 6.6899999999999995,
            "unit": "µg"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 10.258,
            "unit": "mg"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.03791,
            "unit": "mg"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.05798,
            "unit": "mg"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.20293,
            "unit": "mg"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.09143,
            "unit": "mg"
        },
        "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 6.6899999999999995,
            "unit": "µg"
        },
        "FOLFD": {
            "label": "Folate (food)",
            "quantity": 6.6899999999999995,
            "unit": "µg"
        },
        "FOLAC": {
            "label": "Folic acid",
            "quantity": 0.0,
            "unit": "µg"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.0,
            "unit": "µg"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 0.0,
            "unit": "µg"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.4014,
            "unit": "mg"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.906000000000001,
            "unit": "µg"
        },
        "WATER": {
            "label": "Water",
            "quantity": 190.7988,
            "unit": "g"
        }
    },
    "totalDaily": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5.798,
            "unit": "%"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 0.5832307692307693,
            "unit": "%"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 0.31220000000000003,
            "unit": "%"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 10.265433333333334,
            "unit": "%"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 21.407999999999998,
            "unit": "%"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 1.1596,
            "unit": "%"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0.0,
            "unit": "%"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 0.09291666666666666,
            "unit": "%"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 1.338,
            "unit": "%"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 2.6547619047619047,
            "unit": "%"
        },
        "K": {
            "label": "Potassium",
            "quantity": 5.076808510638298,
            "unit": "%"
        },
        "FE": {
            "label": "Iron",
            "quantity": 1.4866666666666668,
            "unit": "%"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 0.8109090909090909,
            "unit": "%"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 3.5042857142857144,
            "unit": "%"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0.7433333333333333,
            "unit": "%"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 11.397777777777778,
            "unit": "%"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 3.1591666666666667,
            "unit": "%"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.46,
            "unit": "%"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.2683125,
            "unit": "%"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.033076923076922,
            "unit": "%"
        },
        "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1.6725,
            "unit": "%"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.0,
            "unit": "%"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 0.0,
            "unit": "%"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.676,
            "unit": "%"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.088333333333334,
            "unit": "%"
        }
    },
    "totalNutrientsKCal": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 116,
            "unit": "kcal"
        },
        "PROCNT_KCAL": {
            "label": "Calories from protein",
            "quantity": 2,
            "unit": "kcal"
        },
        "FAT_KCAL": {
            "label": "Calories from fat",
            "quantity": 3,
            "unit": "kcal"
        },
        "CHOCDF_KCAL": {
            "label": "Calories from carbohydrates",
            "quantity": 111,
            "unit": "kcal"
        }
    }
 }
      ```

## Fluxul de date

În cadrul aplicației, utilizatorul final trebuie să introducă denumirea alimentului sau rețeta completă pentru care dorește să fie afișate informațiile nutriționale. <br/>
Dacă este introdus un aliment în primul cadran al aplicației, este trimis un request de tip GET către Food and Grocery Database API care oferă valori estimative pentru numărul de kilocalorii și cantitatea de macronutrienți (proteine, grăsimi, carbohidrați) afereți pentru 100g de produs. Răspunsul obținut este în format JSON cu structura prezentată anterior în descrierea API-ului. Prin intermediul butonului "Analyze" se inițiază o cerere, valoarea introdusă de utilizator se va utiliza ca parametru pentru API, iar răspunsul va fi prelucrat după cum urmează:
```
var url_search = "https://api.edamam.com/api/food-database/v2/parser?ingr=" + ingredient + "&app_id=8cb39be1&app_key=1eb66ea78321471581780819156aa1fe";
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
                        document.getElementById("error1").innerHTML = "Error at the request";
                        document.getElementById("error1").style.display = "";
                    }
                }

            });
```
Similar primului API funcționează și request-urile pentru cel de-al doilea. Ulilizatorul
