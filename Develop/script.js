// Initializing variables

var currentTime = moment();

var timeCounter = moment("9 am", "hh A");

var todayDate = moment().format("MM-DD-YYYY");


// Display date and time in header
function date_time() {
    now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    document.getElementById('currentDay').innerHTML = now;
    setTimeout(function () { date_time(); }, 1000);
}
date_time();

// Function to clear storage on each new day
$(document).ready(function() {
    var storedDate = localStorage.getItem("currentDate");
    if (storedDate != todayDate) {
        localStorage.clear();
    }
    displayStorage();
});



// Function to assign time to each span
$(".time").each(function(){
    $(this).text(timeCounter.format("hh A"));
    timeCounter = timeCounter.add(1, "hours");
    var spanTime = moment($(this).text(), "hh A");
    
    if (spanTime.hour() < currentTime.hour()) {
        $(this).next("input").addClass("past");
    } else if (spanTime.hour() === currentTime.hour()) {
            $(this).next("input").addClass("present");
    } else { 
        $(this).next("input").addClass("future");
    }

});

// Function to store in local storage and display
$(".save").on("click", function() {
    var timeSlot = $(this).prev("input").prev("span")[0].outerText;
    var myEvent = $(this).prev("input")[0].value;
    localStorage.setItem(timeSlot, myEvent);
    var currentDate = moment().format("MM-DD-YYYY");
    localStorage.setItem("currentDate", currentDate);
    console.log(currentDate);
});



   function displayStorage() { 
    $("span").each(function(){
    var displayEvent = localStorage.getItem($(this)[0].outerText);
     if (displayEvent !=null) {
        $(this).next("input")[0].value = displayEvent;
     } else { 
         $(this).next("input")[0].value = "";
    
     }
   });
}
displayStorage();