// popup.js

// Function to display notifications in the popup
function displayNotification(message) {
    const notificationsDiv = document.getElementById('notifications');
    const notificationElement = document.createElement('div');
    notificationElement.textContent = message;
    notificationsDiv.appendChild(notificationElement);
}

// Listen for messages from the background script
browser.runtime.onMessage.addListener(function(message) {
    if (message.type === "data_collection_notification") {
        // Display the notification in the popup
        displayNotification("Your personal data is being collected by " + message.url);
    }
});
