const cast = {
    "characters": [
        {
            "name": "John Snow",
            "shortCode": "game-of-throne",
            "actor": "Kit Harrington",
            "house": "Stark",
            // "location": "The Wall"
            "location": undefined
        },
        {
            "name": "Mehedi Hassan Shovo",
            "shortCode": "game-of-throne1",
            "actor": "Mehedi Hassan Shovo",
            "house": "Khulna",
            // "location": "Khulna"
            "location": null
        },
        {
            "name": "MD. Rahim Uddin",
            "shortCode": "game-of-throne2",
            "actor": "MD. Rahim Uddin",
            "house": "Dhaka",
            // "location": "Dhaka"
            "location": false
        },
        {
            "name": "Raihan Ahmed",
            "shortCode": "game-of-throne3",
            "actor": "Raihan Ahmed",
            "house": "Barisal",
            "location": "Barisal"
        },
        {
            "name": "Jashim Uddin",
            "shortCode": "game-of-throne4",
            "actor": "Jashim Uddin",
            "house": "Bogra",
            "location": "Bogra"
        }
       
    ]


    // normal array string
   /*  characters: [
        "John Snow",
            "game-of-throne",
            "Kit Harrington",
            "Stark",
            "The Wall"
    ] */
}



$(document).ready(function() {
    var characterTemplate = $("#character-template").html();
    var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
    $(".character-list-container").html(compiledCharacterTemplate(cast));
});
