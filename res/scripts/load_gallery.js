const num_imgs = 15;


const body = document.getElementById('body');

for (let i = 0; i <= Math.floor(num_imgs / 2); i++) {
    let section_element = document.createElement('section');
    //section_element.className = 'hidden';

    if (2*i >= num_imgs) {
        break;
    }

    let img_element = document.createElement('img');
    img_element.src = '../res/images/archive/IMG_'+(2*i)+'.jpg';
    img_element.alt = 'IMG_'+(2*i);
    img_element.id = 'Archive_IMG';
    img_element.className = 'hiddenLeft';

    if (2*i+1 >= num_imgs) {
        section_element.appendChild(img_element);
        body.append(section_element);
        break;
    }

    let img_element2 = document.createElement('img');
    img_element2.src = '../res/images/archive/IMG_'+(2*i+1)+'.jpg';
    img_element2.alt = 'IMG_'+(2*i+1);
    img_element2.id = 'Archive_IMG';
    img_element2.className = 'hiddenRight';

    section_element.appendChild(img_element);
    section_element.appendChild(img_element2);
    body.append(section_element);
}
