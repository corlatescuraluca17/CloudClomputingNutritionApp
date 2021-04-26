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



