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
Exemplu de request: GET https://api.edamam.com/api/food-database/v2/parser?ingr=coffee&app_id=8cb39be1&app_key=1eb66ea78321471581780819156aa1fe <br/><br/>
Se observă în request-ul de mai sus parametrii:<br/>
       * ingr - ce reprezintă aplimentul pentru care se dorește afișarea informațiilor <br/>
       * app_id - identificatorul unic asociat contului ce permite trimiterea request-urilor, dat explicit în codul sursă <br/>
       * app_key - cheia de autentificare contului ce permite trimiterea request-urilor, dat explicit în codul sursă <br/>
Exemplu de response:<br/>
```
{
    "text": "coffee",
    "parsed": [
        {
            "food": {
                "foodId": "food_ax0a0yxbbe4hx0apiz1tla01s2w7",
                "label": "Coffee",
                "nutrients": {
                    "ENERC_KCAL": 1.0,
                    "PROCNT": 0.12,
                    "FAT": 0.02,
                    "CHOCDF": 0.0,
                    "FIBTG": 0.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg"
            }
        }
    ],
    "hints": [
        {
            "food": {
                "foodId": "food_ax0a0yxbbe4hx0apiz1tla01s2w7",
                "label": "Coffee",
                "nutrients": {
                    "ENERC_KCAL": 1.0,
                    "PROCNT": 0.12,
                    "FAT": 0.02,
                    "CHOCDF": 0.0,
                    "FIBTG": 0.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 237.0
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
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
                    "label": "Cup",
                    "weight": 237.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
                    "label": "Fluid ounce",
                    "weight": 29.6
                }
            ]
        },
        {
            "food": {
                "foodId": "food_ax0a0yxbbe4hx0apiz1tla01s2w7",
                "label": "Coffee Bean",
                "nutrients": {
                    "ENERC_KCAL": 1.0,
                    "PROCNT": 0.12,
                    "FAT": 0.02,
                    "CHOCDF": 0.0,
                    "FIBTG": 0.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 237.0
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
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
                    "label": "Cup",
                    "weight": 237.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
                    "label": "Fluid ounce",
                    "weight": 29.6
                }
            ]
        },
        {
            "food": {
                "foodId": "food_ax0a0yxbbe4hx0apiz1tla01s2w7",
                "label": "Coffee and Chicory",
                "nutrients": {
                    "ENERC_KCAL": 1.0,
                    "PROCNT": 0.12,
                    "FAT": 0.02,
                    "CHOCDF": 0.0,
                    "FIBTG": 0.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 237.0
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
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
                    "label": "Cup",
                    "weight": 237.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
                    "label": "Fluid ounce",
                    "weight": 29.6
                }
            ]
        },
        {
            "food": {
                "foodId": "food_b36idu0apr5kqtbcs7b7ua8spx6m",
                "label": "Coffee Bean",
                "nutrients": {
                    "ENERC_KCAL": 353.0,
                    "PROCNT": 12.2,
                    "FAT": 0.5,
                    "CHOCDF": 75.4,
                    "FIBTG": 0.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 2.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 5.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_packet",
                    "label": "Packet",
                    "weight": 2.0
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
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_teaspoon",
                    "label": "Teaspoon",
                    "weight": 1.0
                }
            ]
        },
        {
            "food": {
                "foodId": "food_b47ji9gbrvztlfaegs48manqq9wb",
                "label": "Decaf Coffee",
                "nutrients": {
                    "ENERC_KCAL": 0.0,
                    "PROCNT": 0.1,
                    "FAT": 0.0,
                    "CHOCDF": 0.0,
                    "FIBTG": 0.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/14e/14ef691560563277aade0f8c56ed2e44.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 237.0
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
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
                    "label": "Cup",
                    "weight": 237.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
                    "label": "Fluid ounce",
                    "weight": 29.6
                }
            ]
        },
        {
            "food": {
                "foodId": "food_b4n6bbhb328sp6bqimy9wbzvlo0j",
                "label": "Coffee Glazed Coffee Cake",
                "nutrients": {
                    "ENERC_KCAL": 379.4759746444108,
                    "PROCNT": 4.221758923192996,
                    "FAT": 10.369824877514528,
                    "CHOCDF": 68.79580628715587,
                    "FIBTG": 1.277479455860791
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "sugar; Grape-Nuts cereal; flour; butter; salt; vanilla; baking powder; COFFEE; instant coffee; eggs; baking soda; powdered sugar"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 253.0148320719625
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 253.0148320719625
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
        },
        {
            "food": {
                "foodId": "food_acb7cp9bvviofraioqnlobuip8s8",
                "label": "Coffee Lovers Coffee Cake",
                "nutrients": {
                    "ENERC_KCAL": 364.37703079853185,
                    "PROCNT": 3.7587779014446943,
                    "FAT": 14.172123702475439,
                    "CHOCDF": 57.12161105307421,
                    "FIBTG": 0.8568601870642345
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "all-purpose flour; instant coffee; cinnamon, ground; light brown sugar; salt; butter; sour cream; baking soda; egg; walnuts"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 79.50621970093617
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 79.50621970093617
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
        },
        {
            "food": {
                "foodId": "food_asvam4oauz7w7pbcq6zhbbfvieyt",
                "label": "Coffee Time, Coffee Syrup",
                "nutrients": {
                    "ENERC_KCAL": 333.0,
                    "PROCNT": 0.0,
                    "FAT": 0.0,
                    "CHOCDF": 76.66999816894531
                },
                "brand": "Coffee Time",
                "category": "Packaged foods",
                "categoryLabel": "food",
                "foodContentsLabel": "HIGH FRUCTOSE CORN SYRUP; CORN SYRUP; COFFEE EXTRACT; CARAMEL COLOR AND POTASSIUM SORBATE.",
                "image": "https://www.edamam.com/food-img/a88/a88c1ad66d9b3eb0871fa9032bfe7caa.jpg",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
                        "label": "Milliliter",
                        "quantity": 30.0
                    },
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
                        "label": "Tablespoon",
                        "quantity": 2.0
                    }
                ],
                "servingsPerContainer": 1.0225188464548056
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 29.573529562
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
                    "label": "Package",
                    "weight": 453.59237
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
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
                    "label": "Tablespoon",
                    "weight": 14.786764781
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
                    "label": "Milliliter",
                    "weight": 0.9857843187333334
                }
            ]
        },
        {
            "food": {
                "foodId": "food_ahfjs0ybyh6loiby47sgcbaq6h8q",
                "label": "Coffee Frosting",
                "nutrients": {
                    "ENERC_KCAL": 449.6624613404921,
                    "PROCNT": 0.27916925057919306,
                    "FAT": 20.736756479368122,
                    "CHOCDF": 68.74839345933306
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "butter; instant coffee; sugar; coffee"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 165.7730924997929
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 165.7730924997929
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
        },
        {
            "food": {
                "foodId": "food_b6r3z3qbmc63ltal6nhfabpzwsvn",
                "label": "Fireside Coffee",
                "nutrients": {
                    "ENERC_KCAL": 172.8664914767897,
                    "PROCNT": 1.9003609620366224,
                    "FAT": 3.5952841344865374,
                    "CHOCDF": 33.00123946100067,
                    "FIBTG": 0.40773750866708847
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "sugar; coffee creamer; chocolate milk; ground allspice; ground cinnamon; instant decaffeinated coffee"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 136.9950000003733
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 136.9950000003733
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
        },
        {
            "food": {
                "foodId": "food_b892lkvbanszaoahgkpd9bkbc1r9",
                "label": "Coffee Cream",
                "nutrients": {
                    "ENERC_KCAL": 195.0,
                    "PROCNT": 2.7,
                    "FAT": 19.31,
                    "CHOCDF": 3.66,
                    "FIBTG": 0.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/8b8/8b82cff989fe1f9d1e07851a8c929f73.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 60.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_container",
                    "label": "Container",
                    "weight": 11.1
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
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
                    "label": "Tablespoon",
                    "weight": 15.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
                    "label": "Cup",
                    "weight": 240.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
                    "label": "Fluid ounce",
                    "weight": 30.0
                }
            ]
        },
        {
            "food": {
                "foodId": "food_byf2xfhbghlq5qadhyvztabfq665",
                "label": "Coffee Liqueur",
                "nutrients": {
                    "ENERC_KCAL": 336.0,
                    "PROCNT": 0.1,
                    "FAT": 0.3,
                    "CHOCDF": 46.8,
                    "FIBTG": 0.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/625/6255aae740942e782ad588caa6aa86ca.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 52.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 52.0
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
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_jigger",
                    "label": "Jigger",
                    "weight": 52.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
                    "label": "Fluid ounce",
                    "weight": 34.8
                }
            ]
        },
        {
            "food": {
                "foodId": "food_b80fdemaf9ojfwax2cxsvb06wlii",
                "label": "Coffee Granita",
                "nutrients": {
                    "ENERC_KCAL": 68.24738675958189,
                    "PROCNT": 0.09909407665505227,
                    "FAT": 0.016515679442508712,
                    "CHOCDF": 17.418118466898957
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "coffee; sugar"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 95.66666666666667
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 95.66666666666667
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
        },
        {
            "food": {
                "foodId": "food_aof7z08ad0qgsta38run7arojif8",
                "label": "Instant Coffee",
                "nutrients": {
                    "ENERC_KCAL": 353.0,
                    "PROCNT": 12.2,
                    "FAT": 0.5,
                    "CHOCDF": 75.4,
                    "FIBTG": 0.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 2.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 5.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_packet",
                    "label": "Packet",
                    "weight": 2.0
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
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_teaspoon",
                    "label": "Teaspoon",
                    "weight": 1.0
                }
            ]
        },
        {
            "food": {
                "foodId": "food_a60xx3faembmm8amknzkgby1ghnz",
                "label": "Coffee Coffee Cake",
                "nutrients": {
                    "ENERC_KCAL": 330.295111233165,
                    "PROCNT": 4.41509063443675,
                    "FAT": 13.145351094028838,
                    "CHOCDF": 49.01565275106102,
                    "FIBTG": 0.8224434679122042
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "butter; turbinado sugar; flour; instant coffee; sugar; eggs; baking powder; baking soda; salt; cinnamon; vanilla; milk; coffee"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 91.02499999994927
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 91.02499999994927
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
        },
        {
            "food": {
                "foodId": "food_bp0j7rfap97183a6ix0nob71qqx0",
                "label": "Coffee Liqueur",
                "nutrients": {
                    "ENERC_KCAL": 336.0,
                    "PROCNT": 0.1,
                    "FAT": 0.3,
                    "CHOCDF": 46.8,
                    "FIBTG": 0.0
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/625/6255aae740942e782ad588caa6aa86ca.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 52.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 52.0
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
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_jigger",
                    "label": "Jigger",
                    "weight": 52.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce",
                    "label": "Fluid ounce",
                    "weight": 34.8
                }
            ]
        },
        {
            "food": {
                "foodId": "food_aui5rsladj59mbbds5qilazkz2os",
                "label": "Coffee Milkshake",
                "nutrients": {
                    "ENERC_KCAL": 157.47137915055885,
                    "PROCNT": 3.09422334725759,
                    "FAT": 8.366429959652205,
                    "CHOCDF": 17.51335020886386,
                    "FIBTG": 0.49114436991199506
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "coffee; milk; ice cream"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 570.09713875
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 570.09713875
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
        },
        {
            "food": {
                "foodId": "food_a5jn0xiatswu4abw2sraaa5rlru4",
                "label": "Turkish Coffee",
                "nutrients": {
                    "ENERC_KCAL": 9.49665475507847,
                    "PROCNT": 0.006974516024571234,
                    "FAT": 0.0011624193374285391,
                    "CHOCDF": 2.4384098401678043
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "water; coffee; sugar"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 516.6268521592366
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 516.6268521592366
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
        },
        {
            "food": {
                "foodId": "food_apfnvsvb825xw0a9v0118b43e6vu",
                "label": "Cocoa Coffee",
                "nutrients": {
                    "ENERC_KCAL": 37.36292968737265,
                    "PROCNT": 0.699483295734571,
                    "FAT": 0.36560527081190547,
                    "CHOCDF": 7.733230097518359,
                    "FIBTG": 0.32464962605328224
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "hot chocolate; sugar substitute; coffee"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 326.3713683203125
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 326.3713683203125
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
        },
        {
            "food": {
                "foodId": "food_buoda9fban8onyacvolngarzeb7p",
                "label": "Coffee Jelly",
                "nutrients": {
                    "ENERC_KCAL": 31.86530203361436,
                    "PROCNT": 1.2098579540695367,
                    "FAT": 0.018576963072442953,
                    "CHOCDF": 6.8906351003844355
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "gelatin; water; white sugar; coffee"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 137.1152275858125
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 137.1152275858125
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
        },
        {
            "food": {
                "foodId": "food_agwjb9vata6ix6b7ck1u8bwgz80a",
                "label": "Cardamom Coffee",
                "nutrients": {
                    "ENERC_KCAL": 18.016833644201043,
                    "PROCNT": 0.5455416909791875,
                    "FAT": 0.28781957837620215,
                    "CHOCDF": 3.933115105233542,
                    "FIBTG": 1.1235910944220349
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "cardamom; coffee beans; sugar"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 6.230024458854167
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 6.230024458854167
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
        },
        {
            "food": {
                "foodId": "food_ayql8brbqo4s2fav9fgj2b1hakmc",
                "label": "Iced Coffee",
                "nutrients": {
                    "ENERC_KCAL": 20.8559231590314,
                    "PROCNT": 1.0325933831382825,
                    "FAT": 1.0586872998939698,
                    "CHOCDF": 1.8001867662765487
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "coffee; sweetener; water; milk"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 374.7999999997498
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 374.7999999997498
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
            "href": "https://api.edamam.com/api/food-database/v2/parser?session=44&ingr=coffee&app_id=8cb39be1&app_key=1eb66ea78321471581780819156aa1fe"
        }
    }
}
```


