const observer = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            console.log('intersection');
        } else {
            entry.target.classList.remove('show');
            console.log('intersection gone');
        }
    })
});
const observerLeft = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showLeft');
        } else {
            entry.target.classList.remove('showLeft');
        }
    })
});
const observerRight = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showRight');
        } else {
            entry.target.classList.remove('showRight');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
hiddenElementsRight.forEach((el) => observerRight.observe(el));

