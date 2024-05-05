// backgroundScript.js

// Listen for messages from content scripts
browser.runtime.onMessage.addListener(function(message) {
    if (message.type === "data_collection_notification") {
        // Display a notification to the user
        browser.notifications.create({
            type: "basic",
            title: "Data Collection Alert",
            message: "Your personal data is being collected by " + message.url,
            iconUrl: "icon.png"
        });
    }
});
