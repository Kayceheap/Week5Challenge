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