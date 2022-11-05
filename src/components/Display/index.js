import { Box } from '../Box';

import './style.sass';

export class Display {
    constructor(params) {
        const { displayInitValue } = params;

        this.displayValue = displayInitValue;
        this.$display = null;
    }

    updateDisplayValue(value) {
        this.displayValue = value;
    }

    makeBackSpace() {
        if (!this.displayValue) {
            return;
        }

        const result = this.displayValue.substring(0, this.displayValue.length - 1);

        if (!result) {
            return '0';
        }

        return result;
    }

    createDisplay() {
        const box = Box({
            className: 'display',
        });

        box.textContent = this.displayValue;

        this.$display = box;
    }

    updateDisplay(value) {
        this.updateDisplayValue(value);
        this.$display.innerText = value;
    }
}
