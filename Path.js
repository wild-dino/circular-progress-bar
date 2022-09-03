const Animate = function () {
    this._animateConfig = {
        attributeName: "transform",
        type: "rotate",
        from: "0 16 16",
        to: "360 16 16",
        dur: "2s",
        repeatCount: "indefinite"
    }
}

Animate.prototype.animateProgress = function animateProgress(path, value) {
    let length = path.getTotalLength();

    path.style.transition = path.style.WebkitTransition =
    'stroke-dashoffset 2s ease-in-out';

    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = value;

    path.getBoundingClientRect();
    path.style.strokeDashoffset = value;
}

Animate.prototype.rotate = function rotate(path) {
    let start = false;
    if (start) {
        let animateTransform = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");

        for (let elem in this._animateConfig) {
            animateTransform.setAttributeNS(null, elem, this._animateConfig[elem]);
        }

        path.appendChild(animateTransform);
        animateTransform.beginElement();
    }
}

