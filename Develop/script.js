// Display date and time in header
function date_time() {
    now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    document.getElementById('currentDay').innerHTML = now;
    setTimeout(function () { date_time(); }, 1000);
}
date_time();
// Edit task ** need to fix row width ** 
//$(".col-11").on("click", "p", function () {
//     var text = $(this)
//         .text()
//         .trim();
//         console.log(text);

//     var textInput = $("<textarea>")
//         .addClass("event-edit")
//         .val(text);
//         $(this).replaceWith(textInput);
//         textInput.trigger("focus");

// });

// let page = document.querySelector('.container');
// let timeArr = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
// function timeBlock(arr) {
//     for ( let i = 0; i < arr.length; i++) {
//         let div = document.createElement('div');
//         div.setAttribute('class', 'gum')
//         let divText = document.createTextNode(arr[i]);
//         let form = document.createElement('input');
//         div.appendChild(divText);
//         div.appendChild(form)
//         page.appendChild(div)
//     }
// }
// timeBlock(timeArr);