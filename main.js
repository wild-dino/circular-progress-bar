const Circle = function () {
    const _circleConfig = {
        circle: {
            r: "16",
            cx: "16",
            cy: "16",
            fill: 'none',
            strokeLinecap: 'butt',
            stroke: 'seagreen',
            strokeWidth: '3px',
            strokeDasharray: '100 100',
            animation: 'fill 3s ease-in-out',
            strokeDashoffset: "20",
        },
        circleContainer: {
            r: "16",
            cx: "16",
            cy: "16",
            fill: 'none',
            stroke: 'gainsboro',
            strokeWidth: '3px'
        },
        svgStyle: {
            width: '100%',
            height: '50vh',
        }
    }

    let svgView = this._initializeSvg(_circleConfig.svgStyle);


    let circleContainer = this._createElement('circle', _circleConfig.circleContainer);
    let circle = this._createElement('circle', _circleConfig.circle);

    svgView.append(circleContainer, circle);
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
    svg.setAttribute("viewBox", "2 -3 30 40");
    svg.style.transform = 'rotate(-90deg)';

    document.body.appendChild(svg);

    return svg;
}


const myCircle = new Circle();
