document.addEventListener("DOMContentLoaded", function () 
{
    const footnotes = document.querySelectorAll(".footnote");

    footnotes.forEach(footnote => 
    {
        footnote.addEventListener("click", function (event) 
        {
            event.preventDefault();
            const footnoteId = this.dataset.footnote; // Get footnote ID from data-footnote attribute
            const footnotePopup = document.getElementById(footnoteId);

            // Close any open popups before opening a new one
            document.querySelectorAll(".footnote-popup").forEach(popup => popup.style.display = "none");

            if (footnotePopup) 
            {
                // Position the popup near the clicked footnote
                const rect = this.getBoundingClientRect();
                footnotePopup.style.left = `${rect.left + window.scrollX}px`;
                footnotePopup.style.top = `${rect.bottom + window.scrollY + 5}px`;
                footnotePopup.style.display = "block";
            }
        });
    });

    // Close the popup when clicking the close button
    document.querySelectorAll(".close-btn").forEach(button => 
    {
        button.addEventListener("click", function () 
        {
            this.parentElement.parentElement.style.display = "none";
        });
    });

    // Close the popup when clicking anywhere outside
    document.addEventListener("click", function (event) 
    {
        if (!event.target.closest(".footnote-popup") && !event.target.closest(".footnote")) 
        {
            document.querySelectorAll(".footnote-popup").forEach(popup => popup.style.display = "none");
        }
    });
});
