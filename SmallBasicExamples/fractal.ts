GraphicsWindow.Height = 800;
GraphicsWindow.Width = 800;
GraphicsWindow.BackgroundColor = "Black";
var x = 100;
var y = 100;

for (var i = 1; i < 100000; i++) {
    var r = Math.round(Math.random() * 2) + 1;
    var ux = 150
    var uy = 30

    if (r == 1) {
        ux = 30;
        uy = 1000;
    }

    if (r == 2) {
        ux = 1000;
        uy = 1000;
    }

    x = (x + ux) / 2;
    y = (y + uy) / 2;

    GraphicsWindow.SetPixel(x, y, "LightGreen")
}
