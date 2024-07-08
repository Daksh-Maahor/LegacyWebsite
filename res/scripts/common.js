const menu_button = document.getElementById('menu_bar');
const not_menu_bar = document.getElementById('display_text');
const side_bar = document.getElementsByClassName('side_bar')[0];

function show_menu_bar() {
    //alert('go to hell');
    not_menu_bar.classList.add('hide');
    menu_button.classList.add('hide');
    side_bar.classList.add('side_bar_show');
}

function back() {
    not_menu_bar.classList.remove('hide');
    menu_button.classList.remove('hide');
    side_bar.classList.remove('side_bar_show');
}

menu_button.onclick = show_menu_bar;

