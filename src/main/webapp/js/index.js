var viewChoserList = document.getElementsByClassName('viewChoserBtns');
var btnInnerIconList = document.getElementsByClassName('btn-inner-icon');
var btnInnerTextList = document.getElementsByClassName('btn-inner-text');

function init() {
    for (let i = 0; i < viewChoserList.length; i++) {
        viewChoserList[i].style.left = String(370*i-200) + 'px';
        viewChoserList[i].onmouseenter = function() { btnHover(i); };
        viewChoserList[i].onmouseleave = function() { btnLeave(i); };
        viewChoserList[i].onclick = function() { jumpToURL(i); };
    }
}

function btnHover(index) {
    btnInnerTextList[index].style.color = '#67C23A';
    viewChoserList[index].style.border = '4px solid #67C23A';
    viewChoserList[index].style.width = '365px';
    viewChoserList[index].style.height = '650px';
    viewChoserList[index].style.left = String(370*index-200-10) + 'px';
    viewChoserList[index].style.top = '225px';
}

function btnLeave(index) {
    btnInnerTextList[index].style.color = '#606266';
    viewChoserList[index].style.border = '3px solid #606266';
    viewChoserList[index].style.width = '345px';
    viewChoserList[index].style.height = '600px';
    viewChoserList[index].style.left = String(370*index-200) + 'px';
    viewChoserList[index].style.top = '250px';
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