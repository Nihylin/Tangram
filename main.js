function ouvreMenu() {
    $("nav").addClass("menupresent")
}

function fermeMenu() {
    $("nav").removeClass("menupresent")
}

function maison() {
    resetStyle();
    $(".tangram").removeClass("lapin dromadaire requin bateau ours oie poisson chat desordre").addClass("maison")
    fermeMenu();
}

function lapin(){
resetStyle();
$(".tangram").removeClass("maison dromadaire requin bateau ours oie poisson chat desordre").addClass("lapin")
fermeMenu();
}

function dromadaire() {
    resetStyle();
    $(".tangram").removeClass("maison lapin requin bateau ours oie poisson chat desordre").addClass("dromadaire")
    fermeMenu();
}

function requin(){
resetStyle(); 
    $(".tangram").removeClass("maison lapin dromadaire bateau ours oie poisson chat desordre").addClass("requin")
    fermeMenu();
}

function bateau() {
    resetStyle();
    $(".tangram").removeClass("maison lapin requin dromadaire ours oie poisson chat desordre").addClass("bateau")
    fermeMenu();
}

function ours() {
    resetStyle();
    $(".tangram").removeClass("maison lapin dromadaire requin bateau oie poisson chat desordre").addClass("ours")
    fermeMenu();
}

function oie() {
    resetStyle();
    $(".tangram").removeClass("maison lapin dromadaire requin bateau ours poisson chat desordre").addClass("oie")
    fermeMenu();
}

function poisson() {
    resetStyle();
    $(".tangram").removeClass("maison lapin dromadaire requin bateau ours oie chat desordre").addClass("poisson")
    fermeMenu();
}

function chat() {
    resetStyle();
    $(".tangram").removeClass("maison lapin dromadaire requin bateau ours oie poisson desordre").addClass("chat")
    fermeMenu();
}

function reset() {
    $(".tangram").removeClass("maison lapin dromadaire requin bateau ours oie poisson chat");
    $(".cyanTriangle").removeAttr("style");
    $(".greenTriangle").removeAttr("style");
    $(".blueTriangle").removeAttr("style");
    $(".yellowSquare").removeAttr("style");
    $(".orangeTriangle").removeAttr("style");
    $(".redTriangle").removeAttr("style");
    $(".purplePara").removeAttr("style");
    fermeMenu();
}

function resetStyle() {
    $(".cyanTriangle").removeAttr("style");
    $(".greenTriangle").removeAttr("style");
    $(".blueTriangle").removeAttr("style");
    $(".yellowSquare").removeAttr("style");
    $(".orangeTriangle").removeAttr("style");
    $(".redTriangle").removeAttr("style");
    $(".purplePara").removeAttr("style");
}

