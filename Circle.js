const Circle = function() {
    this._pathTemplate =
        'M 0, 16' +
        ' a 16,16 0 1,1 32,0' +
        ' a 16,16 0 1,1 -32,0';

    const _circleConfig = {
        circle: {
            d: this._pathTemplate,
            fill: 'none',
            strokeLinecap: 'butt',
            stroke: 'seagreen',
            strokeWidth: '3px',
            strokeDasharray: '100 100',
            strokeDashoffset: '33',
        },
        circleContainer: {
            d: this._pathTemplate,
            fill: 'none',
            stroke: 'gainsboro',
            strokeWidth: '3px'
        },
        svgStyle: {
            width: '300px',
            height: '300px',
        }
    }

    let svgView = this._initializeSvg(_circleConfig.svgStyle);
    let circleContainer = this._createElement('path', _circleConfig.circleContainer);

    this.circle = this._createElement('path', _circleConfig.circle);

    svgView.append(circleContainer, this.circle);

    this.animateCircleProgress = new Animate(this.circle);
    let animateCircle = new Animate(this.circle);
    animateCircle.rotate(this.circle);
}


Circle.prototype._createElement = function (node, props) {
    node = document.createElementNS('http://www.w3.org/2000/svg', node);

    for (let elem in props) {
        node.setAttributeNS(null, elem.replace(/[A-Z]/g, function (m) { return "-" + m.toLowerCase(); }), props[elem]);
    }

    return node;
}

Circle.prototype._initializeSvg = function (opt) {
    let svg = this._createElement('svg', opt);
    svg.setAttribute("viewBox", "2 -2 30 40");
    svg.style.transform = 'rotate(90deg)';

    document.body.appendChild(svg);

    return svg;
}

Circle.prototype.getStrokeDashoffset = function() {
    return this._strokeDashoffset;
}

Circle.prototype.setStrokeDashoffset = function(value) {
    if(value <= 100 && value >= 0) {
        this._strokeDashoffset = 100-value;
        this.animateCircleProgress.animateProgress(this.circle, 100-value);
    }
}
