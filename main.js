const input = document.getElementById('progress');
const animateCheckbox = document.getElementById('animate');
const hiddenCheckbox = document.getElementById('hidden');

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
    if(hiddenCheckbox.checked) {
        myProgressBar.hide(true);
    } else {
        myProgressBar.hide(false);
    }
}

input.addEventListener('change', changeProgress);
animateCheckbox.addEventListener('change', animateRotation);
hiddenCheckbox.addEventListener('change', changeVisibility);






