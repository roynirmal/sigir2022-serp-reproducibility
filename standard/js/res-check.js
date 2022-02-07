document.addEventListener("DOMContentLoaded", function(){
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    let header = document.querySelector('h1');
    let message = document.querySelector('span');
    // const browser = Bowser.getParser(window.navigator.userAgent);
    // const isValidBrowser = browser.satisfies({
    // // or in general
    // chrome: ">=47",
    // firefox: ">=50"
    // });

    // if(!isValidBrowser){
    //    return (<div>
    //        <h3>Your browser does not meet our requriement:
    //            Google Chrome version 47 (or higher) and Mozilla Firefox version 50 (or higher).
    //            Please upgrade your browser to take part in our study</h3>
    //    </div>)
    // } 

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
        window.location = 'landing.html';
    }

});