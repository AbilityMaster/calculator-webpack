export const Box = (params) => {
    const { className, classNames, width } = params;

    const box = document.createElement('div');

    if (classNames) {
        classNames.forEach((value) => {
            box.classList.add(value);
        });
    }

    if (className) {
        box.classList.add(className);
    }

    box.style.width = `${width}px`;

    return box;
};
