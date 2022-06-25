

// set time and date to display at top of page

var date = moment().format("YYYY-MM-DD");
$("#currentDay").text(date);


// setting up system to indicate past, present, future tasks
var showTime = function() {


for (i = 0; i <= 23; i++) {
    thisItem = i;
    if (thisTime == i) {
        $('#' + thisItem).addClass("present");
    }

    else if (thisTime < i) {
        $('#' + thisItem).addClass("future");
    }

    else if (thisTime > i) {
        $('#' + thisIime).addClass("past");
    }
}
}


// save function to store task in localStorage
$(document).ready(function () {

$(".saveBtn").on("click", function() {
    taskText = $(this).siblings("textarea").val();
    taskHour = $(this).siblings("textarea").attr("id");

    localStorage.setItem(taskHour, taskText);

//     task = {
//         hour: taskHour,
//         input: taskText,
//     }

// var info = JSON.parse(window.localStorage.getItem('task'));
// if (info === null) {
//     window.localStorage.setItem('task', JSON.stringify([{ hour: taskHour, input: taskText}]));
// }
// else {
//     info.push('task', JSON.stringify(info));
// }


})
});





// return info from localStorage
    $("#9 textarea").val(localStorage.getItem("9am"));
    $("#10 textarea").val(localStorage.getItem("10am"));
    $("#11 textarea").val(localStorage.getItem("11am"));
    $("#12 textarea").val(localStorage.getItem("12pm"));
    $("#1 textarea").val(localStorage.getItem("1pm"));
    $("#2 textarea").val(localStorage.getItem("2pm"));
    $("#3 textarea").val(localStorage.getItem("3pm"));
    $("#4 textarea").val(localStorage.getItem("4pm"));
    $("#5 textarea").val(localStorage.getItem("5pm"));


