class Botao {
    constructor(texto, x, y, buttonClass, onMousePressed, centerH, centerV) {
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.buttonClass = buttonClass;
        this.onMousePressed = onMousePressed;
        this.background = background;

        this.elemento = createButton(this.texto);
        this.elemento.addClass(buttonClass);
        this.elemento.mousePressed(() => {
            this.onMousePressed(this);
        });
        this.elemento.position(this.x, this.y);

        if (centerH != null)
            this.elemento.center('horizontal');
        
        if (centerV != null)
            this.elemento.center('vertical');
    }

    remove() {
        this.elemento.remove();
    }

    ocultar() {
        this.elemento.addClass('hidden');
    }

    exibir() {
        this.elemento.removeClass('hidden');
    }
}