function random() {
    $(".tangram").removeClass("maison lapin dromadaire requin bateau ours oie poisson chat");
    fermeMenu();

    var cyanRandX = Math.random() * (-150 - 150) + 150;
    var cyanRandY = Math.random() * (-150 - 150) + 150;
    var cyanRandAngle = Math.random() * (0 - 360) + 360;
    var cyan = document.querySelector('.cyanTriangle');
    cyan.style.setProperty('--cyan-posx', cyanRandX + 'px');
    cyan.style.setProperty('--cyan-posy', cyanRandY + 'px');
    cyan.style.setProperty('--cyan-angle', cyanRandAngle + 'deg');

    var greenRandX = Math.random() * (-150 - 150) + 150;
    var greenRandY = Math.random() * (-150 - 150) + 150;
    var greenRandAngle = Math.random() * (0 - 360) + 360;
    var green = document.querySelector('.greenTriangle');
    green.style.setProperty('--green-posx', greenRandX + 'px');
    green.style.setProperty('--green-posy', greenRandY + 'px');
    green.style.setProperty('--green-angle', greenRandAngle + 'deg');

    var blueRandX = Math.random() * (-150 - 150) + 150;
    var blueRandY = Math.random() * (-150 - 150) + 150;
    var blueRandAngle = Math.random() * (0 - 360) + 360;
    var blue = document.querySelector('.blueTriangle');
    blue.style.setProperty('--blue-posx', blueRandX + 'px');
    blue.style.setProperty('--blue-posy', blueRandY + 'px');
    blue.style.setProperty('--blue-angle', blueRandAngle + 'deg');

    var yellowRandX = Math.random() * (-150 - 150) + 150;
    var yellowRandY = Math.random() * (-150 - 150) + 150;
    var yellowRandAngle = Math.random() * (0 - 360) + 360;
    var yellow = document.querySelector('.yellowSquare');
    yellow.style.setProperty('--yellow-posx', yellowRandX + 'px');
    yellow.style.setProperty('--yellow-posy', yellowRandY + 'px');
    yellow.style.setProperty('--yellow-angle', yellowRandAngle + 'deg');

    var orangeRandX = Math.random() * (-150 - 150) + 150;
    var orangeRandY = Math.random() * (-150 - 150) + 150;
    var orangeRandAngle = Math.random() * (0 - 360) + 360;
    var orange = document.querySelector('.orangeTriangle');
    orange.style.setProperty('--orange-posx', orangeRandX + 'px');
    orange.style.setProperty('--orange-posy', orangeRandY + 'px');
    orange.style.setProperty('--orange-angle', orangeRandAngle + 'deg');

    var redRandX = Math.random() * (-150 - 150) + 150;
    var redRandY = Math.random() * (-150 - 150) + 150;
    var redRandAngle = Math.random() * (0 - 360) + 360;
    var red = document.querySelector('.redTriangle');
    red.style.setProperty('--red-posx', redRandX + 'px');
    red.style.setProperty('--red-posy', redRandY + 'px');
    red.style.setProperty('--red-angle', redRandAngle + 'deg');

    var purpleRandX = Math.random() * (-150 - 150) + 150;
    var purpleRandY = Math.random() * (-150 - 150) + 150;
    var purpleRandAngle = Math.random() * (0 - 360) + 360;
    var purple = document.querySelector('.purplePara');
    purple.style.setProperty('--purple-posx', purpleRandX + 'px');
    purple.style.setProperty('--purple-posy', purpleRandY + 'px');
    purple.style.setProperty('--purple-angle', purpleRandAngle + 'deg');
}


function dark() {
    $("body").toggleClass("dark");
};

const color = document.getElementById('theme');
const formes = document.querySelectorAll("#forme");

function hexToHSL(H, incrementation) {
    // Convert hex to RGB first
    let r = 0,
        g = 0,
        b = 0;
    if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return "hsl(" + (h + incrementation) + "," + s + "%," + l + "%)";
}




let colorwell;
let defaultColor = '#6ED0F7';
window.addEventListener("load", startup, false);

function startup() {

    colorwell = document.querySelector("#theme");
    colorwell.value = defaultColor;
    colorwell.addEventListener("input", updateFirst, false);
    colorwell.addEventListener("change", updateAll, false);

}

function updateFirst(e) {


    if (formes) {

        let i = 0;
        formes.forEach(function (f) {

            f.style.setProperty("--color-elem", hexToHSL(e.target.value, i));
            i += 30;
        });
    }
}

function updateAll(e) {
    let i = 0;
    formes.forEach(function (f) {

        f.style.setProperty("--color-elem", hexToHSL(e.target.value, i));
        i += 30;
    });
}


(function (document) {
    // Enable ECMAScript 5 strict mode within this function:
    'use strict';

    // Obtain a node list of all elements that have class="draggable":
    let drag = document.getElementsByClassName('forme'),
        draggableCount = drag.length, // cache the length
        i; // iterator placeholder

    // This function initializes the drag of an element where an
    // event ("mousedown") has occurred:
    function startDrag(evt) {

        // The element's position is based on its top left corner,
        // but the mouse coordinates are inside of it, so we need
        // to calculate the positioning difference:
        const diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this; // "this" refers to the current element,
        // let's keep it in cache for later use.

        // moveAlong places the current element (referenced by "that")
        // according to the current cursor position:
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }

        // stopDrag removes event listeners from the element,
        // thus stopping the drag:
        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }

        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }

    // Now that all the variables and functions are created,
    // we can go on and make the elements draggable by assigning
    // a "startDrag" function to a "mousedown" event that occurs
    // on those elements:
    for (i = 0; i < draggableCount; i += 1) {
        drag[i].addEventListener('mousedown', startDrag);
    }
}(document));