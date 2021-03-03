// Display date and time in header
function date_time() {
    now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    document.getElementById('currentDay').innerHTML = now;
    setTimeout(function () { date_time(); }, 1000);
}
date_time();

// Pseudocode for saving tasks:
// user enters/edits task and clicks 'save' button
// data is sent to localStorage
// data is retrieved from localStorage
// data is displayed on page and persists when page is reloaded

// Pseudocode for color-coding:
// user views time blocks
// current hour is red
// past hours are gray
// future hours are green