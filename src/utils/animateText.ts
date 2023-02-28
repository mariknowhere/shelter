import $ from "jquery";

export const animateText = (dataInfo: string) => {
    let context = $(`[${dataInfo}]`),
        delay = 5000;

    context.children().each(function (index, letter) {
        setTimeout(function () {
            $(letter).addClass('is-visible');
        }, delay * (index / 15));
    });
};
