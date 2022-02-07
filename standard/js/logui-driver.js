document.addEventListener("DOMContentLoaded", function(){

    // When we get here, the page is ready for LogUI to be started.
    let prolificID;
    prolificID = sessionStorage.getItem('prolific-id') || null;
    let serp = sessionStorage.getItem('serp') || null;
    let task = sessionStorage.getItem('task') || null;

    if (!prolificID) {
        prolificID = extractProlificID();   
    }
        

    if (!prolificID & serp) {
        alert("NOOOOO");
        window.location = '/landing.html'; // Redirect if there is no ID.
    }

    // Set up the config object for this run.
    logUIConfigurationObject.applicationSpecificData.userID = prolificID;
    logUIConfigurationObject.applicationSpecificData.serp = serp;
    logUIConfigurationObject.applicationSpecificData.task = task;
    logUIConfigurationObject.logUIConfiguration.authorisationToken = 'eyJ0eXBlIjoibG9nVUktYXV0aG9yaXNhdGlvbi1vYmplY3QiLCJhcHBsaWNhdGlvbklEIjoiZDMxZmYyM2EtYzI4ZS00ZDczLWE2YTctZmExMzRhYmVkMzE1IiwiZmxpZ2h0SUQiOiI3YmRmZDJiNC03NjRjLTQ1YTItYmZjMi01NjYyNjExYjFjZWIifQ:1nHByV:CLvWdllTVg9pMJD2fnaoBBkaKrij8wI02xtDgM8L5zw';
    
    LogUI.init(logUIConfigurationObject);
});

// Example STOP of LogUI - just add the conditional and the stop() API call to wherever you need it to stop.
document.addEventListener("unload", function() {
    if (LogUI.isActive()) {
        LogUI.stop();
    }
})

// Adapted from https://stackoverflow.com/a/2091331
function extractProlificID() {
    var variable = 'prolificID';
    
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }

    return null;
}