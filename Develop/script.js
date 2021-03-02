// Display date and time in header
function date_time() {
    now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    document.getElementById('currentDay').innerHTML = now;
    setTimeout(function () { date_time(); }, 1000);
}
date_time();
// Edit task ** need to fix row width ** 
$(".col-11").on("click", "p", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("event-edit")
        .val(text);
        $(this).replaceWith(textInput);

});
