var viewChoserList = document.getElementsByClassName('viewChoserBtns');
var btnInnerIconList = document.getElementsByClassName('btn-inner-icon');
var btnInnerTextList = document.getElementsByClassName('btn-inner-text');

function init() {
    for (let i = 0; i < viewChoserList.length; i++) {
        viewChoserList[i].style.top = String(200+100*i) + 'px';
        viewChoserList[i].onmouseenter = function() { expandButton(i); };
        viewChoserList[i].onmouseleave = function() { shrinkButton(i); };
        viewChoserList[i].onclick = function() { jumpToURL(i); };
    }
}

function expandButton(index) {
    viewChoserList[index].style.width = '260px';
    if (index===0) { btnInnerIconList[index].style.left = '45px'; };
    btnInnerIconList[index].style.left = '35px';
    setTimeout(()=>{
        btnInnerTextList[index].style.visibility = 'visible';
    }, 200);
}

function shrinkButton(index) {
    viewChoserList[index].style.width = '80px';
    btnInnerIconList[index].style.left = '23px';
    btnInnerTextList[index].style.visibility = 'hidden';
    setTimeout(()=>{
        btnInnerTextList[index].style.visibility = 'hidden';
    }, 200);
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