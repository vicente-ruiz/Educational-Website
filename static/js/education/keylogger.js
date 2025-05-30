// Keylogger capturing anywhere on the page
document.addEventListener("DOMContentLoaded", function() 
{
    let displayBox = document.getElementById("keystrokeDisplay");

    document.addEventListener("keypress", function(event) 
    {
        // Append the captured keystroke to the textarea
        displayBox.value += event.key;
    });
});
