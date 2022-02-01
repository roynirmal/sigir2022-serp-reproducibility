/* Ripped and adapted from http://jsfiddle.net/pGR3B/2/ */

document.addEventListener("DOMContentLoaded", function(){
    let scrollableComponents = document.getElementsByClassName('js-web-scrollable');

    for (let component of scrollableComponents) {
        
        initScrollableComponent(component);
    }
});

function initScrollableComponent(element) {
    for (let component of element.getElementsByTagName('span')) {
        // console.log("LOG", component.getElementsByTagName('a')[0])
        switch (component.className) {
            case 'scroll-controller left':
                component.getElementsByTagName('a')[0].addEventListener('click', scrollLeft);
                break;
            case 'scroll-controller right':
                component.getElementsByTagName('a')[0].addEventListener('click', scrollRight);
                break;
        }
    }
}

function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function getScrollableParent(target) {
    let ancestor = findAncestor(target, 'js-web-scrollable');

    if (ancestor) {
        return ancestor.getElementsByTagName('ul')[0];
    }

    return null;
}

function toggleScrollButtons(element) {
    let parent = findAncestor(element, 'js-web-scrollable');

    if (parent) {
        let children = parent.getElementsByTagName('span');

        for (let child of children) {
            if (child.className == 'scroll-controller left') {
                // console.log("LOG", element.scrollLeft)
                if (element.scrollLeft == 0) {
                    child.style.display = 'none';
                }
                else {
                    child.style.display = 'block';
                }
            }

            if (child.className == 'scroll-controller right') {
                if (element.scrollLeft == (element.scrollWidth - element.offsetWidth)) {
                    child.style.display = 'none';
                }
                else {
                    child.style.display = 'block';
                }
            }
        }
    }
}

function scrollLeft(event) {
    let container = getScrollableParent(event.target);
    sideScroll(container,'left', 10, 570, 20);
}

function scrollRight(event) {
    let container = getScrollableParent(event.target);
    sideScroll(container, 'right', 10, 570, 20);
}

/* Adapted from https://stackoverflow.com/questions/57866902/scroll-buttons-for-one-div-at-a-time */
function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;

    function doScrolling(){
        if (direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }

        toggleScrollButtons(element);
    }
    
    var slideTimer = setInterval(doScrolling, speed);
}