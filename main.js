let input = document.getElementById('progress');

let myCircle = new Circle(); 

const doThing = () => {
    myCircle.setStrokeDashoffset(input.value);
}


input.addEventListener('change', doThing);






