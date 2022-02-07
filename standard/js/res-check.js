document.addEventListener("DOMContentLoaded", function(){
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let header = document.querySelector('h1');
    let message = document.querySelector('span');

    let refreshLink = null;
    let launchLink = null;

    if (screenWidth < 1920 || screenHeight < 1080) {
        header.innerText = "Insufficient Screen Resolution";
        message.innerHTML = `
            <p>We've detected that your display's resolution is currently set to <strong>` + screenWidth + `x` + screenHeight + `</strong>.</p>
            <p>To take part in this study, we require you to use a display with a display resolution of <strong>at least 1920x1080</strong>.</p>
            <p>If you wish to continue, please adjust your display settings if your device supports a resolution of at least 1920x1080. You can then <strong><a id="refresh">click here to refresh this page</a></strong> to retry.</p>
            <p>If your device does not support at least 1920x1080, you cannot participate in this study. Thank you for your interest!</p>
        `;

        refreshLink = document.querySelector('a#refresh');
    }
    else {
        header.innerText = "Launch the Study";
        message.innerHTML = `
            <p>Our study requires you to launch it in a new popup window.</p>
            <p>Please <strong><a id="launch">click here</a></strong> to launch the study. It will open in a new popup of a certain size.</p>
            <p>Please try not to resize this popup for the duration of the experiment; we want to keep the size as consistent as possible.</p>
        `;

        launchLink = document.querySelector('a#launch');
    }

    if (refreshLink) {
        refreshLink.addEventListener('click', function() {
            window.location.reload();
        });
    }

    if (launchLink) {
        launchLink.addEventListener('click', function() {
            window.open('landing.html', 'Search Experiment', 'innerWidth=1200,innerHeight=900,screenx=50,screeny=50,popup=yes,resizable=false');
        });
    }

});