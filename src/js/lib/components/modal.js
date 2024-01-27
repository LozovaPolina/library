import $ from "../core";

$.prototype.modal = function (created) {
    const scroll = calcScroll();
    for (let i = 0; i < this.length; i++) {
        const target = $(this[i]).getAttr('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(item => {
            $(item).click(() => {
                $(target).fadeOut(500);
                setTimeout(() => {
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `${0}px`;
                    if (created) {
                        document.querySelector(target).remove();
                    }
                }, 500);
            });
        });
        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                setTimeout(() => {
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `${0}px`;
                    if (created) {
                        document.querySelector(target).remove();
                    }
                }, 500);
            }
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
   

};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function ({ text, btns } = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // btns ={count: num, settings: [[text, classNames = [], close, cb]]}
        const buttons = [];
        for (let j = 0; j < btns.count; j++) {
            let [text, classNames, close, cb] = btns.settings[j];
            let btn = document.createElement('button');
            btn.classList.add('btn', ...classNames);
            btn.textContent = text;
            if (close) {
                btn.setAttribute('data-close', 'true');
            }
            if (cb && typeof (cb) === 'function') {
                btn.addEventListener('click', cb);
            }
            buttons.push(btn);
        }
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="madal-title">${text.title}</div>
                    </div>
                    <div class="modal-body">${text.body}</div>
                    <div class="modal-footer">

                    </div>
                </div>
            </div>
            `;
        modal.querySelector('.modal-footer').append(...buttons);
        document.body.append(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};