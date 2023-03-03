import $ from "jquery";

export const animateText = (dataInfo: string, delay: number) => {
    let context = $(`[${dataInfo}]`);

    context.children().each(function (index, letter) {
        setTimeout(function () {
            $(letter).addClass('is-visible');
        }, delay * (index / 15));
    });
};
