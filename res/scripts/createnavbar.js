/**  NOt IMPLemennetd yet **/

const upperDiv = document.getElementById('upper');

const tabsleft = document.createElement('div');
tabsleft.classList.add('navbar');
tabsleft.id = 'tabs_left';
tabsleft.style.order = '0';

const homeLink = document.createElement('a');
homeLink.href = 'main.html';
homeLink.innerHTML = 'Home';

const teamLink = document.createElement('a');
teamLink.href = 'team.html';
teamLink.target = '_blank';
teamLink.innerHTML = 'The Team';

const galleryLink = document.createElement('a');
galleryLink.href = 'gallery.html';
galleryLink.target = '_blank';
galleryLink.innerHTML = 'Archive';

tabsleft.appendChild(homeLink);
tabsleft.appendChild(teamLink);
tabsleft.appendChild(galleryLink);

const img = document.createElement('img');
img.src = '../res/images/logo.png';
img.alt = 'LEGACY 6.0';
img.id = 'logo_title';
img.style.order = '1';

const tabsright = document.createElement('div');
tabsleft.classList.add('navbar');
tabsleft.id = 'tabs_right';
tabsleft.style.order = '2';

const registerLink = document.createElement('a');
registerLink.href = 'https://forms.gle/DwpZi1tPa2v7YER8A';
registerLink.target = '_blank';
registerLink.innerHTML = 'Register Here';

const contactLink = document.createElement('a');
contactLink.href = '';
contactLink.target = '_blank';
contactLink.innerHTML = 'Contact Us';

const eventsLink = document.createElement('a');
eventsLink.href = 'events.html';
eventsLink.target = '_blank';
eventsLink.innerHTML = 'Events';

tabsright.appendChild(registerLink);
tabsright.appendChild(contactLink);
tabsright.appendChild(eventsLink);


upperDiv.appendChild(tabsleft);
upperDiv.appendChild(img);
upperDiv.appendChild(tabsright);

