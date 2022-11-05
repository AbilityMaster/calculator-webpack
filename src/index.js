import { Calculator } from './components/Calculator';

import { BUTTONS } from './constants/buttons';

import './styles/main.sass';

const calculator = new Calculator({
    displayInitValue: 0,
    buttons: BUTTONS,
    width: 544,
    buttonSize: {
        height: 50,
    },
    countOfColumns: 4,
});

const component = calculator.render();

document.querySelector('body').appendChild(component);
