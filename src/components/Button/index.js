import { Box } from '../Box';

import './style.sass';

class Button {
    constructor(params) {
        const {
            type,
            value,
            width,
            onClick,
            buttonSize = {
                width: 60,
                height: 30,
            },
        } = params;

        this.width = width;
        this.type = type;
        this.value = value;
        this.onClick = onClick;
        this.buttonSize = buttonSize;
    }

    createButton() {
        const button = Box({
            classNames: ['button', `button_${this.type}`],
            width: this.width,
        });

        const { height = 30, width = 60 } = this.buttonSize;

        button.style.height = `${height}px`;
        button.style.width = `${width}px`;
        button.dataset.type = this.type;
        button.dataset.value = this.value;
        button.onclick = this.onClick;

        button.textContent = this.value;

        return button;
    }
}

export default Button;
