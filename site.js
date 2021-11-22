var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMM YYYY"));

var checkTime = function () {
    $(".time").each(function () {
        var hour = $(this).text();
        hour = hour.replace("AM", "");
        hour = hour.replace("PM", "");
        if (hour == 1 || hour == 2 || hour == 3 || hour == 4 || hour == 5) {
            hour = Number.parseInt(hour) + 12;

        }
        var currentHour = moment().hour();
        $(this).next().removeClass("present past future");
        if (hour == currentHour) {
            $(this).next().addClass("present");
        }
        else if (hour < currentHour) {
            $(this).next().addClass("past");
        }
        else {
            $(this).next().addClass("future");
        }

    })
}
$(".row").on("click", "p", function (event) {
    var textArea = $("<textarea>");
    textArea.val($(this).text());
    $(this).replaceWith(textArea);
    textArea.trigger("focus")

    textArea.on("blur", function (event) {
        var textArea = $(event.target);
        var p = $("<p>");
        p.text(textArea.val());
        $(this).replaceWith(p);
    })

})

$(".row").on("click", "button", function (event) {
    var timeKey = ($(event.target).closest(".row").children().first().text());
    var timeText = ($(event.target).closest(".row").children().first().next().text());
    window.localStorage.setItem(timeKey, timeText);
})


$(".time").each(function (event) {
    var timeKey = ($(this).text());
    var timeText = window.localStorage.getItem(timeKey);
    ($(this).next().children().first().text(timeText));
    console.log(timeText)
})


setInterval(checkTime, 1000 * 60 );

checkTime();