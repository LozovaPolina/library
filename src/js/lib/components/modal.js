import $ from "../core";

$.prototype.modal = function () {
    const scroll = calcScroll();
    for (let i = 0; i < this.length; i++) {
        const target = $(this[i]).getAttr('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`
        });
    }
    function calcScroll() {
        let div = document.createElement('div');

        div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }
    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(item => {
        $(item).click(() => {
            $('.modal').fadeOut(500);
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.marginRight = `${0}px`
            }, 500);
        });
    });
    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.marginRight = `${0}px`
            }, 500);
        }
    })
};

$('[data-toggle="modal"]').modal();