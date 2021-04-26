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
       * ingr - ce reprezintă aplimentul pentru care se dorește afișarea informațiilor <br/>
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
        },
        {
            "food": {
                "foodId": "food_aqa4qtwapci86kar0l275bjqmkal",
                "label": "Crinkle Cut French Fries",
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
        },
        {
            "food": {
                "foodId": "food_aqa4qtwapci86kar0l275bjqmkal",
                "label": "Crinkle Cut Fries",
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
        },
        {
            "food": {
                "foodId": "food_bu5wvbab122209aehwwvdbn0kzcd",
                "label": "Shoestring French Fries",
                "nutrients": {
                    "ENERC_KCAL": 167.0,
                    "PROCNT": 2.16,
                    "FAT": 6.24,
                    "CHOCDF": 25.59,
                    "FIBTG": 2.3
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/8bf/8bfb2defeba0e0daee30944f77009c74.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_strip",
                    "label": "Strip",
                    "weight": 3.0
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
                "foodId": "food_akt4a0rbmqy1f8ae8t02xaydsbob",
                "label": "Steak Cut French Fries",
                "nutrients": {
                    "ENERC_KCAL": 133.0,
                    "PROCNT": 2.19,
                    "FAT": 3.39,
                    "CHOCDF": 23.51,
                    "FIBTG": 1.9
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/7a1/7a1dd7cab2cb1d3342bccfdc7c858b94.jpg"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 100.0
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_strip",
                    "label": "Strip",
                    "weight": 15.3
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
                "foodId": "food_brmeu40brd8pbub49ysvdb82ouiu",
                "label": "Sweet Potato French Fries",
                "nutrients": {
                    "ENERC_KCAL": 152.0,
                    "PROCNT": 1.57,
                    "FAT": 5.06,
                    "CHOCDF": 24.94,
                    "FIBTG": 3.6
                },
                "category": "Generic foods",
                "categoryLabel": "food",
                "image": "https://www.edamam.com/food-img/c44/c44503b726d4379d7813de4ebdc0e76b.jpg"
            },
            "measures": [
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
                "foodId": "food_bjrn1mda4dk5pgb26z2s5bs62pir",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 171.12349236269074,
                    "PROCNT": 1.507773547358047,
                    "FAT": 13.164418282636655,
                    "CHOCDF": 12.735043996059554,
                    "FIBTG": 1.4219302136705254
                },
                "category": "Generic meals",
                "categoryLabel": "meal",
                "foodContentsLabel": "red potatoes; Oil; sweet onion; Salt; pepper"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 762.277428125
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 762.277428125
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
                "foodId": "food_blgs6cdajp22xzazyvl1kb6g9xlr",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 129.33786048179485,
                    "PROCNT": 3.5273961949580412,
                    "FAT": 3.5273961949580412,
                    "CHOCDF": 19.988578438095566,
                    "FIBTG": 3.5273961949580412
                },
                "brand": "Wild Oats Markets, Inc.",
                "category": "Packaged foods",
                "categoryLabel": "food",
                "foodContentsLabel": "Organic Potatoes; Organic Palm Oil; Organic Apple Juice Concentrate; Citric Acid ( To Retain Color ).",
                "image": "https://www.edamam.com/food-img/131/1313b9ce6ad57057460cd46aee27039b.jpg",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
                        "label": "Ounce",
                        "quantity": 3.0
                    },
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        "label": "Gram",
                        "quantity": 90.80000305175781
                    },
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        "label": "Gram",
                        "quantity": 90.80000000000001
                    }
                ],
                "servingsPerContainer": 1.0
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 85.048569375
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
                    "label": "Package",
                    "weight": 425.242846875
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
                "foodId": "food_amvcih6bsodbleai0n63hbibmsdf",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 152.85383511484844,
                    "PROCNT": 3.5273961949580412,
                    "FAT": 4.703194926610721,
                    "CHOCDF": 24.691773364706286,
                    "FIBTG": 2.3515974633053607
                },
                "brand": "J.R. Simplot Co.",
                "category": "Packaged foods",
                "categoryLabel": "food",
                "foodContentsLabel": "Potatoes; Partially Hydrogenated Vegetable Oil ( Soybean And/or Cottonseed Oils ); And/or Vegetable Oil ( Canola; Soybean; And/or Sunflower Oils; Dextrose; Disodium Dihydrogen Pyrophosphate ( To Maintain Natural Color ).",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
                        "label": "Ounce",
                        "quantity": 3.0
                    },
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        "label": "Gram",
                        "quantity": 85.0
                    }
                ],
                "servingsPerContainer": 1.0
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 85.048569375
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
                    "label": "Package",
                    "weight": 425.242846875
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
                "foodId": "food_bcqcukgbcnsmoqaptfzn1bl4olgc",
                "label": "McDonald's, French Fries",
                "nutrients": {
                    "ENERC_KCAL": 323.0,
                    "PROCNT": 3.41,
                    "FAT": 15.47,
                    "CHOCDF": 42.58,
                    "FIBTG": 3.9
                },
                "brand": "McDonald's",
                "category": "Generic foods",
                "categoryLabel": "food"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 111.62222222222222,
                    "qualified": [
                        {
                            "qualifiers": [
                                {
                                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                                    "label": "medium"
                                }
                            ],
                            "weight": 117.0
                        },
                        {
                            "qualifiers": [
                                {
                                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                                    "label": "large"
                                }
                            ],
                            "weight": 154.0
                        },
                        {
                            "qualifiers": [
                                {
                                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                                    "label": "small"
                                }
                            ],
                            "weight": 71.0
                        }
                    ]
                },
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                    "label": "Whole",
                    "weight": 111.62222222222222,
                    "qualified": [
                        {
                            "qualifiers": [
                                {
                                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                                    "label": "large"
                                }
                            ],
                            "weight": 154.0
                        },
                        {
                            "qualifiers": [
                                {
                                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                                    "label": "small"
                                }
                            ],
                            "weight": 71.0
                        },
                        {
                            "qualifiers": [
                                {
                                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                                    "label": "medium"
                                }
                            ],
                            "weight": 117.0
                        }
                    ]
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
                "foodId": "food_abbpzc5bzzdl96b38dpj0aac0dxl",
                "label": "WENDY's, French Fries",
                "nutrients": {
                    "ENERC_KCAL": 301.0,
                    "PROCNT": 3.73,
                    "FAT": 14.1,
                    "CHOCDF": 39.73,
                    "FIBTG": 4.0
                },
                "brand": "Wendy's",
                "category": "Generic foods",
                "categoryLabel": "food"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 146.6222222222222,
                    "qualified": [
                        {
                            "qualifiers": [
                                {
                                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                                    "label": "large"
                                }
                            ],
                            "weight": 184.0
                        },
                        {
                            "qualifiers": [
                                {
                                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                                    "label": "small"
                                }
                            ],
                            "weight": 113.0
                        },
                        {
                            "qualifiers": [
                                {
                                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium",
                                    "label": "medium"
                                }
                            ],
                            "weight": 142.0
                        }
                    ]
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
                "foodId": "food_bj6dnkeaxcmyxtbs7z8lxb29cc0b",
                "label": "APPLEBEE's, French Fries",
                "nutrients": {
                    "ENERC_KCAL": 290.0,
                    "PROCNT": 3.31,
                    "FAT": 13.17,
                    "CHOCDF": 39.5,
                    "FIBTG": 3.9
                },
                "brand": "Applebee's",
                "category": "Generic foods",
                "categoryLabel": "food"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 164.0
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
                "foodId": "food_adv1vnfaqqzzaaaody5ctbeqymd8",
                "label": "DENNY's, French Fries",
                "nutrients": {
                    "ENERC_KCAL": 282.0,
                    "PROCNT": 3.41,
                    "FAT": 14.13,
                    "CHOCDF": 35.2,
                    "FIBTG": 3.5
                },
                "brand": "Denny's",
                "category": "Generic foods",
                "categoryLabel": "food"
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 165.0
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
                "foodId": "food_bxcxxfubmwlzh7bzk3dazazw4z5v",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 250.50505050505052,
                    "PROCNT": 3.5353535353535355,
                    "FAT": 10.606060606060607,
                    "CHOCDF": 35.85858585858586,
                    "FIBTG": 1.0101010101010102
                },
                "brand": "Bob Evan's",
                "category": "Fast foods",
                "categoryLabel": "meal",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        "label": "Gram",
                        "quantity": 198.0
                    }
                ]
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 198.0
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
                "foodId": "food_bi1fla4abi3regad8qk82b74jvhy",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 236.5430389560098,
                    "PROCNT": 7.054792389916082,
                    "FAT": 15.769535930400654,
                    "CHOCDF": 21.579364957390368,
                    "FIBTG": 1.6599511505684899
                },
                "brand": "Bobby's Burger Palace",
                "category": "Fast foods",
                "categoryLabel": "meal",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
                        "label": "Ounce",
                        "quantity": 8.5
                    }
                ]
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 240.97094656250002
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
                "foodId": "food_b2rdwzia6iu9kgaqdo5qtb0w6mj1",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 311.5866638879603,
                    "PROCNT": 3.5273961949580412,
                    "CHOCDF": 43.504553071149175,
                    "FIBTG": 3.5273961949580412
                },
                "brand": "Burger Meister",
                "category": "Fast foods",
                "categoryLabel": "meal",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
                        "label": "Ounce",
                        "quantity": 6.0
                    }
                ]
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 170.09713875
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
                "foodId": "food_bw85g6sb85gzsfbtz6hxnag416c2",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 347.36842105263156,
                    "PROCNT": 3.1578947368421053,
                    "FAT": 23.157894736842103,
                    "CHOCDF": 29.473684210526315
                },
                "brand": "Captain D's Seafood",
                "category": "Fast foods",
                "categoryLabel": "meal",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_order",
                        "label": "Order",
                        "quantity": 1.0
                    },
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        "label": "Gram",
                        "quantity": 95.0
                    }
                ]
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_order",
                    "label": "Order",
                    "weight": 95.0
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
                "foodId": "food_aqpzw47bomvxqharz0gpobtyz2mg",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 258.6757209635897,
                    "PROCNT": 3.5273961949580412,
                    "FAT": 1.7636980974790206,
                    "CHOCDF": 36.44976068123309,
                    "FIBTG": 3.5273961949580412
                },
                "brand": "Chevys Fresh Mex",
                "category": "Fast foods",
                "categoryLabel": "meal",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
                        "label": "Ounce",
                        "quantity": 3.0
                    }
                ]
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 85.048569375
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
                "foodId": "food_b7nnrokada3gdzbpf7xbdbo0hly5",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 269.2307692307692,
                    "PROCNT": 2.8846153846153846,
                    "FAT": 14.423076923076923,
                    "CHOCDF": 38.46153846153846,
                    "FIBTG": 6.730769230769231
                },
                "brand": "Chicken Shack",
                "category": "Fast foods",
                "categoryLabel": "meal",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        "label": "Gram",
                        "quantity": 104.0
                    }
                ]
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 104.0
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
                "foodId": "food_apz7ywha6neebbao0yvwfa8yiqr8",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 284.1409691629956,
                    "PROCNT": 3.0837004405286343,
                    "FAT": 14.537444933920705,
                    "CHOCDF": 36.563876651982376,
                    "FIBTG": 2.643171806167401
                },
                "brand": "Chuck E. Cheese",
                "category": "Fast foods",
                "categoryLabel": "meal",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        "label": "Gram",
                        "quantity": 227.0
                    }
                ]
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 227.0
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
                "foodId": "food_bp3rmtgav0d33qandwcpobq4m8ir",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 235.15974633053608,
                    "PROCNT": 1.7636980974790206,
                    "FAT": 15.873282877311185,
                    "CHOCDF": 20.576477803921907,
                    "FIBTG": 2.3515974633053607
                },
                "brand": "Cowboy Chicken",
                "category": "Fast foods",
                "categoryLabel": "meal",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
                        "label": "Ounce",
                        "quantity": 6.0
                    }
                ]
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 170.09713875
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
                "foodId": "food_b3dh4frb3kr1fub71876cbb0203j",
                "label": "French Fries",
                "nutrients": {
                    "ENERC_KCAL": 307.2248393348113,
                    "PROCNT": 3.4136093259423474,
                    "FAT": 15.930176854397622,
                    "CHOCDF": 38.68757236067994,
                    "FIBTG": 2.2757395506282316
                },
                "brand": "Golden Chick",
                "category": "Fast foods",
                "categoryLabel": "meal",
                "servingSizes": [
                    {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
                        "label": "Ounce",
                        "quantity": 3.0999999046325684
                    }
                ]
            },
            "measures": [
                {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                    "label": "Serving",
                    "weight": 87.8835189838788
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


## Fluxul de date

În cadrul aplicației, utilizatorul final trebuie să introducă denumirea alimentului sau rețeta completă pentru care dorește să fie afișate informațiile nutriționale. <br/>
Dacă este introdus un aliment în primul cadran al aplicației, este trimis un request de tip GET către Food and Grocery Database API care oferă valori estimative pentru numărul de kilocalorii și cantitatea de macronutrienți (proteine, grăsimi, carbohidrați) afereți pentru 100g de produs. Răspunsul obținut este în format JSON cu structura prezentată anterior în descrierea API-ului. Prin intermediul butonului "Search" se inițiază o cerere, valoarea introdusă de utilizator se va utiliza ca parametru pentru API, iar răspunsul va fi prelucrat după cum urmează:



