const cast = {
    "characters": [
        {
            "name": "John Snow",
            "shortCode": "game-of-throne",
            "actor": "Kit Harrington",
            "house": "Stark",
            "location": "The Wall"
        },
        {
            "name": "Mehedi Hassan Shovo",
            "shortCode": "mehedi",
            "actor": "Mehedi Hassan Shovo",
            "house": "Khulna",
            "location": "Khulna"
        },
        {
            "name": "MD. Rahim Uddin",
            "shortCode": "rahim",
            "actor": "MD. Rahim Uddin",
            "house": "Dhaka",
            "location": "Dhaka"
        },
        {
            "name": "Raihan Ahmed",
            "shortCode": "raihan",
            "actor": "Raihan Ahmed",
            "house": "Barisal",
            "location": "Barisal"
        },
        {
            "name": "Jashim Uddin",
            "shortCode": "jashim",
            "actor": "Jashim Uddin",
            "house": "Bogra",
            "location": "Bogra"
        }
       
    ]
}



$(document).ready(function() {
    var characterTemplate = $("#character-template").html();
    var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
    $(".character-list-container").html(compiledCharacterTemplate(cast.characters[0]));
});


