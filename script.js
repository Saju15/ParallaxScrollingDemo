let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountBehind = document.getElementById('mountains_behind');
let mountFront = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function() {
    let val = this.window.scrollY;
    stars.style.left = val * 0.25 + 'px';
    moon.style.top = val * 1.15 + 'px';
    mountBehind.style.top = val * 0.25 + 'px';
    text.style.marginRight = val * 4 + 'px';
    text.style.marginTop = val * 1.25 + 'px';
    btn.style.marginTop = val * 1.25 + 'px';

})
