/*const cast = {
    


     normal array string
     characters: [
        "John Snow",
            "game-of-throne",
            "Kit Harrington",
            "Stark",
            "The Wall"
    ] 
}
*/



$(document).ready(function() {
    var characterTemplate = $("#character-template").html();
    var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

    $.ajax("./data/cast.json").done(function(cast) {
        $(".character-list-container").html(compiledCharacterTemplate(cast));
    });
});
