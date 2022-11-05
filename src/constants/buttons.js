import { BUTTON_TYPE } from './buttonType';
import { OPERATIONS } from './operations';

export const BUTTONS_GAP_SIZE_IN_PX = 3;

export const BUTTONS = [
    {
        type: BUTTON_TYPE.OPERATION,
        value: OPERATIONS.PERCENT,
    },
    {
        type: BUTTON_TYPE.OPERATION,
        value: OPERATIONS.SQRT,
    },
    {
        type: BUTTON_TYPE.OPERATION,
        value: OPERATIONS.SQUARE,
    },
    {
        type: BUTTON_TYPE.OPERATION,
        value: OPERATIONS.DIVIDE_BY_ONE,
    },
    {
        type: BUTTON_TYPE.DISPLAY_HELPER,
        value: OPERATIONS.CE,
    },
    {
        type: BUTTON_TYPE.DISPLAY_HELPER,
        value: OPERATIONS.CLEAR,
    },
    {
        type: BUTTON_TYPE.DISPLAY_HELPER,
        value: OPERATIONS.BACKSPACE,
    },
    {
        type: BUTTON_TYPE.OPERATION,
        value: OPERATIONS.DIVIDE,
    },
    {
        type: BUTTON_TYPE.NUMBER,
        value: '7',
    },
    {
        type: BUTTON_TYPE.NUMBER,
        value: '8',
    },
    {
        type: BUTTON_TYPE.NUMBER,
        value: '9',
    },
    {
        type: BUTTON_TYPE.OPERATION,
        value: OPERATIONS.MULTIPLE,
    },
    {
        type: BUTTON_TYPE.NUMBER,
        value: '4',
    },
    {
        type: BUTTON_TYPE.NUMBER,
        value: '5',
    },
    {
        type: BUTTON_TYPE.NUMBER,
        value: '6',
    },
    {
        type: BUTTON_TYPE.OPERATION,
        value: OPERATIONS.MINUS,
    },
    {
        type: BUTTON_TYPE.NUMBER,
        value: '1',
    },
    {
        type: BUTTON_TYPE.NUMBER,
        value: '2',
    },
    {
        type: BUTTON_TYPE.NUMBER,
        value: '3',
    },
    {
        type: BUTTON_TYPE.OPERATION,
        value: OPERATIONS.PLUS,
    },
    {
        type: BUTTON_TYPE.OPERATION,
        value: OPERATIONS.PLUS_MINUS,
    },
    {
        type: BUTTON_TYPE.NUMBER,
        value: '0',
    },
    {
        type: BUTTON_TYPE.DISPLAY_HELPER,
        value: OPERATIONS.POINT,
    },
    {
        type: BUTTON_TYPE.OPERATION,
        value: OPERATIONS.RESULT,
    },
];
