import $ from "jquery";
import {stringToArray} from "./stringToArray";

export const splitText = (dataInfo: string) => {
    let context = $(`[${dataInfo}]`),
        contents = context.text(),
        letters = stringToArray(contents),
        markup = '';

    letters.forEach(function (letter) {
        markup += '<span>' + letter + '</span>';
    });

    context.html(markup);
};
