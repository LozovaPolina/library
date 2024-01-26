import $ from "../core";


$.prototype.setAttr = function (attributeName, value = '') {
    if (attributeName == '' || !attributeName) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            this[i].setAttribute(attributeName, value);
        } else {
            continue;
        }
        
    }
    return this;
};
$.prototype.removeAttr = function (attributeName) {
    if (!attributeName) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        if (this[i].getAttribute(attributeName)) {
            this[i].removeAttribute(attributeName);
        } else {
            continue;
        }
    }
    return this;
};
$.prototype.getAttr = function (attributeName) {
    if (!attributeName) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            continue;
        }
        return this[i].getAttribute(attributeName);
    }
};

$.prototype.toggleAttr = function (attributeName, value = '') {
    if (attributeName == '' || !attributeName) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attributeName)) {
            this[i].removeAttribute(attributeName);
        } else {
            this[i].setAttribute(attributeName, value);
        }
    }
    return this;
};

