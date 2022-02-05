let viewedList = window.sessionStorage.getItem('viewedList');

let taskPageMapping = {
    'task1': 'page1.html',
    'task2': 'page2.html',
    'task3': 'page3.html',
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