var LightBlue = "rgba(206,233,237, 0.5)";
var DarkBlue = "rgba(125,197,205,0.5)";

var DarkPink = "rgba(245,212,196, 0.5)";
var LightPink = "rgba(242,225,216, 0.5)";

var DarkGreen = "rgba(191,232,185, 0.5)";
var LightGreen = "rgba(210,237,211, 0.5)";

class CanvCircle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
}

function drawOnCategories() {
    // OUR INCOMES
    // Get a reference to the canvas object
    var canvas = document.getElementById('categoriesCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    var BigCircle = new CanvCircle(canvas.offsetHeight/2, canvas.offsetHeight/2, canvas.offsetHeight/2, LightBlue)
    var PaperBigCircle = new paper.Path.Circle(new paper.Point(BigCircle.x, BigCircle.y), BigCircle.radius);
    PaperBigCircle.fillColor = BigCircle.color

    var SmallCircle = new CanvCircle(BigCircle.x + 20, BigCircle.y, 65, DarkBlue)
    if (window.matchMedia("(max-width: 400px)").matches) {
        SmallCircle.radius = 25;
    }
    var PaperSmallCircle = new paper.Path.Circle(new paper.Point(SmallCircle.x, SmallCircle.y), SmallCircle.radius);
    PaperSmallCircle.fillColor = SmallCircle.color

    paper.view.draw();
}
function drawOnCategoriesBigRightCurve() {
    // OUR INCOMES
    // Get a reference to the canvas object
    var canvas = document.getElementById('categoriesBigCanvasRight');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    // big right curve

    // darkblue path
    var path = new paper.Path();
    path.fillColor = DarkBlue;
    if (window.matchMedia("(max-width: 400px)").matches) {
        console.log('mobile')

        path.add(new paper.Point(canvas.offsetWidth, 0)); //1
        path.add(new paper.Point(canvas.offsetWidth - 125, 30));//2
        path.add(new paper.Point(40, 90));//3
        path.add(new paper.Point(20, 140));//4
        path.add(new paper.Point(40, 190));//5
        path.add(new paper.Point(canvas.offsetWidth/2 - 20, canvas.offsetHeight/2 + 20));//6
        path.add(new paper.Point(canvas.offsetWidth/2, canvas.offsetHeight - 115));//7
        path.add(new paper.Point(canvas.offsetWidth/2 - 10, canvas.offsetHeight - 55));//8
        path.add(new paper.Point(canvas.offsetWidth/2 + 50, canvas.offsetHeight - 10));//9
        path.add(new paper.Point(canvas.offsetWidth, canvas.offsetHeight));//10
        path.add(new paper.Point(canvas.offsetWidth, canvas.offsetHeight/2));//11

        // path.closed = true;
        // path.selected = true;
        path.smooth()
    } else {
        path.add(new paper.Point(canvas.offsetWidth, 20)); //1
        path.add(new paper.Point(canvas.offsetWidth - 175, 30));//2
        path.add(new paper.Point(30, 140));//3
        path.add(new paper.Point(20, 235));//4
        path.add(new paper.Point(60, 310));//5
        path.add(new paper.Point(canvas.offsetWidth / 2 - 70, 360))//7
        path.add(new paper.Point(canvas.offsetWidth / 2 - 30, 410))//8
        path.add(new paper.Point(canvas.offsetWidth / 2 - 5, 450))//10
        path.add(new paper.Point(canvas.offsetWidth / 2 - 15, 520))//11
        path.add(new paper.Point(canvas.offsetWidth - 230, canvas.offsetHeight - 300));//12
        path.add(new paper.Point(canvas.offsetWidth - 230, canvas.offsetHeight - 150));//13
        path.add(new paper.Point(canvas.offsetWidth - 150, canvas.offsetHeight - 50));//14
        path.add(new paper.Point(canvas.offsetWidth - 100, canvas.offsetHeight - 20));//15
        path.add(new paper.Point(canvas.offsetWidth - 50, canvas.offsetHeight - 10));//16
        path.add(new paper.Point(canvas.offsetWidth, canvas.offsetHeight));//17
        // path.closed = true;
        // path.selected = true;
        path.smooth()

        // lightblue path
        var path1 = new paper.Path();
        path1.fillColor = LightBlue;
        path1.add(new paper.Point(canvas.offsetWidth, 5)); //1
        path1.add(new paper.Point(canvas.offsetWidth - 200, 25));//2
        path1.add(new paper.Point(20, 135));//3
        path1.add(new paper.Point(20, 270));//5
        path1.add(new paper.Point(canvas.offsetWidth / 2 - 100, 360))//10
        path1.add(new paper.Point(canvas.offsetWidth / 2 - 60, 410))//11
        path1.add(new paper.Point(canvas.offsetWidth / 2 - 45, 450))//12
        path1.add(new paper.Point(canvas.offsetWidth / 2 - 45, 520))//13
        path1.add(new paper.Point(canvas.offsetWidth - 250, canvas.offsetHeight - 300));//14
        path1.add(new paper.Point(canvas.offsetWidth - 240, canvas.offsetHeight - 150));//15
        path1.add(new paper.Point(canvas.offsetWidth - 155, canvas.offsetHeight - 50));//16
        path1.add(new paper.Point(canvas.offsetWidth - 100, canvas.offsetHeight - 15));//17
        path1.add(new paper.Point(canvas.offsetWidth - 60, canvas.offsetHeight - 5));//18
        path1.add(new paper.Point(canvas.offsetWidth, canvas.offsetHeight));//19
        // path.closed = true;
        // path1.selected = true;
        path1.smooth()
        // path1.selected = true;
    }
    paper.view.draw();
}
function drawOnCategoriesBigLeftCurve() {
    // OUR INCOMES
    // Get a reference to the canvas object
    var canvas = document.getElementById('categoriesBigCanvasLeft');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    // big left curve
    // darkblue path
    var path = new paper.Path();
    path.fillColor = DarkBlue;

    if (window.matchMedia("(max-width: 400px)").matches) {

    } else {
        path.add(new paper.Point(0, 75 + 35)); //1
        path.add(new paper.Point(100, 80 + 50)); //2
        path.add(new paper.Point(150, 250)); //3
        path.add(new paper.Point(225, 375)); //4
        path.add(new paper.Point(300, 450)); //5
        path.add(new paper.Point(375, 475)); //6
        path.add(new paper.Point(450, 480)); //6
        path.add(new paper.Point(510, 510)); //7
        path.add(new paper.Point(540, 600)); //10
        path.add(new paper.Point(475, 725)); //11
        path.add(new paper.Point(285, 830)); //12
        path.add(new paper.Point(200, 900)); //13
        path.add(new paper.Point(125, 1075)); //14
        path.add(new paper.Point(0, 1125)); //15
        path.add(new paper.Point(0, 500)); //16

    }
    // path.closed = true;
    // path.selected = true;
    path.smooth()

    // lightblue path
    var path1 = new paper.Path();
    path1.fillColor = LightBlue;

    if (window.matchMedia("(max-width: 400px)").matches) {
        path1.add(new paper.Point(0, 0)); //1

        path1.add(new paper.Point(canvas.offsetWidth/2, canvas.offsetHeight/2 - 100)); //2

        path1.add(new paper.Point(canvas.offsetWidth, canvas.offsetHeight/2)); //3

        path1.add(new paper.Point(canvas.offsetWidth/2, canvas.offsetHeight/2 + 100)); //4

        path1.add(new paper.Point(0, canvas.offsetHeight)); //6
    } else {
        path1.add(new paper.Point(0, 75 + 15)); //1
        path1.add(new paper.Point(115, 80 + 35)); //2
        path1.add(new paper.Point(170, 250)); //3

        path1.add(new paper.Point(235, 415)); //4
        path1.add(new paper.Point(300, 480)); //5
        path1.add(new paper.Point(375, 495)); //6

        path1.add(new paper.Point(450, 490)); //6
        path1.add(new paper.Point(530, 510)); //7
        path1.add(new paper.Point(560, 600)); //10
        path1.add(new paper.Point(500, 725)); //11

        path1.add(new paper.Point(310, 840)); //12
        path1.add(new paper.Point(225, 900)); //13
        path1.add(new paper.Point(140, 1075)); //14
        path1.add(new paper.Point(0, 1175)); //15
        path1.add(new paper.Point(0, 500)); //16
    }
    path1.smooth()
    // path1.selected = true;
    paper.view.draw();
}

function drawOnIncomes() {
    // OUR INCOMES
    // Get a reference to the canvas object
    var canvas = document.getElementById('incomesCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    var BigCircle = new CanvCircle(canvas.offsetHeight/2, canvas.offsetHeight/2, canvas.offsetHeight/2, LightPink)
    var PaperBigCircle = new paper.Path.Circle(new paper.Point(BigCircle.x, BigCircle.y), BigCircle.radius);
    PaperBigCircle.fillColor = BigCircle.color

    var SmallCircle = new CanvCircle(BigCircle.x, BigCircle.y - 40, 125, DarkPink)
    var PaperSmallCircle = new paper.Path.Circle(new paper.Point(SmallCircle.x, SmallCircle.y), SmallCircle.radius);
    PaperSmallCircle.fillColor = SmallCircle.color

    paper.view.draw();
}

function drawOnChooseUsBigLeftCurve() {
    // OUR INCOMES
    // Get a reference to the canvas object
    var canvas = document.getElementById('choose-usBigCanvasLeft');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    // big left curve
    // darkblue path
    var path = new paper.Path();
    path.fillColor = LightPink;
    path.add(new paper.Point(0, 25)); //1
    path.add(new paper.Point(220, 85)); //2
    path.add(new paper.Point(370, 210)); //3
    path.add(new paper.Point(340, 420)); //4
    path.add(new paper.Point(120, 570)); //5
    path.add(new paper.Point(60, 760)); //6
    path.add(new paper.Point(80, 950)); //7
    path.add(new paper.Point(0, canvas.offsetHeight - 20)); //8
    path.add(new paper.Point(0, canvas.offsetHeight/2)); //8
    // path.closed = true;
    // path.selected = true;
    path.smooth()

    // lightblue path
    var path1 = new paper.Path();
    path1.fillColor = DarkPink;
    path1.add(new paper.Point(0, 100)); //0

    path1.add(new paper.Point(0, 10)); //1
    path1.add(new paper.Point(215, 105)); //2
    path1.add(new paper.Point(350, 250)); //3
    path1.add(new paper.Point(300, 375)); //4
    path1.add(new paper.Point(125, 450)); //5
    path1.add(new paper.Point(25, 570)); //6
    path1.add(new paper.Point(45, 760)); //7
    path1.add(new paper.Point(80, 950)); //8

    path1.add(new paper.Point(0, canvas.offsetHeight - 50)); //9

    path1.smooth()
    // path1.selected = true;
    paper.view.draw();
}

function drawOurWorks() {
    // OUR INCOMES
    // Get a reference to the canvas object
    var canvas = document.getElementById('ourWorksCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    var BigCircle = new CanvCircle(canvas.offsetHeight/2, canvas.offsetHeight/2, canvas.offsetHeight/2, LightGreen)
    var PaperBigCircle = new paper.Path.Circle(new paper.Point(BigCircle.x, BigCircle.y), BigCircle.radius);
    PaperBigCircle.fillColor = BigCircle.color

    var SmallCircle = new CanvCircle(BigCircle.x - 10, BigCircle.y - 20, 120, DarkGreen)
    var PaperSmallCircle = new paper.Path.Circle(new paper.Point(SmallCircle.x, SmallCircle.y), SmallCircle.radius);
    PaperSmallCircle.fillColor = SmallCircle.color

    paper.view.draw();
}

function drawOnOurContactsBigRightCurve() {
    // OUR INCOMES
    // Get a reference to the canvas object
    var canvas = document.getElementById('our-contactsBigCanvasRight');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    // big left curve
    // darkblue path
    var path = new paper.Path();
    path.fillColor = LightGreen;
    path.add(new paper.Point(canvas.offsetWidth, 25)); //1
    path.add(new paper.Point(canvas.offsetWidth - 120, 200)); //2
    path.add(new paper.Point(canvas.offsetWidth - 100, 400)); //3
    path.add(new paper.Point(canvas.offsetWidth/2 + 75, 535)); //4
    path.add(new paper.Point(100, 625)); //5
    path.add(new paper.Point(30, 875)); //6
    path.add(new paper.Point(canvas.offsetWidth/2 - 75, 1080)); //7
    path.add(new paper.Point(canvas.offsetWidth/2 + 80, 1170)); //8
    path.add(new paper.Point(canvas.offsetWidth - 65, canvas.offsetHeight - 125)); //9
    path.add(new paper.Point(canvas.offsetWidth - 30, canvas.offsetHeight)); //10
    path.add(new paper.Point(canvas.offsetWidth, canvas.offsetHeight)); //11
    path.add(new paper.Point(canvas.offsetWidth, canvas.offsetHeight/2)); //12
    // path.closed = true;
    // path.selected = true;
    path.smooth()

    // lightblue path
    var path1 = new paper.Path();
    path1.fillColor = DarkGreen;
    path1.add(new paper.Point(canvas.offsetWidth, 45)); //1
    path1.add(new paper.Point(canvas.offsetWidth - 145, 200)); //2
    path1.add(new paper.Point(canvas.offsetWidth - 130, 400)); //3
    path1.add(new paper.Point(canvas.offsetWidth/2 + 35, 505)); //4
    path1.add(new paper.Point(80, 600)); //5
    path1.add(new paper.Point(70, 790)); //6
    path1.add(new paper.Point(200, 950)); //7
    path1.add(new paper.Point(canvas.offsetWidth - 90, 1100)); //8
    path1.add(new paper.Point(canvas.offsetWidth - 15, canvas.offsetHeight - 125)); //9
    path1.add(new paper.Point(canvas.offsetWidth, canvas.offsetHeight - 30)); //11
    path1.add(new paper.Point(canvas.offsetWidth, canvas.offsetHeight/2)); //12
    path1.smooth()
    // path1.selected = true;

    paper.view.draw();
}

// Only executed our code once the DOM is ready.
window.onload = function() {
    if (window.matchMedia("(max-width: 400px)").matches) {
        console.log('here we go')
    } else {
        console.log('here we go1')
    }

    drawOnCategories()
    drawOnCategoriesBigRightCurve()
    drawOnCategoriesBigLeftCurve()

    drawOnIncomes()

    drawOnChooseUsBigLeftCurve()

    drawOurWorks()

    drawOnOurContactsBigRightCurve()
}