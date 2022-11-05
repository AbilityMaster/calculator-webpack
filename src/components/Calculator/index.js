import { Display } from '../Display';

import { Box } from '../Box';
import Button from '../Button';

import { OPERATIONS } from '../../constants/operations';
import { BUTTON_TYPE } from '../../constants/buttonType';
import { BUTTONS_GAP_SIZE_IN_PX } from '../../constants/buttons';

import './style.sass';

export class Calculator extends Display {
    constructor(params) {
        super(params);
        const { width, buttons, countOfColumns, buttonSize = {} } = params;

        this.buttonSize = buttonSize;
        this.buttons = buttons;
        this.countOfColumns = countOfColumns;
        this.width = width;
        this.firstOperand = '';
        this.secondOperand = '';
        this.result = 0;
        this.operation = null;
        this.lastActionType = null;
        this.$calculator = Box({
            className: 'calculator',
            width,
        });

        this.onClickButton = this.onClickButton.bind(this);
    }

    logLastAction(value) {
        this.lastActionType = value;
    }

    updateResult(value) {
        this.result = value;
    }

    updateOperation(value) {
        this.operation = value;
    }

    updateFirstOperand(value) {
        this.firstOperand = value;
    }

    updateSecondOperand(value) {
        this.secondOperand = value;
    }

    clear() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.result = 0;
        this.operation = null;
        this.lastActionType = null;
    }

    getResult(firstOperand, secondOperand) {
        firstOperand = this.result ? this.result : firstOperand;

        this.result = firstOperand ? parseFloat(firstOperand) : 0;
        secondOperand = secondOperand ? parseFloat(secondOperand) : 0;

        switch (this.operation) {
            case OPERATIONS.PLUS:
                this.result += secondOperand;
                this.updateDisplayValue(this.result);

                return this.displayValue;
            case OPERATIONS.MINUS:
                this.result -= secondOperand;
                this.updateDisplayValue(this.result);

                return this.displayValue;
            case OPERATIONS.MULTIPLE:
                this.result *= secondOperand;
                this.updateDisplayValue(this.result);

                return this.displayValue;
            case OPERATIONS.DIVIDE:
                this.result /= secondOperand;
                this.updateDisplayValue(this.result);

                return this.displayValue;
            case OPERATIONS.PERCENT:
                this.result = secondOperand / 100;
                this.updateDisplayValue(this.result);

                return this.displayValue;
            case OPERATIONS.SQRT:
                this.result = Math.sqrt(secondOperand);
                this.updateDisplayValue(this.result);

                return this.displayValue;
            case OPERATIONS.SQUARE:
                this.result = Math.pow(secondOperand, 2);
                this.updateDisplayValue(this.result);

                return this.displayValue;
            case OPERATIONS.DIVIDE_BY_ONE:
                this.result = 1 / secondOperand;
                this.updateDisplayValue(this.result);

                return this.displayValue;
            case OPERATIONS.CE:
                this.updateSecondOperand(0);
                this.updateDisplayValue(this.result);

                return;
            case OPERATIONS.CLEAR:
                this.clear();
                this.updateDisplayValue('');

                return '';
            case OPERATIONS.BACKSPACE:
                return this.makeBackSpace();
            default:
                return;
        }
    }

    onClickButton(event) {
        switch (event.target.dataset.type) {
            case BUTTON_TYPE.NUMBER: {
                if (this.lastActionType === BUTTON_TYPE.OPERATION && this.result) {
                    this.updateFirstOperand(this.result);
                    this.updateResult('');

                    const value = `${event.target.dataset.value}`;

                    this.updateSecondOperand(value);
                    this.updateDisplay(this.secondOperand);

                    return;
                }

                if (this.operation) {
                    const value = `${this.secondOperand}${event.target.dataset.value}`;

                    this.updateSecondOperand(value);
                    this.updateDisplay(this.secondOperand);

                    return;
                }

                const value = `${this.firstOperand}${event.target.dataset.value}`;

                this.updateFirstOperand(value);
                this.updateDisplay(this.firstOperand);

                this.logLastAction(BUTTON_TYPE.NUMBER);

                return;
            }
            case BUTTON_TYPE.DISPLAY_HELPER: {
                this.updateOperation(event.target.dataset.value);

                const result = this.getResult();

                this.updateDisplay(result);

                return;
            }
            case BUTTON_TYPE.OPERATION: {
                if (event.target.dataset.value === OPERATIONS.RESULT) {
                    const firstOperand =
                        this.operation === OPERATIONS.RESULT ? this.result : this.firstOperand;

                    const result = this.getResult(firstOperand, this.secondOperand);

                    this.updateDisplay(result);

                    return;
                }

                this.logLastAction(BUTTON_TYPE.OPERATION);
                this.updateOperation(event.target.dataset.value);

                return;
            }
            default: {
                console.error('Unknown Button Type!!!');
                return;
            }
        }
    }

    createButtons() {
        this.$buttons = Box({
            className: 'calculator__buttons',
        });

        const buttons = this.buttons.map((item) => {
            const button = new Button({
                type: item.type,
                value: item.value,
                onClick: this.onClickButton,
                buttonSize: {
                    width: this.buttonSize.width
                        ? this.buttonSize.width
                        : (this.width - BUTTONS_GAP_SIZE_IN_PX) / this.countOfColumns,
                    height: this.buttonSize.height,
                },
            });

            return button.createButton();
        });

        this.$buttons.append(...buttons);
    }

    render() {
        this.createDisplay();
        this.$calculator.append(this.$display);

        this.createButtons();
        this.$calculator.append(this.$buttons);

        return this.$calculator;
    }
}
