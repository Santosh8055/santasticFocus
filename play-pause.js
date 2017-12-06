window.addEventListener('focus', function () {
    document.getElementsByTagName('video')[0].play()
});

window.addEventListener('blur', function () {
    document.getElementsByTagName('video')[0].pause();
});