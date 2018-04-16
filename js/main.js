$(document).ready(function () {
    $(selector).click(function (e) { 
        e.preventDefault();
        
    });
    $(selector).after(content);
    $(selector).submit(function (e) { 
        e.preventDefault();
        
    });
    $(selector).attr(attributeName, value);
    $(selector).attr(attributeName);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "url",
        data: "data",
        success: function (response) {
            
        }
    });
});

