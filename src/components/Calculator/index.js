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

        this.state = {
            secondOperand: '',
            firstOperand: '',
            result: 0,
            operation: null,
            lastActionType: null,
        };

        this.buttonSize = buttonSize;
        this.buttons = buttons;
        this.countOfColumns = countOfColumns;
        this.width = width;

        this.$calculator = Box({
            className: 'calculator',
            width,
        });

        this.onClickButton = this.onClickButton.bind(this);
    }

    setState(data, callBack) {
        this.state = {
            ...this.state,
            ...data,
        };

        if (callBack) {
            callBack();
        }
    }

    clear() {
        this.setState({
            secondOperand: '',
            firstOperand: '',
            result: 0,
            operation: null,
            lastActionType: null,
        }, () => {
            this.updateDisplay(0);
        });
    }

    calculate(firstOperand, secondOperand) {
        const {
            result,
            operation,
        } = this.state;
        firstOperand = result ? result : firstOperand;

        this.setState({
            result: firstOperand ? parseFloat(firstOperand) : 0,
        });
        secondOperand = secondOperand ? parseFloat(secondOperand) : 0;

        switch (operation) {
            case OPERATIONS.PLUS:
                this.setState({
                    result: this.state.result + secondOperand,
                }, () => {
                    this.updateDisplay(this.state.result);
                });

                return this.displayValue;
            case OPERATIONS.MINUS:
                this.setState({
                    result: this.state.result - secondOperand,
                }, () => {
                    this.updateDisplay(this.state.result);
                });

                return this.displayValue;
            case OPERATIONS.MULTIPLE:
                this.setState({
                    result: this.state.result * secondOperand,
                }, () => {
                    this.updateDisplay(this.state.result);
                });

                return this.displayValue;
            case OPERATIONS.DIVIDE:
                this.setState({
                    result: this.state.result / secondOperand,
                }, () => {
                    this.updateDisplay(this.state.result);
                });

                return this.displayValue;
            case OPERATIONS.PERCENT:
                this.setState({
                    result: secondOperand / 100,
                }, () => {
                    this.updateDisplay(this.state.result);
                });

                return this.displayValue;
            case OPERATIONS.SQRT:
                this.setState({
                    result: Math.sqrt(secondOperand),
                }, () => {
                    this.updateDisplay(this.state.result);
                });

                return this.displayValue;
            case OPERATIONS.SQUARE:
                this.setState({
                    result: Math.pow(secondOperand, 2),
                }, () => {
                    this.updateDisplay(this.state.result);
                });

                return this.displayValue;
            case OPERATIONS.DIVIDE_BY_ONE:
                this.setState({
                    result: 1 / secondOperand,
                }, () => {
                    this.updateDisplay(this.state.result);
                });

                return this.displayValue;
            case OPERATIONS.CE:
                this.setState({
                    secondOperand: 0,
                }, () => {
                    this.updateDisplay(0);
                });

                return;
            case OPERATIONS.CLEAR:
                this.clear();

                return;
            case OPERATIONS.BACKSPACE:
                return this.makeBackSpace();
            default:
                return;
        }
    }

    onClickButton(event) {
        switch (event.target.dataset.type) {
            case BUTTON_TYPE.NUMBER: {
                const {
                    secondOperand,
                    result,
                    firstOperand,
                    lastActionType,
                    operation,
                } = this.state;

                if (lastActionType === BUTTON_TYPE.OPERATION && result) {
                    this.setState({
                        firstOperand: result,
                        result: '',
                        secondOperand: `${event.target.dataset.value}`,
                    }, () => {
                        this.updateDisplay(this.state.secondOperand);
                    });

                    return;
                }

                if (operation) {
                    this.setState({
                        secondOperand: `${secondOperand}${event.target.dataset.value}`,
                    }, () => {
                        this.updateDisplay(this.state.secondOperand);
                    });

                    return;
                }

                this.setState({
                    firstOperand: `${firstOperand}${event.target.dataset.value}`,
                    lastActionType: BUTTON_TYPE.NUMBER,
                }, () => {
                    this.updateDisplay(this.state.firstOperand);
                });

                return;
            }
            case BUTTON_TYPE.DISPLAY_HELPER: {
                this.setState({
                    operation: event.target.dataset.value,
                });

                this.calculate();

                return;
            }
            case BUTTON_TYPE.OPERATION: {
                const {
                    result,
                    firstOperand,
                    operation,
                    secondOperand,
                } = this.state;

                if (event.target.dataset.value === OPERATIONS.RESULT) {
                    const _firstOperand = operation === OPERATIONS.RESULT ? result : firstOperand;

                    this.calculate(_firstOperand, secondOperand);

                    return;
                }

                this.setState({
                    lastActionType: BUTTON_TYPE.OPERATION,
                    operation: event.target.dataset.value,
                });

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
