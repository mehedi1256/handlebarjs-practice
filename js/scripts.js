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


/**
 * Custom Helpers in Handlebar js
 * @param(helperName, callback_function)
 */
Handlebars.registerHelper("formatName", function(prop1, prop2) {
    return new Handlebars.SafeString("Hello my name is:<strong>" + prop1 + "</strong> my house name is: <strong>" + prop2 + "</strong>");
});
/**
 * custom helpers for get phone number
 */
Handlebars.registerHelper("formatPhoneNumber", function(property) {
    if(property) {
        var phone = property.toString();
        return "(+088)" + 0 + phone.substr(0, 2) + "-" + phone.substr(2);
    }
});


/**
 * Block Helper
 * @param(helper-name, callbackfunc)
 */

Handlebars.registerHelper("makeBold", function(options) {
    return new Handlebars.SafeString("<strong>" + options.fn(this) + "</strong>");
});


/**
 * Block helper
 * @param(helper-name, callbackfunc)
 */

Handlebars.registerHelper("toLower", function(options) {
    return options.fn(this).toLowerCase();
});

$(document).ready(function() {
    var characterTemplate = $("#character-template").html();
    var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

    $.ajax("./data/cast.json").done(function(cast) {
        $(".character-list-container").html(compiledCharacterTemplate(cast));
    });

    $(".character-list-container").on("click", ".view-details", function(e) {
        e.preventDefault();
        console.log("Button Click!");
    });

    
});
