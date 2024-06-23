const display = document.getElementById("main_text");
const intro = document.getElementById("intro");

const leftLogo = intro.querySelector(".intro_logo_left_show");
const rightLogo = intro.querySelector(".intro_logo_right_show");

function max_opacity() {
    document.getElementsByTagName('body')[0].style.opacity = '1';
    display.style.opacity = '1';
}

function display_items() {
    intro.style.display = 'none';
    display.style.display = 'initial';
    document.getElementsByTagName('body')[0].style.display = 'block';
    setTimeout(max_opacity, 100);
}

function startIntro() {
    //alert("Now");

    leftLogo.classList.add('intro_logo_left_hide');
    rightLogo.classList.add('intro_logo_right_hide')

    setTimeout(display_items, 5000);
}

leftLogo.classList.add('intro_logo_left_show');
rightLogo.classList.add('intro_logo_right_show');
setTimeout(startIntro, 2000);
