document.addEventListener("DOMContentLoaded", function() 
{
    let attackSelect = document.getElementById("attack-select");

    // Handle dropdown change
    attackSelect.addEventListener("change", function() 
    {
        window.location.href = attackSelect.value;
    });
});
