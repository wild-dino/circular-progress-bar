const CircularProgressBar = function () {
    this._animateConfig = {
        attributeName: "transform",
        type: "rotate",
        from: "0 16 16",
        to: "360 16 16",
        dur: "2s",
        repeatCount: "indefinite"
    }

    this._circleConfig = {
        circle: {
            d: 'M 0, 16 a 16,16 0 1,1 32,0 a 16,16 0 1,1 -32,0',
            fill: 'none',
            strokeLinecap: 'butt',
            stroke: '#005BFF',
            strokeWidth: '3px',
            strokeDasharray: '100 100',
            strokeDashoffset: '33',
        },
        circleContainer: {
            d: 'M 0, 16 a 16,16 0 1,1 32,0 a 16,16 0 1,1 -32,0',
            fill: 'none',
            stroke: 'gainsboro',
            strokeWidth: '3px'
        },
        svgStyle: {
            width: '200px',
            height: '200px',
        }
    }

    let element = document.querySelector('.progress');

    this._svgView = this._initializeSvg(this._circleConfig.svgStyle);
    
    let circleContainer = this._createElement('path', this._circleConfig.circleContainer);
    this._circle = this._createElement('path', this._circleConfig.circle);

    this._svgView.prepend(circleContainer, this._circle);
    element.prepend(this._svgView);
}


CircularProgressBar.prototype._createElement = function(node, props) {
    node = document.createElementNS('http://www.w3.org/2000/svg', node);

    for (let elem in props) {
        node.setAttributeNS(null, elem.replace(/[A-Z]/g, function (m) { return "-" + m.toLowerCase(); }), props[elem]);
    }

    return node;
}

CircularProgressBar.prototype._initializeSvg = function (opt) {
    let svg = this._createElement('svg', opt);
    svg.setAttribute("viewBox", "2 -4 28 40");
    svg.style.transform = 'rotate(90deg)';
    svg.style.alignSelf = 'center';
    svg.style.justifySelf = 'center';

    document.body.prepend(svg);

    return svg;
}

CircularProgressBar.prototype._animateProgress = function(path, value) {
    let length = path.getTotalLength();

    path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 1s ease-in-out';

    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = value;

    path.getBoundingClientRect();
    path.style.strokeDashoffset = value;
}

CircularProgressBar.prototype._rotate = function(path, animate) {
    let animateTransform = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");

    if (animate) {
        for (let elem in this._animateConfig) {
            animateTransform.setAttributeNS(null, elem, this._animateConfig[elem]);
        }

        path.appendChild(animateTransform);
        animateTransform.beginElement();

    } else {
        path.removeChild(path.firstElementChild)
    }
}


CircularProgressBar.prototype.setProgress = function (value) {
    if (value <= 100 && value >= 0) {
        this._animateProgress(this._circle, 100 - value);
    }
}

CircularProgressBar.prototype.runRotate = function (animate) {
    this._rotate(this._circle, animate);
}

CircularProgressBar.prototype.hide = function (visible) {
    if (visible) {
        this._svgView.style.height = 0;
    } else {
        this._svgView.style.height = this._circleConfig.svgStyle.height;
    }
}