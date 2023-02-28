export const stringToArray = (string: string) => {
    let array = [],
        length = string.length,
        index = 0;

    for (; index < length; ++index) {
        array.push(string[index]);
    }

    return array;
};
