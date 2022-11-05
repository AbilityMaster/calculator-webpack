export const Box = (params) => {
    const { className, classNames, width } = params;

    const box = document.createElement('div');

    if (classNames) {
        classNames.forEach((value) => {
            box.classList.add(value);
        });
    }

    box.style.width = `${width}px`;
    box.classList.add(className);

    return box;
};
