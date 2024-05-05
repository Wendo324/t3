// contentScript.js

// Add an event listener for form submission
document.addEventListener('submit', function(event) {
    // Check if the submitted form contains input fields
    const inputFields = event.target.querySelectorAll('input, textarea');
    if (inputFields.length > 0) {
        // Notify the user that their data is being collected
        browser.runtime.sendMessage({type: "data_collection_notification", url: window.location.href});
    }
});
