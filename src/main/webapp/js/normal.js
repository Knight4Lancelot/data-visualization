var viewChoser = document.getElementsByClassName('ViewChoserBtns');

function init() {
    for (var i = 0; i < viewChoser.length; i++) {
        viewChoser[i].style.top = String(100+150*i) + 'px';
    }
}

function jumpToURL(index) {
    switch(index) {
        case 1: 
            document.location = "http://localhost:8080/bar";
            break;
        case 2: 
            document.location = "http://localhost:8080/radar";
            break;
        case 3: 
            document.location = "http://localhost:8080/sunfigure";
            break;
        case 4: 
            document.location = "http://localhost:8080/pictogram";
            break;
        case 5: 
            document.location = "http://localhost:8080/scatterplot";
            break;
        default: 
            document.location = "http://localhost:8080";
            break;
    }
}