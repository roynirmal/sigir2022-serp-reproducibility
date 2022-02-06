let viewedList = window.sessionStorage.getItem('viewedList');

let taskPageMapping = {
    'inf_an_one': 'http://lambda2.ewi.tudelft.nl/inf_an_one/template.html',
    'inf_an_two': 'http://lambda2.ewi.tudelft.nl/inf_an_two/template.html',
    'inf_an_three': 'http://lambda2.ewi.tudelft.nl/inf_an_three/template.html',
    'inf_rem_one': 'http://lambda2.ewi.tudelft.nl/inf_rem_one/template.html',
    'inf_rem_two': 'http://lambda2.ewi.tudelft.nl/inf_rem_two/template.html',
    'inf_rem_three': 'http://lambda2.ewi.tudelft.nl/inf_rem_three/template.html',
    'inf_und_one': 'http://lambda2.ewi.tudelft.nl/inf_und_one/template.html',
    'inf_und_two': 'http://lambda2.ewi.tudelft.nl/inf_und_two/template.html',
    'inf_und_three': 'http://lambda2.ewi.tudelft.nl/inf_und_three/template.html',
    'nav_one': 'http://lambda2.ewi.tudelft.nl/nav_one/template.html',
    'nav_two': 'http://lambda2.ewi.tudelft.nl/nav_two/template.html',
    'nav_three': 'http://lambda2.ewi.tudelft.nl/nav_three/template.html',
};

document.addEventListener("DOMContentLoaded", function(){

    if (viewedList) {
        viewedList = JSON.parse(viewedList);
    
        if (viewedList.includes(currentPage)) {
            console.log("This task exists in the list!");
    
            if (viewedList.indexOf(currentPage) == (viewedList.length - 1)) {
                console.log("but it is the most recent, so we let this one go.");
            }
            else {
                console.log('this is an older task that they have already done, so we need to kick them');
                window.location = taskPageMapping[viewedList[viewedList.length - 1]];
            }
        }
        else {
            viewedList.push(currentPage);
            console.log("Added new item to list");
    
            window.sessionStorage.setItem('viewedList', JSON.stringify(viewedList));
        }
    }
    else {
        console.log("No list!");
    
        viewedList = [currentPage];
    
        window.sessionStorage.setItem('viewedList', JSON.stringify(viewedList));
    }

});