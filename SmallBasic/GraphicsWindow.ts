module SmallBasic {
    export var GetGraphicsWindowCanvas = () => {
        var canvas = <HTMLCanvasElement>document.getElementById("GraphicsWindow");
        if (canvas == null) {
            canvas = <HTMLCanvasElement>document.createElement('canvas');
            document.body.insertBefore(canvas, document.body.firstChild);
        }
        console.log(canvas);
        return canvas;
    }

    export class GraphicsWindow extends SmallJavaScript.GraphicsArea {
        constructor() {
            super(null);
        }
        protected get Canvas(): HTMLCanvasElement {
            if (this._canvas == null) {
                this._canvas = GetGraphicsWindowCanvas();
            }
            return this._canvas;
        }
    }

}

var GraphicsWindow = new SmallBasic.GraphicsWindow();