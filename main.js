const input = document.getElementById('progress');
const animateCheckbox = document.getElementById('animate');
const hideCheckbox = document.getElementById('hidden');

let myProgressBar = new CircularProgressBar(); 

const changeProgress = () => {
    myProgressBar.setProgress(input.value);
}

const animateRotation = () => {
    if(animateCheckbox.checked) {
        myProgressBar.runRotate(true);
    } else {
        myProgressBar.runRotate(false);
    }
}

const changeVisibility = () => {
    if(hideCheckbox.checked) {
        myProgressBar.hide(true);
    } else {
        myProgressBar.hide(false);
    }
}

input.addEventListener('change', changeProgress);
animateCheckbox.addEventListener('change', animateRotation);
hideCheckbox.addEventListener('change', changeVisibility);






