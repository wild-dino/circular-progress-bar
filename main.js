let input = document.getElementById('progress');
let checkbox = document.getElementById('animate');

let myCircle = new Circle(); 

const doThing = () => {
    myCircle.setStrokeDashoffset(input.value);
}

const animateRotation = () => {
    if(checkbox.checked) {
        myCircle.runRotate(true);
    } else {
        myCircle.runRotate(false);
    }
}

input.addEventListener('change', doThing);
checkbox.addEventListener('change', animateRotation)






